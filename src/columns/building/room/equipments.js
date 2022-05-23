import { Fragment } from "react";
import { Popconfirm, Tooltip } from "antd";

const Column = ({ t, handleEdit, handleDelete, permissions }) => {
  return [
    // Expenses Name
    {
      name: "service",
      title: t("columns.admin.roomInfo.Equipment"),
      tableItem: {
        fixed: "left",
        width: 150,
        sorter: false,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
      formItem: {
        rules: [{ type: "required" }],
      },
    },

    // Description
    {
      name: "description",
      title: t("columns.admin.expenses.Description"),
      tableItem: {
        sorter: false,
        width: 250,
        // render: (text) => (
        //   <div style={{ wordWrap: "break-word", wordBreak: "break-word" }}>
        //     {text}
        //   </div>
        // ),
      },
      formItem: {
        type: "textarea",
      },
    },

    // Quantity
    {
      name: "quantity",
      title: t("columns.admin.roomInfo.Quantity"),
      tableItem: {
        width: 50,
        sorter: false,
      },
      formItem: {
        type: "number",
        rules: [{ type: "required" }],
      },
    },

    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 120,
        fixed: "right",
        align: "center",
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          return (
            <Fragment>
              <div className="flex justify-center">
              {permissions?.SUA_QUAN_LY_THIET_BI_PHONG   &&

                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed text-xs mr-2"
                    onClick={() => handleEdit(record)}
                  >
                    <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                  </button>
                </Tooltip>
                }
                 {permissions?.XOA_QUAN_LY_THIET_BI_PHONG   &&
                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      () => {
                        handleDelete(record);
                      }
                    }
                    okText={t("components.datatable.ok")}
                    cancelText={t("components.datatable.cancel")}>
                    <button
                      className="embed text-xs mr-2 mt-[5px]">
                      {/* <RemoveIcon/> */}
                      <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                    </button>
                  </Popconfirm>
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

export const ColumnSelectEquipment = ({ t, listData, setEditEquipmentForm }) => {
  return [
    // Name
    {
      name: "service",
      title: t("columns.admin.roomInfo.Equipment"),
      formItem: {
        type: "select",
        rules: [{ type: "required" }],
        list: listData,
        // className:"border-gray-400 border rounded-xl",
        onSelect:(value)=>{
          let object = listData.find((ele) => ele.id===value);
          let object1={...object,id:undefined};
          setEditEquipmentForm(object1);
        }
      },
    },

    // Description
    {
      name: "description",
      title: t("columns.admin.expenses.Description"),
      formItem: {
        type: "textarea",
      },
    },

    // Quantity
    {
      name: "quantity",
      title: t("columns.admin.roomInfo.Quantity"),
      formItem: {
        type: "number",
        rules: [{ type: "required" }],
      },
    },
  ];
};
