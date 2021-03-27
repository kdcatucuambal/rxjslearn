import { of, from, Observer } from "rxjs";

/**
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */
const observer: Observer<any> = {
    next: (val: any) => console.log('Next:', val),
    complete: () => console.log('Complete'),
    error: error => console.warn("Error: ", error)
}


const myGenerater = function* () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const myInterable = myGenerater();


//myInterable.next()


// for (const id of myInterable) {
//     console.log(id);  
// }

from(myInterable).subscribe(observer);

// const source$ = of([{ name: "Eduardo" }, 
// { name: "Kevin" }, 
// { name: "Felié" }, 
// { name: "Tyson" }]);


//const source$ = from('FERNANDO');

const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(async (res) => {
//     const data = await res.json();
//     console.log(data);
// })

// source$.subscribe(observer);