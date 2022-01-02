import { IComparable } from '../src/structures/heap/IHeap';
import { Heap } from '../src';

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
const sortedArray = Array.from(numberArray).sort((a, b) => b - a);
const sortedObjectArray = Array.from(objectArray).sort(
  (a, b) => b.valueOf() - a.valueOf()
);

describe(`Testing max heap using numbers`, () => {
  const heapJS = new Heap(objectArray, { wasm: false });
  const heapC = new Heap(objectArray, { wasm: true, numberOnly: false });
  const heapCNumber = new Heap(numberArray, { wasm: true, numberOnly: true });

  it('should have the correct size', () => {
    expect(heapJS.size()).toBe(ARRAY_SIZE);
    expect(heapC.size()).toBe(ARRAY_SIZE);
    expect(heapCNumber.size()).toBe(ARRAY_SIZE);
  });

  it('should use a heap to order an array', () => {
    const jsResults = objectArray.map(() => heapJS.extract());
    const CResults = objectArray.map(() => heapC.extract());
    const CNumberResults = numberArray.map(() => heapCNumber.extract());

    expect(jsResults).toEqual(sortedObjectArray);
    expect(CResults).toEqual(sortedObjectArray);
    expect(CNumberResults).toEqual(sortedArray);
  });

  it('should return void when empty', () => {
    expect(heapJS.extract()).toBeUndefined();
    expect(heapC.extract()).toBeUndefined();
    expect(heapCNumber.extract()).toBeUndefined();
  });

  it('should have size 0 when empty', () => {
    expect(heapJS.size()).toBe(0);
    expect(heapC.size()).toBe(0);
    expect(heapCNumber.size()).toBe(0);
  });

  it('should insert single number', () => {
    const number = Math.random();

    heapJS.insert(number);
    heapC.insert(number);
    heapCNumber.insert(number);

    expect(heapJS.size()).toBe(1);
    expect(heapC.size()).toBe(1);
    expect(heapCNumber.size()).toBe(1);

    expect(heapJS.extract()).toBe(number);
    expect(heapC.extract()).toBe(number);
    expect(heapCNumber.extract()).toBe(number);
  });
});

describe(`Testing min heap using numbers`, () => {
  const heapJS = new Heap(objectArray, { wasm: false, isMax: false });
  const heapC = new Heap(objectArray, {
    wasm: true,
    numberOnly: false,
    isMax: false
  });
  const heapCNumber = new Heap(numberArray, {
    wasm: true,
    numberOnly: true,
    isMax: false
  });

  it('should use a heap to order an array', () => {
    const jsResult = numberArray.map(() => heapJS.extract());
    const CResult = numberArray.map(() => heapC.extract());
    const CNumberResult = numberArray.map(() => heapCNumber.extract());

    expect(jsResult).toEqual(Array.from(sortedObjectArray).reverse());
    expect(CResult).toEqual(Array.from(sortedObjectArray).reverse());
    expect(CNumberResult).toEqual(Array.from(sortedArray).reverse());
  });
});
