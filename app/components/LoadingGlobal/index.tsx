/**
 *
 * ModalWrap
 *
 */
import React, { memo } from 'react';
import Modal from 'react-modal';

import styled from 'styles/styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormattedMessage } from 'react-intl';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import messages from './messages';
import LoadingIndicator from 'components/LoadingIndicator';
import { useSelector } from 'react-redux';
import { makeSelectLoading } from 'containers/App/selectors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LoadingGlobal() {
  const customStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      position: 'unset',
      top: 'unset',
      left: 'unset',
      right: 'unset',
      bottom: 'unset',
      border: 'none',
      background: 'transparent',
      overflow: 'auto',
      borderRadius: '0',
      outline: 'none',
      padding: '0',
      margin: '0 auto',
      display: 'bolck',
    },
  };
  const loading = useSelector(makeSelectLoading);
  // console.log('LoadingGlobal', loading);

  return (
    <Modal closeTimeoutMS={500} isOpen={loading} style={customStyle}>
      <StylesLoading>
        <LoadingIndicator />
      </StylesLoading>
    </Modal>
  );
}

export default memo(LoadingGlobal);

const StylesLoading = styled.div`
  max-width: 500px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: transparent;
  top: 60px;
`;
