package digitsum;

public class SumOfTheDigitsOfNumber {
    public static void main(String[] args) {
        int num =1234;
        int sum=0,digit,rem;
        int temp=num;

        //loop to find the sum of the digits
        while(temp!=0)
        {
            digit=temp%10;
            sum+=digit;
            temp=temp/10;
        }
        System.out.println(sum);
    }
}
