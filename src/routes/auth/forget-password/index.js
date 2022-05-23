import React, {useState,  Fragment} from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {Message} from "components";
import {Form, Spin} from "components";
import {routerLinks} from "utils";
import { UserService } from "services/user";
import { ColumnResetPassword } from "columns/auth";

const Page = ({location}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  const submit = async (values) => {
    try {
      setLoading(true);
      const res = await UserService.forgotPass({
        ...values,
        // isRemember: values.isRemember !== undefined,
      });

      if (res.uuid) {
        // auth.forgotpass(res);
        setLoading(false);
      Message.dialogSendOTP('', () => navigate(routerLinks("SendOTP"), { state:{ uuid: res.uuid, email:values.emailOrPhoneNumber} }) );
      }

    } catch (err) {
      setLoading(false);
      await Message.error(err.response.data.message);

    }
  };

  return (
    <Fragment>
      <div className="mb-8">
        <h1 className="intro-x text-4xl mb-3 font-bold">{t("routes.auth.reset-password.Forgot")}</h1>
        <h5 className="intro-x font-medium text-gray-300">{t("routes.auth.reset-password.subTitle")}</h5>
      </div>
      <Spin spinning={loading}>
        <Form
          className="intro-x"
          columns={ColumnResetPassword({ t })}
          textSubmit={t("routes.auth.reset-password.Get OTP")}
          handSubmit={submit}
        />
      </Spin>
    </Fragment>
  );
};

export default Page;
