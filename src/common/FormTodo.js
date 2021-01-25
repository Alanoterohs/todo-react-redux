import { Grid, Card, CardContent, Container, Typography, Box, Input, TextField, Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    }
  });

export const FormTodo = (props) => {
    const classes = useStyles();

    return(
        <Grid item xs={12} sm={12} lg={12} xl={12}>
            <Typography variant = 'h3' align="center" color="primary" style={{margin:"15px"}} >
                To do App!
            </Typography>
                <form onSubmit={props.onSubmit}>
                    <Card>

                    <TextField
                    type="text"
                    value={props.description}
                    onChange={props.onChange}
                    />
                    <Button 
                    size="small" 
                    variant="outlined"
                    onClick={props.onSubmit}
                    >
                        ADD
                    </Button>
                    </Card>
                </form>
        </Grid>
    );
}

export default FormTodo;