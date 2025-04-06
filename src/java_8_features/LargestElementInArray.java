package java_8_features;

import java.util.Arrays;

public class LargestElementInArray {

    public static void main(String[] args) {

        int arr[] ={34,2,5,6,10,780};

        int max = Arrays.stream(arr)
                .max()
                .orElseThrow(()-> new IllegalArgumentException("Array is Empty"));

        System.out.println("The largest element in an array : "+ max);
    }
}
