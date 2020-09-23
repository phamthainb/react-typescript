/*
 *
 * LayOutPage
 *
 */

import React, { memo } from "react";
import ErrorBound from "@components/ErrorBound";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "@components/NotFoundPage";
import LayOut from "@components/LayOut";
import Content from "@components/LayOut/Content";
import MenuBar from "@components/LayOut/MenuBar";
import ROUTES from "@configs/routes";

interface Props {}

// eslint-disable-next-line
function LayOutDash({}: Props) {
  return (
    <ErrorBound>
      <Switch>
        <LayOut>
          <>
            <MenuBar routes={ROUTES.ADMIN} />
            <Content>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Content>
          </>
        </LayOut>
      </Switch>
    </ErrorBound>
  );
}
export default memo(LayOutDash);
