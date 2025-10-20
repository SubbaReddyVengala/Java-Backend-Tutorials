
# Java Arrays: Complete Technical Tutorial

## 1. What is an Array?

An array is a  **container object**  that holds a  **fixed number**  of values of a  **single type**. Think of it like a row of lockers in a school - each locker has a number (index) and can store one item.

### Real-World Analogy

Imagine a  **parking lot with numbered spaces**:

-   The parking lot = Array
-   Each parking space = Array element
-   Space numbers (0, 1, 2...) = Indices
-   Cars = Data stored in array
-   Total spaces = Array length (fixed at creation)

## 2. Array Characteristics
<img width="825" height="248" alt="image" src="https://github.com/user-attachments/assets/ab0fe50c-8fac-4ab9-a981-7a4dd80e8653" />

## 3. Memory Visualization

### Primitive Array Memory Layout

```
int[] numbers = {10, 20, 30, 40, 50};

STACK MEMORY:                    HEAP MEMORY:
+------------------+            +-------------------------+
| numbers (ref)    |  -------->  | [0]: 10  (4 bytes)     |
| 0x1A2B (address) |            | [1]: 20  (4 bytes)     |
+------------------+            | [2]: 30  (4 bytes)     |
                                | [3]: 40  (4 bytes)     |
                                | [4]: 50  (4 bytes)     |
                                | length: 5              |
                                +-------------------------+
                                Contiguous memory block
```

### Object Array Memory Layout

```
String[] names = {"Alice", "Bob", "Charlie"};

STACK:                      HEAP (Array):                HEAP (String Objects):
+-------------+            +----------------+           +-------------------+
| names (ref) | -------->  | [0]: 0x5A1    | -------->  | "Alice"          |
| 0x2C3D      |            | [1]: 0x5B2    | -------->  | "Bob"            |
+-------------+            | [2]: 0x5C3    | -------->  | "Charlie"        |
                           | length: 3      |            +-------------------+
                           +----------------+
```

**Key Points:**

-   Primitive arrays store actual values in contiguous memory
-   Object arrays store references (memory addresses) to objects
-   Array reference itself is stored on the stack
-   Array object is stored on the heap

## 4. Array Declaration and Initialization

### Method 1: Declare and Initialize Separately

java

```java
// Declaration
int[] scores;           // Preferred style
int grades[];          // Also valid (C-style)

// Initialization
scores = new int[5];   // Creates array of 5 integers (default: 0)
```

### Method 2: Declare and Initialize Together

java

```java
int[] scores = new int[5];
double[] prices = new double[10];
String[] cities = new String[3];
```

### Method 3: Array Literal (Initialize with Values)

java

```java
int[] numbers = {10, 20, 30, 40, 50};
String[] fruits = {"Apple", "Banana", "Orange"};
char[] vowels = {'a', 'e', 'i', 'o', 'u'};
```

### Method 4: Anonymous Array

java

```java
printArray(new int[] {1, 2, 3, 4, 5});  // Create and pass directly
```

## 5. Default Values

When you create an array with  `new`, elements are initialized to default values:
<img width="807" height="245" alt="image" src="https://github.com/user-attachments/assets/57c5c2cf-f3f2-4c3f-966e-2e7f199a80d6" />

java

```java
int[] numbers = new int[3];       // {0, 0, 0}
boolean[] flags = new boolean[2]; // {false, false}
String[] names = new String[2];   // {null, null}
```

## 6. Accessing and Modifying Elements

java

```java
int[] scores = {85, 90, 78, 92, 88};

// Accessing elements (READ)
int firstScore = scores[0];    // 85
int thirdScore = scores[2];    // 78

// Modifying elements (WRITE)
scores[1] = 95;                // Changes 90 to 95
scores[4] = scores[0] + 10;    // Changes 88 to 95

// Array length
int totalStudents = scores.length;  // 5 (property, not method!)
```

## 7. Simple Examples

### Example 1: Student Scores System

java

```java
public class StudentScores {
    public static void main(String[] args) {
        // Store scores of 5 students
        int[] scores = {85, 92, 78, 90, 88};
        
        // Calculate total
        int total = 0;
        for (int i = 0; i < scores.length; i++) {
            total += scores[i];
        }
        
        // Calculate average
        double average = (double) total / scores.length;
        
        System.out.println("Total Score: " + total);       // 433
        System.out.println("Average: " + average);         // 86.6
        
        // Find highest score
        int highest = scores[0];
        for (int i = 1; i < scores.length; i++) {
            if (scores[i] > highest) {
                highest = scores[i];
            }
        }
        System.out.println("Highest Score: " + highest);   // 92
    }
}
```

### Example 2: Reversing an Array

java

```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50};
        
        System.out.println("Original Array:");
        printArray(numbers);
        
        // Reverse using two pointers
        int left = 0;
        int right = numbers.length - 1;
        
        while (left < right) {
            // Swap elements
            int temp = numbers[left];
            numbers[left] = numbers[right];
            numbers[right] = temp;
            
            left++;
            right--;
        }
        
        System.out.println("Reversed Array:");
        printArray(numbers);  // 50, 40, 30, 20, 10
    }
    
    static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```

