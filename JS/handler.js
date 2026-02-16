document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const titleChange = document.getElementById("title-text");
    titleChange.innerText = "Updated page title text";
  });

document
  .getElementById("btn-login-update")
  .addEventListener("click", function () {
    const userUpdate = document.getElementById("user");
    userUpdate.innerText = "User login";
  });

document.getElementById("btn-name-update").addEventListener("click", function(){
    const inputText  = document.getElementById("input-name").value;
    const nameP = document.getElementById("name");
    nameP.innerText = inputText;
})