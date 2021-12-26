import { benchmark } from '../src/helpers/benchmark';
import CExtendedSetNumber from '../src/structures/extendedSet/CExtendedSetNumber';
import CExtendedSet from '../src/structures/extendedSet/CExtendedSet';

const ARRAY_SIZE = 1e6;

const numberArray: number[] = [];
const objectArray: object[] = [];
const stringArray: string[] = [];
for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray.push(Math.random());
  objectArray.push({
    value: Math.random()
  });
  stringArray.push('oi');
}

benchmark(() => new Set(numberArray), 'set creation');

interface implementation {
  constructor: any;
  name: string;
}
const implementations: implementation[] = [
  { constructor: CExtendedSet, name: 'CExtendedSet' },
  { constructor: CExtendedSetNumber, name: 'CExtendedSetNumber' }
];

implementations.forEach(({ constructor, name }) => {
  describe(`Testing ${name}`, () => {
    const extendedSet = benchmark(
      () => new constructor(numberArray),
      `${name} creation`
    );

    it('should contain all numbers', () => {
      const contains = numberArray.map((n) => extendedSet.contains(n));
      expect(contains.some((c) => !c)).toBeFalsy();
    });
    //
    // const extendedSetObjects = new CExtendedSetNumber(objectArray);
    //
    // benchmark(
    //   () => extendedSet.union(extendedSetObjects),
    //   'extended array union'
    // );
    // it('should contain all numbers and objects', () => {
    //   const fullArray: (number | object)[] = (<(object | number)[]>[]).concat(
    //     objectArray,
    //     numberArray
    //   );
    //   const contains = fullArray.map((element) => extendedSet.contains(element));
    //
    //   expect(contains.some((c) => !c)).toBeFalsy();
    // });
  });
});
