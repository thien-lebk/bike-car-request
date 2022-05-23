import axios from "axios";
import { routerLinks } from "utils";
import { Message } from "components";

export const UtilityRoomServices = {
  nameLink: "Room",
  get: async (params, id) => {
    try {
      const { data } = await axios.get(`${routerLinks(UtilityRoomServices.nameLink, "api")}/${id}/utilitys`, { params: params });
      return {
        data: data.data,
        count: data.total
      }
    } catch (e) {
      console.log("error", e);
      return {
        data: [],
        count: 0
      }
    }
  },
  post: async (values, id, t) => {
    try {
      const { data } = await axios.post(`${routerLinks(UtilityRoomServices.nameLink, "api")}/${id}/utility`, values);
      if (data.message) {
        Message.success(data.message);
      }
    } catch (error) {
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
    return true;
    }
  },
  put: async (body,  idRoom) => {
    try {
      body = {
        ...body,
        // id,
        // id:idRoom
      }
      console.log(body,idRoom,"service")
      const { data } = await axios.put(
        `${routerLinks(UtilityRoomServices.nameLink, "api")}/${idRoom}/utility`,
      body);
      if (data?.message) {
        Message.success(data?.message);
      }
    } catch ({response}) {
      console.log("first",response)
      if (response?.data?.message) Message.error(
        response.data.message,
      ); else Message.error(
        response,
      );
      return true;
    }

  },
  delete: async (values, id, t) => {
    try {
      const { data } = await axios.delete(`${routerLinks(UtilityRoomServices.nameLink, "api")}/${id}/utility`, { data: values });
      if (data.message) {
        Message.success(data.message);
      }
      return data;
    } catch (response) {
      if (response?.data?.message) Message.error(
        response.data.message,
      ); else Message.error(
        response,
      );
      return false;
    }
  },
}

