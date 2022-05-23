import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";
// import {useAuth} from "global";
// import { useTranslation } from "react-i18next";
import { keyRefreshToken, keyToken } from "../../variable";
import {listVehicle, menu, userInfo, listRequest} from "./data"
export const UserService = {
  nameLink: "User",
  login: async (values) => {
    try {
      // const { data } = await axios.post(
      //   `${routerLinks(UserService.nameLink, "api")}/sign-in`,
      //   values
      // );
     const data ={
      "statusCode": 201,
      "message": "Đăng nhập thành công.",
      "data": {
          "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYWlzb241cXRAZ21haWwuY29tIiwiaWF0IjoxNjUyODkzNDUxLCJleHAiOjE2NTI5MDQyNTF9.5sV6-ASCcsbDD-7iYEnSNOp8ZNz_8m56WEBNHdNzs70",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRoYWlzb241cXRAZ21haWwuY29tIiwiaWF0IjoxNjUyODkzNDUxLCJleHAiOjE2NTI5Nzk4NTF9.ttcqFkej95fi3q61Q2mSy5Y5o-2KKYg4y0bLAfEsmzE",
          "getUserInfor": userInfo,
          "menu": menu,
          "listVehicle":listVehicle,
          "listRequest":listRequest,
      }
  }
      data.data.token = data.data.accessToken;
      // console.log(data.data.token);
      Message.success("Đăng nhập thành công");
      return data;
    } catch ({ response }) {
      Message.error(response.data.message);
      return null;
    }
  },
  registerUser: async (values, setLoading, t) => {
    setLoading(false);
    try {
      const { data } = await axios.post(
        `${routerLinks(UserService.nameLink, "api")}/register`,
        values
      );
      return data;
    } catch ({ response }) {
      Message.error(
        response.data.message,
      );
      return null;
    }
  },
  getInformation: async () => {
    try {
      const { data } = await axios.get(`${routerLinks(UserService.nameLink, "api")}/information`);
      return data;
    } catch ({ response }) {
      Message.error(response.data.message);
      return null;
    }
  },
  logout: async () => {
    const { data } = await axios.post(
      `${routerLinks(UserService.nameLink, "api")}/log-out`
    );
    return data;
  },
  refreshToken: async () => {
    const refreshToken = localStorage.getItem(keyRefreshToken);
    if (refreshToken) {
      const { data } = await axios.post(
        `${routerLinks(UserService.nameLink, "api")}/refresh-token`,
        {}, { params: { refreshToken: "Bearer " + refreshToken } }
      );
      axios.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken;
      localStorage.setItem(keyToken, data.accessToken);
      return "Bearer " + data.accessToken;
    }
    return null
  },
  forgotPass: async (values) => {
    const { data } = await axios.post(
      `${routerLinks(UserService.nameLink, "api")}/forgot-password`,
      values
    );
    return data;
  },
  sendOtp: async (values) => {
    const { data } = await axios.put(
      `${routerLinks(UserService.nameLink, "api")}/verify-forgot-password`,
      values
    );
    return data;
  },
  updatePass: async (values) => {
    const { data } = await axios.put(
      `${routerLinks(UserService.nameLink, "api")}/update-password`,
      values
    );
    return data;
  },
  updateUserProfile: async (values) => {
    const { data } = await axios.put(
      `${routerLinks(UserService.nameLink, "api")}`,
      values
    );
    return data;
  },
  postProfileImage: async (file) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('category', 'USER');

    const { data } = await axios.post(
      `${routerLinks(UserService.nameLink, "api")}/profile-image`,
      bodyFormData
    );
    return data;
  },
  resendEmail: async (emailResend) => {
    const { data } = await axios.put(
      `${routerLinks(
        UserService.nameLink,
        "api"
      )}/resend-email-for-create/{email}?email=${emailResend}`,
      "resend confirmation email"
    );
    return data;
  },
  userManagement: {
    delete: async (id, t, setReloadTable) => {
      try {
        const { data } = await axios.delete(
          `${routerLinks(UserService.nameLink, "api")}/${id}`, 'accept: */*'
        );
        if (data.message) {
          Message.success(data.message);
          setReloadTable(true)
        }
        return data;
      } catch ({ response }) {
        Message.error(
          response.data.message,
        );
      }
      return { id };
    },

    getUserList: async (params, filterPageType) => {
      try {
        if (filterPageType !== 'Tất cả') {
          params = { ...params, filter: { isAdmin: filterPageType === 'Chủ nhà' } }
        }
        const  {data} = await axios.get(
          `${routerLinks(UserService.nameLink, "api")}/get-list`, { params: params });
        return {data:data.data, count: data.total};
      } catch (e) {
        console.log(e)
        return {
          data: [],
          count: 0
        }
      }

    },

    GetUserDetail: async (id, t) => {
      try {
        const { data } = await axios.get(`${routerLinks(UserService.nameLink, "api")}/${id}`, 'accept: */*')
        if (data.message) {
        }
        return data;
      } catch (response) {
        Message.error(t("failed to edit user detail!"))
      }
    },
    updateUserInfo: async (values, id, t) => {
      try {
        const { data } = await axios.put(`${routerLinks(UserService.nameLink, "api")}/admin-update/${id}`, values)

        if (data.message) {
          Message.success(data.message);
        }
        return data;
      } catch (err) {
        Message.error(
          err?.response?.data?.message,
        )
        return false;
      }
      // return null
    },
    createUser: async (values, parentID) => {
      try {
        const { data } = await axios.post(`${routerLinks(UserService.nameLink, "api")}/admin-add`, values)
        if (data.message) {
          Message.success(data.message)
        }
        return data;
      } catch ({ response }) {
        Message.userManagement.error("components.message.Fail", response.data.message)
      }
      return null;
    },

    postUploadAvatar: async (value) => {
      const formData = new FormData();
      for (let key in value) {
        formData.append(key, value[key])
      }
      try {
        const { data } = await axios.post(`${routerLinks(UserService.nameLink, "api")}/profile-image`, formData)
        return data.data;
      } catch (error) {
        console.log(error, "err");
      }
    }
  }
};
