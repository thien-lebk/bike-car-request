import React, { useState, useEffect } from "react";
import { Select, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import classNames from "classnames";
import BreadCrumb from "./breadcrumb"

import { useAuth } from "global";
import logo from "assets/images/logo.png";
import bell from "assets/images/bell.png";
// import avatar from "assets/images/avatar.jpeg";
import us from "assets/svg/us.svg";
import vn from "assets/svg/vn.svg";
import user_icon from "assets/svg/user.svg"
import logout_icon from "assets/svg/logout.svg"

// import menus from "./menus";
import "./index.less";
import { routerLinks } from "utils";
import { Avatar } from "components";
import Menu from "./menu";

const Layout = ({ children }) => {
  const { t, i18n } = useTranslation();
  // menuVertical, permission, user,
  const { changeLanguage,user } = useAuth();
  const navigate = useNavigate();

  const [isCollapsed, set_isCollapsed] = useState(window.innerWidth < 1024);
  const [isDesktop, set_isDesktop] = useState(window.innerWidth > 767);
  // console.log("user",user)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1024 && !isCollapsed) {
        set_isCollapsed(true);
      }
      if (window.innerWidth > 767 && !isDesktop) {
        set_isDesktop(true);
      } else if (window.innerWidth <= 767 && isDesktop) {
        set_isDesktop(false);
      }
    }
    window.addEventListener("resize", handleResize, true);
    import("perfect-scrollbar").then(({default: PerfectScrollbar}) => {
      new PerfectScrollbar(document.getElementById('root'), {
        suppressScrollX: true,
      });
    });
    return () => window.removeEventListener("resize", handleResize, true);
  }, [isCollapsed, isDesktop]);

  /*  let _menus = menus();

  const arrayTitle = history.location.pathname
    .substring(1, history.location.pathname.length)
    .split("/")
    .map((str) => str[0].toUpperCase() + str.substring(1, str.length).toLowerCase());
  let tempTitle = "";*/

  const Header = ({ isCollapsed, isDesktop }) => (
    <header
      className={classNames(
        "bg-white shadow w-full header h-16 transition-all duration-300 ease-in-out sticky top-0 block z-10",
        {
          "pl-80": !isCollapsed && isDesktop,
          "pl-32": isCollapsed && isDesktop,
          "pl-28": !isDesktop,
        }
      )}
    >
      <div className="flex items-center justify-end sm:justify-between px-5 h-16">
        <Select
          value={i18n.language}
          onChange={(value) => changeLanguage(value)}
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
        <div className="flex items-center">
          <div className="mr-5 relative flex group">
            {/* <div className="rounded-full text-white w-5 h-5 bg-blue-400 absolute -right-1.5 -top-1.5 leading-none text-center pt-1 text-xs group-hover:animate-bounce">
              4
            </div>
            <i className="las la-bell text-4xl text-gray-500" /> */}
            <img className="w-8" src={bell} alt="" />
            {/* <span  className="uhome-notification text-red w-10 text-3xl"></span> */}
          </div>
          <Dropdown
            trigger={['hover','click']}
            overlay={
              <div  className="bg-white rounded-xl shadow-2xl mt-3" style={{filter: "drop-shadow(4px 4px 20px rgba(0, 0, 0, 0.1))"}}>
                <div className="border-b-2 p-3 flex cursor-pointer"  onClick={() =>
                        navigate(routerLinks("User profile"), { replace: true })
                      }>
                <Avatar src={user?.getUserInfor?.profileImage} size={10} />
                <div className="ml-3">
                  <h2 className="text-lg font-medium leading-none">{user?.getUserInfor?.name}</h2>
                  <span className="text-sm font-light text-gray-500">{user?.getUserInfor?.email}</span>
                </div>
                  </div>
                <div className="p-3 ">
                  <ul className="">
                    <li
                      id={'menu-my-profile'}
                      className="p-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() =>
                        navigate(routerLinks("User profile"), { replace: true })
                      }
                    >
                      <img
                        src={user_icon}
                        alt="US"
                        className="mr-3 w-4 inline-block relative -top-0.5 text-red-500 "
                      />
                      <span>{t("columns.admin.profile.User Profile")}</span>
                    </li>
                    <li
                      className="p-2 hover:bg-blue-100 cursor-pointer"
                      onClick={() =>
                        navigate(routerLinks("Login"), { replace: true })
                      }
                    >
                      <img
                        src={logout_icon}
                        alt="US"
                        className="mr-3 w-4 inline-block relative -top-0.5 "
                      />
                      <span>{t("columns.admin.profile.Sign Out")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            }
            placement="bottomRight"
          >
            <section
              id={'dropdown-profile'}
              className="flex items-center"
            >
              {/*<div className="text-right leading-none mr-3 hidden sm:block">*/}
              {/*  <div className="font-bold text-black text-lg leading-snug mb-0.5">{user?.name}</div>*/}
              {/*  <div className="text-gray-500">admin@admin.com</div>*/}
              {/*</div>*/}
              <Avatar src={user?.getUserInfor?.profileImage} size={10} />
            </section>
          </Dropdown>
        </div>
      </div>
    </header>
  );
  return (
    <main>
      <Header isCollapsed={isCollapsed} isDesktop={isDesktop} />
      <div
        className={classNames(
          "flex items-center justify-between text-gray-800 hover:text-gray-500 h-16 fixed top-0 left-0 px-5 font-bold transition-all duration-300 ease-in-out z-10",
          {
            "w-80": !isCollapsed && isDesktop,
            "w-20": isCollapsed,
            "bg-red-500": isDesktop,
            "bg-blue-50": !isDesktop,
          }
        )}
      >
        <div>
          <a href="/" className="flex items-center">
            <img className="w-10" src={logo} alt="" />
            <div
              id={"name-application"}
              className={classNames(
                "transition-all text-white duration-300 ease-in-out absolute left-16 w-48 overflow-ellipsis overflow-hidden ml-2",
                {
                  "opacity-100 text-3xl": !isCollapsed && !!isDesktop,
                  "opacity-0 text-[0px] invisible": !!isCollapsed || !isDesktop,
                }
              )}
            >
              Uhouse
            </div>
          </a>
        </div>

        <div
          className={classNames("hamburger", {
            "is-active":
              (isCollapsed && isDesktop) || (!isCollapsed && !isDesktop),
          })}
          onClick={() => set_isCollapsed(!isCollapsed)}
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>
      </div>
      <div
        className={classNames(
          "fixed z-10 top-16 left-0 h-screen bg-red-500 transition-all duration-300 ease-in-out",
          {
            "w-80": !isCollapsed,
            "w-20": isCollapsed,
            "-left-20": isCollapsed && !isDesktop,
          }
        )}
      >
        <Menu isCollapsed={isCollapsed} />
      </div>
      <div
        className={classNames(
          "ml-80 pt-5 transition-all duration-300 ease-in-out z-10",
          {
            "ml-80": !isCollapsed && isDesktop,
            "ml-20": isCollapsed && isDesktop,
          }
        )}
      >
        <div>
          <div className="buildingList px-7 my-3 drop-shadow-lg">
          <BreadCrumb/>
          </div>
          {children}
        </div>
        <div className="text-left py-5 bg-white drop-shadow indent-9">
          Copyright ©{new Date().getFullYear()} ARI Technology Co ., JSC. All
          rights reserved.
        </div>
      </div>
      <div className="hidden h-7 w-7 leading-7" />
    </main>
  );
};
export default Layout;
