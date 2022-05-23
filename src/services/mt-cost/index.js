import axios from "axios";

import { routerLinks } from "utils";

export const CostServices = {
  nameLink: "Cost",
    
  get: async () => {
    try {
      const { data } = await axios.get(`${routerLinks(CostServices.nameLink, "api")}`)
      return data;
    } catch (error) {
        console.log(error, "err");
      return false;
    }
  }
}
  
