package java_8_features;

import java.util.Arrays;

public class SortTheElementsInArray {
    public static void main(String[] args) {
        int [] arr = new int [] {10, 40, 30, 20};
        int [] result = Arrays.stream(arr).sorted().toArray();
        for(int i : result)
            System.out.println(i+ " ");
    }
}
