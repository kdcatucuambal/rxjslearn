import { of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map, pluck } from "rxjs/operators";


const url = "https://api.github.com/users?per_page=5";

const handlerError = (response: Response) => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response;
}

// const fetchPromise = fetch(url);

// fetchPromise
//     .then(handlerError)
//     .then(data => console.log(data))
//     .catch(err => console.warn(err));

const myCatchError = (err: AjaxError) => {
    console.warn('error en:', err.message);
    return of([])
}

ajax(url).pipe(
    // map(({ response }) => response)
    pluck('response'),
    catchError(myCatchError)
).subscribe(users => console.log('users:', users))