let itemContainer = document.querySelector(".itemContainer");
let inputTask = document.querySelector("#inputTask");
let btn = document.querySelector("#btn");

const handleClick = () => {
  let div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <p>${inputTask.value}</p>
      <button class="deleteBtn">❌</button>`;
  itemContainer.append(div);
};

btn.addEventListener("click", handleClick);

inputTask.addEventListener("change", () => {});
