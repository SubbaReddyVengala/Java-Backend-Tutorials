
# Object-Oriented Programming (OOP) Concepts in Java

Object-Oriented Programming is a programming paradigm that organizes code around objects and data rather than functions and logic. Java is fundamentally object-oriented, making these concepts essential to understand.

## **The Four Pillars of OOP**

1.  **Encapsulation**
2.  **Inheritance**
3.  **Polymorphism**
4.  **Abstraction**

----------

## 1. **Class and Object**

### **Class**

A blueprint or template for creating objects. It defines properties (attributes) and behaviors (methods).
``` java
public class Car {
    // Attributes (Properties)
    String brand;
    String model;
    int year;
    
    // Method (Behavior)
    public void start() {
        System.out.println("Car is starting...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
    }
}
```
### **Object**

An instance of a class. It represents a real-world entity.
``` java
public class Main {
    public static void main(String[] args) {
        // Creating objects
        Car car1 = new Car();
        car1.brand = "Toyota";
        car1.model = "Camry";
        car1.year = 2023;
        
        Car car2 = new Car();
        car2.brand = "Honda";
        car2.model = "Civic";
        car2.year = 2022;
        
        // Using objects
        car1.displayInfo();
        car1.start();
    }
}
```
# Classes and Objects in Java - A Complete Guide with Analogies

Let me explain Classes and Objects using a relatable analogy and then dive into the technical details.
## 🏗️ The Blueprint Analogy

**Think of a Class as a blueprint for a house, and Objects as the actual houses built from that blueprint.**

-   **Class (Blueprint)**: Defines what features a house should have (rooms, doors, color) and what it can do (open doors, turn on lights)
-   **Object (Actual House)**: A real house built from the blueprint. You can build multiple houses from the same blueprint, each with different characteristics (one red, one blue, different addresses)

----------

## Understanding Classes

A **class** is a template or blueprint that defines:

-   **Attributes (fields/properties)**: What the object _has_ (data)
-   **Methods (behaviors)**: What the object _can do_ (functions)

### Syntax of a Class
``` java
class ClassName {
    // Attributes (instance variables)
    dataType attribute1;
    dataType attribute2;
    
    // Constructor
    ClassName(parameters) {
        // Initialize attributes
    }
    
    // Methods (behaviors)
    returnType methodName(parameters) {
        // Method body
    }
}
```
## Understanding Objects

An **object** is a specific instance of a class - a real entity created from the blueprint with actual values.

