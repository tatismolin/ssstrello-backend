const planDiv = document.querySelector(".planDiv")
const listDiv = document.querySelector(".listDiv")

fetch("http://[::1]:3000/plans")
.then(response => response.json())
.then(plans => {plans.map(plan => {
    let h1 = document.createElement("h1")
    h1.innerText = plan.name
    planDiv.appendChild(h1)
    
    addLists(plan)
})})

let draggedItem = null;
function addLists(plan){
    plan.lists.forEach(list => {
        let listCard = document.createElement("div")
        let h2 = document.createElement("h2")
        let addButton = document.createElement("button")
        let taskDiv = document.createElement("div")
        
        // listCard.setAttribute("id", Math.random().toString(36))
        
        listCard.classList.add("list")
        h2.innerText = list.name
        addButton.classList.add("add")
        taskDiv.classList.add("taskCard")
        addButton.innerText = "➕ Add a new task"
        
        addButton.addEventListener("click", addTask) 
        
        function addTask(event){
            event.preventDefault()
            window.location.href = "addTask.html"
        }
        
        //dragging functionality on listCard
        taskDiv.addEventListener("dragover", (event) => {
            event.preventDefault()
        })
        
        taskDiv.addEventListener("dragenter", (event) => {
            event.preventDefault()
        })
        
        taskDiv.addEventListener("drop", (event) => {
            taskDiv.append(draggedItem)
        })
        
        listCard.prepend(h2)
        listDiv.appendChild(listCard) 
        
        list.tasks.forEach(task => {
            let taskLi = document.createElement("li")
            let h3 = document.createElement("h3")
            let deleteButton = document.createElement("button")
            let editButton = document.createElement("button")
            
            taskLi.classList.add("task")
            taskLi.setAttribute("draggable", "true")
            h3.innerText = task.name
            deleteButton.classList.add("delete")
            deleteButton.innerText = "✖️"
            editButton.classList.add("edit")
            editButton.innerText = "🖋"
            
            deleteButton.addEventListener("click", deleteTask)
            editButton.addEventListener("click", editTask)
            
            //dragging functionality on taskList
            taskLi.addEventListener("dragstart", () => {
                draggedItem = taskLi
                setTimeout(() => {
                    taskLi.style.display = "none"
                }, 0)
            });
            
            taskLi.addEventListener("dragend", () => {
                draggedItem.style.display = "block"
                draggedItem = null
            }, 0)
            
            taskLi.append(h3, editButton, deleteButton)
            taskDiv.appendChild(taskLi)
            
            function deleteTask(event){
                event.target.parentNode.remove()       
                fetch(`http://localhost:3000/tasks/${task.id}`, {
                    method: "DELETE"
                })
            }   
            
            function editTask(event){
                event.preventDefault()
                window.location.href = `task.html?id=${task.id}`
            }
        })
        listCard.appendChild(taskDiv)
        listCard.appendChild(addButton)
    })
}


