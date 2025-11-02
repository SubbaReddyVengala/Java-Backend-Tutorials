
# Java 8 Lambda Expressions: Complete Tutorial

## 🎯 What are Lambda Expressions?

A **Lambda Expression** is an **anonymous function** — a block of code without a name — that can be **passed around and executed later**.  
Introduced in **Java 8**, it provides a **clear and concise way to represent one method interfaces** (Functional Interfaces).

### 🧠 Memory Visualization Analogy

**Before Lambda (Traditional Way):**

```
Think of it like writing a full letter to order pizza:
┌─────────────────────────────┐
│ Dear Pizza Shop,            │
│ I would like to place       │
│ an order for delivery.      │
│ The order details are:      │
│ - 1 Large Pepperoni Pizza   │
│ Sincerely, Customer         │
└─────────────────────────────┘
```

**With Lambda (Modern Way):**

```
Just text: "1 Large Pepperoni 🍕"
Quick, concise, gets the job done!
```

----------
## ⚙️  Syntax of Lambda Expressions
```java
(parameterList) -> { body }
```
### Example 1 — Simple

```java
() -> System.out.println("Hello Lambda");` 
```
### Example 2 — With Parameters
```java
(int a, int b) -> a + b` 
```
### Example 3 — With Type Inference
```java
(a, b) -> a + b` 
```
### Example 4 — With Multiple Lines
```java
(a, b) -> { int  sum  = a + b; return sum;
}
```


## 📚 Theory: Why Lambda Expressions?

### Problems Before Java 8:

1.  **Verbose Code**: Too much boilerplate code for simple operations
2.  **Anonymous Inner Classes**: Clunky syntax
3.  **Difficulty in Parallel Processing**: Hard to leverage multi-core processors

### Benefits of Lambda Expressions:

-   ✅  **Concise Code**: Less boilerplate
-   ✅  **Functional Programming**: Treat functions as first-class citizens
-   ✅  **Better Readability**: Clearer intent
-   ✅  **Easy Parallelism**: Simplified parallel operations with Streams

----------

## 🔍 Lambda Expression Syntax

### Basic Structure:

```
(parameters) -> expression
or
(parameters) -> { statements; }
```

### Components Breakdown:

```
(int a, int b) -> a + b
 └─────┬────┘    └──┬──┘
   Parameters    Body (what it does)
       ↓
    Arrow Token (->)
```

----------

## 🎨 Visual Memory Map

```
LAMBDA EXPRESSION ANATOMY
═══════════════════════════════════════

┌──────────────────────────────────────┐
│  (param1, param2) -> { body }        │
│   │                      │            │
│   │                      └─ Action    │
│   └─ Input                            │
└──────────────────────────────────────┘

VARIATIONS:
──────────────────────────────────────
No Parameters:    () -> System.out.println("Hi")
One Parameter:    x -> x * x
Multiple Params:  (x, y) -> x + y
With Block:       (x, y) -> { 
                    int sum = x + y;
                    return sum;
                  }
```

----------

## 💡 Functional Interfaces (The Foundation)

Lambda expressions work with  **Functional Interfaces**  - interfaces with exactly  **ONE abstract method**.

### Analogy:

Think of a functional interface as a  **TV remote with one button**. That button can do different things depending on how you program it (the lambda).

java

```java
@FunctionalInterface
interface SingleButton {
    void press(); // Only ONE abstract method
}
```
<img width="837" height="395" alt="image" src="https://github.com/user-attachments/assets/1af6813a-15bf-4d9b-943b-2bad47deaf78" />
## 🔍 **6. Lambda Expression — Internal Working**

### Memory Visualization 🧠

1.  When JVM encounters a Lambda expression:
    
    -   It does **not** create an anonymous inner class.
        
    -   Instead, it uses **invokedynamic** instruction (introduced in Java 7).
        
    -   Lambda is **converted to a private static method** internally.
        

### Example:
``` java
Runnable  r  = () -> System.out.println("Hello");` 
```
Internally compiled as something like:
``` java
private  static  void lambda$0() {
    System.out.println("Hello");
}
```
And the Runnable instance refers to this generated method using **method references** at runtime.

