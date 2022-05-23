import { Fragment } from "react";
// import { Message } from "components";
// import moment from "moment";
import { Popconfirm, Tooltip } from "antd";
import moment from "moment";

const Column = ({
  t,
  handleEdit,
  handleDelete,
  permissions
}) => {
  return [
    // Room rules
    {
      name: "customerName",
      title: t("Tên khách hàng"),
      tableItem: {
        width: 300,
        // sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),

      },
      formItem: {
        placeholder: t("Tên khách hàng"),
        rules: [{ type: "required" }],
      },
    },

    //phone number
    {
        name: "customerPhoneNumber",
        title: t("columns.auth.register.Phone Number"),
        formItem: {
          placeholder: t("columns.auth.register.Phone Number"),
          rules: [
            { type: "required" },
            { type: "min", value: 4 },
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
      tableItem: {
        // width: 350,
        // sorter: true,
        width: 300,
      },
    },

    // appointmentTime
    {
        name: "appointmentTime",
        title: t("Lịch hẹn xem phòng"),
        tableItem: {
          width: 300,
          // sorter: true,
          onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
          render:(value)=><span>{moment(value).format("LT")+" "+moment(value).format("L")}</span>
        },
        formItem: {
          placeholder: t("Thời gian"),
          className:"border-gray-400 border rounded-xl w-full",
          type:"date",
          showTime:true,
          rules: [{ type: "required" }],
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
                {permissions.SUA_QUAN_LY_LICH_XEM_PHONG &&
                  <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed border-0 border-gray-300 text-xs rounded-lg mr-2"
                    onClick={() => {
                      handleEdit(record)}}
                  >
                   <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                  </button>
                 </Tooltip>
                }
               {permissions.XOA_QUAN_LY_LICH_XEM_PHONG &&
                  <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      ()=> {
                        handleDelete(record);
                      }
                    }
                    okText={t("components.datatable.ok")}
                    cancelText={t("components.datatable.cancel")}>
                    <button
                      className="embed text-xs mr-2 mt-[3px]" >
                      <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                    </button>
                  </Popconfirm>

                    {/* <button
                      className="embed border-0 border-gray-300 text-xs rounded-lg p-1"
                      onClick={()=>Message.request(
                        t("components.message.Confirm Delete"),
                        t("components.message.Are you sure want to delete", {
                          object: t("columns.admin.building.schedule to see the room")
                        }),
                        false,
                        ()=> {
                          handleDelete(record);
                        }
                      )}
                    >
                   <span className="uhome-trash p-0 m-0 text-red-500 text-2xl"></span>
                    </button> */}
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
