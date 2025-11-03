#include <iostream>
#include <vector>
using namespace std;

class Stack {
    private :
    vector<int> vector_array;
    int top;
    public:
    Stack() {
        top = -1; // using -1 for stack with no element because index start with 0
    };
    ~Stack() {
        top = -1;
        cout << "Stack cleared." << endl;
    };
    void push(int value) {
        if (top == vector_array.size() -1){
            cout << "Stack Overflow" << endl;
            return;
        }
        top++;
        vector_array[top] = value;
        cout << "Pushed " << value << " onto the stack." << endl;
    }
    void pop(){
        if (top == -1) {
            cout << "Stack Underflow" << endl;
            return;
        }
        top--;
        cout << "Popped " << vector_array[top] << " from the stack." << endl;
    }
    void peek(){
        if (top == -1) {
            cout << "Stack is empty" << endl;
            return;
        }
        cout << "Top element is " << vector_array[top] << endl;
    }
    void display(){
        if (top == -1) {
            cout << "Stack is empty" << endl;
            return;
        }
        cout << "Stack elements are: ";
        for (int i = 0; i <= top; i++) {
            cout << vector_array[i] << " ";
        }
        cout << endl;
    }
    void clear(){
        top = -1;
        cout << "Stack cleared." << endl;
    }
};
