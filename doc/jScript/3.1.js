var monkeys = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];

while (randomNumbers.length <9) {
    random = Math.floor(Math.random()*9+1);
    if (randomNumbers.lastIndexOf(random) == -1) {
        randomNumbers.push(random);
    }
}
random = 0
for (var plaatje in monkeys) {
    monkeys[plaatje].src = "img/monk"+randomNumbers[random]+".jpg";
    random++;
}
/*
for (let i = 0; i < monkeys.length; i++) {
    random = Math.floor(Math.random()*9+1);
    monkeys[i].src = "img/monk"+random+".jpg";
}
*/
console.log()