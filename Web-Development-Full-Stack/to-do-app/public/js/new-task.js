document.getElementById('task').addEventListener('keyup', function(event) {

    if(event.key === 'Enter') {

        const task = document.getElementById('task').value
        if(task) {
            addNewTask(task)
            document.getElementById('task').value = ''
        }
    }
})

function addNewTask(task) {

    let tasks

    if(localStorage.hasOwnProperty('to_do_tasks')) {

        tasks = JSON.parse(localStorage.getItem('to_do_tasks')) // get tasks
        tasks.push({name: task, status: 'to do'}) // push a new task to the list
        
    } else {

        tasks = [
            {
                name: task,
                status: 'to do'
            }
        ] //create a new array with new task object
      
    }

    localStorage.setItem('to_do_tasks', JSON.stringify(tasks)) //save it to the local storage. JSON zmienia tablice z danymi na string żeby mógł zostać wyświetony

    const tasks_list = document.getElementById("tasks-list")
        const newTask = document.createElement("li")
        newTask.innerText = task

        const buttons = document.createElement("div")
        buttons.classList.add("buttons")

        const remove = document.createElement("button")
        remove.classList.add("remove")

        const complete = document.createElement("button")
        complete.classList.add("complete")

        buttons.appendChild(remove) // dodanie dziecka o klasie "remove" do rodzica "buttons"
        buttons.appendChild(complete) // dodaje po kolei w odróżnieniu do "prepend"
        newTask.appendChild(buttons)
        tasks_list.prepend(newTask) // prepend dodaje dziecko zawsze na początku rodzica
 
}