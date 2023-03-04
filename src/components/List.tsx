import { Button } from '@mui/material'

interface Props  {
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
  onClickBack: (index: number) => void;
  incompleteTodos: string[];
  completeTodos: string[];
}

export const List = (props: Props) => {
  const { onClickComplete, onClickDelete, onClickBack, incompleteTodos, completeTodos } = props
  return (

    <>
      <h3>・未完了のtodo</h3>
      <ul>
        {
          incompleteTodos.map((todo: string, index: number) => {
            return (
              <div key={todo}>
                <li>{todo}</li>
                <br />
                <Button variant='outlined' onClick={() => onClickComplete(index)} style={{ marginRight: '3%', marginBottom: '3px' }}>完了</Button>
                <Button variant='outlined' onClick={() => onClickDelete(index)} color="error" style={{ marginRight: '3%' }}>削除</Button>
              </div>
            )
          })
        }
      </ul>
      <h3>・完了のtodo</h3>
      <ul>
        {completeTodos.map((todo: string, index: number) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <br />
              <Button onClick={() => onClickBack(index)} variant="outlined" color="error" style={{ marginRight: '3%' }}>削除</Button>
            </div>
          );
        })}
      </ul>
    </>
  )
}
