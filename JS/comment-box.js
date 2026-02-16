document
  .getElementById("btn-post-comment")
  .addEventListener("click", function () {
    // step-2: get the text written in the comment box area
    const newComment = document.getElementById("comment-text-box").value;

    // step-3: get the parent node where to publish comment
    const commentContainer = document.getElementById("comment-container");

    // step-4: create a comment paragraph and set the innerText
    const commentElement = document.createElement("p");
    commentElement.classList.add("comment")
    commentElement.innerText = newComment;

    // step-5: append the new p tag to the parent node
    commentContainer.appendChild(commentElement);

    // step-6: clean the text are
    newComment = "";
  });
