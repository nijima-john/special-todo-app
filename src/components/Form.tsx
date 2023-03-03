import { Button, TextField } from '@mui/material';


export const Form = (props: any) => {
  const { onClick, onChange, todoText } = props;

  return (
    <>
      <div>
        <TextField value={todoText} onChange={onChange} id="outlined-basic" label="todoを入力してください" variant="outlined" />
        <Button onClick={onClick} style={{ marginLeft: '25px', marginTop: '5px' }} >登録</Button>
      </div>
    </>
  )
}

