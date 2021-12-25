export default interface IDisjointSet<T> {
  add(element: T): void;
  union(element1: T, element2: T): void;
  find(element: T): T | void;
  contains(element: T): boolean;
  areJoint(element1: T, element2: T): boolean;
}
