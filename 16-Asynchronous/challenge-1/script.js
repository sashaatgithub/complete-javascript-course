'use strict';
/*
const apiBaseURL = 'https://geocode.xyz/';
const formatParam = 'geoit=json';

function getCity(latitude, longitude) {
    const response = fetch(`${apiBaseURL}/${latitude},${longitude}?${formatParam}`)
        .then(response => {
            let message;
            if (response.ok) {
                return response.json()
            }
            if (response.error) {
                message = `Something went wrong: ${error.description}`;

            } else {
                message = `Something went wrong ${response.status}`;
            } throw new Error(message)
        })
        .then(response => {
            console.log(response);
            console.log(response.city);
            return response;
        })
        .catch(err => console.log(err.message))
}
getCity(155.74, 237.66);
*/
console.log('Test start');
setTimeout(() => console.log('0 sec timer 🏆'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
console.log('Test end');

