import IExtendedSet from './IExtendedSet';
import { ExtendedSet } from '../assembly/output';

export default class CExtendedSet implements IExtendedSet<unknown> {
  public readonly _extendedSet: ExtendedSet;
  private lastKey = 0;
  private elementMap: Map<unknown, number> = new Map<unknown, number>();
  constructor(list: unknown[] = []) {
    const keys = list.map((e) => {
      const key = this.lastKey;
      this.elementMap.set(e, key);
      this.lastKey++;
      return key;
    });

    this._extendedSet = new ExtendedSet(keys);
  }
  add(element: unknown): void {
    let key: number;
    if (this.elementMap.has(element)) {
      key = this.elementMap.get(element)!;
    } else {
      key = this.lastKey++;
      this.elementMap.set(element, key);
    }
    this._extendedSet.add(key);
  }

  delete(element: unknown): void {
    const key = this.elementMap.get(element);
    if (key === undefined) {
      return;
    }

    this._extendedSet.remove(key);
    this.elementMap.delete(key);
  }

  contains(element: unknown): boolean {
    const key = this.elementMap.get(element);
    if (key === undefined) return false;
    return this._extendedSet.contains(key);
  }

  intersect(set: CExtendedSet): void {
    this._extendedSet.intersect(set._extendedSet);
  }

  union(set: CExtendedSet): void {
    this._extendedSet.join(set._extendedSet);
  }
}
