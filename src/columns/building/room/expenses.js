
import { Fragment } from "react";
import {formatCurrency} from "utils"
import { Popconfirm, Tooltip } from "antd";

export const roomExpensesForm = ({
  t,
  handleEdit,
  handleDelete,
  permissions
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
            type: "textarea",
            rules:[{type:"required"}]

        }
    },
    // price
    {
        name:"unitPrice",
        title:t("columns.building_list.Price"),
        tableItem:{
            width:100,
            render:(text)=>{
              return formatCurrency(text,"")
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
          }]
        }
    },
    // unit
    {
        name:"unit",
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
          align: "center  ",
          onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
          render: (text, record) => {
            return (
              <Fragment>
                <div className="flex justify-center">
                  {permissions.SUA_QUAN_LY_CHI_PHI_PHONG &&
                   <Tooltip title={t("routes.admin.Layout.Edit")}>
                   <button
                     className="embed text-xs mr-2"
                     onClick={async () => {
                       record.unitPrice=record.unitPrice.split(" ")[0];

                         handleEdit(record);
                     }}
                   >
                     <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                   </button>
                 </Tooltip>
                    }


                {permissions.XOA_QUAN_LY_CHI_PHI_PHONG &&
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
                      <button className="embed text-xs mr-2 mt-[4px]">
                        <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                      </button>
                    </Popconfirm>

                      {/* <button
                        className="embed text-xs p-1"
                        onClick={()=>Message.request(
                          t("components.message.Confirm Delete"),
                          t("components.message.Are you sure want to delete", {
                            object: t("columns.admin.building.cost")
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
]
};

export const roomExpensesSelectForm = ({
  t,
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
            type: "textarea",
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
        name:"unit",
        title:t("columns.building_list.Unit"),
        formItem:{
            placeholder:t("columns.building_list.Unit"),
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
            }]
          }
        }
    },

]
};
