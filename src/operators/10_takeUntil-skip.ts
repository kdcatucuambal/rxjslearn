import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";

const button = document.createElement('button');

button.innerHTML = 'Stop Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(button, 'click');
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(() => console.log('tap before the skip')),
    skip(1), //jump events
    tap(() => console.log('tap next the skip'))
);

counter$.pipe(
    takeUntil(clickBtn$)
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});