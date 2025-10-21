
# Complete Spring Framework Tutorial: Dependency Injection & Bean Management

## Table of Contents

1.  Spring Container
2.  Spring Beans
3.  Bean Factory vs Application Context
4.  Bean Lifecycle
5.  Bean Scopes
6.  Dependency Injection
7.  Bean Configuration

----------

## 1. Spring Container

### What is Spring Container?

**Analogy**: Think of the Spring Container as a  **factory warehouse manager**  who:

-   Keeps inventory of all products (beans)
-   Knows how to create each product
-   Assembles complex products from simpler parts
-   Delivers the right product when requested

### Technical Definition

The Spring Container is the core of the Spring Framework. It creates objects, wires them together, configures them, and manages their complete lifecycle from creation to destruction.

**Memory Visualization**:

```
┌─────────────────────────────────────────┐
│      SPRING CONTAINER (IoC)             │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐│
│  │ Bean A  │  │ Bean B  │  │ Bean C  ││
│  │ (Ready) │  │ (Ready) │  │ (Ready) ││
│  └─────────┘  └─────────┘  └─────────┘│
│       ▲            ▲            ▲      │
│       │            │            │      │
│  [Configuration Metadata]              │
│  (XML/Annotations/Java Config)         │
└─────────────────────────────────────────┘
```

### Key Responsibilities

1.  **Inversion of Control (IoC)**: Container controls object creation, not the programmer
2.  **Dependency Injection (DI)**: Container injects dependencies automatically
3.  **Lifecycle Management**: Container manages bean creation and destruction
4.  **Configuration**: Container reads metadata to understand how to create beans

----------
## 2. Spring Beans

### What is a Spring Bean?

### Theory

A  **Spring Bean**  is simply a Java object that is created, managed, and destroyed by the Spring Container. Any POJO (Plain Old Java Object) can become a Spring Bean

### What is a Spring Bean?


### Technical Definition

A Spring Bean is simply a Java object that is created, managed, and wired by the Spring IoC Container.

**Example Bean Class**:

java

```java
public class Car {
    private String model;
    private Engine engine;
    
    public Car() {
        System.out.println("Car object created");
    }
    
    public void setModel(String model) {
        this.model = model;
    }
    
    public void setEngine(Engine engine) {
        this.engine = engine;
    }
    
    public void start() {
        System.out.println(model + " car starting with " + engine.getType());
    }
}

public class Engine {
    private String type;
    
    public Engine(String type) {
        this.type = type;
        System.out.println("Engine created: " + type);
    }
    
    public String getType() {
        return type;
    }
}
```

### Memory Representation

```
Heap Memory:
┌──────────────────┐
│  Car@1a2b       │
│  ┌────────────┐ │
│  │ model: "BMW"│ │
│  │ engine: ──┐ │ │
│  └───────────│─┘ │
└──────────────│───┘
               │
               ▼
        ┌──────────────┐
        │ Engine@3c4d  │
        │ type: "V8"   │
        └──────────────┘
```

----------
##  Bean Creation & Configuration 

### XML Configuration

**applicationContext.xml**

xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- Bean Definition -->
    <bean id="userService" class="com.example.service.UserService">
        <property name="serviceName" value="User Management Service"/>
    </bean>
    
    <!-- Bean with Constructor Injection -->
    <bean id="databaseConnection" class="com.example.db.DatabaseConnection">
        <constructor-arg value="jdbc:mysql://localhost:3306/mydb"/>
        <constructor-arg value="root"/>
        <constructor-arg value="password"/>
    </bean>
</beans>
```

**Loading XML Configuration**

java

```java
public class App {
    public static void main(String[] args) {
        // Create container from XML
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("applicationContext.xml");
        
        // Retrieve bean
        UserService userService = context.getBean("userService", UserService.class);
        userService.createUser("john_doe");
    }
}
```

### Visualization: XML Configuration Flow

```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ XML File     │─────>│ Spring       │─────>│ Bean Objects │
│              │      │ Container    │      │ in Memory    │
│ <bean id=... │      │ Parses XML   │      │ UserService@ │
│  class=...>  │      │ Creates Beans│      │ Database@    │
└──────────────┘      └──────────────┘      └──────────────┘
```

----------
## 3. Bean Factory vs Application Context

### Bean Factory

**Analogy**: BeanFactory is like a  **basic vending machine**  - you request an item, and it gives you that item. Nothing fancy.

**Technical Details**:

-   Lazy initialization (creates beans only when requested)
-   Basic DI support
-   Minimal memory footprint
-   Interface:  `org.springframework.beans.factory.BeanFactory`

**Example**:

java

```java
Resource resource = new ClassPathResource("beans.xml");
BeanFactory factory = new XmlBeanFactory(resource);
Car car = (Car) factory.getBean("car");
```

### Application Context

**Analogy**: ApplicationContext is like a  **smart warehouse**  with:

-   Automated inventory management
-   Pre-loaded stock
-   Event notification system
-   Multiple language support

**Technical Details**:

-   Eager initialization (creates singleton beans at startup)
-   Advanced DI features
-   Event publication
-   Internationalization support
-   Interface:  `org.springframework.context.ApplicationContext`

**Example**:

java

```java
ApplicationContext context = 
    new ClassPathXmlApplicationContext("beans.xml");
Car car = context.getBean("car", Car.class);
```

### Comparison Table

<img width="898" height="287" alt="image" src="https://github.com/user-attachments/assets/5bacc5f2-5c10-4954-9d4d-c06ad9bfb583" />

**Memory Visualization**:

```
BeanFactory:                ApplicationContext:
┌─────────────┐            ┌──────────────────┐
│ Definitions │            │ All Beans Ready  │
│ (Not loaded)│            │ ┌──┐ ┌──┐ ┌──┐  │
│             │            │ │B1│ │B2│ │B3│  │
│   Load on   │            │ └──┘ └──┘ └──┘  │
│   demand    │            │ + Events         │
└─────────────┘            │ + i18n           │
                           └──────────────────┘
