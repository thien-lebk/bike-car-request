import { Fragment } from "react";
import { Tooltip } from "antd";
import { checkIdentityNumber } from "../utils";

const Column = ({ t, handleEdit, handleDelete, setdataDisplay, BuildingEmployee,permissions }) => {
  return [
    // họ và tên
    {
      title: t("routes.admin.building.detail.employee.Staff name"),
      name: "staffName",
      tableItem: {
        width: 200,
        sorter: true,
      },
    },

    //Số CMND/CCCD/Passport
    {
      name: "staffIdentityCard",
      title: t("columns.auth.register.Identity Number"),
      tableItem: {
        sorter: true,
        width: 200,
      },
      formItem: {
        placeholder: t("Tìm kiếm người dùng bằng CMND,CCCD,Passport"),
        rules: checkIdentityNumber(),
        col: 6,
      },
    },

    //staffPhoneNumber
    {
      title: t('columns.auth.register.Phone Number'),
      name: "staffPhoneNumber",
      formItem: {
        type: 'hidden',
      },
      tableItem: {
        sorter: true,
        width: 150,
      },
    },


    //roles
    {
      title: t('routes.admin.role-management.Role'),
      name: "roles",
      formItem: {
        type: 'hidden',
      },
      tableItem: {
        sorter: true,
        width: 200,
        render: (value) => {
          let text = value?.map((ele) => ele.roleName).join(", ");
          return <span>{text}</span>
        }
      },
    },

    //userPermissionStatus
    {
      title: t('columns.admin.buildingInfo.Status'),
      name: "userPermissionStatus",
      formItem: {
        type: 'hidden',
      },
      tableItem: {
        sorter: true,
        width: 150,
        render: (value) => <span>{t("enum." + value)}</span>
      },
    },

    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 120,
        fixed: "right",
        align: "center  ",
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          return (
            <Fragment>
              <div className="flex justify-center">
                  {permissions.XOA_QUAN_LY_NHAN_VIEN_TOA_NHA  &&
                   <Tooltip title={t("routes.admin.Layout.Delete")}>
                   <button onClick={() => handleDelete(record)}
                     className="embed text-xs mr-2 mt-[3px]" >
                     <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                   </button>

                 </Tooltip>
                  } 
              </div>
            </Fragment>
          );
        },
      },
    },

  ];
};
export default Column;
