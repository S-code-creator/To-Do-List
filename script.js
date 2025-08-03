function addTask(){

    let taskInput = document.querySelector("#taskInput");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    // task compleate toggle
    li.addEventListener("click", function(){
        li.classList.toggle("completed");
    });

    // delete button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    delbtn.addEventListener("click", function(e){
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delbtn);

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";



}