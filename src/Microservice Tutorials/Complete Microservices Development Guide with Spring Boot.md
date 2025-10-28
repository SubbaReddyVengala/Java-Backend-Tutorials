# Complete Microservices Development Guide with Spring Boot

## Table of Contents

1.  Introduction to Microservices
2.  Microservices Architecture Overview
3.  Case Study: Online Food Delivery System
4.  Step-by-Step Development
5.  Service Communication
6.  Infrastructure Components
7.  Database Strategy
8.  Testing
9.  Resilience and Observability
10.  Deployment
11.  Best Practice

----------

## 1. Introduction to Microservices 

### What are Microservices?

**Definition**: Microservices are an architectural style where an application is composed of small, independent services that communicate over well-defined APIs. Each service is self-contained, focuses on a specific business capability, and can be developed, deployed, and scaled independently.

**Memory Analogy - Human Body**: Think of microservices like organs in the human body:

-   **Heart (Payment Service)**: Handles critical transactions
-   **Brain (API Gateway)**: Routes requests and makes decisions
-   **Lungs (Notification Service)**: Communicates with the outside world
-   **Digestive System (Order Service)**: Processes orders step by step
-   **Nervous System (Message Bus/Kafka)**: Enables communication between organs

If one organ has an issue, the others continue functioning. The body doesn't shut down completely!

### Why Microservices?

#### Traditional Problems with Monoliths:

1.  **Tight Coupling**: All code in one application
2.  **Single Point of Failure**: If one module crashes, everything crashes
3.  **Difficult Scaling**: Must scale entire application, not just the needed part
4.  **Long Deployment Cycles**: Small change requires full redeployment
5.  **Technology Lock-in**: Stuck with one tech stack

#### Microservices Solutions:

1.  **Loose Coupling**: Services are independent
2.  **Fault Isolation**: One service failure doesn't crash everything
3.  **Selective Scaling**: Scale only what needs scaling
4.  **Faster Deployments**: Deploy individual services
5.  **Technology Diversity**: Each service can use different tech

### Monolith vs Microservices

#### Visual Comparison:

**Monolith Architecture:**

```
┌─────────────────────────────────────┐
│                                     │
│  Single Application (WAR/JAR)       │
│                                     │
│  ┌──────────┐  ┌──────────┐       │
│  │   UI     │  │ Business │       │
│  │  Layer   │──│  Logic   │       │
│  └──────────┘  └──────────┘       │
│                     │               │
│              ┌──────────┐          │
│              │ Database │          │
│              │  Layer   │          │
│              └──────────┘          │
│                                     │
└─────────────────────────────────────┘
        One Database
```

**Microservices Architecture:**

```
┌────────────┐  ┌────────────┐  ┌────────────┐
│  Service A │  │  Service B │  │  Service C │
│   (Java)   │  │  (Node.js) │  │  (Python)  │
└─────┬──────┘  └─────┬──────┘  └─────┬──────┘
      │               │               │
   ┌──┴──┐         ┌──┴──┐         ┌──┴──┐
   │ DB1 │         │ DB2 │         │ DB3 │
   └─────┘         └─────┘         └─────┘
```

### Real-World Analogy: City vs Megastore

**Monolith = Megastore (Walmart)**

-   Everything under one roof
-   If power goes out, entire store closes
-   Must expand entire building to add capacity
-   One management system controls everything
-   All employees must follow same rules

**Microservices = City with Specialized Shops**

-   Bakery, butcher, pharmacy, bookstore (separate services)
-   If bakery closes, others remain open
-   Each shop can expand independently
-   Each shop has its own management
-   Each shop can operate differently
-   Connected by roads (APIs) and phone lines (message queues)

### Advantages of Microservices

1.  **Independent Deployability**: Deploy services without affecting others
2.  **Technology Heterogeneity**: Use the best tool for each job
3.  **Resilience**: Failure in one service doesn't cascade
4.  **Scalability**: Scale services independently based on demand
5.  **Team Autonomy**: Teams own entire services end-to-end
6.  **Easier Maintenance**: Smaller codebases are easier to understand
7.  **Faster Time to Market**: Parallel development and deployment

### Challenges of Microservices

1.  **Distributed System Complexity**: Network latency, failures
2.  **Data Consistency**: Managing distributed transactions
3.  **Testing Complexity**: Testing integrated systems
4.  **Operational Overhead**: More services to monitor and deploy
5.  **Network Communication**: More API calls = potential bottlenecks
6.  **Debugging Difficulty**: Tracing requests across services
7.  **Initial Setup Cost**: Infrastructure requirements

----------

## 2. Microservices Architecture Overview {#architecture}

### Core Components

```
                    ┌─────────────────┐
                    │   API Gateway   │ ← Single Entry Point
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────▼─────┐      ┌─────▼──────┐     ┌─────▼──────┐
    │ Service  │      │  Service   │     │  Service   │
    │    A     │      │     B      │     │     C      │
    └────┬─────┘      └─────┬──────┘     └─────┬──────┘
         │                  │                   │
    ┌────▼─────┐      ┌─────▼──────┐     ┌─────▼──────┐
    │   DB A   │      │    DB B    │     │    DB C    │
    └──────────┘      └────────────┘     └────────────┘

    ┌─────────────────────────────────────────────────┐
    │         Service Discovery (Eureka)              │
    └─────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────┐
    │       Config Server (Centralized Config)        │
    └─────────────────────────────────────────────────┘

    ┌─────────────────────────────────────────────────┐
    │      Message Broker (Kafka/RabbitMQ)            │
    └─────────────────────────────────────────────────┘
```

### 1. API Gateway

**What**: Single entry point for all client requests

**Why**:

-   Routing to appropriate services
-   Authentication & Authorization
-   Rate limiting
-   Load balancing
-   Request/Response transformation

**Analogy**: Reception desk at a hospital. You don't directly go to a doctor; the receptionist directs you to the right department.

### 2. Service Discovery

**What**: Registry of all available service instances

**Why**:

-   Dynamic service location
-   Load balancing across instances
-   Health checks

**Analogy**: Phone directory. Instead of memorizing addresses, you look up the service name to find where it lives.

### 3. Config Server

**What**: Centralized configuration management

**Why**:

-   Single source of truth for configurations
-   Environment-specific configs
-   Change configs without redeployment

**Analogy**: Company policy handbook. Instead of each department maintaining rules, everyone refers to one central document.

### 4. Circuit Breaker

**What**: Prevents cascading failures

**Why**:

-   Stops calling failing services
-   Provides fallback responses
-   Allows service to recover

**Analogy**: Electrical circuit breaker in your home. When overloaded, it trips to prevent fire, and you can reset once the issue is fixed.

### 5. Database per Service

**What**: Each microservice has its own database

**Why**:

-   Service independence
-   Technology flexibility
-   Isolated failures

**Analogy**: Each shop in a mall has its own inventory system. They don't share the same storage room.

### Service Communication Types

#### Synchronous Communication (REST)

```
Client → [Request] → Service A → [Request] → Service B
       ← [Response] ←          ← [Response] ←
```

**When to Use**:

-   Real-time responses needed
-   Simple request-response patterns
-   User-facing operations

**Example**: Fetching user profile data

#### Asynchronous Communication (Kafka/RabbitMQ)

```
Service A → [Event/Message] → Message Broker → Service B
                                              → Service C
                                              → Service D
```

**When to Use**:

-   Fire-and-forget operations
-   Event-driven architecture
-   Multiple services need same data
-   Long-running operations

**Example**: Sending email notifications, processing payments

----------

## 3. Case Study: Online Food Delivery System 

### Problem Statement

Build a food delivery platform like  **Swiggy/Zomato**  that allows:

-   Users to browse restaurants and place orders
-   Restaurants to manage menu and receive orders
-   Real-time order tracking
-   Payment processing
-   Notifications (SMS, Email, Push)

### System Requirements

**Functional Requirements:**

1.  User registration and authentication
2.  Browse restaurants by location
3.  View restaurant menus
4.  Place orders
5.  Make payments
6.  Track order status
7.  Send notifications
8.  Restaurant dashboard

**Non-Functional Requirements:**

1.  High availability (99.9% uptime)
2.  Scalability (handle millions of users)
3.  Low latency (< 200ms response time)
4.  Fault tolerance
5.  Data consistency

### Identified Microservices

Let's break down the monolith into services:

