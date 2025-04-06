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

Constructors in Java
--------------------

Types of constructors
----------------------

Default Constructor
Parameterized Constructor
Constructor Overloading

Does constructor return any value?

Copying the values of one object into another
Does constructor perform other tasks instead of the initialization
A Constructor in Java is a block of codes similar to the method. It is called when an instance of the class is created. At the time of calling constructor, memory for the object is allocated in the memory.

It is a special type of method which is used to initialize the object.

Every time an object is created using the new keyword, at least one constructor is called.

It calls a default constructor if there is no constructor available in the class. In such case, Java compiler provides a default constructor by default.

There are two types of constructors in Java: no-arg constructor, and parameterized constructor.

Note: 
```
It is called constructor because it constructs the values at the time of object creation.
It is not necessary to write a constructor for a class.
It is because Java compiler creates a default constructor if your class does not have any.
```
Rules for Creating Java Constructor
------------------------------------
There are following rules for defining a constructor:

--> Constructor name must be the same as its class name.

--> A Constructor must have no explicit return type.

--> A Java constructor cannot be abstract, static, final, and synchronized.

Note: 
------
```
We can use access modifiers while declaring a constructor. It controls the object creation. In other words, we can have private, protected, public or default constructor in Java.

```

Types of Java Constructors
---------------------------

There are two types of constructors in Java:

1) Default Constructor (No-arg constructor)
2) Parameterized Constructor

   ![image](https://github.com/user-attachments/assets/7373f408-92fd-46f9-b0d5-edd3ee0591ec)

1) Java Default Constructor
A constructor is called "Default Constructor" when it does not have any parameter.

Syntax:
```
<class_name>(){}  

```

Example of Default Constructor
In this example, we are creating the no-arg constructor in the Bike class. It will be invoked at the time of object creation.
```
//Java Program to create and call a default constructor    
class Bike{    
    //creating a default constructor    
    Bike(){System.out.println("Bike is created");}    
}  
public class Main{  
    //main method    
    public static void main(String args[]){    
        //calling a default constructor    
        Bike b=new Bike();    
    }    
}
```
Output:
```
Bike is created
```

Rule: 
-----
```If there is no constructor in a class, compiler automatically creates a default constructor.```

![image](https://github.com/user-attachments/assets/025d6fbe-4ee0-4b4c-a8f5-017b0af2b9bc)


What is the purpose of a default constructor?

The default constructor is used to provide the default values to the object like 0, null, etc., depending on the type.

2) Java Parameterized Constructor
--------------------------------

A constructor which has a specific number of parameters is called a parameterized constructor.

Why use the parameterized constructor?

The parameterized constructor is used to provide different values to distinct objects. However, you can provide the same values also.

Example of Parameterized Constructor

In this example, we have created the constructor of Student class that have two parameters. We can have any number of parameters in the constructor.

Example
```
//Java Program to demonstrate the use of the parameterized constructor.    
class Student{    
    int id;    
    String name;    
    //creating a parameterized constructor    
    Student(int i,String n){    
    id = i;    
    name = n;    
    }    
    //method to display the values    
    void display(){System.out.println(id+" "+name);}    
}  
//Main class to create objects and class methods  
public class Main{  
    public static void main(String args[]){    
    //creating objects and passing values    
    Student s1 = new Student(111,"Joseph");    
    Student s2 = new Student(222,"Sonoo");    
    //calling method to display the values of object    
    s1.display();    
    s2.display();    
   }    
}
```
Output:
```
111 Joseph
222 Sonoo

```
Constructor Overloading in Java

In Java, a constructor is just like a method but without return type. It can also be overloaded like Java methods.

Constructor overloading in Java is a technique of having more than one constructor with different parameter lists. They are arr

Constructor overloading in Java is a technique of having more than one constructor with different parameter lists. They are arranged in a way that each constructor performs a different task. They are differentiated by the compiler by the number of parameters in the list and their types.

Example of Constructor Overloading
----------------------------------

Example
```
//Java program to overload constructors    
class Student{    
    int id;    
    String name;    
    int age;    
    //creating two arg constructor    
    Student(int i,String n){    
    id = i;    
    name = n;    
    }    
    //creating three arg constructor    
    Student(int i,String n,int a){    
    id = i;    
    name = n;    
    age=a;    
    }    
    //creating method to display values  
    void display(){System.out.println(id+" "+name+" "+age);}    
}  
//creating a Main class to create instance and call methods  
public class Main{  
    public static void main(String args[]){    
    Student s1 = new Student(111,"Karan");    
    Student s2 = new Student(222,"Aryan",25);    
    s1.display();    
    s2.display();    
   }    
}
```
Output:
```
111 Karan 0
222 Aryan 25
```
Difference Between Constructor and Method in Java
-------------------------------------------------

There are many differences between constructors and methods. They are given below.
```
 Java Constructor                                                                                                Java Method 

1. A constructor is used to initialize the state of an object.                                           1. A method is used to expose the behavior of an object.

2. A constructor must not have a return type.                                                            2. A method must have a return type.

3. The constructor is invoked implicitly.                                                                3. The method is invoked explicitly.

4. The Java compiler provides a default constructor if we do not have any constructor in a class.        4. The method is not provided by the compiler in any case.

5. The constructor name must be same as the class name.                                                  5. The method name may or may not be same as the class name.
```

![image](https://github.com/user-attachments/assets/9743cfb4-79a3-46c8-b8de-98ed052e30f5)

Java Copy Constructor
---------------------

There is no copy constructor in Java. However, we can copy the values from one object to another like copy constructor in C++.

There are the following ways to copy the values of one object into another:

By Using Constructor:
-----------------------

In this example, we are going to copy the values of one object into another using Java constructor.

Example
```
//Java program to initialize the values from one object to another object.    
class Student{    
    int id;    
    String name;    
    //constructor to initialize integer and string    
    Student(int i,String n){    
    id = i;    
    name = n;    
    }    
    //constructor to initialize another object    
    Student(Student s){    
    id = s.id;    
    name =s.name;    
    }    
    void display(){System.out.println(id+" "+name);}    
}  
public class Main{  
    public static void main(String args[]){    
    Student s1 = new Student(111,"Karan");    
    Student s2 = new Student(s1);    
    s1.display();    
    s2.display();    
   }    
}

```
Output:
```
111 Karan
111 Karan
```
By Assigning the Values of One Object into Another

```
Student s1 = new Student(111,"Karan");    
    Student s2 = new Student();    
    s2.id=s1.id;    
    s2.name=s1.name;    
    s1.display();    
    s2.display();

```
Java static keyword
-------------------
The static keyword in Java is used for memory management mainly. We can apply static keyword with variables, methods, blocks and nested classes. The static keyword belongs to the class than an instance of the class.

The static can be:

Variable (also known as a class variable)

Method (also known as a class method)

Block

Nested class

Beyond memory management, the static keyword in Java has several other uses. When it comes to variables, it means that the variable is shared by all instances of the class and belongs to the class as a whole, not just any one instance. Static methods are available throughout the programme since they can be called without first generating an instance of the class. When the class loads, static blocks are used to initialise static variables or carry out one-time operations. Furthermore, nested static classes can be instantiated individually but are still linked to the outer class. Moreover, class names can be used to access static variables and methods directly, eliminating the need to build an object instance. This is especially helpful for constants or utility methods.

1) Java static variable
-----------------------

![image](https://github.com/user-attachments/assets/32bdefbd-5ba4-4914-a2c0-71d58c2ceff0)

If we declare any variable as static, it is known as a static variable.

The static variable can be used to refer to the common property of all objects (which is not unique for each object), for example, the company name of employees, college name of students, etc.

The static variable gets memory only once in the class area at the time of class loading.

Static variables in Java are also initialized to default values if not explicitly initialized by the programmer. They can be accessed directly using the class name without needing to create an instance of the class.

Static variables are shared among all instances of the class, meaning if the value of a static variable is changed in one instance, it will reflect the change in all other instances as well.

Advantages of Static Variable :

1. It makes your program memory efficient (i.e., it saves memory).

Understanding The Problem Without Static Variable

```
class Student{  
     int rollno;  
     String name;  
     String college="ITS";  
}  
```
Suppose there are 500 students in my college; now all instance data members will get memory each time when the object is created. All students have their unique rollno and name, so instance data member is good in such case. Here, "college" refers to the common property of all objects. If we make it static, this field will get the memory only once.

Example of Static Variable
```
//Java Program to demonstrate the use of static variable    
class Student{    
   int rollno;//instance variable    
   String name;    
   static String college ="ITS";//static variable    
   //constructor    
   Student(int r, String n){    
   rollno = r;    
   name = n;    
   }    
   //method to display the values    
   void display (){System.out.println(rollno+" "+name+" "+college);}    
}    
//Main class to show the values of objects    
public class Main{    
 public static void main(String args[]){    
 Student s1 = new Student(111,"Karan");    
 Student s2 = new Student(222,"Aryan");    
 //we can change the college of all objects by the single line of code    
 //Student.college="BBDIT";    
 s1.display();    
 s2.display();    
 }    
}  
```
Output:
```
111 Karan ITS
222 Aryan ITS
```
Explanation

The usage of static variables is demonstrated in this Java programme. In addition to a static variable called college, the Student class defines two instance variables: rollno and name. It has a constructor to set the instance variables' initial values and a display() function to output the rollno, name, and college values. Two Student objects, s1 and s2, with different roll numbers and names, are created via the TestStaticVariable1 class. After that, each object's display() method is called, printing its details. The college name can be modified for all objects at once by uncommenting the line Student.college="BBDIT";, demonstrating how static variables are shared by all instances of a class.

Program of The Counter Without Static Variable:
----------------------------------------------

In this example, we have created an instance variable named count which is incremented in the constructor. 
Since the instance variable gets the memory at the time of object creation, each object will have a copy of the instance variable. 
If it is incremented, it won't reflect other objects. So each object will have the value 1 in the count variable.

```
//Java Program to demonstrate the use of an instance variable    
//which get memory each time when we create an object of the class.    
class Counter{    
    int count=0;//will get memory each time when the instance is created    
    
    Counter(){    
        count++;//incrementing value    
        System.out.println(count);    
    }    
}  
public class Main{  
    public static void main(String args[]){    
        //Creating objects    
        Counter c1=new Counter();    
        Counter c2=new Counter();    
        Counter c3=new Counter();    
    }    
}

```
Output:
```
1
1
1
```

Program of Counter by Static Variable

As we have mentioned above, static variable will get the memory only once, if any object changes the value of the static variable, it will retain its value.
```
//Java Program to illustrate the use of static variable which    
//is shared with all objects.    
class Counter{    
    static int count=0;//will get memory only once and retains its value    
    
    Counter(){    
        count++;//incrementing value of static variable   
        System.out.println(count);    
    }    
}  
public class Main{  
    public static void main(String args[]){    
        //Creating objects    
        Counter c1=new Counter();    
        Counter c2=new Counter();    
        Counter c3=new Counter();    
    }    
}    
```
Output:
```
1
2
3
```
2) Java Static Method
----------------------

If we apply a static keyword with any method, it is known as a static method.

A static method belongs to the class rather than the object of a class.

A static method can be invoked without the need for creating an instance of a class.

A static method can access static data members and can change their value of it.
```
//Java Program to demonstrate the use of a static method.    
class Student{    
     int rollno;    
     String name;    
     static String college = "ITS";    
     //static method to change the value of static variable    
     static void change(){    
        college = "BBDIT";    
     }    
     //constructor to initialize the variable    
     Student(int r, String n){    
        rollno = r;    
        name = n;    
     }    
     //method to display values    
     void display(){System.out.println(rollno+" "+name+" "+college);}    
}    
//Main class to create and display the values of object    
public class Main{    
    public static void main(String args[]){    
        Student.change();//calling change method    
        //creating objects    
        Student s1 = new Student(111,"Karan");    
        Student s2 = new Student(222,"Aryan");    
        Student s3 = new Student(333,"Sonoo");    
        //calling display method    
        s1.display();    
        s2.display();    
        s3.display();    
    }    
}
```  
Output:
```
111 Karan BBDIT
222 Aryan BBDIT
333 Sonoo BBDIT
```

Restrictions for the Static Method
-----------------------------------
There are the following two main restrictions for the static method.

The static method cannot use non-static data members or call a non-static method directly.
this and super keyword cannot be used in static context.
Filename: A.java
```
class A{  
 int a=40;//non static  
   
 public static void main(String args[]){  
  System.out.println(a);  
 }  
}
```      
Output:
```
Compile Time Error
```
Explanation
-----------
The Java code provided contains a class called A. A defined instance variable with the value 40 that is designated as non-static is present in class A. Nonetheless, an attempt is made to use System.out.println(a); to directly access the instance variable an in the class A main method. Because static methods in Java cannot directly access non-static variables, this will lead to a compilation problem. An instance of class A must first be generated in order to access the non-static variable an inside the static main method. The variable a can then be accessed using that instance. It would therefore be OK to use A obj = new A(); System.out.println(obj.a); to access an in the main method.

Q) Why is the Java main() method static?

Ans) In Java, main() method is static because the object is not required to call a static method. If it were a non-static method, the JVM would create an object first and then call the main() method, which would lead to the problem of extra memory allocation.

3) Java Static Block
---------------------

It is used to initialize the static data member.
It is executed before the main() method at the time of class loading.

Example of Static block

```
//Java program to illustrate the use of static block  
public class Main{    
  static{System.out.println("static block is invoked");}    
  public static void main(String args[]){    
   System.out.println("main() method is invoked");    
  }    
}
```  
Output:
```
static block is invoked
Hello main
```

Q) Can we execute a program without main() method?

Ans) No, one of the ways was the static block, but it was possible till JDK 1.6. Since JDK 1.7, it is not possible to execute a Java class without the main() method.

Filename: A3.java
```
class A3{  
  static{  
  System.out.println("static block is invoked");  
  System.exit(0);  
  }  
}
```
Output:
```
static block is invoked
```

Since JDK 1.7 and above, output would be:
```
Error: Main method not found in class A3, please define the main method as:
public static void main(String[] args)
or a JavaFX application class must extend javafx.application.Application
```
Explanation

Class A3 in the provided Java code has a static block that uses System.exit(0); to end the program after printing "static block is invoked" to the console. Because of this, the static block runs when the class loads into memory, printing the message and stopping the program right away to stop more code from running.

4) Static Nested Classes
---------------------------

Static Nested Class: 
-------------------
A static nested class is declared with the static keyword. It behaves like a regular top-level class but is nested for packaging convenience. Static nested classes cannot directly access non-static members of the enclosing class.

```
class A{  
     static class B{}//static nested class  
}
```

# this keyword in Java
There can be a lot of usage of Java this keyword. In Java, this is a reference variable that refers to the current object.


![image](https://github.com/user-attachments/assets/8cb95999-92f3-494f-8823-b7e3022e3832)

## Usage of Java this keyword

Here is given the 6 usage of java this keyword.

this can be used to refer current class instance variable.

this can be used to invoke current class method (implicitly)

this() can be used to invoke current class constructor.

this can be passed as an argument in the method call.

this can be passed as argument in the constructor call.

this can be used to return the current class instance from the method.

### Suggestion: 
If you are beginner to java, lookup only three usages of this keyword.


![image](https://github.com/user-attachments/assets/973c2719-4994-46f3-a9af-a6c2758f76c7)

### 1) this:
to refer current class instance variable
The this keyword can be used to refer current class instance variable. If there is ambiguity between the instance variables and parameters, this keyword resolves the problem of ambiguity.

## Understanding the problem without this keyword
Let's understand the problem if we don't use this keyword by the example given below:
```
class Student{  
int rollno;  
String name;  
float fee;  
Student(int rollno,String name,float fee){  
rollno=rollno;  
name=name;  
fee=fee;  
}  
void display(){System.out.println(rollno+" "+name+" "+fee);}  
}  
public class Main{  
public static void main(String args[]){  
Student s1=new Student(111,"ankit",5000f);  
Student s2=new Student(112,"sumit",6000f);  
s1.display();  
s2.display();  
}}

```

Output:
```
0 null 0.0
0 null 0.0
```

In the above example, parameters (formal arguments) and instance variables are same. So, we are using this keyword to distinguish local variable and instance variable.

## Solution of the above problem by this keyword
```
Example
class Student{  
int rollno;  
String name;  
float fee;  
Student(int rollno,String name,float fee){  
this.rollno=rollno;  
this.name=name;  
this.fee=fee;  
}  
void display(){System.out.println(rollno+" "+name+" "+fee);}  
}  
  
public class Main{  
public static void main(String args[]){  
Student s1=new Student(111,"ankit",5000f);  
Student s2=new Student(112,"sumit",6000f);  
s1.display();  
s2.display();  
}}
```
Output:
```
111 ankit 5000.0
112 sumit 6000.0
```

If local variables(formal arguments) and instance variables are different, there is no need to use this keyword

### Note:
**_It is better approach to use meaningful names for variables. So we use same name for instance variables and parameters in real time, and always use this keyword._**

## 2) this: to invoke current class method
 You may invoke the method of the current class by using the this keyword. If you don't use the this keyword, compiler automatically adds this keyword while invoking the method. Let's see the example

![image](https://github.com/user-attachments/assets/62301517-56c4-4022-b852-5e034bd4fe62)

### 3) this() : to invoke current class constructor
The this() constructor call can be used to invoke the current class constructor. It is used to reuse the constructor. In other words, it is used for constructor chaining
```
Calling default constructor from parameterized constructor:

Example
class A{  
A(){System.out.println("hello a");}  
A(int x){  
this();  
System.out.println(x);  
}  
}  
public class Main{  
public static void main(String args[]){  
A a=new A(10);  
}}
```
Output:
```
hello a
10
```
## Calling parameterized constructor from default constructor:
```
class A{  
A(){  
this(5);  
System.out.println("hello a");  
}  
A(int x){  
System.out.println(x);  
}  
}  
class TestThis6{  
public static void main(String args[]){  
A a=new A();  
}}
```
Output:
```
5
hello a
```
## Real usage of this() constructor call
The this() constructor call should be used to reuse the constructor from the constructor. It maintains the chain between the constructors i.e. it is used for constructor chaining. Let's see the example given below that displays the actual use of this keyword.
```
class Student{    
    int rollno;    
    String name,course;    
    float fee;    
    Student(int rollno,String name,String course)  
    {    
        this.rollno=rollno;    
        this.name=name;    
        this.course=course;    
    }    
    Student(int rollno,String name,String course,float fee)  
    {    
        this(rollno,name,course);//reusing constructor    
        this.fee=fee;    
    }    
    void display()  
    {  
        System.out.println(rollno+" "+name+" "+course+" "+fee);  
    }    
}    
public class Main{    
    public static void main(String args[]){    
        Student s1=new Student(111,"ankit","java");    
        Student s2=new Student(112,"sumit","java",6000f);    
        s1.display();    
        s2.display();    
    }  
}   
```
Output:
```
111 ankit java 0.0
112 sumit java 6000.0
```

### Rule: _
**Call to this() must be the first statement in constructor._**
```
Student(int rollno,String name,String course,float fee){  
this.fee=fee;  
this(rollno,name,course);//C.T.Error  
}
```
Output:
```
Compile Time Error: Call to this must be first statement in constructor
```
## 4) this: to pass as an argument in the method
The this keyword can also be passed as an argument in the method. It is mainly used in the event handling. Let's see the example:
```
class S2{  
  void m(S2 obj){  
  System.out.println("method is invoked");  
  }  
  void p(){  
  m(this);  
  }  
  public static void main(String args[]){  
  S2 s1 = new S2();  
  s1.p();  
  }  
}
```
Output:
```
method is invoked
```
ans we do not explicitly declare an access modifier for a class, field, method, etc.

A variable or method declared without any access control modifier is available to any other class in the same package. The fields in an interface are implicitly public static final and the methods in an interface are by default public.

Example of Default Access Modifiers
Variables and methods can be declared without any modifiers, as in the following examples −
```
String version = "1.5.1";

boolean processOrder() {
   return true;
}
```
### Inheritance in Java
------------------------
Inheritance in Java is a mechanism in which one object acquires all the properties and behaviors of a parent object. 

The idea behind inheritance in Java is that we can create new classes that are built upon existing classes. When we inherit methods from an existing class, we can reuse methods and fields of the parent class. However, we can add new methods and fields in your current class also.

## What is Inheritance?
----------------------
Inheritance in Java enables a class to inherit properties and actions from another class, called a superclass or parent class. A class derived from a superclass is called a subclass or child group. Through inheritance, a subclass can access members of its superclass (fields and methods), enforce reuse rules, and encourage hierarchy.

Inheritance represents the IS-A relationship which is also known as a parent-child relationship.

### Why use inheritance in Java?

For Method Overriding (so runtime polymorphism can be achieved).
For Code Reusability.

### The syntax of Java Inheritance
```
class Subclass-name extends Superclass-name  
{  
   //methods and fields  
}  
```
The extends keyword indicates that we are making a new class that derives from an existing class. The meaning of "extends" is to increase the functionality.

In the terminology of Java, a class that is inherited is called a parent or superclass, and the new class is called child or subclass.

![image](https://github.com/user-attachments/assets/7bc0bc28-b250-42ef-8df7-dfb06795d610)

As displayed in the above figure, Programmer is the subclass and Employee is the superclass. The relationship between the two classes is Programmer IS-A Employee. It means that Programmer is a type of Employee.

```
class Employee{  
 float salary=40000;  
}  
class Programmer extends Employee{  
 int bonus=10000;  
}  
public class Main{  
 public static void main(String args[]){  
   Programmer p=new Programmer();  
   System.out.println("Programmer salary is:"+p.salary);  
   System.out.println("Bonus of Programmer is:"+p.bonus);  
}  
}
```
Output:
```
Programmer salary is:40000.0
Bonus of programmer is:10000
```

In the above example, Programmer object can access the field of own class as well as of Employee class i.e. code reusability.

## Types of Inheritance in Java
-------------------------------

On the basis of class, there can be three types of inheritance in java: single, multilevel and hierarchical.

In java programming, multiple and hybrid inheritance is supported through interface only. We will learn about interfaces later.

![image](https://github.com/user-attachments/assets/b38183d9-84d4-483e-9fa7-dd56fd300d74)

### Note :
----------
```
Note: Multiple inheritance is not supported in Java through class.
```
When one class inherits multiple classes, it is known as multiple inheritance

![image](https://github.com/user-attachments/assets/9eb18ef6-5411-46c8-92cc-849f646ef2cf)

## Single Inheritance Example
----------------------------
When a class inherits another class, it is known as a single inheritance. In the example given below, Dog class inherits the Animal class, so there is the single inheritance.

```
class Animal{  
void eat(){System.out.println("eating...");}  
}  
class Dog extends Animal{  
void bark(){System.out.println("barking...");}  
}  
public class Main{  
public static void main(String args[]){  
Dog d=new Dog();  
d.bark();  
d.eat();  
}}
```
Output:
```
barking...
eating...
```
## Multilevel Inheritance Example
----------------------------------
When there is a chain of inheritance, it is known as multilevel inheritance. As you can see in the example given below, BabyDog class inherits the Dog class which again inherits the Animal class, so there is a multilevel inheritance.
```
Example
class Animal{  
void eat(){System.out.println("eating...");}  
}  
class Dog extends Animal{  
void bark(){System.out.println("barking...");}  
}  
class BabyDog extends Dog{  
void weep(){System.out.println("weeping...");}  
}  
public class Main{  
public static void main(String args[]){  
BabyDog d=new BabyDog();  
d.weep();  
d.bark();  
d.eat();  
}}
```
Output:
```
weeping...
barking...
eating...
```
## Hierarchical Inheritance Example

When two or more classes inherits a single class, it is known as hierarchical inheritance. In the example given below, Dog and Cat classes inherits the Animal class, so there is hierarchical inheritance.
```
class Animal{  
void eat(){System.out.println("eating...");}  
}  
class Dog extends Animal{  
void bark(){System.out.println("barking...");}  
}  
class Cat extends Animal{  
void meow(){System.out.println("meowing...");}  
}  
public class Main{  
public static void main(String args[]){  
Cat c=new Cat();  
c.meow();  
c.eat();  
//c.bark();//C.T.Error  
}}
```
Output:
```
meowing...
eating...
```
### Q) Why multiple inheritance is not supported in Java?

To reduce the complexity and simplify the language, multiple inheritance is not supported in java.

Suppose there are three classes A, B, and C. The C class inherits A and B classes. If A and B classes have the same method and we call it from child class object, there will be ambiguity to call the method of A or B class.

Since compile-time errors are better than runtime errors, Java renders compile-time error if you inherit 2 classes. So whether you have same method or different, there will be compile time error
```
class A{  
void msg(){System.out.println("Hello");}  
}  
class B{  
void msg(){System.out.println("Welcome");}  
}  
class C extends A,B{//suppose if it were  
   
 public static void main(String args[]){  
   C obj=new C();  
   obj.msg();//Now which msg() method would be invoked?  
}  
}
```
```
Compile Time Error

```

However, Java supports multiple inheritance through interfaces, where a class can implement multiple interfaces. Let's demonstrate this with a simple example:

```
interface A {  
    default void methodA() {  
        System.out.println("Method A from interface A");  
    }  
}  
// Interface B  
interface B {  
    default void methodB() {  
        System.out.println("Method B from interface B");  
    }  
}  
// Class implementing both interfaces A and B  
class MyClass implements A, B {  
    public void myMethod() {  
        System.out.println("My method in MyClass");  
    }  
}  
public class Main {  
    public static void main(String[] args) {  
        // Creating an object of MyClass  
        MyClass obj = new MyClass();  
        // Calling methods from both interfaces  
        obj.methodA();  
        obj.methodB();  
        // Calling method defined in MyClass  
        obj.myMethod();  
    }  
}
```
Output:
```
Method A from interface A
Method B from interface B
My method in MyClass
```

In this example, MyClass implements both interfaces A and B, allowing it to inherit methods from both interfaces. This demonstrates the concept of achieving multiple inheritance in Java through interfaces.

## Benefits of Inheritance
---------------------------

Inheritance offers several advantages, including:

Code Reusability: Inherited members from a superclass can be reused in subclasses, reducing redundant code and promoting a modular approach to software development.

Hierarchical Organization: Inheritance facilitates the creation of well-structured class hierarchies, improving code readability and maintainability.

Polymorphism: Subclasses can override superclass methods, allowing for polymorphic behavior, where methods can behave differently based on the object type at runtime.

Easier Maintenance: Changes made to a superclass automatically propagate to its subclasses, ensuring consistency and simplifying maintenance efforts.

## Conclusion
----------
Inheritance in Java is a powerful tool for creating rule sets and reusing rules in object-oriented programs. By understanding its syntax, types, utility, and best practices, developers can effectively use inheritance to create maintainable, extensible, and scalable Java applications.

# Aggregation in Java
If a class have an entity reference, it is known as Aggregation. Aggregation represents HAS-A relationship.

Consider a situation, Employee object contains many informations such as id, name, emailId etc. It contains one more object named address, which contains its own informations such as city, state, country, zipcode etc. as given below.

```
class Employee{  
int id;  
String name;  
Address address;//Address is a class  
...  
}
```
In such case, Employee has an entity reference address, so relationship is Employee HAS-A address.

### Why use Aggregation?
For Code Reusability.

## When use Aggregation?
Code reuse is also best achieved by aggregation when there is no is-a relationship.
Inheritance should be used only if the relationship is-a is maintained throughout the lifetime of the objects involved; otherwise, aggregation is the best choice.

## Real-Time Example of Aggregation
 this example, Employee has an object of Address, address object contains its own informations such as city, state, country etc. In such case relationship is Employee HAS-A Address.
```
 class Address {    
 String city,state,country;    
    
 public Address(String city, String state, String country) {    
    this.city = city;    
    this.state = state;    
    this.country = country;    
 }    
}    
//Employee class that has Address  
class Emp {    
    int id;    
    String name;    
    Address address;  //Emp Has-A Address  
    
 public Emp(int id, String name,Address address) {    
    this.id = id;    
    this.name = name;    
    this.address=address;    
 }    
    
 void display(){    
  System.out.println(id+" "+name);    
  System.out.println(address.city+" "+address.state+" "+address.country);    
 }    
}  
//Main class   
public class Main{  
 public static void main(String[] args) {    
  Address address1=new Address("gzb","UP","india");    
  Address address2=new Address("gno","UP","india");    
  Emp e=new Emp(111,"varun",address1);    
  Emp e2=new Emp(112,"arun",address2);    
        
  e.display();    
  e2.display();      
 }    
}
```
``` 
111 varun
gzb UP india
112 arun
gno UP india

```
# Method Overloading in Java

Method overloading in Java is the feature that enables defining several methods in a class having the same name but with different parameters lists. These algorithms may vary with regard to the number or type of parameters. When a method is called, Java decides which version of it to execute depending on the arguments given. If we have to perform only one operation, having the same name of the methods increases the readability of the program.

Suppose you have to perform the addition of the given numbers, but there can be any number of arguments if you write the method such as a(int,int) for two parameters, and b(int,int,int) for three parameters then it may be difficult for you as well as other programmers to understand the behavior of the method because its name differs. Here's an explanation with real-life examples:

## Math Operations:

In a math class, you might have multiple methods for adding numbers, each accepting a different number of arguments:

```
public class MathOperations {  
    public int add(int a, int b) {  
        return a + b;  
    }  
    public double add(double a, double b, double c) {  
        return a + b + c;  
    }  
}

```
Here, the add method is overloaded to handle both adding two integers and adding three doubles.

## String Manipulation:

In a utility class for string manipulation, you might have overloaded methods for concatenating strings

![image](https://github.com/user-attachments/assets/5fecc5d7-a271-41fe-8dd3-87bbc5b4f413)

## Different ways to overload a method in Java
There are two ways to overload the method in java

By changing number of arguments
By changing the data type

Note :
------
```
In Java, Method Overloading is not possible by changing the return type of the method only.
```
### 1) Method Overloading: By changing no. of arguments
   
Method overloading in Java allows defining multiple methods with the same name but different parameter lists. One common form of overloading is changing the number of arguments in the method signature. In this example, we have created two methods, the first add() method performs addition of two numbers, and the second add method performs addition of three numbers.

In this example, we are creating static methods so that we don't need to create instance for calling methods.
```
/ Class Adder contains overloaded methods to add integers    
class Adder {    
    // Method to add two integers    
    static int add(int a, int b) {    
        return a + b;    
    }    
    // Method to add three integers    
    static int add(int a, int b, int c) {    
        return a + b + c;    
    }    
}    
public class Main {    
    public static void main(String[] args) {    
        // Calling the add method with two integers    
        System.out.println(Adder.add(11, 11)); // Output: 22    
        // Calling the add method with three integers    
        System.out.println(Adder.add(11, 11, 11)); // Output: 33    
    }    
}   
```
Output:
```
22
33
```

### 2) Method Overloading: By changing data type of arguments

Method overloading in Java also allows changing the data type of arguments in the method signature. Here's an example demonstrating method overloading based on the data type of arguments: In this example, we have created two methods that differs in data type. The first add method receives two integer arguments and second add method receives two double arguments.
```
// Class Adder contains overloaded methods to add numbers    
class Adder {    
    // Method to add two integers    
    static int add(int a, int b) {    
        return a + b;    
    }    
    // Method to add two doubles    
    static double add(double a, double b) {    
        return a + b;    
    }    
}    
public class Main {    
    public static void main(String[] args) {    
        // Calling the add method with two integers    
        System.out.println(Adder.add(11, 11)); // Output: 22         
        // Calling the add method with two doubles    
        System.out.println(Adder.add(12.3, 12.6)); // Output: 24.9    
    }    
}   
```
Output:
```
22
24.9
```

# Q) Why Method Overloading is not possible by changing the return type of method only?

Method overloading in Java is based on the method signature, which includes the method name and parameter list. The return type alone is not sufficient to distinguish between overloaded methods because Java does not consider the return type when resolving method calls. If two methods have the same name and parameter list but different return types, the compiler cannot determine which method to call based solely on the return type. Let's see how ambiguity may occur:

```
// Class Adder contains overloaded methods to add numbers  
class Adder {  
    // Method to add two integers and return an integer  
    static int add(int a, int b) {  
        return a + b;  
    }  
    // Method to add two integers and return a double  
    static double add(int a, int b) {  
        return a + b;  
    }  
}  
public class TestOverloading3 {  
    public static void main(String[] args) {  
        // This line of code will cause ambiguity because both add methods have the same signature  
        System.out.println(Adder.add(11, 11)); // Error: ambiguity  
    }  
}
```
Output:
```
TestOverloading3.java:9: error: method add(int,int) is already defined in class Adder
static double add(int a, int b) {
^
1 error
```

# Note:
```
_**Compile Time Error is better than Run Time Error. So, java compiler renders compiler time error if you declare the same method having same parameters.**_
```

### Can we overload Java main() method?

Yes, technically, it is possible to overload the main() method in Java, but it won't be considered as the entry point for the Java Virtual Machine (JVM) to start the execution of the program. While overloading the main() method is syntactically valid, it doesn't serve the purpose of being the entry point for program execution. The JVM expects the standard signature public static void main(String[] args) for the entry point. Any other overloaded main() method will be treated as a regular method and won't be invoked by the JVM to start the program. Therefore, although overloading main() is possible, it's not practically useful for program execution. Let's see a simple example:
```
// Class TestOverloading4 demonstrates method overloading with different parameter types and no parameters  
class TestOverloading4 {    
    public static void main(String[] args) {  
        System.out.println("main with String[]");  
    }  
    // Overloaded main method with parameter String args  
    public static void main(String args) {  
        System.out.println("main with String");  
    }  
    // Overloaded main method with no parameters  
    public static void main() {  
        System.out.println("main without args");  
    }  
}  
```
Output:
```
main with String[]
```
### Method Overriding in Java:
------------------------------
If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java.

In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class, it is known as method overriding.

## Usage of Java Method Overriding

Method overriding is used to provide the specific implementation of a method that is already provided by its superclass.

Method overriding is used for runtime polymorphism.

Method overriding allows subclasses to reuse and build upon the functionality provided by their superclass, reducing redundancy and promoting modular code design.

Subclasses can override methods to tailor them to their specific needs or to implement specialized behavior that is unique to the subclass.

Method overriding enables dynamic method dispatch, where the actual method implementation to be executed is determined at runtime based on the type of object, supporting flexibility and polymorphic behavior.

## Rules for Java Method Overriding

Same Method Name: The overriding method in the subclass must have the same name as the method in the superclass that it is overriding.

Same Parameters: The overriding method must have the same number and types of parameters as the method in the superclass. This ensures compatibility and consistency with the method signature defined in the superclass.

IS-A Relationship (Inheritance): Method overriding requires an IS-A relationship between the subclass and the superclass. This means that the subclass must inherit from the superclass, either directly or indirectly, to override its methods.

Same Return Type or Covariant Return Type: The return type of the overriding method can be the same as the return type of the overridden method in the superclass, or it can be a subtype of the return type in the superclass. This is known as the covariant return type, introduced in Java 5.

Access Modifier Restrictions: The access modifier of the overriding method must be the same as or less restrictive than the access modifier of the overridden method in the superclass. Specifically, a method declared as public in the superclass can be overridden as public or protected but not as private. Similarly, a method declared as protected in the superclass can be overridden as protected or public but not as private. A method declared as default (package-private) in the superclass can be overridden with default, protected, or public, but not as private.

No Final Methods: Methods declared as final in the superclass cannot be overridden in the subclass. This is because final methods cannot be modified or extended.

No Static Methods: Static methods in Java are resolved at compile time and cannot be overridden. Instead, they are hidden in the subclass if a method with the same signature is defined in the subclass.

Understanding the problem without method overriding
Let's understand the problem that we may face in the program if we don't use method overriding
```
//Java Program to demonstrate why we need method overriding  
//Here, we are calling the method of parent class with child  
//class object.  
//Creating a parent class  
class Vehicle{  
  void run(){System.out.println("Vehicle is running");}  
}  
//Creating a child class  
class Bike extends Vehicle{  
  public static void main(String args[]){  
  //creating an instance of child class  
  Bike obj = new Bike();  
  //calling the method with child class instance  
  obj.run();  
  }  
}  
```
Output:
```
Vehicle is running
```
Explanation

"Vehicle is running" is printed by the run() function of the Vehicle class. We construct an instance of the Bike class and use it to invoke the run() method within the Bike class. As a result of Bike deriving from Vehicle, the run() function of the Vehicle class is overridden in the Bike class, resulting in the print "Vehicle is running" when the method is used on a Bike object. This demonstrates how method overriding, in which the method specified in the subclass overrides the method in the superclass with the identical signature, can result in polymorphic behaviour.

### Example of Method Overriding
In this example, we have defined the run method in the subclass as defined in the parent class, but it has some specific implementation. The method's name and parameters are the same, and there is an IS-A relationship between the classes, so there is method overriding.

Bike2.java
```
//Java Program to illustrate the use of Java Method Overriding    
//Creating a parent class.    
class Vehicle{    
  //defining a method    
  void run(){System.out.println("Vehicle is running");}    
}    
//Creating a child class    
class Bike2 extends Vehicle{    
  //defining the same method as in the parent class    
  void run(){System.out.println("Bike is running safely");}    
  public static void main(String args[]){    
  Bike2 obj = new Bike2();//creating object    
  obj.run();//calling method    
  }    
}
``` 
Output:
```
Bike is running safely
```
### Explanation

A method in a subclass (Bike2) overrides the same method in its superclass (Vehicle), as this Java program illustrates. The run() method in this example is shared by both types, but the Bike2 class implements it differently, outputting "Bike is running safely." The overridden function in the Bike2 class gets executed when we create an instance of Bike2 and use the run() method on it, proving that the implementation of the subclass takes precedence over the implementation of the superclass. This demonstrates how Java's dynamic polymorphism feature allows methods with the same signature to behave differently in various classes, even if they are part of the same inheritance tree.

### A real example of Java Method Overriding

Consider a scenario where Bank is a class that provides functionality to get the rate of interest. However, the rate of interest varies according to banks. For example, SBI, ICICI and AXIS banks could provide 8%, 7%, and 9% rate of interest.

![image](https://github.com/user-attachments/assets/ea52fada-14de-4367-a8ae-a7297074ff6e)
```
//Java Program to demonstrate the real scenario of Java Method Overriding    
//where three classes are overriding the method of a parent class.    
//Creating a parent class.    
class Bank{    
int getRateOfInterest(){return 0;}    
}    
//Creating child classes.    
class SBI extends Bank{    
int getRateOfInterest(){return 8;}    
}    
    
class ICICI extends Bank{    
int getRateOfInterest(){return 7;}    
}    
class AXIS extends Bank{    
int getRateOfInterest(){return 9;}    
}    
//Test class to create objects and call the methods    
class Test2{    
public static void main(String args[]){    
SBI s=new SBI();    
ICICI i=new ICICI();    
AXIS a=new AXIS();    
System.out.println("SBI Rate of Interest: "+s.getRateOfInterest());    
System.out.println("ICICI Rate of Interest: "+i.getRateOfInterest());    
System.out.println("AXIS Rate of Interest: "+a.getRateOfInterest());    
}    
}
``` 
Output:
```
SBI Rate of Interest: 8
ICICI Rate of Interest: 7
AXIS Rate of Interest: 9
```
### Explanation

This Java programme uses a real-world scenario where three classes-SBI, ICICI, and AXIS-override a method from their parent class, Bank, to demonstrate the idea of method overriding. The getRateOfInterest() function of the Bank class yields 0. With their own implementation, each of the child classes overrides this method: SBI returns 8, ICICI returns 7, and AXIS returns 9. Each child class object is created in the Test2 class, and then each object's getRateOfInterest() method is used to print out the corresponding interest rates for each bank. This illustrates how polymorphic behaviour dependent on the type of object at runtime is made possible by method overriding, which enables each subclass to give its own implementation of a method inherited from the superclass.

# Super Keyword in Java
The super keyword in Java is a reference variable which is used to refer immediate parent class object.

Whenever you create the instance of subclass, an instance of parent class is created implicitly which is referred by super reference variable.

## Usage of Java super Keyword

super can be used to refer immediate parent class instance variable.
super can be used to invoke immediate parent class method.
super() can be used to invoke immediate parent class constructor.

![image](https://github.com/user-attachments/assets/a3b56988-73fd-4723-8e4c-7ce67a63fc0b)

### 1) super is used to refer immediate parent class instance variable.
We can use super keyword to access the data member or field of parent class. It is used if parent class and child class have same fields.
```
//Java Program to illustrate the use of super keyword  
//Creating parent class  
class Animal{    
    String color="white";    
}    
//Creating child class  
class Dog extends Animal{    
    String color="black";    
    void printColor(){    
        System.out.println(color);//prints color of Dog class    
        System.out.println(super.color);//prints color of Animal class    
    }    
}    
//Creating Main class to create object and call methods  
public class Main{    
    public static void main(String args[]){    
        Dog d=new Dog();    
        d.printColor();    
    }  
}
```
Output:

```
black
white
```
In the above example, Animal and Dog both classes have a common property color. If we print color property, it will print the color of current class by default. To access the parent property, we need to use super keyword.

### 2) super can be used to invoke parent class method

The super keyword can also be used to invoke parent class method. It should be used if subclass contains the same method as parent class. In other words, it is used if method is overridden.
```
Example
//Java Program to illustrate the use of super()  
//Creating parent class  
class Animal{    
    void eat(){System.out.println("eating...");}    
}    
//Creating child class  
class Dog extends Animal{    
    void eat(){System.out.println("eating bread...");}    
    void bark(){System.out.println("barking...");}    
    void work(){    
        super.eat();    
        bark();    
    }    
}    
//Creating Main class to create object and call methods  
public class Main{    
    public static void main(String args[]){    
        Dog d=new Dog();    
        d.work();    
    }  
}    
```
Output:
```
eating...
barking...
```

### 3) super is used to invoke parent class constructor.

The super keyword can also be used to invoke the parent class constructor. Let's see a simple example:

```
class Animal{    
    Animal(){System.out.println("animal is created");}    
}    
class Dog extends Animal{    
    Dog(){    
        super();  //calls the constructor of parent class  
        System.out.println("dog is created");    
    }    
}    
public class Main{    
    public static void main(String args[]){    
        Dog d=new Dog();    
    }  
}
```

Output:
```
animal is created
dog is created
```

### Note: 
```
super() is added in each class constructor automatically by compiler if there is no super() or this().
```
![image](https://github.com/user-attachments/assets/fa6215ae-5fdb-4eb7-ac4f-5c497fac88b4)

As we know well that default constructor is provided by compiler automatically if there is no constructor. But, it also adds super() as the first statement.

# Final Keyword In Java
The final keyword in Java is used to restrict the user. The java final keyword can be used in many context. Final can be:

variable
method
class

The final keyword can be applied with the variables, a final variable that have no value it is called blank final variable or uninitialized final variable. It can be initialized in the constructor only. The blank final variable can be static also which will be initialized in the static block only.

![image](https://github.com/user-attachments/assets/855cfe40-af1b-4440-b6b6-aa64c339c54e)

## 1) Java final variable

If you make any variable as final, you cannot change the value of final variable(It will be constant).

### Example of final variable

There is a final variable speedlimit, we are going to change the value of this variable, but It can't be changed because final variable once assigned a value can never be changed.
```
class Bike{  
  final int speedlimit=90;//final variable  
  void run(){  
   speedlimit=400;//we cannot change the final variable  
  }  
  public static void main(String args[]){  
  Bike obj=new  Bike();  
  obj.run();  
  }  
 }//end of class
``` 
Output:
```
Compile Time Error
```

## 2) Java final method
If you make any method as final, you cannot override it.

### Example of final method
```
Example
class Bike{  
  final void run(){System.out.println("running");}  
}  
     
class Honda extends Bike{  
   //We cannot override the final method  
   void run(){System.out.println("running safely with 100kmph");}  
     
   public static void main(String args[]){  
   Honda honda= new Honda();  
   honda.run();  
   }  
}  
``` 
Output:
```
Compile Time Error
```
## 3) Java final class

If you make any class as final, you cannot extend it.

## Example of final class
```
final class Bike{}  
  
//We cannot inherit the final class  
class Honda extends Bike{  
   void run(){System.out.println("running safely with 100kmph");}  
     
   public static void main(String args[]){  
    Honda honda= new Honda();  
    honda.run();  
   }  
}
``` 
Output:
```
Compile Time Error
```

# Polymorphism in Java

Polymorphism in Java is a concept by which we can perform a single action in different ways. Polymorphism is derived from 2 Greek words: poly and morphs. The word "poly" means many and "morphs" means forms. So polymorphism means many forms.

## Advantages of Polymorphism

### 1. Code Reusability

Polymorphism allows methods in subclasses to override methods in their superclass, enabling code reuse and maintaining a consistent interface across related classes.

### 2. Flexibility and Extensibility

Polymorphism allows subclasses to provide their own implementations of methods defined in the superclass, making it easier to extend and customize behavior without modifying existing code.

### 3. Dynamic Method Invocation:

Polymorphism enables dynamic method invocation, where the method called is determined by the actual object type at runtime, providing flexibility in method dispatch.

### 4. Interface Implementation:

Interfaces in Java allow multiple classes to implement the same interface with their own implementations, facilitating polymorphic behavior and enabling objects of different classes to be treated interchangeably based on a common interface.

### 5. Method Overloading:

Polymorphism is also achieved through method overloading, where multiple methods with the same name but different parameter lists can be defined within a class or its subclasses, enhancing code readability and allowing flexibility in method invocation based on parameter types.

### 6. Reduced Code Complexity:

Polymorphism helps reduce code complexity by promoting a modular and hierarchical class structure, making it easier to understand, maintain, and extend large-scale software systems.

## Types of Polymorphism

There are two types of polymorphism in Java:

Compile-time Polymorphism

Runtime Polymorphism.

We can perform polymorphism in Java by method overloading and method overriding.

### 1) Compile-Time Polymorphism in Java

In Java, method overloading is used to achieve compile-time polymorphism. A class can have numerous methods with the same name but distinct parameter lists thanks to method overloading. The compiler uses the amount and kind of parameters provided to it during compilation to decide which method to call. This choice is made during compilation, which is why it's called "compile-time polymorphism."

### 2) Runtime Polymorphism in Java

Runtime polymorphism or Dynamic Method Dispatch is a process in which a call to an overridden method is resolved at runtime rather than compile-time.

In this process, an overridden method is called through the reference variable of a superclass. The determination of the method to be called is based on the object being referred to by the reference variable.

Let's first understand the upcasting before Runtime Polymorphism.

### Upcasting

If the reference variable of Parent class refers to the object of Child class, it is known as upcasting. For example:

![image](https://github.com/user-attachments/assets/14fbeba2-a187-4686-9c0d-91ceb45cc2c6)

Upcasting in Java
```
class A{}  
class B extends A{}  
A a=new B();//upcasting  
For upcasting, we can use the reference variable of class type or an interface type. For Example:

interface I{}  
class A{}  
class B extends A implements I{}
```
Here, the relationship of B class would be:
```
B IS-A A
B IS-A I
B IS-A Object
```
### Example of Java Runtime Polymorphism
In this example, we are creating two classes Bike and Splendor. Splendor class extends Bike class and overrides its run() method. We are calling the run method by the reference variable of Parent class. Since it refers to the subclass object and subclass method overrides the Parent class method, the subclass method is invoked at runtime.

Since method invocation is determined by the JVM not compiler, it is known as runtime polymorphism.
```
Example
class Bike{    
  void run(){System.out.println("running");}    
}    
class Splendor extends Bike{    
  void run(){System.out.println("running safely with 60km");}    
}  
public class Main{  
  public static void main(String args[]){    
    Bike b = new Splendor();//upcasting    
    b.run();    
  }    
}
```
Output:
```
running safely with 60km.
```
### Explanation

This Java sample uses method overriding to illustrate runtime polymorphism. While the Splendour class extends Bike and overrides the run() method to output "running safely with 60km," the Bike class provides a method called run() that prints "running." Because of upcasting, a Bike reference variable called b is generated in the main method that points to a Splendour object. Runtime polymorphism is demonstrated by the overridden method from the Splendour class, which is called when the run() method is called using this reference variable. The JVM determines which method to call based on the actual object type at runtime.

### Java Runtime Polymorphism Example: Bank

Consider a scenario where Bank is a class that provides a method to get the rate of interest. However, the rate of interest may differ according to banks. For example, SBI, ICICI, and AXIS banks are providing 8.4%, 7.3%, and 9.7% rate of interest.

![image](https://github.com/user-attachments/assets/6be2ccc7-3047-4a4b-a4db-759059292d54)
```
Note: This example is also given in method overriding but there was no upcasting.
```
```
class Bank{    
    float getRateOfInterest(){return 0;}    
}    
class SBI extends Bank{    
    float getRateOfInterest(){return 8.4f;}    
}    
class ICICI extends Bank{    
    float getRateOfInterest(){return 7.3f;}    
}    
class AXIS extends Bank{    
    float getRateOfInterest(){return 9.7f;}    
}    
public class Main{    
 public static void main(String args[]){    
  Bank b;    
  b=new SBI();    
  System.out.println("SBI Rate of Interest: "+b.getRateOfInterest());    
  b=new ICICI();    
  System.out.println("ICICI Rate of Interest: "+b.getRateOfInterest());    
  b=new AXIS();    
  System.out.println("AXIS Rate of Interest: "+b.getRateOfInterest());    
 }    
}    
```

Output:
```
SBI Rate of Interest: 8.4
ICICI Rate of Interest: 7.3
AXIS Rate of Interest: 9.7
```
### Explanation

This Java sample uses method overriding to demonstrate polymorphism. It provides a method called getRateOfInterest() on the Bank type, which returns 0. The Bank class is extended by the subclasses SBI, ICICI, and AXIS, which override the getRateOfInterest() function to return particular interest rates. Objects of SBI, ICICI, and AXIS are created and assigned to a Bank reference variable b in the TestPolymorphism class's main method. The relevant getRateOfInterest() method is dynamically executed through polymorphism, depending on the actual object type provided to b, and the interest rates for SBI, ICICI, and AXIS banks are printed out.

# Static Binding and Dynamic Binding
![image](https://github.com/user-attachments/assets/0b2dadd4-73a6-4ff4-a06e-b3cdca940b7d)

static binding and dynamic binding in java

Connecting a method call to the method body is known as binding.

There are two types of binding

Static Binding (also known as Early Binding).
Dynamic Binding (also known as Late Binding).

![image](https://github.com/user-attachments/assets/97d6ac03-106e-4f67-b796-9b7e8d1dc7bd)

## 1) variables have a type
   
Each variable has a type, it may be primitive and non-primitive.

int data=30;  
Here data variable is a type of int.

## 2) References have a type
```
class Dog{  
 public static void main(String args[]){  
  Dog d1;//Here d1 is a type of Dog  
 }  
}  
3) Objects have a type
An object is an instance of particular java class,but it is also an instance of its superclass.
class Animal{}  
  
class Dog extends Animal{  
 public static void main(String args[]){  
  Dog d1=new Dog();  
 }  
}
```
Here d1 is an instance of Dog class, but it is also an instance of Animal.
static binding
When type of the object is determined at compiled time(by the compiler), it is known as static binding.

If there is any private, final or static method in a class, there is static binding.

### Example of static binding
```
class Dog{  
 private void eat(){System.out.println("dog is eating...");}  
  
 public static void main(String args[]){  
  Dog d1=new Dog();  
  d1.eat();  
 }  
}
```

## Dynamic binding

When type of the object is determined at run-time, it is known as dynamic binding.

### Example of dynamic binding 
```
class Animal{  
 void eat(){System.out.println("animal is eating...");}  
}  
  
class Dog extends Animal{  
 void eat(){System.out.println("dog is eating...");}  
  
 public static void main(String args[]){  
  Animal a=new Dog();  
  a.eat();  
 }  
}
```
```

Output:dog is eating...

```
In the above example object type cannot be determined by the compiler, because the instance of Dog is also an instance of Animal.So compiler doesn't know its type, only its base type

# Abstract Class in Java
In the world of Java programming, abstract classes play an important role in defining the structure of classes and their behavior in the hierarchy. They provide a blueprint for other teams to follow, and some methods remain undefined. This flexibility empowers developers to generate a well-organized and scalable codebase. In this section, we will explore the concept of abstract classes in Java, examining their features, advantages, and best practices.

A class that is declared with the abstract keyword is known as an abstract class in Java. It can have abstract and non-abstract methods (method with the body).

Before learning the Java abstract class, let's understand the abstraction in Java first.

## Abstraction in Java
Abstraction is a process of hiding the implementation details and showing only functionality to the user.

Another way, it shows only essential things to the user and hides the internal details, for example, sending SMS where we type the text and send the message. We do not know the internal processing about the message delivery.

Abstraction lets you focus on what the object does instead of how it does it.

### Ways to achieve Abstraction 

There are two ways to achieve abstraction in Java:

Using Abstract Class (0 to 100%)

Using Interface (100%)

## Abstract Class in Java

An abstract class in Java acts as a partially implemented class that itself cannot be instantiated. It exists only for subclassing purposes, and provides a template for its subcategories to follow. Abstract classes can have implementations with abstract methods. Abstract methods are declared to have no body, leaving their implementation to subclasses.

### Points to Remember

An abstract class must be declared with an abstract keyword.

It can have abstract and non-abstract methods.

It cannot be instantiated.

It can have constructors and static methods also.

It can have final methods which will force the subclass not to change the body of the method.

![image](https://github.com/user-attachments/assets/e790f0bb-f49c-4af6-a50a-afd75686ae0d)

### Syntax of Abstract Classes

In Java, abstract classes are defined using the abstract keyword. Here's a basic syntax example:
```
public abstract class Shape {  
    public abstract double area();  
    public void display() {  
        System.out.println("This is a shape.");  
    }  
}
```
In this example, Shape is an abstract class with one abstract method area() and one concrete method display(). Subclasses of Shape must implement the area() method, but they can inherit the display() method.

## Abstract Method in Java
A method which is declared as abstract and does not have implementation is known as an abstract method

Example of abstract method
```
abstract void printStatus();//no method body and abstract  
```

### Example of Abstract Class that has an Abstract Method

In this example, Bike is an abstract class that contains only one abstract method run. Its implementation is provided by the Honda class.

```
//Creating an abstract class having abstract method  
abstract class Bike{    
  abstract void run();    
}    
//Creating a child class and override abstract method  
class Honda extends Bike{    
void run(){System.out.println("running safely");}    
}  
//Creating a Main class to create object and call methods  
public class Main{  
public static void main(String args[]){    
 Bike obj = new Honda();    
 obj.run();    
}    
} 
```
Output:
```
running safely
```
## Key Features of Abstract Classes

Abstract Methods: Abstract classes can have abstract methods, which are declared without a body. Subclasses must provide concrete implementations for these methods.

Concrete Methods: Abstract classes can also contain concrete methods with defined behavior. Subclasses inherit these methods along with their implementations.

Cannot be Instantiated: Abstract classes cannot be instantiated directly. They serve as a blueprint for other classes and must be extended to be used.

Can Have Constructors: Abstract classes can have constructors, which are invoked when a subclass object is created. These constructors are used to initialize the state of the abstract class.

### Real Scenario of Abstract Class

In this example, Shape is the abstract class, and its implementation is provided by the Rectangle and Circle classes.

Mostly, we do not know about the implementation class (which is hidden to the end user), and an object of the implementation class is provided by the factory method.

A factory method is a method that returns the instance of the class. We will learn about the factory method later.

In this example, if we create the instance of Rectangle class, draw() method of Rectangle class will be invoked.
```
abstract class Shape{    
 abstract void draw();    
}    
//In real scenario, implementation is provided by others i.e. unknown by end user    
class Rectangle extends Shape{    
 void draw(){System.out.println("drawing rectangle");}    
}    
class Circle extends Shape{    
 void draw(){System.out.println("drawing circle");}    
}    
//In real scenario, method is called by programmer or user    
public class Main{    
 public static void main(String args[]){    
  //In a real scenario, object is provided through method, e.g., getShape() method    
  Shape s=new Circle();  
  s.draw();    
}    
}
```
 Output:
```
drawing circle

```
Abstract Class: Having Constructor, Data Member and Methods

An abstract class can have a data member, abstract method, method body (non-abstract method), constructor, and even main() method.

```
Example
//Example of an abstract class that has abstract and non-abstract methods    
abstract class Bike{    
   Bike(){System.out.println("bike is created");}    
   abstract void run();    
   void changeGear(){System.out.println("gear changed");}    
}    
//Creating a Child class which inherits Abstract class    
class Honda extends Bike{    
 void run(){System.out.println("running safely..");}    
}    
//Creating a Main class which calls abstract and non-abstract methods    
public class Main{    
 public static void main(String args[]){    
  Bike obj = new Honda();    
  obj.run();    
  obj.changeGear();    
 }    
}
```

Output:
```
bike is created
running safely..
gear changed
```

### Rule: 
```If there is an abstract method in a class, that class must be abstract.```
```
class Bike12{  
abstract void run();  
}
```
Output:
```
compile time error
```

Rule: If we are extending an abstract class that has an abstract method, we must either provide the implementation of the method or make this class abstract.

# Interface in Java

An interface in Java is a blueprint of a class. It has static constants and abstract methods.

The interface in Java is a mechanism to achieve abstraction. There can be only abstract methods in the Java interface, not method body. It is used to achieve abstraction and multiple inheritance in Java.

In other words, you can say that interfaces can have abstract methods and variables. It cannot have a method body.

Java Interface also represents the IS-A relationship.

It cannot be instantiated just like the abstract class.

Since Java 8, we can have default and static methods in an interface.

Since Java 9, we can have private methods in an interface.

### Why use Java interface?

There are mainly three reasons to use interface. They are given below.

It is used to achieve abstraction.

By interface, we can support the functionality of multiple inheritance.

It can be used to achieve loose coupling.

![image](https://github.com/user-attachments/assets/10ec8d9d-6664-4fb0-9503-26d8a8dd446e)

### How to declare an interface?

An interface is declared by using the interface keyword. It provides total abstraction; means all the methods in an interface are declared with the empty body, and all the fields are public, static and final by default. A class that implements an interface must implement all the methods declared in the interface.

Syntax:
```
interface <interface_name>{  
      
    // declare constant fields  
    // declare methods that abstract   
    // by default.  
}
```
Example:
```
interface Animal {  
    void eat();  
    void sleep();  
}
```

In this example, the Animal interface declares two method signatures: eat() and sleep(). Any class implementing the Animal interface must provide concrete implementations for these methods.

### Internal addition by the compiler
```
The Java compiler adds public and abstract keywords before the interface method. Moreover, it adds public, static and final keywords before data members.
```

![image](https://github.com/user-attachments/assets/b414b1cb-f205-429f-aa85-de3107ac49fa)

Java 8 Interface Improvement

Since Java 8, interface can have default and static methods which is discussed later.

Relationship Between Classes and Interfaces

As shown in the figure given below, a class extends another class, an interface extends another interface, but a class implements an interface.

![image](https://github.com/user-attachments/assets/1b4112b5-f350-4390-b680-f670c00edb75)

## Java Interface Example

In this example, the Printable interface has only one method, and its implementation is provided in the A6 class

```
//Creating an interface  
interface Printable{      
  void print();      
}    
//Creating a class that implements Printable    
class Printer implements Printable{      
  public void print(){System.out.println("Hello");}   
}  
//Creating a class that creates objects and call methods  
public class Main{  
  public static void main(String args[]){      
    Printable p=new Printer();  
    p.print();    
 }      
}
```
Output:
```
Hello
```

### Multiple Inheritance in Java by Interface

If a class implements multiple interfaces, or an interface extends multiple interfaces, it is known as multiple inheritance.

![image](https://github.com/user-attachments/assets/097398df-4cba-4f65-8c11-7e1177966f6d)

```
interface Printable{    
  void print();    
}    
interface Showable{    
  void show();    
}    
//Creating a class that implements two interfaces  
class Computer implements Printable,Showable{    
  public void print(){System.out.println("printing data...");}    
  public void show(){System.out.println("showing data...");}    
}  
//Creating a Main class to create object and call methods  
public class Main{  
  public static void main(String args[]){    
    Computer c = new Computer();    
    c.print();    
    c.show();    
 }    
}
```
Output:
```
printing data...
showing data...
```

## Java 8 Default Method in Interface

Since Java 8, we can have method body in interface. But we need to make it default method. Let's see an example:

File: TestInterfaceDefault.java
```
interface Drawable{  
void draw();  
default void msg(){System.out.println("default method");}  
}  
class Rectangle implements Drawable{  
public void draw(){System.out.println("drawing rectangle");}  
}  
class TestInterfaceDefault{  
public static void main(String args[]){  
Drawable d=new Rectangle();  
d.draw();  
d.msg();  
}}  `
```
Output:
```
drawing rectangle
default method
```
## Java 8 Static Method in Interface

Since Java 8, we can have static method in interface. Let's see an example:

File: TestInterfaceStatic.java
```
interface Drawable{  
void draw();  
static int cube(int x){return x*x*x;}  
}  
class Rectangle implements Drawable{  
public void draw(){System.out.println("drawing rectangle");}  
}  
  
class TestInterfaceStatic{  
public static void main(String args[]){  
Drawable d=new Rectangle();  
d.draw();  
System.out.println(Drawable.cube(3));  
}}
```
Output:
```
drawing rectangle
27
```

## Difference between abstract class and interface

Abstract class and interface both are used to achieve abstraction where we can declare the abstract methods. Abstract class and interface both can't be instantiated.

But there are many differences between abstract class and interface that are given below.

### Abstract class                                                                                                 Interface
```
1) Abstract class can have abstract and non-abstract methods.                               1) Interface can have only abstract methods. Since Java 8, it can have default and static methods also.
   
2) Abstract class doesn't support multiple inheritance.                                     2) Interface supports multiple inheritance.

3) Abstract class can have final, non-final, static and non-static variables.               3) Interface has only static and final variables.

4) Abstract class can provide the implementation of interface.                              4) Interface can't provide the implementation of abstract class.
   
5) The abstract keyword is used to declare abstract class.                                  5) The interface keyword is used to declare interface.
   
6) An abstract class can extend another Java class and implement multiple Java interfaces.  6) An interface can extend another Java interface only.

7) An abstract class can be extended using keyword "extends".                               7) An interface can be implemented using keyword "implements".
   
8) A Java abstract class can have class members like private, protected, etc.               8) Members of a Java interface are public by default.

Simply, abstract class achieves partial abstraction (0 to 100%) whereas interface achieves fully abstraction (100%).
```

# Packages in Java

A Java package is a group of similar types of classes, interfaces and sub-packages.

Packages in java can be categorized in two forms, built-in packages and user-defined packages.

There are many built-in packages such as java, lang, awt, javax, swing, net, io, util, sql etc.

Here, we will have the detailed learning of creating and using user-defined packages.

## Advantage of Java Package

1) Java package is used to categorize the classes and interfaces so that they can be easily maintained.

2) Java package provides access protection.

3) Java package removes naming collision.

![image](https://github.com/user-attachments/assets/e0d68062-bf74-403e-9717-56db8e5098ec)

How to compile java package
If you are not using any IDE, you need to follow the syntax given below:
```
javac -d directory javafilename  
```
For example
```
javac -d . Simple.java
```

The -d switch specifies the destination where to put the generated class file. You can use any directory name like /home (in case of Linux), d:/abc (in case of windows) etc. If you want to keep the package within the same directory, you can use . (dot).

How to run java package program
You need to use fully qualified name e.g. mypack.Simple etc to run the class.

```
To Compile: javac -d . Simple.java
To Run: java mypack.Simple
Output:Welcome to package
```
The -d is a switch that tells the compiler where to put the class file i.e. it represents destination. The . represents the current folder.

### How to access package from another package?

There are three ways to access the package from outside the package.

import package.*;

import package.classname;

fully qualified name.

### 1) Using packagename.*

If you use package.* then all the classes and interfaces of this package will be accessible but not subpackages.

The import keyword is used to make the classes and interface of another package accessible to the current package.

Example of package that import the packagename.*
```
//save by A.java  
package pack;  
public class A{  
  public void msg(){System.out.println("Hello");}  
}  
//save by B.java  
package mypack;  
import pack.*;  
  
class B{  
  public static void main(String args[]){  
   A obj = new A();  
   obj.msg();  
  }  
}
```
Output:Hello

2) Using packagename.classname

If you import package.classname then only declared class of this package will be accessible.
```
Example of package by import package.classname
//save by A.java  
  
package pack;  
public class A{  
  public void msg(){System.out.println("Hello");}  
}  
//save by B.java  
package mypack;  
import pack.A;  
  
class B{  
  public static void main(String args[]){  
   A obj = new A();  
   obj.msg();  
  }  
}
```
Output:Hello

### 3) Using fully qualified name

If you use fully qualified name then only declared class of this package will be accessible. Now there is no need to import. But you need to use fully qualified name every time when you are accessing the class or interface.

It is generally used when two packages have same class name e.g. java.util and java.sql packages contain Date class.

Example of package by import fully qualified name

```
//save by A.java  
package pack;  
public class A{  
  public void msg(){System.out.println("Hello");}  
}  
//save by B.java  
package mypack;  
class B{  
  public static void main(String args[]){  
   pack.A obj = new pack.A();//using fully qualified name  
   obj.msg();  
  }  
}
```  
Output:Hello

Note: If you import a package, subpackages will not be imported.

f you import a package, all the classes and interface of that package will be imported excluding the classes and interfaces of the subpackages. Hence, you need to import the subpackage as well.

Note: Sequence of the program must be package then import then class

![image](https://github.com/user-attachments/assets/3c0a807e-c3cd-43d5-85cd-0b6c6b29a949)

## Subpackage in java

Package inside the package is called the subpackage. It should be created to categorize the package further.

Let's take an example, Sun Microsystem has definded a package named java that contains many classes like System, String, Reader, Writer, Socket etc. These classes represent a particular group e.g. Reader and Writer classes are for Input/Output operation, Socket and ServerSocket classes are for networking etc and so on. So, Sun has subcategorized the java package into subpackages such as lang, net, io etc. and put the Input/Output related classes in io package, Server and ServerSocket classes in net packages and so on.

```
The standard of defining package is domain.company.package e.g.  org.sssit.dao.

```
Example of Subpackage
```
package com.javatpoint.core;  
class Simple{  
  public static void main(String args[]){  
   System.out.println("Hello subpackage");  
  }  
}
```
```
To Compile: javac -d . Simple.java

To Run: java com.javatpoint.core.Simple

Output:Hello subpackage
```

How to send the class file to another directory or drive?

There is a scenario, I want to put the class file of A.java source file in classes folder of c: drive. For example

![image](https://github.com/user-attachments/assets/22f35be6-639e-4a7f-ba0a-e39801f71dc7)
```
//save as Simple.java  
package mypack;  
public class Simple{  
 public static void main(String args[]){  
    System.out.println("Welcome to package");  
   }  
}  
```
o Compile:
e:\sources> javac -d c:\classes Simple.java

To Run:
To run this program from e:\source directory, you need to set classpath of the directory where the class file resides.
e:\sources> set classpath=c:\classes;.;
e:\sources> java mypack.Simple

# Access Modifiers in Java

There are two types of modifiers in Java: access modifiers and non-access modifiers.

The access modifiers in Java specifies the accessibility or scope of a field, method, constructor, or class. We can change the access level of fields, constructors, methods, and class by applying the access modifier on it.

There are four types of Java access modifiers:

Private: The access level of a private modifier is only within the class. It cannot be accessed from outside the class.

Default: The access level of a default modifier is only within the package. It cannot be accessed from outside the package. If you do not specify any access level, it will be the default.

Protected: The access level of a protected modifier is within the package and outside the package through child class. If you do not make the child class, it cannot be accessed from outside the package.

Public: The access level of a public modifier is everywhere. It can be accessed from within the class, outside the class, within the package and outside the package.

There are many non-access modifiers, such as static, abstract, synchronized, native, volatile, transient, etc. Here, we are going to learn the access modifiers only.

Understanding Java Access Modifiers

Let's understand the access modifiers in Java by a simple table.

![image](https://github.com/user-attachments/assets/52a75412-0101-438b-9225-6aa3a2e0fa50)

### 1) Private

The private access modifier is accessible only within the class.

## Simple example of private access modifier

In this example, we have created two classes A and Simple. A class contains private data member and private method. We are accessing these private members from outside the class, so there is a compile-time error.

```
class A{  
private int data=40;  
private void msg(){System.out.println("Hello java");}  
}  
  
public class Simple{  
 public static void main(String args[]){  
   A obj=new A();  
   System.out.println(obj.data);//Compile Time Error  
   obj.msg();//Compile Time Error  
   }  
}
```
Role of Private Constructor
If you make any class constructor private, you cannot create the instance of that class from outside the class. For example:
```
class A{  
private A(){}//private constructor  
void msg(){System.out.println("Hello java");}  
}  
public class Simple{  
 public static void main(String args[]){  
   A obj=new A();//Compile Time Error  
 }  
}  
```
Note: A class cannot be private or protected except nested class.

## 2) Default

If you don't use any modifier, it is treated as default by default. The default modifier is accessible only within package. It cannot be accessed from outside the package. It provides more accessibility than private. But, it is more restrictive than protected, and public.

### Example of default access modifier

In this example, we have created two packages pack and mypack. We are accessing the A class from outside its package, since A class is not public, so it cannot be accessed from outside the package.
```
//save by A.java  
package pack;  
class A{  
  void msg(){System.out.println("Hello");}  
}  
//save by B.java  
package mypack;  
import pack.*;  
class B{  
  public static void main(String args[]){  
   A obj = new A();//Compile Time Error  
   obj.msg();//Compile Time Error  
  }  
}  
```
In the above example, the scope of class A and its method msg() is default so it cannot be accessed from outside the package.


## 3) Protected
The protected access modifier is accessible within package and outside the package but through inheritance only.

The protected access modifier can be applied on the data member, method and constructor. It can't be applied on the class.

It provides more accessibility than the default modifer.

### Example of protected access modifier

In this example, we have created the two packages pack and mypack. The A class of pack package is public, so can be accessed from outside the package. But msg method of this package is declared as protected, so it can be accessed from outside the class only through inheritance.

```
//save by A.java  
package pack;  
public class A{  
protected void msg(){System.out.println("Hello");}  
}  
//save by B.java  
package mypack;  
import pack.*;  
  
class B extends A{  
  public static void main(String args[]){  
   B obj = new B();  
   obj.msg();  
  }  
}  
```
Output:Hello

## 4) Public
The public access modifier is accessible everywhere. It has the widest scope among all other modifiers.

Example of public access modifier

//save by A.java  
```
package pack;  
public class A{  
public void msg(){System.out.println("Hello");}  
}  
//save by B.java  
  
package mypack;  
import pack.*;  
  
class B{  
  public static void main(String args[]){  
   A obj = new A();  
   obj.msg();  
  }  
}
``` 
Output:Hello

# Encapsulation in Java

Encapsulation in Java is a process of wrapping code and data together into a single unit, for example, a capsule which is mixed of several medicines.

![image](https://github.com/user-attachments/assets/3369607c-fe16-4d6f-808d-dd2015e08779)

We can create a fully encapsulated class in Java by making all the data members of the class private. Now we can use setter and getter methods to set and get the data in it.

The Java Bean class is the example of a fully encapsulated class

Advantage of Encapsulation in Java

By providing only a setter or getter method, you can make the class read-only or write-only. In other words, you can skip the getter or setter methods.
It provides you the control over the data. Suppose you want to set the value of id which should be greater than 100 only, you can write the logic inside the setter method. You can write the logic not to store the negative numbers in the setter methods.

It is a way to achieve data hiding in Java because other class will not be able to access the data through the private data members.
The encapsulate class is easy to test. So, it is better for unit testing.

The standard IDE's are providing the facility to generate the getters and setters. So, it is easy and fast to create an encapsulated class in Java.

Simple Example of Encapsulation in Java
Let's see the simple example of encapsulation that has only one field with its setter and getter methods.

File: Student.java
```
//A Java class which is a fully encapsulated class.  
//It has a private data member and getter and setter methods.  
package com.javatpoint;  
public class Student{  
//private data member  
private String name;  
//getter method for name  
public String getName(){  
return name;  
}  
//setter method for name  
public void setName(String name){  
this.name=name  
}  
}  
File: Test.java

//A Java class to test the encapsulated class.  
package com.javatpoint;  
class Test{  
public static void main(String[] args){  
//creating instance of the encapsulated class  
Student s=new Student();  
//setting value in the name member  
s.setName("vijay");  
//getting value of the name member  
System.out.println(s.getName());  
}  
}  
```

```
Compile By: javac -d . Test.java
Run By: java com.javatpoint.Test
Output:

vijay
```

Read-Only class
//A Java class which has only getter methods.  
```
public class Student{  
//private data member  
private String college="AKG";  
//getter method for college  
public String getCollege(){  
return college;  
}  
}  
```
Now, you can't change the value of the college data member which is "AKG".

s.setCollege("KITE");//will render compile time error  

Write-Only class
//A Java class which has only setter methods.  
```
public class Student{  
//private data member  
private String college;  
//getter method for college  
public void setCollege(String college){  
this.college=college;  
}  
}
```
Now, you can't get the value of the college, you can only change the value of college data member.

System.out.println(s.getCollege());//Compile Time Error, because there is no such method  
System.out.println(s.college);//Compile Time Error, because the college data member is private.   
//So, it can't be accessed from outside the class  

## Real-Time Example of Encapsulation in Java

Let's see another example of encapsulation that has only four fields with its setter and getter methods.

```
/A Account class which is a fully encapsulated class.    
//It has a private data member and getter and setter methods.    
class Account {    
//private data members    
private long acc_no;    
private String name,email;    
private float amount;    
//public getter and setter methods    
public long getAcc_no() {    
    return acc_no;    
}    
public void setAcc_no(long acc_no) {    
    this.acc_no = acc_no;    
}    
public String getName() {    
    return name;    
}    
public void setName(String name) {    
    this.name = name;    
}    
public String getEmail() {    
    return email;    
}    
public void setEmail(String email) {    
    this.email = email;    
}    
public float getAmount() {    
    return amount;    
}    
public void setAmount(float amount) {    
    this.amount = amount;    
}    
}    
//A Java class to test the encapsulated class Account.    
public class Main {    
public static void main(String[] args) {    
    //creating instance of Account class    
    Account acc=new Account();    
    //setting values through setter methods    
    acc.setAcc_no(7560504000L);    
    acc.setName("Sonoo Jaiswal");    
    acc.setEmail("sonoojaiswal@tpointtech.com");    
    acc.setAmount(500000f);    
    //getting values through getter methods    
    System.out.println(acc.getAcc_no()+" "+acc.getName()+" "+acc.getEmail()+" "+acc.getAmount());    
}    
}    

```
Output:
```
7560504000 Sonoo Jaiswal sonoojaiswal@javatpoint.com 500000.0
```
# Java Arrays

An array is typically a grouping of elements of the same kind that are stored in a single, contiguous block of memory.

Java array is an object which contains elements of a similar data type. Additionally, The elements of an array are stored in a contiguous memory location. It is a data structure where we store similar elements. We can store only a fixed set of elements in a Java array.

Array in Java is index-based, the first element of the array is stored at the 0th index, 2nd element is stored on 1st index and so on.

![image](https://github.com/user-attachments/assets/ca86e6e1-3848-4842-a529-033c3c35113e)

## Advantages

Code Optimization: It makes the code optimized, we can retrieve or sort the data efficiently.

Random access: We can get any data located at an index position.

## Disadvantages

Size Limit: Arrays have a fixed size and do not grow dynamically at runtime.

## Types of Array in java

There are two types of array.

Single Dimensional Array

Multidimensional Array

## Single-Dimensional Array in Java

A single-dimensional array in Java is a linear collection of elements of the same data type. It is declared and instantiated using the following syntax:
```

dataType[] arr; (or)  
dataType []arr; (or)  
dataType arr[];

```
Instantiation of an Array in Java
```
arrayRefVar=new datatype[size];  
```
## Example of Java Array
Let's see the simple example of java array, where we are going to declare, instantiate, initialize and traverse an array.
```
Example
//Java Program to illustrate how to declare, instantiate, initialize    
//and traverse the Java array.    
public class Main{    
 public static void main(String args[]){    
    //declaration and instantiation of an array  
    int a[]=new int[5];  
    a[0]=10;//initialization    
    a[1]=20;    
    a[2]=70;    
    a[3]=40;    
    a[4]=50;    
    //traversing array    
    for(int i=0;i<a.length;i++){//length is the property of array    
        System.out.println(a[i]);    
    }  
 }  
} 
```
Output:
```
10
20
70
40
50
```

## For-each Loop for Java Array

We can also print the Java array using for-each loop. The Java for-each loop prints the array elements one by one. It holds an array element in a variable, then executes the body of the loop.

The syntax of the for-each loop is given below:

```
for(data_type variable:array){  
//body of the loop  
}  
```
Let's see the example of printing the elements of the Java array using the for-each loop.
```
Example
//Java Program to print the array elements using for-each loop    
public class Main{    
 public static void main(String args[]){    
    //declaration and initialization of an array  
    int arr[]={33,3,4,5};    
    //traversal of an array using for-each loop    
    for(int i:arr)    
        System.out.println(i);    
 }  
}  
```
Output:
```
33
3
4
5
```

# Multidimensional Array in Java

A multidimensional array in Java is an array of arrays where each element can be an array itself. It is useful for storing data in row and column format.

# Syntax to Declare Multidimensional Array in Java 

```
dataType[][] arrayRefVar; (or)  
dataType [][]arrayRefVar; (or)  
dataType arrayRefVar[][]; (or)  
dataType []arrayRefVar[];   
Example to instantiate Multidimensional Array in Java

int[][] arr=new int[3][3];//3 row and 3 column

Example to initialize Multidimensional Array in Java

arr[0][0]=1;  
arr[0][1]=2;  
arr[0][2]=3;  
arr[1][0]=4;  
arr[1][1]=5;  
arr[1][2]=6;  
arr[2][0]=7;  
arr[2][1]=8;  
arr[2][2]=9;
```
Example of Multidimensional Java Array
Let's see the simple example to declare, instantiate, initialize and print the 2Dimensional array.
```
Example
public class Main {    
    public static void main(String args[]) {    
        int arr[][] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}; // 3x3 matrix    
        // Printing the 2D array    
        for (int i = 0; i < 3; i++) {    
            for (int j = 0; j < 3; j++) {    
                System.out.print(arr[i][j] + " ");    
            }    
            System.out.println();    
        }    
    }    
}
```
Output:
```
1 2 3
4 5 6
7 8 9
```
Explanation

This Java program initializes and prints a 2D array, representing a 3x3 matrix. Initially, a 2D array named arr is declared and initialized with values using array initializer syntax. The array consists of three rows, each containing three columns. The program then iterates through each row and column of the array using nested loops. Within the loops, it prints the value of each element, separated by a space. After printing all the elements of a row, a newline character is printed to move to the next line. This process continues until all elements of the array are printed. As a result, the program outputs the 3x3 matrix with each element displayed in its respective row and column.

These examples demonstrate the declaration, instantiation, initialization, and traversal of both single-dimensional and multidimensional arrays in Java.

# Exception Handling in Java

The Exception Handling in Java is one of the powerful mechanism to handle the runtime errors so that the normal flow of the application can be maintained.

## What is Exception in Java?

In Java, an exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions. These exceptions can occur for various reasons, such as invalid user input, file not found, or division by zero. When an exception occurs, it is typically represented by an object of a subclass of the java.lang.Exception class.

## What is Exception Handling?

Exception Handling is a mechanism to handle runtime errors such as ClassNotFoundException, IOException, SQLException, RemoteException, etc.

## Advantage of Exception Handling

The core advantage of exception handling is to maintain the normal flow of the application. An exception normally disrupts the normal flow of the application; that is why we need to handle exceptions. Let's consider a scenario:
```
statement 1;  
statement 2;  
statement 3;  
statement 4;  
statement 5;//exception occurs  
statement 6;  
statement 7;  
statement 8;  
statement 9;  
statement 10;  
```
Suppose there are 10 statements in a Java program and an exception occurs at statement 5; the rest of the code will not be executed, i.e., statements 6 to 10 will not be executed. However, when we perform exception handling, the rest of the statements will be executed. That is why we use exception handling in Java.

## Hierarchy of Java Exception classes

The java.lang.Throwable class is the root class of Java Exception hierarchy inherited by two subclasses: Exception and Error. The hierarchy of Java Exception classes is given below:

![image](https://github.com/user-attachments/assets/736a08ee-a784-4de9-8bb4-a7ed3edc6417)

## Types of Java Exceptions
In Java, exceptions are categorized into two main types: checked exceptions and unchecked exceptions. Additionally, there is a third category known as errors. Let's delve into each of these types:

Checked Exception
Unchecked Exception
Error

![image](https://github.com/user-attachments/assets/c0615b9c-78e2-490e-9451-71e2f78c845d)

## 1. Checked Exceptions
   
Checked exceptions are the exceptions that are checked at compile-time. This means that the compiler verifies that the code handles these exceptions either by catching them or declaring them in the method signature using the throws keyword. Examples of checked exceptions include:

IOException: An exception is thrown when an input/output operation fails, such as when reading from or writing to a file.

SQLException: It is thrown when an error occurs while accessing a database.

ParseException: Indicates a problem while parsing a string into another data type, such as parsing a date.

ClassNotFoundException: It is thrown when an application tries to load a class through its string name using methods like Class.forName(), but the class with the specified name cannot be found in the classpath.

## 2. Unchecked Exceptions (Runtime Exceptions)
   
Unchecked exceptions, also known as runtime exceptions, are not checked at compile-time. These exceptions usually occur due to programming errors, such as logic errors or incorrect assumptions in the code. They do not need to be declared in the method signature using the throws keyword, making it optional to handle them. Examples of unchecked exceptions include:

NullPointerException: It is thrown when trying to access or call a method on an object reference that is null.

ArrayIndexOutOfBoundsException: It occurs when we try to access an array element with an invalid index.

ArithmeticException: It is thrown when an arithmetic operation fails, such as division by zero.

IllegalArgumentException: It indicates that a method has been passed an illegal or inappropriate argument.

## 3. Errors
Errors represent exceptional conditions that are not expected to be caught under normal circumstances. They are typically caused by issues outside the control of the application, such as system failures or resource exhaustion. Errors are not meant to be caught or handled by application code. Examples of errors include:

OutOfMemoryError: It occurs when the Java Virtual Machine (JVM) cannot allocate enough memory for the application.

StackOverflowError: It is thrown when the stack memory is exhausted due to excessive recursion.

NoClassDefFoundError: It indicates that the JVM cannot find the definition of a class that was available at compile-time.

Understanding the different types of exceptions in Java is crucial for writing robust and reliable code. By handling exceptions appropriately, you can improve the resilience of your applications and provide better user experiences.hierarchy of exception handling

Difference between Checked and Unchecked Exceptions
Here are the key differences between checked exceptions, unchecked exceptions (runtime exceptions), and errors in Java:

## 1. Checked Exceptions:

Compile-time Check: Checked exceptions are checked at compile-time by the Java compiler. This means that the compiler ensures that these exceptions are either caught or declared in the method signature using the throws keyword.

Examples: Examples of checked exceptions include IOException, SQLException, ParseException, etc.

Forced Handling: Checked exceptions enforce explicit handling, either by catching them or declaring them to be thrown. This helps in improving code reliability and robustness.

Recovery Possible: Checked exceptions typically represent recoverable conditions, such as file not found or database connection failure, where the application may take corrective action.

## 2. Unchecked Exceptions (Runtime Exceptions):
Not Checked at Compile-time: Unlike checked exceptions, unchecked exceptions are not checked at compile-time. This means that the compiler does not enforce handling of unchecked exceptions.

Examples: Examples of unchecked exceptions include NullPointerException, ArrayIndexOutOfBoundsException, ArithmeticException, etc.

Runtime Errors: Unchecked exceptions often represent programming errors or unexpected conditions during runtime, such as null references or array index out of bounds.

Optional Handling: Handling of unchecked exceptions is optional. While it's good practice to handle them for robustness, it's not mandatory.

## 3. Errors:
Not Meant for Handling: Errors represent exceptional conditions that are typically beyond the control of the application and are not meant to be caught or handled by application code.

Examples: Examples of errors include OutOfMemoryError, StackOverflowError, NoClassDefFoundError, etc.

Critical Conditions: Errors usually indicate critical conditions, such as JVM failures or system resource exhaustion, where the application cannot recover.

Java Exception Keywords
Java provides five keywords that are used to handle the exception. The following table describes each.


### try
The "try" keyword is used to specify a block where we should place an exception code. It means we can't use try block alone. The try block must be followed by either catch or finally.

### catch
The "catch" block is used to handle the exception. It must be preceded by try block which means we can't use catch block alone. It can be followed by finally block later.

### finally
The "finally" block is used to execute the necessary code of the program. It is executed whether an exception is handled or not.

### throw
The "throw" keyword is used to throw an exception.

### throws
The "throws" keyword is used to declare exceptions. It specifies that there may occur an exception in the method. It doesn't throw an exception. It is always used with method signature.

## The try-catch Block

One of the primary mechanisms for handling exceptions in Java is the try-catch block. The try block contains the code that may throw an exception, and the catch block is used to handle the exception if it occurs. Here's a basic example:
```
try {  
    // Code that may throw an exception  
} catch (ExceptionType e) {  
    // Exception handling code  
}  
```

## Handling Multiple Exceptions

You can handle multiple types of exceptions by providing multiple catch blocks, each catching a different type of exception. This allows you to tailor your exception handling logic based on the specific type of exception thrown. Here's an example:
```
try {  
    // Code that may throw an exception  
} catch (IOException e) {  
    // Handle IOException  
} catch (NumberFormatException e) {  
    // Handle NumberFormatException  
} catch (Exception e) {  
    // Handle any other exceptions  
}
```

## The finally Block

In addition to try and catch, Java also provides a finally block, which allows you to execute cleanup code, such as closing resources, regardless of whether an exception occurs or not. The finally block is typically used to release resources that were acquired in the try block. Here's an example:
```
try {  
    // Code that may throw an exception  
} catch (Exception e) {  
    // Exception handling code  
} finally {  
    // Cleanup code  
}
```

## Java Exception Handling Example
Let's see an example of Java Exception Handling in which we are using a try-catch statement to handle the exception.

JavaExceptionExample.java
```
public class JavaExceptionExample{  
  public static void main(String args[]){  
   try{  
      //code that may raise exception  
      int data=100/0;  
   }catch(ArithmeticException e){System.out.println(e);}  
   //rest code of the program   
   System.out.println("rest of the code...");  
  }  
}
```
Output:
```
Exception in thread main java.lang.ArithmeticException:/ by zero
rest of the code...
```

## Common Scenarios of Java Exceptions
There are given some scenarios where unchecked exceptions may occur. They are as follows:

### 1) A scenario where ArithmeticException occurs
   
If we divide any number by zero, there occurs an ArithmeticException.
```
int a=50/0;//ArithmeticException  
Here's a simple Java code example where an ArithmeticException occurs:

File Name: ArithmeticExceptionExample.java

public class ArithmeticExceptionExample {  
    public static void main(String[] args) {  
        int dividend = 10;  
        int divisor = 0;  
        try {  
            int result = dividend / divisor; // Division by zero  
            System.out.println("Result: " + result);  
        } catch (ArithmeticException e) {  
            System.out.println("Error: Division by zero is not allowed.");  
            // Additional error handling code can be added here  
        }  
    }  
}
```
Output:
```
Error: Division by zero is not allowed.
```
Explanation

We have a main() method where we attempt to perform division by zero that is not allowed in arithmetic.

Inside the try block, we perform the division operation dividend / divisor, where divisor is assigned the value of 0.

When the division by zero occurs, an ArithmeticException is thrown. We catch this exception using a catch block specifically for ArithmeticException.

In the catch block, we handle the exception by printing an error message, indicating that division by zero is not allowed. Additional error handling logic can be added here if needed.

## 2) A scenario where NullPointerException occurs

If we have a null value in any variable, performing any operation on the variable throws a NullPointerException.

String s=null;  
System.out.println(s.length());//NullPointerException  

Here's a Java code example where a NullPointerException occurs:

File Name: NullPointerExceptionExample.java
```
public class NullPointerExceptionExample {  
    public static void main(String[] args) {  
        String str = null; // Initializing a String variable to null  
        try {  
            int length = str.length(); // Attempting to call a method on a null reference  
            System.out.println("Length of the string: " + length);  
        } catch (NullPointerException e) {  
            System.out.println("Error: Null reference encountered.");  
            // Additional error handling code can be added here  
        }  
    }  
}
```
Output:
```
Error: Null reference encountered.
```

## 3) A scenario where NumberFormatException occurs
If the formatting of any variable or number is mismatched, it may result into NumberFormatException. Suppose we have a string variable that has characters; converting this variable into digit will cause NumberFormatException.
```
String s="abc";  
int i=Integer.parseInt(s);//NumberFormatException
```

## 4) A scenario where ArrayIndexOutOfBoundsException occurs
When an array exceeds to it's size, the ArrayIndexOutOfBoundsException occurs. there may be other reasons to occur ArrayIndexOutOfBoundsException. Consider the following statements.
```
int a[]=new int[5];  
a[10]=50; //ArrayIndexOutOfBoundsException
```
# Java try-catch block

## Java try block

Java try block is used to enclose the code that might throw an exception. It must be used within the method.

If an exception occurs at the particular statement in the try block, the rest of the block code will not execute. So, it is recommended not to keep the code in try block that will not throw an exception.

Java try block must be followed by either catch or finally block.

Syntax of Java try-catch
``
try{    
//code that may throw an exception    
}catch(Exception_class_Name ref){}    
``
Syntax of try-finally block
```
try{    
//code that may throw an exception    
}finally
```
Java catch block
Java catch block is used to handle the Exception by declaring the type of exception within the parameter. The declared exception must be the parent class exception ( i.e., Exception) or the generated exception type. However, the good approach is to declare the generated type of exception.

The catch block must be used after the try block only. You can use multiple catch block with a single try block.

## Internal Working of Java try-catch block

![image](https://github.com/user-attachments/assets/1ba545e4-1b9d-4ce0-94fa-2234cdd0412b)

The JVM firstly checks whether the exception is handled or not. If exception is not handled, JVM provides a default exception handler that performs the following tasks:

Prints out exception description.

Prints the stack trace (Hierarchy of methods where the exception occurred).

Causes the program to terminate.

But if the application programmer handles the exception, the normal flow of the application is maintained, i.e., rest of the code is executed.

### Problem without exception handling

Let's try to understand the problem if we don't use a try-catch block.
```
public class TryCatchExample1 {  
  
    public static void main(String[] args) {  
          
        int data=50/0; //may throw exception   
          
        System.out.println("rest of the code");  
          
    }  
      
}
```
Output:
```
Exception in thread "main" java.lang.ArithmeticException: / by zero
```

As displayed in the above example, the rest of the code is not executed (in such case, the rest of the code statement is not printed).

There might be 100 lines of code after the exception. If the exception is not handled, all the code below the exception won't be executed.

### Solution by exception handling

Let's see the solution of the above problem by a java try-catch block.
```
public class TryCatchExample2 {  
  
    public static void main(String[] args) {  
        try  
        {  
        int data=50/0; //may throw exception   
        }  
            //handling the exception  
        catch(ArithmeticException e)  
        {  
            System.out.println(e);  
        }  
        System.out.println("rest of the code");  
    }  
      
}
```
Output:
```
java.lang.ArithmeticException: / by zero
rest of the code
```

As displayed in the above example, the rest of the code is executed, i.e., the rest of the code statement is printed.

## Java Catch Multiple Exceptions

### Java Multi-catch block

A try block can be followed by one or more catch blocks. Each catch block must contain a different exception handler. So, if you have to perform different tasks at the occurrence of different exceptions, use java multi-catch block.

### Points to remember

At a time only one exception occurs and at a time only one catch block is executed.

All catch blocks must be ordered from most specific to most general, i.e. catch for ArithmeticException must come before catch for Exception.

### Flowchart of Multi-catch Block

![image](https://github.com/user-attachments/assets/f5095f5f-988d-4fa2-8963-fef35a8d6a92)

## MultipleCatchBlock1.java
```
public class MultipleCatchBlock1 {  
  
    public static void main(String[] args) {  
          
           try{    
                int a[]=new int[5];    
                a[5]=30/0;    
               }    
               catch(ArithmeticException e)  
                  {  
                   System.out.println("Arithmetic Exception occurs");  
                  }    
               catch(ArrayIndexOutOfBoundsException e)  
                  {  
                   System.out.println("ArrayIndexOutOfBounds Exception occurs");  
                  }    
               catch(Exception e)  
                  {  
                   System.out.println("Parent Exception occurs");  
                  }             
               System.out.println("rest of the code");    
    }  
}  
```

Output:

```
Arithmetic Exception occurs
rest of the code
```
# Java Nested try block

In Java, using a try block inside another try block is permitted. It is called as nested try block. Every statement that we enter a statement in try block, context of that exception is pushed onto the stack.

For example, the inner try block can be used to handle ArrayIndexOutOfBoundsException while the outer try block can handle the ArithemeticException (division by zero).

## Why use nested try block
Sometimes a situation may arise where a part of a block may cause one error and the entire block itself may cause another error. In such cases, exception handlers have to be nested.

Syntax:
 ```
....    
//main try block  
try    
{    
    statement 1;    
    statement 2;    
//try catch block within another try block  
    try    
    {    
        statement 3;    
        statement 4;    
//try catch block within nested try block  
        try    
        {    
            statement 5;    
            statement 6;    
     }    
        catch(Exception e2)    
        {    
//exception message  
        }    
  
    }    
    catch(Exception e1)    
    {    
//exception message  
    }    
}    
//catch block of parent (outer) try block  
catch(Exception e3)    
{    
//exception message  
}    
....
```

NestedTryBlock.java
```
public class NestedTryBlock{    
 public static void main(String args[]){   
 //outer try block   
  try{    
  //inner try block 1  
    try{    
     System.out.println("going to divide by 0");    
     int b =39/0;    
   }  
    //catch block of inner try block 1  
    catch(ArithmeticException e)  
    {  
      System.out.println(e);  
    }    
       
    
    //inner try block 2  
    try{    
    int a[]=new int[5];    
  
    //assigning the value out of array bounds  
     a[5]=4;    
     }  
  
    //catch block of inner try block 2  
    catch(ArrayIndexOutOfBoundsException e)  
    {  
       System.out.println(e);  
    }    
  
      
    System.out.println("other statement");    
  }  
  //catch block of outer try block  
  catch(Exception e)  
  {  
    System.out.println("handled the exception (outer catch)");  
  }    
    
  System.out.println("normal flow..");    
 }    
}  
```

Output:
![image](https://github.com/user-attachments/assets/e670dfce-dc54-4eca-9534-71448f13c47e)

# Java finally block

Java finally block is a block used to execute important code such as closing the connection, etc.

Java finally block is always executed whether an exception is handled or not. Therefore, it contains all the necessary statements that need to be printed regardless of the exception occurs or not.

The finally block follows the try-catch block.

## Flowchart of finally block

![image](https://github.com/user-attachments/assets/0897fe83-7b4a-48d9-973f-c424392cfdd4)

### Note: 
```
If you don't handle the exception, before terminating the program, JVM executes finally block (if any).
```

### Why use Java finally block?

finally block in Java can be used to put "cleanup" code such as closing a file, closing connection, etc.

The important statements to be printed can be placed in the finally block.

### Usage of Java finally

Let's see the different cases where Java finally block can be used.

### Case 1: When an exception does not occur

Let's see the below example where the Java program does not throw any exception, and the finally block is executed after the try block.

TestFinallyBlock.java

```
class TestFinallyBlock {    
  public static void main(String args[]){    
  try{    
//below code do not throw any exception  
   int data=25/5;    
   System.out.println(data);    
  }    
//catch won't be executed  
  catch(NullPointerException e){  
System.out.println(e);  
}    
//executed regardless of exception occurred or not  
 finally {  
System.out.println("finally block is always executed");  
}    
    
System.out.println("rest of phe code...");    
  }    
}
```

Output:

![image](https://github.com/user-attachments/assets/d234d4f8-79f2-4594-95c7-16b9966d92a0)

### Rule: 
```
For each try block there can be zero or more catch blocks, but only one finally block.

```

### Note: 
```
The finally block will not be executed if the program exits (either by calling System.exit() or by causing a fatal error that causes the process to abort).
```

# Java throw Exception

In Java, exceptions allows us to write good quality codes where the errors are checked at the compile time instead of runtime and we can create custom exceptions making the code recovery and debugging easier.

## Java throw keyword

The Java throw keyword is used to throw an exception explicitly.

We specify the exception object which is to be thrown. The Exception has some message with it that provides the error description. These exceptions may be related to user inputs, server, etc.

We can throw either checked or unchecked exceptions in Java by throw keyword. It is mainly used to throw a custom exception. We will discuss custom exceptions later in this section.

We can also define our own set of conditions and throw an exception explicitly using throw keyword. For example, we can throw ArithmeticException if we divide a number by another number. Here, we just need to set the condition and throw exception using throw keyword.

The syntax of the Java throw keyword is given below.

throw Instance i.e.,

```
throw new exception_class("error message");
```
Let's see the example of throw IOException.

```
throw new IOException("sorry device error");

```
Where the Instance must be of type Throwable or subclass of Throwable. For example, Exception is the sub class of Throwable and the user-defined exceptions usually extend the Exception class.

### Java throw keyword Example

Example 1: Throwing Unchecked Exception

In this example, we have created a method named validate() that accepts an integer as a parameter. If the age is less than 18, we are throwing the ArithmeticException otherwise print a message welcome to vote.
```
File Name: TestThrow1.java
public class TestThrow1 {   
    //function to check if person is eligible to vote or not   
    public static void validate(int age) {  
        if(age<18) {  
            //throw Arithmetic exception if not eligible to vote  
            throw new ArithmeticException("Person is not eligible to vote");    
        }  
        else {  
            System.out.println("Person is eligible to vote!!");  
        }  
    }  
    //main method  
    public static void main(String args[]){  
        //calling the function  
        validate(13);  
        System.out.println("rest of the code...");    
  }    
}    
```
Output:
![image](https://github.com/user-attachments/assets/c6f711da-48f3-4035-9912-665a4d222b38)

The above code throw an unchecked exception. Similarly, we can also throw unchecked and user defined exceptions.

### Note: 
```
If we throw an unchecked exception from a method, it is not required to handle the exception or declare it in throws clause. However, for checked exceptions, handling or declaration in the throws clause is mandatory."
```
If we throw a checked exception using throw keyword, it is must to handle the exception using catch block or the method must declare it using throws declaration.

# Example 2: Throwing Checked Exception

### Note: 
```
Every subclass of Error and RuntimeException is an unchecked exception in Java. A checked exception is everything else under the Throwable class.
```

File Name: TestThrow2.java
```
import java.io.*;  
  
public class TestThrow2 {   
  
    //function to check if person is eligible to vote or not   
    public static void method() throws FileNotFoundException {  
  
        FileReader file = new FileReader("C:\\Users\\Anurati\\Desktop\\abc.txt");  
        BufferedReader fileInput = new BufferedReader(file);  
  
      
        throw new FileNotFoundException();  
      
    }  
    //main method  
    public static void main(String args[]){  
        try  
        {  
            method();  
        }   
        catch (FileNotFoundException e)   
        {  
            e.printStackTrace();  
        }  
        System.out.println("rest of the code...");    
  }    
}    
```
Output:

![image](https://github.com/user-attachments/assets/a0d54a17-8896-49c3-9ef6-5e8e5b63b3f9)

# Example 3: Throwing User-defined Exception

exception is everything else under the Throwable class.

TestThrow3.java
```
// class represents user-defined exception  
class UserDefinedException extends Exception  
{  
    public UserDefinedException(String str)  
    {  
        // Calling constructor of parent Exception  
        super(str);  
    }  
}  
// Class that uses above MyException  
public class TestThrow3  
{  
    public static void main(String args[])  
    {  
        try  
        {  
            // throw an object of user defined exception  
            throw new UserDefinedException("This is user-defined exception");  
        }  
        catch (UserDefinedException ude)  
        {  
            System.out.println("Caught the exception");  
            // Print the message from MyException object  
            System.out.println(ude.getMessage());  
        }  
    }  
}
```
Output:

![image](https://github.com/user-attachments/assets/56d55784-da73-44b6-8cb3-8a975043aa5b)


# Java Exception Propagation

An exception is first thrown from the top of the stack and if it is not caught, it drops down the call stack to the previous method. If not caught there, the exception again drops down to the previous method, and so on until they are caught or until they reach the very bottom of the call stack. This is called exception propagation.

Note: By default Unchecked Exceptions are forwarded in calling chain (propagated).

```
class TestExceptionPropagation1{  
  void m(){  
    int data=50/0;  
  }  
  void n(){  
    m();  
  }  
  void p(){  
   try{  
    n();  
   }catch(Exception e){System.out.println("exception handled");}  
  }  
  public static void main(String args[]){  
   TestExceptionPropagation1 obj=new TestExceptionPropagation1();  
   obj.p();  
   System.out.println("normal flow...");  
  }  
}
```

Output:
```
exception handled
normal flow...

```

In the above example exception occurs in the m() method where it is not handled, so it is propagated to the previous n() method where it is not handled, again it is propagated to the p() method where exception is handled.

Exception can be handled in any method in call stack either in the main() method, p() method, n() method or m() method.
![image](https://github.com/user-attachments/assets/c8acf0bd-3d4d-40f0-9a01-65c46ec2980a)

### Note: 
```
By default, Checked Exceptions are not forwarded in calling chain (propagated).
```
TestExceptionPropagation1.java
```
class TestExceptionPropagation2{  
  void m(){  
    throw new java.io.IOException("device error");//checked exception  
  }  
  void n(){  
    m();  
  }  
  void p(){  
   try{  
    n();  
   }catch(Exception e){System.out.println("exception handeled");}  
  }  
  public static void main(String args[]){  
   TestExceptionPropagation2 obj=new TestExceptionPropagation2();  
   obj.p();  
   System.out.println("normal flow");  
  }  
}  
```
Output:

Compile Time Error

# Java throws keyword
The Java throws keyword is used to declare an exception. It gives an information to the programmer that there may occur an exception. So, it is better for the programmer to provide the exception handling code so that the normal flow of the program can be maintained.

Exception Handling is mainly used to handle the checked exceptions. If there occurs any unchecked exception such as NullPointerException, it is programmers' fault that he is not checking the code before it being used.

## Syntax of Java throws
```
return_type method_name() throws exception_class_name{  
//method code  
}
```

### Which exception should be declared?
Ans: Checked exception only, because:

unchecked exception: under our control so we can correct our code.
error: beyond our control. For example, we are unable to do anything if there occurs VirtualMachineError or StackOverflowError.

### Advantage of Java throws keyword
Now Checked Exception can be propagated (forwarded in call stack).

It provides information to the caller of the method about the exception.

## Java throws Example
Let's see the example of Java throws clause which describes that checked exceptions can be propagated by throws keyword.

Testthrows1.java
```
import java.io.IOException;  
class Testthrows1{  
  void m()throws IOException{  
    throw new IOException("device error");//checked exception  
  }  
  void n()throws IOException{  
    m();  
  }  
  void p(){  
   try{  
    n();  
   }catch(Exception e){System.out.println("exception handled");}  
  }  
  public static void main(String args[]){  
   Testthrows1 obj=new Testthrows1();  
   obj.p();  
   System.out.println("normal flow...");  
  }  
}  
```
Output:
```
exception handled
normal flow...
```

Rule: If we are calling a method that declares an exception, we must either caught or declare the exception.

### There are two cases:

Case 1: We have caught the exception i.e. we have handled the exception using try/catch block.

Case 2: We have declared the exception i.e. specified throws keyword with the method.

Case 1: Handle Exception Using try-catch block

In case we handle the exception, the code will be executed fine whether exception occurs during the program or not.

Testthrows2.java
```
import java.io.*;  
class M{  
 void method()throws IOException{  
  throw new IOException("device error");  
 }  
}  
public class Testthrows2{  
   public static void main(String args[]){  
    try{  
     M m=new M();  
     m.method();  
    }catch(Exception e){System.out.println("exception handled");}     
  
    System.out.println("normal flow...");  
  }  
}  
```

Output:
```
exception handled
normal flow...
```

### Case 2: Declare Exception

In case we declare the exception, if exception does not occur, the code will be executed fine.
In case we declare the exception and the exception occurs, it will be thrown at runtime because throws does not handle the exception.
Let's see examples for both the scenario.

## A) If exception does not occur

Testthrows3.java
```
import java.io.*;  
class M{  
 void method()throws IOException{  
  System.out.println("device operation performed");  
 }  
}  
class Testthrows3{  
   public static void main(String args[])throws IOException{//declare exception  
     M m=new M();  
     m.method();  
  
    System.out.println("normal flow...");  
  }  
}
```

Output:
```
device operation performed
normal flow...
```
### B) If exception occurs

Testthrows4.java
```
import java.io.*;  
class M{  
 void method()throws IOException{  
  throw new IOException("device error");  
 }  
}  
class Testthrows4{  
   public static void main(String args[])throws IOException{//declare exception  
     M m=new M();  
     m.method();  
  
    System.out.println("normal flow...");  
  }  
}  
```
Output:
![image](https://github.com/user-attachments/assets/ccbd6e36-d464-4954-8699-21d68dc03ef1)


## Difference Between throw and throws in Java
The throw and throws is the concept of exception handling where the throw keyword throw the exception explicitly from a method or a block of code whereas the throws keyword is used in signature of the method.

There are many differences between throw and throws keywords. A list of differences between throw and throws are given below:

### Definition
Java throw keyword is used throw an exception explicitly in the code, inside the function or the block of code.
Java throws keyword is used in the method signature to declare an exception which might be thrown by the function while the execution of the code.

### Uses
Type of exception Using throw keyword, we can only propagate unchecked exception i.e., the checked exception cannot be propagated using throw only.
Using throws keyword, we can declare both checked and unchecked exceptions. However, the throws keyword can be used to propagate checked exceptions only.

### Syntax
The throw keyword is followed by an instance of Exception to be thrown.
The throws keyword is followed by class names of Exceptions to be thrown.

### Declaration
The keyword throw is used within the method.
The keyword throws is used with the method signature.

### Internal Implementation
We are allowed to throw only one exception at a time i.e. we cannot throw multiple exceptions.
We can declare multiple exceptions using throws keyword that can be thrown by the method. For example, main() throws IOException, SQLException.

### Java throw Keyword
The "throw" keyword in Java is used to explicitly throw an exception. It disrupts the normal flow of the program by transferring control to the nearest catch block that can handle the thrown exception. When an exception occurs within a method, the method creates an exception object and throws it using the "throw" keyword.

### Java throw Example

```
public class TestThrow {  
    //defining a method  
    public static void checkNum(int num) {  
        if (num < 1) {  
            throw new ArithmeticException("\nNumber is negative, cannot calculate square");  
        }  
        else {  
            System.out.println("Square of " + num + " is " + (num*num));  
        }  
    }  
    //main method  
    public static void main(String[] args) {  
            TestThrow obj = new TestThrow();  
            obj.checkNum(-3);  
            System.out.println("Rest of the code..");  
    }  
}
```
  
Output:
![image](https://github.com/user-attachments/assets/a8e29246-4fb4-45fb-965c-45e3e6bfa8ca)

### Explanation

The Java class "TestThrow" defines a method named "checkNum()" that takes an integer parameter. Within this method, it checks if the input number is less than 1. If so, it throws an ArithmeticException with a message indicating that the number is negative and its square cannot be calculated. Otherwise, if the number is positive or zero, it calculates and prints the square of the number.

In the main() method, an instance of "TestThrow" is created, and the "checkNum()" method is called with a negative integer (-3) as an argument. Since the input number is negative, the method throws an ArithmeticException, which is not caught within the main method. Consequently, the program terminates prematurely after printing the exception message. Therefore, the statement "Rest of the code." is not executed. The code illustrates how to use the "throw" keyword to explicitly throw an exception in Java when certain conditions are met, thereby controlling program flow based on runtime conditions.

### Java throws Keyword
On the other hand, the "throws" clause is used in method signatures to indicate that the method may throw certain types of exceptions during its execution. It doesn't actually throw the exception; instead, it declares that the method may throw exceptions of specified types, thereby alerting the caller to handle them appropriately.

Java throws Example
TestThrows.java

```
public class TestThrows {  
    //defining a method  
    public static int divideNum(int m, int n) throws ArithmeticException {  
        int div = m / n;  
        return div;  
    }  
    //main method  
    public static void main(String[] args) {  
        TestThrows obj = new TestThrows();  
        try {  
            System.out.println(obj.divideNum(45, 0));  
        }  
        catch (ArithmeticException e){  
            System.out.println("\nNumber cannot be divided by 0");  
        }  
          
        System.out.println("Rest of the code..");  
    }  
}
```
Output:
![image](https://github.com/user-attachments/assets/17e46b80-48f8-4777-a2c5-ab27a7692416)
The Java class "TestThrows" defines a method named "divideNum()" that takes two integer parameters and returns the result of dividing the first parameter by the second. The method is declared with a "throws ArithmeticException" clause, indicating that it may throw an ArithmeticException if the second parameter is zero, resulting in a division by zero error.

In the main() method, an instance of "TestThrows" is created, and the "divideNum()" method is called within a try block. If an ArithmeticException is thrown during the method invocation, it is caught by the catch block, which prints a message indicating that division by zero is not allowed.

Regardless of whether an exception occurs, the program continues to execute the remaining code, printing "Rest of the code." to the console. The code demonstrates how to use the "throws" keyword to specify potential exceptions in a method signature and how to handle these exceptions using a try-catch block in Java.

### Conclusion

In conclusion, understanding the distinction between "throw" and "throws" in Java is essential for effective exception handling. While both keywords play significant roles in managing exceptions, they serve different purposes and are used in distinct contexts. The "throw" keyword is utilized to explicitly throw exceptions within methods or blocks of code, disrupting the normal program flow and transferring control to the nearest catch block.

On the other hand, the "throws" keyword is employed in method signatures to declare the types of exceptions that a method may throw during execution, providing a mechanism for the caller to handle potential exceptions appropriately. By grasping the nuances between "throw" and "throws," Java developers can enhance the robustness and reliability of their code by implementing precise exception handling strategies tailored to their specific requirements.

# Difference between final, finally and finalize

The final, finally, and finalize are keywords in Java that are used in exception handling. Each of these keywords has a different functionality. The basic difference between final, finally and finalize is that the final is an access modifier, finally is the block in Exception Handling and finalize is the method of object class.

Along with this, there are many differences between final, finally and finalize. A list of differences between final, finally and finalize are given below:


## Definition

final is the keyword and access modifier which is used to apply restrictions on a class, method or variable.

finally is the block in Java Exception Handling to execute the important code whether the exception occurs or not.

finalize is the method in Java which is used to perform clean up processing just before object is garbage collected.


## Applicable to

Final keyword is used with the classes, methods and variables
.
Finally block is always related to the try and catch block in exception handling.

finalize() method is used with the objects.

## Functionality

(1) Once declared, final variable becomes constant and cannot be modified.

(2) final method cannot be overridden by sub class.

(3) final class cannot be inherited.

(1) finally block runs the important code even if exception occurs or not.

(2) finally block cleans up all the resources used in try block

finalize method performs the cleaning activities with respect to the object before its destruction.

## Execution

Final method is executed only when we call it.
Finally block is executed as soon as the try-catch block is executed.
It's execution is not dependant on the exception.

finalize method is executed just before the object is destroyed.

## Java finalize Example

FinalizeExample.java
```
public class FinalizeExample {    
     public static void main(String[] args)     
    {     
        FinalizeExample obj = new FinalizeExample();        
        // printing the hashcode   
        System.out.println("Hashcode is: " + obj.hashCode());           
        obj = null;    
        // calling the garbage collector using gc()   
        System.gc();     
        System.out.println("End of the garbage collection");     
    }     
   // defining the finalize method   
    protected void finalize()     
    {     
        System.out.println("Called the finalize() method");     
    }     
}    
```
Output:

Java finalize Example
FinalizeExample.java

public class FinalizeExample {    
     public static void main(String[] args)     
    {     
        FinalizeExample obj = new FinalizeExample();        
        // printing the hashcode   
        System.out.println("Hashcode is: " + obj.hashCode());           
        obj = null;    
        // calling the garbage collector using gc()   
        System.gc();     
        System.out.println("End of the garbage collection");     
    }     
   // defining the finalize method   
    protected void finalize()     
    {     
        System.out.println("Called the finalize() method");     
    }     
}    
Output:

Java finalize Example
FinalizeExample.java

public class FinalizeExample {    
     public static void main(String[] args)     
    {     
        FinalizeExample obj = new FinalizeExample();        
        // printing the hashcode   
        System.out.println("Hashcode is: " + obj.hashCode());           
        obj = null;    
        // calling the garbage collector using gc()   
        System.gc();     
        System.out.println("End of the garbage collection");     
    }     
   // defining the finalize method   
    protected void finalize()     
    {     
        System.out.println("Called the finalize() method");     
    }     
}    
Output:

![image](https://github.com/user-attachments/assets/29e16e21-b76b-4be9-83d6-30b3cd78ea48)

# Java Custom Exception

In Java, we can create our own exceptions that are derived classes of the Exception class. Creating our own Exception is known as custom exception or user-defined exception. Basically, Java custom exceptions are used to customize the exception according to user need.

Consider the example 1 in which InvalidAgeException class extends the Exception class.

Using the custom exception, we can have your own exception and message. Here, we have passed a string to the constructor of superclass i.e. Exception class that can be obtained using getMessage() method on the object we have created.

## Why use custom exceptions?
Java exceptions cover almost all the general type of exceptions that may occur in the programming. However, we sometimes need to create custom exceptions.

Following are few of the reasons to use custom exceptions:

To catch and provide specific treatment to a subset of existing Java exceptions.
Business logic exceptions: These are the exceptions related to business logic and workflow. It is useful for the application users or the developers to understand the exact problem.
In order to create custom exception, we need to extend Exception class that belongs to java.lang package.

Consider the following example, where we create a custom exception named WrongFileNameException:
```
public class WrongFileNameException extends Exception {  
    public WrongFileNameException(String errorMessage) {  
    super(errorMessage);  
    }  
}
```
### Note: 
```
We need to write the constructor that takes the String as the error message and it is called parent class constructor.
```

Let's see a simple example of Java custom exception. In the following code, constructor of InvalidAgeException takes a string as an argument. This string is passed to constructor of parent class Exception using the super() method. Also the constructor of Exception class can be called without using a parameter and calling super() method is not mandatory.

TestCustomException1.java
```
// class representing custom exception  
class InvalidAgeException  extends Exception  
{  
    public InvalidAgeException (String str)  
    {  
        // calling the constructor of parent Exception  
        super(str);  
    }  
}  
    
// class that uses custom exception InvalidAgeException  
public class TestCustomException1  
{  
  
    // method to check the age  
    static void validate (int age) throws InvalidAgeException{    
       if(age < 18){  
  
        // throw an object of user defined exception  
        throw new InvalidAgeException("age is not valid to vote");    
    }  
       else {   
        System.out.println("welcome to vote");   
        }   
     }    
  
    // main method  
    public static void main(String args[])  
    {  
        try  
        {  
            // calling the method   
            validate(13);  
        }  
        catch (InvalidAgeException ex)  
        {  
            System.out.println("Caught the exception");  
    
            // printing the message from InvalidAgeException object  
            System.out.println("Exception occured: " + ex);  
        }  
  
        System.out.println("rest of the code...");    
    }  
} 
```
Output:
![image](https://github.com/user-attachments/assets/99088d92-66e7-4f01-ae9b-8438cdfc007a)

TestCustomException2.java
```
// class representing custom exception  
class MyCustomException extends Exception  
{  
    
}  
    
// class that uses custom exception MyCustomException  
public class TestCustomException2  
{  
    // main method  
    public static void main(String args[])  
    {  
        try  
        {  
            // throw an object of user defined exception  
            throw new MyCustomException();  
        }  
        catch (MyCustomException ex)  
        {  
            System.out.println("Caught the exception");  
            System.out.println(ex.getMessage());  
        }  
  
        System.out.println("rest of the code...");    
    }  
}  
```
Output:

![image](https://github.com/user-attachments/assets/925ba83f-dca3-47eb-888b-1330f9632792)

# Java Regex

The Java Regex or Regular Expression is an API to define a pattern for searching or manipulating strings.

It is widely used to define the constraint on strings such as password and email validation. After learning Java regex tutorial, you will be able to test your regular expressions by the Java Regex Tester Tool.

Java Regex API provides 1 interface and 3 classes in java.util.regex package.

java.util.regex package
The Matcher and Pattern classes provide the facility of Java regular expression. The java.util.regex package provides following classes and interfaces for regular expressions.

MatchResult interface
Matcher class
Pattern class
PatternSyntaxException class

![image](https://github.com/user-attachments/assets/32a2ba99-637f-4bff-bc81-d74f1ad4d7b0)

## Matcher class

It implements the MatchResult interface. It is a regex engine which is used to perform match operations on a character sequence.

Example of Java Regular Expressions
There are three ways to write the regex example in Java.
```
mport java.util.regex.*;  
public class RegexExample1{  
public static void main(String args[]){  
//1st way  
Pattern p = Pattern.compile(".s");//. represents single character  
Matcher m = p.matcher("as");  
boolean b = m.matches();  
  
//2nd way  
boolean b2=Pattern.compile(".s").matcher("as").matches();  
  
//3rd way  
boolean b3 = Pattern.matches(".s", "as");  
  
System.out.println(b+" "+b2+" "+b3);  
}}  
```
Output
```
true true true
```
![image](https://github.com/user-attachments/assets/0feef58a-eb39-4c32-8153-707406bcaf94)
```
Regular Expression Character classes Example
import java.util.regex.*;  
class RegexExample3{  
public static void main(String args[]){  
System.out.println(Pattern.matches("[amn]", "abcd"));//false (not a or m or n)  
System.out.println(Pattern.matches("[amn]", "a"));//true (among a or m or n)  
System.out.println(Pattern.matches("[amn]", "ammmna"));//false (m and a comes more than once)  
}}
```
![image](https://github.com/user-attachments/assets/451a77e6-c041-4d1a-8740-afc96f9133fe)

Regular Expression Character classes and Quantifiers Example
```
import java.util.regex.*;  
class RegexExample4{  
public static void main(String args[]){  
System.out.println("? quantifier ....");  
System.out.println(Pattern.matches("[amn]?", "a"));//true (a or m or n comes one time)  
System.out.println(Pattern.matches("[amn]?", "aaa"));//false (a comes more than one time)  
System.out.println(Pattern.matches("[amn]?", "aammmnn"));//false (a m and n comes more than one time)  
System.out.println(Pattern.matches("[amn]?", "aazzta"));//false (a comes more than one time)  
System.out.println(Pattern.matches("[amn]?", "am"));//false (a or m or n must come one time)  
  
System.out.println("+ quantifier ....");  
System.out.println(Pattern.matches("[amn]+", "a"));//true (a or m or n once or more times)  
System.out.println(Pattern.matches("[amn]+", "aaa"));//true (a comes more than one time)  
System.out.println(Pattern.matches("[amn]+", "aammmnn"));//true (a or m or n comes more than once)  
System.out.println(Pattern.matches("[amn]+", "aazzta"));//false (z and t are not matching pattern)  
  
System.out.println("* quantifier ....");  
System.out.println(Pattern.matches("[amn]*", "ammmna"));//true (a or m or n may come zero or more times)  
  
}}  
```

# Wrapper classes in Java

The wrapper class in Java provides the mechanism to convert primitive into object and object into primitive.

Since J2SE 5.0, autoboxing and unboxing feature convert primitives into objects and objects into primitives automatically. The automatic conversion of primitive into an object is known as autoboxing and vice-versa unboxing.

## Advantages of Wrapper Classes

Java Wrapper classes offer several advantages over primitive data types. It includes encapsulation, type conversion, autoboxing and unboxing, and utility methods. Wrapper classes are also thread-safe and immutable, making them ideal for multi-threaded applications. Some advantages of wrapper class are:

Collections allowed only object data.

On object data we can call multiple methods compareTo(), equals(), toString()

Cloning process only objects

Object data allowed null values.

Serialization can allow only object data.

## Significance of Wrapper Class in Java
Encapsulation

Type Conversion

Utility Methods

Null Handling

## Use of Wrapper Classes in Java

Java is an object-oriented programming language, so we need to deal with objects many times like in Collections, Serialization, Synchronization, etc. Let us see the different scenarios, where we need to use the wrapper classes.

![image](https://github.com/user-attachments/assets/be732060-a281-4975-a247-f3ae65fd2a06)

## Autoboxing

The automatic conversion of primitive data type into its corresponding wrapper class is known as autoboxing, for example, byte to Byte, char to Character, int to Integer, long to Long, float to Float, boolean to Boolean, double to Double, and short to Short.

Since Java 5, we do not need to use the valueOf() method of wrapper classes to convert the primitive into objects.

## Wrapper Class Example: Primitive to Wrapper

```
//Java program to convert primitive into objects  
//Autoboxing example of int to Integer  
public class WrapperExample1{  
public static void main(String args[]){  
//Converting int into Integer  
int a=20;  
Integer i=Integer.valueOf(a);//converting int into Integer explicitly  
Integer j=a;//autoboxing, now compiler will write Integer.valueOf(a) internally  
  
System.out.println(a+" "+i+" "+j);  
}}

```

Output:
```
20 20 20
```

## Unboxing

The automatic conversion of wrapper type into its corresponding primitive type is known as unboxing. It is the reverse process of autoboxing. Since Java 5, we do not need to use the intValue() method of wrapper classes to convert the wrapper type into primitives.

Wrapper Class Example: Wrapper to Primitive

File Name: WrapperExample2.java
```
//Java program to convert object into primitives  
//Unboxing example of Integer to int  
public class WrapperExample2{    
public static void main(String args[]){    
//Converting Integer to int    
Integer a=new Integer(3);    
int i=a.intValue();//converting Integer to int explicitly  
int j=a;//unboxing, now compiler will write a.intValue() internally    
    
System.out.println(a+" "+i+" "+j);    
}}
```
Output:
```
3 3 3
```

## Java Wrapper Classes Example
```
//Java Program to convert all primitives into its corresponding   
//wrapper objects and vice-versa  
public class WrapperExample3{  
public static void main(String args[]){  
byte b=10;  
short s=20;  
int i=30;  
long l=40;  
float f=50.0F;  
double d=60.0D;  
char c='a';  
boolean b2=true;  
  
//Autoboxing: Converting primitives into objects  
Byte byteobj=b;  
Short shortobj=s;  
Integer intobj=i;  
Long longobj=l;  
Float floatobj=f;  
Double doubleobj=d;  
Character charobj=c;  
Boolean boolobj=b2;  
  
//Printing objects  
System.out.println("---Printing object values---");  
System.out.println("Byte object: "+byteobj);  
System.out.println("Short object: "+shortobj);  
System.out.println("Integer object: "+intobj);  
System.out.println("Long object: "+longobj);  
System.out.println("Float object: "+floatobj);  
System.out.println("Double object: "+doubleobj);  
System.out.println("Character object: "+charobj);  
System.out.println("Boolean object: "+boolobj);  
  
//Unboxing: Converting Objects to Primitives  
byte bytevalue=byteobj;  
short shortvalue=shortobj;  
int intvalue=intobj;  
long longvalue=longobj;  
float floatvalue=floatobj;  
double doublevalue=doubleobj;  
char charvalue=charobj;  
boolean boolvalue=boolobj;  
  
//Printing primitives  
System.out.println("---Printing primitive values---");  
System.out.println("byte value: "+bytevalue);  
System.out.println("short value: "+shortvalue);  
System.out.println("int value: "+intvalue);  
System.out.println("long value: "+longvalue);  
System.out.println("float value: "+floatvalue);  
System.out.println("double value: "+doublevalue);  
System.out.println("char value: "+charvalue);  
System.out.println("boolean value: "+boolvalue);  
}}
```
Output:
```
---Printing object values---
Byte object: 10
Short object: 20
Integer object: 30
Long object: 40
Float object: 50.0
Double object: 60.0
Character object: a
Boolean object: true
---Printing primitive values---
byte value: 10
short value: 20
int value: 30
long value: 40
float value: 50.0
double value: 60.0
char value: a
boolean value: true
```
## Considerations Java Wrapper Classes Vs. Primitive Types

Discuss considerations like memory usage, performance, and when to choose one over the other.

![image](https://github.com/user-attachments/assets/b0a2d43f-f409-49da-adb0-014e03cb5a16)


# Recursion in Java
Recursion in Java is a process in which a method calls itself continuously. A method that calls itself is called a recursive method. It is a powerful concept often used in algorithms and problem-solving.

It makes the code compact but complex to understand.

Syntax:
```
returntype methodname(){  
//code to be executed  
methodname();//calling same method  
}
```
## How Recursion Works?

### 1) Base Case:
The base case in recursion serves as the stopping condition. It's crucial because, without it, the recursive function would keep calling itself infinitely, resulting in a stack overflow error. The base case defines when the recursion should stop.

### 2) Recursive Case:
The recursive case is where the function calls itself with modified arguments, progressing towards the base case. This part of the function keeps reducing the problem size until it reaches the base case.

### Recursion Program in Java: Sum of First N Natural Numbers

Consider the simplest recursive function, calculating the sum of the first N natural numbers:
```
class SumExample {    
    // Recursive function to calculate the sum of first 'n' natural numbers    
    public static int sum(int n) {    
        // Base case: If n is 0, return 0 (base case)    
        if (n == 0)    
            return 0;    
        else    
            return n + sum(n - 1); // Recursive case: If n is not 0, recursively call the sum function with n-1 and add it to n   
    }    
}  
public class Main{  
 public static void main(String[] args) {    
    int num = 5; // Number of natural numbers to sum    
    // Calculate sum of first 'num' natural numbers using recursive sum function    
    int result = SumExample.sum(num);  
    // Print the result    
    System.out.println("Sum of first " + num + " natural numbers is: " + result);    
 }    
}
```
Output:
```
Sum of first 5 natural numbers is: 15
```
In this example, if (n == 0) is the base case. When n becomes 0, the recursion stops

## Recursion Program: Infinite Times
```
class RecursionExample {  
    // Recursive function p() which prints "hello" and calls itself indefinitely  
    static void p() {  
        System.out.println("hello"); // Print "hello"  
        p(); // Recursive call to itself  
    }  
}  
public class Main{  
    public static void main(String[] args) {  
        RecursionExample.p(); // Initial call to p() from the main method  
    }  
}  
```
Output:
```
hello
hello
...
java.lang.StackOverflowError
```
# Java String

In Java, string is basically an object that represents sequence of char values. An array of characters works same as Java string. For example:

```
char[] ch={'j','a','v','a','t','p','o','i','n','t'};  
String s=new String(ch);  
```

is same as:
```
String s="javatpoint";
```

Java String class provides a lot of methods to perform operations on strings such as compare(), concat(), equals(), split(), length(), replace(), compareTo(), intern(), substring() etc.

The java.lang.String class implements Serializable, Comparable and CharSequence interfaces.

![image](https://github.com/user-attachments/assets/71584264-6cec-4b51-ba94-6918d75dd394)

## CharSequence Interface

The CharSequence interface is used to represent the sequence of characters. String, StringBuffer and StringBuilder classes implement it. It means, we can create strings in Java by using these three classes.

![image](https://github.com/user-attachments/assets/2e3e7b2f-2e3c-4798-b3f4-1ed8cab080a0)

The Java String is immutable which means it cannot be changed. Whenever we change any string, a new instance is created. For mutable strings, you can use StringBuffer and StringBuilder classes.

We will discuss immutable string later. Let's first understand what String in Java is and how to create the String object.

## What is String in Java?

Generally, String is a sequence of characters. But in Java, string is an object that represents a sequence of characters. The java.lang.String class is used to create a string object.

### How to create a string object?
There are two ways to create String object:

By string literal
By new keyword

## 1) String Literal

Java String literal is created by using double quotes. For Example:
```
String s="welcome";  
```

Each time you create a string literal, the JVM checks the "string constant pool" first. If the string already exists in the pool, a reference to the pooled instance is returned. If the string doesn't exist in the pool, a new string instance is created and placed in the pool. For example:
```
String s1="Welcome";  
String s2="Welcome";//It doesn't create a new instance
```
![image](https://github.com/user-attachments/assets/c04afb31-a232-4802-b99d-9d4b42f1d4bf)

In the above example, only one object will be created. Firstly, JVM will not find any string object with the value "Welcome" in string constant pool that is why it will create a new object. After that it will find the string with the value "Welcome" in the pool, it will not create a new object but will return the reference to the same instance.

### Note: 
```
String objects are stored in a special memory area known as the "string constant pool".

```
### Why Java uses the concept of String literal?
To make Java more memory efficient (because no new objects are created if it exists already in the string constant pool).

### 2) By new keyword

String s=new String("Welcome");//creates two objects and one reference variable  
In such case, JVM will create a new string object in normal (non-pool) heap memory, and the literal "Welcome" will be placed in the string constant pool. The variable s will refer to the object in a heap (non-pool).

## Interfaces and Classes in Strings in Java

In Java, both String and CharBuffer interact with sequences of characters, but they are designed with different use cases and underlying mechanisms in mind. Here's an exploration of their interfaces, classes, and how they fit into the Java ecosystem.

## String
The String class is one of the most fundamental types in Java, designed to represent immutable sequences of characters. Here's a closer look at its characteristics and the interfaces it implements:

Immutability: Once instantiated, a String object cannot be modified. This immutable design is a deliberate choice to ensure thread safety, consistency, and efficiency, especially regarding the String pool mechanism.

String Pool: Java maintains a pool of string literals to help save memory. When a new string literal is created, Java checks the Pool for a matching string. If found, the new variable references the pooled string. If not, the new string is added to the Pool.

Implemented Interfaces: The String class implements several interfaces, including:

Serializable: Allows string objects to be serialized into byte streams, facilitating their transmission or storage.

Comparable<String>: Enables lexical comparison between two strings, supporting natural ordering within collections.

CharSequence: Provides a unified read-only interface for different kinds of char sequences, allowing String objects to be manipulated and accessed generically.

## CharSequence Interface

Java's CharSequence interface provides a unified, read-only view of character sequences and is a component of the java.lang package. It facilitates consistent access and manipulation across various types of character sequences, including String, StringBuilder, StringBuffer, and CharBuffer. Through this interface, key functionalities for handling character data are defined, enabling actions like measuring sequence length, accessing particular characters, generating character subsequences, and transforming into a String format. By providing a common blueprint for character sequences, `CharSequence` enables flexible and implementation-independent text processing across the Java platform.

String
StringBuffer
StringBuilder

## String
In Java, the String class encapsulates a series of characters. Once instantiated, a String object's content is fixed and cannot be modified, attributing to its immutable nature. This immutability ensures that String objects are safe for concurrent use across threads and are optimally performant in situations where the textual content remains constant. To enhance memory efficiency, Java employs a technique called string interning. This approach optimizes the storage and access of commonly utilized string literals.

### Direct assignment using string literals:

```
String str = "Hello, World!";
```
Using the String constructor:
```
String str = new String("Hello, World!");
```
Filename: StringExample.java
```
public class StringExample {  
    public static void main(String[] args) {  
        // Creating a String  
        String greeting = "Hello";  
        // Concatenating strings  
        String sentence = greeting + ", World!";  
        // Using a method from the String class  
        int length = sentence.length();  
        System.out.println(sentence); // Output: Hello, World!  
        System.out.println("Length: " + length); // Output: Length: 13  
    }
```

## StringBuffer
StringBuffer represents a mutable sequence of characters that ensures thread safety, making it suitable for scenarios involving multiple threads that modify a character sequence. It includes various string manipulation capabilities, including the ability to insert, delete, and append characters. This design avoids the necessity of generating new objects with each change, leading to enhanced efficiency in situations requiring regular adjustments to the string content.

Syntax
```
StringBuffer sb = new StringBuffer();
```

Filename: StringBufferExample.java
```
public class StringBufferExample {  
    public static void main(String[] args) {  
        // Creating a StringBuffer  
        StringBuffer sb = new StringBuffer("Hello");  
        // Appending to the StringBuffer  
        sb.append(", World!");  
        // Inserting into the StringBuffer  
        sb.insert(5, " Java");  
        // Deleting from the StringBuffer  
        sb.delete(5, 10);  
        System.out.println(sb); // Output: Hello, World!  
    }  
}
```
## StringBuilder:

StringBuilder shares similarities with StringBuffer by being a mutable character sequence. The crucial distinction lies in StringBuilder not being synchronized, rendering it not suitable for thread-safe operations. This absence of synchronization, though, contributes to StringBuilder offering superior performance in environments that are single-threaded or confined to a specific thread. As a result, StringBuilder becomes the favored option for manipulating strings in contexts where the safety of concurrent thread access is not an issue.

Syntax
```
StringBuilder sb = new StringBuilder();  
```
```
public class StringBuilderExample {  
    public static void main(String[] args) {  
        // Creating a StringBuilder  
        StringBuilder sb = new StringBuilder("Hello");  
        // Appending to the StringBuilder  
        sb.append(", World!");  
        // Inserting into the StringBuilder  
        sb.insert(5, " Java");  
        // Deleting from the StringBuilder  
        sb.delete(5, 10);  
        System.out.println(sb); // Output: Hello, World!  
    }  
```

## StringTokenizer

Java's StringTokenizer class, housed within the java.util package, simplifies the process of segmenting a string into multiple tokens, utilizing designated separators. This class is exceptionally beneficial for parsing strings and navigating through their tokens, especially in scenarios involving user inputs, file contents, or network transmissions formatted with straightforward separators such as commas, spaces, or tabs. It offers an efficient means to dissect and examine the tokenized segments of a string, catering to situations that demand basic parsing capabilities.

The StringTokenizer class implements the Enumeration<Object> interface, allowing the tokens of the string to be iterated like other enumeration types in Java. It offers a straightforward approach to tokenization, avoiding the need for more complex regular expressions, making it suitable for simple parsing needs.

Syntax:
```
public StringJoiner(CharSequence delimiter)  
```
Filename: StringTokenizer.java
```
import java.util.StringJoiner;  
public class StringTokenizer {  
    public static void main(String[] args) {  
        // Creating a StringJoiner with a comma (,) as the delimiter  
        StringJoiner joiner = new StringJoiner(", ");  
        // Adding strings to the StringJoiner  
        joiner.add("Apple");  
        joiner.add("Banana");  
        joiner.add("Cherry");  
        // Converting the StringJoiner to a String  
        String result = joiner.toString();  
        // Output the result  
        System.out.println(result);  // Output: Apple, Banana, Cherry  
    }  
}  
```

## Immutable String in Java
In Java, strings are immutable. It means that its value cannot be changed once a String object is created. If any operation appears to modify a String, what happens is the creation of a new String object. The original string remains unchanged. This immutable characteristic of strings in Java has several implications for performance, security, and functionality.

Filename: ImmutableStringExample.java

```
public class ImmutableStringExample {  
    public static void main(String[] args) {  
        // Original string  
        String originalString = "Java";  
        System.out.println("Original string: " + originalString);  
        // Attempt to modify the original string  
        String modifiedString = originalString.concat(" Programming");  
        // Showing that the original string remains unchanged  
        System.out.println("After modification, original string: " + originalString);  
        // The result of the modification attempt is stored in a new string  
        System.out.println("Modified string: " + modifiedString);  
        // Demonstrating further that the original string is immutable  
        originalString.toUpperCase(); // This operation does not change the original string  
        System.out.println("After calling toUpperCase on original string: " + originalString);  
        // Correct way to use the result of a string operation  
        String upperCaseString = originalString.toUpperCase(); // Stores the result in a new string  
        System.out.println("Original string in uppercase: " + upperCaseString);  
    }  
}
```

Output:

```
Original string: Java
After modification, original string: Java
Modified string: Java Programming
After calling toUpperCase on original string: Java
Original string in uppercase: JAVA
```

### Memory Allotment of String

Memory allotment for strings in Java is interesting due to Java's handling of string immutability and the string pool mechanism. Understanding how strings are stored can help optimize memory usage in Java applications, especially those that heavily use string manipulations.

String Literal Storage: When you create a string using string literals, Java checks the string pool first. The new variable points to the existing string if it already exists. If it doesn't exist, the new string is added to the Pool, and the variable points to this new string.

Syntax:
```
String s1 = "Hello"; // String literal  
String s2 = "Hello"; // Points to the same "Hello" in the Pool as s1  
```

new Keyword and String Pool: Strings created with the new operator do not use the Pool by default. They are stored in the heap memory outside the Pool, which means each new operation results in a new object, even if it contains the same string data.

Syntax:
```
String s3 = new String("Hello"); // A new string object is created in the heap
```
Interning: We can manually add a string to the Pool or ensure it uses the Pool by calling the intern() method on a string object. If the Pool already contains an equal string, the string from the Pool is returned. Otherwise, the string is added to the Pool.

Syntax:
```
String s4 = new String("Hello").intern(); // Ensures use of the string pool  
```
Filename: StringMemoryAllotment.java

```
public class StringMemoryAllotment {  
    public static void main(String[] args) {  
        // String literals - stored in the string pool  
        String str1 = "Java";  
        String str2 = "Java";  
        // Checking if str1 and str2 point to the same object  
        System.out.println("str1 == str2: " + (str1 == str2)); // true, because both refer to the same string literal in the pool  
        // Strings created with 'new' - stored in heap memory outside the string pool  
        String str3 = new String("Java");  
        String str4 = new String("Java");  
        // Checking if str3 and str4 point to the same object  
        System.out.println("str3 == str4: " + (str3 == str4)); // false, because 'new' creates a new object each time  
        // Interning str3  
        String str5 = str3.intern();  
        // Checking if str1 and str5 point to the same object  
        System.out.println("str1 == str5: " + (str1 == str5)); // true, str5 is interned, so it refers to the string in the pool  
        // Demonstrating the effect of interning on memory allocation  
        String str6 = new String("Java").intern();  
        // Checking if str6 is the same as str1  
        System.out.println("str1 == str6: " + (str1 == str6)); // true, str6 is interned and points to the pooled instance  
    }
```
Output
```
str1 == str2: true
str3 == str4: false
str1 == str5: true
str1 == str6: true
```
# Immutable String in Java

A String is an unavoidable type of variable while writing any application program. String references are used to store various attributes like username, password, etc. In Java, String objects are immutable. Immutable simply means unmodifiable or unchangeable.

Once String object is created its data or state can't be changed but a new String object is created.

Let's try to understand the concept of immutability by the example given below:

Testimmutablestring.java

```
class Testimmutablestring{  
 public static void main(String args[]){  
   String s="Sachin";  
   s.concat(" Tendulkar");//concat() method appends the string at the end  
   System.out.println(s);//will print Sachin because strings are immutable objects  
 }  
}
```
Now it can be understood by the diagram given below. Here Sachin is not changed but a new object is created with Sachin Tendulkar. That is why String is known as immutable.

![image](https://github.com/user-attachments/assets/286c1a2c-ffbb-40f7-b0c6-1bb4b130277a)

As you can see in the above figure that two objects are created but s reference variable still refers to "Sachin" not to "Sachin Tendulkar".

But if we explicitly assign it to the reference variable, it will refer to "Sachin Tendulkar" object.

Testimmutablestring1.java

```
class Testimmutablestring1{  
 public static void main(String args[]){  
   String s="Sachin";  
   s=s.concat(" Tendulkar");  
   System.out.println(s);  
 }  
}
```
Output:
```
Sachin Tendulkar
```
In such a case, s points to the "Sachin Tendulkar". Please notice that still Sachin object is not modified.

### Why String objects are immutable in Java?
As Java uses the concept of String literal. Suppose there are 5 reference variables, all refer to one object "Sachin". If one reference variable changes the value of the object, it will be affected by all the reference variables. That is why String objects are immutable in Java.

Following are some features of String which makes String objects immutable.

1. ClassLoader:

A ClassLoader in Java uses a String object as an argument. Consider, if the String object is modifiable, the value might be changed and the class that is supposed to be loaded might be different.

To avoid this kind of misinterpretation, String is immutable.

2. Thread Safe:

As the String object is immutable we don't have to take care of the synchronization that is required while sharing an object across multiple threads.

3. Security:

As we have seen in class loading, immutable String objects avoid further errors by loading the correct class. This leads to making the application program more secure. Consider an example of banking software. The username and password cannot be modified by any intruder because String objects are immutable. This can make the application program more secure.

4. Heap Space:

The immutability of String helps to minimize the usage in the heap memory. When we try to declare a new String object, the JVM checks whether the value already exists in the String pool or not. If it exists, the same value is assigned to the new object. This feature allows Java to use the heap space efficiently.

### Why String class is Final in Java?
The reason behind the String class being final is because no one can override the methods of the String class. So that it can provide the same features to the new String objects as well as to the old ones.

# Java String compare

String comparison is a key component of Java programming and is used extensively in reference matching, sorting, and authentication. In this section, we will discuss various ways to compare string in Java.

We can compare String in Java on the basis of content and reference.

![image](https://github.com/user-attachments/assets/09b81c40-96ec-41c9-a1c1-3a10b4eb3344)

String comparision used in authentication (by the equals() method), sorting (by the compareTo() method), reference matching (by the == operator), etc.

There are three ways to compare String in Java:


By Using equals() Method

By Using == Operator

By compareTo() Method

Using startsWith() and endsWith() Method

## 1) By Using equals() Method

The String class equals() method compares the original content of the string. It compares values of string for equality. String class provides the following two methods: Additionally, the equalsIgnoreCase() method performs a case-insensitive comparison.

String class provides the following two methods:

public boolean equals(Object another) compares this string to the specified object.

public boolean equalsIgnoreCase(String another) compares this string to another string, ignoring case.

![image](https://github.com/user-attachments/assets/152e1299-502b-4de3-8a55-99fb7f7e48f1)

StringComparisonUsingEqualsMethod.java

```
class StringComparisonUsingEqualsMethod{  
 public static void main(String args[]){  
   String s1="Sachin";  
   String s2="Sachin";  
   String s3=new String("Sachin");  
   String s4="Saurav";  
   System.out.println(s1.equals(s2));//true  
   System.out.println(s1.equals(s3));//true  
   System.out.println(s1.equals(s4));//false  
 }  
}
```
S1 and S2 relate to the same string pool object since they are string literals. As a result, s1.equals(s2) gives true. Despite S3 being developed with the new keyword, S1 and S3 had the same content. Since only the content is compared using the equals() method, s1.equals(s3) is true; however, s1.equals(s4) is false because the contents of s1 and s4 differ.

In the above program, the methods of String class are used. The equals() method returns true if String objects are matching and both strings are of same case. equalsIgnoreCase() returns true regardless of cases of strings.

StringComparisonUsingequalsIgnoreCase.java

```
class  StringComparisonUsingequalsIgnoreCase {  
    public static void main(String[] args) {  
        String s1 = "Ram";  
        String s2 = "rAm";  
        // Using equals() method for case-sensitive comparison  
        boolean equalsResult = s1.equals(s2);  
        System.out.println("Using equals() method: " + equalsResult); // Output: false  
        // Using equalsIgnoreCase() method for case-insensitive comparison  
        boolean equalsIgnoreCaseResult = s1.equalsIgnoreCase(s2);  
        System.out.println("Using equalsIgnoreCase() method: " + equalsIgnoreCaseResult); // Output: true  
    }  
}
```

## 2) By Using == Operator

In Java, the == operator compares references rather than values.

![image](https://github.com/user-attachments/assets/03172cae-4d18-456f-9698-db5d122ae814)

StringCompare.java
```
class StringCompare {  
    public static void main(String[] args) {  
        String s1 = "Kohli";  
        String s2 = "Kohli";  
        String s3 = new String("Kohli");  
        System.out.println(s1 == s2);              // true   
        System.out.println(s1 == s3);              // false  
    }  
}

```

## 3) String compare by compareTo() Method

The String class compareTo() method compares values lexicographically and returns an integer value that describes if first string is less than, equal to or greater than second string.

Suppose s1 and s2 are two String objects. If:

s1 == s2 : The method returns 0.
s1 > s2 : The method returns a positive value.
s1 < s2 : The method returns a negative value.

StringComparisonUsingComapreto.java

```
class StringComparisonUsingComapreto {  
    public static void main(String[] args) {  
       String str1 = "Sachin";  
        String str2 = "Sachin";  
        String str3 = "Ratan";  
        System.out.println(str1.compareTo(str2));      // 0  
        System.out.println(str1.compareTo(str3));      // 1 (str1 > str3)  
        System.out.println(str3.compareTo(str1));      // -1 (str3 < str1)  
    }  
}
```
Explanation

The content of str1 and str2 is the same-"Sachin," while str3 has the word "Ratan."

## 4) Using startsWith() and endsWith() Methods

If a string starts with a prefix and ends with a suffix, respectively, it may be determined using the methods startsWith() and endsWith().

```
class StringCompare {  
    public static void main(String[] args) {  
        String str = "String Compare";  
        System.out.println(str.startsWith("String")); // true  
        System.out.println(str.endsWith("Compare"));  // true  
    }  
}  
```
Explanation

startsWith("Hello") returns true if the string begins with the given prefix.

endsWith("World!") returns true if the string does, in fact, conclude with the designated suffix.

## String Concatenation in Java

In Java programming, String concatenation is a fundamental operation in Java. It is essential for manipulating and combining text data. Java provides multiple ways to concatenate strings, each with its advantages and use cases. In this section, we will discuss the various methods of string concatenation in Java.

Using "+" (String concatenation) Operator

Using String.concat() Method

Using the StringBuilder or StringBuffer Class

Using String.join() Method

Using Java String.format() Method

Using Collector.joining() Method

### 1. Using the + Operator

The simplest and most commonly used method for concatenating strings in Java is using the + operator. We can concatenate two or more strings by simply using the + operator between them. For Example:

TestStringConcatenation1.java

```
class TestStringConcatenation1{  
 public static void main(String args[]){  
   String s="Sachin"+" Tendulkar";  
   System.out.println(s);//Sachin Tendulkar  
 }  
}  
```

The Java compiler internally manipulate the string by using the following statement.
```
String s=(new StringBuilder()).append("Sachin").append(" Tendulkar).toString();
```

In Java, String concatenation is implemented through the StringBuilder (or StringBuffer) class and it's append method. String concatenation operator produces a new String by appending the second operand onto the end of the first operand. The String concatenation operator can concatenate not only String but primitive values also. Let's understand it through a Java program.

TestStringConcatenation2.java
```
class TestStringConcatenation2{  
 public static void main(String args[]){  
   String s=50+30+"Sachin"+40+40;  
   System.out.println(s);//80Sachin4040  
 }  
}
```
### Note: 
```
After a string literal, all the + will be treated as string concatenation operator.
```

## 2. Using the String.concat() Method

The concat() method belongs to the Java String class. It is an alternative to the + operator for string concatenation. It appends one string to the end of another.

Synatx:
```
public String concat(String another)
```
Let's see the example of String.concat() method.

TestStringConcatenation3.java
```
class TestStringConcatenation3{  
 public static void main(String args[]){  
   String s1="Sachin ";  
   String s2="Tendulkar";  
   String s3=s1.concat(s2);  
   System.out.println(s3);//Sachin Tendulkar  
  }  
}
```
The above Java program, concatenates two String objects s1 and s2 using concat() method and stores the result into s3 object.

## 3. Using Java StringBuilder or StringBuffer Class
   
To address the performance concerns associated with the + operator and concat() method, Java provides two classes, StringBuilder and StringBuffer, that are specifically designed for efficient string manipulation.

StringBuilder is class provides append() method to perform concatenation operation. The append() method accepts arguments of different types like Objects, StringBuilder, int, char, CharSequence, boolean, float, double. StringBuilder is the most popular and fastet way to concatenate strings in Java. It is mutable class which means values stored in StringBuilder objects can be updated or changed.

StringBuilderExample.java

```
public class StringBuilderExample {  
    public static void main(String[] args) {  
        String firstName = "Manoj";  
        String lastName = "Mamilla";  
        // Using StringBuilder for efficient string concatenation  
        StringBuilder stringBuilder = new StringBuilder();  
        stringBuilder.append("Hello, ");  
        stringBuilder.append(firstName);  
        stringBuilder.append(" ");  
        stringBuilder.append(lastName);  
        String result = stringBuilder.toString();  
        System.out.println(result);    
    }  
}
```
Output:
```
Hello, Manoj Mamilla
```
Both the classes StringBuilder and StringBuffer are mutable. It means that they can be modified without creating new instances for each operation. It makes them more efficient than the + operator or concat() method, especially in scenarios involving repeated concatenation in loops.

## 4. Using String.join() Method
   
Java 8 introduced the String.join() method, which is a concise and expressive way to concatenate multiple strings with a delimiter:

StringJoinExample.java
```
public class StringJoinExample {  
    public static void main(String[] args) {  
        String firstName = "Manoj";  
        String lastName = "Mamilla";  
        // Using String.join for concatenation with a delimiter  
        String result = String.join(" ", "Hello,", firstName, lastName);  
        System.out.println(result);    
    }  
}
```
Output:
```
Hello, Manoj Mamilla
```
## 4. Using String.join() Method
Java 8 introduced the String.join() method, which is a concise and expressive way to concatenate multiple strings with a delimiter:

StringJoinExample.java
```
public class StringJoinExample {  
    public static void main(String[] args) {  
        String firstName = "Manoj";  
        String lastName = "Mamilla";  
        // Using String.join for concatenation with a delimiter  
        String result = String.join(" ", "Hello,", firstName, lastName);  
        System.out.println(result);    
    }  
}
 ```
Output:
```
Hello, Manoj Mamilla
```
## 5. Using the String.format() Method

The String.format() method provides another way to concatenate strings in Java while allowing for more control over the formatting. Here is an example using the format() method.

StringFormatExample.java
```
public class StringFormatExample {  
    public static void main(String[] args) {  
        String firstName = "Manoj";  
        String lastName = "Mamilla";  
        // Using String.format for string concatenation with formatting  
        String result = String.format("Hello, %s %s", firstName, lastName);  
        System.out.println(result);    
    }  
}   
```
Output:
```
Hello, Manoj Mamilla
```

Here, the String objects result is assigned the concatenated result of Strings firstName and lastName using the String.format() method. The format() accepts parameters as format specifier followed by String objects or values.

## 6. Using Collectors.joining() Method (Java 8 and above versions)
The Collectors class in Java 8 offers joining() method that concatenates the input elements in a similar order as they occur.

ColJoining.java
```
import java.util.*;  
import java.util.stream.Collectors;  
public class ColJoining  
{  
    /* Driver Code */  
    public static void main(String args[])  
    {  
        List<String> liststr = Arrays.asList("abc", "pqr", "xyz"); //List of String array  
    String str = liststr.stream().collect(Collectors.joining(", ")); //performs joining operation  
        System.out.println(str.toString());  //Displays result  
    }  
} 
```
Output:
```
abc, pqr, xyz
```

Conclusion
String concatenation is a common operation in Java, and choosing the right method depends on the specific requirements and performance considerations. While the + operator and concat() method are simple and convenient, they may not be the most efficient for large-scale operations.

In such cases, using StringBuilder or StringBuffer is recommended for better performance. Additionally, the String.join() method provides a clean and concise way to concatenate strings with a specified delimiter. Understanding the strengths and weaknesses of each method enables Java developers to make informed decisions based on the context of their applications.

# Substring in Java
A part of String is called substring. In other words, substring is a subset of another String. Java String class provides the built-in substring() method that extract a substring from the given string by using the index values passed as an argument. In case of substring() method startIndex is inclusive and endIndex is exclusive.

Suppose the string is "computer", then the substring will be com, compu, ter, etc.

Note: Index starts from 0.
You can get substring from the given String object by one of the two methods:

public String substring(int startIndex):
This method returns new String object containing the substring of the given string from specified startIndex (inclusive). The method throws an IndexOutOfBoundException when the startIndex is larger than the length of String or less than zero.

public String substring(int startIndex, int endIndex):
This method returns new String object containing the substring of the given string from specified startIndex to endIndex. The method throws an IndexOutOfBoundException when the startIndex is less than zero or startIndex is greater than endIndex or endIndex is greater than length of String.

```
String s="hello";    
System.out.println(s.substring(0,2)); //returns he  as a substring
```

In the above substring, 0 points the first letter and 2 points the second letter i.e., e (because end index is exclusive).

Example of Java substring() method
TestSubstring.java
```
public class TestSubstring{    
 public static void main(String args[]){    
 String s="SachinTendulkar";    
 System.out.println("Original String: " + s);  
 System.out.println("Substring starting from index 6: " +s.substring(6));//Tendulkar    
 System.out.println("Substring starting from index 0 to 6: "+s.substring(0,6)); //Sachin  
 }  
}    
```
Output:
```
Original String: SachinTendulkar
Substring starting from index 6: Tendulkar
Substring starting from index 0 to 6: Sachin
```
The above Java programs, demonstrates variants of the substring() method of String class. The startindex is inclusive and endindex is exclusive.

### Using String.split() method:

The split() method of String class can be used to extract a substring from a sentence. It accepts arguments in the form of a regular expression.

TestSubstring2.java
```
import java.util.*;  
  
public class TestSubstring2  
{    
    /* Driver Code */  
    public static void main(String args[])  
    {    
        String text= new String("Hello, My name is Sachin");  
        /* Splits the sentence by the delimeter passed as an argument */  
        String[] sentences = text.split("\\.");  
        System.out.println(Arrays.toString(sentences));  
    }  
}    
```
Output:
```
[Hello, My name is Sachin]
```
In the above program, we have used the split() method. It accepts an argument \\. that checks a in the sentence and splits the string into another string. It is stored in an array of String objects sentences.

# Java String Methods

The java.lang.String class provides a lot of built-in methods that are used to manipulate string in Java. By the help of these methods, we can perform operations on String objects such as trimming, concatenating, converting, comparing, replacing strings etc.

Java String is a powerful concept because everything is treated as a String if you submit any form in window based, web based or mobile application.

## Java String Class Methods
The java.lang.String class provides many useful methods to perform operations on sequence of char values.

### Java String toUpperCase() and toLowerCase() method

The Java String toUpperCase() method converts this String into uppercase letter and String toLowerCase() method into lowercase letter.

Stringoperation1.java
```
public class Stringoperation1  
{  
public static void main(String ar[])  
{  
String s="Sachin";    
System.out.println(s.toUpperCase());//SACHIN    
System.out.println(s.toLowerCase());//sachin    
System.out.println(s);//Sachin(no change in original)    
}  
}  
```

Output:
```
SACHIN
sachin
Sachin
```
## Java String trim() method
The String class trim() method eliminates white spaces before and after the String.

Stringoperation2.java
```
public class Stringoperation2  
{  
public static void main(String ar[])  
{  
String s="  Sachin  ";    
System.out.println(s);//  Sachin      
System.out.println(s.trim());//Sachin    
}  
}
```
Output:
```
Sachin
Sachin
```
## Java String startsWith() and endsWith() method

The method startsWith() checks whether the String starts with the letters passed as arguments and endsWith() method checks whether the String ends with the letters passed as arguments.

Stringoperation3.java
```
public class Stringoperation3  
{  
public static void main(String ar[])  
{  
String s="Sachin";    
 System.out.println(s.startsWith("Sa"));//true    
 System.out.println(s.endsWith("n"));//true    
}  
}
```
## Java String charAt() Method
The String class charAt() method returns a character at specified index.

Stringoperation4.java
```
public class Stringoperation4  
{  
public static void main(String ar[])  
{  
String s="Sachin";    
System.out.println(s.charAt(0));//S    
System.out.println(s.charAt(3));//h    
}  
}
```
## Java String length() Method
The String class length() method returns length of the specified String.

Stringoperation5.java
```
public class Stringoperation5  
{  
public static void main(String ar[])  
{  
String s="Sachin";    
System.out.println(s.length());//6    
}  
}
```
## Java String intern() Method
A pool of strings, initially empty, is maintained privately by the class String.

When the intern method is invoked, if the pool already contains a String equal to this String object as determined by the equals(Object) method, then the String from the pool is returned. Otherwise, this String object is added to the pool and a reference to this String object is returned.
Stringoperation6.java
```
public class Stringoperation6  
{  
public static void main(String ar[])  
{  
String s=new String("Sachin");    
String s2=s.intern();    
System.out.println(s2);//Sachin    
}  
}  
```
Java String valueOf() Method
The String class valueOf() method coverts given type such as int, long, float, double, boolean, char and char array into String.

Stringoperation7.java
```
public class Stringoperation7  
{  
public static void main(String ar[])  
{  
int a=10;    
String s=String.valueOf(a);    
System.out.println(s+10);    
}  
}
``` 
Output:
```
1010
```
## Java String replace() Method
The String class replace() method replaces all occurrence of first sequence of character with second sequence of character.

Stringoperation8.java
```
public class Stringoperation8  
{  
public static void main(String ar[])  
{  
String s1="Java is a programming language. Java is a platform. Java is an Island.";      
String replaceString=s1.replace("Java","Kava");//replaces all occurrences of "Java" to "Kava"      
System.out.println(replaceString);    
}  
}
``` 
Output:
```
Kava is a programming language. Kava is a platform. Kava is an Island.
```
# Java StringBuffer Class
Java StringBuffer class is used to create mutable (modifiable) String objects. The StringBuffer class in Java is the same as String class except it is mutable i.e. it can be changed.

### Note:
```
Java StringBuffer class is thread-safe i.e. multiple threads cannot access it simultaneously. So it is safe and will result in an order.

```
## What is a mutable String?
A String that can be modified or changed is known as mutable String. StringBuffer and StringBuilder classes are used for creating mutable strings.

1) StringBuffer Class append() Method
The append() method concatenates the given argument with this String.

StringBufferExample.java
```
class StringBufferExample{  
public static void main(String args[]){  
StringBuffer sb=new StringBuffer("Hello ");  
sb.append("Java");//now original string is changed  
System.out.println(sb);//prints Hello Java  
}  
}
```

2) StringBuffer insert() Method
The insert() method inserts the given String with this string at the given position.

StringBufferExample2.java
```
class StringBufferExample2{  
public static void main(String args[]){  
StringBuffer sb=new StringBuffer("Hello ");  
sb.insert(1,"Java");//now original string is changed  
System.out.println(sb);//prints HJavaello  
}  
}

```

## 3) StringBuffer replace() Method
   
The replace() method replaces the given String from the specified beginIndex and endIndex.

StringBufferExample3.java
```
class StringBufferExample3{  
public static void main(String args[]){  
StringBuffer sb=new StringBuffer("Hello");  
sb.replace(1,3,"Java");  
System.out.println(sb);//prints HJavalo  
}  
}  
```
## 4) StringBuffer delete() Method
The delete() method of the StringBuffer class deletes the String from the specified beginIndex to endIndex.

StringBufferExample4.java
```
class StringBufferExample4{  
public static void main(String args[]){  
StringBuffer sb=new StringBuffer("Hello");  
sb.delete(1,3);  
System.out.println(sb);//prints Hlo  
}  
}
```
## 5) StringBuffer reverse() Method
The reverse() method of the StringBuilder class reverses the current String.

StringBufferExample5.java
```
class StringBufferExample5{  
public static void main(String args[]){  
StringBuffer sb=new StringBuffer("Hello");  
sb.reverse();  
System.out.println(sb);//prints olleH  
}  
}
```

# Java StringBuilder Class

Java StringBuilder class is used to create mutable (modifiable) String. The Java StringBuilder class is same as StringBuffer class except that it is non-synchronized. It is available since JDK 1.5.

```
class StringBuilderExample{  
public static void main(String args[]){  
StringBuilder sb=new StringBuilder("Hello ");  
sb.append("Java");//now original string is changed  
System.out.println(sb);//prints Hello Java  
}  
}
```
![image](https://github.com/user-attachments/assets/103134d9-9fca-49c7-ad5b-8cd00405d78a)

![image](https://github.com/user-attachments/assets/c0a3a6df-ed20-4c34-9284-6f0ad6307888)

Performance Test of String and StringBuffer
ConcatTest.java

```

public class ConcatTest{  
    public static String concatWithString()    {  
        String t = "Java";  
        for (int i=0; i<10000; i++){  
            t = t + "Tpoint";  
        }  
        return t;  
    }  
    public static String concatWithStringBuffer(){  
        StringBuffer sb = new StringBuffer("Java");  
        for (int i=0; i<10000; i++){  
            sb.append("Tpoint");  
        }  
        return sb.toString();  
    }  
    public static void main(String[] args){  
        long startTime = System.currentTimeMillis();  
        concatWithString();  
        System.out.println("Time taken by Concating with String: "+(System.currentTimeMillis()-startTime)+"ms");  
        startTime = System.currentTimeMillis();  
        concatWithStringBuffer();  
        System.out.println("Time taken by Concating with  StringBuffer: "+(System.currentTimeMillis()-startTime)+"ms");  
    }  
}
```
Output:

```
Time taken by Concating with String: 578ms
Time taken by Concating with StringBuffer: 0ms
```
String and StringBuffer HashCode Test
As we can see in the program given below, String returns new hashcode while performing concatenation but the StringBuffer class returns same hashcode.

InstanceTest.java
```
public class InstanceTest{  
    public static void main(String args[]){  
        System.out.println("Hashcode test of String:");  
        String str="java";  
        System.out.println(str.hashCode());  
        str=str+"tpoint";  
        System.out.println(str.hashCode());  
   
        System.out.println("Hashcode test of StringBuffer:");  
        StringBuffer sb=new StringBuffer("java");  
        System.out.println(sb.hashCode());  
        sb.append("tpoint");  
        System.out.println(sb.hashCode());  
    }  
}
``` 
Output:
```
Hashcode test of String:
3254818
229541438
Hashcode test of StringBuffer:
118352462
118352462
```

## Difference between StringBuffer and StringBuilder

Java provides three classes to represent a sequence of characters: String, StringBuffer, and StringBuilder. The String class is an immutable class whereas StringBuffer and StringBuilder classes are mutable. There are many differences between StringBuffer and StringBuilder. The StringBuilder class is introduced since JDK 1.5.

A list of differences between StringBuffer and StringBuilder is given below

![image](https://github.com/user-attachments/assets/6256239f-240f-414d-be83-17a13ad45082)


![image](https://github.com/user-attachments/assets/759f8362-618e-43fd-a4de-fb81ebf5a0b0)

### How to create Immutable class?
There are many immutable classes like String, Boolean, Byte, Short, Integer, Long, Float, Double etc. In short, all the wrapper classes and String class is immutable. We can also create immutable class by creating final class that have final data members as the example given below:

Example to create Immutable class
In this example, we have created a final class named Employee. It have one final datamember, a parameterized constructor and getter method.

ImmutableDemo.java

```
public final class Employee  
{    
final String pancardNumber;    
public Employee(String pancardNumber)  
{    
this.pancardNumber=pancardNumber;    
}  
public String getPancardNumber(){    
return pancardNumber;    
}    
}    
public class ImmutableDemo  
{  
public static void main(String ar[])  
{  
Employee e = new Employee("ABC123");  
String s1 = e.getPancardNumber();  
System.out.println("Pancard Number: " + s1);  
}  
}
```
Pancard Number: ABC123

The above class is immutable because:

The instance variable of the class is final i.e. we cannot change the value of it after creating an object.

The class is final so we cannot create the subclass.

There is no setter methods i.e. we have no option to change the value of the instance variable

# Multithreading in Java

Multithreading in Java is a process of executing multiple threads simultaneously.

A thread is a lightweight sub-process, the smallest unit of processing. Multiprocessing and multithreading, both are used to achieve multitasking.

However, we use multithreading than multiprocessing because threads use a shared memory area. They don't allocate separate memory area so saves memory, and context-switching between the threads takes less time than process.

Java Multithreading is mostly used in games, animation, etc.

Advantages of Java Multithreading
1) It doesn't block the user because threads are independent and you can perform multiple operations at the same time.

2) You can perform many operations together, so it saves time.

3) Threads are independent, so it doesn't affect other threads if an exception occurs in a single thread.

4) Multithreading can significantly enhance the performance of applications by making better use of multiple CPU cores. Each thread can run on a separate core, allowing for parallel processing and faster execution of tasks.

5) In applications with a graphical user interface (GUI), multithreading can help keep the interface responsive. Long-running tasks can be handled in the background by separate threads, preventing the main thread from freezing and improving user experience.

6) Threads within the same process share the same memory and resources, which makes it easier to share data between them without the need for complex inter-process communication mechanisms.

7) Using multiple threads can simplify the design of complex applications, allowing for more modular and manageable code. For example, separate threads can be dedicated to different tasks, such as network communication, file I/O, and computation.

8) Multithreading allows an application to continue processing while waiting for I/O operations to complete. This leads to better utilization of CPU resources as threads can perform useful work during I/O waits.

## Multitasking
Multitasking is a process of executing multiple tasks simultaneously. We use multitasking to utilize the CPU. Multitasking can be achieved in two ways:

Process-based Multitasking (Multiprocessing)

Thread-based Multitasking (Multithreading)

## 1) Process-based Multitasking (Multiprocessing)

Each process has an address in memory. In other words, each process allocates a separate memory area.

A process is heavyweight.

Cost of communication between the process is high.

Switching from one process to another requires some time for saving and loading registers, memory maps, updating lists, etc.

## 2) Thread-based Multitasking (Multithreading)

Threads share the same address space.

A thread is lightweight.

Cost of communication between the thread is low.

Note: At least one process is required for each thread.

### What is Thread in Java?

A thread is a lightweight subprocess, the smallest unit of processing. It is a separate path of execution.

Threads are independent. If there occurs exception in one thread, it doesn't affect other threads. It uses a shared memory area.


![image](https://github.com/user-attachments/assets/315b8673-bef0-42e4-bf15-e6be404c9722)

As shown in the above figure, a thread is executed inside the process. There is context-switching between the threads. There can be multiple processes inside the OS, and one process can have multiple threads.

Note: At a time one thread is executed only.

## Java Thread class

Java provides Thread class to achieve thread programming. Thread class provides constructors and methods to create and perform operations on a thread. Thread class extends Object class and implements Runnable interface.

### Thread States:

New: A thread that has been created but not yet started.

Runnable: A thread that is ready to run and waiting for CPU time.

Blocked: A thread that is blocked waiting for a monitor lock.

Waiting: A thread that is waiting indefinitely for another thread to perform a particular action.

Timed Waiting: A thread that is waiting for another thread to perform an action for up to a specified waiting time.

Terminated: A thread that has completed its task.

## MultiThreadingExample.java
```
class MyThread extends Thread {  
    private String threadName;  
    MyThread(String name) {  
        threadName = name;  
    }  
    // Override the run method to define the task for the thread  
    public void run() {  
        for (int i = 1; i <= 5; i++) {  
            System.out.println(threadName + " - Count: " + i);  
            try {  
                // Sleep for a while to simulate some work  
                Thread.sleep(1000);  
            } catch (InterruptedException e) {  
                System.out.println(threadName + " interrupted.");  
            }  
        }  
        System.out.println(threadName + " finished.");  
    }  
}  
public class MultiThreadingExample {  
    public static void main(String[] args) {  
        // Create instances of MyThread  
        MyThread thread1 = new MyThread("Thread 1");  
        MyThread thread2 = new MyThread("Thread 2");  
        MyThread thread3 = new MyThread("Thread 3");  
        // Start the threads  
        thread1.start();  
        thread2.start();  
        thread3.start();  
        // Wait for all threads to finish  
        try {  
            thread1.join();  
            thread2.join();  
            thread3.join();  
        } catch (InterruptedException e) {  
            System.out.println("Main thread interrupted.");  
        }  
        System.out.println("All threads have finished.");  
    }  
}
````
Output:
```
Thread 3 - Count: 1
Thread 1 - Count: 1
Thread 2 - Count: 1
Thread 3 - Count: 2
Thread 2 - Count: 2
Thread 1 - Count: 2
Thread 3 - Count: 3
Thread 2 - Count: 3
Thread 1 - Count: 3
Thread 3 - Count: 4
Thread 1 - Count: 4
Thread 2 - Count: 4
Thread 3 - Count: 5
Thread 2 - Count: 5
Thread 1 - Count: 5
Thread 1 finished.
Thread 3 finished.
Thread 2 finished.
All threads have finished.
```
Explanation

By extending the Thread class and overriding its run method to print a message five times with a one-second delay in between, this Java programme illustrates multithreading.

Three instances of MyThread are generated and launched using the start function in the main class, MultiThreadingExample, enabling them to operate concurrently. In order to guarantee that the main thread waits for every thread to finish before issuing a final message stating that every thread has finished, the join() method is employed.

# Life cycle of a Thread (Thread States)
In Java, a thread always exists in any one of the following states. These states are:

New
Active
Blocked / Waiting
Timed Waiting
Terminated

## Explanation of Different Thread States
New: Whenever a new thread is created, it is always in the new state. For a thread in the new state, the code has not been run yet and thus has not begun its execution.

Active: When a thread invokes the start() method, it moves from the new state to the active state. The active state contains two states within it: one is runnable, and the other is running.

Runnable: A thread, that is ready to run is then moved to the runnable state. In the runnable state, the thread may be running or may be ready to run at any given instant of time. It is the duty of the thread scheduler to provide the thread time to run, i.e., moving the thread the running state.
A program implementing multithreading acquires a fixed slice of time to each individual thread. Each and every thread runs for a short span of time and when that allocated time slice is over, the thread voluntarily gives up the CPU to the other thread, so that the other threads can also run for their slice of time. Whenever such a scenario occurs, all those threads that are willing to run, waiting for their turn to run, lie in the runnable state. In the runnable state, there is a queue where the threads lie.
Running: When the thread gets the CPU, it moves from the runnable to the running state. Generally, the most common change in the state of a thread is from runnable to running and again back to runnable.
Blocked or Waiting: Whenever a thread is inactive for a span of time (not permanently) then, either the thread is in the blocked state or is in the waiting state.

For example, a thread (let's say its name is A) may want to print some data from the printer. However, at the same time, the other thread (let's say its name is B) is using the printer to print some data. Therefore, thread A has to wait for thread B to use the printer. Thus, thread A is in the blocked state. A thread in the blocked state is unable to perform any execution and thus never consume any cycle of the Central Processing Unit (CPU). Hence, we can say that thread A remains idle until the thread scheduler reactivates thread A, which is in the waiting or blocked state.

When the main thread invokes the join() method then, it is said that the main thread is in the waiting state. The main thread then waits for the child threads to complete their tasks. When the child threads complete their job, a notification is sent to the main thread, which again moves the thread from waiting to the active state.

If there are a lot of threads in the waiting or blocked state, then it is the duty of the thread scheduler to determine which thread to choose and which one to reject, and the chosen thread is then given the opportunity to run.

Timed Waiting: Sometimes, waiting for leads to starvation. For example, a thread (its name is A) has entered the critical section of a code and is not willing to leave that critical section. In such a scenario, another thread (its name is B) has to wait forever, which leads to starvation. To avoid such scenario, a timed waiting state is given to thread B. Thus, thread lies in the waiting state for a specific span of time, and not forever. A real example of timed waiting is when we invoke the sleep() method on a specific thread. The sleep() method puts the thread in the timed wait state. After the time runs out, the thread wakes up and start its execution from when it has left earlier.

Terminated: A thread reaches the termination state because of the following reasons:

When a thread has finished its job, then it exists or terminates normally.
Abnormal termination: It occurs when some unusual events such as an unhandled exception or segmentation fault.
A terminated thread means the thread is no more in the system. In other words, the thread is dead, and there is no way one can respawn (active after kill) the dead thread.

The following diagram shows the different states involved in the life cycle of a thread.

![image](https://github.com/user-attachments/assets/0e026089-0ed5-4a22-8fc5-a975f273218f)

### Implementation of Thread States
In Java, one can get the current state of a thread using the Thread.getState() method. The java.lang.Thread.State class of Java provides the constants ENUM to represent the state of a thread. These constants are:

### public static final Thread.State NEW  
It represents the first state of a thread that is the NEW state.

### public static final Thread.State RUNNABLE  
It represents the runnable state.It means a thread is waiting in the queue to run.

### public static final Thread.State BLOCKED  
It represents the blocked state. In this state, the thread is waiting to acquire a lock.

### public static final Thread.State WAITING  
It represents the waiting state. A thread will go to this state when it invokes the Object.wait() method, or Thread.join() method with no timeout. A thread in the waiting state is waiting for another thread to complete its task.

### public static final Thread.State TIMED_WAITING  

It represents the final state of a thread that is terminated or dead. A terminated thread means it has completed its execution.

## Java Program for Demonstrating Thread States
The following Java program shows some of the states of a thread defined above.

FileName: ThreadState.java
```
// ABC class implements the interface Runnable  
class ABC implements Runnable  
{  
public void run()  
{  
  
// try-catch block  
try  
{  
// moving thread t2 to the state timed waiting  
Thread.sleep(100);  
}  
catch (InterruptedException ie)  
{  
ie.printStackTrace();  
}  
  
  
System.out.println("The state of thread t1 while it invoked the method join() on thread t2 -"+ ThreadState.t1.getState());  
  
// try-catch block  
try  
{  
Thread.sleep(200);  
}  
catch (InterruptedException ie)  
{  
ie.printStackTrace();  
}     
}  
}  
  
// ThreadState class implements the interface Runnable  
public class ThreadState implements Runnable  
{  
public static Thread t1;  
public static ThreadState obj;  
  
// main method   
public static void main(String argvs[])  
{  
// creating an object of the class ThreadState  
obj = new ThreadState();  
t1 = new Thread(obj);  
  
// thread t1 is spawned   
// The thread t1 is currently in the NEW state.  
System.out.println("The state of thread t1 after spawning it - " + t1.getState());  
  
// invoking the start() method on   
// the thread t1  
t1.start();  
  
// thread t1 is moved to the Runnable state  
System.out.println("The state of thread t1 after invoking the method start() on it - " + t1.getState());  
}  
  
public void run()  
{  
ABC myObj = new ABC();  
Thread t2 = new Thread(myObj);  
  
// thread t2 is created and is currently in the NEW state.  
System.out.println("The state of thread t2 after spawning it - "+ t2.getState());  
t2.start();  
  
// thread t2 is moved to the runnable state  
System.out.println("the state of thread t2 after calling the method start() on it - " + t2.getState());  
  
// try-catch block for the smooth flow of the  program  
try  
{  
// moving the thread t1 to the state timed waiting   
Thread.sleep(200);  
}  
catch (InterruptedException ie)  
{  
ie.printStackTrace();  
}  
  
System.out.println("The state of thread t2 after invoking the method sleep() on it - "+ t2.getState() );  
  
// try-catch block for the smooth flow of the  program  
try  
{  
// waiting for thread t2 to complete its execution  
t2.join();  
}  
catch (InterruptedException ie)  
{  
ie.printStackTrace();  
}  
System.out.println("The state of thread t2 when it has completed it's execution - " + t2.getState());  
}  
  
}
```
Output:
```
The state of thread t1 after spawning it - NEW
The state of thread t1 after invoking the method start() on it - RUNNABLE
The state of thread t2 after spawning it - NEW
the state of thread t2 after calling the method start() on it - RUNNABLE
The state of thread t1 while it invoked the method join() on thread t2 -TIMED_WAITING
The state of thread t2 after invoking the method sleep() on it - TIMED_WAITING
The state of thread t2 when it has completed it's execution - TERMINATED
```

Explanation:

Whenever we spawn a new thread, that thread attains the new state. When the method start() is invoked on a thread, the thread scheduler moves that thread to the runnable state. Whenever the join() method is invoked on any thread instance, the current thread executing that statement has to wait for this thread to finish its execution, i.e., move that thread to the terminated state. Therefore, before the final print statement is printed on the console, the program invokes the method join() on thread t2, making the thread t1 wait while the thread t2 finishes its execution and thus, the thread t2 get to the terminated or dead state. Thread t1 goes to the waiting state because it is waiting for thread t2 to finish it's execution as it has invoked the method join() on thread t2.

# Java Threads | How to create a thread in Java

Multithreading is a fundamental concept in Java programming, allowing developers to execute multiple tasks concurrently within a single program. Threads are lightweight processes that run within the context of a larger process, enabling efficient utilization of system resources and enhancing application responsiveness. In this section, we will explore how to create threads in Java, covering various approaches, best practices.

In Java, threads are represented by instances of the Thread class or by implementing the Runnable interface. The Thread class provides built-in support for multithreading, while the Runnable interface defines a single method, run() that contains the code to be executed by the thread. By implementing the Runnable interface, we can decouple the task from the thread itself, promoting better code organization and reusability.

There are the following two ways to create a thread:

By Extending Thread Class

By Implementing Runnable Interface

# Thread Class

The simplest way to create a thread in Java is by extending the Thread class and overriding its run() method. Thread class provide constructors and methods to create and perform operations on a thread. Thread class extends Object class and implements Runnable interface.

### Constructors of Thread Class

Thread()
Thread(String name)
Thread(Runnable r)
Thread(Runnable r, String name)

### Thread Class Methods

public void run(): is used to perform action for a thread.

public void start(): starts the execution of the thread.JVM calls the run() method on the thread.

public void sleep(long miliseconds): Causes the currently executing thread to sleep (temporarily cease execution) for the specified number of milliseconds.

public void join(): waits for a thread to die.

public void join(long miliseconds): waits for a thread to die for the specified miliseconds.

public int getPriority(): returns the priority of the thread.

public int setPriority(int priority): changes the priority of the thread.

public String getName(): returns the name of the thread.

public void setName(String name): changes the name of the thread.

public Thread currentThread(): returns the reference of currently executing thread.

public int getId(): returns the id of the thread.

public Thread.State getState(): returns the state of the thread.

public boolean isAlive(): tests if the thread is alive.

public void yield(): causes the currently executing thread object to temporarily pause and allow other threads to execute.

public void suspend(): is used to suspend the thread(depricated).

public void resume(): is used to resume the suspended thread(depricated).

public void stop(): is used to stop the thread(depricated).

public boolean isDaemon(): tests if the thread is a daemon thread.

public void setDaemon(boolean b): marks the thread as daemon or user thread.

public void interrupt(): interrupts the thread.

public boolean isInterrupted(): tests if the thread has been interrupted.

public static boolean interrupted(): tests if the current thread has been interrupted.

## By Implementing Runnable Interface

Another approach to creating threads in Java is by implementing the Runnable interface. The Runnable interface should be implemented by any class whose instances are intended to be executed by a thread. Runnable interface have only one method named run(). This approach is preferred when we want to separate the task from the thread itself, promoting better encapsulation and flexibility.

public void run(): is used to perform action for a thread.

## Starting a Thread
The start() method of the Thread class is used to start a newly created thread. It performs the following tasks:

A new thread starts (with new callstack).
The thread moves from New state to the Runnable state.
When the thread gets a chance to execute, its target run() method will run.

## Thread Creation
1) Creating Thread by Extending Thread Class

File Name: Multi.java
```
class Multi extends Thread{  
public void run(){  
System.out.println("thread is running...");  
}  
public static void main(String args[]){  
Multi t1=new Multi();  
t1.start();  
 }  
}
```  
Output:
```
thread is running...
```

In this example, we define a custom thread by extending the Thread class and overriding the run() method with our desired functionality. We then instantiate the thread and call its start() method to begin execution.

FileName: Multi3.java
```
class Multi3 implements Runnable{  
public void run(){  
System.out.println("thread is running...");  
}  
  
public static void main(String args[]){  
Multi3 m1=new Multi3();  
Thread t1 =new Thread(m1);   // Using the constructor Thread(Runnable r)  
t1.start();  
 }  
}
```
Output:
```
thread is running...

```

In this example, we define a class MyRunnable that implements the Runnable interface and provides the task logic inside its run() method. We then create a new Thread object, passing an instance of MyRunnable to its constructor, and start the thread using the start() method.

If we are not extending the Thread class, the class object would not be treated as a thread object. So, we need to explicitly create the Thread class object. We are passing the object of our class that implements Runnable so that the class's run() method may execute.

## 3) Using the Thread Class: Thread(String Name)
We can directly use the Thread class to spawn new threads using the constructors defined above.

FileName: MyThread1.java
```
public class MyThread1  
{  
// Main method  
public static void main(String argvs[])  
{  
// creating an object of the Thread class using the constructor Thread(String name)   
Thread t= new Thread("My first thread");  
  
// the start() method moves the thread to the active state  
t.start();  
// getting the thread name by invoking the getName() method  
String str = t.getName();  
System.out.println(str);  
}  
}
```
Output:
```
My first thread
```

## 4) Using the Thread Class: Thread(Runnable r, String name)
Observe the following program.

FileName: MyThread2.java
```
public class MyThread2 implements Runnable  
{    
public void run()  
{    
System.out.println("Now the thread is running ...");    
}    
    
// main method  
public static void main(String argvs[])  
{   
// creating an object of the class MyThread2  
Runnable r1 = new MyThread2();   
  
// creating an object of the class Thread using Thread(Runnable r, String name)  
Thread th1 = new Thread(r1, "My new thread");    
  
// the start() method moves the thread to the active state  
th1.start();   
  
// getting the thread name by invoking the getName() method  
String str = th1.getName();  
System.out.println(str);  
}    
}
```  
Output:
```
My new thread
Now the thread is running ...
```

# Thread Scheduler in Java
A component of Java that decides which thread to run or execute and which thread to wait is called a thread scheduler in Java. In Java, a thread is only chosen by a thread scheduler if it is in the runnable state. However, if there is more than one thread in the runnable state, it is up to the thread scheduler to pick one of the threads and ignore the other ones. There are some criteria that decide which thread will execute first. There are two factors for scheduling a thread i.e. Priority and Time of arrival.

## Priority: 
Priority of each thread lies between 1 to 10. If a thread has a higher priority, it means that thread has got a better chance of getting picked up by the thread scheduler.

Time of Arrival: Suppose two threads of the same priority enter the runnable state, then priority cannot be the factor to pick a thread from these two threads. In such a case, arrival time of thread is considered by the thread scheduler. A thread that arrived first gets the preference over the other threads.

Thread Scheduler Algorithms

On the basis of the above-mentioned factors, the scheduling algorithm is followed by a Java thread scheduler.

## First Come First Serve Scheduling:
In this scheduling algorithm, the scheduler picks the threads thar arrive first in the runnable queue. Observe the following table:

![image](https://github.com/user-attachments/assets/d3aea9a9-070d-4b7a-a9e9-db073bbb6fec)

In the above table, we can see that Thread t1 has arrived first, then Thread t2, then t3, and at last t4, and the order in which the threads will be processed is according to the time of arrival of threads.

![image](https://github.com/user-attachments/assets/33c32841-77b3-406f-be5d-77f97b917096)

Hence, Thread t1 will be processed first, and Thread t4 will be processed last.

## Time-slicing scheduling:

Usually, the First Come First Serve algorithm is non-preemptive, which is bad as it may lead to infinite blocking (also known as starvation). To avoid that, some time-slices are provided to the threads so that after some time, the running thread has to give up the CPU. Thus, the other waiting threads also get time to run their job.

![image](https://github.com/user-attachments/assets/db9b65b2-d652-47dc-81b2-d2173e55f848)

In the above diagram, each thread is given a time slice of 2 seconds. Thus, after 2 seconds, the first thread leaves the CPU, and the CPU is then captured by Thread2. The same process repeats for the other threads too.

## Preemptive-Priority Scheduling:

The name of the scheduling algorithm denotes that the algorithm is related to the priority of the threads.

![image](https://github.com/user-attachments/assets/54fbea00-8ae6-4f9c-b39a-89c6cfdfe427)

Suppose there are multiple threads available in the runnable state. The thread scheduler picks that thread that has the highest priority. Since the algorithm is also preemptive, therefore, time slices are also provided to the threads to avoid starvation. Thus, after some time, even if the highest priority thread has not completed its job, it has to release the CPU because of preemption.

## Working of the Java Thread Scheduler

![image](https://github.com/user-attachments/assets/3d7b188d-5ff4-4eea-a698-f73560f0e314)

Let's understand the working of the Java thread scheduler. Suppose, there are five threads that have different arrival times and different priorities. Now, it is the responsibility of the thread scheduler to decide which thread will get the CPU first.

The thread scheduler selects the thread that has the highest priority, and the thread begins the execution of the job. If a thread is already in runnable state and another thread (that has higher priority) reaches in the runnable state, then the current thread is pre-empted from the processor, and the arrived thread with higher priority gets the CPU time.

When two threads (Thread 2 and Thread 3) having the same priorities and arrival time, the scheduling will be decided on the basis of FCFS algorithm. Thus, the thread that arrives first gets the opportunity to execute first.

# Thread.sleep() in Java with Examples
The Java Thread class provides the two variants of the sleep() method. First one accepts only an argument, whereas the other variant accepts two arguments. The method sleep() is being used to halt the working of a thread for a given amount of time. The time up to which the thread remains in the sleeping state is known as the sleeping time of the thread. After the sleeping time is over, the thread starts its execution from where it has left.

## What is Thread.sleep()?
The Thread.sleep() method is a static method of the Thread class that causes the currently executing thread to sleep (pause its execution) for a specified number of milliseconds.

### The sleep() Method Syntax:
Following are the syntax of the sleep() method.

```
public static void sleep(long mls) throws InterruptedException   
public static void sleep(long mls, int n) throws InterruptedException
```
The method sleep() with the one parameter is the native method, and the implementation of the native method is accomplished in another programming language. The other methods having the two parameters are not the native method. That is, its implementation is accomplished in Java. We can access the sleep() methods with the help of the Thread class, as the signature of the sleep() methods contain the static keyword. The native, as well as the non-native method, throw a checked Exception. Therefore, either try-catch block or the throws keyword can work here.

The Thread.sleep() method can be used with any thread. It means any other thread or the main thread can invoke the sleep() method.

## Parameters:

The following are the parameters used in the sleep() method.

mls: The time in milliseconds is represented by the parameter mls. The duration for which the thread will sleep is given by the method sleep().

n: It shows the additional time up to which the programmer or developer wants the thread to be in the sleeping state. The range of n is from 0 to 999999.

The method does not return anything.

### Points to Remember
Whenever the Thread.sleep() methods execute, it always halts the execution of the current thread.

Whenever another thread does interruption while the current thread is already in the sleep mode, then the InterruptedException is thrown.

If the system that is executing the threads is busy, then the actual sleeping time of the thread is generally more as compared to the time passed in arguments. However, if the system executing the sleep() method has less load, then the actual sleeping time of the thread is almost equal to the time passed in the argument.

### Basic Usage of Thread.sleep() Method

File Name: SleepExample.java
```
public class SleepExample {  
    public static void main(String[] args) {  
        System.out.println("Start");  
        try {  
            Thread.sleep(2000); // Pause for 2000 milliseconds (2 seconds)  
        } catch (InterruptedException e) {  
            System.out.println("Thread interrupted");  
        }  
        System.out.println("End");  
    }  
} 
 ```
Output:
```
Start
End
```
 In this example, the main thread prints "Start", pauses for 2 seconds, and then prints "End".

## Handling InterruptedException
One important aspect of using Thread.sleep() is handling the InterruptedException. This exception is thrown when another thread interrupts the sleeping thread. Proper handling of this exception is crucial for maintaining the robustness of your application. Here's an example:

File Name: InterruptHandling.java
```
public class InterruptHandling {  
    public static void main(String[] args) {  
        Thread thread = new Thread(() -> {  
            try {  
                System.out.println("Thread will sleep for 5 seconds.");  
                Thread.sleep(5000);  
                System.out.println("Thread woke up after sleep.");  
            } catch (InterruptedException e) {  
                System.out.println("Thread was interrupted during sleep.");  
            }  
        });  
        thread.start();  
        try {  
            Thread.sleep(2000); // Main thread sleeps for 2 seconds  
            thread.interrupt(); // Interrupt the sleeping thread  
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
    }  
}
``` 
Output:
```
Thread will sleep for 5 seconds.
Thread was interrupted during sleep.
```

In this code, the child thread sleeps for 5 seconds but gets interrupted by the main thread after 2 seconds. The catch block handles the interruption gracefully.

Example of the sleep() method in Java : on the custom thread
The following example shows how one can use the sleep() method on the custom thread.

FileName: TestSleepMethod1.java
```
class TestSleepMethod1 extends Thread{    
 public void run(){    
  for(int i=1;i<5;i++){   
  // the thread will sleep for the 500 milli seconds   
    try{Thread.sleep(500);}catch(InterruptedException e){System.out.println(e);}    
    System.out.println(i);    
  }    
 }    
 public static void main(String args[]){    
  TestSleepMethod1 t1=new TestSleepMethod1();    
  TestSleepMethod1 t2=new TestSleepMethod1();    
     
  t1.start();    
  t2.start();    
 }    
}    
```

Output:
```
1
1
2
2
3
3
4
4
```
As  you know well that at a time only one thread is executed. If you sleep a thread for the specified time, the thread scheduler picks up another thread and so on.

Example of the sleep() Method in Java : on the main thread
FileName: TestSleepMethod2.java
```
// important import statements  
import java.lang.Thread;  
import java.io.*;  
  
  
public class TestSleepMethod2  
{  
    // main method  
public static void main(String argvs[])  
{  
  
try {  
for (int j = 0; j < 5; j++)  
{  
  
// The main thread sleeps for the 1000 milliseconds, which is 1 sec  
// whenever the loop runs  
Thread.sleep(1000);  
  
// displaying the value of the variable  
System.out.println(j);  
}  
}  
catch (Exception expn)   
{  
// catching the exception  
System.out.println(expn);  
}  
}  
} 
```
Output:
```
0
1
2
3
4
```
xample of the sleep() Method in Java: When the sleeping time is -ive
The following example throws the exception IllegalArguementException when the time for sleeping is negative.

FileName: TestSleepMethod3.java
```
// important import statements  
import java.lang.Thread;  
import java.io.*;  
  
public class TestSleepMethod3  
{  
// main method  
public static void main(String argvs[])  
{  
// we can also use throws keyword followed by  
// exception name for throwing the exception  
try   
{  
for (int j = 0; j < 5; j++)   
{  
  
// it throws the exception IllegalArgumentException  
// as the time is -ive which is -100  
Thread.sleep(-100);  
  
// displaying the variable's value  
System.out.println(j);  
}  
}  
catch (Exception expn)   
{  
  
// the exception iscaught here   
System.out.println(expn);  
}  
}  
}  
```
Output:
```
java.lang.IllegalArgumentException: timeout value is negative
```

Conclusion
In conclusion, the Thread.sleep() method is a powerful yet straightforward tool for pausing thread execution in Java. It serves various purposes, from simulating delays in testing environments to implementing rate limiting and periodic checks. However, it must be used judiciously, with proper handling of interruptions and consideration of alternative synchronization mechanisms. By understanding its usage, limitations, and best practices, developers can effectively utilize Thread.sleep() to manage thread timing and control in their Java applications.

Can we start a thread twice
No. After starting a thread, it can never be started again. If you does so, an IllegalThreadStateException is thrown. In such case, thread will run once but for second time, it will throw exception.

Let's understand it by the example given below:
```
public class TestThreadTwice1 extends Thread{  
 public void run(){  
   System.out.println("running...");  
 }  
 public static void main(String args[]){  
  TestThreadTwice1 t1=new TestThreadTwice1();  
  t1.start();  
  t1.start();  
 }  
}
```
Output
```
running
Exception in thread "main" java.lang.IllegalThreadStateException
```

## What if we call Java run() method directly instead start() method?
Each thread starts in a separate call stack.
Invoking the run() method from the main thread, the run() method goes onto the current call stack rather than at the beginning of a new call stack.

FileName: TestCallRun1.java
```
class TestCallRun1 extends Thread{  
 public void run(){  
   System.out.println("running...");  
 }  
 public static void main(String args[]){  
  TestCallRun1 t1=new TestCallRun1();  
  t1.run();//fine, but does not start a separate call stack  
 }  
}
```
Output:
```
running...
```
![image](https://github.com/user-attachments/assets/8c69c314-9da4-4c9e-bd5d-ee61c224162b)

Problem if you direct call run() method

FileName: TestCallRun2.java
```
class TestCallRun2 extends Thread{  
 public void run(){  
  for(int i=1;i<5;i++){  
    try{Thread.sleep(500);}catch(InterruptedException e){System.out.println(e);}  
    System.out.println(i);  
  }  
 }  
 public static void main(String args[]){  
  TestCallRun2 t1=new TestCallRun2();  
  TestCallRun2 t2=new TestCallRun2();  
   
  t1.run();  
  t2.run();  
 }  
}  
```
output
```
1
2
3
4
1
2
3
4
```
As we can see in the above program that there is no context-switching because here t1 and t2 will be treated as normal object not thread object.

# Java join() method

The join() method in Java is provided by the java.lang.Thread class that permits one thread to wait until the other thread to finish its execution. Suppose th be the object the class Thread whose thread is doing its execution currently, then the th.join(); statement ensures that th is finished before the program does the execution of the next statement. When there are more than one thread invoking the join() method, then it leads to overloading on the join() method that permits the developer or programmer to mention the waiting period. However, similar to the sleep() method in Java, the join() method is also dependent on the operating system for the timing, so we should not assume that the join() method waits equal to the time we mention in the parameters. The following are the three overloaded join() methods.

### Description of The Overloaded join() Method

join(): When the join() method is invoked, the current thread stops its execution and the thread goes into the wait state. The current thread remains in the wait state until the thread on which the join() method is invoked has achieved its dead state. If interruption of the thread occurs, then it throws the InterruptedException.

Syntax:

```
public final void join() throws InterruptedException
```
join(long mls): When the join() method is invoked, the current thread stops its execution and the thread goes into the wait state. The current thread remains in the wait state until the thread on which the join() method is invoked called is dead or the wait for the specified time frame(in milliseconds) is over.

Syntax:
```
public final synchronized void join(long mls) throws InterruptedException, where mls is in milliseconds
```

Example of join() Method in Java
The following program shows the usage of the join() method.

FileName: ThreadJoinExample.java
```
// A Java program for understanding   
// the joining of threads  
  
// import statement  
import java.io.*;  
  
// The ThreadJoin class is the child class of the class Thread  
class ThreadJoin extends Thread  
{  
// overriding the run method  
public void run()  
{  
for (int j = 0; j < 2; j++)  
{  
try  
{  
// sleeping the thread for 300 milli seconds  
Thread.sleep(300);  
System.out.println("The current thread name is: " + Thread.currentThread().getName());  
}  
// catch block for catching the raised exception  
catch(Exception e)  
{  
System.out.println("The exception has been caught: " + e);  
}  
System.out.println( j );  
}  
}  
}  
  
public class ThreadJoinExample  
{  
// main method  
public static void main (String argvs[])  
{  
  
// creating 3 threads  
ThreadJoin th1 = new ThreadJoin();  
ThreadJoin th2 = new ThreadJoin();  
ThreadJoin th3 = new ThreadJoin();  
  
// thread th1 starts  
th1.start();  
  
// starting the second thread after when  
// the first thread th1 has ended or died.  
try  
{  
System.out.println("The current thread name is: "+ Thread.currentThread().getName());  
  
// invoking the join() method  
th1.join();  
}  
  
// catch block for catching the raised exception  
catch(Exception e)  
{  
System.out.println("The exception has been caught " + e);  
}  
  
// thread th2 starts  
th2.start();  
  
// starting the th3 thread after when the thread th2 has ended or died.  
try  
{  
System.out.println("The current thread name is: " + Thread.currentThread().getName());  
th2.join();  
}  
  
// catch block for catching the raised exception  
catch(Exception e)  
{  
System.out.println("The exception has been caught " + e);  
}  
  
// thread th3 starts  
th3.start();  
}  
}  
```
Output:

```
The current thread name is: main
The current thread name is: Thread - 0
0
The current thread name is: Thread - 0
1
The current thread name is: main
The current thread name is: Thread - 1
0
The current thread name is: Thread - 1
1
The current thread name is: Thread - 2
0
The current thread name is: Thread - 2
1
```

Explanation: The above program shows that the second thread th2 begins after the first thread th1 has ended, and the thread th3 starts its work after the second thread th2 has ended or died

# Naming Thread and Current Thread

## Naming Thread
The Thread class provides methods to change and get the name of a thread. By default, each thread has a name, i.e. thread-0, thread-1 and so on. By we can change the name of the thread by using the setName() method. The syntax of setName() and getName() methods are given below:
```
public String getName(): is used to return the name of a thread.  
public void setName(String name): is used to change the name of a thread.
``` 
We can also set the name of a thread directly when we create a new thread using the constructor of the class.

Example of naming a thread : Using setName() Method
FileName: TestMultiNaming1.java
```
class TestMultiNaming1 extends Thread{  
  public void run(){  
   System.out.println("running...");  
  }  
 public static void main(String args[]){  
  TestMultiNaming1 t1=new TestMultiNaming1();  
  TestMultiNaming1 t2=new TestMultiNaming1();  
  System.out.println("Name of t1:"+t1.getName());  
  System.out.println("Name of t2:"+t2.getName());  
   
  t1.start();  
  t2.start();  
  
  t1.setName("Sonoo Jaiswal");  
  System.out.println("After changing name of t1:"+t1.getName());  
 }  
}
```
Output:
```
Name of t1:Thread-0
Name of t2:Thread-1
After changing name of t1:Sonoo Jaiswal
running...
running...
```

### Example of naming a thread : Without Using setName() Method
One can also set the name of a thread at the time of the creation of a thread, without using the setName() method. Observe the following code.

FileName: ThreadNamingExample.java
```
// A Java program that shows how one can   
// set the name of a thread at the time  
// of creation of the thread  
  
// import statement  
import java.io.*;  
  
// The ThreadNameClass is the child class of the class Thread  
class ThreadName extends Thread  
{  
  
// constructor of the class  
ThreadName(String threadName)  
{  
// invoking the constructor of  
// the superclass, which is Thread class.  
super(threadName);  
}  
  
// overriding the method run()  
public void run()  
{  
System.out.println(" The thread is executing....");  
}  
}  
  
public class ThreadNamingExample  
{  
// main method  
public static void main (String argvs[])  
{  
// creating two threads and settting their name  
// using the contructor of the class  
ThreadName th1 = new ThreadName("JavaTpoint1");  
ThreadName th2 = new ThreadName("JavaTpoint2");  
  
// invoking the getName() method to get the names  
// of the thread created above  
System.out.println("Thread - 1: " + th1.getName());  
System.out.println("Thread - 2: " + th2.getName());  
  
  
// invoking the start() method on both the threads  
th1.start();  
th2.start();  
}  
}
``` 
Output:
```
Thread - 1: JavaTpoint1
Thread - 2: JavaTpoint2
The thread is executing....
The thread is executing....
```
## Current Thread
The currentThread() method returns a reference of the currently executing thread.

```
public static Thread currentThread()   
```
Example of currentThread() method
FileName: TestMultiNaming2.java
```
class TestMultiNaming2 extends Thread{  
 public void run(){  
  System.out.println(Thread.currentThread().getName());  
 }  
 public static void main(String args[]){  
  TestMultiNaming2 t1=new TestMultiNaming2();  
  TestMultiNaming2 t2=new TestMultiNaming2();  
  
  t1.start();  
  t2.start();  
 }  
}  
```
Output:
```
Thread-0
Thread-1
```
# Priority of a Thread (Thread Priority)

Each thread has a priority. Priorities are represented by a number between 1 and 10. In most cases, the thread scheduler schedules the threads according to their priority (known as preemptive scheduling). But it is not guaranteed because it depends on JVM specification that which scheduling it chooses. Note that not only JVM a Java programmer can also assign the priorities of a thread explicitly in a Java program.

Setter & Getter Method of Thread Priority
Let's discuss the setter and getter method of the thread priority.

public final int getPriority(): The java.lang.Thread.getPriority() method returns the priority of the given thread.

public final void setPriority(int newPriority): The java.lang.Thread.setPriority() method updates or assign the priority of the thread to newPriority. The method throws IllegalArgumentException if the value newPriority goes out of the range, which is 1 (minimum) to 10 (maximum).

3 constants defined in Thread class:

public static int MIN_PRIORITY
public static int NORM_PRIORITY
public static int MAX_PRIORITY

Default priority of a thread is 5 (NORM_PRIORITY). The value of MIN_PRIORITY is 1 and the value of MAX_PRIORITY is 10.

Example of priority of a Thread:
FileName: ThreadPriorityExample.java
```
// Importing the required classes  
import java.lang.*;  
  
public class ThreadPriorityExample extends Thread   
{  
  
// Method 1  
// Whenever the start() method is called by a thread  
// the run() method is invoked  
public void run()  
{  
// the print statement  
System.out.println("Inside the run() method");  
}  
  
// the main method  
public static void main(String argvs[])  
{  
// Creating threads with the help of ThreadPriorityExample class  
ThreadPriorityExample th1 = new ThreadPriorityExample();  
ThreadPriorityExample th2 = new ThreadPriorityExample();  
ThreadPriorityExample th3 = new ThreadPriorityExample();  
  
// We did not mention the priority of the thread.  
// Therefore, the priorities of the thread is 5, the default value  
  
// 1st Thread  
// Displaying the priority of the thread  
// using the getPriority() method  
System.out.println("Priority of the thread th1 is : " + th1.getPriority());  
  
// 2nd Thread   
// Display the priority of the thread  
System.out.println("Priority of the thread th2 is : " + th2.getPriority());  
  
// 3rd Thread   
// // Display the priority of the thread  
System.out.println("Priority of the thread th2 is : " + th2.getPriority());  
  
// Setting priorities of above threads by  
// passing integer arguments  
th1.setPriority(6);  
th2.setPriority(3);  
th3.setPriority(9);  
  
// 6  
System.out.println("Priority of the thread th1 is : " + th1.getPriority());  
  
// 3  
System.out.println("Priority of the thread th2 is : " + th2.getPriority());  
  
// 9  
System.out.println("Priority of the thread th3 is : " + th3.getPriority());  
  
// Main thread  
  
// Displaying name of the currently executing thread   
System.out.println("Currently Executing The Thread : " + Thread.currentThread().getName());  
  
System.out.println("Priority of the main thread is : " + Thread.currentThread().getPriority());  
  
// Priority of the main thread is 10 now  
Thread.currentThread().setPriority(10);  
  
System.out.println("Priority of the main thread is : " + Thread.currentThread().getPriority());  
}  
}  
```
Output:
```
Priority of the thread th1 is : 5
Priority of the thread th2 is : 5
Priority of the thread th2 is : 5
Priority of the thread th1 is : 6
Priority of the thread th2 is : 3
Priority of the thread th3 is : 9
Currently Executing The Thread : main
Priority of the main thread is : 5
Priority of the main thread is : 10
```
We know that a thread with high priority will get preference over lower priority threads when it comes to the execution of threads. However, there can be other scenarios where two threads can have the same priority. All of the processing, in order to look after the threads, is done by the Java thread scheduler. Refer to the following example to comprehend what will happen if two threads have the same priority.

FileName: ThreadPriorityExample1.java
```
// importing the java.lang package  
import java.lang.*;  
  
public class ThreadPriorityExample1 extends Thread   
{  
  
// Method 1  
// Whenever the start() method is called by a thread  
// the run() method is invoked  
public void run()  
{  
// the print statement  
System.out.println("Inside the run() method");  
}  
  
  
// the main method  
public static void main(String argvs[])  
{  
  
// Now, priority of the main thread is set to 7  
Thread.currentThread().setPriority(7);  
  
// the current thread is retrieved  
// using the currentThread() method  
  
// displaying the main thread priority  
// using the getPriority() method of the Thread class  
System.out.println("Priority of the main thread is : " + Thread.currentThread().getPriority());  
  
// creating a thread by creating an object of the class ThreadPriorityExample1  
ThreadPriorityExample1 th1 = new ThreadPriorityExample1();  
  
// th1 thread is the child of the main thread  
// therefore, the th1 thread also gets the priority 7  
  
// Displaying the priority of the current thread  
System.out.println("Priority of the thread th1 is : " + th1.getPriority());  
}  
}
```
Output:
```
Priority of the main thread is : 7
Priority of the thread th1 is : 7
```

Explanation: If there are two threads that have the same priority, then one can not predict which thread will get the chance to execute first. The execution then is dependent on the thread scheduler's algorithm (First Come First Serve, Round-Robin, etc.)

# Daemon Thread in Java

Daemon thread in Java is a service provider thread that provides services to the user thread. Its life depend on the mercy of user threads i.e. when all the user threads dies, JVM terminates this thread automatically.

There are many java daemon threads running automatically e.g. gc, finalizer etc.

You can see all the detail by typing the jconsole in the command prompt. The jconsole tool provides information about the loaded classes, memory usage, running threads etc.

### Points to remember for Daemon Thread in Java

It provides services to user threads for background supporting tasks. It has no role in life than to serve user threads.

Its life depends on user threads.

It is a low priority thread.

### Why JVM terminates the daemon thread if there is no user thread?

The sole purpose of the daemon thread is that it provides services to user thread for background supporting task. If there is no user thread, why should JVM keep running this thread. That is why JVM terminates the daemon thread if there is no user thread.

### Methods for Java Daemon thread by Thread class

The java.lang.Thread class provides two methods for java daemon thread.

![image](https://github.com/user-attachments/assets/f8bb70ef-3166-4a21-837a-2454e6673d5c)

```
File: MyThread.java

public class TestDaemonThread1 extends Thread{  
 public void run(){  
  if(Thread.currentThread().isDaemon()){//checking for daemon thread  
   System.out.println("daemon thread work");  
  }  
  else{  
  System.out.println("user thread work");  
 }  
 }  
 public static void main(String[] args){  
  TestDaemonThread1 t1=new TestDaemonThread1();//creating thread  
  TestDaemonThread1 t2=new TestDaemonThread1();  
  TestDaemonThread1 t3=new TestDaemonThread1();  
  
  t1.setDaemon(true);//now t1 is daemon thread  
    
  t1.start();//starting threads  
  t2.start();  
  t3.start();  
 }  
}
```
Output:
```
daemon thread work
user thread work
user thread work
```

### Note: 
If you want to make a user thread as Daemon, it must not be started otherwise it will throw IllegalThreadStateException.
```
class TestDaemonThread2 extends Thread{  
 public void run(){  
  System.out.println("Name: "+Thread.currentThread().getName());  
  System.out.println("Daemon: "+Thread.currentThread().isDaemon());  
 }  
  
 public static void main(String[] args){  
  TestDaemonThread2 t1=new TestDaemonThread2();  
  TestDaemonThread2 t2=new TestDaemonThread2();  
  t1.start();  
  t1.setDaemon(true);//will throw exception here  
  t2.start();  
 }  
}  
```
Output:
```
exception in thread main: java.lang.IllegalThreadStateException
```

# Java Thread Pool
Java Thread pool represents a group of worker threads that are waiting for the job and reused many times.

In the case of a thread pool, a group of fixed-size threads is created. A thread from the thread pool is pulled out and assigned a job by the service provider. After completion of the job, the thread is contained in the thread pool again.

## Thread Pool Methods

newFixedThreadPool(int s): The method creates a thread pool of the fixed size s.

newCachedThreadPool(): The method creates a new thread pool that creates the new threads when needed but will still use the previously created thread whenever they are available to use.

newSingleThreadExecutor(): The method creates a new thread.
Advantage of Java Thread Pool
Better performance It saves time because there is no need to create a new thread.

Real time usage
It is used in Servlet and JSP where the container creates a thread pool to process the request.

Example of Java Thread Pool
Let's see a simple example of the Java thread pool using ExecutorService and Executors.

File: WorkerThread.java
```
import java.util.concurrent.ExecutorService;  
import java.util.concurrent.Executors;  
class WorkerThread implements Runnable {  
    private String message;  
    public WorkerThread(String s){  
        this.message=s;  
    }  
     public void run() {  
        System.out.println(Thread.currentThread().getName()+" (Start) message = "+message);  
        processmessage();//call processmessage method that sleeps the thread for 2 seconds  
        System.out.println(Thread.currentThread().getName()+" (End)");//prints thread name  
    }  
    private void processmessage() {  
        try {  Thread.sleep(2000);  } catch (InterruptedException e) { e.printStackTrace(); }  
    }  
}  
```
```
public class TestThreadPool {  
     public static void main(String[] args) {  
        ExecutorService executor = Executors.newFixedThreadPool(5);//creating a pool of 5 threads  
        for (int i = 0; i < 10; i++) {  
            Runnable worker = new WorkerThread("" + i);  
            executor.execute(worker);//calling execute method of ExecutorService  
          }  
        executor.shutdown();  
        while (!executor.isTerminated()) {   }  
  
        System.out.println("Finished all threads");  
    }  
 }
```
Output:
```
pool-1-thread-1 (Start) message = 0
pool-1-thread-2 (Start) message = 1
pool-1-thread-3 (Start) message = 2
pool-1-thread-5 (Start) message = 4
pool-1-thread-4 (Start) message = 3
pool-1-thread-2 (End)
pool-1-thread-2 (Start) message = 5
pool-1-thread-1 (End)
pool-1-thread-1 (Start) message = 6
pool-1-thread-3 (End)
pool-1-thread-3 (Start) message = 7
pool-1-thread-4 (End)
pool-1-thread-4 (Start) message = 8
pool-1-thread-5 (End)
pool-1-thread-5 (Start) message = 9
pool-1-thread-2 (End)
pool-1-thread-1 (End)
pool-1-thread-4 (End)
pool-1-thread-3 (End)
pool-1-thread-5 (End)
Finished all threads
```
# ThreadGroup in Java
Java provides a convenient way to group multiple threads in a single object. In such a way, we can suspend, resume or interrupt a group of threads by a single method call.

Note: Now suspend(), resume() and stop() methods are deprecated.
Java thread group is implemented by java.lang.ThreadGroup class.

A ThreadGroup represents a set of threads. A thread group can also include the other thread group. The thread group creates a tree in which every thread group except the initial thread group has a parent.

A thread is allowed to access information about its own thread group, but it cannot access the information about its thread group's parent thread group or any other thread groups.

![image](https://github.com/user-attachments/assets/fa5f1a58-4e35-404a-98fb-a59f47b4c258)

# Serialization and Deserialization in Java
Serialization in Java is a mechanism for writing an object's state into a byte stream. It is mainly used in Hibernate, RMI, JPA, EJB, and JMS technologies.

The reverse operation of serialization is called deserialization, where the byte stream is converted into an object. The serialization and deserialization process is platform-independent. It means we can serialize an object on one platform and deserialize it on a different platform.

For serializing the object, we call the writeObject() method of the ObjectOutputStream class, and for deserialization, we call the readObject() method of the ObjectInputStream class.

Java's serialization feature transforms an object into a stream of bytes, making it easier to store or send over a network. Many different technologies, including Hibernate, RMI (Remote Method Invocation), JPA (Java Persistence API), EJB (Enterprise JavaBeans), and JMS (Java Message Service), heavily utilize this method.

We must implement the Serializable interface for serializing the object.

## Advantages of Java Serialization
It is mainly used to travel object's state on the network (that is known as marshalling).

![image](https://github.com/user-attachments/assets/f2550ebc-b5a5-4f81-a8b5-a772824096c5)

# Java transient Keyword
In Java, Serialization is used to convert an object into a stream of the byte. The byte stream consists of the data of the instance as well as the type of data stored in that instance. Deserialization performs exactly opposite operation. It converts the byte sequence into original object data. During the serialization, when we do not want an object to be serialized we can use a transient keyword.

## Why to use the transient keyword?
The transient keyword can be used with the data members of a class in order to avoid their serialization. For example, if a program accepts a user's login details and password. But we don't want to store the original password in the file. Here, we can use transient keyword and when JVM reads the transient keyword it ignores the original value of the object and instead stores the default value of the object.

Syntax:

private transient <member variable>;  

## When to use the transient keyword?

The transient modifier can be used where there are data members derived from the other data members within the same instance of the class.

This transient keyword can be used with the data members which do not depict the state of the object.

The data members of a non-serialized object or class can use a transient modifier.

## Example of Java Transient Keyword
Let's take an example, we have declared a class as Student, it has three data members id, name and age. If you serialize the object, all the values will be serialized but we don't want to serialize one value, e.g. age then we can declare the age data member as transient.

# Synchronization in Java

Synchronization in Java is a critical concept in concurrent programming that ensures multiple threads can interact with shared resources safely. In a nutshell, synchronization prevents race conditions, where the outcome of operations depends on the timing of thread execution. It is the capability to control the access of multiple threads to any shared resource. Synchronization is a better option where we want to allow only one thread to access the shared resource.

## Understanding Threads and Shared Resources
Thread represents an independent path of execution within a program. When multiple threads access shared resources concurrently, problems may arise due to unpredictable interleaving of operations. Consider a scenario where two threads increment a shared variable concurrently:

Introducing Synchronization
Synchronization in Java tackles these problems through the capacity of a single thread to have exclusive access to either a synchronized block of code or a synchronized method associated with an object in question at a time. There are two primary mechanisms for synchronization in Java: synchronized blocks and synchronized methods.

Synchronized Blocks

Synchronized block provides exclusive access to shared resources, and only one thread is allowed to execute it in the same time frame. It's structured as follows:

synchronized (object) {  
    // Synchronized code block  
}  
This monitor object or lock is the subject. While only one thread can be holding a lock on a monitor object at one instance. Other threads that want to go into the synchronized blocks with this object must wait till the lock becomes available.

Synchronized Methods

In Java, you can declare entire methods as synchronized which prevent multiple threads from accessing the method simultaneously. With this, synchronization becomes a simpler process because the mechanism is applied to all invocations of the synchronized method automatically.

Example: Synchronized Counter
```
class SynchronizedCounter {  
    private int count = 0;      
    public synchronized void increment() {  
        count++;  
    }      
    public synchronized int getCount() {  
        return count;  
    }  
}
```
If two threads execute increment() simultaneously, they might read the current value of count, increment it, and write it back concurrently. This can result in lost updates or incorrect final values due to race conditions.

## Introducing Synchronization
Synchronization in Java tackles these problems through the capacity of a single thread to have exclusive access to either a synchronized block of code or a synchronized method associated with an object in question at a time. There are two primary mechanisms for synchronization in Java: synchronized blocks and synchronized methods.

# Synchronized Blocks

Synchronized block provides exclusive access to shared resources, and only one thread is allowed to execute it in the same time frame. It's structured as follows:
```
synchronized (object) {  
    // Synchronized code block  
}
```
This monitor object or lock is the subject. While only one thread can be holding a lock on a monitor object at one instance. Other threads that want to go into the synchronized blocks with this object must wait till the lock becomes available.

Synchronized Methods

In Java, you can declare entire methods as synchronized which prevent multiple threads from accessing the method simultaneously. With this, synchronization becomes a simpler process because the mechanism is applied to all invocations of the synchronized method automatically.

Example: Synchronized Counter
```
class SynchronizedCounter {  
    private int count = 0;      
    public synchronized void increment() {  
        count++;  
    }      
    public synchronized int getCount() {  
        return count;  
    }  
}
```
With this modification, concurrent calls to increment() or getCount() will be synchronized, preventing race conditions.

# Thread Synchronization
There are two types of thread synchronization mutual exclusive and inter-thread communication.

Mutual Exclusive
Synchronized method.
Synchronized block.
Static synchronization.
Cooperation (Inter-thread communication in Java)
Mutual Exclusive
Mutual Exclusive helps keep threads from interfering with one another while sharing data. It can be achieved by using the following three ways:

By Using Synchronized Method
By Using Synchronized Block
By Using Static Synchronization

## Concept of Lock in Java
Synchronization is built around an internal entity known as the lock or monitor. Every object has a lock associated with it. By convention, a thread that needs consistent access to an object's fields has to acquire the object's lock before accessing them, and then release the lock when it's done with them.

From Java 5 the package java.util.concurrent.locks contains several lock implementations.

Understanding The Problem Without Synchronization
In this example, there is no synchronization, so output is inconsistent. Let's see the example:

TestSynchronization1.java
```
class Table {  
    // Method to print the table, not synchronized  
    void printTable(int n) {  
        for(int i = 1; i <= 5; i++) {  
            // Print the multiplication result  
            System.out.println(n * i);  
            try {  
                // Pause execution for 400 milliseconds  
                Thread.sleep(400);  
            } catch(Exception e) {  
                // Handle any exceptions  
                System.out.println(e);  
            }  
        }  
    }  
}  
class MyThread1 extends Thread {  
    Table t;  
    // Constructor to initialize Table object  
    MyThread1(Table t) {  
        this.t = t;  
    }  
    // Run method to execute thread  
    public void run() {  
        // Call printTable method with argument 5  
        t.printTable(5);  
    }  
}  
class MyThread2 extends Thread {  
    Table t;  
    // Constructor to initialize Table object  
    MyThread2(Table t) {  
        this.t = t;  
    }  
    // Run method to execute thread  
    public void run() {  
        // Call printTable method with argument 100  
        t.printTable(100);  
    }  
}  
class TestSynchronization1 {  
    public static void main(String args[]) {  
        // Create a Table object  
        Table obj = new Table();  
        // Create MyThread1 and MyThread2 objects with the same Table object  
        MyThread1 t1 = new MyThread1(obj);  
        MyThread2 t2 = new MyThread2(obj);  
        // Start both threads  
        t1.start();  
        t2.start();  
    }  
}  
```
Output:
```
5
100
10
200
15
300
20
400
25
500
```
# Java Synchronized Method
If you declare any method as synchronized, it is known as synchronized method.

Synchronized method is used to lock an object for any shared resource.

When a thread invokes a synchronized method, it automatically acquires the lock for that object and releases it when the thread completes its task.

TestSynchronization2.java
```
class Table {  
    // Synchronized method to print the table  
    synchronized void printTable(int n) {  
        for(int i = 1; i <= 5; i++) {  
            // Print the multiplication result  
            System.out.println(n * i);  
            try {  
                // Pause execution for 400 milliseconds  
                Thread.sleep(400);  
            } catch(Exception e) {  
                // Handle any exceptions  
                System.out.println(e);  
            }  
        }  
    }  
}  
class MyThread1 extends Thread {  
    Table t;  
    // Constructor to initialize Table object  
    MyThread1(Table t) {  
        this.t = t;  
    }  
    // Run method to execute thread  
    public void run() {  
        // Call synchronized method printTable with argument 5  
        t.printTable(5);  
    }  
}  
class MyThread2 extends Thread {  
    Table t;  
    // Constructor to initialize Table object  
    MyThread2(Table t) {  
        this.t = t;  
    }  
    // Run method to execute thread  
    public void run() {  
        // Call synchronized method printTable with argument 100  
        t.printTable(100);  
    }  
}  
public class TestSynchronization2 {  
    public static void main(String args[]) {  
        // Create a Table object  
        Table obj = new Table();  
        // Create MyThread1 and MyThread2 objects with the same Table object  
        MyThread1 t1 = new MyThread1(obj);  
        MyThread2 t2 = new MyThread2(obj);  
        // Start both threads  
        t1.start();  
        t2.start();  
    }  
}  
```
Output:
```
5
10
15
20
25
100
200
300
400
500
```
Example of Synchronized Method by Using Anonymous Class
In this program, we have created the two threads by using the anonymous class, so less coding is required.

TestSynchronization3.java
```
// Program of synchronized method by using anonymous class  
class Table {  
    // Synchronized method to print the table  
    synchronized void printTable(int n) {  
        for(int i = 1; i <= 5; i++) {  
            // Print the multiplication result  
            System.out.println(n * i);  
            try {  
                // Pause execution for 400 milliseconds  
                Thread.sleep(400);  
            } catch(Exception e) {  
                // Handle any exceptions  
                System.out.println(e);  
            }  
        }  
    }  
}  
public class TestSynchronization3 {  
    public static void main(String args[]) {  
        // Create a Table object  
        final Table obj = new Table(); // Only one object  
        // Create thread t1 using anonymous class  
        Thread t1 = new Thread() {  
            public void run() {  
                // Call synchronized method printTable with argument 5  
                obj.printTable(5);  
            }  
        };  
        // Create thread t2 using anonymous class  
        Thread t2 = new Thread() {  
            public void run() {  
                // Call synchronized method printTable with argument 100  
                obj.printTable(100);  
            }  
        };  
        // Start both threads  
        t1.start();  
        t2.start();  
    }  
} 
```
Output:
```
5
10
15
20
25
100
200
300
400
500
```
# Synchronized Block in Java
Synchronized block can be used to perform synchronization on any specific resource of the method.

Suppose we have 50 lines of code in our method, but we want to synchronize only 5 lines, in such cases, we can use synchronized block.

If we put all the codes of the method in the synchronized block, it will work same as the synchronized method.

### Points to Remember
Synchronized block is used to lock an object for any shared resource.
Scope of synchronized block is smaller than the method.
A Java synchronized block doesn't allow more than one JVM, to provide access control to a shared resource.
The system performance may degrade because of the slower working of synchronized keyword.
Java synchronized block is more efficient than Java synchronized method.

```
synchronized (object reference expression) {     
  //code block     
}
```
Example of Synchronized Block
Let's see the simple example of synchronized block.
```
TestSynchronizedBlock1.java

class Table  
{      
 void printTable(int n){    
   synchronized(this){//synchronized block    
     for(int i=1;i<=5;i++){    
      System.out.println(n*i);    
      try{    
       Thread.sleep(400);    
      }catch(Exception e){System.out.println(e);}    
     }    
   }    
 }//end of the method    
}    
    
class MyThread1 extends Thread{    
Table t;    
MyThread1(Table t){    
this.t=t;    
}    
public void run(){    
t.printTable(5);    
}    
    
}    
class MyThread2 extends Thread{    
Table t;    
MyThread2(Table t){    
this.t=t;    
}    
public void run(){    
t.printTable(100);    
}    
}    
    
public class TestSynchronizedBlock1{    
public static void main(String args[]){    
Table obj = new Table();//only one object    
MyThread1 t1=new MyThread1(obj);    
MyThread2 t2=new MyThread2(obj);    
t1.start();    
t2.start();    
}    
}
```
Output:
```
5
10
15
20
25
100
200
300
400
500
``` 
# Deadlock in Java

Deadlock in Java is a part of multithreading. Deadlock can occur in a situation when a thread is waiting for an object lock, that is acquired by another thread and second thread is waiting for an object lock that is acquired by first thread. Since, both threads are waiting for each other to release the lock, the condition is called deadlock.

![image](https://github.com/user-attachments/assets/ab74feb3-4a0f-40bb-b76d-f9c177fb67a7)

```
Example of Deadlock in Java
TestDeadlockExample1.java

public class TestDeadlockExample1 {  
  public static void main(String[] args) {  
    final String resource1 = "ratan jaiswal";  
    final String resource2 = "vimal jaiswal";  
    // t1 tries to lock resource1 then resource2  
    Thread t1 = new Thread() {  
      public void run() {  
          synchronized (resource1) {  
           System.out.println("Thread 1: locked resource 1");  
  
           try { Thread.sleep(100);} catch (Exception e) {}  
  
           synchronized (resource2) {  
            System.out.println("Thread 1: locked resource 2");  
           }  
         }  
      }  
    };  
  
    // t2 tries to lock resource2 then resource1  
    Thread t2 = new Thread() {  
      public void run() {  
        synchronized (resource2) {  
          System.out.println("Thread 2: locked resource 2");  
  
          try { Thread.sleep(100);} catch (Exception e) {}  
  
          synchronized (resource1) {  
            System.out.println("Thread 2: locked resource 1");  
          }  
        }  
      }  
    };  
  
      
    t1.start();  
    t2.start();  
  }  
}
```     
Output:
```
Thread 1: locked resource 1
Thread 2: locked resource 2
```

More Complicated Deadlocks
A deadlock may also include more than two threads. The reason is that it can be difficult to detect a deadlock. Here is an example in which four threads have deadlocked:

Thread 1 locks A, waits for B

Thread 2 locks B, waits for C

Thread 3 locks C, waits for D

Thread 4 locks D, waits for A

Thread 1 waits for thread 2, thread 2 waits for thread 3, thread 3 waits for thread 4, and thread 4 waits for thread 1.

How to avoid deadlock?
A solution for a problem is found at its roots. In deadlock it is the pattern of accessing the resources A and B, is the main issue. To solve the issue we will have to simply re-order the statements where the code is accessing shared resources.

DeadlockSolved.java
```
public class DeadlockSolved {  
   
    public static void main(String ar[]) {  
        DeadlockSolved test = new DeadlockSolved();  
   
        final resource1 a = test.new resource1();  
        final resource2 b = test.new resource2();  
   
   // Thread-1  
Runnable b1 = new Runnable() {  
    public void run() {  
        synchronized (b) {  
            try {  
                /* Adding delay so that both threads can start trying to lock resources */  
                Thread.sleep(100);  
            } catch (InterruptedException e) {  
                e.printStackTrace();  
            }  
            // Thread-1 have resource1 but need resource2 also  
            synchronized (a) {  
                System.out.println("In block 1");  
            }  
        }  
    }  
};  
   
// Thread-2  
Runnable b2 = new Runnable() {  
    public void run() {  
        synchronized (b) {  
            // Thread-2 have resource2 but need resource1 also  
            synchronized (a) {  
                System.out.println("In block 2");  
            }  
        }  
    }  
};  
  
   
        new Thread(b1).start();  
        new Thread(b2).start();  
    }  
   
    // resource1  
    private class resource1 {  
        private int i = 10;  
   
        public int getI() {  
            return i;  
        }  
   
        public void setI(int i) {  
            this.i = i;  
        }  
    }  
   
    // resource2  
    private class resource2 {  
        private int i = 20;  
   
        public int getI() {  
            return i;  
        }  
   
        public void setI(int i) {  
            this.i = i;  
        }  
    }  
}
```
Output:
```
In block 1
In block 2
```
In the above code, class DeadlockSolved solves the deadlock kind of situation. It will help in avoiding deadlocks, and if encountered, in resolving them.

### How to Avoid Deadlock in Java?
Deadlocks cannot be completely resolved. But we can avoid them by following basic rules mentioned below:

Avoid Nested Locks: We must avoid giving locks to multiple threads, this is the main reason for a deadlock condition. It normally happens when you give locks to multiple threads.
Avoid Unnecessary Locks: The locks should be given to the important threads. Giving locks to the unnecessary threads that cause the deadlock condition.
Using Thread Join: A deadlock usually happens when one thread is waiting for the other to finish. In this case, we can use join with a maximum time that a thread will take.

The wait() method causes current thread to release the lock and wait until either another thread invokes the notify() method or the notifyAll() method for this object, or a specified amount of time has elapsed.

The current thread must own this object's monitor, so it must be called from the synchronized method only otherwise it will throw exception.

![image](https://github.com/user-attachments/assets/ae889b52-8c45-4e3e-860a-292c4cae5e8a)

## 2) notify() method
The notify() method wakes up a single thread that is waiting on this object's monitor. If any threads are waiting on this object, one of them is chosen to be awakened. The choice is arbitrary and occurs at the discretion of the implementation.

Syntax:

public final void notify()  
## 3) notifyAll() method
Wakes up all threads that are waiting on this object's monitor.

Syntax:

public final void notifyAll()  

Understanding the process of inter-thread communication

![image](https://github.com/user-attachments/assets/68139c97-a3a5-4ca1-b509-ef403c0f782a)

The point to point explanation of the above diagram is as follows:

Threads enter to acquire lock.
Lock is acquired by on thread.
Now thread goes to waiting state if you call wait() method on the object. Otherwise it releases the lock and exits.
If you call notify() or notifyAll() method, thread moves to the notified state (runnable state).
Now thread is available to acquire lock.
After completion of the task, thread releases the lock and exits the monitor state of the object.


# SPRING FRAMEWORK IN JAVA


## Programming Language vs. Framework

![image](https://github.com/user-attachments/assets/8d9420be-12aa-4b53-ac23-a9d7a95d9d58)

### Analogy

Programming Language: Like raw materials (wood, nails, tools) used to build a house.
Framework: Like a prefabricated house structure, where you just need to assemble parts according to a given structure.

# Spring Core Module - Overview

The Spring Core module is the foundation of the Spring Framework. It provides the essential features such as dependency injection (DI) and inversion of control (IoC), which allow for loosely coupled and easily testable applications.

## Key Features of Spring Core Module
### 1️⃣ Inversion of Control (IoC)

IoC is a design principle that helps manage object creation and dependency management.

Spring uses IoC containers to automatically create and inject dependencies.

### 2️⃣ Dependency Injection (DI)

DI is a mechanism that allows objects to get their dependencies from an external source rather than creating them manually.

It supports:

Constructor Injection
Setter Injection
Field Injection (via @Autowired annotation)

![image](https://github.com/user-attachments/assets/ce4ece05-67d0-4e07-9faf-5f60bd3d7f0b)

# Dependency Injection (DI) in Spring

## What is Dependency Injection?

Dependency Injection (DI) is a design pattern that allows an object’s dependencies to be injected from an external source rather than creating them internally. This promotes loose coupling, making the code easier to manage, test, and maintain.

### Types of Dependency Injection in Spring

Spring supports three types of dependency injection:

1️⃣ Constructor Injection – Injects dependencies via a class constructor.

2️⃣ Setter Injection – Injects dependencies using setter methods.

3️⃣ Field Injection – Injects dependencies directly into fields using @Autowired.

## 1️⃣ Constructor Injection

Recommended for mandatory dependencies.

Ensures that the object is always created with all its required dependencies.

### Example of Constructor Injection

```
import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}
```
```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;

    @Autowired
    public Car(Engine engine) {  // Injecting Engine via Constructor
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
## 2️⃣ Setter Injection

Useful when dependencies are optional.
Allows modifying dependencies after object creation.

### Example of Setter Injection

```
import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}

```

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private Engine engine;

    @Autowired
    public void setEngine(Engine engine) {  // Injecting Engine via Setter
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
## 3️⃣ Field Injection (Using @Autowired)

Simplest but not recommended for complex applications.
Harder to test as dependencies are hidden.

### Example of Field Injection

```
import org.springframework.stereotype.Component;

@Component
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}
```
```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    @Autowired  // Injecting dependency directly into field
    private Engine engine;

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}


```
# Configuring Dependency Injection in Spring
## 1️⃣ XML-based Configuration (Old Approach)

```
<bean id="engine" class="com.example.Engine"/>
<bean id="car" class="com.example.Car">
    <constructor-arg ref="engine"/>
</bean>

```

## 2️⃣ Java-based Configuration (Recommended)
```
@Configuration
public class AppConfig {
    @Bean
    public Engine engine() {
        return new Engine();
    }

    @Bean
    public Car car() {
        return new Car(engine());
    }
}

```
## 3️⃣ Annotation-based Configuration (Modern Approach)
```
@ComponentScan("com.example")
@Configuration
public class AppConfig {
}
```
## Which DI Method Should You Use?
![image](https://github.com/user-attachments/assets/0329c3af-e3d2-46da-96bb-2736a3d23ca0)

## Advantages of Dependency Injection

✅ Loose Coupling – Classes are not tightly dependent on each other.
✅ Better Testability – Dependencies can be easily mocked.
✅ Easier Maintenance – Dependencies can be changed without modifying the core logic.
✅ Improved Code Readability – Follows SOLID principles, making code more maintainable

## Example: Running Dependency Injection in a Spring Boot Application
```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Car car = context.getBean(Car.class);
        car.drive();
    }
}
```
### Conclusion
Constructor Injection is preferred for mandatory dependencies.
Setter Injection is good for optional dependencies.
Field Injection is simple but should be avoided in large applications.

#  Inversion of Control (IoC) in Spring

## What is Inversion of Control (IoC)?

Inversion of Control (IoC) is a design principle in which the control of object creation and dependency management is transferred from the developer to the Spring IoC container.

## Traditional Approach (Without IoC)
Before IoC, we manually created objects using the new keyword, which resulted in tightly coupled code.

```
public class Car {
    private Engine engine;

    public Car() {
        this.engine = new Engine();  // Tight coupling
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
### 🔴 Problem: 
The Car class is directly responsible for creating the Engine object, making it hard to test and maintain.

## How Spring Uses IoC?
With IoC, we let Spring manage object creation and dependencies, leading to loosely coupled code.

## IoC in Action (Spring Example)

## Step 1: Define Components
```
import org.springframework.stereotype.Component;

@Component  // Marks this as a Spring-managed bean
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}

```

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;

    @Autowired  // IoC - Spring injects the dependency
    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
## Step 2: Use Application Context

```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Car car = context.getBean(Car.class);
        car.drive();
    }
}
```
✅ Spring IoC Container automatically creates Car and Engine objects and injects dependencies.

# ApplicationContext in Spring

## What is ApplicationContext?

ApplicationContext is an advanced IoC (Inversion of Control) container in Spring that manages beans, their lifecycle, and dependency injection. It is an extension of BeanFactory with additional features like event handling, internationalization, and environment management.

## Why Use ApplicationContext?
🔹 Manages Spring Beans: Automatically creates and injects dependencies.
🔹 Supports Bean Life Cycle: Calls initialization and destruction methods.
🔹 Provides More Features: Event propagation, annotation processing, etc.

## Types of ApplicationContext Implementations
Spring provides different implementations of ApplicationContext:

![image](https://github.com/user-attachments/assets/f6f27bb4-d747-4cb7-a70d-ae064d3a448f)

## Which ApplicationContext Should You Use?

![image](https://github.com/user-attachments/assets/91e28e7a-6818-4ba2-a490-ea83f701bf10)

# How Does IoC Work in Spring?

Spring provides IoC Containers to manage dependencies:

## 1️⃣ BeanFactory (Lightweight)

Basic IoC container.
Suitable for simple applications.
Example:
```
BeanFactory factory = new ClassPathXmlApplicationContext("beans.xml");
Car car = factory.getBean(Car.class);
```
# BeanFactory in Spring 

## What is BeanFactory?

BeanFactory is the core IoC (Inversion of Control) container in Spring, responsible for creating and managing Spring beans. It is a lightweight container that lazily loads beans, meaning objects are created only when needed.

### BeanFactory vs ApplicationContext

![image](https://github.com/user-attachments/assets/9b8453b7-6ab4-4fc9-89ea-feaa6ee062f1)

## How to Use BeanFactory?
### 1️⃣ XML-Based Configuration (Using ClassPathXmlApplicationContext)
Step 1: Define Beans in beans.xml

```
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="engine" class="com.example.Engine"/>
    <bean id="car" class="com.example.Car">
        <constructor-arg ref="engine"/>
    </bean>
</beans>


```

## Step 2: Java Code Using BeanFactory

```
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.core.io.ClassPathResource;

public class MainApp {
    public static void main(String[] args) {
        BeanFactory factory = new XmlBeanFactory(new ClassPathResource("beans.xml"));

        Car car = (Car) factory.getBean("car");
        car.drive();
    }
}
```
✅ Spring will create Car and inject Engine only when getBean("car") is called.

## Why Is BeanFactory Less Common Today?
Since Spring 3.0, BeanFactory is mostly replaced by ApplicationContext.
ApplicationContext provides more features like:
Event handling (publishEvent)
Internationalization support (getMessage)
Better integration with Spring Boot.

### When Should You Use BeanFactory?
✔ When memory efficiency is crucial (e.g., IoT devices, mobile apps).
✔ When using simple dependency injection without extra features.
✔ When needing lazy loading of beans for performance optimization.

For modern Spring applications, ApplicationContext is the preferred option.

## 2️⃣ ApplicationContext (Advanced)

Provides additional features like event handling, internationalization, and environment management.

Common implementations:
ClassPathXmlApplicationContext
AnnotationConfigApplicationContext
FileSystemXmlApplicationContext

```
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
Car car = context.getBean(Car.class);
```
## Benefits of IoC
✅ Loose Coupling – Improves flexibility and maintainability.
✅ Better Testability – Dependencies can be easily mocked.
✅ Easier Configuration – Supports both XML and Java-based configurations.
✅ Improved Code Readability – Reduces clutter and boilerplate code.

# Annonation Config
# Spring Configuration Classes (@Configuration in Spring)

## What are Configuration Classes in Spring?
Spring Configuration Classes use the @Configuration annotation to define beans instead of XML files. These classes act as Java-based configuration replacements for beans.xml.

✅ Benefits of Configuration Classes:
✔ No need for XML (beans.xml).
✔ Type-safe and easier to maintain.
✔ Fully supports Dependency Injection.

## How to Use @Configuration?

## 1️⃣ Create a Java Configuration Class (@Configuration)

```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration  // Marks this as a configuration class
public class AppConfig {

    @Bean  // Defines a bean named "engine"
    public Engine engine() {
        return new Engine();
    }

    @Bean  // Defines a bean named "car"
    public Car car() {
        return new Car(engine()); // Injecting dependency manually
    }
}
```
## 2️⃣ Define the Dependent Classes

```
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}

public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
## 3️⃣ Load the Configuration in MainApp

```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Car car = context.getBean(Car.class);
        car.drive();
    }
}
```
✅ Spring will automatically create and inject Engine into Car!


# Component Class 
# Alternative: Using @Component Instead of @Bean

Instead of manually defining beans in @Configuration, you can use @Component along with @ComponentScan.

## 1️⃣ Use @Component for Auto-Detection

```
import org.springframework.stereotype.Component;

@Component  // Automatically registers this bean
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}

@Component
public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```
## 2️⃣ Create a @Configuration Class with @ComponentScan

```
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example")  // Scans the package for @Component classes
public class AppConfig {
}
```

## 3️⃣ Load Configuration in MainApp

```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        Car car = context.getBean(Car.class);
        car.drive();
    }
}
```

✅ Spring will automatically detect @Component classes and manage dependencies.

## Key Differences: @Bean vs @Component

![image](https://github.com/user-attachments/assets/9cf11ea8-3ee1-4037-9d61-d204b00f02fb)

## When to Use @Configuration?
✔ When you want fully Java-based configuration (no XML).
✔ When integrating third-party libraries (e.g., DataSource, RestTemplate).
✔ When using complex bean initialization logic.


# @ComponentScan in Spring

## What is @ComponentScan?

@ComponentScan is a Spring annotation used to automatically detect and register Spring beans (classes annotated with @Component, @Service, @Repository, or @Controller).

🔹 Instead of defining beans manually in @Configuration with @Bean, @ComponentScan scans a package and registers all components automatically.

## How @ComponentScan Works?
It tells Spring which package(s) to scan for components.
It finds classes with stereotype annotations (@Component, @Service, @Repository, @Controller) and registers them as beans.

# Example: Using @ComponentScan
## 1️⃣ Create Component Classes
Engine.java
```
import org.springframework.stereotype.Component;

@Component  // Marks this class as a Spring-managed bean
public class Engine {
    public void start() {
        System.out.println("Engine started...");
    }
}
```

Car.java
```
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;

    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```

## 2️⃣ Create Configuration Class
AppConfig.java
```
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@ComponentScan("com.example")  // Scans the package "com.example" for components
public class AppConfig {
}
```
🔹 Spring will scan com.example and automatically register Engine and Car beans.

## 3️⃣ Load the Context in MainApp
MainApp.java

```
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainApp {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);

        Car car = context.getBean(Car.class);
        car.drive();
    }
}
```
✅ Spring automatically detects and injects dependencies without @Bean methods!

## How Does @ComponentScan Work Internally?

1️⃣ Spring searches for classes in the specified package (com.example).
2️⃣ It registers all classes annotated with @Component, @Service, @Repository, or @Controller.
3️⃣ Spring injects dependencies automatically using @Autowired.

# Different Ways to Use @ComponentScan
## 1️⃣ Scan a Specific Package (Recommended)

```
@ComponentScan("com.example.services")
```
✅ Only scans com.example.services package.

## 2️⃣ Scan Multiple Packages

```
@ComponentScan({"com.example.services", "com.example.repositories"})
```

✅ Scans the package where the class is defined.

## 4️⃣ Use basePackages Attribute

```
@ComponentScan(basePackages = "com.example")
```

✅ Same as @ComponentScan("com.example").

When to Use @ComponentScan?

✔ If you use @Component, @Service, @Repository, @Controller.
✔ If you want automatic bean detection (no need to define @Bean manually).
✔ If you have a large project with multiple packages.

## Key Differences: @ComponentScan vs @Bean

![image](https://github.com/user-attachments/assets/ad61128f-7d27-4f5f-b3cf-b566e2429516)


![image](https://github.com/user-attachments/assets/d64c70f0-cb2f-4bcf-9f87-f1a6039be283)

## 1️⃣ Field/Property Level Injection (@Autowired on Field)

Directly injects dependencies into fields.
Avoided in modern applications due to difficulty in unit testing.
Example

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {

    @Autowired  // Field injection (not recommended)
    private Engine engine;

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```

🔹 Drawback: Cannot be tested easily (cannot mock engine in unit tests).

## 2️⃣ Setter Injection (@Autowired on Setter Method)

Provides more flexibility and allows unit testing.
```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {

    private Engine engine;

    @Autowired  // Setter Injection
    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```

✅ Better than field injection because it allows mocking engine in tests.

## 3️⃣ Constructor Injection (@Autowired on Constructor)

Recommended approach (Spring 4.3+ automatically injects dependencies).
Ensures mandatory dependencies.

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {

    private final Engine engine;

    @Autowired  // Constructor Injection (Recommended)
    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```
### ✅ Best approach because:

It ensures immutability (final fields).
Makes unit testing easy (no need for reflection or setters).

## Comparison Table
![image](https://github.com/user-attachments/assets/0831f1cb-84ce-4453-bb11-6fa442533d32)

### Final Recommendation
✔ Use Constructor Injection for required dependencies.
✔ Use Setter Injection for optional dependencies.
✔ Avoid Field Injection unless absolutely necessary.

![image](https://github.com/user-attachments/assets/6d5834a4-c1cc-4069-b872-0ceffb989f0b)

![image](https://github.com/user-attachments/assets/832359c4-99c5-4d2c-aece-875bf27be354)

# @Autowired in Spring
## What is @Autowired?
@Autowired is a Spring annotation used for dependency injection. It allows Spring to automatically inject beans without manually instantiating them.

## How @Autowired Works?
Spring scans the ApplicationContext, finds the required bean, and injects it automatically.

@Autowired can be applied to fields, constructors, or setter methods.
If multiple beans exist, use @Qualifier to specify which one to inject.

# Types of Injection Using @Autowired

## 1️⃣ Field Injection (@Autowired on Fields) ❌ (Not Recommended)

Directly injects a dependency into a field.

🔴 Not recommended because it's hard to unit test (you can't mock the dependency easily).

# What If There Are Multiple Beans? (@Qualifier)
If multiple beans exist, use @Qualifier to specify which one to inject.

Example

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Car {

    private final Engine engine;

    @Autowired
    public Car(@Qualifier("dieselEngine") Engine engine) {  // Choosing "dieselEngine" bean
        this.engine = engine;
    }
}
```
# @Qualifier in Spring (Handling Multiple Beans)

## What is @Qualifier?
@Qualifier is a Spring annotation used when multiple beans of the same type exist in the Spring container. It helps Spring decide which specific bean to inject when @Autowired is used.

By default, Spring throws an error if multiple beans of the same type exist and @Qualifier is not used.

## Why Do We Need @Qualifier?
Imagine we have two beans of type Engine:

1. PetrolEngine
2. DieselEngine
   
If we use @Autowired without @Qualifier, Spring won’t know which bean to inject and will throw an ambiguous dependency error.

## Example Without @Qualifier (Error Scenario)
Define Multiple Beans
```
import org.springframework.stereotype.Component;

@Component
public class PetrolEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Petrol Engine started...");
    }
}

@Component
public class DieselEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Diesel Engine started...");
    }
}
```

## Autowired Without @Qualifier (Ambiguous Dependency Error)

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;

    @Autowired  // ERROR: Multiple beans of type Engine exist
    public Car(Engine engine) {
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}

```
## ❌ Spring Error:
```
No qualifying bean of type 'Engine' available: expected single matching bean but found 2: petrolEngine,dieselEngine
```

## Solution: Use @Qualifier to Specify the Bean
We explicitly tell Spring which bean to inject by using @Qualifier("beanName").

### Fix the Issue Using @Qualifier

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Car {
    private final Engine engine;

    @Autowired
    public Car(@Qualifier("dieselEngine") Engine engine) {  // Selecting DieselEngine
        this.engine = engine;
    }

    public void drive() {
        engine.start();
        System.out.println("Car is moving...");
    }
}
```

✅ Now Spring injects DieselEngine without any ambiguity.

### How Does @Qualifier Work Internally?

Spring scans all beans of the required type (Engine).
It checks the bean names registered in the Spring container.
If @Qualifier("dieselEngine") is present, it injects only that bean

## Alternative: Custom Bean Names with @Component
By default, the bean name is the class name in lowercase (petrolEngine, dieselEngine).
We can change the bean name using @Component("customBeanName").

### Example: Define Custom Bean Names
```
@Component("petrol")  // Custom bean name
public class PetrolEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Petrol Engine started...");
    }
}

@Component("diesel")  // Custom bean name
public class DieselEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Diesel Engine started...");
    }
}

```
## Use @Qualifier with Custom Bean Name

```
@Autowired
public Car(@Qualifier("diesel") Engine engine) {  // Using "diesel" instead of "dieselEngine"
    this.engine = engine;
}
```

✅ Spring now injects DieselEngine based on the custom name.

## Using @Primary Instead of @Qualifier
If you want a default bean to be injected without using @Qualifier, use @Primary.

### Example: Mark One Bean as @Primary

```
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Primary  // Makes this the default bean
@Component
public class PetrolEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Petrol Engine started...");
    }
}

@Component
public class DieselEngine implements Engine {
    @Override
    public void start() {
        System.out.println("Diesel Engine started...");
    }
}
```
### Now, No Need for @Qualifier

```
@Autowired  // Injects PetrolEngine by default
private Engine engine;

```

✅ If multiple beans exist, Spring injects PetrolEngine because it is marked as @Primary.

## Using @Qualifier in Setter Injection

```
@Autowired
public void setEngine(@Qualifier("dieselEngine") Engine engine) {
    this.engine = engine;
}
```
# Using @Qualifier in Field Injection
```
@Autowired
@Qualifier("petrolEngine")  // Selecting PetrolEngine
private Engine engine;

```
## Final Best Practices

![image](https://github.com/user-attachments/assets/9ededd29-7757-4f25-a8d9-3b3f004f0d4b)

## Summary
✔ Use @Qualifier when multiple beans exist to select the right one.
✔ Use @Primary when a bean should be injected by default.
✔ Use custom bean names for better clarity.


![image](https://github.com/user-attachments/assets/57de116c-4857-4f11-a637-773ae8039c10)

![image](https://github.com/user-attachments/assets/9908e6c6-3dd0-4627-b30c-040e2c3f7ebb)

![image](https://github.com/user-attachments/assets/93e2b5d1-1ee6-49c8-b6e0-9894b67b4239)

![image](https://github.com/user-attachments/assets/97877e30-6cfe-4113-bb41-beef41a8188e)

![image](https://github.com/user-attachments/assets/354ffa57-be4c-49d7-a459-3fcce0147aeb)

# Spring Bean Scopes

What is a Bean Scope?

A Bean Scope defines how and when a Spring Bean is created and how long it lives in the Spring Container.

## Types of Bean Scopes in Spring
Spring provides 5 core scopes, but only two are commonly used:

1. Singleton (Default)
2. Prototype
3. Request (For Web Applications)
4. Session (For Web Applications)
5. Application (For Web Applications)

## 1️⃣ Singleton Scope (Default)

Only one instance per Spring container (shared across the application).
Best for stateless beans (e.g., service classes).
Default scope in Spring (no need to explicitly define).

```
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")  // Optional since Singleton is default
public class SingletonBean {
    public SingletonBean() {
        System.out.println("SingletonBean Instance Created");
    }
}
```

### Behavior

```
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
SingletonBean bean1 = context.getBean(SingletonBean.class);
SingletonBean bean2 = context.getBean(SingletonBean.class);

System.out.println(bean1 == bean2);  // Output: true (Same instance)
```
✅ Best for: Services, controllers, and repositories.

## 2️⃣ Prototype Scope

Creates a new instance every time getBean() is called.

Best for stateful beans or objects that need to be modified independently.

```
@Component
@Scope("prototype")  // New instance each time
public class PrototypeBean {
    public PrototypeBean() {
        System.out.println("PrototypeBean Instance Created");
    }
}
```

### Behaviour

```
ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
PrototypeBean bean1 = context.getBean(PrototypeBean.class);
PrototypeBean bean2 = context.getBean(PrototypeBean.class);

System.out.println(bean1 == bean2);  // Output: false (Different instances)
```
✅ Best for: Stateful objects like user preferences, session-based data.

## 3️⃣ Request Scope (For Web Applications)

Creates a new instance for each HTTP request.
Used in Web Applications (Spring MVC).

```
@Component
@Scope("request")
public class RequestBean {
    public RequestBean() {
        System.out.println("RequestBean Instance Created");
    }
}
```
🔹 Each HTTP request gets a new instance of RequestBean.

✅ Best for: Request-specific data like request tracking or security context.

## 4️⃣ Session Scope (For Web Applications)

Creates a new instance for each HTTP session.
Bean lives as long as the session is active.

```
@Component
@Scope("session")
public class SessionBean {
    public SessionBean() {
        System.out.println("SessionBean Instance Created");
    }
}
```
🔹 Each user session gets its own instance.

✅ Best for: User session data like shopping carts.

## 5️⃣ Application Scope (For Web Applications)

Creates a single instance per ServletContext (entire web application).
Similar to Singleton but tied to the Web Application.

```
@Component
@Scope("application")
public class ApplicationBean {
    public ApplicationBean() {
        System.out.println("ApplicationBean Instance Created");
    }
}
```
🔹 One instance shared across all users in the application.

✅ Best for: Caching global data, configurations.

## Comparing Bean Scopes
![image](https://github.com/user-attachments/assets/f18aa4ce-8289-45ed-9cb1-ed81d561348a)

## Singleton vs. Prototype: When to Use?
![image](https://github.com/user-attachments/assets/c0aa3ff0-8481-46d0-9f7a-1b003b8f45d3)

## Key Takeaways
✔ Singleton is the default scope (recommended for most cases).
✔ Prototype is useful for independent objects (not shared).
✔ Request, Session, and Application scopes are for web applications.
✔ Prototype beans are not managed like Singleton beans (Spring does not destroy them).

![image](https://github.com/user-attachments/assets/dd142dcc-081a-4bdd-a1f5-92d93870b276)

![image](https://github.com/user-attachments/assets/32dd729e-ce39-49a3-ae6e-dd3b36e41dc7)

![image](https://github.com/user-attachments/assets/5ce35e2c-cb35-46ba-beee-95841b5bc775)

![image](https://github.com/user-attachments/assets/2addff0d-9877-4cbe-a324-2e4c06514fdf)

![image](https://github.com/user-attachments/assets/7d51db09-ef9f-49ce-bf2f-480ebc9ef449)

![image](https://github.com/user-attachments/assets/6231bb7d-b45e-4106-a4c0-4fb3ec55f6d3)

![image](https://github.com/user-attachments/assets/2994e531-f4f1-4657-aeec-0e1cf1db0d6f)

# Autowiring Modes in Spring

Autowiring in Spring automatically injects dependencies into a bean without explicitly specifying them in the XML configuration or constructor.

## Types of Autowiring Modes in Spring

### Spring provides five autowiring modes:

1️⃣ No Autowiring (no) (Default mode)
2️⃣ By Type (byType)
3️⃣ By Name (byName)
4️⃣ Constructor (constructor)
5️⃣ Autodetect (autodetect) (Deprecated in Spring 3.0)

## 1️⃣ no (Default Mode)

No autowiring is performed.
Dependencies must be explicitly defined in XML or Java configuration.
Example: Manual Dependency Injection (No Autowiring)
```
<bean id="engine" class="com.example.Engine" />
<bean id="car" class="com.example.Car">
    <property name="engine" ref="engine" />
</bean>
```
✔ Best for: Full manual control over dependencies.

## 2️⃣ byType (Autowiring by Type)

Spring matches the property type and injects a bean of the same type.
If multiple beans of the same type exist, it throws an error.

```
<bean id="engine" class="com.example.Engine" />
<bean id="car" class="com.example.Car" autowire="byType" />
```

### Equivalent Java Code
```
@Component
public class Car {
    @Autowired  // By Type
    private Engine engine;
}
```
✔ Best for: Unique types (e.g., a single Engine bean).
❌ Issue: Fails if multiple beans of the same type exist.

## 3️⃣ byName (Autowiring by Property Name)

Spring matches the property name with a bean ID and injects it.
If no matching bean name is found, it fails.

```
<bean id="engine" class="com.example.Engine" />
<bean id="car" class="com.example.Car" autowire="byName" />
```
🔹 The bean ID (engine) matches the Car class property engine.

### Equivalent Java Code

```
@Component
public class Car {
    @Autowired
    @Qualifier("engine")  // By Name
    private Engine engine;
}
```
✔ Best for: Cases where bean names are meaningful.
❌ Issue: Requires bean names to match property names.

## 4️⃣ constructor (Autowiring by Constructor)

Injects dependencies via constructor arguments.
If multiple beans of the same type exist, it throws an error.

```
<bean id="engine" class="com.example.Engine" />
<bean id="car" class="com.example.Car" autowire="constructor" />
```
### Equivalent Java Code
```
@Component
public class Car {
    private final Engine engine;

    @Autowired
    public Car(Engine engine) {  // Constructor Injection
        this.engine = engine;
    }
}

```

## 5️⃣ autodetect (Deprecated in Spring 3.0)

Spring first tries constructor autowiring, then falls back to byType if no constructor is found.
Deprecated because constructor and byType are preferred

## Comparison of Autowiring Modes
![image](https://github.com/user-attachments/assets/c84e1b61-0566-403c-964f-38cf3462577c)

## Best Practices for Autowiring

✔ Use @Autowired over XML-based autowiring.
✔ Use @Qualifier if multiple beans of the same type exist.
✔ Use Constructor Injection for mandatory dependencies.
✔ Use Setter/Field Injection for optional dependencies.



![image](https://github.com/user-attachments/assets/dbaefb0d-6915-4ea0-95a2-701be5f31d44)

# SPRING BOOT

## Introduction to Spring Boot

Spring Boot is a framework built on top of the Spring Framework that simplifies the process of developing Java-based web applications and microservices. It eliminates boilerplate configurations and provides built-in features for rapid development.

## Why Spring Boot?

1. Simplifies Development – Provides auto-configuration and minimizes the need for XML configuration.

3. Standalone Applications – Can run without external servers like Tomcat or Jetty.
 
5. Microservices-Friendly – Ideal for developing microservices-based architectures.
 
7. Production-Ready – Includes built-in metrics, health checks, and logging support.
   
9. Embedded Servers – Comes with embedded Tomcat, Jetty, or Undertow, so no need to deploy separately.

## Key Features of Spring Boot

1. Spring Boot Starters – Predefined dependencies to simplify project setup.
   
3. Spring Boot Auto-Configuration – Automatically configures Spring components based on dependencies.
   
5. Spring Boot CLI – Allows running Spring Boot applications using command-line scripts.

7. Spring Boot Actuator – Provides monitoring and management features.
 
9. Spring Boot DevTools – Enables hot-reloading for faster development.

## Spring Boot Architecture

### Spring Boot follows a layered architecture:

1. Presentation Layer – Handles HTTP requests (Controller classes).

2. Service Layer – Contains business logic.

3. Repository Layer (Persistence Layer) – Interacts with the database.

4. Database Layer – Stores application data.

## Conclusion

Spring Boot makes Java application development faster and easier by providing built-in tools, reducing configuration, and enabling microservices-based development. It is widely used for building modern web applications and cloud-based services.

# Difference Between Spring and Spring Boot

![image](https://github.com/user-attachments/assets/245a471c-7ac1-40d1-bb9b-b09f97534305)

Use Spring Framework when you need full control over configurations and prefer a modular approach.

Use Spring Boot when you want to develop applications quickly with minimal setup and built-in features like auto-configuration and embedded servers.

## Starters In Spring Boot:  

### What Are Spring Boot Starters?

Spring Boot Starters are a set of pre-configured dependencies that simplify project setup. They provide the necessary libraries and configurations for various functionalities, reducing boilerplate code and dependency management efforts.

### Key Features of Spring Boot Starters

Auto-Configures Dependencies – Automatically includes required dependencies.

Reduces Boilerplate Code – No need to manually configure each dependency.

Simplifies Project Setup – Just add the required starter dependency in pom.xml.

Maintained by Spring – Ensures compatibility between dependencies.

### Commonly Used Spring Boot Starters

![image](https://github.com/user-attachments/assets/80581a47-3328-44b9-ade8-214d6e1df504)

### How to Use a Spring Boot Starter?
To use a Spring Boot Starter, simply add it to your pom.xml (for Maven projects):

Example: Adding Spring Boot Web Starter

```
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

### For Gradle :

```
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
}
```
This automatically includes all required dependencies for a Spring MVC web application, including Spring Web, Jackson, and an embedded Tomcat server.

### Conclusion
Spring Boot Starters make project setup fast and hassle-free by providing pre-configured dependency bundles. They help developers focus on business logic instead of manually managing dependencies.

 # @Value Annotation in Spring Boot

 The @Value annotation in Spring Boot is used to inject values into fields from properties files, system properties, environment variables, or inline values. It is commonly used for configuration management.

 ## 1. Injecting Values from application.properties

 You can use @Value to inject values from the application.properties or application.yml file.

### Example: application.properties

```
app.name=Spring Boot Application
app.version=1.0.0
```

### Example: Using @Value in Java Class

```
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppConfig {

    @Value("${app.name}")
    private String appName;

    @Value("${app.version}")
    private String appVersion;

    public void printAppDetails() {
        System.out.println("App Name: " + appName);
        System.out.println("App Version: " + appVersion);
    }
}

```
## 2. Injecting Default Values
If the property is missing, you can specify a default value using the : operator.

### Example: Using Default Values

```
@Value("${app.description:Default Description}")
private String appDescription;
```

If app.description is not present in application.properties, it will default to "Default Description".

## 3. Injecting System Properties & Environment Variables

@Value can also fetch values from system properties and environment variables.

### Example: Injecting System Property
```
@Value("${user.home}")
private String userHome;
```

This will inject the user's home directory path.

### Example: Injecting Environment Variable

```
@Value("${JAVA_HOME}")
private String javaHome;
```
This will inject the value of the JAVA_HOME environment variable.

## 4. Injecting Lists and Arrays
@Value can be used to inject lists and arrays from comma-separated values.

### Example: application.properties
```
app.supported-languages=English,Spanish,French
```

### Example: Injecting List
```
@Value("${app.supported-languages}")
private String[] languages;
```
## 5. Using @Value with SpEL (Spring Expression Language)

Spring Expression Language (SpEL) can be used to perform operations inside @Value.

### Example: Concatenation
```
@Value("Hello, ${app.name}!")
private String welcomeMessage;
```
### Example: Mathematical Operations
```
@Value("#{10 + 20}")
private int sum;  // sum = 30
```

## 6. Using @Value in Constructor Injection

You can inject values directly into the constructor.

```
@Component
public class AppConfig {

    private final String appName;

    public AppConfig(@Value("${app.name}") String appName) {
        this.appName = appName;
    }
}
```

## Conclusion

@Value is useful for injecting configuration properties.

Supports default values, environment variables, system properties, and SpEL expressions.

Works with fields, method parameters, and constructor injection.

# @Order Annotation in Spring Boot

## What is @Order Annotation?

The @Order annotation in Spring Boot is used to define the execution priority of components like beans, filters, aspects, and event listeners. A lower value means higher priority (i.e., @Order(1) runs before @Order(2)).

## Where Can We Use @Order?

Spring Beans – To specify the order of execution in a collection of beans.

Spring Security Filters – To determine the order of security filters.

Aspect-Oriented Programming (AOP) – To set execution priority for aspects.

Event Listeners – To control the order of event processing.

## 1️⃣ Using @Order with Spring Beans

When multiple beans implement the same interface, @Order controls which one gets selected first.

```
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

interface MyService {
    void execute();
}

@Component
@Order(2)
class ServiceA implements MyService {
    public void execute() {
        System.out.println("Executing Service A");
    }
}

@Component
@Order(1) // This will execute first
class ServiceB implements MyService {
    public void execute() {
        System.out.println("Executing Service B");
    }
}
```
### Testing in a Runner
```
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.List;

@Component
public class OrderDemoRunner implements CommandLineRunner {
    private final List<MyService> services;

    public OrderDemoRunner(List<MyService> services) {
        this.services = services;
    }

    @Override
    public void run(String... args) {
        services.forEach(MyService::execute);
    }
}
```
### Expected Output
```
Executing Service B
Executing Service A

```
Since ServiceB has @Order(1), it executes before ServiceA (@Order(2)).

## 2️⃣ Using @Order in Spring Security Filters

In Spring Security, filters execute in a specific order. You can use @Order to define priority.

```
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import javax.servlet.*;
import java.io.IOException;

@Component
@Order(1) // This filter will execute first
public class FirstFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("First Filter Executed");
        chain.doFilter(request, response);
    }
}

@Component
@Order(2) // This filter will execute after FirstFilter
public class SecondFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        System.out.println("Second Filter Executed");
        chain.doFilter(request, response);
    }
}
```
### Expected Output (When hitting any API)
```
First Filter Executed
Second Filter Executed
```
Since FirstFilter has @Order(1), it runs before SecondFilter (@Order(2)).

## 3️⃣ Using @Order in AOP (Aspect-Oriented Programming)

In Spring AOP, you can apply @Order to aspects to control their execution order.

```
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Order(2)
class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void logBefore() {
        System.out.println("Logging Aspect Executed");
    }
}

@Aspect
@Component
@Order(1) // This will execute before LoggingAspect
class SecurityAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void securityCheck() {
        System.out.println("Security Check Aspect Executed");
    }
}
```
### Expected Output

```
Security Check Aspect Executed
Logging Aspect Executed
```
Since SecurityAspect has @Order(1), it executes before LoggingAspect (@Order(2)).

## 4️⃣ Using @Order in Event Listeners

If multiple listeners handle the same event, @Order determines the order of execution.
```
import org.springframework.context.event.EventListener;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

@Component
public class EventListeners {

    @EventListener
    @Order(2)
    public void handleEventSecond(String event) {
        System.out.println("Handling Event in Second Listener: " + event);
    }

    @EventListener
    @Order(1) // Executes first
    public void handleEventFirst(String event) {
        System.out.println("Handling Event in First Listener: " + event);
    }
}
```
### Publishing an Event
```
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
public class EventPublisher implements CommandLineRunner {
    private final ApplicationEventPublisher eventPublisher;

    public EventPublisher(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    @Override
    public void run(String... args) {
        eventPublisher.publishEvent("Custom Event Triggered!");
    }
}
```
### Expected Output
```
Handling Event in First Listener: Custom Event Triggered!
Handling Event in Second Listener: Custom Event Triggered!
```
Since handleEventFirst has @Order(1), it executes before handleEventSecond (@Order(2)).

## 🔹 Summary
![image](https://github.com/user-attachments/assets/4ab1ff93-6e31-416b-847e-14b530622d8d)

## Conclusion

Lower @Order value = Higher priority execution (@Order(1) runs before @Order(2)).

Useful in Beans, Security, AOP, and Event Handling.

Makes Spring Boot applications more predictable and structured.

# Runners in Spring Boot (CommandLineRunner & ApplicationRunner)

## What are Runners in Spring Boot?

Spring Boot provides two interfaces, CommandLineRunner and ApplicationRunner, to execute code after the Spring application context is initialized. These are useful for:

✅ Running startup logic

✅ Initializing data

✅ Performing post-initialization tasks

✅ Running background tasks

## Types of Runners in Spring Boot

1️⃣ CommandLineRunner → Runs with raw command-line arguments (String array).

2️⃣ ApplicationRunner → Provides additional parsing via ApplicationArguments.

## 1️⃣ CommandLineRunner Example

Executes code after the Spring Boot application starts.

### Example: Running Startup Logic

```
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MyCommandLineRunner implements CommandLineRunner {
    @Override
    public void run(String... args) throws Exception {
        System.out.println("Application started with CommandLineRunner");
        for (String arg : args) {
            System.out.println("Arg: " + arg);
        }
    }
}
```
### Running the Application with Arguments
```
mvn spring-boot:run --spring-boot.run.arguments=arg1,arg2,arg3
```
### Expected Output
```
Application started with CommandLineRunner
Arg: arg1
Arg: arg2
Arg: arg3
```
## 2️⃣ ApplicationRunner Example

Provides better argument handling via ApplicationArguments.

### Example: Parsing Arguments

```
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class MyApplicationRunner implements ApplicationRunner {
    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("Application started with ApplicationRunner");

        System.out.println("Non-Option Arguments: " + args.getNonOptionArgs());
        System.out.println("Option Names: " + args.getOptionNames());

        for (String name : args.getOptionNames()) {
            System.out.println("Option " + name + ": " + args.getOptionValues(name));
        }
    }
}
```
### Running the Application with Named Arguments
```
mvn spring-boot:run --spring-boot.run.arguments="--mode=dev --debug=true file.txt"
```

### Expected Output
```
Application started with ApplicationRunner
Non-Option Arguments: [file.txt]
Option Names: [mode, debug]
Option mode: [dev]
Option debug: [true]
```
## Difference Between CommandLineRunner & ApplicationRunner

![image](https://github.com/user-attachments/assets/7deac62b-a2af-4fff-bc61-585397726a19)

## 3️⃣ Running Multiple Runners with @Order

If multiple runners exist, use @Order to control execution priority.

```
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;

@Component
@Order(2) // Runs second
public class SecondRunner implements CommandLineRunner {
    @Override
    public void run(String... args) {
        System.out.println("Second Runner Executed");
    }
}

@Component
@Order(1) // Runs first
public class FirstRunner implements CommandLineRunner {
    @Override
    public void run(String... args) {
        System.out.println("First Runner Executed");
    }
}
```
### Expected Output
```
First Runner Executed
Second Runner Executed
```
## 4️⃣ Using Runners in SpringApplication.run()

Instead of creating @Component runners, you can define them in SpringApplication.run().

```
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args).getBean(CommandLineRunner.class).run(args);
    }

    public CommandLineRunner runner() {
        return args -> System.out.println("Runner inside SpringApplication.run()");
    }
}

```
## 5️⃣ Disabling Runners
If you want to disable runners for testing, use Spring Profiles.

### Example: Disable in application.properties
```
spring.main.banner-mode=off
spring.main.lazy-initialization=true
```

OR
### Annotate the runner with a profile:

```
@Component
@Profile("!test") // Runs only if profile is NOT 'test'
public class MyRunner implements CommandLineRunner {
    public void run(String... args) {
        System.out.println("Runner executed");
    }
}
```
## Conclusion

✅ CommandLineRunner → Good for simple command-line arguments

✅ ApplicationRunner → Better for advanced argument parsing

✅ Multiple Runners can be controlled using @Order

✅ Custom Runners can be created inside SpringApplication.run()

✅ Runners can be disabled using profiles

# Project Lombok in Spring Boot 🚀

## What is Lombok?

Project Lombok is a Java library that automates boilerplate code such as:

✅ Getters & Setters

✅ toString(), equals(), hashCode()

✅ Constructor generation

✅ Logging

✅ Thread safety

### 💡 Why use Lombok?

✔ Reduces boilerplate code

✔ Improves readability & maintainability

✔ Increases developer productivity

## 1️⃣ Adding Lombok to a Spring Boot Project

For Maven (pom.xml)
```
<dependencies>
    <!-- Lombok -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <scope>provided</scope>
    </dependency>
</dependencies>
```

## 2️⃣ Lombok Annotations & Example

✅ @Getter and @Setter

Generates getter and setter methods automatically.

```
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
public class User {
    private String name;
    private int age;
}
```
### Equivalent to:
```
public class User {
    private String name;
    private int age;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
}
```
### ✅ @ToString
Generates toString() method.
```
import lombok.ToString;

@ToString
public class User {
    private String name;
    private int age;
}
```
📌 Generated toString() Output:

```
User(name=John, age=25)
```
## ✅ @EqualsAndHashCode
Generates equals() and hashCode() methods.
```
import lombok.EqualsAndHashCode;

@EqualsAndHashCode
public class User {
    private String name;
    private int age;
}
```
## ✅ @NoArgsConstructor, @AllArgsConstructor, @RequiredArgsConstructor
Generates different types of constructors.
```
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@NoArgsConstructor      // Empty constructor
@AllArgsConstructor     // Constructor with all fields
@RequiredArgsConstructor // Constructor with final fields
public class User {
    private String name;
    private int age;
}
```
## ✅ @Data (Combination of multiple Lombok annotations)
@Data = @Getter + @Setter + @ToString + @EqualsAndHashCode + @RequiredArgsConstructor
```
import lombok.Data;

@Data
public class User {
    private String name;
    private int age;
}
```
## ✅ @Builder (Fluent Builder Pattern)
Generates a builder pattern for object creation.
```
import lombok.Builder;

@Builder
public class User {
    private String name;
    private int age;
}
```
### 📌 Usage:
```
User user = User.builder()
    .name("Alice")
    .age(30)
    .build();
```
## ✅ @Value (Immutable Class)
Creates an immutable class (like final fields).
```
import lombok.Value;

@Value
public class User {
    String name;
    int age;
}
```
### 📌 Effect:

❌ No setters

❌ All fields are final

## ✅ @Slf4j (Logging)
Provides a logger instance for logging.
```
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {
    public void process() {
        log.info("Processing user data...");
    }
}
```
### 📌 Generated logger usage:
```
private static final org.slf4j.Logger log = org.slf4j.LoggerFactory.getLogger(UserService.class);
```

## 3️⃣ Lombok in a Complete Spring Boot Project

### Controller Example

```
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    
    @GetMapping("/{name}")
    public User getUser(@PathVariable String name) {
        return new User(name, 25);
    }
}

@Data
@AllArgsConstructor
class User {
    private String name;
    private int age;
}
```
### 📌 Calling API (GET /users/John)
### 🔹 Response:
```
{
    "name": "John",
    "age": 25
}
```
## 4️⃣ Pros & Cons of Using Lombok

✅ Pros

✔ Reduces boilerplate code

✔ Increases code readability

✔ Saves development time

❌ Cons

⚠ IDE must support annotation processing

⚠ Debugging generated code can be tricky

## 5️⃣ Conclusion

Lombok simplifies getter/setter, constructors, toString, logging, and more.

Use @Data for full encapsulation, @Builder for object creation, and @Slf4j for logging.

Works great in Spring Boot applications.

# Spring Boot JDBC 🚀

## 1️⃣ Introduction to Spring Boot JDBC

Spring Boot provides JDBC (Java Database Connectivity) support to interact with relational databases like MySQL, PostgreSQL, Oracle, etc. using Spring JDBC API.

### ✅ Why use JDBC in Spring Boot?

✔️ Lightweight – Directly interacts with the database.

✔️ Easy Configuration – Uses Spring Boot’s application.properties.

✔️ Better Exception Handling – Converts SQLExceptions into DataAccessException.

✔️ Simplified Database Access – Uses JdbcTemplate for querying databases.

## 2️⃣ Add Dependencies

### For MySQL (pom.xml):
```
<dependencies>
    <!-- Spring Boot JDBC -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jdbc</artifactId>
    </dependency>

    <!-- MySQL Driver -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>
```

## 3️⃣ Configure Database Connection

Set database properties in src/main/resources/application.properties:
```
# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=root
spring.datasource.password=root

# Driver Class
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Connection Pool Settings (Optional)
spring.datasource.hikari.maximum-pool-size=10
spring.datasource.hikari.minimum-idle=2
spring.datasource.hikari.idle-timeout=30000
```
### Connection Pool Settings in Spring Boot (HikariCP)

Spring Boot automatically uses HikariCP as the default connection pool for databases. You can fine-tune its performance using application.properties.

## 1️⃣ Explanation of HikariCP Properties
![image](https://github.com/user-attachments/assets/1f014d9f-e258-49e5-bdd0-0be6d1707001)

## 2️⃣ Recommended HikariCP Configuration
```
# Database Connection (MySQL Example)
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# HikariCP Connection Pool Settings
spring.datasource.hikari.maximum-pool-size=10    # Max connections in the pool
spring.datasource.hikari.minimum-idle=2          # Min idle connections
spring.datasource.hikari.idle-timeout=30000      # Remove idle connections after 30 sec
spring.datasource.hikari.connection-timeout=20000 # Max wait time for a connection (20 sec)
spring.datasource.hikari.max-lifetime=1800000    # Max lifetime of a connection (30 min)
spring.datasource.hikari.auto-commit=true        # Auto-commit transactions
```
## 3️⃣ Why Use HikariCP?

🔹 Faster than Apache DBCP & Tomcat JDBC

🔹 Lower memory consumption

🔹 Better performance for high concurrency application

## 4️⃣ Monitor Connection Pool Usage

If you're using Spring Boot Actuator, enable metrics to monitor connection pool usage:
```
management.endpoint.metrics.enabled=true
management.endpoints.web.exposure.include=metrics
```
Then, check HikariCP metrics via:
👉 http://localhost:8080/actuator/metrics/hikaricp.connections

## 5️⃣ When to Tune Connection Pool Settings?

✅ High Traffic Apps – Increase maximum-pool-size.

✅ Slow Queries – Adjust connection-timeout.

✅ Frequent Idle Connections – Reduce idle-timeout.

## 4️⃣ Using JdbcTemplate in Spring Boot

Spring Boot provides JdbcTemplate to simplify database interactions.

### Step 1: Create Model Class
```
public class Employee {
    private int id;
    private String name;
    private String department;

    // Constructors
    public Employee() {}

    public Employee(int id, String name, String department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }

    // Getters & Setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }
}
```
## Step 2: Create Repository (JdbcTemplate)
```
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class EmployeeRepository {
    private final JdbcTemplate jdbcTemplate;

    // Constructor-based Dependency Injection
    public EmployeeRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Insert Data
    public int save(Employee employee) {
        String sql = "INSERT INTO employees (id, name, department) VALUES (?, ?, ?)";
        return jdbcTemplate.update(sql, employee.getId(), employee.getName(), employee.getDepartment());
    }

    // Get All Employees
    public List<Employee> findAll() {
        String sql = "SELECT * FROM employees";
        return jdbcTemplate.query(sql, employeeRowMapper());
    }

    // Find Employee by ID
    public Employee findById(int id) {
        String sql = "SELECT * FROM employees WHERE id = ?";
        return jdbcTemplate.queryForObject(sql, employeeRowMapper(), id);
    }

    // Delete Employee
    public int delete(int id) {
        String sql = "DELETE FROM employees WHERE id = ?";
        return jdbcTemplate.update(sql, id);
    }

    // RowMapper for Mapping ResultSet to Employee Object
    private RowMapper<Employee> employeeRowMapper() {
        return (rs, rowNum) -> new Employee(rs.getInt("id"), rs.getString("name"), rs.getString("department"));
    }
}
```
## RowMapper in Spring Boot JDBC 

### 1️⃣ What is RowMapper?

RowMapper is an interface in Spring JDBC that maps database rows (ResultSet) to Java objects. It is useful when fetching data using JdbcTemplate.

### ✅ Why use RowMapper?

✔ Converts ResultSet into Java objects.

✔ Avoids manual extraction of values from ResultSet.

✔ Simplifies database query result processing.

## Step 3: Create Service Layer

```
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee getEmployeeById(int id) {
        return employeeRepository.findById(id);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void saveEmployee(Employee employee) {
        employeeRepository.save(employee);
    }

    public void deleteEmployee(int id) {
        employeeRepository.delete(id);
    }
}
```
## Step 4: Create REST Controller
```
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable int id) {
        return employeeService.getEmployeeById(id);
    }

    @PostMapping
    public String addEmployee(@RequestBody Employee employee) {
        employeeService.saveEmployee(employee);
        return "Employee added successfully!";
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable int id) {
        employeeService.deleteEmployee(id);
        return "Employee deleted successfully!";
    }
}
```
## 5️⃣ Running & Testing the API

Start the Spring Boot application and test using Postman or cURL.

Add an Employee (POST /employees)

```
{
    "id": 101,
    "name": "John Doe",
    "department": "IT"
}
```
### Get All Employees (GET /employees)
🔹 Response
```
[
    {
        "id": 101,
        "name": "John Doe",
        "department": "IT"
    }
]
```
## Get Employee by ID (GET /employees/101)
🔹 Response
```
{
    "id": 101,
    "name": "John Doe",
    "department": "IT"
}
```
## Delete Employee (DELETE /employees/101)
🔹 Response
```
"Employee deleted successfully!"
```
## 6️⃣ Pros & Cons of Using JDBC in Spring Boot

✅ Pros

✔ Simple & Lightweight – No ORM overhead

✔ Direct SQL Control – Full SQL flexibility

✔ Fast Execution – Direct database interaction

❌ Cons

⚠ More Code Required – No ORM convenience

⚠ No Auto-mapping – Unlike JPA, manual RowMapper is needed

⚠ Database Dependent – SQL queries may change for different DBs

## 7️⃣ Conclusion

✔ JdbcTemplate simplifies database access in Spring Boot.

✔ Works well for small applications or high-performance queries.

✔ For large-scale applications, consider JPA/Hibernate.

# Spring Data JPA Module 🚀

## 1️⃣ Introduction to Spring Data JPA

Spring Data JPA is a part of Spring Data that simplifies database interactions using Java Persistence API (JPA). It helps in:

✅ Reducing boilerplate code for database operations.

✅ Providing an abstraction layer over JPA implementations like Hibernate.

✅ Auto-generating queries using method names.

✅ Enabling pagination & sorting easily.

### Why Use Spring Data JPA Instead of JDBC?
![image](https://github.com/user-attachments/assets/5bd6807c-f373-45b9-a6f5-5dda7117832d)

## 2️⃣ Add Dependencies
For MySQL (pom.xml)
```
<dependencies>
    <!-- Spring Boot JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- MySQL Driver -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Hibernate Validator (Optional) -->
    <dependency>
        <groupId>org.hibernate.validator</groupId>
        <artifactId>hibernate-validator</artifactId>
    </dependency>
</dependencies>
```
## 3️⃣ Configure Database Connection

Set database properties in src/main/resources/application.properties:

```
# MySQL Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA (Hibernate) Settings
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update   # Values: update, create, validate, none
```
🔹 ddl-auto=update → Automatically updates schema changes.
🔹 show-sql=true → Logs SQL queries.

## 4️⃣ Define JPA Entity (Model Class)

### Create Employee Entity

```
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")
@Data   // Lombok for Getters, Setters, toString, etc.
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Auto-increment ID
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String department;
}
```
🔹 @Entity – Marks the class as a JPA entity.

🔹 @Table(name="employees") – Maps the entity to the employees table.

🔹 @Id – Specifies the primary key.

🔹 @GeneratedValue(strategy = GenerationType.IDENTITY) – Uses auto-increment ID.

🔹 @Column(nullable = false) – Ensures non-null values.

## 5️⃣ Create Repository Interface

### Spring Data JPA Repository (EmployeeRepository)

```
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Employee findByName(String name);  // Auto-generates query: SELECT * FROM employees WHERE name=?
}
```
🔹 JpaRepository<Employee, Long> → Provides CRUD operations automatically.

🔹 findByName(String name) → Uses query generation (SELECT * FROM employees WHERE name=?).

## 6️⃣ Implement Service Layer

```
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    public Employee getEmployeeByName(String name) {
        return employeeRepository.findByName(name);
    }

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
```
🔹 Uses findAll(), findById(), save(), deleteById().

🔹 No SQL queries needed – Spring Data JPA handles them.

## 7️⃣ Create REST API Controller

```
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeService.getEmployeeById(id);
    }

    @GetMapping("/name/{name}")
    public Employee getEmployeeByName(@PathVariable String name) {
        return employeeService.getEmployeeByName(name);
    }

    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return "Employee deleted successfully!";
    }
}
```
## 8️⃣ Running & Testing the API

Start the Spring Boot application and test using Postman or cURL.

✔ Add an Employee (POST /employees)
### 📌 Request Body
```
{
    "name": "Alice",
    "department": "HR"
}
```
### 📌 Response
```
{
    "id": 1,
    "name": "Alice",
    "department": "HR"
}
```
### ✔ Get All Employees (GET /employees)
📌 Response
```
[
    {
        "id": 1,
        "name": "Alice",
        "department": "HR"
    }
]
```
## ✔ Get Employee by Name (GET /employees/name/Alice)
📌 Response
```
{
    "id": 1,
    "name": "Alice",
    "department": "HR"
}
```
## ✔ Delete Employee (DELETE /employees/1)
📌 Response
```
"Employee deleted successfully!"
```
## 9️⃣ Custom Queries in Spring Data JPA

### Using @Query Annotation
```
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    @Query("SELECT e FROM Employee e WHERE e.department = :department")
    List<Employee> findByDepartment(@Param("department") String department);
}
```
🔹 JPQL (Java Persistence Query Language) queries database using entity names instead of table names.

## 🔟 Pagination & Sorting

### Enable Pagination
```
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    Page<Employee> findAll(Pageable pageable);
}
```
### 📌 Usage
```
Pageable pageable = PageRequest.of(0, 5); // Page 1, 5 records per page
Page<Employee> page = employeeRepository.findAll(pageable);
```
## ✅ Summary

✔ Spring Data JPA removes boilerplate code for database operations.

✔ Repositories auto-generate CRUD methods (save(), findById(), deleteById()).

✔ Supports custom queries, pagination, and sorting easily.

# Object-Relational Mapping (ORM) in Java & Spring Boot 🚀

## 1️⃣ What is ORM?

Object-Relational Mapping (ORM) is a technique that maps Java objects (Entities) to database tables to interact with relational databases in an object-oriented manner.

### 🔹 Why Use ORM?

✅ Eliminates manual SQL queries.

✅ Maps Java objects to database tables automatically.

✅ Supports automatic table creation based on entities.

✅ Handles transactions, caching, and performance optimizations.

## 2️⃣ Popular ORM Frameworks in Java

![image](https://github.com/user-attachments/assets/44f885ef-4877-4892-9dcf-151195d9eb12)

Spring Boot uses JPA with Hibernate by default.

## 3️⃣ How ORM Works?

💡 ORM translates Java entity objects into database rows and vice versa.

### Example Without ORM (Using JDBC)
```
String sql = "INSERT INTO employees (id, name, department) VALUES (?, ?, ?)";
PreparedStatement stmt = connection.prepareStatement(sql);
stmt.setInt(1, 1);
stmt.setString(2, "Alice");
stmt.setString(3, "HR");
stmt.executeUpdate();
```
### ⚠ Issues:

Manual SQL writing.

Boilerplate code for mapping result sets.

## Example With ORM (Using JPA/Hibernate)

```
Employee employee = new Employee(1, "Alice", "HR");
entityManager.persist(employee);
```
✔ Cleaner & Object-Oriented

✔ Auto-generated queries

## ORM vs. Traditional SQL

![image](https://github.com/user-attachments/assets/06e59184-8ce4-4f2c-9f5f-17c42e39471a)

# Spring JPA Repositories 🚀

## 1️⃣ What is a Spring JPA Repository?

A Spring Data JPA Repository is an abstraction layer that simplifies database access in Spring Boot.
It eliminates the need for manual SQL queries and boilerplate code by providing built-in CRUD operations.

✅ No need to write SQL queries manually

✅ Supports pagination, sorting, and custom queries

✅ Works with Hibernate (default JPA implementation in Spring Boot)

## 2️⃣ Spring Data JPA Repository Hierarchy

![image](https://github.com/user-attachments/assets/254db9b2-9d07-4306-835e-1ef4622b2dfc)

💡 In Spring Boot, we mostly use JpaRepository because it provides all features.

# Spring Data JPA Custom Query Repository Methods 🚀

Spring Data JPA provides custom query methods to fetch data based on specific conditions. These queries can be defined using method names, JPQL (Java Persistence Query Language), or native SQL queries.

## 1️⃣ Types of Custom Query Methods

![image](https://github.com/user-attachments/assets/4a66ed42-a1d1-40d0-9f31-1d43707ce164)

## Custom Query Methods in Spring Data JPA

### 1️⃣ Derived Query Methods (Method Name Convention)

Spring Data JPA automatically derives SQL queries based on method names
```
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // Find employee by name
    Employee findByName(String name);  

    // Find all employees by department
    List<Employee> findByDepartment(String department);

    // Find employees with salary greater than a specific amount
    List<Employee> findBySalaryGreaterThan(double salary);

    // Find employees whose names start with a specific letter
    List<Employee> findByNameStartingWith(String prefix);
}
```
### 🔹 Example Queries Generated by Spring Data JPA
```
SELECT * FROM employees WHERE name = ?;
SELECT * FROM employees WHERE department = ?;
SELECT * FROM employees WHERE salary > ?;
SELECT * FROM employees WHERE name LIKE 'A%';
```

### 2️⃣ JPQL Query Using @Query

JPQL queries use entity names instead of table names.
```
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // Find employees by department using JPQL
    @Query("SELECT e FROM Employee e WHERE e.department = :department")
    List<Employee> getEmployeesByDepartment(@Param("department") String department);
    
    // Find employees with salary greater than a specific amount
    @Query("SELECT e FROM Employee e WHERE e.salary > :salary")
    List<Employee> getEmployeesWithHighSalary(@Param("salary") double salary);
}
```
### 🔹 Generated Queries

```
SELECT * FROM employees WHERE department = ?;
SELECT * FROM employees WHERE salary > ?;
```
### 3️⃣ Native SQL Queries Using @Query(nativeQuery = true)

If you want to run raw SQL queries, you can use nativeQuery = true.

```
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Fetch employees using native SQL
    @Query(value = "SELECT * FROM employees WHERE department = ?1", nativeQuery = true)
    List<Employee> findEmployeesByDepartment(String department);

    // Find employees with salary greater than a given value using native SQL
    @Query(value = "SELECT * FROM employees WHERE salary > :salary", nativeQuery = true)
    List<Employee> findHighSalaryEmployees(@Param("salary") double salary);
}
```
### 🔹 Example Queries
```
SELECT * FROM employees WHERE department = 'IT';
SELECT * FROM employees WHERE salary > 50000;
```
### 4️⃣ Custom Query with Sorting & Pagination

Spring Data JPA also supports sorting & pagination.

```
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
    // Fetch employees with pagination
    Page<Employee> findAll(Pageable pageable);

    // Fetch employees by department with sorting
    List<Employee> findByDepartment(String department, Sort sort);
}
```
### 🔹 Usage Example
```
Pageable pageable = PageRequest.of(0, 5); // First page, 5 records per page
Page<Employee> page = employeeRepository.findAll(pageable);

List<Employee> sortedList = employeeRepository.findByDepartment("IT", Sort.by("name").ascending());
```
## ✅ Summary

✔ Spring Data JPA allows writing custom queries using method names, JPQL, or native SQL.

✔ @Query is used for defining JPQL or native queries.

✔ Sorting & pagination can be combined with queries for better performance.

# @GeneratedValue Annotation in Spring Data JPA 🚀

## 1️⃣ What is @GeneratedValue?

The @GeneratedValue annotation in Spring Data JPA is used to automatically generate primary key values for an entity. It works with the @Id annotation and is typically applied to the primary key field of an entity.

🔹 @Id → Specifies the primary key field.

🔹 @GeneratedValue → Configures how the primary key is generated.

##  @GeneratedValue Strategies

Spring Data JPA provides four key strategies for ID generation:

![image](https://github.com/user-attachments/assets/b61e8afb-9bb2-44b9-a040-41c324a1fdbe)


### 1️⃣ GenerationType.IDENTITY (Recommended for MySQL, PostgreSQL)

Uses database auto-increment (AUTO_INCREMENT in MySQL).

The database assigns the ID when inserting the record.

### 2️⃣ GenerationType.SEQUENCE (Recommended for Oracle, PostgreSQL

Uses a database sequence instead of auto-increment.

Better performance than IDENTITY because IDs are generated before insertion.

### 3️⃣ GenerationType.TABLE (Least Used)

Uses a separate table to maintain ID values.

Slower than SEQUENCE and IDENTITY.

```
@Entity
@TableGenerator(name = "emp_table", table = "id_gen", pkColumnName = "gen_name", valueColumnName = "gen_value", allocationSize = 1)
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "emp_table")
    private Long id;
}
```
🔹 Not recommended due to performance overhead

### 4️⃣ GenerationType.AUTO (Default)

Spring chooses the best strategy based on the database.

Might select IDENTITY (for MySQL) or SEQUENCE (for Oracle/PostgreSQL).

🔹 Best for: Generic usage (let Hibernate decide).

# @TableGenerator Annotation in Spring Data JPA 🚀

## 1️⃣ What is @TableGenerator?

The @TableGenerator annotation in Spring Data JPA is used to generate primary key values using a separate database table instead of relying on sequences or auto-increment strategies.

## 🔹 Key Features:

✔ Stores generated ID values in a custom table.

✔ Useful when the database does not support sequences (e.g., MySQL before version 8).

✔ Can be shared across multiple entities for ID generation.

```
import jakarta.persistence.*;

@Entity
@TableGenerator(
    name = "emp_table_gen",
    table = "id_generator",
    pkColumnName = "gen_name",
    valueColumnName = "gen_value",
    pkColumnValue = "emp_id",
    initialValue = 1,
    allocationSize = 1
)
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "emp_table_gen")
    private Long id;

    private String name;
    private String department;

    // Constructors, Getters & Setters
}
```
### Explanation of @TableGenerator Parameters
![image](https://github.com/user-attachments/assets/d0ab5b91-4f84-4410-83cd-87d7c1fe4509)

# Relationship Mapping with JPA in Spring Boot 🚀

JPA (Java Persistence API) provides powerful relationship mapping features that allow you to define how entities (tables) are related to each other in a Spring Boot application.

## 🔹 Types of Relationships in JPA
![image](https://github.com/user-attachments/assets/5264b201-3ab7-4826-aff4-0a4acb3cc072)

## 1️⃣ One-To-One Relationship (@OneToOne)
A one-to-one relationship means one entity has exactly one related entity.

## 🔹 Example: Employee ↔ IDCard
Each Employee has exactly one IDCard.

### Employee Entity
```
import jakarta.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_card_id") // Foreign key column
    private IDCard idCard;

    // Getters and Setters
}
```

### IDCard Entity
```
import jakarta.persistence.*;

@Entity
public class IDCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String cardNumber;

    @OneToOne(mappedBy = "idCard") // Reference in Employee entity
    private Employee employee;

    // Getters and Setters
}
```
### 📌 Key Points:

@OneToOne establishes a one-to-one relationship.

@JoinColumn(name = "id_card_id") sets foreign key in the Employee table.

mappedBy = "idCard" in IDCard refers to Employee's idCard field.

## 2️⃣ One-To-Many Relationship (@OneToMany)
A one-to-many relationship means one entity has multiple related entities.

### 🔹 Example: Department ↔ Employees
Each Department can have multiple Employees.

### Department Entity

```
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL)
    private List<Employee> employees;

    // Getters and Setters
}
```
### Employee Entity
```
import jakarta.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name = "department_id") // Foreign key column
    private Department department;

    // Getters and Setters
}
```
### 📌 Key Points:

@OneToMany(mappedBy = "department") in Department references Employee.

@ManyToOne in Employee links back to Department.

The foreign key (department_id) is stored in the Employee table.

## 3️⃣ Many-To-One Relationship (@ManyToOne)
A many-to-one relationship is the reverse of one-to-many. Many entities relate to one entity.

### 🔹 The same example (Employee ↔ Department) applies:

@ManyToOne in Employee links it to Department.

@OneToMany in Department maps back to Employee.

✔ Many employees belong to one department.

## 4️⃣ Many-To-Many Relationship (@ManyToMany)
A many-to-many relationship means multiple records in one entity relate to multiple records in another entity.

### 🔹 Example: Student ↔ Course
Each Student can enroll in multiple Courses, and each Course can have multiple Students.

### Student Entity
```
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany
    @JoinTable(
        name = "student_course", // Join table name
        joinColumns = @JoinColumn(name = "student_id"), // Foreign key for Student
        inverseJoinColumns = @JoinColumn(name = "course_id") // Foreign key for Course
    )
    private List<Course> courses;

    // Getters and Setters
}
```
### Course Entity
```
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToMany(mappedBy = "courses")
    private List<Student> students;

    // Getters and Setters
}
```
### 📌 Key Points:

@ManyToMany creates a junction table (student_course) automatically.

@JoinTable defines the join table and foreign keys.

mappedBy = "courses" in Course refers to List<Course> courses in Student.

## 5️⃣ Cascade Types in JPA
The cascade attribute defines what happens when the parent entity changes.

![image](https://github.com/user-attachments/assets/9beb3492-934e-4976-ad8e-1c515bea2519)

## 6️⃣ Fetch Types in JPA

JPA loads relationships lazily or eagerly.

![image](https://github.com/user-attachments/assets/9954c27e-0008-4490-93fc-de8e01247127)

Example:
```
@OneToMany(mappedBy = "department", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
private List<Employee> employees;
```
📌 Lazy loading improves performance (recommended for collections).

## ✅ Summary

✔ One-To-One (@OneToOne) → Each entity is related to one other entity.

✔ One-To-Many (@OneToMany) → One entity has multiple related entities.

✔ Many-To-One (@ManyToOne) → Many entities relate to one entity.

✔ Many-To-Many (@ManyToMany) → Many entities relate to many others.

✔ Use cascade and fetch types to optimize performance.

# Spring Framework JPA Project Configuration 🚀

To configure Spring Framework JPA for a project, follow these steps:

## 1️⃣ Add Required Dependencies (Maven/Gradle)

🔹 Maven (pom.xml)
Add the necessary dependencies for Spring Boot, JPA, and database drivers.

```
<dependencies>
    <!-- Spring Boot Starter Data JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- H2 Database (for in-memory DB) -->
    <dependency>
        <groupId>com.h2database</groupId>
        <artifactId>h2</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- MySQL Driver (for MySQL database) -->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <scope>runtime</scope>
    </dependency>

    <!-- Spring Boot Starter Web (For REST API) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```
## 2️⃣ Configure application.properties or application.yml

Spring Boot automatically configures JPA when you provide the database properties.

### 🔹 For H2 Database (In-memory)

```
# Database Configuration
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=

# JPA Settings
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 🔹 For MySQL Database

```
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/mydatabase
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA Settings
spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

📌 spring.jpa.hibernate.ddl-auto=update ensures Hibernate automatically creates and updates tables.

## 3️⃣ Create JPA Entity (Model Class)

Define your JPA entity class that maps to a database table.

```
import jakarta.persistence.*;

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String department;

    // Getters and Setters
}
```
## 4️⃣ Create JPA Repository Interface

Create a Spring Data JPA repository to handle database operations

```
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query methods can be added here
}
```

## 5️⃣ Create a Service Layer (Optional)

The service layer helps in business logic

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}

```

## 6️⃣ Create a REST Controller

Create a controller to expose REST APIs for CRUD operations.

```
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        return ResponseEntity.ok(employeeService.saveEmployee(employee));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees() {
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }
}
```

## 7️⃣ Run the Spring Boot Application

Run the application using:
```
mvn spring-boot:run
```

## 📌 Test APIs in Postman or Browser:

Add Employee: POST /employees/add

Get Employees: GET /employees/all

## ✅ Summary

✔ Add dependencies (spring-boot-starter-data-jpa, database driver).

✔ Configure application.properties for the database.

✔ Create JPA Entity (@Entity) to represent the table.

✔ Use JPA Repository (JpaRepository) for database access.

✔ Implement REST API (@RestController) to interact with data.

✔ Run the application & test APIs.

# Spring / Spring Boot Web MVC Modules 🚀

## 1️⃣ Overview of Spring Web MVC

Spring Web MVC is a Java framework for building web applications using the Model-View-Controller (MVC) design pattern. It is a part of the larger Spring Framework and provides support for handling web requests, REST APIs, form validation, and more.

🔹 Spring Web (Traditional Framework): Requires manual configurations.
🔹 Spring Boot (Simplified Version): Auto-configures dependencies, making development faster.

## 2️⃣ Key Components of Spring Web MVC

Spring Web MVC follows the MVC design pattern, consisting of:

![image](https://github.com/user-attachments/assets/9ff109b5-7a30-4d5a-bc3d-94611f7e2c0b)

Spring Boot simplifies MVC development by automatically configuring the necessary components.

## 3️⃣ Spring Web Modules (Core Features)

Spring Web consists of multiple modules that handle different aspects of web development.

### 📌 (1) Spring Web MVC

🔹 Provides support for traditional web applications using MVC architecture.

🔹 Uses DispatcherServlet to handle requests and delegate them to controllers.

```
@RestController
@RequestMapping("/users")
public class UserController {
    @GetMapping("/{id}")
    public String getUser(@PathVariable String id) {
        return "User ID: " + id;
    }
}
```

## 📌 (2) Spring REST (WebFlux)

🔹 Supports building RESTful APIs.
🔹 Works with JSON, XML, and other response formats.
🔹 Uses @RestController, @RequestMapping, and @ResponseBody.

### ✅ Example REST API:

```
@RestController
@RequestMapping("/api")
public class APIController {
    @GetMapping("/message")
    public Map<String, String> getMessage() {
        return Map.of("message", "Hello, Spring Boot!");
    }
}
```
## 📌 (3) Spring WebSocket
🔹 Supports real-time communication between client & server.
🔹 Ideal for chat applications, notifications, live updates.
🔹 Works using STOMP protocol over WebSockets.

### ✅ Example WebSocket Configuration:

```
@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        config.enableSimpleBroker("/topic");
        config.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws").withSockJS();
    }
}
```
## 📌 (4) Spring Security

🔹 Provides authentication & authorization for web applications.
🔹 Works with JWT, OAuth2, and Role-based access control.
🔹 Easily integrates with Spring Boot Security Starter.

### ✅ Example Security Configuration:

```
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                .requestMatchers("/admin/**").hasRole("ADMIN")
                .requestMatchers("/user/**").authenticated()
                .anyRequest().permitAll()
        );
        return http.build();
    }
}
```
## 📌 (5) Spring Cloud Gateway (API Gateway)
🔹 Manages API requests and load balancing.
🔹 Used for Microservices Architecture.
🔹 Supports Routing, Rate Limiting, and Security.

### ✅ Example API Gateway Configuration:
```
spring:
  cloud:
    gateway:
      routes:
        - id: user-service
          uri: http://localhost:8081
          predicates:
            - Path=/users/**
```

## 4️⃣ Comparison: Spring vs. Spring Boot for Web Development

![image](https://github.com/user-attachments/assets/18ec1447-ed3d-4b8f-9945-ff7436a36cbd)

# 🚀 DispatcherServlet in Spring MVC

## 1️⃣ What is DispatcherServlet?

DispatcherServlet is the front controller in Spring MVC, responsible for handling all HTTP requests and responses. It acts as a request dispatcher that forwards requests to the appropriate controller, view, or resource.

🔹 Key Role: Central request handler in the Spring Web MVC architecture.
🔹 Automatically configured in Spring Boot (no manual setup required).

## 2️⃣ DispatcherServlet Workflow

When a request arrives, DispatcherServlet processes it using the following steps:

1️⃣ Receives HTTP Request (from client).

2️⃣ Maps the request to an appropriate controller using the HandlerMapping.

3️⃣ Calls the Controller's method, which returns a ModelAndView (data + view).

4️⃣ Selects a ViewResolver to determine the correct UI template (JSP, Thymeleaf, JSON, etc.).

5️⃣ Renders the View and returns the response to the client.

## 3️⃣ How DispatcherServlet Works in Spring MVC

📌 Example: Handling a request using Spring Web MVC.

### 🔹 Step 1: Create a Spring MVC Controller
```
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String homePage(Model model) {
        model.addAttribute("message", "Welcome to Spring MVC!");
        return "home";  // Returns the view name "home.html" (Thymeleaf or JSP)
    }
}
```
✅ DispatcherServlet will handle /home and map it to home.html.

### 🔹 Step 2: View (home.html using Thymeleaf)

```
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <title>Home Page</title>
</head>
<body>
    <h1 th:text="${message}"></h1>
</body>
</html>
```
✅ DispatcherServlet selects home.html as the view and sends it as a response.

## 4️⃣ DispatcherServlet in Spring Boot

In Spring Boot, DispatcherServlet is auto-configured, and we don’t need to declare it manually.

📌 However, we can customize it in application.properties:

```
spring.mvc.servlet.path=/api  # Changes DispatcherServlet mapping
```

## 5️⃣ Manually Configuring DispatcherServlet (Non-Spring Boot)

If you're using Spring without Spring Boot, you need to manually define DispatcherServlet in web.xml:

```
<servlet>
    <servlet-name>dispatcher</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>/WEB-INF/spring-servlet.xml</param-value>
    </init-param>
    <load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
    <servlet-name>dispatcher</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>
```
✅ This configuration ensures that all requests are processed by DispatcherServlet.

## 6️⃣ Summary

🔹 DispatcherServlet is the front controller that handles all requests in Spring MVC.

🔹 Spring Boot auto-configures DispatcherServlet, so no manual setup is needed.

🔹 It maps requests to Controllers, processes responses, and selects views.

🔹 Customization is possible via application.properties or Java-based configuration.

# 🚀 CRUD Operations vs HTTP Methods in REST APIs

## 1️⃣ What is CRUD?

CRUD stands for Create, Read, Update, Delete, which are the four basic operations used in data management.

![image](https://github.com/user-attachments/assets/a9448361-21bd-4841-ad9e-4e279a5bb27a)

## 2️⃣ Mapping CRUD Operations to HTTP Methods

In RESTful APIs, CRUD operations are mapped to HTTP methods:

![image](https://github.com/user-attachments/assets/4ee3b318-6bbb-4f38-873e-bdfa62700291)

## 3️⃣ Example: CRUD API for Employee Management

A Spring Boot REST API for Employee management:

### 🔹 1. Create Employee (POST)

```
@PostMapping("/employees")
public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
    Employee savedEmployee = employeeService.saveEmployee(employee);
    return ResponseEntity.status(HttpStatus.CREATED).body(savedEmployee);
}
```

### 📌 Request: POST /employees
### 📌 Body:
```
{
  "name": "John Doe",
  "department": "IT"
}
```
### 🔹 2. Read Employees (GET)
```
@GetMapping("/employees")
public List<Employee> getAllEmployees() {
    return employeeService.getAllEmployees();
}
```
### 📌 Request: GET /employees
### 📌 Response: List of all employees

### 🔹 3. Update Employee (PUT)
```
@PutMapping("/employees/{id}")
public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
    Employee employee = employeeService.updateEmployee(id, updatedEmployee);
    return ResponseEntity.ok(employee);
}
```
### 📌 Request: PUT /employees/1
### 📌 Body:

```
{
  "name": "John Updated",
  "department": "HR"
}
```
📌 Use PUT for full updates and PATCH for partial updates.
### 🔹 4. Delete Employee (DELETE)
```
@DeleteMapping("/employees/{id}")
public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
    employeeService.deleteEmployee(id);
    return ResponseEntity.ok("Employee deleted successfully");
}
```
📌 Request: DELETE /employees/1

# 🚀 Web Services in Java (Spring Boot)

## 1️⃣ What are Web Services?

A web service is a standardized way for applications to communicate over the internet. It allows different systems to exchange data independently of platform and language.

🔹 Used for: Data exchange, API integration, Microservices
🔹 Types of Web Services:

SOAP (Simple Object Access Protocol) Web Services

REST (Representational State Transfer) Web Services

## 2️⃣ Types of Web Services in Java

### 📌 1. SOAP Web Services

🔹 Uses XML for data exchange.

🔹 More secure but slower due to XML processing.

🔹 Follows strict standards (WSDL – Web Services Description Language).

🔹 Uses HTTP, SMTP, or TCP for communication.

### ✅ Example SOAP Request:
```
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
   <soapenv:Body>
      <getUserDetails>
         <userId>123</userId>
      </getUserDetails>
   </soapenv:Body>
</soapenv:Envelope>
```
### 📌 Implementation in Java:

Spring provides Spring-WS for SOAP-based web services.

## 📌 2. RESTful Web Services

🔹 Uses JSON or XML for data exchange.

🔹 Follows stateless communication.

🔹 Uses HTTP methods (GET, POST, PUT, DELETE).

🔹 Simpler, faster, and widely used in Microservices & Cloud applications.

### ✅ Example REST API Request:
```
GET /users/123 HTTP/1.1
Host: example.com
````
📌 Implementation in Java (Spring Boot):
```
@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping("/{id}")
    public User getUser(@PathVariable int id) {
        return new User(id, "John Doe");
    }
}
```
## 3️⃣ Difference Between SOAP and REST

![image](https://github.com/user-attachments/assets/d0f1f3f2-6dec-4219-8531-5db8b9ca76f7)

# 🚀 Benefits of RESTful APIs

RESTful APIs (Representational State Transfer) have become the standard for web and microservices-based applications due to their simplicity, scalability, and flexibility. Here are the key benefits:

## 1️⃣ Simplicity & Readability

🔹 Uses HTTP methods (GET, POST, PUT, DELETE) that are easy to understand.

🔹 Data is typically exchanged in JSON or XML, making it human-readable.

🔹 Simple URL structure (e.g., /users/1 to fetch user details).

## 2️⃣ Scalability

🔹 REST APIs are stateless, meaning each request is independent, making them easier to scale horizontally.

🔹 Works well with load balancers and distributed systems like AWS, Kubernetes, and Microservices.

✅ Example: A cloud-based REST API can handle millions of requests by adding more servers without state management issues.

## 3️⃣ Flexibility & Interoperability

🔹 Supports multiple data formats (JSON, XML, YAML, HTML, plain text).

🔹 Works across different platforms and programming languages (Java, Python, JavaScript, etc.).

🔹 Enables cross-platform communication between web apps, mobile apps, and third-party services.

✅ Example: A mobile app (React Native) can call the same REST API as a web app (Angular or React).

## 4️⃣ Statelessness (Improves Performance & Caching)

🔹 REST APIs are stateless, meaning no session is stored on the server.

🔹 This improves performance, reliability, and ease of scaling.

🔹 Supports caching at multiple levels (browser, CDN, server-side).

✅ Example:

A REST API can include caching headers like:
```
Cache-Control: max-age=3600
```
This allows clients to reuse responses, reducing server load.

## 5️⃣ Security

🔹 Supports secure authentication using OAuth 2.0, JWT, API Keys.

🔹 Uses HTTPS for secure communication.

🔹 Works well with role-based access control (RBAC) in microservices.

✅ Example: A REST API with JWT authentication:

```
Authorization: Bearer <JWT_TOKEN>
```
This ensures only authorized users can access the API.

## 6️⃣ Faster Development & Integration

🔹 Easier to develop than SOAP APIs (no need for complex XML structures).

🔹 Can be quickly tested using tools like Postman or curl.

🔹 Well-integrated with Swagger/OpenAPI for documentation and testing.

✅ Example:

A REST API in Spring Boot can be developed in minutes using @RestController.

OpenAPI generates interactive documentation to test endpoints.

## 7️⃣ Reusability & Maintainability

🔹 REST APIs follow standard principles, making them reusable for different applications.

🔹 Easy to version APIs (/v1/users, /v2/users).

🔹 Changes in the backend don’t break frontend clients if APIs are well-designed.

✅ Example:

GET /api/v1/products → Old API version

GET /api/v2/products → New API version

## 8️⃣ Microservices & Cloud-Friendly

🔹 REST is the foundation of Microservices Architecture.

🔹 Works well with Docker, Kubernetes, AWS Lambda, and serverless computing.

🔹 Helps in decoupling services, making the system more flexible.

✅ Example:

User Service (/users)

Order Service (/orders)

Payment Service (/payments)

Each microservice communicates via REST APIs, allowing independent scaling and deployment.

## 9️⃣ Supports HATEOAS (Hypermedia as the Engine of Application State)

🔹 REST APIs can include links to guide clients on next actions.

🔹 Improves discoverability and reduces hardcoded API calls.

✅ Example REST Response with HATEOAS:

```
{
  "id": 1,
  "name": "John Doe",
  "links": [
    { "rel": "self", "href": "/users/1" },
    { "rel": "orders", "href": "/users/1/orders" }
  ]
}
```
🔹 The client can discover related resources without hardcoding URLs.

## 🔟 Summary of REST API Benefits

![image](https://github.com/user-attachments/assets/a6d430e2-e959-486e-aeb4-ab5d6ad4a522)

# SOAP vs REST: Which is Better? 🤔

The choice between SOAP (Simple Object Access Protocol) and REST (Representational State Transfer) depends on your project's requirements, security needs, performance, and scalability. Let’s compare them and determine which is better for different use cases.

### 📌 1. Key Differences Between SOAP and REST

![image](https://github.com/user-attachments/assets/185fa316-f7dc-41ba-bcb3-66d0444102cd)

## 📌 2. When to Use REST vs SOAP?

### ✅ Choose REST if:

✔️ You need lightweight APIs with high performance.

✔️ You are building mobile apps, web apps, or microservices.

✔️ You want to use JSON (simpler and faster than XML).

✔️ You need scalability (stateless and cacheable).

✔️ You don’t need strict transaction control (ACID compliance).

🔹 Example Use Cases:

Public APIs (Google Maps, Twitter, Instagram)

Web & Mobile Apps (React, Angular, iOS, Android)

Microservices & Cloud-based applications

## ✅ Choose SOAP if:

✔️ You need high security & reliability (e.g., WS-Security, encrypted messages).

✔️ You are dealing with banking, healthcare, or financial transactions.

✔️ You need ACID-compliant transaction support.

✔️ Your system requires asynchronous processing and complex workflows.

### 🔹 Example Use Cases:

Banking & Payment Gateways (e.g., PayPal, Visa, Mastercard APIs)

Enterprise & Government Applications

Telecom Services & Messaging Systems

## 📌 3. Which is Better?

### 🔹 For most modern applications, REST is better because it is:

✅ Faster, easier to use, and scalable.

✅ Supported by web & mobile platforms.

✅ Uses JSON, which is lightweight and widely accepted.

### 🔹 Use SOAP only if you need:

✔️ Advanced security features (WS-Security).

✔️ Strict transaction control (banking, financial apps).

✔️ Reliability over the public internet.

## 🚀 Final Verdict

✅ If you are building a web, mobile, or microservices application → Choose REST.

✅ If you are working on secure financial transactions or enterprise-level systems → Choose SOAP.

# 🚀 How RESTful APIs Work?

A RESTful API (Representational State Transfer API) allows communication between a client (browser, mobile app, or another server) and a server over the internet using HTTP methods. It follows REST (stateless) principles, making it lightweight, scalable, and flexible.


## 📌 1. Basic Working of RESTful APIs

Client sends an HTTP request to the API endpoint.

Server processes the request and interacts with the database if needed.

Server responds with a resource (data) in JSON or XML format.

Client uses the response to update the UI or perform actions.

### ✅ Example:
A mobile app requests user data:
```
GET /users/1 HTTP/1.1
Host: example.com
```
### 📌 Response from API (JSON format):
```
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```
# 📌 REST API Response Components

## 1. Status Line (HTTP Status Codes)

The status line includes an HTTP version, a status code, and a status message.

### ✅ Common HTTP Status Codes:

### 2XX (Success Responses)

200 OK → Generic success response

201 Created → New resource successfully created (e.g., after a POST request)

204 No Content → Successful request, but no content to return (e.g., DELETE request)

### 3XX (Redirection Responses)

301 Moved Permanently → The requested resource has a new URL

302 Found → Temporary redirect

304 Not Modified → Cached version should be used (saves bandwidth)

### 4XX (Client Error Responses)

400 Bad Request → Invalid request (wrong parameters, missing fields, etc.)

401 Unauthorized → Authentication required

403 Forbidden → Client lacks permission

404 Not Found → Resource does not exist

### 5XX (Server Error Responses)

500 Internal Server Error → Unexpected error on the server

502 Bad Gateway → Server acting as a gateway received an invalid response

503 Service Unavailable → Server is down for maintenance

### 2. Message Body (Data Representation)

The response body contains the requested data.

The server selects the appropriate format based on the request headers.

Common formats: JSON (preferred) and XML.

### ✅ Example JSON Response (User Details)

```
{
  "name": "John",
  "age": 30
}
```
### ✅ Example XML Response (User Details)
```
<user>
    <name>John</name>
    <age>30</age>
</user>
```
### 📌 How the format is selected?

Clients specify their preferred response format in the request using headers:

```
Accept: application/json
```
or
```
Accept: application/xml
```
## 3. Headers (Metadata)

The headers provide additional information about the response.

### ✅ Common Response Headers:
![image](https://github.com/user-attachments/assets/8ae752ac-b793-4090-b99a-2ae4730074a5)

✅ Example Response Headers:
```
Content-Type: application/json
Cache-Control: no-cache
Authorization: Bearer <JWT_TOKEN>
Date: Fri, 29 Mar 2025 12:00:00 GMT
```
## 📌 Conclusion
✅ A REST API response contains status codes, headers, and a response body.

✅ Status codes communicate success or failure.

✅ Response body contains data in JSON/XML format.

✅ Headers provide metadata like content type, caching, and authentication.

# REST Services Implementation in Spring MVC
Spring MVC is a widely used framework for developing web applications in Java. It supports the implementation of RESTful web services that adhere to REST architectural principles, facilitating communication between software systems over HTTP.

RESTful services use standard HTTP methods such as GET, POST, PUT, and DELETE to perform operations on resources. These services focus on simplicity, scalability, and statelessness.

## Data Representation in REST Services

RESTful services primarily represent data in JSON (JavaScript Object Notation) and XML formats, with JSON being the most popular due to its lightweight and human-readable nature.

### JSON Overview

JSON is a widely used data format for storing and exchanging data between applications. It follows a structured notation consisting of:

Name/Value pairs

Curly braces {} for objects

Square brackets [] for arrays

Example of JSON Representation:
```
{
   "name": "John",
   "age": 30,
   "car": null
}
```
### JSON vs XML

Both JSON and XML can be used for RESTful responses, but JSON is preferred for its simplicity.

### JSON Example:
```
{
  "employees": [
    { "firstName": "John", "lastName": "Doe" },
    { "firstName": "Anna", "lastName": "Smith" }
  ]
}
```
### Equivalent XML Example:
```
<employees>
  <employee>
    <firstName>John</firstName>
    <lastName>Doe</lastName>
  </employee>
  <employee>
    <firstName>Anna</firstName>
    <lastName>Smith</lastName>
  </employee>
</employees>
```
### Key Differences Between JSON and XML:

JSON is lighter and faster than XML.

JSON uses key-value pairs, while XML uses tags.

JSON parsing is simpler than XML parsing.

JSON to Java Object Conversion in Spring MVC

Spring MVC provides built-in support for JSON to Java object conversion using Jackson API. The @RequestBody annotation is used to map JSON request bodies to Java objects.

###Example: Converting JSON to Java Object
```
JSON Payload:

{
  "student": [
    { "firstName": "Dilip", "lastName": "Singh", "mobile": 88888 },
    { "firstName": "Naresh", "lastName": "It", "mobile": 232323 }
  ]
}
```
### Java POJO Class:
```
import com.fasterxml.jackson.annotation.JsonProperty;
import java.util.List;

public class StudentInfo {
    private String firstName;
    private String lastName;
    private long mobile;

    @JsonProperty("emailID")
    private String email;

    // Getters and Setters
}
```
### Using @JsonProperty for Field Mapping

The @JsonProperty annotation allows mapping JSON property names to different field names in Java classes.
```
public class Person {
    @JsonProperty("first_name")
    private String firstName;

    @JsonProperty("last_name")
    private String lastName;

    @JsonProperty
    private int age;
}
```

## Implementing REST Services in Spring MVC

In Spring MVC, RESTful web services are implemented using the @RestController annotation. This annotation combines @Controller and @ResponseBody, ensuring that methods return JSON responses directly.

Example: RESTful Web Service
```
@RestController
@RequestMapping("/api")
public class StudentController {
    
    @GetMapping("/students")
    public List<StudentInfo> getStudents() {
        return List.of(
            new StudentInfo("Dilip", "Singh", 88888),
            new StudentInfo("Naresh", "It", 232323)
        );
    }
}
```
### Handling JSON Requests and Responses

@RequestBody: Maps incoming JSON data to Java objects.

@ResponseBody: Converts Java objects into JSON responses.

@RestController: A combination of @Controller and @ResponseBody.

Example: Accepting JSON Request
```
@PostMapping("/students")
public ResponseEntity<String> createStudent(@RequestBody StudentInfo student) {
    return ResponseEntity.ok("Student created: " + student.getFirstName());
}
```
## Conclusion

Implementing RESTful web services in Spring MVC is straightforward with the help of Spring annotations and Jackson API for JSON parsing. Using @RestController, @RequestBody, and @ResponseBody ensures a seamless conversion between Java objects and JSON data, making Spring MVC a powerful choice for REST API development.

By leveraging JSON's efficiency and Spring MVC's robust features, developers can build scalable and maintainable RESTful web services efficiently.

# @RestController Annotation in Spring Boot

The @RestController annotation in Spring Boot is a specialized version of the @Controller annotation. It is used to create RESTful web services by automatically serializing responses into JSON or XML

## 1. Understanding @RestController

It combines @Controller and @ResponseBody, meaning that every method in a @RestController class returns data instead of a view.

The response is automatically converted to JSON or XML based on the request headers.

It is typically used for RESTful APIs where clients interact with the server using HTTP methods (GET, POST, PUT, DELETE).

## 2. Example Usage of @RestController

Basic REST Controller Example

```
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable int id) {
        return new Student(id, "John Doe", "Computer Science");
    }
}
```
### Explanation:

@RestController → Marks this class as a RESTful controller.

@RequestMapping("/api/students") → Base path for all endpoints in this controller.

@GetMapping("/{id}") → Handles HTTP GET requests for fetching a student by ID.

Response Type → Since it's a @RestController, the response is automatically converted to JSON.

### Sample JSON Response

```
{
  "id": 1,
  "name": "John Doe",
  "course": "Computer Science"
}
```
## 3. Difference Between @Controller and @RestController
![image](https://github.com/user-attachments/assets/e2ab968c-8c03-4e0c-aedc-a5782566d959)
```
@Controller
@RequestMapping("/students")
public class StudentController {
    
    @GetMapping("/{id}")
    @ResponseBody // Required to return JSON
    public Student getStudentById(@PathVariable int id) {
        return new Student(id, "John Doe", "Computer Science");
    }
}
```
In @Controller, we must explicitly add @ResponseBody to return JSON.

In @RestController, @ResponseBody is not required because it's implicit.

## 4. Handling HTTP Methods in @RestController

Spring Boot supports all standard HTTP methods

![image](https://github.com/user-attachments/assets/7eb5d009-310f-4869-aadf-bf97e5497d07)

```
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private List<Student> students = new ArrayList<>();

    @PostMapping
    public Student createStudent(@RequestBody Student student) {
        students.add(student);
        return student;
    }

    @GetMapping
    public List<Student> getAllStudents() {
        return students;
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable int id, @RequestBody Student student) {
        students.set(id, student);
        return student;
    }

    @DeleteMapping("/{id}")
    public String deleteStudent(@PathVariable int id) {
        students.remove(id);
        return "Student removed successfully!";
    }
}
```
## 5. Exception Handling in @RestController
To handle exceptions in REST APIs, use @ExceptionHandler with @RestControllerAdvice.

### Global Exception Handling

```
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(StudentNotFoundException.class)
    public ResponseEntity<String> handleStudentNotFound(StudentNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}
```
Benefit: Centralized exception handling for all REST controllers.

## 6. JSON Serialization with @RestController

Spring Boot uses Jackson for JSON serialization/deserialization.

### Using @JsonProperty for Custom Field Names

```
import com.fasterxml.jackson.annotation.JsonProperty;

public class Student {
    @JsonProperty("student_id")
    private int id;
    private String name;
    private String course;
    
    // Getters and Setters
}
```
```
{
  "student_id": 1,
  "name": "John Doe",
  "course": "Computer Science"
}
```
## 7. Best Practices for Using @RestController

✅ Use @RestController for APIs returning JSON/XML data.

✅ Always return proper HTTP status codes (200 OK, 201 Created, 400 Bad Request, etc.).

✅ Use DTO (Data Transfer Object) for request/response instead of exposing entity classes.

✅ Implement exception handling with @RestControllerAdvice.

✅ Use Swagger/OpenAPI to document REST APIs.

## 8. Summary

@RestController is used for building RESTful APIs.

It automatically converts responses to JSON/XML.

No need to use @ResponseBody for each method.

Supports GET, POST, PUT, DELETE with annotations.

Works with Jackson for JSON handling.


# Path Variables in REST APIs 🌍

## 1. What Are Path Variables?

Path Variables (also called Path Parameters) are dynamic values embedded within the URL to send data in RESTful APIs. They are used to specify a particular resource within a collection.

### Example API URL:

```
GET http://localhost:8080/api/students/{id}
```
Here, {id} is a path variable, which will be replaced with an actual value when making the request.

## 2. How Path Variables Work?

✅ Path variables help in retrieving, updating, or deleting a specific resource.

✅ They are specified inside curly braces {} in the API endpoint.

✅ The client provides the actual value while making the request.

### Example: Replacing {id} in a Request
Request:
```
GET http://localhost:8080/api/students/101
```
### Response (JSON):
```
{
  "id": 101,
  "name": "Alice Johnson",
  "course": "Computer Science"
}
```
Here, 101 replaces {id} in the API.

## 3. Using Path Variables in Spring Boot REST API

Spring Boot allows handling Path Variables using the @PathVariable annotation.

### Example: Retrieve Student by ID
```
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @GetMapping("/{id}") 
    public ResponseEntity<Student> getStudentById(@PathVariable int id) {
        // Mock student data
        Student student = new Student(id, "Alice Johnson", "Computer Science");
        return ResponseEntity.ok(student);
    }
}
```
### Explanation:

@GetMapping("/{id}") → Specifies {id} as a path variable in the URL.

@PathVariable int id → Extracts the value from the URL.

Returns a Student object as JSON.

## 4. Handling Multiple Path Variables

You can use multiple path variables in a URL.

Example: Fetch Course Details for a Specific Student

```
@GetMapping("/{studentId}/courses/{courseId}")
public ResponseEntity<String> getCourseDetails(
    @PathVariable int studentId,
    @PathVariable int courseId) {
    
    return ResponseEntity.ok("Student ID: " + studentId + ", Course ID: " + courseId);
}
```
### Test URL:
```
GET http://localhost:8080/api/students/101/courses/5001
```
### Response:
```
Student ID: 101, Course ID: 5001
```
## 5. Path Variables vs Query Parameters

![image](https://github.com/user-attachments/assets/453f7469-c0c4-4fdd-9ea3-514cbb56a57c)

## 6. Using Path Variables in Postman
### Steps to Test in Postman:
Open Postman.

Select GET request.

Enter URL:
```
http://localhost:8080/api/students/101
```
Click Send → Check response.

## Using Postman Path Variable Feature
Instead of manually replacing {id}, use Postman Path Variables.

Enter URL as:
```
http://localhost:8080/api/students/:id
```
Click Params → Enter Key as id and Value as 101.

Click Send.

## 7. Summary
✅ Path Variables are used for identifying specific resources in REST APIs.

✅ @PathVariable in Spring Boot extracts values from the URL.

✅ Multiple path variables can be used in an API.

✅ Postman supports path variables for dynamic testing.

✅ Path Variables are different from Query Parameters.

# Query String & Query Parameters in REST APIs 🌍

## 1. What Are Query Parameters?

Query Parameters (or Query Strings) are used to send optional key-value pairs in the URL to filter or modify data in RESTful APIs.

## Example API URL (With Query Parameters)
```
GET http://localhost:8080/api/students?name=John&course=Java
```
Here:

name=John → Filters students by name

course=Java → Filters students by course

## 2. How Query Parameters Work?

✅ Query parameters always appear after the ? in the URL.

✅ Multiple parameters are separated by &.

✅ They are optional (unlike Path Variables).

✅ Used for search, filtering, sorting, or pagination.

## 3. Query Parameters vs Path Variables

![image](https://github.com/user-attachments/assets/5ba90d7e-12a8-4c50-bbd8-d272fe97cb48)

## 4. Using Query Parameters in Spring Boot

Spring Boot allows handling query parameters using the @RequestParam annotation.

### Example: Fetch Students with Filters
```
@RestController
@RequestMapping("/api/students")
public class StudentController {

    @GetMapping
    public ResponseEntity<String> getStudents(
        @RequestParam(required = false) String name,
        @RequestParam(required = false) String course) {

        String response = "Fetching students";
        if (name != null) response += " with name: " + name;
        if (course != null) response += " and course: " + course;
        
        return ResponseEntity.ok(response);
    }
}
```
### Test URLs & Responses

✅ Without Query Parameters (Fetch All)
```
GET http://localhost:8080/api/students
```
## Response: "Fetching students"

✅ With Name Filter

```
GET http://localhost:8080/api/students?name=John
```
### Response: "Fetching students with name: John"

✅ With Multiple Filters
```
GET http://localhost:8080/api/students?name=John&course=Java
```
Response: "Fetching students with name: John and course: Java"

## 5. Handling Default Values & Required Parameters

If a query parameter is optional, it should have required = false.
If it's required, setting required = true makes it mandatory.

### Example: Default Values for Query Parameters

```
@GetMapping("/search")
public ResponseEntity<String> searchStudents(
    @RequestParam(defaultValue = "Unknown") String name,
    @RequestParam(defaultValue = "All") String course) {

    return ResponseEntity.ok("Searching for " + name + " in " + course);
}
```
## Test URL & Response
```
GET http://localhost:8080/api/students/search
```
Response: "Searching for Unknown in All"

## 6. Multiple Query Parameters in Spring Boot

Example: Sorting & Pagination

```
@GetMapping("/list")
public ResponseEntity<String> listStudents(
    @RequestParam(defaultValue = "name") String sortBy,
    @RequestParam(defaultValue = "10") int pageSize) {

    return ResponseEntity.ok("Sorting by " + sortBy + " with page size " + pageSize);
}
```

### Test URLs
```
GET http://localhost:8080/api/students/list
```
Response: "Sorting by name with page size 10"

```
GET http://localhost:8080/api/students/list?sortBy=age&pageSize=20
```
Response: "Sorting by age with page size 20"

## 7. Query Parameters in Postman
Steps to Test Query Parameters in Postman
Open Postman.

Select GET request.

Enter URL:
```
http://localhost:8080/api/students?name=John&course=Java
```
Click Params → Enter Key as name, Value as John.

Click Send.

## 8. Summary

✅ Query Parameters allow filtering or modifying API data.

✅ @RequestParam in Spring Boot extracts values from the URL.

✅ Default values can be provided to avoid errors.

✅ Used for sorting, filtering, pagination, and optional data.

### General Rule of Thumb

✅ Use Path Variables (@PathVariable) → When you need to identify a specific resource.

✅ Use Query Parameters (@RequestParam) → When you need to filter, sort, or paginate data.

## Swagger UI with Spring Boot Applications

### 🚀 What is Swagger UI?

Swagger UI is an interactive API documentation tool that allows developers to test RESTful web services. It provides a user-friendly interface to visualize and interact with the API's endpoints, request parameters, and responses without needing an external tool like Postman.

## 🔹 Steps to Integrate Swagger UI in a Spring Boot Application

Step 1: Add Dependencies

You need to add Springdoc OpenAPI dependency to your pom.xml (for Spring Boot 3+).

```
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>2.2.0</version>
</dependency>
```

```
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-ui</artifactId>
    <version>1.7.0</version>
</dependency>
```
### Step 2: Enable Swagger Configuration (Optional)

For most Spring Boot projects, no additional configuration is required. However, if you want to customize Swagger, you can create a configuration class:

```
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("User Management API")
                .version("1.0")
                .description("API documentation for User Management"));
    }
}
```

### Step 3: Create a REST Controller

Example of a simple UserController with Swagger annotations

```
import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public List<String> getAllUsers() {
        return Arrays.asList("John", "Jane", "Doe");
    }

    @GetMapping("/{id}")
    public String getUserById(@PathVariable int id) {
        return "User " + id;
    }

    @PostMapping
    public String createUser(@RequestBody String name) {
        return "User " + name + " created!";
    }
}
```
### Step 4: Run the Application and Access Swagger UI

Start your Spring Boot application (mvn spring-boot:run).

Open your browser and go to:

```
http://localhost:8080/swagger-ui.html
```
This will show all available APIs with request methods (GET, POST, etc.).

You can test APIs directly from the Swagger UI.

### 💡 Additional Features
Access OpenAPI JSON/YAML Documentation

JSON: http://localhost:8080/v3/api-docs

YAML: http://localhost:8080/v3/api-docs.yaml

Customize API Documentation


You can add descriptions to API methods using annotations like:
```
@Operation(summary = "Get all users", ##escription = "Retrieves a list of all users.")
@ApiResponses(value = {
    @ApiResponse(responseCode = "200", description = "Success"),
    @ApiResponse(responseCode = "500", description = "Internal Server Error")
})
@GetMapping
public List<String> getAllUsers() {
    return Arrays.asList("John", "Jane", "Doe");
}
```
# HTTP Status Codes in Building RESTful APIs

When designing RESTful APIs, HTTP status codes are used to indicate the outcome of a client's request. They help API consumers understand whether the request was successful, failed, or if further action is needed.

### 🔹 HTTP Status Code Categories

HTTP status codes are grouped into five categories:

![image](https://github.com/user-attachments/assets/ed9c6bf8-c6d5-4468-8ae3-1e638f0d6989)

## 🚀 Commonly Used HTTP Status Codes in REST APIs

Below are the most commonly used status codes when designing RESTful APIs:

### ✅ 1xx – Informational

100 Continue → The server received the request and the client can proceed.

101 Switching Protocols → The server is switching protocols, as requested.

### ✅ 2xx – Success

![image](https://github.com/user-attachments/assets/c81224d7-0618-45c4-9d60-530001ff4504)
### 📌 Example in Spring Boot:
```
@PostMapping("/users")
public ResponseEntity<String> createUser(@RequestBody User user) {
    return ResponseEntity.status(HttpStatus.CREATED)
        .body("User created successfully!");
}
```
### ⚠️ 3xx – Redirection

![image](https://github.com/user-attachments/assets/8993282d-c556-455e-a64c-2e0ee892ef6a)

### ❌ 4xx – Client Errors

![image](https://github.com/user-attachments/assets/f72eaf7a-409d-4e3d-972e-be7b3b3c5f98)

### 📌 Example in Spring Boot:
```
@GetMapping("/users/{id}")
public ResponseEntity<?> getUser(@PathVariable int id) {
    Optional<User> user = userService.findUserById(id);
    if (user.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
            .body("User not found!");
    }
    return ResponseEntity.ok(user);
}
```
### ❌ 5xx – Server Errors

![image](https://github.com/user-attachments/assets/ff3579cf-a9a6-41ae-a4fe-c8f9218f6460)

### 📌 Example in Spring Boot (Handling 500 Internal Server Error):

```
@ExceptionHandler(Exception.class)
public ResponseEntity<String> handleGlobalException(Exception ex) {
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
        .body("An unexpected error occurred: " + ex.getMessage());
}
```
## 🛠️ Summary Table of HTTP Status Codes in REST APIs

![image](https://github.com/user-attachments/assets/3c19253b-c164-4ead-8857-86d499cdcda2)

![image](https://github.com/user-attachments/assets/e8823730-a387-419b-a1ff-bd8d5eab9297)

## 🎯 Best Practices for Using HTTP Status Codes in REST APIs

Use the correct status code for each scenario (e.g., 200 OK for successful GET, 201 Created for successful POST).

Provide meaningful error messages in the response body.

Use standard HTTP status codes to ensure API consistency.

Use 4xx for client-side errors and 5xx for server-side errors.

Handle errors globally in Spring Boot using @ControllerAdvice.

## REST API Specific HTTP Status Codes: 
   
Generally we will have likewise below scenarios and respective status codes in REST API 
services. For Example,   
 
POST   -   Create  :   201 Created : Successfully Request Completed.  
     
PUT     -   Update  :     200 Ok : Successfully Updated Data

                                If not i.e. Resource  Not Found Data  
				
                         404 Not Found :  Successfully Processed but Data Not available 
                                             
GET     -   Read  : 200 Ok : Successfully Retrieved Data         

                                        If not i.e. Resource  Not Found Data 
					
                   404 Not Found :  Successfully Processed but Data Not available 
        
DELETE   -   Delete : 204 No Content: Successfully Deleted Data 

             If not i.e. Resource  Not Found Data  
	     
             404 Not Found :  Successfully Processed but Data Not available 


## 🔥 ResponseEntity in Spring Boot 🚀

### 📌 What is ResponseEntity?

ResponseEntity<T> is a generic class in Spring that represents an HTTP response, including status code, headers, and body. It is the most flexible way to define responses in a RESTful Spring Boot API.

### ✅ Advantages of Using ResponseEntity:

Explicit Control: Allows setting custom HTTP status codes.

Headers Customization: Enables modifying response headers.

Consistent API Responses: Helps standardize the structure of API responses.

Error Handling: Easily manage different HTTP status codes.

## 📌 Basic Syntax
```
ResponseEntity<T> response = new ResponseEntity<>(body, status);
```
T: The type of the response body (e.g., String, List<User>, Map<String, Object>).

body: The actual response data.

status: The HTTP status code (e.g., HttpStatus.OK, HttpStatus.NOT_FOUND).

### 📌 Example 1: Simple Usage
```
@GetMapping("/hello")
public ResponseEntity<String> sayHello() {
    return new ResponseEntity<>("Hello, World!", HttpStatus.OK);
}
```
### 🔹 Response
```
HTTP/1.1 200 OK
Content-Type: text/plain
Hello, World!
```
## 📌 Example 2: Using ResponseEntity.ok()

Spring provides a shortcut for 200 OK responses.

```
@GetMapping("/user")
public ResponseEntity<User> getUser() {
    User user = new User(1, "John Doe", "john@example.com");
    return ResponseEntity.ok(user);
}
```
### 🔹 Response
```
HTTP/1.1 200 OK
Content-Type: application/json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
```
## 📌 Example 3: Handling Not Found (404)
```
@GetMapping("/users/{id}")
public ResponseEntity<?> getUserById(@PathVariable int id) {
    Optional<User> user = userRepository.findById(id);
    return user.map(ResponseEntity::ok) // 200 OK if user exists
               .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                                              .body("User not found!")); // 404 Not Found
}
```
### 🔹 Response (if user not found)
```
HTTP/1.1 404 Not Found
Content-Type: text/plain
User not found!
```
## 📌 Example 4: Creating a New Resource (201 Created)
```
@PostMapping("/users")
public ResponseEntity<User> createUser(@RequestBody User user) {
    User createdUser = userRepository.save(user);
    return ResponseEntity.status(HttpStatus.CREATED).body(createdUser);
}
```
### 🔹 Response
```
HTTP/1.1 201 Created
Content-Type: application/json
{
    "id": 2,
    "name": "Alice",
    "email": "alice@example.com"
}
```
## 📌 Example 5: No Content (204) on Deletion
```
@DeleteMapping("/users/{id}")
public ResponseEntity<Void> deleteUser(@PathVariable int id) {
    boolean deleted = userRepository.deleteById(id);
    return deleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
}
```
### 🔹 Response (if user exists)
```
HTTP/1.1 204 No Content
```
### 🔹 Response (if user does not exist)
```
HTTP/1.1 404 Not Found
```
## 📌 Example 6: Setting Custom Headers
```
@GetMapping("/download")
public ResponseEntity<byte[]> downloadFile() {
    byte[] fileData = "Sample file content".getBytes();
    
    return ResponseEntity.ok()
            .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"sample.txt\"")
            .body(fileData);
}
```
### 🔹 Response Headers
```
HTTP/1.1 200 OK
Content-Disposition: attachment; filename="sample.txt"
```
## 📌 Example 7: Handling Bad Requests (400)
```
@PostMapping("/validate")
public ResponseEntity<?> validateUser(@RequestBody User user) {
    if (user.getName() == null || user.getEmail() == null) {
        return ResponseEntity.badRequest().body("Name and Email are required!");
    }
    return ResponseEntity.ok("User is valid");
}
```
### 🔹 Response (if request is invalid)
```
HTTP/1.1 400 Bad Request
Content-Type: text/plain
Name and Email are required!
```
## 📌 Example 8: Global Exception Handling (500)
Instead of handling errors manually in every method, use @ControllerAdvice to handle exceptions globally.

```
@RestControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Something went wrong: " + ex.getMessage());
    }
}
```
### 🔹 Response (on an unexpected error)

```
HTTP/1.1 500 Internal Server Error
Content-Type: text/plain
Something went wrong: NullPointerException
```
### 📌 Summary Table

![image](https://github.com/user-attachments/assets/e750271e-b04c-41e7-b905-f5594be7b552)

### 🎯 Conclusion

✅ ResponseEntity<> gives full control over HTTP responses.

✅ Helps in returning status codes, headers, and body easily.

✅ Improves API design by handling errors properly.

✅ Works well with Spring Boot exception handling.

# 🔥 Request Body Validation in Spring Boot Using Validator Framework 🚀

## 📌 Why Validate Request Body?

Validating the request body ensures that only correct data enters the system, preventing bad requests, data corruption, and security vulnerabilities.

Spring Boot provides powerful validation support using the Java Bean Validation API (javax.validation) with Hibernate Validator as the default implementation.

## 📌 Step 1: Add Validation Dependencies

If using Spring Boot with Spring Web, the required dependencies are already included. Otherwise, add:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-validation</artifactId>
</dependency>


```

This enables @Valid and @Validated annotations for request validation.

## 📌 Step 2: Create a DTO with Validation Annotations

We use Jakarta Validation API annotations to enforce constraints.

### 🎯 Example: Validating User Input

```
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
    
    @NotBlank(message = "Name is required!")
    @Size(min = 3, max = 50, message = "Name must be between 3 and 50 characters!")
    private String name;

    @Email(message = "Invalid email format!")
    @NotBlank(message = "Email is required!")
    private String email;

    @Size(min = 6, max = 12, message = "Password must be between 6 and 12 characters!")
    private String password;

    // Getters and Setters
}
```
### 🔹 Annotations Used:

@NotBlank: Ensures the field is not empty or null.

@Size(min, max): Restricts the length of a field.

@Email: Validates email format.

## 📌 Step 3: Apply @Valid in the Controller

Use @Valid to enable validation in the request body.

```
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
@Validated
public class UserController {

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody UserDTO user) {
        return ResponseEntity.ok("User registered successfully!");
    }
}
```
🔹 @Valid triggers validation when Spring Boot processes the request.

🔹 If validation fails, Spring automatically returns a 400 Bad Request response.

## 📌 Step 4: Handling Validation Errors

By default, Spring Boot returns a generic validation error response.

We can customize it using @ExceptionHandler.

### 🎯 Global Exception Handler

```
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getFieldErrors().forEach(error -> 
            errors.put(error.getField(), error.getDefaultMessage())
        );
        return new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
    }
}
```
### 🔹 Response When Validation Fails
```
HTTP/1.1 400 Bad Request
Content-Type: application/json
{
    "name": "Name is required!",
    "email": "Invalid email format!",
    "password": "Password must be between 6 and 12 characters!"
}
```
✅ Now, validation errors are formatted nicely instead of a generic error message.

## 📌 Step 5: Advanced Validations

### 🎯 Adding Custom Validation Using @Pattern

```
import jakarta.validation.constraints.Pattern;

public class UserDTO {

    @Pattern(regexp = "^[a-zA-Z]+$", message = "Name must contain only letters!")
    private String name;

    // Other fields...
}
```

🚀 This ensures that the name contains only letters.

### 🎯 Validating Lists (@Size & @NotEmpty)

```
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import java.util.List;

public class CourseDTO {

    @NotEmpty(message = "Course name cannot be empty!")
    private String courseName;

    @Size(min = 1, message = "At least one student is required!")
    private List<String> students;

    // Getters and Setters
}
```

✅ Ensures that the students list is not empty.

## 📌 Step 6: Custom Validator (When Built-in Ones Are Not Enough)

Sometimes, built-in validators don’t meet business logic needs.
In such cases, we create custom annotations.

### 🎯 Example: Custom Validator for Strong Password

### 1️⃣ Create Annotation

```
import jakarta.validation.Constraint;
import jakarta.validation.Payload;
import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = PasswordValidator.class)
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface StrongPassword {
    String message() default "Password must contain uppercase, lowercase, digit, and special character!";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
```
### 2️⃣ Implement Validator Logic
```
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class PasswordValidator implements ConstraintValidator<StrongPassword, String> {
    
    private static final String PASSWORD_PATTERN = 
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,}$";

    @Override
    public boolean isValid(String password, ConstraintValidatorContext context) {
        return password != null && password.matches(PASSWORD_PATTERN);
    }
}
```
### 3️⃣ Use in DTO

```
public class UserDTO {
    
    @StrongPassword
    private String password;

    // Other fields...
}
```
✅ Now, password must have uppercase, lowercase, digit, and special character.

## 📌 Summary Table

![image](https://github.com/user-attachments/assets/50d711a9-5bee-47bd-9427-331721c9cd28)

## 🎯 Conclusion

✅ Use @Valid in controllers to enforce validation.

✅ Define constraints in DTOs using annotations like @NotBlank, @Size, @Email, etc.

✅ Customize error handling using @ExceptionHandler for better API responses.

✅ Use @Pattern and custom validators when built-in ones are insufficient.

# 🔥 HTTP Headers in Spring MVC 🚀

## 📌 What Are HTTP Headers?

HTTP headers carry metadata about the request or response.

They help define: 

✅ Content type

✅ Authentication

✅ Caching policies

✅ Request & response handling

## 📌 1. Accessing HTTP Headers in Spring MVC

### 🎯 Using @RequestHeader in Controller

We use @RequestHeader to read HTTP headers from client requests.

Example: Fetch a Specific Header

```
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HeaderController {

    @GetMapping("/header")
    public String getHeader(@RequestHeader("User-Agent") String userAgent) {
        return "User-Agent: " + userAgent;
    }
}
```
✅ This extracts the User-Agent header.

📌 User-Agent contains browser details like Chrome, Firefox, etc.

## 🎯 Fetching Multiple Headers
```
@GetMapping("/headers")
public String getHeaders(@RequestHeader("User-Agent") String userAgent,
                         @RequestHeader("Accept-Language") String language) {
    return "User-Agent: " + userAgent + ", Accept-Language: " + language;
}
```
✅ Extracts both User-Agent and Accept-Language.

## 🎯 Handling Missing Headers with Default Values

If a header is optional, provide a default value:
```
@GetMapping("/optional-header")
public String getOptionalHeader(@RequestHeader(value = "X-Request-ID", defaultValue = "N/A") String requestId) {
    return "Request ID: " + requestId;
}
```
✅ If X-Request-ID is missing, returns "N/A" instead of an error.

## 🎯 Fetching All Headers in a Request

Use Map<String, String> to get all headers dynamically:
```
@GetMapping("/all-headers")
public Map<String, String> getAllHeaders(@RequestHeader Map<String, String> headers) {
    return headers;
}
```
✅ Returns all headers in a Map

## 📌 2. Setting HTTP Headers in Response

Use HttpServletResponse or ResponseEntity to send custom headers.

### 🎯 Using HttpServletResponse

```
@GetMapping("/custom-header")
public void setHeader(HttpServletResponse response) {
    response.setHeader("X-Custom-Header", "SpringBoot");
}
```

✅ Adds X-Custom-Header: SpringBoot in the response.

### 🎯 Using ResponseEntity
```
@GetMapping("/response-entity-header")
public ResponseEntity<String> responseWithHeader() {
    return ResponseEntity.ok()
            .header("X-Custom-Header", "SpringBoot")
            .body("Response with custom header");
}
✅ Adds X-Custom-Header using ResponseEntity.
```
### 🎯 Setting Multiple Headers
```
@GetMapping("/multiple-headers")
public ResponseEntity<String> responseWithMultipleHeaders() {
    return ResponseEntity.ok()
            .header("Cache-Control", "no-cache")
            .header("Pragma", "no-cache")
            .body("Response with multiple headers");
}
```
✅ Adds multiple headers for caching control.

## 📌 3. Common HTTP Headers
![image](https://github.com/user-attachments/assets/46843eb8-916a-431a-9932-e34c8dd40f72)

## 📌 4. Sending Custom Headers in Postman

### 1️⃣ Open Postman

### 2️⃣ Select the Headers tab

### 3️⃣ Add Key-Value Pairs

```
Key: X-Custom-Header  
Value: SpringBootApp
```
✅ Sends custom headers in API requests.

## 📌 5. Practical Use Cases of HTTP Headers

![image](https://github.com/user-attachments/assets/7ff5791f-0cff-4316-b62e-a90cadd7ca14)

## 📌 Summary

✅ @RequestHeader extracts headers from incoming requests

✅ Use @RequestHeader Map<String, String> to fetch all headers

✅ ResponseEntity.header() helps send custom headers

✅ Common use cases include authentication, security, caching, and CORS

# 🔥 Exception Handling in Spring MVC Controllers 🚀

## 📌 Why Do We Need Exception Handling?

Handling exceptions properly in Spring MVC improves API reliability by:

✅ Returning meaningful error messages to clients

✅ Preventing application crashes

✅ Providing consistent error responses

## 📌 1. Using @ExceptionHandler (Method-Level Exception Handling)

This approach handles exceptions at the controller level.

### 🎯 Example: Handling a Specific Exception

```
@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping("/user/{id}")
    public String getUser(@PathVariable int id) {
        if (id <= 0) {
            throw new IllegalArgumentException("Invalid user ID!");
        }
        return "User with ID: " + id;
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body("Error: " + ex.getMessage());
    }
}
```
✅ If id is invalid, it returns a 400 Bad Request response instead of crashing

## 📌 2. Using @ControllerAdvice (Global Exception Handling)

Instead of handling exceptions in every controller, we use @ControllerAdvice to handle exceptions globally.

### 🎯 Example: Global Exception Handler
```
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handleIllegalArgument(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body("Invalid Input: " + ex.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleGenericException(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong!");
    }
}
```

✅ Handles exceptions for all controllers globally

✅ Returns proper error messages based on the exception type

## 📌 3. Using @ResponseStatus for Simpler Exception Handling

If you want a simple way to set HTTP status codes for specific exceptions, use @ResponseStatus.

### 🎯 Example: Custom Exception with @ResponseStatus
```
@ResponseStatus(HttpStatus.NOT_FOUND)
class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}
```
### 🎯 Throwing the Custom Exception in Controller

```
@GetMapping("/user/{id}")
public String getUser(@PathVariable int id) {
    if (id > 100) {
        throw new UserNotFoundException("User not found with ID: " + id);
    }
    return "User with ID: " + id;
}
```

✅ If id > 100, API returns 404 Not Found instead of a generic error.

## 📌 4. Creating Custom Error Response Structure

Instead of returning plain text, we can send structured JSON error responses.

### 🎯 Custom Error Response Class
```
public class ErrorResponse {
    private String message;
    private int status;
    private LocalDateTime timestamp;

    public ErrorResponse(String message, int status) {
        this.message = message;
        this.status = status;
        this.timestamp = LocalDateTime.now();
    }

    // Getters and Setters
}
```
### 🎯 Using Custom Error Response in Exception Handler

```
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUserNotFoundException(UserNotFoundException ex) {
        ErrorResponse error = new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value());
        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }
}
```

### ✅ Returns structured JSON error response like this:
```
{
    "message": "User not found with ID: 101",
    "status": 404,
    "timestamp": "2025-03-30T10:15:30"
}
```
## 📌 5. Handling Validation Errors (@Valid & BindingResult)

When using Spring Validation, handle errors properly.

### 🎯 Example: Handling Validation Errors
```
@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@Valid @RequestBody User user, BindingResult result) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().body(result.getAllErrors());
        }
        return ResponseEntity.ok("User created successfully!");
    }
}
```
✅ If validation fails, it returns an error response instead of processing invalid data.

## 📌 6. Summary

![image](https://github.com/user-attachments/assets/7e8f1b4d-1e4c-4a20-837a-22f6e46e3e21)

# 🔥 Producing and Consuming REST API Services in Spring Boot 🚀

In a Spring Boot application, producing and consuming RESTful web services means:

✅ Producing API: Creating an endpoint that provides data (JSON/XML).

✅ Consuming API: Calling and processing data from an external API.

## 📌 1. Producing REST API Services (Creating APIs)

Spring Boot makes it easy to build RESTful APIs using @RestController.

### 🎯 Example: Producing a Simple REST API (JSON Response)

```
@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/products")
    public List<String> getProducts() {
        return List.of("Laptop", "Mobile", "Tablet");
    }
}
```
✅ Produces JSON response:

```
["Laptop", "Mobile", "Tablet"]
```

## 📌 2. Consuming REST API Services (Calling External APIs)

To call an external API in Spring Boot, we can use RestTemplate (legacy) or WebClient (recommended for reactive applications).


### 🎯 Using RestTemplate (Synchronous, Simple Use-Case)

```
@RestController
@RequestMapping("/api")
public class ProductConsumerController {

    private final RestTemplate restTemplate = new RestTemplate();

    @GetMapping("/external-products")
    public String consumeExternalAPI() {
        String url = "https://fakestoreapi.com/products";  // Example API
        return restTemplate.getForObject(url, String.class);
    }
}
```
✅ Calls an external API and returns the response

## 📌 3. Producing API with Different Response Types (JSON/XML)

By default, Spring Boot produces JSON responses. But we can configure it to support XML too.


### 🎯 Producing JSON and XML Response Using @Produces

```
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @GetMapping(value = "/employees", produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    public List<Employee> getEmployees() {
        return List.of(new Employee(1, "John"), new Employee(2, "Doe"));
    }
}
```

✅ Clients can request JSON or XML by setting the Accept header.

### Request Example (JSON)
```
GET /api/employees
Accept: application/json
```

### Response (JSON)

```
[
    {"id": 1, "name": "John"},
    {"id": 2, "name": "Doe"}
]
```

### Request Example (XML)
```
Request Example (XML)
```

### Response (XML)

```
<employees>
   <employee>
      <id>1</id>
      <name>John</name>
   </employee>
   <employee>
      <id>2</id>
      <name>Doe</name>
   </employee>
</employees>
```
## 📌 4. Consuming API Using WebClient (Recommended for Asynchronous Calls)

WebClient is the modern, non-blocking alternative to RestTemplate.

### 🎯 Example: Consuming an API Using WebClient
```
@Service
public class ProductService {

    private final WebClient webClient;

    public ProductService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://fakestoreapi.com").build();
    }

    public Mono<String> getExternalProducts() {
        return webClient.get()
                .uri("/products")
                .retrieve()
                .bodyToMono(String.class);
    }
}
```

✅ More efficient than RestTemplate for large-scale applications

## 📌 5. Consuming API with @RequestBody (Handling JSON Payloads)

APIs often accept JSON data in the request body.

### 🎯 Example: Creating an API That Accepts JSON

```
@RestController
@RequestMapping("/api")
public class UserController {

    @PostMapping("/users")
    public ResponseEntity<String> createUser(@RequestBody User user) {
        return ResponseEntity.ok("User " + user.getName() + " created successfully!");
    }
}
```
✅ Client sends JSON, and Spring automatically converts it into a Java object.

Request (JSON)

```
{
    "id": 1,
    "name": "Alice"
}
```

Response
```
"User Alice created successfully!"
```

## 📌 6. Summary
![image](https://github.com/user-attachments/assets/c9a782fb-9fda-432a-9b59-9414730efe49)

# 🔥 Spring Boot Profiles 🔥

## 📌 What are Spring Boot Profiles?

Spring Boot profiles allow developers to define different configurations for different environments (e.g., dev, test, prod) within the same application. This helps manage environment-specific properties without modifying code.

## 📌 Why Use Profiles?

🔹 Manage different configurations for development, testing, and production

🔹 Avoid hardcoding environment-specific properties

🔹 Enable/disable beans and services based on the active profile

## 📌 1. Defining Profiles in application.properties or application.yml

Spring Boot allows you to define multiple configuration files for different environments.

## 🎯 Example: application.properties (Default Profile)

```
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/dev_db
spring.datasource.username=dev_user
spring.datasource.password=dev_pass
```

## 🎯 Example: application-dev.properties

```
server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/dev_db
spring.datasource.username=dev_user
spring.datasource.password=dev_pass
```

## 🎯 Example: application-prod.properties

```
server.port=8082
spring.datasource.url=jdbc:mysql://prod-server:3306/prod_db
spring.datasource.username=prod_user
spring.datasource.password=prod_pass
```

🔹 Spring Boot loads application.properties by default.

🔹 It loads application-{profile}.properties when a profile is activated.

## 📌 2. Activating a Profile

#### ✅ Option 1: Using application.properties
```
spring.profiles.active=dev
```
### ✅ Option 2: Using Command Line Arguments

Run the application with a profile:

```
java -jar myapp.jar --spring.profiles.active=prod
```

### ✅ Option 3: Using Environment Variables
```
export SPRING_PROFILES_ACTIVE=prod
```

##  📌 3. Using Profiles in Java Code

You can use the @Profile annotation to enable specific beans based on the active profile.

### 🎯 Example: Profile-Specific Beans

```
@Service
@Profile("dev")  // This bean is active only in the "dev" profile
public class DevDatabaseService implements DatabaseService {
    @Override
    public void connect() {
        System.out.println("Connected to DEV database");
    }
}

@Service
@Profile("prod")  // This bean is active only in the "prod" profile
public class ProdDatabaseService implements DatabaseService {
    @Override
    public void connect() {
        System.out.println("Connected to PROD database");
    }
}
```
✅ When the dev profile is active, DevDatabaseService is used.

✅ When the prod profile is active, ProdDatabaseService is used.

## 📌 4. Using @Value to Read Profile-Specific Properties

```
@RestController
@RequestMapping("/config")
public class ConfigController {

    @Value("${server.port}")
    private String serverPort;

    @GetMapping("/port")
    public String getServerPort() {
        return "Application is running on port: " + serverPort;
    }
}
```
✅ If dev profile is active, it will return 8081.

✅ If prod profile is active, it will return 8082.

## 📌 5. Profile-Specific Beans Using @Bean

If you want to define different beans for different profiles, use @Bean inside a configuration class.

```
@Configuration
public class AppConfig {

    @Bean
    @Profile("dev")
    public DataSource devDataSource() {
        System.out.println("Using DEV DataSource");
        return new DataSource("jdbc:mysql://localhost:3306/dev_db", "dev_user", "dev_pass");
    }

    @Bean
    @Profile("prod")
    public DataSource prodDataSource() {
        System.out.println("Using PROD DataSource");
        return new DataSource("jdbc:mysql://prod-server:3306/prod_db", "prod_user", "prod_pass");
    }
}
```
✅ This ensures the correct data source is used based on the active profile.

## 📌 6. Summary

![image](https://github.com/user-attachments/assets/b34659f9-9e65-4c1f-9ae7-23abca50cf7f)

# 🔥 Spring Boot DevTools 🔥

## 📌 What is Spring Boot DevTools?

Spring Boot DevTools is a developer-friendly tool that enhances the development experience by enabling features like automatic restart, live reload, property defaults, and faster application deployment.

## 📌 Key Features of DevTools

1️⃣ Auto Restart – Automatically restarts the application when code changes

2️⃣ Live Reload – Refreshes the browser when static content changes

3️⃣ Fast Startup Time – Optimized development environment

4️⃣ Configurable Property Defaults – Provides sensible defaults for development

5️⃣ Remote Debugging – Allows debugging in remote environments

## 📌 1. Adding DevTools to Your Project

To enable Spring Boot DevTools, simply add the following dependency in pom.xml:
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <optional>true</optional>
</dependency>
```

### 🚀 Note:
```
DevTools should only be used in development and not in production. The <optional>true</optional> tag prevents it from being included in production builds

```

## 📌 2. Features of DevTools

### ✅ 2.1 Automatic Restart

Whenever you change Java code, application properties, or templates, DevTools automatically restarts the application.

You don’t need to manually restart the server after every small change.

Example:

Modify a Java class in src/main/java

Save the file → Spring Boot automatically restarts

Refresh the browser → Changes take effect immediately

### 🔹 How to Disable Auto Restart? 

If you don’t want the application to restart on every change, disable it in application.properties:

```
spring.devtools.restart.enabled=false

```
## ✅ 2.2 Live Reload (Web Development)

Spring Boot DevTools automatically reloads web pages when static resources like HTML, CSS, or JavaScript change.

### 📌 To enable Live Reload:

Install the LiveReload browser extension

Chrome: LiveReload Extension

Firefox: LiveReload Extension

Start the Spring Boot application

Modify src/main/resources/static/index.html

Refresh the browser – Changes will reflect automatically!

### 🔹 How to Disable Live Reload?
```
spring.devtools.livereload.enabled=false
```
## ✅ 2.3 Disabling Caching (For Development)

By default, Spring Boot caches static content, so changes to HTML, CSS, or JS might not be reflected immediately. DevTools disables caching for better development.

### ✅ To disable template caching for Thymeleaf:

```
spring.thymeleaf.cache=false
```
### ✅ To disable caching for Spring MVC:

```
spring.resources.cache.period=0
spring.resources.chain.cache=false

```
## ✅ 2.4 Remote Debugging with DevTools

Spring Boot DevTools also allows remote debugging of applications running in different environments.

### 📌 Steps to Enable Remote Debugging:

Add the following property in application.properties:

```
spring.devtools.remote.secret=mysecretkey
```
Start your Spring Boot application with:
```
java -jar myapp.jar --spring.devtools.remote.secret=mysecretkey
```
Connect using a Remote Debugger (IntelliJ/Eclipse).

## ✅ 2.5 Excluding Files from Restart

Sometimes, you may want to exclude certain files (like logs, database files) from triggering a restart.

### 📌 To exclude files, add this in application.properties
```
spring.devtools.restart.exclude=static/**,public/**
```
This prevents changes in static or public folders from restarting the application.


## 📌 3. DevTools in Action – Example

### 🔹 Without DevTools (Manual Restart Required)

Run the application

Modify a Java class (Controller, Service, etc.)

Stop the server

Restart the server

Refresh the browser

😩 Tedious and time-consuming!


### 🔹 With DevTools (Auto Restart)

Run the application

Modify a Java class

Spring Boot automatically restarts the app

Refresh the browser → Changes are applied instantly!

🚀 Faster development and better productivity!

## 📌 4. Disabling DevTools in Production

Spring Boot automatically disables DevTools in production mode. However, to ensure it's not included in your production build, add this to your pom.xml:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
    <scope>runtime</scope>
</dependency>
```
This ensures DevTools is available only in development and not included in the final JAR file.

## 📌 5. Summary

![image](https://github.com/user-attachments/assets/b09663f1-1379-4648-b9b1-500e33223c43)


# 🚀 Spring Boot Actuator 🚀

## 📌 What is Spring Boot Actuator?

Spring Boot Actuator is a powerful monitoring and management tool that provides insights into a running Spring Boot application. It exposes built-in endpoints that allow developers to monitor, manage, and interact with the application in real time.

## 📌 1. Adding Actuator to Your Project

To enable Spring Boot Actuator, add the following dependency to pom.xml:

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>
```
✅ Once added, Actuator automatically exposes endpoints for monitoring and application health checks.

## 📌 2. Key Features of Spring Boot Actuator


![image](https://github.com/user-attachments/assets/f669b09b-97b1-4f02-b922-da9182f675d7)

## 📌 3. Enabling Actuator Endpoints

By default, only /actuator/health and /actuator/info are enabled.

To enable all endpoints, modify application.properties:

```
management.endpoints.web.exposure.include=*
```

or select specific endpoints:

```
management.endpoints.web.exposure.include=health,metrics,info
```
## 📌 4. Common Actuator Endpoints

### ✅ 4.1 Health Check

Check if the application is running:
```
http://localhost:8080/actuator/health
```
```
{
  "status": "UP"
}
```
🔹 Enable detailed health checks:

```
management.endpoint.health.show-details=always
```
Now, /actuator/health will display database, disk space, and service health.

## ✅ 4.2 Metrics (Performance Monitoring)

Monitor JVM memory, CPU usage, HTTP requests, etc.:
```
http://localhost:8080/actuator/metrics
```
### 🔹 Example Query: Get total HTTP requests
```
http://localhost:8080/actuator/metrics/http.server.requests

```
### 🔹 Response:
```
{
  "name": "http.server.requests",
  "measurements": [
    {
      "statistic": "count",
      "value": 10
    }
  ]
}
```
## ✅ 4.3 Environment Properties

Check application properties, system variables, and environment variables:
```
http://localhost:8080/actuator/env
```
🔹 Example Query: Get a specific property
```
http://localhost:8080/actuator/env/server.port
```
## ✅ 4.4 Viewing Beans

List all registered Spring Beans in the application:
```
http://localhost:8080/actuator/beans
```
## ✅ 4.5 Changing Log Levels at Runtime

View and modify log levels without restarting the application:

### 1️⃣ View available loggers:
```
http://localhost:8080/actuator/loggers
```
### 2️⃣ Change log level dynamically (Example: Set com.example to DEBUG):
```
curl -X POST "http://localhost:8080/actuator/loggers/com.example" -H "Content-Type: application/json" -d '{"configuredLevel": "DEBUG"}'
```
### ✅ 4.6 Thread Dump (Troubleshooting)

To check running threads (useful for debugging deadlocks or high CPU usage):
```
http://localhost:8080/actuator/threaddump

```
## 📌 5. Securing Actuator Endpoints

By default, Actuator endpoints are public. To restrict access, configure security:

🔒 Secure Actuator with Spring Security

### 1️⃣ Add Spring Security dependency:
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```
### 2️⃣ Set basic authentication in application.properties:
```
spring.security.user.name=admin
spring.security.user.password=admin123

```
### 3️⃣ Now, access Actuator endpoints with:
```
curl -u admin:admin123 http://localhost:8080/actuator/health
```
## 📌 6. Custom Actuator Endpoints

Create a custom endpoint to expose additional information.

Example: Custom Endpoint to Show Active Users
```
@Component
@Endpoint(id = "active-users")
public class ActiveUsersEndpoint {

    @ReadOperation
    public Map<String, Object> getActiveUsers() {
        Map<String, Object> data = new HashMap<>();
        data.put("activeUsers", 120);
        return data;
    }
}
```
### 📌 Access Custom Endpoint:

```
http://localhost:8080/actuator/active-users
```
### 🔹 Response:
```
{
  "activeUsers": 120
}
```
## 📌 7. Summary

![image](https://github.com/user-attachments/assets/066b9dea-70e4-4f6d-8c4b-78a9cd459acf)


🚀 Spring Boot Actuator is essential for monitoring and managing production applications!

# 📝 Logging in Spring Boot

Logging is an essential part of application development, helping developers debug, monitor, and troubleshoot issues. Spring Boot provides built-in support for logging and integrates with SLF4J (Simple Logging Facade for Java) and Logback (default logging framework in Spring Boot).

## 📌 1. Default Logging Setup in Spring Boot

Spring Boot automatically configures logging using Logback. If you don’t add any logging dependencies, Spring Boot uses Logback with SLF4J.

### Example: Default Log Output (Console)
```
2025-03-30 10:15:00.123  INFO 12345 --- [main] com.example.MainApplication : Application Started
```
### 💡 By default, Spring Boot logs:

✅ Log level → INFO

✅ Log format → Timestamp, Log Level, Process ID, Thread Name, Logger Name, and Message

## 📌 2. Logging Frameworks in Spring Boot

Spring Boot supports multiple logging frameworks:

SLF4J (Simple Logging Facade for Java)

Logback (Default in Spring Boot)

Log4j2 (Alternative to Logback)

Java Util Logging (JUL)

## 📌 3. Changing the Default Logging Level

By default, Spring Boot logs at INFO level. You can modify the logging level in application.properties or application.yml.

Example: Change Log Level in application.properties

```
logging.level.root=DEBUG
logging.level.org.springframework=INFO
logging.level.com.example.myapp=TRACE
```
OR in application.yml
```
logging:
  level:
    root: DEBUG
    org.springframework: INFO
    com.example.myapp: TRACE
```
## 📌 4. Using SLF4J for Logging

Spring Boot recommends using SLF4J (with Logback by default).

### ✅ Example: Logging with SLF4J and Logback

```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class LoggingExample {
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public void execute() {
        logger.trace("TRACE: Detailed Debugging Info");
        logger.debug("DEBUG: Debugging Info");
        logger.info("INFO: General Info");
        logger.warn("WARN: Warning Message");
        logger.error("ERROR: Something went wrong!");
    }
}
```
📌 Spring Boot automatically provides SLF4J and Logback dependencies, so no need to add them manually.

# 📌 5. Logging to a File

By default, logs appear in the console, but we can configure Spring Boot to log to a file.

Enable File Logging in application.properties
```
logging.file.name=logs/app.log   # Logs will be saved in logs/app.log
logging.level.root=INFO

```
OR in application.yml
```
logging:
  file:
    name: logs/app.log
  level:
    root: INFO
```
📌 Now logs will be saved in the logs/app.log file.

## 📌 6. Custom Log Format in Logback

Spring Boot uses Logback by default. We can customize the log format by adding a logback-spring.xml file in src/main/resources.

Example: Custom logback-spring.xml

```
<configuration>
    <appender name="FILE" class="ch.qos.logback.core.FileAppender">
        <file>logs/application.log</file>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <root level="info">
        <appender-ref ref="FILE" />
    </root>
</configuration>
```
📌 Now logs will be saved in logs/application.log with a custom format.

## 📌 7. Using Log4j2 Instead of Logback

Spring Boot supports Log4j2, but you need to exclude Logback and add Log4j2 manually.

Step 1: Add Log4j2 Dependency in pom.xml

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-logging</artifactId>
    <scope>provided</scope>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```
## 📌 Spring Boot will now use Log4j2 instead of Logback.

Step 2: Create log4j2.xml in src/main/resources
```
<Configuration status="WARN">
    <Appenders>
        <Console name="Console" target="SYSTEM_OUT">
            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5p %c{1} - %m%n"/>
        </Console>
    </Appenders>

    <Loggers>
        <Root level="info">
            <AppenderRef ref="Console"/>
        </Root>
    </Loggers>
</Configuration>
```
📌 Now Spring Boot will log using Log4j2 with the specified format.

### 📌 8. Logging in a Spring Boot REST API
You can log request and response details in a Spring Boot REST API.

### ✅ Example: Logging in a REST Controller
```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoggingController {
    private static final Logger logger = LoggerFactory.getLogger(LoggingController.class);

    @GetMapping("/hello")
    public String hello(@RequestParam String name) {
        logger.info("Received request for name: {}", name);
        return "Hello, " + name;
    }
}
```
📌 Now all API calls will be logged with details.

## 📌 9. Logging with Spring Boot Actuator

Spring Boot Actuator provides an endpoint to dynamically change log levels at runtime.

### 1️⃣ Enable the Actuator logging endpoint in application.properties
```
management.endpoints.web.exposure.include=loggers
```
### 2️⃣ View Current Log Levels
```
curl -X POST "http://localhost:8080/actuator/loggers/com.example" -H "Content-Type: application/json" -d '{"configuredLevel": "DEBUG"}'
```
### 3️⃣ Change Log Level at Runtime
```
curl -X POST "http://localhost:8080/actuator/loggers/com.example" -H "Content-Type: application/json" -d '{"configuredLevel": "DEBUG"}'
```
📌 This allows changing log levels without restarting the app.

## 📌 10. Summary
![image](https://github.com/user-attachments/assets/05ca92d5-4e92-4b0a-8aa1-a950f2c372af)

## 🚀 Conclusion

Logging is crucial for monitoring, debugging, and maintaining Spring Boot applications. Spring Boot makes it easy by providing built-in logging with Logback, SLF4J, and Actuator support.

# 🚀 Spring Boot Security Module

Spring Boot Security is a powerful authentication and authorization framework that helps secure Spring applications with minimal configuration. It supports:

✅ Basic Authentication


✅ JWT (JSON Web Token) Authentication

✅ OAuth2 Authentication

✅ Role-Based Access Control (RBAC)

✅ LDAP and Database Authentication

## 📌 1. Adding Spring Security to a Spring Boot Project

### ✅ Step 1: Add Dependencies in pom.xml
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
📌 Spring Boot automatically applies security when you add spring-boot-starter-security.

## 📌 2. Default Spring Security Setup
When you run the application, Spring Security automatically enables Basic Authentication.

### Default Credentials:
Username: user

Password: (Generated in the console at startup)

```
Using generated security password: 23d1f7b0-9dbb-4a48-8d34-xxxxx
```
🔹 To Change the Default Credentials, Add This in application.properties:
```
spring.security.user.name=admin
spring.security.user.password=admin123
```
📌 Now, the application requires admin:admin123 to access any endpoint.

## 📌 3. Custom User Authentication (In-Memory Users)

Instead of the default user, define custom users and roles.

### ✅ Step 1: Create a Security Configuration Class
```
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        UserDetails user = User.withDefaultPasswordEncoder()
                .username("user")
                .password("user123")
                .roles("USER")
                .build();

        UserDetails admin = User.withDefaultPasswordEncoder()
                .username("admin")
                .password("admin123")
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(user, admin);
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().antMatchers("/public/**");  // Allow access to "/public/**" without authentication
    }
}
```
📌 Now, users and roles are stored in memory.

📌 "admin" has ADMIN role, and "user" has USER role.

## 📌 4. Role-Based Authorization (RBAC)

Define different access levels based on user roles.

### ✅ Step 1: Secure Endpoints in SecurityConfig.java
```
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .antMatchers("/admin/**").hasRole("ADMIN")  // Only ADMIN can access
                .antMatchers("/user/**").hasAnyRole("USER", "ADMIN")  // USER and ADMIN can access
                .antMatchers("/public/**").permitAll()  // Public endpoints
                .anyRequest().authenticated()
            )
            .formLogin();  // Enable login form

        return http.build();
    }
}
```
📌 Now:

✔ /admin/** → Only ADMINs can access

✔ /user/** → USER and ADMIN can access

✔ /public/** → Open to all (No authentication required)

## 📌 5. Custom Login Page

Instead of the default Spring Security login, create a custom login form.

### ✅ Step 1: Add a Custom Login Page (login.html)

```
<form method="post" action="/login">
    <label>Username: <input type="text" name="username"/></label>
    <label>Password: <input type="password" name="password"/></label>
    <button type="submit">Login</button>
</form>
```
### ✅ Step 2: Configure Security to Use the Custom Login Page

Modify SecurityConfig.java:
```
http
    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
    .formLogin(form -> form.loginPage("/login").permitAll())  // Custom login page
    .logout(logout -> logout.logoutSuccessUrl("/"));
```
📌 Now, Spring Security redirects to /login instead of the default login page.

## 📌 6. JWT Authentication (Token-Based Security)

Use JWT instead of session-based authentication.

### ✅ Step 1: Add Dependencies
```
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.11.5</version>
</dependency>
```

### ✅ Step 2: Create a JWT Utility Class

```
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;

public class JwtUtil {
    private String secretKey = "mySecretKey";

    public String generateToken(String username) {
        return Jwts.builder()
            .setSubject(username)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
            .signWith(SignatureAlgorithm.HS256, secretKey)
            .compact();
    }

    public String extractUsername(String token) {
        return getClaims(token).getSubject();
    }

    private Claims getClaims(String token) {
        return Jwts.parser()
            .setSigningKey(secretKey)
            .parseClaimsJws(token)
            .getBody();
    }
}
```
📌 This generates JWT tokens with expiration time.

## ✅ Step 3: Expose a Login API That Returns a JWT
```
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    private final JwtUtil jwtUtil = new JwtUtil();

    @PostMapping("/login")
    public String login(@RequestParam String username) {
        return jwtUtil.generateToken(username);
    }
}
```
📌 Now, /auth/login?username=admin will return a JWT token.
## ✅ Step 4: Secure Endpoints with JWT

Modify SecurityConfig.java:

```
http
    .authorizeHttpRequests(auth -> auth.anyRequest().authenticated())
    .addFilter(new JwtAuthenticationFilter());
```
📌 Now, users must include JWT in the request header:
```
Authorization: Bearer <TOKEN>
```
## 📌 7. Securing a REST API in Spring Boot

To secure REST APIs: ✔ Use JWT instead of sessions

✔ Use @PreAuthorize to secure methods

✔ Restrict access based on roles

### ✅ Example: Secure API with @PreAuthorize
```
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/secure")
public class SecureController {

    @GetMapping("/admin")
    @PreAuthorize("hasRole('ADMIN')")
    public String adminAccess() {
        return "Admin Access";
    }

    @GetMapping("/user")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public String userAccess() {
        return "User Access";
    }
}
```
📌 Only users with the correct roles can access the endpoints.
## 🚀 Conclusion

Spring Boot Security provides a powerful and flexible security framework.

✔ Basic Authentication – Default security

✔ Role-Based Access Control (RBAC) – Secure API by roles

✔ Custom Login Page – Use a custom UI

✔ JWT Authentication – Token-based security for REST APIs

# 🚀 Microservices with Spring Boot

Microservices architecture is a modern approach to building applications as a collection of small, independent services that communicate over a network. Spring Boot simplifies microservices development by providing built-in tools for REST APIs, security, service discovery, monitoring, and more.

## 📌 1. What are Microservices?

Microservices are small, loosely coupled services that work together to form an application. Each service:

✅ Has its own database (DB per service)

✅ Communicates via REST APIs or messaging (Kafka, RabbitMQ)

✅ Can be deployed and scaled independently

###  🛠 Example:

A shopping application may have:

✔ User Service (Handles users)

✔ Order Service (Manages orders)

✔ Product Service (Handles products)

Each of these services runs independently and communicates using REST APIs or message queues.

##   🚀 Monolithic Architecture (Traditional Approach)

he entire application is built as a single unit (one big codebase).

All components (UI, business logic, database) are tightly coupled.

If one part fails, the entire system can crash.

Hard to scale specific features (requires scaling the entire app).

Slow development and deployment since every change requires redeploying the whole application

##   🚀 Microservices Architecture (Modern Approach)

The application is broken down into independent services, each handling a specific function.

Services communicate with each other using APIs (like REST, gRPC, or messaging queues).

If one service fails, other services can still run, making the system more resilient.

Easier to scale individual services based on demand.

Faster development and deployment since changes to one service do not affect others

## 📌 Real-World Use Cases of Microservices

Netflix – Uses microservices to handle different aspects of streaming (user preferences, recommendations, content delivery).

Amazon – Each feature (order processing, payments, search) runs as a separate microservice.

Uber – Divides ride-matching, payments, notifications, and driver management into microservices.


## 📌 When to Use Microservices?

✅ You want high scalability (handle more users easily).

✅ Your application is growing complex and hard to maintain.

✅ You need faster deployment cycles for continuous updates.

✅ Your team is big and distributed, working on different features.

🚫 Avoid microservices if your application is small or doesn't require independent scaling.

## 📌 Best Practices for Transitioning from Monolithic to Microservices

✔ Start small – Break one feature into a microservice instead of the whole app at once.

✔ Use API Gateway – Acts as a single entry point to manage microservices.

✔ Automate deployment – Use Docker, Kubernetes, or CI/CD pipelines.

✔ Ensure service communication – Use REST APIs, gRPC, or message brokers (Kafka, RabbitMQ).

✔ Monitor everything – Use Spring Boot Actuator, Prometheus, or Grafana for logging and monitoring.

# Implementation of Microservices using Spring Boot

We will implement three microservices (User Service, Order Service, Payment Service) and integrate them into a Spring Boot Microservices architectur

## Project Setup

### 1. Create Three Spring Boot Applications

We will create:

User Service (Runs on port 8001, context path /user)

Order Service (Runs on port 8002, context path /order)

Payment Service (Runs on port 8003, context path /payment)

Each microservice will be independent and communicate via REST APIs.

## 1️⃣ User Microservice

Setup user-service

Dependencies (pom.xml)
```
<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    
    <!-- Spring Boot Actuator (For monitoring) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
    
    <!-- Lombok (For reducing boilerplate code) -->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <scope>provided</scope>
    </dependency>

    <!-- Spring Boot DevTools (For hot reload) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-devtools</artifactId>
        <scope>runtime</scope>
    </dependency>
</dependencies>

```
### Application Properties (application.yml)
```
server:
  port: 8001
  servlet:
    context-path: /user

spring:
  application:
    name: user-service

```
### User Model
```
package com.microservices.user.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    private Long id;
    private String name;
    private String email;
}

```
### User Controller

```
package com.microservices.user.controller;

import com.microservices.user.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private static final List<User> users = Arrays.asList(
        new User(1L, "John Doe", "john@example.com"),
        new User(2L, "Jane Smith", "jane@example.com")
    );

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(users);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        return users.stream()
            .filter(user -> user.getId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}

```
## 2️⃣ Order Microservice

### Setup order-

Dependencies (pom.xml)
(Same as User Service)

### Application Properties (application.yml)

```
server:
  port: 8002
  servlet:
    context-path: /order

spring:
  application:
    name: order-service

```
### Order Model
```
package com.microservices.order.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    private Long orderId;
    private Long userId;
    private String productName;
    private double price;
}
```
### Order Controller
```
package com.microservices.order.controller;

import com.microservices.order.model.Order;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private static final List<Order> orders = Arrays.asList(
        new Order(101L, 1L, "Laptop", 75000),
        new Order(102L, 2L, "Smartphone", 40000)
    );

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orders.stream()
            .filter(order -> order.getOrderId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
```
## 3️⃣ Payment Microservice

### Setup payment-service
Dependencies (pom.xml)
(Same as User Service)

### Application Properties (application.yml)
```
server:
  port: 8003
  servlet:
    context-path: /payment

spring:
  application:
    name: payment-service
```
### Payment Model
```
package com.microservices.payment.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    private Long paymentId;
    private Long orderId;
    private String status;
    private double amount;
}

```
### Payment Controller

```
package com.microservices.payment.controller;

import com.microservices.payment.model.Payment;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    private static final List<Payment> payments = Arrays.asList(
        new Payment(201L, 101L, "Completed", 75000),
        new Payment(202L, 102L, "Pending", 40000)
    );

    @GetMapping
    public ResponseEntity<List<Payment>> getAllPayments() {
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Payment> getPaymentById(@PathVariable Long id) {
        return payments.stream()
            .filter(payment -> payment.getPaymentId().equals(id))
            .findFirst()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}
```
## Running Microservices

### Start user-service

```
mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8001

```

### Start order-service

```
mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8002

```

### Start payment-service

```
mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8003

```
## Testing with Postman

![image](https://github.com/user-attachments/assets/aa0f3c00-bc01-4299-8228-78a41f9c76ce)

# API Gateway in Microservices – A Deep Dive 🚀

## 1️⃣ What is an API Gateway?

An API Gateway is a server that acts as a single entry point for multiple microservices. It manages all requests from clients and directs them to the appropriate microservices. It simplifies client interaction with microservices by abstracting the underlying service details.

### Analogy:

Think of an API Gateway like a receptionist in a large company. Instead of visitors contacting different departments directly, they first speak to the receptionist, who directs them to the right department based on their needs.

## 2️⃣ Why Do We Need an API Gateway?

When building microservices, clients (like browsers, mobile apps, or other services) need to communicate with different microservices (User, Order, Payment, etc.). Without an API Gateway, the client must handle multiple endpoints, leading to:

✅ Complexity: Clients need to manage multiple service URLs.

✅ Security Issues: Services might be directly exposed.

✅ Redundant Code: Each microservice must handle cross-cutting concerns (authentication, logging, rate limiting, etc.).

With an API Gateway, we solve these problems by providing a unified interface for all microservices.

## 3️⃣ Key Features of an API Gateway

### 1. Single Entry Point 🔗

Instead of calling multiple services, clients communicate with the API Gateway.

### 2. Request Routing & Load Balancing 🔄

Routes incoming requests to the appropriate microservice.

Can balance load across multiple service instances.

### 3. Security & Authentication 🔒

Implements authentication & authorization (e.g., JWT, OAuth2).

Protects microservices from direct client access.

### 4. Rate Limiting & Throttling 🚀

Prevents excessive API requests by setting limits.

Avoids service overloading.

### 5. Logging & Monitoring 📊

Captures detailed logs & metrics for monitoring API usage.

### 6. Response Aggregation 🏗️

Combines data from multiple microservices into a single response.

Reduces the number of API calls for clients

## 4️⃣ API Gateway in Microservices Architecture

### 🔹 Without API Gateway:

```
Client -> User Service
Client -> Order Service
Client -> Payment Service

```
The client must interact with multiple microservices directly.

More overhead for handling failures, retries, and security.

### 🔹 With API Gateway:

```
Client -> API Gateway -> User Service
                  -> Order Service
                  -> Payment Service
```
The API Gateway manages routing, security, and communication.

## 5️⃣ Common API Gateway Implementations

Spring Cloud Gateway (Recommended for Spring Boot) ✅

Kong API Gateway

Nginx API Gateway

AWS API Gateway

Zuul (Older Netflix OSS API Gateway, now deprecated)

## 6️⃣ When to Use an API Gateway?

✅ For large-scale microservices requiring secure and efficient communication.

✅ When multiple client applications (Web, Mobile, IoT) need different responses.

✅ To handle load balancing, security, logging, and rate limiting centrally.

✅ When you need to simplify client interactions with microservices.

## 7️⃣ Challenges of API Gateway

❌ Single Point of Failure – If the API Gateway crashes, all services become inaccessible.

✔️ Solution: Deploy multiple instances and use load balancing.

❌ Performance Overhead – Adding an extra layer increases latency.

✔️ Solution: Optimize caching and enable fast routing.

❌ Complexity – Managing an API Gateway requires additional infrastructure.

✔️ Solution: Use Spring Cloud Gateway for easy integration.

## 1. How Routing Works in API Gateway

Gateway acts as an entry point: It receives incoming requests from clients.

Routing table matches requests: Based on predicates (conditions), it determines which microservice should handle the request.

Request forwarding: Once matched, the request is sent to the appropriate microservice (User, Order, or Payment).

Response returned: The microservice processes the request and sends the response back through the gateway.

## 2. Two Ways to Configure Routing

### ✅ Declarative Routing (application.properties / YAML)

Uses Spring Cloud properties to define routes.

Example:
```
# Gateway Service Config
server.port=8888
spring.application.name=swiggy-gateway

# User Microservice
spring.cloud.gateway.routes[0].id=user
spring.cloud.gateway.routes[0].uri=http://localhost:8001
spring.cloud.gateway.routes[0].predicates[0]=Path=/user/**

# Order Microservice
spring.cloud.gateway.routes[1].id=order
spring.cloud.gateway.routes[1].uri=http://localhost:8002
spring.cloud.gateway.routes[1].predicates[0]=Path=/order/**

# Payment Microservice
spring.cloud.gateway.routes[2].id=payment
spring.cloud.gateway.routes[2].uri=http://localhost:8003
spring.cloud.gateway.routes[2].predicates[0]=Path=/payment/**

```

### ✅ Programmatic Routing (Java Configuration)

Uses a RouteLocator bean in a Java class.
```
@Bean
public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("user", r -> r.path("/user/**")
            .uri("http://localhost:8001"))
        .route("order", r -> r.path("/order/**")
            .uri("http://localhost:8002"))
        .route("payment", r -> r.path("/payment/**")
            .uri("http://localhost:8003"))
        .build();
}
```
### 3. How Requests Are Processed

After this configuration, requests will be handled as follows:

![image](https://github.com/user-attachments/assets/6f98dfe3-1bdf-4d97-b71b-2c55afe35f60)

## 4. Benefits of Using API Gateway for Routing

✅ Centralized Routing – No need for clients to call microservices directly.

✅ Dynamic Updates – Routes can be modified without changing client applications.

✅ Security & Load Balancing – Gateway can manage authentication, rate-limiting, etc.

✅ Fault Tolerance – Prevents direct exposure of microservices to clients.

# Service Registry and Discovery in Spring Boot Using Eureka

## What is Service Registry and Discovery?

**Service Registry:** A centralized repository that stores details (name, IP, port) of all microservices in the system.

**Service Discovery:** A mechanism for microservices to dynamically find and communicate with other services without hardcoding their locations.

## Why is Service Registry and Discovery Important?

**✅ Scalability:** New instances of microservices can be registered dynamically.

**✅ Fault Tolerance:** If a service fails, it is automatically removed from the registry.

**✅ Load Balancing:** Traffic can be evenly distributed among multiple service instances.

## Using Netflix Eureka for Service Registry and Discovery

Spring Boot integrates with Netflix Eureka, which provides:

**Eureka Server:** The central registry where services register themselves.

**Eureka Client:** Each microservice registers with Eureka and discovers other services

## Step 1: Create Eureka Server
First, create a Spring Boot application that acts as the Eureka Service Registry.

### 1. Add Eureka Server Dependency
In pom.xml:
```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
</dependency>

```
### 2. Enable Eureka Server

Modify SpringBootApplication class:

```
@EnableEurekaServer
@SpringBootApplication
public class EurekaServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(EurekaServerApplication.class, args);
    }
}
```
### 3. Configure application.yml

```
server:
  port: 8761  # Default Eureka server port

eureka:
  client:
    registerWithEureka: false  # This is the registry, it should not register itself
    fetchRegistry: false       # No need to fetch registry data
  server:
    enableSelfPreservation: true
```

### 4. Start Eureka Server

Run the Spring Boot application and open http://localhost:8761.

You will see an Eureka Dashboard with no registered instances yet

## Step 2: Register Microservices as Eureka Clients

Now, modify each microservice (User, Order, Payment) to register with Eureka.

### 1. Add Eureka Client Dependency

In pom.xml of each microservice:
```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```
### 2. Enable Eureka Client in Each Service

Modify the SpringBootApplication class:

```
@EnableEurekaClient
@SpringBootApplication
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```
### 3. Configure application.yml in Each Service

User Service (application.yml)
```
server:
  port: 8001
spring:
  application:
    name: user-service  # Service name

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka  # Register with Eureka Server
```

### Order Service (application.yml)

```
server:
  port: 8002
spring:
  application:
    name: order-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka

```
### Payment Service (application.yml)
```
server:
  port: 8003
spring:
  application:
    name: payment-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka
```
## 4. Start Microservices and Verify Registration

Start **Eureka Server** (localhost:8761).

Start **User, Order, and Payment services.**

Open **http://localhost:8761** → You will see registered services.

## Step 3: Service Discovery Using Eureka

Instead of calling microservices by hardcoded URLs (http://localhost:8001),

we will use Eureka discovery client to fetch service locations dynamically

## API Gateway Integration with Eureka Server in Spring Boot Microservices

### Why Integrate API Gateway with Eureka?

When using Spring Cloud API Gateway, we typically configure routes with static URLs. However, integrating it with Eureka Server enables: 

✅ **Dynamic Service Discovery** → No need to hardcode service URLs.

✅ **Load Balancing** → Distributes traffic among multiple instances.

✅ **Centralized Routing** → Clients interact with only the gateway, not individual services

## Step 1: Create the API Gateway Service

First, set up a Spring Boot API Gateway project.

### 1. Add Dependencies in pom.xml

Include Spring Cloud Gateway and Eureka Client dependencies:

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>

<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```
### 2. Enable Eureka Client in GatewayApplication.java

Modify the main class to register the gateway with Eureka:

```
@EnableEurekaClient
@SpringBootApplication
public class ApiGatewayApplication {
    public static void main(String[] args) {
        SpringApplication.run(ApiGatewayApplication.class, args);
    }
}
```
### 3. Configure API Gateway in application.yml

Instead of hardcoding service URLs, we use Eureka service names with lb:// (Load Balancer).

```
server:
  port: 8888

spring:
  application:
    name: api-gateway

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka

spring.cloud.gateway.routes:
  - id: user-service
    uri: lb://user-service   # Eureka service name
    predicates:
      - Path=/user/**

  - id: order-service
    uri: lb://order-service
    predicates:
      - Path=/order/**

  - id: payment-service
    uri: lb://payment-service
    predicates:
      - Path=/payment/**
```
✅ Now, API Gateway dynamically discovers services registered with Eureka and forwards requests.

## Step 2: Register Microservices with Eureka

Each microservice (User, Order, Payment) should have Eureka Client configured.

### 1. Add Eureka Client Dependency (pom.xml)
Add this dependency in each microservice:
```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
</dependency>
```
### 2. Configure Each Microservice (application.yml)
Each service should register itself with Eureka Server (8761).

**User Service** (application.yml)

```
server:
  port: 8001
spring:
  application:
    name: user-service  # Service name for Eureka registration

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka

```
### Order Service (application.yml)

```
server:
  port: 8002
spring:
  application:
    name: order-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka
```
### Payment Service (application.yml)
```
server:
  port: 8003
spring:
  application:
    name: payment-service

eureka:
  client:
    serviceUrl:
      defaultZone: http://localhost:8761/eureka
```
## Step 3: Start and Verify API Gateway with Eureka

Start **Eureka Server** (localhost:8761).

Start **User**, **Order**, and **Payment Services**.

Start **API Gateway** (localhost:8888).

## Test API Gateway Endpoints

### ✅ Access User Service via API Gateway

👉 http://localhost:8888/user/1

➡ Routed to http://localhost:8001/user/1

### ✅ Access Order Service via API Gateway

👉 http://localhost:8888/order/1

➡ Routed to http://localhost:8002/order/1

### ✅ Access Payment Service via API Gateway

👉 http://localhost:8888/payment/1

➡ Routed to http://localhost:8003/payment/1

## Step 4: Enable Load Balancing (Optional)

If we deploy multiple instances of a service (e.g., two instances of user-service on different ports), API Gateway will automatically balance requests.

### Start Multiple Instances of User Service

```
server:
  port: 8001  # First instance

```
```
server:
  port: 8004  # Second instance

```
Eureka will register both instances, and API Gateway will distribute requests automatically.

## Final Summary

✅ Created API Gateway (8888).

✅ Registered User, Order, Payment Services with Eureka.

✅ Configured Dynamic Routing with Eureka (No hardcoded URLs).

✅ API Gateway now forwards requests dynamically to services.

✅ Load balancing is enabled if multiple instances are running.

# Micro Services Communication: 

**Feign Clients** and **RestTemplate** both are Java libraries commonly used for making HTTP 
requests in microservices applications. They provide a way for your application to 
communicate with external services, APIs, or other microservices over the network.

# Microservices Communication Using RestTemplate

## What is RestTemplate?

RestTemplate is a synchronous HTTP client provided by Spring to make REST API calls. It allows one microservice to communicate with another by sending HTTP requests (GET, POST, PUT, DELETE, etc.).

### Why Use RestTemplate?

✅ **Easy to use** → Simple API for making HTTP requests.
✅ **Fully customizable** → Supports headers, request bodies, and error handling.
✅ **Works with external and internal microservices** → Can communicate with both.

🚨 **Note**: Spring recommends using WebClient (Reactive) or Feign Client instead of RestTemplate for new projects. However, RestTemplate is still widely used in existing projects.

## Step-by-Step Implementation: RestTemplate Communication

We will consume the Payment Microservice REST API from the User Microservice using RestTemplate.

### Step 1: Add Dependencies

In User Service (pom.xml), add the required dependencies:
```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>
```
### Step 2: Create a RestTemplate Bean

Define a RestTemplate bean in the UserServiceApplication.java class.

```
@Bean
public RestTemplate restTemplate() {
    return new RestTemplate();
}
```
🔹 **Why a Bean?** → So we can inject it wherever needed.

### Step 3: Define PaymentResponse DTO

Create a DTO class in User Service to handle the response from the **Payment Service.**
```
public class PaymentResponse {
    private Long userId;
    private double amount;
    private String transactionId;
    private String status;

    // Getters and Setters
}

```
### Step 4: Inject RestTemplate in User Controller

Modify **UserController** to use RestTemplate for making API calls.

```
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/{userId}/payment")
    public PaymentResponse getUserPayment(@PathVariable Long userId) {
        String url = "http://localhost:8003/payment/" + userId;
        return restTemplate.getForObject(url, PaymentResponse.class);
    }
}
```
getForObject(url, ResponseType.class) → Makes a GET request and maps the response to PaymentResponse.

🔹 **URL**: http://localhost:8003/payment/{userId} → Calls Payment Service.

### Step 5: Implement Payment Service REST API

In **Payment Service**, implement the REST API for payments.

```
@RestController
@RequestMapping("/payment")
public class PaymentController {

    @GetMapping("/{userId}")
    public PaymentResponse getPaymentDetails(@PathVariable Long userId) {
        return new PaymentResponse(userId, 250.0, "TXN123456", "SUCCESS");
    }
}

```
## Step 6: Test the RestTemplate Communication

1️⃣ **Start Eureka Server** (localhost:8761)

2️⃣ **Start Payment Service** (localhost:8003)

3️⃣ Start **User Service** (localhost:8001)

4️⃣ Test **User Service RestTemplate Call**:

🟢 **URL:** http://localhost:8001/user/1/payment

🟢 **Response:**
```
{
    "userId": 1,
    "amount": 250.0,
    "transactionId": "TXN123456",
    "status": "SUCCESS"
}
```
🚀 User Service successfully communicated with Payment Service using RestTemplate!

## Conclusion

✅ RestTemplate is simple and effective for microservices communication.

✅ Requires explicit handling of URLs (hardcoded in our example).

✅ Works well for small applications but lacks built-in service discovery.

✅ For better scalability, use Feign Client with Eureka.


# Microservices Communication Using Feign Client

## Why Use Feign Client for Microservices Communication?

In a microservices architecture, services often need to communicate with each other. Instead of using RestTemplate, we use Feign Client, which simplifies HTTP calls by providing a declarative approach.

### Advantages of Feign Client

✅ **Declarative API Calls** → No need to manually create HTTP requests.

✅ **Built-in Load Balancing** → Works with Eureka for dynamic service discovery.

✅ **Easier Maintenance** → More readable and maintainable than RestTemplate.

✅ **Integration with Spring Cloud** → Supports circuit breakers and tracing.

## Step-by-Step Implementation: Feign Client Communication

We will consume the Payment Microservice REST API from the User Microservice using Feign Client.

### Step 1: Add Dependencies

In User Service (pom.xml), add the Feign Client dependency:
```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-openfeign</artifactId>
</dependency>

```
### Step 2: Enable Feign Client in UserServiceApplication.java

Add the @EnableFeignClients annotation to enable Feign.

```
@EnableFeignClients
@SpringBootApplication
public class UserServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(UserServiceApplication.class, args);
    }
}
```
### Step 3: Create a Feign Client Interface

In User Service, create an interface to communicate with the Payment Service.

```
@FeignClient(name = "payment-service")
public interface PaymentClient {
    
    @GetMapping("/payment/{userId}")
    PaymentResponse getPaymentDetails(@PathVariable("userId") Long userId);
}
```
🔹 **@FeignClient(name = "payment-service")** → Feign will discover payment-service dynamically from Eureka.

🔹 **@GetMapping("/payment/{userId}")** → Matches the REST API endpoint in the Payment Service.

🔹 **PaymentRespons**e → DTO class for receiving the response.

### Step 4: Define PaymentResponse DTO

Create a DTO class in **User Service** to handle the response from the Payment Service.

```
public class PaymentResponse {
    private Long userId;
    private double amount;
    private String transactionId;
    private String status;

    // Getters and Setters
}
```
### Step 5: Inject Feign Client in User Controller

Modify **UserController** to use Feign for fetching payment details

```
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private PaymentClient paymentClient;

    @GetMapping("/{userId}/payment")
    public PaymentResponse getUserPayment(@PathVariable Long userId) {
        return paymentClient.getPaymentDetails(userId);
    }
}
```
### ✅ Now, User Service can communicate with Payment Service via Feign Client!

### Step 6: Implement Payment Service REST API

In **Payment Service**, implement the REST API for payments.

```
@RestController
@RequestMapping("/payment")
public class PaymentController {

    @GetMapping("/{userId}")
    public PaymentResponse getPaymentDetails(@PathVariable Long userId) {
        return new PaymentResponse(userId, 250.0, "TXN123456", "SUCCESS");
    }
}
```

## Step 7: Test the Feign Client Communication

1️⃣ Start **Eureka Server** (localhost:8761)

2️⃣ Start **Payment Service** (localhost:8003)

3️⃣ Start **User Service** (localhost:8001)

4️⃣ Test **User Service** Feign Call:

🟢 **URL:** http://localhost:8001/user/1/payment

🟢 **Response:**

```
{
    "userId": 1,
    "amount": 250.0,
    "transactionId": "TXN123456",
    "status": "SUCCESS"
}
```
🚀 User Service successfully communicated with Payment Service using Feign Client!

## Conclusion

✅ Feign simplifies HTTP communication in microservices.

✅ No need to hardcode URLs, works dynamically with Eureka.

✅ Supports load balancing and circuit breakers.

# Spring Cloud Config Server & Config Clients

## What is Spring Cloud Config?

Spring Cloud Config provides centralized configuration management for microservices. Instead of hardcoding properties in each microservice, we store them in a Config Server, and microservices (Config Clients) fetch their configurations dynamically.

### 🔹 Why Use Spring Cloud Config?

✅ **Centralized Configuration Management** – Keep all configurations in one place.

✅ **Dynamic Updates** – Update configurations without restarting services.

✅ **Environment-Specific Configurations** – Manage dev, test, prod settings easily.

✅ **Security & Version Control** – Store configurations in Git, making them traceable.

## Step-by-Step Implementation of Spring Cloud Config Server

### Step 1: Create a Config Server

👉 Create a new Spring Boot project (config-server) with the following dependencies:

```
<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring Cloud Config Server -->
    <dependency>
        <groupId>org.springframework.cloud</groupId>
        <artifactId>spring-cloud-config-server</artifactId>
    </dependency>
</dependencies>

```
### Step 2: Enable Config Server

In ConfigServerApplication.java, enable the Config Server.

```
@EnableConfigServer
@SpringBootApplication
public class ConfigServerApplication {
    public static void main(String[] args) {
        SpringApplication.run(ConfigServerApplication.class, args);
    }
}

```
### Step 3: Configure application.properties (or application.yml)

Set up server port and Git repository to store configurations.

```
server.port=8888
spring.application.name=config-server

# Git repository for configurations
spring.cloud.config.server.git.uri=https://github.com/your-repo/config-repo.git
spring.cloud.config.server.git.clone-on-start=true

```
🔹 server.port=8888 → Config Server runs on port 8888.

🔹 spring.cloud.config.server.git.uri → Stores configurations in a Git repository.

### Step 4: Create a Git Repository for Configurations

Create a new public/private Git repository (e.g., config-repo).

Add configuration files for different microservices:

### 📂 config-repo (Git)
```
  ├── user-service.properties
  ├── order-service.yml
  ├── payment-service-dev.yml
  ├── payment-service-prod.yml

```
### Example: user-service.properties
```
server.port=8001
user.service.message=Hello from Config Server!

```
### Step 5: Start the Config Server

Run the Config Server (config-server).

🔹 Open http://localhost:8888/user-service/default

🔹 You should see configuration properties returned from Git.

## Step-by-Step Implementation of Config Client

#### Step 6: Modify Microservices to Fetch Configurations

👉 Modify **User Service** (user-service) to act as a Config Client.

### 1️⃣ Add Dependencies (pom.xml)

```
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-config</artifactId>
</dependency>

```
### 2️⃣ Modify bootstrap.properties (instead of application.properties)

In User Service (src/main/resources/bootstrap.properties), add:
```
spring.application.name=user-service
spring.config.import=optional:configserver:http://localhost:8888

```
🔹 spring.application.name=user-service → Matches config file in Git.

🔹 spring.config.import=configserver:http://localhost:8888 → Fetches configurations from Config Server.

### 3️⃣ Use Configuration in the Microservice

Modify UserController.java to fetch the user.service.message property from Config Server.

```
@RefreshScope  // Enables runtime refresh of configurations
@RestController
@RequestMapping("/user")
public class UserController {

    @Value("${user.service.message}")
    private String message;

    @GetMapping("/config")
    public String getConfigMessage() {
        return "Message from Config Server: " + message;
    }
}

```
✅ @Value("${user.service.message}") → Injects config from Config Server.

✅ @RefreshScope → Allows runtime configuration updates.

## Step 7: Test Config Client

1️⃣ Start the Config Server (localhost:8888).

2️⃣ Start User Service (localhost:8001).

3️⃣ Test the configuration endpoint:

🔹 **URL**: http://localhost:8001/user/config
🔹 **Response**:
```
{
    "message": "Hello from Config Server!"
}

```
🎉 User Service successfully fetched configuration from Config Server!

## Step 8: Refresh Configurations Without Restarting

To apply new configurations dynamically:

Modify config in Git (e.g., change user.service.message).

Commit and push changes.

Call the /actuator/refresh endpoint:

```
curl -X POST http://localhost:8001/actuator/refresh

```
Test http://localhost:8001/user/config again to see updated config.

✅ No need to restart the service! 🚀

## 🎯 Summary

✅ Spring Cloud Config enables centralized configuration management.

✅ Microservices fetch configurations dynamically from a Config Server.

✅ Spring Cloud Config supports dynamic updates without restarting services.

✅ Configurations can be stored in Git for version control.

# Circuit Breaker in Microservices Using Resilience4j

## 🔹 What is a Circuit Breaker?

In a microservices architecture, services communicate with each other over the network, which may be unreliable. If one service fails, it can cause cascading failures across the system.

The Circuit Breaker pattern prevents such failures by:

✅ Detecting failures and stopping further requests to the failing service.

✅ Returning a fallback response to avoid a complete system failure.

✅ Automatically recovering when the service becomes available again.

## 🔹 How Circuit Breaker Works?

The circuit breaker has three states:

### 1️⃣ CLOSED (Normal Operation)

Requests to the service are allowed.

The circuit breaker tracks failures.

### 2️⃣ OPEN (Failure State)

If failures exceed a threshold, the circuit opens.

Requests are immediately rejected.

A fallback method is used instead.

### 3️⃣ HALF-OPEN (Recovery State)

After a timeout period, some requests are allowed.

If successful, the circuit closes again.

If failures continue, it remains open.

## 🔹 Implementing Circuit Breaker in Spring Boot Using Resilience4j

Step 1: Add Dependencies

Add the following dependencies in pom.xml:

```
<dependencies>
    <!-- Spring Boot Web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Resilience4j Circuit Breaker -->
    <dependency>
        <groupId>io.github.resilience4j</groupId>
        <artifactId>resilience4j-spring-boot2</artifactId>
        <version>1.7.1</version>
    </dependency>

    <!-- Spring Boot Actuator (for monitoring) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-actuator</artifactId>
    </dependency>
</dependencies>
```

## Step 2: Create a Service with Circuit Breaker

We create a service that calls an external API (or another microservice). We use @CircuitBreaker to protect the call.

```
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    private static final String SERVICE_NAME = "myCircuitBreaker";

    @CircuitBreaker(name = SERVICE_NAME, fallbackMethod = "fallbackResponse")
    public String callExternalService() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8081/payment";  // Simulating another service

        // This request may fail if the service is down
        return restTemplate.getForObject(url, String.class);
    }

    // Fallback method when the circuit is OPEN
    public String fallbackResponse(Exception e) {
        return "Service is currently unavailable. Please try again later.";
    }
}
```

✅ @CircuitBreaker(name = "myCircuitBreaker", fallbackMethod = "fallbackResponse")

If the external service fails, the fallbackResponse method is called instead.

## Step 3: Create a REST Controller

Expose an endpoint to test the circuit breaker.

```
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CircuitBreakerController {

    private final ExternalService externalService;

    public CircuitBreakerController(ExternalService externalService) {
        this.externalService = externalService;
    }

    @GetMapping("/call-service")
    public String callService() {
        return externalService.callExternalService();
    }
}
```

## Step 4: Configure Circuit Breaker Properties
Add configuration in application.yml:
```
resilience4j:
  circuitbreaker:
    instances:
      myCircuitBreaker:
        failureRateThreshold: 50
        slowCallRateThreshold: 50
        slowCallDurationThreshold: 2000ms
        minimumNumberOfCalls: 5
        slidingWindowSize: 10
        permittedNumberOfCallsInHalfOpenState: 2
        waitDurationInOpenState: 5000ms
```
## Step 5: Testing the Circuit Breaker

1️⃣ Start your application.

2️⃣ Call http://localhost:8080/api/call-service.

3️⃣ If the external service is up, you get a normal response.

4️⃣ If the external service fails or is down, you get:

```
Service is currently unavailable. Please try again later.
```
5️⃣ After repeated failures, the circuit opens, preventing further API calls.

## 🔹 Benefits of Circuit Breaker

✅ Prevents cascading failures across services.

✅ Enhances system resilience by handling failures gracefully.

✅ Improves response time by failing fast when services are down.

✅ Automatic recovery when the failing service becomes available

## 🔹 Conclusion

Resilience4j is a powerful tool for implementing the Circuit Breaker pattern in Spring Boot microservices. It protects services from cascading failures and ensures a resilient system.

# 🚀 Enhancing Microservices Resilience with Circuit Breaker, Retry, and Rate Limiting (Using Resilience4j)

## Now that you've implemented Circuit Breaker using Resilience4j, let's enhance your microservices further with:

✅ **Retry Mechanism** - Automatically retry failed requests before triggering the circuit breaker.

✅ **Rate Limiting (RateLimiter)** - Restrict the number of requests to prevent overloading.

✅ **Bulkhead Pattern** - Limit concurrent requests to protect resources.

## 🔹 1️⃣ Implementing Retry Mechanism

A retry mechanism ensures that a failed request is attempted multiple times before giving up.

### Step 1: Add Resilience4j Retry Dependency

Since we already added the Resilience4j dependency in pom.xml, no need to add again.

### Step 2: Modify Service to Use Retry

Use @Retry annotation in your service method:

```
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    private static final String RETRY_SERVICE = "retryService";

    @Retry(name = RETRY_SERVICE, fallbackMethod = "fallbackResponse")
    public String callExternalServiceWithRetry() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8081/payment";  // Simulating another service

        System.out.println("Calling external service...");

        return restTemplate.getForObject(url, String.class);
    }

    // Fallback method when retries fail
    public String fallbackResponse(Exception e) {
        return "Service is currently unavailable. Please try again later.";
    }
}
```
### Step 3: Configure Retry Properties in application.yml
```
resilience4j:
  retry:
    instances:
      retryService:
        maxAttempts: 3   # Maximum retry attempts
        waitDuration: 2000ms  # Wait time between retries
        retryExceptions:
          - java.io.IOException
          - org.springframework.web.client.HttpServerErrorException
```
✅ The system retries 3 times, waiting 2 seconds between each attempt.

✅ If all retries fail, the fallbackResponse() is called.

### Step 4: Test the Retry Mechanism

1️⃣ Start your application.

2️⃣ Call: http://localhost:8080/api/call-service

3️⃣ If the external service fails, it will retry up to 3 times before returning the fallback response.

## 🔹 2️⃣ Implementing Rate Limiting (RateLimiter)

The RateLimiter pattern restricts the number of requests to a service within a time window.

### Step 1: Modify Service to Use Rate Limiter

Use @RateLimiter annotation:

```
import io.github.resilience4j.ratelimiter.annotation.RateLimiter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    private static final String RATE_LIMITER = "rateLimiterService";

    @RateLimiter(name = RATE_LIMITER, fallbackMethod = "rateLimiterFallback")
    public String callExternalServiceWithRateLimiter() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8081/payment";  

        System.out.println("Calling external service...");

        return restTemplate.getForObject(url, String.class);
    }

    // Fallback method when rate limit is exceeded
    public String rateLimiterFallback(Exception e) {
        return "Too many requests! Please try again later.";
    }
}
```
### Step 2: Configure Rate Limiter in application.yml

```
resilience4j:
  ratelimiter:
    instances:
      rateLimiterService:
        limitForPeriod: 5  # Max 5 requests
        limitRefreshPeriod: 10s  # Refresh limit every 10 seconds
        timeoutDuration: 500ms  # If request is blocked, wait 500ms before failing
```
✅ Max 5 requests in 10 seconds

✅ If exceeded, the request fails immediately with "Too many requests!"

### Step 3: Test Rate Limiting

1️⃣ Call: http://localhost:8080/api/call-service multiple times.

2️⃣ If you exceed 5 requests in 10 seconds, you'll get:

```
Too many requests! Please try again later.

```
## 🔹 3️⃣ Implementing Bulkhead Pattern
The Bulkhead pattern limits concurrent requests, preventing service overload.

### Step 1: Modify Service to Use Bulkhead

Use @Bulkhead annotation:

```
import io.github.resilience4j.bulkhead.annotation.Bulkhead;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalService {

    private static final String BULKHEAD_SERVICE = "bulkheadService";

    @Bulkhead(name = BULKHEAD_SERVICE, fallbackMethod = "bulkheadFallback")
    public String callExternalServiceWithBulkhead() {
        RestTemplate restTemplate = new RestTemplate();
        String url = "http://localhost:8081/payment";  

        System.out.println("Calling external service...");

        return restTemplate.getForObject(url, String.class);
    }

    // Fallback when too many concurrent requests
    public String bulkheadFallback(Exception e) {
        return "System is busy! Please try again later.";
    }
}
```
### Step 2: Configure Bulkhead in application.yml

```
resilience4j:
  bulkhead:
    instances:
      bulkheadService:
        maxConcurrentCalls: 2  # Allow max 2 parallel requests
        maxWaitDuration: 1s  # If limit reached, wait 1 sec before failing
```
✅ Only 2 concurrent requests allowed.

✅ If exceeded, new requests wait 1 second, then fail with "System is busy!"

### Step 3: Test Bulkhead

1️⃣ Call multiple requests simultaneously to http://localhost:8080/api/call-service

2️⃣ If more than 2 requests at the same time, you'll get:

```
System is busy! Please try again later.

```
## 🚀 Final Summary

![image](https://github.com/user-attachments/assets/6f88081c-c34e-4d5b-becb-8db8efd3dff6)

# Collections in Java

The Collection in Java is a framework that provides an architecture to store and manipulate the group of objects.

Java Collections can achieve all the operations that you perform on a data such as searching, sorting, insertion, manipulation, and deletion.

## What is Collection?

A Collection represents a single unit of objects, i.e., a group.

## What is a framework?
A framework provides a ready-made structure of classes and interfaces for building software applications efficiently. It simplifies adding new features by offering reusable components that perform similar tasks, eliminating the need to create a framework from scratch for each new project. This approach enhances object-oriented design, making development quicker, more consistent, and reliable.

##  📌 What is the Java Collection Framework?

The Java Collection Framework (JCF) is a set of interfaces, classes, and algorithms that provides a standard architecture to store, manipulate, and process groups of objects efficiently.

## ✅ Why Use Java Collections?

Before Java Collections (pre-JDK 1.2), Java relied on arrays, Vectors, and Hashtables. These lacked a common interface, making it difficult to manage and standardize data structures. The introduction of Java Collections simplified and unified data manipulation.

## ✅ Advantages of Java Collections Framework

**Standardization** – Common methods (add(), remove(), contains(), etc.) for different collection types.

**Reusability** – Ready-to-use, optimized data structures.

**Performance** – Well-tested, efficient algorithms for sorting, searching, and manipulation.

**Thread Safety** – Some collections (Vector, Hashtable, ConcurrentHashMap) support synchronization.

**Scalability** – Can handle large data structures efficiently.

## 📌 2. Java Collection Framework Hierarchy

The Java Collections Framework consists of three core components:

**Interfaces** – Defines abstract data types (e.g., List, Set, Map, Queue).

**Implementations** (Classes) – Concrete implementations of interfaces (ArrayList, HashSet, TreeMap).

**Algorithms** – Utility methods (Collections.sort(), Collections.shuffle()).

### ✅ Hierarchy of Java Collections

```
                 Iterable
                    │
               Collection
      ┌──────────┴──────────┐
     List                 Set
  ┌───┼────┐         ┌───┼────┐
  │   │    │         │   │    │
ArrayList  LinkedList HashSet TreeSet
  │          │         │       │
  Vector     Stack   LinkedHashSet
                      
                 Queue
                  │
         ┌────────┴────────┐
         │                 │
    PriorityQueue      Deque (ArrayDeque)
```
```
                 Map
          ┌──────┼──────┐
          │      │      │
      HashMap  TreeMap  LinkedHashMap
          │
      Hashtable
```
![image](https://github.com/user-attachments/assets/dc076613-bb56-4756-ba66-9b20da6b065c)

## 📌 3. Core Interfaces and Implementations

### ✅ List Interface (Ordered, Allows Duplicates)

A List maintains insertion order and allows duplicate elements.

### Implementations:

**ArrayList** – Dynamic array (fast random access, slow insertion/deletion).

**LinkedList** – Doubly linked list (fast insertion/deletion, slow access).

**Vector** – Thread-safe alternative to ArrayList.

**Stack** – LIFO data structure.

### Example: Using ArrayList
```
import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        System.out.println("Names: " + names);
        names.remove("Bob");
        System.out.println("After removal: " + names);
    }
}
```
### 📌 Output:
```
Names: [Alice, Bob, Charlie]
After removal: [Alice, Charlie]

```

## ✅ Set Interface (Unique Elements, Unordered)

A Set does not allow duplicate elements.

### Implementations:

**HashSet** – No order, fastest access (O(1)).

**LinkedHashSet** – Maintains insertion order.

**TreeSet** – Sorted set (O(log n), Red-Black Tree).

### Example: Using HashSet
```
import java.util.HashSet;

public class SetExample {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        set.add(10);
        set.add(20);
        set.add(10); // Duplicate ignored

        System.out.println(set); // Output: [10, 20]
    }
}
```
## ✅ Map Interface (Key-Value Pair, Unique Keys)

A Map stores key-value pairs, where keys are unique.

### Implementations:

**HashMap** – No order, fastest (O(1)).

**LinkedHashMap** – Maintains insertion order.

**TreeMap** – Sorted keys (O(log n), Red-Black Tree).

**Hashtable** – Synchronized (thread-safe).

## Example: Using HashMap

```
import java.util.HashMap;

public class MapExample {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);
        map.put("Charlie", 28);

        System.out.println(map);
    }
}

```

## ✅ Queue Interface (FIFO Data Structure)

### Implementations:

**PriorityQueue** – Heap-based queue (natural ordering).

**ArrayDeque** – Faster than Stack and LinkedList.

## Example: Using PriorityQueue
```
import java.util.PriorityQueue;

public class QueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.add(5);
        pq.add(1);
        pq.add(3);

        System.out.println(pq.poll()); // 1 (smallest element)
    }
}

```

## Iterator interface

The Iterator interface in Java is part of the Java Collections Framework and is used to iterate over collections like ArrayList, HashSet, LinkedList, etc. It provides a standard way to access elements one by one.

### Hierarchy of Iterator Interface
```
java.lang.Object  
   └── java.util.Iterator<E>
```
Iterator<E> is a generic interface where <E> represents the type of elements it iterates over.

### Methods of Iterator Interface
The Iterator interface provides three key methods:

**boolean** **hasNext()**

Returns true if the iteration has more elements.

Otherwise, returns false.

**E** **next()**

Returns the next element in the iteration.

Throws NoSuchElementException if no more elements exist.

**void** **remove() (optional method)**

Removes the last element returned by next().

Can only be called once per next() call.

Throws IllegalStateException if called without next().

### Using Iterator with ArrayList

```
import java.util.ArrayList;
import java.util.Iterator;

public class IteratorExample {
    public static void main(String[] args) {
        // Creating an ArrayList
        ArrayList<String> languages = new ArrayList<>();
        languages.add("Java");
        languages.add("Python");
        languages.add("C++");

        // Getting an Iterator
        Iterator<String> iterator = languages.iterator();

        // Iterating through the elements
        while (iterator.hasNext()) {
            String language = iterator.next();
            System.out.println(language);
        }
    }
}
`````
```
Java
Python
C++

```
## Iterator vs. Enhanced For Loop

![image](https://github.com/user-attachments/assets/54585b4e-4698-436e-8926-83e2ddb9c97b)

## ListIterator (Advanced Iterator for Lists)

Unlike Iterator, the ListIterator interface provides bidirectional traversal (forward and backward). It works only with List implementations (ArrayList, LinkedList).

## 📌  Comparing Java Collections

![image](https://github.com/user-attachments/assets/044a4577-de8e-4b4a-a0c3-1ab1a9cbefab)

# Java ArrayList

ArrayList is a resizable array implementation in Java that belongs to the Java Collections Framework. It provides a dynamic way to store elements, meaning the size of the list increases automatically as elements are added.

## Key Features of ArrayList

**Dynamic Sizing**: Unlike arrays, you don't need to declare a fixed size; it grows dynamically.

**Ordered Elements**: Maintains insertion order.

**Allows Duplicates**: Can store duplicate values.

**Indexed Access**: Provides fast access using indexes (O(1) time complexity for get() and set() operations).

**Slower Modifications**: Insertion and deletion operations (except at the end) are slower (O(n)) due to shifting elements.

**Not Synchronized**: Unlike Vector, ArrayList is not thread-safe.

## ArrayList vs. Array
![image](https://github.com/user-attachments/assets/69f5dd34-b73c-4e7e-9510-b3c32e88c3fb)

###  class hierarchy of ArrayList in Java

```
java.lang.Object  
   └── java.lang.Iterable<E>  
       └── java.util.Collection<E>  
           └── java.util.List<E>  
               └── java.util.AbstractCollection<E>  
                   └── java.util.AbstractList<E>  
                       └── java.util.ArrayList<E>  
```
### Explanation:

**Object** – The root class of all Java classes.

**Iterable<E>** – Allows an object to be used in enhanced for-loops (for-each loop).

**Collection<E>** – Defines basic collection functionalities like add(), remove(), size(), etc.

**List<E>** – Extends Collection and adds ordered elements, indexed access, and duplicate allowance.

**AbstractCollection<E>** – Provides a skeletal implementation of the Collection interface.

**AbstractList<E>** – A partial implementation of the List interface, reducing the effort to implement lists.

**ArrayList<E>** – A dynamic array implementation with fast random access and automatic resizing.

### 3. Creating an ArrayList

## Basic Syntax
```
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // Creating an ArrayList of Strings
        ArrayList<String> list = new ArrayList<>();

        // Adding elements
        list.add("Java");
        list.add("Python");
        list.add("C++");

        System.out.println(list);
    }
}
```
### Output
```
[Java, Python, C++]

```
### Parameterized Constructor (Specify Initial Capacity)

```
ArrayList<Integer> numbers = new ArrayList<>(20); // Initial Capacity = 20

```

### Creating an ArrayList from Another Collection

```
ArrayList<String> copyList = new ArrayList<>(list);

```
## 4. Internal Working of ArrayList

### Uses an Array Internally

Default capacity is 10.

Dynamically resizes when full.

### How Does ArrayList Expand?

When the internal array is full, a new array (1.5x old size) is created.

Old elements are copied into the new array.

Formula: newCapacity = oldCapacity + (oldCapacity / 2)

**Example**

If the initial capacity is 10, it grows as follows:

```
10 → 15 → 22 → 33 → 49 → 73 → 109 → ...

```
Example Usage 5. Common Operations in ArrayList

![image](https://github.com/user-attachments/assets/db63bd15-4324-4e30-bde8-4078ba937017)

### Example Usage

```
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        
        // Add elements
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        
        // Insert at index 1
        numbers.add(1, 15);
        
        // Get and Set
        System.out.println(numbers.get(2)); // Output: 20
        numbers.set(2, 25);
        
        // Remove elements
        numbers.remove(1);
        
        // Check size
        System.out.println(numbers.size()); // Output: 3
    }
}
```

## 6. Iterating Over an ArrayList

### Using for-each loop

```
for (String item : list) {
    System.out.println(item);
}
```

### Using for loop

```
for (int i = 0; i < list.size(); i++) {
    System.out.println(list.get(i));
}
```
### Using Iterator
```
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```
### Using ListIterator (Bi-Directional)

```
ListIterator<String> listIterator = list.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}
```

### 7. Sorting an ArrayList

```
import java.util.*;

public class SortArrayList {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>(Arrays.asList(5, 3, 8, 1));

        // Sort in ascending order
        Collections.sort(numbers);
        System.out.println(numbers); // [1, 3, 5, 8]

        // Sort in descending order
        Collections.sort(numbers, Collections.reverseOrder());
        System.out.println(numbers); // [8, 5, 3, 1]
    }
}
```
## 8. ArrayList vs. LinkedList

![image](https://github.com/user-attachments/assets/f24fc1f5-ea7d-472d-814b-ed34aa066e7f)

## 9. Synchronization in ArrayList

By default, ArrayList is not synchronized. To make it thread-safe:

1. Using Collections.synchronizedList()

```
List<String> syncList = Collections.synchronizedList(new ArrayList<>());
```

## 12. Summary

ArrayList is a resizable array implementation of List.

It grows dynamically by 1.5x when full.

Provides fast random access (O(1)) but slow insertions/deletions (O(n)).

Not synchronized by default, use Collections.synchronizedList() for thread safety.

Java 8 streams and lambda expressions improve processing.

# Java LinkedList Class

## 1. Introduction

LinkedList is a part of the Java Collections Framework (JCF) and implements a doubly linked list to store elements. It provides flexibility in inserting and deleting elements efficiently, unlike arrays or ArrayList, which require shifting elements.

**Package**: java.util

**Implements**: List<E>, Deque<E>, Queue<E>, Cloneable, Serializable

**Extends:** AbstractSequentialList<E>

## 2. LinkedList Class Hierarchy
```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractList<E>
           └── java.util.AbstractSequentialList<E>
               └── java.util.LinkedList<E>
```
### 🔹 Key Features of Java LinkedList

✅ Allows duplicate elements – Can store multiple occurrences of the same value.

✅ Maintains insertion order – Elements remain in the order they were inserted.

✅ Non-synchronized – Not thread-safe by default; requires explicit synchronization.

✅ Faster insertions/deletions – No shifting of elements as in an ArrayList.

✅ Used as a List, Stack, or Queue – Implements both List and Deque interfaces.

✅ Dynamic size – Automatically grows or shrinks as needed.


### Key Interfaces Implemented:

**List<E>** – Supports indexed element access.

**Deque<E>** – Enables usage as a double-ended queue.

**Queue<E>** – Allows FIFO operations.

**Cloneable** – Supports shallow cloning.

**Serializable** – Can be serialized.

## 3. How Java LinkedList Works Internally

Unlike ArrayList, which stores elements in contiguous memory as an array, LinkedList stores elements as nodes with pointers.
Each node contains:

**Data**: The actual element.

Reference to the next node (**next**)

Reference to the previous node (**prev**)

### Doubly Linked List Structure:

```
Head → [Prev | Data | Next] ↔ [Prev | Data | Next] ↔ [Prev | Data | Next] ← Tail
```
## 4. Creating a LinkedList

### Basic Syntax

```
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        // Creating LinkedList of Strings
        LinkedList<String> list = new LinkedList<>();

        // Adding elements
        list.add("Java");
        list.add("Python");
        list.add("C++");

        System.out.println(list);
    }
}
```
### Output:
```
[Java, Python, C++]
```

## Common LinkedList Operations
![image](https://github.com/user-attachments/assets/2c2981ce-b30e-44ae-b482-5759a8717a08)

### Example
```
import java.util.LinkedList;

public class LinkedListExample {
    public static void main(String[] args) {
        LinkedList<Integer> numbers = new LinkedList<>();

        // Add elements
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // Insert at index 1
        numbers.add(1, 15);

        // Get and Set
        System.out.println(numbers.get(2)); // Output: 20
        numbers.set(2, 25);

        // Remove elements
        numbers.remove(1);

        // Check size
        System.out.println(numbers.size()); // Output: 3
    }
}
```
## Iterating Over a LinkedList

### 1. Using for-each loop

```
for (String item : list) {
    System.out.println(item);
}
```
### 2. Using Iterator

```
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
```

### 3. Using ListIterator (Bi-Directional)

```
ListIterator<String> listIterator = list.listIterator();
while (listIterator.hasNext()) {
    System.out.println(listIterator.next());
}
```

## LinkedList as a Queue

Since LinkedList implements Deque, it can be used as a queue.

### FIFO Operations (Queue Behavior)

```
LinkedList<Integer> queue = new LinkedList<>();
queue.offer(10); // Add
queue.offer(20);
queue.offer(30);

System.out.println(queue.poll()); // Removes & returns 10
```
## Advantages of Doubly Linked List

✅ Faster deletions – No need to traverse the list when removing a node.

✅ Can traverse in both directions – Unlike singly linked lists.

✅ Efficient insertions – Only pointers are updated.

## Disadvantages of Doubly Linked List

❌ Higher memory usage – Each node stores two pointers.

❌ More complex implementation – Need to maintain both prev and next references.

## Summary

LinkedList is implemented as a doubly linked list.

Provides fast insertions and deletions (O(1)) at the beginning or end.

Slower random access (O(n)) than ArrayList.

Can be used as a Queue (FIFO) or Stack (LIFO).

# Java LinkedList vs. ArrayList – Detailed Comparison

Both ArrayList and LinkedList are implementations of the List interface in Java, but they have significant differences in performance, memory usage, and use cases.

## 1️⃣ Key Differences Between LinkedList and ArrayList

![image](https://github.com/user-attachments/assets/6f18d21e-4149-4303-88b1-ced5480344ce)
![image](https://github.com/user-attachments/assets/75ad708f-8475-49a7-bae2-0791a8123ea9)

## 2️⃣ When to Use ArrayList vs. LinkedList?

### ✅ Use ArrayList when:

✔️ You need fast random access (index-based retrieval).

✔️ You have more read operations than insert/delete.

✔️ Memory efficiency is important (stores only data, not pointers).

✔️ You perform batch operations like sorting.

✔️ You are dealing with small datasets where resizing cost is negligible.

📌 **Example Use Case:** Storing a list of employees where you need to frequently retrieve by index.

```
ArrayList<String> employees = new ArrayList<>();
employees.add("Alice");
employees.add("Bob");
System.out.println(employees.get(1));  // Fast O(1) access

```

## ✅ Use LinkedList when:

✔️ You need fast insertions & deletions (especially at start/middle).

✔️ You have large dynamic datasets that grow/shrink frequently.

✔️ You need queue or stack operations (FIFO or LIFO).

✔️ The list size varies frequently (avoids resizing overhead of ArrayList).

📌 **Example Use Case**: Implementing a Task Queue where tasks are added/removed frequently.
```
LinkedList<String> taskQueue = new LinkedList<>();
taskQueue.addLast("Task 1");
taskQueue.addLast("Task 2");
System.out.println(taskQueue.removeFirst());  // Fast O(1) deletion

```

## 3️⃣ Performance Benchmarks: ArrayList vs. LinkedList

Here’s a performance comparison based on 1 million elements:

![image](https://github.com/user-attachments/assets/b5194303-acf5-4175-b525-216bc5e23fa0)

## Real-World Use Cases

![image](https://github.com/user-attachments/assets/c91180dc-da0f-4327-abc2-0c2ddc66f258)

# 🔹 Vector in Java – Complete Guide

The Vector class in Java is a resizable-array implementation of the List interface, similar to ArrayList. However, it is synchronized, making it thread-safe but slower in performance compared to ArrayList.

## 1️⃣ Features of Java Vector

✅ Allows duplicate elements

✅ Maintains insertion order

✅ Thread-safe (Synchronized)

✅ Automatically resizable (Doubles in size when full)

✅ Implements List, RandomAccess, Cloneable, Serializable


## 2️⃣ Class Hierarchy of Vector

```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractList<E>
           └── java.util.Vector<E>
               └── java.util.Stack<E>

```

**Implements:** List<E>, RandomAccess, Cloneable, Serializable

## 3️⃣ Declaring a Vector in Java

```
// Creating a Vector of Strings
Vector<String> vector = new Vector<>();
vector.add("Apple");
vector.add("Banana");
vector.add("Cherry");

System.out.println(vector);  // Output: [Apple, Banana, Cherry]

```

## 4️⃣ Constructors of Vector

![image](https://github.com/user-attachments/assets/edee2044-1759-43a0-bfce-c59d573e555b)

```
Vector<Integer> vector = new Vector<>(5); // Initial capacity: 5

```

## 5️⃣ Important Methods in Vector

![image](https://github.com/user-attachments/assets/e77c264f-eff0-4269-99fb-33a96cbe76fe)

```
Vector<Integer> numbers = new Vector<>();
numbers.add(10);
numbers.add(20);
numbers.add(30);

System.out.println(numbers.get(1)); // Output: 20
numbers.remove(1);
System.out.println(numbers); // Output: [10, 30]

```
## 6️⃣ How Vector Handles Synchronization?

Unlike ArrayList, Vector is synchronized, meaning multiple threads can access it without data corruption.

**📌 Thread-safe example:**

```
Vector<Integer> vector = new Vector<>();
synchronized(vector) {
    vector.add(100);
    vector.add(200);
}
```
Vector synchronizes each method, making it slower but safe for multi-threading.

For better performance, use Collections.synchronizedList(new ArrayList<>()) instead of Vector.

## 7️⃣ Performance Comparison: Vector vs. ArrayList vs. LinkedList

![image](https://github.com/user-attachments/assets/2f5b3835-9201-405e-a80d-4e8063e284b9)

## 8️⃣ When to Use Vector?

**✅ Use Vector when:**

You need thread safety and multiple threads will access the list.

You are working in a legacy system (before Java 1.2).

You need a resizable array but with synchronized operations.

**❌ Avoid Vector when:**

Performance is a priority (use ArrayList instead).

You do not need synchronization.

You are working in modern applications (use ArrayList with Collections.synchronizedList instead).

## 9️⃣ Alternative to Vector – Collections.synchronizedList()

Instead of Vector, you can make an ArrayList thread-safe using:

```
List<Integer> list = Collections.synchronizedList(new ArrayList<>());

```
This gives better performance than Vector.

## 🔟 Real-World Example: Multi-Threaded Access to Vector

📌 Example of multiple threads accessing a Vector:

```
import java.util.Vector;

class Task implements Runnable {
    private Vector<Integer> vector;

    public Task(Vector<Integer> vector) {
        this.vector = vector;
    }

    public void run() {
        synchronized (vector) {
            vector.add((int) (Math.random() * 100));
            System.out.println(Thread.currentThread().getName() + " added an element.");
        }
    }
}

public class MultiThreadedVectorExample {
    public static void main(String[] args) {
        Vector<Integer> vector = new Vector<>();
        Thread t1 = new Thread(new Task(vector), "Thread-1");
        Thread t2 = new Thread(new Task(vector), "Thread-2");

        t1.start();
        t2.start();
    }
}
```
This ensures thread-safe operations when multiple threads modify the Vector

## 🔹 Summary

✔️ Vector is a synchronized, resizable array-based List implementation.

✔️ Slower than ArrayList because of synchronization overhead.

✔️ Useful in multi-threaded environments but not recommended for single-threaded use.

✔️ Alternatives: Use ArrayList with Collections.synchronizedList().

## 🔹 Stack in Java Collections

The Stack class in Java is a Last In, First Out (LIFO) data structure. It extends the Vector class and is synchronized, meaning it's thread-safe but slower than ArrayDeque, which is a better alternative in most cases.

## 1️⃣ Stack Class Hierarchy

```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractList<E>
           └── java.util.Vector<E>
               └── java.util.Stack<E>
```
Implements List<E>, Collection<E>, Iterable<E>, Cloneable, Serializable

## 2️⃣ Creating a Stack in Java

🔹 Declaration:

```
Stack<Integer> stack = new Stack<>();

```

## 3️⃣ Key Methods in Stack


![image](https://github.com/user-attachments/assets/91e29e40-06aa-40af-abb2-f1b7c60ac93b)

## 4️⃣ Example of Stack Operations

```
import java.util.Stack;

public class StackExample {
    public static void main(String[] args) {
        Stack<Integer> stack = new Stack<>();

        // Pushing elements onto the stack
        stack.push(10);
        stack.push(20);
        stack.push(30);
        System.out.println("Stack: " + stack); // Output: [10, 20, 30]

        // Peek (Top Element)
        System.out.println("Top element: " + stack.peek()); // Output: 30

        // Pop (Remove Top Element)
        System.out.println("Popped: " + stack.pop()); // Output: 30
        System.out.println("Stack after pop: " + stack); // Output: [10, 20]

        // Search
        System.out.println("Position of 10: " + stack.search(10)); // Output: 2

        // Check if stack is empty
        System.out.println("Is stack empty? " + stack.empty()); // Output: false
    }
}

```
## 5️⃣ Stack vs. ArrayDeque (Better Alternative)

ArrayDeque is faster and preferred over Stack for stack operation

![image](https://github.com/user-attachments/assets/f8704086-587b-4eed-b94f-a3dfde30332f)

📌 Using ArrayDeque instead of Stack

```
import java.util.ArrayDeque;

ArrayDeque<Integer> stack = new ArrayDeque<>();
stack.push(10);
stack.push(20);
stack.push(30);
System.out.println(stack.pop()); // Output: 30

```
## 6️⃣ Real-World Use Cases of Stack

✔ Expression evaluation (e.g., Postfix, Prefix expressions)

✔ Undo/Redo operations in text editors

✔ Backtracking algorithms (e.g., Maze solving, DFS traversal)

✔ Function call stack in programming languages

# 🔹 Java Queue Interface (FIFO Structure)

The Queue interface in Java represents a collection designed for holding elements prior to processing. It follows the First-In-First-Out (FIFO) principle, where elements are added at the rear and removed from the front.

## 1️⃣ Queue Interface Hierarchy

```
java.lang.Object
   └── java.util.Collection<E>
       └── java.util.Queue<E>
```
The Queue interface extends the Collection<E> interface.

Implementing classes include:

LinkedList (Doubly-linked list, allows duplicates)

PriorityQueue (Heap-based, elements ordered by priority)

ArrayDeque (Resizes dynamically, efficient for stacks & queues)


## 2️⃣ Common Implementations of Queue

![image](https://github.com/user-attachments/assets/1c9bf940-5095-409d-a306-b26b14f27ad6)

## 3️⃣ Queue Methods

![image](https://github.com/user-attachments/assets/44173119-8af2-4a19-aaad-07130723f9d8)

## 5️⃣ Real-World Applications of Queue

✔ Task Scheduling (e.g., Printer jobs, ThreadPoolExecutor)

✔ Breadth-First Search (BFS) (Graph traversal)

✔ Order Processing Systems (E-commerce)

✔ Load Balancing (Managing requests in a web serve

## 🔹 PriorityQueue Class in Java

The PriorityQueue class in Java is a heap-based implementation of the Queue interface. Unlike a regular queue, which follows FIFO (First-In-First-Out), a PriorityQueue orders its elements based on natural ordering or a custom comparator.

### 📌 Key Characteristics:

✔ Implements a min-heap by default (smallest element is always at the head).

✔ Does not allow null elements.

✔ Does not allow heterogeneous elements (All elements must be comparable).

✔ Insertion order is not preserved (because elements are sorted).

✔ Not thread-safe (Use PriorityBlockingQueue for concurrency).


## 1️⃣ PriorityQueue Class Hierarchy
```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractQueue<E>
           └── java.util.PriorityQueue<E>
```
PriorityQueue extends AbstractQueue, which implements the Queue interface.

```
import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        pq.offer(40);
        pq.offer(10);
        pq.offer(30);
        pq.offer(20);

        System.out.println("Priority Queue: " + pq); // Output: [10, 20, 30, 40] (Heap order)

        System.out.println("Dequeued: " + pq.poll()); // Output: 10
        System.out.println("Queue after poll: " + pq); // Output: [20, 40, 30]
    }
}
```
✔ The smallest element is always dequeued first.

## 7️⃣ When to Use PriorityQueue?

✔ Task Scheduling (e.g., CPU job scheduling)

✔ Graph Algorithms (e.g., Dijkstra’s shortest path)

✔ Event-driven Simulations (Handling events based on priority)

✔ Data Processing (Processing elements in priority order)

## 🔹 Java Deque (Double-Ended Queue) Interface

The Deque (Double-Ended Queue) interface in Java extends the Queue interface and provides the ability to add and remove elements from both ends (head and tail). It supports FIFO (First-In-First-Out) and LIFO (Last-In-First-Out) operations, making it a versatile data structure.

### 📌 Key Characteristics of Deque:

✔ Supports insertion and deletion at both ends (head & tail).

✔ Allows duplicate elements.

✔ Not thread-safe (Use ConcurrentLinkedDeque for concurrency).

✔ Implemented by LinkedList and ArrayDeque.

## 1️⃣ Deque Interface Hierarchy

```
java.lang.Object
   └── java.util.Collection<E>
       └── java.util.Queue<E>
           └── java.util.Deque<E>
               ├── java.util.ArrayDeque<E>
               ├── java.util.LinkedList<E>
               └── java.util.concurrent.ConcurrentLinkedDeque<E>  (Thread-Safe)

```
## 2️⃣ Methods in Deque Interface

![image](https://github.com/user-attachments/assets/df41b472-1cc8-45f2-a10d-1b9f1ec625af)

```
import java.util.Deque;
import java.util.ArrayDeque;

public class DequeExample {
    public static void main(String[] args) {
        Deque<Integer> deque = new ArrayDeque<>();

        deque.addFirst(10); // Adds to front
        deque.addLast(20);  // Adds to rear
        deque.offerFirst(5); // Adds to front
        deque.offerLast(25); // Adds to rear

        System.out.println("Deque: " + deque); // Output: [5, 10, 20, 25]

        System.out.println("Remove First: " + deque.pollFirst()); // Output: 5
        System.out.println("Remove Last: " + deque.pollLast());   // Output: 25
        System.out.println("Updated Deque: " + deque); // Output: [10, 20]
    }
}
```
✔ ArrayDeque is recommended over LinkedList because it is faster for add/remove operations.

### When to Use Deque?

✔ Deque as a Stack → push() and pop() operations.

✔ Deque as a Queue → offer() and poll() operations.

✔ Sliding Window Problems (e.g., Maximum in sliding window).

✔ Undo/Redo Operations (Used in text editors).

✔ Palindrome Checking (Checking from both ends).

# 🔹 Java Set Interface (Collection Framework)

The Set interface in Java is a part of the java.util package and extends the Collection interface. It represents a collection of unique elements, meaning it does not allow duplicate values.

## 1️⃣ Key Characteristics of Set

✔ No duplicate elements allowed.

✔ Unordered collection (except for LinkedHashSet, which maintains insertion order).

✔ Allows one null value.

✔ Not indexed (elements cannot be accessed by index like lists).

✔ Implements mathematical set operations (Union, Intersection, Difference).

## 2️⃣ Set Interface Hierarchy

```
java.lang.Object
   └── java.util.Collection<E>
       └── java.util.Set<E>
           ├── java.util.HashSet<E>          (Fastest, unordered)
           ├── java.util.LinkedHashSet<E>    (Maintains insertion order)
           ├── java.util.TreeSet<E>          (Sorted, Red-Black Tree)
           └── java.util.concurrent.CopyOnWriteArraySet<E> (Thread-safe)

```

**HashSet** → Unordered, best performance (O(1) for add, remove, contains).

**LinkedHashSet** → Maintains insertion order, slightly slower than HashSet.

**TreeSet** → Sorted set, O(log n) complexity due to Red-Black Tree.

**CopyOnWriteArraySet** → Thread-safe implementation.

## 3️⃣ Methods in Set Interface

![image](https://github.com/user-attachments/assets/27742c10-34fe-4a1a-a706-1ecbddf56d92)

##  4️⃣ Example: Using HashSet

```
import java.util.HashSet;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();

        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple");  // Duplicate, will be ignored

        System.out.println("Set: " + set);  // Output: [Banana, Cherry, Apple] (Order may vary)
        System.out.println("Contains Apple? " + set.contains("Apple")); // true
        set.remove("Banana");
        System.out.println("After Removal: " + set);
    }
}

```
✔ HashSet does not maintain insertion order

## 5️⃣ Example: Using LinkedHashSet

### 1️⃣ Key Characteristics of HashSet

✔ No duplicate elements allowed.

✔ Unordered collection (Elements are stored based on their hash code).

✔ Allows one null value.

✔ Not indexed (Elements cannot be accessed by index).

✔ Fast performance (O(1) time complexity for add, remove, and contains).

✔ Not synchronized (Not thread-safe, but can be synchronized manually).


## 2️⃣ HashSet Class Hierarchy

```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractSet<E>
           └── java.util.HashSet<E>
```
HashSet extends AbstractSet, which implements the Set interface.

Internally, HashSet uses a HashMap to store elements, where each element is stored as a key in the map, with a dummy value.

## 3️⃣ Internal Working of HashSet

Uses Hashing → Elements are stored based on their hash code.

Uses HashMap internally → Each element in HashSet is stored as a key in a HashMap, with a dummy value (PRESENT).

Maintains Unordered Data → Elements are not stored in insertion order.

## 4️⃣ Key Methods in HashSet

![image](https://github.com/user-attachments/assets/447f0fac-6790-4a57-8220-c3c4d678eeb9)

## 5️⃣ Example: Basic HashSet Operations

```
import java.util.HashSet;

public class HashSetExample {
    public static void main(String[] args) {
        HashSet<String> set = new HashSet<>();

        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple");  // Duplicate, will be ignored

        System.out.println("HashSet: " + set);  // Output: [Banana, Cherry, Apple] (Order may vary)
        System.out.println("Contains Apple? " + set.contains("Apple")); // true
        set.remove("Banana");
        System.out.println("After Removal: " + set);
    }
}

```
✔ HashSet does not maintain insertion order.

## 6️⃣ Performance of HashSet

Best case (O(1)): Operations like add(), remove(), and contains() run in constant time.

Worst case (O(n)): If too many hash collisions occur, operations can degrade to linear time.

Memory Consumption: HashSet uses a HashMap, so it requires more memory compared to other sets.

## 7️⃣ How HashSet Handles Collisions

🔹 HashSet uses a hashing mechanism to determine where elements should be stored.

🔹 If two elements have the same hash code (collision), Java handles it using Linked Lists (before Java 8) and Balanced Trees (after Java 8).

## 8️⃣ Difference Between HashSet and List

![image](https://github.com/user-attachments/assets/5310d7fd-139e-43bd-a235-e56d5940a253)

## 9️⃣ Example: HashSet with Integer Elements
```
import java.util.HashSet;

public class HashSetIntegerExample {
    public static void main(String[] args) {
        HashSet<Integer> numbers = new HashSet<>();

        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(10);  // Duplicate, ignored

        System.out.println("HashSet: " + numbers); // Output: [20, 10, 30] (Order may vary)
    }
}
```
## 🔹 HashSet vs LinkedHashSet vs TreeSet
![image](https://github.com/user-attachments/assets/284a9fad-1d25-4668-abff-260b3efec284)

## 📌 Summary
![image](https://github.com/user-attachments/assets/048c02e5-5168-4efa-8ca8-8b37bb199f99)

## 🔹 Java LinkedHashSet (Collection Framework)

The LinkedHashSet class in Java is a part of the java.util package. It extends HashSet and implements the Set interface. Unlike HashSet, it maintains the insertion order of elements while ensuring that duplicates are not allowed.

## 1️⃣ Key Characteristics of LinkedHashSet

✔ No duplicate elements allowed.

✔ Maintains insertion order (Unlike HashSet).

✔ Faster than TreeSet but slower than HashSet.

✔ Allows one null value.

✔ Not indexed (Elements cannot be accessed by index).

✔ Not synchronized (Not thread-safe, but can be synchronized manually

## 2️⃣ LinkedHashSet Class Hierarchy

```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractSet<E>
           └── java.util.HashSet<E>
               └── java.util.LinkedHashSet<E>
```

LinkedHashSet extends HashSet, which means it inherits all properties of HashSet but maintains insertion order.

It internally uses a LinkedHashMap to store elements.

## 3️⃣ Internal Working of LinkedHashSet

Uses Hashing → Similar to HashSet, it uses a hash table to store elements.

Maintains a doubly linked list → Unlike HashSet, it maintains a linked list of elements to preserve insertion order.

Uses LinkedHashMap internally → Each element is stored as a key in the LinkedHashMap, with a dummy value (PRESENT).

## 4️⃣ Key Methods in LinkedHashSet

![image](https://github.com/user-attachments/assets/344492f4-1eeb-490c-91f1-8468e0077b28)

## 5️⃣ Example: Basic LinkedHashSet Operations

```
import java.util.LinkedHashSet;

public class LinkedHashSetExample {
    public static void main(String[] args) {
        LinkedHashSet<String> set = new LinkedHashSet<>();

        set.add("Apple");
        set.add("Banana");
        set.add("Cherry");
        set.add("Apple");  // Duplicate, will be ignored

        System.out.println("LinkedHashSet: " + set);  
        // Output: [Apple, Banana, Cherry] (Maintains insertion order)

        System.out.println("Contains Banana? " + set.contains("Banana")); // true
        set.remove("Banana");
        System.out.println("After Removal: " + set);
    }
}
```

✔ LinkedHashSet maintains insertion order, unlike HashSet.

## 6️⃣ Performance of LinkedHashSet
![image](https://github.com/user-attachments/assets/547ba515-ff6e-4bd2-9a74-90b10b7ce00d)

Best case (O(1)): Operations like add(), remove(), and contains() run in constant time.

Worst case (O(n)): If too many hash collisions occur, performance may degrade.

Memory Consumption: Uses more memory than HashSet because it maintains a linked list.

## 7️⃣ Difference Between HashSet, LinkedHashSet, and TreeSet

![image](https://github.com/user-attachments/assets/2a34d58a-e8a7-48ea-95ff-21e6f8ea1feb)

# 🔹 Java TreeSet (Collection Framework)

The TreeSet class in Java is a part of the java.util package. It implements the SortedSet interface and extends the AbstractSet class. The elements in a TreeSet are automatically sorted in ascending order (natural order or as per a custom comparator).

## 1️⃣ Key Characteristics of TreeSet

✔ Elements are stored in sorted order (Ascending by default).

✔ No duplicate elements are allowed.

✔ Implements NavigableSet and SortedSet.

✔ Based on a Red-Black Tree (self-balancing binary search tree).

✔ Not indexed (Cannot access elements using an index like an array).

✔ Not synchronized (Not thread-safe, but can be synchronized manually).

✔ Allows only one null value (only if it's the first element added).

## 2️⃣ TreeSet Class Hierarchy
```
java.lang.Object
   └── java.util.AbstractCollection<E>
       └── java.util.AbstractSet<E>
           └── java.util.TreeSet<E>
```
TreeSet implements the SortedSet and NavigableSet interfaces.

Internally, it uses a Red-Black Tree (a self-balancing binary search tree).

## 3️⃣ Internal Working of TreeSet

Uses a Red-Black Tree for storage → This ensures that all operations (insert, delete, search) run in O(log n) time.

Automatically sorts elements → When you insert elements, they are placed in sorted order.

Maintains balance → Due to the self-balancing nature of the Red-Black Tree, the operations remain efficient.

## 4️⃣ Key Methods in TreeSet

![image](https://github.com/user-attachments/assets/0fc9d589-4195-4091-bee8-0f295083e75b)

## 5️⃣ Example: Basic TreeSet Operations
```
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
        TreeSet<Integer> treeSet = new TreeSet<>();

        treeSet.add(40);
        treeSet.add(10);
        treeSet.add(30);
        treeSet.add(20);

        System.out.println("TreeSet: " + treeSet);  
        // Output: [10, 20, 30, 40] (Sorted Order)

        System.out.println("First Element: " + treeSet.first());  // 10
        System.out.println("Last Element: " + treeSet.last());    // 40
        System.out.println("Higher than 20: " + treeSet.higher(20)); // 30
        System.out.println("Lower than 30: " + treeSet.lower(30));   // 20
    }
}
```
✔ TreeSet automatically sorts elements in ascending order.

## 6️⃣ Performance of TreeSet

![image](https://github.com/user-attachments/assets/68aa86a4-3418-47c2-9b1b-d7e700f70200)

Slower than HashSet but faster than LinkedList for sorted retrieval.

Ideal for applications that require sorted data with quick retrieval.

# 🔹 Java Map Interface (Collection Framework)

The Map interface in Java is part of the java.util package and represents a collection of key-value pairs. Unlike List or Set, a Map does not allow duplicate keys, but each key can be mapped to a single value.
![image](https://github.com/user-attachments/assets/b8384111-e9b8-4a75-9532-93c526fda364)


## 1️⃣ Key Features of Map

✔ Stores key-value pairs (key -> value).

✔ No duplicate keys allowed (but values can be duplicate).

✔ Each key is mapped to at most one value.

✔ Efficient lookup, insertion, and deletion operations.

✔ Supports different implementations (HashMap, TreeMap, LinkedHashMap)

✔ Does not extend Collection (works differently from List & Set).

## 2️⃣ Hierarchy of Java Map Interface

```
java.lang.Object
   └── java.util.Map<K, V>  (Interface)
       ├── java.util.HashMap<K, V>
       ├── java.util.LinkedHashMap<K, V>
       ├── java.util.TreeMap<K, V>
       ├── java.util.Hashtable<K, V>
       ├── java.util.EnumMap<K extends Enum<K>, V>
       └── java.util.WeakHashMap<K, V>
```

**🔹 HashMap** → Unordered, best for general-purpose.

**🔹 LinkedHashMap** → Maintains insertion order.

**🔹 TreeMap** → Sorted order (Ascending by default).

**🔹 Hashtable** → Thread-safe but slower.

## 3️⃣ Key Methods in Map Interface

![image](https://github.com/user-attachments/assets/f414322e-7d53-4625-8804-56c1ddcaa353)

## 4️⃣ Example: Basic Map Operations

```
import java.util.*;

public class MapExample {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();

        map.put(101, "Alice");
        map.put(102, "Bob");
        map.put(103, "Charlie");

        System.out.println("Map: " + map);  // {101=Alice, 102=Bob, 103=Charlie}
        System.out.println("Get key 102: " + map.get(102));  // Bob
        System.out.println("Contains key 103? " + map.containsKey(103));  // true
        System.out.println("Contains value 'David'? " + map.containsValue("David"));  // false

        map.remove(102);
        System.out.println("After removing key 102: " + map);
    }
}
```
✔ Insertion order is not maintained in HashMap.

## 5️⃣ Iterating Over a Map

### 🔹 Using keySet()
```
for (Integer key : map.keySet()) {
    System.out.println("Key: " + key + ", Value: " + map.get(key));
}
```
### 🔹 Using entrySet() (Best Way)

```
for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
}
```

### 🔹 Using forEach() (Java 8)

```
map.forEach((key, value) -> System.out.println("Key: " + key + ", Value: " + value));

```
## 6️⃣ Different Implementations of Map

### 🔹 HashMap (Unordered, Fastest)
```
Map<String, Integer> hashMap = new HashMap<>();
hashMap.put("Apple", 50);
hashMap.put("Banana", 20);
hashMap.put("Cherry", 30);
System.out.println(hashMap);  // {Banana=20, Cherry=30, Apple=50} (Order not guaranteed)
```
### 🔹 LinkedHashMap (Maintains Insertion Order)
```
Map<String, Integer> linkedHashMap = new LinkedHashMap<>();
linkedHashMap.put("Apple", 50);
linkedHashMap.put("Banana", 20);
linkedHashMap.put("Cherry", 30);
System.out.println(linkedHashMap);  // {Apple=50, Banana=20, Cherry=30} (Maintains order)
```

### 🔹 TreeMap (Sorted Order)
```
Map<String, Integer> treeMap = new TreeMap<>();
treeMap.put("Apple", 50);
treeMap.put("Banana", 20);
treeMap.put("Cherry", 30);
System.out.println(treeMap);  // {Apple=50, Banana=20, Cherry=30} (Sorted)
```
### 🔹 Hashtable (Thread-Safe, Legacy)

```
Map<String, Integer> hashtable = new Hashtable<>();
hashtable.put("Apple", 50);
hashtable.put("Banana", 20);
hashtable.put("Cherry", 30);
System.out.println(hashtable);  // {Banana=20, Cherry=30, Apple=50}
```
🚀 Use ConcurrentHashMap instead of Hashtable for better performance.

## 7️⃣ Difference Between HashMap, LinkedHashMap, TreeMap, and Hashtable

![image](https://github.com/user-attachments/assets/f73e6ef1-7e09-43bd-b20f-c7c0191b1bb6)

### By default, HashMap is not thread-safe. To synchronize:

```
Map<Integer, String> syncMap = Collections.synchronizedMap(new HashMap<>());
synchronized (syncMap) {
    for (Map.Entry<Integer, String> entry : syncMap.entrySet()) {
        System.out.println(entry.getKey() + " : " + entry.getValue());
    }
}
```
### 🔹 Better Alternative: Use ConcurrentHashMap

```
import java.util.concurrent.ConcurrentHashMap;

ConcurrentHashMap<Integer, String> concurrentMap = new ConcurrentHashMap<>();
concurrentMap.put(1, "Alice");
concurrentMap.put(2, "Bob");
```
## 📌 Summary

![image](https://github.com/user-attachments/assets/a30e8f55-1828-4a98-bb2b-e870814b9b07)

## 🚀 Conclusion

Use HashMap for fast, unordered key-value storage.

Use LinkedHashMap when insertion order matters.

Use TreeMap for sorted keys.

Use ConcurrentHashMap for multi-threading.

## Java HashMap

HashMap is one of the most commonly used classes in Java that implements the Map interface. It is part of the Java Collections Framework and provides an unordered collection of key-value pairs

## 🔹 Key Features of HashMap

✅ Stores key-value pairs using a hashing mechanism.

✅ Allows one null key and multiple null values.

✅ No duplicate keys (each key is unique).

✅ Order is not maintained (unlike LinkedHashMap).

✅ Fast operations (O(1) time complexity for get/put operations in ideal cases).

✅ Non-synchronized (not thread-safe by default).

## 🔹 HashMap Class Declaration

```
public class HashMap<K, V> extends AbstractMap<K, V>
    implements Map<K, V>, Cloneable, Serializable
```

## 🔹 Internal Working of HashMap

1️⃣ Uses an array of Linked Lists (buckets) internally.

2️⃣ Each key is hashed into an index using the hashCode() method.

3️⃣ If multiple keys map to the same index (hash collision), it uses separate chaining (Linked List or Tree).

4️⃣ Uses load factor (default 0.75) to decide when to resize the table (double the size).

## 🔹 Creating a HashMap
```
import java.util.HashMap;

public class HashMapExample {
    public static void main(String[] args) {
        // Creating a HashMap
        HashMap<Integer, String> map = new HashMap<>();

        // Adding key-value pairs
        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");

        // Printing the HashMap
        System.out.println(map);
    }
}
```
### 🛠 Output:

```
{1=Apple, 2=Banana, 3=Cherry}

```

## 🔹 Common HashMap Methods

![image](https://github.com/user-attachments/assets/3385f2a8-e67d-4113-83d2-b3ef08d39f43)

### 🔹 Accessing Values from HashMap

```
System.out.println("Value for key 2: " + map.get(2)); 

```
### 🛠 Output:
```
Value for key 2: Banana

```
## 🔹 Iterating Over a HashMap

### 1️⃣ Using forEach and Lambda

```
map.forEach((key, value) -> System.out.println(key + " -> " + value));

```
## 2️⃣ Using entrySet()

```
for (Map.Entry<Integer, String> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}

```
## 🔹 Handling Collisions in HashMap

Uses Separate Chaining (Linked List → Tree if many collisions).

Rehashing occurs when the load factor (0.75 default) is exceeded.

## 🔹 Thread-Safety in HashMap

🚨 HashMap is not synchronized, so it’s not thread-safe.

✅ Use Collections.synchronizedMap() or ConcurrentHashMap for multi-threaded environments.

```
Map<Integer, String> syncMap = Collections.synchronizedMap(new HashMap<>());

```
## 🔹 When to Use HashMap?

✔ When you need fast lookups (O(1) time).

✔ When insertion order doesn’t matter.

✔ When you don’t need synchronization (single-threaded).

## 📌 Example: HashMap for User Login System
```
import java.util.HashMap;
import java.util.Scanner;

public class LoginSystem {
    public static void main(String[] args) {
        HashMap<String, String> users = new HashMap<>();
        users.put("admin", "admin123");
        users.put("user1", "password1");
        users.put("user2", "pass123");

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter username: ");
        String username = scanner.nextLine();

        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (users.containsKey(username) && users.get(username).equals(password)) {
            System.out.println("Login Successful!");
        } else {
            System.out.println("Invalid Credentials.");
        }

        scanner.close();
    }
}
```

### 🛠 Sample Output:

```
Enter username: admin
Enter password: admin123
Login Successful!
```
## 🔹 HashMap vs Other Maps

![image](https://github.com/user-attachments/assets/e20de0a3-b047-43b6-85f8-5a1cc53f30f1)

## ✅ Summary

✔ Stores key-value pairs using hashing.

✔ Allows one null key and multiple null values.

✔ Fast O(1) lookup and insertion.

✔ Not thread-safe (use ConcurrentHashMap for multi-threading).

✔ Does not maintain order (use LinkedHashMap if ordering is required).

## Java TreeMap & LinkedHashMap

Both TreeMap and LinkedHashMap are implementations of the Map interface in Java, but they have distinct behaviors. Let’s explore each in detail.

### 🔹 Java TreeMap

TreeMap is a sorted implementation of the Map interface that stores key-value pairs in a Red-Black Tree (a self-balancing binary search tree).

### ✅ Key Features

✔ Stores key-value pairs in sorted order (based on natural ordering or a custom comparator).

✔ No duplicate keys allowed (each key must be unique).

✔ Null keys not allowed (throws NullPointerException).

✔ Maintains ascending key order (sorted by default).

✔ Performance: O(log n) for put, get, remove operations due to tree-based storage.

✔ Not synchronized (use Collections.synchronizedSortedMap() for thread safety).

## 🔹 Creating a TreeMap

```
import java.util.TreeMap;

public class TreeMapExample {
    public static void main(String[] args) {
        TreeMap<Integer, String> map = new TreeMap<>();

        // Adding key-value pairs
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Cherry");

        // Printing TreeMap (Sorted order)
        System.out.println(map);
    }
}

```

### 🛠 Output:
```
{1=Apple, 2=Cherry, 3=Banana}

```
🌟 Keys are sorted automatically!

### 🔹 Common TreeMap Methods

![image](https://github.com/user-attachments/assets/b6e2bca8-4913-4a86-91df-750e6efc7058)

## 🔹 When to Use TreeMap?

✔ When you need sorted order for keys.

✔ When fast searching (O(log n)) is acceptable.

✔ When you don’t need null keys.

# 🔹 Java LinkedHashMap

LinkedHashMap is a HashMap with a linked list structure that maintains insertion order.

## ✅ Key Features

✔ Maintains the insertion order (Unlike HashMap, which is unordered).

✔ Allows one null key and multiple null values.

✔ Faster than TreeMap (O(1) time complexity for basic operations).

✔ Not synchronized (Use Collections.synchronizedMap() for thread safety).

✔ Can be used for creating an LRU Cache.

## 🔹 LinkedHashMap Class Declaration

```
public class LinkedHashMap<K, V> extends HashMap<K, V>
    implements Map<K, V>
```
Extends HashMap and maintains insertion order using a doubly linked list.

## 🔹 Creating a LinkedHashMap

```
import java.util.LinkedHashMap;

public class LinkedHashMapExample {
    public static void main(String[] args) {
        LinkedHashMap<Integer, String> map = new LinkedHashMap<>();

        // Adding key-value pairs
        map.put(3, "Banana");
        map.put(1, "Apple");
        map.put(2, "Cherry");

        // Printing LinkedHashMap (Insertion Order)
        System.out.println(map);
    }
}
```
### 🛠 Output:
```
{3=Banana, 1=Apple, 2=Cherry}
```
## 🔹 TreeMap vs LinkedHashMap vs HashMap

![image](https://github.com/user-attachments/assets/6b77cdaf-cb13-4861-9f80-29058f6665a0)

## ✅ Summary

**✔ TreeMap** → Sorted order, O(log n) operations, no null keys.

**✔ LinkedHashMap** → Insertion order, O(1) operations, allows null keys.

**✔ HashMap** → Unordered, O(1) operations, allows null keys.

# Java 8 Features with Examples

Oracle released a new version of Java as Java 8 in March 18, 2014. It was a revolutionary release of the Java for software development platform. It includes various upgrades to the Java programming, JVM, Tools and libraries.

## Java 8 Programming Language Enhancements

Java 8 provides following features for Java Programming:

Lambda expressions,

Method references,

Functional interfaces,

Stream API,

Default methods,

Base64 Encode Decode,

Static methods in interface,

Optional class,

Collectors class,

ForEach() method,

Nashorn JavaScript Engine,

Parallel Array Sorting,

Type and Repating Annotations,

IO Enhancements,

Concurrency Enhancements,

JDBC Enhancements etc.

## 🔹 What are Lambda Expressions?

A Lambda Expression is a concise way to represent an anonymous function — a method without a name. It helps implement functional interfaces in a much cleaner way.

### ✅ Syntax:

```
(parameters) -> { body }

```

### ✅ Example:
```
(int a, int b) -> { return a + b; }

```

Or shorter (when possible):

```
(a, b) -> a + b

```
### 🔹 Why use Lambda Expressions?

They are mainly used to:

Simplify code

Reduce boilerplate

Make code more functional (like in streams and collections)

Replace anonymous inner classes

## 🔹 Functional Interface Recap

A functional interface is an interface with only one abstract method.

Example:

```
@FunctionalInterface
interface MyFunctional {
    void show();
}

```
You can pass a lambda to this:
```
MyFunctional mf = () -> System.out.println("Hello Lambda");
mf.show();  // Output: Hello Lambda
```

## 🔹 Examples of Lambda Usage

### ✅ 1. No Parameters

```
Runnable r = () -> System.out.println("Running thread using lambda");
new Thread(r).start();
```

### ✅ 2. Single Parameter

```
Consumer<String> printUpper = s -> System.out.println(s.toUpperCase());
printUpper.accept("java");  // Output: JAVA
```

### ✅ 3. Multiple Parameters
```
BiFunction<Integer, Integer, Integer> sum = (a, b) -> a + b;
System.out.println(sum.apply(5, 3));  // Output: 8

```
# ✅ Java 8 Functional Interfaces

## 🔹 What is a Functional Interface?

An interface with exactly one abstract method.

Can have any number of default or static methods.

Known as SAM Interfaces (Single Abstract Method).

Used to implement Lambda Expressions and Method References.

Annotated with @FunctionalInterface (optional but recommended).

## 🔹 Custom Functional Interface

```
@FunctionalInterface
interface Sayable {
    void say(String msg); // Single abstract method
}
```

Example:
```
public class FunctionalInterfacesExample {
    public static void main(String[] args) {
        Sayable sayable = (msg) -> System.out.println(msg);
        sayable.say("Say something ..");
    }
}
```
## 🔹 Java 8 Predefined Functional Interfaces

### 1. Predicate<T>

Used to test a condition and return a boolean result.

```
import java.util.function.Predicate;

public class PredicateDemo {
    public static void main(String[] args) {
        Predicate<String> isLongerThan5 = str -> str.length() > 5;
        System.out.println(isLongerThan5.test("Welcome")); // true
    }
}
```
### 2. Function<T, R>

Transforms input of type T into output of type R.

```
import java.util.function.Function;

public class FunctionDemo {
    public static void main(String[] args) {
        Function<Integer, String> toStringFunction = num -> "Number: " + num;
        System.out.println(toStringFunction.apply(42)); // Number: 42
    }
}
```
### 3. Supplier<T>

Supplies results without taking any input.
```
import java.util.function.Supplier;

public class SupplierDemo {
    public static void main(String[] args) {
        Supplier<Double> randomSupplier = () -> Math.random();
        System.out.println("Generated: " + randomSupplier.get());
    }
}
```
### 4. Consumer<T>

Consumes an input and returns nothing.

```
import java.util.function.Consumer;

public class ConsumerDemo {
    public static void main(String[] args) {
        Consumer<String> printer = value -> System.out.println("Input: " + value);
        printer.accept("Functional Programming");
    }
}
```
### 5. BiFunction<T, U, R>

Takes two inputs and returns a result.

```
import java.util.function.BiFunction;

public class BiFunctionDemo {
    public static void main(String[] args) {
        BiFunction<Integer, Integer, String> sumResult = (a, b) -> "Sum: " + (a + b);
        System.out.println(sumResult.apply(15, 10)); // Sum: 25
    }
}
```
### 6. BiConsumer<T, U>

Consumes two inputs and returns nothing.

```
import java.util.function.BiConsumer;

public class BiConsumerDemo {
    public static void main(String[] args) {
        BiConsumer<String, Integer> displayInfo = (name, age) -> 
            System.out.println(name + " is " + age + " years old.");
        
        displayInfo.accept("Alice", 30);
    }
}
```
### 7. BiPredicate<T, U>

Evaluates a condition on two inputs and returns boolean.

```
import java.util.function.BiPredicate;

public class BiPredicateDemo {
    public static void main(String[] args) {
        BiPredicate<Integer, Integer> isDivisible = (x, y) -> x % y == 0;

        System.out.println(isDivisible.test(10, 2)); // true
        System.out.println(isDivisible.test(7, 3));  // false
    }
}
```
## 🔹 Final Notes
Functional interfaces are the backbone of lambda expressions.

They help in writing concise, readable, and testable code.

Java 8 introduced many useful built-in functional interfaces.

You can also create your own based on application needs.

# ✅ Java 8 Method References

Java 8 introduced method references as a shorthand syntax for lambda expressions that merely call an existing method. They make code more readable and concise when you're not modifying arguments or return values.

## 📌 What is a Method Reference?

A method reference is a simplified way of writing a lambda expression that calls a method. It uses the :: operator (double colon).

For example:
```
// Lambda expression
Consumer<String> print = s -> System.out.println(s);

// Equivalent method reference
Consumer<String> printRef = System.out::println;
```
## 🔹 Benefits of Method References

Makes code more readable and expressive

Eliminates boilerplate lambda syntax

Promotes reuse of existing methods

## 🧠 Types of Method References

There are four kinds of method references:

### 1️⃣ Reference to a Static Method

Syntax: ClassName::staticMethodName

### ✅ Example:
```
public class Utils {
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }
}

Consumer<String> greeting = Utils::greet;
greeting.accept("Alice");
```
### 2️⃣ Reference to an Instance Method of a Particular Object
Syntax: instance::instanceMethodName

### ✅ Example:

```
public class MessagePrinter {
    public void print(String msg) {
        System.out.println(msg);
    }
}

MessagePrinter printer = new MessagePrinter();
Consumer<String> printAction = printer::print;
printAction.accept("Using method reference!");
```
### 3️⃣ Reference to an Instance Method of an Arbitrary Object of a Particular Type

Syntax: ClassName::instanceMethodName

### ✅ Example:
```
List<String> names = Arrays.asList("john", "emma", "peter");
names.sort(String::compareToIgnoreCase);
System.out.println(names);
```
Here, String::compareToIgnoreCase is a reference to the instance method of String class.

### 4️⃣ Reference to a Constructor

Syntax: ClassName::new

### ✅ Example:
```
Supplier<List<String>> listSupplier = ArrayList::new;
List<String> list = listSupplier.get();
list.add("Java");
System.out.println(list);
```
## 📝 Summary Table

![image](https://github.com/user-attachments/assets/f53b5b10-a573-4aa6-b649-f0d8fc1f94c8)

# ✅ Java 8 Stream API – 15 Practical Examples

---

## 🔰 Introduction

Java 8 introduced the **Stream API**, which provides a **functional approach** to processing sequences of elements. It supports operations such as:

- ✅ Filtering  
- ✅ Mapping  
- ✅ Reducing  
- ✅ Collecting  

Streams make working with collections **concise, readable, and efficient**. They can work with `List`, `Set`, arrays, and more.

---

## 📚 Table of Contents

1. [Create a Stream from a List](#1-create-a-stream-from-a-list)  
2. [Filter Elements in a Stream](#2-filter-elements-in-a-stream)  
3. [Map Elements in a Stream](#3-map-elements-in-a-stream)  
4. [Stream `forEach()` to Print Elements](#4-stream-foreach-to-print-elements)  
5. [Stream `collect()` to Convert to a List](#5-stream-collect-to-convert-to-a-list)  
6. [Sort Elements in a Stream](#6-sort-elements-in-a-stream)  
7. [Reduce a Stream to a Single Value](#7-reduce-a-stream-to-a-single-value)  
8. [Count Elements in a Stream](#8-count-elements-in-a-stream)  
9. [Limit the Stream Size](#9-limit-the-stream-size)  
10. [Skip Elements in a Stream](#10-skip-elements-in-a-stream)  
11. [FlatMap Example (Flattening Nested Lists)](#11-flatmap-example-flattening-nested-lists)  
12. [Find the First Element in a Stream](#12-find-the-first-element-in-a-stream)  
13. [Check if Any Match in a Stream](#13-check-if-any-match-in-a-stream)  
14. [Grouping by using Collectors](#14-grouping-by-using-collectors)  
15. [Stream Parallel Processing](#15-stream-parallel-processing)

---
# ✅ Java 8 Stream API Practical Examples

## 1️⃣ Create a Stream from a List

```
List<String> items = Arrays.asList("apple", "banana", "orange");
Stream<String> stream = items.stream();
```

## 2️⃣ Filter Elements in a Stream

```
items.stream()
     .filter(item -> item.startsWith("a"))
     .forEach(System.out::println);
```

## 3️⃣ Map Elements in a Stream
```
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);

numbers.stream()
       .map(n -> n * n)
       .forEach(System.out::println);

// Output:
// 1
// 4
// 9
// 16
```

## 4️⃣ Stream forEach() to Print Elements
```
List<String> items = Arrays.asList("apple", "banana", "cherry");

items.stream()
     .forEach(System.out::println);

// Output:
// apple
// banana
// cherry

```
## 5️⃣ Stream collect() to Convert to a List
```
List<String> items = Arrays.asList("apple", "banana", "avocado", "cherry");

List<String> filtered = items.stream()
                             .filter(i -> i.contains("a"))
                             .collect(Collectors.toList());

System.out.println(filtered);

// Output:
// [apple, banana, avocado]
```
## 6️⃣ Sort Elements in a Stream
```
List<String> items = Arrays.asList("banana", "apple", "cherry");

items.stream()
     .sorted()
     .forEach(System.out::println);

// Output:
// apple
// banana
// cherry
```
## 7️⃣ Reduce a Stream to a Single Value
```
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);

int sum = numbers.stream()
                 .reduce(0, Integer::sum);

System.out.println("Sum: " + sum);

// Output:
// Sum: 10
```
## 8️⃣ Count Elements in a Stream
```
List<String> items = Arrays.asList("banana", "strawberry", "kiwi", "pineapple");

long count = items.stream()
                  .filter(i -> i.length() > 5)
                  .count();

System.out.println("Count: " + count);

// Output:
// Count: 3
```
## 9️⃣ Limit the Stream Size
```
List<String> items = Arrays.asList("apple", "banana", "cherry");

items.stream()
     .limit(2)
     .forEach(System.out::println);

// Output:
// apple
// banana
```
## 🔟 Skip Elements in a Stream
```
List<String> items = Arrays.asList("apple", "banana", "cherry");

items.stream()
     .skip(1)
     .forEach(System.out::println);

// Output:
// banana
// cherry
```
## 1️⃣1️⃣ FlatMap Example (Flattening Nested Lists)
```
List<List<String>> nested = Arrays.asList(
    Arrays.asList("a", "b"),
    Arrays.asList("c", "d")
);

nested.stream()
      .flatMap(List::stream)
      .forEach(System.out::println);

// Output:
// a
// b
// c
// d
```
## 1️⃣2️⃣ Find the First Element in a Stream
```
List<String> items = Arrays.asList("apple", "banana", "cherry");

Optional<String> first = items.stream().findFirst();
first.ifPresent(System.out::println);

// Output:
// apple
```
## 1️⃣3️⃣ Check if Any Match in a Stream
```
List<String> items = Arrays.asList("apple", "banana", "cherry");

boolean hasApple = items.stream()
                        .anyMatch(i -> i.equals("apple"));

System.out.println("Contains apple? " + hasApple);

// Output:
// Contains apple? true
```
## 1️⃣4️⃣ Grouping by using Collectors
```
List<String> fruits = Arrays.asList("apple", "banana", "apple", "orange");

Map<String, Long> grouped = fruits.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

System.out.println(grouped);

// Output:
// {orange=1, banana=1, apple=2}
```
## 1️⃣5️⃣ Stream Parallel Processing

```
List<Integer> numbers = Arrays.asList(1, 2, 3, 4);

int total = numbers.parallelStream()
                  .mapToInt(Integer::intValue)
                  .sum();

System.out.println("Parallel sum: " + total);

// Output:
// Parallel sum: 10
```

## ✅ Summary

The Stream API in Java 8 simplifies many collection-based operations.

With functional programming features, code becomes cleaner and more expressive.

Mastering these stream operations can significantly enhance your productivity as a Java developer.
## 📋 Java 8 Optional – Simplified Guide with Custom Examples

### 🔍 Introduction

Java 8 introduced the `Optional` class to help deal with `null` values in a more expressive and safe way, helping avoid the infamous `NullPointerException`.

### ✅ Benefits of Using Optional:

- No more boilerplate null checks  
- Avoids NullPointerException at runtime  
- Leads to cleaner APIs  
- Eliminates unnecessary if-else logic  

---

## 🧪 Basic Example

```java
import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        Optional<String> result = Optional.of("MALE");

        String responseOne = "Yes";
        String responseTwo = null;

        System.out.println("Wrapped Optional: " + result);
        System.out.println("Extracted Value: " + result.get());
        System.out.println("Empty Optional: " + Optional.empty());

        System.out.println("ofNullable with value: " + Optional.ofNullable(responseOne));
        System.out.println("ofNullable with null: " + Optional.ofNullable(responseTwo));

        // ⚠️ Throws NullPointerException
        System.out.println("of with null (throws error): " + Optional.of(responseTwo));
    }
}
```

---

## 🔍 Common Optional Methods

### 1️⃣ `isPresent()`

Checks if a value exists.

```java
private static void checkPresence() {
    Optional<String> data = Optional.of("Data");
    System.out.println("Is value present? " + data.isPresent()); // Output: true
}
```

---

### 2️⃣ `empty()`

Creates an empty Optional.

```java
private static void createEmpty() {
    Optional<String> emptyOpt = Optional.empty();
    System.out.println("Is empty? " + emptyOpt.isPresent()); // Output: false
}
```

---

### 3️⃣ `ifPresent()`

Executes logic if a value is present.

```java
private static void demonstrateIfPresent() {
    Optional<String> user = Optional.of("Arjun");
    user.ifPresent(u -> System.out.println("Name length: " + u.length())); // Output: Name length: 5
}
```

---

### 4️⃣ `orElse()`

Returns the default if value is not present.

```java
private static void useOrElse() {
    String fallback = null;
    String finalName = Optional.ofNullable(fallback).orElse("DefaultName");
    System.out.println(finalName); // Output: DefaultName
}
```

---

### 5️⃣ `orElseGet()`

Uses a supplier to generate fallback.

```java
private static void useOrElseGet() {
    String missingName = null;
    String fallbackName = Optional.ofNullable(missingName)
                                  .orElseGet(() -> "GuestUser");
    System.out.println(fallbackName); // Output: GuestUser
}
```

---

### 6️⃣ `orElseThrow()`

Throws an exception if value not found.

```java
private static void useOrElseThrow() {
    String missing = null;
    String result = Optional.ofNullable(missing)
                            .orElseThrow(() -> new RuntimeException("No value found!"));
    System.out.println(result);
}
```

---

### 7️⃣ `get()`

Extracts value if present (avoid using without check).

```java
private static void demoGetMethod() {
    Optional<String> user = Optional.of("Explorer");
    String name = user.get();
    System.out.println("Name is: " + name); // Output: Name is: Explorer
}
```

---

## 🧹 Complete Working Example

```java
import java.util.Optional;

public class OptionalApiShowcase {

    public static void main(String[] args) {
        checkPresence();
        createEmpty();
        demonstrateIfPresent();
        useOrElse();
        useOrElseGet();
        // Uncomment below to see the exception thrown
        // useOrElseThrow();
        demoGetMethod();
    }

    private static void checkPresence() {
        Optional<String> value = Optional.of("Hello");
        System.out.println("Present: " + value.isPresent());
    }

    private static void createEmpty() {
        Optional<String> nothing = Optional.empty();
        System.out.println("Empty? " + nothing.isPresent());
    }

    private static void demonstrateIfPresent() {
        Optional<String> name = Optional.of("OptionalUser");
        name.ifPresent(n -> System.out.println("Length: " + n.length()));
    }

    private static void useOrElse() {
        String data = null;
        String fallback = Optional.ofNullable(data).orElse("FallbackName");
        System.out.println("Value: " + fallback);
    }

    private static void useOrElseGet() {
        String response = null;
        String user = Optional.ofNullable(response).orElseGet(() -> "GeneratedUser");
        System.out.println("Resolved user: " + user);
    }

    private static void useOrElseThrow() {
        String error = null;
        String value = Optional.ofNullable(error)
                .orElseThrow(() -> new IllegalArgumentException("No data found!"));
        System.out.println("Value: " + value);
    }

    private static void demoGetMethod() {
        Optional<String> item = Optional.of("Gadget");
        System.out.println("Item: " + item.get());
    }
}
```

---

## 📌 Conclusion

The `Optional` class in Java 8 is a powerful tool to avoid null references, improve API design, and promote cleaner, more readable code.


# 📦 Java 8 Collectors – A Practical Guide

Java 8 introduced the `Collectors` class as part of the `java.util.stream` package. It's primarily used with the `Stream.collect()` method to gather elements from a stream into various result containers like `List`, `Set`, `Map`, or even a single concatenated `String`.

This guide walks through some of the most widely used methods from the `Collectors` utility class with practical examples.

---

## 📚 Table of Contents

1. [Collect to a List](#example-1-collect-to-a-list)
2. [Collect to a Set](#example-2-collect-to-a-set)
3. [Collect to a Map](#example-3-collect-to-a-map)
4. [Joining Elements into a String](#example-4-joining-elements-into-a-string)
5. [Summing Elements](#example-5-summing-elements)
6. [Averaging Values](#example-6-averaging-values)
7. [Grouping Elements by a Key](#example-7-grouping-elements-by-a-key)
8. [Partitioning Elements by a Predicate](#example-8-partitioning-elements-by-a-predicate)
9. [Counting Elements](#example-9-counting-elements)
10. [Collecting and Reducing Elements](#example-10-collecting-and-reducing-elements)

---

## ✅ Example 1: Collect to a List

```java
List<String> names = Stream.of("John", "Jane", "Jack")
                           .collect(Collectors.toList());
System.out.println(names); // Output: [John, Jane, Jack]
```

---

## ✅ Example 2: Collect to a Set

```java
Set<String> uniqueNames = Stream.of("apple", "banana", "apple")
                                .collect(Collectors.toSet());
System.out.println(uniqueNames); // Output: [apple, banana]
```

---

## ✅ Example 3: Collect to a Map

```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

Map<String, Integer> nameLengthMap = names.stream()
    .collect(Collectors.toMap(name -> name, name -> name.length()));

System.out.println(nameLengthMap);
// Output: {Alice=5, Bob=3, Charlie=7}
```

---

## ✅ Example 4: Joining Elements into a String

```java
List<String> words = Arrays.asList("Java", "8", "Stream");

String result = words.stream()
                     .collect(Collectors.joining(" - "));

System.out.println(result); // Output: Java - 8 - Stream
```

---

## ✅ Example 5: Summing Elements

```java
List<Integer> numbers = Arrays.asList(10, 20, 30);

int total = numbers.stream()
                   .collect(Collectors.summingInt(Integer::intValue));

System.out.println(total); // Output: 60
```

---

## ✅ Example 6: Averaging Values

```java
List<Integer> scores = Arrays.asList(80, 90, 100);

double avg = scores.stream()
                   .collect(Collectors.averagingInt(Integer::intValue));

System.out.println(avg); // Output: 90.0
```

---

## ✅ Example 7: Grouping Elements by a Key

```java
List<String> animals = Arrays.asList("lion", "tiger", "bear", "leopard");

Map<Integer, List<String>> groupedByLength = animals.stream()
    .collect(Collectors.groupingBy(String::length));

System.out.println(groupedByLength);
// Output: {4=[lion, bear], 5=[tiger], 7=[leopard]}
```

---

## ✅ Example 8: Partitioning Elements by a Predicate

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

Map<Boolean, List<Integer>> isEvenPartition = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));

System.out.println(isEvenPartition);
// Output: {false=[1, 3, 5], true=[2, 4, 6]}
```

---

## ✅ Example 9: Counting Elements

```java
long count = Stream.of("one", "two", "three")
                   .collect(Collectors.counting());

System.out.println(count); // Output: 3
```

---

## ✅ Example 10: Collecting and Reducing Elements

```java
List<String> words = Arrays.asList("A", "B", "C");

String combined = words.stream()
    .collect(Collectors.reducing("", (a, b) -> a + b));

System.out.println(combined); // Output: ABC
```

---

## 📌 Summary

The `Collectors` utility class in Java 8 makes data aggregation with streams powerful and expressive. Mastering these methods enhances your ability to transform data cleanly and efficiently using functional programming paradigms.

## 📌 Java 8 `StringJoiner` – Complete Guide

### 🔍 What is `StringJoiner`?

Java 8 introduced the `StringJoiner` class in the `java.util` package to build a sequence of characters separated by a delimiter (e.g., comma) and optionally with a prefix and suffix.

It provides a flexible and efficient way to concatenate strings.

----------

### ✅ Why Use `StringJoiner`?

-   Eliminates manual string concatenation using loops
    
-   Supports custom delimiters, prefixes, and suffixes
    
-   Cleaner, more readable, and efficient string joining
    

----------

### 🧪 Basic Example

```
import java.util.StringJoiner;

public class SimpleJoinerDemo {
    public static void main(String[] args) {
        StringJoiner joiner = new StringJoiner(", ");
        joiner.add("Java");
        joiner.add("Python");
        joiner.add("Go");

        System.out.println(joiner); // Output: Java, Python, Go
    }
}
```

----------

### 🌟 Using Prefix and Suffix

```
import java.util.StringJoiner;

public class JoinerWithPrefixSuffix {
    public static void main(String[] args) {
        StringJoiner joiner = new StringJoiner(", ", "[", "]");
        joiner.add("Apple");
        joiner.add("Banana");

        System.out.println(joiner); // Output: [Apple, Banana]
    }
}
```

----------

### 🔗 Merging Two StringJoiners

```
import java.util.StringJoiner;

public class MergeJoiners {
    public static void main(String[] args) {
        StringJoiner joiner1 = new StringJoiner(", ");
        joiner1.add("One").add("Two");

        StringJoiner joiner2 = new StringJoiner(", ");
        joiner2.add("Three").add("Four");

        joiner1.merge(joiner2);
        System.out.println(joiner1); // Output: One, Two, Three, Four
    }
}
```

----------

### 📏 Getting Length of Joined String

```
public class JoinerLength {
    public static void main(String[] args) {
        StringJoiner joiner = new StringJoiner("-");
        joiner.add("2023").add("12").add("31");

        System.out.println("Joined String: " + joiner);
        System.out.println("Length: " + joiner.length());
        // Output: Joined String: 2023-12-31
        //         Length: 10
    }
}
```

----------

### 🔍 ToString vs getLength

-   `toString()` returns the actual joined string
    
-   `length()` returns the number of characters in the joined string (including delimiters, prefix, suffix)
    

----------

### 🧹 Summary

-   `StringJoiner` simplifies string concatenation with delimiters
    
-   Great for CSV-style or formatted output
    
-   Supports nesting and merging
    

### 🧰 When to Use It?

-   When building strings from collection elements
    
-   Generating output with consistent formatting
    
-   Avoiding mutable string concatenation inside loops

# 📌 Java 8 Static and Default Methods in Interface – Complete Guide

## 🔍 Introduction

Java 8 introduced two new features to interfaces:

-   `default` methods
    
-   `static` methods
    

These allow interfaces to have method implementations without breaking existing classes that implement the interface.

----------

## ✅ Why Introduced?

Before Java 8, interfaces could only have **abstract methods**. Adding a new method to an interface meant breaking all implementing classes. Java 8 solves this by allowing methods with default implementations.

----------

## 🧩 Default Methods

Default methods are non-abstract methods defined in interfaces using the `default` keyword.

### ✨ Syntax


```
interface  MyInterface { default  void  greet() {
        System.out.println("Hello from default method!");
    }
}
```

### 📦 Example


```
interface  Vehicle { default  void  start() {
        System.out.println("Starting vehicle...");
    }
} class  Car  implements  Vehicle { // inherits start() by default } public  class  DefaultDemo { public  static  void  main(String[] args) { Car  car  =  new  Car();
        car.start(); // Output: Starting vehicle... }
}
```

----------

## 🧷 Static Methods in Interface

Static methods are associated with the interface itself and **not** with instances.

### ✨ Syntax


```
interface  MyInterface { static  void  utilityMethod() {
        System.out.println("Utility logic here");
    }
}
``` 

### 📦 Example



```
interface  MathUtils { static  int  square(int x) { return x * x;
    }
} public  class  StaticMethodDemo { public  static  void  main(String[] args) { int  result  = MathUtils.square(5);
        System.out.println(result); // Output: 25 }
}
``` 

----------

## ⚠️ Important Notes

-   **Default methods** can be overridden in implementing classes.
    
-   **Static methods** cannot be overridden and are not inherited.
    
-   If a class implements two interfaces with the same default method, it must override it to avoid ambiguity.
    

### 🤯 Example: Conflict Resolution



```
interface  A { default  void  show() {
        System.out.println("A's show");
    }
} interface  B { default  void  show() {
        System.out.println("B's show");
    }
} class  TestClass  implements  A, B { public  void  show() {
        A.super.show(); // or B.super.show(); }
}
``` 

----------

## 🧹 Summary

-   Java 8 allows **concrete method implementations in interfaces**.
    
-   **default methods** → Inherited by implementing classes.
    
-   **static methods** → Called using interface name.
    

## 📦 Project Title: **Employee Management System (EMS)**

### 🎯 Objective:

Build a system to manage employees and departments in an organization using modern Java 8 features. This includes managing employee data, performing analytics, and generating reports.

----------

### 🧰 Java 8 Features Used:

Feature

How It's Used

✅ Optional

Handling missing employee fields like email or department

🔧 Functional Interfaces

Custom filters, transformations (using Predicate, Function, etc.)

🔁 Stream API

Data processing: filtering, mapping, reducing, grouping, etc.

📊 Collectors

Collecting statistics, grouping by department, joining names

🔤 StringJoiner

Formatting employee data as CSV or display strings

🧱 Default & Static Methods

Define reusable logic inside interfaces like `EmployeeService`

----------

### 📁 Modules & Structure:

1.  **Model Layer**
    
    -   `Employee` (id, name, age, salary, department, email)
        
    -   `Department` (id, name)
        
2.  **Service Layer**
    
    -   `EmployeeService` (interface with default and static methods)
        
    -   `EmployeeServiceImpl` (implementation class)
        
3.  **Utility Layer**
    
    -   `EmployeeUtils` (for formatting strings using StringJoiner, etc.)
        

----------

### 🔍 Key Functionalities:

#### 1️⃣ Add, Update, Delete, and View Employees

-   Use **default methods** in interface for generic CRUD operations.
    

#### 2️⃣ Filter Employees

-   Use **Predicate** to filter employees by age, salary, or department.
    

#### 3️⃣ Generate Reports

-   Use **Collectors.groupingBy** and **partitioningBy** for:
    
    -   Employees by Department
        
    -   High vs Low Salary Employees
        

#### 4️⃣ Email & Optional Fields

-   Use **Optional** to safely retrieve optional fields like email or department.
    

#### 5️⃣ Salary Analytics

-   Use **Collectors.averagingDouble**, **summarizingDouble**, etc.
    

#### 6️⃣ Employee Summary

-   Use **StringJoiner** to create printable summaries or CSV export.
    

----------

### 🔗 Example Use Case:
```
Optional<String> email = Optional.ofNullable(emp.getEmail());
email.ifPresentOrElse(
    e -> System.out.println("Email: " + e),
    () -> System.out.println("Email not provided")
);
```
```
Map<String, List<Employee>> byDept = employees.stream()
        .collect(Collectors.groupingBy(Employee::getDepartment));
```
````
StringJoiner summary = new StringJoiner(", ", "[", "]");
employees.forEach(emp -> summary.add(emp.getName()));
System.out.println("All employees: " + summary);
```
✅ Here’s a complete real-time project example called **Employee Management** using key Java 8 features:

-   `Streams`, `Collectors` (grouping, filtering, averaging)
    
-   `Optional`
    
-   `Functional Interfaces` (Predicate)
    
-   `StringJoiner`
    
-   `Default and Static methods in Interfaces`
```
// Employee.java

public  class Employee {

private  int id;

private  String name;

private  int age;

private  double salary;

private  String department;

private  String email;

  

public Employee(int id, String name, int age, double salary, String department, String email) {

this.id = id;

this.name = name;

this.age = age;

this.salary = salary;

this.department = department;

this.email = email;

}

  

// Getters

public  int getId() { return id; }

public  String getName() { return name; }

public  int getAge() { return age; }

public  double getSalary() { return salary; }

public  String getDepartment() { return department; }

public  String getEmail() { return email; }

}

  

// EmployeeService.java

import java.util.*;

import java.util.function.*;

import java.util.stream.*;

  

public  interface EmployeeService {

  

List<Employee> getAllEmployees();

  

default  void printAllEmployeeNames(List<Employee> employees) {

employees.stream()

.map(Employee::getName)

.forEach(System.out::println);

}

  

default  List<Employee> filterEmployees(List<Employee> employees, Predicate<Employee> condition) {

return employees.stream().filter(condition).collect(Collectors.toList());

}

  

default  Map<String, List<Employee>> groupByDepartment(List<Employee> employees) {

return employees.stream().collect(Collectors.groupingBy(Employee::getDepartment));

}

  

static  double getAverageSalary(List<Employee> employees) {

return employees.stream()

.collect(Collectors.averagingDouble(Employee::getSalary));

}

  

static  Optional<Employee> findHighestPaid(List<Employee> employees) {

return employees.stream()

.max(Comparator.comparingDouble(Employee::getSalary));

}

  

static  String employeeSummary(List<Employee> employees) {

StringJoiner joiner = new StringJoiner(", ");

employees.forEach(emp -> joiner.add(emp.getName()));

return joiner.toString();

}

}

  

// EmployeeServiceImpl.java

import java.util.*;

  

public  class EmployeeServiceImpl implements EmployeeService {

  

private  final  List<Employee> employeeList;

  

public EmployeeServiceImpl(List<Employee> employeeList) {

this.employeeList = employeeList;

}

  

@Override

public  List<Employee> getAllEmployees() {

return employeeList;

}

}

  

// Main.java

import java.util.*;

  

public  class Main {

public  static  void main(String[] args) {

List<Employee> employees = Arrays.asList(

new Employee(1, "John", 30, 70000, "IT", "john@example.com"),

new Employee(2, "Jane", 25, 80000, "Finance", null),

new Employee(3, "Alex", 35, 75000, "HR", "alex@example.com"),

new Employee(4, "Emma", 29, 85000, "IT", null)

);

  

EmployeeService service = new EmployeeServiceImpl(employees);

  

System.out.println("--- All Employee Names ---");

service.printAllEmployeeNames(service.getAllEmployees());

  

System.out.println("\n--- IT Employees ---");

List<Employee> itEmployees = service.filterEmployees(employees, e ->  "IT".equals(e.getDepartment()));

itEmployees.forEach(e -> System.out.println(e.getName()));

  

System.out.println("\n--- Grouped By Department ---");

service.groupByDepartment(employees).forEach((dept, list) -> {

System.out.println(dept + ": " + EmployeeService.employeeSummary(list));

});

  

System.out.println("\n--- Average Salary ---");

System.out.println(EmployeeService.getAverageSalary(employees));

  

System.out.println("\n--- Highest Paid Employee ---");

EmployeeService.findHighestPaid(employees).ifPresent(e -> System.out.println(e.getName() + " - " + e.getSalary()));

  

System.out.println("\n--- Email Checks ---");

employees.forEach(emp -> {

Optional.ofNullable(emp.getEmail())

.ifPresentOrElse(

email -> System.out.println(emp.getName() + " Email: " + email),

() -> System.out.println(emp.getName() + " Email: Not Provided")

);

});

}

}```

