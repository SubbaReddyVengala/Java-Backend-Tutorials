package java_8_features;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

//Java 8 Program to Remove Duplicate Elements from a List
public class RemoveDuplicates {
    public static void main(String[] args) {
        // Example 1: Integer List
        List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5);
        List<Integer> uniqueNumbers = numbers.stream()
                .distinct()
                .collect(Collectors.toList());
        System.out.println(uniqueNumbers);

        // Example 2: String List
        List<String> fruits = Arrays.asList("apple", "orange", "apple", "banana");
        List<String> uniqueFruits = fruits.stream()
                .distinct()
                .toList();
        System.out.println("Unique fruits: " + uniqueFruits);
    }
}