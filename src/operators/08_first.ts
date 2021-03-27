import { fromEvent } from "rxjs";
import { first, take, tap } from "rxjs/operators";

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
    tap(next => console.log('tap:', next)),
    first<PointerEvent>(event => event.clientY >= 150)
    //map({clientX, clientY})=>({clientY, clientX})
).subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('complete')
});