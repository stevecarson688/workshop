
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    document.getElementById('time').innerHTML = "local Time : " + h + ":" + m + ":" + s; var t = setTimeout(startTime, 60);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}

startTime();






























