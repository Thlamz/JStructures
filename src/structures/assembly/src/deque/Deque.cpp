//
// Created by thlam on 05/01/2022.
//

#include "Deque.hpp"

void Deque::push(long long element) {
    deque.push_back(element);
}

void Deque::unshift(long long element) {
    deque.push_front(element);
}

long long Deque::pop() {
    if(deque.size() == 0) {
        return -1;
    }
    long long value = deque.back();
    deque.pop_back();
    return value;
}

long long Deque::shift() {
    if(deque.size() == 0) {
        return -1;
    }
    long long value = deque.front();
    deque.pop_front();
    return value;
}

unsigned int Deque::size() {
    return deque.size();
}

long long Deque::at(unsigned int index) {
    return deque[index];
}