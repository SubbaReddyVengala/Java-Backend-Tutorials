🧩 **Java Identifiers — Definition, Rules, and Examples**
#### 🔹 **What is an Identifier?**

An **identifier** is the **name** used to identify elements such as variables, methods, classes, packages, interfaces, etc.  
It acts as a **unique label** for each element in your program.

👉 Example:
```java
int age = 25;
String name = "Subba";
```
Here, `age` and `name` are **identifiers**

## **What Can Be Identifiers?**

Identifiers are used to name:

1.  **Variables** - `int age`, `String name`
2.  **Methods** - `public void drive()`
3.  **Classes** - `class Car`
4.  **Interfaces** - `interface Vehicle`
5.  **Packages** - `package com.myapp`
6.  **Constants** - `final int MAX_SPEED`
7.  **Labels** - `loop: for(...)`

⚙️ **Rules for Defining Identifiers**

Example

✅ **1. Must begin with a letter (A–Z or a–z), underscore (_), or dollar sign ($)**

First character cannot be a digit

`age`, `_salary`, `$rate`

✅ **2. Subsequent characters can be letters, digits, underscores, or dollar signs**

`student1`, `employee_salary`

❌ **3. Cannot use keywords or reserved words**

`int`, `class`, `public` (invalid)

❌ **4. Cannot contain spaces**

`emp name` ❌

✅ **5. Java identifiers are case-sensitive**

`Name` ≠ `name`

✅ **6. Can be of any length**

But should be meaningful for readability

⚠️ **7. Unicode characters are allowed**

`int π = 3;` ✅

🔍 **Examples of Valid Identifiers**

```java
// Good identifiers
int age;                    // Simple
String firstName;           // Camel case
double _salary;             // Starts with underscore
int $price;                 // Starts with dollar
String userName123;         // Contains digits
final int MAX_SPEED;        // Constant (all caps)
class MyCarClass;           // Class name
```
❌ **Examples of Invalid Identifiers**

<img width="687" height="331" alt="image" src="https://github.com/user-attachments/assets/2d0e5070-6804-413c-8c46-47333280169c" />
```java
int 2age;              // ❌ Starts with digit
String first-name;     // ❌ Contains hyphen
double salary@;        // ❌ Contains @
int my age;            // ❌ Contains space
String class;          // ❌ Java keyword
boolean true;          // ❌ Java keyword
int #value;            // ❌ Contains #
String user.name;      // ❌ Contains dot
```
### 🧩 **Best Practices**

-   Use **camelCase** for variables and methods → `firstName`, `calculateSalary()`
    
-   Use **PascalCase** for classes and interfaces → `EmployeeDetails`
    
-   Use **UPPERCASE_WITH_UNDERSCORES** for constants → `MAX_LIMIT`
    
-   Use **meaningful names** → `balanceAmount` is better than `b1`

✅ **Example Program**
```java
public class EmployeeDetails {
    private int empId;
    private String empName;
    private double salary;

    public void displayEmployeeInfo() {
        System.out.println("ID: " + empId);
        System.out.println("Name: " + empName);
        System.out.println("Salary: " + salary);
    }
}
```
Here:

-   `EmployeeDetails` → class identifier
    
-   `empId`, `empName`, `salary` → variable identifiers
    
-   `displayEmployeeInfo` → method identifier


Java Keywords (Reserved Words) - Cannot Use as Identifiers
```java
// Keywords you CANNOT use as identifiers:
abstract   continue   for          new         switch
assert     default    goto*        package     synchronized
boolean    do         if           private     this
break      double     implements   protected   throw
byte       else       import       public      throws
case       enum       instanceof   return      transient
catch      extends    int          short       try
char       final      interface    static      void
class      finally    long         strictfp    volatile
const*     float      native       super       while

// *goto and const are reserved but not used
```
Common Mistakes to Avoid:
```java
// ❌ WRONG
int Age;              // Should be lowercase: age
class myClass;        // Should be uppercase: MyClass
final int maxSpeed;   // Constant should be: MAX_SPEED
void CalculateAge();  // Method should be: calculateAge()

// ✅ CORRECT
int age;
class MyClass;
final int MAX_SPEED;
void calculateAge();
```
Quick Reference Card:
<img width="870" height="242" alt="image" src="https://github.com/user-attachments/assets/9ce092bb-46ef-40b7-afd4-18185273a1de" />

## **Memory Tip:**

Think of identifiers as **name tags** 🏷️:

-   Every car part needs a name tag
-   Name tags must follow factory rules (Java rules)
-   Good name tags are clear and descriptive
-   You can't use reserved words (like "EXIT" or "DANGER" already mean something specific)

**Golden Rule:** Make your identifiers **meaningful** and **readable** - your code is read more often than it's written! 📖




