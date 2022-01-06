//
// Created by thlam on 05/01/2022.
//

#ifndef SRC_STACK_HPP
#define SRC_STACK_HPP

#include <deque>

class Deque {
public:
    Deque() {};
    void push(long long element);
    void shift(long long element);
    long long pop();
    long long unshift();
    unsigned int size();

private:
    std::deque<long long> deque;
};


#endif //SRC_STACK_HPP
