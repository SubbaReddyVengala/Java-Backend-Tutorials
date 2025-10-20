# Java Multithreading - Complete Technical Guide

## Table of Contents

1.  Introduction to Multithreading
2.  Thread Life Cycle
3.  Creating Threads
4.  Thread Scheduler
5.  Thread.sleep()
6.  Starting a Thread Twice
7.  Calling run() Method
8.  Joining Threads
9.  Naming and Current Thread
10.  Thread Priority
11.  Daemon Threads
12.  Thread Pools
13.  ThreadGroup
14.  Performing Multiple Tasks
15.  Garbage Collection

----------

## 1. Introduction to Multithreading

### What is Multithreading?

Multithreading is a Java feature that allows concurrent execution of two or more parts of a program to maximize CPU utilization.

### 🧠 Real-World Analogy


Think of multithreading like a  **restaurant kitchen**:

-   **Single-threaded**: One chef doing everything (cooking, plating, cleaning) sequentially
-   **Multi-threaded**: Multiple chefs working simultaneously on different dishes

### Memory Visualization

```
PROCESS MEMORY LAYOUT
┌─────────────────────────────────────┐
│         METHOD AREA (Shared)        │
│  - Class metadata                   │
│  - Static variables                 │
│  - Constant pool                    │
├─────────────────────────────────────┤
│         HEAP (Shared)               │
│  - Objects                          │
│  - Instance variables               │
├─────────────────────────────────────┤
│  THREAD 1 STACK    │ THREAD 2 STACK │
│  - Local vars      │ - Local vars   │
│  - Method calls    │ - Method calls │
│  - References      │ - References   │
├────────────────────┼────────────────┤
│  PC Register 1     │ PC Register 2  │
│  (Current line)    │ (Current line) │
└────────────────────┴────────────────┘
```

### Key Concepts

-   **Process**: A program in execution (e.g., running Java application)
-   **Thread**: Lightweight subprocess, smallest unit of processing
-   **Multitasking**: Multiple processes running concurrently
-   **Multithreading**: Multiple threads within a single process

----------
### Example

java

```java
class PrintTask extends Thread {
    private String message;
    
    public PrintTask(String message) {
        this.message = message;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(message + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class MultithreadingDemo {
    public static void main(String[] args) {
        PrintTask task1 = new PrintTask("Task A");
        PrintTask task2 = new PrintTask("Task B");
        
        task1.start();
        task2.start();
    }
}
```

## 2. Thread Life Cycle
### States

1.  **NEW**: Thread is created but not started
2.  **RUNNABLE**: Thread is ready to run or running
3.  **BLOCKED**: Waiting for monitor lock
4.  **WAITING**: Waiting indefinitely for another thread
5.  **TIMED_WAITING**: Waiting for specified time
6.  **TERMINATED**: Thread execution completed

### Analogy

Think of thread lifecycle like a  **person's journey at an airport**:

-   **NEW**: Bought ticket, not at airport yet
-   **RUNNABLE**: At gate, ready to board
-   **BLOCKED**: Stuck at security check
-   **WAITING**: Waiting at gate with no announced time
-   **TIMED_WAITING**: Waiting with scheduled boarding time
-   **TERMINATED**: Reached destination, journey complete

### State Diagram

```
    NEW
     ↓ start()
  RUNNABLE ←──────────┐
     ↓                │
  RUNNING            │
   ↓ ↓ ↓             │
   │ │ └→ TIMED_WAITING (sleep/wait with timeout)
   │ └──→ WAITING (wait/join)
   └────→ BLOCKED (lock acquisition)
           │ │ │
           └─┴─┘
             ↓
        TERMINATED
```

### Thread States

```
         NEW
          │
          ↓ start()
      RUNNABLE ←──────────┐
          │               │
          ↓ scheduler     │ notify()/
       RUNNING            │ notifyAll()
          │               │
          ├──→ wait() ────→ WAITING
          │
          ├──→ sleep() ───→ TIMED_WAITING
          │
          ├──→ I/O ───────→ BLOCKED
          │
          ↓ completes
      TERMINATED
```

### State Descriptions

**1. NEW**: Thread object created but not started

java

```java
Thread t = new Thread(); // NEW state
```

**2. RUNNABLE**: Thread ready to run, waiting for CPU

java

```java
t.start(); // Moves to RUNNABLE
```

**3. RUNNING**: Thread executing (CPU allocated by scheduler)

**4. BLOCKED**: Waiting for monitor lock

java

```java
synchronized(obj) { } // Trying to enter
```

**5. WAITING**: Waiting indefinitely for another thread

java

