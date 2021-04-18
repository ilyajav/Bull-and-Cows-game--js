let stButton = document.querySelector('#stButton')
let game = document.querySelector('#gameBC')
let checkNum = document.querySelector("#checkNum")
let playerNum = document.querySelector("#playerNum")
let listAns = document.querySelector("#listAns")
let fAns = document.querySelector("#fAns")
let counter = document.querySelector("#counter")
let stNew = document.querySelector("#stNew")
let gameBC = document.querySelector("#gameBC")
let answers = document.querySelector('#answers')
let number0, number1, number2, number3, numsArr, cows = 0, bulls = 0, inputNums, humNumsArr, count = 8, arr
checkNum.disabled = true

function arrNums() {
    counter.style.display = "block"
    answers.style.display = "block"
    listAns.style.display = "block"
    count -= 1
    bulls = 0
    cows = 0
    counter.innerHTML = `You have ${count} turns`
    inputNums = playerNum.value
    humNumsArr = ("" + inputNums).split("")
    humNumsArr.forEach(function (el, i, arr) {
        arr[i] = Number(el)
        if(humNumsArr[i] === numsArr[i]){
            bulls +=1
        }
        else if(humNumsArr[i] !== numsArr[i] && numsArr.includes(humNumsArr[i])){
            cows +=1
        }
    })
    listAns.innerHTML += "<li>" + playerNum.value + " consists " + bulls+ " bulls and " + cows +" cows </li>"
    playerNum.value = ""
    if(bulls === 4 && count >=0){
        fAns.innerHTML = "You won"
        checkNum.disabled = true
    }
    else if(count === 0 && bulls !==4){
        fAns.innerHTML = "You lost"
        checkNum.disabled = true
    }
    checkNum.disabled = true
}

function myRandom(minN, maxN) { // random function
    return Math.floor(Math.random() * (maxN - minN + 1)) + minN // math expression
}

function randomize(){
 number0 = myRandom(0, 9) // number 1
 number1 = myRandom(0,9)
 while(number1 === number0){
        number1 = myRandom(0,9)
 }
 number2 = myRandom(0,9)
 while(number2 === number0 || number2 === number1){
        number2 = myRandom(0,9)
 }
 number3 = myRandom(0,9)
 while(number3 === number0 || number3 === number1 || number3 === number2){
        number3 = myRandom(0,9)
 }
 numsArr = [number0, number1, number2, number3]
}

function startGame() {
    stNew.style.display = "block"
    randomize()
    game.style.display = "block"
    stButton.style.display = "none"
    hNum = parseInt(playerNum.value)
    humNumsArr = ("" + hNum).split("")
    humNumsArr.forEach(function(el, i, arr){
        arr[i] = Number(el)
    })
}

function buttonCheck(){
    arr = playerNum.value.split("", 4)
    arr.forEach(function(el, i, arr){
        arr[i] = Number(el)
    })
   checkNum.disabled = !(arr[0] !== arr[1] && arr[1] !== arr[2] && arr[2] !== arr[3] && playerNum.value.length === 4
   && arr[0] !== arr[2] && arr[0] !== arr[3] && arr[1] !== arr[3]);
}

function restartGame(){
    gameBC.style.display = "none"
    count = 8
    stButton.style.display = "block"
    playerNum.innerHTML = ""
    counter.style.display = "none"
    listAns.innerHTML = ""
    fAns.innerHTML = ""
    answers.style.display = "none"
}

stButton.addEventListener("click", startGame)
checkNum.addEventListener("click", arrNums)
playerNum.addEventListener('input', buttonCheck)
stNew.addEventListener("click", restartGame)