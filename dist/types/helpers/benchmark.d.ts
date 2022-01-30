interface BenchmarkRun {
    name: string;
    averageTime: number;
    totalTime: number;
    operations: number;
}
declare type OperationBenchmarker<TInput extends Array<unknown>> = (name: string, fn: (...value: TInput) => unknown) => void;
export declare class Benchmark<TInput extends Array<unknown>> {
    private readonly _name;
    private operations;
    constructor(name: string);
    benchmarkOperation(operationName: string, iterable: Iterable<TInput>): OperationBenchmarker<TInput>;
    get benchmarkedOperations(): string[];
    operationBenchmarks(name: string): BenchmarkRun[];
    get name(): string;
}
export {};
