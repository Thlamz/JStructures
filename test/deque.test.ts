import { IComparable } from '../src/structures/heap/IHeap';
import CDeque from '../src/structures/deque/CDeque';

const ARRAY_SIZE = 1000;
const numberArray: number[] = [];

class valuedObject {
  private readonly value;
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

describe('Testing Deque using numbers', () => {
  const dequeC = new CDeque(numberArray);

  it('should have all numbers', () => {
    expect(dequeC.size()).toBe(ARRAY_SIZE);
    expect(dequeC.at(0)).toBe(numberArray[ARRAY_SIZE - 1]);
    expect(dequeC.at(-1)).toBe(numberArray[0]);
  });

  it('should pop all elements in reverse order', () => {
    expect([...dequeC]).toEqual([...numberArray].reverse());
    const removed = numberArray.map(() => dequeC.pop());
    expect(removed).toEqual([...numberArray].reverse());
  });

  it('should be empty', () => {
    expect(dequeC.size()).toBe(0);
    expect(dequeC.pop()).toBeUndefined();
    expect(dequeC.at(0)).toBeUndefined();
  });

  it('should push single element', () => {
    dequeC.push(10);
    expect(dequeC.size()).toBe(1);
    expect(dequeC.pop()).toBe(10);
  });

  it('should push all elements', () => {
    for (const number of numberArray) {
      dequeC.push(number);
    }
    expect(dequeC.size()).toBe(ARRAY_SIZE);
  });

  it('should shift all elements in order', () => {
    const removed = numberArray.map(() => dequeC.shift());
    expect(removed).toEqual(numberArray);
  });

  it('should unshift single element', () => {
    dequeC.unshift(10);
    expect(dequeC.size()).toBe(1);
    expect(dequeC.shift()).toBe(10);
  });
});
