
import {  useState } from 'react'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FunctionComponent = () => {
  const [incompleteTodos, setIncompleteTodos] = useState<string[]>([])
  const [completeTodos, setCompleteTodos] = useState<string[]>([])

  const onClickDelete = (index: number): void => {
    const newTodos = [...incompleteTodos]
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos)
  }

  const onClickComplete = (index: number): void => {
    const newIncompleteTodos = [...incompleteTodos]
    newIncompleteTodos.splice(index, 1)
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]]
    setIncompleteTodos(newIncompleteTodos)
    setCompleteTodos(newCompleteTodos)
  }

  const onClickBack = (index: number): void => {
    const newTodos = [...completeTodos]
    newTodos.splice(index, 1)
    setCompleteTodos(newTodos)
  }

  return (
    <>
      <div style={{ marginTop: '5%', marginLeft: '5%' }}>
        <Form  />
        <div style={{ marginTop: '5%' }}>
          <List onClickComplete={onClickComplete} onClickDelete={onClickDelete} onClickBack={onClickBack} incompleteTodos={incompleteTodos} completeTodos={completeTodos} />
        </div>
      </div>
    </>
  )
}

export default App
