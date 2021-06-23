let divVar = document.getElementById('divId')
divVar.innerText = "test"
divVar.style.backgroundColor = '#AA00FF'
divVar.style.color = "white"
let i =0
let divVar2 = document.getElementById("divId2")
divVar.addEventListener('click',teller)
function teller() {
    i++;
    console.log(i)
    divVar2.innerText = i


}