import { Fragment } from "react";
import {checkIdentityNumber} from "../../../utils"
import { Popconfirm, Tooltip } from "antd";
import { formatCurrency } from "utils";


const Column = ({ t,listContractCodeDeposit,listRoomNumber,getListDepositContractCodeRoom, handleEdit}) => {
  return [
        // name buidling
          {
              name : "nameBuilding",
              title: t("Tên toà nhà"),
              formItem: {
                  readOnly:true,
              }
          },
        //list RoomId
          {
             name : 'roomNumber',
             title: t("Danh sách phòng"),
             formItem: {
                type: 'select',
                rules : [{ type: "required" }],
                list:listRoomNumber,
                onSelect:async (value,label)=>{
                  console.log("first",value,label)
                  await getListDepositContractCodeRoom(value);
                },
             }
          },
          // List contract deposit
          {
              name : 'depositContractCode',
              title : t("Mã hợp đồng đặt cọc"),
              formItem: {
                type: "select",
                rules : [{ type: "required" }],
                list :listContractCodeDeposit ,
                condition:(value,form)=>form.getFieldValue('roomNumber'),
              }
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
                      className="embed border-0 text-xs rounded-lg mr-2"
                    onClick={() => {
                       handleEdit(record)}
                      }
                    >
                      <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                    </button>
                  </Tooltip>
                </div>
              </Fragment>
            );
          },
        },
      },
      ]
  }
export default Column;
