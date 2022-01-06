//
// Created by thlam on 05/01/2022.
//

#include "Stack.hpp"

void Stack::push(long long element) {
    stack.push(element);
}

long long Stack::pop() {
    if(stack.size() == 0) {
        return -1;
    }
    long long value = stack.top();
    stack.pop();
    return value;
}

unsigned int Stack::size() {
    return stack.size();
}