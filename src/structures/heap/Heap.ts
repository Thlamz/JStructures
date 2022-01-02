import IHeap, { IComparable } from './IHeap';
import CNumberHeap from './CNumberHeap';
import CHeap from './CHeap';
import JSHeap from './JSHeap';

/**
 * Configuration object for a heap
 */
export interface HeapConfig {
  /**
   * Enables an optimization for heaps that contain only numbers but limits the heap to only use numbers.
   * @default false
   */
  numberOnly?: boolean;
  /**
   * Determines which implementation of the Heap to use. If true, will use the faster web assembly implementation.
   * Will use a pure JS implementation otherwise
   * @default true
   */
  wasm?: boolean;
  /**
   * Should be true if the heap is a max heap and false otherwise
   * @default true
   */
  isMax?: boolean;
}

const defaultConfig: HeapConfig = {
  numberOnly: false,
  wasm: true,
  isMax: true
};

export class Heap<T extends IComparable | number> implements IHeap<T> {
  public readonly config: HeapConfig;
  private heap: IHeap<T | number>;
  constructor(list: T[] | number[] = [], config: HeapConfig = {}) {
    this.config = { ...defaultConfig, ...config };

    if (this.config.numberOnly && this.config.wasm) {
      this.heap = new CNumberHeap(<number[]>list, this.config.isMax);
    } else if (this.config.wasm) {
      this.heap = new CHeap(<T[]>list, this.config.isMax);
    } else {
      this.heap = new JSHeap(<T[]>list, this.config.isMax);
    }
  }

  extract(): void | T {
    return <T | void>this.heap.extract();
  }

  insert(value: T): void {
    if (this.config.numberOnly && typeof value !== 'number') {
      throw new Error("Can't instert non number on number only heaps");
    }
    this.heap.insert(value);
  }

  size(): number {
    return this.heap.size();
  }
}
