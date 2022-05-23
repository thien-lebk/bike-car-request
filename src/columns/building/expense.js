import { Fragment } from "react";
// import { Message } from "components";
import { Popconfirm, Tooltip } from 'antd';
import {formatCurrency} from "utils"

export const ColumnExpenses = ({
  t,
  formatDate,
  handleEdit,
  handleDelete,
  permissions,
}) => {
  return [
    // Expenses
    {
        name:"name",
        title:t("columns.building_list.Cost"),
        tableItem:{
            fixed:"left",
            width:100,

        },
        formItem:{
            placeholder:t("columns.building_list.Cost"),
            rules:[{type:"required"}],
            // onChange:(e)=>{console.log("onChange",e.target.value)}
        }
    },
    // description
    {
        name:"description",
        title:t("columns.building_list.Description"),
        tableItem:{
            width:300,
        },
        formItem:{
            placeholder:t("columns.building_list.Description"),
            rules:[{type:"required"}]
        }
    },
    // price
    {
        name:"unitPrice",
        title:t("columns.building_list.Price"),
        tableItem:{
            width:150,
            render:(text)=>{
             return formatCurrency(text ,"")
            }
        },
        formItem:{
            placeholder:t("columns.building_list.Price"),
            rules:[{type:"required"},
            { type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^\d*(\.\d+)?$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("Chỉ nhập số"));
              }
            })
          }
          ]
        }
    },
    // unit
    {
        name:"calculationUnit",
        title:t("columns.building_list.Unit"),
        tableItem:{
            width:100,
        },
        formItem:{
            placeholder:t("columns.building_list.Unit"),
            rules:[{type:"required"}]
        }
    },

    // action
    {
        title: t("columns.admin.user.Action"),
        tableItem: {
          width: 120,
          fixed: "right",
        align: "left  ",
          onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
          render: (text, record) => {
            return (
              <Fragment>
                <div className="flex justify-center">
                  {permissions.SUA_QUAN_LY_CHI_PHI_TOA_NHA &&              
                  <Tooltip title={t("routes.admin.Layout.Edit")}>
                    <button
                      className="embed text-xs mr-2"
                      onClick={async () => {
                          handleEdit(record);
                      }}
                    >
                      <i className="las la-edit p-0 m-0 text-3xl text-blue-500"></i>
                    </button>
                   </Tooltip>
                    }
                    {permissions.XOA_QUAN_LY_CHI_PHI_TOA_NHA && 
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
                    <button className="embed text-xs mr-2 mt-[3px]" >
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
]
};
export const ColumnSelectxpenses = ({
  t,
  formatDate,
  expensesList,
  setEditExpenseForm
}) => {
  return [
    // Expenses
    {
        name:"name",
        title:t("columns.building_list.Cost"),
        formItem:{
          placeholder: t("columns.building_list.Cost"),
          type: "select",
        // className:"border-gray-400 border rounded-xl",
          rules:[{type:"required"}],
          list: expensesList,
          onSelect:(value)=>{
            let object=expensesList.find((ele)=>ele.id===value);
            let object1={...object, id: undefined, unit: object.calculationUnit };
            setEditExpenseForm(object1);
          }
        }
    },
    // description
    {
        name:"description",
        title:t("columns.building_list.Description"),
        formItem:{
            placeholder:t("columns.building_list.Description"),
            rules:[{type:"required"}]
        }
    },
    // price
    {
        name:"unitPrice",
        title:t("columns.building_list.Price"),
        formItem:{
            placeholder:t("columns.building_list.Price"),
            rules:[{type:"required"}]
        }
    },
    // unit
    {
        name:"calculationUnit",
        title:t("columns.building_list.Unit"),
        formItem:{
            placeholder:t("columns.building_list.Unit"),
            rules:[{type:"required"}]
        }
    },

]
};
