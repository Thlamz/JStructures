import IExtendedSet from './IExtendedSet';
import { ExtendedSet } from '../assembly/output';

export default class CExtendedSetNumber implements IExtendedSet<number> {
  public readonly _extendedSet: ExtendedSet;
  constructor(list: number[] = []) {
    this._extendedSet = new ExtendedSet(list);
  }
  add(element: number): void {
    this._extendedSet.add(element);
  }

  delete(element: number): void {
    this._extendedSet.remove(element);
  }

  contains(element: number): boolean {
    return this._extendedSet.contains(element);
  }

  intersect(set: CExtendedSetNumber): void {
    this._extendedSet.intersect(set._extendedSet);
  }

  union(set: CExtendedSetNumber): void {
    this._extendedSet.join(set._extendedSet);
  }
}
