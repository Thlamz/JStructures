import { IComparable } from '../src/structures/heap/IHeap';
import JSHeap from '../src/structures/heap/JSHeap';
import CHeap from '../src/structures/heap/CHeap';
const ARRAY_SIZE = 1000;
const numberArray: number[] = [];

class valuedObject {
  private value;
  constructor(value: number) {
    this.value = value;
  }
  valueOf(): number {
    return this.value;
  }
}
const objectArray: IComparable[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray.push(Math.random());
  objectArray.push(new valuedObject(Math.random()));
}

// A sorted array should give the same result as a heap when removing elements one by one
const sortedObjectArray = Array.from(objectArray).sort(
  (a, b) => b.valueOf() - a.valueOf()
);

describe(`Testing max heap using numbers`, () => {
  const heapJS = new JSHeap(objectArray);
  const heapC = new CHeap(objectArray);

  it('should have the correct size', () => {
    expect(heapJS.size()).toBe(ARRAY_SIZE);
    expect(heapC.size()).toBe(ARRAY_SIZE);
  });

  it('should use a heap to order an array', () => {
    const jsResults = objectArray.map(() => heapJS.extract());
    const CResults = objectArray.map(() => heapC.extract());

    expect(jsResults).toEqual(sortedObjectArray);
    expect(CResults).toEqual(sortedObjectArray);
  });

  it('should return void when empty', () => {
    expect(heapJS.extract()).toBeUndefined();
    expect(heapC.extract()).toBeUndefined();
  });

  it('should have size 0 when empty', () => {
    expect(heapJS.size()).toBe(0);
    expect(heapC.size()).toBe(0);
  });

  it('should insert single number', () => {
    const number = Math.random();

    heapJS.insert(number);
    heapC.insert(number);

    expect(heapJS.size()).toBe(1);
    expect(heapC.size()).toBe(1);

    expect(heapJS.extract()).toBe(number);
    expect(heapC.extract()).toBe(number);
  });
});

describe(`Testing min heap using numbers`, () => {
  const heapJS = new JSHeap(objectArray, false);
  const heapC = new CHeap(objectArray, false);

  it('should use a heap to order an array', () => {
    const jsResult = numberArray.map(() => heapJS.extract());
    const CResult = numberArray.map(() => heapC.extract());

    expect(jsResult).toEqual(Array.from(sortedObjectArray).reverse());
    expect(CResult).toEqual(Array.from(sortedObjectArray).reverse());
  });
});
