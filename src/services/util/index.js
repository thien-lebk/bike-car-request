import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";

export const UtilServices = {
  nameLink: "Util",

  postUpload: async (value, id, config = {}) => {
    const formData = new FormData();
    for (let key in value) {
      formData.append(key, value[key])
    }
    try {
      const { data } = await axios.post(`${routerLinks(UtilServices.nameLink, "api")}/${id}/upload`, formData, config)
      return {data: {...data.data,thumb:data.data.name, path:data.data.name,createdDate: data.data.updatedAt, fileName: data.data.name.split('/')[data.data.name.split('/').length - 1], size: data.data?.updatedUser?.name}};
    } catch ({response}) {
      Message.error(
        response?.data?.message,
      )}
  },
  getMediaList: async (category, id,filterParam,setIsLoading) => {
    try{
      const rawSearch = {page:0,perPage:0,filter:filterParam?filterParam:''};
      const params = Object.keys(rawSearch)
    .map(key => `${key}=${rawSearch[key]}`)
    .join('&');

      let { data } = await axios.get(
        `${routerLinks(UtilServices.nameLink, "api")}/${id}/media?category=${category}&${params}`,
      )
      data = data?.data;

        data = data.reverse().map(ele => {
          return {...ele,thumb:ele.name, path:ele.name,createdDate: ele.updatedAt, fileName: ele.name.split('/')[ele.name.split('/').length - 1], size: ele.updatedUser?.name}
        });

      return data;
    } catch (err) {
      Message.error(
        err?.data?.message,
      )}
  }
}

