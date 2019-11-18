const planDiv = document.querySelector(".planDiv")
const listsDiv = document.querySelector(".listsDiv")


fetch("http://localhost:3000/plans")
    .then(response => response.json())
    .then(plans => plans.map(plan => {
        let h1 = document.createElement("h1")
        h1.innerText = plan.name
        planDiv.appendChild(h1)

        getListsForPlan(plan)

    }))

function getListsForPlan(plan){
    fetch("http://localhost:3000/plan_lists")
        .then(response => response.json())
        .then(plan_lists => plan_lists.map(plan_list => {
            const listDiv = document.createElement("div")
            const listName = document.createElement("h3")
            const buttonDiv = document.createElement("div")
            const addButton = document.createElement("button")
            const editButton = document.createElement("button")
            const deleteButton = document.createElement("button")

            listDiv.setAttribute("class", "listDiv")
            buttonDiv.setAttribute("class", "buttonDiv")

            listName.innerText = plan_list.list.name
            addButton.innerText = "➕"
            addButton.addEventListener("click", function(event){
                fetch("http://localhost:3000/plan_lists", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"   
                    },
                    body: JSON.stringify({
                        list_id: list.id
                    })
                })
                .then(response => window.location = "http://localhost:3001/")
            })
            editButton.innerText = "✏️"
                editButton.addEventListener("click", function(event){
                window.location = "www.google.com"
            })
            deleteButton.innerText = "❌"
            deleteButton.addEventListener("click", function(event){
                event.target.parentNode.remove()
                fetch(`http://localhost:3000/plan_lists/${plan_list.id}`, {
                    method: "DELETE"
                })
            })

            buttonDiv.append(addButton, editButton, deleteButton)
            listDiv.append(listName, buttonDiv)
            listsDiv.append(listDiv)
        }))
}

function switchMenu(x) {
    x.classList.toggle("change");
  }



    




    
