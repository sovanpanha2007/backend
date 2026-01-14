package src;
public class main {
    public static void main(String[] args) {
        inventory Inventory = new inventory();
        inventory Garbage = new inventory();
        food banana = new food("Friut", "Banana", 2);
        weapon ak = new weapon("ak2", "ak2-A", 120, 2);
        // food rottenFood = new food("Fruit", "Apple", "rotten");
        System.out.println(banana.getDetails());
        Inventory.addItem(ak);
        // Garbage.addItem(rottenFood);
        Inventory.displayInv();
        // Garbage.displayInv();
        }
    }


    