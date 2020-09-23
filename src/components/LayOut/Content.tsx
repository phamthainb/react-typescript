/**
 *
 * Content
 *
 */
import React, { memo } from "react";
import styled from "styled-components";

interface Props {}

// eslint-disable-next-line
function Content({}: Props) {
  return <StylesContent>Content</StylesContent>;
}
const StylesContent = styled.div``;

export default memo(Content);
