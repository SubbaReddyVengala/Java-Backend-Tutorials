https://claude.ai/public/artifacts/a56c40ef-b3af-4f51-99e1-a345bbfbf253

# Lambda Expressions and FlatMap in Java

## Lambda Expressions

A lambda expression is simply a function without a name. It can even be used as a parameter in a function. Lambda expressions facilitate functional programming and simplify development greatly.

### Syntax of Lambda Expression

```java
(parameters) -> expression
(parameters) -> { statements; }
```

```
  +------------+    +----+    +-----------------------+
  | Parameters | -> | -> | -> | Body (expression/code) |
  +------------+    +----+    +-----------------------+
```

## Introduction to Functional Interface

Lambda expression provides an implementation of the Java 8 Functional Interface. An interface that has only one abstract method is called a functional interface.

## FlatMap

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

## More Examples

### 1. Split Sentences into Words

```java
List<String> sentences = Arrays.asList(
    "Hello World",
    "Java Streams",
    "FlatMap Example"
);

List<String> words = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .collect(Collectors.toList());

// Result: [Hello, World, Java, Streams, FlatMap, Example]
```

### 2. Process Nested Objects

```java
class Person {
    List<String> hobbies;
    // constructors, getters
}

List<Person> people = Arrays.asList(
    new Person(Arrays.asList("Reading", "Gaming")),
    new Person(Arrays.asList("Cooking", "Dancing")),
    new Person(Arrays.asList("Singing"))
);

List<String> allHobbies = people.stream()
    .flatMap(person -> person.getHobbies().stream())
    .collect(Collectors.toList());

// Result: [Reading, Gaming, Cooking, Dancing, Singing]
```

### 3. Filter and Flatten

```java
List<String> result = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .filter(word -> word.length() > 4)
    .collect(Collectors.toList());

// Result: [Hello, World, Streams, FlatMap, Example]
```

## Simple Analogy

- **Map**: Like putting each box inside another box
- **FlatMap**: Like opening all boxes and putting everything on one table

## When to Use FlatMap

- Working with nested collections
- Converting 2D structures to 1D
- Processing collections inside objects
- Splitting strings and processing words

> **Remember:** FlatMap takes nested structures and makes them flat!

## Lambda vs Method Reference

### Using Lambda Expression

```java
nestedList.stream()
    .flatMap(list -> list.stream())  // Explicit lambda
```

### Using Method Reference

```java
nestedList.stream()
    .flatMap(List::stream)  // Method reference - cleaner!
```

## Step-by-Step Breakdown

```java
List<List<String>> nestedList = Arrays.asList(
    Arrays.asList("Apple", "Banana"),
    Arrays.asList("Orange", "Mango"),
    Arrays.asList("Grape", "Kiwi")
);
```

### What happens:

1. `nestedList.stream()` → Creates stream of 3 List objects
2. `List::stream` → Converts each List to its own Stream
3. `flatMap()` → Flattens all individual streams into one stream

### Visual Process:

```
Step 1: Stream<List<String>>
  ↓
[List1, List2, List3]

Step 2: List::stream applied to each
  ↓
[Stream1, Stream2, Stream3]

Step 3: flatMap flattens
  ↓
Stream<String>: [Apple, Banana, Orange, Mango, Grape, Kiwi]
```

## Complete Working Example

```java
List<List<String>> nestedList = Arrays.asList(
    Arrays.asList("Apple", "Banana"),
    Arrays.asList("Orange", "Mango"),
    Arrays.asList("Grape", "Kiwi")
);

List<String> result = nestedList.stream()
    .flatMap(List::stream)  // Method reference magic!
    .collect(Collectors.toList());

System.out.println(result);
// Output: [Apple, Banana, Orange, Mango, Grape, Kiwi]
```

## Why Method Reference is Better

- **Shorter**: `List::stream` vs `list -> list.stream()`
- **Cleaner**: Less noise, more readable
- **Standard**: Common pattern in Stream API

## Other Method Reference Examples with FlatMap

```java
// Split strings into characters
words.stream()
    .flatMap(String::chars)  // Instead of: word -> word.chars()

// Get stream of array elements
arrays.stream()
    .flatMap(Arrays::stream)  // Instead of: array -> Arrays.stream(array)
```