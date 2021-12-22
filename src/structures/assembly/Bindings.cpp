//
// Created by thlam on 21/12/2021.
//

#ifndef LIB_BINDINGS_HPP
#define LIB_BINDINGS_HPP

#include "heap/Heap.hpp"
#include "heap/NumberHeap.hpp"

EMSCRIPTEN_BINDINGS(module) {
        class_<Heap>("Heap")
                .smart_ptr<std::shared_ptr<Heap>>("Heap")
                .constructor()
                .function("insert", &Heap::insert)
                .function("extract", &Heap::extract)
                .function("size", &Heap::size)
        ;

        class_<NumberHeap>("NumberHeap")
            .smart_ptr<std::shared_ptr<NumberHeap>>("NumberHeap")
            .constructor()
            .function("insert", &NumberHeap::insert)
            .function("extract", &NumberHeap::extract)
            .function("size", &NumberHeap::size)
        ;
}

#endif //LIB_BINDINGS_HPP
