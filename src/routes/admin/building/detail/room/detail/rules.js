import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";

import { ColumnRoomRules } from "columns/building/room";
import { RoomService } from "services/room";


const Rules = ({ isLoading, setIsLoading, idBuilding, formatDate, roomId, roomrules, key,permissions }) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (key === '5') {
      handleRulesChange();
    }
  }, [key]);

  const [handleEditRules, ModalFormRules] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("columns.admin.roomRules.Update Rules")
          : t("columns.admin.roomRules.Create Rules");
    },
    isLoading,
    setIsLoading,
    handleChange: async () => { handleRulesChange(); },
    columns: ColumnRoomRules({
      t,
      formatDate,
      listData: roomrules,
    }),
    Post: RoomService.roomManagement.addRoomRules,
    Put: RoomService.roomManagement.updateRoomRules,
    parentID: () => roomId,
    widthModal: 450,
  });
  const [handleRulesChange, RoomRulesTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params,id)=>  await RoomService.roomManagement.getRoomRules(roomId,params),
    columns: ColumnRoomRules({
      t,
      handleEdit: handleEditRules,
      handleDelete: async (values) => await RoomService.roomManagement.deleteRoomRule(values, t) &&  handleRulesChange() &&  handleRulesChange(),
      permissions
    }),
    save: false,
    idElement: 'room-rules',
    rightHeader: (
      <Fragment>

        <div className="flex items-center">
          {permissions.XUAT_FILE_QUAN_LY_NOI_QUY_PHONG &&
          <button
            className="border-2 border-blue-500 text-blue-500 px-5 py-1 rounded-xl hover:bg-gray-200 inline-flex items-center mr-2 w-36"
          >
            <i className="las la-file-export m-0 p-0 text-3xl"></i> {t("routes.admin.Layout.Export")}
          </button>
          }

          {permissions.THEM_QUAN_LY_NOI_QUY_PHONG &&
           <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditRules()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
         </button>
          }

        </div>
      </Fragment>
    ),
  });
  return [handleRulesChange, () =>
    <Fragment>
      {ModalFormRules()}
      { permissions.XEM_QUAN_LY_NOI_QUY_PHONG &&  RoomRulesTable()}
    </Fragment>
  ]
}

export default Rules;
