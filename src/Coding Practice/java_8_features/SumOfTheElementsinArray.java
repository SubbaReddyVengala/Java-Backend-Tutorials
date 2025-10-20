package java_8_features;

import java.util.Arrays;

public class SumOfTheElementsinArray {
    public static void main(String[] args) {
        int arr[] = {12, 13, 1, 10, 34, 10};

        int result = Arrays.stream(arr).sum();
        System.out.println("Sum of the elements in array : "+result);

        double average = Arrays.stream(arr).average().orElse(0);
        int max = Arrays.stream(arr).max().orElse(Integer.MAX_VALUE);
        int min = Arrays.stream(arr).min().orElse(Integer.MAX_VALUE);

        System.out.println("Average = " + average);
        System.out.println("Max = " + max);
        System.out.println("Min = " + min);


    }
}
