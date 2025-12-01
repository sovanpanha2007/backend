#include <iostream>
#include <vector>
using namespace std;

// Quick Sort Implementation
void quickSort(vector<int>&arr, int low, int high) {
    int pivot;

    if(arr.size() == 0) {
        return;
    }
    if(low >= high) {
        return;
    }
    pivot = arr[(low + high) / 2];
    int i = low;
    int j = high;
    vector<int> left(arr.begin(), arr.begin() + pivot); 
    vector<int> right(arr.begin() + pivot, arr.end());
    
}