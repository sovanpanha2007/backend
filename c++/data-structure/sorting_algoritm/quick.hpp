#include <iostream>
#include <vector>
using namespace std;

int findMedian(vector<int> &arr, int low, int high) {
    int mid = low + (high - low) / 2;
    int a = arr[low], b = arr[mid], c = arr[high];
    if ((a <= b && b <= c) || (c <= b && b <= a)) return mid;
    else if ((b <= a && a <= c) || (c <= a && a <= b)) return low;
    else return high;
}

int Partition(vector<int> &arr, int low, int high) {
    int pivotIndex = findMedian(arr, low, high);
    int pivot = arr[pivotIndex];

    int i = low;
    int j = high;

    while (true) {
        while (arr[i] < pivot) i++;
        while (arr[j] > pivot) j--;

        if (i >= j) return i;  // stop when pointers cross

        swap(arr[i], arr[j]);
        i++;
        j--;
    }
}

void quickSort(vector<int> &arr, int low, int high) {
    if (low >= high) return;  // correct base case

    int pi = Partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi, high);
}

void print(vector<int> &arr) {
    cout << "Sorted array: ";
    for (int x : arr) cout << x << " ";
    cout << endl;
}


