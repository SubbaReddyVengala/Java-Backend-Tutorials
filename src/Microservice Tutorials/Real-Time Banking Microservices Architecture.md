# Real-Time Banking Microservices Architecture

## A Comprehensive Tutorial with Real-World Case Studies

----------

## Table of Contents

1.  Introduction & Core Concepts
2.  Architecture Overview
3.  Microservices Deep Dive
4.  Real-World Case Study
5.  Implementation Examples
6.  Communication Patterns
7.  Data Management
8.  Security & Compliance

----------

## 1. Introduction & Core Concepts {#introduction}

### What is Microservices Architecture?

**Analogy: The Restaurant Kitchen** Imagine a traditional monolithic application as a single chef doing everything - taking orders, cooking, serving, billing. Now imagine a microservices architecture as a modern restaurant:

-   **Order Service** = Waiter taking orders
-   **Kitchen Service** = Chef cooking
-   **Payment Service** = Cashier handling bills
-   **Notification Service** = Manager calling your number

Each person (service) is an expert in their domain and works independently!

### Why Microservices for Banking?

**Memory Visualization:**

```
MONOLITHIC BANK (Old Way)
┌─────────────────────────────┐
│  ┌─────────────────────┐   │
│  │  All Banking Code   │   │ ← One crash = Everything down
│  │  (100,000+ lines)   │   │ ← Hard to update
│  └─────────────────────┘   │ ← Slow deployment
└─────────────────────────────┘

MICROSERVICES BANK (New Way)
┌────────┐ ┌────────┐ ┌────────┐
│Account │ │Payment │ │Loan    │ ← Independent services
│Service │ │Service │ │Service │ ← Easy to scale
└────────┘ └────────┘ └────────┘ ← Isolated failures
```

----------

## 2. Architecture Overview 

### Complete Banking System Architecture

```
                         ┌─────────────────┐
                         │   API Gateway   │
                         │  (Entry Point)  │
                         └────────┬────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
        ┌───────▼───────┐ ┌──────▼──────┐ ┌───────▼───────┐
        │   Account     │ │   Payment   │ │  Transaction  │
        │   Service     │ │   Service   │ │   Service     │
        └───────┬───────┘ └──────┬──────┘ └───────┬───────┘
                │                 │                 │
        ┌───────▼───────┐ ┌──────▼──────┐ ┌───────▼───────┐
        │   Account     │ │   Payment   │ │  Transaction  │
        │   Database    │ │   Database  │ │   Database    │
        └───────────────┘ └─────────────┘ └───────────────┘

Additional Services:
├── Authentication Service (Identity & Access)
├── Notification Service (SMS/Email/Push)
├── Fraud Detection Service (Real-time monitoring)
├── Analytics Service (Reports & Insights)
└── Audit Service (Compliance & Logging)
```

----------

## 3. Microservices Deep Dive 

### Service 1: Account Service

**Purpose:** Manages customer accounts, profiles, and account operations

**Analogy:** Think of this as the **Bank's Registration Office** - where your identity and account details are maintained.

**Responsibilities:**

-   Create/Update/Delete accounts
-   Account information retrieval
-   Account status management (active/frozen/closed)
-   KYC (Know Your Customer) verification

**Database Schema:**

sql

```sql
CREATE TABLE accounts (
    account_id VARCHAR(20) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    account_type ENUM('savings', 'current', 'fixed_deposit'),
    balance DECIMAL(15,2) DEFAULT 0.00,
    currency VARCHAR(3) DEFAULT 'USD',
    status ENUM('active', 'frozen', 'closed'),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE customers (
    customer_id VARCHAR(20) PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20),
    date_of_birth DATE,
    kyc_status ENUM('pending', 'verified', 'rejected'),
    created_at TIMESTAMP
);
```

**API Endpoints:**

```
POST   /api/v1/accounts                 # Create new account
GET    /api/v1/accounts/{accountId}     # Get account details
PUT    /api/v1/accounts/{accountId}     # Update account
DELETE /api/v1/accounts/{accountId}     # Close account
GET    /api/v1/accounts/customer/{customerId}  # Get all accounts for customer
PATCH  /api/v1/accounts/{accountId}/status     # Change account status
```

**Example Implementation (Spring Boot):**

java

```java
@RestController
@RequestMapping("/api/v1/accounts")
public class AccountController {
    
    @Autowired
    private AccountService accountService;
    
    @PostMapping
    public ResponseEntity<AccountResponse> createAccount(
            @RequestBody @Valid CreateAccountRequest request) {
        
        Account account = accountService.createAccount(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(AccountResponse.from(account));
    }
    
    @GetMapping("/{accountId}")
    public ResponseEntity<AccountResponse> getAccount(
            @PathVariable String accountId) {
        
        Account account = accountService.getAccountById(accountId);
        return ResponseEntity.ok(AccountResponse.from(account));
    }
}

@Service
public class AccountService {
    
    @Autowired
    private AccountRepository accountRepository;
    
    @Autowired
    private EventPublisher eventPublisher;
    
    @Transactional
    public Account createAccount(CreateAccountRequest request) {
        // Validate customer
        validateCustomer(request.getCustomerId());
        
        // Generate account number
        String accountNumber = generateAccountNumber();
        
        // Create account
        Account account = Account.builder()
                .accountId(accountNumber)
                .customerId(request.getCustomerId())
                .accountType(request.getAccountType())
                .balance(BigDecimal.ZERO)
                .status(AccountStatus.ACTIVE)
                .build();
        
        Account savedAccount = accountRepository.save(account);
        
        // Publish event for other services
        eventPublisher.publish(new AccountCreatedEvent(savedAccount));
        
        return savedAccount;
    }
}
```

----------

### Service 2: Payment Service

**Purpose:** Handles all payment operations and transactions

**Analogy:** This is like the **Bank's Payment Counter** - where money actually moves between accounts.

**Responsibilities:**

-   Process payments (P2P, bill payments, merchant payments)
-   Handle different payment methods (UPI, NEFT, RTGS, IMPS)
-   Payment scheduling
-   Refund processing
-   Payment gateway integration

**Database Schema:**

sql

```sql
CREATE TABLE payments (
    payment_id VARCHAR(36) PRIMARY KEY,
    from_account VARCHAR(20) NOT NULL,
    to_account VARCHAR(20),
    amount DECIMAL(15,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',
    payment_type ENUM('p2p', 'bill', 'merchant', 'international'),
    payment_method ENUM('upi', 'neft', 'rtgs', 'imps', 'card'),
    status ENUM('pending', 'processing', 'completed', 'failed', 'refunded'),
    reference_number VARCHAR(50) UNIQUE,
    description VARCHAR(255),
    scheduled_at TIMESTAMP NULL,
    processed_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payment_methods (
    method_id VARCHAR(36) PRIMARY KEY,
    customer_id VARCHAR(20) NOT NULL,
    method_type ENUM('card', 'upi', 'bank_account'),
    is_default BOOLEAN DEFAULT FALSE,
    details JSON,  -- Encrypted card/UPI details
    created_at TIMESTAMP
);
```

**Transaction Flow Visualization:**

```
Payment Initiation Flow:
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│  Client  │────▶│ Payment  │────▶│ Account  │────▶│  Fraud   │
│          │     │ Service  │     │ Service  │     │Detection │
└──────────┘     └────┬─────┘     └──────────┘     └──────────┘
                      │                                   │
                      │         ┌──────────┐             │
                      └────────▶│Transaction│◀────────────┘
                                │  Service  │
                                └─────┬─────┘
                                      │
                                ┌─────▼─────┐
                                │Notification│
                                │  Service  │
                                └───────────┘
```

**Example Implementation:**

java

```java
@Service
public class PaymentService {
    
    @Autowired
    private PaymentRepository paymentRepository;
    
    @Autowired
    private AccountServiceClient accountServiceClient;
    
    @Autowired
    private FraudDetectionClient fraudDetectionClient;
    
    @Autowired
    private TransactionService transactionService;
    
    @Transactional
    public PaymentResponse processPayment(PaymentRequest request) {
        
        // Step 1: Create payment record
        Payment payment = Payment.builder()
                .paymentId(UUID.randomUUID().toString())
                .fromAccount(request.getFromAccount())
                .toAccount(request.getToAccount())
                .amount(request.getAmount())
                .paymentType(request.getPaymentType())
                .status(PaymentStatus.PENDING)
                .build();
        
        payment = paymentRepository.save(payment);
        
        try {
            // Step 2: Fraud detection
            FraudCheckResponse fraudCheck = fraudDetectionClient
                    .checkTransaction(payment);
            
            if (fraudCheck.isHighRisk()) {
                payment.setStatus(PaymentStatus.FAILED);
                payment.setFailureReason("Fraud detection triggered");
                paymentRepository.save(payment);
                throw new FraudDetectedException("Payment blocked");
            }
            
            // Step 3: Verify account balance
            AccountBalance balance = accountServiceClient
                    .getBalance(request.getFromAccount());
            
            if (balance.getAvailableBalance()
                    .compareTo(request.getAmount()) < 0) {
                payment.setStatus(PaymentStatus.FAILED);
                payment.setFailureReason("Insufficient balance");
                paymentRepository.save(payment);
                throw new InsufficientBalanceException();
            }
            
            // Step 4: Process transaction
            payment.setStatus(PaymentStatus.PROCESSING);
            paymentRepository.save(payment);
            
            TransactionResult result = transactionService
                    .executeTransaction(payment);
            
            // Step 5: Update payment status
            payment.setStatus(PaymentStatus.COMPLETED);
            payment.setProcessedAt(LocalDateTime.now());
            payment.setReferenceNumber(result.getReferenceNumber());
            
            return PaymentResponse.from(paymentRepository.save(payment));
            
        } catch (Exception e) {
            payment.setStatus(PaymentStatus.FAILED);
            payment.setFailureReason(e.getMessage());
            paymentRepository.save(payment);
            throw e;
        }
    }
}
```

----------

### Service 3: Transaction Service

**Purpose:** Manages all financial transactions and ensures ACID properties

**Analogy:** This is the **Double-Entry Bookkeeper** - ensuring every debit has a credit and all books balance.

**Key Concept - ACID Properties:**

```
A - Atomicity:   Either complete all steps or none (no partial transactions)
C - Consistency: Account balances must always be correct
I - Isolation:   Concurrent transactions don't interfere
D - Durability:  Once committed, transaction is permanent
```

**Database Schema:**

sql

```sql
CREATE TABLE transactions (
    transaction_id VARCHAR(36) PRIMARY KEY,
    payment_id VARCHAR(36),
    transaction_type ENUM('debit', 'credit', 'transfer'),
    account_id VARCHAR(20) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    balance_after DECIMAL(15,2) NOT NULL,
    status ENUM('pending', 'completed', 'rolled_back'),
    reference_number VARCHAR(50),
    metadata JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (payment_id) REFERENCES payments(payment_id),
    INDEX idx_account_date (account_id, created_at),
    INDEX idx_reference (reference_number)
);

CREATE TABLE transaction_locks (
    lock_id VARCHAR(36) PRIMARY KEY,
    account_id VARCHAR(20) NOT NULL,
    locked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP,
    lock_holder VARCHAR(100),
    
    UNIQUE KEY uk_account (account_id)
);
```

**Distributed Transaction Pattern (Saga Pattern):**

```
Transfer $100 from Account A to Account B:

Step 1: Lock Account A          Step 2: Lock Account B
   │                                │
   ├─▶ Debit $100 from A           ├─▶ Credit $100 to B
   │                                │
   └─▶ If fails, rollback          └─▶ If fails, rollback both

Compensation Pattern:
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Debit A     │────▶│ Credit B    │────▶│ Complete    │
│ SUCCESS     │     │ SUCCESS     │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           │ FAIL
                           ▼
                    ┌─────────────┐
                    │ Credit A    │ ← Compensating transaction
                    │ (Rollback)  │
                    └─────────────┘
```

**Implementation with Saga Pattern:**

java

```java
@Service
public class TransactionService {
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    @Autowired
    private DistributedLockService lockService;
    
    public TransactionResult executeTransaction(Payment payment) {
        
        String fromAccount = payment.getFromAccount();
        String toAccount = payment.getToAccount();
        BigDecimal amount = payment.getAmount();
        
        // Acquire locks (to prevent concurrent modifications)
        DistributedLock lockA = lockService.acquireLock(fromAccount);
        DistributedLock lockB = lockService.acquireLock(toAccount);
        
        try {
            // Step 1: Debit from source account
            Transaction debitTxn = debitAccount(
                fromAccount, amount, payment.getPaymentId()
            );
            
            try {
                // Step 2: Credit to destination account
                Transaction creditTxn = creditAccount(
                    toAccount, amount, payment.getPaymentId()
                );
                
                // Both successful - commit
                return TransactionResult.success(
                    debitTxn, creditTxn
                );
                
            } catch (Exception e) {
                // Step 2 failed - compensate step 1
                compensateDebit(debitTxn);
                throw new TransactionFailedException(
                    "Credit failed, transaction rolled back", e
                );
            }
            
        } finally {
            // Always release locks
            lockService.releaseLock(lockB);
            lockService.releaseLock(lockA);
        }
    }
    
    @Transactional
    private Transaction debitAccount(
            String accountId, 
            BigDecimal amount, 
            String paymentId) {
        
        // Get current balance with row-level lock
        AccountBalance balance = accountRepository
                .findByIdForUpdate(accountId);
        
        BigDecimal newBalance = balance.getBalance().subtract(amount);
        
        if (newBalance.compareTo(BigDecimal.ZERO) < 0) {
            throw new InsufficientBalanceException();
        }
        
        // Update balance
        accountRepository.updateBalance(accountId, newBalance);
        
        // Create transaction record
        Transaction transaction = Transaction.builder()
                .transactionId(UUID.randomUUID().toString())
                .paymentId(paymentId)
                .transactionType(TransactionType.DEBIT)
                .accountId(accountId)
                .amount(amount)
                .balanceAfter(newBalance)
                .status(TransactionStatus.COMPLETED)
                .build();
        
        return transactionRepository.save(transaction);
    }
    
    @Transactional
    private void compensateDebit(Transaction debitTxn) {
        // Reverse the debit by crediting back
        creditAccount(
            debitTxn.getAccountId(),
            debitTxn.getAmount(),
            debitTxn.getPaymentId()
        );
        
        // Mark original transaction as rolled back
        debitTxn.setStatus(TransactionStatus.ROLLED_BACK);
        transactionRepository.save(debitTxn);
    }
}
```

----------

### Service 4: Authentication & Authorization Service

**Purpose:** Manages user identity, authentication, and access control

**Analogy:** This is the **Bank's Security Guard** - checking who you are and what you're allowed to do.

**Key Components:**

-   **Authentication**: Who are you? (Login with credentials)
-   **Authorization**: What can you do? (Permissions & roles)
-   **Token Management**: Session handling (JWT tokens)

**Security Flow:**

