
🧩 **What is a Variable in Java?**

A **variable** is a container that holds data which can be changed during program execution.

👉 Think of it like a **container or box** with a name, which holds a value
🏠 **House Analogy:** Variables are like storage spaces in a house:

-   **Refrigerator** (holds food - value changes)
-   **Wallet** (holds money - amount varies)
-   **Thermometer** (holds temperature - reading changes)
-   **Clock** (holds time - constantly updating)

### 🧠 **Analogy**
Imagine you have a **locker** with a name tag —  
🗝️ The **locker name** is the variable name,  
📦 The **content inside** is the variable value,  
🏦 And the **locker address** is where it’s stored in memory

Variable Declaration Syntax
```java
dataType variableName = value;
```
Example:
```java
int age = 25;              // Declaration + Initialization
String name = "John";
double salary;             // Declaration only
salary = 50000.50;         // Initialization later
String name = "Subba";
int year = 2025;
double weight = 80.5;

```
Example:
```java
int age = 25;
```
Here:

-   `int` → Data type (what kind of data it holds)
    
-   `age` → Variable name (identifier)
    
-   `25` → Value stored in memory

## **Types of Variables in Java**

### **1. Local Variables** 📦

### **2. Instance Variables (Non-Static)** 🏠

### **3. Static Variables (Class Variables)** 🏛️

----------
## **1. Local Variables** 📦
**Defined:** Declared inside a method, constructor, or block.
### **Characteristics:**
-   ✅ Created when method is called
-   ✅ Destroyed when method exits
-   ✅ **Must be initialized** before use
-   ✅ No default value
-   ✅ No access modifiers allowed
-   ✅ Stored in **Stack memory**

🏠 **House Analogy:** **Grocery bags** you bring home

-   You carry them in (method starts)
-   Use items while cooking (method execution)
-   Throw bags away when done (method ends)
-   Temporary storage, not permanent

Example:
```java
public class House {
    
    public void cookDinner() {
        // Local variables - exist only in this method
        int eggs = 6;           // Must initialize before use
        String recipe = "Omelet";
        double cookingTime = 15.5;
        
        System.out.println("Cooking " + recipe);
        // eggs, recipe, cookingTime destroyed after method ends
    }
    
    public void bakeCake() {
        // Cannot access eggs, recipe from cookDinner()
        // System.out.println(eggs); // ❌ ERROR
        
        int flour = 500;  // Different local variable
    }
}
```
Scope:
```java
public void example() {
    int x = 10;        // Scope: entire method
    
    if (x > 5) {
        int y = 20;    // Scope: only inside if block
        System.out.println(x);  // ✅ Can access x
        System.out.println(y);  // ✅ Can access y
    }
    
    System.out.println(x);  // ✅ Can access x
    // System.out.println(y);  // ❌ ERROR - y doesn't exist here
}
```
## **2. Instance Variables (Non-Static)** 🏠

**Defined:** Declared inside a class but outside any method. Each object has its own copy.

### **Characteristics:**

-   ✅ Created when object is created (`new` keyword)
-   ✅ Destroyed when object is garbage collected
-   ✅ **Has default values** if not initialized
-   ✅ Can use access modifiers (private, public, protected)
-   ✅ Stored in **Heap memory**
-   ✅ Each object has separate copy

🏠 **House Analogy:** **Furniture in YOUR house**

-   Each house has its own furniture
-   Your sofa is different from neighbor's sofa
-   Exists as long as house exists
-   Different houses (objects) have different furniture (values)

### **Example:**
```java
public class House {
    
    // Instance variables - each house has its own
    String ownerName;           // Default: null
    int numberOfRooms;          // Default: 0
    double area;                // Default: 0.0
    boolean hasGarden;          // Default: false
    
    // Constructor
    public House(String owner, int rooms) {
        this.ownerName = owner;
        this.numberOfRooms = rooms;
    }
    
    public void displayInfo() {
        // Can access instance variables anywhere in class
        System.out.println("Owner: " + ownerName);
        System.out.println("Rooms: " + numberOfRooms);
    }
}

// Usage:
public class Main {
    public static void main(String[] args) {
        // Each object has its own copy of instance variables
        House house1 = new House("Subba", 3);
        House house2 = new House("Reddy", 5);
        
        // house1's variables are independent of house2's
        System.out.println(house1.ownerName);  // Subba
        System.out.println(house2.ownerName);  // Reddy
    }
}
```
### **Default Values:**
```java
public class DefaultValues {
    byte b;      // 0
    short s;     // 0
    int i;       // 0
    long l;      // 0L
    float f;     // 0.0f
    double d;    // 0.0
    char c;      // '\u0000' (null character)
    boolean bl;  // false
    String str;  // null (any object)
}
```
## **3. Static Variables (Class Variables)** 🏛️