```
┌──────────────────────────────────────────────────────┐
│              API GATEWAY                             │
│         (Spring Cloud Gateway)                       │
└───────────────────┬──────────────────────────────────┘
                    │
    ┌───────────────┼───────────────────┐
    │               │                   │
┌───▼─────┐   ┌────▼──────┐    ┌──────▼──────┐
│  USER   │   │RESTAURANT │    │    ORDER    │
│ SERVICE │   │  SERVICE  │    │   SERVICE   │
└────┬────┘   └─────┬─────┘    └──────┬──────┘
     │              │                  │
┌────▼────┐   ┌─────▼─────┐    ┌──────▼──────┐
│ User DB │   │   Rest    │    │  Order DB   │
└─────────┘   │    DB     │    └──────┬──────┘
              └───────────┘           │
                                      │
    ┌─────────────────────────────────┼──────────┐
    │                                 │          │
┌───▼──────┐              ┌──────────▼─────┐ ┌──▼────────┐
│ PAYMENT  │              │  NOTIFICATION  │ │ DELIVERY  │
│ SERVICE  │              │    SERVICE     │ │  SERVICE  │
└────┬─────┘              └────────┬───────┘ └─────┬─────┘
     │                             │               │
┌────▼────┐                   ┌────▼──────┐  ┌─────▼────┐
│Payment  │                   │Notification│  │ Delivery │
│   DB    │                   │    DB     │  │    DB    │
└─────────┘                   └───────────┘  └──────────┘

        ┌─────────────────────────────────┐
        │  KAFKA MESSAGE BROKER           │
        │  (Event-Driven Communication)   │
        └─────────────────────────────────┘

        ┌─────────────────────────────────┐
        │  EUREKA SERVICE DISCOVERY       │
        └─────────────────────────────────┘

        ┌─────────────────────────────────┐
        │  CONFIG SERVER                  │
        └─────────────────────────────────┘
```

### Service Responsibilities
<img width="805" height="288" alt="image" src="https://github.com/user-attachments/assets/38453395-bdf1-4472-a842-53c5792e250f" />


### Service Interactions

**Scenario: User Places an Order**

```
1. User → API Gateway → Order Service
   "Create order for Restaurant X"

2. Order Service → Restaurant Service (REST)
   "Validate restaurant and items"

3. Order Service → User Service (REST)
   "Validate user and address"

4. Order Service → Payment Service (REST)
   "Process payment for ₹500"

5. Payment Service → Kafka → [OrderPaid Event]

6. Order Service (listens to OrderPaid) → Updates order status

7. Order Service → Kafka → [OrderConfirmed Event]

8. Notification Service (listens) → Sends email/SMS

9. Delivery Service (listens) → Assigns delivery partner

10. Delivery Service → Kafka → [DeliveryAssigned Event]

11. Notification Service (listens) → Notifies user
```

### Technology Stack Decisions
<img width="817" height="505" alt="image" src="https://github.com/user-attachments/assets/0668dbcd-3323-4280-b47d-95931b4ec8d1" />



## 4. Step-by-Step Microservices Development 

### Service 1: User Service

**Responsibilities:**

-   User registration
-   User authentication (JWT)
-   Profile management
-   Address management

#### Project Structure

```
user-service/
├── src/main/java/com/fooddelivery/user/
│   ├── UserServiceApplication.java
│   ├── controller/
│   │   └── UserController.java
│   ├── service/
│   │   ├── UserService.java
│   │   └── UserServiceImpl.java
│   ├── repository/
│   │   └── UserRepository.java
│   ├── model/
│   │   ├── User.java
│   │   └── Address.java
│   ├── dto/
│   │   ├── UserRegistrationDTO.java
│   │   └── UserResponseDTO.java
│   ├── exception/
│   │   └── UserNotFoundException.java
│   └── config/
│       └── SecurityConfig.java
├── src/main/resources/
│   ├── application.yml
│   └── bootstrap.yml
└── pom.xml
```

#### pom.xml (User Service)

xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
    </parent>
    
    <groupId>com.fooddelivery</groupId>
    <artifactId>user-service</artifactId>
    <version>1.0.0</version>
    
    <properties>
        <java.version>17</java.version>
        <spring-cloud.version>2023.0.0</spring-cloud.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Web -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <!-- Spring Data JPA -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <!-- PostgreSQL -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
        </dependency>
        
        <!-- Eureka Client -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
        
        <!-- Config Client -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-config</artifactId>
        </dependency>
        
        <!-- Spring Security + JWT -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.11.5</version>
        </dependency>
        
        <!-- Validation -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <!-- Lombok -->
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        
        <!-- Actuator for Health Checks -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
    </dependencies>
    
    <dependencyManagement>
        <dependencies>
            <dependency>
                <groupId>org.springframework.cloud</groupId>
                <artifactId>spring-cloud-dependencies</artifactId>
                <version>${spring-cloud.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
</project>
```

#### User.java (Entity)

java

```java
package com.fooddelivery.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String firstName;
    
    @Column(nullable = false)
    private String lastName;
    
    @Column(nullable = false, unique = true)
    private String phoneNumber;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private List<Address> addresses;
    
    private String role = "USER"; // USER, ADMIN, RESTAURANT_OWNER
    
    private boolean active = true;
    
    private LocalDateTime createdAt = LocalDateTime.now();
    
    private LocalDateTime updatedAt;
}
```

#### Address.java (Entity)

java

```java
package com.fooddelivery.user.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "addresses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String addressLine1;
    private String addressLine2;
    private String city;
    private String state;
    private String pincode;
    private String landmark;
    
    @Column(name = "address_type")
    private String type; // HOME, WORK, OTHER
    
    private Double latitude;
    private Double longitude;
}
```

#### UserRepository.java

java

```java
package com.fooddelivery.user.repository;

import com.fooddelivery.user.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByPhoneNumber(String phoneNumber);
    boolean existsByEmail(String email);
    boolean existsByPhoneNumber(String phoneNumber);
}
```

#### UserService.java

java

```java
package com.fooddelivery.user.service;

import com.fooddelivery.user.dto.UserRegistrationDTO;
import com.fooddelivery.user.dto.UserResponseDTO;
import com.fooddelivery.user.model.User;

public interface UserService {
    UserResponseDTO registerUser(UserRegistrationDTO registrationDTO);
    UserResponseDTO getUserById(Long id);
    UserResponseDTO getUserByEmail(String email);
    UserResponseDTO updateUser(Long id, UserRegistrationDTO updateDTO);
    void deleteUser(Long id);
}
```

#### UserServiceImpl.java

java

```java
package com.fooddelivery.user.service;

import com.fooddelivery.user.dto.UserRegistrationDTO;
import com.fooddelivery.user.dto.UserResponseDTO;
import com.fooddelivery.user.exception.UserNotFoundException;
import com.fooddelivery.user.model.User;
import com.fooddelivery.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    @Transactional
    public UserResponseDTO registerUser(UserRegistrationDTO registrationDTO) {
        log.info("Registering user with email: {}", registrationDTO.getEmail());
        
        // Check if user already exists
        if (userRepository.existsByEmail(registrationDTO.getEmail())) {
            throw new RuntimeException("User with email already exists");
        }
        
        if (userRepository.existsByPhoneNumber(registrationDTO.getPhoneNumber())) {
            throw new RuntimeException("User with phone number already exists");
        }
        
        // Create user entity
        User user = new User();
        user.setEmail(registrationDTO.getEmail());
        user.setPassword(passwordEncoder.encode(registrationDTO.getPassword()));
        user.setFirstName(registrationDTO.getFirstName());
        user.setLastName(registrationDTO.getLastName());
        user.setPhoneNumber(registrationDTO.getPhoneNumber());
        user.setAddresses(registrationDTO.getAddresses());
        user.setCreatedAt(LocalDateTime.now());
        
        User savedUser = userRepository.save(user);
        log.info("User registered successfully with ID: {}", savedUser.getId());
        
        return mapToResponseDTO(savedUser);
    }
    
    @Override
    public UserResponseDTO getUserById(Long id) {
        log.info("Fetching user with ID: {}", id);
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));
        return mapToResponseDTO(user);
    }
    
    @Override
    public UserResponseDTO getUserByEmail(String email) {
        log.info("Fetching user with email: {}", email);
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User not found with email: " + email));
        return mapToResponseDTO(user);
    }
    
    @Override
    @Transactional
    public UserResponseDTO updateUser(Long id, UserRegistrationDTO updateDTO) {
        log.info("Updating user with ID: {}", id);
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + id));
        
        user.setFirstName(updateDTO.getFirstName());
        user.setLastName(updateDTO.getLastName());
        user.setPhoneNumber(updateDTO.getPhoneNumber());
        user.setUpdatedAt(LocalDateTime.now());
        
        if (updateDTO.getAddresses() != null) {
            user.setAddresses(updateDTO.getAddresses());
        }
        
        User updatedUser = userRepository.save(user);
        return mapToResponseDTO(updatedUser);
    }
    
    @Override
    @Transactional
    public void deleteUser(Long id) {
        log.info("Deleting user with ID: {}", id);
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException("User not found with ID: " + id);
        }
        userRepository.deleteById(id);
    }
    
    private UserResponseDTO mapToResponseDTO(User user) {
        UserResponseDTO dto = new UserResponseDTO();
        dto.setId(user.getId());
        dto.setEmail(user.getEmail());
        dto.setFirstName(user.getFirstName());
        dto.setLastName(user.getLastName());
        dto.setPhoneNumber(user.getPhoneNumber());
        dto.setAddresses(user.getAddresses());
        dto.setActive(user.isActive());
        dto.setCreatedAt(user.getCreatedAt());
        return dto;
    }
}
```

#### UserController.java

java

```java
package com.fooddelivery.user.controller;

