const inputBox = document.getElementById("input-box");
const listoftasks = document.getElementById("listoftasks");

function addTask() {
    if (inputBox.value === '') {
        alert("Oops! please write something");
    } else {
        let listItem = document.createElement("li"); // Use "li" for list items, not "list"
        listItem.innerHTML = inputBox.value;
        listoftasks.appendChild(listItem);

        let span = document.createElement("span"); // Create an image element
        span.innerHTML = "\u00d7"; // Set the source attribute of the image
        
        listItem.appendChild(span); // Append the image to the list item
    }

    inputBox.value = "";
    saveinBrowser();
}
listoftasks.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check"); // Use "classList" instead of "classlist"
        saveinBrowser();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveinBrowser()
    }
}, false);
function saveinBrowser(){
    localStorage.setItem("data",listoftasks.innerHTML)
}
function savedata(){
    listoftasks.innerHTML = localStorage.getItem("data");
}
savedata();