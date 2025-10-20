https://claude.ai/public/artifacts/f52bd8ce-dd00-4317-b2cd-ee5cf13be3ac

# Java 8 Collectors - 10 Essential Examples

The `Collectors` class in Java 8 is part of the `java.util.stream` package and provides various utility methods to collect the results of stream operations. It's primarily used with the `Stream.collect()` method to convert a stream into a different form, such as a `List`, `Set`, `Map`, or even a concatenated `String`. `Collectors` simplify tasks like grouping, partitioning, and reducing data from streams.

In this tutorial, we will explore 10 commonly used `Collectors` methods with practical examples.

## Setup and Sample Data

```java
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

// Sample data for our examples
List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David", "Alice", "Eve");
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
List<Double> prices = Arrays.asList(19.99, 25.50, 12.75, 33.00, 8.25);

// Person class for more complex examples
class Person {
    private String name;
    private int age;
    private String department;
    private double salary;
    
    public Person(String name, int age, String department, double salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    
    @Override
    public String toString() {
        return name + " (" + department + ", $" + salary + ")";
    }
}

List<Person> people = Arrays.asList(
    new Person("Alice", 30, "Engineering", 85000),
    new Person("Bob", 25, "Marketing", 65000),
    new Person("Charlie", 35, "Engineering", 90000),
    new Person("David", 28, "HR", 55000),
    new Person("Eve", 32, "Marketing", 70000)
);
```

## Example 1: Collect to a List

The `toList()` collector is the most commonly used collector. It collects all stream elements into a `List`.

```java
// Convert stream of names to uppercase and collect to List
List<String> upperCaseNames = names.stream()
    .map(String::toUpperCase)
    .collect(toList());
System.out.println("Uppercase names: " + upperCaseNames);
// Output: [ALICE, BOB, CHARLIE, DAVID, ALICE, EVE]

// Collect even numbers to a List
List<Integer> evenNumbers = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(toList());
System.out.println("Even numbers: " + evenNumbers);
// Output: [2, 4, 6, 8, 10]

// Collect person names to a List
List<String> personNames = people.stream()
    .map(Person::getName)
    .collect(toList());
System.out.println("Person names: " + personNames);
// Output: [Alice, Bob, Charlie, David, Eve]
```

## Example 2: Collect to a Set

The `toSet()` collector removes duplicates and collects elements into a `Set`.

```java
// Collect unique names to a Set (removes duplicate "Alice")
Set<String> uniqueNames = names.stream()
    .collect(toSet());
System.out.println("Unique names: " + uniqueNames);
// Output: [Alice, Bob, Charlie, David, Eve]

// Collect unique departments to a Set
Set<String> departments = people.stream()
    .map(Person::getDepartment)
    .collect(toSet());
System.out.println("Departments: " + departments);
// Output: [Engineering, Marketing, HR]

// Collect numbers divisible by 3 to a Set
Set<Integer> divisibleByThree = numbers.stream()
    .filter(n -> n % 3 == 0)
    .collect(toSet());
System.out.println("Divisible by 3: " + divisibleByThree);
// Output: [3, 6, 9]
```

## Example 3: Collect to a Map

The `toMap()` collector creates a `Map` from stream elements using key and value mappers.

```java
// Create a map of person name to age
Map<String, Integer> nameToAge = people.stream()
    .collect(toMap(Person::getName, Person::getAge));
System.out.println("Name to Age: " + nameToAge);
// Output: {Alice=30, Bob=25, Charlie=35, David=28, Eve=32}

// Create a map of person name to salary
Map<String, Double> nameToSalary = people.stream()
    .collect(toMap(Person::getName, Person::getSalary));
System.out.println("Name to Salary: " + nameToSalary);
// Output: {Alice=85000.0, Bob=65000.0, Charlie=90000.0, David=55000.0, Eve=70000.0}

// Create a map with number as key and its square as value
Map<Integer, Integer> numberToSquare = numbers.stream()
    .limit(5)  // Take first 5 numbers
    .collect(toMap(n -> n, n -> n * n));
System.out.println("Number to Square: " + numberToSquare);
// Output: {1=1, 2=4, 3=9, 4=16, 5=25}
```

## Example 4: Joining Elements into a String

The `joining()` collector concatenates string representations of elements.

