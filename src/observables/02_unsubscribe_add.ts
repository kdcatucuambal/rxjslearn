import { Observable, Observer, Subscriber } from "rxjs"; //To create observables


const observer: Observer<any> = {
    next: value => console.log('Next [next]: ', value),
    error: error => console.warn("Error [obs]: ", error),
    complete: () => console.info("Completed [obs]")
}


const interval$ = new Observable<number>(subscriber => {
    let account = 0;
    //Create an account
    const time = setInterval(() => {
        //For each second

        account++;
        subscriber.next(account);
        console.log(account);


        // subscriber.next(++account);
        // if (account === 10) {
        //     clearInterval(time);
        //     subscriber.complete();
        // }
    }, 1000);


    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(time);
        console.log("Interval Destroyed");
    }
})

const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);


setTimeout(() => {
    subs1.unsubscribe();//Cancel subscription
    subs2.unsubscribe();
    subs3.unsubscribe();
    console.log("Completed timeout");

}, 3000);

