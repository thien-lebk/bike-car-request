import React, {useRef, useEffect} from "react";
import { Select } from "antd";
import { useTranslation } from "react-i18next";
import { useAuth } from "global";
import { useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";

import us from "assets/svg/us.svg";
import vn from "assets/svg/vn.svg";
import logoUhouse from "assets/images/logo/uhouse.png";

import "./index.less";
import classNames from "classnames";

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  const { changeLanguage, logout } = useAuth();
  const location = useLocation();
  const scroll = useRef(null);
  const scroll1 = useRef(null);
  let imageURL = "";

  useEffect(() => {
    logout();
  }, []);

  if (['en', 'vi'].indexOf(i18n.language) === -1) {
    // if (i18n.language === 'vi-VN') {
      changeLanguage('vi');
    // } else {
    //   changeLanguage('en');
    // }
  }

  useEffect(() => {
    scroll.current.scrollTop = 0;
    new PerfectScrollbar(scroll.current, {
      suppressScrollX: true,
    });
  }, [scroll, children]);

  useEffect(() => {
    scroll1.current.scrollTop = 0;
    new PerfectScrollbar(scroll1.current, {
      suppressScrollX: true,
    });
  }, [scroll1, children]);

  // console.log(location.pathname);
  switch (location.pathname) {
    case "/auth/login":
      imageURL = "bg-[url('../../assets/images/bg-login.png')]";
      break;
    case "/auth/register":
      imageURL = "bg-[url('../../assets/images/bg-register.png')]";
      break;
    case "/auth/forgot-password":
      imageURL = "bg-[url('../../assets/images/bg-forgot.png')]";
      break;
    case "/auth/reset-password":
      imageURL = "bg-[url('../../assets/images/bg-reset.png')]";
      break;
    case "/auth/send-otp":
      imageURL = "bg-[url('../../assets/images/bg-reset.png')]";
      break;
    default:
      imageURL = "bg-[url('../../assets/images/bg-login.png')]";
      break;
  }
  return (
    <div className="layout-auth h-screen lg:h-full min-h-screen w-full drop-shadow-2xl flex flex-col relative  bg-sky-600/50 p-0 sm:p-12 md:flex-row lg:p-24 ">
      <div
        className="container h-full relative w-full overflow-y-auto mx-auto flex flex-col lg:flex-row bg-white sm:rounded-xl overflow-hidden"
        ref={scroll1}
      >
        {/* sideleft */}
        <div
          className={classNames(
            imageURL,
            "bg-cover bg-center w-full min-h-[400px] lg:min-h-full lg:w-3/5 p-10 relative overflow-hidden flex justify-between flex-col"
          )}
        >
          <img src={logoUhouse} alt="logoUhouse" className="w-10 sm:w-20" />
        </div>
        {/* side right */}
        <div className="w-full h-full lg:w-2/5 py-10 flex justify-center flex-col relative">
          <div
            className="overflow-y-auto relative px-10"
            ref={scroll}
          >
            {children}
          </div>
          <div className=" translate intro-x text-center mt-5 px-10">
            <Select
              value={i18n.language}
              onChange={(value) => {
                changeLanguage(value);
                window.location.reload();
              }}
            >
              <Select.Option value="en">
                <img
                  src={us}
                  alt="US"
                  className="mr-1 w-4 inline-block relative -top-0.5"
                />{" "}
                {t("routes.admin.Layout.English")}
              </Select.Option>
              <Select.Option value="vi">
                <img
                  src={vn}
                  alt="VN"
                  className="mr-1 w-4 inline-block relative -top-0.5"
                />
                {t("routes.admin.Layout.Vietnam")}
              </Select.Option>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
