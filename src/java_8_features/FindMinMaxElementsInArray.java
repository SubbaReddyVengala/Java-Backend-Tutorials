package java_8_features;

import java.util.Arrays;
import java.util.IntSummaryStatistics;

public class FindMinMaxElementsInArray {
    public static void main(String[] args) {

        int arr[] ={34,2,5,6,10,780};

        IntSummaryStatistics stats = Arrays.stream(arr).summaryStatistics();

        System.out.println("Minimum element in the array: " + stats.getMin());

        System.out.println("Maximum element in the array: " + stats.getMax());


    }
}
/*🧠 Explanation:
        Arrays.stream(arr) → converts the array to IntStream

        .summaryStatistics() → gives an object containing:

getMin() → minimum value

getMax() → maximum value

getAverage(), getSum(), getCount() — also available!*/