import React, { useState } from 'react'
import { Todo } from '../common/todo.type'
import { TodoContainer } from "./TodoContainer";
import { add } from "../features/todoSlice"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../common/rootState.type';

interface TodoPresenterProps {
    todos: Todo[]
}

export const TodoPresenter: React.FC<TodoPresenterProps> = ({

}) => {

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

    const sendTodo = () => {
        addTodo(title, content);
        setTitle("");
        setContent("");
    }



    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    return (
        <>
            <form>
                <label>
                    タイトル：
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </label>
                <label>
                    内容：
                    <input type="text" value={content} onChange={e => setContent(e.target.value)} />
                </label>
                <button type="button" onClick={() => addTodo(title, content)}>送信</button>
            </form>
            <div>-------------------------</div>
            <h1>Todoリスト</h1>
            {todos.map((todo: Todo) => {
                return (
                    <React.Fragment key={todo.id}>
                        <div>{todo.title} : {todo.isCompleted ? "完了" : "未完了"}</div>
                        <div>内容：{todo.content}</div>
                        <button type='button'>{todo.isCompleted ? "戻す" : "完了"}</button>
                    </React.Fragment>
                )
            })}
        </>
    )
}
