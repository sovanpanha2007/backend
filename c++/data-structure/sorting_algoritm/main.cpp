#include <iostream>
#include "merge.hpp"
#include "quick.hpp"
#include <vector>
using namespace std;

int main(){
    vector<int> arr={38, 27, 43, 3, 9, 82, 10}; 
    cout<<"Original array: ";
    for(int num : arr) {
        cout << num << " ";
    }
    cout << endl;
    // Merge Sort
    vector<int> sortedArrMerge = mergeSort(arr);
    cout << "Sorted array using Merge Sort: ";
    for(int num : sortedArrMerge) {
        cout << num << " "; 
    }
    cout << endl;   
}