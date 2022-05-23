
import { Fragment } from "react";
import { Popconfirm, Tooltip } from 'antd';
import moment from "moment";
import { useNavigate } from "react-router";
import { formatCurrency,  } from "utils";
import {convertTypeRoom, } from "routes/admin/building/detail/room/utils"

const Column = ({
  t,
  formatDate,
  handleEdit,
  handleDelete,
  location,
  permissions
}) => {
  const navigate = useNavigate();
  return [
    // name
    {
      name: "roomNumber",
      title: t("columns.admin.roomInfo.Room Name"),
      tableItem: {
        fixed: "left",
        width: 200,
        sorter: true,
        onCell: (record) => ({
          style: { paddingTop: "0.25rem", paddingBottom: 0 },
          onClick: async () => {
            navigate(`${location.pathname}/detail-room-${record.id}`)
          }
        }),
        render: (text, record) => (
          <span
            className="cursor-pointer hover:border-b-2"
          >
            {record.roomNumber}
          </span>
        ),
      },
      formItem: {
        col: 6,
        rules: [{ type: "required" }],
      },
    },
    //Tenants Name
    {
      name: "name",
      title: t("columns.admin.roomInfo.Tenants Name"),
      tableItem: {
        width: 150,
        sorter: true,
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.buildingInfo.Building Type"),
        type: "select",
        rules: [{ type: "required" }],
      },
    },
    //Tenants Phone
    {
      name: "phoneNumber",
      title: t("columns.admin.roomInfo.Tenants Phone"),
      tableItem: {
        width: 150,
        sorter: true,
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.buildingInfo.Building Type"),
        type: "select",
        rules: [{ type: "required" }],
      },
    },

    //price
    {
      name: "price",
      title: t("columns.admin.roomInfo.Price"),
      tableItem: {
        sorter: true,
        width: 150,
        render: (text) => formatCurrency(text, "")
      },
    },

    //Rented start day
    {
      name: "dateIntoHome",
      title: t("columns.admin.roomInfo.Start Date"),
      tableItem: {
        width: 200,
        sorter: true,
        render: (text) => moment(text).format(formatDate)
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.buildingInfo.Building Type"),
        type: "select",
        rules: [{ type: "required" }],
      },
    },

    //Rented end day
    {
      name: "dateOutHome",
      title: t("columns.admin.roomInfo.End Date"),
      tableItem: {
        width: 200,
        sorter: true,
        render: (text) => moment(text).format(formatDate)
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.buildingInfo.Building Type"),
        type: "select",
        rules: [{ type: "required" }],
      },
    },

    //Giá cọc deposit price
    {
      name: "deposit",
      title: t("columns.admin.roomInfo.Deposit Price"),
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        }
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.buildingInfo.Building Type"),
        type: "select",
        rules: [{ type: "required" }],
      },
    },

    //status
    {
      name: "status",
      title: t("columns.admin.roomInfo.Status"),
      tableItem: {
        sorter: true,
        width: 130,
        onCell: () => ({
          style:
            { paddingTop: "0.25rem", paddingBottom: 0 }
        }),
        render: (text) =>  convertTypeRoom(text,t),
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
              {permissions?.SUA_QUAN_LY_DS_PHONG_TOA_NHA &&  
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed  text-xs mr-2"
                    onClick={() =>handleEdit(record)}
                  >
                    <i className="las la-edit m-0 p-0 text-3xl text-blue-500" />
                  </button>
                </Tooltip>
              }
              {permissions?.XOA_QUAN_LY_DS_PHONG_TOA_NHA && 
                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={() => handleDelete(record)}
                    okText={t("components.datatable.ok")}
                    cancelText={t("components.datatable.cancel")}
                  >
                    <button
                      className="embed text-xs mr-2 mt-[3px]"
                    >
                      {/* <RemoveIcon/> */}
                      <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                    </button>
                  </Popconfirm>
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
