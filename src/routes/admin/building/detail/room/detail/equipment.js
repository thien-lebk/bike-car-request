import React, { useState, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnRoomEquipments, ColumnSelectEquipment } from "columns/building/room";
import { SuppliesService } from "services/mt-supply";
import { EquipmentRoomService } from "services/room";

const Equipment = ({ isLoading, setIsLoading, roomId, key, permissions }) => {
  const { t } = useTranslation();
  const [editEquipmentForm, setEditEquipmentForm] = useState({});
  const [supplies, setSupplies] = useState([]);
  const [updateEquipmentDataTable, setUpdateEquipmentDataTable] =
    useState(false);

  useEffect(() => {
    if (Object.keys(editEquipmentForm).length !== 0)
      handleEditSelectEquipmentForm(editEquipmentForm, true);
    roomId && initTab();
    if (updateEquipmentDataTable) {
      setUpdateEquipmentDataTable(false);
      initTab();
    }

  }, [editEquipmentForm, updateEquipmentDataTable]);

  useEffect(() => {
    initTab()
  }, [key]);

  const initTab = async () => {
    if (key === '3') {
      const listSupplies = await SuppliesService.get();
      setSupplies(listSupplies.map(item => {
        return { ...item, label: item.service, value: item.id };
      }))
      handleChangeRoomEquipments()
    }
  }

  // console.log(supplies)
  const [handleEditSelectEquipmentForm, SelectEquipmentHookForm] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.building.detail.room.detail.equipment.Update equipment information")//Chỉnh sửa thông tin thiết bị
          : t("routes.admin.building.detail.room.detail.equipment.Create new equipment information");
    },
    isLoading,
    setIsLoading,
    idElement: "selectEquipmentForm",
    handleChange: async () => await handleChangeRoomEquipments(),
    columns: ColumnSelectEquipment({
      t,
      listData: supplies,
      setEditEquipmentForm,
    }),
    Post: async (value) => await EquipmentRoomService.post({ value, roomId, t }),
    widthModal: 650,
  });

  const [handleEditRoomEquipments, roomEquipmentsModal] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.building.detail.room.detail.equipment.Update equipment information")
          : t("routes.admin.building.detail.room.detail.equipment.Create new equipment information");
    },
    idElement: "equipmentForm",
    isLoading,
    setIsLoading,
    handleChange: async () => await handleChangeRoomEquipments(),
    columns: ColumnRoomEquipments({ t }),
    Post: async (value) => await EquipmentRoomService.post({ value, roomId, t }),
    Put: async (value, id) => await EquipmentRoomService.put({ value: { ...value, id: id }, roomId, t }),
    parentID: () => roomId,
    widthModal: 650,
  });

  const [handleChangeRoomEquipments, roomEquipmentsTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page"),],
    Get: async (params) => await EquipmentRoomService.get({ params, roomId }),
    id: () => roomId,
    columns: ColumnRoomEquipments({
      t,
      handleEdit: handleEditRoomEquipments,
      handleDelete: async (value) => await EquipmentRoomService.delete({ roomId, value }) && handleChangeRoomEquipments(),
      permissions,
    }),
    pageSizeOptions: [5, 10, 20],
    save: false,
    rightHeader: (
      <Fragment>

        <div className="flex items-center">
        { permissions?.THEM_QUAN_LY_THIET_BI_PHONG &&

          <button
            className="bg-blue-500 text-white px-5 py-3 mr-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditSelectEquipmentForm()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add from list")}
          </button>
        }
          { permissions?.THEM_QUAN_LY_THIET_BI_PHONG &&

          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditRoomEquipments()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
          }
        </div>
      </Fragment>
    ),
  });

  return [handleChangeRoomEquipments, () => (
    <Fragment>
          { permissions?.THEM_QUAN_LY_THIET_BI_PHONG &&
        roomEquipmentsTable()}
      {roomEquipmentsModal()}
      {SelectEquipmentHookForm()}
    </Fragment>
  )]

};

export default Equipment;
