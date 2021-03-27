import { of } from "rxjs"; //Algo para crear observables o relacionados
//of(1, 2, 3, 4, 5, 6): emite valores de manera síncrona

// const obs$ = of(1, 2, 3, 4, 5, 6);
//const obs$ = of([1, 2], { a: 1, b: 2 }, function () { }, Promise.resolve(true));
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2, 3, 4, 5);
//Sync
console.log('Start Obs$');
obs$.subscribe(
    next => console.log('next', next),
    error => console.warn(error),
    () => console.log('Finish sequence')
)
console.log('Finish Obs$');

