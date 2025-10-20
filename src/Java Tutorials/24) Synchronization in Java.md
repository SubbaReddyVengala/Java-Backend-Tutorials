
# Java Synchronization - Complete Tutorial

## Table of Contents

1. Introduction to Synchronization
2. Synchronized Methods
3. Synchronized Blocks
4. Static Synchronization
5. Deadlock
6. Inter-thread Communication
7. Volatile Keyword
----------

## 1. Introduction to Synchronization

### 🎯 What is Synchronization?

**Analogy**: Think of a **single bathroom** in an office. When one person is inside, they lock the door. Others must wait outside until the bathroom is free. This prevents chaos and ensures privacy.

Similarly, synchronization in Java ensures that only **one thread** can access a shared resource at a time, preventing data corruption.

### 🧠 Memory Visualization

```java
Without Synchronization:
┌─────────────────────────────────────────┐
│         Shared Resource (Counter = 0)    │
└─────────────────────────────────────────┘
          ↑               ↑
          │               │
    Thread-1          Thread-2
    Reads: 0          Reads: 0
    Adds: 1           Adds: 1
    Writes: 1         Writes: 1
    
Result: Counter = 1 (Expected: 2) ❌

With Synchronization:
┌─────────────────────────────────────────┐
│         Shared Resource (Counter = 0)    │
│              🔒 LOCK                     │
└─────────────────────────────────────────┘
          ↑               
          │ (Thread-2 waits)              
    Thread-1 (Has Lock)          
    Reads: 0          
    Adds: 1           
    Writes: 1
    Releases Lock
    
    Thread-2 acquires lock
    Reads: 1
    Adds: 1
    Writes: 2
    
Result: Counter = 2 ✅
```

### 🔑 Key Concept: Monitor Lock (Intrinsic Lock)

Every Java object has an **intrinsic lock** (monitor). When a thread acquires this lock, other threads must wait.

----------

## 2. Synchronized Methods

### Basic Example: Bank Account

java

```java
class BankAccount {
    private int balance = 1000;
    
    // Unsynchronized - PROBLEM!
    public void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " checking balance: " + balance);
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " withdrawn: " + amount);
            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println("Insufficient balance");
        }
    }
}

// Test without synchronization
public class WithoutSync {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();
        
        Thread t1 = new Thread(() -> account.withdraw(800), "Thread-1");
        Thread t2 = new Thread(() -> account.withdraw(800), "Thread-2");
        
        t1.start();
        t2.start();
    }
}

/* Output (Race Condition):
Thread-1 checking balance: 1000
Thread-2 checking balance: 1000
Thread-1 withdrawn: 800
Remaining balance: 200
Thread-2 withdrawn: 800
Remaining balance: -600  ❌ (Overdraft!)
*/
```

### ✅ Solution: Synchronized Method

java

```java
class BankAccount {
    private int balance = 1000;
    
    // Synchronized method
    public synchronized void withdraw(int amount) {
        if (balance >= amount) {
            System.out.println(Thread.currentThread().getName() + " checking balance: " + balance);
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            balance -= amount;
            System.out.println(Thread.currentThread().getName() + " withdrawn: " + amount);
            System.out.println("Remaining balance: " + balance);
        } else {
            System.out.println(Thread.currentThread().getName() + ": Insufficient balance");
        }
    }
}

/* Output (Thread-Safe):
Thread-1 checking balance: 1000
Thread-1 withdrawn: 800
Remaining balance: 200
Thread-2: Insufficient balance ✅
*/
```

### 🧠 Memory Model: Synchronized Method

```
Object: BankAccount Instance
┌──────────────────────────────┐
│  Monitor Lock: 🔓 (Available)│
│  balance: 1000               │
│  withdraw() method           │
└──────────────────────────────┘

Thread-1 calls withdraw():
┌──────────────────────────────┐
│  Monitor Lock: 🔒 Thread-1   │ ← Thread-1 acquires lock
│  balance: 1000               │
│  withdraw() executing...     │
└──────────────────────────────┘
        ↑
        │
Thread-2 (BLOCKED - waiting for lock)

Thread-1 completes:
┌──────────────────────────────┐
│  Monitor Lock: 🔓            │ ← Lock released
│  balance: 200                │
└──────────────────────────────┘
        ↑
        │
Thread-2 (now acquires lock)
```

----------

## 3. Java Synchronized Block

### 🎯 Why Synchronized Blocks?

**Analogy**: Instead of locking the **entire house**, you only lock the **specific room** (critical section) that needs protection. This improves performance.

### Fine-Grained Locking Example

java

