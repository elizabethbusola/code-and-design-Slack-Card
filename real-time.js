var d = new Date();
var t =d.getHours() + ":" + d.getMinutes() + " :" +d.getSeconds();
document.getElementByClassName('time').innerHTML = t;