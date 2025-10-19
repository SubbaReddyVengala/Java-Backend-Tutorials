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
