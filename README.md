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








