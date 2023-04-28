import { Button } from '@mui/material';
import React from 'react'
import { type Todo, remove, toggleCompleteTask } from '../features/todo/todoSlice';
import { useAppDispatch } from '../app/store';

interface Props {
    todo: Todo
    handleEditButtonPushed: (id: string, content: string) => void
}

export const ListItem: React.FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch();
    const removeTodo = (id: string): void => {
        dispatch(remove(id))
    }
    const { todo, handleEditButtonPushed } = props;
    const { id, isCompleted, content } = todo;

    return (
        <div key={id} style={{ marginBottom: "10%", backgroundColor: "#CCFFCC", borderRadius:"15px",padding: "15px" }}>
            <input
                type="checkbox"
                onClick={() => {
                    dispatch(toggleCompleteTask(todo));
                }}
                defaultChecked={isCompleted} />
            <span style={{ marginLeft: "2%" }}>{todo.isCompleted ? "完了" : "未完了"}</span>
            <div>内容: {content}</div>
            <Button variant="outlined" color="error"
                style={{ marginTop: "10px", marginRight: "10px" }}
                onClick={() => { removeTodo(id); }}>削除</Button>
            <Button variant="outlined" style={{ marginTop: "10px" }}
                onClick={() => { handleEditButtonPushed(id, content); }}>編集</Button>
        </div>
    )
}
