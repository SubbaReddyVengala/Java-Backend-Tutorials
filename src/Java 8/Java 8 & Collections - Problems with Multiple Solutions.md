# Java 8 & Collections - Problems with Multiple Solutions
### **Core Collections (45+ problems)**

-   List, Set, Map operations
-   Custom implementations (HashMap, LRU Cache, LFU Cache)
-   Stack/Queue problems
-   PriorityQueue applications
-   Trie data structure

### **Java 8 Features (30+ problems)**

-   Stream operations (filter, map, reduce, flatMap)
-   Collectors (grouping, partitioning, joining)
-   Optional class usage
-   Lambda expressions & method references
-   Functional interfaces
-   Parallel streams
-   Date-Time API

### **Advanced Problems (15+ problems)**

-   Concurrent collections (ConcurrentHashMap, BlockingQueue)
-   Design problems (Twitter, Hit Counter, Logger, RandomizedSet)
-   Graph/Tree problems (Clone, Serialize)
-   Sliding window patterns
-   Two-pointer techniques

## Problem 1: Find Duplicate Elements in a List

### Solution 1: Using HashSet

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 5, 1, 6);
Set<Integer> seen = new HashSet<>();
Set<Integer> duplicates = new HashSet<>();

for (Integer num : numbers) {
    if (!seen.add(num)) {
        duplicates.add(num);
    }
}
System.out.println(duplicates); // [1, 2]
```

### Solution 2: Using Streams and Collections.frequency()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 5, 1, 6);
Set<Integer> duplicates = numbers.stream()
    .filter(n -> Collections.frequency(numbers, n) > 1)
    .collect(Collectors.toSet());
System.out.println(duplicates); // [1, 2]
```

### Solution 3: Using Streams with groupingBy()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 2, 4, 5, 1, 6);
Set<Integer> duplicates = numbers.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
    .entrySet().stream()
    .filter(e -> e.getValue() > 1)
    .map(Map.Entry::getKey)
    .collect(Collectors.toSet());
System.out.println(duplicates); // [1, 2]
```

----------

## Problem 2: Remove Duplicates from ArrayList

### Solution 1: Using HashSet (Order not preserved)

java

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "A", "D", "B"));
Set<String> set = new HashSet<>(list);
list = new ArrayList<>(set);
System.out.println(list); // [A, B, C, D] - order may vary
```

### Solution 2: Using LinkedHashSet (Order preserved)

java

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "A", "D", "B"));
Set<String> set = new LinkedHashSet<>(list);
list = new ArrayList<>(set);
System.out.println(list); // [A, B, C, D] - insertion order preserved
```

### Solution 3: Using Streams distinct()

java

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C", "A", "D", "B"));
List<String> unique = list.stream()
    .distinct()
    .collect(Collectors.toList());
System.out.println(unique); // [A, B, C, D]
```

----------

## Problem 3: Group Employees by Department

### Employee Class

java

```java
class Employee {
    private String name;
    private String department;
    private double salary;
    
    public Employee(String name, String department, double salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    
    // Getters
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
}
```

### Solution 1: Using Traditional Loop with HashMap

java

```java
List<Employee> employees = Arrays.asList(
    new Employee("John", "IT", 60000),
    new Employee("Jane", "HR", 55000),
    new Employee("Bob", "IT", 65000),
    new Employee("Alice", "HR", 58000)
);

Map<String, List<Employee>> byDept = new HashMap<>();
for (Employee emp : employees) {
    byDept.computeIfAbsent(emp.getDepartment(), k -> new ArrayList<>()).add(emp);
}
```

### Solution 2: Using Streams groupingBy()

java

```java
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));
```

### Solution 3: Group by Department and Get Names Only

java

```java
Map<String, List<String>> deptNames = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.mapping(Employee::getName, Collectors.toList())
    ));
```

### Solution 4: Group and Count Employees per Department

java

```java
Map<String, Long> deptCount = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));
```

----------

## Problem 4: Find Second Highest Salary

### Solution 1: Using TreeSet

java

```java
List<Integer> salaries = Arrays.asList(50000, 75000, 60000, 80000, 75000);
TreeSet<Integer> uniqueSalaries = new TreeSet<>(salaries);
Integer secondHighest = uniqueSalaries.lower(uniqueSalaries.last());
System.out.println(secondHighest); // 75000
```

### Solution 2: Using Streams with distinct() and sorted()

java

```java
List<Integer> salaries = Arrays.asList(50000, 75000, 60000, 80000, 75000);
Integer secondHighest = salaries.stream()
    .distinct()
    .sorted(Comparator.reverseOrder())
    .skip(1)
    .findFirst()
    .orElse(null);
System.out.println(secondHighest); // 75000
```

### Solution 3: Using Employee Objects

java

```java
Double secondHighest = employees.stream()
    .map(Employee::getSalary)
    .distinct()
    .sorted(Comparator.reverseOrder())
    .skip(1)
    .findFirst()
    .orElse(0.0);
```

----------

## Problem 5: Sort Map by Values

### Solution 1: Using Streams and LinkedHashMap

java

```java
Map<String, Integer> map = new HashMap<>();
map.put("John", 25);
map.put("Alice", 30);
map.put("Bob", 20);

Map<String, Integer> sorted = map.entrySet().stream()
    .sorted(Map.Entry.comparingByValue())
    .collect(Collectors.toMap(
        Map.Entry::getKey,
        Map.Entry::getValue,
        (e1, e2) -> e1,
        LinkedHashMap::new
    ));
System.out.println(sorted); // {Bob=20, John=25, Alice=30}
```

### Solution 2: Sort in Reverse Order

java

```java
Map<String, Integer> sortedDesc = map.entrySet().stream()
    .sorted(Map.Entry.<String, Integer>comparingByValue().reversed())
    .collect(Collectors.toMap(
        Map.Entry::getKey,
        Map.Entry::getValue,
        (e1, e2) -> e1,
        LinkedHashMap::new
    ));
```

### Solution 3: Using TreeMap with Custom Comparator

java

```java
Map<String, Integer> map = new HashMap<>();
map.put("John", 25);
map.put("Alice", 30);
map.put("Bob", 20);

Map<String, Integer> sorted = new TreeMap<>((k1, k2) -> {
    int comp = map.get(k1).compareTo(map.get(k2));
    return comp != 0 ? comp : k1.compareTo(k2);
});
sorted.putAll(map);
```

----------

## Problem 6: Count Character Frequency in String

### Solution 1: Using HashMap

java

```java
String str = "programming";
Map<Character, Integer> frequency = new HashMap<>();

for (char c : str.toCharArray()) {
    frequency.put(c, frequency.getOrDefault(c, 0) + 1);
}
System.out.println(frequency);
```

### Solution 2: Using Streams groupingBy()

java

```java
String str = "programming";
Map<Character, Long> frequency = str.chars()
    .mapToObj(c -> (char) c)
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
System.out.println(frequency);
```

### Solution 3: Using compute()

java

```java
String str = "programming";
Map<Character, Integer> frequency = new HashMap<>();

for (char c : str.toCharArray()) {
    frequency.compute(c, (key, val) -> val == null ? 1 : val + 1);
}
```

### Solution 4: Using merge()

java

```java
String str = "programming";
Map<Character, Integer> frequency = new HashMap<>();

for (char c : str.toCharArray()) {
    frequency.merge(c, 1, Integer::sum);
}
```

----------

## Problem 7: Find First Non-Repeating Character

### Solution 1: Using LinkedHashMap

java

```java
String str = "programming";
Map<Character, Integer> frequency = new LinkedHashMap<>();

for (char c : str.toCharArray()) {
    frequency.put(c, frequency.getOrDefault(c, 0) + 1);
}

Character first = frequency.entrySet().stream()
    .filter(e -> e.getValue() == 1)
    .map(Map.Entry::getKey)
    .findFirst()
    .orElse(null);
System.out.println(first); // 'p'
```

### Solution 2: Using Streams

java

```java
String str = "programming";
Character first = str.chars()
    .mapToObj(c -> (char) c)
    .filter(c -> str.indexOf(c) == str.lastIndexOf(c))
    .findFirst()
    .orElse(null);
System.out.println(first); // 'p'
```

----------

## Problem 8: Merge Two Lists and Remove Duplicates

### Solution 1: Using HashSet

java

```java
List<Integer> list1 = Arrays.asList(1, 2, 3, 4);
List<Integer> list2 = Arrays.asList(3, 4, 5, 6);

Set<Integer> merged = new HashSet<>(list1);
merged.addAll(list2);
List<Integer> result = new ArrayList<>(merged);
```

### Solution 2: Using Streams concat()

java

```java
List<Integer> result = Stream.concat(list1.stream(), list2.stream())
    .distinct()
    .collect(Collectors.toList());
```

### Solution 3: Using flatMap()

java

```java
List<Integer> result = Stream.of(list1, list2)
    .flatMap(List::stream)
    .distinct()
    .collect(Collectors.toList());
```

----------

## Problem 9: Partition List into Two Groups

### Solution 1: Using Streams partitioningBy()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9);
Map<Boolean, List<Integer>> partitioned = numbers.stream()
    .collect(Collectors.partitioningBy(n -> n % 2 == 0));

List<Integer> even = partitioned.get(true);
List<Integer> odd = partitioned.get(false);
System.out.println("Even: " + even); // [2, 4, 6, 8]
System.out.println("Odd: " + odd);   // [1, 3, 5, 7, 9]
```

### Solution 2: Using Traditional Loop

java

```java
List<Integer> even = new ArrayList<>();
List<Integer> odd = new ArrayList<>();

for (Integer num : numbers) {
    if (num % 2 == 0) {
        even.add(num);
    } else {
        odd.add(num);
    }
}
```

### Solution 3: Using filter()

java

```java
List<Integer> even = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

List<Integer> odd = numbers.stream()
    .filter(n -> n % 2 != 0)
    .collect(Collectors.toList());
```

----------

## Problem 10: Flatten List of Lists

### Solution 1: Using flatMap()

java

```java
List<List<Integer>> listOfLists = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5, 6),
    Arrays.asList(7, 8, 9)
);

List<Integer> flattened = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());
System.out.println(flattened); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Solution 2: Using Traditional Loop

java

```java
List<Integer> flattened = new ArrayList<>();
for (List<Integer> list : listOfLists) {
    flattened.addAll(list);
}
```

### Solution 3: Flatten and Remove Duplicates

java

```java
List<Integer> flattened = listOfLists.stream()
    .flatMap(List::stream)
    .distinct()
    .collect(Collectors.toList());
```

----------

## Problem 11: Find Top 3 Highest Salaries

### Solution 1: Using Streams with sorted()

java

```java
List<Double> top3 = employees.stream()
    .map(Employee::getSalary)
    .distinct()
    .sorted(Comparator.reverseOrder())
    .limit(3)
    .collect(Collectors.toList());
```

### Solution 2: Using PriorityQueue

java

```java
PriorityQueue<Double> pq = new PriorityQueue<>(Collections.reverseOrder());
employees.forEach(e -> pq.offer(e.getSalary()));

List<Double> top3 = new ArrayList<>();
for (int i = 0; i < 3 && !pq.isEmpty(); i++) {
    top3.add(pq.poll());
}
```

### Solution 3: Using TreeSet

java

```java
TreeSet<Double> salaries = new TreeSet<>(Collections.reverseOrder());
employees.forEach(e -> salaries.add(e.getSalary()));

List<Double> top3 = salaries.stream()
    .limit(3)
    .collect(Collectors.toList());
```

----------

## Problem 12: Convert List to Map

### Solution 1: Using toMap() - Simple Key-Value

java

```java
List<Employee> employees = Arrays.asList(
    new Employee("John", "IT", 60000),
    new Employee("Jane", "HR", 55000)
);

Map<String, Double> nameToSalary = employees.stream()
    .collect(Collectors.toMap(
        Employee::getName,
        Employee::getSalary
    ));
```

### Solution 2: Handle Duplicate Keys

java

```java
Map<String, Double> nameToSalary = employees.stream()
    .collect(Collectors.toMap(
        Employee::getName,
        Employee::getSalary,
        (existing, replacement) -> existing // Keep first occurrence
    ));
```

### Solution 3: Custom Map Type (LinkedHashMap)

java

```java
Map<String, Employee> map = employees.stream()
    .collect(Collectors.toMap(
        Employee::getName,
        Function.identity(),
        (e1, e2) -> e1,
        LinkedHashMap::new
    ));
```

### Solution 4: Group Multiple Employees by Department

java

