/**
*
* Button
*
*/
import React, { memo } from 'react';
import styled from 'styled-components';

interface Props {}

function Button({}: Props) {
return (
<StylesButton>
  Button
</StylesButton>
);
};
const StylesButton = styled.div``;

export default memo(Button);