```
Login Flow:
┌────────┐     ┌──────────┐     ┌─────────┐     ┌──────────┐
│ User   │────▶│  Auth    │────▶│ User DB │────▶│   JWT    │
│        │     │ Service  │     │         │     │  Token   │
└────────┘     └────┬─────┘     └─────────┘     └────┬─────┘
                    │                                  │
                    │         Token (15 min expiry)    │
                    └──────────────────────────────────┘
                    
Subsequent API Calls:
┌────────┐     ┌──────────┐     ┌──────────┐
│ Client │────▶│   API    │────▶│  Payment │
│ + JWT  │     │ Gateway  │     │  Service │
└────────┘     └────┬─────┘     └──────────┘
                    │
                    ▼ Verify Token
             ┌──────────┐
             │   Auth   │
             │ Service  │
             └──────────┘
```

**Database Schema:**

sql

```sql
CREATE TABLE users (
    user_id VARCHAR(36) PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    failed_login_attempts INT DEFAULT 0,
    last_login TIMESTAMP,
    created_at TIMESTAMP
);

CREATE TABLE roles (
    role_id VARCHAR(36) PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE permissions (
    permission_id VARCHAR(36) PRIMARY KEY,
    resource VARCHAR(100) NOT NULL,
    action ENUM('create', 'read', 'update', 'delete') NOT NULL,
    UNIQUE KEY uk_resource_action (resource, action)
);

CREATE TABLE user_roles (
    user_id VARCHAR(36),
    role_id VARCHAR(36),
    PRIMARY KEY (user_id, role_id)
);

CREATE TABLE role_permissions (
    role_id VARCHAR(36),
    permission_id VARCHAR(36),
    PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE refresh_tokens (
    token_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    token VARCHAR(512) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user (user_id),
    INDEX idx_token (token)
);
```

**Implementation:**

java

```java
@Service
public class AuthenticationService {
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private JwtTokenProvider tokenProvider;
    
    @Autowired
    private PasswordEncoder passwordEncoder;
    
    public AuthenticationResponse login(LoginRequest request) {
        
        // Find user
        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new InvalidCredentialsException());
        
        // Check if account is locked
        if (user.getFailedLoginAttempts() >= 5) {
            throw new AccountLockedException(
                "Account locked due to multiple failed attempts"
            );
        }
        
        // Verify password
        if (!passwordEncoder.matches(
                request.getPassword(), 
                user.getPasswordHash())) {
            
            // Increment failed attempts
            user.setFailedLoginAttempts(
                user.getFailedLoginAttempts() + 1
            );
            userRepository.save(user);
            
            throw new InvalidCredentialsException();
        }
        
        // Reset failed attempts on successful login
        user.setFailedLoginAttempts(0);
        user.setLastLogin(LocalDateTime.now());
        userRepository.save(user);
        
        // Generate tokens
        String accessToken = tokenProvider.generateAccessToken(user);
        String refreshToken = tokenProvider.generateRefreshToken(user);
        
        // Store refresh token
        saveRefreshToken(user.getId(), refreshToken);
        
        return AuthenticationResponse.builder()
                .accessToken(accessToken)
                .refreshToken(refreshToken)
                .tokenType("Bearer")
                .expiresIn(900) // 15 minutes
                .build();
    }
}

@Component
public class JwtTokenProvider {
    
    @Value("${jwt.secret}")
    private String jwtSecret;
    
    @Value("${jwt.expiration}")
    private long jwtExpiration;
    
    public String generateAccessToken(User user) {
        
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpiration);
        
        // Load user roles and permissions
        Set<String> permissions = getPermissions(user);
        
        return Jwts.builder()
                .setSubject(user.getId())
                .claim("username", user.getUsername())
                .claim("email", user.getEmail())
                .claim("permissions", permissions)
                .setIssuedAt(now)
                .setExpirationAt(expiryDate)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();
    }
    
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            return false;
        }
    }
}
```

----------

### Service 5: Notification Service

**Purpose:** Sends notifications through multiple channels (SMS, Email, Push, In-App)

**Analogy:** This is the **Bank's Communication Department** - keeping customers informed about their account activities.

**Notification Types:**

```
Transaction Notifications:
├── Payment successful
├── Payment failed
├── Money received
└── Low balance alert

Security Notifications:
├── Login from new device
├── Password changed
├── Account settings modified
└── Suspicious activity detected

Promotional Notifications:
├── New features
├── Offers and promotions
└── Account statements
```

**Architecture Pattern - Event-Driven:**

```
Event Publishers                Message Queue              Notification Service
┌──────────┐                   ┌──────────┐               ┌──────────┐
│ Payment  │──────────────────▶│  Kafka/  │──────────────▶│  SMS     │
│ Service  │  PaymentEvent     │ RabbitMQ │               │ Provider │
└──────────┘                   └──────────┘               └──────────┘
                                     │                     ┌──────────┐
┌──────────┐                         │                     │  Email   │
│  Auth    │──────────────────────────┼────────────────────▶ Provider │
│ Service  │  LoginEvent              │                     └──────────┘
└──────────┘                          │                     ┌──────────┐
                                      │                     │   Push   │
┌──────────┐                          └────────────────────▶│Notification│
│ Account  │  AccountEvent                                  └──────────┘
│ Service  │
└──────────┘
```

**Database Schema:**

sql

```sql
CREATE TABLE notification_templates (
    template_id VARCHAR(36) PRIMARY KEY,
    template_name VARCHAR(100) UNIQUE NOT NULL,
    channel ENUM('sms', 'email', 'push', 'in_app') NOT NULL,
    subject VARCHAR(200),  -- For email
    body_template TEXT NOT NULL,  -- With placeholders: {amount}, {account}
    created_at TIMESTAMP
);

CREATE TABLE notifications (
    notification_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    template_id VARCHAR(36),
    channel ENUM('sms', 'email', 'push', 'in_app') NOT NULL,
    recipient VARCHAR(255) NOT NULL,  -- phone/email/device_token
    subject VARCHAR(200),
    body TEXT NOT NULL,
    status ENUM('pending', 'sent', 'delivered', 'failed') DEFAULT 'pending',
    sent_at TIMESTAMP NULL,
    delivered_at TIMESTAMP NULL,
    failed_reason TEXT,
    retry_count INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_user_date (user_id, created_at),
    INDEX idx_status (status)
);

CREATE TABLE user_preferences (
    user_id VARCHAR(36) PRIMARY KEY,
    sms_enabled BOOLEAN DEFAULT TRUE,
    email_enabled BOOLEAN DEFAULT TRUE,
    push_enabled BOOLEAN DEFAULT TRUE,
    transaction_alerts BOOLEAN DEFAULT TRUE,
    security_alerts BOOLEAN DEFAULT TRUE,
    promotional_alerts BOOLEAN DEFAULT FALSE
);
```

**Implementation:**

java

```java
@Service
public class NotificationService {
    
    @Autowired
    private NotificationRepository notificationRepository;
    
    @Autowired
    private TemplateService templateService;
    
    @Autowired
    private Map<String, NotificationProvider> providers;
    
    @Autowired
    private UserPreferenceService preferenceService;
    
    @KafkaListener(topics = "payment-events")
    public void handlePaymentEvent(PaymentEvent event) {
        
        // Check user preferences
        UserPreferences prefs = preferenceService
                .getPreferences(event.getUserId());
        
        if (!prefs.isTransactionAlertsEnabled()) {
            return;  // User opted out
        }
        
        // Prepare notification
        Map<String, String> variables = Map.of(
            "amount", event.getAmount().toString(),
            "account", maskAccount(event.getAccountNumber()),
            "timestamp", event.getTimestamp().toString()
        );
        
        // Send via multiple channels
        if (prefs.isSmsEnabled()) {
            sendSMS(event.getUserId(), "payment-success", variables);
        }
        
        if (prefs.isEmailEnabled()) {
            sendEmail(event.getUserId(), "payment-success", variables);
        }
        
        if (prefs.isPushEnabled()) {
            sendPushNotification(
                event.getUserId(), 
                "payment-success", 
                variables
            );
        }
    }
    
    private void sendSMS(
            String userId, 
            String templateName, 
            Map<String, String> variables) {
        
        // Get template
        NotificationTemplate template = templateService
                .getTemplate(templateName, Channel.SMS);
        
        // Render message
        String message = templateService.render(
            template.getBodyTemplate(), 
            variables
        );
        
        // Get user phone
        String phone = getUserPhone(userId);
        
        // Create notification record
        Notification notification = Notification.builder()
                .notificationId(UUID.randomUUID().toString())
                .userId(userId)
                .templateId(template.getTemplateId())
                .channel(Channel.SMS)
                .recipient(phone)
                .body(message)
                .status(NotificationStatus.PENDING)
                .build();
        
        notification = notificationRepository.save(notification);
        
        // Send asynchronously
        CompletableFuture.runAsync(() -> {
            try {
                NotificationProvider smsProvider = 
                    providers.get("smsProvider");
                
                smsProvider.send(phone, message);
                
                notification.setStatus(NotificationStatus.SENT);
                notification.setSentAt(LocalDateTime.now());
                
            } catch (Exception e) {
                notification.setStatus(NotificationStatus.FAILED);
                notification.setFailedReason(e.getMessage());
            }
            
            notificationRepository.save(notification);
        });
    }
}

// SMS Provider Interface
public interface NotificationProvider {
    void send(String recipient, String message) throws Exception;
}

@Component("smsProvider")
public class TwilioSMSProvider implements NotificationProvider {
    
    @Value("${twilio.account.sid}")
    private String accountSid;
    
    @Value("${twilio.auth.token}")
    private String authToken;
    
    @Value("${twilio.phone.number}")
    private String fromNumber;
    
    @Override
    public void send(String recipient, String message) throws Exception {
        
        Twilio.init(accountSid, authToken);
        
        Message.creator(
            new PhoneNumber(recipient),
            new PhoneNumber(fromNumber),
            message
        ).create();
    }
}
```

----------

### Service 6: Fraud Detection Service

**Purpose:** Real-time fraud detection and prevention

**Analogy:** This is the **Bank's Security AI** - constantly watching for suspicious patterns like a digital detective.

**Detection Techniques:**

1.  **Rule-Based Detection:**

```
IF transaction_amount > daily_limit THEN flag
IF login_from_new_country AND no_travel_notification THEN block
IF multiple_failed_attempts IN 5_minutes THEN lock
IF transaction_amount > 10x_average THEN require_otp
```

2.  **Machine Learning Models:**

```
Features for ML Model:
├── Transaction amount
├── Time of day
├── Day of week
├── Location (IP/GPS)
├── Device fingerprint
├── Historical patterns
├── Merchant category
└── Recipient history

Risk Score: 0-100
├── 0-30: Low risk (auto-approve)
├── 31-60: Medium risk (send OTP)
├── 61-80: High risk (manual review)
└── 81-100: Critical (block transaction)
```

**Database Schema:**

sql

```sql
CREATE TABLE fraud_rules (
    rule_id VARCHAR(36) PRIMARY KEY,
    rule_name VARCHAR(100) NOT NULL,
    rule_type ENUM('amount_threshold', 'velocity', 'location', 'device') NOT NULL,
    condition_json JSON NOT NULL,
    action ENUM('flag', 'block', 'require_otp', 'manual_review') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP
);

CREATE TABLE fraud_checks (
    check_id VARCHAR(36) PRIMARY KEY,
    payment_id VARCHAR(36),
    user_id VARCHAR(36) NOT NULL,
    risk_score INT NOT NULL,  -- 0-100
    risk_level ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    triggered_rules JSON,  -- Array of rule IDs
    device_fingerprint VARCHAR(255),
    ip_address VARCHAR(45),
    location_data JSON,
    ml_features JSON,
    decision ENUM('approved', 'rejected', 'pending_review') NOT NULL,
    checked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_user_date (user_id, checked_at),
    INDEX idx_payment (payment_id)
);

CREATE TABLE suspicious_activities (
    activity_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    activity_type VARCHAR(100) NOT NULL,
    description TEXT,
    severity ENUM('low', 'medium', 'high', 'critical') NOT NULL,
    status ENUM('new', 'investigating', 'resolved', 'false_positive') DEFAULT 'new',
    detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP NULL,
    
    INDEX idx_user_status (user_id, status),
    INDEX idx_severity (severity, status)
);
```

**Implementation:**

java

```java
@Service
public class FraudDetectionService {
    
    @Autowired
    private FraudCheckRepository fraudCheckRepository;
    
    @Autowired
    private FraudRuleEngine ruleEngine;
    
    @Autowired
    private MLFraudModel mlModel;
    
    @Autowired
    private UserBehaviorAnalyzer behaviorAnalyzer;
    
    public FraudCheckResult checkTransaction(Payment payment) {
        
        // Collect features
        FraudFeatures features = collectFeatures(payment);
        
        // Rule-based checks
        List<TriggeredRule> triggeredRules = 
            ruleEngine.evaluate(features);
        
        // ML model prediction
        int mlRiskScore = mlModel.predict(features);
        
        // Behavioral analysis
        BehaviorAnalysis behavior = 
            behaviorAnalyzer.analyze(payment.getUserId(), features);
        
        // Calculate final risk score
        int finalRiskScore = calculateRiskScore(
            mlRiskScore, 
            triggeredRules, 
            behavior
        );
        
        RiskLevel riskLevel = determineRiskLevel(finalRiskScore);
        
        // Make decision
        FraudDecision decision = makeDecision(
            riskLevel, 
            triggeredRules
        );
        
        // Save fraud check
        FraudCheck check = FraudCheck.builder()
                .checkId(UUID.randomUUID().toString())
                .paymentId(payment.getPaymentId())
                .userId(payment.getUserId())
                .riskScore(finalRiskScore)
                .riskLevel(riskLevel)
                .triggeredRules(triggeredRules)
                .decision(decision)
                .build();
        
        fraudCheckRepository.save(check);
        
        // Create alert for high-risk transactions
        if (riskLevel == RiskLevel.HIGH || 
            riskLevel == RiskLevel.CRITICAL) {
            createSuspiciousActivityAlert(check);
        }
        
        return FraudCheckResult.from(check);
    }
    
    private FraudFeatures collectFeatures(Payment payment) {
        
        User user = userRepository.findById(payment.getUserId());
        
        // Get historical data
        List<Payment> recentPayments = paymentRepository
                .findRecentByUser(payment.getUserId(), 30);  // Last 30 days
        
        // Calculate statistics
        BigDecimal avgAmount = calculateAverageAmount(recentPayments);
        BigDecimal maxAmount = calculateMaxAmount(recentPayments);
        int transactionCount = recentPayments.size();
        
        // Get device info
        DeviceInfo device = getDeviceInfo(payment.getDeviceId());
        
        // Get location info
        LocationInfo location = getLocationInfo(payment.getIpAddress());
        
        return FraudFeatures.builder()
                .transactionAmount(payment.getAmount())
                .averageAmount(avgAmount)
                .maxAmount(maxAmount)
                .deviationFromAverage(
                    payment.getAmount().subtract(avgAmount)
                )
                .hourOfDay(LocalDateTime.now().getHour())
                .dayOfWeek(LocalDateTime.now().getDayOfWeek().getValue())
                .isWeekend(isWeekend())
                .country(location.getCountry())
                .city(location.getCity())
                .isVpn(location.isVpn())
                .deviceTrusted(device.isTrusted())
                .deviceNew(device.isNew())
                .userAccountAge(user.getAccountAgeDays())
                .recipientKnown(isRecipientKnown(
                    payment.getUserId(), 
                    payment.getToAccount()
                ))
                .transactionVelocity(calculateVelocity(user.getId()))
                .build();
    }
}

@Component
public class FraudRuleEngine {
    
    @Autowired
    private FraudRuleRepository ruleRepository;
    
    public List<TriggeredRule> evaluate(FraudFeatures features) {
        
        List<FraudRule> activeRules = ruleRepository.findByIsActive(true);
        List<TriggeredRule> triggered = new ArrayList<>();
        
        for (FraudRule rule : activeRules) {
            if (evaluateRule(rule, features)) {
                triggered.add(new TriggeredRule(rule, features));
            }
        }
        
        return triggered;
    }
    
    private boolean evaluateRule(FraudRule rule, FraudFeatures features) {
        
        switch (rule.getRuleType()) {
            case AMOUNT_THRESHOLD:
                return features.getTransactionAmount()
                    .compareTo(rule.getThresholdAmount()) > 0;
                
            case VELOCITY:
                // Multiple transactions in short time
                return features.getTransactionVelocity() > 
                       rule.getVelocityThreshold();
                
            case LOCATION:
                // Transaction from unusual location
                return !features.getCountry()
                    .equals(features.getUserHomeCountry());
                
            case DEVICE:
                // New or untrusted device
                return !features.isDeviceTrusted() || 
                       features.isDeviceNew();
                
            case TIME:
                // Unusual time of transaction
                int hour = features.getHourOfDay();
                return hour >= 2 && hour <= 5;  // 2 AM - 5 AM
                
            default:
                return false;
        }
    }
}

@Component
public class MLFraudModel {
    
    // In production, this would load a trained ML model
    // For example: TensorFlow, scikit-learn, etc.
    
    public int predict(FraudFeatures features) {
        
        // Feature normalization
        double[] normalizedFeatures = normalize(features);
        
        // Model prediction (simplified)
        // In reality: return model.predict(normalizedFeatures);
        
        int baseScore = 0;
        
        // Amount deviation
        if (features.getDeviationFromAverage()
                .compareTo(features.getAverageAmount()) > 0) {
            baseScore += 30;
        }
        
        // New device
        if (features.isDeviceNew()) {
            baseScore += 20;
        }
        
        // VPN usage
        if (features.isVpn()) {
            baseScore += 15;
        }
        
        // Unknown recipient
        if (!features.isRecipientKnown()) {
            baseScore += 15;
        }
        
        // High velocity
        if (features.getTransactionVelocity() > 5) {
            baseScore += 20;
        }
        
        return Math.min(baseScore, 100);
    }
}
```