🧠 **Memory Analogy:**  
Think of Lambda as a _shortcut pointer_ to a method in memory, rather than an object creation like anonymous classes.

----------

## 📝 Simple Examples

### Example 1: Traditional vs Lambda (Simple Addition)

**Traditional Approach (Before Java 8):**

java

```java
interface Calculator {
    int calculate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        // Anonymous inner class - VERBOSE!
        Calculator addition = new Calculator() {
            @Override
            public int calculate(int a, int b) {
                return a + b;
            }
        };
        
        System.out.println(addition.calculate(5, 3)); // Output: 8
    }
}
```

**Lambda Approach (Java 8+):**

java

```java
interface Calculator {
    int calculate(int a, int b);
}

public class Main {
    public static void main(String[] args) {
        // Lambda - CONCISE!
        Calculator addition = (a, b) -> a + b;
        
        System.out.println(addition.calculate(5, 3)); // Output: 8
    }
}
```

**Memory Visualization:**

```
HEAP MEMORY
═══════════════════════════════════
┌─────────────────────────────────┐
│ Calculator Object (Lambda)      │
│ ┌─────────────────────────────┐ │
│ │ (a, b) -> a + b             │ │
│ │ Stored as bytecode          │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
         ↑
         │ Reference
         │
┌────────┴────────┐
│ addition (Stack) │
└─────────────────┘
```

----------

### Example 2: Runnable (No Parameters)

**Traditional:**

java

```java
public class Main {
    public static void main(String[] args) {
        Runnable task = new Runnable() {
            @Override
            public void run() {
                System.out.println("Task running!");
            }
        };
        
        Thread thread = new Thread(task);
        thread.start();
    }
}
```

**Lambda:**

java

```java
public class Main {
    public static void main(String[] args) {
        Runnable task = () -> System.out.println("Task running!");
        
        Thread thread = new Thread(task);
        thread.start();
        
        // Or even more concise:
        new Thread(() -> System.out.println("Task running!")).start();
    }
}
```

----------

### Example 3: Comparator (Sorting)

**Traditional:**

java

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob");
        
        Collections.sort(names, new Comparator<String>() {
            @Override
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        });
        
        System.out.println(names); // [Alice, Bob, John]
    }
}
```

**Lambda:**

java

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("John", "Alice", "Bob");
        
        // Lambda way
        Collections.sort(names, (s1, s2) -> s1.compareTo(s2));
        
        // Even simpler with method reference
        Collections.sort(names, String::compareTo);
        
        System.out.println(names); // [Alice, Bob, John]
    }
}
```

----------

### Example 4: Predicate (Filtering)

java

```java
import java.util.*;
import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        // Create predicates using lambda
        Predicate<Integer> isEven = n -> n % 2 == 0;
        Predicate<Integer> greaterThanFive = n -> n > 5;
        
        System.out.println("Even numbers:");
        filterAndPrint(numbers, isEven);
        
        System.out.println("\nNumbers greater than 5:");
        filterAndPrint(numbers, greaterThanFive);
        
        System.out.println("\nEven numbers greater than 5:");
        filterAndPrint(numbers, isEven.and(greaterThanFive));
    }
    
    static void filterAndPrint(List<Integer> list, Predicate<Integer> predicate) {
        for (Integer num : list) {
            if (predicate.test(num)) {
                System.out.print(num + " ");
            }
        }
        System.out.println();
    }
}
```

**Output:**

```
Even numbers:
2 4 6 8 10 

Numbers greater than 5:
6 7 8 9 10 

Even numbers greater than 5:
6 8 10
```

----------

### Example 5: Function (Transformation)

