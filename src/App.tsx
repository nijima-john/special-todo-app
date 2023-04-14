
import { Grid } from '@mui/material'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FunctionComponent = () => {

  return (
    <>
      <Grid container alignItems={"center"} justifyContent={"center"}>
        <Grid item xs={8}>
          <div style={{ marginTop: '5%', marginLeft: '5%' }}>
            <Form />
            <div style={{ marginTop: '5%' }}>
              <List />
            </div>
          </div>
        </Grid>
      </Grid>

    </>
  )
}

export default App