----------

### Service 7: Analytics & Reporting Service

**Purpose:** Provides insights, reports, and data analytics

**Analogy:** This is the **Bank's Business Intelligence Team** - turning raw data into actionable insights.

**Key Features:**

```
User Analytics:
├── Account summary
├── Spending patterns
├── Category-wise expenses
├── Monthly comparisons
└── Savings goals tracking

Admin Analytics:
├── Transaction volumes
├── Revenue metrics
├── User growth
├── Fraud statistics
└── System performance
```

**Database Schema:**

sql

```sql
CREATE TABLE transaction_summary (
    summary_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    period_type ENUM('daily', 'weekly', 'monthly', 'yearly') NOT NULL,
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    total_transactions INT DEFAULT 0,
    total_debits DECIMAL(15,2) DEFAULT 0.00,
    total_credits DECIMAL(15,2) DEFAULT 0.00,
    largest_transaction DECIMAL(15,2) DEFAULT 0.00,
    most_frequent_category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    UNIQUE KEY uk_user_period (user_id, period_type, period_start),
    INDEX idx_period (period_type, period_start)
);

CREATE TABLE spending_categories (
    category_id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    month DATE NOT NULL,
    amount DECIMAL(15,2) DEFAULT 0.00,
    transaction_count INT DEFAULT 0,
    percentage DECIMAL(5,2),  -- Percentage of total spending
    
    INDEX idx_user_month (user_id, month)
);

CREATE TABLE system_metrics (
    metric_id VARCHAR(36) PRIMARY KEY,
    metric_name VARCHAR(100) NOT NULL,
    metric_value DECIMAL(15,2) NOT NULL,
    metric_unit VARCHAR(20),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_name_time (metric_name, timestamp)
);
```

**Implementation:**

java

```java
@Service
public class AnalyticsService {
    
    @Autowired
    private TransactionRepository transactionRepository;
    
    @Autowired
    private AnalyticsRepository analyticsRepository;
    
    public UserSpendingReport generateSpendingReport(
            String userId, 
            YearMonth month) {
        
        LocalDate startDate = month.atDay(1);
        LocalDate endDate = month.atEndOfMonth();
        
        // Get all transactions for the period
        List<Transaction> transactions = transactionRepository
                .findByUserIdAndDateRange(userId, startDate, endDate);
        
        // Calculate totals
        BigDecimal totalSpent = transactions.stream()
                .filter(t -> t.getType() == TransactionType.DEBIT)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        BigDecimal totalReceived = transactions.stream()
                .filter(t -> t.getType() == TransactionType.CREDIT)
                .map(Transaction::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        // Category-wise breakdown
        Map<String, CategorySpending> categoryBreakdown = 
            transactions.stream()
                .filter(t -> t.getType() == TransactionType.DEBIT)
                .collect(Collectors.groupingBy(
                    Transaction::getCategory,
                    Collectors.collectingAndThen(
                        Collectors.toList(),
                        list -> new CategorySpending(
                            list.size(),
                            list.stream()
                                .map(Transaction::getAmount)
                                .reduce(BigDecimal.ZERO, BigDecimal::add)
                        )
                    )
                ));
        
        // Top merchants
        List<MerchantSpending> topMerchants = transactions.stream()
                .filter(t -> t.getType() == TransactionType.DEBIT)
                .collect(Collectors.groupingBy(
                    Transaction::getMerchant,
                    Collectors.summingDouble(
                        t -> t.getAmount().doubleValue()
                    )
                ))
                .entrySet().stream()
                .map(e -> new MerchantSpending(
                    e.getKey(), 
                    BigDecimal.valueOf(e.getValue())
                ))
                .sorted(Comparator.comparing(
                    MerchantSpending::getAmount).reversed()
                )
                .limit(10)
                .collect(Collectors.toList());
        
        // Compare with previous month
        YearMonth previousMonth = month.minusMonths(1);
        BigDecimal previousMonthSpending = 
            getTotalSpending(userId, previousMonth);
        
        BigDecimal change = totalSpent.subtract(previousMonthSpending);
        BigDecimal percentageChange = previousMonthSpending
                .compareTo(BigDecimal.ZERO) == 0 ? BigDecimal.ZERO :
                change.divide(previousMonthSpending, 2, RoundingMode.HALF_UP)
                      .multiply(BigDecimal.valueOf(100));
        
        return UserSpendingReport.builder()
                .userId(userId)
                .month(month)
                .totalSpent(totalSpent)
                .totalReceived(totalReceived)
                .netChange(totalReceived.subtract(totalSpent))
                .categoryBreakdown(categoryBreakdown)
                .topMerchants(topMerchants)
                .transactionCount(transactions.size())
                .previousMonthComparison(new MonthComparison(
                    previousMonthSpending,
                    change,
                    percentageChange
                ))
                .build();
    }
    
    // Batch job to pre-calculate analytics (runs daily)
    @Scheduled(cron = "0 0 2 * * *")  // 2 AM daily
    public void generateDailyAnalytics() {
        
        LocalDate yesterday = LocalDate.now().minusDays(1);
        
        List<String> allUsers = userRepository.findAllUserIds();
        
        for (String userId : allUsers) {
            try {
                TransactionSummary summary = 
                    calculateDailySummary(userId, yesterday);
                
                analyticsRepository.save(summary);
                
            } catch (Exception e) {
                log.error("Failed to generate analytics for user: {}", 
                         userId, e);
            }
        }
    }
}
```

----------

## 4. Real-World Case Study 

### Case Study: Global Bank's Digital Transformation

**Background:** MegaBank, a traditional bank with 10 million customers, needed to modernize from a monolithic system to microservices to handle:

-   100,000 concurrent users
-   50,000 transactions per second
-   99.99% uptime requirement
-   Global expansion to 15 countries

**Problem Statement:** The old monolithic system had:

1.  **Scalability Issues**: Entire system needed restart for updates
2.  **Single Point of Failure**: One bug crashed everything
3.  **Slow Development**: 6-month release cycles
4.  **Vendor Lock-in**: Tied to single technology stack

**Solution Architecture:**

```
Phase 1: Strangler Pattern (Months 1-6)
┌─────────────────────────────────────────┐
│      Legacy Monolith (80% traffic)      │
│                                          │
│  [Account] [Payment] [Loan] [Reports]  │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────▼─────────┐
         │   API Gateway     │
         │  (Traffic Split)  │
         └─────────┬─────────┘
                   │
         ┌─────────▼─────────┐
         │  New Microservices │
         │   (20% traffic)    │
         │                    │
         │  [Account Service] │
         │  [Payment Service] │
         └────────────────────┘

Phase 2: Full Migration (Months 7-18)
         ┌──────────────────┐
         │   API Gateway    │
         └────────┬─────────┘
                  │
      ┌───────────┼───────────┐
      │           │           │
┌─────▼────┐ ┌───▼────┐ ┌───▼────┐
│ Account  │ │Payment │ │ Fraud  │
│ Service  │ │Service │ │Service │
└──────────┘ └────────┘ └────────┘
```

**Implementation Results:**

**Week 1-2: Infrastructure Setup**

yaml

```yaml
# Kubernetes cluster configuration
apiVersion: v1
kind: Namespace
metadata:
  name: banking-services
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: account-service
  namespace: banking-services
spec:
  replicas: 5  # Start with 5 pods
  selector:
    matchLabels:
      app: account-service
  template:
    metadata:
      labels:
        app: account-service
    spec:
      containers:
      - name: account-service
        image: megabank/account-service:v1.0.0
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        env:
        - name: SPRING_DATASOURCE_URL
          valueFrom:
            secretKeyRef:
              name: db-secrets
              key: account-db-url
        livenessProbe:
          httpGet:
            path: /actuator/health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 20
          periodSeconds: 5
```

**Month 3: Traffic Split Testing**

```
Traffic Distribution:
Week 1:  95% Legacy, 5% Microservices   → Monitor errors
Week 2:  90% Legacy, 10% Microservices  → Collect metrics
Week 3:  80% Legacy, 20% Microservices  → Performance tuning
Week 4:  70% Legacy, 30% Microservices  → Capacity planning
```

**Real Incident: Payment Service Failure (Month 5)**

**Problem:** Payment service crashed during peak hours (5 PM on Friday) due to database connection pool exhaustion.

**Timeline:**

```
17:00 - Payment requests spike (10x normal)
17:03 - Database connections exhausted (max 100)
17:05 - Service starts failing (error rate 45%)
17:07 - Circuit breaker opens (blocks new requests)
17:10 - Auto-scaling triggered (5 → 15 pods)
17:15 - Database pool increased (100 → 300)
17:20 - Service recovery complete
```

**Root Cause:**

java

```java
// BEFORE (Problematic)
@Configuration
public class DatabaseConfig {
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setMaximumPoolSize(100);  // Too low!
        config.setConnectionTimeout(5000);  // 5 seconds
        return new HikariDataSource(config);
    }
}

// AFTER (Fixed)
@Configuration
public class DatabaseConfig {
    @Bean
    public DataSource dataSource() {
        HikariConfig config = new HikariConfig();
        config.setMaximumPoolSize(300);  // Increased
        config.setMinimumIdle(50);       // Pre-warmed
        config.setConnectionTimeout(30000);  // 30 seconds
        config.setIdleTimeout(600000);   // 10 minutes
        config.setMaxLifetime(1800000);  // 30 minutes
        
        // Connection leak detection
        config.setLeakDetectionThreshold(60000);  // 1 minute
        
        return new HikariDataSource(config);
    }
}
```

**Lessons Learned:**

1.  **Load Testing is Critical**: Should have tested with 20x normal load
2.  **Circuit Breakers Save Systems**: Prevented complete meltdown
3.  **Auto-scaling Works**: Kubernetes scaled pods automatically
4.  **Monitoring is Essential**: Detected issue in 3 minutes

**Final Results After 18 Months:**

```
Metric                  Before      After       Improvement
────────────────────────────────────────────────────────────
Deployment Time         6 months    2 hours     99.9%
System Uptime          99.5%       99.99%      +0.49%
Peak Transactions/sec   5,000       50,000      10x
Incident Recovery      2 hours     5 minutes   96%
Development Velocity   4 features  40 features 10x
Cost per Transaction   $0.15       $0.03       80% reduction
```

----------

## 5. Communication Patterns 

### Synchronous Communication (REST API)

**When to Use:** Real-time requests that need immediate response

**Example: Account Balance Check**

java

```java
@FeignClient(name = "account-service", url = "${account.service.url}")
public interface AccountServiceClient {
    
    @GetMapping("/api/v1/accounts/{accountId}/balance")
    AccountBalance getBalance(@PathVariable String accountId);
}

// Using the client
@Service
public class PaymentService {
    
    @Autowired
    private AccountServiceClient accountServiceClient;
    
    public void processPayment(PaymentRequest request) {
        // Synchronous call to account service
        AccountBalance balance = accountServiceClient
                .getBalance(request.getFromAccount());
        
        if (balance.getAvailableBalance()
                .compareTo(request.getAmount()) < 0) {
            throw new InsufficientBalanceException();
        }
        
        // Continue payment processing...
    }
}
```

**Problem: Service Dependency**

```
If Account Service is down:
Client → Payment Service → [X] Account Service (DOWN)
         ↓
     Payment FAILS (even though payment logic is working!)
```

**Solution: Circuit Breaker Pattern**

java

```java
@Service
public class PaymentService {
    
    @Autowired
    private AccountServiceClient accountServiceClient;
    
    @CircuitBreaker(name = "accountService", 
                   fallbackMethod = "getBalanceFallback")
    public AccountBalance getBalance(String accountId) {
        return accountServiceClient.getBalance(accountId);
    }
    
    // Fallback method when service is down
    private AccountBalance getBalanceFallback(
            String accountId, 
            Exception e) {
        
        log.warn("Account service unavailable, using cache", e);
        
        // Try cache
        return cacheService.getCachedBalance(accountId)
                .orElseThrow(() -> new ServiceUnavailableException(
                    "Account service temporarily unavailable"
                ));
    }
}

// Resilience4j configuration
resilience4j:
  circuitbreaker:
    instances:
      accountService:
        slidingWindowSize: 10
        failureRateThreshold: 50
        waitDurationInOpenState: 10000
        permittedNumberOfCallsInHalfOpenState: 3
```

----------

### Asynchronous Communication (Message Queue)

**When to Use:** Fire-and-forget operations, event notifications

**Example: Payment Event Processing**

java

