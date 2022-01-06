import { IComparable } from '../src/structures/heap/IHeap';
import CStack from '../src/structures/stack/CStack';

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

describe('Testing Stack using numbers', () => {
  const stackC = new CStack(numberArray);

  it('should have the correct size', () => {
    expect(stackC.size()).toBe(ARRAY_SIZE);
  });

  it('should remove all elements in reverse order', () => {
    const removed = numberArray.map(() => stackC.pop());
    expect(removed).toEqual(numberArray.reverse());
  });

  it('should be empty', () => {
    expect(stackC.size()).toBe(0);
    expect(stackC.pop()).toBeUndefined();
  });

  it('should insert single element', () => {
    stackC.push(10);
    expect(stackC.size()).toBe(1);
    expect(stackC.pop()).toBe(10);
  });
});
