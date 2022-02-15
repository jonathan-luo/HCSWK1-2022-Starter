/* input JavaScript code here! */
function startMsg() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let name = urlParams.get('name');
    name = name ? ` <strong class="specialName">${getRevName(name)}</strong>`: "";
    document.getElementById("welcome").innerHTML = `What's goody${name}, welcome to Bing Bong dot com.`;
}

function scared() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let name = urlParams.get('name');
    name = name ? `, <strong class="specialName">${getRevName(name)}</strong>`: "";
    document.getElementById("welcome").innerHTML = `Ah${name}! Please DON'T touch me!`;
}

function relieved() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let name = urlParams.get('name');
    name = name ? `, <strong class="specialName">${getRevName(name)}</strong>`: "";
    document.getElementById("welcome").innerHTML = `That's better. Anyways${name}, welcome to Bing Bong dot com.`;
}

function spencer() {
    let n = parseInt(document.getElementById("spencer").innerHTML)
    document.getElementById("spencer").innerHTML = `${n + 1} -- Keep going, he loves it!`;
}

function cannoli() {
    let n = parseInt(document.getElementById("cannoli").innerHTML)
    let msg = "Aww, Cannoli's a lil' shy, try again to see if you can pet her!"
    if (Math.random() < 0.1) {
        n += 1;
        msg = "Whoa, you actually pet Cannoli! Congrats!"
    }
    document.getElementById("cannoli").innerHTML = `${n} -- ${msg}`;
}

function scout() {
    let n = parseInt(document.getElementById("scout").innerHTML)
    document.getElementById("scout").innerHTML = `${n + 1} -- Keep going, he loves it!`;
}

function getRevName(s) {
    return s.split("").reverse().join("");
}