```java
// Publisher (Payment Service)
@Service
public class PaymentEventPublisher {
    
    @Autowired
    private KafkaTemplate<String, PaymentEvent> kafkaTemplate;
    
    public void publishPaymentCompleted(Payment payment) {
        
        PaymentEvent event = PaymentEvent.builder()
                .paymentId(payment.getPaymentId())
                .userId(payment.getUserId())
                .amount(payment.getAmount())
                .fromAccount(payment.getFromAccount())
                .toAccount(payment.getToAccount())
                .timestamp(LocalDateTime.now())
                .eventType("PAYMENT_COMPLETED")
                .build();
        
        kafkaTemplate.send("payment-events", event.getPaymentId(), event);
        
        log.info("Published payment event: {}", event.getPaymentId());
    }
}

// Consumer 1 (Notification Service)
@Service
@KafkaListener(
    topics = "payment-events",
    groupId = "notification-service"
)
public class PaymentNotificationListener {
    
    @Autowired
    private NotificationService notificationService;
    
    @KafkaHandler
    public void handlePaymentCompleted(PaymentEvent event) {
        
        log.info("Received payment event: {}", event.getPaymentId());
        
        // Send notification to user
        notificationService.sendPaymentNotification(event);
    }
}

// Consumer 2 (Analytics Service)
@Service
@KafkaListener(
    topics = "payment-events",
    groupId = "analytics-service"
)
public class PaymentAnalyticsListener {
    
    @Autowired
    private AnalyticsService analyticsService;
    
    @KafkaHandler
    public void handlePaymentCompleted(PaymentEvent event) {
        
        log.info("Processing payment for analytics: {}", 
                event.getPaymentId());
        
        // Update analytics
        analyticsService.recordPayment(event);
    }
}
```

**Message Flow Visualization:**

```
Payment Service                  Kafka                   Consumers
┌──────────┐                ┌─────────┐              ┌──────────┐
│ Payment  │───publish─────▶│ payment │─────────────▶│Notification│
│Completed │                │ -events │              │  Service  │
└──────────┘                │  Topic  │              └──────────┘
                            └────┬────┘                     │
                                 │                          │
                                 │                    ┌──────────┐
                                 └───────────────────▶│Analytics │
                                                      │ Service  │
                                                      └──────────┘
Benefits:
✓ Services are decoupled
✓ Payment Service doesn't wait
✓ Can add new consumers anytime
✓ Guaranteed delivery
```

----------

## 6. Data Management 

### Database Per Service Pattern

**Concept:** Each microservice has its own database

**Analogy:** Each department in a company has its own filing cabinet - HR doesn't access Engineering's files directly.

```
┌────────────────┐     ┌────────────────┐     ┌────────────────┐
│ Account Service│     │ Payment Service│     │ Loan Service   │
└───────┬────────┘     └───────┬────────┘     └───────┬────────┘
        │                      │                       │
┌───────▼────────┐     ┌───────▼────────┐     ┌───────▼────────┐
│  Account DB    │     │  Payment DB    │     │   Loan DB      │
│  (PostgreSQL)  │     │  (PostgreSQL)  │     │  (MongoDB)     │
└────────────────┘     └────────────────┘     └────────────────┘

Each DB stores only what that service needs!
```

**Challenge: Distributed Transactions**

**Problem:** How to ensure consistency across multiple databases?

**Example Scenario:**

```
Transfer $100 from Account A to Account B

Step 1: Account Service deducts $100 from A ✓
Step 2: Payment Service records transfer    ✓
Step 3: Account Service adds $100 to B      ✗ (FAILS!)

Now what? A is -$100 but B didn't receive money!
```

**Solution: Saga Pattern (Choreography)**

java

```java
// Step 1: Account Service
@Service
public class AccountService {
    
    @Transactional
    public void debitAccount(String accountId, BigDecimal amount) {
        
        // Debit the account
        Account account = accountRepository.findById(accountId);
        account.setBalance(account.getBalance().subtract(amount));
        accountRepository.save(account);
        
        // Publish event
        eventPublisher.publish(new AccountDebitedEvent(
            accountId, amount
        ));
    }
    
    // Compensation method if later step fails
    @KafkaListener(topics = "payment-failed-events")
    public void compensateDebit(PaymentFailedEvent event) {
        
        // Refund the amount
        Account account = accountRepository.findById(
            event.getFromAccount()
        );
        account.setBalance(
            account.getBalance().add(event.getAmount())
        );
        accountRepository.save(account);
        
        log.info("Compensated failed payment: {}", 
                event.getPaymentId());
    }
}

// Step 2: Payment Service
@Service
public class PaymentService {
    
    @KafkaListener(topics = "account-debited-events")
    @Transactional
    public void recordPayment(AccountDebitedEvent event) {
        
        try {
            // Create payment record
            Payment payment = new Payment();
            payment.setFromAccount(event.getAccountId());
            payment.setAmount(event.getAmount());
            payment.setStatus(PaymentStatus.PROCESSING);
            paymentRepository.save(payment);
            
            // Publish success event
            eventPublisher.publish(new PaymentRecordedEvent(payment));
            
        } catch (Exception e) {
            // Publish failure event (triggers compensation)
            eventPublisher.publish(new PaymentFailedEvent(
                event.getAccountId(), 
                event.getAmount()
            ));
        }
    }
}
```

**Saga Flow Visualization:**

```
Happy Path (All steps succeed):
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│ Debit A │───▶│ Record  │───▶│Credit B │───▶│Complete │
│ SUCCESS │    │ Payment │    │ SUCCESS │    │         │
└─────────┘    │ SUCCESS │    └─────────┘    └─────────┘
               └─────────┘

Failure Path (Step 3 fails):
┌─────────┐    ┌─────────┐    ┌─────────┐
│ Debit A │───▶│ Record  │───▶│Credit B │
│ SUCCESS │    │ Payment │    │  FAIL   │
└─────────┘    │ SUCCESS │    └────┬────┘
               └─────────┘         │
                    ▲               │
                    │               ▼
               ┌────┴────┐    ┌─────────┐
               │Rollback │◀───│Compensate│
               │Payment  │    │ Debit A  │
               └─────────┘    └─────────┘
```

----------

### CQRS (Command Query Responsibility Segregation)

**Concept:** Separate read and write operations for better performance

**Analogy:** Like having a **checkout counter** (writes) and a **catalog kiosk** (reads) in a store - they're optimized for different purposes.

```
Write Model (Commands)              Read Model (Queries)
┌──────────────────┐               ┌──────────────────┐
│  Create Account  │               │  Get Account     │
│  Update Balance  │               │  List Accounts   │
│  Transfer Money  │               │  Get Statement   │
└────────┬─────────┘               └────────▲─────────┘
         │                                   │
         ▼                                   │
┌──────────────────┐               ┌────────┴─────────┐
│  Write Database  │──sync events─▶│  Read Database   │
│  (Normalized)    │               │  (Denormalized)  │
│  PostgreSQL      │               │  MongoDB/Redis   │
└──────────────────┘               └──────────────────┘

Why separate?
✓ Writes: Strong consistency, ACID
✓ Reads: Fast, optimized queries, can be cached
```

**Implementation:**

java

```java
// Command Side (Writes)
@RestController
@RequestMapping("/api/v1/commands/accounts")
public class AccountCommandController {
    
    @Autowired
    private AccountCommandService commandService;
    
    @PostMapping
    public ResponseEntity<CommandResult> createAccount(
            @RequestBody CreateAccountCommand command) {
        
        String accountId = commandService.handle(command);
        
        return ResponseEntity.ok(
            CommandResult.success(accountId)
        );
    }
    
    @PostMapping("/{accountId}/transfer")
    public ResponseEntity<CommandResult> transferMoney(
            @PathVariable String accountId,
            @RequestBody TransferCommand command) {
        
        String transactionId = commandService.handle(command);
        
        return ResponseEntity.accepted()
                .body(CommandResult.success(transactionId));
    }
}

@Service
public class AccountCommandService {
    
    @Autowired
    private AccountWriteRepository writeRepository;
    
    @Autowired
    private EventPublisher eventPublisher;
    
    @Transactional
    public String handle(TransferCommand command) {
        
        // Perform write operation
        Account fromAccount = writeRepository.findById(
            command.getFromAccountId()
        );
        
        fromAccount.debit(command.getAmount());
        writeRepository.save(fromAccount);
        
        // Publish event for read model sync
        eventPublisher.publish(new AccountDebitedEvent(
            fromAccount.getId(),
            command.getAmount(),
            command.getTransactionId()
        ));
        
        return command.getTransactionId();
    }
}

// Query Side (Reads)
@RestController
@RequestMapping("/api/v1/queries/accounts")
public class AccountQueryController {
    
    @Autowired
    private AccountQueryService queryService;
    
    @GetMapping("/{accountId}")
    public ResponseEntity<AccountView> getAccount(
            @PathVariable String accountId) {
        
        AccountView account = queryService.getAccount(accountId);
        
        return ResponseEntity.ok(account);
    }
    
    @GetMapping("/{accountId}/statement")
    public ResponseEntity<AccountStatement> getStatement(
            @PathVariable String accountId,
            @RequestParam LocalDate fromDate,
            @RequestParam LocalDate toDate) {
        
        AccountStatement statement = queryService.getStatement(
            accountId, fromDate, toDate
        );
        
        return ResponseEntity.ok(statement);
    }
}

@Service
public class AccountQueryService {
    
    @Autowired
    private AccountReadRepository readRepository;
    
    @Autowired
    private RedisTemplate<String, AccountView> cache;
    
    public AccountView getAccount(String accountId) {
        
        // Try cache first
        AccountView cached = cache.opsForValue()
                .get("account:" + accountId);
        
        if (cached != null) {
            return cached;
        }
        
        // Query read model (optimized for reads)
        AccountView account = readRepository.findById(accountId);
        
        // Cache for 5 minutes
        cache.opsForValue().set(
            "account:" + accountId, 
            account,
            5, 
            TimeUnit.MINUTES
        );
        
        return account;
    }
}

// Event Handler (Syncs Read Model)
@Service
public class AccountReadModelUpdater {
    
    @Autowired
    private AccountReadRepository readRepository;
    
    @Autowired
    private RedisTemplate<String, AccountView> cache;
    
    @KafkaListener(topics = "account-events")
    public void handleAccountEvent(AccountEvent event) {
        
        // Update read model
        AccountView view = readRepository.findById(event.getAccountId());
        
        if (event instanceof AccountDebitedEvent) {
            AccountDebitedEvent debitEvent = (AccountDebitedEvent) event;
            view.setBalance(
                view.getBalance().subtract(debitEvent.getAmount())
            );
            view.setLastTransaction(debitEvent.getTransactionId());
        }
        
        readRepository.save(view);
        
        // Invalidate cache
        cache.delete("account:" + event.getAccountId());
    }
}
```

----------

### Event Sourcing

**Concept:** Store all changes as a sequence of events, not just current state

**Analogy:** Like a **bank passbook** that shows every transaction vs just showing current balance.

```
Traditional (State-Based):
┌────────────────────────┐
│ Account: ACC001        │
│ Balance: $1,000        │  ← Only current state
│ Last Updated: Today    │
└────────────────────────┘

Event Sourcing (Event-Based):
┌────────────────────────┐
│ Account Created        │
│ Date: Jan 1, Amount: 0 │
├────────────────────────┤
│ Deposit                │
│ Date: Jan 5, +$1,500   │
├────────────────────────┤
│ Withdrawal             │
│ Date: Jan 10, -$200    │
├────────────────────────┤
│ Deposit                │
│ Date: Jan 15, +$100    │  ← Complete history!
└────────────────────────┘
Current Balance = Sum of all events = $1,400
```

**Benefits:**

-   Complete audit trail
-   Can rebuild state at any point in time
-   Can replay events for debugging
-   Natural fit for banking/finance

**Database Schema:**

sql

```sql
CREATE TABLE event_store (
    event_id VARCHAR(36) PRIMARY KEY,
    aggregate_id VARCHAR(36) NOT NULL,  -- e.g., account_id
    aggregate_type VARCHAR(50) NOT NULL,  -- e.g., 'Account'
    event_type VARCHAR(100) NOT NULL,  -- e.g., 'AccountCredited'
    event_data JSON NOT NULL,  -- Event payload
    event_version INT NOT NULL,
    occurred_at TIMESTAMP NOT NULL,
    user_id VARCHAR(36),
    
    INDEX idx_aggregate (aggregate_id, event_version),
    INDEX idx_type_time (aggregate_type, occurred_at)
);

CREATE TABLE snapshots (
    snapshot_id VARCHAR(36) PRIMARY KEY,
    aggregate_id VARCHAR(36) NOT NULL,
    aggregate_type VARCHAR(50) NOT NULL,
    snapshot_data JSON NOT NULL,
    version INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    
    UNIQUE KEY uk_aggregate_version (aggregate_id, version)
);
```

**Implementation:**

java

