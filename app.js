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

form.addEventListener('submit', handleAddTaskSumit)
