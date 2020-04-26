const addButton = document.getElementById("add_button");
const input = document.getElementById("user_input");
const ul = document.querySelector("ul")

function inputLength() {
    return input.value.length
}

function createList() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input = "";

    var dltButton = document.createElement("button");
    dltButton.appendChild(document.createTextNode("X"))
    li.appendChild(dltButton)
    dltButton.addEventListener("click", deleteItem)

    function deleteItem() {
        li.classList.add("delete")
    }
}

function addListOnClick() {
    if (inputLength() > 0) {
        createList()
    }
}

function addListOnEnter(event) {
    if (inputLength() > 0 && event.which === 13) {
        createList()
    }
}

addButton.addEventListener("click", addListOnClick)
input.addEventListener("keypress", addListOnEnter)
