import React, { useState, useEffect, Fragment, } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Form, Spin } from "components";
import { routerLinks } from "utils";
import { ColumnRegister } from "columns/auth";
import { Message } from "components";
import { UserService } from "services/user";
import "./index.less"

const Page = ({ location }) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (!mount) {
      setMount(true);
      // let values = { email: "example@gmail.com" };
      // Message.confirmEmail({
      //   title: t("routes.auth.register.Confirm your email"),
      //   message: t(
      //     "routes.auth.register.Please check your email and select the link to activate your account"
      //   ),
      //   reconfirmButtonText: t("routes.auth.register.Resend"),
      //   closeButtonText: t("routes.auth.register.Close"),
      //   validationMessage: t(
      //     "routes.auth.register.Please wait for the next confirmation"
      //   ),
      //   successMessage: t("routes.auth.register.Resend Success"),
      //   delayDuration: 10,
      //   resendEmail: UserService.resendEmail,
      //   emailConfirm: values.email,
      //   navigate: navigate,
      // });
      // Message.error("content", t);
    }
  }, [mount]);

  const submit = async (values) => {
    try {
      setLoading(true);
      const data = await UserService.registerUser(values, setLoading, t);

      if (data) {
        Message.confirmEmail(
          {
            title: t("routes.auth.register.Confirm your email"),
            message: t(
              "routes.auth.register.Please check your email and select the link to activate your account"
            ),
            reconfirmButtonText: t("routes.auth.register.Resend"),
            closeButtonText: t("routes.auth.register.Close"),
            validationMessage: t("routes.auth.register.Please wait for the next confirmation"),
            successMessage: t("routes.auth.register.Resend Success"),
            delayDuration: 10,
            resendEmail: UserService.resendEmail,
            emailConfirm: values.email,
            navigate: navigate,
          }
        );
      }
    } catch (err) {
      console.log("Error is:", err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="mb-7 register">
        <h1 className="intro-x text-4xl mb-3 font-bold" id={'title-register'}>
          {t("routes.auth.register.title")}
        </h1>
        <h5 className="intro-x font-medium text-gray-300">
          {t("routes.auth.register.subTitle")}
        </h5>
      </div>
      <Spin spinning={loading}>
        <Form
          className="intro-x w-full form-register"
          columns={ColumnRegister({ t })}
          textSubmit={t("routes.auth.register.Register")}
          handSubmit={submit}
          idSubmit={'button-register'}
        />
      </Spin>
      <div className="mt-3 intro-x text-center">
        {t("routes.auth.register.Do you already have an account?")}

        <Link to={routerLinks("Login")} className="text-blue-500 underline ml-1" onClick={()=>{}}>
          {t("routes.auth.login.Log In")}
        </Link>
      </div>

      {/* popup confirm email */}
    </Fragment>
  );
};

export default Page;
