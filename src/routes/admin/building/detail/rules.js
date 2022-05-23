import React, { Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ColumnBuildingRules } from "columns/building";
import { buildingRules } from "services/building";

const Rules = ({ isLoading, setIsLoading, idBuilding, key, permissions}) => {
  const { t } = useTranslation();
  useEffect(() => {
    if (idBuilding && key.toString() === "6") {
      handleRulesChange();
    }
  }, [key]);

  const [handleEditRules, ModalFormRules] = HookModalForm({
    title: (data) =>
      data.id === 0 || data.id
        ? t("columns.admin.roomRules.Add Rules")
        : t("columns.admin.roomRules.Create Rules"),
    isLoading,
    setIsLoading,
    handleChange: async () => await handleRulesChange(),
    columns: ColumnBuildingRules({ t }),
    Post: buildingRules.post,
    Put: buildingRules.put,
    parentID: () => idBuilding,
    widthModal: 450,
  });
  const [handleRulesChange, BuildingRulesTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [
      t("columns.building_list.of"),
      t("columns.building_list.items"),
      t("columns.building_list.page"),
    ],
    Get: async (params) => await buildingRules.get(idBuilding, params),
    columns: ColumnBuildingRules({
      t,
      idBuilding,
      permissions,
      handleEdit: handleEditRules,
      handleDelete: async (values) => await buildingRules.delete(values, idBuilding) && handleRulesChange(),
    }),
    parentID: () => idBuilding,
    idElement: "building-rules",
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          <button className="border-2 border-blue-500 text-blue-500 px-5 py-1 rounded-xl hover:bg-gray-200 inline-flex items-center mr-2 w-36">
            <i className="las la-file-export m-0 p-0 text-3xl"></i>{" "}
            {t("routes.admin.Layout.Export")}
          </button>
          {permissions.THEM_QUAN_LY_NOI_QUY_TOA_NHA &&
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

  return [
    handleRulesChange,
    () => (
      <Fragment>
        {permissions.XEM_QUAN_LY_NOI_QUY_TOA_NHA && ModalFormRules()}
        {BuildingRulesTable()}
      </Fragment>
    ),
  ];
};

export default Rules;
