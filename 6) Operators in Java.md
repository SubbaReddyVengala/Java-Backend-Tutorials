
# Operators in Java

Java operators are special symbols that perform operations on variables and values. Here's a complete guide:

## 1. **Arithmetic Operators**

Perform mathematical operations:
<img width="902" height="250" alt="image" src="https://github.com/user-attachments/assets/a71a289d-88a4-4be2-a364-cd0b82781144" />

```java
int a = 10, b = 3;
System.out.println(a + b);  // 13
System.out.println(a / b);  // 3 (integer division)
System.out.println(a % b);  // 1 (remainder)
```
## 2. **Unary Operators**
<img width="897" height="257" alt="image" src="https://github.com/user-attachments/assets/9cbea31d-c447-4800-8432-419fb0861d72" />

Operate on a single operand:

``` java
int x = 5;
System.out.println(++x);  // 6 (pre-increment: increment first, then use)
System.out.println(x++);  // 6 (post-increment: use first, then increment)
System.out.println(x);    // 7 (now incremented)
```

## 3. **Assignment Operators**

Assign values to variables:
<img width="902" height="292" alt="image" src="https://github.com/user-attachments/assets/147f5e13-0ad2-472f-9006-bce927c63af9" />
``` java
int num = 10;
num += 5;  // num is now 15
num *= 2;  // num is now 30
```
## 4. **Relational (Comparison) Operators**

Compare two values and return boolean:
<img width="893" height="288" alt="image" src="https://github.com/user-attachments/assets/fcbab8d7-5696-401f-8efc-e117217764e3" />
``` java
int a = 5, b = 10;
System.out.println(a == b);  // false
System.out.println(a < b);   // true
System.out.println(a != b);  // true
```
## 5. **Logical Operators**

Combine multiple boolean expressions:
<img width="892" height="172" alt="image" src="https://github.com/user-attachments/assets/16d3f616-273f-41f8-bf59-71a080d814c1" />

``` java
int age = 25;
boolean hasLicense = true;

if (age >= 18 && hasLicense) {
    System.out.println("Can drive");  // This executes
}

// Short-circuit: if first condition is false, second isn't evaluated
if (age < 18 && checkSomething()) {  // checkSomething() won't be called
    // ...
}
```
## 6. **Bitwise Operators**

Operate on individual bits:
<img width="887" height="321" alt="image" src="https://github.com/user-attachments/assets/4da5a39e-9e2d-4b1c-a9d9-55f42228ee00" />

``` java
int a = 5;   // Binary: 0101
int b = 3;   // Binary: 0011

System.out.println(a & b);   // 1 (Binary: 0001)
System.out.println(a | b);   // 7 (Binary: 0111)
System.out.println(a ^ b);   // 6 (Binary: 0110)
System.out.println(a << 1);  // 10 (Binary: 1010) - multiply by 2
System.out.println(a >> 1);  // 2 (Binary: 0010) - divide by 2
```
## 7. **Ternary Operator**

Shorthand conditional operator:

**Syntax:** `condition ? valueIfTrue : valueIfFalse`
``` java
int age = 20;
String status = (age >= 18) ? "Adult" : "Minor";
System.out.println(status);  // Adult

int max = (a > b) ? a : b;  // Get maximum of two numbers
```
## 8. **instanceof Operator**

Tests if an object is an instance of a specific class or interface:
```java
String str = "Hello";
System.out.println(str instanceof String);  // true
System.out.println(str instanceof Object);  // true

Integer num = 10;
System.out.println(num instanceof Number);  // true
```
## 9. **Operator Precedence**

Order of evaluation (highest to lowest):

1.  **Postfix:** `expr++`, `expr--`
2.  **Unary:** `++expr`, `--expr`, `+expr`, `-expr`, `!`, `~`
3.  **Multiplicative:** `*`, `/`, `%`
4.  **Additive:** `+`, `-`
5.  **Shift:** `<<`, `>>`, `>>>`
6.  **Relational:** `<`, `>`, `<=`, `>=`, `instanceof`
7.  **Equality:** `==`, `!=`
8.  **Bitwise AND:** `&`
9.  **Bitwise XOR:** `^`
10.  **Bitwise OR:** `|`
11.  **Logical AND:** `&&`
12.  **Logical OR:** `||`
13.  **Ternary:** `? :`
14.  **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`, `%=`, etc.


```java
int result = 10 + 5 * 2;  // 20 (multiplication before addition)
int result2 = (10 + 5) * 2;  // 30 (parentheses override precedence)
```

## Key Points to Remember:

-   **Integer division** truncates decimals: `5 / 2 = 2`
-   **Pre vs Post increment/decrement:** `++x` increments before use, `x++` increments after
-   **Short-circuit evaluation:** `&&` and `||` stop evaluating once result is determined
-   Use **parentheses** to make expressions clearer and override precedence
-   Be careful with **operator precedence** in complex expressions


