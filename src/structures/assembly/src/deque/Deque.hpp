//
// Created by thlam on 05/01/2022.
//

#ifndef SRC_DEQUE_HPP
#define SRC_DEQUE_HPP

#include <deque>

class Deque {
public:
    Deque() {};
    void push(long long element);
    void unshift(long long element);
    long long pop();
    long long shift();
    unsigned int size();

private:
    std::deque<long long> deque;
};


#endif //SRC_DEQUE_HPP
