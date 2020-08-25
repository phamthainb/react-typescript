/**
 *
 * MenuBar
 *
 */
import React, { memo } from 'react';

// import styled from 'styles/styled-components';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormattedMessage } from 'react-intl';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import messages from './messages';

interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MenuBar(props: Props) {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default memo(MenuBar);
