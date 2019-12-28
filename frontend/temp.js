// const classes = {
//     "taskDeleteButton": (event) => { deleteTask(event.target.parentNode.parentNode) }
// }

listDiv.addEventListener("click", handleClick);

//events delegation.
function handleClick(event){
    event.preventDefault();

    const randomQuote = document.querySelector(".randomQuote");
    const {classList, parentNode, className} = event.target;

    footDiv.classList.remove("dimmer");
    if (randomQuote){
        randomQuote.remove();
    };

    // classes[className](event)

    if (classList.contains("taskDeleteButton")){
        deleteTask(parentNode.parentNode);
    }
};

function deleteTask(taskCard){
    fetch(`http://[::1]:3000/tasks/${taskCard.dataset.taskId}`, {
        method: "DELETE"
    });
    taskCard.remove();
};