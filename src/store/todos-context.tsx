import React from "react"
import Todo from '../models/todo'
import { useState } from "react"

type TodosContextObj = {  //데이터 구조
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void,
}

export const TodosContext = React.createContext<TodosContextObj>({  //컨텍스트 객체를 생성하는 함수
    items: [],
    addTodo: () => {},
    removeTodo: (id: string) => {},
})


const TodosContextProvider: React.FC = (props) => {
    const [todos , setTodos] = useState< Todo[] >([]);

    const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText)
      
      setTodos((prevTodos) =>{
        return prevTodos.concat(newTodo)
      })
    }
    const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodos) =>{
        return prevTodos.filter(todo => todo.id !== todoId)
      })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return <TodosContext.Provider value={contextValue}>
        {props.children}
    </TodosContext.Provider>
}

export default TodosContextProvider