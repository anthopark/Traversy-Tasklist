const form = document.querySelector('#task-form');
const taskCollection = document.querySelector('.collection');
const filterTaskInput = document.querySelector('#filter');
// const test = document.querySelector('#task');

let taskArr = [];




const handleAddTaskSumit = function (e) {
    const inputTask = e.target.children[0].children[0].value;
    e.target.children[0].children[0].value = '';

    addToCollection(inputTask);
    e.preventDefault();



}

function addToCollection(inputTask) {
    const li = document.createElement("li");
    li.classList.add("collection-item");

    // test.remove();
    
    
    li.innerHTML = `${inputTask}
        <a href="#" class="delete-item secondary-content">
            <i class="fa fa-remove"></i>
         </a>`
    
    taskCollection.appendChild(li);
    taskArr.push(li);
}

// Add delete functionality
function handleRemoveTask(e){
    console.log(e.target);
    if (e.target.className === 'fa fa-remove'){
        const liToDelete = e.target.parentElement.parentElement;
        liToDelete.remove();
        taskArr = taskArr.filter(function (li) {
            return li !== liToDelete;
        })
    }
}

// Clear Task
document.addEventListener('click', function(e){
    // console.log(e.target); // <a class="clear-tasks btn black" href="#">
    if (e.target.classList.contains('clear-tasks')){

        const taskLists = document.querySelector('.collection'); // parent of li elements
        taskLists.innerHTML = ''; // delete all parent's children
        
    }
});

// Filter Task
filterTaskInput.addEventListener('input', handleFilterTask);


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

form.addEventListener('submit', handleAddTaskSumit);


taskCollection.addEventListener('click', handleRemoveTask);



console.log(document.querySelector('.collection'));


