'use strict';

const apiBaseURL = 'https://geocode.xyz/';
const formatParam = 'geoit=json';



function getCity(latitude, longitude) {
    const response = fetch(`${apiBaseURL}/${latitude},${longitude}?${formatParam}`)
        .then(response => {
            if (!response.ok) {
                const message = `Something went wrong ${response.status}`;
                console.log(message);
                throw new Error(message);
            } else return response.json();
        })
        .then(response => {
            console.log(response);
            console.log(response.city);
        })
}
getCity(55.74, 37.66);