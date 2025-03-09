What is JDK?
------------

JDK is an abbreviation for Java Development Kit which includes all the tools, executables, and binaries required to compile, 
debug, and execute a Java Program is platform dependent i.e. there are separate installers for Windows, Mac, and Unix systems.
JDK includes both JVM and JRE and is entirely responsible for code execution. It is the version of JDK that represents a version of Java.

What is JRE?
------------

JRE is a Java Runtime Environment which is the implementation of JVM i.e. the specifications that are defined in JVM are implemented and create a corresponding 
environment for the execution of code. JRE comprises mainly Java binaries and other classes to execute the program like JVM which physically exists.

What is JVM?
------------

JVM is the abbreviation for Java Virtual Machine which is a specification that provides a runtime environment in which Java byte code can be executed
It is JVM which is responsible for converting Byte code to machine-specific code. It can also run those programs which are written in other languages and compiled to
Java bytecode. The JVM performs the mentioned tasks: Loads code, Verifies code, Executes code, and Provides runtime environment.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Difference between JDK, JRE, and JVM

Following are the important differences between JDK, JRE, and JVM −


JDK (Java Development Kit) is a software development kit to develop applications in Java. In addition to JRE, JDK also contains number of development tools (compilers,
JavaDoc, Java Debugger etc.).	

JRE (Java Runtime Environment) is the implementation of JVM and is defined as a software package that provides Java class libraries, along with Java Virtual Machine 
(JVM), and other components to run applications written in Java programming.	

JVM (Java Virtual Machine) is an abstract machine that is platform-dependent and has three notions as a specification, a document that describes requirement of JVM
implementation, implementation, a computer program that meets JVM requirements, and instance, an implementation that executes Java byte code provides a runtime environment for executing Java byte code.


2 Prime functionality :

	JDK : JDK is primarily used for code execution and has prime functionality of development.	

        JRE : On other hand JRE is majorly responsible for creating environment for code execution.	

        JVM : JVM on other hand specifies all the implementations and responsible to provide these implementations to JRE.


3 Platform Independence	:

       JDK : JDK is platform dependent i.e for different platforms different JDK required.	

       JRE : Like of JDK JRE is also platform dependent.	

       JVM : JVM is platform independent.


4 Tools	:

       JDK : As JDK is responsible for prime development so it contains tools for developing, debugging and monitoring java application.	

       JRE : On other hand JRE does not contain tools such as compiler or debugger etc. Rather it contains class libraries and other supporting files that JVM
       requires to run the program.	
       JVM : JVM does not include software development tools.


5 Implementation : 
      JDK : JDK = Java Runtime Environment (JRE) + Development tools	

      JRE : JRE = Java Virtual Machine (JVM) + Libraries to run the application	
  
      JVM : JVM = Only Runtime environment for executing the Java byte code.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Object − Objects have states and behaviors. Example: A dog has states - color, name, breed as well as behavior such as wagging their tail, barking, eating. 
An object is an instance of a class.

Class − A class can be defined as a template/blueprint that describes the behavior/state that the object of its type supports.

Methods − A method is basically a behavior. A class can contain many methods. It is in methods where the logics are written, data is manipulated and all the actions
are executed.

Instance Variables − Each object has its unique set of instance variables. An object's state is created by the values assigned to these instance variables.

Java Identifiers:
-------------------
All Java components require names. Names used for classes, variables, and methods are called identifiers.

In Java, there are several points to remember about identifiers. They are as follows −

All identifiers should begin with a letter (A to Z or a to z), currency character ($) or an underscore (_).

After the first character, identifiers can have any combination of characters.

A keyword cannot be used as an identifier.

Most importantly, identifiers are case sensitive.

Examples of legal identifiers: age, $salary, _value, __1_value.

Examples of illegal identifiers: 123abc, -salary.

Java Variables
---------------

A variable is a container which holds the value while the Java program is executed. A variable is assigned with a data type.

Variable is a name of memory location. There are three types of variables in java: local, instance and static.

There are two types of data types in Java: primitive and non-primitive.

Variable
---------
A variable is the name of a reserved area allocated in memory. In other words, it is a name of the memory location. It is a combination of "vary + able" which means its value can be changed.

![image](https://github.com/user-attachments/assets/6f2d22a9-da05-4277-8205-a97ca9a8f596)

int data=50;//Here data is variable  

Types of Variables
------------------
There are three types of variables in Java:

local variable
instance variable
static variable

![image](https://github.com/user-attachments/assets/8459cc6f-2d2f-40fa-a995-aebd56419758)

1) Local Variable
------------------
A variable declared inside the body of the method is called local variable. You can use this variable only within that method and the other methods in the class aren't even aware that the variable exists.

A local variable cannot be defined with "static" keyword.

Example of Local Variable

Example
//defining a Local Variable  
int num = 10;  
System.out.println(" Variable: " + num); 

Output:
Variable: 10

2) Instance Variable
   ----------------
A variable declared inside the class but outside the body of the method, is called an instance variable. It is not declared as static.

It is called an instance variable because its value is instance-specific and is not shared among instances.

Example of Instance Variable
---------------------------
Example

```          
public class InstanceVariableDemo {  
    //Defining Instance Variables  
    public String name;  
    public int age=19;  
 //Creadting a default Constructor initializing Instance Variable  
    public InstanceVariableDemo()  
    {  
        this.name = "Deepak";  
    }  
}  

public class Main{  
    public static void main(String[] args)  
    {  
        // Object Creation  
       InstanceVariableDemo obj = new InstanceVariableDemo();  
        System.out.println("Student Name is: " + obj.name);  
        System.out.println("Age: "+ obj.age);  
    }  
} 

```
```
Output:
-------
Student Name is: Deepak
Age: 19

```
3) Static variable
 -----------------
A variable that is declared as static is called a static variable. It cannot be local. You can create a single copy of the static variable and share it among all the instances of the class. Memory allocation for static variables happens only once when the class is loaded in the memory.

Example Static variable
-----------------------

```
Example
class Student{  
    //static variable  
   static int age;  
} 

public class Main{  
   public static void main(String args[]){  
       Student s1 = new Student();  
       Student s2 = new Student();  
       s1.age = 24;  
       s2.age = 21;  
       Student.age = 23;  
       System.out.println("S1\'s age is: " + s1.age);  
       System.out.println("S2\'s age is: " + s2.age);  
   }  
}   

```

```
Output:
----------
S1's age is: 23
S2's age is: 23

```
Explanation:
-------------
In Java, a static variable belongs to the class itself rather than to any individual instance. This means there is only one copy of that variable, regardless of how many objects (instances) of the class you create.

Consider the following points:
-----------------------------
Single Copy:
------------
When you declare static int age in the Student class, there's only one age variable shared by all instances of Student. It doesn't matter whether you refer to it via s1.age, s2.age, or Student.age; they all point to the same memory location.

Modification:
-------------
When you change the value of age using any reference, the change is reflected for all references. For example:

Setting s1.age = 24; makes the shared age 24.
Then, setting s2.age = 21; changes the same shared age to 21.
Finally, Student.age = 23; updates the same variable to 23.
Access Through Instances:
Even though you use s1 and s2 to modify age, they are just ways to access the shared variable. They don't have their own separate age field.

Thus, when you print s1.age and s2.age, both will output 23 because that is the last value assigned to the shared static variable.

This is why using static is helpful when you need a property or method that is common to all objects of a class and should not be duplicated for each instance.

Data Types in Java
-------------------
Data types specify the different sizes and values that can be stored in the variable. There are two types of data types in Java:

Primitive data types: 
----------------------
The primitive data types include boolean, char, byte, short, int, long, float and double.

Non-primitive data types: 
-------------------------
The non-primitive data types include Classes, Interfaces, and Arrays.

Let's understand in detail about the two major data types of Java in the following paragraphs.

