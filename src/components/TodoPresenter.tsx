import React, { useState } from 'react'
import { Todo } from '../common/todo.type'
import { TodoContainer } from "./TodoContainer";

interface TodoPresenterProps {
    todos: Todo[]
}

export const TodoPresenter: React.FC<TodoPresenterProps> = ({
    todos,
}) => {

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
                        {/* <button type='button' onClick={() => removeTodo(todo.id)}>削除</button> */}
                    </React.Fragment>
                )
            })}
        </>
    )
}