```java
Map<String, List<Employee>> deptMap = employees.stream()
    .collect(Collectors.toMap(
        Employee::getDepartment,
        e -> new ArrayList<>(Arrays.asList(e)),
        (list1, list2) -> {
            list1.addAll(list2);
            return list1;
        }
    ));
```

----------

## Problem 13: Find Common Elements Between Two Lists

### Solution 1: Using retainAll()

java

```java
List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> list2 = Arrays.asList(4, 5, 6, 7, 8);

list1.retainAll(list2);
System.out.println(list1); // [4, 5]
```

### Solution 2: Using Streams filter()

java

```java
List<Integer> list1 = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> list2 = Arrays.asList(4, 5, 6, 7, 8);

List<Integer> common = list1.stream()
    .filter(list2::contains)
    .collect(Collectors.toList());
```

### Solution 3: Using HashSet for Better Performance

java

```java
Set<Integer> set2 = new HashSet<>(list2);
List<Integer> common = list1.stream()
    .filter(set2::contains)
    .collect(Collectors.toList());
```

----------

## Problem 14: Calculate Average Salary by Department

### Solution 1: Using averagingDouble()

java

```java
Map<String, Double> avgSalaries = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));
```

### Solution 2: Using summingDouble() and counting()

java

```java
Map<String, Double> avgSalaries = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment))
    .entrySet().stream()
    .collect(Collectors.toMap(
        Map.Entry::getKey,
        e -> e.getValue().stream()
            .mapToDouble(Employee::getSalary)
            .average()
            .orElse(0.0)
    ));
```

----------

## Problem 15: Join Strings with Delimiter

### Solution 1: Using Collectors.joining()

java

```java
List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");
String result = names.stream()
    .collect(Collectors.joining(", "));
System.out.println(result); // "John, Jane, Bob, Alice"
```

### Solution 2: With Prefix and Suffix

java

```java
String result = names.stream()
    .collect(Collectors.joining(", ", "[", "]"));
System.out.println(result); // "[John, Jane, Bob, Alice]"
```

### Solution 3: Using String.join()

java

```java
String result = String.join(", ", names);
```

### Solution 4: Using reduce()

java

```java
String result = names.stream()
    .reduce((s1, s2) -> s1 + ", " + s2)
    .orElse("");
```

----------

## Problem 16: Remove Elements While Iterating

### Solution 1: Using Iterator (Correct Way)

java

```java
List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
Iterator<Integer> iterator = numbers.iterator();

while (iterator.hasNext()) {
    Integer num = iterator.next();
    if (num % 2 == 0) {
        iterator.remove();
    }
}
System.out.println(numbers); // [1, 3, 5]
```

### Solution 2: Using removeIf()

java

```java
List<Integer> numbers = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5, 6));
numbers.removeIf(n -> n % 2 == 0);
System.out.println(numbers); // [1, 3, 5]
```

### Solution 3: Using Streams (Creates New List)

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
List<Integer> filtered = numbers.stream()
    .filter(n -> n % 2 != 0)
    .collect(Collectors.toList());
```

----------

## Problem 17: Find Maximum Salary Employee in Each Department

### Solution 1: Using maxBy()

java

```java
Map<String, Optional<Employee>> maxByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.maxBy(Comparator.comparingDouble(Employee::getSalary))
    ));
```

### Solution 2: Using collectingAndThen()

java

```java
Map<String, Employee> maxByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.collectingAndThen(
            Collectors.maxBy(Comparator.comparingDouble(Employee::getSalary)),
            Optional::get
        )
    ));
```

### Solution 3: Using reducing()

java

```java
Map<String, Optional<Employee>> maxByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.reducing(BinaryOperator.maxBy(
            Comparator.comparingDouble(Employee::getSalary)
        ))
    ));
```

----------

## Problem 18: Check if String is Anagram

### Solution 1: Using Sorting

java

```java
public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    
    char[] arr1 = s1.toLowerCase().toCharArray();
    char[] arr2 = s2.toLowerCase().toCharArray();
    Arrays.sort(arr1);
    Arrays.sort(arr2);
    
    return Arrays.equals(arr1, arr2);
}
```

### Solution 2: Using HashMap

java

```java
public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    
    Map<Character, Integer> map = new HashMap<>();
    for (char c : s1.toCharArray()) {
        map.put(c, map.getOrDefault(c, 0) + 1);
    }
    
    for (char c : s2.toCharArray()) {
        if (!map.containsKey(c)) return false;
        map.put(c, map.get(c) - 1);
        if (map.get(c) < 0) return false;
    }
    
    return true;
}
```

### Solution 3: Using Streams

java

```java
public static boolean isAnagram(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    
    Map<Character, Long> map1 = s1.chars()
        .mapToObj(c -> (char) c)
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    
    Map<Character, Long> map2 = s2.chars()
        .mapToObj(c -> (char) c)
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
    
    return map1.equals(map2);
}
```

----------

## Problem 19: Implement LRU Cache using LinkedHashMap

### Solution 1: Override removeEldestEntry()

java

```java
class LRUCache<K, V> extends LinkedHashMap<K, V> {
    private final int capacity;
    
    public LRUCache(int capacity) {
        super(capacity, 0.75f, true);
        this.capacity = capacity;
    }
    
    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > capacity;
    }
}

// Usage
LRUCache<Integer, String> cache = new LRUCache<>(3);
cache.put(1, "One");
cache.put(2, "Two");
cache.put(3, "Three");
cache.put(4, "Four"); // Removes eldest entry (1, "One")
```

### Solution 2: Using Collections.synchronizedMap() for Thread Safety

java

```java
Map<Integer, String> cache = Collections.synchronizedMap(
    new LinkedHashMap<Integer, String>(16, 0.75f, true) {
        @Override
        protected boolean removeEldestEntry(Map.Entry<Integer, String> eldest) {
            return size() > 3;
        }
    }
);
```

----------

## Problem 20: Sum of All Elements Using reduce()

### Solution 1: Basic reduce()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Integer sum = numbers.stream()
    .reduce(0, Integer::sum);
System.out.println(sum); // 15
```

### Solution 2: Using reduce() with Lambda

java

```java
Integer sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
```

### Solution 3: Using mapToInt() and sum()

java

```java
int sum = numbers.stream()
    .mapToInt(Integer::intValue)
    .sum();
```

### Solution 4: Sum of Salaries

java

```java
double totalSalary = employees.stream()
    .map(Employee::getSalary)
    .reduce(0.0, Double::sum);
```

----------

## Problem 21: Find Words Starting with Specific Letter

### Solution 1: Using filter()

java

```java
List<String> words = Arrays.asList("Apple", "Banana", "Apricot", "Cherry", "Avocado");
List<String> aWords = words.stream()
    .filter(w -> w.startsWith("A"))
    .collect(Collectors.toList());
System.out.println(aWords); // [Apple, Apricot, Avocado]
```

### Solution 2: Case Insensitive

java

```java
List<String> aWords = words.stream()
    .filter(w -> w.toLowerCase().startsWith("a"))
    .collect(Collectors.toList());
```

### Solution 3: Count Words Starting with Letter

java

```java
long count = words.stream()
    .filter(w -> w.startsWith("A"))
    .count();
```

----------

## Problem 22: Convert Map Keys/Values to List

### Solution 1: Keys to List

java

```java
Map<String, Integer> map = new HashMap<>();
map.put("John", 25);
map.put("Alice", 30);
map.put("Bob", 20);

List<String> keys = new ArrayList<>(map.keySet());
// OR using streams
List<String> keys = map.keySet().stream()
    .collect(Collectors.toList());
```

### Solution 2: Values to List

java

```java
List<Integer> values = new ArrayList<>(map.values());
// OR using streams
List<Integer> values = map.values().stream()
    .collect(Collectors.toList());
```

### Solution 3: Entries to List of Custom Objects

java

```java
List<String> keyValuePairs = map.entrySet().stream()
    .map(e -> e.getKey() + "=" + e.getValue())
    .collect(Collectors.toList());
```

----------

## Problem 23: Sort List of Objects by Multiple Fields

### Solution 1: Using Comparator.comparing() with thenComparing()

java

```java
class Person {
    String name;
    int age;
    double salary;
    
    // Constructor and getters
}

List<Person> people = Arrays.asList(
    new Person("John", 30, 60000),
    new Person("Alice", 25, 65000),
    new Person("John", 25, 55000)
);

// Sort by name, then by age
List<Person> sorted = people.stream()
    .sorted(Comparator.comparing(Person::getName)
        .thenComparing(Person::getAge))
    .collect(Collectors.toList());
```

### Solution 2: Sort by Name Ascending, Age Descending

java

```java
List<Person> sorted = people.stream()
    .sorted(Comparator.comparing(Person::getName)
        .thenComparing(Person::getAge, Comparator.reverseOrder()))
    .collect(Collectors.toList());
```

### Solution 3: Sort with Null Handling

java

```java
List<Person> sorted = people.stream()
    .sorted(Comparator.comparing(Person::getName, 
        Comparator.nullsFirst(String::compareTo))
        .thenComparing(Person::getAge))
    .collect(Collectors.toList());
```

----------

## Problem 24: Find Employees Earning Above Average Salary

### Solution 1: Two Pass Solution

java

```java
double avgSalary = employees.stream()
    .mapToDouble(Employee::getSalary)
    .average()
    .orElse(0.0);

List<Employee> aboveAvg = employees.stream()
    .filter(e -> e.getSalary() > avgSalary)
    .collect(Collectors.toList());
```

### Solution 2: Using DoubleSummaryStatistics

java

```java
DoubleSummaryStatistics stats = employees.stream()
    .mapToDouble(Employee::getSalary)
    .summaryStatistics();

List<Employee> aboveAvg = employees.stream()
    .filter(e -> e.getSalary() > stats.getAverage())
    .collect(Collectors.toList());
```

----------

## Problem 25: Optional - Handling Null Values

### Solution 1: Basic Optional Usage

java

```java
Optional<String> optional = Optional.ofNullable(getString());
String result = optional.orElse("Default Value");
```

### Solution 2: Using orElseGet() with Supplier

java

```java
String result = optional.orElseGet(() -> {
    // Expensive computation only if value is absent
    return computeDefaultValue();
});
```

### Solution 3: Using map() and flatMap()

java

```java
Optional<Employee> empOptional = findEmployee(id);
Optional<String> deptName = empOptional
    .map(Employee::getDepartment)
    .map(String::toUpperCase);
```

### Solution 4: Using ifPresent() and ifPresentOrElse()

java

```java
optional.ifPresent(value -> System.out.println(value));

// Java 9+
optional.ifPresentOrElse(
    value -> System.out.println(value),
    () -> System.out.println("Not found")
);
```

### Solution 5: Chaining with filter()

java

```java
Optional<Employee> highEarner = empOptional
    .filter(e -> e.getSalary() > 50000);
```

----------

## Problem 26: Reverse a String Using Streams

### Solution 1: Using StringBuilder

java

```java
String str = "Hello World";
String reversed = new StringBuilder(str).reverse().toString();
```

### Solution 2: Using Streams

java

```java
String reversed = str.chars()
    .mapToObj(c -> (char) c)
    .reduce("", (s, c) -> c + s, (s1, s2) -> s2 + s1);
```

### Solution 3: Reverse Each Word in Sentence

java

```java
String sentence = "Hello World Java";
String reversed = Arrays.stream(sentence.split(" "))
    .map(word -> new StringBuilder(word).reverse().toString())
    .collect(Collectors.joining(" "));
```

----------

## Problem 27: Implement computeIfAbsent, computeIfPresent, compute

### Solution 1: computeIfAbsent()

java

```java
Map<String, List<String>> map = new HashMap<>();

// Traditional way
if (!map.containsKey("fruits")) {
    map.put("fruits", new ArrayList<>());
}
map.get("fruits").add("Apple");

// Using computeIfAbsent
map.computeIfAbsent("fruits", k -> new ArrayList<>()).add("Apple");
```

### Solution 2: computeIfPresent()

java

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("John", 100);

// Update only if key exists
scores.computeIfPresent("John", (k, v) -> v + 50); // 150
scores.computeIfPresent("Jane", (k, v) -> v + 50); // No change, key doesn't exist
```

### Solution 3: compute()

java

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("John", 100);

// Always computes (updates or adds)
scores.compute("John", (k, v) -> v == null ? 1 : v + 1); // 101
scores.compute("Jane", (k, v) -> v == null ? 1 : v + 1); // 1
```

### Solution 4: merge()

java

```java
Map<String, Integer> scores = new HashMap<>();
scores.put("John", 100);

// Merge with default value
scores.merge("John", 50, Integer::sum); // 150
scores.merge("Jane", 50, Integer::sum); // 50
```

----------

## Problem 28: Get Nth Element from Stream

