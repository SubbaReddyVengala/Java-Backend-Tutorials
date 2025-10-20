# Inversion of Control (IoC) & Dependency Injection (DI)

## Complete Technical Guide

----------

## Table of Contents

Understanding Inversion of Control (IoC)
The Problem IoC Solves
IoC Implementation Techniques
Dependency Injection Deep Dive
Types of Dependency Injection
IoC Container Architecture
Interview Questions

----------

## 1. Understanding Inversion of Control (IoC)



### What is Inversion of Control (IoC)?

**Simple Definition**: Instead of your code controlling the flow and creating objects, you give that control to a framework or container.

**Real-World Analogy**:

Think of a  **restaurant**:

-   **Without IoC**  (Traditional): You go to the kitchen, gather ingredients, cook your meal, serve yourself, and clean up.
-   **With IoC**: You sit at a table, order from a menu, and the restaurant (container) brings you the meal. The restaurant controls when and how your food is prepared.

You've  **inverted the control**  from yourself to the restaurant.

```
TRADITIONAL PROGRAMMING (Procedural):
┌──────────────────────────────────────┐
│  Your Code Controls Everything       │
│                                      │
│  main() {                            │
│    ├── Create Object A               │
│    ├── Create Object B               │
│    ├── Call Method 1                 │
│    ├── Call Method 2                 │
│    └── Destroy Objects               │
│  }                                   │
│                                      │
│  YOU CONTROL: What, When, How       │
└──────────────────────────────────────┘

INVERSION OF CONTROL:
┌──────────────────────────────────────┐
│  Framework Controls Your Code        │
│                                      │
│  Framework {                         │
│    ├── Framework creates objects     │
│    ├── Framework calls YOUR methods  │
│    ├── Framework manages lifecycle   │
│    └── Framework handles flow        │
│  }                                   │
│                                      │
│  FRAMEWORK CONTROLS: What, When, How│
└──────────────────────────────────────┘
```

### The Hollywood Principle

```
"Don't call us, we'll call you!"

Traditional:
YOU → Call → LIBRARY
(You initiate everything)

IoC:
FRAMEWORK → Calls → YOUR CODE
(Framework initiates, you respond)
```

### Real-World Analogy

```
SCENARIO: Ordering Food

WITHOUT IoC (You're cooking):
┌─────────────────────────────────┐
│  1. Buy ingredients             │
│  2. Prepare each item           │
│  3. Cook in specific order      │
│  4. Serve yourself              │
│  5. Clean up                    │
│                                 │
│  YOU control everything         │
└─────────────────────────────────┘

WITH IoC (Restaurant):
┌─────────────────────────────────┐
│  1. You: "I want pasta"         │
│  2. Restaurant handles:         │
│     ├── Has ingredients ready   │
│     ├── Knows cooking sequence  │
│     ├── Prepares and serves     │
│     └── Cleans up               │
│                                 │
│  RESTAURANT controls everything │
└─────────────────────────────────┘
```

----------

## 2. The Problem IoC Solves

### Problem 1: Tight Coupling

java

```java
// ❌ TIGHTLY COUPLED CODE (Bad)
public class OrderService {
    // Direct instantiation = Tight Coupling
    private MySQLDatabase database = new MySQLDatabase();
    private EmailService emailService = new EmailService();
    
    public void createOrder(Order order) {
        database.save(order);
        emailService.send("Order created");
    }
}

/*
PROBLEMS:
1. OrderService knows WHICH database (MySQL)
2. Cannot change to PostgreSQL without modifying code
3. Hard to test (cannot mock database)
4. Cannot reuse OrderService with different database
5. Creates new instances every time (memory waste)
*/
```

**Dependency Graph:**

```
OrderService (High-level)
    ├──> MySQLDatabase (Low-level)
    └──> EmailService (Low-level)
    
High-level module depends on low-level modules
This violates Dependency Inversion Principle!
```

### Problem 2: Hard to Test

java

```java
// ❌ IMPOSSIBLE TO TEST (Bad)
public class PaymentService {
    private BankAPI bankAPI = new BankAPI(); // Real bank connection!
    
    public boolean processPayment(double amount) {
        return bankAPI.charge(amount); // Charges real money in tests!
    }
}

/*
TEST PROBLEMS:
1. Cannot run tests without actual bank connection
2. Tests are slow (network calls)
3. Tests cost money (real charges)
4. Cannot simulate edge cases (failures, timeouts)
*/
```

### Problem 3: Configuration Nightmare

java

