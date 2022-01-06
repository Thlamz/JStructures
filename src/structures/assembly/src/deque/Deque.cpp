//
// Created by thlam on 05/01/2022.
//

#include "Deque.hpp"

void Deque::push(long long element) {
    deque.push_front(element);
}

void Deque::shift(long long element) {
    deque.push_back(element);
}

long long Deque::pop() {
    if(deque.size() == 0) {
        return -1;
    }
    long long value = deque.front();
    deque.pop_front();
    return value;
}

long long Deque::unshift() {
    if(deque.size() == 0) {
        return -1;
    }
    long long value = deque.back();
    deque.pop_back();
    return value;
}

unsigned int Deque::size() {
    return deque.size();
}