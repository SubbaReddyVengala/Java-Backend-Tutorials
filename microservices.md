
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
```
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
    
```
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

```
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

 


