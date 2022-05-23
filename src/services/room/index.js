import axios from "axios";

import { routerLinks } from "utils";
import { Message } from "components";
import ScheduleRoomService from "./schedule";
import ExpenseRoomService from "./expense"
import EquipmentRoomService from "./equipment";
import PaymentHistoryRoomService from "./payment_history";
import CustomerService from "./customer";
import statistic from "./statistic";
import { UtilityRoomServices } from "./utility";
import roomMedias from "./media"
const RoomService = {
  nameLink: "Room",
  roomManagement: {
    getBuildingRoomList: async (params, id, idBuilding) => {
      try {
        // console.log("getBuildingRoomList: async",idBuilding)
        if (idBuilding) {
          const { data } = await axios.get(
            `${routerLinks(RoomService.nameLink, "api")}/room-of-building/${idBuilding}`,
            { params }
            )
          return {
            data: data.data,
            count: data.total
          }
        } else {
          return {
            data: [],
            count: 0
          }
        }
      } catch (error) {
        console.log(error, "err");
      }
    },
    createRoom: async (value) => {
      try {
        if (value) {
          value = { ...value, status: "EMPTY", }
          const { data } = await axios.post(
            `${routerLinks(RoomService.nameLink, "api")}`, value
          )
          if (data.message) {
            Message.success(data.message)
          }
          return data;
        }
      } catch ({ response }) {
        Message.userManagement.error("components.message.Fail", response.data?.message)
        // if(response.data?statusCode==="409") return true;
        return false;
      }
    },
    getRoomDetail: async (id) => {
      try {
        if (id) {
          const { data } = await axios.get(
            `${routerLinks(RoomService.nameLink, "api")}/${id}`
          )
          if (data.data.type === 'ONE_BEDROOM') {
            data.data.type = 'CHDV 1 phòng ngủ';
          } else if (data.data.type === 'TWO_BEDROOMS') {
            data.data.type = 'Chdv 2 phòng ngủ';
          } else if (data.data.type === 'THREE_BEDROOMS') {
            data.data.type = 'Chdv 3 phòng ngủ';
          } else if (data.data.type === 'MEZZANINE_ROOM') {
            data.data.type = 'Phòng có gác';
          } else if (data.data.type === 'STUDIO_ROOM') {
            data.data.type = 'Phòng studio';
          } else if (data.data.type === 'DUPLEX_ROOM') {
            data.data.type = 'Chdv duplex';
          }
          // console.log(data)
          data.data.acreage = Math.round(data.data.acreage);
          data.data.bonus = Math.round(data.data.bonus);
          data.data.deposit = Math.round(data.data.deposit);
          data.data.price = Math.round(data.data.price);

          return data
        }
      } catch (error) {
        console.log(error, "err");
      }
    },
    deletePhotoRoom: async (values, t) => {
      try {
        const { data } = await axios.delete(
          `${routerLinks(RoomService.nameLink, "api")}/media/${values}`, { data: values }
        );
        if (data.message) {
          Message.success(data.message)
        }
      } catch ({ response }) {
        Message.error(
          t("components.message.Fail"),
          response?.data?.message,
          t("components.message.Close")
        );
      }
    },
    updateRoom: async (params, id, t) => {
      try {
        if (params) {
          if (params.type === 'Chdv 1 phòng ngủ') {
            params.type = 'ONE_BEDROOM';
          } else if (params.type === 'Chdv 2 phòng ngủ') {
            params.type = 'TWO_BEDROOMS';
          } else if (params.type === 'Chdv 3 phòng ngủ') {
            params.type = 'THREE_BEDROOMS';
          } else if (params.type === 'Phòng có gác') {
            params.type = 'MEZZANINE_ROOM';
          } else if (params.type === 'Phòng studio') {
            params.type = 'STUDIO_ROOM';
          } else if (params.type === 'Chdv duplex') {
            params.type = 'DUPLEX_ROOM';
          }
          const { data } = await axios.put(
            `${routerLinks(RoomService.nameLink, "api")}/${id}`, params
          )
          if (data.message) {
            Message.success(data.message)
          }
        }
      } catch ({ response }) {
        Message.userManagement.error("components.message.Fail", response.data?.message);
        return false;

      }
    },

    deleteRoom: async (values, t) => {
      try {
        const { data } = await axios.delete(
          `${routerLinks(RoomService.nameLink, "api")}/${values}`, { data: values }
        );
        if (data.message) {
          Message.success(data.message)

        }
        return true;
      } catch ({ response }) {
        Message.error(
          t("components.message.Fail"),
          response?.data?.message,
          t("components.message.Close")
        );
        return false;
      }
    },

    deleteRoomRule: async (values, t,) => {
      try {
        const { data } = await axios.delete(
          `${routerLinks(RoomService.nameLink, "api")}/${values.roomId}/rule`, { data: values }
        );
        if (data.message) {
          Message.success(data.message)
        }
        return data;
      } catch ({ response }) {
        Message.error(
          t("components.message.Fail"),
          response?.data?.message,
          t("components.message.Close")
        );
        return false;
      }
    },



    getRoomRules: async (id, params) => {
      try {
        if (id) {
          const { data } = await axios.get(
            `${routerLinks(RoomService.nameLink, "api")}/${id}/list-room-rule`,{ params }
          )
          return {
            data: data.data,
            count: data.total
          };
        }
      } catch (response) {
        console.log(response);
        Message.userManagement.error('components.message.Fail', response.data.message)
        return { data: [], count: 0 }
      }

    },

    addRoomRules: async (body, roomId) => {
      try {
        // console.log(body);
        const { data } = await axios.post(
          `${routerLinks(RoomService.nameLink, "api")}/${roomId}/rule`,
          body
        )
        if (data.message) {
          Message.success(data.message);
        }
        console.log(data, 'add room rules');
      } catch (error) {
        console.log(error, "err");
      }
    },
    updateRoomRules: async (body, id, roomId) => {
      try {
        body = { ...body, id, roomId }
        const { data } = await axios.put(
          `${routerLinks(RoomService.nameLink, "api")}/${id}/rule`,
          body
        )
        if (data.message) {
          Message.success(data.message);
        }
        console.log(data, 'edit cost');
      } catch (error) {
        console.log(error, "err");
      }
    },
    deleteRoomRules: async (body, id, t) => {
      try {
        body = {
          ...body,
        }
        const { data } = await axios.delete(
          `${routerLinks(RoomService.nameLink, "api")}/${id}/rules`,
          { data: body }
        )
        if (data.message) {
          Message.success(data.message)
        }
      } catch (error) {
        console.log(error, "err");
      }
    },
  }
}
export { ScheduleRoomService, RoomService, ExpenseRoomService, EquipmentRoomService, roomMedias, PaymentHistoryRoomService, CustomerService, statistic, UtilityRoomServices };