```java
obj.wait(); // WAITING state
```

**6. TIMED_WAITING**: Waiting for specified time

java

```java
Thread.sleep(1000); // TIMED_WAITING
```

**7. TERMINATED**: Thread completed execution

### 📊 Memory State During Life Cycle

```
NEW → Stack not allocated
      ┌──────────┐
      │ Thread   │
      │ Object   │
      │ (Heap)   │
      └──────────┘

RUNNABLE/RUNNING → Stack allocated
      ┌──────────┐     ┌──────────┐
      │ Thread   │────→│ Stack    │
      │ Object   │     │ Frame 1  │
      └──────────┘     │ Frame 2  │
                       └──────────┘

TERMINATED → Stack deallocated
      ┌──────────┐
      │ Thread   │ (eligible for GC)
      │ Object   │
      └──────────┘
```

----------
### Example

java

```java
public class ThreadLifecycleDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            System.out.println("Thread is running");
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        
        System.out.println("State: " + thread.getState()); // NEW
        
        thread.start();
        System.out.println("State: " + thread.getState()); // RUNNABLE
        
        Thread.sleep(100);
        System.out.println("State: " + thread.getState()); // TIMED_WAITING
        
        thread.join();
        System.out.println("State: " + thread.getState()); // TERMINATED
    }
}
```


## 3. How to Create Thread in Java

### Two Methods

1.  Extending  `Thread`  class
2.  Implementing  `Runnable`  interface

### Analogy

-   **Extending Thread**: Like inheriting a family business (you become the business)
-   **Implementing Runnable**: Like being hired to do a job (separation of task and executor)

### Memory Comparison

```
Extending Thread:
┌─────────────────┐
│   MyThread      │
│   extends       │
│   Thread        │
│   ┌──────────┐  │
│   │ run()    │  │
│   └──────────┘  │
└─────────────────┘

Implementing Runnable:
┌──────────────┐     ┌──────────────┐
│   Thread     │────→│   MyTask     │
│   object     │     │  (Runnable)  │
└──────────────┘     │  ┌────────┐  │
                     │  │ run()  │  │
                     │  └────────┘  │
                     └──────────────┘
```

### Example - Method 1: Extending Thread

java

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }
}

public class ThreadCreationDemo1 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.start();
        t2.start();
    }
}
```

### Example - Method 2: Implementing Runnable

java

```java
class MyTask implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }
}

public class ThreadCreationDemo2 {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyTask());
        Thread t2 = new Thread(new MyTask());
        
        t1.start();
        t2.start();
        
        // Using Lambda (Java 8+)
        Thread t3 = new Thread(() -> {
            System.out.println("Lambda thread running");
        });
        t3.start();
    }
}
```

### Method 1: Extending Thread Class

java

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample1 {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.start(); // Starts first thread
        t2.start(); // Starts second thread
    }
}
```

**Output**  (order may vary):

```
Thread-0 - 1
Thread-1 - 1
Thread-0 - 2
Thread-1 - 2
...
```

### Method 2: Implementing Runnable Interface (Preferred)

java

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadExample2 {
    public static void main(String[] args) {
        MyRunnable runnable = new MyRunnable();
        Thread t1 = new Thread(runnable, "Worker-1");
        Thread t2 = new Thread(runnable, "Worker-2");
        
        t1.start();
        t2.start();
    }
}
```

### Memory Visualization: Thread vs Runnable

```
Extending Thread:
┌─────────────┐
│  MyThread   │ (inherits Thread, single inheritance used)
│  extends    │
│   Thread    │
└─────────────┘

Implementing Runnable:
┌─────────────┐      ┌──────────┐
│ MyRunnable  │      │  Thread  │
│ implements  │←─────│  object  │
│  Runnable   │      └──────────┘
└─────────────┘
     ↓
Can extend another class!
```

### Why Runnable is Preferred?

1.  **Flexibility**: Java doesn't support multiple inheritance
2.  **Separation of Concerns**: Business logic separate from thread management
3.  **Resource Sharing**: Same Runnable instance can be shared across threads

----------

## 4. Thread Scheduler

### What is Thread Scheduler?

The Thread Scheduler is part of JVM that decides which thread should run and for how long.

### 🧠 Analogy

Think of a  **traffic controller**  at an airport:

-   Multiple planes (threads) waiting to take off (runnable state)
-   Controller decides which plane goes next
-   Each plane gets a time slot (time slice)

### Scheduling Algorithms
1.  **Preemptive Scheduling**: Higher priority threads interrupt lower priority
2.  **Time-Slicing**: Each thread gets a small time slice

### Visualization

```
Time →
Priority 10: ████████░░░░████████
Priority 5:  ░░██████████░░░░░░░░
Priority 1:  ░░░░░░░░░░░░░░░░████

