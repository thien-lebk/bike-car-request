import axios from "axios";
import { Message } from "components";

import { routerLinks } from "utils";

export const UserRoleService = {
  nameLink: "UserRole",
  requestRole: async (values) => {
    try {
      const param = {roleId:values.permissionRequest}
      const { data } = await axios.post(
        `${routerLinks(UserRoleService.nameLink, "api")}`,
        param
      );
        Message.success(
        data.message,
      );
    } catch ({ response }) {
        Message.error(
        response.data.message,
        // t("routes.auth.register.Close")
      );
      return null;
    }
  },

  updateRequestRole: async(responseMessage, params, t, setReloadTable) => {
    await axios.put(
      `${routerLinks(UserRoleService.nameLink, "api")}`,
      params
    ).then(
      (response) => {
        setReloadTable(true);
        Message.submitSuccess(responseMessage);
    })
    .catch((error) => {
      Message.error(
        error.response.data.message
      );
    })
  },
  getById: async (id) => {
    // const { data } = await axios.get(
    //   `${routerLinks(UserService.nameLink, "api")}/${id}`
    // );
    // data.data.mtRoleCode = data.data.userRole?.mtRole?.code;
    // data.data.wardId = data.data.ward?.id;
    // data.data.departmentId = data.data.department?.id;
    // return data;
    return { data: { id } };
  },
  post: async (values) => {
    // const { data } = await axios.post(
    //   routerLinks(UserService.nameLink, "api"),
    //   values
    // );
    // if (data.message) Message.success(data.message);
    // return data;
    return values;
  },
  put: async (values, id) => {
    // const { data } = await axios.put(
    //   `${routerLinks(UserService.nameLink, "api")}/${id}`,
    //   values
    // );
    // if (data.message) Message.success(data.message);
    // return data;
    return values;
  },
  delete: async (id) => {
    // const { data } = await axios.delete(
    //   `${routerLinks(UserService.nameLink, "api")}/${id}`
    // );
    // if (data.message) Message.success(data.message);
    // return data;
    return { id };
  },
  getUserRole:async(idbuilding,idUser)=>{
    try{
      const { data } = await axios.get(`${routerLinks(UserRoleService.nameLink, "api")}/building/${idbuilding}/${idUser}`);
      return data;
    }catch({response}){
      console.log(response);
      return false;
    }
  },
  deleteRolesUser:async(value)=>{
    try {
      const { data } = await axios.delete(
        `${routerLinks(UserRoleService.nameLink, "api")}`, {data:{userRoleId:value}}  )
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch ({ response }) {
       Message.userManagement.error("components.message.Fail", response.data?.message)
      return false;
    }
  }
};