java

```java
import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        // Function that squares a number
        Function<Integer, Integer> square = x -> x * x;
        
        // Function that doubles a number
        Function<Integer, Integer> doubleIt = x -> x * 2;
        
        // Function composition: first square, then double
        Function<Integer, Integer> squareThenDouble = square.andThen(doubleIt);
        
        System.out.println("Square of 5: " + square.apply(5));        // 25
        System.out.println("Double of 5: " + doubleIt.apply(5));      // 10
        System.out.println("Square then double 5: " + squareThenDouble.apply(5)); // 50
        
        // String transformation
        Function<String, String> toUpperCase = s -> s.toUpperCase();
        Function<String, String> addGreeting = s -> "Hello, " + s;
        
        Function<String, String> greetInCaps = addGreeting.andThen(toUpperCase);
        
        System.out.println(greetInCaps.apply("Alice")); // HELLO, ALICE
    }
}
```

----------

### Example 6: Consumer (Side Effects)

java

```java
import java.util.*;
import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // Consumer that prints with greeting
        Consumer<String> printWithGreeting = name -> 
            System.out.println("Hello, " + name + "!");
        
        // Consumer that prints length
        Consumer<String> printLength = name -> 
            System.out.println(name + " has " + name.length() + " letters");
        
        System.out.println("Printing names:");
        names.forEach(printWithGreeting);
        
        System.out.println("\nPrinting lengths:");
        names.forEach(printLength);
        
        System.out.println("\nChaining consumers:");
        names.forEach(printWithGreeting.andThen(printLength));
    }
}
```

**Output:**

```
Printing names:
Hello, Alice!
Hello, Bob!
Hello, Charlie!

Printing lengths:
Alice has 5 letters
Bob has 3 letters
Charlie has 7 letters

Chaining consumers:
Hello, Alice!
Alice has 5 letters
Hello, Bob!
Bob has 3 letters
Hello, Charlie!
Charlie has 7 letters
```

----------

### Example 7: Supplier (Factory Pattern)

java

```java
import java.util.function.Supplier;
import java.time.LocalDateTime;

public class Main {
    public static void main(String[] args) {
        // Supplier that generates random numbers
        Supplier<Double> randomSupplier = () -> Math.random();
        
        // Supplier that provides current time
        Supplier<LocalDateTime> timeSupplier = () -> LocalDateTime.now();
        
        // Supplier that creates new objects
        Supplier<List<String>> listSupplier = () -> new ArrayList<>();
        
        System.out.println("Random number: " + randomSupplier.get());
        System.out.println("Current time: " + timeSupplier.get());
        System.out.println("New list: " + listSupplier.get());
        
        // Lazy evaluation example
        String result = getOrDefault(null, () -> "Default Value");
        System.out.println(result); // Default Value
    }
    
    static String getOrDefault(String value, Supplier<String> defaultSupplier) {
        return value != null ? value : defaultSupplier.get();
    }
}
```

----------

## 🎭 Real-World Analogy: The Restaurant

```
TRADITIONAL APPROACH (Anonymous Inner Class)
═════════════════════════════════════════════
You: "I want to order food"
Waiter: "Please fill out this 10-page form with:
         - Your full name
         - Date and time
         - Restaurant location
         - Table number
         - Detailed order description
         - Signature"

LAMBDA APPROACH
═════════════════════════════════════════════
You: "Pizza Margherita" 🍕
Waiter: "Got it!" ✓

Both get you food, but lambda is WAY simpler!
```

----------

## 🧩 Lambda Expression Types

### 1. Zero Parameters

java

```java
() -> System.out.println("Hello")
() -> 42
() -> { return "Hi"; }
```

### 2. One Parameter (Parentheses Optional)

java

```java
x -> x * x
(x) -> x * x  // Same as above
x -> { return x * x; }
```

### 3. Multiple Parameters

java

