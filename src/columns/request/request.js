// import EditIcon from "assets/svg/edit.js";
import RemoveIcon from "assets/svg/remove.js";
import { Fragment } from "react";
import { Message } from "components";
import buildService from "services/building/building";
import { useNavigate } from "react-router";
import { Popconfirm, Select, Tooltip } from 'antd';
import { routerLinks } from "utils";
import { convertTypeBuilding, } from "routes/admin/building/utils"
import moment from "moment";

const Column = ({
  t,
  setReloadTable,
  handleEditVehicleForm,
  status = 'init',
  formatDate,
  handleEditRole,
  handleEdit,
}) => {
  const navigate = useNavigate();

  return [
    // thoigiancongtac
    {
      name: "thoigiancongtac",
      title: t("Thời gian đi công tác"),
      tableItem: {
        fixed: "left",
        width: 150,
        sorter: true,
        render: (text) => moment(text).format("YYYY-MM-DD h:mm"),

      },
      formItem: {
        // col: 6,
        // rules: [{ type: "required" }],
        type: 'date',
        showTime: true,
        readOnly: true,
        rules: [
          {
            type: "required",

          }
        ],
      },
    },

    //use
    {
      name: "use",
      title: t("Người điều khiển"),
      tableItem: {
        width: 150,

        sorter: true,
      },

      formItem: {
        readOnly: true,

        placeholder: 'Người điều khiển',
      },
    },
    //bks
    {
      name: "bks",
      title: t("Biển kiểm soát"),
      tableItem: {
        sorter: true,
        width: 150,

      },
      formItem: {
        type: 'select',
        placeholder: t("Biển kiểm soát"),
      },
    },
    //bhcp
    {
      name: "bhcp",
      title: t("BHCP Duyệt"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        readOnly: true,
        placeholder: t("BHCP Duyệt"),
        condition: () => status === 'init' ? false : true
      },
    },
    //bchd1
    {
      name: "bchd1",
      title: t("Xác nhận ban chấp hành đội 1"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Xác nhận ban chấp hành đội 1"),
        readOnly: true,
        condition: () => status === 'init' ? false : true

      },
    },
    //canBoDeXuat
    {
      name: "canBoDeXuat",
      title: t("Cán bộ đề xuất"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Cán bộ đề xuất"),
        readOnly: true,
        condition: () => status === 'init' ? false : true

      },
    },
    //bchdDuyet
    {
      name: "bchdDuyet",
      title: t("BCH đội duyệt"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("BCH đội duyệt"),
        readOnly: true,
        condition: () => status === 'init' ? false : true
      },
    },
    //diaDiemDen
    {
      name: "diaDiemDen",
      title: t("Địa điểm đến"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Địa điểm đến"),

      },
    },
    //lyDo
    {
      name: "lyDo",
      title: t("Lý do xin xe"),
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Lý do xin xe"),

      },
    },
    //nlthKhiDi
    {
      name: "nlthKhiDi",
      title: "Nhiên liệu tiêu hao khi đi (lít)",
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Nhiên liệu tiêu hao khi đi (lít)"),

      },
    },
    //nlthKhiVe
    {
      name: "nlthKhiVe",
      title: "Nhiên liệu tiêu hao khi về (lít)",
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Nhiên liệu tiêu hao khi về (lít)"),

      },
    },
    //thoi gian ve don vi
    {
      name: "thoiGianVeDonVi",
      title: "Thời gian về đơn vị (ngày)",
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Thời gian về đơn vị (ngày)"),

      },
    },
    //Ghi chú
    {
      name: "ghiChu",
      title: "Ghi chú",
      tableItem: {
        sorter: true,
        width: 300,
      },
      formItem: {
        placeholder: t("Ghi chú"),

      },
    },
    // Trạng thái
    //Phê duyệt
    {
      name: "statusApprove",
      title: "Trạng thái",
      tableItem: {
        placeholder: t("Trạng thái"),
        sorter: true,
        width: 300,
      },

    },
    //Phê duyệt
    {
      name: "approve",
      // title: "Ghi chú",

      formItem: {
        type: "radio",
        className: "pl-px",
        list: [{
          label: " Duyệt yêu cầu",
          value: "approved",
          style: { margin: "1rem" },
        },
        {
          label: " Không duyệt",
          value: "deny",
        },
        ]
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
                {status === 'init ' ?
                  <Tooltip title={t("routes.admin.Layout.Edit")}>
                    <button
                      className="embed  text-xs mr-1"
                      onClick={async () => {
                        // handleEdit({ id: record.id });
                        // navigate(`${routerLinks("Building list")}/edit-${record.id}`)
                        handleEditRole(record)
                      }}

                    >
                      <i className="las la-edit text-3xl text-blue-500 m-0 p-0"></i>

                    </button>
                  </Tooltip> :
                  <Tooltip title={t("Duyệt")}>
                    <button
                      className="embed  text-xs mr-1"
                      onClick={async () => {
                        // handleEdit({ id: record.id });
                        // navigate(`${routerLinks("Building list")}/edit-${record.id}`)
                        handleEdit(record)
                      }}

                    >
                      <i className="las la-edit text-3xl text-blue-500 m-0 p-0"></i>

                    </button>
                  </Tooltip>
                }


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
