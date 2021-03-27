import { from, fromEvent } from "rxjs"
import { map, takeWhile, tap } from "rxjs/operators";

// const numbers = [1, 2, 3, 4, 5]


// const num$ = from(numbers);

// num$.pipe(
//     takeWhile(value => value <= 3)
// ).subscribe({
//     next: (next) => console.log(next),
//     complete: () => console.log('complete')
// })

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap(console.log),
    map(({ x, y }) => ({ x, y })),
    takeWhile(({ y }) => y <= 150, true)
)
    .subscribe({
        next: val => console.log('next', val),
        complete: () => console.log('complete')
    });