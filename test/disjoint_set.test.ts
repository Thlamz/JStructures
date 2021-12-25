import JSDisjointSet from '../src/structures/disjoint set/JSDisjointSet';
import { benchmark, benchmarkAverage } from '../src/helpers/benchmark';

const ARRAY_SIZE = 1e5;

const testArray: (number | object | string)[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
  testArray.push(Math.random());
  testArray.push({
    value: Math.random()
  });
  testArray.push((Math.random() + 1).toString(36).substring(7));
}

benchmark(() => new Set(testArray), 'set creation');

describe('Testing disjoint set creation', () => {
  const set = benchmark(
    () => new JSDisjointSet(testArray),
    'disjoint set creation'
  );

  it('should contain all elements', () => {
    for (const element of testArray) {
      expect(set.contains(element)).toBeTruthy();
    }
  });

  it('should be disjoint', () => {
    expect(set.areJoint(testArray[0], testArray[1])).toBeFalsy();
  });

  it('should join all sets', () => {
    let index = 0;
    benchmarkAverage(testArray, () => {
      if (index < testArray.length - 1) {
        set.union(testArray[index], testArray[index + 1]);
      }
      index++;
    });

    const parents: (string | number | object | void)[] = [];
    const areJoint: boolean[] = [];
    for (const [index, element] of testArray.entries()) {
      parents.push(set.find(element));
      if (index + 1 < testArray.length) {
        areJoint.push(set.areJoint(element, testArray[index + 1]));
      }
    }
    expect(parents.some((p) => p != parents[0])).toBeFalsy();
    expect(areJoint.some((j) => !j)).toBeFalsy();
  });
});
