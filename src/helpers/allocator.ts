export interface IAllocator {
  allocate(element: unknown): number;
  retrieve(pointer: number): unknown;
  deallocate(element: unknown): void;
  deallocateRetrievePointer(pointer: number): unknown;
}

export class UniqueAllocator implements IAllocator {
  private objectPointers: Map<unknown, number>;
  private pointerMemory: unknown[];
  private freePointers: Set<number>;
  private pointer = 0;
  constructor() {
    this.objectPointers = new Map<unknown, number>();
    this.pointerMemory = [];
    this.freePointers = new Set<number>();
  }

  allocate(element: unknown): number {
    if (this.objectPointers.has(element)) {
      const pointer = this.objectPointers.get(element)!;
      this.freePointers.delete(pointer);
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
      this.freePointers.add(pointer);
    }
  }

  deallocateRetrievePointer(pointer: number): unknown | undefined {
    const element = this.retrieve(pointer);
    this.objectPointers.delete(element);
    this.freePointers.add(pointer);
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
