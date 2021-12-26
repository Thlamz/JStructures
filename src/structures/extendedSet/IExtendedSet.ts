export default interface IExtendedSet<T> {
  add(element: T): void;
  delete(element: T): void;
  contains(element: T): boolean;
  union(set: IExtendedSet<T>): void;
  intersect(set: IExtendedSet<T>): void;
}
