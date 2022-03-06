import { performance } from 'perf_hooks';

function limitPrecision(value: number) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 6 });
}

export function benchmark<ReturnType>(
  fn: () => ReturnType,
  tag: string = fn.toString()
): ReturnType {
  const start = performance.now();
  const value = fn();
  const end = performance.now();

  console.log(`Benchmarked ${tag} at ${limitPrecision(end - start)}ms`);
  return value;
}

export function benchmarkAverage<Iterated, ReturnType>(
  iterator: Array<Iterated>,
  fn: (element: Iterated) => ReturnType,
  tag: string = fn.toString()
): ReturnType[] {
  const results: ReturnType[] = [];
  let total = 0;
  for (const element of iterator) {
    const start = performance.now();
    const result = fn(element);
    const end = performance.now();
    results.push(result);
    total += end - start;
  }
  console.log(
    `Benchmarked ${tag} at an average of ${limitPrecision(
      total / iterator.length
    )}ms and total of ${limitPrecision(total)}ms`
  );
  return results;
}
