const textarea = document.getElementById("text");
const submitButton = document.querySelector('form button[type="submit"]');
const chosenStatus = document.getElementById("status");

const isEmpty = value => {
    return !value;
};

const sendTodo = value => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
        }
    };
    xhttp.open("POST", "/api", true);
    xhttp.send(JSON.stringify(value));
};

submitButton.addEventListener("click", e => {
    e.preventDefault();
    const todo = {
        text: textarea.value,
        status: chosenStatus.value
    };
    if (!isEmpty(todo.text)) {
        sendTodo(todo);
        console.log(todo);
    } else {
        console.error("Empty task!");
    }
});

// textarea.addEventListener("keypress", e => {
//     if (e.key === "Enter") {
//         console.log(textarea.value);
//     }
// });