Java Primitive Data Types
-------------------------
In Java language, primitive data types are the building blocks of data manipulation. These are the most basic data types available in Java languag
In Java, there are mainly eight primitive data types and let's understand about them in detail in the following paragraphs.

Java Primitive data types:
-------------------------
boolean data type
byte data type
char data type
short data type
int data type
long data type
float data type
double data type

![image](https://github.com/user-attachments/assets/677ffe1e-ad80-4d48-a49f-9b9bd7ad852a)

Boolean Data Type
------------------
In Java, the boolean data type represents a single bit of information with two possible states: true or false. It is used to store the result of logical expressions or conditions. Unlike other primitive data types like int or double, boolean does not have a specific size or range.

Example
boolean a=false;  
boolean b=true;  
System.out.println("a= " + a);  
System.out.println("b= " + b);

Output
------
 a= false
 
 b= true

Note:
-----
For instance, an if statement executes a block of code if the boolean expression evaluates to true, and skips it if the expression is false.

Byte Data Type
--------------
The byte data type in Java is a primitive data type that represents an 8-bit signed two's complement integer. It has a range of values from -128 to 127. Its default value is 0. The byte data type is commonly used when working with raw binary data or when memory conservation is a concern, as it occupies less memory than larger integer types like int or long.

Example
byte a=10;  
byte b=-20;  
System.out.println("a= " + a);  
System.out.println("b= " + b)

Output
 a= 10
 b= -20
 a= 10
 b= -20

Note:
-----
One common use of the byte data type is in reading and writing binary data, such as files or network streams. Since binary data is often represented using bytes, the byte data type provides a convenient way to work with such data.

Short Data Type
---------------
The short data type in Java is a primitive data type that represents a 16-bit signed two's complement integer. It has a range of values from -32,768 to 32,767. Similar to the byte data type, short is used when memory conservation is a concern, but more precision than byte is required. Its default value is 0.

Example
short a=10000;  
short b=-5000;  
System.out.println("a= " + a);  
System.out.println("b= " + b); 

Output

 a= 10000
 b= -5000
 a= 10000
 b= -5000
 
Note:
-----
As with the byte data type, short variables must be explicitly cast when used in expressions with larger integer types to avoid loss of precision.

Int Data Type
--------------
The int data type in Java is a primitive data type that represents a 32-bit signed two's complement integer. It has a range of values from -2,147,483,648 to 2,147,483,647. The int data type is one of the most commonly used data types in Java and is typically used to store whole numbers without decimal points. Its default value is 0.

Example
--------
int a=100000;  
int b=-200000;  
System.out.println("a= " + a);  
System.out.println("b= " + b);  

Output

 a= 100000
 b= -200000

 Note:
 -----
 Int variables can be used in mathematical expressions, assigned to other int variables, and used in conditional statements.

 Long Data Type
 --------------

 The long data type in Java is a primitive data type that represents a 64-bit signed two's complement integer. It has a wider range of values than int, ranging from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. Its default value is 0.0F. The long data type is used when int is not large enough to hold the desired value, or when a larger range of integer values is needed.

 Example
long a = 5000000L;    
long b = -6000000L;  
System.out.println("a= " + a);    
System.out.println("b= " + b); 

Output

a= 5000000
b= -6000000
a= 5000000
b= -6000000

Note:
----
The long data type is commonly used in applications where large integer values are required, such as in scientific computations, financial applications, and systems programming. It provides greater precision and a larger range than int, making it suitable for scenarios where int is insufficient

Float Data Type
--------------
The float data type in Java is a primitive data type that represents single-precision 32-bit IEEE 754 floating-point numbers. It can represent a wide range of decimal values, but it is not suitable for precise values such as currency. The float data type is useful for applications where a higher range of values is needed, and precision is not critical.

Example
float f = 234.5f;    
System.out.println("f = " + f);   

Output
f = 234.5

Note:
----
One of the key characteristics of the float data type is its ability to represent a wide range of values, both positive and negative, including very small and very large values. However, due to its limited precision (approximately 6-7 significant decimal digits), it is not suitable for applications where exact decimal values are required.

Double Data Type
-----------------
The double data type in Java is a primitive data type that represents double-precision 64-bit IEEE 754 floating-point numbers. Its default value is 0.0d. It provides a wider range of values and greater precision compared to the float data type, making it suitable for applications where accurate representation of decimal values is required.

Example
double d = 12.3;    
System.out.println("d = " + d); 

Output
d = 12.3

Note:
-----
One of the key advantages of the double data type is its ability to represent a wider range of values with greater precision compared to float. It can accurately represent values with up to approximately 15-16 significant decimal digits, making it suitable for applications that require high precision, such as financial calculations, scientific computations, and graphics programming.

Char Data Type:
----------------
The char data type in Java is a primitive data type that represents a single 16-bit Unicode character. It can store any character from the Unicode character set, that allows Java to support internationalization and representation of characters from various languages and writing systems.

Example:

char c = 'A';  
System.out.println("c = " + c); 

Output
c = A

Note:
----
The char data type is commonly used to represent characters, such as letters, digits, and symbols, in Java programs. It can also be used to perform arithmetic operations, as the Unicode values of characters can be treated as integers. For example, you can perform addition or subtraction operations on char variables to manipulate their Unicode values.

Non-primitive data types in Java, also known as reference types, refer to objects and arrays rather than the simple, built-in primitives like int or char. Here are some key points about them:

Characteristics
Reference-Based:
---------------
Variables of non-primitive types store memory addresses (references) that point to the actual data (objects) on the heap.

Complex Structures:
------------------
They can contain multiple values and methods, allowing for more complex data structures.

Default Value:
--------------
If not explicitly initialized, non-primitive types default to null.

User-Defined:
------------
You can create your own classes and interfaces, which are non-primitive by nature.

Types of Non-Primitive Data Types
-------------------------------
Classes and Objects:
------------------
Any object created from a class is a non-primitive type. For example, the String class is a non-primitive type:

String greeting = "Hello, World!";
Interfaces:
Variables that refer to an interface are also non-primitive types. They hold references to objects of classes that implement the interface.

Arrays:
--------
Arrays in Java, whether of primitive or non-primitive elements, are themselves non-primitive:


int[] numbers = {1, 2, 3, 4};
Student[] students = new Student[10];
Enumerations (Enums):
Enums are special types of classes that define a fixed set of constants:

enum Day { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }
Wrapper Classes:
These are classes that encapsulate primitive types (e.g., Integer for int, Double for double). Even though they wrap primitives, they are non-primitive types and provide methods for converting and manipulating values.

Why Use Non-Primitive Types?
--------------------------
Object-Oriented Programming:
---------------------------
They allow you to implement encapsulation, inheritance, and polymorphism.

Functionality
---------------
Non-primitive types come with built-in methods (e.g., string manipulation methods in the String class) that simplify many programming tasks.

Custom Data Structures:
----------------------
They enable the creation of complex data models by allowing you to define classes with attributes and behaviors.

Operators in Java
-----------------
Operator are an essential part of any programming language. In Java, operator is a symbol that is used to perform operations. For example: +, -, *, / etc. These are essential for performing different types of operations on variables and values. In this section, we will discuss different types of operators used in Java programming.

There are many types of operators in Java which are given below:

Unary Operator,
Arithmetic Operator,
Shift Operator,
Relational Operator,
Bitwise Operator,
Logical Operator,
Ternary Operator and
Assignment Operator.

Java Unary Operator:
--------------------
The Java unary operators require only one operand. Unary operators are used to perform various operations i.e. incrementing/decrementing a value by one, negating an expression and inverting the value of a boolean.

++ : increments a value by one
Pre-increment (++p) : First increments a value by one, then uses the value.
Post-increment (p++) : First uses the value, then increments a value by one.

-- : decrements a value by one
Pre-decrement (--p) : First decrements a value by one, then uses the value.
Post-decrement (p--) : First uses the value, then decrements a value by one.

! : negates an expression
~ : inverts the value of a boolean

Java Unary Operator Example: ++ and --

Example
int x=10;  
System.out.println(x++);//10 (11)  
System.out.println(++x);//12  
System.out.println(x--);//12 (11)  
System.out.println(--x);//10  

Output
10
12
12
10

int a=10;    
int b=10;    
System.out.println(a++ + ++a);//10+12=22    
System.out.println(b++ + b++);//10+11=21    

Java Arithmetic Operators
--------------------------
Java arithmetic operators are used to perform addition, subtraction, multiplication, and division. They act as basic mathematical operations.

Java Arithmetic Operator Example

int a=10;    
int b=5;    
System.out.println(a+b);//15    
System.out.println(a-b);//5    
System.out.println(a*b);//50    
System.out.println(a/b);//2    
System.out.println(a%b);//0    

Java Shift Operators:
----------------------
Java shift operator works on the bits of the data. It shifts the bits of the number from left to right or right to left. There are three types of shift operators in Java.

<< : Left Shift Operator (Signed)
>> : Right Shift Operator (Signed)
>>> : Unsigned Right Shift Operator

Java Left Shift Operator
------------------------
The Java left shift operator << is used to shift all of the bits in a value to the left side of a specified number of times.

Java Left Shift Operator Example
--------------------------------

System.out.println(10<<2);//10*2^2=10*4=40  
System.out.println(10<<3);//10*2^3=10*8=80  
System.out.println(20<<2);//20*2^2=20*4=80  
System.out.println(15<<4);//15*2^4=15*16=240  

Java Right Shift Operator
--------------------------
The Java right shift operator >> is used to move the value of the left operand to right by the number of bits specified by the right operand.

Java Right Shift Operator Example
---------------------------------
System.out.println(10>>2);//10/2^2=10/4=2  
System.out.println(20>>2);//20/2^2=20/4=5  
System.out.println(20>>3);//20/2^3=20/8=2  

Java Relational Operators
--------------------------
Java relational operators are used to check relationship between two operands such as less than, less than or equal to, greater than, greater than or equal to, equal to and not equal to. These operators return boolean values either true or false.

< : Less Than
> : Greater Than
<= : Less Than or Equal to
>= : Greater Than or Equal to
== : Equal to
!= : Not Equal to

Java Relational Operator Example
--------------------------------

```
int a=10;  
int b=20;  
System.out.println("(a < b) : " + (a<b));  
System.out.println("(a > b) : " + (a>b));  
System.out.println("(a <= b) : " + (a<=b));  
System.out.println("(a >= b) : " + (a>=b));  
System.out.println("(a == b) : " + (a==b));  
System.out.println("(a != b) : " + (a!=b));  

```

```
Output:

(a < b) : true
(a > b) : false
(a <= b) : true
(a >= b) : false
(a == b) : false
(a != b) : true

```
Java AND Operator Example: Logical && and Bitwise 
---------------------------------------------------
The logical && operator does not check the second condition if the first condition is false. It checks the second condition only if the first one is true.

The bitwise & operator always checks both conditions whether first condition is true or false.

```
public class OperatorExample9{    
public static void main(String args[]){    
int a=10;    
int b=5;    
int c=20;    
System.out.println(a<b&&a<c);//false && true = false    
System.out.println(a<b&a<c);//false & true = false    
}}    

```
Output:

false
false

Java AND Operator Example: Logical && vs Bitwise &
File Name: OperatorExample10.java

```
public class OperatorExample10{    
public static void main(String args[]){    
int a=10;    
int b=5;    
int c=20;    
System.out.println(a<b&&a++<c);//false && true = false    
System.out.println(a);//10 because second condition is not checked    
System.out.println(a<b&a++<c);//false && true = false    
System.out.println(a);//11 because second condition is checked    
}}  

```
Output:

false
10
false
11


Java OR Operator Example: Logical || and Bitwise |
The logical || operator does not check the second condition if the first condition is true. It checks the second condition only if the first one is false.

The bitwise | operator always checks both conditions whether first condition is true or false.

File Name: OperatorExample11.java

```
public class OperatorExample11{    
public static void main(String args[]){    
int a=10;    
int b=5;    
int c=20;    
System.out.println(a>b||a<c);//true || true = true    
System.out.println(a>b|a<c);//true | true = true    
//|| vs |    
System.out.println(a>b||a++<c);//true || true = true    
System.out.println(a);//10 because second condition is not checked    
System.out.println(a>b|a++<c);//true | true = true    
System.out.println(a);//11 because second condition is checked    
}}  

```
Output:

true
true
true
10
true
11

Java Ternary Operator
-----------------------
Java Ternary operator is used as one line replacement for if-then-else statement and used a lot in Java programming. It is the only conditional operator which takes three operands.

Java Ternary Operator Example
-----------------------------------
File Name: OperatorExample12.java

```
public class OperatorExample12{    
public static void main(String args[]){    
int a=2;    
int b=5;    
int min=(a<b)?a:b;    
System.out.println(min);    
}}    

```

Output:
2

Java Assignment Operator
---------------------------
Java assignment operator is one of the most common operators. It is used to assign the value on its right to the operand on its left.

Java Assignment Operator Example
-----------------------------------
File Name: OperatorExample14.java

```
public class OperatorExample14{  
public static void main(String args[]){  
int a=10;  
int b=20;  
a+=4;//a=a+4 (a=10+4)  
b-=4;//b=b-4 (b=20-4)  
System.out.println(a);  
System.out.println(b);  
}}  


```
Conclusion
------------
Operators are a fundamental part of Java programming, enabling developers to perform various tasks ranging from simple arithmetic to complex bitwise operations. Understanding the different types of operators and their precedence is crucial for writing efficient and effective Java code. 

Java Keywords
-------------
Java keywords are also known as reserved words. Keywords are particular words that act as a key to a code. 
These are predefined words by Java so they cannot be used as a variable or object name or class name

List of Java Keywords
A list of Java keywords or reserved words are given below:

abstract: Java abstract keyword is used to declare an abstract class. An abstract class can provide the implementation of the interface. It can have abstract and non-abstract methods.

boolean: Java boolean keyword is used to declare a variable as a boolean type. It can hold True and False values only.

break: Java break keyword is used to break the loop or switch statement. It breaks the current flow of the program at specified conditions.

byte: Java byte keyword is used to declare a variable that can hold 8-bit data values.

case: Java case keyword is used with the switch statements to mark blocks of text.

catch: Java catch keyword is used to catch the exceptions generated by try statements. It must be used after the try block only.

char: Java char keyword is used to declare a variable that can hold unsigned 16-bit Unicode characters

class: Java class keyword is used to declare a class.

continue: Java continue keyword is used to continue the loop. It continues the current flow of the program and skips the remaining code at the specified condition.

default: Java default keyword is used to specify the default block of code in a switch statement.

do: Java do keyword is used in the control statement to declare a loop. It can iterate a part of the program several times.

double: Java double keyword is used to declare a variable that can hold 64-bit floating-point number.

else: Java else keyword is used to indicate the alternative branches in an if statement.

enum: Java enum keyword is used to define a fixed set of constants. Enum constructors are always private or default.

extends: Java extends keyword is used to indicate that a class is derived from another class or interface.

final: Java final keyword is used to indicate that a variable holds a constant value. It is used with a variable. It is used to restrict the user from updating the value of the variable.

finally: Java finally keyword indicates a block of code in a try-catch structure. This block is always executed whether an exception is handled or not.

float: Java float keyword is used to declare a variable that can hold a 32-bit floating-point number.

for: Java for keyword is used to start a for loop. It is used to execute a set of instructions/functions repeatedly when some condition becomes true.

If the number of iteration is fixed, it is recommended to use for loop.

if: Java if keyword tests the condition. It executes the if block if the condition is true.

implements: Java implements keyword is used to implement an interface.

import: Java import keyword makes classes and interfaces available and accessible to the current source code.

instanceof: Java instanceof keyword is used to test whether the object is an instance of the specified class or implements an interface.

int: Java int keyword is used to declare a variable that can hold a 32-bit signed integer.

interface: Java interface keyword is used to declare an interface. It can have only abstract methods.

long: Java long keyword is used to declare a variable that can hold a 64-bit integer.

native: Java native keyword is used to specify that a method is implemented in native code using JNI (Java Native Interface).

new: Java new keyword is used to create new objects.

null: Java null keyword is used to indicate that a reference does not refer to anything. It removes the garbage value.

package: Java package keyword is used to declare a Java package that includes the classes.

private: Java private keyword is an access modifier. It is used to indicate that a method or variable may be accessed only in the class in which it is declared.

protected: Java protected keyword is an access modifier. It can be accessible within the package and outside the package but through inheritance only. It can't be applied with the class.

public: Java public keyword is an access modifier. It is used to indicate that an item is accessible anywhere. It has the widest scope among all other modifiers.

return: Java return keyword is used to return from a method when its execution is complete.

short: Java short keyword is used to declare a variable that can hold a 16-bit integer.

static: Java static keyword is used to indicate that a variable or method is a class method. The static keyword in Java is mainly used for memory management.

strictfp: Java strictfp is used to restrict the floating-point calculations to ensure portability.

super: Java super keyword is a reference variable that is used to refer to parent class objects. It can be used to invoke the immediate parent class method.

switch: The Java switch keyword contains a switch statement that executes code based on test value. The switch statement tests the equality of a variable against multiple values.

synchronized: Java synchronized keyword is used to specify the critical sections or methods in multithreaded code.

this: Java this keyword can be used to refer the current object in a method or constructor.

throw: The Java throw keyword is used to explicitly throw an exception. The throw keyword is mainly used to throw custom exceptions. It is followed by an instance.

throws: The Java throws keyword is used to declare an exception. Checked exceptions can be propagated with throws.

transient: Java transient keyword is used in serialization. If you define any data member as transient, it will not be serialized.

try: Java try keyword is used to start a block of code that will be tested for exceptions. The try block must be followed by either catch or finally block.

void: Java void keyword is used to specify that a method does not have a return value.

volatile: Java volatile keyword is used to indicate that a variable may change asynchronously.

while: Java while keyword is used to start a while loop. This loop iterates a part of the program several times. If the number of iteration is not fixed, it is recommended to use the while loop.

Control Statements in Java
Java compiler executes the code from top to bottom. The statements in the code are executed according to the order in which they appear. However, Java provides statements that can be used to control the flow of Java code. Such statements are called control flow statements. It is one of the fundamental features of Java, which provides a smooth flow of program.

Java provides three types of control flow statements.

Decision Making statements
---------------------------
if statements
switch statement
Loop statements
do while loop
while loop
for loop
for-each loop
Jump statements
break statement
continue statement

Decision-Making statements:
--------------------------
As the name suggests, decision-making statements decide which statement to execute and when. Decision-making statements evaluate the Boolean expression and control the program flow depending upon the result of the condition provided. There are two types of decision-making statements in Java, i.e., If statement and switch statement.

1) If Statement:
----------------
In Java, the "if" statement is used to evaluate a condition. The control of the program is diverted depending upon the specific condition. The condition of the If statement gives a Boolean value, either true or false. In Java, there are four types of if-statements given below.

