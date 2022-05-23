import { routerLinks } from "utils";
import axios from "axios";
import { Message } from "components";
const rules={
  nameLink:"Building",
  get:async (params,id) => {
    try {
      if(id) {
       const { data } = await axios.get(
         `${routerLinks(rules.nameLink, "api")}/${id}/utilities`,{params:params}
       )
       return {data:data.data,count:data.total};
     } return {data:[],count:0};
     } catch (response) {
      Message.userManagement.error('components.message.Fail',response.data?response.data.message:response.Message)
      return {data:[],count:0};
     }
  },
  post: async (value, buidingId) => {
    try {
      const { data } = await axios.post(`${routerLinks(rules.nameLink, "api")}/${buidingId}/utilities`, value)
      if (data.message) {
        Message.success(data.message);
      }
    } catch (error) {
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
    return false;
    }
  },
  put: async(body, id, buidingId) => {
    try {
      body = {
        ...body,
        id,
        buidingId
      }
      const { data } = await axios.put(
        `${routerLinks(rules.nameLink, "api")}/${buidingId}/utilities`,
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
  delete: async(value,idBuilding) => {
    try {
      const { data } = await axios.delete(`${routerLinks(rules.nameLink, "api")}/${idBuilding}/utilities`,{data:value})
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
export default rules;
