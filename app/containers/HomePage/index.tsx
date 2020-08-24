/*
 *
 * HomePage
 *
 */

import React, { memo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import ErrorBound from 'components/ErrorBound';
import ModalStyle from 'components/Modal';
// import LoadingIndicator from 'components/LoadingIndicator';

const stateSelector = createStructuredSelector({
  homePage: makeSelectHomePage(),
});

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function HomePage(props: Props) {
  useInjectReducer({ key: 'homePage', reducer: reducer });
  useInjectSaga({ key: 'homePage', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { homePage } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars

  const [isModal, setisModal] = useState(false);
  return (
    <div>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="Description of HomePage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      {/* <LoadingIndicator /> */}
      <button type="button" onClick={() => setisModal(!isModal)}>
        modal
      </button>
      <ModalStyle isOpen={isModal} setIsOpen={setisModal} dontCloseOutside>
        <p>asdasdasd asda d asd asd a sd asd as d</p>
      </ModalStyle>
    </div>
  );
}

export default memo((props: Props) => (
  <ErrorBound>
    <HomePage {...props} />
  </ErrorBound>
));