Simple if statement
if-else statement
if-else-if ladder
Nested if-statement
Let's understand the if-statements one by one.

1) Simple if statement:
-----------------------
It is the most basic statement among all control flow statements in Java. It evaluates a Boolean expression and enables the program to enter a block of code if the expression evaluates to true.

Syntax of if statement is given below.

if(condition) {    
statement 1; //executes when condition is true   
}    

```
public class Main {      
    public static void main(String[] args) {      
        int x = 10;      
        int y = 12;      
        if(x+y > 20) {      
            System.out.println("x + y is greater than 20");      
        }      
    }        
}       

```

```
Output:

x + y is greater than 20

```
2) if-else statement
The if-else statement is an extension to the if-statement, which uses another block of code, i.e., else block. The else block is executed if the condition of the if-block is evaluated as false.

Syntax:

if(condition) {    
statement 1; //executes when condition is true   
}  
else{  
statement 2; //executes when condition is false   
}  

Example
--------

```
public class Main {    
    public static void main(String[] args) {    
        int x = 10;    
        int y = 12;    
        if(x+y < 10) {    
            System.out.println("x + y is less than 10");    
        }   else {    
            System.out.println("x + y is greater than 20");    
        }    
    }    
}    

```

```

Output:

x + y is greater than 20

```
3) if-else-if ladder:
The if-else-if statement contains the if-statement followed by multiple else-if statements. In other words, we can say that it is the chain of if-else statements that create a decision tree where the program may enter in the block of code where the condition is true. We can also define an else statement at the end of the chain.