import com.fooddelivery.user.dto.UserRegistrationDTO;
import com.fooddelivery.user.dto.UserResponseDTO;
import com.fooddelivery.user.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    
    private final UserService userService;
    
    @PostMapping("/register")
    public ResponseEntity<UserResponseDTO> registerUser(
            @Valid @RequestBody UserRegistrationDTO registrationDTO) {
        UserResponseDTO response = userService.registerUser(registrationDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUserById(@PathVariable Long id) {
        UserResponseDTO response = userService.getUserById(id);
        return ResponseEntity.ok(response);
    }
    
    @GetMapping("/email/{email}")
    public ResponseEntity<UserResponseDTO> getUserByEmail(@PathVariable String email) {
        UserResponseDTO response = userService.getUserByEmail(email);
        return ResponseEntity.ok(response);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserRegistrationDTO updateDTO) {
        UserResponseDTO response = userService.updateUser(id, updateDTO);
        return ResponseEntity.ok(response);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
```

#### application.yml (User Service)

yaml

```yaml
spring:
  application:
    name: user-service
  
  datasource:
    url: jdbc:postgresql://localhost:5432/user_db
    username: postgres
    password: postgres
    driver-class-name: org.postgresql.Driver
  
  jpa:
    hibernate:
      ddl-auto: update
    show-sql: true
    properties:
      hibernate:
        format_sql: true
        dialect: org.hibernate.dialect.PostgreSQLDialect

server:
  port: 8081

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true

management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics
  endpoint:
    health:
      show-details: always
```

----------

### Service 2: Restaurant Service

**Responsibilities:**

-   Restaurant registration and management
-   Menu management (items, pricing)
-   Restaurant search and filtering
-   Operating hours management

#### Key Entities

**Restaurant.java**

java

```java
package com.fooddelivery.restaurant.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "restaurants")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Restaurant {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    private String description;
    
    @Column(nullable = false)
    private String address;
    
    private String city;
    private String pincode;
    
    private Double latitude;
    private Double longitude;
    
    @Column(nullable = false, unique = true)
    private String phone;
    
    private String email;
    
    @ElementCollection
    private List<String> cuisineTypes; // INDIAN, CHINESE, ITALIAN, etc.
    
    private Double rating = 0.0;
    
    private Integer totalRatings = 0;
    
    private Boolean isActive = true;
    
    private String openingTime; // "09:00"
    private String closingTime; // "23:00"
    
    private Integer deliveryTime; // in minutes
    
    private Double minimumOrder = 0.0;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "restaurant")
    private List<MenuItem> menuItems;
    
    private Long ownerId; // Reference to User Service
    
    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt;
}
```

**MenuItem.java**

java

```java
package com.fooddelivery.restaurant.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "menu_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MenuItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    private String description;
    
    @Column(nullable = false)
    private Double price;
    
    private String category; // STARTER, MAIN_COURSE, DESSERT, BEVERAGE
    
    private String imageUrl;
    
    private Boolean isVegetarian = false;
    
    private Boolean isAvailable = true;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
}
```

#### RestaurantService.java (Implementation)

java

```java
package com.fooddelivery.restaurant.service;

import com.fooddelivery.restaurant.dto.RestaurantDTO;
import com.fooddelivery.restaurant.dto.MenuItemDTO;
import com.fooddelivery.restaurant.model.Restaurant;
import com.fooddelivery.restaurant.model.MenuItem;
import com.fooddelivery.restaurant.repository.RestaurantRepository;
import com.fooddelivery.restaurant.repository.MenuItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class RestaurantServiceImpl implements RestaurantService {
    
    private final RestaurantRepository restaurantRepository;
    private final MenuItemRepository menuItemRepository;
    
    @Override
    @Transactional
    public RestaurantDTO createRestaurant(RestaurantDTO restaurantDTO) {
        log.info("Creating restaurant: {}", restaurantDTO.getName());
        
        Restaurant restaurant = new Restaurant();
        restaurant.setName(restaurantDTO.getName());
        restaurant.setDescription(restaurantDTO.getDescription());
        restaurant.setAddress(restaurantDTO.getAddress());
        restaurant.setCity(restaurantDTO.getCity());
        restaurant.setPincode(restaurantDTO.getPincode());
        restaurant.setLatitude(restaurantDTO.getLatitude());
        restaurant.setLongitude(restaurantDTO.getLongitude());
        restaurant.setPhone(restaurantDTO.getPhone());
        restaurant.setEmail(restaurantDTO.getEmail());
        restaurant.setCuisineTypes(restaurantDTO.getCuisineTypes());
        restaurant.setOwnerId(restaurantDTO.getOwnerId());
        
        Restaurant saved = restaurantRepository.save(restaurant);
        return mapToDTO(saved);
    }
    
    @Override
    public List<RestaurantDTO> searchRestaurantsByCity(String city) {
        log.info("Searching restaurants in city: {}", city);
        return restaurantRepository.findByCity(city)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    public List<RestaurantDTO> searchRestaurantsByCuisine(String cuisine) {
        log.info("Searching restaurants by cuisine: {}", cuisine);
        return restaurantRepository.findByCuisineTypesContaining(cuisine)
                .stream()
                .map(this::mapToDTO)
                .collect(Collectors.toList());
    }
    
    @Override
    @Transactional
    public MenuItemDTO addMenuItem(Long restaurantId, MenuItemDTO menuItemDTO) {
        log.info("Adding menu item to restaurant: {}", restaurantId);
        
        Restaurant restaurant = restaurantRepository.findById(restaurantId)
                .orElseThrow(() -> new RuntimeException("Restaurant not found"));
        
        MenuItem menuItem = new MenuItem();
        menuItem.setName(menuItemDTO.getName());
        menuItem.setDescription(menuItemDTO.getDescription());
        menuItem.setPrice(menuItemDTO.getPrice());
        menuItem.setCategory(menuItemDTO.getCategory());
        menuItem.setIsVegetarian(menuItemDTO.getIsVegetarian());
        menuItem.setRestaurant(restaurant);
        
        MenuItem saved = menuItemRepository.save(menuItem);
        return mapToMenuItemDTO(saved);
    }
    
    @Override
    public List<MenuItemDTO> getMenuByRestaurantId(Long restaurantId) {
        log.info("Fetching menu for restaurant: {}", restaurantId);
        return menuItemRepository.findByRestaurantId(restaurantId)
                .stream()
                .map(this::mapToMenuItemDTO)
                .collect(Collectors.toList());
    }
    
    private RestaurantDTO mapToDTO(Restaurant restaurant) {
        RestaurantDTO dto = new RestaurantDTO();
        dto.setId(restaurant.getId());
        dto.setName(restaurant.getName());
        dto.setDescription(restaurant.getDescription());
        dto.setAddress(restaurant.getAddress());
        dto.setCity(restaurant.getCity());
        dto.setRating(restaurant.getRating());
        dto.setCuisineTypes(restaurant.getCuisineTypes());
        return dto;
    }
    
    private MenuItemDTO mapToMenuItemDTO(MenuItem item) {
        MenuItemDTO dto = new MenuItemDTO();
        dto.setId(item.getId());
        dto.setName(item.getName());
        dto.setDescription(item.getDescription());
        dto.setPrice(item.getPrice());
        dto.setCategory(item.getCategory());
        dto.setIsVegetarian(item.getIsVegetarian());
        return dto;
    }
}
```

----------

### Service 3: Order Service

**Responsibilities:**

-   Order creation and management
-   Order status tracking
-   Integration with Restaurant, User, and Payment services
-   Event publishing for order lifecycle

#### Order.java (Entity)

java

```java
package com.fooddelivery.order.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private Long userId;
    
    @Column(nullable = false)
    private Long restaurantId;
    
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "order")
    private List<OrderItem> items;
    
    private Double totalAmount;
    
    private Double deliveryCharge = 50.0;
    
    private Double taxAmount;
    
    private Double finalAmount;
    
    @Enumerated(EnumType.STRING)
    private OrderStatus status = OrderStatus.PENDING;
    
    private String deliveryAddress;
    
    private String deliveryInstructions;
    
    private Long deliveryPartnerId;
    
    private LocalDateTime orderTime = LocalDateTime.now();
    
    private LocalDateTime deliveryTime;
    
    private String paymentId;
    
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus = PaymentStatus.PENDING;
}

