import JSHeap from '../src/structures/heap/JSHeap';
import CHeap from '../src/structures/heap/CHeap';
import { benchmark, benchmarkAverage } from '../src/helpers/benchmark';
import CNumberHeap from '../src/structures/heap/CNumberHeap';
import { IComparable } from '../src/structures/generics/IComparable';

interface implementation {
  constructor: any;
  name: string;
}
const implementations: implementation[] = [
  { constructor: JSHeap, name: 'JSHeap' },
  { constructor: CHeap, name: 'CHeap' },
  { constructor: CNumberHeap, name: 'CNumberHeap' }
];

const ARRAY_SIZE = 1e6;
const testArray: number[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
  testArray.push(Math.random() * 1e8);
}

// A sorted array should give the same result as a heap when removing elements one by one
const sortedArray = benchmark(
  () => Array.from(testArray).sort((a, b) => b - a),
  'array sorting'
);
implementations.forEach(({ constructor, name }) => {
  describe(`Testing max ${name} using numbers`, () => {
    const heap = benchmark(
      () => new constructor(testArray),
      `${name} creation`
    );

    it('should have the correct size', () => {
      expect(heap.size()).toBe(ARRAY_SIZE);
    });

    it('should use a heap to order an array', () => {
      const heapResult: IComparable[] = benchmarkAverage(
        testArray,
        () => {
          return heap.extract();
        },
        `${name} extraction`
      );
      expect(heapResult).toStrictEqual(sortedArray);
    });

    it('should return void when empty', () => {
      expect(heap.extract()).toBeUndefined();
    });

    it('should have size 0 when empty', () => {
      expect(heap.size()).toBe(0);
    });

    it('should insert single element', () => {
      const number = Math.random();
      heap.insert(number);
      expect(heap.size()).toBe(1);
      expect(heap.extract()).toBe(number);
    });
  });

  describe(`Testing min ${name} using numbers`, () => {
    const heap = new constructor(testArray, false);

    it('should have the correct size', () => {
      expect(heap.size()).toBe(ARRAY_SIZE);
    });

    it('should use a heap to order an array', () => {
      const heapResult: IComparable[] = testArray.map(() => heap.extract());
      expect(heapResult).toStrictEqual(Array.from(sortedArray).reverse());
    });
  });
});
