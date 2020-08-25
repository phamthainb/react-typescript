/*
 *
 * LayOut
 *
 */

import React, { memo } from 'react';
import ErrorBound from 'components/ErrorBound';
import { Helmet } from 'react-helmet-async';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormattedMessage } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import makeSelectLayOut from './selectors';
import reducer from './reducer';
import saga from './saga';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import messages from './messages';
import styled from 'styled-components';
import MenuBar from 'components/MenuBar';
import MainContent from 'containers/MainContent';

const stateSelector = createStructuredSelector({
  layOut: makeSelectLayOut(),
});

interface Props {}
interface PropsLayout {
  menuBar: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LayOut(props: Props) {
  useInjectReducer({ key: 'layOut', reducer: reducer });
  useInjectSaga({ key: 'layOut', saga: saga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { layOut } = useSelector(stateSelector);
  const dispatch = useDispatch(); // eslint-disable-line @typescript-eslint/no-unused-vars
  return (
    <StylesLayOut {...layOut}>
      <Helmet>
        <title>LayOut</title>
        <meta name="description" content="Description of LayOut" />
      </Helmet>
      <MenuBar />
      <MainContent />
    </StylesLayOut>
  );
}
const StylesLayOut = styled.div<PropsLayout>`
  display: grid;
  /* width menu bar : 300px */
  grid-template-columns: ${props =>
    `${
      props.menuBar ? '400' : '300'
    }px repeat(auto-fit, minmax(100px, 1200px))`};
  overflow: hidden;
`;

export default memo((props: Props) => (
  <ErrorBound>
    <LayOut {...props} />
  </ErrorBound>
));
