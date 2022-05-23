
import { Fragment } from "react";
// import { Message } from "components";
// import buildService from "services/building/building";
import { Popconfirm, Tooltip } from "antd";

const Column = ({
  t,
  handleEdit,
  handleDelete,
  permissions
}) => {
  return [
    // Room rules
    {
      name: "regulation",
      title: t("columns.admin.roomRules.Regulations"),
      tableItem: {
        width: 150,
        // sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),

      },
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomRules.Regulations"),
        rules: [{ type: "required" }],
      },
    },

    //Rules content
    {
      name: "content",
      title: t("columns.admin.roomRules.Content"),
      tableItem: {
        width: 300,
        // sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),

      },
      formItem: {
        placeholder: t("columns.admin.roomRules.Content"),
        rules: [{ type: "required" }],
        type: "textarea",
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
                {permissions.SUA_QUAN_LY_NOI_QUY_PHONG &&
                    <Tooltip title={t("routes.admin.Layout.Edit")}>
                    <button
                      className="embed  text-xs rounded-lg mr-1"
                      onClick={() => handleEdit(record)}
                    >
                   {/* <i className="las la-edit m-0 p-0 text-3xl text-blue-500"></i> */}
                   <i className="las la-edit p-0 m-0 text-3xl text-blue-500"></i>
  
                      {/* <EditIcon /> */}
                    </button>
                  </Tooltip>
                }
                {permissions.XOA_QUAN_LY_NOI_QUY_PHONG && 
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
                    cancelText={t("components.datatable.cancel")} >
                    <button
                      className="embed text-xs mr-2 mt-[2px]" >
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
