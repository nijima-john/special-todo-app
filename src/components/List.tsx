import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { type Todo } from "../features/todo/todoSlice"

interface Props {
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
  onClickBack: (index: number) => void;
  incompleteTodos: string[];
  completeTodos: string[];
}

export const List: React.FunctionComponent<Props> = () => {

  const todos = useSelector((state: RootState) => state.todos.todos)

  return (
    <>
      <h1>Todolist</h1>
      {todos.map((todo: Todo) => {
        return (
          <div key={todo.id}>
            <h3>{todo.isCompleted ? "完了" : "未完了"}</h3>
            <div>内容: {todo.content}</div>
            <div>{todo.isCompleted}</div>

          </div>
        )
      })}
    </>
  )
}
