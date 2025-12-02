#ifndef SECTION_HPP
#define SECTION_HPP
#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

vector<int> sectionSort(vector<int> &arr, int size){
    for (int i =0; i<= size-1;i++){
        //assume the min the first index
        int min = i;
        //find the min index in the array
        for (int j=i; j<= size -1;j++){
            if (arr[j]<arr[min]){
                min = j;
            }
        }
    swap(arr[i], arr[min]);
    }
    return arr;
}
#endif