```

----------
## 4. Bean Lifecycle

### Analogy

Bean lifecycle is like a  **butterfly's metamorphosis**:

1.  **Egg**  → Bean definition
2.  **Caterpillar**  → Object instantiation
3.  **Cocoon**  → Property setting & initialization
4.  **Butterfly**  → Ready to use
5.  **Death**  → Destruction callbacks

### Lifecycle Phases

```
┌─────────────────────────────────────────────────────┐
│             BEAN LIFECYCLE                          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. Container Started                               │
│           ▼                                         │
│  2. Bean Instantiation (Constructor called)         │
│           ▼                                         │
│  3. Populate Properties (Setter injection)          │
│           ▼                                         │
│  4. BeanNameAware.setBeanName()                    │
│           ▼                                         │
│  5. BeanFactoryAware.setBeanFactory()              │
│           ▼                                         │
│  6. ApplicationContextAware.setApplicationContext() │
│           ▼                                         │
│  7. PreInitialization (BeanPostProcessor)           │
│           ▼                                         │
│  8. @PostConstruct / InitializingBean.afterPropertiesSet() │
│           ▼                                         │
│  9. Custom init-method                              │
│           ▼                                         │
│  10. PostInitialization (BeanPostProcessor)         │
│           ▼                                         │
│  11. BEAN READY TO USE ★                           │
│           ▼                                         │
│  12. Container Shutdown                             │
│           ▼                                         │
│  13. @PreDestroy / DisposableBean.destroy()        │
│           ▼                                         │
│  14. Custom destroy-method                          │
│           ▼                                         │
│  15. Bean Destroyed                                 │
└─────────────────────────────────────────────────────┘
```

### Practical Example

java

```java
import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

public class DatabaseConnection implements InitializingBean, DisposableBean {
    
    private String url;
    
    // 1. Constructor
    public DatabaseConnection() {
        System.out.println("1. Constructor called");
    }
    
    // 2. Setter injection
    public void setUrl(String url) {
        this.url = url;
        System.out.println("2. Property set: " + url);
    }
    
    // 3. PostConstruct annotation
    @PostConstruct
    public void postConstruct() {
        System.out.println("3. @PostConstruct - Opening connection pool");
    }
    
    // 4. InitializingBean interface
    @Override
    public void afterPropertiesSet() {
        System.out.println("4. afterPropertiesSet - Validating connection");
    }
    
    // 5. Custom init method (configured in XML/annotation)
    public void customInit() {
        System.out.println("5. Custom init - Connection ready!");
    }
    
    // Bean is now ready to use
    public void executeQuery() {
        System.out.println("★ Executing query on: " + url);
    }
    
    // 6. PreDestroy annotation
    @PreDestroy
    public void preDestroy() {
        System.out.println("6. @PreDestroy - Closing connections");
    }
    
    // 7. DisposableBean interface
    @Override
    public void destroy() {
        System.out.println("7. destroy - Releasing resources");
    }
    
    // 8. Custom destroy method
    public void customDestroy() {
        System.out.println("8. Custom destroy - Cleanup complete");
    }
}
```

**Configuration**:

java

```java
@Configuration
public class AppConfig {
    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")
    public DatabaseConnection dbConnection() {
        DatabaseConnection conn = new DatabaseConnection();
        conn.setUrl("jdbc:mysql://localhost:3306/mydb");
        return conn;
    }
}
```

----------

### Memory Timeline

```
TIME: 0ms                    TIME: 100ms                 TIME: 5000ms
┌─────────────┐             ┌─────────────┐            ┌─────────────┐
│ Container   │             │ Bean@1a2b   │            │ Bean@1a2b   │
│ Starting    │────────────>│ READY       │───────────>│ DESTROYING  │
│             │  Creation   │ In Use      │  Shutdown  │ Cleanup     │
└─────────────┘   Phase     └─────────────┘    Phase   └─────────────┘
```

----------

## 5. Bean Scopes

### Overview

**Analogy**: Bean scopes are like  **coffee cup sizes**  at a café:

Bean scope defines the lifecycle and visibility of a bean instance in the container.

-   **Singleton**: One large pot for everyone (default)
-   **Prototype**: Fresh cup for each customer
-   **Request**: One cup per order ticket
-   **Session**: One thermos per customer visit
-   **Application**: One dispenser for the entire café
-   **WebSocket**: One cup per chat conversation

### 1. Singleton Scope (Default)

**Definition**: Only ONE instance per Spring Container.


**Memory Visualization**:

```
Container Startup:
┌──────────────────────────┐
│   Spring Container       │
│                          │
│   UserService@1a2b ──────┼──┐
│                          │  │
│   Request 1 ─────────────┼──┤
│   Request 2 ─────────────┼──┼─→ Same Instance
│   Request 3 ─────────────┼──┤
│   Request 4 ─────────────┼──┘
└──────────────────────────┘
```

**Example**:

java

```java
@Component
@Scope("singleton") // Default, can be omitted
public class DatabaseConfig {
    private String connectionString;
    
    public DatabaseConfig() {
        System.out.println("DatabaseConfig created: " + this.hashCode());
    }
}

// Usage
@RestController
public class UserController {
    @Autowired
    private DatabaseConfig config; // Same instance everywhere
}

@RestController
public class OrderController {
    @Autowired
    private DatabaseConfig config; // Same instance as above
}
```

**XML Configuration**:

xml

```xml
<bean id="dbConfig" class="com.example.DatabaseConfig" scope="singleton"/>
```

**When to Use**:

-   Stateless services
-   Configuration classes
-   DAO layers
-   Utility classes

### 2. Prototype Scope

**Definition**: New instance created every time bean is requested.
java

```java
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
}
```

**Memory Model**

```
SPRING CONTAINER
┌──────────────────────────────┐
│ Bean Definition              │
│ (ShoppingCart.class)         │
└──────────────────────────────┘
        │         │         │
        ▼         ▼         ▼
   Cart@1a2b  Cart@3c4d  Cart@5e6f
   Request 1  Request 2  Request 3
   (New)      (New)      (New)
```
**Memory Visualization**:

```
Each Request Creates New Instance:
┌──────────────────────────┐
│   Spring Container       │
│                          │
│   Request 1 → User@1a2b  │
│   Request 2 → User@3c4d  │
│   Request 3 → User@5e6f  │
│   Request 4 → User@7g8h  │
└──────────────────────────┘
    ↓
Heap Memory:
[User@1a2b] [User@3c4d] [User@5e6f] [User@7g8h]
```

**Example**:

java

```java
@Component
@Scope("prototype")
public class ShoppingCart {
    private List<Item> items = new ArrayList<>();
    
    public ShoppingCart() {
        System.out.println("New cart created: " + this.hashCode());
    }
    
    public void addItem(Item item) {
        items.add(item);
    }
}

// Usage
@Service
public class OrderService {
    @Autowired
    private ApplicationContext context;
    
