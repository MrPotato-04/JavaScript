var plaatjes = [1,2,3,4,5,6,7,8,9]
var teller1 = 1;
var teller2 = 1;
var teller3 = 1;
var slideholder = document.getElementById("slideholder")
slideholder.style.backgroundImage = "url('img/monk1.jpg')";

var slideholder2 = document.getElementById("slideholder2")
slideholder2.style.backgroundImage = "url('img/monk1.jpg')";

var slideholder3 = document.getElementById("slideholder3")
slideholder3.style.backgroundImage = "url('img/monk1.jpg')";


slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/monk"+teller1+".jpg')";
    teller1++;
    if (teller1>9) {
        teller1 -= 9;
    }
});
slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/monk"+teller2+".jpg')";
    teller2++;
    if (teller2>9) {
        i -= 9;
    }
});
slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/monk"+teller3+".jpg')";
    teller3++;
    if (teller3>9) {
        teller3 -= 9;
    }
});