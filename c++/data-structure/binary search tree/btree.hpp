#ifndef BTREE
#define BTREE

#include "node.hpp"
#include <vector>
#include <queue>

using namespace std;

template <typename T>

class BTree{
    private:
        Node<T>* root;

    public:
        BTree(){
            root = nullptr;
        }

        void insert(T value){
            if(root == nullptr){
                root = new Node<T>(value);
                return;
            }
            Node<T>* cur = root;
            while(true){
                if(cur->value < value){
                    if(cur->right == nullptr){
                        cur->right = new Node<T>(value);
                        break;
                    }else{
                        cur = cur->right;
                    }
                } else if(cur->value > value){
                    if(cur->left == nullptr){
                        cur->left = new Node<T>(value);
                        break;
                    }else{
                        cur = cur->left;
                    }
                }
            }
        }
        void del(T value){
            if (root == nullptr) return;
            // Deletion logic to be implemented
            Node<T>* cur = root;
            
            while(cur != nullptr){
                if(cur->value == value){
                    //found the node to be deleted
                    break;
                } else if(cur->value < value){
                    cur = cur->right;
                } else {
                    cur = cur->left;
                }
            }
            //Node has no children(leaf node)
            if(cur->left == nullptr && cur->right == nullptr) {
                delete cur;
            } 
            //Node has one child(either left or right)
            if(cur->left !=nullptr && cur->right == nullptr) {
                Node<T>* temp = cur;
                cur = cur->left;
                delete temp;
            } else if(cur->left == nullptr && cur->right != nullptr) {
                Node<T>* temp = cur;//If the node has two children → more complex (replace with inorder successor/predecessor).
                cur = cur->right;
                delete temp;
            }
            //Node has two children
            // Find inorder successor
            // Replace value with inorder successor (smallest in right subtree)
            else {
                Node<T>* temp = cur->right;
                while(temp->left != nullptr) {
                    temp = temp->left;
                }
                T val = temp->value;
                //recursively delete the inorder successor
                del(temp->value);
                cur->value = val;
            }
        }
        Node<T>* getRoot(){
            return root;
        }

        vector<T> inorder(){
            return inorder_traversal(root);
        }
        vector<T> preorder(){
            return pre_order_traversal(root);
        }
        vector<T> postorder(){
            return post_order_traversal(root);
        }
        vector<T> levelorder(){
            return level_order_traversal(root);
        }


    private:
        vector<T> inorder_traversal(Node<T>* r){
            vector<T> result;

            if(r == nullptr) return result;

            // left
            vector<T> left = inorder_traversal(r->left);
            result.insert(result.end(), left.begin(), left.end());

            // cur/root
            result.push_back(r->value);

            // right
            vector<T> right = inorder_traversal(r->right);
            result.insert(result.end(), right.begin(), right.end());

            return result;
        }
        vector<T> post_order_traversal(Node<T>* r){
            vector<T> result;

            if(r == nullptr) return result;



            // left
            vector<T> left = post_order_traversal(r->left);
            result.insert(result.end(), left.begin(), left.end());


            // right
            vector<T> right = post_order_traversal(r->right);
            result.insert(result.end(), right.begin(), right.end());

            // cur/root
            result.push_back(r->value);

            return result;
        }
        vector<T> pre_order_traversal(Node<T>* r){
            vector<T> result;

            if(r == nullptr) return result;

            // cur/root
            result.push_back(r->value);

            // left
            vector<T> left = pre_order_traversal(r->left);
            result.insert(result.end(), left.begin(), left.end());


            // right
            vector<T> right = pre_order_traversal(r->right);
            result.insert(result.end(), right.begin(), right.end());


            return result;
        }

        vector<T> level_order_traversal(Node<T> * r){
            queue<Node<T>*> q;
            vector<T> result;

            q.push(r);
            while (!q.empty())
            {
                Node<T>* cur = q.front();
                result.push_back(cur->value);
                if(cur->left != nullptr){
                    q.push(cur->left);
                }
                if(cur->right != nullptr){
                    q.push(cur->right);
                }
                q.pop();
            };
        };
};
#endif
