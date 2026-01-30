package loan.src;

public class Main {
    public static void main(String[] args) {
        LoaningSystem ABA = new LoaningSystem("ABA",001,0.05,10);
        Applicant app1=new Applicant("Kimhong","M",2000,18);
        Applicant app2=new Applicant("Vichea","M",1000,18);

        Co myCo=new Co(001, 001, "ABA",10);
        myCo.addApplication(app1,600.00,2, ABA);
        myCo.addApplication(app2, 300.0,1, ABA); 
        myCo.printContract();
        ABA.displayList();
    }
}
