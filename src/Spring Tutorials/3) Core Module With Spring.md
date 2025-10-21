
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
