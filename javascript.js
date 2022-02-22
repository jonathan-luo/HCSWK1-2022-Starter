/* input JavaScript code here! */
function startMsg() {
    let name = getName();
    document.getElementById("welcome").innerHTML = `What's goody${name}, welcome to BingBong.com. Also, please don't touch me.`;
}

function scared() {
    let name = getName();
    document.getElementById("welcome").innerHTML = `Ah${name}! Please DON'T touch me!`;
}

function relieved() {
    let name = getName();
    document.getElementById("welcome").innerHTML = `That's better. Anyways${name}, welcome to BingBong.com.`;
}

function spencer() {
    let n = parseInt(document.getElementById("spencer").innerHTML);
    document.getElementById("spencer").innerHTML = `${n + 1} -- Keep going, he loves it!`;
}

function cannoli() {
    let n = parseInt(document.getElementById("cannoli").innerHTML);
    let msg;
    if (Math.random() < 0.1) {
        n += 1;
        msg = "Whoa, you actually pet Cannoli! Congrats!";
    } else {
        msg = "Aww, Cannoli's a lil' shy, try again to see if you can pet her!";
    }
    document.getElementById("cannoli").innerHTML = `${n} -- ${msg}`;
}

function scout() {
    let n = parseInt(document.getElementById("scout").innerHTML);
    document.getElementById("scout").innerHTML = `${n + 1} -- Keep going, he loves it!`;
}

function getName() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let name = urlParams.get('name');
    return name ? `, <strong class="specialName">${revString(name)}</strong>`: "";
}

function revString(s) {
    return s.split("").reverse().join("");
}