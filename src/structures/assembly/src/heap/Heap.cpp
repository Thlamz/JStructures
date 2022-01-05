//
// Created by thlam on 12/12/2021.
//

#include "Heap.hpp"

void Heap::insert(long element, double value) {
    this->push(std::pair<long, double>(element, value));
}

long Heap::extract() {
    if(this->size() == 0) {
        return -1;
    }
    long value = this->top().first;
    this->pop();
    return value;
}

unsigned int Heap::size() {
    return Priority::size();
}