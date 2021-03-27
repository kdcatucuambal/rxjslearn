import { asyncScheduler } from "rxjs";

// setTimeout(() => {   }, 3000);
// setInterval(()=>{}, 3000)

const saludar = () => console.log("Hello World");
const saludar2 = (name: string) => console.log(`Hello ${name}`);

// asyncScheduler.schedule(saludar2, 2000, 'Kevin');

const subs = asyncScheduler.schedule(function (state) {
    console.log('State', state);

    this.schedule(state + 1, 1000);

}, 3000, 0);


// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);


asyncScheduler.schedule(() => { subs.unsubscribe() }, 6000)