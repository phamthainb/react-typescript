/*
 *
 * MainContent
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectMainContent from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  mainContent: makeSelectMainContent(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MainContent(props: Props) {
  useInjectReducer({ key: 'mainContent', reducer: reducer });
  useInjectSaga({ key: 'mainContent', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { mainContent } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <Helmet>
        <title>MainContent</title>
        <meta name="description" content="Description of MainContent" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo((props: Props) => (
  <ErrorBound>
    <MainContent {...props} />
  </ErrorBound>
));