enum OrderStatus {
    PENDING,
    CONFIRMED,
    PREPARING,
    OUT_FOR_DELIVERY,
    DELIVERED,
    CANCELLED
}

enum PaymentStatus {
    PENDING,
    SUCCESS,
    FAILED,
    REFUNDED
}
```

**OrderItem.java**

java

```java
package com.fooddelivery.order.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "order_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Order order;
    
    private Long menuItemId;
    
    private String itemName;
    
    private Integer quantity;
    
    private Double price;
    
    private Double subtotal;
}
```

#### OrderServiceImpl.java

java

```java
package com.fooddelivery.order.service;

import com.fooddelivery.order.dto.*;
import com.fooddelivery.order.event.OrderEvent;
import com.fooddelivery.order.model.Order;
import com.fooddelivery.order.model.OrderItem;
import com.fooddelivery.order.model.OrderStatus;
import com.fooddelivery.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl implements OrderService {
    
    private final OrderRepository orderRepository;
    private final RestTemplate restTemplate;
    private final KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    @Override
    @Transactional
    public OrderResponseDTO createOrder(OrderRequestDTO orderRequest) {
        log.info("Creating order for user: {}", orderRequest.getUserId());
        
        // Step 1: Validate user (call User Service)
        String userServiceUrl = "http://user-service/api/users/" + orderRequest.getUserId();
        UserDTO user = restTemplate.getForObject(userServiceUrl, UserDTO.class);
        
        if (user == null) {
            throw new RuntimeException("User not found");
        }
        
        // Step 2: Validate restaurant (call Restaurant Service)
        String restaurantUrl = "http://restaurant-service/api/restaurants/" + orderRequest.getRestaurantId();
        RestaurantDTO restaurant = restTemplate.getForObject(restaurantUrl, RestaurantDTO.class);
        
        if (restaurant == null) {
            throw new RuntimeException("Restaurant not found");
        }
        
        // Step 3: Create order
        Order order = new Order();
        order.setUserId(orderRequest.getUserId());
        order.setRestaurantId(orderRequest.getRestaurantId());
        order.setDeliveryAddress(orderRequest.getDeliveryAddress());
        
        // Step 4: Add order items
        List<OrderItem> orderItems = orderRequest.getItems().stream()
                .map(itemDTO -> {
                    OrderItem item = new OrderItem();
                    item.setMenuItemId(itemDTO.getMenuItemId());
                    item.setItemName(itemDTO.getItemName());
                    item.setQuantity(itemDTO.getQuantity());
                    item.setPrice(itemDTO.getPrice());
                    item.setSubtotal(itemDTO.getPrice() * itemDTO.getQuantity());
                    item.setOrder(order);
                    return item;
                })
                .collect(Collectors.toList());
        
        order.setItems(orderItems);
        
        // Step 5: Calculate amounts
        double totalAmount = orderItems.stream()
                .mapToDouble(OrderItem::getSubtotal)
                .sum();
        double taxAmount = totalAmount * 0.05; // 5% tax
        double finalAmount = totalAmount + order.getDeliveryCharge() + taxAmount;
        
        order.setTotalAmount(totalAmount);
        order.setTaxAmount(taxAmount);
        order.setFinalAmount(finalAmount);
        order.setStatus(OrderStatus.PENDING);
        
        Order savedOrder = orderRepository.save(order);
        log.info("Order created with ID: {}", savedOrder.getId());
        
        // Step 6: Publish order created event
        publishOrderEvent(savedOrder, "ORDER_CREATED");
        
        return mapToResponseDTO(savedOrder);
    }
    
    @Override
    @Transactional
    public OrderResponseDTO updateOrderStatus(Long orderId, OrderStatus status) {
        log.info("Updating order {} to status: {}", orderId, status);
        
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        
        order.setStatus(status);
        
        if (status == OrderStatus.DELIVERED) {
            order.setDeliveryTime(LocalDateTime.now());
        }
        
        Order updated = orderRepository.save(order);
        
        // Publish status update event
        publishOrderEvent(updated, "ORDER_STATUS_UPDATED");
        
        return mapToResponseDTO(updated);
    }
    
    @Override
    public OrderResponseDTO getOrderById(Long orderId) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new RuntimeException("Order not found"));
        return mapToResponseDTO(order);
    }
    
    @Override
    public List<OrderResponseDTO> getOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId)
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }
    
    private void publishOrderEvent(Order order, String eventType) {
        OrderEvent event = new OrderEvent();
        event.setOrderId(order.getId());
        event.setUserId(order.getUserId());
        event.setRestaurantId(order.getRestaurantId());
        event.setStatus(order.getStatus().toString());
        event.setEventType(eventType);
        event.setTimestamp(LocalDateTime.now());
        
        kafkaTemplate.send("order-events", event);
        log.info("Published event: {} for order: {}", eventType, order.getId());
    }
    
    private OrderResponseDTO mapToResponseDTO(Order order) {
        OrderResponseDTO dto = new OrderResponseDTO();
        dto.setId(order.getId());
        dto.setUserId(order.getUserId());
        dto.setRestaurantId(order.getRestaurantId());
        dto.setStatus(order.getStatus());
        dto.setTotalAmount(order.getTotalAmount());
        dto.setFinalAmount(order.getFinalAmount());
        dto.setOrderTime(order.getOrderTime());
        return dto;
    }
}
```

----------

### Service 4: Payment Service

**Responsibilities:**

-   Process payments
-   Handle payment callbacks
-   Refund processing
-   Payment status tracking

#### Payment.java (Entity)

java

```java
package com.fooddelivery.payment.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Entity
@Table(name = "payments")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Payment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    private String transactionId;
    
    @Column(nullable = false)
    private Long orderId;
    
    @Column(nullable = false)
    private Long userId;
    
    @Column(nullable = false)
    private Double amount;
    
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;
    
    @Enumerated(EnumType.STRING)
    private PaymentStatus status = PaymentStatus.PENDING;
    
    private String gatewayResponse;
    
    private LocalDateTime createdAt = LocalDateTime.now();
    
    private LocalDateTime completedAt;
}

enum PaymentMethod {
    CREDIT_CARD,
    DEBIT_CARD,
    UPI,
    NET_BANKING,
    WALLET,
    CASH_ON_DELIVERY
}

enum PaymentStatus {
    PENDING,
    SUCCESS,
    FAILED,
    REFUNDED
}
```

#### PaymentServiceImpl.java

java

```java
package com.fooddelivery.payment.service;

