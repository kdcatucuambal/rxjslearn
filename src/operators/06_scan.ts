import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";


const numbers = [1, 2, 3, 4, 5];
const totalAcc = (acc: number, cur: number) => acc + cur;


//Reduce
from(numbers).pipe(
    reduce(totalAcc, 0)
).subscribe(console.log);

//Scan
from(numbers).pipe(
    scan(totalAcc, 0)
).subscribe(console.log);


// Redux: The state of my application in an object
interface User {
    id?: string,
    authenticated?: boolean,
    token?: string,
    age?: number
}

const users: User[] = [
    { id: '1', authenticated: false, token: null, age: 10 },
    { id: '2', authenticated: true, token: 'ABC', age: 10 },
    { id: '3', authenticated: true, token: 'ACB123', age: 10 }
]


const state$ = from(users).pipe(
    scan<User>((acc, curr) => {
        return { ...acc, ...curr }
    }, { age: 33 })
);


const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);