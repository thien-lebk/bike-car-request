import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnCustomerRentForm, ColumnCustomerReview, } from "columns/building/room";
import {  CustomerService } from "services/room";
import './index.less'
const CustomerRent = ({ isLoading, setIsLoading, idBuilding, formatDate, roomId, key,permissions }) => {
  const { t } = useTranslation();
  useEffect(() => {
    key === '7' && roomId && handleCustomerRentChange();
  }, [key]);

  const [handleEditCustomerRent, ModalCustomerRent] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("columns.admin.customer.Update Customer Rent")
          : t("columns.admin.customer.Create Customer Rent");
    },
    isLoading,
    setIsLoading,
    checkHidden:true,
    idElement: 'customer-rent-form',
    handleChange: async () => { await handleCustomerRentChange() },
    columns: ColumnCustomerRentForm({
      t,
      formatDate,
    }),
    Post: async (value) => await CustomerService.post({ value, roomId, t }),
    Put: async (value, id) => await CustomerService.put({ value: { ...value, id }, roomId, t }),
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
  const [handleEditCustomerReview, ModalCustomerReview] = HookModalForm({
    title: (data) => { return t("columns.admin.customer.Rate Review") },
    isLoading,
    setIsLoading,
    idElement: 'customer-rent-review',
    handleChange: async () => { await handleCustomerRentChange() },
    columns: ColumnCustomerReview({
      t,
      formatDate,
    }),
    Put: async (value, id) => await CustomerService.rate({ value: { ...value, customerId: id }, roomId, t })
    , widthModal: 800,
  });
  const [handleCustomerRentChange, RoomCustomerRentTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    save: false,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => {
      let data = { data: [], count: 0 };
      if (roomId && key === '7') {
        data = await CustomerService.getRent({ params, roomId });
        data.data.forEach(ele => {
          ele.customerType = ele.customerType === 'MAIN_RENTER' ? 'Chủ hộ' : 'Người thuê'
        });
      }
      return data;
    },
    columns: ColumnCustomerRentForm({
      t,
      formatDate,
      handleEdit: handleEditCustomerRent,
      handleDelete: async (value) => await CustomerService.delete({ roomId, value, t }) && handleCustomerRentChange()
      ,
      handleEditCustomerReview,
      permissions
    }),
    idElement: 'room-customer-rent',
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          <button
            className="border-2 border-blue-500 text-blue-500 px-5 py-1 rounded-xl hover:bg-gray-200 inline-flex items-center mr-2 w-36"
          >
            <i className="las la-file-export m-0 p-0 text-3xl"></i> {t("routes.admin.Layout.Export")}
          </button>
          {permissions.THEM_QUAN_LY_KHACH_THUE_PHONG &&
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
  return [handleCustomerRentChange, () =>
    <Fragment>
      {permissions.XEM_QUAN_LY_KHACH_THUE_PHONG && ModalCustomerRent()}
      {RoomCustomerRentTable()}
      {ModalCustomerReview()}
    </Fragment>
  ]
}

export default CustomerRent;
