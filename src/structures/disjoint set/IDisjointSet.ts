import { IHashable } from '../generics/IHashable';

export interface IDisjointSet<T extends IHashable> extends Set<T> {
  union(set: IDisjointSet<T>): IDisjointSet<T>;
  intersection(set: IDisjointSet<T>): IDisjointSet<T>;
}
