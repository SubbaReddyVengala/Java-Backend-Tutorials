package java_8_features;

import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

//Java 8 Program to Find the Age of a Person if the Birthday Date has Given
public class CalculateAge {
    public static void main(String[] args) {
        // Creating a Scanner object for reading input

        Scanner sin = new Scanner(System.in);
        System.out.println("Enter your birthdate (YYYY-MM-DD):");
        String birthDateString = sin.nextLine();
        sin.close();
// Parsing the input string to a LocalDate
        LocalDate birthDate =LocalDate.parse(birthDateString);
// Getting the current date
        LocalDate currentDate = LocalDate.now();

        // Calculating the period between the birthdate and the current date
        Period age = Period.between(birthDate, currentDate);

        // Displaying the age
        System.out.println("You are " + age.getYears() + " years old.");




    }
}
