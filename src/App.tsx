
import { type SetStateAction, useState } from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FunctionComponent = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([])
  const [completeTodos, setCompleteTodos] = useState<string[]>([])

  const onChangeTodoText = (event: { target: { value: SetStateAction<string> } }):void => {

    setTodoText(event.target.value)
  }

  const onClickAdd = ():void => {
    if (todoText === '') return
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos)
    setTodoText('')
    console.log(todoText)
  }

  const onClickDelete = (index: number):void => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index: number):void => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index: number):void => {
    const newTodos = [...completeTodos]
    newTodos.splice(index, 1)
    setCompleteTodos(newTodos)
  }

  return (
    <>
      <div style={{ marginTop: '5%', marginLeft: '5%' }}>
        <Form onChange = {onChangeTodoText} onClickAdd = {onClickAdd} todoText ={todoText} />
        <div style={{ marginTop: '5%' }}>
        <List onClickComplete={onClickComplete} onClickDelete={onClickDelete} onClickBack={onClickBack} incompleteTodos = {incompleteTodos} completeTodos = {completeTodos} />
        </div>
      </div>
    </>
  )
}

export default App
