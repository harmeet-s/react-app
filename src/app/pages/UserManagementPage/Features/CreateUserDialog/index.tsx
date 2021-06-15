import React from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Container,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

interface Props {
  onSaveClicked: (any) => any;
  onCancelClicked: (any) => any;
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function CreateUserDialog({
  onSaveClicked,
  onCancelClicked,
}: Props) {
  //   const [open, setOpen] = React.useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  //   const handleClose = () => {
  //     setOpen(false);
  //   };
  // const classes = useStyles();
  return (
    <div>
      <Dialog open aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create User</DialogTitle>
        <DialogContent>
          <Container component="main" maxWidth="sm">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="fullName"
                  label="Full Name"
                  type="text"
                  id="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="outlined">
                  <InputLabel>Vendor</InputLabel>
                  <Select fullWidth id="vendorName" label="Vendor">
                    <MenuItem>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="C">C</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancelClicked} color="primary">
            Cancel
          </Button>
          <Button onClick={onSaveClicked} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
