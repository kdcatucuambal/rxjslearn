import { range, from, fromEvent } from "rxjs";
import { filter, map } from "rxjs/operators";

range(1, 10).pipe(
    filter((val, index) => {
        console.log('Index:', index);
        return val % 2 === 1;
    })
)//.subscribe(console.log)

interface character {
    type: string,
    name: string
}

const characters: character[] = [
    { type: 'heroe', name: 'Batman' },
    { type: 'heroe', name: 'Robin' },
    { type: 'villain', name: 'Joker' }
];


from(characters).pipe(filter(val => val.type == 'villain'))
    .subscribe(console.log)



const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe( //1
    map(e => e.code), //keyboard, string 1. Operador
    filter(key => key === 'Enter') //2. Operador
);

keyUp$.subscribe(console.log)