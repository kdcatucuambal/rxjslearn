import { interval } from "rxjs";
import { reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (acc: number, curr: number) => {
    return acc + curr;
}

const total = numbers.reduce(totalReducer, 0);
console.log('Total arr: ', total);

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer, 5)
).subscribe({
    next: val => console.log('next: ', val),
    complete: () => console.log('complete')
})
