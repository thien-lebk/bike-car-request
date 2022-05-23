import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";

const Schedule={
    namelink:"Room",
    get:async(params,id)=>{
        try{
            if(id){

                const {data}=await axios.get(`${routerLinks(Schedule.namelink,"api")}/${id}/schedules`,{params})
                return{
                    data:data.data,
                    count:data.total
                }
            }return{
                data:[],
                count:0
            }
        }catch(response){
            console.log(response, "err");
            return{
                data:[],
                count:0
            }
        }
    },
    post:async(values,id)=>{
        try{

            values={...values,id:0,appointmentTime: new Date(values.appointmentTime).toUTCString()}
            const  {data} =await axios.post(`${routerLinks(Schedule.namelink,"api")}/${id}/schedule`,values)
            if(data.message){Message.success(data.message)}
            return data.data;
        }catch(err){
            console.log(err);
            Message.userManagement.error("components.message.Fail",err.data?.message)
            return false;
        }
    },
    put:async(value,id,idroom)=>{
        try{
            value={...value,id:id,appointmentTime: new Date(value.appointmentTime).toUTCString()}
            const {data}=await axios.put(`${routerLinks(Schedule.namelink,"api")}/${idroom}/schedule`,value)
            if (data.message) Message.success(data.message);
            return data;
        }catch(err){
            Message.userManagement.error("components.message.Fail",err.data?.message)
            return false;
        }
    },
    delete:async({roomId,value,setReloadTable})=>{
        try{
            const {data}=await axios.delete(`${routerLinks(Schedule.namelink,"api")}/${roomId}/schedule`,{data:value})
            if (data.message) {Message.success(data.message);setReloadTable(true)}
            return data;
        }catch(err){
            Message.userManagement.error("components.message.Fail",err.data?.message)
            return false;
        }
    }
}
export default Schedule;
