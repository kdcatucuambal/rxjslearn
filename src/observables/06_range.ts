import { asyncScheduler, of, range } from "rxjs";

//asyncScheduler: to transform asynchronous code
const src$ = range(1, 5, asyncScheduler);

console.log('Init');
src$.subscribe(console.log)
console.log('Finish');
