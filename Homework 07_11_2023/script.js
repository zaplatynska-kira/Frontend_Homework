
const time= document.getElementById('time');
function printTime() {
    const date = new Date();
    const h = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
    const m = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
    const s = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
    const t = `${h} : ${m} : ${s}`;
    const myButton = document.getElementById('myButton');
    time.textContent = t;

    time.style.margin = '10px auto 0';
    time.style.width = 'fit-content';
}
setInterval(printTime,1000);

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = taskText;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}
function handleButtonClick() {
    
    console.log('Task ended'); 
    
}
const myButton = document.getElementById('addTask');
myButton.addEventListener('click', handleButtonClick);

function handleButtonClick() {
    console.log('Task completed');
}



