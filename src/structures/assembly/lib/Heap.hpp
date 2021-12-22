//
// Created by thlam on 12/12/2021.
//

#ifndef BINDINGS_HEAP_HPP
#define BINDINGS_HEAP_HPP

#include <emscripten/bind.h>
#include <emscripten/val.h>
#include <queue>
#include <iostream>

using namespace emscripten;

auto cmp = [](std::pair<unsigned int, double> &left, std::pair<unsigned int, double> &right) {
    return left.second < right.second;
};
using Priority = std::priority_queue<std::pair<unsigned int, double>, std::vector<std::pair<unsigned int, double>>, decltype(cmp)>;
class Heap : public Priority {
public:
    Heap() : Priority(cmp) {
    };
    void insert(unsigned int element, double value);
    unsigned int extract();
    unsigned int size();
};

#endif //BINDINGS_HEAP_HPP
