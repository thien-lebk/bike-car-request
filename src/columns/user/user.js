import { Popconfirm, Tooltip } from "antd";
// import EditIcon from "assets/svg/edit.js";
// import RemoveIcon from "assets/svg/remove.js";
import {checkIdentityNumber} from "../utils"
import { Fragment } from "react";
import moment from "moment";
import { UserService } from "services/user";

const Column = ({ t, formatDate, handleEdit, handleDelete, setReloadTable, grantLandlord }) => {
  return [
    // fullname
    {
      title: t("columns.auth.register.Fullname"),
      name: "name",
      tableItem: {
        fixed: "left",
        width: 200,
        sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
      formItem: {
        rules: [{ type: "required" }],
      },
    },

    // gender
    {
      title: t("columns.auth.register.Gender"),
      name: "gender",
      tableItem: {
        sorter: true,
        width: 100,
        render:(text)=>t(`enum.${text}`)
      },
      formItem: {
        col: 4,
        placeholder: t("columns.auth.register.Gender"),
        // className: "border-gray-400 border rounded-xl",
        type: "select",
        rules: [{ type: "required" }, { type: "select" }],
        list: [
          {
            value:"MALE",
            label: t("columns.auth.register.Male"),
          },
          {
            value: "FEMALE",
            label: t("columns.auth.register.Female"),
          },
        ],
      },
    },
    //dateOfBirth
    {
      title: t("columns.auth.register.Birth Date"),
      name: "dateOfBirth",
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => moment(text).format(formatDate),
      },
      formItem: {
        placeholder: t("columns.auth.register.Birth Date"),
        // className: "border-gray-400 border rounded-xl",
        type: "date",
        rules: [{ type: "required" }, { type: "date" }],
        col: 4,
      },
    },
    //identify card
    {
      name: "identityCard",
      title: t("columns.auth.register.Identity Number"),
      tableItem: {
        width: 220,
        sorter: true,
      },
      formItem: {
        placeholder: t("columns.auth.register.Identity Number"),
        // type: "only_number",
        rules: checkIdentityNumber(),
      },
    },
    // phone number
    {
      name: "phoneNumber",
      title: t("columns.auth.register.Phone Number"),
      tableItem: {
        sorter: true,
        width: 150,
      },
      formItem: {
        placeholder: t("columns.auth.register.Phone Number"),
        rules: [
          { type: "required" },
          { type: "min", value: 9 },
          { type: "max", value: 15 },
          { type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^\+?\d+[-\s]?[0-9]+[-\s]?[0-9]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("columns.auth.register.Phone number Rule"));
              }
            })
          }
        ],
      },
    },
    // email
    {
      title: t("columns.auth.register.Email"),
      name: "email",
      tableItem: {
        sorter: true,
        width: 200,
      },
      formItem: {
        rules: [{ type: "required" }, { type: "email" }],
      },
    },
    // Role
    {
      title: t("columns.admin.user.Role"),
      name: "isAdmin",
      tableItem: {
        sorter: true,
        width: 200,
        render: (text) =>
          (<span> {text ? 'Chủ nhà' : 'Người dùng'}</span>)
      },
    },
    // contract
    {
      title: t("columns.auth.register.Contract"),
      name: "contract",
      tableItem: {
        sorter: true,
        width: 200,
      },
    },

    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 130,
        fixed: "right",
        // className:"flex justify-center",
        align: "center",
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          // console.log(text, record);
          return (
            <Fragment>
              <div className="flex justify-center">
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed text-xs mr-2"
                    onClick={async () => {
                      // get user detail
                      const { data } = await UserService.userManagement.GetUserDetail(record.id, t, setReloadTable);
                      handleEdit(data)
                    }
                    }
                  >
                    <i className="las la-edit m-0 p-0 text-3xl text-blue-500"></i>
                  </button>
                </Tooltip>

                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      () => UserService.userManagement.delete(record.id, t, setReloadTable)
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
                </Tooltip>


              
                
                
                {!record.isAdmin ? (
                  <Fragment>
                    <Tooltip title={t("routes.admin.Layout.Ownership Approve")}>
                      <button
                        className="embed text-xs mr-2 "
                        onClick={() => grantLandlord(record)
                        }
                      >
                        <span className="uhome-success-standard m-0 px-2 text-xl text-green-500 font-bold"></span>
                      </button>
                    </Tooltip>
                  </Fragment>

                ) : (
                  <div>  
                    <Tooltip>
                  <button
                    className="embed text-xs mr-3"
                  >
                    <span  className=" m-0 px-4 text-xl text-green-500 font-bold " style={{visibility: 'hidden'}} ></span>
                  </button>
                </Tooltip></div>
                )}
              </div>
              {/* </div> */}
            </Fragment>
          );
        },
      },
    },
    // address
    {
      name: "address",
      title: t("columns.auth.register.Address"),
      formItem: {
        placeholder: t("columns.auth.register.Address"),
        rules: [{ type: "required" }, { type: "textarea" }],
      },
    },
  ];
};
export default Column;
