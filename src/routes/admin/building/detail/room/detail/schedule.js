import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnSRoomchedule } from "columns/building/room";

import { ScheduleRoomService } from "services/room";


const ScheduleRoom = ({ isLoading, setIsLoading, formatDate, roomId, roomrules, key,permissions }) => {
  const { t } = useTranslation();
  const [reloadTable, setReloadTable] = useState(false);

  useEffect(() => {
    if (reloadTable) {
      handleScheduleChange()
      setReloadTable(false)
    }
  }, [reloadTable])

  useEffect(() => {
    key === '9' && handleScheduleChange();
  }, [key]);

  const [handleEditSchedule, ScheduleModalForm] = HookModalForm({
    title: (data) => data.id === 0 || data.id
      ? t("routes.admin.building.detail.room.detail.schedule.Update appointment to see the room information")
      : t("routes.admin.building.detail.room.detail.schedule.Create new appointment to see the room information")
    ,
    isLoading,
    setIsLoading,
    handleChange: async () =>  await handleScheduleChange() ,
    columns: ColumnSRoomchedule({
      t,
      formatDate,
      listData: roomrules,
    }),
    Post: (values) => ScheduleRoomService.post(values, roomId),
    Put: (values, id) => ScheduleRoomService.put(values, id, roomId),
    parentID: () => roomId,
    widthModal: 450,
  });

  const [handleScheduleChange, RoomScheduleTable] = HookDataTable({
    loadFirst: true,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => key === '9' ? await ScheduleRoomService.get(params, roomId): {data:[],count:0},
    columns: ColumnSRoomchedule({
      t,
      handleEdit: handleEditSchedule,
      handleDelete: (value) => ScheduleRoomService.delete({ roomId, value, setReloadTable }),
      permissions
    }),
    idElement: 'room-rules',
    rightHeader: (
      <Fragment>
        <div className="flex items-center">

            <>
            {permissions.XUAT_FILE_QUAN_LY_LICH_XEM_PHONG &&
             <button
             className="border-2 border-blue-500 text-blue-500 px-5 py-1 rounded-xl hover:bg-gray-200 inline-flex items-center mr-2 w-36"
           >
             <i className="las la-file-export m-0 p-0 text-3xl"></i> {t("routes.admin.Layout.Export")}
           </button>
          }

          {
            permissions.THEM_QUAN_LY_LICH_XEM_PHONG &&
           <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditSchedule()}
             >
              <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
             </button>
              }
            </>

        </div>
      </Fragment>
    ),
  });
  return [handleScheduleChange, () =>
    <Fragment>
      {permissions.THEM_QUAN_LY_LICH_XEM_PHONG && ScheduleModalForm()}
      {permissions.XEM_QUAN_LY_LICH_XEM_PHONG &&  RoomScheduleTable()}
    </Fragment>
  ]
}

export default ScheduleRoom;
