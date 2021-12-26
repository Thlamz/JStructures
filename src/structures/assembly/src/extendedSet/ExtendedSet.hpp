//
// Created by thlam on 25/12/2021.
//

#ifndef SRC_EXTENDEDSET_HPP
#define SRC_EXTENDEDSET_HPP

#include <unordered_set>
#include <emscripten/val.h>
#include <emscripten/bind.h>

size_t const BITSET_SIZE = UINT_MAX;

using namespace emscripten;

class ExtendedSet {
public:
    ExtendedSet(const val& list) {
        std::vector<unsigned long> vector = convertJSArrayToNumberVector<unsigned long>(list);

        for(unsigned long value : vector) {
            set.insert(value);
        }
    }

    void add(unsigned long value);
    void remove(unsigned long value);
    bool contains(unsigned long value);
    void join(std::shared_ptr<ExtendedSet> set);
    void intersection(std::shared_ptr<ExtendedSet> set);
public:
    std::unordered_set<unsigned long> set;
};


#endif //SRC_EXTENDEDSET_HPP
