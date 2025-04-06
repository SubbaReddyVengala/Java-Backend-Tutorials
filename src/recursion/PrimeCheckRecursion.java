package recursion;

public class PrimeCheckRecursion {

    // Recursive function to check if 'number' is divisible by 'divisor'
    public static boolean isPrime(int number, int divisor) {
        // Base case 1: if number is less than or equal to 2
        if (number <= 2) {
            return number == 2;
        }

        // Base case 2: if number is divisible by current divisor
        if (number % divisor == 0) {
            return false; // Not a prime number
        }

        // Base case 3: if divisor*divisor > number, then it's a prime
        if (divisor * divisor > number) {
            return true; // No divisor found till sqrt(number), so it's prime
        }

        // Recursive call with next divisor
        return isPrime(number, divisor + 1);
    }

    public static void main(String[] args) {
        int number = 29; // You can change this to test another number

        // Call the function with number and starting divisor = 2
        boolean result = isPrime(number, 2);

        // Print the result
        if (result) {
            System.out.println(number + " is a Prime number.");
        } else {
            System.out.println(number + " is NOT a Prime number.");
        }
    }
}
