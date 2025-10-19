
# Java Inheritance: Complete Tutorial with Memory Visualization

## Table of Contents

1.  [Core Concept & Analogy](#core-concept--analogy)
2.  [Memory Architecture](#memory-architecture)
3.  [Types of Inheritance](#types-of-inheritance)
4.  [Technical Implementation](#technical-implementation)

----------

## Core Concept & Analogy

### Real-World Analogy: The Blueprint Hierarchy

Imagine you're designing vehicles:

**🏭 Base Vehicle (Parent Class)**

-   Every vehicle has: wheels, engine, steering
-   Every vehicle can: start(), stop(), accelerate()

**🚗 Car extends Vehicle (Child Class)**

-   Inherits: wheels, engine, steering
-   Adds: trunk, airbags
-   Adds: openTrunk(), deployAirbags()

**🏎️ SportsCar extends Car (Grandchild Class)**

-   Inherits: everything from Vehicle + Car
-   Adds: turboCharger, spoiler
-   Adds: activateTurbo(), adjustSpoiler()

This is **inheritance** - each level inherits and extends the previous one's capabilities.

----------

## Memory Architecture

### How Objects Live in Memory

```java
HEAP MEMORY LAYOUT
==================

When you create: SportsCar myCar = new SportsCar();

┌─────────────────────────────────────────┐
│         HEAP MEMORY                     │
├─────────────────────────────────────────┤
│                                         │
│  Object Instance @ 0x1234              │
│  ┌───────────────────────────────────┐ │
│  │   Vehicle Part (Superclass)       │ │
│  │   ├─ wheels: 4                    │ │
│  │   ├─ engine: "V8"                 │ │
│  │   └─ speed: 0                     │ │
│  ├───────────────────────────────────┤ │
│  │   Car Part (Subclass)             │ │
│  │   ├─ trunk: "closed"              │ │
│  │   └─ airbags: true                │ │
│  ├───────────────────────────────────┤ │
│  │   SportsCar Part (Leaf Subclass)  │ │
│  │   ├─ turboCharger: "installed"    │ │
│  │   └─ spoiler: "retracted"         │ │
│  └───────────────────────────────────┘ │
│                                         │
└─────────────────────────────────────────┘

STACK MEMORY
============
│ myCar │ ──────→ [0x1234] (reference to heap object)
```

**Key Insight**: A single object contains ALL inherited fields stacked together in memory. There's only ONE object, not multiple objects glued together.

----------

## Types of Inheritance

### 1. Single Inheritance

```
   Animal
     ↓
    Dog
```

One child extends one parent.

### 2. Multilevel Inheritance

```
   Animal
     ↓
    Dog
     ↓
  Bulldog
```

Chain of inheritance.

### 3. Hierarchical Inheritance

```
      Animal
     ↙  ↓  ↘
   Dog Cat Bird
```

Multiple children from one parent.

### 4. ❌ Multiple Inheritance (NOT in Java)

```
    Father   Mother
       ↘     ↙
        Child
```

Java doesn't support this with classes (uses interfaces instead).

**Why Not?** The Diamond Problem:

```java
      A
    ↙   ↘
   B     C
    ↘   ↙
      D
```

If B and C both override a method from A, which version does D inherit?

----------

## Technical Implementation

### Basic Syntax

java

```java
// Parent Class (Superclass/Base Class)
class Vehicle {
    // Fields
    protected String brand;
    protected int speed;
    
    // Constructor
    public Vehicle(String brand) {
        this.brand = brand;
        this.speed = 0;
        System.out.println("Vehicle constructor called");
    }
    
    // Methods
    public void start() {
        System.out.println(brand + " is starting...");
    }
    
    public void accelerate(int increment) {
        speed += increment;
        System.out.println("Speed: " + speed + " km/h");
    }
}

// Child Class (Subclass/Derived Class)
class Car extends Vehicle {
    // Additional fields
    private int numberOfDoors;
    
    // Constructor
    public Car(String brand, int doors) {
        super(brand);  // Call parent constructor
        this.numberOfDoors = doors;
        System.out.println("Car constructor called");
    }
    
    // Additional methods
    public void honk() {
        System.out.println(brand + " is honking: BEEP BEEP!");
    }
    
    // Can access inherited methods
    public void displayInfo() {
        start();  // Inherited method
        System.out.println("Doors: " + numberOfDoors);
    }
}
```

### Memory Visualization During Creation

```java
Step 1: Car myCar = new Car("Toyota", 4);

EXECUTION FLOW:
1. JVM allocates memory for the entire object hierarchy
2. Vehicle constructor executes first
3. Car constructor executes second

MEMORY STATE:

┌────────────────────────────────┐
│  Vehicle Part                  │
│  brand = "Toyota" ────────┐    │
│  speed = 0                │    │
├────────────────────────────────┤
│  Car Part                  │    │
│  numberOfDoors = 4         │    │
└────────────────────────────────┘
                              │
STACK:  myCar ───────────────┘
```

----------

## Key Takeaways

1.  **Memory**: Child objects contain all parent fields in a single heap object
2.  **Constructors**: Always execute from parent to child (bottom-up)
3.  **Methods**: Overridden methods use dynamic dispatch (runtime polymorphism)
4.  **Access**: Use `protected` for members you want children to access
5.  **super**: Use to access parent's members and constructors
6.  **final**: Prevents further inheritance or overriding
7.  **Abstract**: Defines contracts for child classes to implement

## Best Practices

✓ Use inheritance for IS-A relationships  
✓ Favor composition over inheritance when appropriate  
✓ Keep inheritance hierarchies shallow (3-4 levels max)  
✓ Always use @Override annotation  
✓ Make parent class fields protected, not public  
✓ Document what subclasses should/shouldn't override
