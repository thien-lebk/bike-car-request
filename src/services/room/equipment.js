import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";

const Equipment={
    nameLink:"Room",
    get:async({params, roomId})=>{
        try{
            const { data } = await axios.get(
                `${routerLinks(Equipment.nameLink, "api")}/${roomId}/suppliess`,
                { params }
              )
              return {
                data: data.data,
                count: data.total
              }
        }catch(response){
            console.log(response, "err");
            return{
                data:[],
                count:0
            }
        }
    },
    post:async({value,roomId, t})=>{
        try{
            value={...value,id:0}
              const { data } = await axios.post(
                `${routerLinks(Equipment.nameLink, "api")}/${roomId}/supplies`,
                value
              )
              if (data?.message) {
                Message.success(data?.message);
              }
              return true;
        }catch(error){
            Message.error(
                error?.data?.message,
              )
            return false;
        }
    },
    put:async({value,roomId,t})=>{
        try{
              const { data } = await axios.put(
                `${routerLinks(Equipment.nameLink, "api")}/${roomId}/supplies`,
                value
              )
              if (data?.message) {
                Message.success(data?.message);
              }
              return true;
        }catch(err){
            Message.error(
                err?.data?.message,
              )
            return false;
        }
    },
    delete:async({roomId,value})=>{
        try{
            const { data } = await axios.delete(
                `${routerLinks(Equipment.nameLink, "api")}/${roomId}/supplies`,{data:value}              )
              if (data?.message) {
                Message.success(data?.message);
              }
              return true;
        }catch(err){
            Message.userManagement.error("components.message.Fail",err.data?.message)
            return false;
        }
    }
}
export default Equipment;
