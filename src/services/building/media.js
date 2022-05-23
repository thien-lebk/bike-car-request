import axios from "axios";
import { routerLinks } from "utils";
import { Message } from "components";

const buildingMedias = {
  nameLink: "Building",
  putMediaAvatar: async (id) => {
    try {
      const { data } = await axios.put(
        `${routerLinks(buildingMedias.nameLink, "api")}/media/${id}/avatar`,
      )
      if (data.message) {
        Message.success(data.message)
      }
      return data;
    } catch ({response}) {
      Message.userManagement.error('components.message.Fail', response.data.message)
    }
  },
  deleteMedia: async (id) => {
    try {
      const {data}= await axios.delete(
        `${routerLinks(buildingMedias.nameLink, "api")}/media/${id}`,
      )
      if (data.message) {
        Message.success(data.message)
      }
      return data;
    } catch ({response}) {
      Message.userManagement.error('components.message.Fail', response.data.message)

    return false;
    }
  },
};

export default buildingMedias;
