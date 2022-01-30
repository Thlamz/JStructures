const { performance } = require('perf_hooks');

// function limitPrecision(value: number, precision = 6) {
//   return value.toLocaleString(undefined, { maximumFractionDigits: precision });
// }

interface BenchmarkRun {
  name: string;
  averageTime: number;
  totalTime: number;
  operations: number;
}

type OperationBenchmarker<TInput extends Array<unknown>> = (
  name: string,
  fn: (...value: TInput) => unknown
) => void;

export class Benchmark<TInput extends Array<unknown>> {
  private readonly _name: string;

  private operations: Record<string, BenchmarkRun[]> = {};

  constructor(name: string) {
    this._name = name;
  }

  benchmarkOperation(
    operationName: string,
    iterable: Iterable<TInput>
  ): OperationBenchmarker<TInput> {
    return (name: string, fn: (...value: TInput) => unknown): void => {
      let totalTime = 0;
      let operations = 0;
      for (const input of iterable) {
        const start = performance.now();
        fn(...input);
        const end = performance.now();
        totalTime += end - start;
        operations++;
      }

      if (!this.operations[operationName]) {
        this.operations[operationName] = [];
      }

      this.operations[operationName].push({
        name,
        operations,
        totalTime,
        averageTime: totalTime / operations
      });
    };
  }

  get benchmarkedOperations(): string[] {
    return Object.keys(this.operations);
  }

  operationBenchmarks(name: string): BenchmarkRun[] {
    return this.operations[name];
  }

  get name(): string {
    return this._name;
  }
}