```java
// ❌ CONFIGURATION SCATTERED (Bad)
public class Application {
    public static void main(String[] args) {
        // Configuration everywhere
        Database db = new Database("localhost", 3306, "user", "pass");
        Cache cache = new Cache("redis://localhost", 6379);
        Logger logger = new Logger("/var/log/app.log", "INFO");
        
        EmailService email = new EmailService("smtp.gmail.com", 587);
        UserRepository repo = new UserRepository(db, cache, logger);
        UserService service = new UserService(repo, email, logger);
        UserController controller = new UserController(service, logger);
        
        // 50+ more objects...
    }
}

/*
PROBLEMS:
1. Configuration scattered across codebase
2. Hard to change (modify multiple places)
3. Order matters (dependencies must be created first)
4. Memory management manual
5. No centralized control
*/
```

### Problem 4: Object Lifecycle Management

java

```java
// ❌ MANUAL LIFECYCLE (Bad)
public class Application {
    public static void main(String[] args) {
        Connection conn = DriverManager.getConnection(url);
        
        try {
            // Use connection
            executeQueries(conn);
        } finally {
            conn.close(); // Must remember to close!
        }
        
        // What if exception before close?
        // What if multiple connections?
        // Who manages connection pool?
    }
}
```

----------

## 3. IoC Implementation Techniques

### Technique 1: Dependency Injection (Most Common ⭐)

java

```java
// ✓ LOOSELY COUPLED WITH DI (Good)
public class OrderService {
    private final Database database;
    private final EmailService emailService;
    
    // Dependencies INJECTED via constructor
    public OrderService(Database database, EmailService emailService) {
        this.database = database;
        this.emailService = emailService;
    }
    
    public void createOrder(Order order) {
        database.save(order);
        emailService.send("Order created");
    }
}

// Usage with IoC Container:
// Spring automatically creates and injects dependencies
@Service
public class OrderService {
    private final Database database;
    private final EmailService emailService;
    
    @Autowired // Spring injects dependencies
    public OrderService(Database database, EmailService emailService) {
        this.database = database;
        this.emailService = emailService;
    }
}
```




### What is Dependency Injection (DI)?

**Simple Definition**: Instead of creating the objects your class needs (dependencies), those objects are "injected" into your class from outside.

**Real-World Analogy**:

Think of a  **car and engine**:

-   **Without DI**: The car builds its own engine internally. If you want a different engine, you must redesign the car.
-   **With DI**: The car receives an engine from outside. You can swap engines without changing the car's design.

----------

## Memory Visualization

### Without Dependency Injection

```
HEAP MEMORY
┌─────────────────────────────────────┐
│  UserService Object                 │
│  ┌───────────────────────────────┐ │
│  │ - emailService (reference)    │ │
│  │   │                           │ │
│  │   └──────┐                    │ │
│  └──────────│────────────────────┘ │
│             │                       │
│             ▼                       │
│  ┌───────────────────────────────┐ │
│  │  EmailService Object          │ │
│  │  (created by UserService)     │ │
│  │  - tightly coupled            │ │
│  └───────────────────────────────┘ │
│                                     │
│  ❌ UserService controls creation   │
│  ❌ Hard to test or change          │
└─────────────────────────────────────┘
```

### With Dependency Injection

```
HEAP MEMORY
┌─────────────────────────────────────┐
│  IoC Container                      │
│  ┌───────────────────────────────┐ │
│  │ Manages all objects           │ │
│  └───────────────────────────────┘ │
│             │                       │
│             ├──────┐                │
│             ▼      ▼                │
│  ┌──────────────┐ ┌──────────────┐ │
│  │ EmailService │ │ UserService  │ │
│  │   Object     │ │   Object     │ │
│  └──────────────┘ └──────────────┘ │
│         ▲                │          │
│         │                │          │
│         └────────────────┘          │
│    (Container injects dependency)   │
│                                     │
│  ✅ Container controls creation      │
│  ✅ Loose coupling                   │
│  ✅ Easy to test with mocks          │
└─────────────────────────────────────┘
```
DEPENDENCY = Object that another object needs to function

WITHOUT DI:
```
┌─────────────────────┐
│   OrderService      │
│                     │
│   "I need a DB"     │
│   ↓                 │
│   new Database()    │ ← Creates its own dependency
└─────────────────────┘

WITH DI:
┌─────────────────────┐    ┌──────────────┐
│   OrderService      │    │ IoC Container│
│                     │    │              │
│   "I need a DB"     │←───│ "Here's DB"  │
│   (constructor)     │    │ (injection)  │
└─────────────────────┘    └──────────────┘
                           Someone else provides dependency
```

### DI Terminology

```
TERMINOLOGY:

1. CLIENT
   └── Class that depends on other classes
       Example: OrderService

2. SERVICE/DEPENDENCY
   └── Class that is needed by client
       Example: Database, EmailService

3. INJECTOR (IoC Container)
   └── Framework that provides dependencies
       Example: Spring ApplicationContext

4. INTERFACE
   └── Contract that dependency implements
       Example: Database interface

Flow:
Client → Declares dependency → Injector → Creates/provides → Service
```