### Example 3: Finding Element in Array

java

```java
public class SearchArray {
    public static void main(String[] args) {
        String[] fruits = {"Apple", "Banana", "Orange", "Mango", "Grapes"};
        String searchItem = "Orange";
        
        int position = findElement(fruits, searchItem);
        
        if (position != -1) {
            System.out.println(searchItem + " found at index: " + position);
        } else {
            System.out.println(searchItem + " not found!");
        }
    }
    
    static int findElement(String[] arr, String target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i].equals(target)) {
                return i;  // Return index if found
            }
        }
        return -1;  // Return -1 if not found
    }
}
```

## 8. Array Traversal Techniques

### Using for loop (Traditional)

java

```java
int[] numbers = {10, 20, 30, 40, 50};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("Index " + i + ": " + numbers[i]);
}
```

### Using enhanced for loop (for-each)

java

```java
for (int num : numbers) {
    System.out.println(num);
}
// Note: Cannot modify array or access index with enhanced for loop
```

### Backward traversal

java

```java
for (int i = numbers.length - 1; i >= 0; i--) {
    System.out.println(numbers[i]);
}
```

## 9. Common Mistakes and Pitfalls

### 1. ArrayIndexOutOfBoundsException

java

```java
int[] arr = {10, 20, 30};

System.out.println(arr[3]);  // ERROR! Valid indices: 0, 1, 2
System.out.println(arr[-1]); // ERROR! Negative index
```

### 2. NullPointerException

java

```java
String[] names = new String[3];  // {null, null, null}
System.out.println(names[0].length());  // ERROR! names[0] is null
```

### 3. Confusing length with length()

java

```java
int[] arr = {1, 2, 3};
String str = "Hello";

int arraySize = arr.length;      // Correct (property)
int stringSize = str.length();   // Correct (method)

// int x = arr.length();  // ERROR! Arrays don't have length() method
```

## 10. Multidimensional Arrays

### 2D Array (Matrix)

java

```java
// Declaration and initialization
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Accessing elements
int element = matrix[1][2];  // 6 (row 1, column 2)

// Traversal
for (int i = 0; i < matrix.length; i++) {           // rows
    for (int j = 0; j < matrix[i].length; j++) {    // columns
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}
```

### Memory Visualization (2D Array)

```
int[][] matrix = {{1,2}, {3,4}, {5,6}};

STACK:                  HEAP (Main Array):         HEAP (Sub-arrays):
+-----------+          +----------------+         +--------+
| matrix    |  ---->   | [0]: 0xA1     | ----->  | 1 | 2 |
| 0x100     |          | [1]: 0xA2     | ----->  | 3 | 4 |
+-----------+          | [2]: 0xA3     | ----->  | 5 | 6 |
                       +----------------+         +--------+
```

## 11. Arrays Utility Class

Java provides  `java.util.Arrays`  class with helpful methods:

java

```java
import java.util.Arrays;

int[] numbers = {5, 2, 8, 1, 9};

// Sorting
Arrays.sort(numbers);  // {1, 2, 5, 8, 9}

// Binary search (array must be sorted first)
int index = Arrays.binarySearch(numbers, 5);  // Returns index of 5

// Copying
int[] copy = Arrays.copyOf(numbers, numbers.length);

// Filling
int[] arr = new int[5];
Arrays.fill(arr, 10);  // {10, 10, 10, 10, 10}

// Converting to String
System.out.println(Arrays.toString(numbers));  // [1, 2, 5, 8, 9]

// Comparing
boolean equal = Arrays.equals(numbers, copy);  // true
```

## 12. Array vs ArrayList (Quick Comparison)

<img width="825" height="251" alt="image" src="https://github.com/user-attachments/assets/4a651591-8189-4d2f-b31b-d72268aa7cb2" />

## 13. Memory Considerations

### Size Calculation

java

```java
int[] arr = new int[100];
// Memory = 100 elements × 4 bytes (int) = 400 bytes
// Plus ~12-16 bytes for array object header
// Total ≈ 416 bytes
```

### Jagged Arrays (Non-rectangular)

java

```java
int[][] jagged = new int[3][];
jagged[0] = new int[2];  // First row: 2 elements
jagged[1] = new int[4];  // Second row: 4 elements
jagged[2] = new int[3];  // Third row: 3 elements

// This saves memory compared to rectangular array
```

## 14. Practice Problems

1.  **Easy**: Find the sum of all even numbers in an array
2.  **Easy**: Count how many times a number appears in an array
3.  **Medium**: Rotate array elements by k positions
4.  **Medium**: Find second largest element without sorting
5.  **Hard**: Merge two sorted arrays into one sorted array

## Key Takeaways

✅ Arrays are fixed-size, indexed collections of same-type elements  
✅ Indexing starts at 0 and goes to length-1  
✅ Arrays are objects stored in heap memory  
✅ Use  `length`  property (not method) to get array size  
✅ Watch out for  `ArrayIndexOutOfBoundsException`  
✅ Primitive arrays store values, object arrays store references  
✅ Use  `Arrays`  utility class for common operations

----------
