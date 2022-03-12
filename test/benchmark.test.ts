/**
 * These do not actually test anything but are used exlusively as basic benchmarks for the several
 * structures included in the library
 */
import { benchmark, benchmarkAverage } from '../src/helpers/benchmark';
import Heap from '../src/structures/heap/CHeap';
import Deque from '../src/structures/deque/CDeque';
import { IComparable } from '../src/structures/heap/IHeap';
import * as original_console from 'console';

const ARRAY_SIZE = 1e6;
const numberArray: number[] = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray.push(Math.random());
}

class valuedObject implements IComparable {
  private value;
  constructor(value: number) {
    this.value = value;
  }
  valueOf(): number {
    return this.value;
  }
}
const numberSliceArray: IComparable[] = numberArray.slice(0, ARRAY_SIZE / 2);
const objectSliceArray: IComparable[] = numberArray
  .slice(ARRAY_SIZE / 2)
  .map((number) => new valuedObject(number));
const mixedArray = numberSliceArray.concat(numberSliceArray, objectSliceArray);

beforeEach(() => {
  global.console = original_console;
  console.log('--------------------');
});
describe('Benchmarking heap creation and extraction', () => {
  it('should perform a benchmark', () => {
    {
      // Sorting array for comparisson to heap creation
      const clonedArray = Array.from(numberArray);
      benchmark(() => clonedArray.sort(), 'array sorting');
    }

    {
      const heap = benchmark(
        () => new Heap(mixedArray),
        'WASM object heap creation'
      );
      benchmarkAverage(
        mixedArray,
        () => heap.extract(),
        'WASM object heap extraction'
      );
    }

    // Dummy test to prevent "no tests in file" message
    expect(true).toBeTruthy();
  });
});

describe('Benchmarking Deque creation and extraction', () => {
  it('should perform benchmark', () => {
    {
      const array: IComparable[] = [];

      benchmarkAverage(
        mixedArray,
        (element) => {
          array.push(element);
        },
        'array push'
      );
      benchmarkAverage(mixedArray, () => array.pop(), 'array pop');

      benchmarkAverage(
        mixedArray.slice(0, 1e5),
        (element) => {
          array.unshift(element);
        },
        'array unshift with 1e5 elements'
      );
      benchmarkAverage(
        mixedArray.slice(0, 1e5),
        () => array.shift(),
        'array shift with 1e5 elements'
      );

      const deque = new Deque();
      benchmarkAverage(
        mixedArray,
        (element) => {
          deque.push(element);
        },
        'WASM deque push'
      );
      benchmarkAverage(mixedArray, () => deque.pop(), 'WASM Deque pop');

      benchmarkAverage(
        mixedArray,
        (element) => {
          deque.unshift(element);
        },
        'WASM deque unshift'
      );
      benchmarkAverage(mixedArray, () => deque.shift(), 'WASM Deque shift');
    }

    // Dummy test to prevent "no tests in file" message
    expect(true).toBeTruthy();
  });
});
