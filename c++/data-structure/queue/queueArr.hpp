#include <iostream>
#include <vector>
using namespace std; 
#define Max 5

class Queue {
    private: 
        int front;
        int rear;
        int count;
        vector<int> arr;
    public:
        Queue(){
            front = 0;
            rear = 0;
            count =0;
            arr = vector<int>(Max); // allocate memory for vector array
        }
        void enqueue(int num){
            if (isFull()) {
                cout << "Overflow" << endl;
            }
            arr[rear] = num;
            //rear points to the next of last num
            rear =(rear + 1) % Max; // we use modulo (return reminder) to wrap-around index 
            count++;
        }
        void dequeue(){
            if (isEmpty()) {
                cout << "Underflow" << endl;
            }
            count--;
            front++;
        }
        void getSize(){
            cout << count << endl; 
        }
        void peek(){
            if (isEmpty()){
                cout << "Underflow" << endl;
            } else cout << arr[front] << endl;

        }
        void rar(){
            if (isEmpty()){
                cout << "Underflow" << endl;
            } else {
            // rear - 1 : last index (+ Max) % Max : to wrap around index 
            int lastIndex = (rear -1 + Max) % Max;
            cout << arr[lastIndex] << endl;
            }
        }
        bool isEmpty() {return (count==0) ? true : false;}
        bool isFull() {return (count==Max);}
        void display(){
            if (isEmpty()) {
                cout << "Underflow" << endl;
            }
            for(int i =0; i < count; i++){
                int idx = (i + front) % Max;
                cout << arr[idx] <<" ";
            }
            cout << endl;
        } 
};