const form = document.querySelector('#task-form');
const taskCollection = document.querySelector('.collection');

const handleAddTaskSumit = function (e) {
    const inputTask = e.target.children[0].children[0].value

    addToCollection(inputTask);
    e.preventDefault();
}

function addToCollection(inputTask) {
    const li = document.createElement("li");
    li.classList.add("collection-item")
    
    li.innerHTML = `${inputTask}
        <a href="#" class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
         </a>`
    
    taskCollection.appendChild(li);

    console.log(li)
}

// Add delete functionality
function handleRemoveTask(e){
    console.log(e.target);
    if (e.target.className === 'fa fa-remove'){
        const liToDelete = e.target.parentElement.parentElement;
        liToDelete.remove();
    }
}

// Clear Task
const clearTasks = document.addEventListener('click', function(e){
    console.log(e.target); // <a class="clear-tasks btn black" href="#">
    const deleteAll = e.target;
    // console.log(deleteAll.classList);
    if (deleteAll.classList.contains('clear-tasks')){
        // console.log('worked');
        const wholeList = document.querySelectorAll('.collection-item');
        wholeList.remove();
    }
})
  
form.addEventListener('submit', handleAddTaskSumit)
taskCollection.addEventListener('click', handleRemoveTask);
