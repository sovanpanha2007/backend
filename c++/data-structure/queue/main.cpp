#include <iostream>
// #include "queueArr.hpp"
#include "queueLinklist.hpp"
using namespace std;

int main() {
    Queue queue;
    queue.enqueue(10);
    queue.enqueue(15);
    
    queue.enqueue(20);
    queue.enqueue(20);
    queue.enqueue(20);
    queue.enqueue(20);
    queue.enqueue(20);
    queue.enqueue(10);
    // queue.dequeue();
    // queue.dequeue();
    // queue.dequeue();
    // queue.dequeue();
    // queue.dequeue();
    queue.peak();
    queue.rare();   
    // queue.getSize();
    // queue.peek();
    // queue.rar();
    queue.display();
}