    public void createOrder(User user) {
        // Get fresh cart instance
        ShoppingCart cart = context.getBean(ShoppingCart.class);
        cart.addItem(new Item("Book"));
    }
}
```

**XML Configuration**:

xml

```xml
<bean id="cart" class="com.example.ShoppingCart" scope="prototype"/>
```

**When to Use**:

-   Stateful objects
-   Objects that maintain user-specific data
-   Objects with mutable state

### 3. Request Scope (Web-aware)

**Definition**: One instance per HTTP request.
java

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, 
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestContext {
    private String requestId;
    private Map<String, String> headers;
}
```

**Memory Model**

```
HTTP REQUEST 1          HTTP REQUEST 2          HTTP REQUEST 3
┌─────────────┐        ┌─────────────┐        ┌─────────────┐
│ Context@1a2b│        │ Context@3c4d│        │ Context@5e6f│
│ requestId:  │        │ requestId:  │        │ requestId:  │
│   "REQ-001" │        │   "REQ-002" │        │   "REQ-003" │
└─────────────┘        └─────────────┘        └─────────────┘
     ▼ GC                   ▼ GC                   ▼ GC
(After request)        (After request)        (After request)
```

**Use Case**: Request-specific data, audit logs, tracking

**Memory Visualization**:

```
HTTP Request Lifecycle:
┌─────────────────────────────────────┐
│  HTTP Request 1                     │
│  ┌─────────────────────────────┐   │
│  │ RequestData@1a2b            │   │
│  │ (Lives for this request)    │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
         ↓ (Request ends, bean destroyed)

┌─────────────────────────────────────┐
│  HTTP Request 2                     │
│  ┌─────────────────────────────┐   │
│  │ RequestData@3c4d            │   │
│  │ (New instance)              │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Example**:

java

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_REQUEST, 
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class RequestLogger {
    private String requestId;
    private LocalDateTime timestamp;
    
    public RequestLogger() {
        this.requestId = UUID.randomUUID().toString();
        this.timestamp = LocalDateTime.now();
        System.out.println("Request logger created: " + requestId);
    }
    
    public void log(String message) {
        System.out.println("[" + requestId + "] " + message);
    }
}

@RestController
public class ApiController {
    @Autowired
    private RequestLogger logger; // Proxy injected
    
    @GetMapping("/api/data")
    public String getData() {
        logger.log("Fetching data");
        return "Data";
    }
}
```

**XML Configuration**:

xml

```xml
<bean id="logger" class="com.example.RequestLogger" scope="request">
    <aop:scoped-proxy/>
</bean>
```

### 4. Session Scope (Web-aware)

**Definition**: One instance per HTTP session.
java

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION,
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserSession {
    private String userId;
    private List<String> recentlyViewed;
}
```

**Memory Model**

```
USER SESSION 1                    USER SESSION 2
(30 minutes lifetime)             (30 minutes lifetime)
┌─────────────────────┐          ┌─────────────────────┐
│ UserSession@1a2b    │          │ UserSession@3c4d    │
│ userId: "john"      │          │ userId: "jane"      │
│ recentlyViewed: [   │          │ recentlyViewed: [   │
│   "product-1",      │          │   "product-5",      │
│   "product-2"       │          │   "product-6"       │
│ ]                   │          │ ]                   │
└─────────────────────┘          └─────────────────────┘
```
**Memory Visualization**:

```
User Session Lifecycle:
┌─────────────────────────────────────┐
│  User Session (user123)             │
│  Duration: 30 minutes               │
│  ┌─────────────────────────────┐   │
│  │ UserPreferences@1a2b        │   │
│  │ - theme: "dark"             │   │
│  │ - language: "en"            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Request 1 ──┐                      │
│  Request 2 ──┼─→ Same instance     │
│  Request 3 ──┘                      │
└─────────────────────────────────────┘
```

**Example**:

java

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, 
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class UserSession implements Serializable {
    private String userId;
    private String theme = "light";
    private LocalDateTime loginTime;
    
    public UserSession() {
        this.loginTime = LocalDateTime.now();
        System.out.println("User session created");
    }
    
    public void setTheme(String theme) {
        this.theme = theme;
    }
    
    public String getTheme() {
        return theme;
    }
}

@RestController
public class SettingsController {
    @Autowired
    private UserSession userSession; // Same instance throughout session
    
    @PostMapping("/settings/theme")
    public String updateTheme(@RequestParam String theme) {
        userSession.setTheme(theme);
        return "Theme updated to: " + theme;
    }
    
    @GetMapping("/settings/theme")
    public String getTheme() {
        return userSession.getTheme();
    }
}
```

### 5. Application Scope (Web-aware)