```java
// Event Base Class
@Data
public abstract class DomainEvent {
    private String eventId;
    private String aggregateId;
    private int version;
    private LocalDateTime occurredAt;
    private String userId;
    
    protected DomainEvent() {
        this.eventId = UUID.randomUUID().toString();
        this.occurredAt = LocalDateTime.now();
    }
}

// Specific Events
public class AccountCreatedEvent extends DomainEvent {
    private String accountNumber;
    private String customerId;
    private AccountType accountType;
    private String currency;
}

public class AccountCreditedEvent extends DomainEvent {
    private BigDecimal amount;
    private String transactionId;
    private String description;
}

public class AccountDebitedEvent extends DomainEvent {
    private BigDecimal amount;
    private String transactionId;
    private String description;
}

// Aggregate Root (Account)
public class Account {
    
    private String accountId;
    private String accountNumber;
    private String customerId;
    private BigDecimal balance;
    private AccountStatus status;
    private int version;
    
    // Uncommitted events (to be saved)
    private List<DomainEvent> uncommittedEvents = new ArrayList<>();
    
    // Create new account
    public static Account create(
            String accountNumber, 
            String customerId,
            AccountType accountType) {
        
        Account account = new Account();
        
        // Apply event
        AccountCreatedEvent event = new AccountCreatedEvent();
        event.setAccountNumber(accountNumber);
        event.setCustomerId(customerId);
        event.setAccountType(accountType);
        
        account.apply(event);
        account.uncommittedEvents.add(event);
        
        return account;
    }
    
    // Credit money
    public void credit(BigDecimal amount, String transactionId) {
        
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        
        AccountCreditedEvent event = new AccountCreditedEvent();
        event.setAggregateId(this.accountId);
        event.setAmount(amount);
        event.setTransactionId(transactionId);
        event.setVersion(this.version + 1);
        
        apply(event);
        uncommittedEvents.add(event);
    }
    
    // Debit money
    public void debit(BigDecimal amount, String transactionId) {
        
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        
        if (this.balance.compareTo(amount) < 0) {
            throw new InsufficientBalanceException();
        }
        
        AccountDebitedEvent event = new AccountDebitedEvent();
        event.setAggregateId(this.accountId);
        event.setAmount(amount);
        event.setTransactionId(transactionId);
        event.setVersion(this.version + 1);
        
        apply(event);
        uncommittedEvents.add(event);
    }
    
    // Apply event to change state
    private void apply(DomainEvent event) {
        
        if (event instanceof AccountCreatedEvent) {
            AccountCreatedEvent e = (AccountCreatedEvent) event;
            this.accountId = e.getAggregateId();
            this.accountNumber = e.getAccountNumber();
            this.customerId = e.getCustomerId();
            this.balance = BigDecimal.ZERO;
            this.status = AccountStatus.ACTIVE;
            this.version = 0;
        }
        else if (event instanceof AccountCreditedEvent) {
            AccountCreditedEvent e = (AccountCreditedEvent) event;
            this.balance = this.balance.add(e.getAmount());
            this.version = e.getVersion();
        }
        else if (event instanceof AccountDebitedEvent) {
            AccountDebitedEvent e = (AccountDebitedEvent) event;
            this.balance = this.balance.subtract(e.getAmount());
            this.version = e.getVersion();
        }
    }
    
    // Reconstruct from events
    public static Account fromEvents(List<DomainEvent> events) {
        
        Account account = new Account();
        
        for (DomainEvent event : events) {
            account.apply(event);
        }
        
        return account;
    }
    
    public List<DomainEvent> getUncommittedEvents() {
        return new ArrayList<>(uncommittedEvents);
    }
    
    public void markEventsAsCommitted() {
        uncommittedEvents.clear();
    }
}

// Event Store Repository
@Repository
public class EventStoreRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    public void saveEvents(
            String aggregateId, 
            List<DomainEvent> events) {
        
        String sql = """
            INSERT INTO event_store 
            (event_id, aggregate_id, aggregate_type, event_type, 
             event_data, event_version, occurred_at, user_id)
            VALUES (?, ?, ?, ?, ?::json, ?, ?, ?)
            """;
        
        for (DomainEvent event : events) {
            jdbcTemplate.update(sql,
                event.getEventId(),
                aggregateId,
                "Account",
                event.getClass().getSimpleName(),
                objectMapper.writeValueAsString(event),
                event.getVersion(),
                event.getOccurredAt(),
                event.getUserId()
            );
        }
    }
    
    public List<DomainEvent> getEvents(String aggregateId) {
        
        String sql = """
            SELECT event_type, event_data, event_version, 
                   occurred_at, user_id
            FROM event_store
            WHERE aggregate_id = ?
            ORDER BY event_version ASC
            """;
        
        return jdbcTemplate.query(sql, 
            (rs, rowNum) -> {
                String eventType = rs.getString("event_type");
                String eventData = rs.getString("event_data");
                
                // Deserialize based on type
                Class<? extends DomainEvent> eventClass = 
                    getEventClass(eventType);
                
                return objectMapper.readValue(eventData, eventClass);
            },
            aggregateId
        );
    }
}

// Account Service using Event Sourcing
@Service
public class EventSourcedAccountService {
    
    @Autowired
    private EventStoreRepository eventStore;
    
    @Transactional
    public String createAccount(
            String accountNumber, 
            String customerId) {
        
        // Create aggregate with event
        Account account = Account.create(
            accountNumber, 
            customerId,
            AccountType.SAVINGS
        );
        
        // Save events
        eventStore.saveEvents(
            account.getAccountId(),
            account.getUncommittedEvents()
        );
        
        account.markEventsAsCommitted();
        
        return account.getAccountId();
    }
    
    @Transactional
    public void creditAccount(
            String accountId, 
            BigDecimal amount,
            String transactionId) {
        
        // Load account from events
        List<DomainEvent> events = eventStore.getEvents(accountId);
        Account account = Account.fromEvents(events);
        
        // Perform business logic
        account.credit(amount, transactionId);
        
        // Save new events
        eventStore.saveEvents(
            accountId,
            account.getUncommittedEvents()
        );
        
        account.markEventsAsCommitted();
    }
    
    public Account getAccount(String accountId) {
        
        // Rebuild from events
        List<DomainEvent> events = eventStore.getEvents(accountId);
        
        if (events.isEmpty()) {
            throw new AccountNotFoundException(accountId);
        }
        
        return Account.fromEvents(events);
    }
    
    // Get account balance at specific point in time
    public BigDecimal getBalanceAt(
            String accountId, 
            LocalDateTime timestamp) {
        
        List<DomainEvent> events = eventStore.getEvents(accountId);
        
        // Filter events before timestamp
        List<DomainEvent> filteredEvents = events.stream()
                .filter(e -> e.getOccurredAt().isBefore(timestamp))
                .collect(Collectors.toList());
        
        Account account = Account.fromEvents(filteredEvents);
        
        return account.getBalance();
    }
}
```

----------

## 7. Security & Compliance {#security}

### Multi-Layer Security Architecture

```
┌─────────────────────────────────────────────────────┐
│                    Layer 1: Network                  │
│  ├─ Firewall (Block unauthorized IPs)              │
│  ├─ DDoS Protection (Rate limiting)                │
│  └─ VPN (Secure admin access)                      │
└─────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────┐
│                  Layer 2: API Gateway                │
│  ├─ SSL/TLS (HTTPS encryption)                     │
│  ├─ API Key validation                             │
│  ├─ JWT Token verification                         │
│  └─ Request throttling                             │
└─────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────┐
│              Layer 3: Service Authentication         │
│  ├─ OAuth 2.0 / OpenID Connect                     │
│  ├─ Role-Based Access Control (RBAC)               │
│  ├─ Permission validation                          │
│  └─ Session management                             │
└─────────────────────────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────┐
│                Layer 4: Data Security                │
│  ├─ Encryption at rest (AES-256)                   │
│  ├─ Encryption in transit (TLS 1.3)                │
│  ├─ PII data masking                               │
│  └─ Database access control                        │
└─────────────────────────────────────────────────────┘
```

### Implementing Security

**1. API Gateway Security**

java

```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) 
            throws Exception {
        
        http
            .csrf().disable()  // Using JWT tokens
            .cors().and()
            .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/v1/auth/**").permitAll()
                .requestMatchers("/api/v1/public/**").permitAll()
                .requestMatchers("/actuator/health").permitAll()
                .requestMatchers("/api/v1/admin/**")
                    .hasRole("ADMIN")
                .requestMatchers("/api/v1/accounts/**")
                    .hasAnyRole("USER", "ADMIN")
                .requestMatchers("/api/v1/payments/**")
                    .hasAnyRole("USER", "ADMIN")
                .anyRequest().authenticated()
            )
            .addFilterBefore(
                jwtAuthenticationFilter(),
                UsernamePasswordAuthenticationFilter.class
            );
        
        return http.build();
    }
    
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }
}

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    
    @Autowired
    private JwtTokenProvider tokenProvider;
    
    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        
        try {
            // Extract JWT from header
            String jwt = getJwtFromRequest(request);
            
            if (jwt != null && tokenProvider.validateToken(jwt)) {
                
                // Get user details from token
                String userId = tokenProvider.getUserIdFromToken(jwt);
                Set<String> permissions = 
                    tokenProvider.getPermissionsFromToken(jwt);
                
                // Create authentication
                UsernamePasswordAuthenticationToken authentication =
                    new UsernamePasswordAuthenticationToken(
                        userId, 
                        null, 
                        getAuthorities(permissions)
                    );
                
                SecurityContextHolder.getContext()
                    .setAuthentication(authentication);
            }
            
        } catch (Exception e) {
            log.error("Cannot set user authentication", e);
        }
        
        filterChain.doFilter(request, response);
    }
    
    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        
        return null;
    }
}
```

**2. Data Encryption**

java

```java
@Service
public class EncryptionService {
    
    @Value("${encryption.key}")
    private String encryptionKey;
    
    private static final String ALGORITHM = "AES/GCM/NoPadding";
    private static final int GCM_IV_LENGTH = 12;
    private static final int GCM_TAG_LENGTH = 128;
    
    // Encrypt sensitive data (e.g., card numbers)
    public String encrypt(String plaintext) throws Exception {
        
        SecretKeySpec keySpec = new SecretKeySpec(
            encryptionKey.getBytes(StandardCharsets.UTF_8),
            "AES"
        );
        
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        
        // Generate random IV
        byte[] iv = new byte[GCM_IV_LENGTH];
        SecureRandom random = new SecureRandom();
        random.nextBytes(iv);
        
        GCMParameterSpec parameterSpec = new GCMParameterSpec(
            GCM_TAG_LENGTH, 
            iv
        );
        
        cipher.init(Cipher.ENCRYPT_MODE, keySpec, parameterSpec);
        
        byte[] ciphertext = cipher.doFinal(
            plaintext.getBytes(StandardCharsets.UTF_8)
        );
        
        // Combine IV + ciphertext
        byte[] encrypted = new byte[iv.length + ciphertext.length];
        System.arraycopy(iv, 0, encrypted, 0, iv.length);
        System.arraycopy(ciphertext, 0, encrypted, iv.length, 
                        ciphertext.length);
        
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    public String decrypt(String encryptedText) throws Exception {
        
        byte[] encrypted = Base64.getDecoder().decode(encryptedText);
        
        // Extract IV
        byte[] iv = Arrays.copyOfRange(encrypted, 0, GCM_IV_LENGTH);
        byte[] ciphertext = Arrays.copyOfRange(
            encrypted, 
            GCM_IV_LENGTH, 
            encrypted.length
        );
        
        SecretKeySpec keySpec = new SecretKeySpec(
            encryptionKey.getBytes(StandardCharsets.UTF_8),
            "AES"
        );
        
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        GCMParameterSpec parameterSpec = new GCMParameterSpec(
            GCM_TAG_LENGTH, 
            iv
        );
        
        cipher.init(Cipher.DECRYPT_MODE, keySpec, parameterSpec);
        
        byte[] plaintext = cipher.doFinal(ciphertext);
        
        return new String(plaintext, StandardCharsets.UTF_8);
    }
}

// Using encryption for sensitive fields
@Entity
public class PaymentMethod {
    
    @Id
    private String id;
    
    private String userId;
    
    @Column(name = "encrypted_card_number")
    private String encryptedCardNumber;
    
    @Column(name = "encrypted_cvv")
    private String encryptedCvv;
    
    // Last 4 digits for display (not encrypted)
    private String last4Digits;
    
    @Transient
    @JsonIgnore
    public String getCardNumber(EncryptionService encryption) 
            throws Exception {
        return encryption.decrypt(encryptedCardNumber);
    }
    
    @JsonIgnore
    public void setCardNumber(
            String cardNumber, 
            EncryptionService encryption) throws Exception {
        
        this.encryptedCardNumber = encryption.encrypt(cardNumber);
        this.last4Digits = cardNumber.substring(
            cardNumber.length() - 4
        );
    }
}
```

**3. Audit Logging**

java

```java
@Entity
@Table(name = "audit_logs")
public class AuditLog {
    
    @Id
    private String id;
    
    private String userId;
    private String action;  // LOGIN, PAYMENT, TRANSFER, etc.
    private String resource;  // account_id, payment_id, etc.
    private String ipAddress;
    private String userAgent;
    
    @Column(columnDefinition = "json")
    private String requestData;
    
    @Column(columnDefinition = "json")
    private String responseData;
    
    private String status;  // SUCCESS, FAILURE
    private LocalDateTime timestamp;
}

@Aspect
@Component
public class AuditAspect {
    
    @Autowired
    private AuditLogRepository auditRepository;
    
    @Around("@annotation(auditable)")
    public Object auditMethod(
            ProceedingJoinPoint joinPoint, 
            Auditable auditable) throws Throwable {
        
        HttpServletRequest request = getCurrentRequest();
        Authentication auth = SecurityContextHolder.getContext()
                .getAuthentication();
        
        AuditLog log = new AuditLog();
        log.setId(UUID.randomUUID().toString());
        log.setUserId(auth != null ? auth.getName() : "anonymous");
        log.setAction(auditable.action());
        log.setIpAddress(request.getRemoteAddr());
        log.setUserAgent(request.getHeader("User-Agent"));
        log.setTimestamp(LocalDateTime.now());
        
        try {
            // Execute method
            Object result = joinPoint.proceed();
            
            log.setStatus("SUCCESS");
            log.setResponseData(
                objectMapper.writeValueAsString(result)
            );
            
            return result;
            
        } catch (Exception e) {
            log.setStatus("FAILURE");
            log.setResponseData(e.getMessage());
            throw e;
            
        } finally {
            auditRepository.save(log);
        }
    }
}

// Usage
@Service
public class PaymentService {
    
    @Auditable(action = "CREATE_PAYMENT")
    public PaymentResponse processPayment(PaymentRequest request) {
        // Payment logic
    }
}
```

----------

### Compliance (PCI-DSS, GDPR, SOC 2)

**PCI-DSS Requirements for Payment Data:**

java

```java
@Service
public class PCICompliantPaymentService {
    
    // Requirement 3: Protect stored cardholder data
    public PaymentMethod savePaymentMethod(
            String userId,
            String cardNumber,
            String cvv,
            String expiryDate) {
        
        // Never store CVV (PCI-DSS requirement)
        // Only store encrypted card number
        
        PaymentMethod method = new PaymentMethod();
        method.setUserId(userId);
        method.setEncryptedCardNumber(
            encrypt(cardNumber)  // AES-256 encryption
        );
        method.setLast4Digits(
            cardNumber.substring(cardNumber.length() - 4)
        );
        method.setExpiryDate(expiryDate);
        
        // CVV is NOT stored anywhere
        
        return paymentMethodRepository.save(method);
    }
    
    // Requirement 8: Assign unique ID to each person with access
    @PreAuthorize("hasRole('ADMIN') or #userId == authentication.name")
    public List<PaymentMethod> getPaymentMethods(String userId) {
        return paymentMethodRepository.findByUserId(userId);
    }
}

// GDPR Compliance
@Service
public class GDPRComplianceService {
    
    // Right to Access (GDPR Article 15)
    public UserDataExport exportUserData(String userId) {
        
        UserDataExport export = new UserDataExport();
        export.setPersonalInfo(getUserInfo(userId));
        export.setAccounts(getAccounts(userId));
        export.setTransactions(getTransactions(userId));
        export.setPaymentMethods(getMaskedPaymentMethods(userId));
        
        return export;
    }
    
    // Right to be Forgotten (GDPR Article 17)
    @Transactional
    public void deleteUserData(String userId) {
        
        // Anonymize instead of delete (for audit trail)
        User user = userRepository.findById(userId);
        user.setEmail("deleted_" + userId + "@anonymized.com");
        user.setPhone(null);
        user.setName("Deleted User");
        user.setStatus(UserStatus.DELETED);
        
        // Mark for data deletion after retention period
        scheduleDataDeletion(userId, 
            LocalDateTime.now().plusYears(7)  // 7-year retention
        );
    }
    
    // Data Portability (GDPR Article 20)
    public byte[] exportUserDataAsJSON(String userId) {
        UserDataExport data = exportUserData(userId);
        return objectMapper.writeValueAsBytes(data);
    }
}
```

----------

## 8. Monitoring & Observability 

### Three Pillars of Observability

