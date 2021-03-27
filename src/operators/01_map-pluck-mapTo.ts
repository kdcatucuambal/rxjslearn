import { fromEvent, range } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";

// range(1, 5).pipe(
//     map<number, string>(val => (val * 10).toString())
// ).subscribe(val => console.log(val));

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyUpCode$ = keyup$.pipe(
    map(event => event.code)
);


const keyUpPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

const keyUpMapTo$ = keyup$.pipe(
    mapTo("Key Press")
);


keyup$.subscribe(console.log)
keyUpCode$.subscribe(res => console.log('map', res));
keyUpPluck$.subscribe(code => console.log('pluck', code));
keyUpMapTo$.subscribe(code => console.log('mapTo', code));