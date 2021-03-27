
export interface User {
    id: number;
    name: string
}



import { Observable } from "rxjs";


const users$ = new Observable<User>(subs => {
    subs.next({ id: 1, name: "David" })
    subs.next({ id: 2, name: "Emanuel" })
    subs.complete();
    subs.next({ id: 3, name: "Wilmer" })
    return () => {
       
        console.log('Observable completed');
    }
});



const subs = users$.subscribe(response => {
    console.log(response);
})
