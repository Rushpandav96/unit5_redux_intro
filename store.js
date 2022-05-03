import { legacy_createStore as createStore } from "redux";

const reducer = (store,action)=>{
    // console.log(action)

    if(action.type === "Add_count")
    {
        return {...store, counter:store.counter+action.payload}
    }
    return store;
}

const init = {
    counter : 0,
    todo : []
}

const store = createStore(reducer,init)

console.log("Before",store.getState())

store.dispatch({type:"Add_count", payload:1})

console.log("After",store.getState())

