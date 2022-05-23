import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "global";
// import { HookModalForm } from "hooks";
// import { ColumnPermissionRequest } from "columns/user";
import { UserService } from "services/user";
// import { UserRoleService } from "services/user-role";

import { Tabs } from "antd";
import {Form, Upload} from "components";
import { ColumnProfile, ColumnChangePass } from "columns/user";
import { Message } from "components";

import "./index.less";
// import iuconUpload from "../../../assets/images/profile/icon-upload-img.png";
// import editIcon from "../../../assets/images/profile/edit-icon.png";
import userIcon from "../../../assets/images/profile/user-icon.png";
// import { RoleService } from "services/role";

const Page = ({ location }) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  // changePermission permission
  const {  user, login } = useAuth();
  // const [isLoading, setIsLoading] = useState(false);
  const { TabPane } = Tabs;
  const auth = useAuth();
  // const [roleList, setRoleList] = useState([]);
  const [profile] = useState(user.getUserInfor);
  // const [roomStatistic,setRoomStatistic]=useState({});
  const [keyTab,set_keyTab]=useState('1');

  const initFunction = useCallback(async () => {
    if (!mount) {
      setMount(true);
      getUserInfo();
    }
    // console.log(profile)
  }, [mount]);

  const getUserInfo = async ()  =>{
    const {data} = await UserService.getInformation();
    login({...user, getUserInfor: { ...user.getUserInfor, ...data}})
  }

  useEffect(() => {
    initFunction();
  }, [initFunction, location]);

  const submitChangePass = async (values) => {
    try {
      // setLoading(true);
      const data = await UserService.updatePass({
        password: values.password,
        passwordNew: values.passwordNew,
        comfirmPassword: values.confirmpasswordNew,
      });
      Message.successResetPassword(data.message, () => auth.logout());
    } catch (err) {
      // setLoading(false);
      await Message.error(err.response.data.message);
    }
  };

  const submitChangeProfile = async (values) => {
    try {
      // setLoading(true);
      const data = await UserService.updateUserProfile({
        ...values,
      });
      auth.login(data.data);
      Message.successResetInfo((data.message));
    } catch (err) {
      // setLoading(false);
      Message.error(err.response.data.message);
    }
  };
  return (
    <Fragment>
      <div className="userList mx-5 mb-5">
        <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 font-semibold border-b-2 ">
          <span className="text-black font-bold text-lg" id={'title'}>
            {t("columns.admin.profile.User Profile")}
          </span>

          <span  className="text-base">
            <span className="text-blue-500 font-bold ">
              {t("columns.admin.profile.Account Management")}
            </span>
            <span className="px-2">
            /
            </span>
            <span>
            {t("columns.admin.profile.User Profile")}
            </span>

          </span>
        </div>
        <div className="bg-white lg:p-10 p-5 h-full border-b-2 border-gray-300  rounded-b-xl">
          <div className="grid gap-x-4 lg:grid-rows-3 lg:grid-cols-5 md:grid-cols-4 md:grid-rows-3 ">
            <div className="lg:row-span-3   lg:col-span-1 md:col-span-2 md:row-span-2 md:order-1	">
              <div className="cursor-pointer h-full user-avatar relative">
                <Upload
                  onlyImage={true}
                  action={UserService.postProfileImage}
                  onChange={async () => {
                    const {data} = await UserService.getInformation();
                    login({...user, getUserInfor: { ...user.getUserInfor, ...data}})
                  }}
                >
                  <img className={'h-40 w-40 xl:h-44 xl:w-44 mx-auto overflow-hidden rounded-xl'} src={user?.getUserInfor?.profileImage} alt=""/>
                </Upload>
                <i className="las la-upload absolute icon-upload top-1/2 left-1/2 hidden text-4xl -translate-x-2/4 -translate-y-2/4 " ></i>
              </div>
            </div>
            <div className="lg:col-span-4  lg:order-2 md:col-span-2 md:row-span-1 md:order-3 md:pt-2">
              <div className="justify-center w-full flex lg:justify-start md:justify-center overflow-hidden">
                <span className="text-xl font-bold text-black">
                  {user.getUserInfor?.name}
                </span>
              </div>
              <div className="justify-center w-full flex lg:justify-start md:justify-center">
                <img src={userIcon} alt="User Icon" className="h-4 mt-1 " />
                <span className="ml-2 text-sm" style={{ marginTop: "2px" }}>
                  {user.getUserInfor?.roleName}
                </span>
                {/* <button
                  onClick={() =>
                    handleEdit({
                      permissionRequest:
                        user.getUserInfor?.userRoles?.role.name,
                    })
                  }
                >
                  <img
                    src={editIcon}
                    alt="edit Icon"
                    className="h-4 mt-1 ml-2 cursor-pointer"
                  />
                </button> */}
                {/* {ModalForm()} */}
              </div>
            </div>
            <div className="lg:row-span-2  lg:order-3 lg:col-span-4 md:col-span-2 md:row-span-3 md:order-2">
              {/* <div className="w-full flex py-4 flex-wrap md:pt-0 lg:pt-2 justify-center md:justify-start">
                <div className="border-dotted border-2 border-yellow-500 rounded-xl mr-4  text-center mb-2 lg:w-36 md:w-32 mx-2 w-2/5">
                  <div className="flex p-4 relative ">
                    <div className="arrow">
                      <div className="head border-b-yellow-500"></div>
                      <div className="tail border-yellow-500"></div>
                    </div>
                    <div className="lg:text-lg md:text-sm text-base text-yellow-500 mx-auto">
                      <p>Phòng trọ</p>
                      <p>
                        300 <span className="lg:text-sm md:text-xs">phòng</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-dotted border-2 border-red-600 rounded-xl mr-4 text-center mb-2  lg:w-36 md:w-32  mx-2 w-2/5">
                  <div className="flex p-4 relative ">
                    <div className="arrow ">
                      <div className="head border-b-red-500 "></div>
                      <div className="tail border-red-500 "></div>
                    </div>
                    <div className="lg:text-lg md:text-sm text-base text-red-600 mx-auto">
                      <p>Đã cho thuê</p>
                      <p>
                        300 <span className="lg:text-sm md:text-xs">phòng</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-dotted border-2 border-green-500 rounded-xl mr-4 text-center mb-2  lg:w-36 md:w-32  mx-2 w-2/5">
                  <div className="flex p-4 relative ">
                    <div className="arrow arrow-down">
                      <div className="head border-b-green-500 "></div>
                      <div className="tail border-green-500 "></div>
                    </div>
                    <div className="lg:text-lg md:text-sm  text-base text-green-500 mx-auto">
                      <p>Phòng trống</p>
                      <p>
                        300 <span className="lg:text-sm md:text-xs">phòng</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-dotted border-2 border-blue-500 rounded-xl text-center mb-2  lg:w-36 md:w-32  mx-2 w-2/5">
                  <div className="flex p-4 relative ">
                    <div className="arrow">
                      <div className="head border-b-blue-500 "></div>
                      <div className="tail border-blue-500 "></div>
                    </div>
                    <div className="lg:text-lg md:text-sm text-base text-blue-500 mx-auto">
                      <p>Tòa nhà</p>
                      <p>
                        300 <span className="lg:text-sm md:text-xs">phòng</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="rounded-xl form-profile">
            <Tabs activeKey={keyTab} onChange={(e) => set_keyTab(e)}>
              <TabPane tab={<span id={'tab-profile'}>{t("columns.admin.profile.My Profile")}</span>} key="1">
                <Form
                  idSubmit={'submit-change-user-profile'}
                  className="intro-x w-full"
                  columns={ColumnProfile({ t })}
                  textSubmit={t("columns.admin.profile.Save")}
                  handSubmit={submitChangeProfile}
                  values={profile}
                />
              </TabPane>
              <TabPane tab={<span id={'tab-password'}>{t("columns.admin.profile.Password")}</span>} className="form-change-pass " key="2">
                <p className="text-lg font-bold">
                  {t("columns.admin.changePass.Change Password")}
                </p>
                <p className="mt-1 mb-6">
                  {t("columns.admin.changePass.Please Enter Pass")}
                </p>
                <Form
                  idSubmit={'submit-change-password'}
                  className="intro-x w-full"
                  columns={ColumnChangePass({ t })}
                  textSubmit={t("columns.admin.changePass.Update")}
                  handSubmit={submitChangePass}
                />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Page;
