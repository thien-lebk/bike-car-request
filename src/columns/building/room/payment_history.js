import { Fragment } from "react";
// import { Message } from "components";
import { Popconfirm, Tooltip } from "antd";
import { formatCurrency } from "utils";

const Column = ({ t, listData, handleEdit, handleDelete,permissions }) => {
  return [
    // paymentTerm
    {
      name: "paymentTerm",
      title: t("Hạn thanh toán"),
      tableItem: {
        fixed: "left",
        width: 200,
        sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
      formItem: {
        placeholder:t("Hạn thanh toán"),
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        rules: [{ type: "required"}],
      },
    },
    // rent
    {
      name: "price",
      title: t("Tiền thuê tháng (VND)"),
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        }
      },
      formItem: {
        // condition:(values, form) => form.getFieldValue('status') === 'EMPTY',
        placeholder: t("columns.admin.roomInfo.Bonus"),
        mask: {
          'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': true, 'prefix': '',
          'placeholder': '0',
        },
      },
    },

    // status
    {
      name: "status",
      title: t("Trạng thái"),
      tableItem: {
        sorter: true,
        width: 150,
        render: (text) => (
         text==='PAID'?t("Đã thanh toán"):t("Chờ thanh toán")
        ),
      },
      formItem: {
        type: "select",
        placeholder: t("Trạng thái"),
        // className:"border-gray-400 border rounded-xl ",
        rules:[{type:"required"}],
        list: [
          {
            value: 'PAID',
            label: t("Đã thanh toán"),
          },
          {
            value: 'PENDING',
            label: t("Chờ thanh toán"),
          },
        ],
      },
    },
// Số tiền đã thanh toán amountMoney
    {
      name: "amountMoney",
      title: t("Số tiền đã thanh toán (VND)"),
      tableItem: {
        width: 170,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        }
      },
      formItem: {
        placeholder: t("Số tiền đã thanh toán (VND)"),
        mask: {
          'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': true, 'prefix': '',
          'placeholder': '0',
        },
        rules: [
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (value === '') {
                  return Promise.reject(t("components.form.ruleRequired"));
                }
                else if (!value || /^[+]?\d+(,*\d+)*(\.\d+)?$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only number"));
              }
            })
          }
        ],
      },
    },
    // paymentTime
    {
      name: "paymentTime",
      title: t("Thời gian thanh toán"),
      tableItem: {
        width: 170,
        sorter: true,
      },
      formItem: {
        type: "date",
        placeholder: t("Thời gian thanh toán"),
        className:"border-gray-400 border rounded-xl w-full",
        rules: [{ type: "required"},
        // {
        //   type: "custom",
        //   validator: ({getFieldValue}) => ({
        //     validator(_, value ) {
        //       if(getFieldValue('paymentTerm')){
        //         if(new Date(getFieldValue('paymentTerm')) > new Date(value)){

        //         }
        //       }

        //     }
        //   })
        // }

      ],
      },
    },
    // oldDebt
    {
      name: "oldDebt",
      title: t("Nợ cũ (VND)"),
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        },

      },
      formItem: {
        placeholder: t("Nợ cũ (VND)"),
        mask: {
          'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': true, 'prefix': '',
          'placeholder': '0',
        },
        rules: [
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (value === '') {
                  return Promise.reject(t("components.form.ruleRequired"));
                }
                else if (!value || /^[+]?\d+(,*\d+)*(\.\d+)?$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only number"));
              }
            })
          }
        ],
      },
    },
    // newDebt
    {
      name: "newDebt",
      title: t("Nợ mới (VND)"),
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        },

      },
      formItem: {
        placeholder: t("Nợ mới (VND)"),
        mask: {
          'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': true, 'prefix': '',
          'placeholder': '0',
        },
        rules: [
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (value === '') {
                  return Promise.reject(t("components.form.ruleRequired"));
                }
                else if (!value || /^[+]?\d+(,*\d+)*(\.\d+)?$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only number"));
              }
            })
          }
        ],
      },
    },
    // totalMoney
    {
      name: "totalMoney",
      title: t("Tổng thu (VND)"),
      tableItem: {
        width: 170,
        sorter: true,
        render: (text) => {
          return formatCurrency(text, "")
        },

      },
      formItem: {
        placeholder: t("Tổng thu (VND)"),
        mask: {
          'alias': 'numeric', 'groupSeparator': ',', 'digitsOptional': true, 'prefix': '',
          'placeholder': '0',
        },
        rules: [
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (value === '') {
                  return Promise.reject(t("components.form.ruleRequired"));
                }
                else if (!value || /^[+]?\d+(,*\d+)*(\.\d+)?$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only number"));
              }
            })
          }
        ],
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
                {permissions.SUA_QUAN_LY_LS_THANH_TOAN_PHONG &&
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed border-0 text-xs rounded-lg mr-2"
                    onClick={() => {
                      let year_arr=record.paymentTerm.split("/");
                      let paymentTermTemp=new Date(year_arr[2],year_arr[1],year_arr[0]);
                      year_arr=record.paymentTime.split("/");
                      let paymentTimeTemp=new Date(year_arr[2],year_arr[1],year_arr[0]);
                      let record_temp={...record,paymentTerm:paymentTermTemp,paymentTime:paymentTimeTemp}
                      handleEdit(record_temp)}
                      }
                  >
                    <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                  </button>
                </Tooltip>
                }
                {permissions.XOA_QUAN_LY_LS_THANH_TOAN_PHONG &&
                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <Popconfirm
                    placement="left"
                    title={t("components.datatable.areYouSureWant")}
                    icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                    onConfirm={
                      () => { handleDelete(record); }
                    }
                    okText={t("components.datatable.ok")}
                    cancelText={t("components.datatable.cancel")} >
                    <button className="embed text-xs mr-2 mt-[5px]">
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
