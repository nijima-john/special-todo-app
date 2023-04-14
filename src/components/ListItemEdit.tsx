import { Button, TextField } from '@mui/material';
import React from 'react'

interface Props {
    content: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    editTodo: () => void
}

export const ListItemEdit: React.FunctionComponent<Props> = (props) => {
    const { content, handleChange, editTodo } = props;
    return (
        <div>
            <TextField type="text" value={content} name="content"
                onChange={handleChange} />
            <Button style={{ width: "50%", marginLeft: "20%", marginTop: "5%" }} variant="contained" onClick={() => { editTodo(); }}>更新</Button>
        </div>
    )
}
