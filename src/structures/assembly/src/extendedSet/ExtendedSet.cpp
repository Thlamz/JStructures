//
// Created by thlam on 25/12/2021.
//

#include "ExtendedSet.hpp"

void ExtendedSet::add(unsigned long value) {
    set.insert(value);
}

void ExtendedSet::remove(unsigned long value) {
    set.erase(value);
}

bool ExtendedSet::contains(unsigned long value) {
    return set.find(value) != set.end();
}

void ExtendedSet::join(std::shared_ptr<ExtendedSet> set) {
    //bitset |= set->bitset;
}

void ExtendedSet::intersection(std::shared_ptr<ExtendedSet> set) {
    //bitset &= set->bitset;
}