// import EditIcon from "assets/svg/edit.js";
// import RemoveIcon from "assets/svg/remove.js";
import { Fragment } from "react";
import { Popconfirm, Tooltip } from 'antd';


const Column = ({
  t,
  handleEdit,
  handleDelete,
  idBuilding,
  permissions
}) => {
  return [
    // Room rules
    {
      name: "regulation",
      title: t("columns.admin.roomRules.Regulations"),
      tableItem: {
        width: 300,
        // sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),

      },
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomRules.Regulations"),
        type:'string',
        rules: [{ type: "required" } ,
        { type: "max", value: 255 },

      ],
      },
    },

    //Rules content
    {
      name: "content",
      title: t("columns.admin.roomRules.Content"),
      tableItem: {

      },

      formItem: {
        placeholder: t("columns.admin.roomRules.Content"),
        rules: [{ type: "required"},
        { type: "max", value: 1000 },


      ],
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
                {permissions.SUA_QUAN_LY_NOI_QUY_TOA_NHA && 
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed  text-xs mr-1"
                    onClick={() => handleEdit(record)}
                  >
                 <i className="las la-edit p-0 m-0 text-3xl text-blue-500"></i>
                  </button>
                </Tooltip>
                }
                  {permissions.XOA_QUAN_LY_NOI_QUY_TOA_NHA && 
                  <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      () => {
                        handleDelete({ ...record, idBuilding })
                        // setReloadTable();
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
