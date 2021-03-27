import { from, of } from "rxjs";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";


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
    distinctUntilKeyChanged('name')
).subscribe(console.log);

