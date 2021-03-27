import { fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, pluck, tap } from "rxjs/operators";



const click$ = fromEvent(document, 'click');

click$.pipe(debounceTime(3000))
    .subscribe(console.log);


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    // map(event => event.target.value)
    tap(val => console.log('tap: ', val)),
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
);

input$.subscribe(console.log)