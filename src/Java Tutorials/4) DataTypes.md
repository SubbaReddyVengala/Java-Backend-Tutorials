
# Data Types in Java: 

Java is a **strongly-typed language**, meaning every variable must have a declared type. Let me break down all data types with analogies and examples.

## **Classification of Data Types**
```
Java Data Types
│
├── Primitive Types (8 types) - Store actual values
│   ├── Numeric
│   │   ├── Integer Types (byte, short, int, long)
│   │   └── Floating-Point Types (float, double)
│   ├── Character (char)
│   └── Boolean (boolean)
│
└── Reference Types - Store memory addresses
    ├── Classes
    ├── Interfaces
    ├── Arrays
    └── Enumerations
```
   ## **1. PRIMITIVE DATA TYPES**

### **Analogy: Storage Containers**

Think of primitive types as **different-sized boxes** for storing specific items:

-   A matchbox (byte) for small items
-   A shoebox (short) for medium items
-   A suitcase (int) for regular items
-   A shipping container (long) for large items

----------

### **A. Integer Types** (Whole Numbers)

#### **1. byte** 

``` java
Size: 8 bits (1 byte)
Range: -128 to 127
Default: 0
```
**When to use:** Saving memory in large arrays, file I/O, network protocols
``` java
byte age = 25;
byte temperature = -40;
byte[] fileData = new byte[1024];  // Reading file as bytes

// Real use case: Image processing
byte pixelValue = 255;  // RGB values (0-255)
```
----------

#### **2. short**
``` java
Size: 16 bits (2 bytes)
Range: -32,768 to 32,767
Default: 0
```
**When to use:** Memory optimization when int is too large
``` java
short year = 2025;
short elevation = 8848;  // Mt. Everest height in meters
short[] sensorReadings = new short[10000];
```
``` java 
short year = 2025;
short elevation = 8848;  // Mt. Everest height in meters
short[] sensorReadings = new short[10000];
```
----------
**3. int** ⭐ _Most Commonly Used_
```
Size: 32 bits (4 bytes)
Range: -2,147,483,648 to 2,147,483,647 (±2.1 billion)
Default: 0
```
**When to use:** Default choice for integers
```
int population = 1400000000;  // India's population
int salary = 50000;
int daysInYear = 365;

// Underscores for readability (Java 7+)
int billion = 1_000_000_000;
```
----------

#### **4. long**
```
Size: 64 bits (8 bytes)
Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807
Default: 0L
```
**When to use:** Very large numbers, timestamps, file sizes
```
long worldPopulation = 8_000_000_000L;  // Note: 'L' suffix required
long timestamp = System.currentTimeMillis();  // 1729270800000
long fileSize = 5_000_000_000L;  // 5GB in bytes

// Common mistake:
// long big = 9999999999;  // ERROR! Treated as int first
long big = 9999999999L;    // CORRECT!
```
----------

### **B. Floating-Point Types** (Decimal Numbers)

