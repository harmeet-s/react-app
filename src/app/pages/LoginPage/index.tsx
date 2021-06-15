import * as React from 'react';
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Link,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserId, selectPassword } from './slice/selectors';
import tataAIGLogo from '../../images/tata-aig-logo.png';
import { useLoginPageSlice } from './slice';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function LoginPage() {
  const classes = useStyles();
  const { actions } = useLoginPageSlice();

  const userId = useSelector(selectUserId);
  const password = useSelector(selectPassword);

  const dispatch = useDispatch();

  const onChangeUserId = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changeUserId(evt.currentTarget.value));
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(actions.changePassword(evt.currentTarget.value));
  };

  const attemptToLogin = () => {
    if (userId === '') {
      console.log('UserId, Missing');
      // dispatchShowModal('Error', 'User ID is a required field');
    } else if (password === '') {
      // dispatchShowModal('Error', 'Password is a required field');
      console.log('Password, Missing');
    } else {
      dispatch(actions.login());
      // setShouldDisplayCaptcha(true);
    }
  };

  // useEffect(() => {
  //   if (app.user) {
  //     goToRoute('/main');
  //   }
  // });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className="text-center">
          <img
            style={{ maxWidth: '140px' }}
            src={tataAIGLogo}
            alt="Tata AIG logo"
          />
        </div>
        <h1 className="text-center mt-5">Web Portal</h1>
        <form
          className={classes.form}
          noValidate
          onSubmit={event => {
            event.preventDefault();
            attemptToLogin();
          }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User Id"
            name="userId"
            value={userId}
            onChange={onChangeUserId}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            label="Password"
            type="password"
            id="password"
            onChange={onChangePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