```
Syntax of if-else-if statement is given below.

if(condition 1) {    
statement 1; //executes when condition 1 is true   
}  
else if(condition 2) {  
statement 2; //executes when condition 2 is true   
}  
else {  
statement 2; //executes when all the conditions are false   
}  

```
```
Example
public class Main {    
    public static void main(String[] args) {    
        String city = "Delhi";    
        if(city == "Meerut") {    
        System.out.println("city is meerut");    
        }else if (city == "Noida") {    
        System.out.println("city is noida");    
        }else if(city == "Agra") {    
        System.out.println("city is agra");    
        }else {    
        System.out.println(city);    
        }    
    }    
}    

```

```
Output:

Delhi

```
4. Nested if-statement
In nested if-statements, the if statement can contain a if or if-else statement inside another if or else-if statement.

Syntax of Nested if-statement is given below.

```
if(condition 1) {    
statement 1; //executes when condition 1 is true   
if(condition 2) {  
statement 2; //executes when condition 2 is true   
}  
else{  
statement 2; //executes when condition 2 is false   
}  
} 

```

public class Main {      
    public static void main(String[] args) {      
        String address = "Delhi, India";      
      
        if(address.endsWith("India")) {      
            if(address.contains("Meerut")) {      
            System.out.println("Your city is Meerut");      
            }else if(address.contains("Noida")) {      
            System.out.println("Your city is Noida");      
            }else {      
            System.out.println(address.split(",")[0]);      
        }      
        }else {      
            System.out.println("You are not living in India");      
        }      
    }      
}   

Output:

Delhi

Switch Statement:
----------------
In Java, Switch statements are similar to if-else-if statements. The switch statement contains multiple blocks of code called cases and a single case is executed based on the variable which is being switched. The switch statement is easier to use instead of if-else-if statements. It also enhances the readability of the program.

Points to be noted about switch statement:
-----------------------------------------
The case variables can be int, short, byte, char, or enumeration. String type is also supported since version 7 of Java
Cases cannot be duplicate
Default statement is executed when any of the case doesn't match the value of expression. It is optional.
Break statement terminates the switch block when the condition is satisfied.
It is optional, if not used, next case is executed.
While using switch statements, we must notice that the case expression will be of the same type as the variable. However, it will also be a constant value.

The syntax to use the switch statement is given below.

```
switch (expression){  
    case value1:  
     statement1;  
     break;  
    .  
    .  
    .  
    case valueN:  
     statementN;  
     break;  
    default:  
     default statement;  
}  

```
```
public class Main {    
    public static void main(String[] args) {    
        int num = 2;    
        switch (num){    
            case 0:    
            System.out.println("number is 0");    
            break;    
            case 1:    
            System.out.println("number is 1");    
            break;    
            default:    
            System.out.println(num);    
        }    
    }    
}    

```

```
Output:

2

```
Note:
----
While using switch statements, we must notice that the case expression will be of the same type as the variable. However, it will also be a constant value. The switch permits only int, string, and Enum type variables to be used.