**Defined:** Declared with `static` keyword. Shared among all objects of the class.

### **Characteristics:**

-   ✅ Created when class is loaded (program starts)
-   ✅ Destroyed when program ends
-   ✅ **Only ONE copy** shared by all objects
-   ✅ Can be accessed without creating object
-   ✅ Stored in **Method Area** (special memory)
-   ✅ Use `ClassName.variableName` to access

🏠 **House Analogy:** **City Water Supply / Electricity Grid**

-   One supply for entire city (all houses share)
-   Not individual to each house
-   Exists even if no houses exist
-   All houses use the same source

### **Example:**
```java
public class House {
    
    // Static variable - shared by ALL houses
    static String cityName = "New York";
    static int totalHouses = 0;
    
    // Instance variables - unique to each house
    String ownerName;
    int numberOfRooms;
    
    public House(String owner, int rooms) {
        this.ownerName = owner;
        this.numberOfRooms = rooms;
        totalHouses++;  // Increment shared counter
    }
    
    public void display() {
        System.out.println("Owner: " + ownerName);
        System.out.println("City: " + cityName);  // Shared
        System.out.println("Total houses: " + totalHouses);  // Shared
    }
}

// Usage:
public class Main {
    public static void main(String[] args) {
        // Access static variable without object
        System.out.println(House.cityName);  // New York
        System.out.println(House.totalHouses);  // 0
        
        House h1 = new House("John", 3);
        House h2 = new House("Sarah", 5);
        House h3 = new House("Mike", 4);
        
        // All objects share the same static variable
        System.out.println(House.totalHouses);  // 3
        System.out.println(h1.totalHouses);     // 3 (not recommended)
        System.out.println(h2.totalHouses);     // 3 (not recommended)
        
        // Change static variable - affects all
        House.cityName = "Los Angeles";
        h1.display();  // Shows Los Angeles
        h2.display();  // Shows Los Angeles (same value)
    }
}
```
## 🏠 **Code Explanation: `House` Example**

### **1️⃣ Class Structure**
```java
public class House {
    static String cityName = "New York"; // Shared by all houses
    static int totalHouses = 0;          // Shared counter

    String ownerName;    // Unique for each house
    int numberOfRooms;   // Unique for each house
```
-   **`static` variables** (`cityName`, `totalHouses`) belong to the **class**, not individual objects.
    
-   **Instance variables** (`ownerName`, `numberOfRooms`) belong to **each object** separately

2️⃣ Constructor
```java
public House(String owner, int rooms) {
    this.ownerName = owner;
    this.numberOfRooms = rooms;
    totalHouses++;  // increments shared static counter
}
```
-   Every time you create a new `House`, `totalHouses` increases by 1.
    
-   Even though `totalHouses` is not declared with `this`, all objects see the updated shared value.

3️⃣ Display Method
```java
public void display() {
    System.out.println("Owner: " + ownerName);
    System.out.println("City: " + cityName);
    System.out.println("Total houses: " + totalHouses);
}
```
Prints both instance (`ownerName`) and shared (`cityName`, `totalHouses`) values.

4️⃣ Usage in `Main`
```
public class Main {
    public static void main(String[] args) {
        System.out.println(House.cityName);     // ✅ Access static directly via class
        System.out.println(House.totalHouses);  // 0 initially

        House h1 = new House("John", 3);
        House h2 = new House("Sarah", 5);
        House h3 = new House("Mike", 4);
```
When you run this:

-   3 objects are created.
    
-   `totalHouses` becomes `3` because it’s **shared among all**.

5️⃣ Output Before Changing City
```yaml
New York
0
3
3
3
Owner: John
City: Los Angeles
Total houses: 3
Owner: Sarah
City: Los Angeles
Total houses: 3
```
💡 **Visualization**
```pgsql
        +---------------------------+
        |        Class: House       |
        |---------------------------|
        | cityName = "Los Angeles"  |
        | totalHouses = 3           |
        +---------------------------+

        Object h1 → ownerName = John,  numberOfRooms = 3
        Object h2 → ownerName = Sarah, numberOfRooms = 5
        Object h3 → ownerName = Mike,  numberOfRooms = 4
```
All 3 objects point to the same shared `cityName` and `totalHouses`

### ✅ **Key Takeaways**

-   `static` → **shared memory** (class level)
    
-   non-static → **separate memory** (object level)
    
-   Access static variables using **class name**, not object.
    
-   `static` variables are initialized **only once** when the class is loaded.

----------

## **Comparison Table**