### Why DI? The Benefits

```
BENEFITS OF DEPENDENCY INJECTION:

1. LOOSE COUPLING
   ┌─────────────┐         ┌─────────────┐
   │OrderService │ ────→   │  Interface  │
   └─────────────┘         └──────┬──────┘
                                  │
                    ┌─────────────┼─────────────┐
                    ↓             ↓             ↓
              MySQLDatabase  PostgreSQL   MongoDatabase
   
   OrderService doesn't know which implementation!

2. TESTABILITY
   Production:
   OrderService → RealDatabase
   
   Testing:
   OrderService → MockDatabase (no real DB needed!)

3. MAINTAINABILITY
   Change implementation in ONE place (config)
   All clients automatically get new implementation

4. REUSABILITY
   Same OrderService works with any Database implementation

5. PARALLEL DEVELOPMENT
   Team A: Develops OrderService (uses interface)
   Team B: Develops Database (implements interface)
   No blocking!
```

----------

## 5. Types of Dependency Injection

### 1. Constructor Injection (Recommended ⭐)
java

```java
class UserService {
    private final NotificationService notificationService;
    
    // Dependencies injected through constructor
    public UserService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
}
```

**Pros**: Immutable, all dependencies required at creation, easy to test


java

```java
@Service
public class OrderService {
    
    private final PaymentService paymentService;
    private final EmailService emailService;
    private final AuditLogger auditLogger;
    
    // All dependencies injected via constructor
    @Autowired // Optional in Spring 4.3+ if only one constructor
    public OrderService(
        PaymentService paymentService,
        EmailService emailService,
        AuditLogger auditLogger
    ) {
        this.paymentService = paymentService;
        this.emailService = emailService;
        this.auditLogger = auditLogger;
    }
    
    public Order createOrder(OrderRequest request) {
        auditLogger.log("Creating order");
        Order order = new Order(request);
        paymentService.charge(order);
        emailService.sendConfirmation(order);
        return order;
    }
}
```

**Constructor Injection Flow:**

```
SPRING CONTAINER STARTUP:

1. Scan for @Service classes
   ├── Found: OrderService
   ├── Found: PaymentService
   └── Found: EmailService

2. Analyze dependencies
   OrderService needs:
   ├── PaymentService ✓
   ├── EmailService ✓
   └── AuditLogger ✓

3. Create beans in order
   ├── Create: AuditLogger (no dependencies)
   ├── Create: PaymentService (no dependencies)
   ├── Create: EmailService (no dependencies)
   └── Create: OrderService(payment, email, audit)

4. Call constructor with dependencies
   new OrderService(paymentService, emailService, auditLogger)

5. Bean ready to use ✓
```

**Benefits:**

```
✓ IMMUTABLE - Dependencies are final
✓ MANDATORY - Cannot create object without dependencies
✓ TESTABLE - Easy to pass mocks in tests
✓ SAFE - Null-safe (fails fast if dependency missing)
✓ BEST PRACTICE - Recommended by Spring team

Example Test:
@Test
void testOrderCreation() {
    // Easy to inject mocks
    PaymentService mockPayment = mock(PaymentService.class);
    EmailService mockEmail = mock(EmailService.class);
    AuditLogger mockAudit = mock(AuditLogger.class);
    
    OrderService service = new OrderService(
        mockPayment, mockEmail, mockAudit
    );
    
    // Test with full control
    service.createOrder(request);
    verify(mockPayment).charge(any());
}
```

### 2. Setter Injection
java

```java
class UserService {
    private NotificationService notificationService;
    
    // Dependencies injected through setter
    public void setNotificationService(NotificationService service) {
        this.notificationService = service;
    }
}
```

**Pros**: Optional dependencies, can change dependencies at runtime  **Cons**: Object can be in incomplete state
java

```java
@Service
public class UserService {
    
    private NotificationService notificationService;
    private CacheService cacheService;
    
    // Optional dependency via setter
    @Autowired(required = false) // Optional dependency
    public void setNotificationService(NotificationService service) {
        this.notificationService = service;
    }
    
    // Required dependency via setter
    @Autowired
    public void setCacheService(CacheService service) {
        this.cacheService = service;
    }
    
    public User getUser(Long id) {
        // Check if optional dependency exists
        if (cacheService != null) {
            User cached = cacheService.get(id);
            if (cached != null) return cached;
        }
        
        User user = fetchFromDatabase(id);
        
        // Use optional notification
        if (notificationService != null) {
            notificationService.notify("User fetched: " + id);
        }
        
        return user;
    }
}
```

**Setter Injection Flow:**

