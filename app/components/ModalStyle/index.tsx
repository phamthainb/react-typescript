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

interface Props {
  dontCloseOutside?: boolean;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  hasTemplate: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ModalStyle(props: Props) {
  const { dontCloseOutside, isOpen, setIsOpen, hasTemplate } = props;

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

  return (
    <Modal
      closeTimeoutMS={500}
      isOpen={isOpen}
      onRequestClose={dontCloseOutside ? null : () => setIsOpen(false)}
      style={customStyle}
    >
      <StylesModal>
        {hasTemplate ? (
          <>
            <div className="modal-header">header</div>
            <div className="modal-content">{props.children}</div>
            <div className="modal-footer">footer</div>
          </>
        ) : (
          <p>{props.children}</p>
        )}
      </StylesModal>
    </Modal>
  );
}

export default memo(ModalStyle);

const StylesModal = styled.div`
  max-width: 500px;
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  top: 60px;
`;
