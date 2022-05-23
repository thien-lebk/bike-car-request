import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";

const CustomerService = {
  nameLink: "Room",
  getRent: async ({ params, roomId }) => {
    try {
      const { data } = await axios.get(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/customers-rent`,
        { params } ,
      )
      // console.log(data)
      return {
        data: data.data,
        count: data.total
      }
    } catch (response) {
      console.log(response, "err");
      return {
        data: [],
        count: 0
      }
    }
  },
  getDeposit: async ({ params, roomId }) => {
    try {
      const { data } = await axios.get(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/customers-deposit`,
        {  params }
      )
      return {
        data: data.data,
        count: data.total
      }
    } catch (response) {
      console.log(response, "err");
      return {
        data: [],
        count: 0
      }
    }
  },
  getDetail: async (id, idRoom) => {
    try {
      if (id) {
        const { data } = await axios.get(
          `${routerLinks(CustomerService.nameLink, "api")}/${idRoom}/customer/${id}`
        )
        return {
          data: data.data
        };
      }
    } catch (error) {
      console.log(error, "err");
    }
  },
  post: async ({ value, roomId, t }) => {
    try {
      value = {
        ...value,
        isDeposited: true,
        isRented: true,
        inforRenter: {
          customerRentStatus: "STAYING",
          rateCustomer: "string",
          dateIntoHome: "2022-03-14T02:30:54.112Z"
        },  document: [
          "string"
        ],

      }
      if (value?.jobSelect !== 'OTHER') {
        value.job = value?.jobSelect;
      }

      const { data } = await axios.post(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/customer`,
        value
      )
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch ({response}) {
      // Message.error(
      //   error?.data?.message,
      // )
      Message.error(
         response?.data?.message
      )
      return false;
    }
  },
  put: async ({ value, roomId, t }) => {
    try {
      value = {
        ...value,
        isDeposited: true,
        isRented: true,
        inforRenter: {
          customerRentStatus: "STAYING",
          rateCustomer: "string",
          dateIntoHome: "2022-03-14T02:30:54.112Z"
        },  document: [
          "string"
        ],

      }
      if (value?.jobSelect !== 'OTHER') {
        value.job = value?.jobSelect;
      }
      const { data } = await axios.put(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/customer`,
        value
      )
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch (err) {
      Message.error(
        err?.data?.message,
      )
      return false;
    }
  },
  rate: async ({ roomId, value }) => {
    try {
      const { data } = await axios.post(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/rate-customer`,   value)
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch (err) {
       Message.userManagement.error("components.message.Fail", err.data?.message)
      return false;
    }
  },
  changeKindRoom: async ({ roomId, status }) => {
    try {
      const { data } = await axios.put(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/status?status=${status}`)
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch (err) {
      await Message.userManagement.error("components.message.Fail", err.data?.message)
      return false;
    }
  },
  delete: async ({ roomId, value ,t}) => {
    try {
      const { data } = await axios.delete(
        `${routerLinks(CustomerService.nameLink, "api")}/${roomId}/customer`, {data:value}  )
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch (err) {
      Message.userManagement.error("components.message.Fail", err.data?.message)
      return false;
    }
  }
}
export default CustomerService;