**Definition**: One instance per ServletContext (entire web application).

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_APPLICATION)
public class ApplicationMetrics {
    private AtomicLong totalRequests = new AtomicLong(0);
    private AtomicLong activeUsers = new AtomicLong(0);
}
```

**Memory Model**

```
┌──────────────────────────────────────┐
│    SERVLET CONTEXT (Web App)         │
│  ┌────────────────────────────────┐  │
│  │ ApplicationMetrics@1a2b        │  │
│  │ (Shared by all users/sessions) │  │
│  │ totalRequests: 150000          │  │
│  │ activeUsers: 42                │  │
│  └────────────────────────────────┘  │
│           ▲        ▲        ▲         │
│           │        │        │         │
│      User1    User2    User3         │
│    (Session) (Session) (Session)     │
└──────────────────────────────────────┘
```

**Memory Visualization**:

```
┌─────────────────────────────────────┐
│  Web Application (ServletContext)   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ AppMetrics@1a2b             │   │
│  │ (Shared across all users)   │   │
│  └─────────────────────────────┘   │
│         ▲         ▲         ▲       │
│         │         │         │       │
│    Session1  Session2  Session3    │
└─────────────────────────────────────┘
```

**Example**:

java

```java
@Component
@Scope(value = WebApplicationContext.SCOPE_APPLICATION, 
       proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ApplicationMetrics {
    private AtomicLong requestCount = new AtomicLong(0);
    private LocalDateTime startTime;
    
    public ApplicationMetrics() {
        this.startTime = LocalDateTime.now();
        System.out.println("Application metrics initialized");
    }
    
    public void incrementRequests() {
        requestCount.incrementAndGet();
    }
    
    public long getTotalRequests() {
        return requestCount.get();
    }
}

@RestController
public class MetricsController {
    @Autowired
    private ApplicationMetrics metrics; // Same for entire application
    
    @GetMapping("/metrics")
    public Map<String, Object> getMetrics() {
        return Map.of("totalRequests", metrics.getTotalRequests());
    }
}
```

### 6. WebSocket Scope

**Definition**: One instance per WebSocket session.

**Example**:

java

```java
@Component
@Scope(scopeName = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ChatSession {
    private String sessionId;
    private Queue<String> messageHistory = new LinkedList<>();
    
    public ChatSession() {
        this.sessionId = UUID.randomUUID().toString();
    }
    
    public void addMessage(String message) {
        messageHistory.offer(message);
        if (messageHistory.size() > 100) {
            messageHistory.poll();
        }
    }
}
```
```java
@Component
@Scope(scopeName = "websocket", proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ChatSession {
    private String sessionId;
    private Queue<Message> messageQueue;
}
```

**Memory Model**

```
WEBSOCKET CONNECTION 1          WEBSOCKET CONNECTION 2
┌──────────────────────┐       ┌──────────────────────┐
│ ChatSession@1a2b     │       │ ChatSession@3c4d     │
│ sessionId: "WS-001"  │       │ sessionId: "WS-002"  │
│ messageQueue: [...]  │       │ messageQueue: [...]  │
└──────────────────────┘       └──────────────────────┘
        │                               │
        │ Bi-directional               │ Bi-directional
        ▼                               ▼
   Client Browser 1              Client Browser 2
```
----------
### Scope Comparison Analogy


**Singleton**

The restaurant's main chef (one for entire restaurant)

**Prototype**

Individual meal plates (new one for each order)

**Request**

A waiter's order pad (one per customer interaction)

**Session**

A customer's tab (maintained throughout their visit)

**Application**

The restaurant building itself (shared by everyone)

**WebSocket**

A phone call connection (dedicated line per conversation)

----------

## 6. Dependency Injection (DI)

### What is Dependency Injection?

### Theory

**Dependency Injection (DI)**  is a design pattern where objects receive their dependencies from external sources rather than creating them. Spring's IoC container manages this process.

**Analogy**: DI is like  **room service in a hotel**:
Think of DI as  **ordering at a restaurant**:

-   **Without DI**: You go to the kitchen, get ingredients, cook your own meal
-   **With DI**: You order, and the chef delivers the prepared meal to your table

-   You don't go to the kitchen to cook (no manual object creation)
-   You order via phone (declare dependencies)
-   Hotel staff brings food to your room (container injects dependencies)
-   You just consume what you need (use injected objects)

**Without DI**  (Tight Coupling):

java

```java
public class UserService {
    private UserRepository repo = new UserRepository(); // Tight coupling
    
    public void saveUser(User user) {
        repo.save(user);
    }
}
```

**With DI**  (Loose Coupling):

java

```java
public class UserService {
    private UserRepository repo; // Dependency
    
    // Container will inject the dependency
    public UserService(UserRepository repo) {
        this.repo = repo;
    }
    
    public void saveUser(User user) {
        repo.save(user);
    }
}
```

### Types of Dependency Injection

#### 1. Constructor Injection (Recommended)

**Analogy**: Like receiving  **all ingredients before cooking**  - you have everything you need from the start.

**Advantages**:

-   Immutable dependencies (final fields)
-   Forces explicit dependencies
-   Easy to test
-   Null-safe

**Example**:

java

```java
@Service
public class OrderService {
    private final OrderRepository orderRepo;
    private final PaymentService paymentService;
    private final EmailService emailService;
    
    // Spring will automatically inject dependencies
    @Autowired // Optional in Spring 4.3+
    public OrderService(OrderRepository orderRepo, 
                       PaymentService paymentService,
                       EmailService emailService) {
        this.orderRepo = orderRepo;
        this.paymentService = paymentService;
        this.emailService = emailService;
    }
    
    public void placeOrder(Order order) {
        orderRepo.save(order);
        paymentService.processPayment(order);
        emailService.sendConfirmation(order);
    }
}
```

**Memory Visualization**:

```
Container creates:
1. OrderRepository@1a2b
2. PaymentService@3c4d
3. EmailService@5e6f

Then creates OrderService:
┌──────────────────────────┐
│ OrderService@7g8h        │
│  ┌────────────────────┐  │
│  │ orderRepo ─────────┼──┼─→ OrderRepository@1a2b
│  │ paymentService ────┼──┼─→ PaymentService@3c4d
│  │ emailService ──────┼──┼─→ EmailService@5e6f
│  └────────────────────┘  │
└──────────────────────────┘
**Advantages**:

-   Immutable dependencies (final fields)
-   Easier testing (clear constructor parameters)
-   Null-safety (dependencies must exist at construction)
-   Better for required dependencies
```

#### 2. Setter Injection

**Analogy**: Like  **furnishing a house after moving in**  - you add things gradually.

**Advantages**:

-   Optional dependencies
-   Can change dependencies at runtime
-   Better for circular dependencies

**Example**:

java

```java
@Service
public class ReportService {
    private DataSource dataSource;
    private TemplateEngine templateEngine;
    
    @Autowired
    public void setDataSource(DataSource dataSource) {
        this.dataSource = dataSource;
    }
    
    @Autowired
    public void setTemplateEngine(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }
    
    public Report generateReport() {
        String data = dataSource.fetchData();
        return templateEngine.render(data);
    }
}
```

**XML Configuration**:

xml

```xml
<bean id="reportService" class="com.example.ReportService">
    <property name="dataSource" ref="dataSource"/>
    <property name="templateEngine" ref="templateEngine"/>
</bean>
```
**Advantages**:

-   Optional dependencies
-   Allows re-injection (mutable)
-   Clearer XML configuration

**Use Case**: Optional dependencies, circular dependencies (with care)

#### 3. Field Injection (Not Recommended)

**Analogy**: Like  **teleporting ingredients**  directly into your kitchen - convenient but mysterious.


**Disadvantages**:

-   Cannot use final fields
-   Harder to test (need Spring context)
-   Hidden dependencies
-   Cannot detect circular dependencies at compile time

**Note**: Field injection is convenient but not recommended for production code

**Example**:

java

```java
@Service
public class NotificationService {
    @Autowired
    private EmailSender emailSender; // Field injection
    
    @Autowired
    private SmsSender smsSender;
    
    public void notify(String message) {
        emailSender.send(message);
        smsSender.send(message);
    }
}
```

### Comparison Table
<img width="902" height="247" alt="image" src="https://github.com/user-attachments/assets/53b566ed-fd39-470f-8fcc-11b6f8d46b4f" />
## 7. Bean Configuration

### XML-Based Configuration

**Analogy**: XML config is like a  **blueprint**  - everything is written down explicitly.

**Example**: beans.xml

xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- Bean definitions -->
    <bean id="engine" class="com.example.Engine">
        <constructor-arg value="V8"/>
    </bean>

    <bean id="car" class="com.example.Car">
        <property name="model" value="BMW"/>
        <property name="engine" ref="engine"/>
    </bean>
    
    <!-- Bean with init and destroy methods -->
    <bean id="dbConnection" class="com.example.DatabaseConnection"
          init-method="customInit" 
          destroy-method="customDestroy">
        <property name="url" value="jdbc:mysql://localhost:3306/mydb"/>
    </bean>
</beans>
```

**Loading XML Configuration**:

java

```java
public class App {
    public static void main(String[] args) {
        ApplicationContext context = 
            new ClassPathXmlApplicationContext("beans.xml");
        
        Car car = context.getBean("car", Car.class);
        car.start();
    }
}
```

### Java-Based Configuration

**Analogy**: Java config is like  **assembling furniture**  - you program how things fit together.

#### @Configuration and @Bean

java

```java
@Configuration
public class AppConfig {
    
    @Bean
    public Engine engine() {
        return new Engine("V8");
    }
    
    @Bean
    public Car car() {
        Car car = new Car();
        car.setModel("BMW");
        car.setEngine(engine()); // Method call injection
        return car;
    }
    
    @Bean(initMethod = "customInit", destroyMethod = "customDestroy")
    public DatabaseConnection dbConnection() {
        DatabaseConnection conn = new DatabaseConnection();
        conn.setUrl("jdbc:mysql://localhost:3306/mydb");
        return conn;
    }
}
```

**Loading Java Configuration**:

java

```java
public class App {
    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        
        Car car = context.getBean(Car.class);
        car.start();
    }
}
```

### Annotation-Based Configuration

#### Component Scanning

**Base Package Naming Convention**:

```
com.company.project
├── controller    (Web layer)
├── service       (Business logic)
├── repository    (Data access)
├── model         (Domain objects)
└── config        (Configuration)
```

#### Stereotype Annotations

java

```java
// Generic component
@Component
public class UtilityHelper {
    public String formatDate(Date date) {
        return new SimpleDateFormat("yyyy-MM-dd").format(date);
    }
}

// Service layer
@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;
    
    public User findById(Long id) {
        return userRepo.findById(id);
    }
}

// Data access layer
@Repository
public class UserRepository {
    @PersistenceContext
    private EntityManager em;
    
    public User findById(Long id) {
        return em.find(User.class, id);
    }
}

// Web layer
@Controller
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public String getUser(@PathVariable Long id, Model model) {
        User user = userService.findById(id);
        model.addAttribute("user", user);
        return "userView";
    }
}

// REST API
@RestController
@RequestMapping("/api")
public class UserRestController {
    @Autowired
    private UserService userService;
    
    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id) {
        return userService.findById(id);
    }
}
```

#### Enabling Component Scanning

**Java Config**:

java

```java
@Configuration
@ComponentScan(basePackages = "com.example")
public class AppConfig {
    // Additional beans if needed
}
```

**XML Config**:

xml

```xml
<context:component-scan base-package="com.example"/>
```

### Auto-wiring

#### @Autowired

**How it works**:

1.  By Type (default)
2.  By Name (if multiple beans of same type)
3.  By Qualifier (explicit selection)

java

```java
@Service
public class OrderService {
    
    // Field injection
    @Autowired
    private PaymentService paymentService;
    
    // Constructor injection
    private final EmailService emailService;
    
    @Autowired
    public OrderService(EmailService emailService) {
        this.emailService = emailService;
    }
    
    // Setter injection
    private NotificationService notificationService;
    
    @Autowired
    public void setNotificationService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
}
```

#### @Qualifier

**Problem**: Multiple beans of same type

java

```java
public interface PaymentGateway {
    void processPayment(double amount);
}

@Component
@Qualifier("stripe")
public class StripePayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing via Stripe: $" + amount);
    }
}

@Component
@Qualifier("paypal")
public class PayPalPayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing via PayPal: $" + amount);
    }
}

// Usage
@Service
public class CheckoutService {
    private final PaymentGateway paymentGateway;
    
    @Autowired
    public CheckoutService(@Qualifier("stripe") PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway;
    }
    
    public void checkout(double amount) {
        paymentGateway.processPayment(amount);
    }
}
```

**Memory Visualization**:

```
Container:
┌─────────────────────────────────────┐
│  PaymentGateway implementations:    │
│                                     │
│  StripePayment@1a2b                 │
│  qualifier: "stripe"                │
│                                     │
│  PayPalPayment@3c4d                 │
│  qualifier: "paypal"                │
└─────────────────────────────────────┘
         ▼ @Qualifier("stripe")
┌─────────────────────────────────────┐
│  CheckoutService@5e6f               │
│  ┌───────────────────────────────┐  │
│  │ paymentGateway ──────────────┐│  │
│  └──────────────────────────────┼┘  │
└─────────────────────────────────┼───┘
                                  ▼
                        StripePayment@1a2b
```

#### @Primary

**Solution**: When you have a preferred default bean

java

```java
@Component
@Primary  // This will be the default choice
public class StripePayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing via Stripe (Primary): $" + amount);
    }
}

@Component
public class PayPalPayment implements PaymentGateway {
    public void processPayment(double amount) {
        System.out.println("Processing via PayPal: $" + amount);
    }
}

// Usage - No @Qualifier needed, gets StripePayment
@Service
public class CheckoutService {
    private final PaymentGateway paymentGateway;
    
    @Autowired
    public CheckoutService(PaymentGateway paymentGateway) {
        this.paymentGateway = paymentGateway; // Gets StripePayment (Primary)
    }
}

// If you want PayPal specifically, use @Qualifier
@Service
public class RefundService {
    @Autowired
    @Qualifier("payPalPayment")
    private PaymentGateway paymentGateway; // Gets PayPalPayment
}
```

----------

##  Java Annotations Configuration 

### @Configuration Classes

**Theory**: Java class that defines beans (replacement for XML)

java

```java
package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.service.*;

@Configuration
public class AppConfig {
    
    @Bean
    public DataSource dataSource() {
        HikariDataSource dataSource = new HikariDataSource();
        dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        dataSource.setUsername("root");
        dataSource.setPassword("password");
        dataSource.setMaximumPoolSize(10);
        return dataSource;
    }
    
    @Bean
    public UserRepository userRepository() {
        return new UserRepository(dataSource());
    }
    
    @Bean
    public UserService userService() {
        return new UserService(userRepository());
    }
}
```

**Loading Configuration**

java

```java
public class App {
    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        
        UserService userService = context.getBean(UserService.class);
        userService.createUser("john_doe");
    }
}
```

### Memory Visualization

```
┌─────────────────────────────────────┐
│ @Configuration Class (AppConfig)    │
│ ┌─────────────────────────────────┐ │
│ │ @Bean dataSource()              │ │──┐
│ │ @Bean userRepository()          │ │  │ Method calls
│ │ @Bean userService()             │ │  │ create beans
│ └─────────────────────────────────┘ │  │
└─────────────────────────────────────┘  │
                                         ▼
┌──────────────────────────────────────────┐
│ SPRING CONTAINER                         │
│ ┌──────────────────────────────────────┐ │
│ │ DataSource@1a2b                      │ │
│ │ UserRepository@3c4d ──> depends on ──┼─┼─> DataSource@1a2b
│ │ UserService@5e6f ──> depends on ─────┼─┼─> UserRepository@3c4d
│ └──────────────────────────────────────┘ │
└──────────────────────────────────────────┘
```

----------

### Base Package Naming Convention

**Theory**: Organize packages logically for component scanning

```
com.example.myapp
├── config              // @Configuration classes
│   ├── AppConfig.java
│   └── SecurityConfig.java
├── controller          // @Controller, @RestController
│   ├── UserController.java
│   └── OrderController.java
├── service             // @Service
│   ├── UserService.java
│   └── OrderService.java
├── repository          // @Repository
│   ├── UserRepository.java
│   └── OrderRepository.java
├── model               // Domain objects (not beans)
│   ├── User.java
│   └── Order.java
└── MyApplication.java  // Main class with @SpringBootApplication
```

**Best Practices**:

-   Use reverse domain naming:  `com.company.project`
-   Keep related classes together
-   Don't mix concerns in same package

----------

## 9. Component Scanning 

### Theory

Component scanning automatically detects and registers beans without explicit configuration.

### @Component Annotation

**Theory**: Generic stereotype for any Spring-managed component

java

```java
@Component
public class EmailValidator {
    public boolean validate(String email) {
        return email.matches("^[A-Za-z0-9+_.-]+@(.+)$");
    }
}
```

### Specialized Stereotypes

java

```java
// @Service - Business logic layer
@Service
public class OrderService {
    public void processOrder(Order order) {
        // Business logic
    }
}

// @Repository - Data access layer
@Repository
public class UserRepository {
    public User findById(Long id) {
        // Database access
    }
}

// @Controller - Presentation layer
@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        return "index";
    }
}
```

**Component Hierarchy**

```
        @Component
           │
    ┌──────┼──────┐
    │      │      │
@Service @Repository @Controller
                      │
                  @RestController
```

----------

### @ComponentScan Annotation

**Theory**: Tells Spring where to look for components

java

```java
@Configuration
@ComponentScan(basePackages = "com.example.myapp")
public class AppConfig {
    // Spring will scan com.example.myapp and sub-packages
}

// Multiple packages
@Configuration
@ComponentScan(basePackages = {
    "com.example.service",
    "com.example.repository"
})
public class AppConfig {
}

// Exclude certain components
@Configuration
@ComponentScan(
    basePackages = "com.example",
    excludeFilters = @ComponentScan.Filter(
        type = FilterType.REGEX,
        pattern = "com.example.test.*"
    )
)
public class AppConfig {
}
```

### Scanning Visualization

```
BEFORE SCANNING
┌──────────────────────────┐
│ Spring Container (Empty) │
└──────────────────────────┘

DURING SCANNING
┌────────────────────────────────────┐
│ Classpath Scanner                  │
│ Scanning: com.example.myapp        │
│ ┌────────────────────────────────┐ │
│ │ Found: UserService.java        │ │
│ │   Has @Service ✅              │ │
│ │ Found: User.java               │ │
│ │   No stereotype ❌             │ │
│ │ Found: OrderRepository.java    │ │
│ │   Has @Repository ✅           │ │
│ └────────────────────────────────┘ │
└────────────────────────────────────┘

AFTER SCANNING
┌────────────────────────────────────┐
│ Spring Container                   │
│ [UserService@1a2b]                 │
│ [OrderRepository@3c4d]             │
└────────────────────────────────────┘
```

----------
## 8. Complete Working Examples

### Example 1: E-Commerce Application

**Project Structure**:

```
com.example.ecommerce
├── model
│   ├── Product.java
│   └── Order.java
├── repository
│   ├── ProductRepository.java
│   └── OrderRepository.java
├── service
│   ├── ProductService.java
│   ├── OrderService.java
│   └── PaymentService.java
├── controller
│   └── OrderController.java
└── config
    └── AppConfig.java
```

**Model Classes**:

java

```java
package com.example.ecommerce.model;

public class Product {
    private Long id;
    private String name;
    private double price;
    
    public Product(Long id, String name, double price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public String getName() { return name; }
    public double getPrice() { return price; }
}

public class Order {
    private Long id;
    private List<Product> products;
    private double totalAmount;
    private String status;
    
    public Order() {
        this.products = new ArrayList<>();
        this.status = "PENDING";
    }
    
    public void addProduct(Product product) {
        products.add(product);
        calculateTotal();
    }
    
    private void calculateTotal() {
        totalAmount = products.stream()
                             .mapToDouble(Product::getPrice)
                             .sum();
    }
    
    // Getters and setters
    public List<Product> getProducts() { return products; }
    public double getTotalAmount() { return totalAmount; }
    public void setStatus(String status) { this.status = status; }
    public String getStatus() { return status; }
}
```

**Repository Layer**:

java

```java
package com.example.ecommerce.repository;

@Repository
public class ProductRepository {
    private Map<Long, Product> database = new HashMap<>();
    
    public ProductRepository() {
        // Initialize with sample data
        database.put(1L, new Product(1L, "Laptop", 999.99));
        database.put(2L, new Product(2L, "Mouse", 29.99));
        database.put(3L, new Product(3L, "Keyboard", 79.99));
    }
    
    public Product findById(Long id) {
        return database.get(id);
    }
    
    public List<Product> findAll() {
        return new ArrayList<>(database.values());
    }
}

@Repository
public class OrderRepository {
    private Map<Long, Order> database = new HashMap<>();
    private AtomicLong idGenerator = new AtomicLong(1);
    
    public Order save(Order order) {
        Long id = idGenerator.getAndIncrement();
        database.put(id, order);
        System.out.println("Order saved with ID: " + id);
        return order;
    }
    
    public Order findById(Long id) {
        return database.get(id);
    }
}
```

**Service Layer**:

java

```java
package com.example.ecommerce.service;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    
    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    public Product getProduct(Long id) {
        Product product = productRepository.findById(id);
        if (product == null) {
            throw new RuntimeException("Product not found: " + id);
        }
        return product;
    }
    
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
}

@Service
public class PaymentService {
    
    public boolean processPayment(Order order) {
        System.out.println("Processing payment for amount: $" + order.getTotalAmount());
        // Simulate payment processing
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("Payment successful!");
        return true;
    }
}

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final ProductService productService;
    private final PaymentService paymentService;
    
    @Autowired
    public OrderService(OrderRepository orderRepository,
                       ProductService productService,
                       PaymentService paymentService) {
        this.orderRepository = orderRepository;
        this.productService = productService;
        this.paymentService = paymentService;
    }
    
    public Order createOrder(List<Long> productIds) {
        Order order = new Order();
        
        // Add products to order
        for (Long productId : productIds) {
            Product product = productService.getProduct(productId);
            order.addProduct(product);
        }
        
        // Process payment
        boolean paymentSuccess = paymentService.processPayment(order);
        
        if (paymentSuccess) {
            order.setStatus("CONFIRMED");
            orderRepository.save(order);
        } else {
            order.setStatus("FAILED");
        }
        
        return order;
    }
}
```

**Configuration**:

java

```java
package com.example.ecommerce.config;

@Configuration
@ComponentScan(basePackages = "com.example.ecommerce")
public class AppConfig {
    
    @Bean
    public String applicationName() {
        return "E-Commerce Application";
    }
}
```

**Main Application**:

java

```java
package com.example.ecommerce;

public class ECommerceApp {
    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        
        // Get the order service
        OrderService orderService = context.getBean(OrderService.class);
        
        // Create an order with product IDs
        List<Long> productIds = Arrays.asList(1L, 2L, 3L);
        Order order = orderService.createOrder(productIds);
        
        // Display order details
        System.out.println("\n=== Order Summary ===");
        System.out.println("Status: " + order.getStatus());
        System.out.println("Total Amount: $" + order.getTotalAmount());
        System.out.println("Products:");
        for (Product product : order.getProducts()) {
            System.out.println("  - " + product.getName() + " ($" + product.getPrice() + ")");
        }
        
        // Close context
        ((AnnotationConfigApplicationContext) context).close();
    }
}
```

**Output**:

```
Processing payment for amount: $1109.97
Payment successful!
Order saved with ID: 1

=== Order Summary ===
Status: CONFIRMED
Total Amount: $1109.97
Products:
  - Laptop ($999.99)
  - Mouse ($29.99)
  - Keyboard ($79.99)
```

### Example 2: Bean Scopes Demonstration

java

```java
// Singleton scope
@Component
@Scope("singleton")
public class ConfigService {
    private String config = "Default Config";
    
    public ConfigService() {
        System.out.println("ConfigService created: " + this.hashCode());
    }
    
    public void setConfig(String config) {
        this.config = config;
    }
    
    public String getConfig() {
        return config;
    }
}

// Prototype scope
@Component
@Scope("prototype")
public class TaskExecutor {
    private String taskName;
    
    public TaskExecutor() {
        System.out.println("TaskExecutor created: " + this.hashCode());
    }
    
    public void executeTask(String taskName) {
        this.taskName = taskName;
        System.out.println("Executing task: " + taskName + " in " + this.hashCode());
    }
}

// Main application
public class ScopeDemo {
    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        
        System.out.println("=== Singleton Demo ===");
        ConfigService config1 = context.getBean(ConfigService.class);
        ConfigService config2 = context.getBean(ConfigService.class);
        
        System.out.println("config1 == config2: " + (config1 == config2)); // true
        
        config1.setConfig("New Config");
        System.out.println("config2.getConfig(): " + config2.getConfig()); // "New Config"
        
        System.out.println("\n=== Prototype Demo ===");
        TaskExecutor task1 = context.getBean(TaskExecutor.class);
        TaskExecutor task2 = context.getBean(TaskExecutor.class);
        TaskExecutor task3 = context.getBean(TaskExecutor.class);
        
        System.out.println("task1 == task2: " + (task1 == task2)); // false
        
        task1.executeTask("Task 1");
        task2.executeTask("Task 2");
        task3.executeTask("Task 3");
        
        ((AnnotationConfigApplicationContext) context).close();
    }
}
```

**Output**:

```
=== Singleton Demo ===
ConfigService created: 123456789
config1 == config2: true
config2.getConfig(): New Config

=== Prototype Demo ===
TaskExecutor created: 987654321
TaskExecutor created: 456789123
TaskExecutor created: 789123456
task1 == task2: false
Executing task: Task 1 in 987654321
Executing task: Task 2 in 456789123
Executing task: Task 3 in 789123456
```

### Example 3: Multiple Configuration Files

java

```java
// Database Configuration
@Configuration
public class DatabaseConfig {
    
    @Bean
    public DataSource dataSource() {
        System.out.println("Creating DataSource");
        // Simplified datasource
        return new SimpleDataSource("jdbc:mysql://localhost:3306/mydb");
    }
    
    @Bean
    public TransactionManager transactionManager(DataSource dataSource) {
        System.out.println("Creating TransactionManager");
        return new TransactionManager(dataSource);
    }
}

// Service Configuration
@Configuration
@ComponentScan(basePackages = "com.example.service")
public class ServiceConfig {
    
    @Bean
    public EmailService emailService() {
        return new EmailService("smtp.gmail.com", 587);
    }
}

// Main Configuration
@Configuration
@Import({DatabaseConfig.class, ServiceConfig.class})
public class MainConfig {
    
    @Bean
    public String appVersion() {
        return "1.0.0";
    }
}

// Application
public class MultiConfigApp {
    public static void main(String[] args) {
        ApplicationContext context = 
            new AnnotationConfigApplicationContext(MainConfig.class);
        
        DataSource ds = context.getBean(DataSource.class);
        EmailService email = context.getBean(EmailService.class);
        String version = context.getBean("appVersion", String.class);
        
        System.out.println("Application Version: " + version);
        
        ((AnnotationConfigApplicationContext) context).close();
    }
}
```

----------

## 9. Best Practices Summary

### 1. Bean Configuration

✅  **DO**:

-   Use constructor injection for required dependencies
-   Use Java-based configuration for type safety
-   Keep configuration classes focused and organized
-   Use meaningful bean names

❌  **DON'T**:

-   Use field injection in production code
-   Create circular dependencies
-   Mix configuration styles unnecessarily
-   Use XML for new projects (legacy support only)

### 2. Bean Scopes

✅  **DO**:

-   Use singleton for stateless beans (default)
-   Use prototype for stateful beans
-   Be careful with request/session scopes in multi-threaded environments
-   Consider thread-safety for singleton beans

❌  **DON'T**:

-   Inject prototype beans directly into singleton beans
-   Store user-specific data in singleton beans
-   Forget about memory implications of scope choices

### 3. Dependency Injection

✅  **DO**:

-   Prefer constructor injection
-   Make dependencies explicit
-   Use interfaces for abstractions
-   Keep constructors simple

❌  **DON'T**:

-   Use field injection
-   Create hidden dependencies
-   Violate single responsibility principle
-   Create God objects with too many dependencies

### 4. Component Scanning

✅  **DO**:

-   Follow package naming conventions
-   Use specific base packages
-   Use stereotype annotations appropriately
-   Keep package structure clean

❌  **DON'T**:

-   Scan entire classpath
-   Mix unrelated components in same package
-   Forget to enable component scanning

----------

## 10. Common Pitfalls and Solutions

### Problem 1: Circular Dependencies

**Problem**:

java

```java
@Service
public class ServiceA {
    @Autowired
    private ServiceB serviceB; // Needs ServiceB
}

@Service
public class ServiceB {
    @Autowired
    private ServiceA serviceA; // Needs ServiceA
}
// BeanCurrentlyInCreationException!
```

**Solution 1**: Use @Lazy

java

```java
@Service
public class ServiceA {
    @Autowired
    @Lazy
    private ServiceB serviceB;
}
```

**Solution 2**: Use setter injection

java

```java
@Service
public class ServiceA {
    private ServiceB serviceB;
    
    @Autowired
    public void setServiceB(ServiceB serviceB) {
        this.serviceB = serviceB;
    }
}
```

**Solution 3**: Redesign (Best approach)

java

```java
@Service
public class ServiceC {
    // Common logic extracted
}

@Service
public class ServiceA {
    @Autowired
    private ServiceC serviceC;
}

@Service
public class ServiceB {
    @Autowired
    private ServiceC serviceC;
}
```

### Problem 2: NoSuchBeanDefinitionException

**Causes**:

1.  Bean not defined
2.  Component scanning not enabled
3.  Wrong package structure

**Solution**:

java

```java
@Configuration
@ComponentScan(basePackages = {
    "com.example.service",
    "com.example.repository",
    "com.example.controller"
})
public class AppConfig {
    // Ensure all packages are scanned
}
```

### Problem 3: Multiple Beans of Same Type

**Problem**:

java

```java
@Service
public class EmailNotifier implements Notifier { }

@Service
public class SmsNotifier implements Notifier { }

@Service
public class AlertService {
    @Autowired
    private Notifier notifier; // Which one?
}
```

**Solution 1**: Use @Qualifier

java

```java
@Service
public class AlertService {
    @Autowired
    @Qualifier("emailNotifier")
    private Notifier notifier;
}
```

**Solution 2**: Use @Primary

java

```java
@Service
@Primary
public class EmailNotifier implements Notifier { }
```

----------

## 11. Memory Management Tips

### Visualizing Bean Lifecycle in Memory

```
Application Startup:
┌────────────────────────────────────────┐
│ JVM Heap Memory                        │
│                                        │
│ ┌────────────────────────────────┐    │
│ │ Spring Container               │    │
│ │ ┌────────────────────────────┐ │    │
│ │ │ Bean Pool (Singletons)     │ │    │
│ │ │                            │ │    │
│ │ │ UserService@1a2b           │ │    │
│ │ │ OrderService@3c4d          │ │    │
│ │ │ PaymentService@5e6f        │ │    │
│ │ └────────────────────────────┘ │    │
│ │                                │    │
│ │ ┌────────────────────────────┐ │    │
│ │ │ Prototype Beans (created   │ │    │
│ │ │ on demand, GC eligible)    │ │    │
│ │ └────────────────────────────┘ │    │
│ └────────────────────────────────┘    │
└────────────────────────────────────────┘

Request Handling:
┌────────────────────────────────────────┐
│ Thread Stack                           │
│ ┌────────────────────────────────┐    │
│ │ method() {                     │    │
│ │   ShoppingCart cart =          │    │
│ │   context.getBean(...) ────────┼────┼─→ New Prototype Instance
│ │   cart.addItem(...);           │    │   (Created, used, then GC'd)
│ │ }                              │    │
│ └────────────────────────────────┘    │
└────────────────────────────────────────┘
```

----------

## 12. Quick Reference Cheat Sheet

### Annotations Quick Reference
<img width="905" height="592" alt="image" src="https://github.com/user-attachments/assets/61e52a51-3b7f-48f9-9b46-d975ed3e61db" />

### Bean Scopes Quick Reference
<img width="902" height="291" alt="image" src="https://github.com/user-attachments/assets/25ed9d43-6be7-4321-baf2-2bb5ffa35ede" />

## Conclusion

This tutorial covered the fundamental concepts of the Spring Framework:

1.  **Spring Container**: The IoC container that manages beans
2.  **Spring Beans**: Objects managed by Spring
3.  **Bean Lifecycle**: Creation to destruction process
4.  **Bean Scopes**: Singleton, prototype, request, session, application, websocket
5.  **Dependency Injection**: Constructor, setter, and field injection
6.  **Configuration**: XML, Java-based, and annotation-based
7.  **Auto-wiring**: @Autowired, @Qualifier, @Primary

**Key Takeaways**:

-   Spring promotes loose coupling through DI
-   Use constructor injection for required dependencies
-   Singleton is the default and most common scope
-   Component scanning simplifies configuration
-   Annotations make configuration more maintainable