```java
(x, y) -> x + y
(String s, int n) -> s.substring(n)  // With types
(x, y) -> { 
    int sum = x + y;
    return sum;
}
```

----------

## 📊 Memory Model: How Lambdas Work

```
COMPILE TIME
════════════════════════════════════════
Lambda Expression: (x, y) -> x + y
         ↓
Compiler generates synthetic method
         ↓
Creates instance of functional interface

RUNTIME
════════════════════════════════════════
┌─────────────────────────────┐
│  HEAP                       │
│  ┌───────────────────────┐  │
│  │ Lambda Instance       │  │
│  │ (backed by synthetic  │  │
│  │  method)              │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
         ↑
         │ Reference
         │
┌────────┴────────┐
│ STACK           │
│ calculator var  │
└─────────────────┘

Key Point: Lambdas are NOT anonymous classes
           They use invokedynamic (more efficient)
```

----------

## 🎯 Variable Capture and Scope

java

```java
public class Main {
    private int instanceVar = 10;
    private static int staticVar = 20;
    
    public void demoScope() {
        int localVar = 30;  // Effectively final
        
        // Lambda can access:
        Runnable r = () -> {
            System.out.println(instanceVar);  // ✓ Instance variable
            System.out.println(staticVar);    // ✓ Static variable
            System.out.println(localVar);     // ✓ Local variable (effectively final)
            
            // localVar = 40;  // ✗ ERROR! Can't modify
        };
        
        // localVar = 40;  // ✗ This would also cause error
        
        r.run();
    }
    
    public static void main(String[] args) {
        new Main().demoScope();
    }
}
```

**Output:**

```
10
20
30
```

----------

## 🎪 Method References (Lambda's Cousin)

Method references are even more concise than lambdas!

### Types of Method References:

java

```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
        
        // 1. Static method reference
        // Lambda: x -> Math.sqrt(x)
        // Method ref: Math::sqrt
        
        // 2. Instance method reference (particular instance)
        // Lambda: s -> System.out.println(s)
        names.forEach(System.out::println);
        
        // 3. Instance method reference (arbitrary instance)
        // Lambda: (s1, s2) -> s1.compareTo(s2)
        Collections.sort(names, String::compareTo);
        
        // 4. Constructor reference
        // Lambda: () -> new ArrayList<>()
        Supplier<List<String>> listSupplier = ArrayList::new;
    }
}
```

----------

## 🚀 Practical Complete Example: Employee Filter System

java

```java
import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private int age;
    private double salary;
    private String department;
    
    public Employee(String name, int age, double salary, String department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getSalary() { return salary; }
    public String getDepartment() { return department; }
    
    @Override
    public String toString() {
        return String.format("%s (Age: %d, Salary: %.2f, Dept: %s)", 
                           name, age, salary, department);
    }
}

public class Main {
    public static void main(String[] args) {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 30, 75000, "IT"),
            new Employee("Bob", 25, 55000, "HR"),
            new Employee("Charlie", 35, 85000, "IT"),
            new Employee("David", 28, 65000, "Finance"),
            new Employee("Eve", 32, 90000, "IT")
        );
        
        // Lambda expressions for filtering
        Predicate<Employee> itDepartment = e -> e.getDepartment().equals("IT");
        Predicate<Employee> highSalary = e -> e.getSalary() > 70000;
        Predicate<Employee> youngEmployee = e -> e.getAge() < 30;
        
        System.out.println("=== IT Department Employees ===");
        filterEmployees(employees, itDepartment).forEach(System.out::println);
        
        System.out.println("\n=== High Salary Employees (>70k) ===");
        filterEmployees(employees, highSalary).forEach(System.out::println);
        
        System.out.println("\n=== Young IT Employees ===");
        filterEmployees(employees, itDepartment.and(youngEmployee))
            .forEach(System.out::println);
        
        System.out.println("\n=== Average IT Department Salary ===");
        double avgSalary = employees.stream()
            .filter(itDepartment)
            .mapToDouble(Employee::getSalary)
            .average()
            .orElse(0.0);
        System.out.printf("%.2f\n", avgSalary);
    }
    
    static List<Employee> filterEmployees(List<Employee> employees, 
                                         Predicate<Employee> predicate) {
        return employees.stream()
                       .filter(predicate)
                       .collect(Collectors.toList());
    }
}
```

