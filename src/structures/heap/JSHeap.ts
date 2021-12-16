import Heap from "./Heap";


class JSHeap implements Heap {
    private readonly _heap: number[];
    constructor(list: number[] = []) {
        this._heap = [];

        for(let element of list) {
            this.insert(element);
        }
    }


    insert(element: number): void {
        this._heap.push(element);

        let index: number = this._heap.length - 1;

        this.push_up(index);
    }

    extract(): number | void {
        if(this._heap.length == 0) {
            return
        }

        let extracted: number = this._heap[0];

        this._heap[0] = this._heap.pop()!;
        this.push_down(0);
        return extracted;
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
        let temp:number = this._heap[x];
        this._heap[x] = this._heap[y];
        this._heap[y] = temp;
    }
}

export default JSHeap
