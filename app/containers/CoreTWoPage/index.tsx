/*
 *
 * CoreTWoPage
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectCoreTWoPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  coreTWoPage: makeSelectCoreTWoPage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CoreTWoPage(props: Props) {
  useInjectReducer({ key: 'coreTWoPage', reducer: reducer });
  useInjectSaga({ key: 'coreTWoPage', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { coreTWoPage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <Helmet>
        <title>CoreTWoPage</title>
        <meta name="description" content="Description of CoreTWoPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo((props: Props) => (
  <ErrorBound>
    <CoreTWoPage {...props} />
  </ErrorBound>
));
