/*
 *
 * CoreOnePage
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectCoreOnePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const stateSelector = createStructuredSelector({
  coreOnePage: makeSelectCoreOnePage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function CoreOnePage(props: Props) {
  useInjectReducer({ key: 'coreOnePage', reducer: reducer });
  useInjectSaga({ key: 'coreOnePage', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { coreOnePage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <div>
      <Helmet>
        <title>CoreOnePage</title>
        <meta name="description" content="Description of CoreOnePage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo((props: Props) => (
  <ErrorBound>
    <CoreOnePage {...props} />
  </ErrorBound>
));
