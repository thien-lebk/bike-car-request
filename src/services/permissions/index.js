import axios from "axios";
import { routerLinks } from "utils";

export const PermissionsService = {
  nameLink: "Permissions",
  nameLinkMenu: "MenuPermissions",
  nameLinkMenu_Permission :"menu-permission",

  get: async () => {
    const { data } = await axios.get(`${routerLinks(PermissionsService.nameLink, "api")}/get-all`,);
    return data.data;
  },

  getMenu: async (pageCode) => {
    const { data } = await axios.get(`${routerLinks(PermissionsService.nameLinkMenu, "api")}/${pageCode}`,);
    return data;
  },
  get_Permission : async (pageCode)=>{
    try{
      const { data} = await axios.get(`${routerLinks(PermissionsService.nameLinkMenu_Permission,"api")}/${pageCode}`,);
      return data;
    }catch({res}){
      console.log("error",res.data.message)
    }
  }
};
