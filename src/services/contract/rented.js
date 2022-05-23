import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";

const Deposit={
    nameLink:"export",
    nameLink_Rental: "rental-contract",

    get:async({params, roomId})=>{
        try{
            const { data } = await axios.get(
                `${routerLinks(Deposit.nameLink, "api")}/${roomId}/suppliess`,
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
    post:async({objContract,roomId, t})=>{
        try{
            // console.log("service Deposit",objContract)
              const { data } = await axios.post(
                `${routerLinks(Deposit.nameLink, "api")}/export-contract-pdf`,
                objContract
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
                `${routerLinks(Deposit.nameLink, "api")}/${roomId}/supplies`,
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
                `${routerLinks(Deposit.nameLink, "api")}/${roomId}/supplies`,{data:value}              )
              if (data?.message) {
                Message.success(data?.message);
              }
              return true;
        }catch(err){
            Message.userManagement.error("components.message.Fail",err.data?.message)
            return false;
        }
    },

    postExport:async({objContract,roomId, t})=>{
      try{
            const  {data}  = await axios.post(
              `${routerLinks(Deposit.nameLink, "api")}/export-contract-pdf`,
              objContract
            )
          var file=new Blob([data], {type: 'application/pdf'});
            var fileURL = URL.createObjectURL(file);
            return fileURL;
      }catch(error){
          Message.error(
              t("components.message.Fail"),
              error?.data?.message,
              t("components.message.Close")
            )
          return false;
      }
  },

  //get list rental contract
  getListRentalContract: async (params) => {
    try {
      const { data } = await axios.get(
        `${routerLinks(Deposit.nameLink_Rental, "api")}`,
        { params }
      )
      // console.log(data.data)
      return {
        data: data.data,
        count:data.total
      }
    } catch (response) {
      console.log(response, "err");
      return {
        data: [],
        count: 0
      }
    }
  },
  createDataRentalContract: async (value) => {
    try {
      const { data } = await axios.post(
        `${routerLinks(Deposit.nameLink_Rental, "api")}`,value)
      if(data.message){
        Message.success(data.success)
      }
    } catch (error) {
      console.log(error, "err");
      Message.error(
        error?.data?.message,
      )
      return false;
    }
  },
  //get list rental contract by id
  getRentalContractById: async (code) => {
    try {
      const { data } = await axios.get(
        `${routerLinks(Deposit.nameLink_Rental, "api")}/${code}`,
      )
      // console.log(data)
      return {
        data: data.data,
      }
    } catch (response) {
      console.log(response, "err");
      return {
        data: [],
        count: 0
      }
    }
  },

  postPreview:async({objContract,roomId, t})=>{
      try{
          // console.log("service Deposit",objContract)
            const  {data}  = await axios.post(
              `${routerLinks(Deposit.nameLink, "api")}/preview-contract-pdf`,
              objContract
            )
          // var file=new Blob([data], {type: 'application/pdf'});
          //   var fileURL = URL.createObjectURL(file);
            return data;
      }catch(error){
          Message.error(
              error?.data?.message,
            )
          return false;
      }
  },

  getRoomNumber:async(idBuilding)=>{
    try{
      const {data}=await axios.get(`${routerLinks("Room", "api")}/roomNumber/${idBuilding}`);
      return data;
    }catch(error){
      console.log("error",error);
      return false;
    }
  },

  // lessor sign contract

  lessorSignContract: async(code) => {
      try {
        // console.log("service Deposit",objContract)
        const { data } = await axios.post(
          `${routerLinks(Deposit.nameLink_Rental, "api")}/${code}/lessor-sign`,
        )
        if (data?.message) {
          Message.success(data?.message);
          return true;
        }
      } catch (error) {
        Message.error(
          error?.data?.message,
        )
        return false;
      }
  },

  getListDepositContractCodeRoom:async(roomId)=>{
    try {
      const {data}=await axios.get(`${routerLinks("deposit-contract","api")}/${roomId}/depositContract`)
      return data;
    } catch (error) {
      console.log("error",error)
      return false;
    }
  }
}
export default Deposit;