### Solution 1: Using skip() and findFirst()

java

```java
List<Integer> numbers = Arrays.asList(10, 20, 30, 40, 50);
Optional<Integer> third = numbers.stream()
    .skip(2)
    .findFirst();
System.out.println(third.get()); // 30
```

### Solution 2: Using limit() and reduce()

java

```java
Optional<Integer> third = numbers.stream()
    .skip(2)
    .limit(1)
    .findFirst();
```

### Solution 3: Traditional Access

java

```java
Integer third = numbers.get(2); // Direct access for lists
```

----------

## Problem 29: Check if Any/All Elements Match Condition

### Solution 1: anyMatch()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
boolean hasEven = numbers.stream()
    .anyMatch(n -> n % 2 == 0);
System.out.println(hasEven); // true
```

### Solution 2: allMatch()

java

```java
boolean allPositive = numbers.stream()
    .allMatch(n -> n > 0);
System.out.println(allPositive); // true
```

### Solution 3: noneMatch()

java

```java
boolean noNegative = numbers.stream()
    .noneMatch(n -> n < 0);
System.out.println(noNegative); // true
```

### Solution 4: Check if All Employees Earn Above Threshold

java

```java
boolean allHighEarners = employees.stream()
    .allMatch(e -> e.getSalary() > 50000);
```

----------

## Problem 30: Convert Array to List and Vice Versa

### Solution 1: Array to List

java

```java
String[] array = {"A", "B", "C"};

// Immutable list (Arrays.asList)
List<String> list1 = Arrays.asList(array);

// Mutable list
List<String> list2 = new ArrayList<>(Arrays.asList(array));

// Using Streams
List<String> list3 = Arrays.stream(array)
    .collect(Collectors.toList());
```

### Solution 2: List to Array

java

```java
List<String> list = Arrays.asList("A", "B", "C");

// Method 1
String[] array1 = list.toArray(new String[0]);

// Method 2 (pre-sized)
String[] array2 = list.toArray(new String[list.size()]);

// Using Streams
String[] array3 = list.stream()
    .toArray(String[]::new);
```

### Solution 3: Primitive Array to List

java

```java
int[] numbers = {1, 2, 3, 4, 5};

// Box to Integer list
List<Integer> list = Arrays.stream(numbers)
    .boxed()
    .collect(Collectors.toList());
```

----------

## Problem 31: FlatMap with Nested Objects

### Solution 1: Flatten Department -> Employees

java

```java
class Department {
    String name;
    List<Employee> employees;
    
    public Department(String name, List<Employee> employees) {
        this.name = name;
        this.employees = employees;
    }
    
    public List<Employee> getEmployees() { return employees; }
}

List<Department> departments = Arrays.asList(
    new Department("IT", Arrays.asList(
        new Employee("John", "IT", 60000),
        new Employee("Bob", "IT", 65000)
    )),
    new Department("HR", Arrays.asList(
        new Employee("Jane", "HR", 55000)
    ))
);

// Get all employees from all departments
List<Employee> allEmployees = departments.stream()
    .flatMap(dept -> dept.getEmployees().stream())
    .collect(Collectors.toList());
```

### Solution 2: Flatten List of Arrays

java

```java
String[][] arrays = {
    {"A", "B"},
    {"C", "D"},
    {"E", "F"}
};

List<String> flattened = Arrays.stream(arrays)
    .flatMap(Arrays::stream)
    .collect(Collectors.toList());
System.out.println(flattened); // [A, B, C, D, E, F]
```

### Solution 3: Flatten and Transform

java

```java
List<String> allNames = departments.stream()
    .flatMap(dept -> dept.getEmployees().stream())
    .map(Employee::getName)
    .collect(Collectors.toList());
```

----------

## Problem 32: Custom Sorting with Comparator

### Solution 1: Natural Order and Reverse

java

```java
List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);

// Ascending
numbers.sort(Comparator.naturalOrder());

// Descending
numbers.sort(Comparator.reverseOrder());

// Using sorted() in streams
List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());
```

### Solution 2: Custom Comparator Lambda

java

```java
List<String> names = Arrays.asList("John", "Alice", "Bob");

// Sort by length
names.sort((s1, s2) -> Integer.compare(s1.length(), s2.length()));

// Using Comparator.comparing()
names.sort(Comparator.comparing(String::length));
```

### Solution 3: Multiple Sorting Criteria

java

```java
employees.sort(
    Comparator.comparing(Employee::getDepartment)
        .thenComparing(Employee::getSalary, Comparator.reverseOrder())
        .thenComparing(Employee::getName)
);
```

### Solution 4: Null-Safe Sorting

java

```java
employees.sort(
    Comparator.comparing(Employee::getName, 
        Comparator.nullsLast(String::compareTo))
);
```

----------

## Problem 33: Peak, Limit, and Skip Operations

### Solution 1: peek() for Debugging

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)
    .peek(n -> System.out.println("Filtered: " + n))
    .map(n -> n * 2)
    .peek(n -> System.out.println("Mapped: " + n))
    .collect(Collectors.toList());
```

### Solution 2: Pagination with skip() and limit()

java

```java
int pageNumber = 2;
int pageSize = 5;

List<Employee> page = employees.stream()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .collect(Collectors.toList());
```

### Solution 3: Get First N Elements After Filtering

java

```java
List<Employee> topSalaries = employees.stream()
    .filter(e -> e.getDepartment().equals("IT"))
    .sorted(Comparator.comparing(Employee::getSalary).reversed())
    .limit(5)
    .collect(Collectors.toList());
```

----------

## Problem 34: Collectors.toMap() Advanced Usage

### Solution 1: Simple Key-Value Mapping

java

```java
Map<Integer, String> map = employees.stream()
    .collect(Collectors.toMap(
        e -> e.hashCode(),
        Employee::getName
    ));
```

### Solution 2: Handle Duplicates with Merge Function

java

```java
List<Employee> employees = Arrays.asList(
    new Employee("John", "IT", 60000),
    new Employee("John", "HR", 55000) // Duplicate name
);

Map<String, Double> nameToSalary = employees.stream()
    .collect(Collectors.toMap(
        Employee::getName,
        Employee::getSalary,
        (salary1, salary2) -> salary1 + salary2 // Sum salaries for duplicate names
    ));
```

### Solution 3: Custom Map Implementation

java

```java
Map<String, Employee> treeMap = employees.stream()
    .collect(Collectors.toMap(
        Employee::getName,
        Function.identity(),
        (e1, e2) -> e1,
        TreeMap::new
    ));
```

### Solution 4: Collect to ConcurrentHashMap

java

```java
Map<String, Employee> concurrentMap = employees.parallelStream()
    .collect(Collectors.toConcurrentMap(
        Employee::getName,
        Function.identity(),
        (e1, e2) -> e1
    ));
```

----------

## Problem 35: Sum, Average, Max, Min Using Collectors

### Solution 1: Summarizing Statistics

java

```java
DoubleSummaryStatistics stats = employees.stream()
    .collect(Collectors.summarizingDouble(Employee::getSalary));

System.out.println("Count: " + stats.getCount());
System.out.println("Sum: " + stats.getSum());
System.out.println("Min: " + stats.getMin());
System.out.println("Max: " + stats.getMax());
System.out.println("Average: " + stats.getAverage());
```

### Solution 2: Individual Collectors

java

```java
Double sum = employees.stream()
    .collect(Collectors.summingDouble(Employee::getSalary));

Double avg = employees.stream()
    .collect(Collectors.averagingDouble(Employee::getSalary));

Optional<Employee> maxSalary = employees.stream()
    .collect(Collectors.maxBy(Comparator.comparing(Employee::getSalary)));
```

### Solution 3: Using reduce()

java

```java
Double totalSalary = employees.stream()
    .map(Employee::getSalary)
    .reduce(0.0, Double::sum);

Optional<Double> maxSalary = employees.stream()
    .map(Employee::getSalary)
    .reduce(Double::max);
```

----------

## Problem 36: Parallel Streams

### Solution 1: Basic Parallel Stream

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Sequential
long sum1 = numbers.stream()
    .mapToLong(Integer::longValue)
    .sum();

// Parallel
long sum2 = numbers.parallelStream()
    .mapToLong(Integer::longValue)
    .sum();
```

### Solution 2: When to Use Parallel Streams

java

```java
// Good use case: CPU-intensive operations on large datasets
List<String> largeList = generateLargeList();
long count = largeList.parallelStream()
    .filter(s -> expensiveOperation(s))
    .count();

// Bad use case: Small datasets or I/O operations
List<String> smallList = Arrays.asList("A", "B", "C");
// Don't use parallel here - overhead is not worth it
```

### Solution 3: Thread-Safe Collection with Parallel Stream

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Thread-safe collection
List<Integer> result = numbers.parallelStream()
    .map(n -> n * 2)
    .collect(Collectors.toList());

// For custom collectors, ensure thread safety
Map<Integer, Integer> map = numbers.parallelStream()
    .collect(Collectors.toConcurrentMap(
        Function.identity(),
        n -> n * 2
    ));
```

----------

## Problem 37: Method References

### Solution 1: Static Method Reference

java

```java
List<String> numbers = Arrays.asList("1", "2", "3", "4", "5");

// Lambda
List<Integer> ints1 = numbers.stream()
    .map(s -> Integer.parseInt(s))
    .collect(Collectors.toList());

// Method reference
List<Integer> ints2 = numbers.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());
```

### Solution 2: Instance Method Reference

java

```java
List<String> words = Arrays.asList("apple", "banana", "cherry");

// Lambda
List<String> upper1 = words.stream()
    .map(s -> s.toUpperCase())
    .collect(Collectors.toList());

// Method reference
List<String> upper2 = words.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList());
```

### Solution 3: Constructor Reference

java

```java
List<String> names = Arrays.asList("John", "Jane", "Bob");

// Lambda
List<Employee> emps1 = names.stream()
    .map(name -> new Employee(name, "IT", 50000))
    .collect(Collectors.toList());

// Constructor reference (if appropriate constructor exists)
class Person {
    String name;
    Person(String name) { this.name = name; }
}

List<Person> people = names.stream()
    .map(Person::new)
    .collect(Collectors.toList());
```

### Solution 4: Arbitrary Object Method Reference

java

```java
List<String> words = Arrays.asList("apple", "banana", "cherry");
String prefix = "fruit_";

// Instance method of arbitrary object
List<String> prefixed = words.stream()
    .map(prefix::concat)
    .collect(Collectors.toList());
```

----------

## Problem 38: Custom Functional Interfaces

### Solution 1: Predicate

java

```java
Predicate<Integer> isEven = n -> n % 2 == 0;
Predicate<Integer> isPositive = n -> n > 0;

// Combining predicates
Predicate<Integer> isEvenAndPositive = isEven.and(isPositive);
Predicate<Integer> isEvenOrNegative = isEven.or(n -> n < 0);
Predicate<Integer> isOdd = isEven.negate();

List<Integer> numbers = Arrays.asList(-2, -1, 0, 1, 2, 3, 4);
List<Integer> filtered = numbers.stream()
    .filter(isEvenAndPositive)
    .collect(Collectors.toList()); // [2, 4]
```

### Solution 2: Function

java

```java
Function<String, Integer> stringLength = String::length;
Function<Integer, Integer> square = n -> n * n;

// Composing functions
Function<String, Integer> lengthSquared = stringLength.andThen(square);

String word = "Hello";
Integer result = lengthSquared.apply(word); // 25
```

### Solution 3: Consumer

java

```java
Consumer<String> print = System.out::println;
Consumer<String> upperPrint = s -> System.out.println(s.toUpperCase());

// Chaining consumers
Consumer<String> printTwice = print.andThen(upperPrint);

printTwice.accept("hello");
// Output:
// hello
// HELLO
```

### Solution 4: Supplier

java

```java
Supplier<Double> randomSupplier = Math::random;
Supplier<List<String>> listSupplier = ArrayList::new;

Double random = randomSupplier.get();
List<String> newList = listSupplier.get();
```

### Solution 5: BiFunction, BiConsumer, BiPredicate

java

```java
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
BiFunction<String, String, String> concat = (s1, s2) -> s1 + s2;

BiConsumer<String, Integer> printWithIndex = (s, i) -> 
    System.out.println(i + ": " + s);

BiPredicate<String, Integer> lengthEquals = (s, len) -> 
    s.length() == len;

Integer sum = add.apply(5, 3); // 8
String combined = concat.apply("Hello", "World"); // HelloWorld
```

----------

## Problem 39: Convert Collection to Different Types

### Solution 1: List to Set

java