```
1. METRICS          2. LOGS              3. TRACES
   (Numbers)           (Events)            (Request Flow)

┌──────────┐      ┌──────────┐      ┌──────────────┐
│ CPU: 45% │      │ERROR:    │      │Request ID:   │
│ Memory:  │      │Payment   │      │ 123          │
│ 2.3 GB   │      │failed at │      │              │
│          │      │14:32:05  │      │Gateway─────▶ │
│Requests: │      │          │      │Account─────▶ │
│ 1200/sec │      │User: 456 │      │Payment─────▶ │
└──────────┘      └──────────┘      │Notification──▶│
                                    └──────────────┘
(Prometheus)      (ELK Stack)      (Jaeger/Zipkin)
```

----------

### 1. Metrics (Prometheus + Grafana)

**Implementation:**

java

```java
// Add Micrometer dependency for metrics
@Configuration
public class MetricsConfig {
    
    @Bean
    public MeterRegistry meterRegistry() {
        return new PrometheusMeterRegistry(PrometheusConfig.DEFAULT);
    }
}

@Service
public class PaymentService {
    
    private final Counter paymentCounter;
    private final Timer paymentTimer;
    private final Gauge activePayments;
    
    public PaymentService(MeterRegistry registry) {
        
        // Count total payments
        this.paymentCounter = Counter.builder("payments.total")
                .description("Total number of payments")
                .tag("service", "payment")
                .register(registry);
        
        // Track payment processing time
        this.paymentTimer = Timer.builder("payments.processing.time")
                .description("Payment processing duration")
                .tag("service", "payment")
                .register(registry);
        
        // Track active payments
        this.activePayments = Gauge.builder(
                "payments.active", 
                this, 
                PaymentService::getActivePaymentCount
            )
            .description("Number of active payments")
            .register(registry);
    }
    
    public PaymentResponse processPayment(PaymentRequest request) {
        
        return paymentTimer.record(() -> {
            try {
                // Increment counter
                paymentCounter.increment();
                
                // Process payment logic
                PaymentResponse response = performPayment(request);
                
                // Track by status
                Counter.builder("payments.status")
                    .tag("status", response.getStatus().toString())
                    .register(meterRegistry)
                    .increment();
                
                return response;
                
            } catch (Exception e) {
                // Track failures
                Counter.builder("payments.errors")
                    .tag("error.type", e.getClass().getSimpleName())
                    .register(meterRegistry)
                    .increment();
                
                throw e;
            }
        });
    }
}

// Custom metrics for business KPIs
@Component
public class BusinessMetrics {
    
    private final MeterRegistry registry;
    
    public BusinessMetrics(MeterRegistry registry) {
        this.registry = registry;
    }
    
    // Track revenue
    public void recordRevenue(BigDecimal amount, String currency) {
        registry.counter("business.revenue",
            "currency", currency
        ).increment(amount.doubleValue());
    }
    
    // Track user acquisition
    public void recordNewUser(String source) {
        registry.counter("business.users.new",
            "source", source
        ).increment();
    }
    
    // Track fraud detection
    public void recordFraudDetection(String riskLevel) {
        registry.counter("security.fraud.detected",
            "risk_level", riskLevel
        ).increment();
    }
}
```

**Grafana Dashboard Configuration:**

yaml

```yaml
# Example dashboard.json excerpt
{
  "dashboard": {
    "title": "Payment Service Monitoring",
    "panels": [
      {
        "title": "Payment Throughput",
        "targets": [
          {
            "expr": "rate(payments_total[5m])",
            "legendFormat": "Payments/sec"
          }
        ]
      },
      {
        "title": "Payment Success Rate",
        "targets": [
          {
            "expr": "sum(rate(payments_status{status='COMPLETED'}[5m])) / sum(rate(payments_total[5m])) * 100",
            "legendFormat": "Success %"
          }
        ]
      },
      {
        "title": "P95 Latency",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, payments_processing_time_bucket)",
            "legendFormat": "P95 latency"
          }
        ]
      }
    ]
  }
}
```

----------

### 2. Distributed Logging (ELK Stack)

**Log Structure:**

java

```java
@Slf4j
@Service
public class PaymentService {
    
    public PaymentResponse processPayment(PaymentRequest request) {
        
        // Structured logging with context
        MDC.put("userId", request.getUserId());
        MDC.put("paymentId", request.getPaymentId());
        MDC.put("transactionId", UUID.randomUUID().toString());
        
        try {
            log.info("Payment processing started", 
                kv("amount", request.getAmount()),
                kv("fromAccount", request.getFromAccount()),
                kv("toAccount", request.getToAccount())
            );
            
            // Fraud check
            FraudCheckResult fraudCheck = fraudService.check(request);
            log.info("Fraud check completed",
                kv("riskScore", fraudCheck.getRiskScore()),
                kv("decision", fraudCheck.getDecision())
            );
            
            if (fraudCheck.isHighRisk()) {
                log.warn("High risk payment detected",
                    kv("triggeredRules", fraudCheck.getTriggeredRules())
                );
                throw new FraudDetectedException();
            }
            
            // Process payment
            PaymentResponse response = executePayment(request);
            
            log.info("Payment completed successfully",
                kv("status", response.getStatus()),
                kv("referenceNumber", response.getReferenceNumber()),
                kv("processingTimeMs", response.getProcessingTime())
            );
            
            return response;
            
        } catch (InsufficientBalanceException e) {
            log.error("Payment failed due to insufficient balance",
                kv("availableBalance", e.getAvailableBalance()),
                kv("requiredAmount", request.getAmount())
            );
            throw e;
            
        } catch (Exception e) {
            log.error("Payment processing failed",
                kv("errorType", e.getClass().getSimpleName()),
                kv("errorMessage", e.getMessage()),
                e
            );
            throw e;
            
        } finally {
            MDC.clear();
        }
    }
}

// Logback configuration (logback-spring.xml)
```

xml

```xml
<configuration>
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <includeMdcKeyName>userId</includeMdcKeyName>
            <includeMdcKeyName>paymentId</includeMdcKeyName>
            <includeMdcKeyName>transactionId</includeMdcKeyName>
        </encoder>
    </appender>
    
    <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
        <destination>logstash:5000</destination>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <customFields>{"service":"payment-service"}</customFields>
        </encoder>
    </appender>
    
    <root level="INFO">
        <appender-ref ref="CONSOLE"/>
        <appender-ref ref="LOGSTASH"/>
    </root>
</configuration>
```

**Example Log Output (JSON):**

json

```json
{
  "@timestamp": "2025-11-01T14:30:45.123Z",
  "level": "INFO",
  "service": "payment-service",
  "thread": "http-nio-8080-exec-1",
  "logger": "com.bank.service.PaymentService",
  "message": "Payment processing started",
  "userId": "user_123",
  "paymentId": "pay_456",
  "transactionId": "txn_789",
  "amount": 100.00,
  "fromAccount": "ACC001",
  "toAccount": "ACC002",
  "host": "payment-service-pod-1",
  "kubernetes": {
    "namespace": "banking-prod",
    "pod": "payment-service-7d4f5c8b9-xk2lp"
  }
}
```

----------

### 3. Distributed Tracing (Jaeger/Zipkin)

**Purpose:** Track requests across multiple microservices

**Visualization:**

```
User Request → API Gateway → Account Service → Fraud Service
                           → Payment Service → Notification Service
                           
Trace ID: abc-123-def
├─ Span 1: API Gateway [2ms]
├─ Span 2: Account Service [15ms]
│  └─ Span 2.1: Database Query [10ms]
├─ Span 3: Fraud Service [50ms]
│  ├─ Span 3.1: ML Model Prediction [30ms]
│  └─ Span 3.2: Rule Engine [15ms]
├─ Span 4: Payment Service [25ms]
│  └─ Span 4.1: Transaction Processing [20ms]
└─ Span 5: Notification Service [5ms]

Total Time: 97ms
```

**Implementation:**

java

```java
// Add Spring Cloud Sleuth dependency
@Configuration
public class TracingConfig {
    
    @Bean
    public Sampler defaultSampler() {
        // Sample 100% of requests (adjust for production)
        return Sampler.ALWAYS_SAMPLE;
    }
}

@Service
@Slf4j
public class PaymentService {
    
    @Autowired
    private Tracer tracer;
    
    public PaymentResponse processPayment(PaymentRequest request) {
        
        // Get current span
        Span currentSpan = tracer.currentSpan();
        
        if (currentSpan != null) {
            // Add custom tags
            currentSpan.tag("payment.amount", 
                          request.getAmount().toString());
            currentSpan.tag("payment.type", 
                          request.getPaymentType().toString());
        }
        
        // Create custom span for fraud check
        Span fraudCheckSpan = tracer.nextSpan()
                .name("fraud-detection")
                .start();
        
        try (Tracer.SpanInScope ws = 
                tracer.withSpanInScope(fraudCheckSpan)) {
            
            FraudCheckResult result = fraudService.check(request);
            fraudCheckSpan.tag("fraud.risk_score", 
                             String.valueOf(result.getRiskScore()));
            fraudCheckSpan.tag("fraud.decision", 
                             result.getDecision().toString());
            
        } finally {
            fraudCheckSpan.finish();
        }
        
        // Continue processing...
        return executePayment(request);
    }
}

// Automatic propagation of trace context
@FeignClient(name = "account-service")
public interface AccountServiceClient {
    
    @GetMapping("/api/v1/accounts/{accountId}")
    Account getAccount(@PathVariable String accountId);
    // Trace context (traceId, spanId) automatically propagated!
}
```

----------

### Health Checks & Readiness Probes

java

```java
@Component
public class CustomHealthIndicator implements HealthIndicator {
    
    @Autowired
    private DataSource dataSource;
    
    @Autowired
    private KafkaTemplate kafkaTemplate;
    
    @Override
    public Health health() {
        
        // Check database connectivity
        boolean dbHealthy = checkDatabase();
        
        // Check Kafka connectivity
        boolean kafkaHealthy = checkKafka();
        
        // Check external dependencies
        boolean externalHealthy = checkExternalServices();
        
        if (dbHealthy && kafkaHealthy && externalHealthy) {
            return Health.up()
                    .withDetail("database", "connected")
                    .withDetail("kafka", "connected")
                    .withDetail("external_services", "available")
                    .build();
        }
        
        Health.Builder builder = Health.down();
        
        if (!dbHealthy) {
            builder.withDetail("database", "disconnected");
        }
        if (!kafkaHealthy) {
            builder.withDetail("kafka", "disconnected");
        }
        if (!externalHealthy) {
            builder.withDetail("external_services", "unavailable");
        }
        
        return builder.build();
    }
    
    private boolean checkDatabase() {
        try (Connection conn = dataSource.getConnection()) {
            return conn.isValid(1);
        } catch (Exception e) {
            return false;
        }
    }
}

// Kubernetes probes configuration
```

yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
spec:
  template:
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:latest
        ports:
        - containerPort: 8080
        
        # Liveness probe (restart if failing)
        livenessProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 60
          periodSeconds: 10
          failureThreshold: 3
        
        # Readiness probe (remove from load balancer if failing)
        readinessProbe:
          httpGet:
            path: /actuator/health/readiness
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 5
          failureThreshold: 3
        
        # Startup probe (for slow-starting apps)
        startupProbe:
          httpGet:
            path: /actuator/health/liveness
            port: 8080
          initialDelaySeconds: 0
          periodSeconds: 10
          failureThreshold: 30
```

----------

### Alerting Configuration

yaml

```yaml
# Prometheus alerting rules
groups:
  - name: payment_service_alerts
    interval: 30s
    rules:
      
      # High error rate
      - alert: HighErrorRate
        expr: |
          sum(rate(payments_status{status="FAILED"}[5m])) 
          / 
          sum(rate(payments_total[5m])) > 0.05
        for: 5m
        labels:
          severity: critical
          service: payment-service
        annotations:
          summary: "High payment failure rate"
          description: "Payment failure rate is {{ $value | humanizePercentage }} (threshold: 5%)"
      
      # High latency
      - alert: HighLatency
        expr: |
          histogram_quantile(0.95, 
            rate(payments_processing_time_bucket[5m])
          ) > 2
        for: 5m
        labels:
          severity: warning
          service: payment-service
        annotations:
          summary: "High payment processing latency"
          description: "P95 latency is {{ $value }}s (threshold: 2s)"
      
      # Service down
      - alert: ServiceDown
        expr: up{job="payment-service"} == 0
        for: 1m
        labels:
          severity: critical
          service: payment-service
        annotations:
          summary: "Payment service is down"
          description: "Payment service has been down for more than 1 minute"
      
      # Database connection pool exhaustion
      - alert: DatabasePoolExhausted
        expr: |
          hikaricp_connections_active{pool="payment-db"} 
          / 
          hikaricp_connections_max{pool="payment-db"} > 0.9
        for: 5m
        labels:
          severity: warning
          service: payment-service
        annotations:
          summary: "Database connection pool nearly exhausted"
          description: "Using {{ $value | humanizePercentage }} of database connections"
```

----------

## 9. Deployment & DevOps 

### CI/CD Pipeline

```
Developer Push → GitHub → Jenkins/GitLab CI → Build → Test → Deploy

┌──────────────┐
│ Developer    │
│ Commits Code │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   GitHub     │
│   Webhook    │
└──────┬───────┘
       │
       ▼
┌──────────────────────────────────────────┐
│          CI/CD Pipeline                   │
├──────────────────────────────────────────┤
│ 1. Checkout Code                         │
│ 2. Run Unit Tests                        │
│ 3. Run Integration Tests                 │
│ 4. Security Scan (Sonar, Snyk)          │
│ 5. Build Docker Image                    │
│ 6. Push to Container Registry            │
│ 7. Deploy to Staging                     │
│ 8. Run E2E Tests                         │
│ 9. Deploy to Production (Blue/Green)    │
└──────────────────────────────────────────┘
```

**Jenkins Pipeline (Jenkinsfile):**

groovy

```groovy
pipeline {
    agent any
    
    environment {
        DOCKER_REGISTRY = 'registry.bank.com'
        SERVICE_NAME = 'payment-service'
        KUBE_NAMESPACE = 'banking-prod'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Unit Tests') {
            steps {
                sh './mvnw clean test'
            }
            post {
                always {
                    junit 'target/surefire-reports/*.xml'
                }
            }
        }
        
        stage('Integration Tests') {
            steps {
                sh './mvnw verify -Pintegration-tests'
            }
        }
        
        stage('Code Quality') {
            steps {
                script {
                    sh './mvnw sonar:sonar'
                }
            }
        }
        
        stage('Security Scan') {
            steps {
                sh 'snyk test --severity-threshold=high'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    def version = sh(
                        script: 'git describe --tags --always',
                        returnStdout: true
                    ).trim()
                    
                    docker.build(
                        "${DOCKER_REGISTRY}/${SERVICE_NAME}:${version}"
                    )
                }
            }
        }
        
        stage('Push to Registry') {
            steps {
                script {
                    docker.withRegistry(
                        "https://${DOCKER_REGISTRY}", 
                        'docker-credentials'
                    ) {
                        docker.image(
                            "${DOCKER_REGISTRY}/${SERVICE_NAME}:${version}"
                        ).push()
                        docker.image(
                            "${DOCKER_REGISTRY}/${SERVICE_NAME}:${version}"
                        ).push('latest')
                    }
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                script {
                    sh """
                        kubectl set image deployment/${SERVICE_NAME} \
                            ${SERVICE_NAME}=${DOCKER_REGISTRY}/${SERVICE_NAME}:${version} \
                            -n banking-staging
                        kubectl rollout status deployment/${SERVICE_NAME} \
                            -n banking-staging
                    """
                }
            }
        }
        
        stage('E2E Tests') {
            steps {
                sh './run-e2e-tests.sh staging'
            }
        }
        
        stage('Deploy to Production') {
            when {
                branch 'main'
            }
            steps {
                input message: 'Deploy to production?', ok: 'Deploy'
                
                script {
                    // Blue-Green deployment
                    sh """
                        kubectl apply -f k8s/production/ \
                            -n ${KUBE_NAMESPACE}
                        kubectl set image deployment/${SERVICE_NAME} \
                            ${SERVICE_NAME}=${DOCKER_REGISTRY}/${SERVICE_NAME}:${version} \
                            -n ${KUBE_NAMESPACE}
                        kubectl rollout status deployment/${SERVICE_NAME} \
                            -n ${KUBE_NAMESPACE}
                    """
                }
            }
        }
    }
    
    post {
        success {
            slackSend(
                color: 'good',
                message: "Deployment successful: ${SERVICE_NAME} ${version}"
            )
        }
        failure {
            slackSend(
                color: 'danger',
                message: "Deployment failed: ${SERVICE_NAME} ${version}"
            )
        }
    }
}
```

----------

### Kubernetes Deployment Strategies

**1. Rolling Update (Default)**

yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service
spec:
  replicas: 5
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1        # Max new pods during update
      maxUnavailable: 1  # Max unavailable pods during update
  template:
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:v2.0
```

