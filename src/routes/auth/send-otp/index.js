import React, {useState, Fragment} from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import {  useLocation } from "react-router-dom";
import { Message} from "components";
import { useAuth } from "global";
import {Form, Spin} from "components";
import {routerLinks} from "utils";
import { UserService } from "services/user";
import { ColumnSendOTP } from "columns/auth";

const Page = ({location}) => {
  const { t } = useTranslation();
  const auth = useAuth();
  const navigate = useNavigate();
  const { state:{uuid,email} } = useLocation();
  const [loading, setLoading] = useState(false);


  const submit = async (values) => {
    try {
      setLoading(true);
      const res = await UserService.sendOtp({
        ...values,
        emailOrPhoneNumber:email,
        uuid:uuid,
      });
      if (res.data) {
        auth.forgotpass(res.data);
      }
      Message.dialogSendOTPSuccess(res.message, () => navigate(routerLinks("Login"), {replace: true}));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      await Message.error(err.response.data.message);
    }
  };

  return (
    <Fragment>
      <div className="mb-8">
        <h1 className="intro-x text-4xl mb-3 font-bold">{t("routes.auth.reset-password.Forgot")}</h1>
        <h5 className="intro-x font-medium text-gray-300">{t("routes.auth.reset-password.Please Enter OTP")}</h5>
      </div>
      <Spin spinning={loading}>
        <Form
          className="intro-x"
          columns={ColumnSendOTP({ t })}
          textSubmit={t("routes.auth.reset-password.Send OTP")}
          handSubmit={submit}
        />
      </Spin>
    </Fragment>
  );
};

export default Page;
