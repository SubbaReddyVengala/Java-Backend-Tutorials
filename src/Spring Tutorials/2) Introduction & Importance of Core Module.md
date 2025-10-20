# Spring Core Module - Introduction and Importance

## Table of Contents

1.  Introduction to Core Module
2.  Why Core Module Exists
3.  Core Module Components
4.  Dependency Injection (DI) Deep Dive
5.  Inversion of Control (IoC) Container
6.  Bean Lifecycle
7.  Memory Architecture
8.  Real-Time Importance
9.  Practical Examples

----------

## 1. Introduction to Core Module

### What is Spring Core?

**Spring Core** is the **heart and foundation** of the entire Spring Framework. It provides the fundamental functionality that all other Spring modules depend on.

```
Spring Framework = Building
┌─────────────────────────────────────┐
│     Web MVC Module (5th Floor)     │
├─────────────────────────────────────┤
│     Data Access Module (4th Floor)  │
├─────────────────────────────────────┤
│     AOP Module (3rd Floor)          │
├─────────────────────────────────────┤
│     Integration Module (2nd Floor)  │
├─────────────────────────────────────┤
│  ╔═══════════════════════════════╗ │
│  ║   CORE MODULE (Foundation)    ║ │
│  ║  - IoC Container              ║ │
│  ║  - Dependency Injection       ║ │
│  ║  - Bean Factory               ║ │
│  ║  - Application Context        ║ │
│  ╚═══════════════════════════════╝ │
└─────────────────────────────────────┘
      Ground (Everything depends on Core)
```

### Core Module Components

```
Spring Core Module:
├── spring-core.jar
│   └── Core utilities, Type conversion
├── spring-beans.jar
│   └── Bean creation, Bean factory
├── spring-context.jar
│   └── ApplicationContext, Events
├── spring-expression.jar (SpEL)
│   └── Expression Language support
└── spring-aop.jar
    └── Aspect-Oriented Programming basics
```

----------

## 2. Why Core Module Exists - The Problem It Solves

### Traditional Java Problems (Before Spring)

#### Problem 1: Tight Coupling

java

```java
// WITHOUT SPRING CORE - Tightly Coupled Code
public class OrderService {
    // Direct object creation = TIGHT COUPLING
    private EmailService emailService = new EmailService();
    private PaymentService paymentService = new PaymentService();
    
    public void processOrder(Order order) {
        paymentService.processPayment(order);
        emailService.sendConfirmation(order);
    }
}

// Issues:
// ❌ Hard to test (can't mock EmailService)
// ❌ Hard to change implementation
// ❌ OrderService knows HOW to create dependencies
// ❌ Cannot reuse instances (new object every time)
```

**Analogy:** You're a chef who makes every ingredient from scratch instead of ordering from suppliers.

#### Problem 2: Object Lifecycle Management

java

```java
// Manual Object Creation - Memory Issues
public class Application {
    public static void main(String[] args) {
        // You manually create everything
        DatabaseConnection db = new DatabaseConnection();
        UserRepository repo = new UserRepository(db);
        UserService service = new UserService(repo);
        UserController controller = new UserController(service);
        
        // Who closes db? Who manages memory?
        // When to create? When to destroy?
        // ❌ Memory leaks possible
        // ❌ Resource management nightmare
    }
}
```

**Analogy:** Managing a factory where you manually turn on/off every machine.

#### Problem 3: Configuration Hell

java

```java
// Configuration Everywhere
public class AppConfig {
    public DataSource getDataSource() {
        BasicDataSource ds = new BasicDataSource();
        ds.setDriverClassName("com.mysql.jdbc.Driver");
        ds.setUrl("jdbc:mysql://localhost:3306/db");
        ds.setUsername("root");
        ds.setPassword("password");
        return ds;
    }
    
    public SessionFactory getSessionFactory() {
        // 50+ lines of configuration
    }
    
    // ❌ Configuration scattered everywhere
    // ❌ Hard to maintain
    // ❌ No centralized management
}
```

