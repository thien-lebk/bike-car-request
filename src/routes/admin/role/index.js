import React, { useState, Fragment, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAuth } from "global";
import { HookDataTable, HookModalForm, } from "hooks";
import { ColumnRole, } from "columns/user";
import "./index.less";
import { RoleService } from "services/role";
import { PermissionsService } from "services/permissions";
import { useLocation } from "react-router-dom";
import { ColumnRequest } from "columns/request";
import { Message } from "components";

const Page = () => {
  const { t } = useTranslation();
  const [mount, setMount] = useState(false);
  const [permissions, set_permissions] = useState([]);
  const { formatDate, menu, set_menu, changePermission, permission } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reloadTable, setReloadTable] = useState(false);
  const { pathname } = useLocation();
  const [menuPermission,set_MenuPermission] = useState([]);


  const initFunction = useCallback(async () => {
    if (!mount) {



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

  // const [handleShowDrag, ModalDrag] = HookModalDrag({
  //   title: () => t("routes.admin.user-management.Role"),
  //   isLoading,
  //   setIsLoading,
  //   columns: ColumnRole({ t, permissions }),
  //   Get: RoleService.getListRoles,
  //   Put: RoleService.put,
  //   Post: RoleService.post,
  //   Delete: RoleService.delete,
  //   GetById: RoleService.getById,
  //   idElement: 'role',
  //   isReloadLoadToSave: true,
  //   showAddNew: permission.THEM_PHAN_QUYEN,
  //   conditionEdit: () => permission.SUA_PHAN_QUYEN,
  //   conditionDelete: () => permission.XOA_PHAN_QUYEN,
  // });

  const [handleEditRole, ModalForm, handleDelete] = HookModalForm({
    title: (data) => {
      if (data)
        return data.id === 0 || data.id
          ? "Sửa yêu cầu"
            : "Tạo yêu cầu";
      },
      isLoading,
      setIsLoading,
      readOnly:false,
      handleChange: async () => await handleChange(),
      columns: ColumnRequest({
        t,
        formatDate,
        permissions,
      }),
      // GetById: UserService.getById,
      Post: async (values, id) =>{console.log(values);
        const list = JSON.parse(localStorage.getItem('listRequest'))??[];

        list.push({...values, status: 0})
        localStorage.setItem('listRequest', JSON.stringify(list));
        Message.success('Tạo yêu cầu thành công');

        return true;
      },
      Put: RoleService.put,
      Delete: async (id) => await RoleService.delete(id),
      widthModal: 600,
      parentID: () => t,
      idElement: 'role',

    });

    const [handleChange, DataTable] = HookDataTable({
      isLoading,
      setIsLoading,
      perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
      Get: ()=>{
        const list = JSON.parse(localStorage.getItem('listRequest'))??[];
        return {data:list, count: list.length}
      },
      columns: ColumnRequest({
        t,
        formatDate,
        handleEditRole
      }),
      rightHeader: (
        <Fragment>
        <div className="flex">
          {
                <button
                className="bg-blue-500 text-white px-4 py-2.5 rounded-xl hover:bg-blue-400 inline-flex items-center"
                onClick={() => handleEditRole({
                  thoigiancongtac:new Date(),
                  use: "Le van a",
                  bks: "59F1-1111",
                  // bhcp:"Le van b",
                  // bchd1:
                  canBoDeXuat:"Le van a",
                  //bchdDuyet
                  diaDiemDen:"Quận 10, TP.HCM",
                  lyDo: "Ly do",
                  nlthKhiDi:"1",
                  nlthKhiVe:"1",
                  thoiGianVeDonVi:'1',
                  ghiChu:"Ghi chu"
                })}
              >
                <i className="las la-plus mr-1" />
                {t("routes.admin.Layout.Add")}
              </button>
          }

        </div>

      </Fragment>
    ),
  });

  useEffect(()=>{
    // initPermission()
  },[])
  return (
    <Fragment>
      <div className="userList px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)]">
        <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 text-lg font-semibold border-b-2 border-gray-300 px-4">
          <span>{"Tạo yêu cầu"}</span>
          {/* <span>
            <span className="text-blue-500 text-base">{t("routes.admin.user-management.User Management")}</span>
            <span className="px-2">/</span>
            <span className="text-base">{t("routes.admin.user-management.User List")}</span>
          </span> */}
        </div>
        {DataTable()}
        {ModalForm()}
        {/* <button onClick={()=>{
          handleChange()
          }}>handleChange</button> */}
      </div>
    </Fragment>
  );
};
export default Page;
