public class Demo3 {
    public static void main(String[] args) {
        int a = 10;
        int b;
        b = a-- + --a + a++;
        System.out.println("a=" + a);
        System.out.println("b=" + b);
    }
}
