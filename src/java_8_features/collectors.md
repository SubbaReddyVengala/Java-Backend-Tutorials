https://claude.ai/public/artifacts/fb0ed257-9a20-4082-a9c2-9ae902d91c10
# Java 8 Collectors Tutorial with Examples

The `Collectors` class in Java 8 is part of the `java.util.stream` package and provides various utility methods to collect the results of stream operations. It's primarily used with the `Stream.collect()` method to convert a stream into a different form, such as a `List`, `Set`, `Map`, or even a concatenated `String`. `Collectors` simplify tasks like grouping, partitioning, and reducing data from streams.

In this tutorial, we will explore several commonly used `Collectors` methods with examples.

## Table of Contents
1. [Setup and Sample Data](#setup-and-sample-data)
2. [Basic Collectors](#basic-collectors)
3. [Grouping Collectors](#grouping-collectors)
4. [Partitioning Collectors](#partitioning-collectors)
5. [Reduction Collectors](#reduction-collectors)
6. [Statistical Collectors](#statistical-collectors)
7. [Advanced Collectors](#advanced-collectors)
8. [Custom Collectors](#custom-collectors)

## Setup and Sample Data

First, let's create some sample data to work with throughout our examples:

```java
import java.util.*;
import java.util.stream.*;
import static java.util.stream.Collectors.*;

// Employee class for examples
class Employee {
    private String name;
    private String department;
    private double salary;
    private int age;
    
    public Employee(String name, String department, double salary, int age) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.age = age;
    }
    
    // Getters
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    public int getAge() { return age; }
    
    @Override
    public String toString() {
        return String.format("%s (%s, $%.0f, %d years)", 
                           name, department, salary, age);
    }
}

// Sample data
List<Employee> employees = Arrays.asList(
    new Employee("Alice", "Engineering", 85000, 28),
    new Employee("Bob", "Marketing", 65000, 32),
    new Employee("Charlie", "Engineering", 90000, 35),
    new Employee("Diana", "HR", 55000, 29),
    new Employee("Eve", "Marketing", 70000, 26),
    new Employee("Frank", "Engineering", 95000, 31),
    new Employee("Grace", "HR", 60000, 27)
);
```

## Basic Collectors

### 1. `toList()`
Collects stream elements into a `List`.

```java
// Get all employee names
List<String> names = employees.stream()
    .map(Employee::getName)
    .collect(toList());
System.out.println("Employee names: " + names);
// Output: [Alice, Bob, Charlie, Diana, Eve, Frank, Grace]
```

### 2. `toSet()`
Collects stream elements into a `Set`, removing duplicates.

```java
// Get unique departments
Set<String> departments = employees.stream()
    .map(Employee::getDepartment)
    .collect(toSet());
System.out.println("Departments: " + departments);
// Output: [Engineering, Marketing, HR]
```

### 3. `toMap()`
Collects stream elements into a `Map`.

```java
// Create a map of employee name to salary
Map<String, Double> nameSalaryMap = employees.stream()
    .collect(toMap(Employee::getName, Employee::getSalary));
System.out.println("Name to Salary mapping: " + nameSalaryMap);

// Handle duplicate keys with a merge function
Map<String, Double> deptMaxSalary = employees.stream()
    .collect(toMap(
        Employee::getDepartment, 
        Employee::getSalary,
        Double::max  // merge function for duplicate keys
    ));
System.out.println("Department max salaries: " + deptMaxSalary);
```

### 4. `toCollection()`
Collects to a specific collection type.

```java
// Collect to LinkedList
LinkedList<String> linkedNames = employees.stream()
    .map(Employee::getName)
    .collect(toCollection(LinkedList::new));

// Collect to TreeSet (sorted set)
TreeSet<String> sortedDepartments = employees.stream()
    .map(Employee::getDepartment)
    .collect(toCollection(TreeSet::new));
```

## Grouping Collectors

### 1. `groupingBy()`
Groups elements by a classifier function.

```java
// Group employees by department
Map<String, List<Employee>> employeesByDept = employees.stream()
    .collect(groupingBy(Employee::getDepartment));

employeesByDept.forEach((dept, empList) -> {
    System.out.println(dept + ": " + empList.size() + " employees");
    empList.forEach(emp -> System.out.println("  " + emp));
});
```

### 2. Multi-level Grouping
```java
// Group by department, then by age range
Map<String, Map<String, List<Employee>>> complexGrouping = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        groupingBy(emp -> emp.getAge() < 30 ? "Young" : "Experienced")
    ));

System.out.println("Complex grouping: " + complexGrouping);
```

### 3. Grouping with Downstream Collectors
```java
// Group by department and count employees
Map<String, Long> deptCounts = employees.stream()
    .collect(groupingBy(Employee::getDepartment, counting()));
System.out.println("Employee count by department: " + deptCounts);

// Group by department and calculate average salary
Map<String, Double> avgSalaryByDept = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment, 
        averagingDouble(Employee::getSalary)
    ));
System.out.println("Average salary by department: " + avgSalaryByDept);

// Group by department and collect only names
Map<String, List<String>> namesByDept = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        mapping(Employee::getName, toList())
    ));
System.out.println("Names by department: " + namesByDept);
```

## Partitioning Collectors

### `partitioningBy()`
Partitions elements into two groups based on a predicate.

```java
// Partition employees by high salary (>= 70000)
Map<Boolean, List<Employee>> salaryPartition = employees.stream()
    .collect(partitioningBy(emp -> emp.getSalary() >= 70000));

System.out.println("High salary employees: " + salaryPartition.get(true).size());
System.out.println("Regular salary employees: " + salaryPartition.get(false).size());

// Partition with downstream collector
Map<Boolean, Long> salaryPartitionCounts = employees.stream()
    .collect(partitioningBy(
        emp -> emp.getSalary() >= 70000, 
        counting()
    ));
System.out.println("Salary partition counts: " + salaryPartitionCounts);
```

## Reduction Collectors

### 1. `joining()`
Concatenates string representations of elements.

```java
// Simple joining
String allNames = employees.stream()
    .map(Employee::getName)
    .collect(joining());
System.out.println("All names: " + allNames);

// Joining with delimiter
String namesWithComma = employees.stream()
    .map(Employee::getName)
    .collect(joining(", "));
System.out.println("Names with comma: " + namesWithComma);

// Joining with delimiter, prefix, and suffix
String formattedNames = employees.stream()
    .map(Employee::getName)
    .collect(joining(", ", "Employees: [", "]"));
System.out.println(formattedNames);
```

### 2. `reducing()`
Performs a reduction operation.

```java
// Sum all salaries using reducing
Optional<Double> totalSalary = employees.stream()
    .map(Employee::getSalary)
    .collect(reducing(Double::sum));
System.out.println("Total salary: $" + totalSalary.orElse(0.0));

// Find max salary using reducing
Optional<Double> maxSalary = employees.stream()
    .map(Employee::getSalary)
    .collect(reducing(Double::max));
System.out.println("Max salary: $" + maxSalary.orElse(0.0));

// Custom reduction with identity and combiner
Double totalSalaryWithIdentity = employees.stream()
    .collect(reducing(0.0, Employee::getSalary, Double::sum));
System.out.println("Total salary (with identity): $" + totalSalaryWithIdentity);
```

## Statistical Collectors

These collectors are useful for mathematical operations:

```java
// Sum of salaries
Double salarySum = employees.stream()
    .collect(summingDouble(Employee::getSalary));
System.out.println("Total salaries: $" + salarySum);

// Average salary
Double avgSalary = employees.stream()
    .collect(averagingDouble(Employee::getSalary));
System.out.println("Average salary: $" + avgSalary);

// Count of employees
Long employeeCount = employees.stream()
    .collect(counting());
System.out.println("Employee count: " + employeeCount);

// Summary statistics
DoubleSummaryStatistics salaryStats = employees.stream()
    .collect(summarizingDouble(Employee::getSalary));
System.out.println("Salary statistics: " + salaryStats);
System.out.println("Min: $" + salaryStats.getMin());
System.out.println("Max: $" + salaryStats.getMax());
System.out.println("Average: $" + salaryStats.getAverage());

// Integer statistics for ages
IntSummaryStatistics ageStats = employees.stream()
    .collect(summarizingInt(Employee::getAge));
System.out.println("Age statistics: " + ageStats);
```

## Advanced Collectors

### 1. `collectingAndThen()`
Applies a finishing transformation to the result of another collector.

```java
// Collect to list and make it unmodifiable
List<String> immutableNames = employees.stream()
    .map(Employee::getName)
    .collect(collectingAndThen(toList(), Collections::unmodifiableList));

// Get the highest paid employee in each department
Map<String, String> highestPaidByDept = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        collectingAndThen(
            maxBy(Comparator.comparing(Employee::getSalary)),
            opt -> opt.map(Employee::getName).orElse("None")
        )
    ));
System.out.println("Highest paid by department: " + highestPaidByDept);
```

### 2. `mapping()`
Adapts a collector to work on a different type by applying a mapping function first.

```java
// Group departments by their employee names
Map<String, Set<String>> deptToNames = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        mapping(Employee::getName, toSet())
    ));
System.out.println("Department to names: " + deptToNames);
```

### 3. `flatMapping()` (Java 9+)
Similar to mapping but flattens the result.

```java
// This would be available in Java 9+
// Example: If employees had a list of skills, you could flatten them
/*
Map<String, Set<String>> deptToSkills = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        flatMapping(emp -> emp.getSkills().stream(), toSet())
    ));
*/
```

### 4. `maxBy()` and `minBy()`
Find maximum or minimum elements.

```java
// Find employee with highest salary
Optional<Employee> highestPaid = employees.stream()
    .collect(maxBy(Comparator.comparing(Employee::getSalary)));
highestPaid.ifPresent(emp -> 
    System.out.println("Highest paid: " + emp));

// Find youngest employee in each department
Map<String, Optional<Employee>> youngestByDept = employees.stream()
    .collect(groupingBy(
        Employee::getDepartment,
        minBy(Comparator.comparing(Employee::getAge))
    ));
System.out.println("Youngest by department: " + youngestByDept);
```

## Custom Collectors

You can create custom collectors using `Collector.of()`:

```java
// Custom collector to create a comma-separated string with count
Collector<Employee, ?, String> nameWithCount = Collector.of(
    // Supplier: creates the mutable container
    () -> new StringJoiner(", "),
    
    // Accumulator: adds element to container
    (joiner, emp) -> joiner.add(emp.getName()),
    
    // Combiner: combines two containers (for parallel processing)
    StringJoiner::merge,
    
    // Finisher: transforms final container to result
    joiner -> "Employees (" + joiner.toString().split(", ").length + "): " + joiner.toString()
);

String result = employees.stream()
    .collect(nameWithCount);
System.out.println(result);

// Custom collector to calculate salary variance
Collector<Employee, ?, Double> salaryVariance = Collector.of(
    () -> new ArrayList<Double>(),
    (list, emp) -> list.add(emp.getSalary()),
    (list1, list2) -> { list1.addAll(list2); return list1; },
    list -> {
        double mean = list.stream().mapToDouble(Double::doubleValue).average().orElse(0.0);
        return list.stream()
                   .mapToDouble(salary -> Math.pow(salary - mean, 2))
                   .average()
                   .orElse(0.0);
    }
);

Double variance = employees.stream().collect(salaryVariance);
System.out.println("Salary variance: " + variance);
```

## Best Practices and Tips

1. **Use method references** when possible for cleaner code
2. **Combine collectors** using `groupingBy()` with downstream collectors for complex operations
3. **Consider parallel streams** for large datasets, but test performance
4. **Use `collectingAndThen()`** when you need to transform the final result
5. **Prefer immutable results** when possible using `collectingAndThen()`
6. **Handle empty streams** appropriately, especially with `Optional` returning collectors

## Performance Considerations

- `toList()` is generally faster than `toCollection(ArrayList::new)`
- `groupingBy()` with `counting()` is more efficient than collecting to lists and measuring size
- Parallel streams can improve performance for CPU-intensive operations on large datasets
- Be cautious with nested collectors in parallel streams as they may not parallelize well

## Conclusion

The `Collectors` class provides a rich set of utilities for transforming streams into various collection types and performing complex aggregations. By mastering these collectors, you can write more expressive and efficient code when working with streams in Java 8+.

The key is to understand which collector fits your use case and how to combine them effectively for complex data processing scenarios.