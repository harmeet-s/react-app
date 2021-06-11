import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar as MaterialAppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';
import { CurrentUser } from 'app/pages/HomePage/slice/types';

interface Props {
  user?: CurrentUser | null;
  onLogout: React.MouseEventHandler<HTMLButtonElement>;
}

// Ref: https://material-ui.com/components/app-bar/#app-bar
export default function AppBar(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MaterialAppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cattle Inspection Dashboard
          </Typography>
          {props.user && (
            <>
              <Box className={classes.user}>
                <Typography variant="overline">{props.user.fullName}</Typography>
              </Box>
              <Box className={classes.user}>
                <Typography variant="overline">{props.user.vendor}</Typography>
              </Box>
              <Box className={classes.user}>
                <Typography variant="overline">{props.user.role}</Typography>
              </Box>
              <Box>
                <Button variant="contained" color="secondary" onClick={props.onLogout}>
                  Logout
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </MaterialAppBar>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    user: {
      marginRight: theme.spacing(2),
    },
  }),
);
