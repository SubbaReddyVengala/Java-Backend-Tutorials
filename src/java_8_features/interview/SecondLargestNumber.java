package java_8_features.interview;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

public class SecondLargestNumber {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7);

        Optional<Integer> secondLargest = nums.stream()
                .distinct()
                .sorted(Comparator.reverseOrder())
                .skip(1)
                .findFirst();

        if (secondLargest.isPresent()) {
            System.out.println("The second largest number is: " + secondLargest.get());
        } else {
            System.out.println("The list does not have enough unique numbers.");
        }
    }

}
