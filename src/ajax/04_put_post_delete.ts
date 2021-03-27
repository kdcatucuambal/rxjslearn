import { ajax } from "rxjs/ajax";

const url = 'https://httpbin.org/delay/1';

// ajax.put(url, {
//     id: 1,
//     name: 'Kevin'
// }, {
//     token: 'ABC123'
// }).subscribe(console.log)

ajax({
    url,
    method: 'GET',
    headers: {
        'my-token': 'ABC-123'
    },
    body: {
        id: 1,
        name: 'Kevin'
    }
}).subscribe(console.log);