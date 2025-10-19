import React, { useState } from 'react';
import { Package, Lock, Eye, EyeOff, Home, Building2, Globe, Shield } from 'lucide-react';

const JavaOOPTutorial = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedModifier, setSelectedModifier] = useState('public');

  const tabs = [
    { id: 'packages', label: 'Packages', icon: Package },
    { id: 'modifiers', label: 'Access Modifiers', icon: Lock },
    { id: 'encapsulation', label: 'Encapsulation', icon: Shield }
  ];

  const PackagesSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Package className="text-blue-600" />
          Packages in Java
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A <strong>package</strong> is a namespace that organizes related classes and interfaces. Think of it as a filing cabinet system in an office.
        </p>
      </div>

      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">🏢 Real-World Analogy</h3>
        <p className="text-gray-700">
          Imagine a large corporate building with different departments:
        </p>
        <ul className="mt-3 space-y-2 text-gray-700">
          <li>• <strong>com.company.hr</strong> - Human Resources Department</li>
          <li>• <strong>com.company.finance</strong> - Finance Department</li>
          <li>• <strong>com.company.engineering</strong> - Engineering Department</li>
        </ul>
        <p className="mt-3 text-gray-700">
          Each department has its own files, people, and resources. Packages work the same way - they organize related classes.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">📦 Types of Packages</h3>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800">1. Built-in Packages</h4>
            <p className="text-sm text-gray-600 mt-1">Pre-defined by Java</p>
            <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm overflow-x-auto">
{`import java.util.*;      // Utilities
import java.io.*;        // Input/Output
import java.lang.*;      // Language (auto-imported)`}
            </pre>
          </div>

          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800">2. User-defined Packages</h4>
            <p className="text-sm text-gray-600 mt-1">Created by developers</p>
            <pre className="bg-gray-800 text-green-400 p-3 rounded mt-2 text-sm overflow-x-auto">
{`package com.mycompany.utilities;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">🧠 Memory Visualization</h3>
        <div className="bg-white p-4 rounded border-2 border-purple-200">
          <div className="space-y-3">
            <div className="border-2 border-blue-400 rounded p-3 bg-blue-50">
              <p className="font-mono text-sm font-bold text-blue-800">JVM Memory - Package Structure</p>
              <div className="mt-2 ml-4 space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">📁</span>
                  <div>
                    <span className="font-semibold">com.myapp</span>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">📄</span>
                        <span className="font-mono text-xs">Main.class</span>
                        <span className="text-gray-400">[0x7A3F2E00]</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">📁</span>
                  <div>
                    <span className="font-semibold">com.myapp.models</span>
                    <div className="ml-4 mt-1 space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">📄</span>
                        <span className="font-mono text-xs">User.class</span>
                        <span className="text-gray-400">[0x7A3F2F10]</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">📄</span>
                        <span className="font-mono text-xs">Product.class</span>
                        <span className="text-gray-400">[0x7A3F3020]</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 italic">
              Each package creates a separate namespace, preventing naming conflicts. Classes are loaded into Method Area with their fully qualified names.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const ModifiersSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Lock className="text-red-600" />
          Access Modifiers in Java
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Access modifiers control the visibility and accessibility of classes, methods, and variables. They're like security clearance levels in an organization.
        </p>
      </div>

      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">🏰 Real-World Analogy</h3>
        <p className="text-gray-700 mb-3">
          Think of a medieval castle with different access levels:
        </p>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-start gap-2">
            <Globe className="text-blue-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong>Public:</strong> The town square - everyone can access it
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Shield className="text-green-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong>Protected:</strong> The castle grounds - family and allies can enter
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Home className="text-orange-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong>Default:</strong> The neighborhood - only locals from same area
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Lock className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <strong>Private:</strong> The king's chambers - only the owner can access
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">🔐 Access Modifier Selector</h3>
        <div className="flex gap-2 mb-4 flex-wrap">
          {['public', 'protected', 'default', 'private'].map(mod => (
            <button
              key={mod}
              onClick={() => setSelectedModifier(mod)}
              className={`px-4 py-2 rounded font-semibold transition-all ${
                selectedModifier === mod
                  ? 'bg-blue-600 text-white scale-105'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {mod}
            </button>
          ))}
        </div>

        <div className="bg-gray-50 p-4 rounded border-2 border-gray-300">
          {selectedModifier === 'public' && (
            <div>
              <h4 className="font-bold text-blue-700 text-lg mb-2">public - Global Access</h4>
              <p className="text-gray-700 mb-3">Accessible from anywhere in the application.</p>
              <div className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                <pre>{`public class User {
    public String name;
    
    public void display() {
        System.out.println("Name: " + name);
    }
}`}</pre>
              </div>
              <div className="mt-3 bg-blue-50 p-3 rounded">
                <p className="text-sm font-semibold text-blue-800">✓ Accessible from:</p>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Same class ✓</li>
                  <li>• Same package ✓</li>
                  <li>• Subclass (same/different package) ✓</li>
                  <li>• Different package ✓</li>
                </ul>
              </div>
            </div>
          )}

          {selectedModifier === 'protected' && (
            <div>
              <h4 className="font-bold text-green-700 text-lg mb-2">protected - Family Access</h4>
              <p className="text-gray-700 mb-3">Accessible within same package and subclasses.</p>
              <div className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                <pre>{`public class Animal {
    protected String species;
    
    protected void makeSound() {
        System.out.println("Some sound");
    }
}

// Different package
public class Dog extends Animal {
    public void bark() {
        species = "Canine"; // Accessible!
        makeSound();
    }
}`}</pre>
              </div>
              <div className="mt-3 bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">✓ Accessible from:</p>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Same class ✓</li>
                  <li>• Same package ✓</li>
                  <li>• Subclass (any package) ✓</li>
                  <li>• Different package ✗</li>
                </ul>
              </div>
            </div>
          )}

          {selectedModifier === 'default' && (
            <div>
              <h4 className="font-bold text-orange-700 text-lg mb-2">default - Package Access</h4>
              <p className="text-gray-700 mb-3">Accessible only within same package (no keyword needed).</p>
              <div className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                <pre>{`class Helper {  // default access
    String message;  // default access
    
    void help() {  // default access
        System.out.println("Helping...");
    }
}`}</pre>
              </div>
              <div className="mt-3 bg-orange-50 p-3 rounded">
                <p className="text-sm font-semibold text-orange-800">✓ Accessible from:</p>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Same class ✓</li>
                  <li>• Same package ✓</li>
                  <li>• Subclass (different package) ✗</li>
                  <li>• Different package ✗</li>
                </ul>
              </div>
            </div>
          )}

          {selectedModifier === 'private' && (
            <div>
              <h4 className="font-bold text-red-700 text-lg mb-2">private - Class-only Access</h4>
              <p className="text-gray-700 mb-3">Accessible only within the same class.</p>
              <div className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
                <pre>{`public class BankAccount {
    private double balance;
    private String accountNumber;
    
    private void calculateInterest() {
        // Only accessible within this class
    }
    
    public double getBalance() {
        return balance;  // OK: same class
    }
}`}</pre>
              </div>
              <div className="mt-3 bg-red-50 p-3 rounded">
                <p className="text-sm font-semibold text-red-800">✓ Accessible from:</p>
                <ul className="text-sm text-gray-700 mt-1 space-y-1">
                  <li>• Same class ✓</li>
                  <li>• Same package ✗</li>
                  <li>• Subclass ✗</li>
                  <li>• Different package ✗</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">🧠 Memory Impact</h3>
        <div className="bg-white p-4 rounded space-y-3">
          <p className="text-gray-700 text-sm">
            Access modifiers don't affect memory allocation but control compile-time visibility:
          </p>
          <div className="bg-gray-100 p-3 rounded font-mono text-xs space-y-2">
            <div className="border-l-4 border-blue-500 pl-3">
              <span className="text-blue-700 font-bold">Object in Heap:</span>
              <div className="ml-2 mt-1">
                <div>private int id = 101; <span className="text-gray-500">[4 bytes]</span></div>
                <div>public String name = "Alice"; <span className="text-gray-500">[ref: 4/8 bytes]</span></div>
              </div>
            </div>
            <p className="text-gray-600 text-xs italic">
              All fields occupy memory regardless of modifier. Access control is enforced by compiler, not at runtime memory level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const EncapsulationSection = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Shield className="text-green-600" />
          Encapsulation in Java
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Encapsulation is the bundling of data (variables) and methods that operate on that data within a single unit (class), while hiding internal implementation details.
        </p>
      </div>

      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">💊 Real-World Analogy</h3>
        <p className="text-gray-700 mb-3">
          Think of a <strong>medicine capsule</strong>:
        </p>
        <div className="bg-white p-4 rounded space-y-2 text-gray-700">
          <p>• The <strong>outer shell</strong> (capsule) protects the medicine inside</p>
          <p>• You don't see or touch the medicine directly (private data)</p>
          <p>• You consume it through a defined way (public methods)</p>
          <p>• The internal composition can change without affecting how you use it</p>
        </div>
        <p className="mt-3 text-gray-700 italic">
          Similarly, encapsulation wraps data and protects it from unauthorized access.
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">🎯 Key Principles</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-3 rounded">
            <h4 className="font-bold text-red-800">1. Data Hiding</h4>
            <p className="text-sm text-gray-700 mt-1">Make fields private to restrict direct access</p>
          </div>
          
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-3 rounded">
            <h4 className="font-bold text-blue-800">2. Public Getters/Setters</h4>
            <p className="text-sm text-gray-700 mt-1">Provide controlled access through public methods</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-3 rounded">
            <h4 className="font-bold text-green-800">3. Validation Logic</h4>
            <p className="text-sm text-gray-700 mt-1">Add checks in setters to maintain data integrity</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">💻 Complete Example</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-red-700 mb-2">❌ Without Encapsulation (Bad)</h4>
            <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
              <pre>{`public class Student {
    public int age;
    public String name;
}

// Usage
Student s = new Student();
s.age = -5;  // Invalid! No validation
s.name = "";  // Empty name allowed!`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">Problem: No control over data validity</p>
          </div>

          <div>
            <h4 className="font-semibold text-green-700 mb-2">✓ With Encapsulation (Good)</h4>
            <div className="bg-gray-800 text-green-400 p-4 rounded text-sm overflow-x-auto">
              <pre>{`public class Student {
    private int age;
    private String name;
    
    // Getter for age
    public int getAge() {
        return age;
    }
    
    // Setter with validation
    public void setAge(int age) {
        if (age > 0 && age < 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age!");
        }
    }
    
    // Getter for name
    public String getName() {
        return name;
    }
    
    // Setter with validation
    public void setName(String name) {
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Invalid name!");
        }
    }
}

// Usage
Student s = new Student();
s.setAge(-5);   // Prints: Invalid age!
s.setAge(20);   // Valid - sets age
s.setName("John");  // Valid - sets name`}</pre>
            </div>
            <p className="text-sm text-gray-600 mt-2 italic">Solution: Data validation and controlled access</p>
          </div>
        </div>
      </div>

      <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
        <h3 className="text-xl font-semibold mb-4 text-purple-800">🧠 Memory Visualization</h3>
        <div className="bg-white p-4 rounded">
          <div className="space-y-4 font-mono text-sm">
            <div className="border-2 border-blue-400 rounded p-3 bg-blue-50">
              <p className="font-bold text-blue-800 mb-2">Heap Memory - Object Instance</p>
              <div className="bg-white p-3 rounded border space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-600">Object Header</span>
                  <span className="text-gray-400">[12 bytes]</span>
                </div>
                <div className="border-t pt-2 space-y-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Lock size={14} className="text-red-500" />
                      <span className="text-red-700">private int age</span>
                    </div>
                    <span className="text-gray-500">= 20 [4 bytes]</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Lock size={14} className="text-red-500" />
                      <span className="text-red-700">private String name</span>
                    </div>
                    <span className="text-gray-500">= ref [4/8 bytes]</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-green-400 rounded p-3 bg-green-50">
              <p className="font-bold text-green-800 mb-2">Method Area - Class Methods</p>
              <div className="bg-white p-3 rounded border space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-green-600" />
                  <span className="text-green-700">public int getAge()</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-green-600" />
                  <span className="text-green-700">public void setAge(int)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-green-600" />
                  <span className="text-green-700">public String getName()</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye size={14} className="text-green-600" />
                  <span className="text-green-700">public void setName(String)</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-3 rounded text-xs">
              <p className="font-semibold text-yellow-800 mb-1">Key Points:</p>
              <ul className="space-y-1 text-gray-700">
                <li>• Private fields stored in object instance (Heap)</li>
                <li>• Public methods stored in Method Area (shared)</li>
                <li>• Compiler prevents direct field access from outside</li>
                <li>• Methods provide controlled access pathway</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border-2 border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">🎁 Benefits of Encapsulation</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-2">Data Protection</h4>
            <p className="text-sm text-gray-700">Prevents unauthorized modification of critical data</p>
          </div>
          <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 mb-2">Flexibility</h4>
            <p className="text-sm text-gray-700">Change internal implementation without affecting users</p>
          </div>
          <div className="bg-purple-50 p-4 rounded border-l-4 border-purple-500">
            <h4 className="font-bold text-purple-800 mb-2">Maintainability</h4>
            <p className="text-sm text-gray-700">Code is easier to maintain and debug</p>
          </div>
          <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-500">
            <h4 className="font-bold text-orange-800 mb-2">Validation</h4>
            <p className="text-sm text-gray-700">Enforce business rules and data integrity</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-2">Java OOP Fundamentals</h1>
        <p className="text-blue-100 text-lg">Packages, Access Modifiers & Encapsulation</p>
      </div>

      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="flex border-b overflow-x-auto">
          {tabs.map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-b-4 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'packages' && <PackagesSection />}
        {activeTab === 'modifiers' && <ModifiersSection />}
        {activeTab === 'encapsulation' && <EncapsulationSection />}
      </div>

      <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-2 border-indigo-200">
        <h3 className="text-xl font-bold text-indigo-800 mb-3">🎓 Summary</h3>
        <div className="space-y-2 text-gray-700">
          <p>• <strong>Packages</strong> organize code into logical namespaces and prevent naming conflicts</p>
          <p>• <strong>Access Modifiers</strong> control visibility: public (all), protected (package + subclass), default (package), private (class only)</p>
          <p>• <strong>Encapsulation</strong> bundles data with methods and hides implementation details for data protection and flexibility</p>
          <p className="text-sm italic text-indigo-700 mt-3">These three concepts work together to create secure, maintainable, and organized Java applications!</p>
        </div>
      </div>
    </div>
  );
};

export default JavaOOPTutorial;