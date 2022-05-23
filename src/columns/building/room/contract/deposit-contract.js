import { Fragment } from "react";
import { Tooltip } from "antd";
import './index.less'
const Column = ({ t, listRoomNumber ,handleEdit,roomId}) => {
  return [
    //name buidling
     {
       name: "nameBuilding",
       title : t("Tên toà nhà"),
       formItem : {
         readOnly : true,
           rules : [{ type: "required" }]
       }
    },
    //roomId
    {
       name : "roomNumber",
       title : t("Mã phòng"),
       formItem : {
         type : "select",
         rules : [{ type: "required" }],
         list : listRoomNumber,
         onSelect:(value)=>{
           listRoomNumber.forEach(ele=>{
             if(ele.label===value) value =ele.id;
          })
           roomId(value);}
       }
    },
    //radio
    {
      name : "statusPayment",
      title : t("Trạng thái thanh toán"),
      formItem : {
        type : "radio",
        className: "pl-px",
         list: [ {
          value:"Đã thanh toán",
          label:"Đã thanh toán",
          style : { margin: "1rem"},
        },
        {
          value:"Chưa thanh toán",
          label:"Chưa thanh toán",
        },
       ]


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
