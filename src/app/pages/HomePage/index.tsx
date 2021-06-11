import AppBar from 'app/components/AppBar';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useSlice } from './slice';
import { selectUser } from './slice/selectors';

export function HomePage() {
  const { actions } = useSlice();

  const currentUser = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(actions.logout());
    // TODO: Redirect to login page once that's up
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <AppBar user={currentUser} onLogout={handleLogout}></AppBar>
    </>
  );
}
