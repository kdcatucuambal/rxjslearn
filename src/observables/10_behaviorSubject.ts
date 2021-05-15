import { BehaviorSubject, Subject, Observable } from "rxjs";

//const subject = new BehaviorSubject<string>('kevin');
const subject2 = new BehaviorSubject(123);




subject2.subscribe(res => {
    console.log("ou1: " + res);

});
subject2.subscribe(res => {
    console.log("ou2: " + res);
});

subject2.next(456);




subject2.next(789);

subject2.subscribe(res => {
    console.log("ou3: " + res);
});


const subject = new Subject<number>();
 



subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
  error: (e)=> console.log(e)
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`)
});

subject.next(100);
subject.next(1);
subject.next(2);



const obs = new Observable();


// subject.next("Kasandra")

// subject.subscribe(res => {
//     console.log("Res2: " + res);
// });

// subject.next('david');



// subject.next('catucuamba');



// subject.subscribe(res => {
//     console.log("Res: " + res);
// });

//console.log("getvalue: ", subject.getValue());



//subject.subscribe(console.log)


