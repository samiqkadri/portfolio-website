function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // Click to mark completed
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    // Right-click to delete
    li.oncontextmenu = function (e) {
        e.preventDefault();
        li.remove();
    };

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error = document.getElementById("error");

    error.textContent = "";

    if (name === "" || email === "" || message === "") {
        error.textContent = "All fields are required!";
        return false;
    }

   error.textContent = "Please enter a valid email address!";
 {
        error.textContent = "Please enter a valid email address!";
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
