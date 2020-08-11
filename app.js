const form = document.querySelector('#task-form');
const taskCollection = document.querySelector('.collection');
const filterTaskInput = document.querySelector('#filter');

form.addEventListener('submit', handleAddTaskSumit);
taskCollection.addEventListener('click', handleRemoveTask);

// test printing the local sotrage array
let tasks = JSON.parse(localStorage.getItem('tasks'));
if (tasks === null) {
    tasks = []
}

// Add back to UI (that webpage)
tasks.forEach(function(task){
    addToCollection(task);
});

let taskArr = [];

// Clear Task
document.addEventListener('click', function(e){
    // console.log(e.target); // <a class="clear-tasks btn black" href="#">
    if (e.target.classList.contains('clear-tasks')){

        const taskLists = document.querySelector('.collection'); // parent of li elements
        taskLists.innerHTML = ''; // delete all parent's children

        // Remove Array from local storage
        localStorage.setItem('tasks', "[]");   
    }
});

// Filter Task
filterTaskInput.addEventListener('input', handleFilterTask);

function handleAddTaskSumit(e) {
    const inputTask = e.target.children[0].children[0].value;
    e.target.children[0].children[0].value = '';

    addToCollection(inputTask);

    // save tasks to array
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(inputTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
 
    e.preventDefault();
}

function addToCollection(inputTask) {
    const li = document.createElement("li");
    li.classList.add("collection-item");
    
    
    li.innerHTML = `${inputTask}
        <a href="#" class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
         </a>
    `;
    
    taskCollection.appendChild(li);
    taskArr.push(li);
}



// Add remove functionality
function handleRemoveTask(e){
    console.log(e.target);
    if (e.target.className === 'fa fa-remove'){
        const liToDelete = e.target.parentElement.parentElement;
        liToDelete.remove();


        taskArr = taskArr.filter(function (li) {
            return li !== liToDelete;
        })
        console.log(taskArr);

        const afterDeletionArr = []

        taskArr.forEach(function (task) {
            afterDeletionArr.push(task.innerText);
        });

        localStorage.setItem('tasks', JSON.stringify(afterDeletionArr));

    }
} 




function handleFilterTask(e){

    console.log(e.target.value);

    const userInput = e.target.value;

    console.log(taskArr);

    const results = taskArr.filter(function (li) {
        return li.innerText.includes(userInput);
    })

    // console.log(results);

    // console.log(taskCollection.children);
    taskCollection.innerHTML = '';
    results.forEach(function(li){
        taskCollection.appendChild(li);
    });
    

}




