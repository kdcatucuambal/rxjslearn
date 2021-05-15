import { Observable, Observer, Subject } from "rxjs"; //To create observables

//const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('Next [obs]: ', value),
    error: error => console.warn("Error [obs]: ", error),
    complete: () => console.info("Completed [obs]")
}


//<El tipo de dato que va emitir> <string>
const obs$ = new Observable<string>(subs => {
    subs.next('Hello');
    subs.next('World');
    subs.next('Kevin');
    subs.next('David');

    // //Error created
    // const a = undefined;
    // a.nombre = "Fernando";

    subs.complete();
    subs.next("Error"); //No emite este valor
});


obs$.subscribe(observer);






// obs$.subscribe(
//     value => console.log('next: ', value),
//     error => console.warn('error: ', error),
//     () => console.info("Completed")
// );



