package java_8_features.interview;

import java.util.Arrays;
import java.util.List;
import java.util.OptionalInt;

public class MaxMinWithStreams {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7);
        OptionalInt maxNumber = nums.stream()
                .mapToInt(Integer::intValue)
                .max();

        OptionalInt minNumber = nums.stream()
                .mapToInt(Integer::intValue)
                .min();
        // Displaying the maximum and minimum numbers
        maxNumber.ifPresent(max -> System.out.println("Maximum Number: " + max));
        minNumber.ifPresent(min -> System.out.println("Minimum Number: " + min));


    }
}
