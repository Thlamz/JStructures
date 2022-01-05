/**
 * These do not actually test anything but are used exlusively as basic benchmarks for the several
 * structures included in the library
 */
import { benchmark, benchmarkAverage } from '../src/helpers/benchmark';
import { Heap } from '../src';
import JSHeap from '../src/structures/heap/JSHeap';
import { IComparable } from '../src/structures/heap/IHeap';

const ARRAY_SIZE = 1e6;
const numberArray: number[] = [];

for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray.push(Math.random());
}

beforeEach(() => {
  global.console = require('console');
});
describe('Benchmarking heap creation and extraction', () => {
  it('should perform a benchmark', () => {
    // Sorting array for comparisson to heap creation
    const clonedArray = Array.from(numberArray);
    benchmark(() => clonedArray.sort(), 'array sorting');

    class valuedObject implements IComparable {
      private value;
      constructor(value: number) {
        this.value = value;
      }
      valueOf(): number {
        return this.value;
      }
    }
    const numberSliceArray: IComparable[] = numberArray.slice(
      0,
      ARRAY_SIZE / 2
    );
    const objectSliceArray: IComparable[] = numberArray
      .slice(ARRAY_SIZE / 2)
      .map((number) => new valuedObject(number));
    const mixedArray = numberSliceArray.concat(
      numberSliceArray,
      objectSliceArray
    );
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

    {
      const heap = benchmark(() => new JSHeap(mixedArray), 'JS heap creation');
      benchmarkAverage(mixedArray, () => heap.extract(), 'JS heap extraction');
    }

    // Dummy test to prevent "no tests in file" message
    expect(true).toBeTruthy();
  });
});
