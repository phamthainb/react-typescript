/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import { BaseCSS } from 'styled-bootstrap-grid';

// page
import HomePage from 'containers/HomePage';

function App() {
  return (
    <div>
      <Helmet titleTemplate="%s - React" defaultTitle="React">
        <meta name="description" content="A React application" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
      <BaseCSS />
    </div>
  );
}
export default hot(App);