```java
// Simple joining without delimiter
String allNames = names.stream()
    .collect(joining());
System.out.println("All names joined: " + allNames);
// Output: AliceBobCharlieDavidAliceEve

// Joining with comma delimiter
String namesWithComma = names.stream()
    .collect(joining(", "));
System.out.println("Names with comma: " + namesWithComma);
// Output: Alice, Bob, Charlie, David, Alice, Eve

// Joining with delimiter, prefix, and suffix
String formattedNames = names.stream()
    .collect(joining(", ", "Names: [", "]"));
System.out.println("Formatted names: " + formattedNames);
// Output: Names: [Alice, Bob, Charlie, David, Alice, Eve]

// Join department names
String departmentList = people.stream()
    .map(Person::getDepartment)
    .distinct()
    .collect(joining(" | ", "Departments: ", ""));
System.out.println(departmentList);
// Output: Departments: Engineering | Marketing | HR
```

## Example 5: Summing Elements

Various collectors for summing numeric values.

```java
// Sum all numbers using summingInt
Integer totalSum = numbers.stream()
    .collect(summingInt(Integer::intValue));
System.out.println("Sum of numbers: " + totalSum);
// Output: 55

// Sum all salaries using summingDouble
Double totalSalaries = people.stream()
    .collect(summingDouble(Person::getSalary));
System.out.println("Total salaries: $" + totalSalaries);
// Output: Total salaries: $365000.0

// Sum all ages using summingInt
Integer totalAges = people.stream()
    .collect(summingInt(Person::getAge));
System.out.println("Total ages: " + totalAges);
// Output: Total ages: 150

// Sum prices using summingDouble
Double totalPrices = prices.stream()
    .collect(summingDouble(Double::doubleValue));
System.out.println("Total prices: $" + totalPrices);
// Output: Total prices: $99.49
```

## Example 6: Averaging Values

Collectors for calculating average values.

```java
// Average of numbers using averagingInt
Double averageNumber = numbers.stream()
    .collect(averagingInt(Integer::intValue));
System.out.println("Average number: " + averageNumber);
// Output: Average number: 5.5

// Average salary using averagingDouble
Double averageSalary = people.stream()
    .collect(averagingDouble(Person::getSalary));
System.out.println("Average salary: $" + averageSalary);
// Output: Average salary: $73000.0

// Average age using averagingInt
Double averageAge = people.stream()
    .collect(averagingInt(Person::getAge));
System.out.println("Average age: " + averageAge);
// Output: Average age: 30.0

// Average price using averagingDouble
Double averagePrice = prices.stream()
    .collect(averagingDouble(Double::doubleValue));
System.out.println("Average price: $" + averagePrice);
// Output: Average price: $19.898
```

## Example 7: Grouping Elements by a Key

The `groupingBy()` collector groups elements based on a classifier function.

```java
// Group people by department
Map<String, List<Person>> peopleByDepartment = people.stream()
    .collect(groupingBy(Person::getDepartment));
System.out.println("People by department:");
peopleByDepartment.forEach((dept, personList) -> {
    System.out.println(dept + ": " + personList);
});
// Output:
// Engineering: [Alice (Engineering, $85000.0), Charlie (Engineering, $90000.0)]
// Marketing: [Bob (Marketing, $65000.0), Eve (Marketing, $70000.0)]
// HR: [David (HR, $55000.0)]

// Group numbers by even/odd
Map<String, List<Integer>> numbersByType = numbers.stream()
    .collect(groupingBy(n -> n % 2 == 0 ? "Even" : "Odd"));
System.out.println("Numbers by type: " + numbersByType);
// Output: {Even=[2, 4, 6, 8, 10], Odd=[1, 3, 5, 7, 9]}

// Group people by age range
Map<String, List<Person>> peopleByAgeRange = people.stream()
    .collect(groupingBy(person -> {
        if (person.getAge() < 30) return "Young";
        else if (person.getAge() < 35) return "Middle";
        else return "Senior";
    }));
System.out.println("People by age range: " + peopleByAgeRange);
```

## Example 8: Partitioning Elements by a Predicate

The `partitioningBy()` collector divides elements into two groups based on a predicate.

