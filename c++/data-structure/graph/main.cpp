#include <vector>
#include <iostream>
#include "m.hpp"
#include "l.hpp"

using namespace std;
int main(){
//     graphM n(6);
//     n.addEdge(0,1,1,true);
//     n.addEdge(0,4,1,true);
//     n.addEdge(0,2,1,true);
//     n.addEdge(1,3,1,true);
//     n.addEdge(3,2,1,true);
//     n.addEdge(2,1,1,true);
//     n.addEdge(0,1,1,true);
//     n.addEdge(0,1,1,true);
//     n.printM();
    graphL g;
    g.add_edge(0,1,1,true);
    g.add_edge(0,2,1,true);
    g.add_edge(1,3,1,true);
    g.add_edge(1,4,1,true);
    g.add_edge(0,1,1,true);
    g.add_edge(0,1,1,true);
    g.add_edge(0,1,1,true);
    g.printL();
}