**Flow:**

```
Initial: [v1] [v1] [v1] [v1] [v1]
Step 1:  [v1] [v1] [v1] [v1] [v2] ← Create 1 new pod
Step 2:  [v1] [v1] [v1] [v2] [v2] ← Terminate 1 old pod
Step 3:  [v1] [v1] [v2] [v2] [v2]
Step 4:  [v1] [v2] [v2] [v2] [v2]
Final:   [v2] [v2] [v2] [v2] [v2] ✓ Zero downtime
```

**2. Blue-Green Deployment**

yaml

```yaml
# Blue deployment (current)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service-blue
  labels:
    version: blue
spec:
  replicas: 5
  template:
    metadata:
      labels:
        app: payment-service
        version: blue
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:v1.0

---
# Green deployment (new)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service-green
  labels:
    version: green
spec:
  replicas: 5
  template:
    metadata:
      labels:
        app: payment-service
        version: green
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:v2.0

---
# Service (switch traffic)
apiVersion: v1
kind: Service
metadata:
  name: payment-service
spec:
  selector:
    app: payment-service
    version: blue  # Change to 'green' to switch traffic
  ports:
  - port: 80
    targetPort: 8080
```

**3. Canary Deployment**

yaml

```yaml
# Main deployment (90% traffic)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service-stable
spec:
  replicas: 9
  template:
    metadata:
      labels:
        app: payment-service
        track: stable
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:v1.0

---
# Canary deployment (10% traffic)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: payment-service-canary
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: payment-service
        track: canary
    spec:
      containers:
      - name: payment-service
        image: bank/payment-service:v2.0

---
# Service (balances across both)
apiVersion: v1
kind: Service
metadata:
  name: payment-service
spec:
  selector:
    app: payment-service  # Matches both stable and canary
  ports:
  - port: 80
    targetPort: 8080
```

----------

## 10. Testing Strategies 

### Testing Pyramid

```
                    ▲
                   ╱ ╲
                  ╱ E2E╲         ← Few, slow, expensive
                 ╱Tests ╲           (Test full user flows)
                ╱───────╲
               ╱Integration╲      ← Moderate, test service integration
              ╱   Tests     ╲
             ╱──────────────╲
            ╱  Unit Tests    ╲    ← Many, fast, cheap
           ╱  (70% coverage) ╲      (Test individual methods)
          ╱__________________╲
```

### 1. Unit Tests

java

```java
@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {
    
    @Mock
    private PaymentRepository paymentRepository;
    
    @Mock
    private AccountServiceClient accountServiceClient;
    
    @Mock
    private FraudDetectionService fraudService;
    
    @InjectMocks
    private PaymentService paymentService;
    
    @Test
    void processPayment_Success() {
        // Arrange
        PaymentRequest request = PaymentRequest.builder()
                .fromAccount("ACC001")
                .toAccount("ACC002")
                .amount(new BigDecimal("100.00"))
                .build();
        
        AccountBalance balance = new AccountBalance(
            new BigDecimal("500.00")
        );
        
        FraudCheckResult fraudCheck = FraudCheckResult.builder()
                .riskScore(20)
                .decision(FraudDecision.APPROVED)
                .build();
        
        when(accountServiceClient.getBalance("ACC001"))
            .thenReturn(balance);
        when(fraudService.check(any()))
            .thenReturn(fraudCheck);
        when(paymentRepository.save(any()))
            .thenReturn(new Payment());
        
        // Act
        PaymentResponse response = paymentService.processPayment(request);
        
        // Assert
        assertNotNull(response);
        assertEquals(PaymentStatus.COMPLETED, response.getStatus());
        
        verify(accountServiceClient).getBalance("ACC001");
        verify(fraudService).check(any());
        verify(paymentRepository).save(any());
    }
    
    @Test
    void processPayment_InsufficientBalance_ThrowsException() {
        // Arrange
        PaymentRequest request = PaymentRequest.builder()
                .fromAccount("ACC001")
                .amount(new BigDecimal("100.00"))
                .build();
        
        AccountBalance balance = new AccountBalance(
            new BigDecimal("50.00")  // Less than requested
        );
        
        when(accountServiceClient.getBalance("ACC001"))
            .thenReturn(balance);
        
        // Act & Assert
        assertThrows(
            InsufficientBalanceException.class,
            () -> paymentService.processPayment(request)
        );
    }
}
```

### 2. Integration Tests

java

```java
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureTestDatabase
@Testcontainers
class PaymentIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = 
        new PostgreSQLContainer<>("postgres:14")
            .withDatabaseName("payment_test")
            .withUsername("test")
            .withPassword("test");
    
    @Container
    static KafkaContainer kafka = 
        new KafkaContainer(
            DockerImageName.parse("confluentinc/cp-kafka:latest")
        );
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private PaymentRepository paymentRepository;
    
    @MockBean
    private AccountServiceClient accountServiceClient;
    
    @DynamicPropertySource
    static void properties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.kafka.bootstrap-servers", 
                    kafka::getBootstrapServers);
    }
    
    @Test
    void createPayment_EndToEnd_Success() {
        // Arrange
        CreatePaymentRequest request = CreatePaymentRequest.builder()
                .fromAccount("ACC001")
                .toAccount("ACC002")
                .amount(new BigDecimal("100.00"))
                .build();
        
        when(accountServiceClient.getBalance("ACC001"))
            .thenReturn(new AccountBalance(new BigDecimal("500.00")));
        
        // Act
        ResponseEntity<PaymentResponse> response = 
            restTemplate.postForEntity(
                "/api/v1/payments",
                request,
                PaymentResponse.class
            );
        
        // Assert
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals(PaymentStatus.COMPLETED, 
                    response.getBody().getStatus());
        
        // Verify database
        List<Payment> payments = paymentRepository.findAll();
        assertEquals(1, payments.size());
        assertEquals(new BigDecimal("100.00"), 
                    payments.get(0).getAmount());
    }
}
```

### 3. Contract Testing (Pact)

java

```java
// Consumer side (Payment Service)
@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "account-service")
class AccountServiceContractTest {
    
    @Pact(consumer = "payment-service")
    public RequestResponsePact getAccountBalance(PactDslWithProvider builder) {
        return builder
            .given("account ACC001 exists with balance 500")
            .uponReceiving("a request for account balance")
                .path("/api/v1/accounts/ACC001/balance")
                .method("GET")
                .headers("Authorization", "Bearer token")
            .willRespondWith()
                .status(200)
                .body(newJsonBody(body -> {
                    body.decimalType("availableBalance", 500.00);
                    body.decimalType("currentBalance", 500.00);
                    body.stringType("currency", "USD");
                }).build())
            .toPact();
    }
    
    @Test
    @PactTestFor(pactMethod = "getAccountBalance")
    void testGetAccountBalance(MockServer mockServer) {
        // Configure client to use mock server
        AccountServiceClient client = new AccountServiceClient(
            mockServer.getUrl()
        );
        
        // Test
        AccountBalance balance = client.getBalance("ACC001");
        
        assertEquals(new BigDecimal("500.00"), balance.getAvailableBalance());
        assertEquals("USD", balance.getCurrency());
    }
}

// Provider side (Account Service) - verifies it meets the contract
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@Provider("account-service")
@PactBroker(url = "https://pact-broker.company.com")
class AccountServiceProviderTest {
    
    @LocalServerPort
    private int port;
    
    @Autowired
    private AccountRepository accountRepository;
    
    @TestTemplate
    @ExtendWith(PactVerificationInvocationContextProvider.class)
    void pactVerificationTestTemplate(PactVerificationContext context) {
        context.verifyInteraction();
    }
    
    @BeforeEach
    void setUp(PactVerificationContext context) {
        context.setTarget(new HttpTestTarget("localhost", port));
    }
    
    @State("account ACC001 exists with balance 500")
    void accountExists() {
        // Setup test data
        Account account = new Account();
        account.setAccountId("ACC001");
        account.setBalance(new BigDecimal("500.00"));
        account.setCurrency("USD");
        accountRepository.save(account);
    }
}
```

### 4. Performance/Load Testing (Gatling)

scala

```scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class PaymentServiceLoadTest extends Simulation {
  
  val httpProtocol = http
    .baseUrl("https://api.bank.com")
    .header("Authorization", "Bearer ${token}")
    .header("Content-Type", "application/json")
  
  val scn = scenario("Payment Processing Load Test")
    .exec(http("Create Payment")
      .post("/api/v1/payments")
      .body(StringBody("""
        {
          "fromAccount": "ACC${accountNumber}",
          "toAccount": "ACC${randomAccount}",
          "amount": ${amount},
          "currency": "USD"
        }
      """)).asJson
      .check(status.is(201))
      .check(jsonPath("$.paymentId").saveAs("paymentId"))
    )
    .pause(1)
    .exec(http("Check Payment Status")
      .get("/api/v1/payments/${paymentId}")
      .check(status.is(200))
      .check(jsonPath("$.status").is("COMPLETED"))
    )
  
  setUp(
    scn.inject(
      rampUsersPerSec(1) to 100 during (2 minutes),  // Ramp up
      constantUsersPerSec(100) during (10 minutes),  // Steady load
      rampUsersPerSec(100) to 1 during (1 minute)    // Ramp down
    )
  ).protocols(httpProtocol)
   .assertions(
     global.responseTime.max.lt(2000),      // Max response < 2s
     global.successfulRequests.percent.gt(99.5)  // >99.5% success
   )
}
```

----------

## 11. Complete Implementation Example

### Payment Service - Full Code

**Project Structure:**

```
payment-service/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/bank/payment/
│   │   │       ├── controller/
│   │   │       │   └── PaymentController.java
│   │   │       ├── service/
│   │   │       │   ├── PaymentService.java
│   │   │       │   └── PaymentOrchestrator.java
│   │   │       ├── repository/
│   │   │       │   └── PaymentRepository.java
│   │   │       ├── model/
│   │   │       │   ├── Payment.java
│   │   │       │   └── PaymentStatus.java
│   │   │       ├── dto/
│   │   │       │   ├── PaymentRequest.java
│   │   │       │   └── PaymentResponse.java
│   │   │       ├── client/
│   │   │       │   ├── AccountServiceClient.java
│   │   │       │   └── FraudServiceClient.java
│   │   │       ├── event/
│   │   │       │   ├── PaymentEvent.java
│   │   │       │   └── PaymentEventPublisher.java
│   │   │       ├── exception/
│   │   │       │   ├── InsufficientBalanceException.java
│   │   │       │   └── GlobalExceptionHandler.java
│   │   │       └── config/
│   │   │           ├── SecurityConfig.java
│   │   │           └── KafkaConfig.java
│   │   └── resources/
│   │       ├── application.yml
│   │       └── db/migration/
│   │           └── V1__create_payment_tables.sql
│   └── test/
│       └── java/
│           └── com/bank/payment/
│               ├── PaymentServiceTest.java
│               └── PaymentIntegrationTest.java
├── Dockerfile
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
└── pom.xml
```

**Complete Payment Controller:**

java

```java
package com.bank.payment.controller;

import com.bank.payment.dto.*;
import com.bank.payment.service.PaymentService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

@RestController
@RequestMapping("/api/v1/payments")
@RequiredArgsConstructor
@Slf4j
@Validated
@Tag(name = "Payment API", description = "Payment processing endpoints")
public class PaymentController {
    
    private final PaymentService paymentService;
    
    @PostMapping
    @Operation(summary = "Create a new payment")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<PaymentResponse> createPayment(
            @Valid @RequestBody PaymentRequest request) {
        
        log.info("Received payment request: from={}, to={}, amount={}", 
                request.getFromAccount(), 
                request.getToAccount(), 
                request.getAmount());
        
        PaymentResponse response = paymentService.processPayment(request);
        
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/{paymentId}")
    @Operation(summary = "Get payment by ID")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<PaymentResponse> getPayment(
            @PathVariable @NotBlank String paymentId) {
        
        PaymentResponse response = paymentService.getPayment(paymentId);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/user/{userId}")
    @Operation(summary = "Get payments for a user")
    @PreAuthorize("#userId == authentication.name or hasRole('ADMIN')")
    public ResponseEntity<Page<PaymentResponse>> getUserPayments(
            @PathVariable String userId,
            Pageable pageable) {
        
        Page<PaymentResponse> payments = 
            paymentService.getPaymentsByUser(userId, pageable);
        
        return ResponseEntity.ok(payments);
    }
    
    @GetMapping("/account/{accountId}")
    @Operation(summary = "Get payments for an account")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Page<PaymentResponse>> getAccountPayments(
            @PathVariable String accountId,
            @RequestParam(required = false) PaymentStatus status,
            Pageable pageable) {
        
        Page<PaymentResponse> payments = paymentService
                .getPaymentsByAccount(accountId, status, pageable);
        
        return ResponseEntity.ok(payments);
    }
    
    @PostMapping("/{paymentId}/cancel")
    @Operation(summary = "Cancel a pending payment")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<PaymentResponse> cancelPayment(
            @PathVariable String paymentId) {
        
        PaymentResponse response = paymentService.cancelPayment(paymentId);
        return ResponseEntity.ok(response);
    }
    
    @PostMapping("/{paymentId}/refund")
    @Operation(summary = "Refund a completed payment")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaymentResponse> refundPayment(
            @PathVariable String paymentId,
            @Valid @RequestBody RefundRequest request) {
        
        PaymentResponse response = 
            paymentService.refundPayment(paymentId, request);
        
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/statistics")
    @Operation(summary = "Get payment statistics")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<PaymentStatistics> getStatistics(
            @RequestParam String startDate,
            @RequestParam String endDate) {
        
        PaymentStatistics stats = 
            paymentService.getStatistics(startDate, endDate);
        
        return ResponseEntity.ok(stats);
    }
}
```

