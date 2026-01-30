package loan.src;

public class Co{
    String bankName;
    int coId;
    int bankId;
    Contract[] validContractList;
    int count;

    public Co(int coId, int bankId, String bankName,int maxRequest){
        this.coId = coId;
        this.bankId = bankId;
        this.bankName = bankName;
        this.validContractList = new Contract[maxRequest];
        this.count=0;
    }
    public void addApplication(Applicant applicant,double loanAmount,int duration, LoaningSystem bank){
         if(applicant==null){
            System.out.println("Cannot add: application is null");
            return;
         }
         if(ValidateRequest(applicant,loanAmount)){
             Contract validContract = new Contract(applicant, loanAmount,duration,bank);
             validContract.calculateTotal();
             bank.addContract(validContract);
             validContractList[count] = validContract;
             count++;
             System.out.println("Complete");
         } else {
            System.out.println(applicant.name + "'s request was not accepted");
         }
        
    }

    public boolean ValidateRequest(Applicant applicant, double loanAmount){
        int salary=applicant.salary;
        int age=applicant.age;
            if(age >= 18 &&  salary/2 > loanAmount){
              return true;
            }
            return false;
    }

    public void printContract() {
            System.out.printf("validApplicant: ");
            for (int i=0;i<count;i++) {
            System.out.printf(validContractList[i].contractApplicant.name + ", loanMoney: " + validContractList[i].principal);
            }
    }
}