Legend: █ Running  ░ Waiting/Ready
```
**1. Preemptive Scheduling**  (Most JVMs)

-   Higher priority thread can preempt lower priority
-   Time slicing: Each thread gets CPU for short burst

**2. Time-Slicing**

```
Time →
Thread1: [===]    [===]    [===]
Thread2:     [===]    [===]    [===]
Thread3: [===]    [===]    [===]
         ↑         ↑         ↑
      Context Switch Points
```

### Example: Non-deterministic Execution

java

```java
class SchedulerDemo extends Thread {
    private String name;
    
    SchedulerDemo(String name) {
        this.name = name;
    }
    
    @Override
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + " executed " + i);
        }
    }
}

public class ThreadSchedulerExample {
    public static void main(String[] args) {
        SchedulerDemo t1 = new SchedulerDemo("Thread-A");
        SchedulerDemo t2 = new SchedulerDemo("Thread-B");
        SchedulerDemo t3 = new SchedulerDemo("Thread-C");
        
        t1.start();
        t2.start();
        t3.start();
    }
}
```

**Possible Output**  (unpredictable):

```
Thread-A executed 1
Thread-C executed 1
Thread-A executed 2
Thread-B executed 1
Thread-C executed 2
...
```
### Example

java

```java
public class ThreadSchedulerDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread 1 - " + i);
            }
        });
        
        Thread t2 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread 2 - " + i);
            }
        });
        
        // Scheduler will decide the execution order
        // Output is non-deterministic
        t1.start();
        t2.start();
    }
}
```
### Memory Context Switching

```
CONTEXT SWITCH (Thread1 → Thread2):

1. Save Thread1 state:
   ┌────────────┐
   │ PC = 0x45A │ ← Save program counter
   │ Registers  │ ← Save CPU registers
   │ Stack ptr  │ ← Save stack pointer
   └────────────┘

2. Load Thread2 state:
   ┌────────────┐
   │ PC = 0x67B │ ← Restore program counter
   │ Registers  │ ← Restore CPU registers
   │ Stack ptr  │ ← Restore stack pointer
   └────────────┘

3. Resume Thread2 execution
```

----------

## 5. Thread.sleep()

### What is sleep()?

`Thread.sleep()`  pauses the current thread for specified milliseconds.

### Syntax

java

```java
Thread.sleep(milliseconds);
Thread.sleep(milliseconds, nanoseconds);
```
### Analogy

Like asking someone to  **"take a coffee break for 5 minutes"**. They stop working, wait for exactly 5 minutes, then resume.

### Memory State During Sleep

```
Before sleep():           During sleep():
┌──────────────┐         ┌──────────────┐
│   RUNNABLE   │         │TIMED_WAITING │
│   ┌──────┐   │  sleep()│   ┌──────┐   │
│   │Thread│   │ ───────→│   │Thread│   │
│   └──────┘   │         │   └──────┘   │
└──────────────┘         └──────────────┘
                              ↓ timeout
                         ┌──────────────┐
                         │   RUNNABLE   │
                         │   ┌──────┐   │
                         │   │Thread│   │
                         │   └──────┘   │
                         └──────────────┘
```
### Example 1: Basic Sleep

java

```java
public class SleepExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            try {
                System.out.println(i);
                Thread.sleep(1000); // Sleep for 1 second
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
    }
}
```

**Output**  (1 second gap between each):

```
1
2
3
4
5
```

### Example 2: Multiple Threads with Sleep

java

```java
class SleepyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            try {
                System.out.println(Thread.currentThread().getName() + 
                                   " - Count: " + i);
                Thread.sleep(500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class MultipleSleepExample {
    public static void main(String[] args) {
        SleepyThread t1 = new SleepyThread();
        SleepyThread t2 = new SleepyThread();
        
        t1.setName("Worker-1");
        t2.setName("Worker-2");
        
        t1.start();
        t2.start();
    }
}
```

### State Transition with sleep()

```
         RUNNING
            │
            ↓ Thread.sleep(1000)
      TIMED_WAITING
            │
            ↓ After 1000ms
         RUNNABLE
            │
            ↓ Scheduler picks
         RUNNING
```

### Important Points

1.  **InterruptedException**: Must be caught or declared
2.  **Static Method**: Always sleeps current thread
3.  **Doesn't Release Locks**: If thread holds synchronized lock, it keeps it
4.  **Not Guaranteed Exact**: Sleep time is approximate

### 🧠 Analogy

Think of sleep() as a  **coffee break**:

-   Thread: "I'll take a 5-minute break"
-   Thread goes to break room (TIMED_WAITING)
-   After 5 minutes, returns to work queue (RUNNABLE)
-   Manager (scheduler) decides when to assign next task

----------

## 6. Starting a Thread Twice

### What Happens?

Calling  `start()`  twice on the same thread throws  `IllegalThreadStateException`.

### Analogy

Like trying to  **launch the same rocket twice**. Once it's launched (or crashed), you can't reuse it. You need a new rocket.

### Memory Explanation

```
First start():
Thread State: NEW → RUNNABLE → TERMINATED

Second start() attempt:
Thread State: TERMINATED (Cannot transition back)
Result: IllegalThreadStateException
```

### Example

java

```java
public class StartThreadTwiceDemo {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            System.out.println("Thread running");
        });
        