**Payment Service Implementation:**

java

```java
package com.bank.payment.service;

import com.bank.payment.client.AccountServiceClient;
import com.bank.payment.client.FraudServiceClient;
import com.bank.payment.dto.*;
import com.bank.payment.event.PaymentEventPublisher;
import com.bank.payment.exception.*;
import com.bank.payment.model.Payment;
import com.bank.payment.model.PaymentStatus;
import com.bank.payment.repository.PaymentRepository;
import io.micrometer.core.instrument.Counter;
import io.micrometer.core.instrument.MeterRegistry;
import io.micrometer.core.instrument.Timer;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
@Slf4j
public class PaymentService {
    
    private final PaymentRepository paymentRepository;
    private final AccountServiceClient accountClient;
    private final FraudServiceClient fraudClient;
    private final PaymentEventPublisher eventPublisher;
    private final Counter paymentCounter;
    private final Timer paymentTimer;
    
    public PaymentService(
            PaymentRepository paymentRepository,
            AccountServiceClient accountClient,
            FraudServiceClient fraudClient,
            PaymentEventPublisher eventPublisher,
            MeterRegistry meterRegistry) {
        
        this.paymentRepository = paymentRepository;
        this.accountClient = accountClient;
        this.fraudClient = fraudClient;
        this.eventPublisher = eventPublisher;
        
        // Initialize metrics
        this.paymentCounter = Counter.builder("payments.total")
                .description("Total number of payment requests")
                .register(meterRegistry);
        
        this.paymentTimer = Timer.builder("payments.processing.time")
                .description("Payment processing duration")
                .register(meterRegistry);
    }
    
    @Transactional
    public PaymentResponse processPayment(PaymentRequest request) {
        
        return paymentTimer.record(() -> {
            paymentCounter.increment();
            
            log.info("Processing payment request: {}", request);
            
            // Step 1: Create payment record
            Payment payment = createPaymentRecord(request);
            
            try {
                // Step 2: Validate accounts
                validateAccounts(request);
                
                // Step 3: Check balance
                checkBalance(request.getFromAccount(), request.getAmount());
                
                // Step 4: Fraud detection
                performFraudCheck(payment);
                
                // Step 5: Execute payment
                payment.setStatus(PaymentStatus.PROCESSING);
                paymentRepository.save(payment);
                
                executePayment(payment);
                
                // Step 6: Update status
                payment.setStatus(PaymentStatus.COMPLETED);
                payment.setCompletedAt(LocalDateTime.now());
                payment = paymentRepository.save(payment);
                
                // Step 7: Publish event
                eventPublisher.publishPaymentCompleted(payment);
                
                log.info("Payment completed successfully: {}", 
                        payment.getPaymentId());
                
                return PaymentResponse.from(payment);
                
            } catch (Exception e) {
                log.error("Payment processing failed: {}", 
                         payment.getPaymentId(), e);
                
                payment.setStatus(PaymentStatus.FAILED);
                payment.setFailureReason(e.getMessage());
                paymentRepository.save(payment);
                
                eventPublisher.publishPaymentFailed(payment);
                
                throw e;
            }
        });
    }
    
    private Payment createPaymentRecord(PaymentRequest request) {
        
        Payment payment = Payment.builder()
                .paymentId(generatePaymentId())
                .userId(getCurrentUserId())
                .fromAccount(request.getFromAccount())
                .toAccount(request.getToAccount())
                .amount(request.getAmount())
                .currency(request.getCurrency())
                .paymentType(request.getPaymentType())
                .description(request.getDescription())
                .status(PaymentStatus.PENDING)
                .createdAt(LocalDateTime.now())
                .build();
        
        return paymentRepository.save(payment);
    }
    
    private void validateAccounts(PaymentRequest request) {
        
        // Verify source account exists and is active
        AccountInfo fromAccount = accountClient.getAccount(
            request.getFromAccount()
        );
        
        if (!fromAccount.isActive()) {
            throw new AccountNotActiveException(
                "Source account is not active"
            );
        }
        
        // Verify destination account exists
        AccountInfo toAccount = accountClient.getAccount(
            request.getToAccount()
        );
        
        if (!toAccount.isActive()) {
            throw new AccountNotActiveException(
                "Destination account is not active"
            );
        }
    }
    
    private void checkBalance(String accountId, BigDecimal amount) {
        
        AccountBalance balance = accountClient.getBalance(accountId);
        
        if (balance.getAvailableBalance().compareTo(amount) < 0) {
            throw new InsufficientBalanceException(
                "Insufficient balance. Available: " + 
                balance.getAvailableBalance() + 
                ", Required: " + amount
            );
        }
    }
    
    private void performFraudCheck(Payment payment) {
        
        FraudCheckRequest fraudRequest = FraudCheckRequest.builder()
                .paymentId(payment.getPaymentId())
                .userId(payment.getUserId())
                .fromAccount(payment.getFromAccount())
                .toAccount(payment.getToAccount())
                .amount(payment.getAmount())
                .build();
        
        FraudCheckResponse fraudResponse = 
            fraudClient.checkPayment(fraudRequest);
        
        if (fraudResponse.isBlocked()) {
            throw new FraudDetectedException(
                "Payment blocked by fraud detection. Risk score: " + 
                fraudResponse.getRiskScore()
            );
        }
        
        if (fraudResponse.requiresOtp()) {
            throw new OtpRequiredException(
                "Additional verification required"
            );
        }
    }
    
    private void executePayment(Payment payment) {
        
        TransactionRequest txnRequest = TransactionRequest.builder()
                .paymentId(payment.getPaymentId())
                .fromAccount(payment.getFromAccount())
                .toAccount(payment.getToAccount())
                .amount(payment.getAmount())
                .currency(payment.getCurrency())
                .build();
        
        TransactionResponse txnResponse = 
            accountClient.executeTransaction(txnRequest);
        
        payment.setTransactionId(txnResponse.getTransactionId());
        payment.setReferenceNumber(txnResponse.getReferenceNumber());
    }
    
    public PaymentResponse getPayment(String paymentId) {
        
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new PaymentNotFoundException(paymentId));
        
        return PaymentResponse.from(payment);
    }
    
    public Page<PaymentResponse> getPaymentsByUser(
            String userId, 
            Pageable pageable) {
        
        return paymentRepository.findByUserId(userId, pageable)
                .map(PaymentResponse::from);
    }
    
    public Page<PaymentResponse> getPaymentsByAccount(
            String accountId,
            PaymentStatus status,
            Pageable pageable) {
        
        if (status != null) {
            return paymentRepository.findByFromAccountAndStatus(
                accountId, status, pageable
            ).map(PaymentResponse::from);
        }
        
        return paymentRepository.findByFromAccountOrToAccount(
            accountId, accountId, pageable
        ).map(PaymentResponse::from);
    }
    
    @Transactional
    public PaymentResponse cancelPayment(String paymentId) {
        
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new PaymentNotFoundException(paymentId));
        
        if (payment.getStatus() != PaymentStatus.PENDING) {
            throw new PaymentCannotBeCancelledException(
                "Only pending payments can be cancelled"
            );
        }
        
        payment.setStatus(PaymentStatus.CANCELLED);
        payment.setCancelledAt(LocalDateTime.now());
        payment = paymentRepository.save(payment);
        
        eventPublisher.publishPaymentCancelled(payment);
        
        return PaymentResponse.from(payment);
    }
    
    @Transactional
    public PaymentResponse refundPayment(
            String paymentId, 
            RefundRequest request) {
        
        Payment originalPayment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new PaymentNotFoundException(paymentId));
        
        if (originalPayment.getStatus() != PaymentStatus.COMPLETED) {
            throw new PaymentCannotBeRefundedException(
                "Only completed payments can be refunded"
            );
        }
        
        // Create refund payment (reverse transaction)
        Payment refundPayment = Payment.builder()
                .paymentId(generatePaymentId())
                .userId(originalPayment.getUserId())
                .fromAccount(originalPayment.getToAccount())
                .toAccount(originalPayment.getFromAccount())
                .amount(request.getRefundAmount())
                .currency(originalPayment.getCurrency())
                .paymentType(PaymentType.REFUND)
                .description("Refund for payment " + paymentId)
                .status(PaymentStatus.COMPLETED)
                .createdAt(LocalDateTime.now())
                .completedAt(LocalDateTime.now())
                .build();
        
        refundPayment = paymentRepository.save(refundPayment);
        
        // Update original payment
        originalPayment.setStatus(PaymentStatus.REFUNDED);
        originalPayment.setRefundedAt(LocalDateTime.now());
        paymentRepository.save(originalPayment);
        
        eventPublisher.publishPaymentRefunded(refundPayment);
        
        return PaymentResponse.from(refundPayment);
    }
    
    private String generatePaymentId() {
        return "PAY-" + UUID.randomUUID().toString();
    }
    
    private String getCurrentUserId() {
        // Get from security context
        return SecurityContextHolder.getContext()
                .getAuthentication()
                .getName();
    }
}
```

**Application Configuration:**

yaml

```yaml
# application.yml
spring:
  application:
    name: payment-service
  
  datasource:
    url: jdbc:postgresql://localhost:5432/payment_db
    username: ${DB_USERNAME:postgres}
    password: ${DB_PASSWORD:password}
    driver-class-name: org.postgresql.Driver
    hikari:
      maximum-pool-size: 20
      minimum-idle: 5
      connection-timeout: 30000
      idle-timeout: 600000
      max-lifetime: 1800000
  
  jpa:
    hibernate:
      ddl-auto: validate
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
    show-sql: false
  
  flyway:
    enabled: true
    baseline-on-migrate: true
  
  kafka:
    bootstrap-servers: ${KAFKA_BOOTSTRAP_SERVERS:localhost:9092}
    producer:
      key-serializer: org.apache.kafka.common.serialization.StringSerializer
      value-serializer: org.springframework.kafka.support.serializer.JsonSerializer
      acks: all
      retries: 3
    consumer:
      group-id: payment-service
      key-deserializer: org.apache.kafka.common.serialization.StringDeserializer
      value-deserializer: org.springframework.kafka.support.serializer.JsonDeserializer
      properties:
        spring.json.trusted.packages: "*"
  
  redis:
    host: ${REDIS_HOST:localhost}
    port: ${REDIS_PORT:6379}
    password: ${REDIS_PASSWORD:}
    timeout: 2000ms

server:
  port: 8080
  compression:
    enabled: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: always
  metrics:
    export:
      prometheus:
        enabled: true

logging:
  level:
    com.bank.payment: INFO
    org.springframework: WARN
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n"

# Service clients
services:
  account:
    url: ${ACCOUNT_SERVICE_URL:http://localhost:8081}
    timeout: 5000
  fraud:
    url: ${FRAUD_SERVICE_URL:http://localhost:8082}
    timeout: 3000

# Security
jwt:
  secret: ${JWT_SECRET:your-secret-key}
  expiration: 900000  # 15 minutes

# Circuit breaker
resilience4j:
  circuitbreaker:
    instances:
      accountService:
        slidingWindowSize: 10
        failureRateThreshold: 50
        waitDurationInOpenState: 10s
        permittedNumberOfCallsInHalfOpenState: 3
      fraudService:
        slidingWindowSize: 10
        failureRateThreshold: 60
        waitDurationInOpenState: 15s
```

**Dockerfile:**

dockerfile

```dockerfile
# Multi-stage build
FROM maven:3.8-openjdk-17-slim AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy source and build
COPY src ./src
RUN mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Create non-root user
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring

# Copy jar from build stage
COPY --from=build /app/target/payment-service-*.jar app.jar

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/actuator/health || exit 1

# Run application
ENTRYPOINT ["java", \
  "-XX:+UseContainerSupport", \
  "-XX:MaxRAMPercentage=75.0", \
  "-Djava.security.egd=file:/dev/./urandom", \
  "-jar", \
  "app.jar"]
```

----------

## 12. Best Practices Summary

### Design Principles

1.  **Single Responsibility**: Each service does ONE thing well
2.  **Loose Coupling**: Services communicate through well-defined APIs
3.  **High Cohesion**: Related functionality stays together
4.  **Autonomous**: Services can be developed, deployed independently
5.  **Resilient**: Design for failure (circuit breakers, retries, fallbacks)

### Do's and Don'ts

**✅ DO:**

-   Use database per service pattern
-   Implement comprehensive logging and monitoring
-   Version your APIs (v1, v2)
-   Use async communication for non-critical operations
-   Implement circuit breakers for external calls
-   Cache frequently accessed data
-   Use feature flags for gradual rollouts
-   Write comprehensive tests
-   Document your APIs (Swagger/OpenAPI)
-   Implement health checks

**❌ DON'T:**

-   Share databases between services
-   Use synchronous calls for everything
-   Ignore monitoring and alerting
-   Deploy without proper testing
-   Hard-code configuration
-   Forget about security
-   Skip error handling
-   Ignore performance testing
-   Deploy to production on Friday 😄
-   Forget about data backup and recovery

----------

## 13. Troubleshooting Guide

### Common Issues and Solutions

**Problem 1: High Latency**

```
Symptoms: API responses taking > 2 seconds
Diagnosis:
  - Check database query performance
  - Look for N+1 query problems
  - Check external service calls
  - Review cache hit rates

Solutions:
  - Add database indexes
  - Implement caching (Redis)
  - Use async processing
  - Optimize queries with EXPLAIN ANALYZE
```

**Problem 2: Service Unavailability**

```
Symptoms: 503 Service Unavailable errors
Diagnosis:
  - Check pod status: kubectl get pods
  - Check logs: kubectl logs <pod-name>
  - Check resource usage: kubectl top pods
  - Check health endpoints

Solutions:
  - Scale up replicas
  - Increase resource limits
  - Fix application errors
  - Check database connectivity
```

**Problem 3: Data Inconsistency**

```
Symptoms: Account balances don't match transactions
Diagnosis:
  - Check transaction logs
  - Review event sourcing events
  - Look for failed compensating transactions

Solutions:
  - Implement idempotency
  - Use saga pattern correctly
  - Add reconciliation jobs
  - Implement eventual consistency monitoring
```

----------

## Conclusion

This comprehensive tutorial covered:

✅ **Architecture**: Microservices design patterns 
✅ **Services**: 7+ core banking services with implementations 
✅ **Communication**: Sync (REST) and Async (Kafka) patterns 
✅ **Data**: Database per service, CQRS, Event Sourcing
✅ **Security**: Multi-layer security, encryption, compliance 
✅ **Monitoring**: Metrics, logs, distributed tracing 
✅ **Testing**: Unit, integration, contract, performance tests 
✅ **Deployment**: CI/CD, Kubernetes, deployment strategies 
✅ **Real-World**: Actual case study with incident analysis
----------

_