**Output:**

```
=== IT Department Employees ===
Alice (Age: 30, Salary: 75000.00, Dept: IT)
Charlie (Age: 35, Salary: 85000.00, Dept: IT)
Eve (Age: 32, Salary: 90000.00, Dept: IT)

=== High Salary Employees (>70k) ===
Alice (Age: 30, Salary: 75000.00, Dept: IT)
Charlie (Age: 35, Salary: 85000.00, Dept: IT)
Eve (Age: 32, Salary: 90000.00, Dept: IT)

=== Young IT Employees ===

=== Average IT Department Salary ===
83333.33
```

----------

## 💭 Key Takeaways

1.  **Lambda = Concise Function**: Write less, achieve more
2.  **Functional Interface Required**: Must have exactly ONE abstract method
3.  **Effectively Final**: Captured variables must be effectively final
4.  **Better Than Anonymous Classes**: More efficient and readable
5.  **Perfect with Streams**: Lambdas + Streams = Powerful data processing

----------

## 🎓 Best Practices

✅  **DO:**

-   Keep lambdas short and simple (1-3 lines)
-   Use method references when possible
-   Prefer standard functional interfaces
-   Use descriptive variable names for complex lambdas

❌  **DON'T:**

-   Write long, complex lambdas (extract to methods)
-   Modify external variables
-   Throw checked exceptions without handling
-   Use lambdas when anonymous classes are clearer

----------


## 🎉 Conclusion

Lambda expressions transform Java from a verbose, ceremony-heavy language into a more expressive, functional programming language. They're not just syntactic sugar—they represent a fundamental shift in how we write Java code.

**Remember**: A lambda is just a shortcut for writing a function that you need once. Master them, and your Java code will become cleaner, more readable, and more maintainable!


## 📖 Lambda Syntax Variations

### 1. No Parameters

java

```java
Runnable r = () -> System.out.println("Hello Lambda!");
r.run(); // Output: Hello Lambda!
```

### 2. Single Parameter (Parentheses Optional)

java

```java
Consumer<String> print = message -> System.out.println(message);
print.accept("Hello"); // Output: Hello

// Or with parentheses
Consumer<String> print2 = (message) -> System.out.println(message);
```

### 3. Multiple Parameters

java

```java
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(10, 20)); // 30
```

### 4. Multiple Statements (Requires Braces)

java

```java
Comparator<String> comp = (s1, s2) -> {
    System.out.println("Comparing: " + s1 + " and " + s2);
    return s1.compareTo(s2);
};
```

### 5. With Type Declarations

java

```java
BiFunction<Integer, Integer, Integer> multiply = (Integer a, Integer b) -> a * b;
```

## 🎨 Built-in Functional Interfaces

### 1. Predicate<T>  - Boolean Testing

**Memory Trick**: "Predicate PREDICTs true/false"

java

```java
Predicate<Integer> isEven = num -> num % 2 == 0;
System.out.println(isEven.test(4));  // true
System.out.println(isEven.test(7));  // false

// Real-world example: Filtering
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
numbers.stream()
       .filter(n -> n % 2 == 0)
       .forEach(System.out::println); // 2, 4, 6
```

### 2. Function<T, R> - Transformation

**Memory Trick**: "Function transforms input to output"

java

```java
Function<String, Integer> stringLength = s -> s.length();
System.out.println(stringLength.apply("Hello")); // 5

// Chaining functions
Function<Integer, Integer> square = x -> x * x;
Function<Integer, Integer> addTen = x -> x + 10;
System.out.println(square.andThen(addTen).apply(5)); // 35 (25 + 10)
```

