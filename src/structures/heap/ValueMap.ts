import {Comparable} from "./IHeap";

export class ValueMap {
    private readonly map: Map<number, Comparable[]> = new Map<number, Comparable[]>();
    constructor(list: Comparable[]) {
        for(let element of list) {
            this.add(element)
        }
    }

    add(value: Comparable): void {
        const key = value.valueOf();
        let bucket = this.map.get(key) ?? [];

        bucket.push(value)
        this.map.set(key, bucket)
    }

    pop(key: number): Comparable | void {
        return this.map.get(key)?.pop();
    }
}