```java
List<Integer> list = Arrays.asList(1, 2, 2, 3, 4, 4, 5);

// Using constructor
Set<Integer> set1 = new HashSet<>(list);

// Using streams
Set<Integer> set2 = list.stream()
    .collect(Collectors.toSet());

// Using specific Set implementation
Set<Integer> linkedSet = list.stream()
    .collect(Collectors.toCollection(LinkedHashSet::new));
```

### Solution 2: Set to List

java

```java
Set<String> set = new HashSet<>(Arrays.asList("A", "B", "C"));

List<String> list1 = new ArrayList<>(set);

List<String> list2 = set.stream()
    .collect(Collectors.toList());
```

### Solution 3: Map to List of Entries

java

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);

List<Map.Entry<String, Integer>> entries = new ArrayList<>(map.entrySet());

// Or specific transformations
List<String> keys = new ArrayList<>(map.keySet());
List<Integer> values = new ArrayList<>(map.values());
```

----------

## Problem 40: Infinite Streams

### Solution 1: Stream.generate()

java

```java
// Generate infinite stream of random numbers
Stream.generate(Math::random)
    .limit(5)
    .forEach(System.out::println);

// Generate infinite stream of UUIDs
List<String> uuids = Stream.generate(UUID.randomUUID()::toString)
    .limit(10)
    .collect(Collectors.toList());
```

### Solution 2: Stream.iterate()

java

```java
// Generate sequence: 0, 2, 4, 6, 8
List<Integer> evens = Stream.iterate(0, n -> n + 2)
    .limit(5)
    .collect(Collectors.toList());

// Fibonacci sequence
Stream.iterate(new int[]{0, 1}, f -> new int[]{f[1], f[0] + f[1]})
    .limit(10)
    .map(f -> f[0])
    .forEach(System.out::println);
```

### Solution 3: IntStream.range() and IntStream.rangeClosed()

java

```java
// 0 to 9 (exclusive end)
IntStream.range(0, 10)
    .forEach(System.out::println);

// 1 to 10 (inclusive end)
IntStream.rangeClosed(1, 10)
    .forEach(System.out::println);

// Create list of specific size
List<Integer> list = IntStream.range(0, 5)
    .boxed()
    .collect(Collectors.toList()); // [0, 1, 2, 3, 4]
```

----------

## Problem 41: Date-Time API Operations

### Solution 1: Current Date and Time

java

```java
LocalDate today = LocalDate.now();
LocalTime now = LocalTime.now();
LocalDateTime dateTime = LocalDateTime.now();
ZonedDateTime zonedDateTime = ZonedDateTime.now();

System.out.println(today); // 2025-11-02
```

### Solution 2: Parsing and Formatting

java

```java
// Parsing
LocalDate date = LocalDate.parse("2025-11-02");
LocalDate customFormat = LocalDate.parse("02/11/2025", 
    DateTimeFormatter.ofPattern("dd/MM/yyyy"));

// Formatting
String formatted = date.format(DateTimeFormatter.ofPattern("dd-MMM-yyyy"));
System.out.println(formatted); // 02-Nov-2025
```

### Solution 3: Date Arithmetic

java

```java
LocalDate today = LocalDate.now();

LocalDate nextWeek = today.plusWeeks(1);
LocalDate lastMonth = today.minusMonths(1);
LocalDate nextYear = today.plusYears(1);

// Using Period
Period period = Period.ofDays(10);
LocalDate future = today.plus(period);
```

### Solution 4: Date Comparison and Difference

java

```java
LocalDate date1 = LocalDate.of(2025, 1, 1);
LocalDate date2 = LocalDate.of(2025, 12, 31);

// Comparison
boolean isBefore = date1.isBefore(date2); // true
boolean isAfter = date1.isAfter(date2); // false

// Difference
Period period = Period.between(date1, date2);
System.out.println(period.getDays() + " days");

long daysBetween = ChronoUnit.DAYS.between(date1, date2);
System.out.println(daysBetween); // 364
```

### Solution 5: Working with Time

java

```java
LocalTime time1 = LocalTime.of(10, 30);
LocalTime time2 = time1.plusHours(2).plusMinutes(15);

Duration duration = Duration.between(time1, time2);
System.out.println(duration.toMinutes()); // 135
```

----------

## Problem 42: ConcurrentHashMap Operations

### Solution 1: Basic Thread-Safe Operations

java

```java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();

// Thread-safe put
map.put("A", 1);

// putIfAbsent
map.putIfAbsent("B", 2);
map.putIfAbsent("A", 10); // Won't update, A already exists

// Thread-safe iteration
map.forEach((key, value) -> System.out.println(key + ": " + value));
```

### Solution 2: Atomic Operations

java

```java
ConcurrentHashMap<String, Integer> scores = new ConcurrentHashMap<>();
scores.put("Player1", 100);

// Atomic increment
scores.compute("Player1", (k, v) -> v + 10);

// Atomic add with merge
scores.merge("Player1", 5, Integer::sum);

// Get and update atomically
Integer oldValue = scores.computeIfPresent("Player1", (k, v) -> v * 2);
```

### Solution 3: Bulk Operations

java

```java
ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

// Search
String result = map.search(1, (key, value) -> 
    value > 2 ? key : null);

// Reduce
Integer sum = map.reduce(1, 
    (key, value) -> value,
    Integer::sum);
```

----------

## Problem 43: Working with Immutable Collections

### Solution 1: Collections.unmodifiable...()

java

```java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
List<String> immutableList = Collections.unmodifiableList(list);

// This will throw UnsupportedOperationException
// immutableList.add("D");
```

### Solution 2: Java 9+ List.of(), Set.of(), Map.of()

java

```java
List<String> immutableList = List.of("A", "B", "C");
Set<Integer> immutableSet = Set.of(1, 2, 3);
Map<String, Integer> immutableMap = Map.of("A", 1, "B", 2);

// All modifications throw UnsupportedOperationException
```

### Solution 3: Collectors.toUnmodifiableList()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> immutable = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toUnmodifiableList());
```

----------

## Problem 44: Frequency and Occurrence Problems

### Solution 1: Find Most Frequent Element

java

```java
List<String> words = Arrays.asList("apple", "banana", "apple", 
    "cherry", "banana", "apple");

Map<String, Long> frequency = words.stream()
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

String mostFrequent = frequency.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey)
    .orElse(null);

System.out.println(mostFrequent); // apple
```

### Solution 2: Elements with Frequency > N

java

```java
int threshold = 2;
List<String> frequent = frequency.entrySet().stream()
    .filter(e -> e.getValue() > threshold)
    .map(Map.Entry::getKey)
    .collect(Collectors.toList());
```

### Solution 3: Sort by Frequency

java

```java
List<String> sortedByFreq = frequency.entrySet().stream()
    .sorted(Map.Entry.<String, Long>comparingByValue().reversed())
    .map(Map.Entry::getKey)
    .collect(Collectors.toList());
```

----------

## Problem 45: Stream Short-Circuit Operations

### Solution 1: findFirst() vs findAny()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// findFirst - returns first element
Optional<Integer> first = numbers.stream()
    .filter(n -> n > 2)
    .findFirst(); // 3

// findAny - returns any element (useful in parallel streams)
Optional<Integer> any = numbers.parallelStream()
    .filter(n -> n > 2)
    .findAny(); // Could be 3, 4, or 5
```

### Solution 2: anyMatch(), allMatch(), noneMatch()

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// Short-circuits on first match
boolean hasEven = numbers.stream()
    .peek(n -> System.out.println("Checking: " + n))
    .anyMatch(n -> n % 2 == 0);
// Stops after finding first even number

// Checks all elements
boolean allPositive = numbers.stream()
    .allMatch(n -> n > 0);

// Short-circuits on first non-match
boolean noneNegative = numbers.stream()
    .noneMatch(n -> n < 0);
```

----------

## Key Interview Tips

### Time Complexities to Remember

java

```java
// ArrayList
- get(index): O(1)
- add(element): O(1) amortized
- add(index, element): O(n)
- remove(index): O(n)
- contains(element): O(n)

// LinkedList
- get(index): O(n)
- add(element): O(1)
- add(first/last): O(1)
- remove(first/last): O(1)

// HashSet/HashMap
- add/put: O(1) average
- contains/get: O(1) average
- remove: O(1) average

// TreeSet/TreeMap
- add/put: O(log n)
- contains/get: O(log n)
- remove: O(log n)

// Stream Operations
- Intermediate operations: Lazy (O(1) to setup)
- Terminal operations: Eager (O(n) typically)
```

### Common Pitfalls to Avoid

java

```java
// 1. Reusing streams
Stream<Integer> stream = list.stream();
stream.forEach(System.out::println);
// stream.count(); // IllegalStateException!

// 2. Modifying source during stream operation
// list.stream().forEach(e -> list.remove(e)); // ConcurrentModificationException!

// 3. Using parallel streams incorrectly
// list.parallelStream().forEach(e -> list.add(e)); // Thread-safety issue!

// 4. Ignoring null checks
// String result = optional.get(); // NoSuchElementException if empty!
String result = optional.orElse("default"); // Better

// 5. Inefficient filtering
// list.stream().filter(e -> list2.contains(e)) // O(n*m)
Set<String> set2 = new HashSet<>(list2);
list.stream().filter(set2::contains) // O(n)
```
## Problem 46: Find Intersection of Multiple Lists

### Solution 1: Using retainAll() Sequentially

java

```java
List<Integer> list1 = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
List<Integer> list2 = Arrays.asList(3, 4, 5, 6, 7);
List<Integer> list3 = Arrays.asList(4, 5, 6, 7, 8);

list1.retainAll(list2);
list1.retainAll(list3);
System.out.println(list1); // [4, 5]
```

### Solution 2: Using Streams with reduce()

java

```java
List<List<Integer>> lists = Arrays.asList(
    Arrays.asList(1, 2, 3, 4, 5),
    Arrays.asList(3, 4, 5, 6, 7),
    Arrays.asList(4, 5, 6, 7, 8)
);

Set<Integer> intersection = lists.stream()
    .map(HashSet::new)
    .reduce((set1, set2) -> {
        set1.retainAll(set2);
        return set1;
    })
    .orElse(new HashSet<>());
```

### Solution 3: Using Frequency Count

java

```java
Map<Integer, Long> frequency = lists.stream()
    .flatMap(List::stream)
    .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

List<Integer> intersection = frequency.entrySet().stream()
    .filter(e -> e.getValue() == lists.size())
    .map(Map.Entry::getKey)
    .collect(Collectors.toList());
```

----------

## Problem 47: Group Anagrams Together

### Solution 1: Using Sorted String as Key

java

```java
List<String> words = Arrays.asList("eat", "tea", "tan", "ate", "nat", "bat");

Map<String, List<String>> anagramGroups = words.stream()
    .collect(Collectors.groupingBy(word -> {
        char[] chars = word.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }));

System.out.println(anagramGroups);
// {aet=[eat, tea, ate], ant=[tan, nat], abt=[bat]}
```

### Solution 2: Using Character Frequency as Key

java

```java
Map<Map<Character, Long>, List<String>> anagramGroups = words.stream()
    .collect(Collectors.groupingBy(word -> 
        word.chars()
            .mapToObj(c -> (char) c)
            .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
    ));
```

### Solution 3: Get Only Anagram Lists

java

```java
Collection<List<String>> anagramLists = words.stream()
    .collect(Collectors.groupingBy(word -> {
        char[] chars = word.toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }))
    .values();
```

----------

## Problem 48: Find Missing Numbers in a Range

### Solution 1: Using Set Difference

java

```java
List<Integer> numbers = Arrays.asList(1, 2, 4, 6, 7, 9);
int min = 1, max = 10;

Set<Integer> numberSet = new HashSet<>(numbers);
List<Integer> missing = IntStream.rangeClosed(min, max)
    .filter(n -> !numberSet.contains(n))
    .boxed()
    .collect(Collectors.toList());

System.out.println(missing); // [3, 5, 8, 10]
```

### Solution 2: Using removeAll()

java

```java
Set<Integer> allNumbers = IntStream.rangeClosed(min, max)
    .boxed()
    .collect(Collectors.toSet());
    
allNumbers.removeAll(numbers);
List<Integer> missing = new ArrayList<>(allNumbers);
```

### Solution 3: Find First Missing Positive

java

```java
public int firstMissingPositive(int[] nums) {
    Set<Integer> set = Arrays.stream(nums)
        .boxed()
        .collect(Collectors.toSet());
    
    int result = 1;
    while (set.contains(result)) {
        result++;
    }
    return result;
}
```

----------

## Problem 49: Rotate List/Array

### Solution 1: Rotate List to Right by K positions

java

