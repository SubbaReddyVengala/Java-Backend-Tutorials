
# Methods in Java

Methods are blocks of code that perform specific tasks and can be reused throughout your program. They help organize code, improve readability, and promote reusability.

## 1. **What is a Method?**

A method is a collection of statements grouped together to perform an operation.

**Benefits:**

-   Code reusability
-   Better organization
-   Easier debugging and maintenance
-   Abstraction of complex operations

## 2. **Method Syntax**

java

```java
accessModifier returnType methodName(parameterList) {
    // method body
    return value; // if returnType is not void
}
```

**Components:**

-   **Access Modifier:** Defines visibility (public, private, protected, default)
-   **Return Type:** Data type of value returned (or void if nothing is returned)
-   **Method Name:** Identifier following naming conventions (camelCase)
-   **Parameter List:** Input values (optional)
-   **Method Body:** Code to be executed
-   **Return Statement:** Returns a value to the caller (required for non-void methods)

## 3. **Method Declaration and Definition**

java

```java
public class Calculator {
    
    // Method with no parameters and no return value
    public void greet() {
        System.out.println("Hello, World!");
    }
    
    // Method with parameters and return value
    public int add(int a, int b) {
        int sum = a + b;
        return sum;
    }
    
    // Method with multiple parameters
    public double calculateArea(double length, double width) {
        return length * width;
    }
}
```

## 4. **Calling a Method**

java

```java
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        
        // Calling method without return value
        calc.greet();  // Output: Hello, World!
        
        // Calling method with return value
        int result = calc.add(5, 3);
        System.out.println("Sum: " + result);  // Output: Sum: 8
        
        // Direct usage in expression
        System.out.println("Area: " + calc.calculateArea(5.0, 3.0));
    }
}
```

## 5. **Types of Methods**

### a) **Predefined Methods**

Built-in methods from Java libraries.

java

```java
// String methods
String text = "Hello";
int length = text.length();  // 5
String upper = text.toUpperCase();  // "HELLO"

// Math methods
double sqrt = Math.sqrt(16);  // 4.0
int max = Math.max(10, 20);   // 20

// System methods
System.out.println("Output");
```

### b) **User-Defined Methods**

Methods created by programmers.

java

```java
public class MyClass {
    // User-defined method
    public int multiply(int x, int y) {
        return x * y;
    }
}
```

## 6. **Method Parameters**

### a) **No Parameters**

java

```java
public void displayMessage() {
    System.out.println("No parameters needed");
}
```

### b) **Single Parameter**

java

```java
public void square(int number) {
    System.out.println(number * number);
}
```

### c) **Multiple Parameters**

java

```java
public int calculate(int a, int b, int c) {
    return a + b + c;
}
```

### d) **Varargs (Variable Arguments)**

Allows passing variable number of arguments.

java

```java
public int sum(int... numbers) {
    int total = 0;
    for (int num : numbers) {
        total += num;
    }
    return total;
}

// Usage
sum(1, 2, 3);           // 6
sum(1, 2, 3, 4, 5);     // 15
sum(10);                // 10
```

## 7. **Return Types**

### a) **void (No Return Value)**

java

```java
public void printName(String name) {
    System.out.println("Name: " + name);
    // No return statement needed
}
```

### b) **Primitive Return Types**

java

```java
public int getAge() {
    return 25;
}

public double getPrice() {
    return 99.99;
}

public boolean isValid() {
    return true;
}
```

### c) **Object Return Types**

java

```java
public String getName() {
    return "John";
}

public int[] getNumbers() {
    return new int[]{1, 2, 3, 4, 5};
}

public ArrayList<String> getNames() {
    ArrayList<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    return names;
}
```

## 8. **Method Overloading**

Multiple methods with the same name but different parameters.

java

```java
public class Calculator {
    
    // Method 1: Two int parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    // Method 2: Three int parameters
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method 3: Two double parameters
    public double add(double a, double b) {
        return a + b;
    }
    
    // Method 4: String concatenation
    public String add(String a, String b) {
        return a + b;
    }
}

// Usage
Calculator calc = new Calculator();
System.out.println(calc.add(5, 3));          // 8
System.out.println(calc.add(5, 3, 2));       // 10
System.out.println(calc.add(5.5, 3.2));      // 8.7
System.out.println(calc.add("Hello", "World")); // HelloWorld
```

**Rules for Method Overloading:**

