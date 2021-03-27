import { asyncScheduler, fromEvent } from "rxjs";
import { debounceTime, distinctUntilChanged, map, pluck, tap, throttleTime } from "rxjs/operators";



const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000))
// .subscribe(console.log);


const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup').pipe(
    // map(event => event.target.value)
    //tap(val => console.log('tap: ', val)),
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    pluck('target', 'value'),
    distinctUntilChanged()
);

input$.subscribe(console.log)