### How Spring Core Solves These Problems

```
SPRING CORE SOLUTION:

┌──────────────────────────────────────────┐
│    IoC Container (Central Manager)       │
│  ┌────────────────────────────────┐     │
│  │  Dependency Injection          │     │
│  │  - No 'new' keyword needed     │     │
│  │  - Automatic wiring            │     │
│  │  - Loose coupling              │     │
│  └────────────────────────────────┘     │
│  ┌────────────────────────────────┐     │
│  │  Lifecycle Management          │     │
│  │  - Create at startup           │     │
│  │  - Destroy at shutdown         │     │
│  │  - Singleton by default        │     │
│  └────────────────────────────────┘     │
│  ┌────────────────────────────────┐     │
│  │  Configuration Management      │     │
│  │  - Centralized                 │     │
│  │  - Reusable                    │     │
│  │  - Easy to change              │     │
│  └────────────────────────────────┘     │
└──────────────────────────────────────────┘
```

----------

## 3. Core Module Components in Detail

### 3.1 IoC Container (Brain of Spring)

```
IoC Container = Smart Object Manager

┌─────────────────────────────────────────┐
│        IoC Container (Manager)          │
│                                         │
│  Job Responsibilities:                  │
│  ✓ Create objects (Beans)              │
│  ✓ Wire dependencies                    │
│  ✓ Manage lifecycle                     │
│  ✓ Configure beans                      │
│  ✓ Dispose beans                        │
└─────────────────────────────────────────┘

Two Types:
1. BeanFactory (Basic)
   └── Lightweight, lazy initialization

2. ApplicationContext (Advanced) ⭐ MOST USED
   └── Feature-rich, eager initialization
```

#### Memory Representation

```
JVM HEAP MEMORY:

┌──────────────────────────────────────────┐
│  ApplicationContext (IoC Container)      │
│  ┌────────────────────────────────────┐ │
│  │  Bean Registry (Map<String, Bean>) │ │
│  │  ├── "userService" → UserService@1 │ │
│  │  ├── "orderService" → OrderService │ │
│  │  ├── "dataSource" → HikariCP@3     │ │
│  │  └── "emailService" → EmailService │ │
│  └────────────────────────────────────┘ │
│                                          │
│  Bean Dependencies Graph:                │
│  OrderService → EmailService            │
│       ↓                                  │
│  PaymentService                          │
└──────────────────────────────────────────┘

Memory Benefit:
- Singleton beans: 1 instance for all (saves memory)
- Shared instances: Reuse across application
```

### 3.2 Bean Factory vs Application Context

```
BEANFACTORY (Basic Container):
┌─────────────────────────────┐
│  • Lazy initialization      │
│  • Basic DI support         │
│  • Low memory footprint     │
│  • No annotation support    │
│  • No event mechanism       │
└─────────────────────────────┘
Use Case: Lightweight apps, IoT devices

vs

APPLICATION CONTEXT (Advanced Container): ⭐
┌─────────────────────────────┐
│  • Eager initialization     │
│  • Full DI support          │
│  • Annotation support       │
│  • Event publishing         │
│  • Internationalization     │
│  • AOP integration          │
│  • Web application support  │
└─────────────────────────────┘
Use Case: 99% of real applications
```

### 3.3 Dependency Injection (DI) - The Core Magic

**Definition:** A design pattern where objects receive their dependencies from external source rather than creating them.

```
WITHOUT DI (Traditional):
┌──────────────────────┐
│   OrderService       │
│  ┌────────────────┐ │
│  │ new Payment()  │ │  ← Creates dependency
│  └────────────────┘ │
└──────────────────────┘

WITH DI (Spring Core):
┌──────────────────────┐      ┌─────────────────┐
│   OrderService       │      │  IoC Container  │
│  ┌────────────────┐ │ ←────│  Injects        │
│  │ PaymentService│ │      │  PaymentService │
│  └────────────────┘ │      └─────────────────┘
└──────────────────────┘
      Receives dependency
```

#### Types of Dependency Injection

