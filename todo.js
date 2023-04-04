const btn = document.querySelector(".input-area button");

btn.addEventListener("click", function () {
  const input = document.querySelector(".input-area input");

  const todo = document.querySelector(".todo-area");

  const p = document.createElement("p");

  p.innerText = input.value;

  const div = document.createElement("div");

  const button = document.createElement("button");
  button.classList.add("delete");
  button.innerText = "Delete";
  
  button.addEventListener("click", function (event) {
    event.srcElement.parentElement.remove();
  });

  div.appendChild(p);
  div.appendChild(button);

  todo.appendChild(div);
});

function runDeleteButtons() {
  const deleteBtn = document.querySelectorAll(".delete");
  for (let index = 0; index < deleteBtn.length; index++) {
    deleteBtn[index].addEventListener("click", function (event) {
      event.srcElement.parentElement.remove();
    });
  }
}

runDeleteButtons();
