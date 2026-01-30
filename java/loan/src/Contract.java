package loan.src;
public class Contract {
   //after CO review the application we need to make a contract make contract with applicant information amount bank name etc. contract should store application object after co review
   Applicant contractApplicant;
   int duration;
   int interestRate;
   double principal;
   LoaningSystem bank;

   public Contract(Applicant applicant, double principal,int duration, int interestRate,LoaningSystem bank ){
      this.contractApplicant = applicant;
      this.principal = principal;
      this.duration = duration;
      this.interestRate = interestRate;
      this.bank = bank;
   }
   public double calculateTotal() {
      return principal * Math.pow(1+ interestRate, duration); // compound calculation
   }
}
