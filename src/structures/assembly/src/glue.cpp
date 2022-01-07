
#include <emscripten.h>

extern "C" {

// Not using size_t for array indices as the values used by the javascript code are signed.

EM_JS(void, array_bounds_check_error, (size_t idx, size_t size), {
  throw 'Array index ' + idx + ' out of bounds: [0,' + size + ')';
});

void array_bounds_check(const int array_size, const int array_idx) {
  if (array_idx < 0 || array_idx >= array_size) {
    array_bounds_check_error(array_idx, array_size);
  }
}

// VoidPtr

void EMSCRIPTEN_KEEPALIVE emscripten_bind_VoidPtr___destroy___0(void** self) {
  delete self;
}

// Heap

Heap* EMSCRIPTEN_KEEPALIVE emscripten_bind_Heap_Heap_0() {
  return new Heap();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Heap_insert_2(Heap* self, int element, double value) {
  self->insert(element, value);
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_Heap_extract_0(Heap* self) {
  return self->extract();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_Heap_size_0(Heap* self) {
  return self->size();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Heap___destroy___0(Heap* self) {
  delete self;
}

// Deque

Deque* EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_Deque_0() {
  return new Deque();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_push_1(Deque* self, long long element) {
  self->push(element);
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_unshift_1(Deque* self, long long element) {
  self->unshift(element);
}

long long EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_pop_0(Deque* self) {
  return self->pop();
}

long long EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_shift_0(Deque* self) {
  return self->shift();
}

int EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque_size_0(Deque* self) {
  return self->size();
}

void EMSCRIPTEN_KEEPALIVE emscripten_bind_Deque___destroy___0(Deque* self) {
  delete self;
}

}

