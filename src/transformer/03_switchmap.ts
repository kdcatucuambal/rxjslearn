import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs/operators";
import { GitHubUser, GitHubUsersResp } from "../interfaces/github-users";

const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);


// Helpers
const showUsers = (users: GitHubUser[]) => {
    console.log(users);
    orderList.innerHTML = '';
    for (const user of users) {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = user.avatar_url;
        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.text = 'View page';
        anchor.target = '_blank';
        li.append(img);
        li.append(user.login + ' ');
        li.append(anchor);

        orderList.append(li);

    }

}


//Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<GitHubUsersResp>>(text => {
        return ajax.getJSON(
            `https://api.github.com/search/users?q=${text}`
        );
    }),
    pluck<GitHubUsersResp, GitHubUser[]>('items')
);
const url = "https://httpbin.org/delay/1?arg=";

input$.pipe(
    pluck('target', 'value'),
    switchMap(text => ajax.getJSON(url + text))
).subscribe(console.log)