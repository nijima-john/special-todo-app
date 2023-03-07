import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../common/rootState.type'
import { Todo } from '../common/todo.type'
import { add } from '../features/todoSlice'
import { TodoPresenter } from './TodoPresenter'

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state.todos)

  const maxID = todos.length ? todos.slice(-1)[0].id : 0;
  const dispatch = useDispatch();

  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxID + 1,
      title: title,
      content: content,
      isCompleted: false,
    }
    dispatch(add(newTodo))
  }


  const args = {
    todos,
    addTodo,
  }

  return (
    <TodoPresenter {...args}  />
  )
}
