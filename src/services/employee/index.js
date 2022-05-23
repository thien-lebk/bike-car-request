import { routerLinks } from "utils";
import axios from "axios";
import { Message } from "components";
const employeeList={
  nameLink:"organization-user",
  get:async (params,id) => {
    try {
      if(id) {
        console.log("params",params)
       const { data } = await axios.get(
         `${routerLinks(employeeList.nameLink, "api")}/${id}/staffs`,{params:params}
       )
       return {data:data.data,count:data.total};
     } return {data:[],count:0};
     } catch (response) {
      Message.userManagement.error('components.message.Fail',response.data?response.data.message:response.Message)
      return {data:[],count:0};
     }
  },
  post: async (value,id, buidingId,t) => {
    try {
      const { data } = await axios.post(`${routerLinks(employeeList.nameLink, "api")}/${buidingId}/costs`,value)
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
        `${routerLinks(employeeList.nameLink, "api")}/${buidingId}/costs`,
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
      const { data } = await axios.delete(`${routerLinks(employeeList.nameLink, "api")}/${idBuilding}/costs`,{data:value})
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
export default employeeList;
