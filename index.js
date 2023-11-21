//select all the box in a table tableBox
//create two var for player1 and player2 as obj contain value and ther name
//create a counter count the play round 
    //counter < 9
    //where a player play counter++
    //if counter%2 === 0 && !gameOver && emptyBox
        //round of player1
        //target.innerHtml = player1.symbol
        //counter++
    //else counter%2 === 1 && !gameOver
        //round of player2
        //target.innerHtml = player2.symbol
        //counter++

//get winner i shoudl create a matrix countaine all symbol tableValue
//i can know the play of that target in the by mapin teh tabelBox and take there value
//create a function detacte the winner
    //create a matrix of winCasses

let tableBox = document.querySelectorAll("th")
let container = document.querySelector(".container")
let win = document.querySelector(".win")
let over = document.querySelector(".over")

let player1 = {
    name : "yacine",
    value : "X",
    color : "white",
    score: 0,
    span : document.querySelector(".score span:first-child")
}
let player2 = {
    name : "hicham",
    value : "O", 
    color : "#1f1f73",
    score: 0,
    span : document.querySelector(".score span:last-child")
}
let counter = 0;

function isEmpty(box){
    if(!box.innerHTML){
        return true
    }else{
        return false
    }
}
function isOver(){
    if(counter < 9){
        return false
    }
    else if(counter === 9){
        over.style.display = "flex"
        counter++;
        return true
    }else{
        return true
    }
}
function getWinner(boxs, player){
    let valueBox = [];
    for(let i = 0; i < 9; i++){
        valueBox.push(boxs[i].innerHTML)
    }
    let winCasses = [
                        [0, 1 , 2], [3, 4, 5,], [6, 7, 8],
                        [0, 3 , 6], [1, 4, 7], [2, 5, 8],
                        [0, 4 , 8], [2, 4, 6]
                    ]
    for(let i = 0 ; i < 8; i++){
        let condition = valueBox[winCasses[i][0]] === valueBox[winCasses[i][1]] 
                        && valueBox[winCasses[i][1]] === valueBox[winCasses[i][2]]
                        && valueBox[winCasses[i][0]] != "";
        if(condition){
            if(player.name === "yacine"){
                player1.score++;
                player1.span.innerHTML = `${player1.name} [${player1.score}]`;
            }else if(player.name === "hicham"){
                player2.score++;
                player2.span.innerHTML = `${player2.name} [${player2.score}]`;
            }
            win.innerHTML = `${player.name} is the winner`
            win.style.display = "block"
            counter = 9;
        }
    }

}

//start the game
player1.span.innerHTML = `${player1.name} [${player1.score}]`;
player2.span.innerHTML = `${player2.name} [${player2.score}]`;

tableBox.forEach(function(box){
    box.addEventListener("click", function(e){
        if(isEmpty(box) && !isOver(counter)){
            if(counter % 2 === 0 ){
                e.target.innerHTML = player1.value
                e.target.style.backgroundColor = player1.color
                counter++;
                getWinner(tableBox, player1);   
            }else if(counter % 2 === 1){
                e.target.innerHTML = player2.value
                e.target.style.backgroundColor = player2.color
                counter++;
                getWinner(tableBox, player2);   
            }
            isOver(counter);
        }
    })
})
over.addEventListener("click", function(e){
    tableBox.forEach(function(box){
        box.innerHTML = "";
        box.style.backgroundColor = "transparent"
    })
    counter = 0;
    win.style.display = "none"
    over.style.display = "none";
})