```
SPRING CONTAINER:

1. Create bean using no-arg constructor
   UserService userService = new UserService();
   (At this point, dependencies are NULL!)

2. Call setter methods
   userService.setNotificationService(notificationService);
   userService.setCacheService(cacheService);

3. Bean ready (but was temporarily incomplete)
```

**Benefits & Drawbacks:**

```
✓ OPTIONAL DEPENDENCIES - Can be null
✓ RE-CONFIGURABLE - Can change dependency at runtime
✓ CIRCULAR DEPENDENCIES - Can break circular references

❌ MUTABLE - Fields not final
❌ INCOMPLETE STATE - Object exists without dependencies
❌ HIDDEN DEPENDENCIES - Not obvious what's required
❌ NULL CHECKS - Must check if dependency exists
```

**When to Use:**

```
Use Setter Injection when:
├── Dependency is optional
├── Want to change dependency at runtime
├── Breaking circular dependency
└── Integrating with legacy code

Otherwise, prefer Constructor Injection ⭐
```

### 3. Field Injection (Avoid in Production)

java

```java
class UserService {
    @Inject // or @Autowired in Spring
    private NotificationService notificationService;
}
```

**Pros**: Less boilerplate code  **Cons**: Hard to test, breaks immutability, hides dependencies
java

```java
@Service
public class ProductService {
    
    @Autowired // Direct field injection
    private InventoryService inventoryService;
    
    @Autowired
    private PricingService pricingService;
    
    public Product getProduct(Long id) {
        Product product = fetchProduct(id);
        product.setStock(inventoryService.getStock(id));
        product.setPrice(pricingService.getPrice(id));
        return product;
    }
}
```

**Field Injection Flow:**

```
SPRING CONTAINER:

1. Create bean using no-arg constructor
   ProductService service = new ProductService();
   (dependencies are NULL)

2. Use REFLECTION to set fields
   Field field = ProductService.class.getDeclaredField("inventoryService");
   field.setAccessible(true); // Break encapsulation!
   field.set(service, inventoryService);

3. Bean ready (via reflection magic)
```

**Why Field Injection is Bad:**

```
❌ CANNOT USE FINAL - Fields must be mutable
❌ HARD TO TEST - Cannot easily inject mocks
❌ BREAKS ENCAPSULATION - Uses reflection
❌ HIDDEN DEPENDENCIES - Not in constructor signature
❌ NO COMPILE-TIME SAFETY - Fails at runtime only
❌ IDE WARNINGS - IntelliJ shows "Field injection is not recommended"

Example Testing Problem:
@Test
void testProduct() {
    ProductService service = new ProductService();
    // How do I set inventoryService? It's private!
    // Must use reflection in tests too!
    
    // vs Constructor Injection:
    ProductService service = new ProductService(mockInventory, mockPricing);
    // Clean and simple!
}
```

**Spring Team Recommendation:**

```
"Field injection should be avoided in favor of 
constructor injection wherever possible."
- Spring Framework Documentation

Exception: Use in test classes with @MockBean
```

### Comparison Table

```
TYPE              | RECOMMENDED | USE CASE
──────────────────┼─────────────┼────────────────────
Constructor       | ⭐⭐⭐⭐⭐   | Default choice
Setter            | ⭐⭐⭐      | Optional dependencies
Field             | ⭐          | Testing only (avoid)
Method            | ⭐⭐⭐      | Prototype in Singleton
```

----------

## 6. IoC Container Architecture

### Spring IoC Container Types

```
IOC CONTAINER HIERARCHY:

┌───────────────────────────────────────┐
│         BeanFactory                   │
│  (Basic Container - Interface)        │
│  ├── getBean()                        │
│  ├── containsBean()                   │
│  └── isSingleton()                    │
└─────────────┬─────────────────────────┘
              │ extends
              ↓
┌───────────────────────────────────────┐
│    ApplicationContext                 │
│  (Advanced Container - Interface)     │
│  ├── Everything from BeanFactory      │
│  ├── Event publishing                 │
│  ├── Internationalization (i18n)      │
│  ├── Resource loading                 │
│  └── Environment abstraction          │
└─────────────┬─────────────────────────┘
              │ implements
              ↓
┌───────────────────────────────────────┐
│  Concrete Implementations:            │
│  ├── ClassPathXmlApplicationContext   │
│  ├── FileSystemXmlApplicationContext  │
│  ├── AnnotationConfigApplicationContext│
│  └── WebApplicationContext            │
└───────────────────────────────────────┘
```

### BeanFactory vs ApplicationContext