-   Methods must have different parameter lists (number, type, or order)
-   Return type alone is NOT sufficient for overloading
-   Access modifiers can be different

java

```java
// Valid overloading
public void display(int a) { }
public void display(double a) { }
public void display(int a, int b) { }
public void display(String a) { }

// Invalid - only return type differs
public int show(int a) { }
public double show(int a) { }  // Compile error!
```

## 9. **static Methods**

Belong to the class rather than instances. Can be called without creating an object.

java

```java
public class MathUtils {
    
    // Static method
    public static int square(int number) {
        return number * number;
    }
    
    // Static method accessing static variable
    private static int counter = 0;
    
    public static void incrementCounter() {
        counter++;
    }
    
    public static int getCounter() {
        return counter;
    }
}

// Usage - no object needed
int result = MathUtils.square(5);  // 25
MathUtils.incrementCounter();
System.out.println(MathUtils.getCounter());  // 1
```

**Important Notes:**

-   Static methods can only access static variables and methods directly
-   Cannot use `this` keyword in static methods
-   `main()` method is static

## 10. **Recursion**

A method calling itself.

java

```java
public class RecursionExample {
    
    // Factorial using recursion
    public int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;  // Base case
        }
        return n * factorial(n - 1);  // Recursive call
    }
    
    // Fibonacci series
    public int fibonacci(int n) {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Sum of natural numbers
    public int sum(int n) {
        if (n == 1) {
            return 1;
        }
        return n + sum(n - 1);
    }
}

// Usage
RecursionExample re = new RecursionExample();
System.out.println(re.factorial(5));   // 120
System.out.println(re.fibonacci(6));   // 8
System.out.println(re.sum(10));        // 55
```
### Method Access Modifiers

```java
public class AccessExample {
    
    public void publicMethod() {
        // Accessible everywhere
    }
    
    private void privateMethod() {
        // Only within this class
    }
    
    protected void protectedMethod() {
        // Within package and subclasses
    }
    
    void defaultMethod() {
        // Only within package
    }
}
```
## 13. **Best Practices**

### a) **Naming Conventions**

java

```java
// Good - verb or verb phrase, camelCase
public void calculateTotal() { }
public int getUserAge() { }
public boolean isValid() { }
public void setName(String name) { }

// Avoid
public void ct() { }  // Too short
public void Calculate_Total() { }  // Wrong convention
```

### b) **Single Responsibility**

java

```java
// Good - each method does one thing
public double calculateArea(double radius) {
    return Math.PI * radius * radius;
}

public void displayArea(double area) {
    System.out.println("Area: " + area);
}

// Avoid - doing too many things
public void calculateAndDisplayArea(double radius) {
    double area = Math.PI * radius * radius;
    System.out.println("Area: " + area);
    // Mixing calculation and display
}
```

### c) **Keep Methods Short**

java

```java
// Aim for methods that fit on one screen (20-30 lines max)
// If longer, consider breaking into smaller methods
```

### d) **Use Meaningful Parameters**

java

```java
// Good
public void createUser(String username, String email, int age) { }

// Avoid
public void createUser(String a, String b, int c) { }
```

### e) **Return Early**

java

```java
// Good - early return for edge cases
public int divide(int a, int b) {
    if (b == 0) {
        return 0;  // or throw exception
    }
    return a / b;
}

// Avoid - unnecessary nesting
public int divide(int a, int b) {
    int result = 0;
    if (b != 0) {
        result = a / b;
    }
    return result;
}
```

## 14. **Common Method Examples**

java

```java
public class CommonMethods {
    
    // Getter
    private String name;
    public String getName() {
        return name;
    }
    
    // Setter
    public void setName(String name) {
        this.name = name;
    }
    
    // Boolean check
    public boolean isEmpty(String str) {
        return str == null || str.length() == 0;
    }
    
    // Utility method
    public static String capitalize(String text) {
        if (text == null || text.isEmpty()) {
            return text;
        }
        return text.substring(0, 1).toUpperCase() + 
               text.substring(1).toLowerCase();
    }
    
    // Validation method
    public boolean isValidEmail(String email) {
        return email != null && email.contains("@");
    }
    
    // Conversion method
    public int stringToInt(String str) {
        try {
            return Integer.parseInt(str);
        } catch (NumberFormatException e) {
            return 0;
        }
    }
}
```

Methods are fundamental building blocks in Java programming, enabling modular, maintainable, and reusable code!