import com.fooddelivery.payment.dto.PaymentRequestDTO;
import com.fooddelivery.payment.dto.PaymentResponseDTO;
import com.fooddelivery.payment.event.PaymentEvent;
import com.fooddelivery.payment.model.Payment;
import com.fooddelivery.payment.model.PaymentStatus;
import com.fooddelivery.payment.repository.PaymentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class PaymentServiceImpl implements PaymentService {
    
    private final PaymentRepository paymentRepository;
    private final KafkaTemplate<String, PaymentEvent> kafkaTemplate;
    
    @Override
    @Transactional
    public PaymentResponseDTO processPayment(PaymentRequestDTO paymentRequest) {
        log.info("Processing payment for order: {}", paymentRequest.getOrderId());
        
        // Create payment record
        Payment payment = new Payment();
        payment.setTransactionId(generateTransactionId());
        payment.setOrderId(paymentRequest.getOrderId());
        payment.setUserId(paymentRequest.getUserId());
        payment.setAmount(paymentRequest.getAmount());
        payment.setPaymentMethod(paymentRequest.getPaymentMethod());
        payment.setStatus(PaymentStatus.PENDING);
        
        Payment saved = paymentRepository.save(payment);
        
        // Simulate payment gateway call
        boolean paymentSuccess = processWithGateway(paymentRequest);
        
        if (paymentSuccess) {
            saved.setStatus(PaymentStatus.SUCCESS);
            saved.setCompletedAt(LocalDateTime.now());
            saved.setGatewayResponse("Payment successful");
            log.info("Payment successful for order: {}", paymentRequest.getOrderId());
        } else {
            saved.setStatus(PaymentStatus.FAILED);
            saved.setGatewayResponse("Payment failed");
            log.error("Payment failed for order: {}", paymentRequest.getOrderId());
        }
        
        Payment updated = paymentRepository.save(saved);
        
        // Publish payment event
        publishPaymentEvent(updated);
        
        return mapToResponseDTO(updated);
    }
    
    @Override
    public PaymentResponseDTO getPaymentByOrderId(Long orderId) {
        Payment payment = paymentRepository.findByOrderId(orderId)
                .orElseThrow(() -> new RuntimeException("Payment not found for order: " + orderId));
        return mapToResponseDTO(payment);
    }
    
    @Override
    @Transactional
    public PaymentResponseDTO refundPayment(Long paymentId) {
        log.info("Processing refund for payment: {}", paymentId);
        
        Payment payment = paymentRepository.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
        
        if (payment.getStatus() != PaymentStatus.SUCCESS) {
            throw new RuntimeException("Cannot refund non-successful payment");
        }
        
        // Simulate refund gateway call
        payment.setStatus(PaymentStatus.REFUNDED);
        payment.setGatewayResponse("Refund processed");
        
        Payment updated = paymentRepository.save(payment);
        
        // Publish refund event
        publishPaymentEvent(updated);
        
        return mapToResponseDTO(updated);
    }
    
    private boolean processWithGateway(PaymentRequestDTO request) {
        // Simulate payment gateway processing
        // In real scenario, integrate with Razorpay, Stripe, etc.
        try {
            Thread.sleep(2000); // Simulate network delay
            return Math.random() > 0.1; // 90% success rate
        } catch (InterruptedException e) {
            return false;
        }
    }
    
    private String generateTransactionId() {
        return "TXN_" + UUID.randomUUID().toString().replace("-", "").substring(0, 16).toUpperCase();
    }
    
    private void publishPaymentEvent(Payment payment) {
        PaymentEvent event = new PaymentEvent();
        event.setPaymentId(payment.getId());
        event.setTransactionId(payment.getTransactionId());
        event.setOrderId(payment.getOrderId());
        event.setUserId(payment.getUserId());
        event.setAmount(payment.getAmount());
        event.setStatus(payment.getStatus().toString());
        event.setTimestamp(LocalDateTime.now());
        
        kafkaTemplate.send("payment-events", event);
        log.info("Published payment event for order: {}", payment.getOrderId());
    }
    
    private PaymentResponseDTO mapToResponseDTO(Payment payment) {
        PaymentResponseDTO dto = new PaymentResponseDTO();
        dto.setId(payment.getId());
        dto.setTransactionId(payment.getTransactionId());
        dto.setOrderId(payment.getOrderId());
        dto.setAmount(payment.getAmount());
        dto.setStatus(payment.getStatus());
        dto.setPaymentMethod(payment.getPaymentMethod());
        dto.setCreatedAt(payment.getCreatedAt());
        return dto;
    }
}
```

----------

### Service 5: Notification Service

**Responsibilities:**

-   Listen to events from other services
-   Send email notifications
-   Send SMS notifications
-   Send push notifications

#### NotificationServiceImpl.java

java

```java
package com.fooddelivery.notification.service;

import com.fooddelivery.notification.event.OrderEvent;
import com.fooddelivery.notification.event.PaymentEvent;
import com.fooddelivery.notification.model.Notification;
import com.fooddelivery.notification.model.NotificationType;
import com.fooddelivery.notification.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
@Slf4j
public class NotificationServiceImpl implements NotificationService {
    
    private final NotificationRepository notificationRepository;
    private final JavaMailSender mailSender;
    
    @KafkaListener(topics = "order-events", groupId = "notification-group")
    public void handleOrderEvent(OrderEvent event) {
        log.info("Received order event: {} for order: {}", event.getEventType(), event.getOrderId());
        
        String message = buildOrderMessage(event);
        sendNotification(event.getUserId(), "Order Update", message, NotificationType.EMAIL);
        
        // Also send SMS
        sendSMS(event.getUserId(), message);
    }
    
    @KafkaListener(topics = "payment-events", groupId = "notification-group")
    public void handlePaymentEvent(PaymentEvent event) {
        log.info("Received payment event for order: {}", event.getOrderId());
        
        String message = buildPaymentMessage(event);
        sendNotification(event.getUserId(), "Payment Update", message, NotificationType.EMAIL);
    }
    
    @Override
    public void sendNotification(Long userId, String subject, String message, NotificationType type) {
        // Save notification to database
        Notification notification = new Notification();
        notification.setUserId(userId);
        notification.setSubject(subject);
        notification.setMessage(message);
        notification.setType(type);
        notification.setSent(false);
        notification.setCreatedAt(LocalDateTime.now());
        
        notificationRepository.save(notification);
        
        // Send actual notification
        if (type == NotificationType.EMAIL) {
            sendEmail(userId, subject, message);
        }
        
        notification.setSent(true);
        notification.setSentAt(LocalDateTime.now());
        notificationRepository.save(notification);
    }
    
    private void sendEmail(Long userId, String subject, String message) {
        try {
            // In real scenario, fetch user email from User Service
            String toEmail = "user" + userId + "@example.com";
            
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(toEmail);
            mailMessage.setSubject(subject);
            mailMessage.setText(message);
            mailMessage.setFrom("noreply@fooddelivery.com");
            
            mailSender.send(mailMessage);
            log.info("Email sent to user: {}", userId);
        } catch (Exception e) {
            log.error("Failed to send email: {}", e.getMessage());
        }
    }
    
    private void sendSMS(Long userId, String message) {
        // Integrate with SMS gateway like Twilio
        log.info("SMS sent to user {}: {}", userId, message);
    }
    
    private String buildOrderMessage(OrderEvent event) {
        return switch (event.getEventType()) {
            case "ORDER_CREATED" -> 
                "Your order #" + event.getOrderId() + " has been placed successfully!";
            case "ORDER_STATUS_UPDATED" -> 
                "Your order #" + event.getOrderId() + " status: " + event.getStatus();
            default -> "Order update for #" + event.getOrderId();
        };
    }
    
    private String buildPaymentMessage(PaymentEvent event) {
        if ("SUCCESS".equals(event.getStatus())) {
            return "Payment of ₹" + event.getAmount() + " successful for order #" + event.getOrderId();
        } else {
            return "Payment failed for order #" + event.getOrderId() + ". Please retry.";
        }
    }
}
```

----------

## 5. Service Communication 

### REST APIs (Synchronous Communication)

**Using RestTemplate with Load Balancing**

java

```java
package com.fooddelivery.order.config;

