/*
 *
 * Home
 *
 */

import React, { memo } from "react";
import ErrorBound from "@components/ErrorBound";
import { useDispatch } from "react-redux";
import { changeLogin } from "@containers/App/store/actions";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormData } from "./store/types";
import LoginForm from "@components/LoginForm";
import LoginItem from "@components/LoginForm/LoginItem";
import Button from "@components/Button";
import { useIntl } from "react-intl";
import message from "./message";

interface Props {}

// eslint-disable-next-line
function Home({}: Props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, watch, errors } = useForm<LoginFormData>();
  const onSubmit = (data: LoginFormData) => console.log(data);
  const intl = useIntl();
  return (
    <ErrorBound>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <LoginItem>
          <p>{intl.formatMessage({ ...message.phone })}</p>
          <input type="text" name="phone" ref={register({ required: true })} />
        </LoginItem>
        <LoginItem>
          <p>{intl.formatMessage({ ...message.password })}</p>
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
        </LoginItem>
        <LoginItem>
          <p>Sdt</p>
          <input
            type="checkbox"
            name="type"
            ref={register({ required: true })}
          />
        </LoginItem>
        <Button type="submit">Login</Button>
      </LoginForm>
    </ErrorBound>
  );
}
export default memo(Home);