### 3. Consumer<T>  - Consumes Input

**Memory Trick**: "Consumer CONSUMES but returns nothing"

java

```java
Consumer<String> printer = msg -> System.out.println(msg);
printer.accept("Hello World!"); // Hello World!

// Multiple consumers
Consumer<String> upperCase = s -> System.out.println(s.toUpperCase());
Consumer<String> lowerCase = s -> System.out.println(s.toLowerCase());
printer.andThen(upperCase).accept("Java"); // Java\nJAVA
```

### 4. Supplier<T>  - Supplies/Produces Value

**Memory Trick**: "Supplier SUPPLIES value from nowhere"

java

```java
Supplier<Double> randomValue = () -> Math.random();
System.out.println(randomValue.get()); // Random number

Supplier<LocalDateTime> currentTime = () -> LocalDateTime.now();
System.out.println(currentTime.get()); // Current timestamp
```

### 5. BiFunction<T, U, R> - Two Inputs, One Output

java

```java
BiFunction<Integer, Integer, String> sumToString = 
    (a, b) -> "Sum is: " + (a + b);
System.out.println(sumToString.apply(5, 3)); // Sum is: 8
```

## 🔄 Method References - Lambda Shorthand

**Analogy**: If Lambda is a recipe card, Method Reference is saying "Use Recipe #5 from page 10"

### Types of Method References

#### 1. Static Method Reference

java

```java
// Lambda
Function<String, Integer> parser1 = s -> Integer.parseInt(s);

// Method Reference
Function<String, Integer> parser2 = Integer::parseInt;
System.out.println(parser2.apply("123")); // 123
```

#### 2. Instance Method Reference

java

```java
String str = "Hello";

// Lambda
Supplier<String> upper1 = () -> str.toUpperCase();

// Method Reference
Supplier<String> upper2 = str::toUpperCase;
System.out.println(upper2.get()); // HELLO
```

#### 3. Constructor Reference

java

```java
// Lambda
Supplier<List<String>> listSupplier1 = () -> new ArrayList<>();

// Constructor Reference
Supplier<List<String>> listSupplier2 = ArrayList::new;
```

## 💡 Practical Examples

### Example 1: Sorting with Lambdas

java

```java
class Employee {
    String name;
    int salary;
    
    Employee(String name, int salary) {
        this.name = name;
        this.salary = salary;
    }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 50000),
    new Employee("Bob", 60000),
    new Employee("Charlie", 45000)
);

// Sort by salary
employees.sort((e1, e2) -> e1.salary - e2.salary);

// Sort by name
employees.sort((e1, e2) -> e1.name.compareTo(e2.name));
```

### Example 2: Thread Creation

java

```java
// Old way
Thread thread1 = new Thread(new Runnable() {
    @Override
    public void run() {
        System.out.println("Old way");
    }
});

// Lambda way
Thread thread2 = new Thread(() -> System.out.println("Lambda way"));
thread2.start();
```

### Example 3: Custom Functional Interface

java

```java
@FunctionalInterface
interface StringOperation {
    String apply(String s);
}

class StringProcessor {
    public static String process(String input, StringOperation operation) {
        return operation.apply(input);
    }
}

// Usage
String result1 = StringProcessor.process("hello", s -> s.toUpperCase());
System.out.println(result1); // HELLO

String result2 = StringProcessor.process("hello", s -> new StringBuilder(s).reverse().toString());
System.out.println(result2); // olleh
```

## 🎓 Interview Problems with Answers

### Problem 1: Filter and Transform

**Question**: Given a list of integers, filter even numbers and square them.

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .collect(Collectors.toList());

