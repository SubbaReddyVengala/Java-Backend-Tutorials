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

