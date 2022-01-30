const POINTER_RISK_ZONE = Number.MAX_SAFE_INTEGER - 100;
export class UniqueAllocator {
    constructor() {
        this.pointer = 0;
        this.objectPointers = new Map();
        this.pointerMemory = [];
        this.freePointers = [];
    }
    allocate(element) {
        if (this.objectPointers.has(element)) {
            return this.objectPointers.get(element);
        }
        // Try to use free pointers the pointer space is close to ending
        if (this.pointer > POINTER_RISK_ZONE && this.freePointers.length > 0) {
            const pointer = this.freePointers.pop();
            this.objectPointers.set(element, pointer);
            this.pointerMemory[pointer] = element;
            return pointer;
        }
        this.objectPointers.set(element, this.pointer);
        this.pointerMemory[this.pointer] = element;
        return this.pointer++;
    }
    retrieve(pointer) {
        return this.pointerMemory[pointer];
    }
    deallocate(element) {
        const pointer = this.objectPointers.get(element);
        if (pointer !== undefined) {
            this.objectPointers.delete(element);
            this.freePointers.push(pointer);
        }
    }
    deallocateRetrievePointer(pointer) {
        const element = this.retrieve(pointer);
        this.objectPointers.delete(element);
        this.freePointers.push(pointer);
        return element;
    }
}
export class RepeatAllocator {
    constructor() {
        this.pointer = 0;
        this.pointerSpace = [];
        this.freePointers = [];
    }
    allocate(element) {
        // Try to use free pointers the pointer space is close to ending
        if (this.pointer > POINTER_RISK_ZONE && this.freePointers.length > 0) {
            const pointer = this.freePointers.pop();
            this.pointerSpace[pointer] = element;
            return pointer;
        }
        this.pointerSpace[this.pointer] = element;
        return this.pointer++;
    }
    deallocate(element) {
        for (let pointer = this.pointerSpace.indexOf(element); pointer !== -1; pointer = this.pointerSpace.indexOf(element, pointer)) {
            this.pointerSpace[pointer] = null;
            this.freePointers.push(pointer);
        }
    }
    deallocateRetrievePointer(pointer) {
        const element = this.retrieve(pointer);
        this.pointerSpace[pointer] = null;
        this.freePointers.push(pointer);
        return element;
    }
    retrieve(pointer) {
        return this.pointerSpace[pointer];
    }
}
