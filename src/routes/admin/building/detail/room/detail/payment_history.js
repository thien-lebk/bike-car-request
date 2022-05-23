import React, { Fragment, useEffect, useState, } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnRoomPaymentHistory } from "columns/building/room";
import { PaymentHistoryRoomService } from "services/room";


const PaymentHistory = ({ isLoading, setIsLoading, expenses, roomId, key ,permissions }) => {
  const { t } = useTranslation();
  const [reloadTable, setReloadTable] = useState(false);

  useEffect(() => { if (reloadTable) { setReloadTable(false); handleChangePaymentHistory() } }, [reloadTable])

  useEffect(() => {
    key === '8' && handleChangePaymentHistory();
  }, [key]);

  const [handleEditPaymentHistory, roomPaymentHistoryModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
    t("routes.admin.building.detail.room.detail.payment history.Update payment history information") :
    t("routes.admin.building.detail.room.detail.payment history.Create new payment history information"),
    isLoading,
    setIsLoading,
    handleChange: async () => handleChangePaymentHistory(),
    columns: ColumnRoomPaymentHistory({
      t,
      listData: expenses,
    }),
    Post: async (value) => await PaymentHistoryRoomService.post({ value, roomId, t }),
    Put: async (value, id) => await PaymentHistoryRoomService.put({ value, id, roomId, t }),
    widthModal: 650,
  });
  const [handleChangePaymentHistory, roomPaymentHistoryTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => await PaymentHistoryRoomService.get({ params, roomId }),
    id: () => roomId,
    columns: ColumnRoomPaymentHistory({
      t,
      handleEdit: handleEditPaymentHistory,
      handleDelete: (value) => PaymentHistoryRoomService.delete({ roomId, value, setReloadTable }),
      permissions
    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
        {permissions.THEM_QUAN_LY_LS_THANH_TOAN_PHONG &&
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditPaymentHistory()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
        }
        </div>
      </Fragment>
    ),
  });
  return [handleChangePaymentHistory,
    () =>
    (<Fragment>
      { permissions.XEM_QUAN_LY_LS_THANH_TOAN_PHONG && roomPaymentHistoryTable()}
      {roomPaymentHistoryModal()}
    </Fragment>)]
}

export default PaymentHistory;
