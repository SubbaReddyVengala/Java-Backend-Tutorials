package java_8_features;

import java.util.Arrays;
import java.util.List;
import java.util.OptionalInt;

public class MaxMinWithStreams {
    public static void main(String[] args) {

        // Creating a list of integers
        List<Integer> numbers = Arrays.asList(1,2,5,0,19);

        // Finding the maximum number using Stream API
        OptionalInt maxNumber = numbers.stream().mapToInt(Integer::intValue).max();

        // Finding the minimum number using Stream API
        OptionalInt minNumber = numbers.stream().mapToInt(Integer::intValue).min();

        // Displaying the maximum and minimum numbers
        maxNumber.ifPresent(max -> System.out.println("Maximum Number: " + max));
        minNumber.ifPresent(min -> System.out.println("Minimum Number: " + min));

    }
}
