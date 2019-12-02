const planDiv = document.querySelector(".planDiv")
const listDiv = document.querySelector(".listDiv")

listDiv.setAttribute("ondrop", "dropIt(event")
listDiv.setAttribute("ondragover", "allowDrop(event")

fetch("http://[::1]:3000/plans")
    .then(response => response.json())
    .then(plans => plans.map(plan => {
        const h1 = document.createElement("h1")
        h1.innerText = plan.name
        planDiv.appendChild(h1)
        
        addLists(plan)
    }))
    
    
    function addLists(plan){
        plan.lists.forEach(list => {
            let listCard = document.createElement("div")
            let h2 = document.createElement("h2")
            let addButton = document.createElement("button")
            
            h2.innerText = list.name
            listCard.classList.add("list")
            addButton.classList.add("add")
            addButton.innerText = "➕ Add a new task"
            
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
                editButton.classList.add("edit")
                deleteButton.innerText = "❌"
                editButton.innerText = "✏️"

                editButton.addEventListener("click", (event) => {
                    event.preventDefault()
                    window.location.href = `task.html?id=${task.id}`
                })
                
                deleteButton.addEventListener("click", (event) => { 
                    event.preventDefault()     
                    event.target.parentNode.remove()       
                    fetch(`http://[::1]:3000/tasks/${task.id}`), {
                        method: "DELETE"
                    }
                })
                
                
                taskLi.append(h3, deleteButton, editButton)
                listCard.append(taskLi)
            })

            listCard.append(addButton)
        })
    }


    function dragEvent(event){
        event.dataTranser.setData("text", event.target.id)
    }



