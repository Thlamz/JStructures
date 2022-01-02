/**
 * These do not actually test anything but are used exlusively as basic benchmarks for the several
 * structures included in the library
 */
import { benchmark, benchmarkAverage } from '../src/helpers/benchmark';
import { Heap } from '../src';

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

    {
      const heap = benchmark(
        () => new Heap(numberArray, { wasm: true, numberOnly: true }),
        'WASM number heap creation'
      );
      benchmarkAverage(
        numberArray,
        () => heap.extract(),
        'WASM number heap extraction'
      );
    }

    {
      const heap = benchmark(
        () => new Heap(numberArray, { wasm: true, numberOnly: false }),
        'WASM object heap creation'
      );
      benchmarkAverage(
        numberArray,
        () => heap.extract(),
        'WASM object heap extraction'
      );
    }

    {
      const heap = benchmark(
        () => new Heap(numberArray, { wasm: false }),
        'JS heap creation'
      );
      benchmarkAverage(numberArray, () => heap.extract(), 'JS heap extraction');
    }

    // Dummy test to prevent "no tests in file" message
    expect(true).toBeTruthy();
  });
});