**1. Constructor Injection (Recommended ⭐)**

java

```java
@Service
public class OrderService {
    
    private final PaymentService paymentService;
    private final EmailService emailService;
    
    // Spring automatically calls this constructor
    @Autowired  // Optional in Spring 4.3+
    public OrderService(PaymentService paymentService, 
                        EmailService emailService) {
        this.paymentService = paymentService;
        this.emailService = emailService;
    }
    
    public void processOrder(Order order) {
        paymentService.charge(order);
        emailService.sendEmail(order);
    }
}

// Benefits:
// ✓ Immutable (final fields)
// ✓ Easy to test
// ✓ Cannot create object without dependencies
// ✓ Best practice
```

**2. Setter Injection**

java

```java
@Service
public class UserService {
    
    private NotificationService notificationService;
    
    // Spring calls this setter after construction
    @Autowired
    public void setNotificationService(NotificationService service) {
        this.notificationService = service;
    }
    
    // Use case: Optional dependencies
}

// Benefits:
// ✓ Optional dependencies
// ✓ Can change dependency at runtime
// Drawbacks:
// ❌ Mutable
// ❌ Can be in inconsistent state
```

**3. Field Injection (Avoid in production)**

java

```java
@Service
public class ProductService {
    
    @Autowired  // Direct field injection
    private InventoryService inventoryService;
    
    // Benefits:
    // ✓ Less code
    // Drawbacks:
    // ❌ Hard to test (reflection needed)
    // ❌ Cannot use final
    // ❌ Hidden dependencies
    // ❌ Not recommended by Spring team
}
```

#### DI Memory Flow

```
APPLICATION STARTUP:

1. Component Scanning
   ┌──────────────────────────────┐
   │ Scan @Component, @Service,   │
   │ @Repository, @Controller     │
   └──────────────────────────────┘
                ↓
2. Bean Definition Creation
   ┌──────────────────────────────┐
   │ Create metadata about beans  │
   │ (class, scope, dependencies) │
   └──────────────────────────────┘
                ↓
3. Dependency Resolution
   ┌──────────────────────────────┐
   │ Build dependency graph       │
   │ OrderService → PaymentService│
   │            → EmailService    │
   └──────────────────────────────┘
                ↓
4. Bean Instantiation
   ┌──────────────────────────────┐
   │ Create beans in correct order│
   │ 1. EmailService (no deps)    │
   │ 2. PaymentService (no deps)  │
   │ 3. OrderService (has deps)   │
   └──────────────────────────────┘
                ↓
5. Dependency Injection
   ┌──────────────────────────────┐
   │ Inject dependencies via      │
   │ constructor/setter           │
   └──────────────────────────────┘
                ↓
6. Application Ready ✓
```

----------

## 4. Inversion of Control (IoC) - The Philosophy

### What is IoC?

**Traditional Flow:**

```
You control everything:
main() 
  ├── Create Database
  ├── Create Repository
  ├── Create Service
  ├── Create Controller
  └── Handle Request
      
You decide WHEN and HOW to create objects
```

**IoC Flow:**

```
Framework controls flow:
SpringApplication.run()
  ├── Framework creates Database
  ├── Framework creates Repository
  ├── Framework creates Service
  ├── Framework creates Controller
  └── Framework handles Request
      
Framework decides WHEN and HOW to create objects
You just use them!
```

### Hollywood Principle

```
Traditional: "I'll call you"
┌──────────┐     calls    ┌──────────┐
│   You    │ ──────────→  │ Library  │
└──────────┘              └──────────┘

IoC: "Don't call us, we'll call you"
┌──────────┐     calls    ┌──────────┐
│Framework │ ──────────→  │Your Code │
└──────────┘              └──────────┘
```

### Real-World Analogy

