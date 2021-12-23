//
// Created by thlam on 21/12/2021.
//

#ifndef LIB_BINDINGS_HPP
#define LIB_BINDINGS_HPP

#include "heap/Heap.hpp"
#include "heap/NumberHeap.hpp"

EMSCRIPTEN_BINDINGS(module) {
        class_<Heap>("Heap")
                .constructor()
                .function("insert", &Heap::insert)
                .function("extract", &Heap::extract)
                .function("size", &Heap::size)
        ;

        class_<NumberHeap<std::less<double>>>("MaxNumberHeap")
            .constructor<const val&>()
            .function("insert", &NumberHeap<std::less<double>>::insert)
            .function("extract", &NumberHeap<std::less<double>>::extract)
            .function("size", &NumberHeap<std::less<double>>::size)
        ;

        class_<NumberHeap<std::greater<double>>>("MinNumberHeap")
            .constructor<const val&>()
            .function("insert", &NumberHeap<std::greater<double>>::insert)
            .function("extract", &NumberHeap<std::greater<double>>::extract)
            .function("size", &NumberHeap<std::greater<double>>::size)
        ;
}

#endif //LIB_BINDINGS_HPP