```java
// Partition people by high salary (>= 70000)
Map<Boolean, List<Person>> salaryPartition = people.stream()
    .collect(partitioningBy(person -> person.getSalary() >= 70000));
System.out.println("High salary employees: " + salaryPartition.get(true));
System.out.println("Regular salary employees: " + salaryPartition.get(false));
// Output:
// High salary employees: [Alice (Engineering, $85000.0), Charlie (Engineering, $90000.0), Eve (Marketing, $70000.0)]
// Regular salary employees: [Bob (Marketing, $65000.0), David (HR, $55000.0)]

// Partition numbers by greater than 5
Map<Boolean, List<Integer>> numberPartition = numbers.stream()
    .collect(partitioningBy(n -> n > 5));
System.out.println("Numbers > 5: " + numberPartition.get(true));
System.out.println("Numbers <= 5: " + numberPartition.get(false));
// Output:
// Numbers > 5: [6, 7, 8, 9, 10]
// Numbers <= 5: [1, 2, 3, 4, 5]

// Partition people by age >= 30
Map<Boolean, List<Person>> agePartition = people.stream()
    .collect(partitioningBy(person -> person.getAge() >= 30));
System.out.println("Age >= 30: " + agePartition.get(true));
System.out.println("Age < 30: " + agePartition.get(false));
```

## Example 9: Counting Elements

The `counting()` collector counts the number of elements.

```java
// Count total number of people
Long totalPeople = people.stream()
    .collect(counting());
System.out.println("Total people: " + totalPeople);
// Output: Total people: 5

// Count people in each department
Map<String, Long> countByDepartment = people.stream()
    .collect(groupingBy(Person::getDepartment, counting()));
System.out.println("Count by department: " + countByDepartment);
// Output: Count by department: {Engineering=2, Marketing=2, HR=1}

// Count even and odd numbers
Map<Boolean, Long> evenOddCount = numbers.stream()
    .collect(partitioningBy(n -> n % 2 == 0, counting()));
System.out.println("Even count: " + evenOddCount.get(true));
System.out.println("Odd count: " + evenOddCount.get(false));
// Output:
// Even count: 5
// Odd count: 5

// Count unique names
Long uniqueNameCount = names.stream()
    .distinct()
    .collect(counting());
System.out.println("Unique names count: " + uniqueNameCount);
// Output: Unique names count: 5
```

## Example 10: Collecting and Reducing Elements

The `reducing()` collector performs reduction operations on elements.

```java
// Find the sum of all numbers using reducing
Optional<Integer> sum = numbers.stream()
    .collect(reducing(Integer::sum));
System.out.println("Sum using reducing: " + sum.orElse(0));
// Output: Sum using reducing: 55

// Find the maximum salary using reducing
Optional<Double> maxSalary = people.stream()
    .map(Person::getSalary)
    .collect(reducing(Double::max));
System.out.println("Max salary: $" + maxSalary.orElse(0.0));
// Output: Max salary: $90000.0

// Concatenate all names using reducing
Optional<String> concatenatedNames = names.stream()
    .collect(reducing((name1, name2) -> name1 + ", " + name2));
System.out.println("Concatenated names: " + concatenatedNames.orElse(""));
// Output: Concatenated names: Alice, Bob, Charlie, David, Alice, Eve

// Find minimum age with identity value
Integer minAge = people.stream()
    .collect(reducing(Integer.MAX_VALUE, Person::getAge, Integer::min));
System.out.println("Minimum age: " + minAge);
// Output: Minimum age: 25

// Calculate total salary using reducing with identity
Double totalSalaryReduced = people.stream()
    .collect(reducing(0.0, Person::getSalary, Double::sum));
System.out.println("Total salary (reduced): $" + totalSalaryReduced);
// Output: Total salary (reduced): $365000.0
```

## Summary

These 10 examples demonstrate the most commonly used `Collectors` methods in Java 8:

1. **`toList()`** - Collects elements into a List
2. **`toSet()`** - Collects unique elements into a Set
3. **`toMap()`** - Creates key-value mappings
4. **`joining()`** - Concatenates elements into a String
5. **`summingInt/Double()`** - Sums numeric values
6. **`averagingInt/Double()`** - Calculates averages
7. **`groupingBy()`** - Groups elements by a classifier
8. **`partitioningBy()`** - Splits elements into two groups
9. **`counting()`** - Counts elements
10. **`reducing()`** - Performs custom reduction operations

These collectors form the foundation of stream processing in Java and can be combined in various ways to perform complex data transformations and aggregations efficiently.