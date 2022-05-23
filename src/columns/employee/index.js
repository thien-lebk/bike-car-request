import { Fragment } from "react";
import {  Tooltip } from 'antd';


const Column = ({
  t,
  handleEdit,
  handleDelete,
  permissions
}) => {

  return [
    // tên tòa nhà
    {
      name: "buildingName",
      title: t("columns.admin.buildingInfo.Building Name"),
      tableItem: {
        fixed: "left",
        width: 150,
        sorter: true,
      },
    },

    //Address
    {
      name: "userAddress",
      title: t("columns.admin.buildingInfo.Address"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
    },

    // userName
    {
      name: "userName",
      title: t("columns.admin.profile.Fullname"),
      tableItem: {
        width: 150,
        sorter: true,
      },
      formItem: {
        // col: 6,
        // rules: [{ type: "required" }],
        rules: [

          // { type: "max", value: 40 }
          {
            type: "required",
            validator: () => ({
              validator(_, value) {
                if (!value || /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ/,\s]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.ruleName"));
              }
            })
          }
        ],
      },
    },

    // userPhoneNumber
    {
      name: "userPhoneNumber",
      title: t("columns.auth.register.Phone Number"),
      tableItem: {
        sorter: true,
        width: 150,
      },
    },
    // userIdentityCard
    {
      name: "userIdentityCard",
      title: t("columns.auth.register.Identity Number"),
      tableItem: {
        sorter: true,
        width: 200,
      },
    },

    // roles
    {
      name: "roles",
      title: t("columns.auth.register.Roles"),
      tableItem: {
        sorter: true,
        width: 300,
        render: (value) => <span>{value.map((ele) => ele.roleName).join(",")}</span>,
      }
    },

    // Trạng thái
    {
      name: "userRolesStatus",
      title: t("columns.admin.buildingInfo.Status"),
      tableItem: {
        sorter: true,
        width: 100,
        render: (value) =>value&& <span>{t("enum." + value)}</span>
      },
    },

    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 100,
        fixed: "right",
        align: "center  ",
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          // console.log("first",record)
          return (
            <Fragment>
              <div className="flex justify-center">
                {
                // record.userRolesStatus === "APPROVED" ? <Tooltip title={t("routes.admin.Layout.Edit")}>
                //   <button
                //     className={classNames("embed  text-xs mr-1",)}
                //     onClick={async () => {
                //       handleEdit(record);
                //     }}
                //   >
                //     <i className="las la-edit text-3xl text-blue-500 m-0 p-0"></i>
                //   </button>
                // </Tooltip> :
                  // <div
                  //   className={classNames("embed  text-xs mr-1 opacity-0",)}
                  // >
                  //   <i className="las la-edit p-0 m-0 text-3xl"></i>
                  // </div>
                }


                 {permissions.XOA_QUAN_LY_NHAN_VIEN_TOA_NHA && <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <button onClick={() => handleDelete(record)}
                    className="embed text-xs mr-2 mt-[3px]" >
                    <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                  </button>

                </Tooltip> }  

              </div>
            </Fragment>
          );
        },
      },
    },
  ];
};
export default Column;