```
BEANFACTORY (Lightweight):
┌─────────────────────────────────┐
│  Features:                      │
│  ├── Basic DI support           │
│  ├── LAZY initialization        │
│  ├── Bean lifecycle callbacks   │
│  └── ~50 KB memory footprint    │
│                                 │
│  When to use:                   │
│  ├── IoT devices                │
│  ├── Mobile apps                │
│  └── Memory-constrained env     │
└─────────────────────────────────┘

APPLICATIONCONTEXT (Feature-rich): ⭐
┌─────────────────────────────────┐
│  Features:                      │
│  ├── Full DI support            │
│  ├── EAGER initialization       │
│  ├── Annotation support         │
│  ├── AOP integration            │
│  ├── Event mechanism            │
│  ├── i18n support               │
│  ├── Resource loading           │
│  └── ~200 KB memory footprint   │
│                                 │
│  When to use:                   │
│  ├── Web applications (99%)     │
│  ├── Enterprise apps            │
│  └── Spring Boot apps           │
└─────────────────────────────────┘
```

### IoC Container Internal Architecture

```
APPLICATION CONTEXT INTERNAL STRUCTURE:

┌────────────────────────────────────────────────┐
│         APPLICATION CONTEXT                    │
├────────────────────────────────────────────────┤
│  Bean Definition Registry                      │
│  ┌──────────────────────────────────────────┐ │
│  │ Map<String, BeanDefinition>              │ │
│  │ ├── "userService" → BeanDefinition       │ │
│  │ ├── "orderService" → BeanDefinition      │ │
│  │ └── "dataSource" → BeanDefinition        │ │
│  └──────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│  Singleton Bean Cache                          │
│  ┌──────────────────────────────────────────┐ │
│  │ Map<String, Object>                      │ │
│  │ ├── "userService" → UserService@0x1a2b  │ │
│  │ ├── "orderService" → OrderService@0x3c4d│ │
│  │ └── "dataSource" → HikariCP@0x5e6f      │ │
│  └──────────────────────────────────────────┘ │
├────────────────────────────────────────────────┤
│  Bean Post Processors                          │
│  ├── AutowiredAnnotationBeanPostProcessor     │
│  ├── CommonAnnotationBeanPostProcessor        │
│  └── Custom processors...                      │
├────────────────────────────────────────────────┤
│  Environment                                   │
│  ├── Property sources                          │
│  ├── Profiles                                  │
│  └── System properties                         │
├────────────────────────────────────────────────┤
│  Event Multicaster                             │
│  └── Application event listeners               │
└────────────────────────────────────────────────┘
```

### Container Startup Process

```
IOC CONTAINER INITIALIZATION:

1. LOAD BEAN DEFINITIONS
   ┌─────────────────────────────────┐
   │ @ComponentScan                  │
   │ ├── Scan packages               │
   │ ├── Find @Component classes     │
   │ └── Register BeanDefinitions    │
   └─────────────────────────────────┘
   Time: ~100-500ms
   
2. REGISTER POST PROCESSORS
   ┌─────────────────────────────────┐
   │ Register BeanPostProcessors     │
   │ ├── @Autowired handler          │
   │ ├── @Value handler              │
   │ └── @PostConstruct handler      │
   └─────────────────────────────────┘
   Time: ~50ms

3. INSTANTIATE BEANS
   ┌─────────────────────────────────┐
   │ Create beans in dependency order│
   │ ├── No dependencies first       │
   │ ├── Then dependent beans        │
   │ └── Resolve circular references │
   └─────────────────────────────────┘
   Time: ~500-2000ms (depends on beans)

4. DEPENDENCY INJECTION
   ┌─────────────────────────────────┐
   │ Wire dependencies               │
   │ ├── Constructor injection       │
   │ ├── Setter injection            │
   │ └── Field injection             │
   └─────────────────────────────────┘
   Time: ~200-500ms

5. INITIALIZATION CALLBACKS
   ┌─────────────────────────────────┐
   │ Call initialization methods     │
   │ ├── @PostConstruct              │
   │ ├── afterPropertiesSet()        │
   │ └── init-method                 │
   └─────────────────────────────────┘
   Time: Varies

6. READY STATE ✓
   Container ready to serve beans
   Total Time: ~1-3 seconds typical app
```

### Memory Layout

```
JVM HEAP MEMORY DURING RUNTIME:

┌──────────────────────────────────────────────┐
│  Spring ApplicationContext Memory            │
├──────────────────────────────────────────────┤
│  Metadata (BeanDefinitions)    │ ~10-20 MB   │
│  ├── Class information         │             │
│  ├── Dependency metadata       │             │
│  └── Configuration data        │             │
├──────────────────────────────────────────────┤
│  Singleton Bean Instances      │ ~50-200 MB  │
│  ├── @Service beans            │             │
│  ├── @Repository beans         │             │
│  ├── @Controller beans         │             │
│  └── @Component beans          │             │
├──────────────────────────────────────────────┤
│  Prototype Beans (per request) │ ~1-10 MB    │
│  └── Created on demand         │             │
├──────────────────────────────────────────────┤
│  Infrastructure                │ ~30-50 MB   │
│  ├── Thread pools              │             │
│  ├── Connection pools          │             │
│  └── Caches                    │             │
├──────────────────────────────────────────────┤
│  Total Typical Application     │ ~100-300 MB │
└──────────────────────────────────────────────┘
```