import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class RestTemplateConfig {
    
    @Bean
    @LoadBalanced  // Enables client-side load balancing
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
```

**Example Usage in Service:**

java

```java
// Service name from Eureka (not hardcoded IP/port)
String url = "http://user-service/api/users/" + userId;
UserDTO user = restTemplate.getForObject(url, UserDTO.class);
```

**Memory Analogy**: REST calls are like  **phone calls**. You call, wait for response, then proceed. If the other person doesn't answer, you're stuck waiting.

### Kafka Messaging (Asynchronous Communication)

**Kafka Configuration:**

java

```java
package com.fooddelivery.order.config;

import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class KafkaProducerConfig {
    
    @Bean
    public ProducerFactory<String, Object> producerFactory() {
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return new DefaultKafkaProducerFactory<>(config);
    }
    
    @Bean
    public KafkaTemplate<String, Object> kafkaTemplate() {
        return new KafkaTemplate<>(producerFactory());
    }
}
```

**Producer Example:**

java

```java
// Publishing event
OrderEvent event = new OrderEvent();
event.setOrderId(orderId);
event.setStatus("CONFIRMED");
kafkaTemplate.send("order-events", event);
```

**Consumer Example:**

java

```java
@KafkaListener(topics = "order-events", groupId = "notification-group")
public void consumeOrderEvent(OrderEvent event) {
    log.info("Received event: {}", event);
    // Process event
}
```

**Memory Analogy**: Kafka is like  **leaving a message on a bulletin board**. You post it and move on. Others read it when they're ready. You don't wait.

----------

## 6. Infrastructure Components 

### API Gateway (Spring Cloud Gateway)

**Why API Gateway?**

-   Single entry point for clients
-   Routing to microservices
-   Authentication & Authorization
-   Rate limiting
-   Request/Response transformation

**Setup:**

**pom.xml:**

xml

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```

**application.yml:**

yaml

```yaml
spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/api/users/**
          filters:
            - RewritePath=/api/users/(?<segment>.*), /${segment}
        
        - id: restaurant-service
          uri: lb://restaurant-service
          predicates:
            - Path=/api/restaurants/**
        
        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/api/orders/**
        
        - id: payment-service
          uri: lb://payment-service
          predicates:
            - Path=/api/payments/**

server:
  port: 8080

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

**Custom Filter (Add Request Header):**

java

```java
package com.fooddelivery.gateway.filter;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class CustomGatewayFilter implements GlobalFilter, Ordered {
    
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        // Add custom header to request
        exchange.getRequest()
                .mutate()
                .header("X-Gateway-Request-Time", String.valueOf(System.currentTimeMillis()))
                .build();
        
        // Log request
        System.out.println("Request Path: " + exchange.getRequest().getPath());
        
        return chain.filter(exchange);
    }
    
    @Override
    public int getOrder() {
        return -1; // High priority
    }
}
```

**Authentication Filter:**

java

```java
package com.fooddelivery.gateway.filter;

import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {
    
    public AuthenticationFilter() {
        super(Config.class);
    }
    
    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String authHeader = exchange.getRequest().getHeaders().getFirst("Authorization");
            
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                return onError(exchange, "Missing or invalid authorization header", HttpStatus.UNAUTHORIZED);
            }
            
            String token = authHeader.substring(7);
            
            // Validate JWT token (simplified)
            if (!isValidToken(token)) {
                return onError(exchange, "Invalid token", HttpStatus.UNAUTHORIZED);
            }
            
            return chain.filter(exchange);
        };
    }
    
    private boolean isValidToken(String token) {
        // Implement JWT validation logic
        return token != null && !token.isEmpty();
    }
    
    private Mono<Void> onError(ServerWebExchange exchange, String message, HttpStatus status) {
        exchange.getResponse().setStatusCode(status);
        return exchange.getResponse().setComplete();
    }
    
    public static class Config {
        // Configuration properties
    }
}
```

----------

### Service Discovery (Eureka Server)

**Why Service Discovery?**

-   Dynamic service registration
-   Service health monitoring
-   Load balancing
-   No hardcoded IPs/ports

**Eureka Server Setup:**

**pom.xml:**

xml

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>
```

**EurekaServerApplication.java:**

java

```java
package com.fooddelivery.eureka;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```

**application.yml (Eureka Server):**

yaml

```yaml
spring:
  application:
    name: eureka-server

server:
  port: 8761

eureka:
  client:
    register-with-eureka: false  # Don't register itself
    fetch-registry: false
  server:
    enable-self-preservation: false  # For development
```

**Registering Services with Eureka:**

Every microservice needs:

yaml

```yaml
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
  instance:
    prefer-ip-address: true
    instance-id: ${spring.application.name}:${random.value}
```

**Analogy**: Eureka is like a  **phone directory**. Services register themselves when they start (like getting a phone number). When Service A wants to call Service B, it looks up Eureka to find where Service B lives.

----------

### Centralized Configuration (Spring Cloud Config Server)

**Why Config Server?**

-   Centralized configuration management
-   Environment-specific configs (dev, test, prod)
-   Change configs without redeploying
-   Git-backed versioning

**Config Server Setup:**

**pom.xml:**

xml

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-config-server</artifactId>
</dependency>
```

**ConfigServerApplication.java:**

java

```java
package com.fooddelivery.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}
```

**application.yml (Config Server):**

yaml

```yaml
spring:
  application:
    name: config-server
  cloud:
    config:
      server:
        git:
          uri: https://github.com/yourusername/config-repo
          clone-on-start: true
          default-label: main

server:
  port: 8888
```

**Git Repository Structure:**

```
config-repo/
├── user-service.yml
├── user-service-dev.yml
├── user-service-prod.yml
├── order-service.yml
├── order-service-dev.yml
└── order-service-prod.yml
```

**Example: user-service.yml in Git:**

yaml

```yaml
server:
  port: 8081

spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/user_db
    username: postgres
    password: ${DB_PASSWORD}

app:
  jwt:
    secret: mySecretKey
    expiration: 86400000
```

**Client Configuration (bootstrap.yml):**

yaml

```yaml
spring:
  application:
    name: user-service
  cloud:
    config:
      uri: http://localhost:8888
      fail-fast: true
  profiles:
    active: dev
```

**Refreshing Configuration without Restart:**

Add dependency:

xml

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

Enable refresh endpoint:

yaml

```yaml
management:
  endpoints:
    web:
      exposure:
        include: refresh
```

Use  `@RefreshScope`  annotation:

java

```java
@RestController
@RefreshScope
public class ConfigController {
    
    @Value("${app.message:default}")
    private String message;
    
    @GetMapping("/message")
    public String getMessage() {
        return message;
    }
}
```

Refresh:  `POST http://localhost:8081/actuator/refresh`

**Analogy**: Config Server is like a  **company policy manual**  stored centrally. All departments (services) refer to it. When policies change, everyone gets the update without reprinting individual manuals.

----------

## 7. Database Strategy 

### Database per Service Pattern

**Why Database per Service?**

-   Service independence
-   Technology flexibility (PostgreSQL, MongoDB, MySQL)
-   Isolated failures
-   Independent scaling

**Our Setup:**

```
User Service      → PostgreSQL (user_db)
Restaurant Service → PostgreSQL (restaurant_db)
Order Service     → PostgreSQL (order_db)
Payment Service   → PostgreSQL (payment_db)
Notification Service → MongoDB (notification_db)
```

**Challenges:**

#### 1. Data Duplication

**Problem**: User data needed in multiple services

**Solution**: Store only necessary references

java

```java
// In Order Service - Don't store full user object
@Entity
public class Order {
    private Long userId;  // Reference only
    // Fetch full details via REST when needed
}
```

#### 2. Distributed Transactions (ACID across services)

**Problem**: Order placement requires:

-   Create order (Order Service)
-   Process payment (Payment Service)
-   Update inventory (Restaurant Service)

What if payment succeeds but order creation fails?

**Solution: SAGA Pattern**

### SAGA Pattern Implementation

**Two types:**

1.  **Choreography-based**  (Event-driven)
2.  **Orchestration-based**  (Centralized coordinator)

#### Choreography-based SAGA (Using Events)

```
1. Order Service creates order → Publishes "OrderCreated" event
2. Payment Service listens → Processes payment → Publishes "PaymentSuccess" event
3. Order Service listens → Updates order status → Publishes "OrderConfirmed" event
4. Notification Service listens → Sends confirmation

If Payment Fails:
→ Payment Service publishes "PaymentFailed" event
→ Order Service listens → Cancels order → Publishes "OrderCancelled" event
→ Notification Service sends failure notification
```

**Implementation:**

**OrderService - Creating Order:**

java

```java
@Transactional
public OrderResponseDTO createOrder(OrderRequestDTO request) {
    // Step 1: Create order in PENDING state
    Order order = new Order();
    order.setStatus(OrderStatus.PENDING);
    order.setUserId(request.getUserId());
    order.setFinalAmount(request.getTotalAmount());
    
    Order saved = orderRepository.save(order);
    
    // Step 2: Publish event
    OrderCreatedEvent event = new OrderCreatedEvent(
        saved.getId(), 
        saved.getUserId(), 
        saved.getFinalAmount()
    );
    kafkaTemplate.send("order-created-topic", event);
    
    return mapToDTO(saved);
}
```

