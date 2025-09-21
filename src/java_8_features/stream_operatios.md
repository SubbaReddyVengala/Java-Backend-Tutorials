https://claude.ai/public/artifacts/1ffdefb3-6625-4a37-935b-d3ec66a9491a
# Java Stream API Complete Reference Guide

## Table of Contents
1. [Terminal Operations](#terminal-operations)
2. [Intermediate Operations](#intermediate-operations)
3. [Stream Creation](#stream-creation)
4. [Primitive Streams](#primitive-streams)
5. [Advanced Topics](#advanced-topics)
6. [Best Practices & Common Pitfalls](#best-practices--common-pitfalls)

---

## Terminal Operations

### reduce()
**Purpose**: Combines stream elements into a single result using accumulation.

**Three Forms**:
```java
// Form 1: BinaryOperator only (returns Optional)
Optional<Integer> sum = Stream.of(1, 2, 3, 4, 5).reduce(Integer::sum);
sum.ifPresent(s -> System.out.println("Sum: " + s)); // Output: Sum: 15

// Form 2: Identity + BinaryOperator (returns value directly)
int sumWithIdentity = Stream.of(1, 2, 3, 4, 5).reduce(0, Integer::sum);
System.out.println("Sum: " + sumWithIdentity); // Output: Sum: 15

// Form 3: Identity + BiFunction + BinaryOperator (for parallel)
int parallelSum = Stream.of(1, 2, 3, 4, 5)
    .parallel()
    .reduce(0, (a, b) -> a + b, Integer::sum);
```

**Real-World Examples**:
```java
// Finding product of all numbers
int product = Stream.of(2, 3, 4, 5).reduce(1, (a, b) -> a * b);
System.out.println("Product: " + product); // Output: Product: 120

// Concatenating strings
String sentence = Stream.of("Java", "is", "awesome")
    .reduce("", (a, b) -> a + " " + b).trim();
System.out.println(sentence); // Output: Java is awesome

// Finding max value manually
Optional<Integer> max = Stream.of(10, 45, 75, 30, 90)
    .reduce((a, b) -> a > b ? a : b);
max.ifPresent(m -> System.out.println("Max: " + m)); // Output: Max: 90

// Complex object reduction - total price
class Product {
    String name;
    double price;
    Product(String name, double price) { this.name = name; this.price = price; }
}

List<Product> products = Arrays.asList(
    new Product("Laptop", 999.99),
    new Product("Mouse", 29.99),
    new Product("Keyboard", 79.99)
);

double totalPrice = products.stream()
    .map(p -> p.price)
    .reduce(0.0, Double::sum);
System.out.println("Total: $" + totalPrice); // Output: Total: $1109.97
```

**Key Points**:
- Empty stream with identity returns the identity value
- Without identity, empty stream returns `Optional.empty()`
- Form 3 is optimized for parallel streams with combiner function

---

### max() / min()
**Purpose**: Find maximum or minimum element using a comparator.

```java
// Natural ordering for numbers
Stream<Integer> numbers = Stream.of(10, 45, 75, 30, 90);
Optional<Integer> max = numbers.max(Comparator.naturalOrder());
max.ifPresent(m -> System.out.println("Max: " + m)); // Output: Max: 90

Optional<Integer> min = Stream.of(10, 45, 75, 30, 90)
    .min(Comparator.naturalOrder());
min.ifPresent(m -> System.out.println("Min: " + m)); // Output: Min: 10

// Strings by length
Stream<String> fruits = Stream.of("Apple", "Orange", "Banana", "Kiwi");
Optional<String> longest = fruits.max(Comparator.comparingInt(String::length));
longest.ifPresent(l -> System.out.println("Longest: " + l)); // Output: Longest: Orange

// Custom objects
class Employee {
    String name;
    int salary;
    Employee(String name, int salary) { this.name = name; this.salary = salary; }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 70000),
    new Employee("Bob", 85000),
    new Employee("Charlie", 60000)
);

// Highest paid employee
Optional<Employee> highestPaid = employees.stream()
    .max(Comparator.comparingInt(e -> e.salary));
highestPaid.ifPresent(e -> System.out.println("Highest: " + e.name)); // Output: Highest: Bob

// Lowest paid employee
Optional<Employee> lowestPaid = employees.stream()
    .min(Comparator.comparingInt(e -> e.salary));
lowestPaid.ifPresent(e -> System.out.println("Lowest: " + e.name)); // Output: Lowest: Charlie

// Multiple criteria comparator
Optional<Employee> result = employees.stream()
    .max(Comparator.comparingInt((Employee e) -> e.salary)
        .thenComparing(e -> e.name));
```

---

### findFirst() / findAny()
**Purpose**: Retrieve a single element from the stream.

```java
// findFirst - deterministic, returns first element
Stream<Integer> numbers = Stream.of(1, 2, 3, 4, 5);
Optional<Integer> first = numbers.findFirst();
first.ifPresent(f -> System.out.println("First: " + f)); // Output: First: 1

// findAny - non-deterministic, optimized for parallel
Stream<String> fruits = Stream.of("Apple", "Banana", "Cherry").parallel();
Optional<String> any = fruits.findAny();
any.ifPresent(f -> System.out.println("Found: " + f)); // May vary

// Finding first even number
Optional<Integer> firstEven = Stream.of(1, 3, 5, 8, 9, 10)
    .filter(n -> n % 2 == 0)
    .findFirst();
firstEven.ifPresent(e -> System.out.println("First even: " + e)); // Output: First even: 8

// Finding any element matching condition
Optional<String> anyLong = Stream.of("cat", "dog", "elephant", "mouse")
    .filter(s -> s.length() > 5)
    .findAny();
anyLong.ifPresent(s -> System.out.println("Found long word: " + s));

// Handling empty results
Optional<Integer> notFound = Stream.of(1, 3, 5)
    .filter(n -> n % 2 == 0)
    .findFirst();
System.out.println(notFound.orElse(-1)); // Output: -1

// With custom objects
class Book {
    String title;
    String author;
    Book(String title, String author) { this.title = title; this.author = author; }
}

List<Book> books = Arrays.asList(
    new Book("1984", "Orwell"),
    new Book("Brave New World", "Huxley"),
    new Book("Fahrenheit 451", "Bradbury")
);

Optional<Book> orwellBook = books.stream()
    .filter(b -> b.author.equals("Orwell"))
    .findFirst();
orwellBook.ifPresent(b -> System.out.println("Found: " + b.title));
```

**Key Difference**:
- `findFirst()`: Always returns the first element in encounter order
- `findAny()`: May return any element, more efficient in parallel streams

---

### count()
**Purpose**: Returns the number of elements in the stream.

```java
// Basic counting
long count = Stream.of(1, 2, 3, 4, 5).count();
System.out.println("Count: " + count); // Output: Count: 5

// Counting after filter
long evenCount = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .filter(n -> n % 2 == 0)
    .count();
System.out.println("Even numbers: " + evenCount); // Output: Even numbers: 5

// Counting long strings
long longNames = Stream.of("Apple", "Banana", "Cherry", "Date")
    .filter(s -> s.length() > 5)
    .count();
System.out.println("Long names: " + longNames); // Output: Long names: 2

// Real-world example - counting orders over threshold
class Order {
    String id;
    double amount;
    Order(String id, double amount) { this.id = id; this.amount = amount; }
}

List<Order> orders = Arrays.asList(
    new Order("O1", 150.0),
    new Order("O2", 75.0),
    new Order("O3", 200.0),
    new Order("O4", 50.0)
);

long highValueOrders = orders.stream()
    .filter(o -> o.amount > 100)
    .count();
System.out.println("Orders over $100: " + highValueOrders); // Output: Orders over $100: 2

// Counting distinct elements
long distinctCount = Stream.of(1, 2, 2, 3, 3, 3, 4)
    .distinct()
    .count();
System.out.println("Distinct: " + distinctCount); // Output: Distinct: 4

// Counting with multiple conditions
long complexCount = Stream.of("Java", "Python", "JavaScript", "C++", "Ruby")
    .filter(s -> s.length() > 4)
    .filter(s -> s.contains("a"))
    .count();
System.out.println("Filtered count: " + complexCount); // Output: Filtered count: 2
```

**Performance Note**: `count()` is a terminal operation that short-circuits when possible.

---

### collect()
**Purpose**: Accumulate elements into a mutable container (List, Set, Map, etc.).

```java
// Collect to List
List<String> list = Stream.of("Apple", "Banana", "Cherry")
    .collect(Collectors.toList());
System.out.println("List: " + list);

// Collect to Set (removes duplicates)
Set<Integer> set = Stream.of(1, 2, 2, 3, 3, 3)
    .collect(Collectors.toSet());
System.out.println("Set: " + set); // Output: Set: [1, 2, 3]

// Collect to specific collection type
LinkedList<String> linkedList = Stream.of("A", "B", "C")
    .collect(Collectors.toCollection(LinkedList::new));

TreeSet<Integer> treeSet = Stream.of(5, 2, 8, 1)
    .collect(Collectors.toCollection(TreeSet::new));

// Collect to Map
Map<String, Integer> nameLength = Stream.of("Alice", "Bob", "Charlie")
    .collect(Collectors.toMap(
        name -> name,           // key mapper
        name -> name.length()   // value mapper
    ));
System.out.println("Map: " + nameLength); // {Alice=5, Bob=3, Charlie=7}

// Handling duplicate keys in Map
Map<Integer, String> lengthToName = Stream.of("Alice", "Bob", "Anna")
    .collect(Collectors.toMap(
        String::length,                    // key
        name -> name,                      // value
        (existing, replacement) -> existing // merge function for duplicates
    ));

// Joining strings
String joined = Stream.of("Java", "Python", "JavaScript")
    .collect(Collectors.joining());
System.out.println(joined); // Output: JavaPythonJavaScript

// Joining with delimiter
String csv = Stream.of("Java", "Python", "JavaScript")
    .collect(Collectors.joining(", "));
System.out.println(csv); // Output: Java, Python, JavaScript

// Joining with delimiter, prefix, and suffix
String formatted = Stream.of("Java", "Python", "JavaScript")
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(formatted); // Output: [Java, Python, JavaScript]

// GroupingBy - group elements by a classifier
class Student {
    String name;
    String department;
    int grade;
    Student(String name, String department, int grade) {
        this.name = name; this.department = department; this.grade = grade;
    }
}

List<Student> students = Arrays.asList(
    new Student("Alice", "CS", 85),
    new Student("Bob", "Math", 90),
    new Student("Charlie", "CS", 78),
    new Student("David", "Math", 88)
);

Map<String, List<Student>> byDepartment = students.stream()
    .collect(Collectors.groupingBy(s -> s.department));
System.out.println("By department: " + byDepartment.keySet());

// GroupingBy with downstream collector - count per group
Map<String, Long> countByDept = students.stream()
    .collect(Collectors.groupingBy(
        s -> s.department,
        Collectors.counting()
    ));
System.out.println("Count by dept: " + countByDept); // {CS=2, Math=2}

// GroupingBy with averaging
Map<String, Double> avgGradeByDept = students.stream()
    .collect(Collectors.groupingBy(
        s -> s.department,
        Collectors.averagingInt(s -> s.grade)
    ));
System.out.println("Avg grades: " + avgGradeByDept);

// PartitioningBy - split into two groups (true/false)
Map<Boolean, List<Student>> passFail = students.stream()
    .collect(Collectors.partitioningBy(s -> s.grade >= 80));
System.out.println("Passed: " + passFail.get(true).size());

// SummarizingInt - get statistics
IntSummaryStatistics stats = students.stream()
    .collect(Collectors.summarizingInt(s -> s.grade));
System.out.println("Average: " + stats.getAverage());
System.out.println("Max: " + stats.getMax());
System.out.println("Min: " + stats.getMin());
System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());

// Custom collector
String customResult = Stream.of(1, 2, 3, 4, 5)
    .collect(Collectors.collectingAndThen(
        Collectors.toList(),
        list -> "Count: " + list.size()
    ));
System.out.println(customResult); // Output: Count: 5
```

---

### Matching Operations

#### allMatch()
**Purpose**: Returns true if ALL elements match the predicate.

```java
// All even numbers
boolean allEven = Stream.of(2, 4, 6, 8, 10)
    .allMatch(n -> n % 2 == 0);
System.out.println("All even: " + allEven); // Output: true

// All positive
boolean allPositive = Stream.of(1, 2, -3, 4)
    .allMatch(n -> n > 0);
System.out.println("All positive: " + allPositive); // Output: false

// All strings contain 'a'
boolean allContainA = Stream.of("Java", "Scala", "Kafka")
    .allMatch(s -> s.toLowerCase().contains("a"));
System.out.println("All contain 'a': " + allContainA); // Output: true

// Empty stream returns true
boolean emptyResult = Stream.empty()
    .allMatch(x -> false);
System.out.println("Empty stream: " + emptyResult); // Output: true

// Real-world: All employees above minimum wage
class Employee {
    String name;
    double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 50000),
    new Employee("Bob", 60000),
    new Employee("Charlie", 55000)
);

double minimumWage = 45000;
boolean allAboveMin = employees.stream()
    .allMatch(e -> e.salary >= minimumWage);
System.out.println("All above minimum: " + allAboveMin); // Output: true
```

#### anyMatch()
**Purpose**: Returns true if ANY element matches the predicate.

```java
// Any even number
boolean anyEven = Stream.of(1, 3, 5, 8, 9)
    .anyMatch(n -> n % 2 == 0);
System.out.println("Any even: " + anyEven); // Output: true

// Any negative
boolean anyNegative = Stream.of(1, 2, 3, 4)
    .anyMatch(n -> n < 0);
System.out.println("Any negative: " + anyNegative); // Output: false

// Any string longer than 5
boolean anyLong = Stream.of("Hi", "Hello", "Hey")
    .anyMatch(s -> s.length() > 5);
System.out.println("Any long: " + anyLong); // Output: false

// Empty stream returns false
boolean emptyAny = Stream.empty()
    .anyMatch(x -> true);
System.out.println("Empty any: " + emptyAny); // Output: false

// Real-world: Any order above threshold
class Order {
    String id;
    double amount;
    Order(String id, double amount) { this.id = id; this.amount = amount; }
}

List<Order> orders = Arrays.asList(
    new Order("O1", 50.0),
    new Order("O2", 150.0),
    new Order("O3", 75.0)
);

boolean anyHighValue = orders.stream()
    .anyMatch(o -> o.amount > 100);
System.out.println("Any high value: " + anyHighValue); // Output: true
```

#### noneMatch()
**Purpose**: Returns true if NO elements match the predicate.

```java
// No negative numbers
boolean noNegative = Stream.of(1, 2, 3, 4, 5)
    .noneMatch(n -> n < 0);
System.out.println("No negatives: " + noNegative); // Output: true

// No element greater than 100
boolean noneAbove100 = Stream.of(10, 20, 30, 40)
    .noneMatch(n -> n > 100);
System.out.println("None above 100: " + noneAbove100); // Output: true

// No string contains 'z'
boolean noZ = Stream.of("Apple", "Banana", "Cherry")
    .noneMatch(s -> s.toLowerCase().contains("z"));
System.out.println("No 'z': " + noZ); // Output: true

// Empty stream returns true
boolean emptyNone = Stream.empty()
    .noneMatch(x -> true);
System.out.println("Empty none: " + emptyNone); // Output: true

// Real-world: No failed transactions
class Transaction {
    String id;
    String status;
    Transaction(String id, String status) { this.id = id; this.status = status; }
}

List<Transaction> transactions = Arrays.asList(
    new Transaction("T1", "SUCCESS"),
    new Transaction("T2", "SUCCESS"),
    new Transaction("T3", "SUCCESS")
);

boolean noFailures = transactions.stream()
    .noneMatch(t -> t.status.equals("FAILED"));
System.out.println("No failures: " + noFailures); // Output: true
```

**Performance Note**: All matching operations are short-circuit - they stop as soon as the result is determined.

---

### forEach() / forEachOrdered()
**Purpose**: Perform an action for each element.

```java
// Basic forEach
Stream.of("Java", "Python", "JavaScript")
    .forEach(s -> System.out.println(s));

// forEach with method reference
Stream.of(1, 2, 3, 4, 5)
    .forEach(System.out::println);

// forEachOrdered - maintains order in parallel streams
Stream.of("Apple", "Banana", "Cherry", "Date")
    .parallel()
    .forEachOrdered(System.out::println);
// Always prints in order: Apple, Banana, Cherry, Date

// forEach in parallel (order not guaranteed)
Stream.of("Apple", "Banana", "Cherry", "Date")
    .parallel()
    .forEach(System.out::println);
// May print in any order

// Real-world: Process orders
class Order {
    String id;
    double amount;
    Order(String id, double amount) { this.id = id; this.amount = amount; }
    void process() { System.out.println("Processing " + id); }
}

List<Order> orders = Arrays.asList(
    new Order("O1", 100.0),
    new Order("O2", 200.0)
);

orders.stream().forEach(Order::process);

// Side effects example (not recommended - use collect instead)
List<String> results = new ArrayList<>();
Stream.of("a", "b", "c")
    .map(String::toUpperCase)
    .forEach(results::add); // Works but not ideal
```

**Key Difference**:
- `forEach()`: No order guarantee in parallel streams
- `forEachOrdered()`: Maintains encounter order even in parallel

---

## Intermediate Operations

### filter()
**Purpose**: Select elements that match a predicate.

```java
// Filter even numbers
List<Integer> evens = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());
System.out.println("Evens: " + evens); // [2, 4, 6, 8, 10]

// Filter strings by length
List<String> longWords = Stream.of("cat", "elephant", "dog", "butterfly")
    .filter(s -> s.length() > 5)
    .collect(Collectors.toList());
System.out.println("Long words: " + longWords); // [elephant, butterfly]

// Multiple filters (chaining)
List<Integer> result = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .filter(n -> n % 2 == 0)  // even
    .filter(n -> n > 5)        // greater than 5
    .collect(Collectors.toList());
System.out.println("Even and > 5: " + result); // [6, 8, 10]

// Filter with complex condition
class Product {
    String name;
    double price;
    String category;
    Product(String name, double price, String category) {
        this.name = name; this.price = price; this.category = category;
    }
}

List<Product> products = Arrays.asList(
    new Product("Laptop", 999.99, "Electronics"),
    new Product("Mouse", 29.99, "Electronics"),
    new Product("Desk", 299.99, "Furniture"),
    new Product("Chair", 199.99, "Furniture")
);

// Filter electronics under $100
List<Product> affordableElectronics = products.stream()
    .filter(p -> p.category.equals("Electronics"))
    .filter(p -> p.price < 100)
    .collect(Collectors.toList());

// Filter with method reference
List<String> nonEmpty = Stream.of("", "Hello", "", "World", "")
    .filter(s -> !s.isEmpty())
    .collect(Collectors.toList());

// Filter null values
List<String> nonNull = Stream.of("Java", null, "Python", null, "C++")
    .filter(Objects::nonNull)
    .collect(Collectors.toList());
System.out.println("Non-null: " + nonNull); // [Java, Python, C++]

// Filter with regex
List<String> emails = Stream.of("user@example.com", "invalid", "admin@site.org")
    .filter(s -> s.matches("^[A-Za-z0-9+_.-]+@(.+)$"))
    .collect(Collectors.toList());
```

---

### map()
**Purpose**: Transform each element using a function.

```java
// Square numbers
List<Integer> squares = Stream.of(1, 2, 3, 4, 5)
    .map(n -> n * n)
    .collect(Collectors.toList());
System.out.println("Squares: " + squares); // [1, 4, 9, 16, 25]

// Uppercase strings
List<String> upper = Stream.of("hello", "world", "java")
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println("Upper: " + upper); // [HELLO, WORLD, JAVA]

// Extract property from objects
class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
}

List<Person> people = Arrays.asList(
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Charlie", 35)
);

List<String> names = people.stream()
    .map(p -> p.name)
    .collect(Collectors.toList());
System.out.println("Names: " + names); // [Alice, Bob, Charlie]

// Chain transformations
List<String> transformed = Stream.of("java", "python", "javascript")
    .map(String::toUpperCase)
    .map(s -> s + "!")
    .map(s -> "[" + s + "]")
    .collect(Collectors.toList());
System.out.println(transformed); // [[JAVA!], [PYTHON!], [JAVASCRIPT!]]

// Map to different type
class Order {
    String id;
    double amount;
    Order(String id, double amount) { this.id = id; this.amount = amount; }
}

List<Order> orders = Arrays.asList(
    new Order("O1", 100.50),
    new Order("O2", 250.75)
);

List<Double> amounts = orders.stream()
    .map(o -> o.amount)
    .collect(Collectors.toList());

// Complex mapping
class Employee {
    String name;
    int salary;
    Employee(String name, int salary) { this.name = name; this.salary = salary; }
}

class EmployeeDTO {
    String name;
    double annualSalary;
    EmployeeDTO(String name, double annualSalary) {
        this.name = name; this.annualSalary = annualSalary;
    }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 5000),
    new Employee("Bob", 6000)
);

List<EmployeeDTO> dtos = employees.stream()
    .map(e -> new EmployeeDTO(e.name, e.salary * 12))
    .collect(Collectors.toList());
```

---

### flatMap()
**Purpose**: Flatten nested structures into a single stream.

```java
// Flatten list of lists
List<List<Integer>> nestedList = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5, 6),
    Arrays.asList(7, 8, 9)
);

List<Integer> flattened = nestedList.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
System.out.println("Flattened: " + flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Split strings into words
List<String> sentences = Arrays.asList(
    "Hello World",
    "Java Streams",
    "Are Awesome"
);

List<String> words = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .collect(Collectors.toList());
System.out.println("Words: " + words); // [Hello, World, Java, Streams, Are, Awesome]

// Flatten optional values
List<Optional<String>> optionals = Arrays.asList(
    Optional.of("Java"),
    Optional.empty(),
    Optional.of("Python"),
    Optional.empty(),
    Optional.of("JavaScript")
);

List<String> values = optionals.stream()
    .flatMap(Optional::stream)  // Java 9+
    .collect(Collectors.toList());
System.out.println("Values: " + values); // [Java, Python, JavaScript]

// Real-world: Flatten order items
class Order {
    String orderId;
    List<String> items;
    Order(String orderId, List<String> items) {
        this.orderId = orderId; this.items = items;
    }
}

List<Order> orders = Arrays.asList(
    new Order("O1", Arrays.asList("Laptop", "Mouse")),
    new Order("O2", Arrays.asList("Keyboard", "Monitor", "Cable")),
    new Order("O3", Arrays.asList("Headphones"))
);

List<String> allItems = orders.stream()
    .flatMap(order -> order.items.stream())
    .collect(Collectors.toList());
System.out.println("All items: " + allItems);

// Get all unique characters from strings
List<String> words2 = Arrays.asList("Java", "Streams", "API");
List<String> uniqueChars = words2.stream()
    .flatMap(word -> Arrays.stream(word.split("")))
    .distinct()
    .collect(Collectors.toList());
System.out.println("Unique chars: " + uniqueChars);

// Flatten arrays
String[][] array2D = {
    {"a", "b"},
    {"c", "d"},
    {"e", "f"}
};

List<String> flatArray = Arrays.stream(array2D)
    .flatMap(Arrays::stream)
    .collect(Collectors.toList());
System.out.println("Flat array: " + flatArray); // [a, b, c, d, e, f]
```

---

### sorted()
**Purpose**: Sort stream elements.

```java
// Natural order (ascending)
List<Integer> sorted = Stream.of(5, 3, 9, 1, 4, 8)
    .sorted()
    .collect(Collectors.toList());
System.out.println("Sorted: " + sorted); // [1, 3, 4, 5, 8, 9]

// Reverse order
List<Integer> reversed = Stream.of(5, 3, 9, 1, 4, 8)
    .sorted(Comparator.reverseOrder())
    .collect(Collectors.toList());
System.out.println("Reversed: " + reversed); // [9, 8, 5, 4, 3, 1]

// Strings alphabetically
List<String> alphabetical = Stream.of("banana", "apple", "cherry", "date")
    .sorted()
    .collect(Collectors.toList());
System.out.println("Alphabetical: " + alphabetical); // [apple, banana, cherry, date]

// Strings by length
List<String> byLength = Stream.of("banana", "apple", "cherry", "date")
    .sorted(Comparator.comparingInt(String::length))
    .collect(Collectors.toList());
System.out.println("By length: " + byLength); // [date, apple, banana, cherry]

// Custom objects
class Student {
    String name;
    int grade;
    Student(String name, int grade) { this.name = name; this.grade = grade; }
}

List<Student> students = Arrays.asList(
    new Student("Charlie", 85),
    new Student("Alice", 92),
    new Student("Bob", 78)
);

// Sort by grade
List<Student> byGrade = students.stream()
    .sorted(Comparator.comparingInt(s -> s.grade))
    .collect(Collectors.toList());

// Sort by grade descending
List<Student> byGradeDesc = students.stream()
    .sorted(Comparator.comparingInt((Student s) -> s.grade).reversed())
    .collect(Collectors.toList());

// Sort by name
List<Student> byName = students.stream()
    .sorted(Comparator.comparing(s -> s.name))
    .collect(Collectors.toList());

// Multi-level sorting (by grade, then by name)
List<Student> multiSort = students.stream()
    .sorted(Comparator.comparingInt((Student s) -> s.grade)
        .thenComparing(s -> s.name))
    .collect(Collectors.toList());

// Case-insensitive string sorting
List<String> caseInsensitive = Stream.of("Banana", "apple", "Cherry", "date")
    .sorted(String.CASE_INSENSITIVE_ORDER)
    .collect(Collectors.toList());
System.out.println("Case insensitive: " + caseInsensitive);

// Null-safe sorting
List<String> withNulls = Arrays.asList("Java", null, "Python", null, "C++");
List<String> nullsLast = withNulls.stream()
    .sorted(Comparator.nullsLast(Comparator.naturalOrder()))
    .collect(Collectors.toList());
```

---

### distinct()
**Purpose**: Remove duplicate elements from the stream.

```java
// Remove duplicate numbers
List<Integer> unique = Stream.of(1, 2, 2, 3, 3, 3, 4, 4, 5)
    .distinct()
    .collect(Collectors.toList());
System.out.println("Unique: " + unique); // [1, 2, 3, 4, 5]

// Remove duplicate strings
List<String> uniqueWords = Stream.of("apple", "banana", "apple", "cherry", "banana")
    .distinct()
    .collect(Collectors.toList());
System.out.println("Unique words: " + uniqueWords); // [apple, banana, cherry]

// Distinct with custom objects (uses equals/hashCode)
class Person {
    String name;
    int age;
    Person(String name, int age) { this.name = name; this.age = age; }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && Objects.equals(name, person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

List<Person> people = Arrays.asList(
    new Person("Alice", 30),
    new Person("Bob", 25),
    new Person("Alice", 30),  // duplicate
    new Person("Charlie", 35)
);

List<Person> uniquePeople = people.stream()
    .distinct()
    .collect(Collectors.toList());
System.out.println("Unique people: " + uniquePeople.size()); // 3

// Distinct by property (using custom logic)
class Product {
    String name;
    String category;
    Product(String name, String category) { this.name = name; this.category = category; }
}

List<Product> products = Arrays.asList(
    new Product("Laptop", "Electronics"),
    new Product("Mouse", "Electronics"),
    new Product("Desk", "Furniture"),
    new Product("Keyboard", "Electronics")
);

// Get distinct categories
List<String> uniqueCategories = products.stream()
    .map(p -> p.category)
    .distinct()
    .collect(Collectors.toList());
System.out.println("Categories: " + uniqueCategories); // [Electronics, Furniture]

// Distinct after transformation
List<Integer> lengths = Stream.of("cat", "dog", "elephant", "ant", "bee")
    .map(String::length)
    .distinct()
    .collect(Collectors.toList());
System.out.println("Unique lengths: " + lengths); // [3, 8]
```

---

### limit()
**Purpose**: Truncate stream to maximum size.

```java
// Get first 3 elements
List<Integer> limited = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .limit(3)
    .collect(Collectors.toList());
System.out.println("Limited: " + limited); // [1, 2, 3]

// Top 5 highest values
List<Integer> top5 = Stream.of(23, 45, 12, 67, 89, 34, 56, 78)
    .sorted(Comparator.reverseOrder())
    .limit(5)
    .collect(Collectors.toList());
System.out.println("Top 5: " + top5); // [89, 78, 67, 56, 45]

// First 3 even numbers
List<Integer> firstEven = Stream.of(1, 3, 2, 5, 4, 7, 6, 9, 8)
    .filter(n -> n % 2 == 0)
    .limit(3)
    .collect(Collectors.toList());
System.out.println("First 3 even: " + firstEven); // [2, 4, 6]

// Real-world: Top 3 earners
class Employee {
    String name;
    double salary;
    Employee(String name, double salary) { this.name = name; this.salary = salary; }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", 70000),
    new Employee("Bob", 85000),
    new Employee("Charlie", 60000),
    new Employee("David", 95000),
    new Employee("Eve", 75000)
);

List<Employee> topEarners = employees.stream()
    .sorted(Comparator.comparingDouble((Employee e) -> e.salary).reversed())
    .limit(3)
    .collect(Collectors.toList());
System.out.println("Top 3 earners collected");

// Pagination simulation
int pageSize = 5;
int pageNumber = 2; // 0-indexed
List<Integer> page = Stream.iterate(1, n -> n + 1)
    .skip(pageNumber * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());
System.out.println("Page 2: " + page); // [11, 12, 13, 14, 15]

// Limit after multiple operations
List<String> result = Stream.of("apple", "banana", "cherry", "date", "elderberry")
    .filter(s -> s.length() > 4)
    .map(String::toUpperCase)
    .limit(2)
    .collect(Collectors.toList());
System.out.println("Result: " + result); // [APPLE, BANANA]
```

---

### skip()
**Purpose**: Discard first N elements.

```java
// Skip first 3 elements
List<Integer> skipped = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .skip(3)
    .collect(Collectors.toList());
System.out.println("Skipped: " + skipped); // [4, 5, 6, 7, 8, 9, 10]

// Skip and limit for pagination
List<Integer> secondPage = Stream.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    .skip(5)
    .limit(5)
    .collect(Collectors.toList());
System.out.println("Page 2: " + secondPage); // [6, 7, 8, 9, 10]

// Skip first odd numbers
List<Integer> skipOdds = Stream.of(1, 3, 5, 2, 4, 6, 8)
    .skip(3)
    .collect(Collectors.toList());
System.out.println("After skip: " + skipOdds); // [2, 4, 6, 8]

// Real-world: Skip header row
List<String> csvData = Arrays.asList(
    "Name,Age,City",
    "Alice,30,NYC",
    "Bob,25,LA",
    "Charlie,35,Chicago"
);

List<String> dataRows = csvData.stream()
    .skip(1)  // Skip header
    .collect(Collectors.toList());
System.out.println("Data rows: " + dataRows.size()); // 3

// Skip combined with sorted
List<Integer> bottomHalf = Stream.of(5, 2, 8, 1, 9, 3, 7, 4)
    .sorted()
    .skip(4)
    .collect(Collectors.toList());
System.out.println("Bottom half: " + bottomHalf); // [5, 7, 8, 9]

// Infinite stream with skip
List<Integer> numbers = Stream.iterate(1, n -> n + 1)
    .skip(100)
    .limit(5)
    .collect(Collectors.toList());
System.out.println("101-105: " + numbers); // [101, 102, 103, 104, 105]
```

---

### peek()
**Purpose**: Perform action on each element without modifying stream (mainly for debugging).

```java
// Debugging stream operations
List<String> result = Stream.of("apple", "banana", "cherry", "date")
    .peek(s -> System.out.println("Original: " + s))
    .filter(s -> s.length() > 5)
    .peek(s -> System.out.println("After filter: " + s))
    .map(String::toUpperCase)
    .peek(s -> System.out.println("After map: " + s))
    .collect(Collectors.toList());

// Logging intermediate values
List<Integer> processed = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> System.out.println("Processing: " + n))
    .map(n -> n * 2)
    .peek(n -> System.out.println("Doubled: " + n))
    .filter(n -> n > 5)
    .peek(n -> System.out.println("Filtered: " + n))
    .collect(Collectors.toList());

// Modifying external state (use cautiously)
List<String> processed2 = new ArrayList<>();
List<String> final2 = Stream.of("a", "b", "c")
    .peek(s -> processed2.add(s + "-processed"))
    .map(String::toUpperCase)
    .collect(Collectors.toList());

// Real-world: Logging with timestamps
class Order {
    String id;
    double amount;
    Order(String id, double amount) { this.id = id; this.amount = amount; }
}

List<Order> orders = Arrays.asList(
    new Order("O1", 100.0),
    new Order("O2", 250.0),
    new Order("O3", 75.0)
);

List<Order> highValueOrders = orders.stream()
    .peek(o -> System.out.println("Checking order: " + o.id))
    .filter(o -> o.amount > 100)
    .peek(o -> System.out.println("High value order found: " + o.id))
    .collect(Collectors.toList());

// Performance monitoring
long startTime = System.currentTimeMillis();
List<Integer> squares = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> System.out.println("Processing at: " + (System.currentTimeMillis() - startTime) + "ms"))
    .map(n -> n * n)
    .collect(Collectors.toList());
```

**Important**: `peek()` is intended for debugging. For side effects, prefer `forEach()` as a terminal operation.

---

## Specialized Mapping Operations

### mapToInt()
**Purpose**: Convert stream to IntStream for primitive int operations.

```java
// String lengths to IntStream
IntStream lengths = Stream.of("Java", "Python", "JavaScript", "C++")
    .mapToInt(String::length);
System.out.println("Sum of lengths: " + lengths.sum()); // 22

// Parse strings to ints
int total = Stream.of("10", "20", "30", "40")
    .mapToInt(Integer::parseInt)
    .sum();
System.out.println("Total: " + total); // 100

// Average calculation
OptionalDouble avgLength = Stream.of("cat", "elephant", "dog")
    .mapToInt(String::length)
    .average();
avgLength.ifPresent(avg -> System.out.println("Avg length: " + avg));

// Max and min
OptionalInt maxLength = Stream.of("cat", "elephant", "dog")
    .mapToInt(String::length)
    .max();
maxLength.ifPresent(max -> System.out.println("Max length: " + max)); // 8

// Real-world: Calculate total quantity
class OrderItem {
    String product;
    int quantity;
    OrderItem(String product, int quantity) { this.product = product; this.quantity = quantity; }
}

List<OrderItem> items = Arrays.asList(
    new OrderItem("Laptop", 2),
    new OrderItem("Mouse", 5),
    new OrderItem("Keyboard", 3)
);

int totalQuantity = items.stream()
    .mapToInt(item -> item.quantity)
    .sum();
System.out.println("Total items: " + totalQuantity); // 10

// Statistics
IntSummaryStatistics stats = items.stream()
    .mapToInt(item -> item.quantity)
    .summaryStatistics();
System.out.println("Average quantity: " + stats.getAverage());
System.out.println("Max quantity: " + stats.getMax());
System.out.println("Min quantity: " + stats.getMin());
```

---

### mapToLong()
**Purpose**: Convert stream to LongStream for primitive long operations.

```java
// Large numbers
long totalRevenue = Stream.of("1000000", "2000000", "3000000")
    .mapToLong(Long::parseLong)
    .sum();
System.out.println("Total revenue: " + totalRevenue); // 6000000

// Milliseconds to seconds
List<Long> timestamps = Arrays.asList(1000L, 2000L, 3000L, 4000L);
long totalSeconds = timestamps.stream()
    .mapToLong(ms -> ms / 1000)
    .sum();
System.out.println("Total seconds: " + totalSeconds); // 10

// Real-world: File sizes
class FileInfo {
    String name;
    long sizeBytes;
    FileInfo(String name, long sizeBytes) { this.name = name; this.sizeBytes = sizeBytes; }
}

List<FileInfo> files = Arrays.asList(
    new FileInfo("doc1.pdf", 1024000L),
    new FileInfo("doc2.pdf", 2048000L),
    new FileInfo("doc3.pdf", 512000L)
);

long totalSize = files.stream()
    .mapToLong(f -> f.sizeBytes)
    .sum();
System.out.println("Total size (MB): " + totalSize / (1024 * 1024)); // 3

// Average file size
OptionalDouble avgSize = files.stream()
    .mapToLong(f -> f.sizeBytes)
    .average();
avgSize.ifPresent(avg -> System.out.println("Avg size: " + avg));
```

---

### mapToDouble()
**Purpose**: Convert stream to DoubleStream for primitive double operations.

```java
// Parse price strings
double totalPrice = Stream.of("19.99", "29.99", "39.99")
    .mapToDouble(Double::parseDouble)
    .sum();
System.out.println("Total: $" + totalPrice); // 89.97

// Calculate average
OptionalDouble avgPrice = Stream.of("19.99", "29.99", "39.99")
    .mapToDouble(Double::parseDouble)
    .average();
avgPrice.ifPresent(avg -> System.out.println("Average: $" + avg));

// Real-world: Product prices with discount
class Product {
    String name;
    double price;
    double discountPercent;
    Product(String name, double price, double discountPercent) {
        this.name = name; this.price = price; this.discountPercent = discountPercent;
    }
    double getFinalPrice() {
        return price * (1 - discountPercent / 100);
    }
}

List<Product> products = Arrays.asList(
    new Product("Laptop", 1000.0, 10),
    new Product("Mouse", 50.0, 20),
    new Product("Keyboard", 100.0, 15)
);

double totalAfterDiscount = products.stream()
    .mapToDouble(Product::getFinalPrice)
    .sum();
System.out.println("Total after discount: $" + totalAfterDiscount);

// Statistics
DoubleSummaryStatistics priceStats = products.stream()
    .mapToDouble(p -> p.price)
    .summaryStatistics();
System.out.println("Avg price: $" + priceStats.getAverage());
System.out.println("Max price: $" + priceStats.getMax());
System.out.println("Min price: $" + priceStats.getMin());

// Temperature conversion
List<Double> celsius = Arrays.asList(0.0, 10.0, 20.0, 30.0);
List<Double> fahrenheit = celsius.stream()
    .mapToDouble(c -> c * 9/5 + 32)
    .boxed()
    .collect(Collectors.toList());
System.out.println("Fahrenheit: " + fahrenheit);
```

---

## Stream Creation

### Stream.of()
**Purpose**: Create stream from specified elements.

```java
// From varargs
Stream<String> fruits = Stream.of("Apple", "Banana", "Cherry");

// Single element
Stream<Integer> single = Stream.of(42);

// From array
String[] array = {"Java", "Python", "C++"};
Stream<String> fromArray = Stream.of(array);

// Multiple types (not recommended)
Stream<Object> mixed = Stream.of(1, "hello", 3.14);
```

---

### Stream.empty()
**Purpose**: Create an empty stream.

```java
// Empty stream
Stream<String> empty = Stream.empty();
long count = empty.count();
System.out.println("Count: " + count); // 0

// Conditional stream creation
Stream<String> stream = condition ? Stream.of("value") : Stream.empty();

// Safe operation on empty stream
List<String> result = Stream.<String>empty()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
System.out.println("Result: " + result); // []

// Empty stream in reduce
int sum = Stream.<Integer>empty()
    .reduce(0, Integer::sum);
System.out.println("Sum: " + sum); // 0
```

---

### Stream.concat()
**Purpose**: Combine two streams sequentially.

```java
// Concatenate two streams
Stream<Integer> first = Stream.of(1, 2, 3);
Stream<Integer> second = Stream.of(4, 5, 6);
Stream<Integer> combined = Stream.concat(first, second);
List<Integer> result = combined.collect(Collectors.toList());
System.out.println("Combined: " + result); // [1, 2, 3, 4, 5, 6]

// Multiple concatenations
Stream<String> s1 = Stream.of("A", "B");
Stream<String> s2 = Stream.of("C", "D");
Stream<String> s3 = Stream.of("E", "F");
Stream<String> all = Stream.concat(Stream.concat(s1, s2), s3);

// Real-world: Merge data from multiple sources
List<String> localData = Arrays.asList("Item1", "Item2");
List<String> remoteData = Arrays.asList("Item3", "Item4");

List<String> allData = Stream.concat(
    localData.stream(),
    remoteData.stream()
).collect(Collectors.toList());
System.out.println("All data: " + allData);

// Concat with empty stream
Stream<Integer> nonEmpty = Stream.of(1, 2, 3);
Stream<Integer> withEmpty = Stream.concat(Stream.empty(), nonEmpty);
```

---

### Stream.generate()
**Purpose**: Create infinite stream using a supplier.

```java
// Generate random numbers
Stream<Double> randoms = Stream.generate(Math::random)
    .limit(5);
randoms.forEach(System.out::println);

// Generate constant value
List<String> defaults = Stream.generate(() -> "default")
    .limit(3)
    .collect(Collectors.toList());
System.out.println("Defaults: " + defaults); // [default, default, default]

// Generate with counter (stateful - use cautiously)
AtomicInteger counter = new AtomicInteger();
List<Integer> generated = Stream.generate(counter::incrementAndGet)
    .limit(5)
    .collect(Collectors.toList());
System.out.println("Generated: " + generated); // [1, 2, 3, 4, 5]

// Generate UUIDs
List<String> uuids = Stream.generate(() -> UUID.randomUUID().toString())
    .limit(3)
    .collect(Collectors.toList());
```

---

### Stream.iterate()
**Purpose**: Create infinite stream by iteratively applying a function.

```java
// Natural numbers
List<Integer> numbers = Stream.iterate(1, n -> n + 1)
    .limit(10)
    .collect(Collectors.toList());
System.out.println("Numbers: " + numbers); // [1, 2, 3, ..., 10]

// Even numbers
List<Integer> evens = Stream.iterate(2, n -> n + 2)
    .limit(5)
    .collect(Collectors.toList());
System.out.println("Evens: " + evens); // [2, 4, 6, 8, 10]

// Powers of 2
List<Integer> powers = Stream.iterate(1, n -> n * 2)
    .limit(8)
    .collect(Collectors.toList());
System.out.println("Powers of 2: " + powers); // [1, 2, 4, 8, 16, 32, 64, 128]

// Fibonacci sequence
List<int[]> fibonacci = Stream.iterate(
    new int[]{0, 1},
    f -> new int[]{f[1], f[0] + f[1]}
)
    .limit(10)
    .collect(Collectors.toList());

// Java 9+: iterate with predicate (hasNext)
List<Integer> limited = Stream.iterate(1, n -> n <= 10, n -> n + 1)
    .collect(Collectors.toList());
System.out.println("Limited iterate: " + limited); // [1, 2, ..., 10]

// Date ranges
LocalDate start = LocalDate.now();
List<LocalDate> dates = Stream.iterate(start, date -> date.plusDays(1))
    .limit(7)
    .collect(Collectors.toList());
System.out.println("Next 7 days generated");
```

---

### Arrays.stream() / Collection.stream()
**Purpose**: Create streams from arrays and collections.

```java
// From array
int[] intArray = {1, 2, 3, 4, 5};
IntStream intStream = Arrays.stream(intArray);
System.out.println("Sum: " + intStream.sum());

// From object array
String[] stringArray = {"Java", "Python", "C++"};
Stream<String> stringStream = Arrays.stream(stringArray);

// From List
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
Stream<Integer> listStream = list.stream();

// From Set
Set<String> set = new HashSet<>(Arrays.asList("A", "B", "C"));
Stream<String> setStream = set.stream();

// From Map
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 30);
map.put("Bob", 25);

// Stream of keys
Stream<String> keyStream = map.keySet().stream();

// Stream of values
Stream<Integer> valueStream = map.values().stream();

// Stream of entries
Stream<Map.Entry<String, Integer>> entryStream = map.entryStream();
entryStream.forEach(e -> System.out.println(e.getKey() + ": " + e.getValue()));

// Parallel stream
Stream<Integer> parallelStream = list.parallelStream();
```

---

## Primitive Streams

### IntStream
**Purpose**: Specialized stream for int primitives (better performance, no boxing).

```java
// Range (exclusive end)
IntStream range = IntStream.range(1, 5);
range.forEach(System.out::println); // 1, 2, 3, 4

// RangeClosed (inclusive end)
IntStream rangeClosed = IntStream.rangeClosed(1, 5);
System.out.println("Sum 1-5: " + rangeClosed.sum()); // 15

// IntStream operations
IntStream numbers = IntStream.of(5, 10, 15, 20, 25);
System.out.println("Sum: " + numbers.sum()); // 75

// Average
OptionalDouble avg = IntStream.rangeClosed(1, 10).average();
avg.ifPresent(a -> System.out.println("Average: " + a)); // 5.5

// Max and Min
OptionalInt max = IntStream.of(10, 45, 75, 30, 90).max();
max.ifPresent(m -> System.out.println("Max: " + m)); // 90

OptionalInt min = IntStream.of(10, 45, 75, 30, 90).min();
min.ifPresent(m -> System.out.println("Min: " + m)); // 10

// Filter and map
int[] evenSquares = IntStream.rangeClosed(1, 10)
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .toArray();
System.out.println("Even squares: " + Arrays.toString(evenSquares));

// Convert to Stream<Integer> (boxing)
Stream<Integer> boxed = IntStream.rangeClosed(1, 5).boxed();

// Statistics
IntSummaryStatistics stats = IntStream.rangeClosed(1, 100)
    .summaryStatistics();
System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());
System.out.println("Average: " + stats.getAverage());
System.out.println("Max: " + stats.getMax());
System.out.println("Min: " + stats.getMin());

// Real-world: Generate sequence of IDs
int[] ids = IntStream.rangeClosed(1000, 1010).toArray();

// Factorial using reduce
int factorial = IntStream.rangeClosed(1, 5)
    .reduce(1, (a, b) -> a * b);
System.out.println("5! = " + factorial); // 120
```

---

### LongStream
**Purpose**: Specialized stream for long primitives.

```java
// Large range
LongStream largeRange = LongStream.rangeClosed(1, 1000000);
long sum = largeRange.sum();
System.out.println("Sum: " + sum);

// Timestamps
long currentTime = System.currentTimeMillis();
LongStream times = LongStream.iterate(currentTime, t -> t + 1000)
    .limit(10);

// Statistics
LongSummaryStatistics stats = LongStream.of(100L, 200L, 300L, 400L, 500L)
    .summaryStatistics();
System.out.println("Average: " + stats.getAverage());

// Convert to Stream<Long>
Stream<Long> boxedLongs = LongStream.rangeClosed(1, 5).boxed();

// Real-world: File sizes
long[] fileSizes = {1024L, 2048L, 4096L, 8192L};
long totalSize = LongStream.of(fileSizes).sum();
System.out.println("Total: " + totalSize + " bytes");
```

---

### DoubleStream
**Purpose**: Specialized stream for double primitives.

```java
// Create DoubleStream
DoubleStream prices = DoubleStream.of(19.99, 29.99, 39.99, 49.99);
double total = prices.sum();
System.out.println("Total: $" + total);

// Average
OptionalDouble avgPrice = DoubleStream.of(19.99, 29.99, 39.99)
    .average();
avgPrice.ifPresent(avg -> System.out.println("Average: $" + avg));

// Max and Min
OptionalDouble max = DoubleStream.of(1.5, 3.7, 2.1, 4.9)
    .max();
max.ifPresent(m -> System.out.println("Max: " + m));

// Filter and map
double[] discounted = DoubleStream.of(100.0, 200.0, 300.0)
    .map(price -> price * 0.9) // 10% discount
    .toArray();
System.out.println("Discounted: " + Arrays.toString(discounted));

// Statistics
DoubleSummaryStatistics stats = DoubleStream.of(1.5, 2.5, 3.5, 4.5)
    .summaryStatistics();
System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());
System.out.println("Average: " + stats.getAverage());
System.out.println("Max: " + stats.getMax());
System.out.println("Min: " + stats.getMin());

// Convert to Stream<Double>
Stream<Double> boxedDoubles = DoubleStream.of(1.1, 2.2, 3.3).boxed();

// Generate random doubles
DoubleStream randoms = DoubleStream.generate(Math::random)
    .limit(5);
randoms.forEach(System.out::println);

// Real-world: Temperature readings
double[] temperatures = {98.6, 99.1, 97.8, 98.9, 100.2};
double avgTemp = DoubleStream.of(temperatures).average().orElse(0.0);
System.out.println("Average temp: " + avgTemp);
```

---

## Advanced Topics

### Parallel Streams
**Purpose**: Process streams concurrently for performance improvements on large datasets.

```java
// Convert to parallel stream
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
int sum = numbers.parallelStream()
    .map(n -> n * n)
    .reduce(0, Integer::sum);
System.out.println("Sum of squares: " + sum);

// Convert sequential to parallel
Stream<Integer> sequential = Stream.of(1, 2, 3, 4, 5);
Stream<Integer> parallel = sequential.parallel();

// Convert parallel to sequential
Stream<Integer> backToSeq = parallel.sequential();

// Check if parallel
boolean isParallel = numbers.parallelStream().isParallel();
System.out.println("Is parallel: " + isParallel); // true

// Performance comparison
List<Integer> largeList = IntStream.rangeClosed(1, 1000000)
    .boxed()
    .collect(Collectors.toList());

// Sequential
long start = System.currentTimeMillis();
long seqSum = largeList.stream()
    .map(n -> n * n)
    .reduce(0L, Long::sum);
long seqTime = System.currentTimeMillis() - start;
System.out.println("Sequential time: " + seqTime + "ms");

// Parallel
start = System.currentTimeMillis();
long parSum = largeList.parallelStream()
    .map(n -> n * n)
    .reduce(0L, Long::sum);
long parTime = System.currentTimeMillis() - start;
System.out.println("Parallel time: " + parTime + "ms");

// When to use parallel streams:
// ✓ Large datasets (10,000+ elements)
// ✓ Computationally expensive operations
// ✓ Independent operations (no shared mutable state)
// ✗ Small datasets (overhead > benefit)
// ✗ Operations with side effects
// ✗ Order-dependent operations

// Parallel with forEach vs forEachOrdered
System.out.println("forEach (unordered):");
Stream.of("A", "B", "C", "D").parallel()
    .forEach(System.out::println); // May print in any order

System.out.println("forEachOrdered (ordered):");
Stream.of("A", "B", "C", "D").parallel()
    .forEachOrdered(System.out::println); // Always: A, B, C, D

// Custom thread pool (advanced)
ForkJoinPool customPool = new ForkJoinPool(4);
try {
    customPool.submit(() -> {
        largeList.parallelStream()
            .map(n -> n * n)
            .reduce(0L, Long::sum);
    }).get();
} catch (Exception e) {
    e.printStackTrace();
}
```

**Important**: Parallel streams use the common ForkJoinPool by default. Be cautious with blocking operations.

---

### Collectors (Advanced)
**Purpose**: Advanced collection operations and custom collectors.

```java
// Grouping by multiple levels
class Employee {
    String name;
    String department;
    String city;
    int salary;
    Employee(String name, String dept, String city, int salary) {
        this.name = name; this.department = dept; 
        this.city = city; this.salary = salary;
    }
}

List<Employee> employees = Arrays.asList(
    new Employee("Alice", "IT", "NYC", 80000),
    new Employee("Bob", "IT", "LA", 75000),
    new Employee("Charlie", "HR", "NYC", 70000),
    new Employee("David", "HR", "LA", 65000),
    new Employee("Eve", "IT", "NYC", 85000)
);

// Multi-level grouping: by department, then by city
Map<String, Map<String, List<Employee>>> grouped = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.groupingBy(e -> e.city)
    ));
System.out.println("Nested grouping: " + grouped.keySet());

// Grouping with counting
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.counting()
    ));
System.out.println("Count by dept: " + countByDept);

// Grouping with sum
Map<String, Integer> salaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.summingInt(e -> e.salary)
    ));
System.out.println("Total salary by dept: " + salaryByDept);

// Grouping with max
Map<String, Optional<Employee>> highestPaidByDept = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.maxBy(Comparator.comparingInt(e -> e.salary))
    ));

// Grouping to Set instead of List
Map<String, Set<String>> citiesByDept = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.mapping(e -> e.city, Collectors.toSet())
    ));
System.out.println("Cities by dept: " + citiesByDept);

// Partitioning with downstream collector
Map<Boolean, Long> salaryPartition = employees.stream()
    .collect(Collectors.partitioningBy(
        e -> e.salary > 75000,
        Collectors.counting()
    ));
System.out.println("High earners: " + salaryPartition.get(true));
System.out.println("Lower earners: " + salaryPartition.get(false));

// CollectingAndThen - transform collection result
String result = employees.stream()
    .collect(Collectors.collectingAndThen(
        Collectors.toList(),
        list -> "Total employees: " + list.size()
    ));
System.out.println(result);

// Teeing (Java 12+) - apply two collectors and merge results
class Stats {
    double average;
    long count;
    Stats(double avg, long cnt) { this.average = avg; this.count = cnt; }
}

Stats stats = employees.stream()
    .collect(Collectors.teeing(
        Collectors.averagingInt(e -> e.salary),
        Collectors.counting(),
        Stats::new
    ));
System.out.println("Avg: " + stats.average + ", Count: " + stats.count);

// Filtering (Java 9+)
Map<String, List<Employee>> highPaidByDept = employees.stream()
    .collect(Collectors.groupingBy(
        e -> e.department,
        Collectors.filtering(e -> e.salary > 75000, Collectors.toList())
    ));

// FlatMapping (Java 9+)
class Department {
    String name;
    List<String> employees;
    Department(String name, List<String> emp) { 
        this.name = name; this.employees = emp; 
    }
}

List<Department> depts = Arrays.asList(
    new Department("IT", Arrays.asList("Alice", "Bob")),
    new Department("HR", Arrays.asList("Charlie", "David"))
);

List<String> allEmployees = depts.stream()
    .collect(Collectors.flatMapping(
        d -> d.employees.stream(),
        Collectors.toList()
    ));

// Custom Collector
Collector<String, ?, String> customCollector = Collector.of(
    StringBuilder::new,                    // supplier
    (sb, s) -> sb.append(s).append(", "),  // accumulator
    StringBuilder::append,                  // combiner
    sb -> sb.toString()                     // finisher
);

String joined = Stream.of("A", "B", "C")
    .collect(customCollector);
System.out.println("Custom joined: " + joined);
```

---

### Optional Integration
**Purpose**: Handle potentially absent values elegantly with streams.

```java
// Finding and unwrapping Optional
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 3)
    .findFirst();

// Traditional way
if (first.isPresent()) {
    System.out.println("Found: " + first.get());
}

// Modern way
first.ifPresent(n -> System.out.println("Found: " + n));

// With default value
Integer value = first.orElse(0);
Integer computed = first.orElseGet(() -> computeDefault());

// Throw exception if absent
try {
    Integer required = first.orElseThrow(() -> 
        new IllegalStateException("Value not found"));
} catch (IllegalStateException e) {
    System.out.println("Error: " + e.getMessage());
}

// Stream from Optional (Java 9+)
List<Integer> result = first.stream()
    .map(n -> n * 2)
    .collect(Collectors.toList());

// Filter Optional
Optional<Integer> filtered = first.filter(n -> n % 2 == 0);

// Map Optional
Optional<String> mapped = first.map(n -> "Number: " + n);

// FlatMap Optional
Optional<Integer> nested = Optional.of(Optional.of(42))
    .flatMap(opt -> opt);

// Combining Optionals
Optional<String> opt1 = Optional.of("Hello");
Optional<String> opt2 = Optional.of("World");

Optional<String> combined = opt1.flatMap(s1 -> 
    opt2.map(s2 -> s1 + " " + s2)
);
System.out.println(combined.orElse(""));

// Real-world: Safe null handling
class User {
    String name;
    Address address;
    User(String name, Address addr) { this.name = name; this.address = addr; }
}

class Address {
    String city;
    Address(String city) { this.city = city; }
}

List<User> users = Arrays.asList(
    new User("Alice", new Address("NYC")),
    new User("Bob", null),
    new User("Charlie", new Address("LA"))
);

List<String> cities = users.stream()
    .map(u -> u.address)
    .filter(Objects::nonNull)
    .map(a -> a.city)
    .collect(Collectors.toList());

// Using Optional
List<String> citiesOptional = users.stream()
    .map(u -> Optional.ofNullable(u.address))
    .flatMap(Optional::stream)
    .map(a -> a.city)
    .collect(Collectors.toList());
```

---

### Stream Reduction Patterns
**Purpose**: Advanced reduction and accumulation techniques.

```java
// Three-argument reduce for parallel processing
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Parallel reduce with combiner
Integer sum = numbers.parallelStream()
    .reduce(
        0,                      // identity
        (a, b) -> a + b,       // accumulator
        (a, b) -> a + b        // combiner (for parallel)
    );

// String concatenation with reduce
String concatenated = Stream.of("Java", "is", "awesome")
    .reduce(
        "",
        (acc, str) -> acc + " " + str,
        (s1, s2) -> s1 + s2
    ).trim();
System.out.println(concatenated);

// Complex object reduction
class Product {
    String name;
    double price;
    int quantity;
    Product(String name, double price, int qty) {
        this.name = name; this.price = price; this.quantity = qty;
    }
}

List<Product> cart = Arrays.asList(
    new Product("Laptop", 999.99, 1),
    new Product("Mouse", 29.99, 2),
    new Product("Keyboard", 79.99, 1)
);

// Calculate total value
double totalValue = cart.stream()
    .reduce(
        0.0,
        (total, p) -> total + (p.price * p.quantity),
        Double::sum
    );
System.out.println("Total cart value: $" + totalValue);

// Reduce to different type (StringBuilder)
String productList = cart.stream()
    .map(p -> p.name)
    .reduce(
        new StringBuilder(),
        (sb, name) -> sb.append(name).append(", "),
        StringBuilder::append
    ).toString();

// Min/Max with reduce
Optional<Integer> max = Stream.of(10, 45, 75, 30, 90)
    .reduce((a, b) -> a > b ? a : b);

Optional<Integer> min = Stream.of(10, 45, 75, 30, 90)
    .reduce((a, b) -> a < b ? a : b);

// Custom aggregation
class OrderStats {
    int totalOrders;
    double totalAmount;
    OrderStats(int orders, double amount) {
        this.totalOrders = orders; this.totalAmount = amount;
    }
}

class Order {
    double amount;
    Order(double amt) { this.amount = amt; }
}

List<Order> orders = Arrays.asList(
    new Order(100.0),
    new Order(200.0),
    new Order(150.0)
);

// Using reduce for custom aggregation (not recommended - use collect instead)
OrderStats stats = orders.stream()
    .reduce(
        new OrderStats(0, 0.0),
        (acc, order) -> new OrderStats(acc.totalOrders + 1, acc.totalAmount + order.amount),
        (s1, s2) -> new OrderStats(s1.totalOrders + s2.totalOrders, s1.totalAmount + s2.totalAmount)
    );
```

---

### Stream Debugging and Performance
**Purpose**: Techniques for debugging and optimizing streams.

```java
// Debug with peek
List<Integer> result = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> System.out.println("Original: " + n))
    .filter(n -> n % 2 == 0)
    .peek(n -> System.out.println("After filter: " + n))
    .map(n -> n * n)
    .peek(n -> System.out.println("After map: " + n))
    .collect(Collectors.toList());

// Measure execution time
long start = System.nanoTime();
long sum = IntStream.rangeClosed(1, 1000000)
    .parallel()
    .sum();
long duration = System.nanoTime() - start;
System.out.println("Time: " + duration / 1_000_000 + "ms");

// Count operations
AtomicInteger counter = new AtomicInteger();
List<Integer> processed = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> counter.incrementAndGet())
    .filter(n -> n % 2 == 0)
    .peek(n -> System.out.println("Processed " + counter.get() + " elements"))
    .collect(Collectors.toList());

// Lazy evaluation demonstration
System.out.println("Creating stream...");
Stream<Integer> stream = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> System.out.println("Peek: " + n))
    .filter(n -> {
        System.out.println("Filter: " + n);
        return n % 2 == 0;
    });
System.out.println("Stream created, not yet executed");
System.out.println("Now collecting...");
List<Integer> collected = stream.collect(Collectors.toList());

// Short-circuiting operations
boolean found = Stream.of(1, 2, 3, 4, 5)
    .peek(n -> System.out.println("Processing: " + n))
    .anyMatch(n -> n == 3);
// Only processes until 3 is found

// Avoiding multiple iterations
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Bad - multiple iterations
long evenCount = numbers.stream().filter(n -> n % 2 == 0).count();
long oddCount = numbers.stream().filter(n -> n % 2 != 0).count();

// Good - single iteration with partitioning
Map<Boolean, Long> partitioned = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0, Collectors.counting()));
long evenCountGood = partitioned.get(true);
long oddCountGood = partitioned.get(false);

// Parallel stream pool size
System.out.println("Available processors: " + 
    Runtime.getRuntime().availableProcessors());
```

---

## Best Practices & Common Pitfalls

### Best Practices

```java
// 1. Use method references when possible
// Bad
list.stream().map(s -> s.toUpperCase())
// Good
list.stream().map(String::toUpperCase)

// 2. Avoid stateful lambda expressions
// Bad
int[] counter = {0};
list.stream().forEach(s -> counter[0]++);
// Good
long count = list.stream().count();

// 3. Use primitive streams for performance
// Bad
List<Integer> numbers = IntStream.range(1, 1000).boxed().collect(Collectors.toList());
int sum = numbers.stream().mapToInt(i -> i).sum();
// Good
int sumGood = IntStream.range(1, 1000).sum();

// 4. Don't reuse streams
// Bad
Stream<String> stream = list.stream();
stream.forEach(System.out::println);
stream.count(); // IllegalStateException
// Good
list.stream().forEach(System.out::println);
long countGood = list.stream().count();

// 5. Use collect() instead of reduce() for mutable containers
// Bad
List<String> result = stream.reduce(
    new ArrayList<>(),
    (list, item) -> { list.add(item); return list; },
    (list1, list2) -> { list1.addAll(list2); return list1; }
);
// Good
List<String> resultGood = stream.collect(Collectors.toList());

// 6. Be cautious with parallel streams
// Bad for small datasets or blocking operations
List<Integer> small = Arrays.asList(1, 2, 3);
small.parallelStream().forEach(System.out::println);
// Good
List<Integer> large = IntStream.range(1, 1000000).boxed().collect(Collectors.toList());
large.parallelStream().map(this::expensiveOperation).collect(Collectors.toList());

// 7. Use Optional correctly
// Bad
Optional<String> opt = Optional.of(value);
if (opt.isPresent()) {
    return opt.get();
} else {
    return "default";
}
// Good
return opt.orElse("default");

// 8. Prefer filter before map
// Less efficient
stream.map(expensiveTransform).filter(condition)
// More efficient
stream.filter(condition).map(expensiveTransform)

// 9. Use appropriate terminal operations
// For side effects
stream.forEach(System.out::println);
// For transformation
List<String> result = stream.collect(Collectors.toList());
// For testing conditions
boolean exists = stream.anyMatch(condition);

// 10. Handle null values explicitly
// Bad
list.stream().map(obj -> obj.getValue()) // NPE if obj is null
// Good
list.stream()
    .filter(Objects::nonNull)
    .map(obj -> obj.getValue())
```

### Common Pitfalls

```java
// 1. PITFALL: Stream already operated upon
Stream<String> stream = list.stream();
stream.filter(s -> s.length() > 3).collect(Collectors.toList());
// stream.count(); // ERROR: IllegalStateException

// 2. PITFALL: Modifying source during stream operation
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
// list.stream().forEach(s -> list.add("X")); // ConcurrentModificationException

// 3. PITFALL: Side effects in parallel streams
List<Integer> results = new ArrayList<>();
// BAD - race condition
IntStream.range(1, 100).parallel()
    .forEach(i -> results.add(i)); // Unsafe!
// GOOD
List<Integer> resultsGood = IntStream.range(1, 100)
    .parallel()
    .boxed()
    .collect(Collectors.toList());

// 4. PITFALL: Returning null from map
List<String> list = Arrays.asList("a", "b", "c");
// list.stream().map(s -> null).collect(Collectors.toList()); // Works but bad
// Better
list.stream()
    .map(s -> Optional.ofNullable(process(s)))
    .flatMap(Optional::stream)
    .collect(Collectors.toList());

// 5. PITFALL: Ignoring Optional results
Optional<String> result = stream.findFirst();
// String value = result.get(); // NoSuchElementException if empty
String value = result.orElse("default");

// 6. PITFALL: Expensive operations in filters
// BAD
list.stream()
    .filter(s -> expensiveCheck(s))
    .filter(s -> anotherExpensiveCheck(s))
// GOOD - combine filters
list.stream()
    .filter(s -> expensiveCheck(s) && anotherExpensiveCheck(s))

// 7. PITFALL: Not handling exceptions in lambdas
// Bad
list.stream().map(s -> Integer.parseInt(s)) // NumberFormatException
// Good
list.stream()
    .map(s -> {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException e) {
            return 0;
        }
    })

// 8. PITFALL: Infinite streams without limit
// Stream.iterate(0, n -> n + 1).forEach(System.out::println); // Never ends!
Stream.iterate(0, n -> n + 1).limit(10).forEach(System.out::println);

// 9. PITFALL: Comparing objects with == instead of equals
list.stream().filter(s -> s == "test") // Wrong
list.stream().filter(s -> s.equals("test")) // Correct

// 10. PITFALL: Not considering order in parallel streams
// Order may vary
list.parallelStream().forEach(System.out::println);
// Order maintained
list.parallelStream().forEachOrdered(System.out::println);
```

---

## Performance Tips

```java
// 1. Use primitive streams to avoid boxing
// Slower
int sum = list.stream().mapToInt(i -> i).sum();
// Faster
int sumFast = IntStream.of(array).sum();

// 2. Parallel streams for large datasets
List<Integer> large = IntStream.range(1, 1_000_000).boxed().collect(Collectors.toList());
// Parallel is faster here
long sum = large.parallelStream().mapToLong(i -> i * i).sum();

// 3. Use findFirst() or findAny() instead of collecting all
// Slower
List<String> all = stream.filter(condition).collect(Collectors.toList());
String first = all.isEmpty() ? null : all.get(0);
// Faster
Optional<String> firstOpt = stream.filter(condition).findFirst();

// 4. Short-circuit operations
// Stops as soon as condition is met
boolean hasEven = stream.anyMatch(n -> n % 2 == 0);

// 5. Avoid intermediate collections
// Slower
List<String> temp = list.stream().filter(condition).collect(Collectors.toList());
List<String> result = temp.stream().map(transform).collect(Collectors.toList());
// Faster
List<String> resultFast = list.stream()
    .filter(condition)
    .map(transform)
    .collect(Collectors.toList());

// 6. Use appropriate collection method
// For sets - no duplicates needed
Set<String> set = stream.collect(Collectors.toSet());
// For lists - maintains order
List<String> list = stream.collect(Collectors.toList());

// 7. Consider data size
// For small datasets (< 10,000), sequential is often faster
// For large datasets with CPU-intensive operations, parallel is better

// 8. Reduce intermediate operations
// Less efficient
stream.map(f1).map(f2).map(f3)
// More efficient
stream.map(x -> f3(f2(f1(x))))
```

---

## Summary

**Terminal Operations**: Execute the pipeline and produce results
- `collect()`, `reduce()`, `forEach()`
- `count()`, `min()`, `max()`
- `findFirst()`, `findAny()`
- `anyMatch()`, `allMatch()`, `noneMatch()`

**Intermediate Operations**: Transform the stream (lazy evaluation)
- `filter()`, `map()`, `flatMap()`
- `sorted()`, `distinct()`, `limit()`, `skip()`
- `peek()`

**Stream Sources**:
- Collections: `list.stream()`
- Arrays: `Arrays.stream(array)`
- Static: `Stream.of()`, `Stream.empty()`
- Generators: `Stream.generate()`, `Stream.iterate()`
- Primitives: `IntStream`, `LongStream`, `DoubleStream`

**Key Concepts**:
- Streams are consumed once
- Operations are lazy until terminal operation
- Parallel streams for large datasets
- Primitive streams avoid boxing overhead
- Use `Optional` for potentially absent values

**Remember**: Choose the right tool for the job. Streams are powerful but not always the best solution. Sometimes a simple loop is clearer and faster!