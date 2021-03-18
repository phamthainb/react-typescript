import { Alert } from "@components/Alert";
/**
 *
 * ProtectRoute
 *
 */
import React, { memo, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { ItemRoute } from "src/configs/routes";
import styled from "styled-components";

interface Props {
  item: ItemRoute;
  children: JSX.Element;
}

function ProtectRoute({ item, children }: Props) {
  const [auth, setAuth] = useState<Boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) setAuth(true);
  }, [item]);

  // if no has token in localStoreage when access to private route
  if (auth) {
    Alert({ name: "Đăng nhập lại.", icon: "warning" });
    return <Redirect to="/" />;
  }

  return <StylesProtectRoute>{children}</StylesProtectRoute>;
}
const StylesProtectRoute = styled.div``;

export default memo(ProtectRoute);
