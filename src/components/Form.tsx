
import { type Todo, add, toggleHideCompleted } from '../features/todo/todoSlice';
import { v4 as uuidv4 } from 'uuid';
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { type RootState } from '../app/store';


export const Form = (): any => {

  const dispatch = useDispatch();
  const hideCompleted = useSelector((state: RootState) => state.todos.hideCompleted)
  const ID = uuidv4();
  const addTodo = (content: string): void => {
    const newTodo: Todo = {
      id: ID,
      content,
      isCompleted: false,
    }
    if (content === "") return;
    dispatch(add(newTodo))
    setContent("");
  }
  const [content, setContent] = useState("");

  const handleButton = (): void => {
    dispatch(toggleHideCompleted())
  }

  return (
    <>
      <form style={{marginBottom: "10%"}}>
        <TextField label="やりたいこと入力してね"
          value={content}
          onChange={e => { setContent(e.target.value); }} >
        </TextField>
        <br></br>
        <Button variant="contained"
          onClick={() => { addTodo(content) }} style={{ width: "50%", marginLeft: "20%", marginTop: "5%" }} >
          追加
        </Button>
      </form>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked onClick={handleButton} />} label={hideCompleted ? "元に戻す" : "完了したものを削除"}  />
      </FormGroup>
    </>
  )
}