----------

## 7. Real-World Examples

### Example 1: E-Commerce Order Processing

java

```java
// Problem: Complex order processing with multiple dependencies

// Interface-based design (loose coupling)
public interface PaymentGateway {
    PaymentResult charge(Order order);
}

public interface NotificationService {
    void sendOrderConfirmation(Order order);
}

public interface InventoryService {
    void reserveStock(Order order);
}

// Implementations
@Service
public class StripePaymentGateway implements PaymentGateway {
    public PaymentResult charge(Order order) {
        // Stripe API integration
        return new PaymentResult(true, "txn_123");
    }
}

@Service
public class EmailNotificationService implements NotificationService {
    public void sendOrderConfirmation(Order order) {
        // Send email via SMTP
        System.out.println("Email sent to: " + order.getCustomerEmail());
    }
}

@Service
public class DatabaseInventoryService implements InventoryService {
    @Autowired
    private InventoryRepository repository;
    
    public void reserveStock(Order order) {
        order.getItems().forEach(item -> 
            repository.decrementStock(item.getProductId(), item.getQuantity())
        );
    }
}

// Main service using DI
@Service
public class OrderProcessingService {
    
    private final PaymentGateway paymentGateway;
    private final NotificationService notificationService;
    private final InventoryService inventoryService;
    private final OrderRepository orderRepository;
    
    // Constructor injection - all dependencies provided by Spring
    @Autowired
    public OrderProcessingService(
        PaymentGateway paymentGateway,
        NotificationService notificationService,
        InventoryService inventoryService,
        OrderRepository orderRepository
    ) {
        this.paymentGateway = paymentGateway;
        this.notificationService = notificationService;
        this.inventoryService = inventoryService;
        this.orderRepository = orderRepository;
    }
    
    @Transactional
    public Order processOrder(OrderRequest request) {
        // Business logic only - no object creation!
        Order order = new Order(request);
        
        // 1. Charge payment
        PaymentResult payment = paymentGateway.charge(order);
        if (!payment.isSuccessful()) {
            throw new PaymentFailedException();
        }
        order.setPaymentId(payment.getTransactionId());
        
        // 2. Reserve inventory
        inventoryService.reserveStock(order);
        
        // 3. Save order
        Order savedOrder = orderRepository.save(order);
        
        // 4. Send notification
        notificationService.sendOrderConfirmation(savedOrder);
        
        return savedOrder;
    }
}
```

**Benefits Demonstrated:**

```
1. LOOSE COUPLING
   OrderProcessingService → PaymentGateway interface
   Can switch from Stripe to PayPal without changing OrderProcessingService

2. EASY TESTING
   @Test
   void testOrderProcessing() {
       // Mock all dependencies
       PaymentGateway mockGateway = mock(PaymentGateway.class);
       when(mockGateway.charge(any())).thenReturn(successResult);
       
       OrderProcessingService service = new OrderProcessingService(
           mockGateway, mockNotification, mockInventory, mockRepo
       );
       
       // Test in isolation
       Order result = service.processOrder(request);
       verify(mockGateway).charge(any());
   }

3. CONFIGURATION FLEXIBILITY
   @Profile("stripe")
   @Service
   public class StripePaymentGateway implements PaymentGateway { }
   
   @Profile("paypal")
   @Service
   public class PayPalPaymentGateway implements PaymentGateway { }
   
   Switch payment provider via application.properties:
   spring.profiles.active=stripe

4. PARALLEL DEVELOPMENT
   Team A: Develops OrderProcessingService (uses interfaces)
   Team B: Implements StripePaymentGateway
   Team C: Implements EmailNotificationService
   No blocking - all work in parallel!
```


**Request Flow:**

```
HTTP REQUEST FLOW:

Request 1: X-Tenant-ID: tenant-A
   ├── Create TenantContext@1 (tenant-A)
   ├── CustomerController gets TenantContext@1
   ├── CustomerService gets TenantContext@1
   └── Returns customers for tenant-A

Request 2: X-Tenant-ID: tenant-B (concurrent)
   ├── Create TenantContext@2 (tenant-B)
   ├── CustomerController gets TenantContext@2
   ├── CustomerService gets TenantContext@2
   └── Returns customers for tenant-B

Each request isolated via request-scoped beans!
IoC Container manages this automatically.
```

### Example 3: Testing with Dependency Injection

java

