#include <iostream>
using namespace std;

struct Node
{
    int value;
    Node* next;
    Node(int value) {
        this->value = value;
        next = nullptr  ;
    }
};

class Queue {
    private: 
        int count;
        Node* head;
        Node* tail;
    public:
        Queue() : head(nullptr), tail(nullptr), count(0) {}

        void enqueue(int value) {
            Node* newNode = new Node(value);
            if (isEmpty()) {
                head=tail= newNode;
                tail->next = head;
            } else  {
                tail->next = newNode;
                tail = newNode; 
                tail->next = head;
            }    
            count++;            
        }   
        void dequeue(){
            if (isEmpty()) {
                cout << "Underflow" << endl;
                return;
            }
            Node* temp = head;
            head = head->next;
            tail->next = head;
            delete temp;
        }
        void peak() {
            cout << head->value << endl; 
        }
        void rare() {
            cout << tail->value << endl;
        }
        bool isEmpty() {
            return count == 0 || !head;
        }
        int getSize() {
            if (isEmpty()) { cout << "Underflow" << endl;}
            int size =0;
            Node* cur= head;
            do {
                size++;
                cur = cur->next;
            } while(cur !=head);
            return size;
        }
        // NOTE: circular single linklist display
        void display(){
            Node* temp = head;
            do {
                cout << temp->value <<" ";
                temp = temp->next;
            } while(temp != head);
            cout << endl;
        }
};