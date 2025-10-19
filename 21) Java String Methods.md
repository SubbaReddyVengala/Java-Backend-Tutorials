
# Java String Methods: Complete Reference Guide

## Table of Contents

1.  [String Creation & Inspection](#string-creation--inspection)
2.  [Character Access & Extraction](#character-access--extraction)
3.  [Search & Index Methods](#search--index-methods)
4.  [Modification Methods](#modification-methods)
5.  [Comparison Methods](#comparison-methods)
6.  [Splitting & Joining](#splitting--joining)
7.  [Trimming & Stripping](#trimming--stripping)
8.  [Checking Methods](#checking-methods)
9.  [Conversion Methods](#conversion-methods)
10.  [Advanced Methods (Java 11+)](#advanced-methods-java-11)

----------

## String Creation & Inspection

### 1. `length()` - Get String Length

java

```java
String str = "Hello World";
int len = str.length();  // Returns: 11

// Common use case
if (password.length() >= 8) {
    System.out.println("Password length valid");
}
```

**Time Complexity:** O(1)  
**Returns:** Number of characters in the string

### 2. `isEmpty()` - Check if Empty

java

```java
String str1 = "";
String str2 = "Hello";

System.out.println(str1.isEmpty());  // true
System.out.println(str2.isEmpty());  // false

// Equivalent to
System.out.println(str1.length() == 0);
```

**Use Case:** Validation before processing

java

```java
public void processInput(String input) {
    if (input == null || input.isEmpty()) {
        throw new IllegalArgumentException("Input cannot be empty");
    }
    // Process input
}
```

### 3. `isBlank()` - Check if Empty or Whitespace (Java 11+)

java

```java
String str1 = "";
String str2 = "   ";
String str3 = "Hello";

System.out.println(str1.isBlank());  // true
System.out.println(str2.isBlank());  // true (only whitespace)
System.out.println(str3.isBlank());  // false
```

**Difference from isEmpty():**

```
isEmpty()  → Checks if length == 0
isBlank()  → Checks if empty OR only whitespace

"" .isEmpty()    → true    |  "".isBlank()    → true
"   ".isEmpty()  → false   |  "   ".isBlank() → true
"Hi".isEmpty()   → false   |  "Hi".isBlank()  → false
```

----------

## Character Access & Extraction

### 4. `charAt(int index)` - Get Character at Index

java

```java
String str = "Hello";
char ch = str.charAt(0);  // 'H'
char ch2 = str.charAt(4); // 'o'

// Index out of bounds
// str.charAt(10);  // ❌ StringIndexOutOfBoundsException
```

**Practical Example - Character Counting:**

java

```java
public int countVowels(String str) {
    int count = 0;
    for (int i = 0; i < str.length(); i++) {
        char ch = str.charAt(i);
        if ("aeiouAEIOU".indexOf(ch) != -1) {
            count++;
        }
    }
    return count;
}
```

### 5. `substring(int beginIndex)` - Extract Substring

java

```java
String str = "Hello World";
String sub1 = str.substring(6);      // "World"
String sub2 = str.substring(0);      // "Hello World"
```

### 6. `substring(int beginIndex, int endIndex)` - Extract Range

java

```java
String str = "Hello World";
String sub = str.substring(0, 5);    // "Hello" (excludes index 5)
String sub2 = str.substring(6, 11);  // "World"

// Extract middle
String sub3 = str.substring(3, 8);   // "lo Wo"
```

**Memory Visualization:**

```
String: "Hello World"
Index:   0123456789(10)

substring(0, 5):
         ─────
         Hello

substring(6, 11):
               ─────
               World
```

**Common Use Case - Extract File Extension:**

java

```java
String filename = "document.pdf";
int dotIndex = filename.lastIndexOf('.');
String extension = filename.substring(dotIndex + 1);  // "pdf"
```

### 7. `toCharArray()` - Convert to Character Array

java

```java
String str = "Hello";
char[] chars = str.toCharArray();  // ['H', 'e', 'l', 'l', 'o']

// Useful for manipulation
for (int i = 0; i < chars.length; i++) {
    chars[i] = Character.toUpperCase(chars[i]);
}
String result = new String(chars);  // "HELLO"
```

----------

## Search & Index Methods

### 8. `indexOf(char ch)` - Find First Occurrence

java

```java
String str = "Hello World";
int index = str.indexOf('o');      // 4 (first 'o')
int notFound = str.indexOf('x');   // -1 (not found)
```

### 9. `indexOf(String str)` - Find Substring

java

```java
String str = "Hello World Hello";
int index = str.indexOf("World");   // 6
int index2 = str.indexOf("Hello");  // 0 (first occurrence)
```

### 10. `indexOf(String str, int fromIndex)` - Search from Position

java

```java
String str = "Hello World Hello";
int first = str.indexOf("Hello");        // 0
int second = str.indexOf("Hello", 1);    // 12 (starts search from index 1)
```

### 11. `lastIndexOf()` - Find Last Occurrence

java

```java
String str = "Hello World Hello";
int last = str.lastIndexOf("Hello");     // 12
int lastO = str.lastIndexOf('o');        // 14
```

**Practical Example - Extract Domain from Email:**

java

```java
String email = "user@example.com";
int atIndex = email.indexOf('@');
int dotIndex = email.lastIndexOf('.');

String domain = email.substring(atIndex + 1, dotIndex);  // "example"
```

### 12. `contains(CharSequence s)` - Check if Contains

java

```java
String str = "Hello World";
boolean hasWorld = str.contains("World");  // true
boolean hasJava = str.contains("Java");    // false

// Case-sensitive
str.contains("world");  // false
```

**Use Case - Filtering:**

java

```java
List<String> emails = Arrays.asList("user@gmail.com", "admin@yahoo.com");
List<String> gmailOnly = emails.stream()
    .filter(e -> e.contains("@gmail.com"))
    .collect(Collectors.toList());
```

----------

## Modification Methods

### 13. `concat(String str)` - Concatenate Strings

java

```java
String s1 = "Hello";
String s2 = " World";
String result = s1.concat(s2);  // "Hello World"

// Equivalent to
String result2 = s1 + s2;
```

**Note:** Creates new String (immutable)

java

```java
String original = "Hello";
original.concat(" World");
System.out.println(original);  // Still "Hello" (unchanged)
```

### 14. `replace(char oldChar, char newChar)` - Replace Characters

java

```java
String str = "Hello World";
String replaced = str.replace('o', '0');  // "Hell0 W0rld"
String replaced2 = str.replace('l', 'L'); // "HeLLo WorLd"
```

### 15. `replace(CharSequence target, CharSequence replacement)`

java

```java
String str = "Java is great. Java is powerful.";
String replaced = str.replace("Java", "Python");
// "Python is great. Python is powerful."

// Replace all occurrences
String phone = "123-456-7890";
String cleaned = phone.replace("-", "");  // "1234567890"
```

### 16. `replaceAll(String regex, String replacement)` - Regex Replace

java

```java
String str = "Hello123World456";
String result = str.replaceAll("\\d+", "#");  // "Hello#World#"

// Remove all non-alphabetic characters
String text = "Hello, World! 123";
String clean = text.replaceAll("[^a-zA-Z ]", "");  // "Hello World "
```

### 17. `replaceFirst(String regex, String replacement)`

java

```java
String str = "Hello World Hello";
String result = str.replaceFirst("Hello", "Hi");  // "Hi World Hello"
```

**Comparison Table:**

```
Method          | Replaces        | Uses Regex
----------------|-----------------|------------
replace()       | All occurrences | No
replaceAll()    | All occurrences | Yes
replaceFirst()  | First only      | Yes
```

### 18. `toLowerCase()` - Convert to Lowercase

java

```java
String str = "HELLO World";
String lower = str.toLowerCase();  // "hello world"

// Locale-specific
String turkish = "TITLE";
String tr = turkish.toLowerCase(Locale.forLanguageTag("tr"));
```

### 19. `toUpperCase()` - Convert to Uppercase

java

```java
String str = "hello world";
String upper = str.toUpperCase();  // "HELLO WORLD"
```

**Use Case - Case-Insensitive Comparison:**

java

```java
String input = "Hello";
if (input.toUpperCase().equals("HELLO")) {
    System.out.println("Match found!");
}

// Or use equalsIgnoreCase()
if (input.equalsIgnoreCase("hello")) {
    System.out.println("Match found!");
}
```

----------

## Comparison Methods

### 20. `equals(Object obj)` - Compare Content

java

```java
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

System.out.println(s1.equals(s2));   // true
System.out.println(s1.equals(s3));   // true
System.out.println(s1 == s2);        // true (same reference)
System.out.println(s1 == s3);        // false (different reference)
```

### 21. `equalsIgnoreCase(String str)` - Case-Insensitive Compare

java

```java
String s1 = "Hello";
String s2 = "HELLO";
String s3 = "hello";

System.out.println(s1.equalsIgnoreCase(s2));  // true
System.out.println(s1.equalsIgnoreCase(s3));  // true
```

### 22. `compareTo(String str)` - Lexicographical Comparison

java

```java
String s1 = "Apple";
String s2 = "Banana";
String s3 = "Apple";

System.out.println(s1.compareTo(s2));  // Negative (Apple < Banana)
System.out.println(s2.compareTo(s1));  // Positive (Banana > Apple)
System.out.println(s1.compareTo(s3));  // 0 (equal)
```

**Return Values:**

```
< 0  →  First string is less (comes before)
= 0  →  Strings are equal
> 0  →  First string is greater (comes after)
```

**Sorting Example:**

java

```java
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
Collections.sort(names);  // Uses compareTo() internally
System.out.println(names);  // [Alice, Bob, Charlie]
```

### 23. `compareToIgnoreCase(String str)` - Case-Insensitive Lexical

java

```java
String s1 = "apple";
String s2 = "BANANA";
System.out.println(s1.compareToIgnoreCase(s2));  // Negative
```

### 24. `contentEquals(CharSequence cs)` - Compare with CharSequence

java

```java
String str = "Hello";
StringBuilder sb = new StringBuilder("Hello");
StringBuffer sbf = new StringBuffer("Hello");

System.out.println(str.contentEquals(sb));   // true
System.out.println(str.contentEquals(sbf));  // true
```

----------

## Splitting & Joining

### 25. `split(String regex)` - Split into Array

java

```java
String str = "apple,banana,orange";
String[] fruits = str.split(",");
// ["apple", "banana", "orange"]

// With regex
String text = "one  two   three";  // Multiple spaces
String[] words = text.split("\\s+");  // ["one", "two", "three"]
```

### 26. `split(String regex, int limit)` - Limit Splits

java

```java
String str = "a,b,c,d,e";
String[] parts = str.split(",", 3);
// ["a", "b", "c,d,e"]  (splits into max 3 parts)
```

**Practical Example - Parse CSV:**

java

```java
String csvLine = "John,Doe,30,Engineer";
String[] fields = csvLine.split(",");
String firstName = fields[0];  // "John"
String lastName = fields[1];   // "Doe"
int age = Integer.parseInt(fields[2]);  // 30
```

### 27. `join(CharSequence delimiter, CharSequence... elements)` - Join Strings

java

```java
String result = String.join(", ", "apple", "banana", "orange");
// "apple, banana, orange"

// Join array
String[] fruits = {"apple", "banana", "orange"};
String joined = String.join(" | ", fruits);
// "apple | banana | orange"
```

**Use Case - Build SQL Query:**

java

```java
List<String> columns = Arrays.asList("name", "age", "email");
String query = "SELECT " + String.join(", ", columns) + " FROM users";
// "SELECT name, age, email FROM users"
```

----------

## Trimming & Stripping

### 28. `trim()` - Remove Leading/Trailing Whitespace

java

```java
String str = "   Hello World   ";
String trimmed = str.trim();  // "Hello World"

// Only removes ASCII whitespace
String unicode = "\u2000Hello\u2000";  // Unicode spaces
System.out.println(unicode.trim());  // Still has unicode spaces
```

### 29. `strip()` - Remove Unicode Whitespace (Java 11+)

java

```java
String str = "\u2000Hello World\u2000";
String stripped = str.strip();  // "Hello World" (removes unicode spaces)
```

### 30. `stripLeading()` - Remove Leading Whitespace (Java 11+)

java

```java
String str = "   Hello World   ";
String result = str.stripLeading();  // "Hello World   "
```

### 31. `stripTrailing()` - Remove Trailing Whitespace (Java 11+)

java

```java
String str = "   Hello World   ";
String result = str.stripTrailing();  // "   Hello World"
```

**Comparison Table:**

```
Method          | Removes         | Unicode Support
----------------|-----------------|----------------
trim()          | Both ends       | No (ASCII only)
strip()         | Both ends       | Yes
stripLeading()  | Start only      | Yes
stripTrailing() | End only        | Yes
```

----------

## Checking Methods

### 32. `startsWith(String prefix)` - Check Start

java

```java
String url = "https://example.com";
boolean isSecure = url.startsWith("https://");  // true
boolean isHttp = url.startsWith("http://");     // false
```

### 33. `startsWith(String prefix, int offset)` - Check Start from Position

java

```java
String str = "Hello World";
boolean check = str.startsWith("World", 6);  // true
```

### 34. `endsWith(String suffix)` - Check End

java

```java
String filename = "document.pdf";
boolean isPdf = filename.endsWith(".pdf");   // true
boolean isDoc = filename.endsWith(".docx");  // false

// File type validation
if (filename.endsWith(".jpg") || filename.endsWith(".png")) {
    System.out.println("Valid image file");
}
```

### 35. `matches(String regex)` - Check if Matches Regex

java

```java
String email = "user@example.com";
boolean isValid = email.matches("^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$");

// Phone number validation
String phone = "123-456-7890";
boolean validPhone = phone.matches("\\d{3}-\\d{3}-\\d{4}");  // true
```

----------

## Conversion Methods

### 36. `valueOf()` - Convert to String (Static)

java

```java
// Primitive to String
String s1 = String.valueOf(123);        // "123"
String s2 = String.valueOf(45.67);      // "45.67"
String s3 = String.valueOf(true);       // "true"
String s4 = String.valueOf('A');        // "A"

// Object to String
Object obj = new User("John");
String s5 = String.valueOf(obj);        // Calls obj.toString()

// Null-safe
String s6 = String.valueOf(null);       // "null" (not NullPointerException)
```

### 37. `format()` - Formatted String (Static)

java

```java
String name = "John";
int age = 30;
String formatted = String.format("Name: %s, Age: %d", name, age);
// "Name: John, Age: 30"

// Number formatting
double price = 1234.567;
String priceStr = String.format("$%.2f", price);  // "$1234.57"

// Padding
String padded = String.format("%10s", "Hi");  // "        Hi"
String leftPad = String.format("%-10s", "Hi"); // "Hi        "
```

**Format Specifiers:**

```
%s  → String
%d  → Integer
%f  → Float/Double
%b  → Boolean
%c  → Character
%n  → Newline (platform-independent)

%.2f  → 2 decimal places
%10s  → Right-align in 10 chars
%-10s → Left-align in 10 chars
%,d   → Thousand separator (1,234)
```

### 38. `getBytes()` - Convert to Byte Array

java

```java
String str = "Hello";
byte[] bytes = str.getBytes();  // Default charset

// Specific charset
byte[] utf8Bytes = str.getBytes(StandardCharsets.UTF_8);
byte[] utf16Bytes = str.getBytes(StandardCharsets.UTF_16);
```

### 39. `intern()` - Add to String Pool

java

```java
String s1 = new String("Hello");  // Heap
String s2 = s1.intern();          // Pool

String s3 = "Hello";              // Pool
System.out.println(s2 == s3);     // true (same pool reference)
```

----------

## Advanced Methods (Java 11+)

### 40. `repeat(int count)` - Repeat String (Java 11+)

java

```java
String str = "Ha";
String repeated = str.repeat(3);  // "HaHaHa"

// Create separator line
String separator = "-".repeat(50);  // "--------------------------------------------------"

// Indentation
String indent = " ".repeat(4);
```

### 41. `lines()` - Stream of Lines (Java 11+)

java

```java
String multiline = "Line 1\nLine 2\nLine 3";
multiline.lines()
    .forEach(System.out::println);

// Count non-empty lines
long count = multiline.lines()
    .filter(line -> !line.isBlank())
    .count();
```

### 42. `indent(int n)` - Add Indentation (Java 12+)

java

```java
String str = "Hello\nWorld";
String indented = str.indent(4);
/*
    Hello
    World
*/
```

### 43. `transform(Function<String, R>)` - Apply Function (Java 12+)

java

```java
String result = "hello"
    .transform(String::toUpperCase)
    .transform(s -> s + "!!!");
// "HELLO!!!"

// Custom transformation
String email = "USER@EXAMPLE.COM"
    .transform(s -> s.toLowerCase())
    .transform(s -> s.replace("example", "test"));
// "user@test.com"
```

----------

## Method Chaining Examples

### Example 1: Clean and Validate Input

java

```java
public boolean isValidUsername(String input) {
    return input != null 
        && !input.isBlank()
        && input.trim()
               .toLowerCase()
               .matches("^[a-z0-9_]{3,20}$");
}
```

### Example 2: Format Phone Number

java

```java
public String formatPhone(String phone) {
    return phone.replaceAll("[^0-9]", "")  // Remove non-digits
                .replaceFirst("(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3");
}

// Usage
String formatted = formatPhone("1234567890");  // "(123) 456-7890"
```

### Example 3: Extract and Validate Email Domain

java

```java
public boolean isValidDomain(String email) {
    int atIndex = email.indexOf('@');
    if (atIndex == -1) return false;
    
    String domain = email.substring(atIndex + 1)
                         .toLowerCase()
                         .trim();
    
    return domain.matches("^[a-z0-9.-]+\\.[a-z]{2,}$");
}
```

----------

## Performance Tips

### ✅ Do's

java

```java
// 1. Use StringBuilder for concatenation in loops
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    sb.append(i);
}
String result = sb.toString();

// 2. Use equals() for content comparison
if (str1.equals(str2)) { ... }

// 3. Cache length in loops
int len = str.length();
for (int i = 0; i < len; i++) { ... }

// 4. Use String.join() for multiple concatenations
String result = String.join(", ", list);
```

### ❌ Don'ts

java

```java
// 1. Don't concatenate in loops
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i;  // Creates 1000 String objects!
}

// 2. Don't use == for content comparison
if (str1 == str2) { ... }  // Compares references!

// 3. Don't call length() repeatedly in loops
for (int i = 0; i < str.length(); i++) {  // length() called 1000 times
    // Process
}

// 4. Don't create unnecessary String objects
String s = new String("Hello");  // Unnecessary
String s = "Hello";              // Better
```

----------

## Quick Reference Table
<img width="816" height="512" alt="image" src="https://github.com/user-attachments/assets/e845af7e-b78b-41ac-857c-04cb286b795f" />
----------

## Common Patterns & Best Practices

### 1. Null-Safe String Operations

java

```java
// ❌ Unsafe
if (str.equals("Hello")) { ... }  // NullPointerException if str is null

// ✅ Safe
if ("Hello".equals(str)) { ... }  // Returns false if str is null

// ✅ Or use Objects
if (Objects.equals(str, "Hello")) { ... }
```

### 2. Case-Insensitive Contains

java

```java
String text = "Hello World";
String search = "WORLD";

// ✅ Convert both to same case
boolean contains = text.toLowerCase().contains(search.toLowerCase());
```

### 3. Safe Substring

java

```java
// ❌ Can throw StringIndexOutOfBoundsException
String sub = str.substring(10, 20);

// ✅ Safe
String sub = str.length() >= 20 ? str.substring(10, 20) : str;
```

### 4. Multiple Replacements

java

```java
// Chain replaces
String cleaned = str.replace("a", "A")
                   .replace("b", "B")
                   .replace("c", "C");

// Or use regex for multiple
String cleaned = str.replaceAll("[abc]", "*");
```

----------

## Interview Questions & Answers

### Q1: What's the difference between `equals()` and `==`?

**Answer:** `==` compares references (memory addresses), while `equals()` compares content.

### Q2: Why use `StringBuilder` over `String` concatenation?

**Answer:** String is immutable. Each concatenation creates a new object. StringBuilder modifies a single mutable buffer, making it O(n) instead of O(n²) for n concatenations.

### Q3: What does `intern()` do?

**Answer:** Adds the string to the String Pool and returns the pooled reference, enabling memory optimization through object sharing.

### Q4: Difference between `trim()` and `strip()`?

**Answer:** `trim()` removes only ASCII whitespace (≤ U+0020). `strip()` removes all Unicode whitespace characters.

### Q5: Is `String.format()` efficient?

**Answer:** No, it's slower than concatenation for simple cases due to parsing overhead. Use for complex formatting only.

----------

## Conclusion

Master these String methods to:

-   Write cleaner, more readable code
-   Avoid common pitfalls and bugs
-   Optimize performance
-   Excel in coding interviews

**Remember:** Strings are immutable—every "modification" creates a new String object!
