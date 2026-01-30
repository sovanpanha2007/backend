package loan.src;

public class LoaningSystem {
    // after making contract make sure you put the contract into the system 
    int bankId;
    String bankName;
    double currentInterestsRate;
    Contract[] contractList;
    int count;
   
    public LoaningSystem(String bankName,int bankId, double currentInterestsRate, int maxContract) {
        this.bankName = bankName;
        this.bankId = bankId;
        this.currentInterestsRate = currentInterestsRate;
        contractList = new Contract[maxContract];
        count = 0;
    }
    public void addContract(Contract contract) {
        contractList[count] = contract;
        count++;
    }
    public void displayList(){
        System.out.print("\nList: ");
        for (int i = 0; i < count; i++) {
            System.out.print(" "+ contractList[i].contractApplicant.name);
        }
    }

}