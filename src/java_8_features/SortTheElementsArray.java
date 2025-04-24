package java_8_features;

import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;

public class SortTheElementsArray {
    public static void main(String[] args) {
        int[] arr = {5, 8, 5, 7, 8, 10};

        Map<Integer,Long> frequencyMap = Arrays.stream(arr)
                .boxed()
                .collect(Collectors
                        .groupingBy(num->num,Collectors.counting()));

        frequencyMap.forEach((key, value) ->
                System.out.println("Element: " + key + ", Frequency: " + value)
        );

    }
}
