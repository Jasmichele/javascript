var hw = 'Hello World'

var elem = document.getElementById('demo');
elem.innerHTML = hw;

var year = 1492;

var elem1 = document.getElementById('demo1');
elem1.innerHTML = 'Columbus Sailed the world in ' + year;

var dog = false;

var elem2 = document.getElementById('demo2');
elem2.innerHTML = 'Have a dog true or false? ' + dog;

var today = new Date();
var dd = today.getDate();
var month = today.getMonth() + 1;
var year = today.getFullYear();
var elem3 = document.getElementById('demo3');
elem3.innerHTML = 'Today is ' + month + '/' + dd + '/' + year;

var money = '&#36;' + 5.45;
var elem4 = document.getElementById('demo4');
elem4.innerHTML = money;