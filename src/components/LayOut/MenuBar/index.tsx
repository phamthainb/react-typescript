import { ItemRoute } from "@configs/routes";
/**
 *
 * MenuBar
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {
  routes: ItemRoute[];
}

function MenuBar({ routes }: Props) {
  return <StylesMenuBar>MenuBar</StylesMenuBar>;
}
const StylesMenuBar = styled.div``;

export default memo(MenuBar);
