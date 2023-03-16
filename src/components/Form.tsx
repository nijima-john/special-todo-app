import { Button, TextField } from '@mui/material'

interface  Props {
  onClickAdd: () => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  todoText: string
}

export const Form:React.FunctionComponent<Props> = (props: Props) => {
  const { onClickAdd, onChange, todoText } = props

  return (
    <>
      <div style={{opacity: "0"}}>
        <TextField value={todoText} onChange={onChange} id="outlined-basic" label="todoを入力してください" variant="outlined" />
        <Button onClick={onClickAdd} style={{ marginLeft: '25px', marginTop: '5px' }} >登録</Button>
      </div>
    </>
  )
}