```java
class Message {
    public void displayMessage(String msg) {
        // Non-critical section (no synchronization needed)
        System.out.println(Thread.currentThread().getName() + " starting");
        
        // Critical section (only this needs synchronization)
        synchronized(this) {
            System.out.print("[");
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            System.out.print(msg);
            try { Thread.sleep(100); } catch (InterruptedException e) {}
            System.out.println("]");
        }
        
        // Non-critical section
        System.out.println(Thread.currentThread().getName() + " ending");
    }
}

public class SyncBlockDemo {
    public static void main(String[] args) {
        Message message = new Message();
        
        Thread t1 = new Thread(() -> message.displayMessage("Hello"), "Thread-1");
        Thread t2 = new Thread(() -> message.displayMessage("World"), "Thread-2");
        
        t1.start();
        t2.start();
    }
}

/* Output:
Thread-1 starting
Thread-2 starting
[Hello]
Thread-1 ending
[World]
Thread-2 ending
*/
```

### 📊 Comparison: Method vs Block

java

```java
class Counter {
    private int count = 0;
    
    // Synchronized Method - locks entire method
    public synchronized void incrementMethod() {
        count++;
        System.out.println("Count: " + count);
        // Other non-critical code...
    }
    
    // Synchronized Block - locks only critical section
    public void incrementBlock() {
        // Non-critical code can run concurrently
        System.out.println("Preparing...");
        
        synchronized(this) {  // Only this is locked
            count++;
        }
        
        // More non-critical code
        System.out.println("Count: " + count);
    }
}
```

### 🔑 Different Lock Objects

java

```java
class MultiLock {
    private final Object lock1 = new Object();
    private final Object lock2 = new Object();
    private int resource1 = 0;
    private int resource2 = 0;
    
    public void updateResource1() {
        synchronized(lock1) {  // Locks only resource1
            resource1++;
        }
    }
    
    public void updateResource2() {
        synchronized(lock2) {  // Independent lock - can run concurrently
            resource2++;
        }
    }
}
```

----------

## 4. Static Synchronization

### 🎯 Concept

**Analogy**: Think of a **company-wide policy** vs. **individual employee rules**. Static synchronization applies to the **class level** (all instances), not individual objects.

### Class-Level Lock

java

```java
class Counter {
    private static int count = 0;
    
    // Static synchronized method - locks the Class object
    public static synchronized void increment() {
        count++;
        System.out.println(Thread.currentThread().getName() + ": " + count);
    }
    
    // Instance method - locks the object instance
    public synchronized void display() {
        System.out.println("Display: " + count);
    }
}

public class StaticSyncDemo {
    public static void main(String[] args) {
        // Two different Counter objects
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 3; i++) Counter.increment();
        }, "Thread-1");
        
        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 3; i++) Counter.increment();
        }, "Thread-2");
        
        t1.start();
        t2.start();
    }
}

/* Output:
Thread-1: 1
Thread-1: 2
Thread-1: 3
Thread-2: 4
Thread-2: 5
Thread-2: 6
*/
```

### 🧠 Memory Visualization

```
Static Synchronization:
┌─────────────────────────────────────┐
│       Counter.class (Class Object)   │
│       Class Lock: 🔒                │
│       static count: 0                │
└─────────────────────────────────────┘
            ↑
            │
    All instances share this lock
    
┌──────────┐    ┌──────────┐
│ Counter  │    │ Counter  │
│ c1       │    │ c2       │
│ 🔓       │    │ 🔓       │
└──────────┘    └──────────┘
(Instance locks are separate)

Instance Synchronization:
┌──────────┐                ┌──────────┐
│ Counter  │                │ Counter  │
│ c1       │                │ c2       │
│ 🔒       │ (locked)       │ 🔓       │ (independent)
└──────────┘                └──────────┘
```

### Synchronized Block with Class Lock

java

```java
class Printer {
    public void printDocument(String doc) {
        synchronized(Printer.class) {  // Class-level lock
            for (int i = 0; i < 3; i++) {
                System.out.println(doc + " - line " + i);
            }
        }
    }
}
```

----------

## 5. Deadlock in Java

### 🎯 What is Deadlock?

**Analogy**: Two people at a narrow bridge. Person A waits for Person B to move, and Person B waits for Person A. Both are stuck forever! 🔄

### Classic Deadlock Example

java

