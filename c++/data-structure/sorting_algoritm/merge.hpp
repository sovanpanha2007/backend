#include <iostream>
#include <vector>
using namespace std;

vector<int> merge(const vector<int> left, const vector<int> right) {
    vector<int> result;
    //Indices for left and right sublists
    int i = 0, j = 0;
    //Merging process
    cout << "Merging: ";
    for (const auto& val : left) {
        cout << val << " ";
    }
    cout << "and ";
    for (const auto& val : right) {
        cout << val << " ";
    }
    cout << endl;
    while (i < left.size() && j < right.size()) { 
        if(left[i] <= right[j]){
            result.push_back(left[i]);
            i++;
        } else {
            result.push_back(right[j]);
            j++;
        }
    }
    //Appeding remining elements from left sublist
    while(i < left.size()){
        result.push_back(left[i]);
        i++;
    }
    //Appeding remining elements from right sublist
    while(j < right.size())
    {
        result.push_back(right[j]);
        j++;
    }
    //Displaying merged result
    cout << "Merged result: ";
    for (const auto& val : result) { 
        cout << val << " ";
    }
    cout << endl;
    return result;
}
    

vector<int> mergeSort(const vector<int>& arr) {
    int size = arr.size();
    if (size <= 1){
        return arr;
    }
    //Mid point
    int mid = size / 2;
    //Dividing array into two halves
    vector<int> left(arr.begin(), arr.begin() + mid);
    vector<int> right(arr.begin() + mid, arr.end());
    //Recursively sorting both halves
    cout << "Dividing: ";
    for (const auto& val : left) {
        cout << val << " ";
    }   
    cout << endl;
    vector<int> sortLeft = mergeSort(left);
    cout << "Dividing: ";
    for (const auto& val : right) {
        cout << val << " ";
    }
    cout << endl;
    vector<int> sortRight = mergeSort(right);
    //Merging sorted halves
    cout << "Merging sorted halves: ";
    for (const auto& val : sortLeft) {
        cout << val << " ";
    }
    cout << "and ";
    for (const auto& val : sortRight) {
        cout << val << " ";
    }
    cout << endl;
    return merge(sortLeft, sortRight);
}

