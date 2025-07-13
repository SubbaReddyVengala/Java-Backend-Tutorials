- [🧩 Microservices with Spring Boot](#---microservices-with-spring-boot)
  * [🔷 1. What Are Microservices?](#---1-what-are-microservices-)
  * [🔷 4. Essential Components in Spring Boot Microservices](#---4-essential-components-in-spring-boot-microservices)
- [🧩 Microservices with Spring Boot](#---microservices-with-spring-boot-1)
  * [🔷 1. What Are Microservices?](#---1-what-are-microservices--1)
  * [🔷 2. Key Features of Microservices](#---2-key-features-of-microservices)
  * [🔷 3. Why Spring Boot for Microservices?](#---3-why-spring-boot-for-microservices-)
  * [🔷 4. Essential Components in Spring Boot Microservices](#---4-essential-components-in-spring-boot-microservices-1)
  * [🔷 5. Inter-Service Communication](#---5-inter-service-communication)
  * [🔷 6. Best Practices](#---6-best-practices)
  * [🔷 7. Challenges in Microservices](#---7-challenges-in-microservices)
  * [🔷 8. Typical Spring Boot Microservices Project Structure](#---8-typical-spring-boot-microservices-project-structure)
  * [🔷 9. Common Spring Annotations for Microservices](#---9-common-spring-annotations-for-microservices)
  * [🔷 Difference Between Monolithic and Microservices](#---difference-between-monolithic-and-microservices)
    + [✅ Summary:](#--summary-)
  * [🔷 Spring Boot and Microservices Architecture](#---spring-boot-and-microservices-architecture)
    + [✅ What is Spring Boot?](#--what-is-spring-boot-)
    + [✅ What is Microservices Architecture?](#--what-is-microservices-architecture-)
    + [✅ Spring Boot + Microservices Architecture Overview](#--spring-boot---microservices-architecture-overview)
    + [✅ Core Components in Spring Boot Microservices Architecture](#--core-components-in-spring-boot-microservices-architecture)
    + [✅ Flow of Request in Microservices with Spring Boot](#--flow-of-request-in-microservices-with-spring-boot)
    + [✅ Benefits of Using Spring Boot for Microservices](#--benefits-of-using-spring-boot-for-microservices)
  * [🔷 API Gateway in Microservices (Spring Cloud Gateway)](#---api-gateway-in-microservices--spring-cloud-gateway-)
    + [✅ What is an API Gateway?](#--what-is-an-api-gateway-)
    + [✅ Why Use API Gateway in Microservices?](#--why-use-api-gateway-in-microservices-)
    + [✅ Spring Cloud Gateway (SCG)](#--spring-cloud-gateway--scg-)
    + [✅ Core Features of Spring Cloud Gateway](#--core-features-of-spring-cloud-gateway)
    + [✅ Sample Route Configuration (application.yml)](#--sample-route-configuration--applicationyml-)
  * [🔷 How API Gateway Works (In-Depth)](#---how-api-gateway-works--in-depth-)
    + [✅ 1. Routing](#--1-routing)
    + [✅ 2. Filtering (Pre & Post)](#--2-filtering--pre---post-)
    + [✅ 3. Centralized Authentication and Authorization](#--3-centralized-authentication-and-authorization)
    + [✅ 4. Rate Limiting](#--4-rate-limiting)
    + [✅ 5. Load Balancing with Eureka](#--5-load-balancing-with-eureka)
    + [✅ 6. Path Rewriting](#--6-path-rewriting)
    + [✅ 7. Hides Internal Microservice Details](#--7-hides-internal-microservice-details)
    + [✅ 1. **What is API Gateway?**](#--1---what-is-api-gateway---)
    + [✅ 2. **Routing Requests (Spring Cloud Gateway)**](#--2---routing-requests--spring-cloud-gateway---)
    + [✅ 3. **JWT Authentication Filter**](#--3---jwt-authentication-filter--)
    + [✅ 4. **Fallback Mechanism**](#--4---fallback-mechanism--)
    + [✅ 5. **Service Discovery (Eureka)**](#--5---service-discovery--eureka---)
    + [✅ 6. **Dummy JWT Generation (Auth Service)**](#--6---dummy-jwt-generation--auth-service---)
    + [✅ 7. **User & Order Microservices**](#--7---user---order-microservices--)
    + [✅ 8. **Final Flow (End-to-End)**](#--8---final-flow--end-to-end---)
  * [🔷 Spring Boot API Gateway with Microservices - Documentation](#---spring-boot-api-gateway-with-microservices---documentation)
    + [✅ Project Structure](#--project-structure)
    + [✅ 1. API Gateway Setup](#--1-api-gateway-setup)
    + [✅ 2. Custom JWT Filter](#--2-custom-jwt-filter)
    + [✅ 3. Fallback Handling](#--3-fallback-handling)
    + [✅ 4. Discovery Server (Eureka)](#--4-discovery-server--eureka-)
    + [✅ 5. Auth Service (Dummy JWT)](#--5-auth-service--dummy-jwt-)
    + [✅ 6. User & Order Services](#--6-user---order-services)
    + [🧠 Explanation of Key Concepts](#---explanation-of-key-concepts)
    + [✅ 1. **Add Rate Limiting (Redis-backed)**](#--1---add-rate-limiting--redis-backed---)
    + [✅ 2. **Write Real JWT Verification Logic**](#--2---write-real-jwt-verification-logic--)
    + [✅ 3. **Create Docker Compose Setup**](#--3---create-docker-compose-setup--)
    + [✅ 4. **Generate Postman Collection**](#--4---generate-postman-collection--)
  * [🚀 Spring Cloud Gateway – Core Features to Master](#---spring-cloud-gateway---core-features-to-master)
    + [✅ Suggested Learning Path](#--suggested-learning-path)
  * [🔷 Scenario-Based API Gateway Interview Questions (for 3 Yrs Experience)](#---scenario-based-api-gateway-interview-questions--for-3-yrs-experience-)
    + [✅ 1. **JWT Validation at Gateway**](#--1---jwt-validation-at-gateway--)
    + [✅ 2. **Service Is Down (Circuit Breaker + Fallback)**](#--2---service-is-down--circuit-breaker---fallback---)
    + [✅ 3. **Rate Limiting a Client**](#--3---rate-limiting-a-client--)
    + [✅ 4. **Routing Dynamically Without Hardcoding URLs**](#--4---routing-dynamically-without-hardcoding-urls--)
    + [✅ 5. **Different Response Based on Route or Version**](#--5---different-response-based-on-route-or-version--)
    + [✅ 6. **Modify or Rewrite Path in Gateway**](#--6---modify-or-rewrite-path-in-gateway--)
    + [✅ 7. **Logging All Incoming Requests**](#--7---logging-all-incoming-requests--)
    + [✅ 8. **Different Auth for Different Services**](#--8---different-auth-for-different-services--)
    + [✅ 9. **Return Custom Error When Rate Limit Exceeded**](#--9---return-custom-error-when-rate-limit-exceeded--)
    + [✅ 10. **Expose Only Gateway to External World**](#--10---expose-only-gateway-to-external-world--)
  * [🧠 Bonus Conceptual Questions](#---bonus-conceptual-questions)
- [🚀 Spring Cloud Microservices Architecture](#---spring-cloud-microservices-architecture)
  * [🧱 Architecture Overview](#---architecture-overview)
  * [✨ Features](#--features)
  * [🔐 JWT Authentication Flow](#---jwt-authentication-flow)
  * [🧪 Test with Postman](#---test-with-postman)
    + [1️⃣ Login](#1---login)
    + [2️⃣ Access user service](#2---access-user-service)
  * [🔧 Configuration Highlights](#---configuration-highlights)
    + [`application.yml` (Gateway)](#-applicationyml---gateway-)
  * [📊 Monitoring & Tracing](#---monitoring---tracing)
  * [🛠 Future Enhancements](#---future-enhancements)
  * [🧠 Spring Cloud API Gateway – Interview Questions (3 YOE)](#---spring-cloud-api-gateway---interview-questions--3-yoe-)
  * [🔷 Service Registry & Service Discovery](#---service-registry---service-discovery)
    + [✅ What Is Service Discovery?](#--what-is-service-discovery-)
    + [✅ What Is a Service Registry?](#--what-is-a-service-registry-)
    + [🏢 Real-World Analogy](#---real-world-analogy)
    + [🛠 How It Works](#---how-it-works)
    + [🔧 Technologies](#---technologies)
    + [📦 Spring Cloud + Eureka Example](#---spring-cloud---eureka-example)
      - [✅ Eureka Server (`discovery-server`)](#--eureka-server---discovery-server--)
      - [✅ Eureka Client (`user-service`, `api-gateway`)](#--eureka-client---user-service----api-gateway--)
    + [🔁 How It Works Together](#---how-it-works-together)
    + [📈 Benefits](#---benefits)
    + [🚫 Without Service Discovery](#---without-service-discovery)
  * [✅ 1. Eureka Server (Service Registry)](#--1-eureka-server--service-registry-)
    + [🔧 `pom.xml` dependencies](#----pomxml--dependencies)
    + [⚙️ application.yml](#---applicationyml)
    + [🚀 Main Class](#---main-class)
  * [✅ 2. Eureka Client (User-Service Example)](#--2-eureka-client--user-service-example-)
    + [🔧 `pom.xml` dependencies](#----pomxml--dependencies-1)
  * [🐳 Docker Compose (Optional)](#---docker-compose--optional-)
    + [📦 `docker-compose.yml`](#----docker-composeyml-)
  * [✅ Test It](#--test-it)
  * [📚 Interview & Scenario-Based Questions: Service Registry & Discovery (Eureka)](#---interview---scenario-based-questions--service-registry---discovery--eureka-)
  * [✅ Example Scenario-Based Questions with Answers](#--example-scenario-based-questions-with-answers)
  * [🔷 API Gateway Integration with Eureka Server](#---api-gateway-integration-with-eureka-server)
    + [📘 Overview](#---overview)
    + [🧩 Architecture](#---architecture)
    + [⚙️ `pom.xml` for API Gateway](#----pomxml--for-api-gateway)
    + [⚙️ `application.yml` (API Gateway)](#----applicationyml---api-gateway-)
    + [🚀 `ApiGatewayApplication.java`](#----apigatewayapplicationjava-)
    + [✅ How It Works](#--how-it-works)
  * [Makes Gateway discoverable and able to use service registry](#makes-gateway-discoverable-and-able-to-use-service-registry)
    + [📈 Benefits](#---benefits-1)
    + [🧪 Test it](#---test-it)
    + [🛠 Pro Tips](#---pro-tips)
  * [🔷 Microservices Communication](#---microservices-communication)
    + [🔁 1. Synchronous Communication](#---1-synchronous-communication)
      - [✅ Protocols](#--protocols)
      - [✅ Characteristics](#--characteristics)
      - [✅ Pros](#--pros)
      - [❌ Cons](#--cons)
    + [📬 2. Asynchronous Communication](#---2-asynchronous-communication)
      - [✅ Protocols & Tools](#--protocols---tools)
      - [✅ Characteristics](#--characteristics-1)
      - [✅ Pros](#--pros-1)
      - [❌ Cons](#--cons-1)
    + [🏁 When to Use What?](#---when-to-use-what-)
    + [⚙️ Best Practices](#---best-practices)
    + [📈 Common Tools in Spring Boot](#---common-tools-in-spring-boot)
- [🔁 Synchronous Inter-Service Communication in Spring Boot](#---synchronous-inter-service-communication-in-spring-boot)
  * [📦 1. RestTemplate](#---1-resttemplate)
    + [🔍 What is RestTemplate?](#---what-is-resttemplate-)
    + [✅ Use Case](#--use-case)
    + [🧩 Example: Calling Another Microservice](#---example--calling-another-microservice)
    + [📌 Key Points](#---key-points)
  * [📘 2. FeignClient](#---2-feignclient)
    + [🔍 What is Feign?](#---what-is-feign-)
    + [✅ Why Use Feign?](#--why-use-feign-)
    + [🧩 Example: Create Interface for User Service](#---example--create-interface-for-user-service)
    + [📌 Key Points](#---key-points-1)
  * [⚡ 3. WebClient](#--3-webclient)
    + [🔍 What is WebClient?](#---what-is-webclient-)
    + [✅ Why Use WebClient?](#--why-use-webclient-)
    + [🧩 Example: Synchronous WebClient Call](#---example--synchronous-webclient-call)
    + [📌 Key Points](#---key-points-2)
  * [📊 Comparison Table](#---comparison-table)
  * [🚀 Bonus Tips](#---bonus-tips)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

# 🧩 Microservices with Spring Boot

## 🔷 1. What Are Microservices?
Microservices is an architectural style where the application is composed of **independently deployable services**, each focusing on a **specific business capability**.

- Each service runs in its **own process**
- Has its own **database**
- Communicates via **lightweight protocols** (typically REST/HTTP or messaging like Kafka)

---

## 🔷 2. Key Features of Microservices
- **Loose coupling & high cohesion**
- **Independent deployment**
- **Technology polyglot** (different tech stacks possible per service)
- **Resilience & fault isolation**
- **Scalability** (scale services independently)

---

## 🔷 3. Why Spring Boot for Microservices?
- Rapid development with minimal configuration
- Embedded servers (Tomcat/Jetty)
- Seamless integration with Spring Cloud
- Auto-configuration & production-ready via Actuator
- Easy REST API + Database support

---

## 🔷 4. Essential Components in Spring Boot Microservices

| Component                  | Description                                                                 |
|---------------------------|-----------------------------------------------------------------------------|
| **Spring Boot App**       | Core microservice logic                                                     |
| **Spring Cloud Gateway**  | API Gateway for routing/filtering requests                                  |
| **Eureka Server**         | Service registry for discovery                                              |
| **Config Server**         | Centralized external configuration                                          |
| **Feign Client**          | Declarative REST client for inter-service communication                     |
| **Kafka / RabbitMQ**      | Asynchronous message broker                                                 |
| **Zipkin + Sleuth**       | Distributed tracing and correlation IDs                                     |
| **Resilience4j**          | Circuit breaker, retry, fallback                                            |
| **JWT + Spring Security** | Secure endpoints using tokens and roles                                     |

---

## 🔷 5. Inter-Service Communication

**Synchronous:**
- Using `RestTemplate` or `FeignClient`

**Asynchronous:**
- Using Kafka or RabbitMQ

```java
@FeignClient(name = "order-service")
public interface OrderClient {
   @GetMapping("/orders/user/{id}")
   List<Order> getOrdersByUser(@PathVariable Long id);
}

```
## 🔷 6. Best Practices

- Follow **Single Responsibility Principle** per service  
- Use **DTOs** to decouple internal models  
- Avoid direct database calls between services  
- Implement **centralized logging & tracing**  
- Secure APIs with **JWT/OAuth2**  
- Maintain **backward compatibility** in APIs  

---

## 🔷 7. Challenges in Microservices

- Complex inter-service communication  
- Distributed transactions → solved via **Saga Pattern**  
- Debugging → use **Sleuth + Zipkin**  
- Configuration management → use **Spring Cloud Config**  
- Data consistency → use **event-driven architecture**

---

## 🔷 8. Typical Spring Boot Microservices Project Structure

microservices/  
│  
├── api-gateway/ --> Spring Cloud Gateway  
├── config-server/ --> Centralized Configs  
├── discovery-server/ --> Eureka Service Registry  
├── user-service/ --> Sample Microservice (REST + JPA)  
├── order-service/ --> Another Microservice  
└── common-lib/ --> DTOs, Constants, Utils

---

## 🔷 9. Common Spring Annotations for Microservices

| Annotation               | Purpose                                  |
|--------------------------|------------------------------------------|
| `@SpringBootApplication` | Main class to bootstrap the app          |
| `@EnableEurekaClient`    | Register service with Eureka             |
| `@EnableFeignClients`    | Enables Feign client usage               |
| `@EnableDiscoveryClient` | Enables service discovery                |
| `@RestController`        | Marks a class as a REST controller       |

---

## 🔷 Difference Between Monolithic and Microservices

| Feature                   | Monolithic Architecture                                  | Microservices Architecture                                    |
|---------------------------|----------------------------------------------------------|---------------------------------------------------------------|
| **Definition**            | Single unified application                               | Application composed of small, independent services           |
| **Deployment**            | Entire application deployed as one unit                  | Each service is deployed independently                        |
| **Scalability**           | Scales by cloning the whole app                          | Individual services can be scaled independently               |
| **Technology Stack**      | Typically uses a single tech stack                       | Different services can use different tech stacks              |
| **Development**           | Easy to develop in early stages                          | Suitable for large, complex applications                      |
| **Codebase**              | One large codebase                                       | Multiple smaller codebases (per service)                      |
| **Communication**         | In-process method calls                                  | Lightweight protocols like HTTP/REST, Kafka, gRPC             |
| **Database**              | Single database                                          | Each service manages its own database                         |
| **Fault Isolation**       | A failure can bring down the whole app                   | Failure in one service doesn't affect others                  |
| **Deployment Time**       | Longer due to size of app                                | Faster as only changed services are deployed                  |
| **Testing**               | End-to-end testing is easier                             | Requires service-level and contract testing                   |
| **Team Ownership**        | Multiple teams work on the same codebase                 | Each team owns specific microservices                         |
| **Maintainability**       | Becomes harder as app grows                              | Easier to manage and maintain                                 |
| **Performance Overhead**  | Less (no inter-process communication)                    | Slightly higher due to inter-service communication            |

---

### ✅ Summary:

- **Monolithic**: Best for small, simple apps. Easy to start, harder to scale.  
- **Microservices**: Best for complex, scalable systems with independent teams.


## 🔷 Spring Boot and Microservices Architecture

### ✅ What is Spring Boot?

Spring Boot is a framework built on top of the Spring Framework that simplifies the development of production-ready applications.

**Key Features:**
- Auto-configuration
- Embedded servers (Tomcat, Jetty)
- Minimal XML configuration
- Actuator endpoints for monitoring
- Integration with Spring Cloud for microservices

---

### ✅ What is Microservices Architecture?

Microservices Architecture structures an application as a collection of small, loosely coupled, independently deployable services, each responsible for a specific business capability.

**Key Characteristics:**
- Decentralized data management (DB per service)
- Lightweight communication via REST or messaging (Kafka/RabbitMQ)
- Independent deployment
- Technology-agnostic services
- Fault isolation and high scalability

---

### ✅ Spring Boot + Microservices Architecture Overview
![](https://sdmntpreastus.oaiusercontent.com/files/00000000-f688-61f9-ac06-68431d804ee2/raw?se=2025-07-12T19%3A52%3A25Z&sp=r&sv=2024-08-04&sr=b&scid=ef50f21b-9bce-52ce-9e66-334f5aaad6c5&skoid=b0fd38cc-3d33-418f-920e-4798de4acdd1&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-12T15%3A32%3A02Z&ske=2025-07-13T15%3A32%3A02Z&sks=b&skv=2024-08-04&sig=ex4MFsY6oajb3uPUB64MSWL2ZE/lOaFqeAO1EV5zmQ0%3D)
        

---

### ✅ Core Components in Spring Boot Microservices Architecture

| Component              | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **Spring Boot**        | Base framework for developing REST-based services                           |
| **Spring Cloud Gateway** | API Gateway to route requests, apply filters, and security rules           |
| **Eureka Server**      | Service registry for service discovery                                      |
| **Spring Cloud Config**| Centralized external configuration management                               |
| **Feign Client**       | Declarative REST client for inter-service communication                     |
| **Kafka / RabbitMQ**   | Asynchronous messaging between services                                     |
| **Zipkin + Sleuth**    | Distributed tracing and request tracking                                    |
| **JWT + Spring Security** | Secure microservices using token-based authentication                    |

---

### ✅ Flow of Request in Microservices with Spring Boot

1. **Client** sends a request → hits **API Gateway**
2. **Gateway** routes request to appropriate **microservice**
3. **Microservice** handles logic, may call **other services** (via Feign/REST)
4. Services access their **own databases**
5. **Response** travels back to the client through the same path

---

### ✅ Benefits of Using Spring Boot for Microservices

- Fast development with minimal configuration
- Production-ready services with Actuator
- Easy integration with cloud-native components
- Wide community and documentation support
- Supports both synchronous (REST/Feign) and asynchronous (Kafka) communication


## 🔷 API Gateway in Microservices (Spring Cloud Gateway)

### ✅ What is an API Gateway?

An **API Gateway** is a server that acts as a **single entry point** for all client requests. It handles routing, authentication, rate limiting, logging, and response transformation before forwarding the request to backend services.

---

### ✅ Why Use API Gateway in Microservices?

- Simplifies client communication (only one endpoint to call)
- Centralized **authentication and authorization**
- Routes requests to appropriate microservices
- Can apply filters: **logging, retries, circuit breakers**
- Hides internal microservice structure from the client

---

### ✅ Spring Cloud Gateway (SCG)

Spring Cloud Gateway is the preferred **API Gateway** solution from Spring team, built on top of **Project Reactor** and **Spring WebFlux** for non-blocking I/O.

---

### ✅ Core Features of Spring Cloud Gateway

- **Routing**: Based on path, headers, query params, etc.
- **Filters**: Pre and post-processing of requests (e.g., auth, logging)
- **Rate limiting**: Control traffic load
- **Load balancing**: With Eureka or other discovery clients
- **Path rewriting**: Modify incoming URLs before forwarding

---

### ✅ Sample Route Configuration (application.yml)

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/orders/**
```

## 🔷 How API Gateway Works (In-Depth)

An API Gateway serves as the **front-door** to your microservices system. It intercepts all incoming client requests and processes them based on routing rules, filters, and policies.

---

### ✅ 1. Routing

**What it does:**  
Determines **which microservice** should handle a particular request based on routing rules.

**How it works:**
- **Path-based routing**  
  Example: `/users/**` → User Service  
  `/orders/**` → Order Service

- **Header-based routing**  
  Example: `X-Client-Version: v1` → Legacy Service

- **Query param-based routing**  
  Example: `/api/items?type=premium` → Premium Service

**Spring Cloud Gateway YAML Example:**

```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
        - id: order-service
          uri: lb://ORDER-SERVICE
          predicates:
            - Path=/orders/**
```
### ✅ 2. Filtering (Pre & Post)

Filters allow you to **manipulate the request and response**. Filters can be used for logging, authentication, modification, etc.

-   **Pre-filters**: Run before request is routed  
    e.g., Authentication, Logging, Header Injection
    
-   **Post-filters**: Run after service responds  
    e.g., Response Transformation, Metrics Logging
    

**Example in Java:**
```java
@Component
public class CustomLoggingFilter implements GlobalFilter {
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        System.out.println(">>> Pre-Filter: Logging Request");
        return chain.filter(exchange).then(Mono.fromRunnable(() -> {
            System.out.println("<<< Post-Filter: Logging Response");
        }));
    }
}
```
### ✅ 3. Centralized Authentication and Authorization

API Gateway acts as the **security entry point** for all services.

-   Validates JWT/OAuth2 tokens
    
-   Forwards only **authorized requests**
    
-   Prevents exposing individual microservices to external users
    

**Benefits:**

-   Central point of control
    
-   Reduces duplicate auth logic across services

### ✅ 4. Rate Limiting

Prevents a single client or IP from **overloading** the backend system by limiting how many requests they can make in a given time frame.

**Use cases:**

-   Protects services from abuse
    
-   Ensures fair usage across clients
    
```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
          filters:
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 10
                redis-rate-limiter.burstCapacity: 20
```
### ✅ 5. Load Balancing with Eureka

When integrated with **Eureka Service Discovery**, the API Gateway performs **client-side load balancing**.

-   Uses `lb://SERVICE-NAME` URI to discover available instances
    
-   Routes traffic to healthy instances only
    

**Built-in with Spring Cloud LoadBalancer or Ribbon**
### ✅ 6. Path Rewriting

Sometimes the internal microservice expects a different path than what the client sends.

**Use case:** Hide internal paths or version details

```yaml
filters:
  - RewritePath=/v1/api/(?<segment>.*), /$\{segment}
```
### ✅ 7. Hides Internal Microservice Details

The client:

-   **Only sees the Gateway** URL
    
-   Does **not know** how many services exist
    
-   Can be version-agnostic and simplified
    

Example:

-   Client calls `/api/products`
    
-   Gateway internally routes to `http://product-service/v1/products`


### ✅ 1. **What is API Gateway?**

API Gateway is the **central entry point** for all requests coming into your system. Instead of having clients directly call each microservice, the API Gateway routes and filters all requests and responses.

**Why use it?**

-   Hides internal service URLs
    
-   Adds centralized security (like JWT validation)
    
-   Applies rate limits
    
-   Handles failures with fallbacks
    
-   Performs logging, metrics collection, and response modification
### ✅ 2. **Routing Requests (Spring Cloud Gateway)**

Routing in Spring Cloud Gateway is configured using the `application.yml` file
routes:
  ```yaml
   - id: user-service
    uri: lb://USER-SERVICE
    predicates:
      - Path=/users/**
```
This means:

-   Any request like `/users/1` is **routed to `USER-SERVICE`**.
    
-   `lb://` means it uses **load balancing** via Eureka to pick a healthy instance.
    

You can route based on:

-   URL paths (`/users/**`)
    
-   HTTP headers (`X-Version: 1`)
    
-   Query parameters (`?type=premium`)
### ✅ 3. **JWT Authentication Filter**

The `JwtAuthFilter` is a **custom security filter** applied on incoming requests before routing them.

What it does:

-   Checks if the `Authorization` header contains a token (starting with `Bearer` )
    
-   Rejects the request if no token is present
    
-   In a real-world app, it would decode the token and check if it’s valid (expired or tampered)
    

**Purpose:** To **secure all microservices** through a single filter in the gateway.
### ✅ 4. **Fallback Mechanism**

If a microservice is **down or unresponsive**, the API Gateway uses a **fallback URI** to return a predefined message.

Example:
```yaml
filters:
  - name: CircuitBreaker
    args:
      name: userServiceCB
      fallbackUri: forward:/userServiceFallback

```
This redirects the request to `/userServiceFallback` (a controller method) when the service fails.

**Why it's important:** Prevents total system failure and gives a graceful response.
### ✅ 5. **Service Discovery (Eureka)**

Eureka acts as the **service registry**.

-   Each microservice (user, order, auth) **registers itself** with Eureka.
    
-   The API Gateway and other services use Eureka to **discover instances** dynamically.
    
-   No hardcoding of IPs or ports is needed.
    

**Example in YAML:**
```yaml
eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```
### ✅ 6. **Dummy JWT Generation (Auth Service)**

The `auth-service` acts like an **identity provider**. It returns a dummy token (in reality, you’d generate a signed JWT with user claims).
```json
POST /auth/login
{
  "username": "subba",
  "password": "reddy"
}
```
Response:
```
Bearer dummy-jwt-token
```
**Purpose:** Simulates real login + token generation flow.
### ✅ 7. **User & Order Microservices**

These services are protected via gateway:

-   `GET /users/1` → Routed to `user-service`
    
-   `GET /orders/1` → Routed to `order-service`
    

They are simple REST endpoints that demonstrate how each service:

-   Has **its own controller**
    
-   Runs **on a separate port**
    
-   Is **registered with Eureka**
    

----------

### ✅ 8. **Final Flow (End-to-End)**
```
Client
   │
   │ 1. Sends Request with JWT → /users/1
   ▼
API Gateway
   │
   ├── Validates JWT
   ├── Logs Request
   ├── Applies Rate Limits (optional)
   ├── Routes to user-service via Eureka
   ▼
User Service
   │
   └── Returns response
   ▲
   Gateway filters post-process
   │
   ▼
Response sent back to client
```
## 🔷 Spring Boot API Gateway with Microservices - Documentation

This documentation explains the implementation of a full-fledged API Gateway using **Spring Cloud Gateway** integrated with **JWT authentication**, **service discovery (Eureka)**, and **fallback handling**.

---

### ✅ Project Structure

```
microservices/
├── api-gateway/           --> API Gateway with JWT filter & fallback
├── auth-service/          --> Issues JWT token (dummy for demo)
├── user-service/          --> Sample protected microservice
├── order-service/         --> Another microservice
└── discovery-server/      --> Eureka Service Registry
```

---

### ✅ 1. API Gateway Setup

**Main Class:** `ApiGatewayApplication.java`
```java
@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}
```

**application.yml**
```yaml
server:
  port: 8080

spring:
  application:
    name: api-gateway
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true
      routes:
        - id: user-service
          uri: lb://USER-SERVICE
          predicates:
            - Path=/users/**
          filters:
            - name: JwtAuthFilter
            - name: CircuitBreaker
              args:
                name: userServiceCB
                fallbackUri: forward:/userServiceFallback

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

---

### ✅ 2. Custom JWT Filter

**JwtAuthFilter.java**
```java
@Component
public class JwtAuthFilter extends AbstractGatewayFilterFactory<JwtAuthFilter.Config> {

    public JwtAuthFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
                return exchange.getResponse().setComplete();
            }
            // Here, you can validate JWT token
            return chain.filter(exchange);
        };
    }

    public static class Config {}
}
```

---

### ✅ 3. Fallback Handling

**FallbackController.java**
```java
@RestController
public class FallbackController {

    @GetMapping("/userServiceFallback")
    public ResponseEntity<String> userFallback() {
        return ResponseEntity.status(503).body("User Service is unavailable. Try again later.");
    }
}
```

---

### ✅ 4. Discovery Server (Eureka)

**DiscoveryServerApplication.java**
```java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
```

**application.yml**
```yaml
server:
  port: 8761
spring:
  application:
    name: discovery-server

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
  server:
    enable-self-preservation: false
```

---

### ✅ 5. Auth Service (Dummy JWT)

**AuthController.java**
```java
@RestController
@RequestMapping("/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        // In real life, validate user and generate JWT
        return ResponseEntity.ok("Bearer dummy-jwt-token");
    }

    static class User {
        public String username;
        public String password;
    }
}
```

**application.yml**
```yaml
server:
  port: 8081
spring:
  application:
    name: auth-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

---

### ✅ 6. User & Order Services

**UserController.java**
```java
@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/{id}")
    public String getUser(@PathVariable String id) {
        return "User with ID: " + id;
    }
}
```

**OrderController.java**
```java
@RestController
@RequestMapping("/orders")
public class OrderController {
    @GetMapping("/{id}")
    public String getOrder(@PathVariable String id) {
        return "Order with ID: " + id;
    }
}
```

**application.yml (both)**
```yaml
server:
  port: 808X  # 8082 for user, 8083 for order
spring:
  application:
    name: user-service / order-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka/
```

---

### 🧠 Explanation of Key Concepts

**What is API Gateway?**
- Central entry point to all microservices
- Handles security, routing, load balancing, and fallbacks

**Routing:**
- Defined using path predicates in `application.yml`
- Load-balanced to healthy service instances via Eureka

**JWT Filter:**
- Validates authorization tokens on each request
- Prevents unauthorized access before reaching microservices

**Fallbacks:**
- Circuit breakers detect failure
- Custom fallback methods give user-friendly error responses

**Service Discovery (Eureka):**
- Dynamically registers and locates microservices
- Removes hardcoded IPs and ports

**Auth Service:**
- Issues a dummy JWT token on login
- In production, this will include user claims and signature

**Microservices:**
- Small services like user-service and order-service expose REST APIs
- They register with Eureka and are routed through API Gateway

**End-to-End Flow:**
1. Client sends request with JWT → API Gateway
2. JWT validated → Route to service → Fallback if down
3. Response sent back to client

---

✅ This is  complete API Gateway + Eureka + JWT + Fallback base project.


### ✅ 1. **Add Rate Limiting (Redis-backed)**

**Why:** Prevent abuse, control traffic per client or API.

**How:**

-   Use `RequestRateLimiter` filter in Spring Cloud Gateway
    
-   Backed by Redis (stores request counts per key)
    

**Includes:**

-   Redis setup
    
-   `application.yml` update
    
-   Rate limiting filter example
    

----------

### ✅ 2. **Write Real JWT Verification Logic**

**Why:** Validate real tokens, ensure secure communication.

**How:**

-   Add JWT secret key in config
    
-   Decode and validate JWT (issuer, signature, expiry, roles)
    
-   Add helper methods for claims extraction
    

**Includes:**

-   JWT utility class
    
-   Updated `JwtAuthFilter` to validate and parse tokens
    
-   Use libraries like `io.jsonwebtoken` (JJWT)
    

----------

### ✅ 3. **Create Docker Compose Setup**

**Why:** Easily run all services with one command (`docker-compose up`)

**How:**

-   Dockerfiles for each service
    
-   `docker-compose.yml` to spin up all containers (gateway, Eureka, auth, user, order, redis)
    

**Includes:**

-   Base images
    
-   Network setup
    
-   Redis and Eureka containers
    

----------

### ✅ 4. **Generate Postman Collection**

**Why:** Quickly test login, API calls with token, fallback

**How:**

-   `POST /auth/login` → get token
    
-   Use token in `Authorization` header
    
-   Test `/users/{id}`, `/orders/{id}`, and fallback
    

**Includes:**

-   `.json` file (import into Postman)
    
-   Environments and pre-request scripts

🔷 Topics to Learn in Spring Cloud API Gateway
🔢

Topic

Why It's Important

## 🚀 Spring Cloud Gateway – Core Features to Master

| 🔢 No. | 🔧 Feature                                 | 📘 Description                                                                 |
|-------|---------------------------------------------|--------------------------------------------------------------------------------|
| 1️⃣    | **Routing with Predicates**                | Route based on path, headers, method, query params, etc.                      |
| 2️⃣    | **Filters (Pre/Post)**                     | Modify request/response — auth, logging, headers, etc.                        |
| 3️⃣    | **JWT Authentication**                     | Secure services by validating JWT tokens at the gateway level                 |
| 4️⃣    | **Rate Limiting (Redis)**                  | Limit API usage per IP/user/token using Redis-backed rate limiting            |
| 5️⃣    | **Circuit Breakers (Resilience4j)**        | Graceful fallback when microservices fail or time out                         |
| 6️⃣    | **Centralized Logging & Tracing**          | Track requests using **Sleuth + Zipkin**                                      |
| 7️⃣    | **Load Balancing with Eureka**             | Auto-routing to healthy service instances (client-side load balancing)        |
| 8️⃣    | **Path Rewriting / Header Manipulation**   | Rewrite URLs or inject headers before forwarding                              |
| 9️⃣    | **Custom Filters**                         | Add custom logic (e.g., auth, logging, request mutation)                      |
| 🔟    | **Swagger Aggregation (OpenAPI)**           | Show multiple microservices' APIs in a single Swagger UI                      |
| 1️⃣1️⃣  | **Request Logging Filters**                | Log request details, mask sensitive data, capture audit trails                |
| 1️⃣2️⃣  | **CORS (Cross-Origin Resource Sharing)**   | Allow or restrict frontend domains to access backend APIs                     |


🚀 BONUS: Enterprise-Level Enhancements
### ✅ Suggested Learning Path

1.  ✅ **Start with basics**: routing, filters, Eureka, JWT
    
2.  🚀 Add **rate limiting**, **circuit breaker**, **fallbacks**
    
3.  🧪 Integrate **tracing, Swagger aggregation**, and **monitoring tools**
    
4.  🐳 Dockerize and deploy all components
    
5.  📈 Add observability, testing tools, and real CI/CD workflows

## 🔷 Scenario-Based API Gateway Interview Questions (for 3 Yrs Experience)

----------

### ✅ 1. **JWT Validation at Gateway**

**🧩 Scenario:**  
You implemented JWT in your microservices. The client sends a request without a valid token.  
**How will your API Gateway detect this, and what should happen?**

**What to Explain:**

-   Use a **custom filter** (`GatewayFilter`) to intercept and validate JWT.
    
-   Return `401 Unauthorized` if token is missing or invalid.
    
-   Only forward valid requests to microservices.
    

----------

### ✅ 2. **Service Is Down (Circuit Breaker + Fallback)**

**🧩 Scenario:**  
`order-service` is down. A client makes a request to `/orders/123`.  
**How does your gateway handle this gracefully without crashing the client?**

**Expected Concepts:**

-   Use Spring Cloud Gateway’s **CircuitBreaker filter** (with Resilience4j or Hystrix).
    
-   Configure a **`fallbackUri`** to return a friendly response (e.g., “Order service is temporarily unavailable”).
    

----------

### ✅ 3. **Rate Limiting a Client**

**🧩 Scenario:**  
One client floods your API with requests. You want to limit it to 5 requests per second.  
**How do you implement this?**

**Key Points:**

-   Use `RequestRateLimiter` filter in gateway.
    
-   Back it with **Redis** (token bucket algorithm).
    
-   Use **KeyResolver** (e.g., based on IP address or user ID).
    

----------

### ✅ 4. **Routing Dynamically Without Hardcoding URLs**

**🧩 Scenario:**  
You have 10 microservices. You don’t want to hardcode each service’s URL in the gateway config.  
**How will you configure routing?**

**Answer:**

-   Enable **Eureka service discovery**.
    
-   Use `spring.cloud.gateway.discovery.locator.enabled=true` → this auto-generates routes using `lb://`.
    

----------

### ✅ 5. **Different Response Based on Route or Version**

**🧩 Scenario:**  
Your frontend hits `/v1/users/123` and `/v2/users/123`. You want to send traffic to two different services.  
**How do you set this up in gateway?**

**What to Explain:**

-   Use **path-based routing** with different service URIs:
    


`predicates:  -  Path=/v1/users/**  →  user-service-v1  -  Path=/v2/users/**  →  user-service-v2` 

----------

### ✅ 6. **Modify or Rewrite Path in Gateway**

**🧩 Scenario:**  
Frontend calls `/api/users/123`, but the backend expects `/users/123`.  
**How do you fix this without changing the frontend?**

**Explain:**

-   Use `RewritePath` filter:
    

`filters:  -  RewritePath=/api/(?<segment>.*),  /$\u003csegment>` 

----------

### ✅ 7. **Logging All Incoming Requests**

**🧩 Scenario:**  
Your team wants to log all requests coming into the gateway, including headers and IP.  
**How would you implement this?**

**Best Approach:**

-   Implement a **`GlobalFilter`** that logs request info before routing.
    
-   Can also add MDC for tracing across services.
    

----------

### ✅ 8. **Different Auth for Different Services**

**🧩 Scenario:**  
Some services require JWT, others don’t. How would you handle that in Gateway?

**Answer:**

-   Use conditional filters:
    
    -   Apply `JwtAuthFilter` only to certain routes.
        
    -   Or add `FilterChain` logic that checks route ID before applying security logic.
        

----------

### ✅ 9. **Return Custom Error When Rate Limit Exceeded**

**🧩 Scenario:**  
You want to show a custom JSON response when a client exceeds rate limit.  
**Can Spring Gateway do this?**

**Answer:**

-   Not directly out of the box — you'd need:
    
    -   A custom **`RateLimiter` implementation** OR
        
    -   Handle response in a custom global error handler.
        

----------

### ✅ 10. **Expose Only Gateway to External World**

**🧩 Scenario:**  
You accidentally exposed a microservice on a public port. What security risks arise, and how do you prevent this?

**Key Points:**

-   Clients can bypass Gateway (JWT, rate limiting, fallback all skipped).
    
-   Always expose **only Gateway to the internet**.
    
-   Keep services behind firewall/internal network.
    

----------

## 🧠 Bonus Conceptual Questions

| 🔢 Question                                                  | 💡 What to Cover                                                        |
|-------------------------------------------------------------|-------------------------------------------------------------------------|
| What is the difference between Pre and Post filters?        | Pre = before routing (auth, log), Post = after response (metrics, headers) |
| How do you trace requests end-to-end?                       | Use **Spring Cloud Sleuth** for trace IDs + **Zipkin** for visual traces |
| How to use API Gateway to aggregate Swagger from services?  | Use **Swagger UI Aggregation** via path rewrites or Swagger Gateway plugin |



# 🚀 Spring Cloud Microservices Architecture

A **production-ready microservices setup** built with Spring Boot, Spring Cloud Gateway, Eureka, JWT authentication, Redis-backed rate limiting, and Docker Compose.

---

## 🧱 Architecture Overview

```mermaid
graph TD
    Client -->|JWT Token| API_Gateway
    API_Gateway -->|Service Discovery| Eureka
    API_Gateway --> Auth_Service
    API_Gateway --> User_Service
    API_Gateway -->|Trace Logs| Zipkin
    API_Gateway -->|Rate Limiting| Redis
```
📁 Project Structure
```microservices-architecture/
│
├── api-gateway/           # Spring Cloud Gateway with filters, routing, JWT, rate limiting
├── discovery-server/      # Eureka service registry
├── auth-service/          # Issues JWT tokens
├── user-service/          # Secured microservice
├── redis/                 # Redis container (rate limiter backend)
├── zipkin/                # Distributed tracing service
└── docker-compose.yml     # Brings everything together
```
## ✨ Features

-   ✅ **Spring Cloud Gateway** (Routing, Filters, Path Rewriting)
    
-   🔐 **JWT Authentication** via custom filter
    
-   ⛔ **Rate Limiting** using Redis
    
-   ♻️ **Circuit Breaker + Fallbacks** with Resilience4j
    
-   🔁 **Service Discovery** with Eureka
    
-   📜 **Centralized Logging & Tracing** using Sleuth + Zipkin
    
-   🔧 **Custom Filters** (Auth, Logging)
    
-   🚦 **Swagger Aggregation** (Optional enhancement)
    
-   🐳 **Dockerized Stack** — run with one command!

🚀 How to Run (Docker Compose)
```
# Clone the repo
git clone https://github.com/your-username/microservices-architecture.git
cd microservices-architecture

# Build and start all services
docker-compose build
docker-compose up
```
## 🔐 JWT Authentication Flow

1.  `POST /auth/login`  
    👉 Receives `{ username, password }`, returns JWT token.
    
2.  `GET /users/1`  
    👉 Add `Authorization: Bearer <token>` in header to access user-service.
    

----------

## 🧪 Test with Postman

### 1️⃣ Login

```json
POST http://localhost:8080/auth/login
Body: { "username": "subba", "password": "1234" }
```
### 2️⃣ Access user service

```json
GET http://localhost:8080/users/1

Headers: Authorization: Bearer <your_token>`
```
## 🔧 Configuration Highlights

### `application.yml` (Gateway)
```yaml
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**
          filters:
            - JwtAuthFilter
            - name: RequestRateLimiter
              args:
                redis-rate-limiter.replenishRate: 5
                redis-rate-limiter.burstCapacity: 10
            - name: CircuitBreaker
              args:
                name: userCB
                fallbackUri: forward:/fallback/users
```
## 📊 Monitoring & Tracing

-   View tracing: `http://localhost:9411` (Zipkin)
    
-   Eureka Dashboard: `http://localhost:8761`

## 🛠 Future Enhancements

-   🔑 OAuth2 + Keycloak integration
    
-   🧪 Swagger UI aggregation
    
-   📈 Prometheus + Grafana metrics
    
-   🔐 Role-based access per route

## 🧠 Spring Cloud API Gateway – Interview Questions (3 YOE)

| #  | ❓ Question                                                                 | ✅ What to Cover                                                                 |
|----|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1  | What is Spring Cloud Gateway?                                               | A lightweight reactive API gateway using Spring WebFlux                         |
| 2  | How is it different from Zuul?                                              | WebFlux-based (non-blocking), better performance, newer design                  |
| 3  | What is a Route Predicate?                                                  | Condition to match incoming requests (Path, Method, Header, Query Param, etc.) |
| 4  | What are Pre and Post filters?                                              | Pre: before routing (auth, logging), Post: after routing (metrics, headers)     |
| 5  | What is the purpose of a Gateway Filter?                                    | Modify requests/responses, perform checks, logging, metrics                     |
| 6  | How do you implement JWT authentication in Gateway?                         | Custom `GatewayFilterFactory`, validate token, forward only if valid            |
| 7  | How do you pass user info to downstream services?                          | Extract from JWT, inject into headers before forwarding                         |
| 8  | How to apply security only to specific routes?                              | Apply filter conditionally per route                                            |
| 9  | How does rate limiting work?                                                | Redis-based token bucket algorithm using `RequestRateLimiter` filter            |
| 10 | How to customize rate limit per user?                                       | Create a `KeyResolver` based on IP/token/user ID                                |
| 11 | How to handle fallback for failed services?                                 | Use Circuit Breaker filter with `fallbackUri`                                   |
| 12 | What is used for circuit breaker in Spring Cloud Gateway?                  | Resilience4j (or Hystrix optionally)                                            |
| 13 | How do you rewrite the path in Gateway?                                     | Use `RewritePath` filter with RegEx mapping                                     |
| 14 | How to inject custom headers in a request?                                  | Mutate headers using `ServerHttpRequest.mutate()` in filter                     |
| 15 | How to implement global logging for all requests?                           | Create and register a `GlobalFilter`                                            |
| 16 | How does load balancing work?                                               | Via `lb://` URI using Eureka service discovery                                  |
| 17 | How do you trace requests across services?                                  | Sleuth adds `traceId`, `spanId`; Zipkin visualizes the trace                    |
| 18 | How do you Dockerize Spring Cloud Gateway?                                  | Dockerfile per service + Docker Compose with Redis, Eureka, Zipkin, etc.        |
| 19 | How do you expose Swagger UI for multiple services?                         | Use path rewrite in gateway or Swagger UI aggregation                           |
| 20 | How do you secure gateway endpoints in production?                          | Use HTTPS, JWT filters, IP whitelisting, CORS rules                             |


## 🔷 Service Registry & Service Discovery

### ✅ What Is Service Discovery?

In microservices, services often **start, stop, scale dynamically** across different machines.  
Service Discovery allows services to **find and communicate** with each other **without hardcoding IPs or URLs**.

---

### ✅ What Is a Service Registry?

A **Service Registry** is a central directory that **tracks available services** and their **host/port metadata**.  
It allows automatic **registration and lookup** of microservices at runtime.

---

### 🏢 Real-World Analogy

> Think of the **Service Registry** as a hotel reception:
> - Services are like guests registering when they check in (register with Eureka)
> - Other guests can ask the receptionist for someone's room number (service lookup)
> - The receptionist keeps track of who is available and where

---

### 🛠 How It Works

| Role              | Function                                                                 |
|-------------------|--------------------------------------------------------------------------|
| **Service Registry** | Maintains a dynamic list of service instances (e.g., Eureka server)      |
| **Service Provider** | Registers itself to the registry on startup (e.g., user-service)        |
| **Service Consumer** | Looks up services from registry to invoke (e.g., API Gateway)           |

---

### 🔧 Technologies

| Tool         | Role                   |
|--------------|------------------------|
| **Eureka Server** | Service Registry (Netflix OSS) |
| **Eureka Client** | Spring Boot microservices          |
| **Consul / Zookeeper** | Alternative service registries |

---

### 📦 Spring Cloud + Eureka Example

#### ✅ Eureka Server (`discovery-server`)

```yaml
# application.yml
server:
  port: 8761

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
```
```java
@EnableEurekaServer
@SpringBootApplication
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}

```
#### ✅ Eureka Client (`user-service`, `api-gateway`)

```yaml
spring:
  application:
    name: user-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
 
```
```java
@EnableEurekaClient
@SpringBootApplication
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}

```
----------

### 🔁 How It Works Together

1.  `discovery-server` starts as Eureka Server
    
2.  `user-service` and `api-gateway` **register** themselves on startup
    
3.  Gateway uses `lb://user-service` to **discover** and forward requests
    

----------

### 📈 Benefits

-   ✅ No hardcoding of IPs or hostnames
    
-   🔄 Supports auto-scaling & dynamic environments
    
-   💥 Enables load balancing (Ribbon/Resilience4j)
    
-   🔌 Easily integrated with Spring Cloud Gateway, Feign Clients
    

----------

### 🚫 Without Service Discovery

❌ Static URLs → brittle  
❌ Manual config updates  
❌ No load balancing or failover

----------

Here's a complete **implementation code setup** for **Service Registry (Eureka Server)** and a **Service Provider (Eureka Client)** using Spring Boot. You can copy this into your documentation or project.
## ✅ 1. Eureka Server (Service Registry)

### 🔧 `pom.xml` dependencies

```
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
    </dependency>
</dependencies>

```

### ⚙️ application.yml
```yaml
server:
  port: 8761

spring:
  application:
    name: discovery-server

eureka:
  client:
    register-with-eureka: false
    fetch-registry: false
```
### 🚀 Main Class
```java
@SpringBootApplication
@EnableEurekaServer
public class DiscoveryServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryServerApplication.class, args);
    }
}
```
## ✅ 2. Eureka Client (User-Service Example)

### 🔧 `pom.xml` dependencies
```
<dependencies>
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
    </dependency>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```
⚙️ `application.yml`
```yaml
server:
  port: 8081

spring:
  application:
    name: user-service

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka
```
🚀 Main Class
```java
@SpringBootApplication
@EnableEurekaClient
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```
✅ Sample Controller
```java
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public ResponseEntity<String> getUser(@PathVariable String id) {
        return ResponseEntity.ok("User ID: " + id);
    }
}
```
## 🐳 Docker Compose (Optional)

You can deploy both services using Docker Compose:

### 📦 `docker-compose.yml`
```yaml
version: '3.8'

services:
  discovery-server:
    build: ./discovery-server
    ports:
      - "8761:8761"

  user-service:
    build: ./user-service
    ports:
      - "8081:8081"
    depends_on:
      - discovery-server
```
## ✅ Test It

1.  Run `discovery-server` → Visit `http://localhost:8761`
    
2.  Start `user-service` → It auto-registers in the Eureka dashboard
    
3.  Call: `http://localhost:8081/users/1`


## 📚 Interview & Scenario-Based Questions: Service Registry & Discovery (Eureka)

| #  | ❓ Question                                                                  | ✅ What to Cover                                                                 |
|----|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| 1  | What is a Service Registry?                                                 | A central server where microservices register themselves for discovery          |
| 2  | What is Service Discovery?                                                  | Mechanism for services to discover each other dynamically                       |
| 3  | How does Eureka work in Spring Cloud?                                       | Services register with Eureka and query it to find other services               |
| 4  | What is the difference between Eureka Server and Eureka Client?            | Server: registry, Client: registers and discovers                               |
| 5  | What are the key configurations in `application.yml` for Eureka?           | `defaultZone`, `fetchRegistry`, `registerWithEureka`                            |
| 6  | What happens when Eureka server goes down?                                 | Discovery fails; circuit breakers or retries should be in place                 |
| 7  | Can multiple Eureka servers be run in production?                          | Yes — run in cluster for high availability (HA)                                 |
| 8  | What is the default heartbeat interval in Eureka?                          | Every 30 seconds (by default); can be customized                                |
| 9  | How to handle stale instances in Eureka?                                   | Set `evictionIntervalTimerInMs`, enable self-preservation mode                  |
| 10 | How does API Gateway use Eureka for discovery?                             | Uses `lb://<service-name>` and discovers via Eureka                             |
| 11 | How to load balance across instances discovered via Eureka?                | Spring Cloud LoadBalancer or Ribbon (deprecated)                                |
| 12 | How to register only specific services with Eureka?                        | Use `@EnableEurekaClient` only in desired services                              |
| 13 | How to secure Eureka dashboard or registry?                                | Use Spring Security (basic auth or OAuth2)                                      |
| 14 | How to disable Eureka registration in local or test profiles?              | Set `register-with-eureka: false`                                               |
| 15 | What are Eureka alternatives?                                               | Consul, Zookeeper, Nacos                                                        |
| 16 | What happens when a registered instance crashes?                           | Eureka removes it after timeout (default ~90 sec unless heartbeat is missed)   |
| 17 | How does Eureka achieve fault tolerance?                                   | Self-preservation mode, replicas in HA mode                                     |
| 18 | How do you monitor registered services in Eureka?                          | Via Eureka dashboard or Spring Boot Actuator endpoints                          |
| 19 | How to prevent stale data in Eureka registry?                              | Disable self-preservation + shorten eviction timeout                            |
| 20 | How would you scale service discovery in a large system?                   | Use Eureka clusters + API Gateway + global registry pattern                     |

## ✅ Example Scenario-Based Questions with Answers

> 🧩 **Scenario 1:**  
> **Q:** Your microservice is not discoverable by other services. What could be wrong?  
> **A:** Check if the service is registering with Eureka (`register-with-eureka: true`), ensure Eureka client dependencies are present, and validate the Eureka server URL.

> 🧩 **Scenario 2:**  
> **Q:** After scaling up a service, some instances are not hit. Why?  
> **A:** Eureka may not have updated all service instances yet, or your load balancer is caching stale instances. Consider lowering Eureka cache TTL.

> 🧩 **Scenario 3:**  
> **Q:** Eureka dashboard shows stale/down services even after stopping them. What to do?  
> **A:** Reduce `evictionIntervalTimerInMs` and disable `self-preservation-mode` in Eureka server to remove stale services faster.

> 🧩 **Scenario 4:**  
> **Q:** You want your service to discover another service **only if Eureka is available**. How?  
> **A:** Use Spring Retry, fail-safe fallback logic, or define a circuit breaker around Feign/Gateway.


## 🔷 API Gateway Integration with Eureka Server

![Generated image](https://sdmntpreastus2.oaiusercontent.com/files/00000000-38b0-61f6-b071-f6d76971a6e6/raw?se=2025-07-13T08%3A10%3A24Z&sp=r&sv=2024-08-04&sr=b&scid=ff32c7e7-9e88-52ea-a7be-7947a75fade5&skoid=f71d6506-3cac-498e-b62a-67f9228033a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-12T23%3A11%3A26Z&ske=2025-07-13T23%3A11%3A26Z&sks=b&skv=2024-08-04&sig=5rHR86Iart4rLZJ61qUKlF75MSROMGCr1dJZXPXiqHc%3D)

### 📘 Overview

Spring Cloud Gateway integrates seamlessly with Eureka for **dynamic routing** to registered microservices.  
With Eureka, the Gateway does **not need hardcoded URLs** — it discovers service instances automatically.

---

### 🧩 Architecture

1. Microservices (user-service, order-service) **register** with Eureka
2. API Gateway also registers with Eureka
3. Gateway routes requests using service names like `lb://user-service`
4. Eureka returns healthy instances to the Gateway
5. Gateway applies filters and forwards the request

---

### ⚙️ `pom.xml` for API Gateway
```xml
<dependencies>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
  </dependency>
  <dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
  </dependency>
</dependencies>
```
### ⚙️ `application.yml` (API Gateway)

```yaml
server:
  port: 8080

spring:
  application:
    name: api-gateway

eureka:
  client:
    service-url:
      defaultZone: http://localhost:8761/eureka

spring:
  cloud:
    gateway:
      discovery:
        locator:
          enabled: true
          lower-case-service-id: true
      routes:
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/users/**

        - id: order-service
          uri: lb://order-service
          predicates:
            - Path=/orders/**

``` 

----------

### 🚀 `ApiGatewayApplication.java`
```java
@SpringBootApplication
@EnableEurekaClient
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}

```
----------

### ✅ How It Works
| Feature                   | Behavior                                                                 |
|---------------------------|--------------------------------------------------------------------------|
| `uri: lb://user-service`  | Gateway dynamically discovers `user-service` via Eureka                 |
| `Path=/users/**`          | Routes all requests matching `/users/**` to `user-service`              |
| `@EnableEurekaClient`     | Registers the API Gateway with Eureka for service discovery             |




Makes Gateway discoverable and able to use service registry
----------

### 📈 Benefits

-   ✅ No need to hardcode service URLs
    
-   ✅ Built-in load balancing
    
-   ✅ Scalable routing config
    
-   ✅ Resilient to instance failures
    
-   ✅ Simplifies microservice communication
    

----------

### 🧪 Test it

-   Start **Eureka Server**
    
-   Start **user-service** and **order-service**
    
-   Start **api-gateway**
    
-   Access via:
    
    -   `http://localhost:8080/users/1`
        
    -   `http://localhost:8080/orders/100`
        

----------

### 🛠 Pro Tips

-   Use `Spring Cloud LoadBalancer` for custom load balancing
    
-   Combine with JWT filter to secure routes
    
-   Add **circuit breaker + fallback** for better resilience
    
-   Use `RewritePath` for cleaner URLs

## 🔷 Microservices Communication

In a microservices architecture, services must **communicate** with each other to fulfill business workflows. There are two primary communication types:

---

### 🔁 1. Synchronous Communication

> Real-time request-response (Blocking)

#### ✅ Protocols
- **HTTP/REST**
- **gRPC**
- **Feign Client**
- **GraphQL**

#### ✅ Characteristics
| Feature             | Description                                |
|---------------------|--------------------------------------------|
| Latency             | Depends on network; slower under load      |
| Coupling            | Tighter (consumer waits for response)      |
| Use Case            | CRUD ops, user-facing requests             |
| Examples            | `RestTemplate`, `WebClient`, `FeignClient` |

#### ✅ Pros
- Simple to implement and debug
- Easier error handling (HTTP codes)
- Works well for request-response models

#### ❌ Cons
- Tightly coupled (fails if service is down)
- Not ideal for high throughput/low latency needs

---

### 📬 2. Asynchronous Communication

> Event-driven (Non-blocking)

#### ✅ Protocols & Tools
- **Kafka**
- **RabbitMQ**
- **ActiveMQ**
- **AWS SNS/SQS**

#### ✅ Characteristics
| Feature             | Description                                 |
|---------------------|---------------------------------------------|
| Latency             | Decoupled and often faster at scale         |
| Coupling            | Loosely coupled                             |
| Use Case            | Notifications, audit logs, batch processing |
| Examples            | Kafka consumers/producers, message queues   |

#### ✅ Pros
- Decouples producer and consumer
- More resilient and scalable
- Supports retries and message durability

#### ❌ Cons
- Harder to debug
- Requires message brokers
- Eventual consistency required

---

### 🏁 When to Use What?

| Scenario                                  | Recommended Approach     |
|-------------------------------------------|---------------------------|
| Real-time API request (e.g., get user)    | Synchronous (REST, Feign) |
| Order placed → trigger email              | Asynchronous (Kafka)      |
| Update one service and notify others      | Asynchronous (Events)     |
| Chained workflow (needs data immediately) | Synchronous               |

---

### ⚙️ Best Practices

- Use **DTOs** for inter-service contracts
- Implement **Circuit Breakers** in sync calls
- Use **Idempotency** for retries in async events
- Design for **eventual consistency**

---

### 📈 Common Tools in Spring Boot

| Purpose             | Tool/Library                  |
|---------------------|-------------------------------|
| REST Client         | `RestTemplate`, `WebClient`   |
| Declarative Client  | `FeignClient`                 |
| Messaging           | `Spring Kafka`, `RabbitMQ`    |
| Observability       | `Sleuth`, `Zipkin`, `Micrometer` |
| Retry/Fallback      | `Resilience4j`, `RetryTemplate` |

---
<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/a2a0bc6c-eebb-40dd-bac9-684c040dd121" />

# 🔁 Synchronous Inter-Service Communication in Spring Boot

Microservices often need to communicate with each other. In Spring Boot, the most commonly used tools for synchronous REST communication are:

- ✅ `RestTemplate` (imperative & legacy)
- ✅ `FeignClient` (declarative & modern)
- ✅ `WebClient` (reactive but usable in sync mode with `.block()`)

---

## 📦 1. RestTemplate

### 🔍 What is RestTemplate?

`RestTemplate` is a synchronous HTTP client provided by Spring to perform REST operations such as `GET`, `POST`, `PUT`, `DELETE`, etc.  
It is **imperative**, **blocking**, and **was the standard** before WebClient and Feign came into play.

> ⚠️ Deprecated in Spring 6+ and Spring Boot 3.x — replaced by `WebClient`.

---

### ✅ Use Case

Used in traditional Spring Boot applications where blocking I/O is acceptable.

---

### 🧩 Example: Calling Another Microservice

```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/{orderId}")
    public Order getOrderWithUser(@PathVariable String orderId) {
        Order order = new Order(orderId, "Mobile");

        // Calling user-service synchronously
        User user = restTemplate.getForObject("http://USER-SERVICE/users/1", User.class);
        order.setUser(user);

        return order;
    }
}
```
🛠️ Configuration

  ```java
    @Configuration
    public class RestTemplateConfig {
        
        @Bean
        @LoadBalanced // Enables Eureka service discovery
        public RestTemplate restTemplate() {
            return new RestTemplate();
        }
    }
```
### 📌 Key Points

-   🔗 Supports service discovery with `@LoadBalanced`
    
-   ⛔ Blocking – not suitable for high-throughput or reactive systems
    
-   📉 Deprecated in Spring 6 — avoid for new development
    
-   🛠 Requires manual error handling, retries, timeouts, etc.

## 📘 2. FeignClient

### 🔍 What is Feign?

`FeignClient` is a declarative HTTP client from Netflix, integrated into Spring Cloud. It allows you to write **Java interfaces** for REST endpoints, removing boilerplate code.

### ✅ Why Use Feign?

-   Declarative → No boilerplate
    
-   Built-in Eureka + Ribbon integration
    
-   Easy integration with Resilience4j for fault tolerance

### 🧩 Example: Create Interface for User Service

```java
@FeignClient(name = "USER-SERVICE")
public interface UserClient {
    
    @GetMapping("/users/{id}")
    User getUserById(@PathVariable("id") String id);
}

```
🧩 Use in Controller
```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private UserClient userClient;

    @GetMapping("/{orderId}")
    public Order getOrderWithUser(@PathVariable String orderId) {
        Order order = new Order(orderId, "Laptop");

        User user = userClient.getUserById("1");
        order.setUser(user);

        return order;
    }
}

```
🛠️ Configuration
```java
@SpringBootApplication
@EnableFeignClients
public class OrderServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(OrderServiceApplication.class, args);
    }
}

```
### 📌 Key Points

-   ✅ Declarative HTTP client – clean and minimal
    
-   ✅ Integrates easily with Eureka and Ribbon
    
-   ✅ Supports fallback and retries using `Resilience4j` or `Hystrix`
    
-   ⚠ Still blocking – uses underlying `RestTemplate` or `HttpClient`

## ⚡ 3. WebClient

### 🔍 What is WebClient?

`WebClient` is a non-blocking, reactive HTTP client introduced in Spring WebFlux (Spring 5+).  
Even though it’s **asynchronous**, it can be used **synchronously** with `.block()` method.

----------

### ✅ Why Use WebClient?

-   Supports both synchronous and asynchronous calls
    
-   Powerful and customizable (headers, cookies, filters)
    
-   Non-blocking by nature
    
-   Recommended replacement for `RestTemplate`
    

----------

### 🧩 Example: Synchronous WebClient Call
```java
@RestController
@RequestMapping("/orders")
public class OrderController {

    @Autowired
    private WebClient.Builder webClientBuilder;

    @GetMapping("/{orderId}")
    public Order getOrderWithUser(@PathVariable String orderId) {
        Order order = new Order(orderId, "Tablet");

        User user = webClientBuilder.build()
            .get()
            .uri("http://USER-SERVICE/users/1")
            .retrieve()
            .bodyToMono(User.class)
            .block(); // Makes it synchronous

        order.setUser(user);
        return order;
    }
}

```
🛠️ Configuration
```java
@Configuration
public class WebClientConfig {

    @Bean
    @LoadBalanced
    public WebClient.Builder webClientBuilder() {
        return WebClient.builder();
    }
}

```
### 📌 Key Points

-   ✅ Recommended for both blocking and non-blocking use
    
-   ✅ Ideal for reactive, streaming, or modern microservices
    
-   ⚠ Using `.block()` makes it synchronous (beware of blocking threads)
    
-   🔄 Supports retries, timeouts, filters, authentication, etc.

📊 Comparison Table
## 📊 Comparison Table

| Feature           | RestTemplate                 | FeignClient                  | WebClient                              |
|-------------------|------------------------------|------------------------------|----------------------------------------|
| Style             | Imperative                   | Declarative                  | Reactive (synchronous with `.block()`) |
| Boilerplate       | High                         | Low                          | Medium                                 |
| Service Discovery | ✅ With `@LoadBalanced`       | ✅ Built-in with Eureka       | ✅ With `@LoadBalanced`                 |
| Load Balancing    | ✅ Ribbon/Spring LoadBalancer | ✅ Ribbon/Spring LoadBalancer | ✅ Ribbon/Spring LoadBalancer           |
| Retry/Fallback    | ❌ Manual                     | ✅ With Resilience4j/Hystrix  | ⚠ Manual (or reactor-retry)            |
| Reactive Support  | ❌ No                         | ❌ No                         | ✅ Yes                                  |
| Spring Boot 3+    | ❌ Deprecated                 | ✅ Supported                  | ✅ Recommended                          |
| Performance       | Blocking                     | Blocking                     | Non-blocking (unless `.block()` used)  |
| Best Use Case     | Legacy apps                  | Spring Cloud apps            | Reactive, modern microservices         |

## 🚀 Bonus Tips

-   ✅ Secure calls using JWT token passing via headers
    
-   ✅ Add timeout and retry config for external service calls
    
-   ✅ Use WebClient in `@Async` or reactive pipelines for scalability
    
-   ✅ Always set timeouts for RestTemplate or WebClient to avoid thread starvation
    
-   ✅ Use `FeignErrorDecoder` for structured error handling in Feign


