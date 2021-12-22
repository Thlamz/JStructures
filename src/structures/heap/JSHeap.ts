import IHeap, {IComparable} from "./IHeap";


class JSHeap<T extends IComparable> implements IHeap<T> {
    private readonly _heap: T[];
    constructor() {
        this._heap = [];
    }

    insert(element: T): void {
        this._heap.push(element);

        let index: number = this._heap.length - 1;

        this.push_up(index);
    }

    extract(): T | void {
        let extracted = this._heap[0];
        let lastElement = this._heap.pop()!;

        if(this._heap.length == 0) {
            return extracted
        }

        this._heap[0] = lastElement
        this.push_down(0);
        return extracted;
    }

    size(): number {
        return this._heap.length
    }

    private push_down(index: number): void {
        while(index < this._heap.length) {
            const left = this.getLeft(index);
            const right = this.getRight(index);

            let smallest = index;
            if(left < this._heap.length && this._heap[left] > this._heap[smallest]) {
                smallest = left;
            }

            if(right < this._heap.length && this._heap[right] > this._heap[smallest]) {
                smallest = right;
            }

            if(smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }


    }

    private push_up(index: number) : void {
        while(index >= 0) {
            let parentIndex: number = this.getParent(index);
            if(this._heap[parentIndex] < this._heap[index]) {
                this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    }

    private getParent(index: number): number {
        return Math.floor((index -1) / 2)
    }

    private getLeft(index: number): number {
        return Math.floor(2 * index + 1)
    }

    private getRight(index: number): number {
        return 2* index + 2
    }

    private swap(x: number, y: number): void {
        let temp = this._heap[x];
        this._heap[x] = this._heap[y];
        this._heap[y] = temp;
    }
}

export default JSHeap
