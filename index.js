// import { legacy_createStore as createStore } from "redux";

const Add_Todos = "todo"

const addToDo = (title)=>{
    return {
        type : Add_Todos,
        payload : {
            title:title,
            status : false
        }
    }
}

const reducer = (store,action)=>{
    if(action.type === Add_Todos)
    {
        return {...store, task:[...store.task, action.payload]}
    }

    return store
}

document.getElementById("addTask").addEventListener("click",todo)
function todo(){
    document.getElementById("todos").innerHTML = "";
    const val = document.getElementById("task").value;

    console.log(val);

    store.dispatch(addToDo(val))
    // console.log(store.getState());
    let TodoList = store.getState();
    console.log(TodoList)

    displayData(TodoList)
}


const init = {
    task : []
}
const store = Redux.createStore(reducer,init);




function displayData(TodoList)
{
    TodoList.task.map((e)=>{
        let div = document.createElement("div")
        let todoTitle = document.createElement("h4");
        todoTitle.textContent = `Title: ${e.title}`;
        todoTitle.style.marginRight = "10px";
    
        let todoStatus = document.createElement("h4");
        todoStatus.textContent = `Status: ${e.status}`;

        div.style.display = "flex";

        div.append(todoTitle,todoStatus)
    
        document.getElementById("todos").append(div)
    })
}


console.log(store.getState());