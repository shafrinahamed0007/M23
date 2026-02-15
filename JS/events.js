function makeYellow(){
    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
}

function makeBlack(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

function makeWhite(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

}


// option 3: get element by Id and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
// console.log(btnMakeBlue);
btnMakeBlue.onclick =  function makeBlue(){
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "white";
}


// option 3: different version
const btnMakePurple = document.getElementById("btn-make-purple");
btnMakePurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "white"
}