**PaymentService - Listening and Processing:**

java

```java
@KafkaListener(topics = "order-created-topic")
public void handleOrderCreated(OrderCreatedEvent event) {
    log.info("Processing payment for order: {}", event.getOrderId());
    
    try {
        // Process payment
        Payment payment = processPayment(event);
        
        if (payment.getStatus() == PaymentStatus.SUCCESS) {
            // Publish success event
            PaymentSuccessEvent successEvent = new PaymentSuccessEvent(
                event.getOrderId(),
                payment.getTransactionId()
            );
            kafkaTemplate.send("payment-success-topic", successEvent);
        } else {
            // Publish failure event
            PaymentFailedEvent failedEvent = new PaymentFailedEvent(
                event.getOrderId(),
                "Payment declined"
            );
            kafkaTemplate.send("payment-failed-topic", failedEvent);
        }
    } catch (Exception e) {
        // Publish failure event
        PaymentFailedEvent failedEvent = new PaymentFailedEvent(
            event.getOrderId(),
            e.getMessage()
        );
        kafkaTemplate.send("payment-failed-topic", failedEvent);
    }
}
```

**OrderService - Handling Payment Result:**

java

```java
@KafkaListener(topics = "payment-success-topic")
@Transactional
public void handlePaymentSuccess(PaymentSuccessEvent event) {
    Order order = orderRepository.findById(event.getOrderId())
            .orElseThrow();
    
    order.setStatus(OrderStatus.CONFIRMED);
    order.setPaymentId(event.getTransactionId());
    orderRepository.save(order);
    
    // Publish order confirmed
    OrderConfirmedEvent confirmedEvent = new OrderConfirmedEvent(order.getId());
    kafkaTemplate.send("order-confirmed-topic", confirmedEvent);
}

@KafkaListener(topics = "payment-failed-topic")
@Transactional
public void handlePaymentFailed(PaymentFailedEvent event) {
    Order order = orderRepository.findById(event.getOrderId())
            .orElseThrow();
    
    order.setStatus(OrderStatus.CANCELLED);
    order.setCancellationReason(event.getReason());
    orderRepository.save(order);
    
    // Publish cancellation event
    OrderCancelledEvent cancelEvent = new OrderCancelledEvent(order.getId());
    kafkaTemplate.send("order-cancelled-topic", cancelEvent);
}
```

**Saga Flow Diagram:**

```
Success Flow:
OrderService → [OrderCreated] → PaymentService → [PaymentSuccess] 
→ OrderService → [OrderConfirmed] → NotificationService

Failure Flow:
OrderService → [OrderCreated] → PaymentService → [PaymentFailed] 
→ OrderService → [OrderCancelled] → NotificationService
```

**Analogy**: SAGA is like  **ordering food at a restaurant with payment at delivery**:

