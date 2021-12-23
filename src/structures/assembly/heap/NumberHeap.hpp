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

template<typename Compare>
class NumberHeap : public std::priority_queue<double, std::vector<double>, Compare> {
public:
    NumberHeap(const val& list) {
        std::vector<double> vector = convertJSArrayToNumberVector<double>(list);

        for(double element : vector) {
            this->insert(element);
        }
    };
    void insert(double value) {
        this->push(value);
    }

    double extract() {
        double value = this->top();
        this->pop();
        return value;
    }

    unsigned int size() {
        return std::priority_queue<double, std::vector<double>, Compare>::size();
    };
};

#endif //LIB_NUMBERHEAP_HPP
