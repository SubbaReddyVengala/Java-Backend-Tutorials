public class ReverseNumber {
    public static void main(String[] args) {
        int num =4321;
        int rev=0,digit;
        int temp=num;

        //loop to find the reverse of the digits
        while(temp!=0)
        {
            digit=temp%10;
            rev=(rev*10)+digit;
            temp=temp/10;
        }
        System.out.println(rev);
    }
}
