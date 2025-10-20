package java_8_features;

import java.util.Scanner;

//Java 8 Program to Find the Sum of All Digits of a Number
public class SumOfDigits {
    public static void main(String[] args) {
        // Creating a Scanner object to read input
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a number:");
        String number = scanner.nextLine();
        scanner.close(); // Closing the scanner

        // Calculating the sum of digits
        int sum = number.chars()
                .map(Character::getNumericValue)
                .sum();
        // Displaying the sum of the digits
        System.out.println("The sum of the digits is: " + sum);
    }
}
