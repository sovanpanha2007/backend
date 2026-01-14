package src;

public abstract class item {
    private String name;
    private int quantity;
    private String reason;

    //Constructor
    public item(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    // public item(String name, String reason){
    //     this.name = name;
    //     this.reason =reason;
    // }
    //Method 
    //Get
    public String getName(){
        return name;
    }
    public int getQuantity(){
        return quantity;    
    }
    public String getReason(){
        return reason;
    }
    //Abstraction - forces child classes to implement their own version
    public abstract String getDetails();
    
    //Run time polymorphism / Abstraction
    //Override
    @Override
    public String toString(){
        return "name: " + name + ", quantity: " + quantity;
    }
}
//This the blueprint of all type items (Parent)