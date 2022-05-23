import axios from "axios";

import { routerLinks } from "utils";

export const SuppliesService = {
  nameLink: "Supplies",
    
  get: async () => {
    try {
      const { data } = await axios.get(`${routerLinks(SuppliesService.nameLink, "api")}`);
      return data.data;
    } catch (error) {
        console.log(error, "err");
    }
  }
}
  