1.  You place order (OrderCreated)
2.  Restaurant prepares food (if they can't, they cancel)
3.  Delivery person comes to your door with food
4.  You pay (PaymentSuccess/Failed)
5.  If payment succeeds → enjoy food (OrderConfirmed)
6.  If payment fails → food goes back (OrderCancelled, potential refund)

----------

### Orchestration-based SAGA

**Alternative approach**: Central orchestrator manages the flow

java

```java
@Service
public class OrderSagaOrchestrator {
    
    @Transactional
    public void executeOrderSaga(OrderRequestDTO request) {
        Order order = null;
        Payment payment = null;
        
        try {
            // Step 1: Create order
            order = createOrder(request);
            
            // Step 2: Process payment
            payment = processPayment(order);
            
            // Step 3: Confirm order
            confirmOrder(order.getId());
            
            // Step 4: Send notification
            sendNotification(order);
            
        } catch (Exception e) {
            // Compensating transactions
            if (payment != null && payment.getStatus() == PaymentStatus.SUCCESS) {
                refundPayment(payment.getId());
            }
            if (order != null) {
                cancelOrder(order.getId());
            }
            throw new SagaExecutionException("Order saga failed", e);
        }
    }
}
```

----------

## 8. Testing

### Testing Strategy Pyramid

```
        ┌─────────────┐
        │   E2E Tests │ ← Few (Slow, Brittle)
        └─────────────┘
      ┌─────────────────┐
      │Contract Tests   │ ← Some
      └─────────────────┘
    ┌───────────────────────┐
    │ Integration Tests     │ ← More
    └───────────────────────┘
  ┌─────────────────────────────┐
  │      Unit Tests             │ ← Many (Fast, Focused)
  └─────────────────────────────┘
```

### 1. Unit Tests

**Testing Service Layer:**

java

```java
@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    
    @Mock
    private UserRepository userRepository;
    
    @Mock
    private PasswordEncoder passwordEncoder;
    
    @InjectMocks
    private UserServiceImpl userService;
    
    @Test
    void testRegisterUser_Success() {
        // Arrange
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setEmail("test@example.com");
        dto.setPassword("password");
        dto.setFirstName("John");
        
        User savedUser = new User();
        savedUser.setId(1L);
        savedUser.setEmail(dto.getEmail());
        
        when(userRepository.existsByEmail(anyString())).thenReturn(false);
        when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");
        when(userRepository.save(any(User.class))).thenReturn(savedUser);
        
        // Act
        UserResponseDTO result = userService.registerUser(dto);
        
        // Assert
        assertNotNull(result);
        assertEquals(1L, result.getId());
        assertEquals("test@example.com", result.getEmail());
        
        verify(userRepository).save(any(User.class));
    }
    
    @Test
    void testRegisterUser_EmailExists_ThrowsException() {
        // Arrange
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setEmail("existing@example.com");
        
        when(userRepository.existsByEmail(anyString())).thenReturn(true);
        
        // Act & Assert
        assertThrows(RuntimeException.class, () -> userService.registerUser(dto));
        verify(userRepository, never()).save(any());
    }
}
```

### 2. Integration Tests

**Testing with TestContainers (Real Database):**

java

```java
@SpringBootTest
@Testcontainers
class UserServiceIntegrationTest {
    
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
            .withDatabaseName("test_db")
            .withUsername("test")
            .withPassword("test");
    
    @Autowired
    private UserService userService;
    
    @Autowired
    private UserRepository userRepository;
    
    @DynamicPropertySource
    static void registerProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }
    
    @Test
    void testCreateAndRetrieveUser() {
        // Create user
        UserRegistrationDTO dto = new UserRegistrationDTO();
        dto.setEmail("integration@test.com");
        dto.setPassword("password");
        dto.setFirstName("Integration");
        dto.setLastName("Test");
        dto.setPhoneNumber("1234567890");
        
        UserResponseDTO created = userService.registerUser(dto);
        
        // Retrieve user
        UserResponseDTO retrieved = userService.getUserById(created.getId());
        
        // Assert
        assertEquals(created.getId(), retrieved.getId());
        assertEquals("integration@test.com", retrieved.getEmail());
    }
}
```

### 3. Controller Tests (MockMvc)

java

```java
@WebMvcTest(UserController.class)
class UserControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private UserService userService;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @Test
    void testRegisterUser() throws Exception {
        // Arrange
        UserRegistrationDTO request = new UserRegistrationDTO();
        request.setEmail("test@example.com");
        request.setPassword("password");
        request.setFirstName("John");
        
        UserResponseDTO response = new UserResponseDTO();
        response.setId(1L);
        response.setEmail(request.getEmail());
        
        when(userService.registerUser(any())).thenReturn(response);
        
        // Act & Assert
        mockMvc.perform(post("/api/users/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.email").value("test@example.com"));
    }
}
```

### 4. Contract Testing (Pact)

**Consumer Side (Order Service):**

java

```java
@ExtendWith(PactConsumerTestExt.class)
@PactTestFor(providerName = "user-service", port = "8081")
class OrderServiceContractTest {
    
    @Pact(consumer = "order-service")
    public RequestResponsePact createUserPact(PactDslWithProvider builder) {
        return builder
                .given("user exists")
                .uponReceiving("a request for user details")
                .path("/api/users/1")
                .method("GET")
                .willRespondWith()
                .status(200)
                .body(new PactDslJsonBody()
                        .integerType("id", 1)
                        .stringType("email", "user@example.com")
                        .stringType("firstName", "John"))
                .toPact();
    }
    
    @Test
    @PactTestFor(pactMethod = "createUserPact")
    void testGetUser() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8081/api/users/1";
        
        UserDTO user = restTemplate.getForObject(url, UserDTO.class);
        
        assertNotNull(user);
        assertEquals(1L, user.getId());
    }
}
```

### 5. Embedded Services for Testing

**Embedded Kafka:**

java

```java
@SpringBootTest
@EmbeddedKafka(partitions = 1, topics = {"order-events"})
class OrderEventPublisherTest {
    
    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;
    
    @Autowired
    private EmbeddedKafkaBroker embeddedKafka;
    
    @Test
    void testPublishOrderEvent() throws Exception {
        OrderEvent event = new OrderEvent();
        event.setOrderId(1L);
        event.setStatus("CREATED");
        
        kafkaTemplate.send("order-events", event).get();
        
        // Verify event was published
        // Add consumer to verify
    }
}
```

----------

## 9. Resilience and Observability 

### Circuit Breaker (Resilience4j)

**Why Circuit Breaker?**

-   Prevent cascading failures
-   Fast failure (don't wait for timeout)
-   Automatic recovery

**Dependency:**

xml

```xml
<dependency>
    <groupId>io.github.resilience4j</groupId>
    <artifactId>resilience4j-spring-boot3</artifactId>
</dependency>
```

**Configuration:
**Configuration:**

yaml

```yaml
resilience4j:
  circuitbreaker:
    instances:
      userService:
        register-health-indicator: true
        sliding-window-size: 10
        minimum-number-of-calls: 5
        permitted-number-of-calls-in-half-open-state: 3
        automatic-transition-from-open-to-half-open-enabled: true
        wait-duration-in-open-state: 10s
        failure-rate-threshold: 50
        slow-call-rate-threshold: 100
        slow-call-duration-threshold: 5s
  
  retry:
    instances:
      userService:
        max-attempts: 3
        wait-duration: 1s
  
  ratelimiter:
    instances:
      userService:
        limit-for-period: 10
        limit-refresh-period: 1s
        timeout-duration: 0
```

**Usage in Service:**

java

```java
@Service
@RequiredArgsConstructor
@Slf4j
public class OrderServiceImpl {
    
    private final RestTemplate restTemplate;
    
    @CircuitBreaker(name = "userService", fallbackMethod = "getUserFallback")
    @Retry(name = "userService")
    @RateLimiter(name = "userService")
    public UserDTO getUserById(Long userId) {
        log.info("Calling User Service for user: {}", userId);
        String url = "http://user-service/api/users/" + userId;
        return restTemplate.getForObject(url, UserDTO.class);
    }
    
    // Fallback method - must have same signature + Throwable parameter
    public UserDTO getUserFallback(Long userId, Throwable throwable) {
        log.error("User Service unavailable, using fallback for user: {}", userId, throwable);
        
        // Return cached data or default response
        UserDTO fallbackUser = new UserDTO();
        fallbackUser.setId(userId);
        fallbackUser.setFirstName("Unknown");
        fallbackUser.setEmail("unavailable@example.com");
        return fallbackUser;
    }
}
```

**Circuit Breaker States:**

```
CLOSED (Normal) → Requests pass through
    ↓ (Failure threshold exceeded)
OPEN (Failing) → Requests fail immediately with fallback
    ↓ (After wait duration)
HALF_OPEN (Testing) → Limited requests pass through
    ↓ (Success) → CLOSED
    ↓ (Failure) → OPEN
```

**Analogy**: Circuit breaker is like a  **fuse in your home**. When there's too much electrical load (failures), the fuse trips (circuit opens) to prevent fire (cascading failures). After some time, you can try resetting it (half-open state).

----------

### Distributed Tracing (Sleuth + Zipkin)

**Why Tracing?**

-   Track requests across multiple services
-   Identify bottlenecks
-   Debug production issues

**Dependencies:**

xml

```xml
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-sleuth</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-sleuth-zipkin</artifactId>
</dependency>
```

**Configuration:**

yaml

```yaml
spring:
  sleuth:
    sampler:
      probability: 1.0  # Sample 100% of requests
  zipkin:
    base-url: http://localhost:9411
```

**Starting Zipkin:**

bash

```bash
docker run -d -p 9411:9411 openzipkin/zipkin
```

**How it works:**

```
User Request → API Gateway [TraceId: abc123]
  ↓
Order Service [TraceId: abc123, SpanId: span1]
  ↓
User Service [TraceId: abc123, SpanId: span2]
  ↓
Payment Service [TraceId: abc123, SpanId: span3]
```

All logs will have the same TraceId, making it easy to track the entire request flow!

**Sample Log Output:**

```
2025-01-15 INFO [order-service,abc123,span1] Creating order for user 1
2025-01-15 INFO [user-service,abc123,span2] Fetching user 1
2025-01-15 INFO [payment-service,abc123,span3] Processing payment
```

----------

### Metrics and Monitoring (Micrometer + Prometheus + Grafana)

**Architecture:**

```
Microservices → Micrometer → Prometheus (Scrapes metrics) → Grafana (Visualizes)
```

**Dependencies:**

xml

```xml
<dependency>
    <groupId>io.micrometer</groupId>
    <artifactId>micrometer-registry-prometheus</artifactId>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```

**Configuration:**

yaml

```yaml
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  metrics:
    export:
      prometheus:
        enabled: true
    distribution:
      percentiles-histogram:
        http.server.requests: true
```

**Custom Metrics:**

java

```java
@Service
@RequiredArgsConstructor
public class OrderServiceImpl {
    
    private final MeterRegistry meterRegistry;
    private final OrderRepository orderRepository;
    
    public OrderResponseDTO createOrder(OrderRequestDTO request) {
        // Increment counter
        meterRegistry.counter("orders.created", 
                "restaurant", request.getRestaurantId().toString()).increment();
        
        // Record time
        Timer.Sample sample = Timer.start(meterRegistry);
        
        try {
            Order order = processOrder(request);
            
            // Record success
            meterRegistry.counter("orders.created.success").increment();
            
            return mapToDTO(order);
        } catch (Exception e) {
            // Record failure
            meterRegistry.counter("orders.created.failure", 
                    "error", e.getClass().getSimpleName()).increment();
            throw e;
        } finally {
            sample.stop(Timer.builder("orders.creation.time")
                    .description("Time to create order")
                    .register(meterRegistry));
        }
    }
    
    @Scheduled(fixedRate = 60000) // Every minute
    public void recordOrderStats() {
        long totalOrders = orderRepository.count();
        meterRegistry.gauge("orders.total", totalOrders);
        
        long pendingOrders = orderRepository.countByStatus(OrderStatus.PENDING);
        meterRegistry.gauge("orders.pending", pendingOrders);
    }
}
```

**Prometheus Configuration (prometheus.yml):**

yaml

```yaml
scrape_configs:
  - job_name: 'user-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8081']
  
  - job_name: 'order-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8082']
  
  - job_name: 'payment-service'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['localhost:8083']
```

**Key Metrics to Monitor:**

-   Request rate (requests/second)
-   Error rate (errors/second)
-   Response time (p50, p95, p99)
-   JVM metrics (heap, GC)
-   Database connection pool
-   Circuit breaker state
-   Cache hit rate

**Grafana Dashboard Setup:**

1.  Add Prometheus as data source
2.  Import Spring Boot dashboard (ID: 4701)
3.  Create custom dashboards for business metrics

----------

### Centralized Logging (ELK Stack)

**Components:**

-   **E**lasticsearch: Stores logs
-   **L**ogstash: Processes logs
-   **K**ibana: Visualizes logs

**Alternative: EFK Stack**  (Fluentd instead of Logstash)

**Logback Configuration (logback-spring.xml):**

xml

```xml
<configuration>
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <customFields>{"service":"${spring.application.name}"}</customFields>
        </encoder>
    </appender>
    
    <appender name="LOGSTASH" class="net.logstash.logback.appender.LogstashTcpSocketAppender">
        <destination>localhost:5000</destination>
        <encoder class="net.logstash.logback.encoder.LogstashEncoder">
            <customFields>{"service":"${spring.application.name}"}</customFields>
        </encoder>
    </appender>
  ```  
