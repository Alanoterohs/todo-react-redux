import { Provider } from 'react-redux'
import store from './store'
import Form from './component/Form'
import { createMuiTheme, ThemeProvider, withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "50px",
    height: "100%"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Box display="flex" justifyContent="center" className={classes.container}>
          <Form/>
      </Box>
    </Provider>
  );
}

export default App;