```
WITHOUT IoC (You're a Chef):
├── Buy ingredients
├── Prepare each ingredient
├── Cook everything yourself
├── Serve the dish
└── Clean up

WITH IoC (You're at a Restaurant):
├── You just tell what you want
├── Restaurant (IoC Container) handles:
│   ├── Has ingredients ready (Beans)
│   ├── Knows recipes (Configuration)
│   ├── Cooks for you (Bean creation)
│   └── Serves you (Dependency Injection)
└── You just enjoy the meal!
```

----------

## 5. Bean Lifecycle - Birth to Death

### Complete Bean Lifecycle

```
BEAN LIFECYCLE STAGES:

1. LOAD BEAN DEFINITION
   ├── @ComponentScan finds classes
   └── Register BeanDefinition

2. INSTANTIATE
   ├── Constructor called
   └── Memory allocated
   
3. POPULATE PROPERTIES
   ├── @Autowired dependencies injected
   └── @Value properties set

4. BEAN NAME AWARE
   ├── setBeanName() if implements BeanNameAware
   
5. BEAN FACTORY AWARE
   ├── setBeanFactory() if implements BeanFactoryAware

6. PRE-INITIALIZATION
   ├── BeanPostProcessor.postProcessBeforeInitialization()

7. INITIALIZE
   ├── @PostConstruct method
   ├── InitializingBean.afterPropertiesSet()
   └── Custom init-method

8. POST-INITIALIZATION
   ├── BeanPostProcessor.postProcessAfterInitialization()

9. ✓ BEAN READY TO USE

10. SHUTDOWN SIGNAL RECEIVED

11. DESTROY
    ├── @PreDestroy method
    ├── DisposableBean.destroy()
    └── Custom destroy-method

12. ☠ BEAN DESTROYED
```

### Practical Example with Lifecycle

java

```java
@Component
public class DatabaseConnection {
    
    private Connection connection;
    
    // 1. Constructor called
    public DatabaseConnection() {
        System.out.println("1. Constructor: Memory allocated");
    }
    
    // 2. Dependencies injected
    @Autowired
    private DataSourceConfig config;
    
    // 3. Post-construction initialization
    @PostConstruct
    public void init() {
        System.out.println("3. @PostConstruct: Opening DB connection");
        this.connection = DriverManager.getConnection(config.getUrl());
    }
    
    // 4. Bean ready to use
    public void executeQuery(String sql) {
        System.out.println("4. Bean in use: Executing query");
    }
    
    // 5. Pre-destruction cleanup
    @PreDestroy
    public void cleanup() {
        System.out.println("5. @PreDestroy: Closing DB connection");
        if (connection != null) {
            connection.close();
        }
    }
}

// Output:
// 1. Constructor: Memory allocated
// 3. @PostConstruct: Opening DB connection
// 4. Bean in use: Executing query
// 5. @PreDestroy: Closing DB connection
```

### Memory State During Lifecycle

```
HEAP MEMORY VISUALIZATION:

Stage 1: Instantiation
┌─────────────────────────┐
│ DatabaseConnection@5a10 │
│ connection: null        │ ← Just created
└─────────────────────────┘

Stage 2: Property Population
┌─────────────────────────┐
│ DatabaseConnection@5a10 │
│ connection: null        │
│ config: @5b20          │ ← Dependency injected
└─────────────────────────┘

Stage 3: Initialization
┌─────────────────────────┐
│ DatabaseConnection@5a10 │
│ connection: @6c30      │ ← Connection established
│ config: @5b20          │
└─────────────────────────┘

Stage 4: Ready (Stays in memory as Singleton)
┌─────────────────────────┐
│ DatabaseConnection@5a10 │ ← Reused for all requests
│ connection: @6c30      │
│ config: @5b20          │
└─────────────────────────┘

Stage 5: Destruction
┌─────────────────────────┐
│ DatabaseConnection@5a10 │
│ connection: closed     │ ← Resources released
│ config: null           │
└─────────────────────────┘
```

----------

## 6. Bean Scopes - Controlling Instances

### Available Scopes

