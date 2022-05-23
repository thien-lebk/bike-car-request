import axios from "axios";
import { Message } from "components";
import { routerLinks } from "utils";

export const ContentRoomServices = {
  nameLink: "Room",

  get: async (id) => {
    try {
      const { data } = await axios.get(`${routerLinks(ContentRoomServices.nameLink, "api")}/${id}/content` )
      return data.data;
    } catch (error) {
      console.log(error, "err");
    }
  },
  post: async (value, id) => {
    try {
      const { data } = await axios.post(`${routerLinks(ContentRoomServices.nameLink, "api")}/${id}/content`,value)
      if (data.message) {
        Message.success(data.message);
      }
      // console.log(id)
    } catch (error) {

      
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
    return false;
    }
  },
  put: async(body, id) => {
    try {

      const { data } = await axios.put(
        `${routerLinks(ContentRoomServices.nameLink, "api")}/${id}/content`,
        body
      )
      if (data?.message) {
        Message.success(data?.message);
      }
    } catch (error) {
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
    return false;
    }
  },
  delete: async(value,id) => {
    try {
      const { data } = await axios.delete(`${routerLinks(ContentRoomServices.nameLink, "api")}/${id}/content`,{data:value})
      if(data.message){
        Message.success(data.message)
      }
      return true;
    } catch (error) {
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
    return false;
    }
  },
}

