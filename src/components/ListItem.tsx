import { Button } from '@mui/material';
import React from 'react'
import { type Todo, completeTask } from '../features/todo/todoSlice';
import { useAppDispatch } from '../app/store';

interface Props {
    todo: Todo
    listKey: string
    isCompleted: boolean
    content: string
    removeTodo: (id: string) => void
    handleEditButtonPushed: (id: string, content: string) => void
}



export const ListItem: React.FunctionComponent<Props> = (props) => {
    const dispatch = useAppDispatch();
    const { todo, listKey, isCompleted, content, removeTodo, handleEditButtonPushed } = props;
    return (
        <div key={listKey}>
            <h3>{isCompleted ? "完了" : "未完了"}</h3>
            <div>
                <input
                    type="checkbox"
                    onClick={() => {
                        dispatch(completeTask(todo));
                    }}
                    defaultChecked={isCompleted} />
            </div>
            <div>内容: {content}</div>
            <Button variant="contained" style={{ marginTop: "10px", marginRight: "10px" }} onClick={() => { removeTodo(listKey); }}>削除</Button>
            <Button variant="contained" style={{ marginTop: "10px" }} onClick={() => { handleEditButtonPushed(listKey, content); }}>編集</Button>
        </div>
    )
}
