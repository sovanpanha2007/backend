#include <iostream>
#include <vector>
#include <string>

#include "btree.hpp"

using namespace std;

void print_t(vector<int> v, string msg){
    cout<<msg<<" ";
    for(auto i: v){
        cout<<i<<" ";
    }
    cout<<endl;

}


int main(){
    BTree<int> tree;

    tree.insert(6);
    tree.insert(3);
    tree.insert(9);
    tree.insert(7);
    tree.insert(15);
    tree.del(15);

    print_t(tree.inorder(), "In Order: ");
    // print_t(tree.preorder(), "Pre Order: ");
    // print_t(tree.postorder(), "Post Order: ");

    return 0;
}
