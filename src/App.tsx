
import { Grid } from '@mui/material'
import { Form } from './components/Form'
import { List } from './components/List'

const App: React.FunctionComponent = () => {

  return (
    <>
      <div style={{height:"max"}}>
        <Grid container alignItems={"center"} justifyContent={"center"} style={{ backgroundColor: "#FFFFCC" }}>
          <Grid item xs={8}>
            <div style={{ marginTop: '3%', marginLeft: '5%', backgroundColor: "#FFFFCC" }}>
              <Form />
              <div style={{ marginTop: '3%' }}>
                <List />
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default App