### Creating Objects
``` java
ClassName objectName = new ClassName(arguments);

```
### 🧱 Car Class — Blueprint for Creating Car Objects
``` java
// Car Class - Blueprint for creating car objects
class Car {
    // ========== ATTRIBUTES (Instance Variables) ==========
    // These define what properties each car object will have
    String brand;
    String model;
    int year;
    String color;
    double price;
    int speed;
    boolean isEngineOn;
    
    // ========== CONSTRUCTOR ==========
    // Special method to initialize objects when they're created
    // Constructor name must match class name
    
    // Default Constructor (no parameters)
    Car() {
        this.brand = "Unknown";
        this.model = "Unknown";
        this.year = 2024;
        this.color = "White";
        this.price = 0.0;
        this.speed = 0;
        this.isEngineOn = false;
    }
    
    // Parameterized Constructor
    Car(String brand, String model, int year, String color, double price) {
        this.brand = brand;      // 'this' refers to current object
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.speed = 0;
        this.isEngineOn = false;
    }
    
    // ========== METHODS (Behaviors) ==========
    // These define what actions car objects can perform
    
    // Method to start the engine
    void startEngine() {
        if (!isEngineOn) {
            isEngineOn = true;
            System.out.println(brand + " " + model + "'s engine started. Vroom!");
        } else {
            System.out.println("Engine is already running.");
        }
    }
    
    // Method to stop the engine
    void stopEngine() {
        if (isEngineOn) {
            isEngineOn = false;
            speed = 0;
            System.out.println(brand + " " + model + "'s engine stopped.");
        } else {
            System.out.println("Engine is already off.");
        }
    }
    
    // Method to accelerate
    void accelerate(int increment) {
        if (isEngineOn) {
            speed += increment;
            System.out.println("Accelerating... Current speed: " + speed + " km/h");
        } else {
            System.out.println("Start the engine first!");
        }
    }
    
    // Method to brake
    void brake(int decrement) {
        if (speed > 0) {
            speed -= decrement;
            if (speed < 0) speed = 0;
            System.out.println("Braking... Current speed: " + speed + " km/h");
        } else {
            System.out.println("Car is already stopped.");
        }
    }
    
    // Method to display car information
    void displayInfo() {
        System.out.println("\n===== Car Information =====");
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Color: " + color);
        System.out.println("Price: $" + price);
        System.out.println("Current Speed: " + speed + " km/h");
        System.out.println("Engine Status: " + (isEngineOn ? "ON" : "OFF"));
        System.out.println("===========================\n");
    }
    
    // Method that returns a value
    double calculateDepreciation(int years) {
        double depreciationRate = 0.15; // 15% per year
        double currentValue = price;
        for (int i = 0; i < years; i++) {
            currentValue -= currentValue * depreciationRate;
        }
        return currentValue;
    }
    
    // Method with boolean return type
    boolean isVintage() {
        int currentYear = 2024;
        return (currentYear - year) >= 25;
    }
}

```
### 🧪 Main Class — Testing the Car Class
``` java
// ========== MAIN CLASS TO TEST ==========
public class CarDemo {
    public static void main(String[] args) {
        System.out.println("=== Creating Car Objects ===\n");
        
        // Creating object using parameterized constructor
        Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
        
        // Creating object using default constructor
        Car car2 = new Car();
        
        // Creating another object with different values
        Car car3 = new Car("Tesla", "Model 3", 2023, "Red", 45000);
        
        // ========== Using Objects ==========
        
        // Display information about car1
        car1.displayInfo();
        
        // Perform operations on car1
        car1.startEngine();
        car1.accelerate(50);
        car1.accelerate(30);
        car1.brake(20);
        car1.stopEngine();
        
        System.out.println("\n--- After operations ---");
        car1.displayInfo();
        
        // Calculate depreciation
        double valueAfter5Years = car1.calculateDepreciation(5);
        System.out.println("Value after 5 years: $" + 
                          String.format("%.2f", valueAfter5Years));
        
        // Check if vintage
        System.out.println("Is car1 vintage? " + car1.isVintage());
        
        System.out.println("\n================================\n");
        
        // Working with car2 (default values)
        car2.displayInfo();
        
        System.out.println("\n================================\n");
        
        // Working with car3
        car3.displayInfo();
        car3.startEngine();
        car3.accelerate(100);
        car3.displayInfo();
        
        // ========== Demonstrating Object Independence ==========
        System.out.println("\n=== Object Independence ===");
        System.out.println("car1 speed: " + car1.speed + " km/h");
        System.out.println("car3 speed: " + car3.speed + " km/h");
        System.out.println("Each object has its own data!");
        
        // ========== Accessing and Modifying Attributes ==========
        System.out.println("\n=== Direct Attribute Access ===");
        car1.color = "Blue";  // Changing car1's color
        System.out.println("car1's new color: " + car1.color);
        System.out.println("car3's color remains: " + car3.color);
    }
}

```
## 🔑 Key Concepts Explained

### 1. **The `this` Keyword**

java

```java
this.brand = brand;
```
-   `this` refers to the current object
-   Used to distinguish between instance variables and parameters with the same name
-   **Analogy**: Like saying "MY brand" vs just "brand"

### 2. **Constructors**

-   Special methods that initialize objects
-   Called automatically when you use the `new` keyword
-   Same name as the class, no return type
-   **Analogy**: The construction crew that builds your house according to specifications

**Types:**

-   **Default Constructor**: No parameters, sets default values
-   **Parameterized Constructor**: Accepts values to customize the object

### 3. **Instance Variables vs Local Variables**
``` java
class Example {
    int instanceVar;  // Instance variable (belongs to object)
    
    void method() {
        int localVar;  // Local variable (exists only in method)
    }
}
```
### 4. **Methods**

Functions that define what objects can do. Components:

-   **Return Type**: What the method gives back (void means nothing)
-   **Method Name**: What you call it
-   **Parameters**: Input values
-   **Method Body**: The actual code

----------

## 🎯 Real-World Analogies for Better Understanding

### Cookie Cutter Analogy

-   **Class**: Cookie cutter (the shape/template)
-   **Object**: Actual cookies made from that cutter
-   Each cookie can be decorated differently (different attribute values)

