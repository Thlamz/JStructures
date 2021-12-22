//
// Created by thlam on 21/12/2021.
//

#ifndef LIB_NUMBERHEAP_HPP
#define LIB_NUMBERHEAP_HPP

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <queue>
#include <iostream>

using namespace emscripten;

using PriorityNumber = std::priority_queue<double, std::vector<double>, std::less<double>>;
class NumberHeap : public PriorityNumber {
public:
    NumberHeap() : PriorityNumber() {
    };
    void insert(double value);
    double extract();
    unsigned int size();
};

#endif //LIB_NUMBERHEAP_HPP
