import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export function MainPage() {
  return (
    <>
      <Helmet>
        <title>Tata AIG</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <h1>Main Page</h1>
      <div></div>
    </>
  );
}