### Student Class Example
``` java
class Student {
    String name;
    int rollNumber;
    double grade;
    
    void study() {
        System.out.println(name + " is studying");
    }
}

// Creating student objects
Student student1 = new Student();
student1.name = "Alice";
student1.rollNumber = 101;

Student student2 = new Student();
student2.name = "Bob";
student2.rollNumber = 102;
```
----------

## 📊 Memory Representation

When you create objects:
``` java
Car myCar = new Car("Honda", "Civic", 2023, "Black", 25000);
```

**What happens in memory:**
1. **Heap Memory**: Object data is stored (brand, model, year, etc.)
2. **Stack Memory**: Reference variable `myCar` stores the memory address
3. `myCar` points to the actual object in heap memory

**Visual:**
``` java
Stack              Heap
------            -------
myCar  ------>   [Car Object]
                  brand: "Honda"
                  model: "Civic"
                  year: 2023
                  color: "Black"
                  price: 25000
                
  ```
  ## 🎓 Important Principles

### 1. **Encapsulation** (Preview)

In real applications, you should make attributes private and use getter/setter methods:
``` java
class Car {
    private String brand;  // Can't access directly from outside
    
    public String getBrand() {
        return brand;
    }
    
    public void setBrand(String brand) {
        this.brand = brand;
    }
}
```
### 2. **Multiple Objects**

-   One class can create unlimited objects
-   Each object has its own copy of instance variables
-   Objects are independent

### 3. **Null Reference**
``` java
Car car = null;  // Reference exists, but no object yet
car = new Car(); // Now it points to an actual object
```
## 🏆 Benefits of Classes and Objects

1.  **Reusability**: Write once, create many objects
2.  **Organization**: Group related data and behaviors
3.  **Real-World Modeling**: Represents real entities naturally
4.  **Maintainability**: Easy to update and modify
5.  **Security**: Can hide internal details (encapsulation)


# Deep Dive: Understanding the Car Class in Detail

Let me break down this code section by section with detailed explanations and analogies!

----------

## 🏗️ Part 1: ATTRIBUTES (Instance Variables)

java

```java
class Car {
    String brand;
    String model;
    int year;
    String color;
    double price;
    int speed;
    boolean isEngineOn;
```

### What Are Attributes?

**Analogy**: Think of attributes as the **characteristics written on an ID card** for each car.

- **Instance Variables**: Variables that belong to each individual object
- **Why "Instance"?**: Each instance (object) has its own copy of these variables
- **Scope**: These exist as long as the object exists

### Detailed Breakdown:

| Attribute | Type | Purpose | Example Value |
|-----------|------|---------|---------------|
| `brand` | String | Manufacturer name | "Toyota" |
| `model` | String | Car model name | "Camry" |
| `year` | int | Manufacturing year | 2022 |
| `color` | String | Car color | "Silver" |
| `price` | double | Price in dollars | 35000.0 |
| `speed` | int | Current speed | 0 |
| `isEngineOn` | boolean | Engine state | false |

### Memory Visualization:

When you create `Car car1 = new Car(...)`, memory looks like:
```
car1 Object in Heap:
┌─────────────────────┐
│ brand: "Toyota"     │
│ model: "Camry"      │
│ year: 2022          │
│ color: "Silver"     │
│ price: 35000.0      │
│ speed: 0            │
│ isEngineOn: false   │
└─────────────────────┘
```

Each car object gets its **OWN separate copy** of these variables!

----------

## 🔧 Part 2: CONSTRUCTORS

### What is a Constructor?

**Analogy**: A constructor is like a **factory assembly line** that builds and configures your car when it comes into existence.

**Key Characteristics:**

-   Special method that runs automatically when you create an object
-   Same name as the class (`Car`)
-   No return type (not even `void`)
-   Purpose: Initialize the object's attributes

----------

### Constructor 1: Default Constructor (No Parameters)

java

```java
Car() {
    this.brand = "Unknown";
    this.model = "Unknown";
    this.year = 2024;
    this.color = "White";
    this.price = 0.0;
    this.speed = 0;
    this.isEngineOn = false;
}
```

**When is this used?**

java

```java
Car car2 = new Car();  // No arguments = default constructor
```

**Step-by-Step Execution:**

1. Memory is allocated for a new Car object
2. Constructor runs automatically
3. All attributes are set to default values
4. Object is ready to use

