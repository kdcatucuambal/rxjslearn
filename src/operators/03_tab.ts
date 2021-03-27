import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numbers$ = range(1, 5);



numbers$.pipe(
    tap(x => {
        console.log('antes', x)
    }),
    map(val => val * 10),
    tap({
        next: val => console.log('después', val),
        complete: () => console.log('Se terminó todo')
    })
).subscribe(val => console.log('subs', val));