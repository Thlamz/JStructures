"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Benchmark = void 0;
const { performance } = require('perf_hooks');
class Benchmark {
    constructor(name) {
        this.operations = {};
        this._name = name;
    }
    benchmarkOperation(operationName, iterable) {
        return (name, fn) => {
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
    get benchmarkedOperations() {
        return Object.keys(this.operations);
    }
    operationBenchmarks(name) {
        return this.operations[name];
    }
    get name() {
        return this._name;
    }
}
exports.Benchmark = Benchmark;
