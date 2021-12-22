//
// Created by thlam on 21/12/2021.
//

#include "NumberHeap.hpp"

void NumberHeap::insert(double value) {
    this->push(value);
}

double NumberHeap::extract() {
    double value = this->top();
    this->pop();
    return value;
}

unsigned int NumberHeap::size() {
    return PriorityNumber::size();
}