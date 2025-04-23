package java_8_features;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class SecondSmallestInList {
    public static void main(String[] args) {
        List<Integer> list = Arrays.asList(10, 5, 3, 8);

        Optional<Integer> secondSmallest = list.stream()
                .distinct()
                .sorted()
                .skip(1)
                .findFirst();

        if (secondSmallest.isPresent()) {
            System.out.println("Second smallest element is: " + secondSmallest.get());
        } else {
            System.out.println("Second smallest element not found.");
        }
    }
}

/*
🧠 How It Works:
stream() → creates a Stream<Integer> (not an IntStream)

distinct() → removes duplicates

sorted() → sorts in ascending order

skip(1) → skips the first element (smallest)

findFirst() → gives the second smallest


 */
