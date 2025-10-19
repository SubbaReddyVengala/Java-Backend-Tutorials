# Java Strings: Complete Technical Guide

## Table of Contents

1.  [What is a String?](#what-is-a-string)
2.  [String Immutability](#string-immutability)
3.  [String Pool (String Interning)](#string-pool)
4.  [String Creation Methods](#string-creation-methods)
5.  [Memory Architecture](#memory-architecture)
6.  [String Comparison](#string-comparison)
7.  [StringBuilder vs StringBuffer](#stringbuilder-vs-stringbuffer)
8.  [Performance Considerations](#performance-considerations)

----------

## What is a String?

**Technical Definition:** In Java, a String is an object that represents a sequence of characters. It's implemented as a class (`java.lang.String`) and internally backed by a character array.

**Analogy:** Think of a String like a **necklace of beads** where each bead is a character. Once the necklace is made, you can't change individual beads—you'd have to create a new necklace.

### Internal Structure (Java 9+)

java

```java
// Simplified internal representation
public final class String {
    private final byte[] value;  // Compact Strings (Latin1 or UTF-16)
    private final byte coder;    // LATIN1 = 0, UTF16 = 1
    private int hash;            // Cached hash code
}
```

----------

## String Immutability

**Key Concept:** Strings are **immutable**—once created, their content cannot be changed.

### Why Immutable?

1.  **Security**: Prevents malicious code from modifying sensitive data
2.  **Thread Safety**: Can be shared across threads without synchronization
3.  **String Pool Optimization**: Enables string interning
4.  **Hash Code Caching**: Hash remains constant for HashMap keys

### How to create a string object?

There are two ways to create String object:

1.  By string literal
2.  By new keyword

## 1) String Literal

Java String literal is created by using double quotes. For Example:
```java
1.  String s="welcome";
```
Each time you create a string literal, the JVM checks the "string constant pool" first. If the string already exists in the pool, a reference to the pooled instance is returned. If the string doesn't exist in the pool, a new string instance is created and placed in the pool. For example:
```java
1.  String s1="Welcome";
2.  String s2="Welcome";//It doesn't create a new instance
```

<img width="487" height="374" alt="image" src="https://github.com/user-attachments/assets/a3fc2c1b-d6d6-4979-96cc-e229d5997b29" />

In the above example, only one object will be created. Firstly, JVM will not find any string object with the value "Welcome" in string constant pool that is why it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create a new object but will return the reference to the same instance.

``` java
1.  public  class Main {
2.  public  static  void main(String[] args) {
3.  String s1="Welcome";
4.  String s2="Welcome";//It doesn't create a new instance
5.  System.out.println(s1+" "+s2);
6.  }
7.  }
```
**Output:**
```
Welcome Welcome
```
#### Note: String objects are stored in a special memory area known as the "string constant pool".
### Why Java uses the concept of String literal?

To make Java more memory efficient (because no new objects are created if it exists already in the string constant pool).

## 2) By new keyword
```java
1.  String s=new String("Welcome");//creates two objects and one reference variable
```
In such case,  JVM will create a new string object in normal (non-pool) heap memory, and the literal "Welcome" will be placed in the string constant pool. The variable s will refer to the object in a heap (non-pool).
```java
2.  public  class Main {
3.  public  static  void main(String[] args) {
4.  String s1=new String("Welcome");
5.  String s2=new String("Welcome");
6.  System.out.println(s1+" "+s2);
7.  }
8.  }
```
**Output:**
```
Welcome Welcome  
```

### Example Demonstration

java

```java
String s1 = "Hello";
s1.concat(" World");  // Creates new String, doesn't modify s1
System.out.println(s1);  // Output: "Hello" (unchanged!)

s1 = s1.concat(" World");  // Now s1 references the new String
System.out.println(s1);    // Output: "Hello World"
```

**Memory Visualization:**

```
Step 1: String s1 = "Hello";
┌─────────────────┐
│  String Pool    │
│  ┌───────────┐  │
│  │  "Hello"  │◄─┼─── s1 points here
│  └───────────┘  │
└─────────────────┘

Step 2: s1.concat(" World");
┌─────────────────┐       ┌──────────────┐
│  String Pool    │       │  Heap Memory │
│  ┌───────────┐  │       │ ┌──────────┐ │
│  │  "Hello"  │◄─┼─── s1 │ │"HelloWrld"│ │ (created but lost!)
│  └───────────┘  │       │ └──────────┘ │
└─────────────────┘       └──────────────┘

Step 3: s1 = s1.concat(" World");
┌─────────────────┐       ┌──────────────┐
│  String Pool    │       │  Heap Memory │
│  ┌───────────┐  │       │ ┌──────────┐ │
│  │  "Hello"  │  │       │ │"HelloWrld"│◄┼─── s1 now points here
│  └───────────┘  │       │ └──────────┘ │
└─────────────────┘       └──────────────┘
```

**Analogy:** Immutability is like a **sealed envelope**. If you want to change the letter inside, you can't just open and edit it—you must create a new envelope with the modified letter.

----------

## String Pool (String Interning)

**Concept:** The String Pool is a special memory region in the heap where Java stores string literals to optimize memory usage.

### How It Works

java

```java
String s1 = "Java";      // Stored in String Pool
String s2 = "Java";      // Reuses same reference from pool
String s3 = new String("Java");  // Creates new object in heap

System.out.println(s1 == s2);    // true (same reference)
System.out.println(s1 == s3);    // false (different references)
System.out.println(s1.equals(s3)); // true (same content)
```

**Memory Diagram:**

```
┌──────────────────────────────────┐
│         HEAP MEMORY              │
│                                  │
│  ┌────────────────────────────┐ │
│  │    STRING POOL             │ │
│  │    ┌─────────────┐         │ │
│  │    │   "Java"    │ ◄───────┼─┼─── s1
│  │    └─────────────┘         │ │      s2 (same reference)
│  │                            │ │
│  └────────────────────────────┘ │
│                                  │
│  ┌─────────────┐                │
│  │   "Java"    │ ◄──────────────┼─── s3 (different object)
│  └─────────────┘                │
│                                  │
└──────────────────────────────────┘
```

**Analogy:** The String Pool is like a **library**. When you need the book "Java Programming," the library (JVM) checks if it already has a copy. If yes, it gives you a reference to the existing book rather than buying a new copy.

### Manual Interning

java

```java
String s3 = new String("Java").intern();  // Forces pool storage
System.out.println(s1 == s3);  // Now true!
```

----------

## String Creation Methods

### Method 1: String Literal

java

```java
String s1 = "Hello";  // Goes to String Pool
```

### Method 2: Using `new` Keyword

java

```java
String s2 = new String("Hello");  // Creates object in heap
```

### Method 3: Character Array

java

```java
char[] chars = {'H', 'e', 'l', 'l', 'o'};
String s3 = new String(chars);
```

### Method 4: StringBuilder/StringBuffer

java

```java
StringBuilder sb = new StringBuilder("Hello");
String s4 = sb.toString();
```

### Performance Comparison

java

```java
// Creating strings in a loop
// ❌ BAD - Creates 10,000 String objects!
String result = "";
for(int i = 0; i < 10000; i++) {
    result += i;  // Each += creates a new String
}

// ✅ GOOD - Mutable, single object modified
StringBuilder result = new StringBuilder();
for(int i = 0; i < 10000; i++) {
    result.append(i);
}
String finalResult = result.toString();
```

----------

## Memory Architecture

### Complete Memory Layout

```
┌─────────────────────────────────────────────────┐
│              JVM MEMORY                         │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │           HEAP MEMORY                    │  │
│  │                                          │  │
│  │  ┌────────────────────────────────────┐ │  │
│  │  │      STRING POOL (PermGen/Metaspace)│ │  │
│  │  │                                     │ │  │
│  │  │  "Hello"  "World"  "Java"          │ │  │
│  │  │    ▲        ▲        ▲             │ │  │
│  │  └────┼────────┼────────┼─────────────┘ │  │
│  │       │        │        │               │  │
│  │  ┌────┼────────┼────────┼─────────────┐ │  │
│  │  │ String Objects                     │ │  │
│  │  │  [value → byte[]]                  │ │  │
│  │  │  [hash = 0]                        │ │  │
│  │  └────────────────────────────────────┘ │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
│                                                 │
│  ┌──────────────────────────────────────────┐  │
│  │           STACK MEMORY                   │  │
│  │                                          │  │
│  │  main() stack frame:                    │  │
│  │    s1 ───┐                              │  │
│  │    s2 ───┼─► [references to heap]       │  │
│  │    s3 ───┘                              │  │
│  │                                          │  │
│  └──────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

----------

## String Comparison

### Using `==` (Reference Comparison)

java

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1 == s2);    // true (same pool reference)
System.out.println(s1 == s3);    // false (different objects)
```

**Analogy:** Using `==` is like checking if two people live at the **same house address**, not if they're wearing the same clothes.

### Using `.equals()` (Content Comparison)

java

```java
System.out.println(s1.equals(s3));  // true (same content)
```

**Analogy:** Using `.equals()` is like checking if two letters contain the **same message**, regardless of which envelope they're in.

### Using `.compareTo()` (Lexicographical)

java

```java
String s1 = "Apple";
String s2 = "Banana";
int result = s1.compareTo(s2);  // Negative (Apple < Banana)
```

----------

## StringBuilder vs StringBuffer

### StringBuilder (Not Thread-Safe)

java

```java
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");
sb.insert(5, ",");
sb.delete(5, 6);
String result = sb.toString();
```

**Use Case:** Single-threaded string manipulation (faster)

### StringBuffer (Thread-Safe)

java

```java
StringBuffer sb = new StringBuffer("Hello");
sb.append(" World");  // Synchronized method
```

**Use Case:** Multi-threaded environments where synchronization is needed

### Performance Comparison
<img width="890" height="272" alt="image" src="https://github.com/user-attachments/assets/b79356a8-c164-445b-8d62-c6a8a8a95588" />

**Analogy:**

-   **String**: A stone tablet (permanent, can't edit)
-   **StringBuilder**: A whiteboard (easy to erase/modify, one person at a time)
-   **StringBuffer**: A whiteboard with a lock (multiple people can't write simultaneously)

----------

## Performance Considerations

### Problem: String Concatenation in Loops

java

```java
// ❌ TERRIBLE PERFORMANCE O(n²)
String result = "";
for(int i = 0; i < 100000; i++) {
    result += "text";  // Creates 100,000 intermediate String objects!
}

// ✅ EXCELLENT PERFORMANCE O(n)
StringBuilder sb = new StringBuilder();
for(int i = 0; i < 100000; i++) {
    sb.append("text");
}
String result = sb.toString();
```

### Memory Impact Visualization

```
String Concatenation (n=5):
┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│ "a"  │  │ "ab" │  │ "abc"│  │"abcd"│  │"abcde"│ 
└──────┘  └──────┘  └──────┘  └──────┘  └──────┘
   ↓         ↓         ↓         ↓         ↓
 Garbage   Garbage  Garbage   Garbage   Final
 (Total: 5 objects created for 5 characters!)

StringBuilder:
┌─────────────────┐
│  char[] buffer  │  ← Single mutable buffer
│  "abcde"        │
└─────────────────┘
 (Only 1 object for final result!)
```

### Best Practices

1.  **Use String literals** for constant values (automatic pooling)
2.  **Use StringBuilder** for string manipulation in loops
3.  **Use StringBuffer** only when thread safety is required
4.  **Avoid excessive string concatenation** with `+` in loops
5.  **Use `.intern()** carefully** (can cause memory issues if overused)

----------

## Common Interview Questions

### Q1: How many objects are created?

java

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");
```

**Answer:** 2 objects (one in pool, one in heap)

### Q2: What's the output?

java

```java
String s1 = "Java";
String s2 = new String("Java");
String s3 = s2.intern();

System.out.println(s1 == s2);  // false
System.out.println(s1 == s3);  // true
```

### Q3: Why is String immutable?

**Answer:**

-   Security (prevents data tampering)
-   Thread safety (no synchronization needed)
-   Hash code caching (efficient for HashMap)
-   String pool optimization (memory efficiency)

----------

## Summary Cheat Sheet
<img width="905" height="250" alt="image" src="https://github.com/user-attachments/assets/9e1bc90c-111a-4b55-a3a0-5969d3893385" />

**Golden Rule:** Use String for unchanging text, StringBuilder for single-threaded manipulation, and StringBuffer for multi-threaded scenarios.

----------

## Practice Exercises

### Exercise 1: Predict the Output

java

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");
String s4 = new String("Hello").intern();

System.out.println(s1 == s2);
System.out.println(s1 == s3);
System.out.println(s1 == s4);
System.out.println(s3 == s4);
```

### Exercise 2: Optimize This Code

java

```java
// Optimize for performance
public String generateString(int n) {
    String result = "";
    for(int i = 0; i < n; i++) {
        result = result + i;
    }
    return result;
}
```

### Exercise 3: Memory Analysis

Draw the memory diagram for:

java

```java
String s1 = "Java";
String s2 = s1;
s1 = "Python";
```

----------

## Conclusion

Understanding Strings deeply is crucial for:

-   Writing efficient Java code
-   Avoiding memory leaks
-   Optimizing application performance
-   Succeeding in technical interviews

Remember: **Immutability is a feature, not a limitation!**

# Why String is Immutable in Java?

## Understanding Immutability

**Definition:** An immutable object is one whose state cannot be modified after creation. Any "modification" creates a new object instead.

java

```java
String str = "Hello";
str.concat(" World");  // Creates NEW String, doesn't modify original
System.out.println(str);  // Still "Hello"
```

----------

## 5 Core Reasons for String Immutability

### 1. 🔒 Security

**Problem if Strings were mutable:**

java

```java
// Imagine Strings were MUTABLE (hypothetical scenario)
String username = "admin";
authenticateUser(username);  // Pass to security method

// Somewhere else in code (malicious or buggy)
username.setValue("hacker");  // Would change the original!

// Security breach! The username that was authenticated 
// is now different from what's being used
```

**Real-World Security Scenarios:**

#### A) Database Connections

java

```java
// Connection string
String dbUrl = "jdbc:mysql://localhost:3306/secure_db";
Connection conn = DriverManager.getConnection(dbUrl, "admin", "pass123");

// If String were mutable, malicious code could do:
// dbUrl.changeValue("jdbc:mysql://hacker.com:3306/malicious_db");
// Now your data goes to attacker's server!
```

#### B) File System Access

java

```java
String fileName = "/safe/path/userfile.txt";
securityManager.checkAccess(fileName);  // Validates safe path

// If mutable, after validation:
// fileName.changeValue("/etc/passwd");  // Access restricted files!
File file = new File(fileName);
```

**Memory Visualization:**

```
IMMUTABLE (Current Reality):
┌──────────────────────────────────────┐
│ String Pool                          │
│  ┌────────────────┐                  │
│  │ "/safe/path"   │ ← Cannot change  │
│  └────────────────┘                  │
│         ↑                            │
│    All references                    │
│    point here safely                 │
└──────────────────────────────────────┘

MUTABLE (Dangerous Scenario):
┌──────────────────────────────────────┐
│ Heap Memory                          │
│  ┌────────────────┐                  │
│  │ "/etc/passwd"  │ ← Changed!       │
│  └────────────────┘                  │
│         ↑                            │
│    Same reference                    │
│    now points to                     │
│    malicious path!                   │
└──────────────────────────────────────┘
```

**Analogy:** Imagine your passport. Once issued, the details cannot be changed. If they could be modified after security checks, someone could pass through security as you, then change the passport details to their own identity!

----------

### 2. 🧵 Thread Safety

**Problem if Strings were mutable:**

java

```java
// Shared String in multi-threaded environment
class BankAccount {
    private String accountNumber = "123456789";
    
    // Thread 1
    public void processTransaction() {
        // If String were mutable:
        // While reading: accountNumber = "123456789"
        // Thread 2 modifies it mid-operation
        // Continue processing with: accountNumber = "987654321"
        // WRONG ACCOUNT!
        
        validateAccount(accountNumber);
        debitAmount(accountNumber, 1000);
    }
    
    // Thread 2
    public void updateAccount() {
        accountNumber = "987654321";  // If mutable, affects Thread 1!
    }
}
```

**Current Reality with Immutability:**

java

```java
class BankAccount {
    private String accountNumber = "123456789";
    
    // Thread 1
    public void processTransaction() {
        String localRef = accountNumber;  // Points to "123456789"
        // Even if accountNumber reference changes in Thread 2,
        // localRef still points to original immutable "123456789"
        validateAccount(localRef);  // Safe!
        debitAmount(localRef, 1000);  // Safe!
    }
    
    // Thread 2
    public void updateAccount() {
        accountNumber = "987654321";  // Creates NEW String
        // Original "123456789" remains unchanged
    }
}
```

**Thread Execution Timeline:**

```
Time →
Thread-1: [Read "123456789"]───[Validate]───[Debit]───[Complete]
                     ↑              ↑            ↑
                     │              │            │
Thread-2:            └─[Assign new "987654321"]─┘
                            ↓
                     Original "123456789" 
                     unchanged in memory!
                     Thread-1 continues safely
```

**Analogy:** It's like reading from a stone tablet (immutable) vs. a whiteboard (mutable). Multiple people can read the stone tablet simultaneously without interference. But if one person erases the whiteboard while others are reading it, chaos ensues!

----------

### 3. 🗄️ String Pool Optimization (Memory Efficiency)
**The Magic of String Interning:**

java

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = "Hello";
String s4 = "Hello";
// All point to SAME object in memory!

System.out.println(s1 == s2);  // true
System.out.println(s1 == s3);  // true
System.out.println(s1 == s4);  // true
```

**Memory Savings:**

```
WITH IMMUTABILITY (String Pool):
┌─────────────────────────────┐
│     String Pool             │
│  ┌──────────────┐           │
│  │   "Hello"    │ ← Single  │
│  └──────────────┘   object  │
│    ↑  ↑  ↑  ↑               │
│    │  │  │  │               │
│   s1 s2 s3 s4               │
└─────────────────────────────┘
Memory: 1 object = ~40 bytes

WITHOUT IMMUTABILITY:
┌─────────────────────────────┐
│     Heap Memory             │
│  ┌──────────────┐           │
│  │   "Hello"    │ ← s1      │
│  └──────────────┘           │
│  ┌──────────────┐           │
│  │   "Hello"    │ ← s2      │
│  └──────────────┘           │
│  ┌──────────────┐           │
│  │   "Hello"    │ ← s3      │
│  └──────────────┘           │
│  ┌──────────────┐           │
│  │   "Hello"    │ ← s4      │
│  └──────────────┘           │
└─────────────────────────────┘
Memory: 4 objects = ~160 bytes
```

**Why Pooling Requires Immutability:**

java

```java
// IF Strings were mutable:
String s1 = "Hello";
String s2 = "Hello";  // Points to same object

s1.changeValue("Bye");  // Hypothetical mutable operation

System.out.println(s2);  // Would print "Bye" !! 
// Unexpected side effect!
// String pool would be useless
```

**Real-World Impact:**

java

```java
// Typical Java application
public class WebApp {
    private static final String GET = "GET";
    private static final String POST = "POST";
    private static final String PUT = "PUT";
    private static final String DELETE = "DELETE";
    
    // Used in thousands of places:
    void handleRequest(String method) {
        if (method.equals("GET")) { ... }
        // method.equals() compares with pooled Strings
        // Only ONE "GET" String exists in entire JVM!
    }
}
```

**Analogy:** String Pool is like a **dictionary in a library**. Everyone can reference the same word "Hello" in the dictionary without needing their own copy. But this only works if no one can erase or modify the dictionary!

----------

### 4. 🔑 Hash Code Caching

**The Problem:**

java

```java
// HashCode is used in HashMap, HashSet, Hashtable
Map<String, User> userMap = new HashMap<>();

String key = "john@email.com";
int hashCode = key.hashCode();  // Computed once: 1234567

// HashMap uses hashCode to find bucket location
userMap.put(key, new User("John"));
```

**Why Immutability Matters:**
java

```java
String key = "john@email.com";
userMap.put(key, new User("John"));

// IF String were mutable:
key.changeValue("jane@email.com");  // Hypothetical

// Now hashCode changes!
// HashMap looks in WRONG bucket
User user = userMap.get(key);  // Returns null! Data lost!
```
**Analogy:** It's like calculating your age. Since your birthdate is immutable, you calculate your age once at the start of the year and remember it. If your birthdate could change, you'd have to recalculate your age every time someone asks!
## What Makes String Immutable?

### 1. Final Class

java

```java
public final class String {
    // Cannot be extended
    // Prevents overriding methods
}
```

### 2. Private Final Fields

java

```java
public final class String {
    private final byte[] value;  // Cannot reassign
    private final byte coder;    // Cannot reassign
    
    // No setter methods!
}
```

### 3. No Mutating Methods
java

```java
public String concat(String str) {
    // Doesn't modify 'this'
    // Returns NEW String instead
    return new String(...);
}

public String toUpperCase() {
    // Creates and returns NEW String
    return new String(...);
}
```

----------

## Proof of Immutability

### Experiment 1: Attempting to Modify

java

```java
String original = "Hello";
System.out.println("Original: " + original);
System.out.println("HashCode: " + original.hashCode());
System.out.println("Identity: " + System.identityHashCode(original));

String modified = original.concat(" World");
System.out.println("\nAfter concat:");
System.out.println("Original: " + original);  // Still "Hello"
System.out.println("Modified: " + modified);  // "Hello World"
System.out.println("Original HashCode: " + original.hashCode());  // Unchanged
System.out.println("Modified Identity: " + System.identityHashCode(modified));  // Different!
```

**Output:**

```
Original: Hello
HashCode: 69609650
Identity: 12345678

After concat:
Original: Hello
Modified: Hello World
Original HashCode: 69609650
Modified Identity: 87654321  ← Different object
```


