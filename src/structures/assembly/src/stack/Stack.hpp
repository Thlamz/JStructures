//
// Created by thlam on 05/01/2022.
//

#ifndef SRC_STACK_HPP
#define SRC_STACK_HPP

#include <stack>

class Stack {
public:
    Stack() {};
    void push(long long element);
    long long pop();
    unsigned int size();

private:
    std::stack<long long> stack;
};


#endif //SRC_STACK_HPP
