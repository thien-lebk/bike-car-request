import React, {useState, useEffect, Fragment, useCallback} from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Message} from "components";

import {Form, Spin} from "components";
import {routerLinks} from "utils";
import { UserService } from "services/user";
import { ColumnConfirmPassword } from "columns/auth";

const Page = ({location}) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false)
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initFunction = useCallback(async () => {
    // if (!!auth.user?.token) {
    //   await UserService.logout();
    // }
  }, [])

  useEffect(() => {
    if(!mount) {
      setMount(true);
      initFunction();
    }
  }, [mount, initFunction]);

  const submit = async (values) => {
    try {
      setLoading(true);
    await UserService.updatePass({
        ...values,
      });

      Message.successResetPassword('',  navigateToLogin() );
      setLoading(false);
      // navigate(routerLinks("Dashboard"), { replace: true });
    } catch (err) {
      console.log(err);

      // Message.error('',err.reponse);

      setLoading(false);
    }
  };
  const navigateToLogin = () => {
    navigate(routerLinks("Login"));
  }
  return (
    <Fragment>
      <div className="mb-8">
        <h1 className="intro-x text-4xl mb-3 font-bold">{t("routes.auth.reset-password.title")}</h1>
      </div>
      <Spin spinning={loading}>
        <Form
          className="intro-x"
          columns={ColumnConfirmPassword({ t })}
          textSubmit={t("routes.auth.reset-password.Button Change")}
          handSubmit={submit}
        />
      </Spin>

    </Fragment>
  );
};

export default Page;