```java
class Resource1 {
    public synchronized void method1(Resource2 r2) {
        System.out.println(Thread.currentThread().getName() + ": Locked Resource1");
        try { Thread.sleep(50); } catch (InterruptedException e) {}
        
        System.out.println(Thread.currentThread().getName() + ": Waiting for Resource2");
        r2.method2();  // Trying to acquire Resource2's lock
    }
    
    public synchronized void method2() {
        System.out.println("Inside Resource1 - method2");
    }
}

class Resource2 {
    public synchronized void method1(Resource1 r1) {
        System.out.println(Thread.currentThread().getName() + ": Locked Resource2");
        try { Thread.sleep(50); } catch (InterruptedException e) {}
        
        System.out.println(Thread.currentThread().getName() + ": Waiting for Resource1");
        r1.method2();  // Trying to acquire Resource1's lock
    }
    
    public synchronized void method2() {
        System.out.println("Inside Resource2 - method2");
    }
}

public class DeadlockDemo {
    public static void main(String[] args) {
        Resource1 r1 = new Resource1();
        Resource2 r2 = new Resource2();
        
        Thread t1 = new Thread(() -> r1.method1(r2), "Thread-1");
        Thread t2 = new Thread(() -> r2.method1(r1), "Thread-2");
        
        t1.start();
        t2.start();
    }
}

/* Output (DEADLOCK):
Thread-1: Locked Resource1
Thread-2: Locked Resource2
Thread-1: Waiting for Resource2
Thread-2: Waiting for Resource1
(Program hangs forever) 🔄
*/
```

### 🧠 Deadlock Visualization

```
Time T1:
Thread-1 holds 🔒 Resource1
Thread-2 holds 🔒 Resource2

Time T2:
Thread-1: "I need Resource2" (waiting...)
          ↓
    🔒 Resource2 (held by Thread-2)
    
Thread-2: "I need Resource1" (waiting...)
          ↓
    🔒 Resource1 (held by Thread-1)

⚠️ CIRCULAR DEPENDENCY - DEADLOCK!
```

### ✅ Solution: Lock Ordering

java

```java
class Resource {
    private final int id;
    
    public Resource(int id) {
        this.id = id;
    }
    
    public int getId() { return id; }
}

class DeadlockFree {
    public void execute(Resource r1, Resource r2) {
        // Always acquire locks in same order (by ID)
        Resource first = r1.getId() < r2.getId() ? r1 : r2;
        Resource second = r1.getId() < r2.getId() ? r2 : r1;
        
        synchronized(first) {
            System.out.println(Thread.currentThread().getName() + " locked " + first.getId());
            
            synchronized(second) {
                System.out.println(Thread.currentThread().getName() + " locked " + second.getId());
                // Critical section
            }
        }
    }
}
```

----------

## 6. Inter-thread Communication

### 🎯 wait(), notify(), notifyAll()

**Analogy**: A **restaurant kitchen** where the chef (producer) prepares food and the waiter (consumer) serves it. The waiter **waits** when no food is ready, and the chef **notifies** when food is prepared.

### Producer-Consumer Pattern

java

```java
class SharedResource {
    private int data;
    private boolean hasData = false;
    
    // Producer
    public synchronized void produce(int value) {
        while (hasData) {
            try {
                System.out.println("Producer waiting...");
                wait();  // Release lock and wait
            } catch (InterruptedException e) {}
        }
        
        this.data = value;
        hasData = true;
        System.out.println("Produced: " + value);
        notify();  // Wake up consumer
    }
    
    // Consumer
    public synchronized int consume() {
        while (!hasData) {
            try {
                System.out.println("Consumer waiting...");
                wait();  // Release lock and wait
            } catch (InterruptedException e) {}
        }
        
        hasData = false;
        System.out.println("Consumed: " + data);
        notify();  // Wake up producer
        return data;
    }
}

public class ProducerConsumerDemo {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();
        
        // Producer thread
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.produce(i);
                try { Thread.sleep(100); } catch (InterruptedException e) {}
            }
        });
        
        // Consumer thread
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                resource.consume();
                try { Thread.sleep(150); } catch (InterruptedException e) {}
            }
        });
        
        producer.start();
        consumer.start();
    }
}

/* Output:
Produced: 1
Consumed: 1
Produced: 2
Consumed: 2
Produced: 3
Consumed: 3
Produced: 4
Consumed: 4
Produced: 5
Consumed: 5
*/
```

### 🧠 wait/notify Mechanism

```
Initial State:
┌────────────────────────┐
│  SharedResource        │
│  Monitor Lock: 🔓      │
│  data: 0               │
│  hasData: false        │
└────────────────────────┘

Producer acquires lock:
┌────────────────────────┐
│  Monitor Lock: 🔒 P    │
│  data: 1               │
│  hasData: true         │
└────────────────────────┘
Producer calls notify() and releases lock

Consumer acquires lock:
┌────────────────────────┐
│  Monitor Lock: 🔒 C    │
│  data: 1 (reading)     │
│  hasData: false        │
└────────────────────────┘
Consumer calls notify() and releases lock
```

### Key Points: wait() vs sleep()

