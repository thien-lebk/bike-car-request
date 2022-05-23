import React, { useState, Fragment, useEffect, useCallback,  } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { HookDataTable, } from "hooks";
import ColumnJob from "columns/job";
import { BuildingEmployee } from "services/building/";
import { Select } from 'antd';
import "./index.less";
import { ApproveModal } from "./modal/approve"
import { RemoveJobModal } from "./modal/remove"

///////////////////////////////////////////////Page/////////////////////////////////////////////


const Page = ({ location }) => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reloadTable, setReloadTable] = useState(false);
  const [filterStatusValue, setFiterStatusValue] = useState(null)
  const navigate = useNavigate();

  const [showRemoveModal, RmoveModalJsx] = RemoveJobModal({
    handleChange :  async () => await   handleChangeDataTable(),
    Delete : async (value) => await  BuildingEmployee.deleteJobs({ userPermissionId: value }),
  });

  const [showApproveModal, ApproveModalJsx] = ApproveModal({
    handleChange :  async () => await   handleChangeDataTable(),
    Post : async (value) => await BuildingEmployee.patchJobs({ userPermissions: value }),
  });


  const initFunction = useCallback(async () => {
    if (!mount) {
      setMount(true);
    }

  }, [mount]);

  useEffect(() => {
    initFunction();
    if (reloadTable === true) {
      // handleChange();
      setReloadTable(false);
    }

  }, [initFunction, location, reloadTable]);

  useEffect(() => {
    handleChangeDataTable();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterStatusValue]);

  const filterStatus = (value) => {
    setFiterStatusValue(value)
  }

  const [handleChangeDataTable, DataTable] = HookDataTable({
    loadFirst: true,
    isLoading,
    setIsLoading,
    perPageLablePagi: [
      t("columns.building_list.of"),
      t("columns.building_list.items"),
      t("columns.building_list.page"),
    ],
    Get: async (params) =>  await BuildingEmployee.getJobs({...params, filter:{status:filterStatusValue}}),
    columns: ColumnJob({
      t,
      setReloadTable,
      navigate,
      showApproveModal,
      showRemoveModal,
    }),
    rightHeader: (
      <div className="w-full mx-3 flex justify-between">
        <div>
          {/* filter status */}
          <Select
            labelInValue={false}
            style={{ width: 208, marginRight: "12px" }}
            placeholder={t("Tìm kiếm trạng thái")}
            onChange={filterStatus}
            value={filterStatusValue}
            allowClear
          >
            <Select.Option value='REJECTED' key='REJECTED'>Đã từ chối</Select.Option>
            <Select.Option value='PENDING' key='PENDING'>Đang chờ xác nhận</Select.Option>
            <Select.Option value='APPROVED' key='APPROVED'>Đang làm việc</Select.Option>
          </Select>
        </div>

      </div>
    ),
  });


  return (
    <Fragment>
      <div className="employeeList px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)] ">
        <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 border-b-2 border-gray-300 font-semibold text-base px-4">
          <span className="text-lg" id="test12314">{t("Danh sách công việc")}</span>
        </div>
        {DataTable()}
        {ApproveModalJsx()}
        {RmoveModalJsx()}
      </div>
    </Fragment>
  );
};
export default Page;

