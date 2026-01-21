package loan.src;
import java.util.ArrayList;

public class bank {
    private  ArrayList<borrower> borrowers; 
    public double interestRate = 1.3;

    public bank() {
        borrowers = new ArrayList<>() ;
    }
    
    public void addBorrower(borrower borrower){
        borrowers.add(borrower);
        borrower.setLoanMoney( interestRate * borrower.getLoanMoney());
    }

    public void payBackMoney(String name, double payBackMoney) {
        for (borrower borrower : borrowers) {
            if (name == borrower.getName()) {
                borrower.setLoanMoney(borrower.getLoanMoney() - payBackMoney);
            }
        }       
    }
    public void displayInv(){
        System.out.println(borrowers.toString());
    }
}