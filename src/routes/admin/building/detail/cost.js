import React, { useState, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";

import { ColumnExpenses, ColumnSelectxpenses } from "columns/building";
import { buildingExpenses } from "services/building";
import { CostServices } from "services/mt-cost";

const Expenses = ({ formatDate, isLoading, setIsLoading, key, idBuilding, permissions }) => {
  const { t } = useTranslation();
  const [editExpenseForm, setEditExpenseForm] = useState([]);
  const [expensesList, setExpensesList] = useState([]);
  const getlistCost = async () => {
    if (idBuilding) {
      let res = await CostServices.get();
      setExpensesList(res.map((ele) => {
        return { ...ele, label: ele.description, value: ele.id };
      }));
    }
  };

  useEffect(() => {
    idBuilding && key.toString() === "3" && handleBuildingExpenseListChange() && getlistCost();
    // console.log(permissions)ax 
  }, [idBuilding, key]);

  useEffect(() => {
    if (Object.keys(editExpenseForm).length !== 0)
      handleEditSelectExpenseForm(editExpenseForm, true);
  }, [editExpenseForm]);

  const [handleEditExpenseForm, ExpenseHookForm] = HookModalForm({
    title: (data) =>
      data.id === 0 || data.id
        ? t("routes.admin.building.Update building cost")
        : t("routes.admin.building.Create building cost"),
    isLoading,
    setIsLoading,
    idElement: "ExpenseForm",
    handleChange: async () =>await handleBuildingExpenseListChange(),
    columns: ColumnExpenses({
      t,
      formatDate,
      permissions
    }),
    Post: async (values, id) =>await buildingExpenses.post(values, id, idBuilding, t),
    Put: async (values, id) =>await buildingExpenses.put(values, id, idBuilding, t),
    widthModal: 650,
  });
  const [handleEditSelectExpenseForm, SelectExpenseHookForm] = HookModalForm({
    title: (data) =>data.id === 0 || data.id
        ? t("routes.admin.building.Update building cost from list")
        : t("routes.admin.building.Create building cost from list"),
    isLoading,
    setIsLoading,
    idElement: "SelectExpenseForm",
    handleChange: async () => {
      await handleBuildingExpenseListChange();
    },
    columns: ColumnSelectxpenses({
      t,      
      formatDate,
      expensesList: expensesList,
      setEditExpenseForm,
    }),
    Post: async (values, id) =>
      await buildingExpenses.post(values, id, idBuilding, t),
    Put: async (values, id) =>
      await buildingExpenses.put(values, id, idBuilding, t),
    widthModal: 650,
  });
  const [handleBuildingExpenseListChange, BuildingExpenseListTable] =
    HookDataTable({
      loadFirst: false,
      isLoading,
      setIsLoading,
      perPageLablePagi: [
        t("columns.building_list.of"),
        t("columns.building_list.items"),
        t("columns.building_list.page"),
      ],
      Get: async (params, id) => {
        if (key.toString() === "3") {
          return id
            ? await buildingExpenses.get(params, id)
            : { data: [], count: 0 };
        } else return { data: [], count: 0 };
      },
      save: false,
      id: () => idBuilding,
      pageSizeOptions: [5, 10, 20],
      columns: ColumnExpenses({
        t,
        formatDate,
        permissions,
        handleEdit: async (data) => await handleEditExpenseForm(data),
        handleDelete: async (values) =>
          (await buildingExpenses.delete(values, idBuilding, t)) &&
          handleBuildingExpenseListChange(),
      }),
      rightHeader: (
        <Fragment>
          <div className="flex items-center">
          {permissions.THEM_QUAN_LY_CHI_PHI_TOA_NHA && 
            <button
              className="bg-blue-500 btn-add-list text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
              onClick={() => handleEditSelectExpenseForm()}
            >
              <i className="las la-plus mr-1" />
              {t("routes.admin.Layout.Add from list")}
            </button> 
           }
           {
            permissions.THEM_QUAN_LY_CHI_PHI_TOA_NHA  && 
            <button
              className="bg-blue-500 btn-add text-white px-5 py-3 ml-5 rounded-xl hover:bg-blue-400 inline-flex items-center"
              onClick={() => handleEditExpenseForm()}
            >
              <i className="las la-plus mr-1" />
              {t("routes.admin.Layout.Add")}
            </button>
            }
          </div>
        </Fragment>
      ),
    });
  return [
    handleBuildingExpenseListChange,
    () => {
      return (
        <Fragment>
          {permissions.XEM_QUAN_LY_CHI_PHI_TOA_NHA && BuildingExpenseListTable()}
          {ExpenseHookForm()}
          {SelectExpenseHookForm()}
        </Fragment>
      );
    },
  ];
};

export default Expenses;
