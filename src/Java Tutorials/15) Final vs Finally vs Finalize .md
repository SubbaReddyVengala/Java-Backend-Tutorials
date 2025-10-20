
# Final vs Finally vs Finalize in Java

These three keywords look similar but serve completely different purposes. Let me break them down:

----------

## 1. **final** (Keyword)

The `final` keyword is used to create **constants** and **prevent modification**.

### A. final Variables (Constants)

java

```java
final int MAX_VALUE = 100;
MAX_VALUE = 200;  // ❌ ERROR: Cannot reassign

final String name = "John";
name = "Jane";  // ❌ ERROR: Cannot reassign
```

**With Objects:**

java

```java
final StringBuilder sb = new StringBuilder("Hello");
sb.append(" World");  // ✅ OK: Can modify object content
sb = new StringBuilder("New");  // ❌ ERROR: Cannot reassign reference
```

**Key Point**: `final` makes the **reference** constant, not the object itself.

### B. final Methods (Cannot Override)

java

```java
class Parent {
    final void display() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    // ❌ ERROR: Cannot override final method
    void display() {
        System.out.println("Child");
    }
}
```

**Use Cases:**

-   Prevent method overriding in subclasses
-   Security and design integrity
-   Performance optimization (minor)

### C. final Classes (Cannot Inherit)

java

```java
final class ImmutableClass {
    private final int value;
    
    ImmutableClass(int value) {
        this.value = value;
    }
}

// ❌ ERROR: Cannot extend final class
class MyClass extends ImmutableClass {
}
```

**Examples in Java API:**

-   `String` class is final
-   `Integer`, `Double` (wrapper classes) are final
-   `Math` class is final

### D. final Parameters

java

```java
void process(final int value) {
    value = 20;  // ❌ ERROR: Cannot modify
    System.out.println(value);
}
```

----------

## 2. **finally** (Block)

The `finally` block is part of **exception handling** and **always executes** (with rare exceptions).

### Basic Syntax

java

```java
try {
    // Code that might throw exception
} catch (Exception e) {
    // Handle exception
} finally {
    // Always executes (cleanup code)
}
```

### Example 1: Resource Cleanup

java

```java
FileInputStream fis = null;
try {
    fis = new FileInputStream("file.txt");
    // Read file
} catch (IOException e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    // This ALWAYS runs - cleanup resources
    if (fis != null) {
        try {
            fis.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### Example 2: With Return Statement

java

```java
int test() {
    try {
        return 1;
    } catch (Exception e) {
        return 2;
    } finally {
        System.out.println("Finally executes!");
        // Even though return happens above, finally still runs
    }
}
```

### When finally Executes

java

```java
// Case 1: No exception
try {
    System.out.println("Try");  // Executes
} finally {
    System.out.println("Finally");  // Executes
}

// Case 2: Exception caught
try {
    throw new Exception();
} catch (Exception e) {
    System.out.println("Catch");  // Executes
} finally {
    System.out.println("Finally");  // Executes
}

// Case 3: Exception not caught
try {
    throw new Exception();
} finally {
    System.out.println("Finally");  // Still executes!
    // Then exception propagates up
}
```

### When finally DOESN'T Execute

java

```java
try {
    System.exit(0);  // JVM shutdown
} finally {
    // This won't execute
}

try {
    while(true);  // Infinite loop
} finally {
    // This won't execute
}

// If JVM crashes or is killed
```

### finally vs return

java

```java
int getValue() {
    try {
        return 10;
    } finally {
        return 20;  // ⚠️ This overrides the try return!
    }
    // Returns 20, not 10
}
```

**Best Practice**: Avoid returning from `finally` block.

### Modern Alternative: try-with-resources

java

```java
// Old way
BufferedReader br = null;
try {
    br = new BufferedReader(new FileReader("file.txt"));
    // Use br
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (br != null) {
        try {
            br.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Modern way (Java 7+)
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    // Use br
    // Automatically closes, no finally needed!
} catch (IOException e) {
    e.printStackTrace();
}
```

----------

## 3. **finalize()** (Method) - DEPRECATED ⚠️

The `finalize()` method is called by the **Garbage Collector** before destroying an object. **It's deprecated since Java 9 and should NOT be used.**

### Old Syntax (Don't use this!)

java

```java
class Resource {
    @Override
    protected void finalize() throws Throwable {
        try {
            // Cleanup code
            System.out.println("Object is being garbage collected");
        } finally {
            super.finalize();
        }
    }
}
```

### Why finalize() is BAD

java

```java
class DatabaseConnection {
    @Override
    protected void finalize() {
        // ❌ BAD: When will this run? Nobody knows!
        closeConnection();
    }
}
```

**Problems:**

1.  **Unpredictable**: You don't know when GC runs
2.  **May never run**: GC might not call it before JVM exits
3.  **Performance**: Slows down garbage collection
4.  **Exceptions**: Exceptions in finalize are ignored
5.  **No guarantee**: Object might never be finalized

### Example: finalize() Unreliability

java

```java
class Test {
    private int id;
    
    Test(int id) {
        this.id = id;
    }
    
    @Override
    protected void finalize() {
        System.out.println("Finalizing object " + id);
    }
}

public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 1000; i++) {
            new Test(i);
        }
        
        System.gc();  // Request GC (doesn't guarantee it runs)
        
        // You might see some finalize() calls, but not all 1000!
    }
}
```

### Modern Alternatives to finalize()

#### 1. **try-with-resources** (Preferred)

java

```java
class Resource implements AutoCloseable {
    @Override
    public void close() {
        // Cleanup code
        System.out.println("Resource closed");
    }
}

// Usage
try (Resource r = new Resource()) {
    // Use resource
}  // Automatically closed, guaranteed!
```

#### 2. **Cleaner API** (Java 9+)

java

```java
import java.lang.ref.Cleaner;

class ResourceWithCleaner {
    private static final Cleaner cleaner = Cleaner.create();
    
    private static class State implements Runnable {
        @Override
        public void run() {
            // Cleanup code
            System.out.println("Cleaning up");
        }
    }
    
    private final Cleaner.Cleanable cleanable;
    
    ResourceWithCleaner() {
        this.cleanable = cleaner.register(this, new State());
    }
}
```

#### 3. **Explicit close() method**

java

```java
class DatabaseConnection {
    public void close() {
        // Cleanup
    }
}

// Usage
DatabaseConnection conn = new DatabaseConnection();
try {
    // Use connection
} finally {
    conn.close();  // Explicit cleanup
}
```

----------

## Comparison Table
<img width="912" height="347" alt="image" src="https://github.com/user-attachments/assets/726b040e-8bce-43e3-99a2-514145dcbb45" />



----------

## Complete Example Using All Three

java

```java
// final class
final class DatabaseManager {
    
    // final variable
    private final String DB_URL = "localhost:3306";
    
    // final method
    final void connect() {
        System.out.println("Connecting to " + DB_URL);
    }
    
    void executeQuery() {
        Connection conn = null;
        
        try {
            conn = getConnection();
            // Execute query
            
        } catch (SQLException e) {
            System.out.println("Error: " + e);
            
        } finally {
            // finally block - always executes
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    
    // DON'T DO THIS - finalize is deprecated!
    @Override
    @Deprecated
    protected void finalize() throws Throwable {
        System.out.println("⚠️ Don't use finalize!");
    }
}
```

----------

## Key Takeaways

✅ **final**: Use it for constants, immutability, and preventing inheritance/overriding

✅ **finally**: Use it for cleanup code in exception handling

❌ **finalize()**: Don't use it! Use try-with-resources or explicit close() methods instead




