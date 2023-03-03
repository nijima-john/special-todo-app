import { Button, TextField } from '@mui/material';


type Props = {
  onClickAdd: any,
  onChange: any,
  todoText: string,
}

export const Form = (props: Props) => {
  const { onClickAdd, onChange, todoText } = props;

  return (
    <>
      <div>
        <TextField value={todoText} onChange={onChange} id="outlined-basic" label="todoを入力してください" variant="outlined" />
        <Button onClick={onClickAdd} style={{ marginLeft: '25px', marginTop: '5px' }} >登録</Button>
      </div>
    </>
  )
}

