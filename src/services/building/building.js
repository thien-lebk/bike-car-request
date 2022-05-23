import axios from "axios";
import { routerLinks } from "utils";
import { Message } from "components";

const buildService = {
  nameLink: "Building",
  buildingManagement: {
    getBuildingList: async (params) => {

      try{
        const {data} = await axios.get(`${routerLinks(buildService.nameLink,"api")}`,{params:params})
        return {
          data: data.data,
          count: data.total
        };
      }catch(e){
        console.log("error",e)
        return {
          data:[],
          count:0
        }
      }

    },
    getBuildingDetail: async (id) => {
      try{
        const {data}= await axios.get(`${routerLinks(buildService.nameLink,"api")}/${id}`,'accept: */*')
        data.data.rentedRooms = data.data.rentedRooms + data.data.almostExpiredRooms + data.data.depositedRooms;
        return data;
      }catch({response}){
        console.log("error",response);
      }
    },
    getBuildingMedia: async (id) => {
      try{
        const {data}= await axios.get(`${routerLinks(buildService.nameLink,"api")}/${id}/media`)
        return data;
      }catch(e){
        console.log("error",e);
      }
    },
    getBuildingInfo: async (id) => {
      try {
        const { data } = await axios.get(`${routerLinks(buildService.nameLink, "api")}/${id}`)
        const generalInfo = {
          name: data.data.name,
          type: data.data.type,
          address: data.data.address,
          numRooms: data.data.totalRooms,

          availableRooms:data.data.emptyRooms,
          rentedRooms:data.data.rentedRooms + data.data.almostExpiredRooms + data.data.depositedRooms,
          media:data.data.media
        }
        return {
          generalInfo: generalInfo,
          costInfo: data.data.costs,
          utilitiesInfo: data.data.utilities,
          buildingManager:data.data.buildingManagers
        };
      } catch (e) {
        console.log("error", e);
      }
    },
    updateBuildingUtilities: async (id, body) => {
      try {
        const { data } = await axios.post(`${routerLinks(buildService.nameLink, "api")}/${id}/utilities`, body);
        if (data.message) {
          Message.success(data.message);
        }
      } catch (e) {
        console.log("error", e);
        return false;
      }
    },
    createBuilding: async (params) => {
      try{
        const {data}=await axios.post(`${routerLinks(buildService.nameLink,"api")}`,params)
        if(data.message){
          Message.success(data.message)
        }
        return data;
      }catch({response}){
        await Message.userManagement.error("components.message.Fail",response.data.message)
      }
      return null;
    },
    updateBuilding: async (params,id ,t) => {
      try{
        params = {...params,id}
        if(params.type ==='Nhà trọ'){
          params.type = 'MOTEL';
        } else if(params.type ==='Căn hộ dịch vụ'){
          params.type = 'CHDV';
        } else if(params.type ==='Khách sạn'){
          params.type = 'HOTEL';
        }
        const {data}=await axios.put(`${routerLinks(buildService.nameLink,"api")}`,params)
        if(data.message){
          Message.success(data.message)
        }
        return data;
      }catch({response}){
        await Message.userManagement.error("components.message.Fail",response.data.message)
        return false;
      }
    },
    deleteBuilding: async (id,t,setReloadTable) => {
      try{
        const { data } = await axios.delete(
          `${routerLinks(buildService.nameLink, "api")}/${id}`,'accept: */*'
        );
        if (data.message) {
          Message.success(data.message);
          setReloadTable(true)
        }
        return data;
      }catch({response}){
        await Message.error(
          response.data.message,
        );
      }
      return { id };
    },
    deleteMedia: async( id) => {
      try {
         await axios.delete(
          `${routerLinks(buildService.nameLink, "api")}/media/${id}`,
        )
      } catch (error) {
        console.log(error, "err");
      }
    },
  },

};


export default buildService;
