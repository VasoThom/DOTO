let input = document.querySelector("#todo");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");

function addItem(txt) {
  let li = document.createElement("li");
  li.innerHTML = txt;
  list.append(li);
  const delBtn = document.createElement("button");
  delBtn.classList.add("btnX");
  delBtn.innerHTML = "x";
  li.append(delBtn);
  delBtn.addEventListener("click", () => {
    li.remove(li);
    // xrisimopoiw filter na gia na min ksanado autes tis ergasies pouu ekana kai esvisa
    savedTasks = savedTasks.filter((e) => e !== txt);

    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  });
}

let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
savedTasks.forEach(addItem);

btn.addEventListener("click", () => {
  let txt = input.value;
  if (txt === "") {
    alert("Please write something to do!");
  } else {
    savedTasks.push(txt);
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    // svinei apo input oti aufgabe eixa pros8esei
    input.value = "";
    addItem(txt);
  }
});

list.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});

const remTasks = document.querySelector(".removeTasks");
remTasks.addEventListener("click", () => {
  list.remove(list);
  localStorage.clear();
});
