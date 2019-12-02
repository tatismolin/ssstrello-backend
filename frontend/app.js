const planDiv = document.querySelector(".planDiv")
const listDiv = document.querySelector(".listDiv")

listDiv.addEventListener("ondragover", allowDrop)
listDiv.addEventListener("ondrop", dropIt)

function allowDrop(event){
    event.preventDefault()
}

function dropIt(event) {
    let id = event.dataTranser.getData("text")
    let draggableElement = document.getElementById(id)
    let dropzone = event.target  
    dropzone.appendChild(draggableElement)
    event.dataTransfer.clearData()
}

fetch("http://[::1]:3000/plans")
    .then(response => response.json())
    .then(plans => plans.map(plan => {
        let h1 = document.createElement("h1")
        h1.innerText = plan.name
        planDiv.appendChild(h1)
        
        addLists(plan)
    }))
    
    
    function addLists(plan){
        plan.lists.forEach(list => {
            let listCard = document.createElement("div")
            let h2 = document.createElement("h2")
            let addButton = document.createElement("button")
            
            listCard.classList.add("list")
            h2.innerText = list.name
            addButton.classList.add("add")
            addButton.innerText = "➕ Add a new task"

            addButton.addEventListener("click", addTask) 

            function addTask(event){
                event.preventDefault()
                window.location.href = "addTask.html"
            }

            listCard.append(h2)
            listDiv.appendChild(listCard) 
            
            list.tasks.map(task => {
                let taskLi = document.createElement("li")
                let h3 = document.createElement("h3")
                let deleteButton = document.createElement("button")
                let editButton = document.createElement("button")
                
                
                taskLi.setAttribute("draggable", "true")
                h3.innerText = task.name
                deleteButton.classList.add("delete")
                deleteButton.innerText = "❌"
                editButton.classList.add("edit")
                editButton.innerText = "✏️"
                
                taskLi.addEventListener("ondragstart", dragTask)
                deleteButton.addEventListener("click", deleteTask)
                editButton.addEventListener("click", editTask)
                
                taskLi.append(h3, deleteButton, editButton)
                listCard.append(taskLi)
                
                function dragTask(event){
                    event.dataTranser.setData("text", event.target.id)
                }

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






