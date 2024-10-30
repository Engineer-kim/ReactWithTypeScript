import React, { useContext } from "react"
import { useRef } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context"

const NewTodo: React.FC = () => {
    const todosCtx = useContext(TodosContext)

    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
        //! ==> 널이 아닌것을 확신 할때, ? ==> 널이 들어올수도 잇을때
        const enteredText = todoTextInputRef.current!.value 

        if(enteredText.trim().length === 0){
            return;
        }

        // props.onAddTodo(enteredText)
        todosCtx.addTodo(enteredText)

    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label  htmlFor="text">Todo Text</label>
            <input type="text" id="text" ref={todoTextInputRef}/>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo