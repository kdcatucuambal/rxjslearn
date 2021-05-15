

import { Observable, Observer, Subject, Subscriber } from "rxjs"; //To create observables

const observer: Observer<any> = {
    next: value => console.log('Next [next]: ', value),
    error: error => console.warn("Error [obs]: ", error),
    complete: () => console.info("Completed [obs]")
}

const intervalo$ = new Observable(subs => {
    const intervalID = setInterval(() => {
        subs.next(Math.random())
    }, 3000);

    return () => {
        clearInterval(intervalID);
        console.log('Innterval destroyed');

    }
});

/**
 * CARACTERISTICAS SUBJECT: Cold Observable a hot ibservable
 * 1- Casteo múltiple
 * 2- Tambien es un observer
 * 3- Next, error and complete
 */

const subject$ = new Subject();


const subscription = intervalo$.subscribe(subject$);

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.next(23);
    subject$.complete();
    subject$.next(199);

    subscription.unsubscribe();
}, 3500)