```
BEAN SCOPES:

1. Singleton (Default) ⭐
   ┌────────────────────────┐
   │  One instance per      │
   │  ApplicationContext    │
   │  Created at startup    │
   │  Lives until shutdown  │
   └────────────────────────┘
   Memory: Most efficient

2. Prototype
   ┌────────────────────────┐
   │  New instance every    │
   │  time requested        │
   │  Not managed after     │
   │  creation              │
   └────────────────────────┘
   Memory: Higher usage

3. Request (Web only)
   ┌────────────────────────┐
   │  One instance per HTTP │
   │  request               │
   └────────────────────────┘

4. Session (Web only)
   ┌────────────────────────┐
   │  One instance per HTTP │
   │  session               │
   └────────────────────────┘

5. Application (Web only)
   ┌────────────────────────┐
   │  One instance per      │
   │  ServletContext        │
   └────────────────────────┘
```

### Scope Examples

java

```java
// Singleton (Default) - One instance shared
@Service
@Scope("singleton")  // or just @Service
public class UserService {
    private int counter = 0;  // Shared across all requests!
    
    public void incrementCounter() {
        counter++;  // Same counter for everyone
    }
}

// Prototype - New instance each time
@Service
@Scope("prototype")
public class ReportGenerator {
    private LocalDateTime createdAt;
    
    public ReportGenerator() {
        this.createdAt = LocalDateTime.now();
    }
    // Each call gets fresh instance with new timestamp
}

// Request Scope - One per HTTP request
@Component
@Scope(value = "request", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestContext {
    private String requestId = UUID.randomUUID().toString();
    // Each HTTP request gets its own instance
}
```

### Memory Impact of Scopes

```
MEMORY USAGE COMPARISON:

Scenario: 1000 concurrent users

Singleton:
┌──────────────────────────────┐
│  UserService@1 (1 instance)  │ ← All 1000 users share this
└──────────────────────────────┘
Memory: ~1KB

Prototype:
┌──────────────────────────────┐
│  ReportGen@1   (User 1)      │
│  ReportGen@2   (User 2)      │
│  ...                         │
│  ReportGen@1000 (User 1000)  │
└──────────────────────────────┘
Memory: ~1000KB (1MB)

Rule: Use Singleton unless you need different state per usage
```

----------

## 7. Configuration Approaches

### 1. Annotation-Based Configuration (Modern ⭐)

java

```java
// Component Scanning
@SpringBootApplication  // Includes @ComponentScan
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// Auto-discovered beans
@Service
public class PaymentService { }

@Repository
public class UserRepository { }

@Controller
public class HomeController { }

// Benefits:
// ✓ Less code
// ✓ Type-safe
// ✓ Refactoring-friendly
// ✓ Industry standard
```

### 2. Java-Based Configuration

java

```java
@Configuration
public class AppConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource ds = new HikariDataSource();
        ds.setJdbcUrl("jdbc:mysql://localhost:3306/db");
        ds.setUsername("root");
        ds.setPassword("password");
        return ds;
    }
    
    @Bean
    public UserService userService(UserRepository repository) {
        return new UserService(repository);
    }
    
    // Use case: Third-party libraries, complex setup
}
```

### 3. XML-Based Configuration (Legacy)

xml

```xml
<!-- applicationContext.xml -->
<beans>
    <bean id="dataSource" class="com.zaxxer.hikari.HikariDataSource">
        <property name="jdbcUrl" value="jdbc:mysql://localhost:3306/db"/>
        <property name="username" value="root"/>
    </bean>
    
    <bean id="userService" class="com.example.UserService">
        <constructor-arg ref="userRepository"/>
    </bean>
</beans>

<!-- Modern projects avoid XML -->
```

----------

## 8. Real-Time Importance of Core Module

### Why Core Module is Critical