```java
public static <T> List<T> rotateRight(List<T> list, int k) {
    if (list.isEmpty()) return list;
    
    int size = list.size();
    k = k % size; // Handle k > size
    
    List<T> rotated = new ArrayList<>();
    rotated.addAll(list.subList(size - k, size));
    rotated.addAll(list.subList(0, size - k));
    
    return rotated;
}

// Usage
List<Integer> list = Arrays.asList(1, 2, 3, 4, 5);
List<Integer> rotated = rotateRight(list, 2);
System.out.println(rotated); // [4, 5, 1, 2, 3]
```

### Solution 2: In-Place Rotation Using Collections.rotate()

java

```java
List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
Collections.rotate(list, 2);
System.out.println(list); // [4, 5, 1, 2, 3]
```

### Solution 3: Using Streams

java

```java
public static <T> List<T> rotateRight(List<T> list, int k) {
    int size = list.size();
    k = k % size;
    
    return Stream.concat(
        list.stream().skip(size - k),
        list.stream().limit(size - k)
    ).collect(Collectors.toList());
}
```

----------

## Problem 50: Implement Stack Using Queue and Vice Versa

### Solution 1: Stack Using Two Queues

java

```java
class StackUsingQueues {
    private Queue<Integer> q1 = new LinkedList<>();
    private Queue<Integer> q2 = new LinkedList<>();
    
    public void push(int x) {
        q2.offer(x);
        while (!q1.isEmpty()) {
            q2.offer(q1.poll());
        }
        Queue<Integer> temp = q1;
        q1 = q2;
        q2 = temp;
    }
    
    public int pop() {
        return q1.poll();
    }
    
    public int top() {
        return q1.peek();
    }
    
    public boolean empty() {
        return q1.isEmpty();
    }
}
```

### Solution 2: Queue Using Two Stacks

java

```java
class QueueUsingStacks {
    private Stack<Integer> stack1 = new Stack<>();
    private Stack<Integer> stack2 = new Stack<>();
    
    public void enqueue(int x) {
        stack1.push(x);
    }
    
    public int dequeue() {
        if (stack2.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }
    
    public int peek() {
        if (stack2.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.peek();
    }
    
    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
}
```

----------

## Problem 51: Min/Max Stack - Get Min in O(1)

### Solution 1: Using Two Stacks

java

```java
class MinStack {
    private Stack<Integer> stack = new Stack<>();
    private Stack<Integer> minStack = new Stack<>();
    
    public void push(int x) {
        stack.push(x);
        if (minStack.isEmpty() || x <= minStack.peek()) {
            minStack.push(x);
        }
    }
    
    public int pop() {
        int val = stack.pop();
        if (val == minStack.peek()) {
            minStack.pop();
        }
        return val;
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minStack.peek();
    }
}
```

### Solution 2: Using Single Stack with Pairs

java

```java
class MinStack {
    private Stack<int[]> stack = new Stack<>(); // [value, min]
    
    public void push(int x) {
        if (stack.isEmpty()) {
            stack.push(new int[]{x, x});
        } else {
            int currentMin = Math.min(x, stack.peek()[1]);
            stack.push(new int[]{x, currentMin});
        }
    }
    
    public int pop() {
        return stack.pop()[0];
    }
    
    public int top() {
        return stack.peek()[0];
    }
    
    public int getMin() {
        return stack.peek()[1];
    }
}
```

----------

## Problem 52: Implement Priority Queue Operations

### Solution 1: Basic PriorityQueue Usage

java

```java
// Min heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.offer(5);
minHeap.offer(2);
minHeap.offer(8);
minHeap.offer(1);

System.out.println(minHeap.poll()); // 1
System.out.println(minHeap.poll()); // 2
```

### Solution 2: Max Heap

java

```java
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.offer(5);
maxHeap.offer(2);
maxHeap.offer(8);
maxHeap.offer(1);

System.out.println(maxHeap.poll()); // 8
System.out.println(maxHeap.poll()); // 5
```

### Solution 3: Custom Comparator for Objects

java

```java
PriorityQueue<Employee> pq = new PriorityQueue<>(
    Comparator.comparing(Employee::getSalary).reversed()
        .thenComparing(Employee::getName)
);

pq.offer(new Employee("John", "IT", 60000));
pq.offer(new Employee("Jane", "HR", 65000));
pq.offer(new Employee("Bob", "IT", 65000));

Employee highest = pq.poll(); // Jane (highest salary, first alphabetically)
```

### Solution 4: Find Kth Largest Element

java

```java
public int findKthLargest(int[] nums, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    for (int num : nums) {
        minHeap.offer(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    return minHeap.peek();
}
```

----------

## Problem 53: Sliding Window Maximum Using Deque

### Solution 1: Using Deque

java

```java
public int[] maxSlidingWindow(int[] nums, int k) {
    if (nums == null || nums.length == 0) return new int[0];
    
    Deque<Integer> deque = new ArrayDeque<>();
    int[] result = new int[nums.length - k + 1];
    
    for (int i = 0; i < nums.length; i++) {
        // Remove elements outside window
        while (!deque.isEmpty() && deque.peekFirst() < i - k + 1) {
            deque.pollFirst();
        }
        
        // Remove smaller elements
        while (!deque.isEmpty() && nums[deque.peekLast()] < nums[i]) {
            deque.pollLast();
        }
        
        deque.offerLast(i);
        
        // Add to result
        if (i >= k - 1) {
            result[i - k + 1] = nums[deque.peekFirst()];
        }
    }
    
    return result;
}

// Usage
int[] nums = {1, 3, -1, -3, 5, 3, 6, 7};
int[] result = maxSlidingWindow(nums, 3);
System.out.println(Arrays.toString(result)); // [3, 3, 5, 5, 6, 7]
```

----------

## Problem 54: Implement Trie (Prefix Tree)

### Solution 1: Basic Trie Implementation

java

```java
class TrieNode {
    Map<Character, TrieNode> children = new HashMap<>();
    boolean isEndOfWord = false;
}

class Trie {
    private TrieNode root = new TrieNode();
    
    public void insert(String word) {
        TrieNode current = root;
        for (char ch : word.toCharArray()) {
            current = current.children.computeIfAbsent(ch, c -> new TrieNode());
        }
        current.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord;
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    private TrieNode searchPrefix(String prefix) {
        TrieNode current = root;
        for (char ch : prefix.toCharArray()) {
            current = current.children.get(ch);
            if (current == null) return null;
        }
        return current;
    }
}
```

### Solution 2: Auto-Complete Feature

java

```java
class Trie {
    private TrieNode root = new TrieNode();
    
    public List<String> autoComplete(String prefix) {
        List<String> results = new ArrayList<>();
        TrieNode node = searchPrefix(prefix);
        
        if (node != null) {
            collectWords(node, prefix, results);
        }
        return results;
    }
    
    private void collectWords(TrieNode node, String prefix, List<String> results) {
        if (node.isEndOfWord) {
            results.add(prefix);
        }
        
        for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
            collectWords(entry.getValue(), prefix + entry.getKey(), results);
        }
    }
}
```

----------

## Problem 55: Design HashMap from Scratch

### Solution 1: Simple HashMap Implementation

java

```java
class MyHashMap<K, V> {
    private static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;
        
        Entry(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Entry<K, V>[] buckets;
    private int capacity = 16;
    private int size = 0;
    
    @SuppressWarnings("unchecked")
    public MyHashMap() {
        buckets = new Entry[capacity];
    }
    
    private int getBucketIndex(K key) {
        return key == null ? 0 : Math.abs(key.hashCode() % capacity);
    }
    
    public void put(K key, V value) {
        int index = getBucketIndex(key);
        Entry<K, V> entry = buckets[index];
        
        // Check if key exists
        while (entry != null) {
            if ((key == null && entry.key == null) || 
                (key != null && key.equals(entry.key))) {
                entry.value = value;
                return;
            }
            entry = entry.next;
        }
        
        // Add new entry at beginning
        Entry<K, V> newEntry = new Entry<>(key, value);
        newEntry.next = buckets[index];
        buckets[index] = newEntry;
        size++;
        
        // Rehash if needed
        if (size > capacity * 0.75) {
            rehash();
        }
    }
    
    public V get(K key) {
        int index = getBucketIndex(key);
        Entry<K, V> entry = buckets[index];
        
        while (entry != null) {
            if ((key == null && entry.key == null) || 
                (key != null && key.equals(entry.key))) {
                return entry.value;
            }
            entry = entry.next;
        }
        return null;
    }
    
    public V remove(K key) {
        int index = getBucketIndex(key);
        Entry<K, V> entry = buckets[index];
        Entry<K, V> prev = null;
        
        while (entry != null) {
            if ((key == null && entry.key == null) || 
                (key != null && key.equals(entry.key))) {
                if (prev == null) {
                    buckets[index] = entry.next;
                } else {
                    prev.next = entry.next;
                }
                size--;
                return entry.value;
            }
            prev = entry;
            entry = entry.next;
        }
        return null;
    }
    
    @SuppressWarnings("unchecked")
    private void rehash() {
        Entry<K, V>[] oldBuckets = buckets;
        capacity *= 2;
        buckets = new Entry[capacity];
        size = 0;
        
        for (Entry<K, V> entry : oldBuckets) {
            while (entry != null) {
                put(entry.key, entry.value);
                entry = entry.next;
            }
        }
    }
    
    public int size() {
        return size;
    }
}
```

----------

## Problem 56: Find Longest Substring Without Repeating Characters

### Solution 1: Using HashMap with Sliding Window

java

```java
public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> map = new HashMap<>();
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        
        if (map.containsKey(c)) {
            left = Math.max(left, map.get(c) + 1);
        }
        
        map.put(c, right);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}

// Usage
String s = "abcabcbb";
System.out.println(lengthOfLongestSubstring(s)); // 3 (abc)
```

### Solution 2: Using Set

java

```java
public int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int maxLength = 0;
    int left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        while (set.contains(s.charAt(right))) {
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```

----------

## Problem 57: Two Sum Problem

### Solution 1: Using HashMap

java

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[]{map.get(complement), i};
        }
        map.put(nums[i], i);
    }
    
    return new int[0];
}

// Usage
int[] nums = {2, 7, 11, 15};
int[] result = twoSum(nums, 9);
System.out.println(Arrays.toString(result)); // [0, 1]
```

### Solution 2: Using Streams (Less Efficient)

java

```java
public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = IntStream.range(0, nums.length)
        .boxed()
        .collect(Collectors.toMap(i -> nums[i], i -> i, (a, b) -> a));
    
    return IntStream.range(0, nums.length)
        .filter(i -> map.containsKey(target - nums[i]) && map.get(target - nums[i]) != i)
        .findFirst()
        .map(i -> new int[]{i, map.get(target - nums[i])})
        .orElse(new int[0]);
}
```

----------

## Problem 58: Valid Parentheses

### Solution 1: Using Stack

java

```java
public boolean isValid(String s) {
    Stack<Character> stack = new Stack<>();
    Map<Character, Character> pairs = Map.of(')', '(', '}', '{', ']', '[');
    
    for (char c : s.toCharArray()) {
        if (pairs.containsValue(c)) {
            stack.push(c);
        } else if (pairs.containsKey(c)) {
            if (stack.isEmpty() || stack.pop() != pairs.get(c)) {
                return false;
            }
        }
    }
    
    return stack.isEmpty();
}

