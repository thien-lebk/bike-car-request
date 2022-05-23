
import { Fragment } from "react";
// import { Message } from "components";
import { Popconfirm, Tooltip } from 'antd';

export const ColumnUtil = ({
    t,
    handleEdit,
    handleDelete,
    permissions
  }) => {
    return [
      // Utility
      {
          name:"name",
          title:t("columns.building_list.Utility"),
          tableItem:{
              fixed:"left",
              width:100,

          },
          formItem:{
              placeholder:t("columns.building_list.Utility"),
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
          }
      },
      // action
      {
          title: t("columns.admin.user.Action"),
          tableItem: {
            width: 120,
            fixed: "right",
            align: "center ",
            onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
            render: (text, record) => {
              return (
                <Fragment>
                  <div className="flex justify-center">
                
                {permissions.SUA_QUAN_LY_TIEN_ICH_TOA_NHA &&
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                   <button
                     className="embed text-xs mr-2"
                     onClick={async () => {
                         handleEdit(record);
                     }}
                   >
                      <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                   </button>
                 </Tooltip>
                }  
                   
                   {permissions.XOA_QUAN_LY_TIEN_ICH_TOA_NHA &&
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
                          className="embed text-xs mr-2 mt-[5px]">
                          <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                        </button>
                      </Popconfirm>
                      {/*
                      <button
                        className="embed text-xs p-1"
                        onClick={() => Message.request(
                          t("components.message.Confirm Delete"),
                          t("components.message.Are you sure want to delete", {
                            object: t("columns.admin.building.Utility")
                          }),
                          false,
                          () => {
                            handleDelete(record);
                            // buildService.buildingManagement.deleteBuilding(record.id, t, setReloadTable);
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
  export const ColumnSelectUtil = ({
    t,
    utilitiesList,
    setEditUtilForm,
  }) => {
    return [
      // Utility
      {
          name:"name",
          // className:"border-gray-400 border rounded-xl",
          title:t("columns.building_list.Utility"),
          formItem:{
              placeholder: t("columns.auth.register.Gender"),
          // className:"border-gray-400 border rounded-xl",
              type: "select",
              rules:[{type:"required"}],
              list: utilitiesList,
              onSelect:(value)=>{
                let object=utilitiesList.find((ele)=>ele.id===value);
                let object1={...object,id:undefined,name:object.label};
                setEditUtilForm(object1);
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
          }
      },
  ]
  };
