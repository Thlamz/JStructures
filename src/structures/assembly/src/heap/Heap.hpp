//
// Created by thlam on 12/12/2021.
//

#ifndef BINDINGS_HEAP_HPP
#define BINDINGS_HEAP_HPP

#include <queue>
#include <iostream>


auto cmp = [](std::pair<long, double> &left, std::pair<long, double> &right) {
    return left.second < right.second;
};

using Priority = std::priority_queue<std::pair<long, double>, std::vector<std::pair<long, double>>, decltype(cmp)>;
class Heap : public Priority {
public:
    Heap() : Priority(cmp) {

    };
    void insert(long element, double value);
    long extract();
    unsigned int size();
};

#endif //BINDINGS_HEAP_HPP
