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

class Heap : public std::priority_queue<double> {
public:
    Heap(const emscripten::val &list) {
        std::vector<double> vector = convertJSArrayToNumberVector<double>(list);
        std::priority_queue<double>();
        for(double value : vector) {
            this->push(value);
        }
    };
    void insert(double value);
    double extract();
    int size();
};

EMSCRIPTEN_BINDINGS(module) {
        class_<Heap>("Heap")
                .smart_ptr<std::shared_ptr<Heap>>("Heap")
                .constructor<const emscripten::val&>()
                .function("insert", &Heap::insert)
                .function("extract", &Heap::extract)
                .function("size", &Heap::size)
        ;
        register_vector<double>("VectorDouble");
}



#endif //BINDINGS_HEAP_HPP
