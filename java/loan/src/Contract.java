package loan.src;


public class Contract {
   //after CO review the application we need to make a contract make contract with applicant information amount bank name etc. contract should store application object after co review
   Applicant applicant; 
   LoaningSystem bank; 
   int duration; 
   double interestRate; 
   double principal; 

   public Contract(Applicant applicant, double principal,int duration,LoaningSystem bank ){
      this.applicant = applicant;
      this.principal = principal;
      this.duration = duration;
      this.bank = bank;
      this.interestRate = bank.currentInterestsRate;
   }
   public void calculateTotal() {
      principal= principal * Math.pow(1+ interestRate, duration); // compound calculation
   }
}
