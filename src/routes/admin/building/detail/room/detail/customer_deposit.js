import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnCustomerDeposit } from "columns/building/room";
import { CustomerService } from "services/room";

const CustomerDeposit = ({ isLoading, setIsLoading, idBuilding, formatDate, roomId, key,permissions }) => {
  const { t } = useTranslation();
  useEffect(() => {
    key === '10' && roomId && handleCustomerDepositChange();
  }, [key]);


  const [handleEditCustomerRent, ModalCustomerRent] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("columns.admin.customer.Update Customer Deposit")
          : t("columns.admin.customer.Create Customer Deposit");
    },
    isLoading,
    setIsLoading,
    idElement: 'customer-rent-form',
    handleChange: async () => { await handleCustomerDepositChange() },
    columns: ColumnCustomerDeposit({
      t,
      formatDate,
    }),
    Post: async (value) => await CustomerService.post({ value: { ...value, customerType: 'BOOKER' }, roomId, t }),
    Put: async (value, id) => await CustomerService.put({ value: { ...value, id, customerType: 'BOOKER' }, roomId, t }),
    GetById: async (params) => {
      if (roomId) {
        let res = await CustomerService.getDetail(params, roomId);
        res.data = { ...res.data, jobSelect: res.data.job };
        return res;
      }
    },
    parentID: () => roomId,
    widthModal: 800,
  });
  const [handleCustomerDepositChange, RoomCustomerDepositTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    save: false,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => roomId && key === '10' ? await CustomerService.getDeposit({ params, roomId }) : { data: [], count: 0 }
    ,
    columns: ColumnCustomerDeposit({
      t,
      formatDate,
      handleEdit: handleEditCustomerRent,
      handleDelete: async (value) => await CustomerService.delete({ roomId, value, t }) &&  handleCustomerDepositChange(),
      permissions
    }),
    idElement: 'room-customer-rent',
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
        {permissions.XEM_QUAN_LY_KHACH_COC_PHONG && 
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditCustomerRent()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
        }
        </div>
        {/* {ModalFormRoomRules()} */}
      </Fragment>
    ),
  });
  return [handleCustomerDepositChange, () =>
    <Fragment>
      {ModalCustomerRent()}
      { permissions.XEM_QUAN_LY_KHACH_COC_PHONG && RoomCustomerDepositTable()}
    </Fragment>
  ]
}

export default CustomerDeposit;
