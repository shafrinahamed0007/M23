// list item 2 click handler
document.getElementById("item-2").addEventListener("click", function(event){
    console.log("Item 2 clicked");
    event.stopPropagation();
});

// ol clicked handler
document.getElementById("item-list").addEventListener("click", function(event){
    console.log("Ol clicked");
    event.stopPropagation();

});

// section container
document.getElementById("list-container").addEventListener("click", function(event){
    console.log("Section Container Clicked");
    event.stopPropagation();
})

// body 
document.getElementById("body").addEventListener("click", function(event){
    console.log("Clicked Body");
    event.stopPropagation();
})