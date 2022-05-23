import React, { useState, Fragment, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModal } from "hooks";
import { ColumnBuildingEmployee } from "columns/building";
import { BuildingEmployee } from "services/building";
import CreateFormComponent from "routes/admin/building/detail/employee/createform"
import DeleteHookForm from "./deleteform";
import { RoleService } from "services/role";
import { UserRoleService } from "services/user-role";


const EmployeeBuilding = ({
  formatDate,
  isLoading,
  setIsLoading,
  idBuilding,
  key,
  organization,
  permissions
}) => {
  const { t } = useTranslation();
  const [roleList, setRoleList] = useState([]);
  useEffect(() => {
    if (idBuilding && key.toString() === "2") {
      getRoleList();
      handleBuildingEmployeeListChange();
    }
  }, [key]);

  const getRoleList = async (key) => {
    const { data } = await RoleService.getListRoles({
      page: 0,
      perPage: 0,
    });
    setRoleList(data);
  };

  const [handleBuildingEmployeeListChange, BuildingEmployeeListTable] =
    HookDataTable({
      loadFirst: false,
      isLoading,
      setIsLoading,
      perPageLablePagi: [
        t("columns.building_list.of"),
        t("columns.building_list.items"),
        t("columns.building_list.page"),
      ],
      Get: async (params) => await BuildingEmployee.get(idBuilding, params),
      save: false,
      id: () => idBuilding,
      pageSizeOptions: [5, 10, 20],
      columns: ColumnBuildingEmployee({
        t,
        formatDate,
        handleEdit: async (values) => {
          let { data } = values.staffIdentityCard && await BuildingEmployee.getUserIDcard(values.staffIdentityCard);
          let roles = await UserRoleService.getUserRole(idBuilding, values.staffId)
          let role_arr = roles.data.map((ele) => {
            return ele && {
              value: ele.role?.id,
              label: ele.role?.name
            }
          })

          handeEditCreateForm({
            display: data,
            form: {
              CMND:
                values.staffIdentityCard || values.staffPassport || values.staffUUID,
              roles: role_arr,
            },
          });
          showCreateHookForm()
        },
        handleDelete: async(data)=> {
          let roles_arr=data.roles.map((ele)=>{return {value:ele.userPermissionId,label:ele.roleName}})
          handleShowDeleteForm({roles:roles_arr,id:data.staffId,userPermissionStatus:data.userPermissionStatus});
        },
        permissions,
      }),
      rightHeader: (
        <Fragment>
          {permissions.THEM_QUAN_LY_NHAN_VIEN_TOA_NHA &&
           <div className="flex items-center">
           <button
             className="bg-blue-500 text-white px-5 py-3 ml-5 rounded-xl hover:bg-blue-400 inline-flex items-center btn-add-staff"
             onClick={() => {handeShowCreateForm();showCreateHookForm()}}
           >
             <i className="las la-plus mr-1" />
             {t("routes.admin.Layout.Add")}
           </button>
         </div>
          }

        </Fragment>
      ),
    });

  const [CreateFormJSX, onOk, handeEditCreateForm, handeShowCreateForm] = CreateFormComponent({
    roleList,
    post: async (data, id) => await BuildingEmployee.post({
      userId: id,
      buildingId: idBuilding,
      organizationId: organization.id,
      roles: data
    }),
    handleChange: handleBuildingEmployeeListChange,
  });

  const [showCreateHookForm, CreateHookForm] = HookModal({
    title: (data) =>
      data.staffId === 0 || data.staffId
        ? t("routes.admin.building.Update building employee")
        : t("routes.admin.building.Create building employee"),
    isLoading,
    setIsLoading,
    idElement: "employeeForm",
    handleChange: async () => await handleBuildingEmployeeListChange(),
    onOk: onOk,
    textSubmit: t("routes.admin.building.detail.employee.Save")
  });

  const [DeleteFormJSX, handleShowDeleteForm] = DeleteHookForm({
    title: (data) => {
      switch (data?.userPermissionStatus) {
        case "REJECTED":
          return t("columns.admin.building.deleteHistory");
        case "APPROVED":
          return t("columns.admin.building.deleteRole");
        case "PENDING":
          return t("routes.admin.building.detail.employee.DeleteRequest");
        default:
          return ;
      }
    },
    width: 450,
    submitText: t("routes.admin.building.detail.employee.AcceptDelete"),
    cancelText: t("routes.admin.building.detail.employee.CacelDelete"),
    Delete: async (checkList) => await BuildingEmployee.delete(checkList),
    handleChange: handleBuildingEmployeeListChange,
  });



  return [
    handleBuildingEmployeeListChange,
    () => (
      <Fragment>
        {permissions.XEM_QUAN_LY_NHAN_VIEN_TOA_NHA && BuildingEmployeeListTable()}
        {CreateHookForm(() => <CreateFormJSX />)}
        <div className="DeleteFormEmployee">
          {DeleteFormJSX()}
        </div>
      </Fragment>
    ),
  ];
};

export default EmployeeBuilding;


