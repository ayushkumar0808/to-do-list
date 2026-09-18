let itemContainer = document.querySelector(".itemContainer");
let inputTask = document.querySelector("#inputTask");
let btn = document.querySelector("#btn");
// let deleteBtn = document.querySelector(".deleteBtn");
let list = [
  {
    id: 123,
    text: "hello",
  },
  {
    id: 12356,
    text: "what",
  },
];

const handleAdd = () => {
  let obj = {
    id: Date.now(),
    text: inputTask.value,
  };
  list.unshift(obj);
  render(list);
};
btn.addEventListener("click", handleAdd);

function render(arr) {
  itemContainer.innerHTML = "";
  arr.map((obj) => {
    console.log(obj.text);
    let div = document.createElement("div");
    div.className = "item";
    div.innerHTML = `
    <p>${obj.text}</p>
      <button class="deleteBtn">❌</button>`;
    itemContainer.append(div);
  });
}
render(list);
