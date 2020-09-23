/**
 *
 * LayOut
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

import { ItemRoute } from "@configs/routes";

interface Props {
  children: JSX.Element; // the maps components
}

// eslint-disable-next-line
function LayOut({ children }: Props) {
  return <StylesLayOut>{children}</StylesLayOut>;
}
const StylesLayOut = styled.div`
  padding-left: 200px;
`;

export default memo(LayOut);
