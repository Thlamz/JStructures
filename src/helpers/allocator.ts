export interface IAllocator {
  allocate(element: unknown): number;
  retrieve(pointer: number): unknown;
  deallocate(element: unknown): void;
  deallocateRetrievePointer(pointer: number): unknown;
}

const POINTER_RISK_ZONE = Number.MAX_SAFE_INTEGER - 100;

export class UniqueAllocator implements IAllocator {
  private objectPointers: Map<unknown, number>;
  private pointerMemory: unknown[];
  private freePointers: number[];
  private pointer = 0;
  constructor() {
    this.objectPointers = new Map<unknown, number>();
    this.pointerMemory = [];
    this.freePointers = [];
  }

  allocate(element: unknown): number {
    if (this.objectPointers.has(element)) {
      return this.objectPointers.get(element)!;
    }

    // Try to use free pointers the pointer space is close to ending
    if (this.pointer > POINTER_RISK_ZONE && this.freePointers.length > 0) {
      const pointer = this.freePointers.pop()!;
      this.objectPointers.set(element, pointer);
      this.pointerMemory[pointer] = element;
      return pointer;
    }

    this.objectPointers.set(element, this.pointer);
    this.pointerMemory[this.pointer] = element;

    return this.pointer++;
  }

  retrieve(pointer: number): unknown | undefined {
    return this.pointerMemory[pointer];
  }

  deallocate(element: unknown): void {
    const pointer = this.objectPointers.get(element);
    if (pointer !== undefined) {
      this.objectPointers.delete(element);
      this.freePointers.push(pointer);
    }
  }

  deallocateRetrievePointer(pointer: number): unknown | undefined {
    const element = this.retrieve(pointer);
    this.objectPointers.delete(element);
    this.freePointers.push(pointer);
    return element;
  }
}

export class RepeatAllocator implements IAllocator {
  private pointerSpace: unknown[];
  private freePointers: number[];
  private pointer = 0;
  constructor() {
    this.pointerSpace = [];
    this.freePointers = [];
  }

  allocate(element: unknown): number {
    // Try to use free pointers the pointer space is close to ending
    if (this.pointer > POINTER_RISK_ZONE && this.freePointers.length > 0) {
      const pointer = this.freePointers.pop()!;
      this.pointerSpace[pointer] = element;
      return pointer;
    }
    this.pointerSpace[this.pointer] = element;

    return this.pointer++;
  }

  deallocate(element: unknown): void {
    for (
      let pointer = this.pointerSpace.indexOf(element);
      pointer !== -1;
      pointer = this.pointerSpace.indexOf(element, pointer)
    ) {
      this.pointerSpace[pointer] = null;
      this.freePointers.push(pointer);
    }
  }

  deallocateRetrievePointer(pointer: number): unknown {
    const element = this.retrieve(pointer);
    this.pointerSpace[pointer] = null;
    this.freePointers.push(pointer);
    return element;
  }

  retrieve(pointer: number): unknown {
    return this.pointerSpace[pointer];
  }
}
