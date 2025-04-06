package recursion;

public class PowerOfNumber {
    public static void main (String[]args)
    {
        int base = 5, x = 3;
        System.out.println (base + " Power " +x+" = "+ powerNumber(base,x));
    }
    public static int powerNumber(int base, int exp) {
         if(exp == 0)
             return 1;
        return (base*powerNumber(base, exp-1));
    }


}
