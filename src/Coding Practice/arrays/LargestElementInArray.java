package arrays;

public class LargestElementInArray {
    public static void main(String[] args) {

        int arr[] ={34,2,5,6,10,780};

        int max=arr[0];
//        for(int i=0;i<arr.length;i++)
//        {
//            if(arr[i]>max)
//                max=arr[i];
//        }
        for (int num : arr) {
            if (num > max) {
                max = num;
            }
        }
        System.out.println("The largest element in an array : "+max);
    }
}