        thread.start(); // First start - OK
        System.out.println("First start successful");
        
        try {
            thread.start(); // Second start - Exception!
        } catch (IllegalThreadStateException e) {
            System.out.println("Cannot start thread twice!");
            System.out.println("Exception: " + e.getMessage());
        }
        
        // Correct approach: Create new thread
        Thread thread2 = new Thread(() -> {
            System.out.println("New thread running");
        });
        thread2.start();
    }
}
```

----------

### Example

java

```java
class SimpleThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread is running");
    }
}

public class StartTwiceExample {
    public static void main(String[] args) {
        SimpleThread t = new SimpleThread();
        
        t.start(); // First start - OK
        System.out.println("First start successful");
        
        try {
            t.start(); // Second start - Exception!
        } catch (IllegalThreadStateException e) {
            System.out.println("Cannot start thread twice: " + e);
        }
    }
}
```

**Output**:

```
Thread is running
First start successful
Cannot start thread twice: java.lang.IllegalThreadStateException
```

### Why This Restriction?

```
Thread State Transition:
NEW → start() → RUNNABLE → ... → TERMINATED
       ✓                           
                                   
Cannot do: TERMINATED → start() → Error!
                         ✗
```

### Memory Explanation

```
After first start():
┌──────────┐     ┌──────────┐
│ Thread   │────→│ Native   │
│ Object   │     │ Thread   │
└──────────┘     │ (OS)     │
                 └──────────┘

After termination:
┌──────────┐     ┌──────────┐
│ Thread   │  X  │ Native   │ (destroyed)
│ Object   │     │ Thread   │
└──────────┘     └──────────┘

Trying start() again:
- Native thread already destroyed
- Cannot recreate from same Thread object
- IllegalThreadStateException thrown
```

### Solution: Create New Thread

java

```java
public class CorrectMultipleRuns {
    public static void main(String[] args) {
        SimpleThread t1 = new SimpleThread();
        t1.start(); // First thread
        
        SimpleThread t2 = new SimpleThread();
        t2.start(); // Second thread (new object)
    }
}
```

----------

## 7. Calling run() Method Directly

### Concept

Calling  `run()`  directly executes it as a normal method in the current thread, NOT as a new thread.

### Analogy

-   **start()**: Hiring someone to do a job (parallel work)
-   **run()**: Doing the job yourself (sequential work)

### Comparison

```
Using start():                Using run():
Main Thread                   Main Thread
    │                             │
    ├─→ creates → New Thread     │
    │              │              │
    │              ↓              ↓
    │          run() executes   run() executes
    │              │              │
    ↓              ↓              ↓
continues       continues      waits for completion

PARALLEL EXECUTION          SEQUENTIAL EXECUTION
```

### run() vs start()

**Calling start()**:

-   Creates new thread
-   JVM calls run() method in new thread
-   Concurrent execution

**Calling run()**:

-   No new thread created
-   Normal method call in main thread
-   Sequential execution

### Example

java

```java
class RunVsStart extends Thread {
    @Override
    public void run() {
        System.out.println("Inside run(): " + 
                          Thread.currentThread().getName());
        for (int i = 1; i <= 3; i++) {
            System.out.println(Thread.currentThread().getName() + 
                              " - " + i);
        }
    }
}

public class RunVsStartExample {
    public static void main(String[] args) {
        RunVsStart t1 = new RunVsStart();
        RunVsStart t2 = new RunVsStart();
        
        System.out.println("Calling run() directly:");
        t1.run(); // Called like normal method
        
        System.out.println("\nCalling start():");
        t2.start(); // Creates new thread
        
        System.out.println("Main thread: " + 
                          Thread.currentThread().getName());
    }
}
```

**Output**:

```
Calling run() directly:
Inside run(): main
main - 1
main - 2
main - 3

