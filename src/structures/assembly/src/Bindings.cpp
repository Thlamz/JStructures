//
// Created by thlam on 21/12/2021.
//

#ifndef LIB_BINDINGS_HPP
#define LIB_BINDINGS_HPP

#include "heap/Heap.hpp"
#include "deque/Deque.hpp"
// #include "heap/NumberHeap.hpp"
#include "glue.cpp"

/*
EMSCRIPTEN_BINDINGS(module) {
        class_<CHeap>("CHeap")
                .smart_ptr_constructor("CHeap", &std::make_shared<CHeap>)
                .function("insert", &CHeap::insert)
                .function("extract", &CHeap::extract)
                .function("size", &CHeap::size)
        ;

        class_<NumberHeap<std::less<double>>>("MaxNumberHeap")
            .smart_ptr_constructor("MaxNumberHeap", &std::make_shared<NumberHeap<std::less<double>>, const val&>)
            .function("insert", &NumberHeap<std::less<double>>::insert)
            .function("extract", &NumberHeap<std::less<double>>::extract)
            .function("size", &NumberHeap<std::less<double>>::size)
        ;

        class_<NumberHeap<std::greater<double>>>("MinNumberHeap")
            .smart_ptr_constructor("MinNumberHeap", &std::make_shared<NumberHeap<std::greater<double>>, const val&>)
            .function("insert", &NumberHeap<std::greater<double>>::insert)
            .function("extract", &NumberHeap<std::greater<double>>::extract)
            .function("size", &NumberHeap<std::greater<double>>::size)
        ;
}
*/
#endif //LIB_BINDINGS_HPP
