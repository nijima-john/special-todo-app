
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../app/store';
import { completeTask, remove, type Todo } from "../features/todo/todoSlice"
import { Button } from '@mui/material';

export const List: React.FunctionComponent = () => {

  const dispatch = useAppDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const removeTodo = (id: string): void => {
    dispatch(remove(id))
  }
  const hideCompleted = useSelector((state: RootState) => state.todos.hideCompleted)

  return (
    <>
      <h1>Todolist</h1>
      {todos.map((todo: Todo) => {
        return (
          (!hideCompleted || todo.isCompleted) && (
            <div key={todo.id}>
              <div>
                <input type="checkbox" onClick={() => {
                  dispatch(completeTask(todo))
                }}
                  checked={todo.isCompleted} />
                  <span>内容：{todo.content}</span>
                  <Button onClick={() => {removeTodo(todo.id)}}>削除</Button>
              </div>
            </div>
          ))
      })}
    </>
  )
}