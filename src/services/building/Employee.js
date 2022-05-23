import axios from "axios";
import { routerLinks } from "utils";
import { Message } from "components";

const BuildingEmployee = {
  nameLink: "entity-user-permission",
  get: async (id, params) => {
    try {
      const { data } = await axios.get(`${routerLinks(BuildingEmployee.nameLink, "api")}/${id}/staff`,
        { params });
      return {
        data: data.data,
        count: data.total
      }
    } catch ({ response }) {
      return {
        data: [],
        count: 0
      }
    }
  },
  getUserIDcard: async (id) => {
    try {
      const { data } = await axios.get(`${routerLinks("User", "api")}/id-card/${id}`);
      return data;
    } catch ({ response }) {
      console.log(response);
      return false;
    }
  },

  // put: async (item, id) => {
  //     try {
  //         const { data } = await axios.put(`${routerLinks(BuildingEmployee.nameLink, "api")}/${id}/staff`, item);
  //         if (data.message) Message.success(data.message);
  //         return data
  //     } catch ({ response }) {
  //         Message.userManagement.error('components.message.Fail', response.data.message)
  //         return false;
  //     }
  // },
  post: async (item) => {
    try {
      const { data } = await axios.post(`${routerLinks(BuildingEmployee.nameLink, "api")}/request`, item);
      if (data.message) Message.success(data.message);
      return data
    } catch ({ response }) {
      Message.userManagement.error('components.message.Fail', response.data.message)
      return false;
    }
  },

  delete: async (value) => {
    try {
      const { data } = await axios.delete(
        `${routerLinks(BuildingEmployee.nameLink, "api")}`, { data: { userPermissionId: value } })
      if (data?.message) {
        Message.success(data?.message);
      }
      return true;
    } catch ({ response }) {
      Message.userManagement.error("components.message.Fail", response.data?.message)
      return false;
    }
  },
  getJobs: async (params) => {
    try {
      const { data } = await axios.get(`${routerLinks(BuildingEmployee.nameLink, "api")}/jobs`,
        { params });
        console.log(12321, data.data.map(ele=>  {
          return {...ele,id:Math.random()}

        }));

      return {
        data:  data.data.map(ele=>  {
          return {...ele,id:Math.random()}

        }),
        count: data.total
      }
    } catch ({ response }) {
      return {
        data: [],
        count: 0
      }
    }
  },
  patchJobs: async (params) => {
    try {
      const { data } = await axios.patch(`${routerLinks(BuildingEmployee.nameLink, "api")}/jobs`,
        params );

        if (data?.message) {
          Message.success(data?.message);
        }
        return true;
    } catch ({ response }) {
      Message.userManagement.error("components.message.Fail", response.data?.message)
      return false;
    }
  },
  deleteJobs: async (params) => {
    try {
      const { data } = await axios.delete(`${routerLinks(BuildingEmployee.nameLink, "api")}/jobs`,
        {data:params} );

        if (data?.message) {
          Message.success(data?.message);
        }
        return true;
    } catch ({ response }) {
      Message.userManagement.error("components.message.Fail", response.data?.message)
      return false;
    }
  },
}
export default BuildingEmployee;
