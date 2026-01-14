#include <vector>
#include <iostream>
#include <map>
#include <tuple>
#include <list>

using namespace std;

class graphL{
    private:
        map<int, list<tuple<int, int>>> adjL; //Map(source, list(tuple(destination, weight)))
        
    public:
        //No Need Construction
        //Method
        void add_edge(int u, int v, int w=1, bool is_directed = false){
            adjL[u].push_back(make_tuple(v,w));
            if (!is_directed){
                adjL[v].push_back(make_tuple(u, w));
            }     
        };
        void printL(){
            for(auto i: adjL){
                //Print map key
                cout<<i.first<<"->";
                //Print list value(tuples)
                for (auto j : i.second){
                    cout<<"["<<get<0>(j)<<","<<get<1>(j)<<"]->";
                }
                cout<< "null" <<endl;
            }
        };
};
