import React, { useState, useEffect, Fragment, useCallback } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { useAuth } from "global";
import { Form, Spin } from "components";
import { routerLinks } from "utils";
import { UserService } from "services/user";
import { ColumnLogin } from "columns/auth";

const Page = ({ location }) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const initFunction = useCallback(async () => {
    // if (!!auth.user?.token) {
    //   await UserService.logout();
    // }
  }, []);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      initFunction();
    }

  }, [mount, initFunction]);
  // const [isLoading, setIsLoading] = useState(false);

  // const [showModal, setShowModal] = React.useState(false);

  // const [handleEdit, ModalForm, handleDelete] = HookModal({
  //   title: 'ĐĂng nhập',
  //   isLoading, setIsLoading,

  // });
  const submit = async (values) => {
    try {
      setLoading(true);
      const res = await UserService.login({
        ...values,
        // isRemember: values.isRemember !== undefined,
      });
      if (res.data) {
        auth.login(res.data);
      }
      setLoading(false);

      navigate(res.data.menu[0].pageUrl, { replace: true });
    } catch (err) {
      console.log("Error is:", err);
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <div className="mb-8">
        <h1 className="intro-x text-3xl mb-3 font-bold" id={'title-login'}>
          {t("routes.auth.login.Log In")}
        </h1>
        {/* <h5 className="intro-x font-medium text-gray-300">{t("routes.auth.login.subTitle")}</h5> */}
      </div>
      <Spin spinning={loading}>
        <Form
          className="intro-x"
          columns={ColumnLogin({ t })}
          textSubmit={t("routes.auth.login.Log In")}
          idSubmit={'btnLogin'}
          handSubmit={submit}
        />

      </Spin>

      <div className="mt-3 intro-x">
        {t("routes.auth.login.Don't have an account?")}
        <Link
          id={'button-register'}
          className="ml-1 text-blue-700 underline"
          to={routerLinks("Register")}
        >
          {t("routes.auth.login.Register")}
        </Link>
      </div>
      <div className="intro-x pt-1 -mt-28 right-10 md:static md:mt-1 absolute xl:absolute  xl:pt-1 xl:-mt-32">
        <Link className="text-blue-700 underline" to={routerLinks("ForgotPass")}>
          {t("routes.auth.login.Forgot Password?")}
        </Link>
      </div>




    </Fragment>
  );
};

export default Page;
