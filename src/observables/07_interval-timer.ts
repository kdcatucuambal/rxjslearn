import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('Complete')
}


const todayIn5 = new Date(); //Now

todayIn5.setSeconds(todayIn5.getSeconds() + 5);


const interval$ = interval(1000);
// const timer$ = timer(5000);
//const timer$ = timer(2000,1000); //Inicia en dos segundos, luego cada segundo se lanza


const timer$ = timer(todayIn5);


console.log('Init');
//interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Finish');