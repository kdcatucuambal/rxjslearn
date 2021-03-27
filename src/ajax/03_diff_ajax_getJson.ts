import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError } from "rxjs/operators";

const url = "https://xhttpbin.org/delay/1";

// const errorHandler = (resp: AjaxError) => {
//     console.warn("error: ", resp.message);
//     return of({
//         ok: false,
//         users: []
//     })
// }

// const obs$ = ajax.getJSON(url, {
//     'Content-Type': 'application/json',
//     'token': 'ABCD-1234'
// }).pipe(
//     catchError(errorHandler)
// );


const errorHandler = (resp: AjaxError) => {
    console.warn("error: ", resp.message);
    return of({
        ok: false,
        users: []
    })
}

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(catchError(errorHandler)).subscribe({
    next: val => console.log('next:', val),
    error: err => console.log("subs error:", err),
    complete: () => console.log('completed')
});



//obs2$.subscribe(data => console.log('ajax:', data));
