let itemContainer = document.querySelector(".itemContainer");
let inputTask = document.querySelector("#inputTask");
let btn = document.querySelector("#btn");

let list = [];

const handleAdd = () => {
  let obj = {
    id: Date.now(),
    text: inputTask.value,
  };
  list.unshift(obj);
  render(list);
  inputTask.value = "";
};
btn.addEventListener("click", handleAdd);

function render(arr) {
  itemContainer.innerHTML = "";
  arr.map((obj) => {
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
    <p class="post">${obj.text}</p>`;
    let btnDelete = document.createElement("button");
    btnDelete.classList.add("deleteBtn");
    btnDelete.innerText = "❌";
    div.append(btnDelete);
    btnDelete.onclick = () => {
      handleDelete(obj.id);
    };
    itemContainer.append(div);
  });
}
render(list);

const handleDelete = (id) => {
  let a = list.filter((obj) => {
    return obj.id !== id;
  });
  list = a;
  render(list);
};

itemContainer.addEventListener("click", (e) => {
  if (e.target.className === "post") {
    e.target.style.textDecoration = "line-through";
  }
});