```
IMPORTANCE IN PRODUCTION:

1. Productivity Impact:
   Without Core Module:
   ├── Manual object creation: 100 lines/class
   ├── Manual dependency management: 50 lines
   ├── Configuration code: 200+ lines
   └── Total: ~350 lines per feature

   With Core Module:
   ├── @Service annotation: 1 line
   ├── @Autowired: 1 line
   ├── Auto-configuration: 0 lines
   └── Total: ~2 lines per feature

   Productivity Gain: 99% code reduction ⭐

2. Memory Efficiency:
   ├── Singleton pattern by default
   ├── Shared instances across application
   ├── Lazy initialization options
   └── Result: 60-70% memory savings

3. Testability:
   ├── Easy mocking with DI
   ├── No hard dependencies
   ├── Isolated unit tests
   └── 10x faster test writing

4. Maintainability:
   ├── Centralized configuration
   ├── Loose coupling
   ├── Easy to swap implementations
   └── 50% faster bug fixes
```


## 9. Common Pitfalls and Best Practices

### ❌ Common Mistakes

java

```java
// Mistake 1: Circular Dependencies
@Service
public class ServiceA {
    @Autowired
    private ServiceB serviceB;  // ServiceB depends on ServiceA
}

@Service
public class ServiceB {
    @Autowired
    private ServiceA serviceA;  // Creates circular dependency!
}

// Solution: Use @Lazy or redesign architecture
@Service
public class ServiceA {
    @Autowired
    @Lazy
    private ServiceB serviceB;  // Breaks circular dependency
}
```

java

```java
// Mistake 2: Field Injection in Tests
@Service
public class UserService {
    @Autowired
    private UserRepository repository;  // Hard to test!
}

// Better: Constructor Injection
@Service
public class UserService {
    private final UserRepository repository;
    
    @Autowired
    public UserService(UserRepository repository) {
        this.repository = repository;
    }
}
```

java

```java
// Mistake 3: Singleton with Mutable State
@Service  // Singleton by default
public class CounterService {
    private int count = 0;  // Shared across all threads! 🔥
    
    public void increment() {
        count++;  // NOT THREAD-SAFE!
    }
}

// Solution: Use thread-safe collections or make stateless
@Service
public class CounterService {
    private final AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet();  // Thread-safe
    }
}
```

### ✓ Best Practices

java

```java
// Best Practice 1: Constructor Injection
@Service
public class OrderService {
    private final PaymentService paymentService;
    
    // @Autowired optional in Spring 4.3+
    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}

// Best Practice 2: Interface-based Design
public interface NotificationService {
    void send(String message);
}

@Service
@Primary
public class EmailNotificationService implements NotificationService {
    public void send(String message) { /* email logic */ }
}

@Service
public class SmsNotificationService implements NotificationService {
    public void send(String message) { /* sms logic */ }
}

// Best Practice 3: Profile-specific Beans
@Configuration
public class DataSourceConfig {
    
    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        return new H2DataSource();  // In-memory for dev
    }
    
    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        return new HikariDataSource();  // Pooled for prod
    }
}
```

----------

## 10. Summary - Key Takeaways

```
SPRING CORE MODULE ESSENCE:

┌─────────────────────────────────────────┐
│  Foundation of Spring Framework         │
│                                         │
│  Core Concepts:                         │
│  ├── IoC Container (Manager)           │
│  ├── Dependency Injection (Wiring)     │
│  ├── Bean Lifecycle (Birth to Death)   │
│  └── Configuration (Setup)              │
│                                         │
│  Benefits:                              │
│  ✓ 99% less boilerplate code          │
│  ✓ 70% memory savings                  │
│  ✓ 3x faster development               │
│  ✓ Easy testing                         │
│  ✓ Loose coupling                       │
│  ✓ Centralized configuration           │
│                                         │
│  Real-Time Usage:                       │
│  • 95% of Spring applications          │
│  • Powers microservices                │
│  • Enterprise applications             │
│  • All Spring modules depend on it     │
└─────────────────────────────────────────┘
```

### Why Every Spring Developer Must Master Core Module

1.  **Foundation** - Every other module builds on Core
2.  **Daily Use** - You use DI in every single class
3.  **Interview Questions** - 80% of Spring interviews focus on Core concepts
4.  **Architecture** - Understanding Core helps design better applications
5.  **Debugging** - Most Spring issues relate to Bean configuration
