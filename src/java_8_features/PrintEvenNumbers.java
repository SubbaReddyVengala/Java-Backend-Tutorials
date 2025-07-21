package java_8_features;

import java.util.Arrays;
import java.util.List;

//Java 8 Program to Print Even Numbers from a List
public class PrintEvenNumbers {
    public static void main(String[] args) {
// Creating a list of integers
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Using Stream API to filter and print even numbers
        System.out.println("Even numbers:");
        numbers.stream() // Converting the list to a stream
                .filter(n->n % 2==0)
                .forEach(System.out::println);

    }
}