// Usage
System.out.println(isValid("()")); // true
System.out.println(isValid("()[]{}")); // true
System.out.println(isValid("(]")); // false
```

### Solution 2: Using Deque

java

```java
public boolean isValid(String s) {
    Deque<Character> deque = new ArrayDeque<>();
    
    for (char c : s.toCharArray()) {
        if (c == '(') deque.push(')');
        else if (c == '{') deque.push('}');
        else if (c == '[') deque.push(']');
        else if (deque.isEmpty() || deque.pop() != c) return false;
    }
    
    return deque.isEmpty();
}
```

----------

## Problem 59: Merge K Sorted Lists

### Solution 1: Using PriorityQueue

java

```java
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    PriorityQueue<ListNode> pq = new PriorityQueue<>(
        (a, b) -> a.val - b.val
    );
    
    // Add first node of each list
    for (ListNode node : lists) {
        if (node != null) {
            pq.offer(node);
        }
    }
    
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (!pq.isEmpty()) {
        ListNode node = pq.poll();
        current.next = node;
        current = current.next;
        
        if (node.next != null) {
            pq.offer(node.next);
        }
    }
    
    return dummy.next;
}
```

### Solution 2: Merge Two at a Time

java

```java
public ListNode mergeKLists(ListNode[] lists) {
    if (lists == null || lists.length == 0) return null;
    
    ListNode result = lists[0];
    for (int i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
}

private ListNode mergeTwoLists(ListNode l1, ListNode l2) {
    ListNode dummy = new ListNode(0);
    ListNode current = dummy;
    
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    current.next = (l1 != null) ? l1 : l2;
    return dummy.next;
}
```

----------

## Problem 60: Implement Iterator for Nested List

### Solution 1: Flatten in Constructor

java

```java
class NestedIterator implements Iterator<Integer> {
    private List<Integer> flatList = new ArrayList<>();
    private int index = 0;
    
    public NestedIterator(List<NestedInteger> nestedList) {
        flatten(nestedList);
    }
    
    private void flatten(List<NestedInteger> list) {
        for (NestedInteger ni : list) {
            if (ni.isInteger()) {
                flatList.add(ni.getInteger());
            } else {
                flatten(ni.getList());
            }
        }
    }
    
    @Override
    public Integer next() {
        return flatList.get(index++);
    }
    
    @Override
    public boolean hasNext() {
        return index < flatList.size();
    }
}
```

### Solution 2: Lazy Evaluation Using Stack

java

```java
class NestedIterator implements Iterator<Integer> {
    private Stack<NestedInteger> stack = new Stack<>();
    
    public NestedIterator(List<NestedInteger> nestedList) {
        for (int i = nestedList.size() - 1; i >= 0; i--) {
            stack.push(nestedList.get(i));
        }
    }
    
    @Override
    public Integer next() {
        return stack.pop().getInteger();
    }
    
    @Override
    public boolean hasNext() {
        while (!stack.isEmpty()) {
            NestedInteger top = stack.peek();
            if (top.isInteger()) {
                return true;
            }
            stack.pop();
            List<NestedInteger> list = top.getList();
            for (int i = list.size() - 1; i >= 0; i--) {
                stack.push(list.get(i));
            }
        }
        return false;
    }
}
```

----------

## Problem 61: Clone a Graph with HashMap

### Solution 1: DFS Approach

java

```java
class Node {
    public int val;
    public List<Node> neighbors;
    
    public Node(int val) {
        this.val = val;
        neighbors = new ArrayList<>();
    }
}

public Node cloneGraph(Node node) {
    if (node == null) return null;
    
    Map<Node, Node> visited = new HashMap<>();
    return dfs(node, visited);
}

private Node dfs(Node node, Map<Node, Node> visited) {
    if (visited.containsKey(node)) {
        return visited.get(node);
    }
    
    Node clone = new Node(node.val);
    visited.put(node, clone);
    
    for (Node neighbor : node.neighbors) {
        clone.neighbors.add(dfs(neighbor, visited));
    }
    
    return clone;
}
```

### Solution 2: BFS Approach

java

```java
public Node cloneGraph(Node node) {
    if (node == null) return null;
    
    Map<Node, Node> visited = new HashMap<>();
    Queue<Node> queue = new LinkedList<>();
    
    Node clone = new Node(node.val);
    visited.put(node, clone);
    queue.offer(node);
    
    while (!queue.isEmpty()) {
        Node current = queue.poll();
        
        for (Node neighbor : current.neighbors) {
            if (!visited.containsKey(neighbor)) {
                visited.put(neighbor, new Node(neighbor.val));
                queue.offer(neighbor);
            }
            visited.get(current).neighbors.add(visited.get(neighbor));
        }
    }
    
    return clone;
}
```

----------

## Problem 62: LFU Cache (Least Frequently Used)

### Solution 1: Using HashMap + TreeSet

java

```java
class LFUCache {
    private int capacity;
    private int minFreq;
    private Map<Integer, Integer> keyToVal;
    private Map<Integer, Integer> keyToFreq;
    private Map<Integer, LinkedHashSet<Integer>> freqToKeys;
    
    public LFUCache(int capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        keyToVal = new HashMap<>();
        keyToFreq = new HashMap<>();
        freqToKeys = new HashMap<>();
    }
    
    public int get(int key) {
        if (!keyToVal.containsKey(key)) return -1;
        
        increaseFreq(key);
        return keyToVal.get(key);
    }
    
    public void put(int key, int value) {
        if (capacity <= 0) return;
        
        if (keyToVal.containsKey(key)) {
            keyToVal.put(key, value);
            increaseFreq(key);
            return;
        }
        
        if (keyToVal.size() >= capacity) {
            evict();
        }
        
        keyToVal.put(key, value);
        keyToFreq.put(key, 1);
        freqToKeys.computeIfAbsent(1, k -> new LinkedHashSet<>()).add(key);
        minFreq = 1;
    }
    
    private void increaseFreq(int key) {
        int freq = keyToFreq.get(key);
        keyToFreq.put(key, freq + 1);
        
        freqToKeys.get(freq).remove(key);
        if (freq == minFreq && freqToKeys.get(freq).isEmpty()) {
            minFreq++;
        }
        
        freqToKeys.computeIfAbsent(freq + 1, k -> new LinkedHashSet<>()).add(key);
    }
    
    private void evict() {
        LinkedHashSet<Integer> keys = freqToKeys.get(minFreq);
        int keyToDelete = keys.iterator().next();
        keys.remove(keyToDelete);
        keyToVal.remove(keyToDelete);
        keyToFreq.remove(keyToDelete);
    }
}
```

----------

## Problem 63: Implement BlockingQueue

### Solution 1: Using wait() and notify()

java

```java
class MyBlockingQueue<T> {
    private Queue<T> queue = new LinkedList<>();
    private int capacity;
    
    public MyBlockingQueue(int capacity) {
        this.capacity = capacity;
    }
    
    public synchronized void put(T item) throws InterruptedException {
        while (queue.size() == capacity) {
            wait();
        }
        queue.add(item);
        notifyAll();
    }
    
    public synchronized T take() throws InterruptedException {
        while (queue.isEmpty()) {
            wait();
        }
        T item = queue.remove();
        notifyAll();
        return item;
    }
    
    public synchronized int size() {
        return queue.size();
    }
}
```

### Solution 2: Using Java's ArrayBlockingQueue

java

```java
BlockingQueue<Integer> queue = new ArrayBlockingQueue<>(10);

// Producer
new Thread(() -> {
    try {
        for (int i = 0; i < 100; i++) {
            queue.put(i);
            System.out.println("Produced: " + i);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();

// Consumer
new Thread(() -> {
    try {
        while (true) {
            Integer item = queue.take();
            System.out.println("Consumed: " + item);
        }
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}).start();
```

----------

## Problem 64: Find All Pairs with Given Sum

### Solution 1: Using HashMap

java

```java
public List<int[]> findPairs(int[] nums, int target) {
    List<int[]> result = new ArrayList<>();
    Map<Integer, Integer> map = new HashMap<>();
    
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            result.add(new int[]{map.get(complement), i});
        }
        map.put(nums[i], i);
    }
    
    return result;
}

// Usage
int[] nums = {2, 7, 11, 15, 3, 6};
List<int[]> pairs = findPairs(nums, 9);
pairs.forEach(pair -> System.out.println(Arrays.toString(pair)));
// [0, 1] -> 2+7=9
// [4, 5] -> 3+6=9
```

### Solution 2: Two Pointer Approach (Sorted Array)

java

```java
public List<List<Integer>> findPairs(int[] nums, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    
    int left = 0, right = nums.length - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            result.add(Arrays.asList(nums[left], nums[right]));
            left++;
            right--;
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return result;
}
```

### Solution 3: Using Streams

java

```java
public List<int[]> findPairs(int[] nums, int target) {
    Map<Integer, Integer> indexMap = IntStream.range(0, nums.length)
        .boxed()
        .collect(Collectors.toMap(i -> nums[i], i -> i, (a, b) -> a));
    
    return IntStream.range(0, nums.length)
        .filter(i -> {
            int complement = target - nums[i];
            return indexMap.containsKey(complement) && indexMap.get(complement) > i;
        })
        .mapToObj(i -> new int[]{i, indexMap.get(target - nums[i])})
        .collect(Collectors.toList());
}
```

----------

## Problem 65: Subarray Sum Equals K

### Solution 1: Using HashMap (Prefix Sum)

java

```java
public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixSumCount = new HashMap<>();
    prefixSumCount.put(0, 1);
    
    int sum = 0;
    int count = 0;
    
    for (int num : nums) {
        sum += num;
        if (prefixSumCount.containsKey(sum - k)) {
            count += prefixSumCount.get(sum - k);
        }
        prefixSumCount.put(sum, prefixSumCount.getOrDefault(sum, 0) + 1);
    }
    
    return count;
}

// Usage
int[] nums = {1, 1, 1};
System.out.println(subarraySum(nums, 2)); // 2 ([1,1] and [1,1])
```

### Solution 2: Brute Force (For Comparison)

java

```java
public int subarraySum(int[] nums, int k) {
    int count = 0;
    for (int i = 0; i < nums.length; i++) {
        int sum = 0;
        for (int j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
}
```

----------

## Problem 66: Top K Frequent Elements

### Solution 1: Using HashMap + PriorityQueue

java

```java
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> frequency = new HashMap<>();
    for (int num : nums) {
        frequency.put(num, frequency.getOrDefault(num, 0) + 1);
    }
    
    PriorityQueue<Map.Entry<Integer, Integer>> pq = new PriorityQueue<>(
        (a, b) -> b.getValue() - a.getValue()
    );
    
    pq.addAll(frequency.entrySet());
    
    int[] result = new int[k];
    for (int i = 0; i < k; i++) {
        result[i] = pq.poll().getKey();
    }
    
    return result;
}
```

### Solution 2: Using Streams

java

```java
public int[] topKFrequent(int[] nums, int k) {
    return Arrays.stream(nums)
        .boxed()
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
        .entrySet().stream()
        .sorted(Map.Entry.<Integer, Long>comparingByValue().reversed())
        .limit(k)
        .mapToInt(Map.Entry::getKey)
        .toArray();
}
```

### Solution 3: Using Bucket Sort (O(n) time)

java

```java
public int[] topKFrequent(int[] nums, int k) {
    Map<Integer, Integer> frequency = new HashMap<>();
    for (int num : nums) {
        frequency.put(num, frequency.getOrDefault(num, 0) + 1);
    }
    
    List<Integer>[] buckets = new List[nums.length + 1];
    for (int key : frequency.keySet()) {
        int freq = frequency.get(key);
        if (buckets[freq] == null) {
            buckets[freq] = new ArrayList<>();
        }
        buckets[freq].add(key);
    }
    
    int[] result = new int[k];
    int index = 0;
    
    for (int i = buckets.length - 1; i >= 0 && index < k; i--) {
        if (buckets[i] != null) {
            for (int num : buckets[i]) {
                result[index++] = num;
                if (index == k) break;
            }
        }
    }
    
    return result;
}
```

----------

## Problem 67: Word Pattern Matching

### Solution 1: Using Two HashMaps

java

```java
public boolean wordPattern(String pattern, String s) {
    String[] words = s.split(" ");
    if (pattern.length() != words.length) return false;
    
    Map<Character, String> charToWord = new HashMap<>();
    Map<String, Character> wordToChar = new HashMap<>();
    
    for (int i = 0; i < pattern.length(); i++) {
        char c = pattern.charAt(i);
        String word = words[i];
        
        if (charToWord.containsKey(c)) {
            if (!charToWord.get(c).equals(word)) {
                return false;
            }
        } else {
            charToWord.put(c, word);
        }
        
        if (wordToChar.containsKey(word)) {
            if (wordToChar.get(word) != c) {
                return false;
            }
        } else {
            wordToChar.put(word, c);
        }
    }
    
    return true;
}

// Usage
System.out.println(wordPattern("abba", "dog cat cat dog")); // true
System.out.println(wordPattern("abba", "dog cat cat fish")); // false
```

### Solution 2: Using Single Map with Index

java

```java
public boolean wordPattern(String pattern, String s) {
    String[] words = s.split(" ");
    if (pattern.length() != words.length) return false;
    
    Map<Object, Integer> map = new HashMap<>();
    
    for (int i = 0; i < pattern.length(); i++) {
        Integer charIndex = map.put(pattern.charAt(i), i);
        Integer wordIndex = map.put(words[i], i);
        
        if (!Objects.equals(charIndex, wordIndex)) {
            return false;
        }
    }
    
    return true;
}
```

----------

## Problem 68: Design a Data Structure with Insert, Delete, GetRandom in O(1)

### Solution 1: Using ArrayList + HashMap

java

```java
class RandomizedSet {
    private List<Integer> list;
    private Map<Integer, Integer> map; // value -> index
    private Random random;
    
    public RandomizedSet() {
        list = new ArrayList<>();
        map = new HashMap<>();
        random = new Random();
    }
    
    public boolean insert(int val) {
        if (map.containsKey(val)) return false;
        
        map.put(val, list.size());
        list.add(val);
        return true;
    }
    
    public boolean remove(int val) {
        if (!map.containsKey(val)) return false;
        
        int index = map.get(val);
        int lastElement = list.get(list.size() - 1);
        
        // Swap with last element
        list.set(index, lastElement);
        map.put(lastElement, index);
        
        // Remove last element
        list.remove(list.size() - 1);
        map.remove(val);
        
        return true;
    }
    
    public int getRandom() {
        return list.get(random.nextInt(list.size()));
    }
}
```

----------

## Problem 69: Find All Substrings of a String

### Solution 1: Traditional Approach

java

```java
public List<String> getAllSubstrings(String s) {
    List<String> substrings = new ArrayList<>();
    
    for (int i = 0; i < s.length(); i++) {
        for (int j = i + 1; j <= s.length(); j++) {
            substrings.add(s.substring(i, j));
        }
    }
    
    return substrings;
}

// Usage
System.out.println(getAllSubstrings("abc"));
// [a, ab, abc, b, bc, c]
```

### Solution 2: Using Streams

java

```java
public List<String> getAllSubstrings(String s) {
    return IntStream.range(0, s.length())
        .boxed()
        .flatMap(i -> IntStream.range(i + 1, s.length() + 1)
            .mapToObj(j -> s.substring(i, j)))
        .collect(Collectors.toList());
}
```

### Solution 3: Get Unique Substrings Only

java

```java
public Set<String> getUniqueSubstrings(String s) {
    return IntStream.range(0, s.length())
        .boxed()
        .flatMap(i -> IntStream.range(i + 1, s.length() + 1)
            .mapToObj(j -> s.substring(i, j)))
        .collect(Collectors.toSet());
}
```

----------

## Problem 70: Reverse Words in a String

### Solution 1: Using Split and Collections.reverse()

java

```java
public String reverseWords(String s) {
    List<String> words = new ArrayList<>(Arrays.asList(s.trim().split("\\s+")));
    Collections.reverse(words);
    return String.join(" ", words);
}

// Usage
System.out.println(reverseWords("the sky is blue")); // "blue is sky the"
```

### Solution 2: Using Streams

java

```java
public String reverseWords(String s) {
    return Arrays.stream(s.trim().split("\\s+"))
        .collect(Collectors.collectingAndThen(
            Collectors.toList(),
            list -> {
                Collections.reverse(list);
                return String.join(" ", list);
            }
        ));
}
```

### Solution 3: Manual Approach with StringBuilder

java

```java
public String reverseWords(String s) {
    String[] words = s.trim().split("\\s+");
    StringBuilder result = new StringBuilder();
    
    for (int i = words.length - 1; i >= 0; i--) {
        result.append(words[i]);
        if (i > 0) result.append(" ");
    }
    
    return result.toString();
}
```

### Solution 4: Reverse Each Character in Each Word

java

```java
public String reverseEachWord(String s) {
    return Arrays.stream(s.split(" "))
        .map(word -> new StringBuilder(word).reverse().toString())
        .collect(Collectors.joining(" "));
}

// Usage
System.out.println(reverseEachWord("hello world")); // "olleh dlrow"
```

----------

## Problem 71: Product of Array Except Self

### Solution 1: Using Left and Right Products

java

```java
public int[] productExceptSelf(int[] nums) {
    int n = nums.length;
    int[] result = new int[n];
    
    // Left products
    result[0] = 1;
    for (int i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    
    // Right products
    int right = 1;
    for (int i = n - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    
    return result;
}

// Usage
int[] nums = {1, 2, 3, 4};
System.out.println(Arrays.toString(productExceptSelf(nums))); // [24, 12, 8, 6]
```

### Solution 2: Using Streams (Less Efficient)

java

```java
public int[] productExceptSelf(int[] nums) {
    return IntStream.range(0, nums.length)
        .map(i -> IntStream.range(0, nums.length)
            .filter(j -> j != i)
            .map(j -> nums[j])
            .reduce(1, (a, b) -> a * b))
        .toArray();
}
```

----------

## Problem 72: Find Missing and Duplicate Numbers

### Solution 1: Using HashSet

java

```java
public int[] findErrorNums(int[] nums) {
    Set<Integer> set = new HashSet<>();
    int duplicate = -1;
    
    for (int num : nums) {
        if (set.contains(num)) {
            duplicate = num;
        }
        set.add(num);
    }
    
    int missing = -1;
    for (int i = 1; i <= nums.length; i++) {
        if (!set.contains(i)) {
            missing = i;
            break;
        }
    }
    
    return new int[]{duplicate, missing};
}
```

### Solution 2: Using Math (XOR)

java

```java
public int[] findErrorNums(int[] nums) {
    int n = nums.length;
    long expectedSum = (long) n * (n + 1) / 2;
    long actualSum = 0;
    long actualSumSquare = 0;
    long expectedSumSquare = (long) n * (n + 1) * (2 * n + 1) / 6;
    
    for (int num : nums) {
        actualSum += num;
        actualSumSquare += (long) num * num;
    }
    
    long diffSum = expectedSum - actualSum;
    long diffSumSquare = expectedSumSquare - actualSumSquare;
    
    int missing = (int) ((diffSum + diffSumSquare / diffSum) / 2);
    int duplicate = (int) (missing - diffSum);
    
    return new int[]{duplicate, missing};
}
```

### Solution 3: Using Frequency Map

java

```java
public int[] findErrorNums(int[] nums) {
    Map<Integer, Integer> frequency = Arrays.stream(nums)
        .boxed()
        .collect(Collectors.groupingBy(Function.identity(), 
            Collectors.collectingAndThen(Collectors.counting(), Long::intValue)));
    
    int duplicate = frequency.entrySet().stream()
        .filter(e -> e.getValue() == 2)
        .map(Map.Entry::getKey)
        .findFirst()
        .orElse(-1);
    
    int missing = IntStream.rangeClosed(1, nums.length)
        .filter(i -> !frequency.containsKey(i))
        .findFirst()
        .orElse(-1);
    
    return new int[]{duplicate, missing};
}
```

----------

## Problem 73: Longest Consecutive Sequence

### Solution 1: Using HashSet

java

```java
public int longestConsecutive(int[] nums) {
    Set<Integer> numSet = Arrays.stream(nums).boxed().collect(Collectors.toSet());
    int longest = 0;
    
    for (int num : numSet) {
        // Only start counting if it's the beginning of a sequence
        if (!numSet.contains(num - 1)) {
            int currentNum = num;
            int currentStreak = 1;
            
            while (numSet.contains(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }
            
            longest = Math.max(longest, currentStreak);
        }
    }
    
    return longest;
}

// Usage
int[] nums = {100, 4, 200, 1, 3, 2};
System.out.println(longestConsecutive(nums)); // 4 (sequence: 1,2,3,4)
```

### Solution 2: Using Sorting

java

```java
public int longestConsecutive(int[] nums) {
    if (nums.length == 0) return 0;
    
    Arrays.sort(nums);
    int longest = 1;
    int current = 1;
    
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) continue;
        
        if (nums[i] == nums[i - 1] + 1) {
            current++;
        } else {
            longest = Math.max(longest, current);
            current = 1;
        }
    }
    
    return Math.max(longest, current);
}
```

----------

## Problem 74: Evaluate Reverse Polish Notation

### Solution 1: Using Stack

java

```java
public int evalRPN(String[] tokens) {
    Stack<Integer> stack = new Stack<>();
    Set<String> operators = Set.of("+", "-", "*", "/");
    
    for (String token : tokens) {
        if (operators.contains(token)) {
            int b = stack.pop();
            int a = stack.pop();
            
            switch (token) {
                case "+": stack.push(a + b); break;
                case "-": stack.push(a - b); break;
                case "*": stack.push(a * b); break;
                case "/": stack.push(a / b); break;
            }
        } else {
            stack.push(Integer.parseInt(token));
        }
    }
    
    return stack.pop();
}

// Usage
String[] tokens = {"2", "1", "+", "3", "*"};
System.out.println(evalRPN(tokens)); // 9 ((2+1)*3)
```

### Solution 2: Using Deque

java

```java
public int evalRPN(String[] tokens) {
    Deque<Integer> deque = new ArrayDeque<>();
    
    for (String token : tokens) {
        if (token.matches("-?\\d+")) {
            deque.push(Integer.parseInt(token));
        } else {
            int b = deque.pop();
            int a = deque.pop();
            
            int result = switch (token) {
                case "+" -> a + b;
                case "-" -> a - b;
                case "*" -> a * b;
                case "/" -> a / b;
                default -> 0;
            };
            
            deque.push(result);
        }
    }
    
    return deque.pop();
}
```

----------

## Problem 75: Encode and Decode Strings

### Solution 1: Using Length Prefix

java

```java
class Codec {
    public String encode(List<String> strs) {
        StringBuilder sb = new StringBuilder();
        for (String str : strs) {
            sb.append(str.length()).append('#').append(str);
        }
        return sb.toString();
    }
    
    public List<String> decode(String s) {
        List<String> result = new ArrayList<>();
        int i = 0;
        
        while (i < s.length()) {
            int delimiterPos = s.indexOf('#', i);
            int length = Integer.parseInt(s.substring(i, delimiterPos));
            i = delimiterPos + 1;
            result.add(s.substring(i, i + length));
            i += length;
        }
        
        return result;
    }
}

// Usage
Codec codec = new Codec();
List<String> original = Arrays.asList("Hello", "World", "Java");
String encoded = codec.encode(original);
System.out.println(encoded); // "5#Hello5#World4#Java"
List<String> decoded = codec.decode(encoded);
System.out.println(decoded); // [Hello, World, Java]
```

### Solution 2: Using Base64 Encoding

java

```java
class Codec {
    public String encode(List<String> strs) {
        return strs.stream()
            .map(s -> Base64.getEncoder().encodeToString(s.getBytes()))
            .collect(Collectors.joining(","));
    }
    
    public List<String> decode(String s) {
        if (s.isEmpty()) return new ArrayList<>();
        
        return Arrays.stream(s.split(","))
            .map(encoded -> new String(Base64.getDecoder().decode(encoded)))
            .collect(Collectors.toList());
    }
}
```

----------

## Problem 76: Container With Most Water

### Solution 1: Two Pointer Approach

java

```java
public int maxArea(int[] height) {
    int left = 0, right = height.length - 1;
    int maxArea = 0;
    
    while (left < right) {
        int width = right - left;
        int h = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, width * h);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxArea;
}

// Usage
int[] height = {1, 8, 6, 2, 5, 4, 8, 3, 7};
System.out.println(maxArea(height)); // 49
```

----------

## Problem 78: Majority Element (Appears > n/2 times)

### Solution 1: Using HashMap

java

```java
public int majorityElement(int[] nums) {
    Map<Integer, Integer> frequency = new HashMap<>();
    int majority = nums.length / 2;
    
    for (int num : nums) {
        frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        if (frequency.get(num) > majority) {
            return num;
        }
    }
    
    return -1;
}
```

### Solution 2: Boyer-Moore Voting Algorithm (O(1) space)

java

```java
public int majorityElement(int[] nums) {
    int candidate = nums[0];
    int count = 1;
    
    for (int i = 1; i < nums.length; i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}
```

### Solution 3: Using Streams

java

```java
public int majorityElement(int[] nums) {
    return Arrays.stream(nums)
        .boxed()
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
        .entrySet().stream()
        .filter(e -> e.getValue() > nums.length / 2)
        .map(Map.Entry::getKey)
        .findFirst()
        .orElse(-1);
}
```

### Solution 4: Sorting (O(n log n))

java

```java
public int majorityElement(int[] nums) {
    Arrays.sort(nums);
    return nums[nums.length / 2];
}
```

----------

## Problem 79: Best Time to Buy and Sell Stock

### Solution 1: Single Pass (One Transaction)

java

```java
public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    
    for (int price : prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    
    return maxProfit;
}

// Usage
int[] prices = {7, 1, 5, 3, 6, 4};
System.out.println(maxProfit(prices)); // 5 (buy at 1, sell at 6)
```

### Solution 2: Multiple Transactions Allowed

java

```java
public int maxProfit(int[] prices) {
    int maxProfit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
}
```

### Solution 3: Using Streams (One Transaction)

java

```java
public int maxProfit(int[] prices) {
    class State {
        int minPrice;
        int maxProfit;
        
        State(int minPrice, int maxProfit) {
            this.minPrice = minPrice;
            this.maxProfit = maxProfit;
        }
    }
    
    State result = Arrays.stream(prices)
        .boxed()
        .reduce(new State(Integer.MAX_VALUE, 0),
            (state, price) -> new State(
                Math.min(state.minPrice, price),
                Math.max(state.maxProfit, price - state.minPrice)
            ),
            (s1, s2) -> s2);
    
    return result.maxProfit;
}
```

----------

## Problem 80: Convert Roman to Integer

### Solution 1: Using HashMap

java

```java
public int romanToInt(String s) {
    Map<Character, Integer> map = Map.of(
        'I', 1, 'V', 5, 'X', 10, 'L', 50,
        'C', 100, 'D', 500, 'M', 1000
    );
    
    int result = 0;
    
    for (int i = 0; i < s.length(); i++) {
        int current = map.get(s.charAt(i));
        int next = (i + 1 < s.length()) ? map.get(s.charAt(i + 1)) : 0;
        
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }
    
    return result;
}

// Usage
System.out.println(romanToInt("III")); // 3
System.out.println(romanToInt("LVIII")); // 58
System.out.println(romanToInt("MCMXCIV")); // 1994
```

### Solution 2: Using Switch Statement

java

```java
public int romanToInt(String s) {
    int result = 0;
    int prevValue = 0;
    
    for (int i = s.length() - 1; i >= 0; i--) {
        int value = switch (s.charAt(i)) {
            case 'I' -> 1;
            case 'V' -> 5;
            case 'X' -> 10;
            case 'L' -> 50;
            case 'C' -> 100;
            case 'D' -> 500;
            case 'M' -> 1000;
            default -> 0;
        };
        
        if (value < prevValue) {
            result -= value;
        } else {
            result += value;
        }
        
        prevValue = value;
    }
    
    return result;
}
```

----------

## Problem 81: Palindrome Permutation

### Solution 1: Using HashMap

java

```java
public boolean canPermutePalindrome(String s) {
    Map<Character, Integer> frequency = new HashMap<>();
    
    for (char c : s.toCharArray()) {
        frequency.put(c, frequency.getOrDefault(c, 0) + 1);
    }
    
    int oddCount = 0;
    for (int count : frequency.values()) {
        if (count % 2 != 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    
    return true;
}

// Usage
System.out.println(canPermutePalindrome("code")); // false
System.out.println(canPermutePalindrome("aab")); // true (aba)
System.out.println(canPermutePalindrome("carerac")); // true (racecar)
```

### Solution 2: Using Set

java

```java
public boolean canPermutePalindrome(String s) {
    Set<Character> set = new HashSet<>();
    
    for (char c : s.toCharArray()) {
        if (!set.add(c)) {
            set.remove(c);
        }
    }
    
    return set.size() <= 1;
}
```

### Solution 3: Using Streams

java

```java
public boolean canPermutePalindrome(String s) {
    long oddCount = s.chars()
        .mapToObj(c -> (char) c)
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
        .values().stream()
        .filter(count -> count % 2 != 0)
        .count();
    
    return oddCount <= 1;
}
```

----------

## Problem 82: Isomorphic Strings

### Solution 1: Using Two HashMaps

java

```java
public boolean isIsomorphic(String s, String t) {
    if (s.length() != t.length()) return false;
    
    Map<Character, Character> mapS = new HashMap<>();
    Map<Character, Character> mapT = new HashMap<>();
    
    for (int i = 0; i < s.length(); i++) {
        char c1 = s.charAt(i);
        char c2 = t.charAt(i);
        
        if (mapS.containsKey(c1)) {
            if (mapS.get(c1) != c2) return false;
        } else {
            mapS.put(c1, c2);
        }
        
        if (mapT.containsKey(c2)) {
            if (mapT.get(c2) != c1) return false;
        } else {
            mapT.put(c2, c1);
        }
    }
    
    return true;
}

// Usage
System.out.println(isIsomorphic("egg", "add")); // true
System.out.println(isIsomorphic("foo", "bar")); // false
System.out.println(isIsomorphic("paper", "title")); // true
```

### Solution 2: Using Arrays (For ASCII characters)

java

```java
public boolean isIsomorphic(String s, String t) {
    int[] mapS = new int[256];
    int[] mapT = new int[256];
    
    for (int i = 0; i < s.length(); i++) {
        char c1 = s.charAt(i);
        char c2 = t.charAt(i);
        
        if (mapS[c1] != mapT[c2]) {
            return false;
        }
        
        mapS[c1] = i + 1;
        mapT[c2] = i + 1;
    }
    
    return true;
}
```

----------

## Problem 83: Shuffle an Array

### Solution 1: Fisher-Yates Shuffle

java

```java
class Solution {
    private int[] original;
    private Random random;
    
    public Solution(int[] nums) {
        original = nums.clone();
        random = new Random();
    }
    
    public int[] reset() {
        return original.clone();
    }
    
    public int[] shuffle() {
        int[] shuffled = original.clone();
        
        for (int i = shuffled.length - 1; i > 0; i--) {
            int j = random.nextInt(i + 1);
            int temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        
        return shuffled;
    }
}
```

### Solution 2: Using Collections.shuffle()

java

```java
class Solution {
    private int[] original;
    
    public Solution(int[] nums) {
        original = nums.clone();
    }
    
    public int[] reset() {
        return original.clone();
    }
    
    public int[] shuffle() {
        List<Integer> list = Arrays.stream(original)
            .boxed()
            .collect(Collectors.toList());
        
        Collections.shuffle(list);
        
        return list.stream()
            .mapToInt(Integer::intValue)
            .toArray();
    }
}
```

----------

## Problem 84: Kth Smallest Element in BST

### Solution 1: Inorder Traversal with Counter

java

```java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public int kthSmallest(TreeNode root, int k) {
    Stack<TreeNode> stack = new Stack<>();
    TreeNode current = root;
    int count = 0;
    
    while (current != null || !stack.isEmpty()) {
        while (current != null) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        count++;
        
        if (count == k) {
            return current.val;
        }
        
        current = current.right;
    }
    
    return -1;
}
```

### Solution 2: Recursive Inorder

java

```java
public int kthSmallest(TreeNode root, int k) {
    List<Integer> inorder = new ArrayList<>();
    inorderTraversal(root, inorder);
    return inorder.get(k - 1);
}

private void inorderTraversal(TreeNode node, List<Integer> result) {
    if (node == null) return;
    
    inorderTraversal(node.left, result);
    result.add(node.val);
    inorderTraversal(node.right, result);
}
```

----------

## Problem 85: Serialize and Deserialize Binary Tree

### Solution 1: Using Queue (Level Order)

java

```java
public class Codec {
    public String serialize(TreeNode root) {
        if (root == null) return "";
        
        StringBuilder sb = new StringBuilder();
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            
            if (node == null) {
                sb.append("null,");
            } else {
                sb.append(node.val).append(",");
                queue.offer(node.left);
                queue.offer(node.right);
            }
        }
        
        return sb.toString();
    }
    
    public TreeNode deserialize(String data) {
        if (data.isEmpty()) return null;
        
        String[] values = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(values[0]));
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        int i = 1;
        while (!queue.isEmpty() && i < values.length) {
            TreeNode node = queue.poll();
            
            if (!values[i].equals("null")) {
                node.left = new TreeNode(Integer.parseInt(values[i]));
                queue.offer(node.left);
            }
            i++;
            
            if (i < values.length && !values[i].equals("null")) {
                node.right = new TreeNode(Integer.parseInt(values[i]));
                queue.offer(node.right);
            }
            i++;
        }
        
        return root;
    }
}
```

----------

## Problem 86: Design Twitter Feed

### Solution 1: Basic Implementation

java

```java
class Twitter {
    private Map<Integer, Set<Integer>> followers;
    private List<Tweet> tweets;
    private int timestamp;
    
    class Tweet {
        int userId;
        int tweetId;
        int time;
        
        Tweet(int userId, int tweetId, int time) {
            this.userId = userId;
            this.tweetId = tweetId;
            this.time = time;
        }
    }
    
    public Twitter() {
        followers = new HashMap<>();
        tweets = new ArrayList<>();
        timestamp = 0;
    }
    
    public void postTweet(int userId, int tweetId) {
        tweets.add(new Tweet(userId, tweetId, timestamp++));
    }
    
    public List<Integer> getNewsFeed(int userId) {
        Set<Integer> following = followers.getOrDefault(userId, new HashSet<>());
        following.add(userId); // User follows themselves
        
        return tweets.stream()
            .filter(tweet -> following.contains(tweet.userId))
            .sorted(Comparator.comparingInt(t -> -t.time))
            .limit(10)
            .map(tweet -> tweet.tweetId)
            .collect(Collectors.toList());
    }
    
    public void follow(int followerId, int followeeId) {
        followers.computeIfAbsent(followerId, k -> new HashSet<>()).add(followeeId);
    }
    
    public void unfollow(int followerId, int followeeId) {
        Set<Integer> following = followers.get(followerId);
        if (following != null) {
            following.remove(followeeId);
        }
    }
}
```

----------

## Problem 87: Group Shifted Strings

### Solution 1: Using HashMap with Pattern

java

```java
public List<List<String>> groupStrings(String[] strings) {
    Map<String, List<String>> groups = new HashMap<>();
    
    for (String s : strings) {
        String pattern = getPattern(s);
        groups.computeIfAbsent(pattern, k -> new ArrayList<>()).add(s);
    }
    
    return new ArrayList<>(groups.values());
}

private String getPattern(String s) {
    StringBuilder pattern = new StringBuilder();
    
    for (int i = 1; i < s.length(); i++) {
        int diff = s.charAt(i) - s.charAt(i - 1);
        if (diff < 0) diff += 26;
        pattern.append(diff).append(",");
    }
    
    return pattern.toString();
}

// Usage
String[] strings = {"abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"};
System.out.println(groupStrings(strings));
// [[abc, bcd, xyz], [acef], [az, ba], [a, z]]
```

----------

## Problem 88: Range Sum Query - Immutable

### Solution 1: Prefix Sum Array

java

```java
class NumArray {
    private int[] prefixSum;
    
    public NumArray(int[] nums) {
        prefixSum = new int[nums.length + 1];
        for (int i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
    }
    
    public int sumRange(int left, int right) {
        return prefixSum[right + 1] - prefixSum[left];
    }
}

// Usage
NumArray numArray = new NumArray(new int[]{-2, 0, 3, -5, 2, -1});
System.out.println(numArray.sumRange(0, 2)); // 1
System.out.println(numArray.sumRange(2, 5)); // -1
```

----------

## Problem 89: Logger Rate Limiter

### Solution 1: Using HashMap

java

```java
class Logger {
    private Map<String, Integer> messageTimestamps;
    
    public Logger() {
        messageTimestamps = new HashMap<>();
    }
    
    public boolean shouldPrintMessage(int timestamp, String message) {
        if (!messageTimestamps.containsKey(message)) {
            messageTimestamps.put(message, timestamp);
            return true;
        }
        
        int lastTimestamp = messageTimestamps.get(message);
        if (timestamp - lastTimestamp >= 10) {
            messageTimestamps.put(message, timestamp);
            return true;
        }
        
        return false;
    }
}

// Usage
Logger logger = new Logger();
System.out.println(logger.shouldPrintMessage(1, "foo")); // true
System.out.println(logger.shouldPrintMessage(2, "bar")); // true
System.out.println(logger.shouldPrintMessage(3, "foo")); // false
System.out.println(logger.shouldPrintMessage(11, "foo")); // true
```

----------

## Problem 90: Design Hit Counter

### Solution 1: Using Queue

java

```java
class HitCounter {
    private Queue<Integer> hits;
    
    public HitCounter() {
        hits = new LinkedList<>();
    }
    
    public void hit(int timestamp) {
        hits.offer(timestamp);
    }
    
    public int getHits(int timestamp) {
        while (!hits.isEmpty() && timestamp - hits.peek() >= 300) {
            hits.poll();
        }
        return hits.size();
    }
}
```

### Solution 2: Using Array (Circular Buffer)

java

```java
class HitCounter {
    private int[] times;
    private int[] hits;
    
    public HitCounter() {
        times = new int[300];
        hits = new int[300];
    }
    
    public void hit(int timestamp) {
        int idx = timestamp % 300;
        if (times[idx] != timestamp) {
            times[idx] = timestamp;
            hits[idx] = 1;
        } else {
            hits[idx]++;
        }
    }
    
    public int getHits(int timestamp) {
        int total = 0;
        for (int i = 0; i < 300; i++) {
            if (timestamp - times[i] < 300) {
                total += hits[i];
            }
        }
        return total;
    }
}
```
