import axios from "axios";
import { routerLinks } from "utils";
import { Message } from "components";

const roomMedias = {
  nameLink: "Room",
  putMediaAvatar: async (id) => {
    try {
      const { data } = await axios.put(
        `${routerLinks(roomMedias.nameLink, "api")}/media/${id}/avatar`,
      )
    //   console.log(data)
      if (data.message) {
        Message.success(data.message)
      }
      return data;
    } catch (error) {
      console.log(error, "err");
    }
  },
  deleteMedia: async (id) => {
    try {
       await axios.delete(
        `${routerLinks(roomMedias.nameLink, "api")}/media/${id}`,
      )
    } catch (error) {
      console.log(error, "err");
    }
  },
};

export default roomMedias;