System.out.println(result); // [4, 16, 36, 64]
```

**Explanation**:

-   `filter()`  uses Predicate to keep only even numbers
-   `map()`  uses Function to transform each number

### Problem 2: Find Maximum Salary

**Question**: Find the employee with the highest salary.

java

```java
List<Employee> employees = Arrays.asList(
    new Employee("Alice", 50000),
    new Employee("Bob", 60000),
    new Employee("Charlie", 45000)
);

Optional<Employee> maxSalaryEmp = employees.stream()
    .max((e1, e2) -> e1.salary - e2.salary);

maxSalaryEmp.ifPresent(e -> System.out.println(e.name)); // Bob
```

### Problem 3: Group By and Count

**Question**: Count how many employees have salary > 50000.

java

```java
long count = employees.stream()
    .filter(e -> e.salary > 50000)
    .count();

System.out.println(count); // 1
```

### Problem 4: Custom Comparator

**Question**: Sort strings by length, then alphabetically.

java

```java
List<String> words = Arrays.asList("apple", "pie", "banana", "cat");

words.sort((s1, s2) -> {
    int lengthCompare = Integer.compare(s1.length(), s2.length());
    return lengthCompare != 0 ? lengthCompare : s1.compareTo(s2);
});

System.out.println(words); // [cat, pie, apple, banana]
```

### Problem 5: Calculate Average

**Question**: Calculate average salary using lambda.

java

```java
double avgSalary = employees.stream()
    .mapToInt(e -> e.salary)
    .average()
    .orElse(0.0);

System.out.println("Average: " + avgSalary); // 51666.67
```

### Problem 6: Remove Duplicates

**Question**: Remove duplicate numbers and print them.

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5);

numbers.stream()
    .distinct()
    .forEach(n -> System.out.print(n + " ")); // 1 2 3 4 5
```

### Problem 7: String Manipulation

**Question**: Convert list of strings to uppercase and join with comma.

java

```java
List<String> names = Arrays.asList("alice", "bob", "charlie");

String result = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.joining(", "));

System.out.println(result); // ALICE, BOB, CHARLIE
```

### Problem 8: Parallel Processing

**Question**: Check if any number is greater than 100 in a large list.

java

```java
List<Integer> bigList = IntStream.range(1, 1000).boxed().collect(Collectors.toList());

boolean anyGreaterThan100 = bigList.parallelStream()
    .anyMatch(n -> n > 100);

System.out.println(anyGreaterThan100); // true
```

### Problem 9: Custom Functional Interface

**Question**: Create a validator using lambda.

java

```java
@FunctionalInterface
interface Validator<T> {
    boolean validate(T t);
}

Validator<String> emailValidator = email -> 
    email != null && email.contains("@") && email.contains(".");

System.out.println(emailValidator.validate("test@example.com")); // true
System.out.println(emailValidator.validate("invalid")); // false
```

### Problem 10: Reduce Operation

**Question**: Find product of all numbers using reduce.

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

int product = numbers.stream()
    .reduce(1, (a, b) -> a * b);

System.out.println(product); // 120
```

## 🚀 Advanced Concepts

### 1. Closure in Lambda

**A lambda can access variables from enclosing scope (must be effectively final)**

java

```java
int factor = 10;  // Effectively final
Function<Integer, Integer> multiplier = num -> num * factor;
System.out.println(multiplier.apply(5)); // 50

// factor = 20; // Error: Cannot modify
```

### 2. Lambda with Exception Handling

java

```java
@FunctionalInterface
interface ThrowingFunction<T, R> {
    R apply(T t) throws Exception;
}

ThrowingFunction<String, Integer> parser = s -> {
    try {
        return Integer.parseInt(s);
    } catch (NumberFormatException e) {
        return 0;
    }
};
```

### 3. Combining Predicates

java

```java
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;

Predicate<Integer> evenAndPositive = isEven.and(isPositive);
System.out.println(evenAndPositive.test(4));  // true
System.out.println(evenAndPositive.test(-4)); // false
```


