package src;
import java.util.ArrayList;

public class inventory {
    private ArrayList<item> items;

    // Constructor 
    public inventory() {
        items = new ArrayList<>();
    }
    //Methods
    // Add item
    public void addItem(item Item) {
        items.add(Item);
    }
    // Display inventory
    public void displayInv(){
            System.out.println(items.toString());
    }
}
//This is where you store every single/type of items