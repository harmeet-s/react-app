import React, { useState } from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CreateUserDialog from './Features/CreateUserDialog';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export function UserManagementPage() {
  const classes = useStyles();

  const [isCreateUserDialogVisible, setIsCreateUserDialogVisible] = useState(
    false,
  );

  return (
    <div className={classes.root}>
      {isCreateUserDialogVisible ? (
        <CreateUserDialog
          onSaveClicked={userInfo => {
            setIsCreateUserDialogVisible(false);
          }}
          onCancelClicked={() => setIsCreateUserDialogVisible(false)}
        />
      ) : (
        ''
      )}

      <ButtonGroup
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button onClick={() => setIsCreateUserDialogVisible(true)}>
          Create
        </Button>
        {/* <Button>Two</Button>
        <Button>Three</Button> */}
      </ButtonGroup>
    </div>
  );
}
