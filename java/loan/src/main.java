package loan.src;

public class main {
    public static void main(String[] args) {
        System.out.println("loan is proccessing...");
        bank bank1 = new bank();
        borrower panha = new borrower("panha", "M", "student" , 18, 100);
        bank1.addBorrower(panha);
        bank1.displayInv();
        bank1.payBackMoney("panha", 10);
        bank1.displayInv();
    }
}
