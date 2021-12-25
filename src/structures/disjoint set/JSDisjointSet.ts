import IDisjointSet from './IDisjointSet';

export default class JSDisjointSet<T> implements IDisjointSet<T> {
  private relations: Map<T, T>;
  private sizes: Map<T, number>;
  constructor(list: T[] = []) {
    this.relations = new Map<T, T>();
    this.sizes = new Map<T, number>();

    for (const element of list) {
      this.add(element);
    }
  }

  add(element: T): void {
    this.relations.set(element, element);
    this.sizes.set(element, 1);
  }

  contains(element: T): boolean {
    return this.relations.has(element);
  }

  find(element: T): void | T {
    let root = this.relations.get(element);
    if (!root) {
      return;
    }

    while (root != null) {
      const parent = this.relations.get(root);
      if (!parent) return;

      const grandparent = this.relations.get(parent);
      if (!grandparent) return;

      this.relations.set(root, grandparent);

      if (parent === root) {
        break;
      }
      root = parent;
    }

    return root;
  }

  areJoint(element1: T, element2: T): boolean {
    return this.find(element1) === this.find(element2);
  }

  union(element1: T, element2: T): void {
    let root1 = this.find(element1);
    let root2 = this.find(element2);
    if (!root1 || !root2 || root1 === root2) return;

    if ((this.sizes.get(element1) ?? 0) < (this.sizes.get(element2) ?? 0)) {
      [root1, root2] = [root2, root1];
    }

    this.relations.set(root2, root1);
    this.sizes.set(
      root1,
      (this.sizes.get(root1) ?? 0) + (this.sizes.get(root2) ?? 0)
    );
  }
}
