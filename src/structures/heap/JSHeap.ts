import IHeap, { IComparable } from './IHeap';

class JSHeap<T extends IComparable> implements IHeap<T> {
  private readonly _heap: T[];
  private readonly isMax: boolean;
  constructor(list: T[] = [], isMax = true) {
    this._heap = [];
    this.isMax = isMax;

    for (const element of list) {
      this.insert(element);
    }
  }

  insert(element: T): void {
    this._heap.push(element);

    const index: number = this._heap.length - 1;

    this.push_up(index);
  }

  extract(): T | void {
    const extracted = this._heap[0];
    const lastElement = this._heap.pop();

    if (!lastElement) {
      return extracted;
    }

    this._heap[0] = lastElement;
    this.push_down(0);
    return extracted;
  }

  size(): number {
    return this._heap.length;
  }

  private push_down(index: number): void {
    while (index < this._heap.length) {
      const left = this.getLeft(index);
      const right = this.getRight(index);

      let swapped = index;
      if (left < this._heap.length) {
        if (this.isMax) {
          if (this._heap[left] > this._heap[swapped]) {
            swapped = left;
          }
        } else {
          if (this._heap[left] < this._heap[swapped]) {
            swapped = left;
          }
        }
      }

      if (right < this._heap.length) {
        if (this.isMax) {
          if (this._heap[right] > this._heap[swapped]) {
            swapped = right;
          }
        } else {
          if (this._heap[right] < this._heap[swapped]) {
            swapped = right;
          }
        }
      }

      if (swapped !== index) {
        this.swap(index, swapped);
        index = swapped;
      } else {
        break;
      }
    }
  }

  private push_up(index: number): void {
    while (index >= 0) {
      const parentIndex: number = this.getParent(index);
      if (this.isMax) {
        if (this._heap[parentIndex] < this._heap[index]) {
          this.swap(index, parentIndex);
        }
      } else {
        if (this._heap[parentIndex] > this._heap[index]) {
          this.swap(index, parentIndex);
        }
      }
      index = parentIndex;
    }
  }

  private getParent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  private getLeft(index: number): number {
    return Math.floor(2 * index + 1);
  }

  private getRight(index: number): number {
    return 2 * index + 2;
  }

  private swap(x: number, y: number): void {
    const temp = this._heap[x];
    this._heap[x] = this._heap[y];
    this._heap[y] = temp;
  }
}

export default JSHeap;
