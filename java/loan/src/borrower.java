package loan.src;

public class borrower {
    private String name;
    private String sex;
    private String job;
    private int age;
    private double loanMoney;

    public borrower(String name, String sex, String job, int age, double loanMoney) {
        this.name = name;
        this.sex = sex;
        this.job = job;
        this.age = age;
        this.loanMoney = loanMoney;
    }

    //set
    //in order for parent to bank to change value of attributes
    public void setLoanMoney(double loanMoney) {
        this.loanMoney = loanMoney;
    }
    public String getName() {
        return name;
    }
    public String getSex() {
        return sex;
    }
    public String getJob() {
        return job;
    }
    public int getAge() {
        return age;
    }
    public double getLoanMoney(){
        return loanMoney;
    }
    public String toString(){
        return ("Name: "+ getName() + " Loan: " + getLoanMoney() );
    }
}