Loop Statements
---------------
In programming, sometimes we need to execute the block of code repeatedly while some condition evaluates to true. However, loop statements are used to execute the set of instructions in a repeated order. The execution of the set of instructions depends upon a particular condition.

In Java, we have three types of loops that execute similarly. However, there are differences in their syntax and condition checking time.

for loop
while loop
do-while loop
Let's understand the loop statements one by one.

Java for loop
In Java, for loop is similar to C and C++. It enables us to initialize the loop variable, check the condition, and increment/decrement in a single line of code. We use the for loop only when we exactly know the number of times, we want to execute the block of code.

for(initialization, condition, increment/decrement) {    
//block of statements    
}    
The flow chart for the for-loop is given below.

![image](https://github.com/user-attachments/assets/c1909dec-ce76-489b-9e91-f8ad63c06f89)

Consider the following example to understand the proper functioning of the for loop in java.

```
Example
public class Main {    
    public static void main(String[] args) {    
        // TODO Auto-generated method stub    
        int sum = 0;    
        for(int j = 1; j<=10; j++) {    
            sum = sum + j;    
        }    
        System.out.println("The sum of first 10 natural numbers is " + sum);    
    }    
}    

```

```
Output:

The sum of first 10 natural numbers is 55

```
Java for-each loop
------------------
Java provides an enhanced for loop to traverse the data structures like array or collection. 
In the for-each loop, we don't need to update the loop variable. The syntax to use the for-each loop in java is given below.

for(data_type var : array_name/collection_name){    
//statements    
}    

Consider the following example to understand the functioning of the for-each loop in Java.

```
Example
public class Main {      
    public static void main(String[] args) {      
        String[] names = {"Java","C","C++","Python","JavaScript"};      
        System.out.println("Printing the content of the array names:");      
        for(String name:names) {      
            System.out.println(name);      
        }      
    }      
}      

```

```
Output:

Printing the content of the array names:

Java
C
C++
Python
JavaScript

```
Java while loop
---------------
The while loop is also used to iterate over the number of statements multiple times. However, if we don't know the number of iterations in advance, it is recommended to use a while loop. Unlike for loop, the initialization and increment/decrement doesn't take place inside the loop statement in while loop.

It is also known as the entry-controlled loop since the condition is checked at the start of the loop. If the condition is true, then the loop body will be executed; otherwise, the statements after the loop will be executed.

The syntax of the while loop is given below.

```
while(condition){    
//looping statements    
}  

```
The flow chart for the while loop is given in the following image.

![image](https://github.com/user-attachments/assets/afe2ca11-ddaa-46ec-a3e9-1c37c8c783b8)

```
public class Main {      
    public static void main(String[] args) {      
        int i = 0;      
        System.out.println("Printing the list of first 10 even numbers");      
        while(i<=10) {      
            System.out.println(i);      
            i = i + 2;      
        }      
    }      
}      

```
```
Output:

Printing the list of first 10 even numbers

0
2
4
6
8
10

```
Java do-while loop
-------------------
The do-while loop checks the condition at the end of the loop after executing the loop statements. When the number of iteration is not known and we have to execute the loop at least once, we can use do-while loop.

It is also known as the exit-controlled loop since the condition is not checked in advance. The syntax of the do-while loop is given below.

```
do     
{    
//statements    
} while (condition);    

```
The flow chart of the do-while loop is given in the following image.

![image](https://github.com/user-attachments/assets/328990f3-ba83-40b8-8770-126c4c2784cf)

```
public class Main {      
    public static void main(String[] args) {      
        int i = 0;      
        System.out.println("Printing the list of first 10 even numbers ");      
        do {      
            System.out.println(i);      
            i = i + 2;      
        }while(i<=10);      
    }      
}    

```

```
Output:

Printing the list of first 10 even numbers
0
2
4
6
8
10

```
Jump Statements:
----------------
Jump statements are used to transfer the control of the program to the specific statements. In other words, jump statements transfer the execution control to the other part of the program. There are two types of jump statements in Java, i.e., break and continue.

Java break statement
---------------------
As the name suggests, the break statement is used to break the current flow of the program and transfer the control to the next statement outside a loop or switch statement. However, it breaks only the inner loop in the case of the nested loop.

The break statement cannot be used independently in the Java program, i.e., it can only be written inside the loop or switch statement.

The break statement example with for loop

Consider the following example in which we have used the break statement with the for loop.

```
Example
public class Main {    
    public static void main(String[] args) {    
        for(int i = 0; i<= 10; i++) {    
            System.out.println(i);    
            if(i==6) {    
            break;    
            }    
        }    
    }    
}    

```
0
1
2
3
4
5
6

break statement example with labeled for loop

```
Example
public class Main {      
public static void main(String[] args) {      
    a:      
    for(int i = 0; i<= 10; i++) {      
        b:      
        for(int j = 0; j<=15;j++) {      
            c:      
            for (int k = 0; k<=20; k++) {      
                System.out.println(k);      
                if(k==5) {      
                break a;      
                }      
            }      
        }      
      
    }      
}      
} 

```

Output:
0
1
2
3
4
5

Java continue statement
-----------------------
Unlike break statement, the continue statement doesn't break the loop, whereas, it skips the specific part of the loop and jumps to the next iteration of the loop immediately.

Consider the following example to understand the functioning of the continue statement in Java.

public class Main {    
public static void main(String[] args) {      
    for(int i = 0; i<= 2; i++) {    
    
        for (int j = i; j<=5; j++) {    
    
            if(j == 4) {    
            continue;    
            }    
            System.out.println(j);    
        }    
    }    
}      
}  

Output:

0
1
2
3
5
1
2
3
5
2
3
5

Java Control Statement MCQ
--------------------------
1. What is the key difference between the while loop and the do-while loop in Java

The while loop executes its body at least once, while the do-while loop may not execute its body at all.

The while loop always checks the loop condition at the end of the loop body, while the do-while loop checks it at the beginning.

The do-while loop is suitable for scenarios where the loop body must execute a fixed number of times, while the while loop is more flexible.

There is no difference between the while loop and the do-while loop.

Answer: a)

Explanation: Unlike the while loop, which checks the condition at the beginning, the do-while loop checks the condition at the end, ensuring that the loop body executes at least once.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. When is the continue statement commonly used in Java?

To exit the loop completely

To skip the rest of the loop body and continue with the next iteration

To restart the loop from the beginning

To break out of nested loops

Answer: b)

Explanation: The continue statement is used to skip the remaining code inside the loop body for the current iteration and move to the next iteration of the loop.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. What happens if the break statement is used inside a nested loop in Java?

It exits only the innermost loop and continues with the outer loop.

It exits all the nested loops and continues with the code after the outermost loop.

It causes a compilation error.

It exits only the outer loop and continues with the inner loop.

Answer: a)

Explanation: The break statement, when encountered inside a nested loop, exits only the innermost loop and continues with the outer loop.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4.  What is the significance of the default case in a switch statement?

It is executed when none of the other cases match the value of the expression.

It is executed before any other case in the switch statement.

It is optional and not required in a switch statement.

It is executed if the value of the expression is null.

Answer: a)

Explanation: The default case is executed if none of the other cases in the switch statement match the value of the expression being evaluated.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

5. In a for loop in Java, which of the following components is optional?

Initialization

Condition

Increment/Decrement

All components are mandatory


Answer: d)

Explanation: In Java's for loop, all three components - initialization, condition, and increment/decrement - are mandatory and must be present for the loop to function correctly.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


Java if-else Statement
----------------------
In the realm of programming, decision-making plays a pivotal role in determining the flow of execution. Whether it's directing traffic in a complex intersection or navigating through various scenarios in a program, making decisions is essential. In Java, one of the fundamental constructs for decision-making is the 'if-else' statement. Let's delve into what 'if-else' statements are, how they work, and how they can be effectively utilized in Java programming.

