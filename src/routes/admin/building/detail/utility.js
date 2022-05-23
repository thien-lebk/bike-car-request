import React, { useState, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { HookDataTable, HookModalForm } from "hooks";
import { ColumnUtil, ColumnSelectUtil } from "columns/building";
import { buildingUtil } from "services/building";
import { UtilityServices } from "services/mt-utility";

const Utility = ({ isLoading, setIsLoading, idBuilding, key, permissions }) => {
  const { t } = useTranslation();
  const [utilitiesList, setUtilitiesList] = useState([]);
  const [editUtilForm, setEditUtilForm] = useState([]);

  const getlistUtil = async () => {
    if (idBuilding && key.toString() === "4") {
      let res = await UtilityServices.get();
      setUtilitiesList(res.map((ele) => {
        return { ...ele, label: ele.name, value: ele.id };
      }));
    };
  }

  useEffect(() => {
    if (idBuilding && key.toString() === "4") {
      getlistUtil();
      handleBuildingUtilTableChange();
    }
  }, [idBuilding, key]);
  useEffect(() => {
    if (Object.keys(editUtilForm).length !== 0) {
      handleEditSelectUtilForm(editUtilForm, true);
    }
  }, [editUtilForm]);

  const [handleEditUtilForm, UtilHookForm] = HookModalForm({
    title: (data) => (data.id === 0 || data.id)
      ? t("routes.admin.building.Update building utilities")
      : t("routes.admin.building.Create building utilities"),
    isLoading,
    setIsLoading,
    idElement: "UtilForm",
    handleChange: async () => await handleBuildingUtilTableChange(),
    columns: ColumnUtil({ t, }),
    Post: async (values, id) => await buildingUtil.post({ ...values, id: 0, utilityId: null, image: "string" }, idBuilding, t),
    Put: async (values, id) => await buildingUtil.put({ ...values, id: id }, id, idBuilding, t),
    widthModal: 650,
  });

  const [handleEditSelectUtilForm, SelectUtilHookForm] = HookModalForm({
    title: (data) => (data.id === 0 || data.id)
      ? t("routes.admin.building.Update building utilities from list")
      : t("routes.admin.building.Create building utilities from list"),
    isLoading,
    setIsLoading,
    idElement: "SelectUtilForm",
    handleChange: async () => await handleBuildingUtilTableChange(),
    columns: ColumnSelectUtil({ t, utilitiesList, setEditUtilForm, }),
    Post: async (values) => await buildingUtil.post({ ...values, id: 0, image: "string" }, idBuilding, t),
    Put: async (values, id) => await buildingUtil.put({ ...values, id: id }, idBuilding, t),
    widthModal: 650,
  });

  const [handleBuildingUtilTableChange, BuildingutilListTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    perPageLablePagi: [
      t("columns.building_list.of"),
      t("columns.building_list.items"),
      t("columns.building_list.page"),
    ],
    Get: async (params, id) => {
      if (key.toString() === "4") {
        return await buildingUtil.get(params, idBuilding);
      } else return { data: [], count: 0 };
    },
    save: false,
    id: () => idBuilding,
    pageSizeOptions: [5, 10, 20],
    columns: ColumnUtil({
      t,
      handleEdit: async (data) => await handleEditUtilForm(data),
      handleDelete: async (values) => (await buildingUtil.delete(values, idBuilding, t)) && handleBuildingUtilTableChange(),
      permissions
    }),
    rightHeader: (
      <Fragment>
        {permissions?.THEM_QUAN_LY_TIEN_ICH_TOA_NHA &&
        <div className="flex items-center">

        <button
          className="bg-blue-500 btn-add-list text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
          onClick={() => handleEditSelectUtilForm()}
        >
          <i className="las la-plus mr-1" />
          {t("routes.admin.Layout.Add from list")}
        </button>

        <button
          className="bg-blue-500 btn-add text-white px-5 ml-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
          onClick={() => handleEditUtilForm()}
        >
          <i className="las la-plus mr-1 " />
          {t("routes.admin.Layout.Add")}
        </button>
      </div>
        }
      </Fragment>
    ),
  });
  return [
    handleBuildingUtilTableChange,
    () => (
      <Fragment>
        {permissions?.XEM_QUAN_LY_TIEN_ICH_TOA_NHA  && BuildingutilListTable()}
        {UtilHookForm()}
        {SelectUtilHookForm()}
      </Fragment>
    ),
  ];
};

export default Utility;
