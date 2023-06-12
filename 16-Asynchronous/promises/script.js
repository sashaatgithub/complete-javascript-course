'use strict'
const btn = document.querySelector('.btn-country');
const apiBaseURL = 'https://geocode.xyz/';
const formatParam = 'geoit=json';

function showUI() {
    countriesContainer.style.opacity = 1;
}


function getPosition() {
    return navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Not working because of throttling
        //         const response = fetch(`${apiBaseURL}/${latitude},${longitude}?${formatParam}`)

        const response = fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en')
            .then(response => {
                let message;
                if (response.error) {
                    message = `Something went wrong: ${error.description}`;
                    throw new Error(message)
                } else if (String(response.distance).slice(0, 8) === 'Throttled') {
                    message = `Unauthenticated users are making too many requests`
                    throw new Error(message)
                }
                else { return response.json() }
            })
            .then(data => {
                // console.log(data);
                console.log(`You are in ${data.city}, ${data.countryName}`);
                return data;
            })
            .catch(err => console.log(err.message))
    });
}

function showPosition() {
    getPosition();
    showUI();
}
btn.addEventListener('click', showPosition);