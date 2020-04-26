const addButton = document.getElementById("add_button")
const input = document.getElementById("user_input")
const ul = document.querySelector("ul")
const item = document.getElementsByTagName("li")

function inputLength() {
    return input.value.length
}
function listItem() {
    return item.length
}

function createListItems() {
    var li = document.createElement("li") // create li
    var a = document.createElement("a") // create a (link)
    li.appendChild(a); // append a into li
    a.appendChild(document.createTextNode(input.value)) // give a text recieved from user input
    ul.appendChild(li) // append li in ul
    input.value = "";
    // on clicking li , li will be coloured

    // li.classList.add("listItems")

    function done() {
        li.classList.add("done")
    }

    li.addEventListener("click", done())

    var dltBtn = document.createElement("button")
    dltBtn.appendChild(document.createTextNode("X"))
    li.appendChild(dltBtn)
    dltBtn.addEventListener("click", delListItem)

    function delListItem() {
        li.classList.add("delete")
    }


}

function addListOnClick() {
    if (inputLength() > 0) {
        createListItems()
    }
}

function addListOnEnter(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListItems()
    }
}

addButton.addEventListener("click", addListOnClick)
input.addEventListener("keypress", addListOnEnter)

// Search bar 

function searchFunc() {
    var input = document.getElementById("search");
    var input_value = input.value.toUpperCase();
    var ul = document.getElementById("ul_list")
    var li = ul.getElementsByTagName("li")

    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0];
        var textValue = a.innerText || a.textContent
        if (textValue.toUpperCase().indexOf > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }
}
