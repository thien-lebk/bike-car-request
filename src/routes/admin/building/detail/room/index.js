import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./index.less";
import { useAuth } from "global";
import { HookDataTable } from "hooks";
import {  ColumnRoomList } from "columns/building/room";
import { useNavigate, useLocation } from "react-router-dom";
import { RoomService, } from "services/room";
// import { formatCurrency, routerLinks } from "utils"


const RoomList = ({ isLoading, setIsLoading, idBuilding, key,permissions   }) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {formatDate} = useAuth();

  const initFunction = useCallback(async () => {
    if (!mount) {
      setMount(true);
    }
  }, [mount]);

  // console.log(permissions)
  useEffect(() => {
    initFunction();
  }, [initFunction]);

  useEffect(() => {
    if (idBuilding && key.toString() === '7') {
      handleRoomListChange()
    }
  }, [key, idBuilding]);



  // const createRoom = async (params, id) => {
  //   params = { ...params, buildingId: idBuilding }
  //   const data = await RoomService.roomManagement.createRoom(params);
  //   return data;
  // }
  // const updateRoom = async (params, id) => {
  //   params = { ...params, buildingId: idBuilding }
  //   const data = await RoomService.roomManagement.updateRoom(params, id, t);
  //   return data;
  // }
  const getBuildingRoomList = async (params, id) => {
    const { data, count } = await RoomService.roomManagement.getBuildingRoomList(
      params,
      id,
      idBuilding
    );
    return { data: data, count: count };
  };
  //Form add / update room

  const [handleRoomListChange, RoomListTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    onRow: (record) => ({
      onDoubleClick: async (event) => navigate(`${location.pathname}/detail-room-${record.id}`)
    }),
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: getBuildingRoomList,
    id: () => idBuilding,
    save: false,
    columns: ColumnRoomList({
      t,
      formatDate,
      handleEdit: (record) => navigate(`${location.pathname}/edit-room-${record.id}`),
      handleDelete: async (record) => await RoomService.roomManagement.deleteRoom(record.id, t) && handleRoomListChange(),
      location,
      permissions,
    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
        {permissions?.THEM_QUAN_LY_DS_PHONG_TOA_NHA && 
          <button
            className="border-2 border-blue-500 text-blue-500 px-5 py-1 rounded-xl hover:bg-gray-200 inline-flex items-center mr-2 w-36"
          >
            <i className="las la-file-export m-0 p-0 text-3xl"></i> {t("routes.admin.Layout.Export")}
          </button>
        }
        {permissions?.THEM_QUAN_LY_DS_PHONG_TOA_NHA && 

          <button
            className=" bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => navigate(`${location.pathname}/creating-room`)}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
        }
        </div>
      </Fragment>
    ), 
  });
  return [handleRoomListChange,
    () => (
      <div>
        {permissions?.XEM_QUAN_LY_DS_PHONG_TOA_NHA &&  RoomListTable()}
      </div>
    ),
  ];
};

export default RoomList;

