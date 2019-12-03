const planDiv = document.querySelector(".planDiv");
const listDiv = document.querySelector(".listDiv");
const navBar = document.querySelector("nav");
let draggedItem = null; //variable for drag-and-drop functionality

fetch("http://[::1]:3000/plans")
    .then(response => response.json())
    .then(plans => plans.map(plan => {
        let h1 = document.createElement("h1");
        let p = document.createElement("p");

        h1.innerText = plan.name;
        p.innerText = "Ssstrello";

        planDiv.appendChild(h1);
        navBar.appendChild(p);

        addLists(plan);
}));

function addLists(plan){
    plan.lists.forEach(list => {
        let listCard = document.createElement("div");
        let taskDiv = document.createElement("div");
        let h2 = document.createElement("h2");
        let addButton = document.createElement("button");
        let addForm = document.querySelector(".addForm");
        let closeButton = document.querySelector(".closeButton");
        let formAddButton = document.querySelector(".addButton");
        
        listCard.classList.add("list");
        taskDiv.classList.add("taskCard");
        taskDiv.dataset.listId = list.id; //matches FE with BE
        h2.innerText = list.name;
        addButton.classList.add("add");
        addButton.innerText = "➕ Add a new task";
        
        addButton.addEventListener("click", openForm);
        closeButton.addEventListener("click", closeForm);
        
        //dragging functionality on listCard
        taskDiv.addEventListener("dragover", (event) => {
            event.preventDefault();
        });
        
        taskDiv.addEventListener("dragenter", (event) => {
            event.preventDefault();
        });
        
        taskDiv.addEventListener("drop", (event) => {
            event.preventDefault();
            taskDiv.prepend(draggedItem);
        });
        
        listCard.prepend(h2);
        listDiv.appendChild(listCard);

        function openForm(event) {
            event.preventDefault();
            addForm.style.display = "block";
        };
          
        function closeForm(event) {
            event.preventDefault();
            addForm.style.display = "none";
        };
    
        list.tasks.forEach(task => {
            let taskLi = document.createElement("li");
            let h3 = document.createElement("h3");
            let tp = document.createElement("div");
            let toolTip = document.createElement("div");
            let buttonDiv = document.createElement("div");
            let deleteButton = document.createElement("button");
            
            taskLi.classList.add("task");
            taskLi.setAttribute("draggable", "true");
            h3.setAttribute("contenteditable", "true");
            h3.innerText = task.name;
            tp.classList.add("tooltip");
            toolTip.classList.add("tooltiptext");
            toolTip.innerText = `${task.priority} Priority`;
            buttonDiv.classList.add("buttons");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "✖️";
            
            deleteButton.addEventListener("click", deleteTask);

            h3.addEventListener("input", (event) => {
                event.preventDefault();
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: event.target.innerText
                    })
                });
            });
            listCard.appendChild(taskDiv);

            //dragging functionality on taskList
            taskLi.addEventListener("dragstart", () => {
                draggedItem = taskLi;
                setTimeout(() => {
                    taskLi.style.display = "none";
                }, 0);
            });
            
            taskLi.addEventListener("dragend", (event) => {
                draggedItem.style.display = "block";
                draggedItem = null;
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        list_id: event.target.parentNode.dataset.listId
                    })
                });
            }, 0);
            
            tp.appendChild(toolTip);
            buttonDiv.appendChild(deleteButton);
            taskLi.append(h3, tp, buttonDiv);
            taskDiv.appendChild(taskLi);
            
            function deleteTask(event){
                event.target.parentNode.parentNode.remove();
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "DELETE"
                });
            };

        });
        listCard.appendChild(taskDiv);
        listCard.appendChild(addButton);
        
        console.log(formAddButton)
        formAddButton.addEventListener("click", (event) => {
            let taskLi = document.createElement("li");
            let h3 = document.createElement("h3");
            let tp = document.createElement("div");
            let toolTip = document.createElement("div");
            let buttonDiv = document.createElement("div");
            let deleteButton = document.createElement("button");
            let inputName = document.querySelector(".inputName");
            let inputPriority = document.querySelector(".inputPriority");
                
            taskLi.classList.add("task");
            taskLi.setAttribute("draggable", "true");
            h3.setAttribute("contenteditable", "true");
            h3.innerText = inputName.value;
            tp.classList.add("tooltip");
            toolTip.classList.add("tooltiptext");
            toolTip.innerText = `${inputPriority.value} Priority`;
            buttonDiv.classList.add("buttons");
            deleteButton.classList.add("delete");
            deleteButton.innerText = "✖️";
            
            deleteButton.addEventListener("click", deleteTask);
            
            h3.addEventListener("input", (event) => {
                event.preventDefault();
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        name: event.target.innerText
                    })
                });
            });
    
            //dragging functionality on taskList
            taskLi.addEventListener("dragstart", () => {
                draggedItem = taskLi;
                setTimeout(() => {
                    taskLi.style.display = "none";
                }, 0);
            });
            
            taskLi.addEventListener("dragend", (event) => {
                draggedItem.style.display = "block";
                draggedItem = null;
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        list_id: event.target.parentNode.dataset.listId
                    })
                });
            }, 0);
            
            function deleteTask(event){
                event.target.parentNode.parentNode.remove();
                fetch(`http://[::1]:3000/tasks/${task.id}`, {
                    method: "DELETE"
                });
            };
            
            tp.appendChild(toolTip);
            buttonDiv.appendChild(deleteButton);
            taskLi.append(h3, tp, buttonDiv);
            
            fetch("http://localhost:3000/tasks/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: inputName.value,
                    priority: inputPriority.value,
                    list_id: 1
                })
            });
        });
    });
}