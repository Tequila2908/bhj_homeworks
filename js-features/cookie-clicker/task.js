const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = function() {
    let clicks = clickerCounter.textContent++;
    cookie.width = cookie.width === 200 ? 250 : 200;

    //console.log(cookie.width);
}