```java
// Production code
@Service
public class ReportGeneratorService {
    
    private final DataFetchingService dataService;
    private final PdfGeneratorService pdfService;
    private final EmailService emailService;
    
    @Autowired
    public ReportGeneratorService(
        DataFetchingService dataService,
        PdfGeneratorService pdfService,
        EmailService emailService
    ) {
        this.dataService = dataService;
        this.pdfService = pdfService;
        this.emailService = emailService;
    }
    
    public void generateAndSendReport(ReportRequest request) {
        List<Data> data = dataService.fetchData(request);
        byte[] pdf = pdfService.generate(data);
        emailService.send(request.getRecipient(), pdf);
    }
}

// Easy unit testing with mocks
@ExtendWith(MockitoExtension.class)
class ReportGeneratorServiceTest {
    
    @Mock
    private DataFetchingService mockDataService;
    
    @Mock
    private PdfGeneratorService mockPdfService;
    
    @Mock
    private EmailService mockEmailService;
    
    @InjectMocks
    private ReportGeneratorService reportService;
    
    @Test
    void shouldGenerateAndSendReport() {
        // Arrange
        ReportRequest request = new ReportRequest("test@example.com");
        List<Data> testData = Arrays.asList(new Data("test"));
        byte[] testPdf = new byte[]{1, 2, 3};
        
        when(mockDataService.fetchData(request)).thenReturn(testData);
        when(mockPdfService.generate(testData)).thenReturn(testPdf);
        
        // Act
        reportService.generateAndSendReport(request);
        
        // Assert
        verify(mockDataService).fetchData(request);
        verify(mockPdfService).generate(testData);
        verify(mockEmailService).send("test@example.com", testPdf);
    }
    
    @Test
    void shouldHandleDataFetchingFailure() {
        // Test error scenarios easily
        when(mockDataService.fetchData(any()))
            .thenThrow(new DataFetchException());
        
        assertThrows(DataFetchException.class, () -> {
            reportService.generateAndSendReport(new ReportRequest("test"));
        });
        
        // Verify email not sent on failure
        verify(mockEmailService, never()).send(any(), any());
    }
}
```

**Without DI (Impossible to Test):**

java

```java
// ❌ BAD - Cannot test
@Service
public class ReportGeneratorService {
    
    // Direct instantiation
    private DataFetchingService dataService = new DataFetchingService();
    private PdfGeneratorService pdfService = new PdfGeneratorService();
    private EmailService emailService = new EmailService();
    
    // How do you mock these? You can't!
    // Tests will use real services = slow, expensive, unreliable
}
```

----------

## 10. Interview Questions & Answers

### Q1: What is Inversion of Control?

**Answer:**

```
Inversion of Control is a design principle where the control 
flow is inverted compared to traditional programming.

Traditional: Your code controls object creation and flow
IoC: Framework controls object creation and calls your code

Example:
- Traditional: main() → create objects → call methods
- IoC: Framework → creates objects → calls your methods

Benefits:
✓ Loose coupling
✓ Easy testing
✓ Better maintainability
✓ Separation of concerns
```

### Q2: What is Dependency Injection?

**Answer:**

```
Dependency Injection is a design pattern where an object 
receives its dependencies from external source rather than 
creating them itself.

Types:
1. Constructor Injection (recommended)
2. Setter Injection
3. Field Injection (avoid)

Example:
class OrderService {
    private PaymentService paymentService;
    
    // DI via constructor
    OrderService(PaymentService ps) {
        this.paymentService = ps; // Injected by Spring
    }
}

Benefits:
✓ Testability (can inject mocks)
✓ Flexibility (can change implementation)
✓ Loose coupling (depends on interface)
```

### Q3: Difference between IoC and DI?

**Answer:**

```
IoC is a PRINCIPLE (What)
DI is a PATTERN (How)

IoC: General principle of inverting control flow
DI: Specific technique to implement IoC

Analogy:
IoC = "Restaurant serves you" (principle)
DI = "Waiter brings food to your table" (implementation)

Other IoC implementations:
- Service Locator Pattern
- Factory Pattern
- Template Method Pattern

DI is the most popular way to achieve IoC in Spring.
```

### Q4: Why Constructor Injection over Field Injection?

**Answer:**

```
Constructor Injection is better because:

1. IMMUTABILITY
   - Can use 'final' keyword
   - Object state cannot change after creation

2. TESTABILITY
   - Easy to pass mocks in tests
   - No reflection needed

3. NULL-SAFETY
   - Cannot create object without dependencies
   - Fails fast if dependency missing

4. EXPLICIT DEPENDENCIES
   - Clear what object needs
   - Visible in constructor signature

Field Injection problems:
❌ Cannot use 'final'
❌ Hard to test (need reflection)
❌ Hidden dependencies
❌ Can be in incomplete state
```

### Q5: How does Spring resolve circular dependencies?

**Answer:**

