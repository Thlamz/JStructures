//
// Created by thlam on 12/12/2021.
//

#include "Heap.hpp"

void Heap::insert(unsigned int index, double value) {
    this->push(std::pair<unsigned int, double>(index, value));
}

unsigned int Heap::extract() {
    if(this->size() == 0) {
        return -1;
    }
    unsigned int value = this->top().first;
    this->pop();
    return value;
}

unsigned int Heap::size() {
    return Priority::size();
}