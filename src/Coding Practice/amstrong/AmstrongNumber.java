package amstrong;

public class AmstrongNumber {
    public static void main(String[] args) {
        int num = 371,temp,digit;
        int sum=0;
        int len = leng(num);
        temp=num;
        while(temp!=0){
           digit=temp%10;
           sum+=Math.pow(digit,len);
           temp/=10;
        }
        if(sum==num){
            System.out.println(num +" Armstrong Number");
        }else
        {
            System.out.println(num + " Not an Armstrong Number");
        }
    }

    private static int leng(int num) {
        int len=0;
        while(num!=0){
            int digit= num%10;
            len++;
            num=num/10;
        }
        return len;
    }
}
