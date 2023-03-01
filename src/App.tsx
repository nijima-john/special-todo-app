import { Button, TextField } from '@mui/material';
import { SetStateAction, useState } from 'react';


function App() {

  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([]);
  const [completeTodos, setCompleteTodos] = useState<string[]>([]);

  const onChangeTodoText = (event: { target: { value: SetStateAction<string>; }; }) => {
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  }

  const onClickDelete = (index: number) => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index: number) => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index: number) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index,1);
    setCompleteTodos(newTodos)
  }

  return (
    <>
      <div style={{ marginTop: '5%', marginLeft: '5%' }}>
        <TextField value={todoText} onChange={onChangeTodoText} id="outlined-basic" label="todoを入力してください" variant="outlined" />
        <Button onClick={onClickAdd} variant="outlined" size="large" style={{ marginLeft: '25px', marginTop: '5px' }} >登録</Button>
        <div style={{ marginTop: '5%' }}>
          <p>未完了のtodo</p>
          <ul>
            {
              incompleteTodos.map((todo, index) => {
                return (
                  <div key={todo}>
                    <li>{todo}</li>
                    <Button onClick={() => onClickComplete(index)} variant="outlined" style={{ marginRight: '3%' }}>完了</Button>
                    <Button onClick={() => onClickDelete(index)} variant="outlined" color="error" style={{ marginRight: '3%' }}>削除</Button>
                  </div>
                )
              })
            }
          </ul>
        </div>

        <div>
          <p>完了のTODO</p>
          <ul>
            {completeTodos.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <Button onClick={() => onClickBack(index)} variant="outlined" color="error" style={{ marginRight: '3%' }}>削除</Button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
