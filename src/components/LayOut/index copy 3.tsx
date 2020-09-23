/**
 *
 * LayOut
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {}

// eslint-disable-next-line
function LayOut({}: Props) {
  return <StylesLayOut>LayOut</StylesLayOut>;
}
const StylesLayOut = styled.div``;

export default memo(LayOut);
