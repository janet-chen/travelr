import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PublicIcon from '@material-ui/icons/Public';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function NewTripForm({handleClose, addTrip}) {
  const classes = useStyles();
  const [tripName, setTripName] = React.useState('');
  const [numberOfDays, setNumberOfdays] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (numberOfDays <= 10 && numberOfDays > 0) {
      addTrip({tripName, numberOfDays});
      handleClose();
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PublicIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          New Trip
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event)=>handleSubmit(event)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="tripName"
                label="Trip Name"
                value={tripName}
                onChange={e => setTripName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tripDays"
                label="Days"
                type="number"
                variant="outlined"
                fullWidth
                InputProps={{
                  inputProps: {
                    max: 10, min: 1
                  }
                }}
                error={Boolean(numberOfDays && (numberOfDays > 10 || numberOfDays < 1))}
                helperText="The number of days must be between 1 and 10"
                value={numberOfDays}
                onChange={e => setNumberOfdays(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default connect(null, null)(NewTripForm);
