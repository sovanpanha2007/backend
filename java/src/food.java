package src;

public class food implements itemStaff {
    private String type;
    private String name;
    private int quantity;
    private String reason;
    
    //Constructor
    public food(String type, String name, int quantity) {
        this.name = name;
        this.quantity= quantity;
        this.type = type;
    }
    // public food(String type, String name,String reason) {
    //     super(name, reason);
    //     this.type = type;
    // }
    public String getType(){
        return type;
    }
    public String getName(){
        return name;
    }
    public int getQuantity(){
        return quantity;    
    }
    public String getReason(){
        return reason;
    }
    //Abstraction implementation
    @Override
    public String getDetails(){
        if (getReason() != null){
            return "type: " + type + ", name: " + getName() + ", reason: " + getReason();
        } else {
            return "type: " + type + ", name: " + getName() + ", quantity: " + getQuantity();
        }
    }
    //Run time polymorphism
    @Override
    public String toString(){
        if (getReason() != null){
            return "type" + type + ", name: " + getName() + ", reason: " + getReason();
        } else {
            return "type: " + type + ", name: " + getName() + ", quantity: " + getQuantity();
        }
    }
}
// A child/type of item (inheritance)