```
Problem: A → B, B → A

Spring's Solution (for setter injection):

1. Create instance of A (constructor)
2. Create instance of B (constructor)
3. Inject B into A (setter)
4. Inject A into B (setter)

For constructor injection:
- Spring cannot resolve automatically
- Error: BeanCurrentlyInCreationException

Solutions:
1. Use @Lazy on one dependency
2. Use setter injection instead
3. Refactor design (best)

Example with @Lazy:
@Service
class A {
    A(@Lazy B b) { } // Proxy injected, breaks cycle
}
```

### Q6: BeanFactory vs ApplicationContext?

**Answer:**

```
BEANFACTORY:
- Basic container
- Lazy initialization
- Limited features
- Lightweight (~50KB)
- Use case: IoT, Mobile

APPLICATIONCONTEXT:
- Advanced container
- Eager initialization
- Full features (AOP, i18n, events)
- Heavier (~200KB)
- Use case: Enterprise apps (99%)

Relationship:
ApplicationContext extends BeanFactory

In Spring Boot, ApplicationContext is default.
```

### Q7: What are Bean Scopes?

**Answer:**

```
Bean scopes control lifecycle and instances:

1. SINGLETON (default)
   - One instance per container
   - Shared across application
   - Most memory efficient

2. PROTOTYPE
   - New instance every request
   - Not cached
   - Higher memory usage

3. REQUEST (web only)
   - One per HTTP request

4. SESSION (web only)
   - One per HTTP session

5. APPLICATION (web only)
   - One per ServletContext

Example:
@Service // Singleton by default
@Scope("prototype") // Change to prototype
public class ReportGenerator { }
```

### Q8: How to inject multiple implementations?

**Answer:**

```
Problem: Multiple beans of same type

Solutions:

1. @Qualifier
   @Autowired
   @Qualifier("email")
   NotificationService service;

2. @Primary
   @Service
   @Primary
   class EmailService implements NotificationService { }

3. List injection
   @Autowired
   List<NotificationService> services; // All implementations

4. Map injection
   @Autowired
   Map<String, NotificationService> services; 
   // Key = bean name

5. @Resource (by name)
   @Resource(name = "emailService")
   NotificationService service;
```

### Q9: Explain Bean Lifecycle

**Answer:**

```
BEAN LIFECYCLE:

1. Instantiation
   - Constructor called

2. Property Population
   - @Autowired dependencies injected

3. Bean Name Aware
   - setBeanName() if implements BeanNameAware

4. BeanPostProcessor - Before
   - postProcessBeforeInitialization()

5. Initialization
   - @PostConstruct method
   - afterPropertiesSet()
   - init-method

6. BeanPostProcessor - After
   - postProcessAfterInitialization()

7. Bean Ready ✓

8. Destruction (on shutdown)
   - @PreDestroy method
   - destroy()
   - destroy-method

Use @PostConstruct for initialization logic
Use @PreDestroy for cleanup logic
```

### Q10: Best practices for DI?

**Answer:**

```
BEST PRACTICES:

1. Use Constructor Injection
   ✓ Immutable, testable, explicit

2. Program to Interfaces
   ✓ Loose coupling, flexibility

3. Keep Beans Stateless
   ✓ Thread-safe, reusable

4. Use @Qualifier for multiple implementations
   ✓ Clear intention

5. Avoid circular dependencies
   ✓ Better design

6. Use @Profile for environment-specific beans
   ✓ Cleaner configuration

7. Validate dependencies in constructor
   ✓ Fail fast

8. Don't use 'new' for Spring beans
   ✓ Let Spring manage lifecycle

9. Prefer @Component over @Bean for your classes
   ✓ Less boilerplate

10. Use @Lazy sparingly
    ✓ Only when needed for performance
```

----------

## Summary: Key Takeaways

```
IOC & DEPENDENCY INJECTION ESSENCE:

┌────────────────────────────────────────────┐
│  IoC = Framework controls your code        │
│  DI = Inject dependencies, don't create    │
│                                            │
│  WHY?                                      │
│  ✓ Loose coupling                          │
│  ✓ Easy testing                            │
│  ✓ Better maintainability                  │
│  ✓ Flexibility                             │
│  ✓ Reusability                             │
│                                            │
│  HOW?                                      │
│  1. Constructor Injection (recommended)    │
│  2. Setter Injection (optional deps)       │
│  3. Field Injection (avoid)                │
│                                            │
│  REMEMBER:                                 │
│  • Don't use 'new' for Spring beans       │
│  • Program to interfaces                   │
│  • Keep beans stateless                    │
│  • Use constructor injection               │
│  • Let Spring manage lifecycle             │
└────────────────────────────────────────────┘
```

**Final Thought:**

```
"The Hollywood Principle in action:
Don't call Spring, Spring will call you!"

Master IoC and DI = Master Spring Framework
```