```
wait():
- Releases the monitor lock ✅
- Must be called inside synchronized context
- Thread goes to WAITING state
- Woken by notify()/notifyAll()

sleep():
- Does NOT release lock ❌
- Can be called anywhere
- Thread goes to TIMED_WAITING
- Wakes after time expires
```

----------

## 7. Volatile Keyword

### 🎯 The Visibility Problem

**Analogy**: Imagine you're reading a book, and someone updates a page, but you keep reading your **cached copy** instead of seeing the updated version. `volatile` ensures you always read the **latest version**.

### Without Volatile (Problem)

java

```java
class TaskRunner {
    private boolean running = true;  // NOT volatile
    
    public void startTask() {
        new Thread(() -> {
            System.out.println("Task started");
            while (running) {  // Might cache this value!
                // Do work
            }
            System.out.println("Task stopped");
        }).start();
    }
    
    public void stopTask() {
        running = false;  // Main thread updates
        System.out.println("Stop signal sent");
    }
}

// The worker thread might never see running = false! ❌
```

### ✅ With Volatile

java

```java
class TaskRunner {
    private volatile boolean running = true;  // Volatile keyword
    
    public void startTask() {
        new Thread(() -> {
            System.out.println("Task started");
            while (running) {  // Always reads from main memory
                // Do work
            }
            System.out.println("Task stopped");
        }).start();
    }
    
    public void stopTask() {
        running = false;  // Immediately visible to all threads
        System.out.println("Stop signal sent");
    }
}

public class VolatileDemo {
    public static void main(String[] args) throws InterruptedException {
        TaskRunner runner = new TaskRunner();
        runner.startTask();
        
        Thread.sleep(2000);
        runner.stopTask();  // Worker thread will see this ✅
    }
}
```

### 🧠 Memory Model: volatile

```
Without volatile:
┌─────────────────┐         ┌─────────────────┐
│   Main Memory   │         │   Main Memory   │
│   running=true  │         │   running=false │ ← Updated
└─────────────────┘         └─────────────────┘
        ↓ (copy)                     ↓
┌─────────────────┐         ┌─────────────────┐
│  Thread Cache   │         │  Thread Cache   │
│  running=true   │ ❌      │  running=true   │ ❌ (Stale!)
└─────────────────┘         └─────────────────┘
 (Worker thread keeps        (Never sees update)
  reading cached value)

With volatile:
┌─────────────────┐         ┌─────────────────┐
│   Main Memory   │         │   Main Memory   │
│   running=true  │         │   running=false │ ← Updated
└─────────────────┘         └─────────────────┘
        ↑                            ↓
        │ (always reads)    (immediately visible)
        │                            ↓
┌─────────────────┐         ┌─────────────────┐
│  Worker Thread  │         │  Worker Thread  │
│  reads directly │ ✅      │  sees update!   │ ✅
└─────────────────┘         └─────────────────┘
```

### Practical Example: Flag-Based Control

java

```java
class DataProcessor {
    private volatile boolean shutdownRequested = false;
    private volatile int processedCount = 0;
    
    public void process() {
        while (!shutdownRequested) {
            // Process data
            processedCount++;
            System.out.println("Processed: " + processedCount);
            
            try { Thread.sleep(100); } catch (InterruptedException e) {}
        }
        System.out.println("Shutdown complete. Total processed: " + processedCount);
    }
    
    public void shutdown() {
        shutdownRequested = true;
    }
    
    public int getProcessedCount() {
        return processedCount;
    }
}
```

### ⚠️ Volatile Limitations

java

```java
class Counter {
    private volatile int count = 0;
    
    // NOT thread-safe! (read-modify-write is not atomic)
    public void increment() {
        count++;  // Three operations: read, add, write ❌
    }
    
    // Solution: Use synchronized or AtomicInteger
    public synchronized void safeIncrement() {
        count++;  ✅
    }
}
```

### 📊 When to Use What?

```
Use volatile when:
✅ Single thread writes, multiple threads read
✅ Simple flag/status variables
✅ No compound operations (just read/write)

Use synchronized when:
✅ Multiple threads read AND write
✅ Compound operations (count++, check-then-act)
✅ Need atomicity of multiple operations

Use AtomicInteger/AtomicReference when:
✅ Simple atomic operations on single variables
✅ Better performance than synchronized for single-variable updates
```

----------

## 🎓 Summary Cheat Sheet




### 🔑 Key Principles

1.  **Minimize lock scope** - synchronize only what's necessary
2.  **Consistent lock ordering** - prevent deadlocks
3.  **Use volatile for flags** - simple visibility without locking
4.  **Always release locks** - in finally blocks if manual locking
5.  **Prefer higher-level constructs** - use java.util.concurrent when possible

----------
```