Calling start():
Main thread: main
Inside run(): Thread-0
Thread-0 - 1
Thread-0 - 2
Thread-0 - 3
```

### Memory Visualization

**Calling run() - Single Thread**:

```
MAIN THREAD STACK
┌─────────────────┐
│  main()         │
│    ↓            │
│  t1.run()       │ ← Just a method call
│    ↓            │
│  for loop       │
└─────────────────┘
```

**Calling start() - Multiple Threads**:

```
MAIN THREAD STACK        NEW THREAD STACK
┌─────────────────┐      ┌─────────────────┐
│  main()         │      │  run()          │
│    ↓            │      │    ↓            │
│  t2.start()     │────→ │  for loop       │
│    ↓            │      │                 │
│  continues...   │      └─────────────────┘
└─────────────────┘
```

### When to Use run()?

Generally never call  `run()`  directly. Only in special cases:

-   Testing thread logic without actual threading
-   Debugging
-   Single-threaded scenarios where Thread is used as data structure

----------

## 8. Joining Threads

### What is join()?

`join()`  method makes one thread wait for another thread to complete.

`join()`  makes the current thread wait until the thread on which  `join()`  is called finishes execution.

### 🧠 Analogy

Think of  **relay race**:

-   Runner 1 must finish before Runner 2 starts
-   Runner 2 "joins" after Runner 1 completes
### Visualization

```
Without join():              With join():
Main Thread                  Main Thread
    │                            │
    ├─→ Thread1                  ├─→ Thread1
    │      │                     │      │
    ├─→ Thread2                  │      ↓
    │      │                     │   completes
    ↓      ↓                     │      │
continues  continues             │   join() ←┘
all parallel                     ├─→ Thread2
                                 │      │
                                 │      ↓
                                 │   completes
                                 │      │
                                 │   join() ←┘
                                 ↓
                              continues
```

### Syntax

java

```java
t1.join();           // Wait indefinitely
t1.join(1000);       // Wait max 1000ms
t1.join(1000, 500);  // Wait max 1000ms + 500ns
```

### Example 1: Basic Join

java

```java
class TaskThread extends Thread {
    private String taskName;
    
    TaskThread(String taskName) {
        this.taskName = taskName;
    }
    
