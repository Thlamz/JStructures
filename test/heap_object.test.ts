import { IComparable } from '../src/structures/heap/IHeap';
import JSHeap from '../src/structures/heap/JSHeap';
import CHeap from '../src/structures/heap/CHeap';

interface implementation {
  constructor: any;
  name: string;
}
const implementations: implementation[] = [
  { constructor: JSHeap, name: 'JSHeap' },
  { constructor: CHeap, name: 'CHeap' }
];

class ValuedObject {
  private readonly value: number;
  constructor(value: number) {
    this.value = value;
  }

  valueOf() {
    return this.value;
  }
}

const OBJECT_ARRAY_SIZE = 1e4;
const valuedObjectArray: ValuedObject[] = [];
for (let i = 0; i < OBJECT_ARRAY_SIZE; i++) {
  valuedObjectArray.push(new ValuedObject(Math.random() * 1e8));
}

const sortedObjectArray = Array.from(valuedObjectArray).sort(
  (a, b) => b.valueOf() - a.valueOf()
);
implementations.forEach(({ constructor, name }) => {
  describe(`Testing ${name} using objects`, () => {
    const heap = new constructor();
    valuedObjectArray.forEach((element) => heap.insert(element));

    it('should have the correct size', () => {
      expect(heap.size()).toBe(OBJECT_ARRAY_SIZE);
    });

    it('should use a heap to order valued objects', () => {
      const heapResult: IComparable[] = [];
      const firstValue: IComparable = heap.extract();
      heapResult.push(firstValue);
      for (let i = 1; i < OBJECT_ARRAY_SIZE; i++) {
        heapResult.push(heap.extract());
      }
      expect(heapResult).toStrictEqual(sortedObjectArray);
    });
  });

  describe(`Testing min ${name} using objects`, () => {
    const heap = new constructor(valuedObjectArray, false);

    it('should use a heap to order an array', () => {
      const heapResult: IComparable[] = valuedObjectArray.map(() =>
        heap.extract()
      );
      expect(heapResult).toStrictEqual(Array.from(sortedObjectArray).reverse());
    });
  });
});
