
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

## 🔷 6. Best Practices

-   Follow **Single Responsibility Principle** per service
    
-   Use **DTOs** to decouple internal models
    
-   Avoid direct database calls between services
    
-   Implement **centralized logging & tracing**
    
-   Secure APIs with **JWT/OAuth2**
    
-   Maintain **backward compatibility** in APIs
## 🔷 7. Challenges in Microservices

-   Complex inter-service communication
    
-   Distributed transactions → solved via **Saga Pattern**
    
-   Debugging → use **Sleuth + Zipkin**
    
-   Configuration management → use **Spring Cloud Config**
    
-   Data consistency → use **event-driven architecture**

## 🔷 8. Typical Spring Boot Microservices Project Structure


microservices/
│
├── api-gateway/          --> Spring Cloud Gateway
├── config-server/        --> Centralized Configs
├── discovery-server/     --> Eureka Service Registry
├── user-service/         --> Sample Microservice (REST + JPA)
├── order-service/        --> Another Microservice
└── common-lib/           --> DTOs, Constants, Utils

🔷 9. Common Spring Annotations for Microservices
Annotation

Purpose

`@SpringBootApplication`

Main class to bootstrap the app

`@EnableEurekaClient`

Register service with Eureka

`@EnableFeignClients`

Enables Feign client usage

`@EnableDiscoveryClient`

Enables service discovery

`@RestController`

Marks class as a REST controller
