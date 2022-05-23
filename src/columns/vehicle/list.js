// import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import { Fragment } from "react";
import { Message } from "components";
import buildService from "services/building/building";
import { useNavigate } from "react-router";
import { Popconfirm, Tooltip } from 'antd';
import { routerLinks } from "utils";
import {convertTypeBuilding, } from "routes/admin/building/utils"

const Column = ({
  t,
  setReloadTable,
  handleEditVehicleForm,
}) => {
  const navigate = useNavigate();

  return [
    // cbql
    {
      name: "cbql",
      title: t("Cán bộ quản lý"),
      tableItem: {
        fixed: "left",
        width: 150,
        sorter: true,

      },
      formItem: {
        // col: 6,
        // rules: [{ type: "required" }],
        rules: [
          {
            type: "required",

          }
        ],
      },
    },

    //bks
    {
      name: "bks",
      title: t("BKS"),
      tableItem: {
        width: 150,

        sorter: true,
      },

      formItem: {
       placeholder:'',
      },
    },
    //type
    {
      name: "type",
      title: t("Chủng loại"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 150,

      },
      formItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),

      },
    },
    //số khung
    {
      name: "sokhung",
      title: t("Số khung"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),

      },
    },
     //số máy
     {
      name: "somay",
      title: t("Số máy"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),

      },
    },
    //loại bằng
    {
      name: "loaibang",
      title: t("Loại bằng"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),

      },
    },
    //loại bằng
    {
      name: "cavet",
      title: t("Cà vẹt số"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),

      },
    },
    //năm sx
    {
      name: "namsx",
      title: t("Năm sản xuất"),
      tableItem: {
        placeholder: t("Năm sản xuất"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Năm sản xuất"),

      },
    },
     //ngày kiểm định
     {
      name: "ngaykd",
      title: t("Ngày kiểm định"),
      tableItem: {
        placeholder: t("Ngày kiểm định"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Ngày kiểm định"),

      },
    },
     //ghi chú
     {
      name: "ghichu",
      title: t("Ghi chú"),
      tableItem: {
        placeholder: t("Ghi chú"),
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Ghi chú"),

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
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed  text-xs mr-1"
                    onClick={async () => {
                      // handleEdit({ id: record.id });
                      // navigate(`${routerLinks("Building list")}/edit-${record.id}`)
                      handleEditVehicleForm(record)
                    }}

                  >
                    <i className="las la-edit text-3xl text-blue-500 m-0 p-0"></i>

                  </button>
                </Tooltip>

                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      () => {
                        buildService.buildingManagement.deleteBuilding(
                          record.id,
                          t,
                          setReloadTable
                        );
                      }
                    }
                    okText={t("components.datatable.ok")}
                    cancelText={t("components.datatable.cancel")} >
                    <button
                      className="embed  text-xs rounded-lg mr-2">
                      <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                    </button>
                  </Popconfirm>

                </Tooltip>
              </div>
            </Fragment>
          );
        },
      },
    },
  ];
};
export default Column;
