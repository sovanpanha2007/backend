#include <vector>
#include <iostream>

using namespace std;

class graphM{
    private:
    //2D vector(array)
        vector<vector<int>> adjM;
    public:
    //Construction 
        graphM(int n){
            adjM = vector<vector<int>>(n, vector<int>(n,0));
        }
    //Method 
        void printM(){
            for (auto i: adjM){
                for (auto j:i){
                    cout <<j<<" ";
                }
                cout << endl;
            }
        }
        void addEdge(int u, int v, int w =1, bool is_direct = false){
            // Check if edge is out of bound
            if (u >= adjM.size() || v >= adjM.size()) {
                cout << "out of bound" << endl;
                return;
            }
            adjM[u][v] = w;
            //check if indirect or direct (always indirect if no input)
            if (!is_direct){
                adjM[v][u] = w;
            }
        }
};