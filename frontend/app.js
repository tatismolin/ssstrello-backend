const planDiv = document.querySelector(".planDiv")
const listDiv = document.querySelector(".listDiv")

fetch("http://[::1]:3000/plans")
    .then(response => response.json())
    .then(plans => plans.map(plan => {
        let h1 = document.createElement("h1")
        h1.innerText = plan.name
        planDiv.appendChild(h1)
        
        addLists(plan)
    }))
    let draggedItem = null;
    
    function addLists(plan){
        plan.lists.forEach(list => {
            let listCard = document.createElement("div")
            let h2 = document.createElement("h2")
            let addButton = document.createElement("button")

            listCard.classList.add("list")
            // listCard.setAttribute("id", Math.random().toString(36))
            
            h2.innerText = list.name
            addButton.classList.add("add")
            addButton.innerText = "➕ Add a new task"

            addButton.addEventListener("click", addTask) 

            function addTask(event){
                event.preventDefault()
                window.location.href = "addTask.html"
            }

            //listCard.classList.add("list")
            listCard.addEventListener("dragover", (event) => {
                event.preventDefault()
            })
    
            listCard.addEventListener("dragenter", (event) => {
                event.preventDefault()
            })
    
            listCard.addEventListener("drop", (event) => {
                console.log("drop")
                listCard.append(draggedItem)
            })

            listCard.append(h2)
            listDiv.appendChild(listCard) 
            
            list.tasks.map(task => {
                let taskLi = document.createElement("li")
                let h3 = document.createElement("h3")
                let deleteButton = document.createElement("button")
                let editButton = document.createElement("button")
                
                h3.innerText = task.name
                deleteButton.classList.add("delete")
                deleteButton.innerText = "❌"
                editButton.classList.add("edit")
                editButton.innerText = "✏️"
                
                deleteButton.addEventListener("click", deleteTask)
                editButton.addEventListener("click", editTask)
                
                taskLi.classList.add("task")
                taskLi.setAttribute("draggable", "true")
        
                taskLi.addEventListener("dragstart", () => {
                    console.log("dragstart")
                    draggedItem = taskLi
                    setTimeout(() => {
                        taskLi.style.display = "none"
                    }, 0)
                });
        
                taskLi.addEventListener("dragend", () => {
                    console.log("dragend")
                    draggedItem.style.display = "block"
                    draggedItem = null
                }, 0)
                
                taskLi.append(h3, deleteButton, editButton)
                listCard.append(taskLi)
                
                function deleteTask(event){
                    event.preventDefault()     
                    event.target.parentNode.remove()       
                    fetch(`http://[::1]:3000/tasks/${task.id}`), {
                        method: "DELETE"
                    }
                }   

                function editTask(event){
                    event.preventDefault()
                    window.location.href = `task.html?id=${task.id}`
                }
            })

            listCard.appendChild(addButton)
        })

       
    }
    

       