package numberconversion;

import java.util.Scanner;

public class ReplaceZeroWithOne {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number: ");
        int number = sc.nextInt();

        int result = 0, place = 1;

        if (number == 0) {
            result = 1;  // Special case: If input is 0, output should be 1
        } else {
            while (number > 0) {
                int digit = number % 10; // Extract last digit
                if (digit == 0) {
                    digit = 1; // Replace 0 with 1
                }
                result = result + digit * place; // Construct new number
                place *= 10;
                number /= 10; // Remove last digit
            }

        }

        System.out.println("Converted number is: " + result);
        sc.close();
    }
//    public static void main(String[] args)
//    {
//        //scanner class declaration
//        Scanner sc = new Scanner(System.in);
//        //input from the user
//        System.out.print("Enter the number : ");
//        int number = sc.nextInt();
//        //convert the number to string and then calculate its length
//        String str = Integer.toString(number);
//        int len = str.length();
//        String str1 = "";
//        //use the logic to replace all 0's with 1 in a given integer
//        for(int i = 0 ; i < len ; i++)
//        {
//            if(str.charAt(i) == '0')
//                str1 = str1 + '1';
//            else
//                str1 = str1 + str.charAt(i);
//        }
//        System.out.println("Converted number is: "+str1);
//        //closing scanner class(not compulsory, but good practice)
//        sc.close();
//    }
}
