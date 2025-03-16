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