#### **5. float**
``` java
Size: 32 bits (4 bytes)
Range: ±3.4e38 (approximately 6-7 decimal digits precision)
Default: 0.0f
```
**When to use:** 3D graphics, game engines (when precision isn't critical)
``` java
float price = 19.99f;  // 'f' suffix required
float pi = 3.14159f;
float temperature = 98.6f;

// Scientific notation
float distance = 1.5e8f;  // 150,000,000

// Precision issues:
float x = 0.1f + 0.2f;
System.out.println(x);  // 0.30000001 (not exactly 0.3!)
```
----------

#### **6. double** ⭐ _Default for Decimals_
```
Size: 64 bits (8 bytes)
Range: ±1.7e308 (approximately 15 decimal digits precision)
Default: 0.0d
```
**When to use:** Financial calculations, scientific computations, default choice

``` java
double salary = 75000.50;
double pi = 3.141592653589793;
double scientificValue = 6.022e23;  // Avogadro's number

// No suffix needed (default)
double price = 99.99;  // Automatically double

// Still has precision issues:
double result = 0.1 + 0.2;
System.out.println(result);  // 0.30000000000000004
```
**⚠️ Money Warning:** Never use float/double for money! Use `BigDecimal` instead.

----------

### **C. Character Type**

#### **7. char**
``` java
Size: 16 bits (2 bytes)
Range: 0 to 65,535 (Unicode characters)
Default: '\u0000'
```
**When to use:** Storing single characters, text processing
``` java
char grade = 'A';
char symbol = '$';
char newline = '\n';
char tab = '\t';

// Unicode representation
char rupee = '₹';
char heart = '\u2764';  // ❤
char emoji = '😊';

// Character operations
char letter = 'A';
System.out.println((int) letter);  // 65 (ASCII value)
```
----------

### **D. Boolean Type**

#### **8. boolean**
``` java 
Size: Not precisely defined (typically 1 bit, but JVM dependent)
Values: true or false
Default: false
```
**When to use:** Flags, conditions, state tracking
``` java 
boolean isLoggedIn = true;
boolean hasPermission = false;
boolean isValid = (age >= 18);

// Common usage
if (isLoggedIn && hasPermission) {
    // Allow access
}

// Toggle
boolean lightSwitch = false;
lightSwitch = !lightSwitch;  // true
```
----------

## **2. REFERENCE DATA TYPES**

Reference types store **memory addresses** (references) pointing to objects in the heap.

### **Analogy: Hotel Room Keys**

-   **Primitive**: You carry the actual item in your pocket
-   **Reference**: You carry a room key (address) that points to where the item is stored

----------

### **A. String** (Special Reference Type)
```
String name = "John";  // String literal (stored in String pool)
String city = new String("Hyderabad");  // New object in heap

// Immutable - cannot be changed
String greeting = "Hello";
greeting = greeting + " World";  // Creates NEW string, doesn't modify original

// Common operations
String text = "Java Programming";
int length = text.length();  // 16
char firstChar = text.charAt(0);  // 'J'
String upper = text.toUpperCase();  // "JAVA PROGRAMMING"
boolean contains = text.contains("Java");  // true
```
----------

### **B. Arrays**
``` java 
// Declaration and initialization
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[3];
double[][] matrix = new double[3][3];  // 2D array

// Access
int first = numbers[0];  // 1
numbers[2] = 10;  // Modify

// Length
int size = numbers.length;  // 5

// Multi-dimensional
int[][] grid = {
    {1, 2, 3},
    {4, 5, 6}
};
int value = grid[1][2];  // 6
```
----------

### **C. Classes and Objects**
``` java
// Custom class
class Student {
    String name;
    int rollNo;
    double marks;
}

// Object creation (reference type)
Student student = new Student();
student.name = "Alice";
student.rollNo = 101;
```
----------

## **3. TYPE CONVERSION & CASTING**

### **Implicit Conversion (Widening)**

Automatic conversion from smaller to larger type (no data loss)
``` java
byte → short → int → long → float → double

byte b = 10;
int i = b;      // Automatic
long l = i;     // Automatic
float f = l;    // Automatic
double d = f;   // Automatic
```
### **Explicit Casting (Narrowing)**

Manual conversion from larger to smaller type (potential data loss)
``` java
double d = 100.99;
int i = (int) d;  // i = 100 (decimal part lost)

int big = 300;
byte small = (byte) big;  // Data loss! small = 44 (overflow)

// Safe casting
long l = 100L;
int i = (int) l;  // OK if value fits in int range
```
----------

## **4. WRAPPER CLASSES**

Each primitive has a corresponding wrapper class (Reference type):
``` java 
Primitive  →  Wrapper Class
--------------------------------
byte       →  Byte
short      →  Short
int        →  Integer
long       →  Long
float      →  Float
double     →  Double
char       →  Character
boolean    →  Boolean
```
**Autoboxing & Unboxing**
``` java 
// Autoboxing: primitive → wrapper (automatic)
int primitive = 10;
Integer wrapper = primitive;  // Auto-boxing

// Unboxing: wrapper → primitive (automatic)
Integer obj = 20;
int num = obj;  // Auto-unboxing

// Why use wrappers?
ArrayList<Integer> list = new ArrayList<>();  // Cannot use ArrayList<int>
list.add(5);  // Autoboxing

// Null values
Integer nullable = null;  // Possible with wrapper
// int cannotBeNull = null;  // ERROR! Primitives cannot be null
```
----------

## **5. PRACTICAL COMPARISON TABLE**
<img width="898" height="288" alt="image" src="https://github.com/user-attachments/assets/e7a66171-d1ba-4df0-9c86-22f375c19965" />

----------

## **6. PRACTICAL EXAMPLES**

``` java 
public class DataTypeDemo {
    public static void main(String[] args) {
        // Integer calculations
        int students = 100;
        int classrooms = 5;
        int studentsPerClass = students / classrooms;  // 20
        
        // Floating-point for precision
        double averageScore = 87.5;
        double passingScore = 40.0;
        boolean passed = averageScore >= passingScore;  // true
        
        // Character operations
        char grade = 'A';
        if (grade >= 'A' && grade <= 'C') {
            System.out.println("Good performance!");
        }
        
        // String manipulation
        String fullName = "John" + " " + "Doe";
        
        // Arrays
        int[] scores = {85, 90, 78, 92, 88};
        double sum = 0;
        for (int score : scores) {
            sum += score;
        }
        double average = sum / scores.length;
        
        // Type conversion
        long population = 8_000_000_000L;
        int populationInMillions = (int) (population / 1_000_000);
    }
}
```
----------

## **Best Practices**

✅ Use `int` as default for integers  
✅ Use `double` as default for decimals  
✅ Use `long` with 'L' suffix for large numbers  
✅ Use `float` with 'f' suffix  
✅ Use `BigDecimal` for financial calculations  
✅ Use meaningful variable names  
✅ Use underscores in large numbers for readability  
✅ Be careful with type casting to avoid data loss
