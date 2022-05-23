import React, { useState, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { HookDataTable, HookModalForm } from "hooks";
import { ColumnUtil, ColumnSelectUtil, } from "columns/building";
import { ColumnUtilRoom } from "columns/building/room/Utility";
import { UtilityRoomServices } from "services/room";
import { UtilityServices } from "services/mt-utility";

const Utility = ({ formatDate, isLoading, setIsLoading, idBuilding, key, roomId ,permissions}) => {
  const { t } = useTranslation();
  const [editUtilForm, setEditUtilForm] = useState([])
  const [utilitiesList, setUtilitiesList] = useState([]);

  const getlistUtil = async () => {
    let res = await UtilityServices.get();
    setUtilitiesList(res.map((ele) => {
      return { ...ele, label: ele.description, value: ele.id };
    }));
  }


  useEffect(() => {
    if (roomId && key.toString() === '4') {
      getlistUtil();
      handleRoomUtilListChange();
    }
    // console.log(permissions)
  }, [key])


  useEffect(() => {
    if (Object.keys(editUtilForm).length !== 0) {
      handleEditSelectUtilForm(editUtilForm, true);
    }
  }, [editUtilForm, utilitiesList])

  const [handleEditUtilForm, UtilHookForm] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.room-info.Update room utilities")
          : t("routes.admin.room-info.Create room utilities");
    },
    isLoading,
    setIsLoading,
    idElement: "UtilForm",
    handleChange: async () => await handleRoomUtilListChange(),
    columns: ColumnUtil({
      t,
      formatDate,
    }),
    Post: async (values, id) => await UtilityRoomServices.post({ ...values, id: 0, utilityId: null, image: "string" }, roomId, t),
    Put: async (values, id,test,data) =>{
      console.log("first",values, id,test,data)
      return await UtilityRoomServices.put({ ...values, utilityId: 0,id:id ,image:"string"}, roomId, t)},
    widthModal: 650,
  },
  )

  const [handleEditSelectUtilForm, SelectUtilHookForm] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.room-info.Update room utilities from list")
          : t("routes.admin.room-info.Create room utilities from list");
    },
    isLoading,
    setIsLoading,
    idElement: "SelectUtilForm",
    handleChange: async () => {
      await handleRoomUtilListChange();
    },
    columns: ColumnSelectUtil({
      t,
      formatDate,
      utilitiesList,
      setEditUtilForm,
    }),
    Post: async (values, id) => await UtilityRoomServices.post({ ...values, id: 0, image: "string" }, roomId, t),
    Put: async (values, id) => await UtilityRoomServices.put({ ...values, utilityId: id }, roomId,idBuilding, t),
    widthModal: 650,
  })

  const [handleRoomUtilListChange, BuildingutilListTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params, id) => id && key.toString() === '4' ? await UtilityRoomServices.get(params, id) : { data: [], count: 0 },
    save: false,
    id: () => roomId,
    pageSizeOptions: [5, 10, 20],
    columns: ColumnUtilRoom({
      t,
      formatDate,
      handleEdit: (data) => data.master ? handleEditSelectUtilForm(data) : handleEditUtilForm(data),
      handleDelete: async (values) => await UtilityRoomServices.delete(values, roomId, t) && handleRoomUtilListChange(),
      permissions
    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          { permissions?.THEM_QUAN_LY_TIEN_ICH_PHONG &&
            <>
               <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditSelectUtilForm()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add from list")}
          </button>
          <button
            className="bg-blue-500 text-white px-5 ml-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditUtilForm()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
            </>
        }
        </div>

      </Fragment>
    ),
  });
  return [handleRoomUtilListChange,
    () => <Fragment>
      {permissions?.XEM_QUAN_LY_TIEN_ICH_PHONG && BuildingutilListTable() }
      { UtilHookForm()}
      {SelectUtilHookForm()}
    </Fragment>
  ]
}

export default Utility;