    @Override
    public void run() {
        System.out.println(taskName + " started");
        try {
            Thread.sleep(2000); // Simulate work
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(taskName + " completed");
    }
}

public class JoinExample {
    public static void main(String[] args) {
        TaskThread t1 = new TaskThread("Download");
        TaskThread t2 = new TaskThread("Process");
        TaskThread t3 = new TaskThread("Upload");
        
        t1.start();
        
        try {
            t1.join(); // Wait for download to complete
            System.out.println("Download finished, starting process");
            
            t2.start();
            t2.join(); // Wait for processing to complete
            System.out.println("Processing finished, starting upload");
            
            t3.start();
            t3.join(); // Wait for upload to complete
            System.out.println("All tasks completed!");
            
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

**Output**:

```
Download started
Download completed
Download finished, starting process
Process started
Process completed
Processing finished, starting upload
Upload started
Upload completed
All tasks completed!
```

### Example 2: Join with Timeout

java

```java
class LongTask extends Thread {
    @Override
    public void run() {
        try {
            System.out.println("Long task started");
            Thread.sleep(5000); // 5 seconds
            System.out.println("Long task completed");
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class JoinTimeoutExample {
    public static void main(String[] args) {
        LongTask task = new LongTask();
        task.start();
        
        try {
            System.out.println("Waiting for task (max 2 seconds)...");
            task.join(2000); // Wait only 2 seconds
            
            if (task.isAlive()) {
                System.out.println("Task still running, continuing anyway");
            } else {
                System.out.println("Task completed within timeout");
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
```

### State Transition with join()

```
Main Thread:          Worker Thread:
RUNNING                  RUNNING
   │                        │
   ↓ t1.join()             ↓
WAITING ←─────────────── continues
   │                        │
   │                        ↓ completes
   ← ─────────────────── TERMINATED
   ↓
RUNNABLE
   ↓
RUNNING
```

### Memory Visualization

```
Before join():
Main Thread          Worker Thread
[Executing]          [Executing]

After join():
Main Thread          Worker Thread
[WAITING]            [Executing]
    ↓                     ↓
 Blocked until        Continues
    worker              working
   completes              ↓
    ↓                 [TERMINATED]
[RUNNABLE] ←───────────────┘
    ↓
[Continues]
```

----------
## 9. Java Naming Thread and Current Thread

### Concept

Every thread has a name. You can set custom names or use default names (Thread-0, Thread-1, etc.).

### Analogy

Like giving  **employee ID badges**  in a company. Makes it easy to identify who's doing what.
Naming and Current Thread


### Example 1: Setting Thread Names

java

```java
class NamedThread extends Thread {
    @Override
    public void run() {
        System.out.println("Thread Name: " + Thread.currentThread().getName());
        System.out.println("Thread ID: " + Thread.currentThread().getId());
        System.out.println("Thread Priority: " + Thread.currentThread().getPriority());
    }
}

public class ThreadNamingExample {
    public static void main(String[] args) {
        // Method 1: Using constructor
        NamedThread t1 = new NamedThread();
        t1.setName("Worker-Thread-1");
        
        // Method 2: Using constructor with name
        Thread t2 = new Thread(new Runnable() {
            @Override
            public void run() {
                System.out.println("Thread Name: " + 
                                  Thread.currentThread().getName());
            }
        }, "Worker-Thread-2");
        
        // Method 3: Default names
        NamedThread t3 = new NamedThread();
        
        t1.start();
        t2.start();
        t3.start();
        
        // Main thread info
        System.out.println("Main Thread: " + 
                          Thread.currentThread().getName());
    }
}
```

**Output**:

```
Main Thread: main
Thread Name: Worker-Thread-1
Thread ID: 14
Thread Priority: 5
Thread Name: Worker-Thread-2
Thread Name: Thread-2
Thread ID: 16
Thread Priority: 5
```

### Example 2: Thread.currentThread()

java

```java
public class CurrentThreadExample {
    public static void method1() {
        System.out.println("Method1 called by: " + 
                          Thread.currentThread().getName());
        method2();
    }
    
    public static void method2() {
        System.out.println("Method2 called by: " + 
                          Thread.currentThread().getName());
    }
    
    public static void main(String[] args) {
        System.out.println("Main thread name: " + 
                          Thread.currentThread().getName());
        
        Thread t = new Thread(() -> {
            System.out.println("Lambda thread name: " + 
                              Thread.currentThread().getName());
            method1();
        }, "Custom-Worker");
        
        t.start();
        method1(); // Called from main thread
    }
}
```

**Output**:

```
Main thread name: main
Method1 called by: main
Method2 called by: main
Lambda thread name: Custom-Worker
Method1 called by: Custom-Worker
Method2 called by: Custom-Worker
```

### Useful Thread Methods

java

```java
public class ThreadInfoExample {
    public static void main(String[] args) {
        Thread current = Thread.currentThread();
        
        System.out.println("Name: " + current.getName());
        System.out.println("ID: " + current.getId());
        System.out.println("Priority: " + current.getPriority());
        System.out.println("State: " + current.getState());
        System.out.println("Is Alive: " + current.isAlive());
        System.out.println("Is Daemon: " + current.isDaemon());
        System.out.println("Thread Group: " + current.getThreadGroup().getName());
    }
}
```

----------

## 10. Thread Priority in Java

### Concept

Thread priority suggests to the scheduler which thread should get preference. Range: 1 (MIN) to 10 (MAX), Default: 5 (NORM).

### Analogy

Like  **priority lanes at airports**:

-   Priority 10: First class passengers (board first)
-   Priority 5: Economy passengers (normal boarding)
-   Priority 1: Standby passengers (board last)

**Important**: Priority is a hint, not a guarantee!

### Visualization

```
High Priority (8-10): ████████████████░░░░ (More CPU time)
Medium Priority (4-7): ██████████░░░░░░░░░░ (Normal CPU time)
Low Priority (1-3):  ████░░░░░░░░░░░░░░░░ (Less CPU time)

Note: Actual behavior depends on OS scheduler
```



-   **MIN_PRIORITY**: 1
-   **NORM_PRIORITY**: 5 (default)
-   **MAX_PRIORITY**: 10

### 🧠 Analogy

Think of  **hospital emergency room**:

-   Priority 10: Critical emergency (heart attack)
-   Priority 5: Moderate issue (broken bone)
-   Priority 1: Minor issue (cold)

### Example 1: Setting Priorities

java

```java
class PriorityThread extends Thread {
    @Override
    public void run() {
        System.out.println(Thread.currentThread().getName() + 
                          " Priority: " + Thread.currentThread().getPriority() +
                          " - Started");
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + i);
        }
    }
}

public class ThreadPriorityExample {
    public static void main(String[] args) {
        PriorityThread low = new PriorityThread();
        PriorityThread medium = new PriorityThread();
        PriorityThread high = new PriorityThread();
        
        low.setName("Low-Priority");
        medium.setName("Medium-Priority");
        high.setName("High-Priority");
        
        low.setPriority(Thread.MIN_PRIORITY);      // 1
        medium.setPriority(Thread.NORM_PRIORITY);  // 5
        high.setPriority(Thread.MAX_PRIORITY);     // 10
        
        low.start();
        medium.start();
        high.start();
    }
}
```

### Scheduler Behavior with Priorities

```
Thread Queue (Conceptual):

HIGH PRIORITY (10):  [T3] ←───── Scheduler picks more often
                      ↑
                      │
NORMAL PRIORITY (5): [T2] [T2]
                      │
                      ↓
LOW PRIORITY (1):    [T1] [T1] [T1] ←── Picks less often

Note: Priority is a HINT, not a guarantee!
```

### Example 2: Priority Inheritance

java

```java
public class PriorityInheritanceExample {
    public static void main(String[] args) {
        Thread main = Thread.currentThread();
        System.out.println("Main priority: " + main.getPriority());
        
        Thread child = new Thread(() -> {
            System.out.println("Child priority: " + 
                              Thread.currentThread().getPriority());
            
            Thread grandChild = new Thread(() -> {
                System.out.println("GrandChild priority: " + 
                                  Thread.currentThread().getPriority());
            });
            grandChild.start();
        });
        
        child.start();
    }
}
```

**Output**:

```
Main priority: 5
Child priority: 5
GrandChild priority: 5
```

### Important Notes

1.  **Platform Dependent**: Priority behavior varies by OS
2.  **Not Guaranteed**: Higher priority doesn't guarantee more CPU time
3.  **Avoid Relying**: Don't design programs that depend on priorities
4.  **Default is Best**: Usually stick with NORM_PRIORITY

----------

## 11. Daemon Threads

### What are Daemon Threads?

Background threads that provide services to user threads. JVM exits when only daemon threads remain.

Daemon threads are service threads that run in the background. JVM terminates when only daemon threads remain.

### 🧠 Analogy

Think of  **building staff**:

-   **User Threads**: Employees doing actual work
-   **Daemon Threads**: Security guards, cleaners
-   When all employees leave (user threads end), guards also leave (daemon threads terminated)

Think of daemon threads as  **background maintenance staff**:

-   Regular threads: Essential workers (store closes when they leave)
-   Daemon threads: Janitors (they leave when store closes)

### Comparison

```
User Threads (Default):     Daemon Threads:
┌──────────────┐           ┌──────────────┐
│              │           │              │
│  Essential   │           │  Background  │
│   Workers    │           │   Services   │
│              │           │              │
│ JVM waits    │           │ JVM doesn't  │
│ for them to  │           │ wait, kills  │
│   complete   │           │ when done    │
│              │           │              │
└──────────────┘           └──────────────┘
```


### Example 1: Basic Daemon Thread

java

```java
class DaemonWorker extends Thread {
    @Override
    public void run() {
        if (Thread.currentThread().isDaemon()) {
            System.out.println("Daemon thread working...");
        } else {
            System.out.println("User thread working...");
        }
        
        for (int i = 1; i <= 10; i++) {
            try {
                Thread.sleep(500);
                System.out.println(Thread.currentThread().getName() + " - " + i);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class DaemonExample {
    public static void main(String[] args) {
        DaemonWorker daemon = new DaemonWorker();
        DaemonWorker user = new DaemonWorker();
        
        daemon.setDaemon(true); // Must be set before start()
        daemon.setName("Daemon-Thread");
        user.setName("User-Thread");
        
        daemon.start();
        user.start();
        
        System.out.println("Main thread ending...");
    }
}
```

**Output**  (daemon thread may terminate abruptly):

```
Main thread ending...
Daemon thread working...
User thread working...
Daemon-Thread - 1
User-Thread - 1
User-Thread - 2
Daemon-Thread - 2
... (daemon stops when user thread completes)
```

**Common Use Cases:**

-   Garbage Collection
-   Finalizer threads
-   Signal dispatcher
-   Background monitoring

**Important:**

-   Must call  `setDaemon(true)`  BEFORE  `start()`
-   Can't convert running thread to daemon

----------

## 13. Thread Pool in Java

### Concept

A thread pool manages a collection of reusable threads to execute multiple tasks efficiently.

### Analogy

Like a  **taxi service**:

-   **Without pool**: Hire new taxi for each trip (expensive)
-   **With pool**: Fleet of taxis waiting, reuse same taxis (efficient)

### Architecture

```
Thread Pool:
┌────────────────────────────────────┐
│         Task Queue                 │
│  [Task1][Task2][Task3][Task4]...  │
└────────────────────────────────────┘
            ↓  ↓  ↓
┌──────────────────────────────────┐
│  Thread Pool (Fixed Size = 3)    │
│  ┌────────┐ ┌────────┐ ┌────────┐│
│  │Thread 1│ │Thread 2│ │Thread 3││
│  └────────┘ └────────┘ └────────┘│
└──────────────────────────────────┘
       ↓           ↓           ↓
   Execute     Execute     Execute
```

### Example

java

```java
import java.util.concurrent.*;

public class ThreadPoolDemo {
    public static void main(String[] args) {
        // Create thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // Submit 6 tasks
        for (int i = 1; i <= 6; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + 
                    " started by " + Thread.currentThread().getName());
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("Task " + taskId + " completed");
            });
        }
        
        // Shutdown pool
        executor.shutdown();
        
        try {
            if (!executor.awaitTermination(10, TimeUnit.SECONDS)) {
                executor.shutdownNow();
            }
        } catch (InterruptedException e) {
            executor.shutdownNow();
        }
        
        System.out.println("All tasks completed");
    }
}
```

### Types of Thread Pools

java

```java
public class ThreadPoolTypes {
    public static void main(String[] args) {
        // 1. Fixed Thread Pool - Fixed number of threads
        ExecutorService fixed = Executors.newFixedThreadPool(5);
        
        // 2. Cached Thread Pool - Creates threads as needed
        ExecutorService cached = Executors.newCachedThreadPool();
        
        // 3. Single Thread Executor - Only one thread
        ExecutorService single = Executors.newSingleThreadExecutor();
        
        // 4. Scheduled Thread Pool - For delayed/periodic tasks
        ScheduledExecutorService scheduled = 
            Executors.newScheduledThreadPool(2);
        
        // Example: Schedule task after 3 seconds
        scheduled.schedule(() -> {
            System.out.println("Delayed task executed");
        }, 3, TimeUnit.SECONDS);
        
        // Example: Periodic task every 2 seconds
        scheduled.scheduleAtFixedRate(() -> {
            System.out.println("Periodic task: " + System.currentTimeMillis());
        }, 0, 2, TimeUnit.SECONDS);
        
        // Cleanup
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        scheduled.shutdown();
    }
}
```

**Benefits:**

-   Reduces thread creation overhead
-   Better resource management
-   Improved performance
-   Task queuing

----------

## 14. ThreadGroup in Java

### Concept

ThreadGroup represents a set of threads that can be managed as a single unit.

### Analogy

Like  **organizing employees into departments**:

-   ThreadGroup = Department
-   Threads = Employees
-   Can manage all employees in a department together

### Hierarchy

```
System ThreadGroup (root)
    │
    ├─→ main ThreadGroup
    │       ├─→ Thread1
    │       ├─→ Thread2
    │       └─→ SubGroup1
    │               ├─→ Thread3
    │               └─→ Thread4
    │
    └─→ Other System Groups
```

### Example

java

```java
public class ThreadGroupDemo {
    public static void main(String[] args) {
        // Get current thread group
        ThreadGroup mainGroup = Thread.currentThread().getThreadGroup();
        System.out.println("Main group: " + mainGroup.getName());
        System.out.println("Parent group: " + mainGroup.getParent().getName());
        
        // Create custom thread group
        ThreadGroup workerGroup = new ThreadGroup("Worker-Group");
        ThreadGroup dbGroup = new ThreadGroup(workerGroup, "Database-Group");
        
        // Create threads in groups
        Thread t1 = new Thread(workerGroup, () -> {
            System.out.println(Thread.currentThread().getName() + 
                " in " + Thread.currentThread().getThreadGroup().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, "Worker-1");
        
        Thread t2 = new Thread(workerGroup, () -> {
            System.out.println(Thread.currentThread().getName() + 
                " in " + Thread.currentThread().getThreadGroup().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, "Worker-2");
        
        Thread t3 = new Thread(dbGroup, () -> {
            System.out.println(Thread.currentThread().getName() + 
                " in " + Thread.currentThread().getThreadGroup().getName());
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }, "DB-Worker-1");
        
        t1.start();
        t2.start();
        t3.start();
        
        // Get group information
        System.out.println("\nWorker Group Info:");
        System.out.println("Active threads: " + workerGroup.activeCount());
        System.out.println("Active groups: " + workerGroup.activeGroupCount());
        
        // List all threads in group
        System.out.println("\nListing all threads:");
        workerGroup.list();
        
        // Interrupt all threads in group
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
```

