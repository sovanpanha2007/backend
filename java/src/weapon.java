package src;

public class weapon extends item {
    private String type;
    private int damage;
    public weapon(String type, String name, int damage, int quantity) {
        super(name, quantity);
        this.type = type;
        this.damage = damage;
    }
    public String getType(){
        return type;
    }
    public int getDamage(){
        return damage;
    }
    //Abstraction implementation
    @Override
    public String getDetails(){
        return "type: " + type + ", name: " + getName() + ", damage: " + damage + ", quantity: " + getQuantity();
    }
}
