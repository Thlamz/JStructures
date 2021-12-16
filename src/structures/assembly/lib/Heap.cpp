//
// Created by thlam on 12/12/2021.
//

#include "Heap.hpp"

void Heap::insert(double value) {
    this->push(value);
}

double Heap::extract() {
    double value = this->top();
    this->pop();
    return value;
}

int Heap::size() {
    return std::priority_queue<double>::size();
}