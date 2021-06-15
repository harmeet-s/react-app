/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from 'styles/global-styles';

import { MainPage } from './pages/MainPage/Loadable';
import { LoginPage } from './pages/LoginPage/Loadable';
import { UserManagementPage } from './pages/UserManagementPage';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import LoadingModal from './components/LoadingModal';
import { selectLoadingStatus } from './slice/selectors';
// import { setInterceptor } from './interceptors';

import { useAppSlice } from './slice';

export function App() {
  const { i18n } = useTranslation();
  const { actions } = useAppSlice();
  // setInterceptor();

  // const redirectBasedOnLocalStorage = () => {
  //   if (!app.user) {
  //     goToRoute('/auth/login');
  //   }
  // };

  // useEffect(() => {
  //   redirectBasedOnLocalStorage();
  // }, []);

  // useEffect(() => {
  //   redirectBasedOnLocalStorage();
  // }, [app.user]);

  const isLoading = useSelector(selectLoadingStatus);

  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Tata AIG"
        defaultTitle="Tata AIG"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Tata AIG application" />
      </Helmet>
      {isLoading && <LoadingModal />}
      <Switch>
        <Redirect exact path="/" to="/main" />
        <Route path="/auth/login" component={LoginPage} />
        <Route path="/main/user-management" component={UserManagementPage} />
        <Route path="/main" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
