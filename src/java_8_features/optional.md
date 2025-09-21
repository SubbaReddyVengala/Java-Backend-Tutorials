https://claude.ai/public/artifacts/965bc39a-2335-4d03-a914-5894af9e6276

# Java 8 Optional Class and Stream API - Comprehensive Guide

## Table of Contents
- [Java 8 Optional Class](#java-8-optional-class)
- [Stream API Fundamentals](#stream-api-fundamentals)
- [Lambda Expressions](#lambda-expressions)
- [Method References](#method-references)

---

# Java 8 Optional Class

## What is Optional?

The Optional class in Java 8 is a container object that may or may not contain a value. It's designed to handle situations where a value might be absent, providing a better alternative to returning null and helping prevent NullPointerException.

## Why Use Optional?

- **Avoid NullPointerException**: Eliminates null pointer exceptions
- **Explicit null handling**: Makes the possibility of absence explicit in the API
- **Functional programming**: Supports functional-style operations
- **Better code readability**: Makes intent clearer

## Creating Optional Objects

### 1. Optional.of()
```java
// Creates Optional with non-null value
Optional<String> name = Optional.of("John");
// Optional.of(null); // Throws NullPointerException
```

### 2. Optional.ofNullable()
```java
// Creates Optional that can handle null values
String nullableValue = null;
Optional<String> optional = Optional.ofNullable(nullableValue);
Optional<String> optional2 = Optional.ofNullable("Hello");
```

### 3. Optional.empty()
```java
// Creates empty Optional
Optional<String> empty = Optional.empty();
```

## Example 1: Basic Optional Creation and Checking

```java
import java.util.Optional;

public class OptionalBasics {
    public static void main(String[] args) {
        // Creating Optional objects
        Optional<String> name = Optional.of("Alice");
        Optional<String> nullableName = Optional.ofNullable(null);
        Optional<String> emptyOptional = Optional.empty();

        // Checking if value is present
        System.out.println("name is present: " + name.isPresent());
        System.out.println("nullableName is present: " + nullableName.isPresent());
        System.out.println("emptyOptional is present: " + emptyOptional.isPresent());

        // Checking if value is empty (Java 11+)
        System.out.println("name is empty: " + name.isEmpty());
        System.out.println("nullableName is empty: " + nullableName.isEmpty());

        // Getting values safely
        if (name.isPresent()) {
            System.out.println("Name: " + name.get());
        }

        // Better approach using ifPresent
        name.ifPresent(value -> System.out.println("Name using ifPresent: " + value));
        nullableName.ifPresent(value -> System.out.println("This won't print"));
    }
}
```

**Output:**
```
name is present: true
nullableName is present: false
emptyOptional is present: false
name is empty: false
nullableName is empty: true
Name: Alice
Name using ifPresent: Alice
```

## Example 2: Using orElse() and orElseGet()

```java
import java.util.Optional;

public class OptionalDefaults {
    public static void main(String[] args) {
        Optional<String> name = Optional.ofNullable(null);
        Optional<String> validName = Optional.of("Bob");

        // orElse - returns default value if Optional is empty
        String result1 = name.orElse("Default Name");
        String result2 = validName.orElse("Default Name");

        System.out.println("Empty optional with orElse: " + result1);
        System.out.println("Valid optional with orElse: " + result2);

        // orElseGet - uses supplier function to generate default value
        String result3 = name.orElseGet(() -> "Generated Default");
        String result4 = name.orElseGet(() -> {
            System.out.println("Generating default value...");
            return "Complex Default";
        });

        System.out.println("orElseGet result: " + result3);
        System.out.println("orElseGet with logic: " + result4);

        // Difference: orElse always evaluates, orElseGet only when needed
        System.out.println("\n--- Performance difference ---");
        Optional<String> presentValue = Optional.of("Present");

        // This will always call expensiveOperation()
        String orElseResult = presentValue.orElse(expensiveOperation());

        // This will NOT call expensiveOperation() because value is present
        String orElseGetResult = presentValue.orElseGet(() -> expensiveOperation());

        System.out.println("orElse result: " + orElseResult);
        System.out.println("orElseGet result: " + orElseGetResult);
    }

    private static String expensiveOperation() {
        System.out.println("Expensive operation called!");
        return "Expensive Result";
    }
}
```

**Output:**
```
Empty optional with orElse: Default Name
Valid optional with orElse: Bob
orElseGet result: Generated Default
Generating default value...
orElseGet with logic: Complex Default

--- Performance difference ---
Expensive operation called!
orElse result: Present
orElseGet result: Present
```

## Example 3: Using orElseThrow()

```java
import java.util.Optional;
import java.util.NoSuchElementException;

public class OptionalExceptions {
    public static void main(String[] args) {
        Optional<String> emptyOptional = Optional.empty();
        Optional<String> validOptional = Optional.of("Valid Value");

        try {
            // orElseThrow() with default NoSuchElementException
            String value1 = validOptional.orElseThrow();
            System.out.println("Valid value: " + value1);
        } catch (NoSuchElementException e) {
            System.out.println("Caught NoSuchElementException");
        }

        try {
            // orElseThrow() with custom exception
            String value3 = emptyOptional.orElseThrow(() ->
                new IllegalArgumentException("Custom exception: Value is missing"));
        } catch (IllegalArgumentException e) {
            System.out.println("Caught custom exception: " + e.getMessage());
        }

        // Practical example
        String userId = getUserById(123);
        System.out.println("User: " + userId);

        try {
            String invalidUser = getUserById(999);
        } catch (RuntimeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    private static String getUserById(int id) {
        Optional<String> user = findUserById(id);
        return user.orElseThrow(() ->
            new RuntimeException("User with ID " + id + " not found"));
    }

    private static Optional<String> findUserById(int id) {
        if (id == 123) {
            return Optional.of("John Doe");
        }
        return Optional.empty();
    }
}
```

**Output:**
```
Valid value: Valid Value
Caught custom exception: Custom exception: Value is missing
User: John Doe
Error: User with ID 999 not found
```

## Example 4: Functional Operations with Optional

```java
import java.util.Optional;

public class OptionalFunctional {
    public static void main(String[] args) {
        Optional<String> name = Optional.of("john doe");
        Optional<String> emptyName = Optional.empty();

        // map() - transforms the value if present
        Optional<String> upperName = name.map(String::toUpperCase);
        Optional<Integer> nameLength = name.map(String::length);

        System.out.println("Original: " + name.orElse("N/A"));
        System.out.println("Upper case: " + upperName.orElse("N/A"));
        System.out.println("Length: " + nameLength.orElse(0));

        // Chain multiple map operations
        Optional<String> processed = name
            .map(String::trim)
            .map(String::toUpperCase)
            .map(s -> s.replace(" ", "_"));

        System.out.println("Processed: " + processed.orElse("N/A"));

        // map() on empty Optional returns empty Optional
        Optional<String> emptyResult = emptyName.map(String::toUpperCase);
        System.out.println("Empty mapped: " + emptyResult.orElse("Still empty"));

        // filter() - keeps value only if it matches predicate
        Optional<String> longName = name.filter(s -> s.length() > 5);
        Optional<String> shortName = name.filter(s -> s.length() <= 5);

        System.out.println("Long name: " + longName.orElse("Not long enough"));
        System.out.println("Short name: " + shortName.orElse("Too long"));

        // Complex example: process user input
        processUserInput("  ALICE SMITH  ");
        processUserInput("  bob  ");
        processUserInput("");
        processUserInput(null);
    }

    private static void processUserInput(String input) {
        String result = Optional.ofNullable(input)
            .map(String::trim)
            .filter(s -> !s.isEmpty())
            .map(String::toLowerCase)
            .map(s -> s.substring(0, 1).toUpperCase() + s.substring(1))
            .orElse("Anonymous");

        System.out.println("Processed input '" + input + "' -> '" + result + "'");
    }
}
```

**Output:**
```
Original: john doe
Upper case: JOHN DOE
Length: 8
Processed: JOHN_DOE
Empty mapped: Still empty
Long name: john doe
Short name: Not long enough
Processed input '  ALICE SMITH  ' -> 'Alice smith'
Processed input '  bob  ' -> 'Bob'
Processed input '' -> 'Anonymous'
Processed input 'null' -> 'Anonymous'
```

## Example 5: flatMap() with Optional

```java
import java.util.Optional;

public class OptionalFlatMap {
    static class Person {
        private String name;
        private Optional<Address> address;

        public Person(String name, Address address) {
            this.name = name;
            this.address = Optional.ofNullable(address);
        }

        public Person(String name) {
            this.name = name;
            this.address = Optional.empty();
        }

        public String getName() { return name; }
        public Optional<Address> getAddress() { return address; }
    }

    static class Address {
        private String city;
        private Optional<String> zipCode;

        public Address(String city, String zipCode) {
            this.city = city;
            this.zipCode = Optional.ofNullable(zipCode);
        }

        public Address(String city) {
            this.city = city;
            this.zipCode = Optional.empty();
        }

        public String getCity() { return city; }
        public Optional<String> getZipCode() { return zipCode; }
    }

    public static void main(String[] args) {
        Person person1 = new Person("Alice", new Address("New York", "10001"));
        Person person2 = new Person("Bob", new Address("Boston"));
        Person person3 = new Person("Charlie");

        // Using flatMap to avoid Optional<Optional<String>>
        System.out.println("=== Getting City Names ===");

        String city1 = Optional.of(person1)
            .flatMap(Person::getAddress)
            .map(Address::getCity)
            .orElse("Unknown City");

        String city2 = Optional.of(person2)
            .flatMap(Person::getAddress)
            .map(Address::getCity)
            .orElse("Unknown City");

        String city3 = Optional.of(person3)
            .flatMap(Person::getAddress)
            .map(Address::getCity)
            .orElse("Unknown City");

        System.out.println(person1.getName() + " lives in: " + city1);
        System.out.println(person2.getName() + " lives in: " + city2);
        System.out.println(person3.getName() + " lives in: " + city3);

        System.out.println("\n=== Getting Zip Codes ===");

        // Deep nesting with flatMap
        String zip1 = Optional.of(person1)
            .flatMap(Person::getAddress)
            .flatMap(Address::getZipCode)
            .orElse("No Zip Code");

        String zip2 = Optional.of(person2)
            .flatMap(Person::getAddress)
            .flatMap(Address::getZipCode)
            .orElse("No Zip Code");

        System.out.println(person1.getName() + "'s zip: " + zip1);
        System.out.println(person2.getName() + "'s zip: " + zip2);
    }
}
```

**Output:**
```
=== Getting City Names ===
Alice lives in: New York
Bob lives in: Boston
Charlie lives in: Unknown City

=== Getting Zip Codes ===
Alice's zip: 10001
Bob's zip: No Zip Code
```

## Example 6: Optional with Collections

```java
import java.util.*;
import java.util.stream.Collectors;

public class OptionalWithCollections {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<String> emptyList = new ArrayList<>();

        // Finding first element
        Optional<String> firstName = names.stream().findFirst();
        Optional<String> firstFromEmpty = emptyList.stream().findFirst();

        System.out.println("First name: " + firstName.orElse("No names"));
        System.out.println("First from empty: " + firstFromEmpty.orElse("No names"));

        // Finding any element (useful with parallel streams)
        Optional<String> anyName = names.parallelStream().findAny();
        System.out.println("Any name: " + anyName.orElse("No names"));

        // Using Optional with filter
        Optional<String> longName = names.stream()
            .filter(name -> name.length() > 5)
            .findFirst();

        System.out.println("First long name: " + longName.orElse("No long names"));

        // Max and Min operations return Optional
        List<Integer> numbers = Arrays.asList(3, 1, 4, 1, 5, 9, 2, 6);

        Optional<Integer> max = numbers.stream().max(Integer::compareTo);
        Optional<Integer> min = numbers.stream().min(Integer::compareTo);

        System.out.println("Max: " + max.orElse(-1));
        System.out.println("Min: " + min.orElse(-1));

        // Reduce operations return Optional
        Optional<Integer> sum = numbers.stream().reduce(Integer::sum);
        Optional<String> concatenated = names.stream().reduce((a, b) -> a + ", " + b);

        System.out.println("Sum: " + sum.orElse(0));
        System.out.println("Concatenated: " + concatenated.orElse(""));

        // Working with Optional in streams
        List<Optional<String>> optionalNames = Arrays.asList(
            Optional.of("Alice"),
            Optional.empty(),
            Optional.of("Bob"),
            Optional.empty(),
            Optional.of("Charlie")
        );

        // Filter out empty optionals and extract values
        List<String> validNames = optionalNames.stream()
            .filter(Optional::isPresent)
            .map(Optional::get)
            .collect(Collectors.toList());

        System.out.println("Valid names: " + validNames);

        // Converting collection to Optional
        Optional<List<String>> optionalList = names.isEmpty() ?
            Optional.empty() : Optional.of(names);

        optionalList.ifPresent(list -> System.out.println("List size: " + list.size()));
    }
}
```

**Output:**
```
First name: Alice
First from empty: No names
Any name: Alice
First long name: Charlie
Max: 9
Min: 1
Sum: 31
Concatenated: Alice, Bob, Charlie, David
Valid names: [Alice, Bob, Charlie]
List size: 4
```

## Optional Best Practices and Anti-patterns

### Best Practices

1. **Use Optional as return type** for methods that might not return a value
2. **Chain operations fluently** with map(), filter(), flatMap()
3. **Use orElseGet for expensive defaults** instead of orElse
4. **Use ifPresent()** instead of isPresent() + get()

### Anti-patterns (Don't do this)

1. **Don't use get() without checking** - defeats the purpose
2. **Don't use Optional for fields** - use null instead
3. **Don't use Optional.of with nullable values** - use ofNullable
4. **Don't use Optional as method parameters** - use overloading instead

### When to Use Optional

- Method return types that might not return a value
- Stream operations like findFirst(), max(), min()
- Complex null checking scenarios
- API design to make null possibilities explicit

### When NOT to Use Optional

- Fields in classes (use null instead)
- Method parameters (use overloading instead)
- Collections as collection elements
- Performance-critical code where object creation overhead matters

---

# Stream API Fundamentals

## Introduction

Java 8 introduced the **Stream API**, which provides a functional approach to processing sequences of elements. Streams support operations like filtering, mapping, reducing, and collecting, making it easier to perform complex data manipulations on collections in a concise, readable, and efficient way.

## What is a Stream?

A Stream is a sequence of elements that can be processed in a functional style. It's not a data structure but a pipeline of operations applied to data.

### Key Characteristics

- **Not a storage**: Streams don't store data
- **Functional**: Operations don't modify the source
- **Lazy**: Operations are executed only when needed
- **Possibly infinite**: Can handle infinite sequences
- **One-time use**: Each stream can only be consumed once

## Creating Streams

### 1. From Collections
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
Stream<String> stream = names.stream();
```

### 2. From Arrays
```java
String[] array = {"Apple", "Banana", "Orange"};
Stream<String> stream = Arrays.stream(array);
```

### 3. Using Stream.of()
```java
Stream<String> stream = Stream.of("Java", "Python", "C++");
```

### 4. Generate Streams
```java
// Infinite stream of random numbers
Stream<Double> randomStream = Stream.generate(Math::random);

// Sequential numbers
Stream<Integer> numbers = Stream.iterate(1, n -> n + 1);
```

## Types of Stream Operations

### 1. Intermediate Operations (Lazy)
- Return another Stream
- Can be chained
- Not executed until terminal operation

### 2. Terminal Operations (Eager)
- Produce a result or side effect
- Trigger the execution of the stream pipeline

## Common Stream Operations

### Filtering Operations

#### filter()
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
// Result: [2, 4, 6, 8, 10]
```

#### distinct()
```java
List<String> words = Arrays.asList("apple", "banana", "apple", "orange", "banana");

List<String> uniqueWords = words.stream()
    .distinct()
    .collect(Collectors.toList());
// Result: [apple, banana, orange]
```

#### limit() and skip()
```java
List<Integer> first5 = numbers.stream()
    .limit(5)
    .collect(Collectors.toList());
// Result: [1, 2, 3, 4, 5]

List<Integer> skip5 = numbers.stream()
    .skip(5)
    .collect(Collectors.toList());
// Result: [6, 7, 8, 9, 10]
```

### Mapping Operations

#### map()
```java
List<String> names = Arrays.asList("alice", "bob", "charlie");

List<String> upperNames = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
// Result: [ALICE, BOB, CHARLIE]

List<Integer> nameLengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());
// Result: [5, 3, 7]
```

#### flatMap()
```java
List<List<String>> nestedList = Arrays.asList(
    Arrays.asList("Java", "Python"),
    Arrays.asList("C++", "JavaScript"),
    Arrays.asList("Go", "Rust")
);

List<String> flatList = nestedList.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
// Result: [Java, Python, C++, JavaScript, Go, Rust]
```

### Sorting Operations

#### sorted()
```java
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");

List<String> sortedNames = names.stream()
    .sorted()
    .collect(Collectors.toList());
// Result: [Alice, Bob, Charlie]

// Custom sorting
List<String> sortedByLength = names.stream()
    .sorted(Comparator.comparing(String::length))
    .collect(Collectors.toList());
// Result: [Bob, Alice, Charlie]
```

### Reduction Operations

#### reduce()
```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Sum using reduce
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
// Result: 15

// Find maximum
Optional<Integer> max = numbers.stream()
    .reduce(Integer::max);
// Result: Optional[5]
```

#### Built-in Reduction Methods
```java
// For numeric streams
int sum = numbers.stream().mapToInt(Integer::intValue).sum();
OptionalDouble average = numbers.stream().mapToInt(Integer::intValue).average();
OptionalInt max = numbers.stream().mapToInt(Integer::intValue).max();
OptionalInt min = numbers.stream().mapToInt(Integer::intValue).min();
long count = numbers.stream().count();
```

### Collection Operations

#### collect()
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Anna");

// Collect to List
List<String> nameList = names.stream()
    .filter(name -> name.startsWith("A"))
    .collect(Collectors.toList());

// Collect to Set
Set<String> nameSet = names.stream()
    .collect(Collectors.toSet());

// Group by first letter
Map<Character, List<String>> groupedNames = names.stream()
    .collect(Collectors.groupingBy(name -> name.charAt(0)));

// Join strings
String joinedNames = names.stream()
    .collect(Collectors.joining(", "));
// Result: "Alice, Bob, Charlie, Anna"
```

### Matching Operations
```java
List<Integer> numbers = Arrays.asList(2, 4, 6, 8, 10);

boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0); // true
boolean anyOdd = numbers.stream().anyMatch(n -> n % 2 != 0);  // false
boolean noneNegative = numbers.stream().noneMatch(n -> n < 0); // true
```

### Finding Operations
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

Optional<String> first = names.stream().findFirst(); // Optional[Alice]
Optional<String> any = names.stream().findAny();     // Any element
```

## Complex Stream Pipeline Example

```java
public class StreamExample {
    public static void main(String[] args) {
        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "New York"),
            new Person("Bob", 30, "London"),
            new Person("Charlie", 35, "New York"),
            new Person("Diana", 28, "London"),
            new Person("Eve", 32, "Paris")
        );

        // Complex pipeline: Find average age of people in New York over 20
        OptionalDouble averageAge = people.stream()
            .filter(person -> person.getCity().equals("New York"))
            .filter(person -> person.getAge() > 20)
            .mapToInt(Person::getAge)
            .average();

        System.out.println("Average age: " + averageAge.orElse(0));

        // Group people by city and collect names
        Map<String, List<String>> peopleByCity = people.stream()
            .collect(Collectors.groupingBy(
                Person::getCity,
                Collectors.mapping(Person::getName, Collectors.toList())
            ));

        System.out.println(peopleByCity);
    }
}
```

## Parallel Streams

For large datasets, you can use parallel streams to leverage multiple cores:

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Sequential stream
int sum1 = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();

// Parallel stream
int sum2 = numbers.parallelStream()
    .mapToInt(Integer::intValue)
    .sum();
```

## Stream Best Practices

### 1. Avoid Side Effects
```java
// Bad - modifying external state
List<String> results = new ArrayList<>();
names.stream().forEach(results::add); // Don't do this

// Good - use collect
List<String> results = names.stream().collect(Collectors.toList());
```

### 2. Use Method References When Possible
```java
// Less readable
names.stream().map(name -> name.toUpperCase())

// More readable
names.stream().map(String::toUpperCase)
```

### 3. Handle Optionals Properly
```java
Optional<String> result = names.stream().findFirst();

// Good
result.ifPresent(System.out::println);
String value = result.orElse("Default");

// Avoid
if (result.isPresent()) {
    System.out.println(result.get()); // Prefer ifPresent
}
```

### 4. Choose Right Stream Type
```java
// For primitive operations, use specialized streams
IntStream.range(1, 10).sum(); // More efficient than Stream<Integer>
```

## Performance Considerations

- **Small datasets**: Traditional loops might be faster
- **Large datasets**: Streams (especially parallel) can be more efficient
- **Complex operations**: Streams improve readability and maintainability
- **Memory**: Streams are generally memory-efficient due to lazy evaluation

---

# Lambda Expressions

A lambda expression is simply a function without a name. It can even be used as a parameter in a function. Lambda expressions facilitate functional programming and simplify development greatly.

## Syntax of Lambda Expression

```java
(parameters) -> expression
(parameters) -> { statements; }

  +------------+    +----+    +-----------------------+
  | Parameters | -> | -> | -> | Body (expression/code) |
  +------------+    +----+    +-----------------------+
```

## Introduction to Functional Interface

Lambda expression provides an implementation of the Java 8 Functional Interface. An interface that has only one abstract method is called a functional interface.

## Lambda Examples

### Basic Lambda Syntax
```java
// No parameters
() -> System.out.println("Hello World")

// Single parameter
name -> "Hello " + name

// Multiple parameters
(a, b) -> a + b

// Block body
(x, y) -> {
    int sum = x + y;
    return sum * 2;
}
```

### Using Lambda with Collections
```java
List<String> names = Arrays.asList("Alice", "Bob", "Charlie");

// Using lambda with forEach
names.forEach(name -> System.out.println("Hello " + name));

// Using lambda with filter
List<String> longNames = names.stream()
    .filter(name -> name.length() > 5)
    .collect(Collectors.toList());

// Using lambda with map
List<Integer> lengths = names.stream()
    .map(name -> name.length())
    .collect(Collectors.toList());
```

---

# Method References

Method references provide a way to refer to methods without invoking them. They're a shorthand for lambda expressions.

## Types of Method References

### 1. Static Method Reference
```java
// Lambda
Function<String, Integer> lambda = s -> Integer.parseInt(s);

// Method Reference
Function<String, Integer> methodRef = Integer::parseInt;
```

### 2. Instance Method Reference
```java
String str = "Hello";

// Lambda
Supplier<String> lambda = () -> str.toUpperCase();

// Method Reference
Supplier<String> methodRef = str::toUpperCase;
```

### 3. Constructor Reference
```java
// Lambda
Function<String, List<String>> lambda = s -> new ArrayList<>();

// Method Reference
Function<String, List<String>> methodRef = ArrayList::new;
```

### Constructor Reference Example
```java
public class ConstructorReferenceExample {
    public static void main(String[] args) {
         Messageable hello = Message::new;
         hello.getMessage("Hello");
    }
}

interface Messageable {
    Message getMessage(String msg);
}

class Message {
    Message(String msg) {
        System.out.print(msg);
    }
}
```

### Method Reference with Collections
```java
List<String> fruits = new ArrayList<>();
fruits.add("Banana");
fruits.add("Apple");
fruits.add("mango");
fruits.add("orange");

// Using lambda expression
Function<List<String>, Set<String>> f2 = (nameList) -> new HashSet<>(nameList);
Set<String> set2 = f2.apply(fruits);

// Using Method reference
Function<List<String>, Set<String>> f3 = HashSet::new;
Set<String> set = f3.apply(fruits);
```

## FlatMap Examples

### Problem: List of Lists
```java
List<List<String>> nestedList = Arrays.asList(
    Arrays.asList("Apple", "Banana"),
    Arrays.asList("Orange", "Mango"),
    Arrays.asList("Grapes", "Kiwi")
);
```

### With FlatMap
```java
List<String> flatList = nestedList.stream()
    .flatMap(list -> list.stream())
    .collect(Collectors.toList());

// Result: [Apple, Banana, Orange, Mango, Grape, Kiwi]
```

### Visual Representation
**Before FlatMap:**
```
[
  [Apple, Banana],
  [Orange, Mango],
  [Grape, Kiwi]
]
```

**After FlatMap:**
```
[Apple, Banana, Orange, Mango, Grape, Kiwi]
```

### More FlatMap Examples

#### 1. Split Sentences into Words
```java
List<String> sentences = Arrays.asList(
    "Hello World",
    "Java Streams