The Java if statement is used to test the condition. It checks boolean condition: true or false. There are various types of if statement in Java.

if statement
if-else statement
if-else-if ladder
nested if statement

How Does It Work?

When the 'if-else' statement is encountered, the condition within the parentheses is evaluated. If the condition evaluates to true, the block of code inside the 'if' block is executed. However, if the condition evaluates to false, the block of code inside the 'else' block is executed. It allows the program to take different paths based on the outcome of the condition.

Java if Statement

The Java if statement tests the condition. It executes the if block if condition is true.


Syntax:

if(condition){  
//code to be executed  
}  

![image](https://github.com/user-attachments/assets/b2078ac8-f53a-49e0-88c4-ba44114f9808)

```
/Java Program to demonstate the use of if statement.  
public class Main {  
public static void main(String[] args) {  
    //defining an 'age' variable  
    int age=20;  
    //checking the age  
    if(age>18){  
        System.out.print("Age is greater than 18");  
    }  
}  
}  

```

```
Output:

Age is greater than 18

```
Java if-else Statement
The Java if-else statement also tests the condition. It executes the if block if condition is true otherwise else block is executed.

Syntax:

if(condition){  
//code if condition is true  
}else{  
//code if condition is false  
}  

![image](https://github.com/user-attachments/assets/a66b5643-3179-4b53-90df-ed6d7c12e747)

```
/Java Program to demonstrate the use of if-else statement.  
//It is a program of odd and even number.  
public class Main {  
public static void main(String[] args) {  
    //defining a variable  
    int number=13;  
    //Check if the number is divisible by 2 or not  
    if(number%2==0){  
        System.out.println("even number");  
    }else{  
        System.out.println("odd number");  
    }  
}  
}  

```
```
Output:

odd number

```
Leap Year Example Using IfElse:

A year is leap, if it is divisible by 4 and 400. But, not by 100.

Example

```
public class Main {    
public static void main(String[] args) {    
    int year=2020;    
    if(((year % 4 ==0) && (year % 100 !=0)) || (year % 400==0)){  
        System.out.println("LEAP YEAR");  
    }  
    else{  
        System.out.println("COMMON YEAR");  
    }  
}    
}    

```

```
Output:

LEAP YEAR

```
Java if-else-if ladder Statement
----------------------------------

The if-else-if ladder statement executes one condition from multiple statements.

Syntax:

```
if(condition1){  
//code to be executed if condition1 is true  
}else if(condition2){  
//code to be executed if condition2 is true  
}  
else if(condition3){  
//code to be executed if condition3 is true  
}  
...  
else{  
//code to be executed if all the conditions are false  
}  

```
![image](https://github.com/user-attachments/assets/52d24cfe-d139-4963-95c9-a970990474f6)

//Java Program to demonstrate the use of If else-if ladder.  
//It is a program of grading system for fail, D grade, C grade, B grade, A grade and A+.  
public class Main {  
public static void main(String[] args) {  
    int marks=65;  
      
    if(marks<50){  
        System.out.println("fail");  
    }  
    else if(marks>=50 && marks<60){  
        System.out.println("D grade");  
    }  
    else if(marks>=60 && marks<70){  
        System.out.println("C grade");  
    }  
    else if(marks>=70 && marks<80){  
        System.out.println("B grade");  
    }  
    else if(marks>=80 && marks<90){  
        System.out.println("A grade");  
    }else if(marks>=90 && marks<100){  
        System.out.println("A+ grade");  
    }else{  
        System.out.println("Invalid!");  
    }  
}  
}  


Output:

C grade

Java Nested if statement
--------------------------
The nested if statement represents the if block within another if block. Here, the inner if block condition executes only when outer if block condition is true.

Syntax:

```
if(condition){    
     //code to be executed    
          if(condition){  
             //code to be executed    
    }    
}  

```
![image](https://github.com/user-attachments/assets/42fe1d03-51f1-4d40-8b47-b21dfb762699)

```
//Java Program to demonstrate the use of Nested If Statement.  
public class Main {    
public static void main(String[] args) {    
    //Creating two variables for age and weight  
    int age=20;  
    int weight=80;    
    //applying condition on age and weight  
    if(age>=18){    
        if(weight>50){  
            System.out.println("You are eligible to donate blood");  
        }    
    }    
}}  

```
```
Output:

You are eligible to donate blood

```
```
//Java Program to demonstrate the use of Nested If Statement.    
public class Main {      
public static void main(String[] args) {      
    //Creating two variables for age and weight    
    int age=25;    
    int weight=48;      
    //applying condition on age and weight    
    if(age>=18){      
        if(weight>50){    
            System.out.println("You are eligible to donate blood");    
        } else{  
            System.out.println("You are not eligible to donate blood");    
        }  
    } else{  
      System.out.println("Age must be greater than 18");  
    }  
}    
}  

```
```
Output:

You are not eligible to donate blood

```
Ternary Operator
We can also use ternary operator (? :) to perform the task of if...else statement. It is a shorthand way to check the condition. If the condition is true, the result of ? is returned. But, if the condition is false, the result of : is returned.

```
Example
public class Main {    
public static void main(String[] args) {    
    int number=13;    
    //Using ternary operator  
    String output=(number%2==0)?"even number":"odd number";    
    System.out.println(output);  
}    
}    

```

```
Output:

odd number

```
Conclusion:
------------
'If-else' statements are indispensable tools in Java programming for making decisions based on conditions. They provide the flexibility to execute different code blocks based on varying circumstances, thus enabling developers to create dynamic and responsive applications. By mastering the usage of 'if-else' statements, programmers can unlock the full potential of Java for crafting efficient and robust software solutions.

Java if-else MCQ
----------------
1. What is the key difference between if statement and if-else statement in Java?

if statement allows multiple conditions to be evaluated sequentially.

if statement always requires an else block for execution.

if statement executes only if the condition is true, whereas if-else executes either the if block or the else block based on the condition.

if statement does not support boolean conditions.

Answer: C

Explanation: The if statement checks a condition and executes a block of code if the condition is true. The if-else statement additionally provides an alternative block of code to execute if the condition is false.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

2. In a Java program, which of the following statements about if-else-if ladder is correct?

Only one condition in the ladder can be true at a time, and its corresponding block of code is executed.

Each condition in the ladder is evaluated independently regardless of the previous conditions.

The else block is mandatory at the end of an if-else-if ladder.

if-else-if ladder can have a maximum of three conditions.

Answer: A

Explanation: In an if-else-if ladder, each condition is evaluated sequentially. Once a condition is true, its corresponding block of code executes, and subsequent conditions are skipped.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

3. Which scenario would result in a StringIndexOutOfBoundsException when using if-else statements?

Checking if a string is empty using if (str.isEmpty()).

Comparing two strings using if (str1.equals(str2)).

Checking the length of a string using if (str.length() > 10).

Accessing a character at an index that exceeds the length of the string using if (str.charAt(15) == 'a').

Answer: D

Explanation: In Java, accessing a character at an index that exceeds the length of the string causes a StringIndexOutOfBoundsException, as strings are zero-indexed and the index must be within the bounds of the string length.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


4. Consider the following code snippet:

```
int x = 10;  
f (x > 5) {  
   System.out.println("x is greater than 5");  
 else if (x > 7) {  
   System.out.println("x is greater than 7");  
 else {  
   System.out.println("x is less than or equal to 5");  
  
```  
What will be the output if x is assigned a value of 4?

x is greater than 5

x is greater than 7

x is less than or equal to 5

No output will be printed.

Answer: C

Explanation: Since x is 4, the first condition x > 5 is false. The second condition x > 7 is also false. Therefore, the else block is executed, printing x is less than or equal to 5.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Java Switch Statement
----------------------
The Java switch statement executes one statement from multiple conditions. It is like if-else-if ladder statement. The switch statement works with byte, short, int, long, enum types, String and some wrapper types like Byte, Short, Int, and Long. Since Java 7, we can use strings in the switch statement.

The switch statement can be described as control flow type statement which is utilized for manipulating the flow of program execution and invoking various branches of code using the value of an expression.

In other words, the switch statement tests the equality of a variable against multiple values.

Points to Remember

There can be one or N number of case values for a switch expression.

The case value must be of switch expression type only. The case value must be literal or constant. It doesn't allow variables.

The case values must be unique. In case of duplicate value, it renders compile-time error.

The Java switch expression must be of byte, short, int, long (with its Wrapper type), enums and string.

Each case statement can have a break statement which is optional. When control reaches to the break statement, it jumps the control after the switch expression. 

If a break statement is not found, it executes the next case.

The case value can have a default label which is optional

```
Syntax:

switch(expression){    
case value1:    
 //code to be executed;    
 break;  //optional  
case value2:    
 //code to be executed;    
 break;  //optional  
......    
    
default:     
  code to be executed if all cases are not matched;  
}    

```
![image](https://github.com/user-attachments/assets/ab699f01-0fc2-4199-b585-4604faad8e36)

Finding Month Example:

```
Example
//Java Program to demonstrate the example of Switch statement  
//where we are printing month name for the given number  
public class Main {    
public static void main(String[] args) {    
    //Specifying month number  
    int month=7;    
    String monthString="";  
    //Switch statement  
    switch(month){    
    //case statements within the switch block  
    case 1: monthString="1 - January";  
    break;    
    case 2: monthString="2 - February";  
    break;    
    case 3: monthString="3 - March";  
    break;    
    case 4: monthString="4 - April";  
    break;    
    case 5: monthString="5 - May";  
    break;    
    case 6: monthString="6 - June";  
    break;    
    case 7: monthString="7 - July";  
    break;    
    case 8: monthString="8 - August";  
    break;    
    case 9: monthString="9 - September";  
    break;    
    case 10: monthString="10 - October";  
    break;    
    case 11: monthString="11 - November";  
    break;    
    case 12: monthString="12 - December";  
    break;    
    default:System.out.println("Invalid Month!");    
    }    
    //Printing month of the given number  
    System.out.println(monthString);  
}    
}   

```

```
Output:

7 - July

```

Java Comments
---------------
The Java comments are the statements in a program that are not executed by the compiler and interpreter.

Why do we use comments in a code?

Comments are used to make the program more readable by adding the details of the code.

It makes easy to maintain the code and to find the errors easily.

The comments can be used to provide information or explanation about the variable, method, class, or any statement.

It can also be used to prevent the execution of program code while testing the alternative code.

Types of Java Comments
----------------------
There are three types of comments in Java.

Single Line Comment

Multi Line Comment

Documentation Comment

![image](https://github.com/user-attachments/assets/64072eb8-8b2c-41bc-8d34-dd13c3f9c72b)

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

OOPs (Object-Oriented Programming System)
-----------------------------------------
Object means a real-world entity such as a mobile, book, table, computer, watch, etc. Object-Oriented Programming is a methodology or paradigm to design a program using classes and objects. It simplifies software development and maintenance by providing some concepts.


![image](https://github.com/user-attachments/assets/8ad16f74-40fe-44c2-80a6-e2eda23a48b9)


Object:
--------
Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.

An Object can be defined as an instance of a class. It contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects.

Example: A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.

![image](https://github.com/user-attachments/assets/2ab24a3b-9ba1-48f8-9d80-7c70b2b83bec)

Class
-----

Collection of objects is called class. It is a logical entity.

A class can also be defined as a blueprint from which you can create an individual object. Class does not consume any space.

A class is a group of objects which have common properties. It is a template or blueprint from which objects are created. It is a logical entity. It can't be physical.

![image](https://github.com/user-attachments/assets/815d72c9-a5d6-4d0d-a4c3-adf56e0c6ab0)

Examples of Class
-----------------

If you want to create a class for students. In that case, "Student" will be a class, and student records (like student1, student2, etc) will be objects.

We can also consider that class is a factory (user-defined blueprint) to produce objects.


Object
In object-oriented programming, an object is an entity that has two characteristics (states and behavior). Some of the real-world objects are book, mobile, table, computer, etc. An object is a variable of the type class, it is a basic component of an object-oriented programming system. A class has the methods and data members (attributes), these methods and data members are accessed through an object. Thus, an object is an instance of a class.

In object oriented programming, classes and objects play a vital role in programming. These are the two main pillars of OOPs (Object-Oriented Programming). Without class and object, we cannot create a program in Java. So, in this section, we are going to discuss about classes and objects in Java.

![image](https://github.com/user-attachments/assets/ced8119a-f778-459e-bcc8-d6c3cebc4e88)

An object is a real-word entity that has state and behaviour. In other words, an object is a tangible thing that can be touch and feel, like a car or chair, etc. are the example of objects.
The banking system is an example of an intangible object. Every object has a distinct identity, which is usually implemented by a unique ID that the JVM uses internally for identification.

Characteristics of an Object:
----------------------------

State: It represents the data (value) of an object.

Behavior: It represents the behavior (functionality) of an object such as deposit, withdraw, etc.

Identity: An object's identity is typically implemented via a unique ID. The ID's value is not visible to the external user; however, it is used internally by the JVM to identify each object uniquely.

For Example, Pen is an object. Its name is Reynolds; color is white, known as its state. It is used to write, so writing is its behavior.

Example of Objects
Continuing with the example of students, let's create some students as objects and print their details.

An object is an instance of a class. A class is a template or blueprint from which objects are created. So, an object is the instance(result) of a class.

Instance Variable in Java
---------------------------
A variable created inside the class but outside the method is known as an instance variable. An instance variable does not get memory at compile time; it gets memory at runtime when an object or instance is created.

Each class instance has its own copy of instance variables, which means that changes made to instance variables of one object do not affect the values of instance variables in other objects of the same class. Moreover, setter methods and constructors can be used to initialize them. In object-oriented programming, instance variables are crucial for encapsulating data within objects since they are frequently used to represent the state or properties of objects.

Method in Java
---------------
In Java method is a block of code inside a class that's intended to carry out a certain function. To provide a mechanism to interact with the state of an object and to encapsulate behaviour within objects, methods are required.

Advantages of Methods
---------------------
Code Reusability: Methods encourage code reusability by permitting the same block of code to be used repeatedly inside a program. Once defined, a method can be called from any area of the program where it is available.

Code Optimisation: Methods allow for code optimization by enclosing intricate or repetitive functionality into reusable components. The modularization of logic facilitates readability and simplifies code maintenance.

new keyword in Java:
--------------------
The new keyword is used to allocate memory at runtime. All objects get memory in the Heap memory area

In Java, an instance of a class (also referred to as an object) is created using the new keyword. The new keyword dynamically allocates memory for an object of that class and returns a reference to it when it is followed by the class name and brackets with optional argument

Object and Class Example: main() method within the class
In Java, the main() method can be declared in a class, which is typically done in demonstration or basic programs. Having the main() method defined inside of a class allows a program to run immediately without creating a separate class containing it.

In this example, we have created a Student class which has two data members id and name. We are creating the object of the Student class by new keyword and printing the object's value.

Here, we are creating a main() method inside the class.

File: Student.java

```
/Java Program to illustrate how to define a class and fields  
//Defining a Student class.  
class Student{  
 //defining fields  
 int id;//field or data member or instance variable  
 String name;  
 //creating main method inside the Student class  
 public static void main(String args[]){  
  //Creating an object or instance  
  Student s1=new Student();//creating an object of Student  
  //Printing values of the object  
  System.out.println(s1.id);//accessing member through reference variable  
  System.out.println(s1.name);  
 }  
}
```

Output:
```
0
null
```

Explanation:
-------------

Two fields are defined for the Student class in this Java programme: an int type for the id and a string type for the name. The Student class itself defines the primary method. The new keyword is used to create an object s1 of type Student inside the main procedure. The fields' default values-0 for int and null for String-are printed because they are not explicitly initialised. The values of the s1 object's name and id fields are finally printed by the programme.

Object and Class Example: main() method Outside the Class
---------------------------------------------------------

In real-world development, it is usual practice to organise Java classes into distinct files and to place the main method outside of the class it is intended to execute from. This strategy improves the readability, maintainability, and reusability of the code.

In real time development, we create classes and use it from another class. It is a better approach than previous one. Let's see a simple example, where we are having main() method in another class.

We can have multiple classes in different Java files or single Java file. If you define multiple classes in a single Java source file, it is a good idea to save the file name with the class name which has main() method.

```
//Creating a Student class   
class Student{    
 //declaring fields or instance variables  
 int id;    
 String name;    
}    
//Creating another class which contains the main() method    
class Main{    
 public static void main(String args[]){    
  Student s1=new Student();    
  System.out.println(s1.id);    
  System.out.println(s1.name);    
 }    
}
```
Output:
```
0
null
```
Explanation
-----------
The main method in this Java programme is shown to be in a different class than the Student class. There are no methods defined for the two fields, name and id, in the Student class. The main method then resides in a another class called TestStudent1, where the default constructor is used to generate an object s1 of type Student. The fields name and id are written with their default values, which are null for String and 0 for int, since they are not explicitly initialised.

Initializing Object in Java
There are the following three ways to initialize object in Java.

By reference variable
By method
By constructor

1) Object Initialization through Reference Variable
----------------------------------------------------

Initializing an object means storing data in the object. Let's see a simple example where we are going to initialize the object through a reference variable.

```
class Student{    
 int id;    
 String name;    
}    
public class Main{    
 public static void main(String args[]){    
  //Creating instance of Student class  
  Student s1=new Student();    
  //assigning values through reference variable  
  s1.id=101;    
  s1.name="Sonoo";    
  //printing values of s1 object  
  System.out.println(s1.id+" "+s1.name);    
 }    
}
```
Output:
```
101 Sonoo
```
Explanation
------------
There are two classes in this Java code: Student and TestStudent2. The two fields that the Student class defines, id and name, stand for the student's ID and name, respectively. The main method, which is the program's entry point, is specified in the TestStudent2 class. The new keyword is used to create an object s1 of type Student inside the main procedure. Next, values 101 and "Sonoo" are initialised in the id and name fields of s1.

We can also create multiple objects and store information in it through reference variable.

2) Object Initialization through Method
------------------------------------
In this example, we are creating the two objects of Student class and initializing the value to these objects by invoking the insertRecord method.

Here, we are displaying the state (data) of the objects by invoking the displayInformation() method.

```
class Student{    
 int rollno;    
 String name;    
 void insertRecord(int r, String n){    
  rollno=r;    
  name=n;    
 }    
 void displayInformation(){System.out.println(rollno+" "+name);}    
}    
public class Main{    
 public static void main(String args[]){    
  Student s1=new Student();    
  Student s2=new Student();    
  s1.insertRecord(111,"Karan");    
  s2.insertRecord(222,"Aryan");    
  s1.displayInformation();    
  s2.displayInformation();    
 }    
}
```

Output:
```
111 Karan
222 Aryan
```
The provided Java code includes two classes: Student and TestStudent4. The Student class includes rollno and name fields, along with the methods insertRecord and displayInformation to initialise and print the respective fields' data. Two Student objects are created in the main method of the TestStudent4 class, and their corresponding insertRecord methods are called to set their rollno and name

![image](https://github.com/user-attachments/assets/8ea224c5-85a8-404a-8316-a1fe519c273c)

As we can see in the above figure, the object gets the memory in the heap memory area. The reference variable refers to the object allocated in the heap memory area. Here, s1 and s2 are reference variables that refer to the objects allocated in memory.

3) Object Initialization through a Constructor
   --------------------------------------------
The concept of object initialization through a constructor is essential to object-oriented programming in Java. Special methods inside a class called constructors are called when an object of that class is created with the new keyword. They initialise the state of objects by entering initial values in their fields or carrying out any required setup procedures. The constructor is automatically invoked upon object instantiation, guaranteeing correct initialization of the object prior to usage.

Here's an example demonstrating object initialization through a constructor:

```
class Student {    
    int id;    
    String name;    
    // Constructor with parameters    
    public Student(int id, String name) {    
        this.id = id;    
        this.name = name;    
    }    
    // Method to display student information    
    public void displayInformation() {    
        System.out.println("Student ID: " + id);    
        System.out.println("Student Name: " + name);    
    }    
}    
public class Main {    
    public static void main(String[] args) {    
        // Creating objects of Student class with constructor    
        Student student1 = new Student(1, "John Doe");    
        Student student2 = new Student(2, "Jane Smith");    
        // Displaying information of the objects    
        student1.displayInformation();    
        student2.displayInformation();    
    }    
}
```
Output:
```
Student ID: 1
Student Name: John Doe
Student ID: 2
Student Name: Jane Smith

```

Explanation:
------------
In this example, the id and name fields of a Student object are initialised using a constructor defined by the Student class, which accepts two parameters: id and name. Upon creating objects student1 and student2 using this constructor, the fields of each are initialised with the values supplied. This method makes ensuring that objects are created with the correct starting values, which makes it easier to instantiate and use objects later on in the programme.

Object and Class Example: Employee
Let's see an example where we are maintaining records of employees.
```
class Employee{      
    int id;      
    String name;      
    float salary;      
    void insert(int i, String n, float s) {      
        id=i;      
        name=n;      
        salary=s;      
    }      
    void display(){System.out.println(id+" "+name+" "+salary);}      
}      
public class Main {      
public static void main(String[] args) {      
    Employee e1=new Employee();      
    Employee e2=new Employee();      
    Employee e3=new Employee();      
    e1.insert(101,"ajeet",45000);      
    e2.insert(102,"irfan",25000);      
    e3.insert(103,"nakul",55000);      
    e1.display();      
    e2.display();      
    e3.display();      
}      
}
```

Output:
```
101 ajeet 45000.0
102 irfan 25000.0
103 nakul 55000.0
```

Explanation

The employee class in this Java code has three fields: id, name, and salary. It also has two methods: insert, which sets the values for these fields, and display, which prints the values. The main function of the TestEmployee class creates three Employee objects (e1, e2, and e3). To initialise the id, name, and salary fields of each object with precise values, the insert method is called on each of the objects. Then, each object's display method is called, displaying object initialization and information display via method invocation. Each object's id, name, and salary values are printed to the console.

hat are the different ways to create an object in Java?
There are the following ways to create an object in Java.

1. By new keyword
-----------------

The most common way to create an object in Java is by using the new keyword followed by a constructor.

For example: ClassName obj = new ClassName();. This allocates memory for the object and calls its constructor to initialize it.

2. By newInstance() method
--------------------------

This method is part of the java.lang.Class class and is used to create a new instance of a class dynamically at runtime. It invokes the no-argument constructor of the class.

For example: ClassName obj = (ClassName) Class.forName("ClassName").newInstance();.

3. By clone() method
---------------------

The clone() method creates a copy of an existing object by performing a shallow copy. It returns a new object that is a duplicate of the original object. For example: ClassName obj2 = (ClassName) obj1.clone();.

4. By deserialization
----------------------

Objects can be created by deserializing them from a stream of bytes. This is achieved using the ObjectInputStream class in Java. The serialized object is read from a file or network, and then the readObject() method is called to recreate the object.

5. By factory method
---------------------

Factory methods are static methods within a class that return instances of the class. They provide a way to create objects without directly invoking a constructor and can be used to encapsulate object creation logic.

For example: ClassName obj = ClassName.createInstance().

![image](https://github.com/user-attachments/assets/11101507-6a31-4d09-8173-5632a4d4de12)
















