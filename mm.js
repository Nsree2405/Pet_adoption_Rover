// function handleClick() {
//     console.log("Request Received");
//     alert("Request Received");
// }

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.mysearchform form');

    // Mapping of names to their respective pages
    const dogDatabase = {
        "a": "adultf.html",
        "b": "adultf.html",
        "c": "adultf.html",
        "d": "adultf.html",
        "w": "adultm.html",
        "x": "adultm.html",
        "y": "adultm.html",
        "z": "adultm.html",
        "m": "malep.html",
        "n": "malep.html",
        "o": "malep.html",
        "p": "malep.html",
        "e": "femalep.html",
        "f": "femalep.html",
        "g": "femalep.html",
        "h": "femalep.html",
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const searchInput = form.querySelector('.mysearch').value.toLowerCase().trim();

        if (dogDatabase[searchInput]) {
            window.location.href = dogDatabase[searchInput]; // Redirect to the respective page
        } else {
            alert("No match found. Please check the name and try again.");
        }
    });
});