**Result:**
```
car2:
- brand: "Unknown"
- model: "Unknown"
- year: 2024
- color: "White"
- price: 0.0
- speed: 0
- isEngineOn: false
```

**Real-World Analogy**: Ordering a car without customization - you get the standard package.

----------

### Constructor 2: Parameterized Constructor

java

```java
Car(String brand, String model, int year, String color, double price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.speed = 0;
    this.isEngineOn = false;
}
```

**When is this used?**

java

```java
Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
```

### Understanding `this` Keyword:

java

```java
this.brand = brand;
```

**Why do we need `this`?**

Without `this`:

java

```java
// CONFUSING - which brand is which?
brand = brand;
```

With `this`:

java

```java
// CLEAR!
this.brand = brand;
//   ↑         ↑
//   |         |
//   |         Parameter (input from user)
//   Instance variable (object's property)
```

**Analogy**: 
- `this.brand` = "**MY** brand" (the car object's brand)
- `brand` = "the brand **you told me**" (parameter)

### Parameter Matching Flow:
```
Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
                      ↓         ↓       ↓       ↓        ↓
                   brand     model    year   color    price
                      ↓         ↓       ↓       ↓        ↓
              this.brand  this.model this.year this.color this.price
                      ↓         ↓       ↓       ↓        ↓
                  Stored in car1 object's memory
```

----------

## 🎬 Part 3: METHODS (Behaviors)

Methods define **what the object can DO**. Let's examine each type:

----------

### Method Type 1: Void Methods (No Return Value)

#### Example: `startEngine()`

java

```java
void startEngine() {
    if (!isEngineOn) {
        isEngineOn = true;
        System.out.println(brand + " " + model + "'s engine started. Vroom!");
    } else {
        System.out.println("Engine is already running.");
    }
}
```

**Breakdown:**

| Part | Explanation |
|------|-------------|
| `void` | Returns nothing, just performs an action |
| `startEngine()` | Method name, no parameters needed |
| `!isEngineOn` | Checks if engine is OFF (! means NOT) |
| `isEngineOn = true` | Changes the state of the object |

**Execution Flow:**
```
Call: car1.startEngine()
  ↓
Check: Is engine off?
  ↓
YES → Turn engine on
    → Print success message
  ↓
NO → Print "already running"
```

**Real-World Analogy**: Pressing the start button in your car - it performs an action and changes the car's state.

----------

### Method Type 2: Methods with Parameters

#### Example: `accelerate(int increment)`

java

```java
void accelerate(int increment) {
    if (isEngineOn) {
        speed += increment;
        System.out.println("Accelerating... Current speed: " + speed + " km/h");
    } else {
        System.out.println("Start the engine first!");
    }
}
```

**How Parameters Work:**

java

```java
car1.accelerate(50);
//              ↓
//        increment = 50
//              ↓
//      speed += 50  (speed = speed + 50)
```

**Example Scenario:**
```
Initial: speed = 0
car1.accelerate(50) → speed = 50
car1.accelerate(30) → speed = 80
car1.brake(20)      → speed = 60
```

**Visual State Changes:**
```
car1 initially:
speed: 0, isEngineOn: false

car1.startEngine()
speed: 0, isEngineOn: true

car1.accelerate(50)
speed: 50, isEngineOn: true

car1.accelerate(30)
speed: 80, isEngineOn: true
```

----------

### Method Type 3: Methods that Return Values

#### Example: `calculateDepreciation(int years)`

java

```java
double calculateDepreciation(int years) {
    double depreciationRate = 0.15;
    double currentValue = price;
    for (int i = 0; i < years; i++) {
        currentValue -= currentValue * depreciationRate;
    }
    return currentValue;
}
```

**Key Components:**

| Part | Explanation |
|------|-------------|
| `double` | Return type - gives back a number |
| `calculateDepreciation` | Method name |
| `(int years)` | Takes number of years as input |
| `return currentValue` | Sends the calculated value back |

**Mathematical Flow:**
```
Initial price: $35,000
Year 1: $35,000 - ($35,000 × 0.15) = $29,750
Year 2: $29,750 - ($29,750 × 0.15) = $25,287.50
Year 3: $25,287.50 - ($25,287.50 × 0.15) = $21,494.38
...and so on
```

**How to Use Return Values:**

java

```java
// Store the returned value
double valueAfter5Years = car1.calculateDepreciation(5);
System.out.println("Value: $" + valueAfter5Years);

// Or use directly
System.out.println("Value: $" + car1.calculateDepreciation(5));
```

----------

#### Example: `isVintage()` - Boolean Return

java

```java
boolean isVintage() {
    int currentYear = 2024;
    return (currentYear - year) >= 25;
}
```

**Logic:**
```
If car is from 1999 or earlier → TRUE (vintage)
If car is from 2000 or later   → FALSE (not vintage)
```

**Usage:**

java

```java
if (car1.isVintage()) {
    System.out.println("This is a vintage car!");
} else {
    System.out.println("This is a modern car.");
}
```

----------

## 🚀 Part 4: USING THE CLASS (Main Method)

### Creating Objects

java

```java
Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
```

**What happens behind the scenes:**
```
Step 1: Allocate memory in heap
Step 2: Call constructor with parameters
Step 3: Initialize all attributes
Step 4: Return memory address to car1
Step 5: car1 now "points to" the object
```

**Three Different Objects:**

java

```java
Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
Car car2 = new Car();  // Default values
Car car3 = new Car("Tesla", "Model 3", 2023, "Red", 45000);
```

**Memory Layout:**
```
Stack (References)          Heap (Actual Objects)
┌────────┐                 ┌─────────────────────┐
│  car1  │───────────────→ │ Toyota Camry 2022   │
└────────┘                 │ Silver, $35000      │
                           └─────────────────────┘
┌────────┐                 
│  car2  │───────────────→ ┌─────────────────────┐
└────────┘                 │ Unknown Unknown     │
                           │ 2024, White, $0     │
                           └─────────────────────┘
┌────────┐                 
│  car3  │───────────────→ ┌─────────────────────┐
└────────┘                 │ Tesla Model 3 2023  │
                           │ Red, $45000         │
                           └─────────────────────┘
```

----------

### Calling Methods

java

```java
car1.displayInfo();    // Shows car details
car1.startEngine();    // Changes isEngineOn to true
car1.accelerate(50);   // Changes speed to 50
```

**Dot Notation Explained:**
```
car1.startEngine()
  ↑       ↑
  |       |
  |       Method name
  |
  Object you're calling the method on
```

**Analogy**: `car1.startEngine()` is like saying "Hey car1, start your engine!"

----------

### Object Independence

java

```java
car1.accelerate(50);  // car1 speed = 50
car3.accelerate(100); // car3 speed = 100

System.out.println(car1.speed);  // Prints: 50
System.out.println(car3.speed);  // Prints: 100
```

**Key Point**: Each object has its OWN copy of all attributes. Changing car1 doesn't affect car3!
```
car1: speed = 50     car3: speed = 100
      ↑                    ↑
      |                    |
   Separate              Separate
   Memory                Memory
```

----------

## 🎯 Complete Execution Example

Let's trace what happens when you run this code:

java

```java
Car car1 = new Car("Toyota", "Camry", 2022, "Silver", 35000);
car1.startEngine();
car1.accelerate(50);
```

**Step-by-Step:**
```
1. CREATE OBJECT
   ✓ Memory allocated
   ✓ Constructor runs
   ✓ brand = "Toyota", model = "Camry", etc.
   ✓ speed = 0, isEngineOn = false

2. car1.startEngine()
   ✓ Check: isEngineOn == false? YES
   ✓ Set: isEngineOn = true
   ✓ Print: "Toyota Camry's engine started. Vroom!"

3. car1.accelerate(50)
   ✓ Check: isEngineOn == true? YES
   ✓ Calculate: speed = 0 + 50 = 50
   ✓ Print: "Accelerating... Current speed: 50 km/h"
```

----------

## 📊 Key Takeaways

### 1. **Class vs Object**

-   **Class**: Template/blueprint (defines structure)
-   **Object**: Actual instance (has real data)

### 2. **Attributes**

-   Store the STATE of an object
-   Each object has its own copy

### 3. **Constructors**

-   Initialize objects when created
-   Can have multiple constructors (overloading)

### 4. **Methods**

-   Define BEHAVIOR
-   Can change object state
-   Can return values or just perform actions

### 5. **The `this` Keyword**

-   Refers to the current object
-   Resolves naming conflicts

### 6. **Object Independence**

-   Each object is separate
-   Changes to one don't affect others

----------

