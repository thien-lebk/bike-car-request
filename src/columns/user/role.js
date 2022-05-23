import { Popconfirm, Tooltip } from "antd";
// import EditIcon from "assets/svg/edit.js";
// import RemoveIcon from "assets/svg/remove.js";

import { Fragment } from "react";
const Column = ({ t, permissions, handleEditRole, handleDelete, menuPermission }) => {
  return [
    // isDefault
    {
      name: "isDefault",
      formItem: {
        condition: (values, form) => false,
      }
    },
    {
      title: t("routes.admin.role-management.Role Name"),
      name: "name",
      tableItem: {
        fixed: "left",
        width: 200,
        sorter: true,
      },
      formItem: {
        rules: [{ type: "required" }],
        condition: (values, form) => !form.getFieldValue('isDefault'),
      },
    },
    // name readonly
    {
      title: t("routes.admin.role-management.Role Name"),
      name: "name",
      formItem: {
        condition: (values, form) => form.getFieldValue('isDefault'),
        readonly: true,
      }
    },
    {
      title: t("routes.admin.role-management.Permision"),
      name: "permissionList",
      formItem: {
        type: 'tree_select',
        list: permissions,
        showFather: true,
        mode: 'multiple',
        className:'selectRole',
        col: 12,
        rules: [{ type: "required" }],
      },
    },
    {
      title: t("routes.admin.role-management.Describe"),
      name: "description",
      tableItem: {
        sorter: true,
        width: 250,
      },
      formItem: {
        type: "textarea",
        col: 12,
        rules: [{ type: "required" }],
      },
    },
    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 120,
        fixed: "right",
        // className:"flex justify-center",
        align: "center ",
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          // console.log(text, record);
          return (

            <Fragment>

              <div className="flex justify-center">
         
                
                 {(!record.isDefault && menuPermission?.SUA_THIET_LAP_VAI_TRO) ? <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed text-xs mr-2"
                    onClick={async () => {
                      handleEditRole(record)
                    }
                    }
                  >
                    <i className="las la-edit m-0 p-0 text-3xl text-blue-500"></i>
                  </button>
                </Tooltip> : null

                }
               
                 
                {(!record.isDefault && menuPermission?.XOA_THIET_LAP_VAI_TRO) ? <Tooltip title={t("routes.admin.Layout.Delete")}>
                    <Popconfirm
                      placement="left"
                      title={t("components.datatable.areYouSureWant")}
                      icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                      onConfirm={
                        () => handleDelete(record.id)
                      }
                      okText={t("components.datatable.ok")}
                      cancelText={t("components.datatable.cancel")}
                    >
                      <button
                        className="embed text-xs mr-2 mt-[2px]"
                      >
                        {/* <RemoveIcon/> */}
                        <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>

                      </button>
                    </Popconfirm>
                  </Tooltip> : null
                 }
               

              </div>
              {/* </div> */}
            </Fragment>
          );
        },
      },
    },
  ];
};
export default Column;
