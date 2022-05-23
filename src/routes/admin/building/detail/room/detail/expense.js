import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";

import { ExpenseRoomService } from "services/room";
import { roomExpensesForm, roomExpensesSelectForm } from "columns/building/room";
import { CostServices } from "services/mt-cost";

const Expense = ({ isLoading, setIsLoading, roomId, key,permissions }) => {
  const { t } = useTranslation();
  const [editExpenseForm, setEditExpenseForm] = useState({});
  const [expensesList, setExpensesList] = useState([]);

  const getlistCost = async () => {
    if (roomId) {
      let res = await CostServices.get();
      setExpensesList(res.map((ele) => {
        return { ...ele, label: ele.description, value: ele.id };
      }));
    }
  };
  useEffect(() => {
    if (Object.keys(editExpenseForm).length !== 0)
      handleEditSelectExpenseForm(editExpenseForm, true);
  }, [editExpenseForm])

  useEffect(() => {
    key === '2' && roomId && handleChangeRoomExpenses() && getlistCost();
  }, [key]);

  const [handleEditSelectExpenseForm, SelectExpenseHookForm] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.building.detail.room.detail.expenses.Update cost information")
          : t("routes.admin.building.detail.room.detail.expenses.Create new cost information");
    },
    isLoading,
    setIsLoading,
    idElement: "selectExpenseForm",
    handleChange: async () => await handleChangeRoomExpenses(),
    columns: roomExpensesSelectForm({
      t,
      expensesList: expensesList,
      setEditExpenseForm
    }),
    Post: async (value) => await ExpenseRoomService.post({ value, roomId, t }),
    widthModal: 650,
  })

  const [handleEditRoomExpenses, roomExpensesModal] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("routes.admin.building.detail.room.detail.expenses.Update cost information")
          : t("routes.admin.building.detail.room.detail.expenses.Create new cost information");
    },
    idElement: "expenseForm",
    isLoading,
    setIsLoading,
    handleChange: async () => await handleChangeRoomExpenses(),
    columns: roomExpensesForm({ t }),
    Post: async (value) => await ExpenseRoomService.post({ value, roomId, t }),
    Put: async (value, id) => { value = { ...value, id: id }; return await ExpenseRoomService.put({ value, roomId, t }) },
    parentID: () => roomId,
    widthModal: 650,
  });

  const [handleChangeRoomExpenses, roomExpensesTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params, id) => await ExpenseRoomService.get(params, id),
    id: () => roomId,
    columns: roomExpensesForm({
      t,
      handleEdit: handleEditRoomExpenses,
      handleDelete: async (value) => await ExpenseRoomService.delete({ roomId, value }) && handleChangeRoomExpenses(),
      permissions
    }),
    pageSizeOptions: [5, 10, 20],
    save: false,
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          {
            permissions.THEM_QUAN_LY_CHI_PHI_PHONG  &&
            <button
            className="bg-blue-500 text-white px-5 py-3 mr-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditSelectExpenseForm()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add from list")}
             </button>
          }
          {permissions.THEM_QUAN_LY_CHI_PHI_PHONG  &&
          <button
            className="bg-blue-500 btn-add text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditRoomExpenses()}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
  }
        </div>
      </Fragment>
    ),
  });

  return [handleChangeRoomExpenses, () => (
    <Fragment>
      { permissions.XEM_QUAN_LY_CHI_PHI_PHONG  &&  roomExpensesTable()}
      {    roomExpensesModal()  }
      {  SelectExpenseHookForm() }
    </Fragment>
  )]

}

export default Expense;
