import { from, of } from "rxjs";
import { distinct, distinctUntilChanged } from "rxjs/operators";

const numbers$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numbers$.pipe(
    distinctUntilChanged() //This use operator: === (equity)
).subscribe(console.log)

interface Character {
    name: string
}

const characters: Character[] = [
    { name: 'MegaMan' },
    { name: 'MegaMan' },
    { name: 'Tomy' },
    { name: 'SpiderMan' },
    { name: 'MegaMan' },
    { name: 'MegaMan' },
    { name: 'SuperMan' },
    { name: 'Queman' },
    { name: 'Tomy' },
    { name: 'Tomy' },
    { name: 'SuperMan' }
];

from(characters).pipe(
    distinctUntilChanged((prev, curr) => prev.name === curr.name)
).subscribe(console.log)