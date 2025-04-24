package arrays;

import java.util.Arrays;

public class HalfSort {
    public static void main(String[] args) {
        int[] arr = {5, 2, 9, 1, 6, 3, 8, 4};
        int n = arr.length;
        int mid = n / 2;
        Arrays.sort(arr,0,mid);
        Integer[] secondHalf = new Integer[n-mid];
        for (int i = 0; i < secondHalf.length; i++) {
            secondHalf[i] = arr[mid + i];
        }

    }
}
