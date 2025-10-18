# Decision Making Statements in Java
Decision making statements allow your program to execute different code blocks based on conditions. Java provides several constructs for this purpose.

## 1. **if Statement**

Executes a block of code if a condition is true.

**Syntax:**

java

```java
if (condition) {
    // code to execute if condition is true
}
```

**Example:**

java

```java
int age = 18;

if (age >= 18) {
    System.out.println("You are eligible to vote");
}
```

## 2. **if-else Statement**

Executes one block if condition is true, another if false.

**Syntax:**

java

```java
if (condition) {
    // code if condition is true
} else {
    // code if condition is false
}
```

**Example:**

java

```java
int number = 7;

if (number % 2 == 0) {
    System.out.println(number + " is even");
} else {
    System.out.println(number + " is odd");
}
```

## 3. **if-else-if Ladder**

Tests multiple conditions sequentially.

**Syntax:**

java

```java
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else if (condition3) {
    // code if condition3 is true
} else {
    // code if all conditions are false
}
```

**Example:**

java

```java
int marks = 75;

if (marks >= 90) {
    System.out.println("Grade: A+");
} else if (marks >= 80) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: B");
} else if (marks >= 60) {
    System.out.println("Grade: C");
} else {
    System.out.println("Grade: F");
}
```

## 4. **Nested if Statement**

An if statement inside another if statement.

**Example:**

java

```java
int age = 25;
boolean hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        System.out.println("You can drive");
    } else {
        System.out.println("You need a license");
    }
} else {
    System.out.println("You are too young to drive");
}
```

## 5. **switch Statement**

Selects one of many code blocks to execute based on a variable's value.

**Syntax:**

java

```java
switch (expression) {
    case value1:
        // code block
        break;
    case value2:
        // code block
        break;
    default:
        // code if no case matches
}
```

**Example:**

java

```java
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

System.out.println(dayName);  // Output: Wednesday
```

### Switch with String:

java

```java
String month = "January";

switch (month) {
    case "December":
    case "January":
    case "February":
        System.out.println("Winter");
        break;
    case "March":
    case "April":
    case "May":
        System.out.println("Spring");
        break;
    case "June":
    case "July":
    case "August":
        System.out.println("Summer");
        break;
    case "September":
    case "October":
    case "November":
        System.out.println("Fall");
        break;
    default:
        System.out.println("Invalid month");
}
```

## 6. **Enhanced Switch (Java 12+)**

Simplified switch syntax with arrow notation.

**Syntax:**

java

```java
switch (expression) {
    case value1 -> // single statement or block
    case value2 -> // single statement or block
    default -> // default statement
}
```

**Example:**

java

```java
int day = 3;

String dayType = switch (day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid day";
};

System.out.println(dayType);  // Output: Weekday
```

**With code blocks:**

java

```java
int month = 2;

String season = switch (month) {
    case 12, 1, 2 -> {
        System.out.println("Cold season");
        yield "Winter";
    }
    case 3, 4, 5 -> "Spring";
    case 6, 7, 8 -> "Summer";
    case 9, 10, 11 -> "Fall";
    default -> "Invalid";
};
```

## 7. **Ternary Operator**

A compact conditional expression.

**Syntax:**

java

```java
variable = (condition) ? valueIfTrue : valueIfFalse;
```

**Example:**

java

```java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Output: Adult

// Can be nested (but use sparingly for readability)
int num = 0;
String result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
```

## Comparison: if vs switch
<img width="885" height="243" alt="image" src="https://github.com/user-attachments/assets/f7b8e868-9ab0-47d2-b68b-766fcb3cdad1" />

## Best Practices

1.  **Use meaningful conditions:**

java

```java
// Good
if (age >= 18 && hasLicense) {
    allowToDrive();
}

// Avoid
if (a > b && c == 5 && d) {
    doSomething();
}
```

2.  **Keep it simple:**

java

```java
// Good
if (isValid) {
    process();
}

// Avoid
if (isValid == true) {
    process();
}
```

3.  **Use switch for multiple discrete values:**

java

```java
// Better with switch
switch (status) {
    case "PENDING": handlePending(); break;
    case "APPROVED": handleApproved(); break;
    case "REJECTED": handleRejected(); break;
}

// Instead of multiple if-else
```

4.  **Always include break in switch (traditional syntax):**

java

```java
switch (choice) {
    case 1:
        option1();
        break;  // Important!
    case 2:
        option2();
        break;
    default:
        defaultOption();
}
```

5.  **Handle all cases:**

java

```java
// Always include else or default for completeness
if (condition) {
    // handle true
} else {
    // handle false - don't leave it hanging
}
```

## Common Pitfalls

1.  **Missing break in switch:**

java

```java
// This causes fall-through!
switch (num) {
    case 1:
        System.out.println("One");
        // Missing break - continues to case 2!
    case 2:
        System.out.println("Two");
        break;
}
```

2.  **Assignment vs comparison:**

java

```java
// Wrong - assignment, not comparison!
if (x = 5) {  // Compile error
    
}

// Correct
if (x == 5) {
    
}
```

3.  **Unnecessary nesting:**

java

```java
// Avoid deep nesting
if (a) {
    if (b) {
        if (c) {
            // hard to read
        }
    }
}

// Better: combine conditions
if (a && b && c) {
    // cleaner
}
```

Decision making statements are fundamental to controlling program flow and creating dynamic, responsive applications!


