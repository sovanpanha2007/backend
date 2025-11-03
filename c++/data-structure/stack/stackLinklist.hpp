#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
    Node(int data) {this->data = data;}
};

class Stack {
    private :
    Node* top;
    public :
    //contructor
    Stack() { top = nullptr; };

    //clear
    ~Stack() {
        Node* temp;
        while(top != nullptr){
            temp = top;
            top = top->next;
            delete temp;
        }
        cout <<"Stack is cleared" << endl;
    }
    //push
    void push(int data) {
        Node* newTop = new Node(data);
        Node* temp = top;
        top = newTop;
        top->next = temp;
    }
    void pop(){
        Node* temp = top;
        top = top->next;
        delete temp;
        }
    void display(){
        Node* cur = top;
        while(cur != nullptr) {
            cout << cur->data << " ";
            cur = cur->next;
        }
        cout << endl;
    }
};
