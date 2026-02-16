// document.getElementById("btn-mouse").addEventListener("mouseenter", function(){
//     console.log("Event Trigger");
// })

// document.getElementById("btn-mouse").addEventListener("mousemove", function(){
//     console.log("Mouse Move");
// })

// document.getElementById('btn-mouse').addEventListener("mouseout", function(){
//     console.log("Mouse Out")
// })


document.getElementById("user-name").addEventListener("focus", function(){
    console.log("User about to wright");
})

document.getElementById("user-email").addEventListener("focus", function(){
    console.log("Email box visit")
})

document.getElementById("user-name").addEventListener("blur", function(){
    console.log("User Visited Name field, and leave here");
})

document.getElementById("user-email").addEventListener("blur", function(){
    console.log("User visited email field, and leave there");
})


document.getElementById("user-name").addEventListener("keydown", function(event){
    console.log("Something typing...", event.target.value)
})