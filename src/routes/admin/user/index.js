import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "global";
import { HookDataTable, HookModalForm, } from "hooks";
import { ColumnRequest } from "columns/request";

import { ColumnUser, ColumnGrantLandLort } from "columns/user";
import { UserService } from "services/user";
import "./index.less";
// import { RoleService } from "services/role";
// import { PermissionsService } from "services/permissions";
import { OrganizationService } from "services/organization";
// import { useLocation } from "react-router-dom";
import { Select } from 'antd';
import { Message } from "components";


const Page = () => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  // const [permissions, set_permissions] = useState([]);
  const { formatDate, } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reloadTable, setReloadTable] = useState(false);
  const [filterPageType, setFilterPageType] = useState('Tất cả');
  // const { pathname } = useLocation();

  const changePageType = (value) => {
    setFilterPageType(value)
  }
  const initFunction = useCallback(async () => {
    if (!mount) {
      // const res = await PermissionsService.getMenu(menu.filter(item => item.pageUrl === pathname)[0].code)
      // set_menu(res.menu)
      // changePermission(res.permissions)
      setMount(true);
      // const data = await PermissionsService.get();
    }
  }, [mount]);

  useEffect(() => {
    if (reloadTable === true) {
      handleChange();
      setReloadTable(false);
    }
  }, [reloadTable]);

  useEffect(() => {
    initFunction();
  }, [initFunction]);

  useEffect(() => {
    handleChange();
  }, [filterPageType]);

  const [handleEdit, ModalForm, handleDelete] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? t("Duyệt yêu cầu")
          : t("Duyệt yêu cầu");
    },
    isLoading,
    setIsLoading,
    handleChange: async () => await handleChange(),
    columns: ColumnRequest({
      t,
      formatDate,
    }),
    textSubmit: "Lưu",
    GetById: UserService.getById,
    Post: (values, id) => {
      let list = JSON.parse(localStorage.getItem('listRequest')) ?? [];
      list = list.map(ele => {
        if (ele.id === id) {
          console.log("hẻe");
          if (values.approve === 'deny') {
            values.status = 'deny-bchd';
          } else {
            values.status = 'approve-bchd';
          }
          return { ...values, id, bchdDuyet: "Nguyễn Văn A" }
        }
        return ele;
      })
      console.log(list);

      localStorage.setItem('listRequest', JSON.stringify(list));
      Message.success('Phê duyệt thành công');

      return true;
    },
    Put: (values, id) => {
      let list = JSON.parse(localStorage.getItem('listRequest')) ?? [];
      list = list.map(ele => {
        if (ele.id === id) {
          console.log("hẻe");
          if (values.approve === 'deny') {
            values.status = 'deny-bchd';
          } else {
            values.status = 'approve-bchd';
          }
          return { ...values, id, bchdDuyet: "Nguyễn Văn A" }
        }
        return ele;
      })
      console.log(list);

      localStorage.setItem('listRequest', JSON.stringify(list));
      Message.success('Phê duyệt thành công');

      return true;
    },
    Delete: UserService.delete,
    widthModal: 600,
    parentID: () => t,
    idElement: 'user',
  });



  const [handleChange, DataTable] = HookDataTable({
    isLoading,
    setIsLoading,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: () => {
      const list = JSON.parse(localStorage.getItem('listRequest')) ?? [];
      return { data: list.filter(ele => ele.status === 0), count: list.length }
    },
    columns: ColumnRequest({
      t,
      formatDate,
      handleEdit,
      handleDelete,
      setReloadTable,
      status: 0,
    }),
    rightHeader: (
      <Fragment>
        <div className="flex">
          {/* <button
      className="bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-400 inline-flex items-center"
      onClick={() => handleEdit()}
    >
      <i className="las la-plus mr-1" />
      {t("routes.admin.Layout.Add")}
    </button> */}
          <Select
            labelInValue={false}
            style={{ width: 208, marginRight: "12px" }}
            placeholder={t("Tìm kiếm trạng thái")}
            onChange={changePageType}
            value={filterPageType}
          >
            {["Tất cả", "Chủ nhà", "Người dùng"].map((ele, index) => <Select.Option value={ele} key={index}>{ele}</Select.Option>)}
          </Select>
        </div>

      </Fragment>
    ),
  });

  return (
    <Fragment>
      <div className="userList px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)]">
        <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 text-lg font-semibold border-b-2 border-gray-300 px-4">
          <span>{t("Ban chấp hành đội duyệt")}</span>
          <span>

          </span>
        </div>
        {DataTable()}
        {ModalForm()}
      </div>
    </Fragment>
  );
};
export default Page;
