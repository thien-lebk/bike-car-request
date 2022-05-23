import EditIcon from "assets/svg/edit.js";
// import RemoveIcon from "assets/svg/remove.js";
import { Fragment } from "react";
import { Tooltip } from "antd";
import { Message } from "components";
// import buildService from "services/building/building";

const Column = ({
  t,
  formatDate,
  handleEdit,
  utilities,
  handleDelete,
  setReloadTable,
  handleRoomListChange,
  handleShowRoomInfo,
  getRoomInfo,
  setIsLoading,
  setIdRoom,
}) => {
  return [
    // name
    {
      name: "roomNumber",
      title: t("columns.admin.roomInfo.Room Name"),
      tableItem: {
        fixed: "left",
        width: 200,
        sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => (
          <span
            onClick={async () => {
              const data = await getRoomInfo(record.id, setIsLoading);
              let arr = data?.buildingManager.map((ele, index) => {
                ele.managers.description = ele.description;
                return ele.managers;
              })
              handleShowRoomInfo({
                general: data?.generalInfo,
                expenses: data?.costInfo,
                utils: data?.utilitiesInfo,
                buildingManager: arr
              });
              setIdRoom(record.id)
            }
            }
            className="cursor-pointer hover:border-b-2"
          >
            {record.name}
          </span>
        ),
      },
      formItem: {
        col: 6,
        rules: [{ type: "required" }],
      },
    },

    //Room type
    {
      name: "type",
      title: t("columns.admin.roomInfo.Room Type"),
      tableItem: {
        width: 150,
        sorter: true,
      },

      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomInfo.Room Type"),
        type: "select",
        // className:"border-gray-400 border rounded-xl ",
        rules: [{ type: "required" }],
        list: [
          {
            value: "ONE_BEDROOM",
            label: t("columns.admin.roomInfo.One Bedroom"),
          },
          {
            value: "TWO_BEDROOMS",
            label: t("columns.admin.roomInfo.Two Bedroom"),
          },
          {
            value: "THREE_BEDROOMS",
            label: t("columns.admin.roomInfo.Three Bedroom"),
          },
        ],
      },
    },
    //numTenants
    {
      name: "numTenants",
      title: t("columns.admin.roomInfo.Number Tenants"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomInfo.Number Tenants"),
      type: "only_number",
      rules: [{ type: "required" }],

      },
    },
    //Area
    {
      name: "acreage",
      title: t("columns.admin.roomInfo.Area"),
      tableItem: {
        placeholder: t("columns.admin.roomInfo.Area"),
        sorter: true,
        width: 150,
      },
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomInfo.Area"),
        rules: [{ type: "required" }],

      },
    },
     //Bonus
     {
      name: "bonus",
      title: t("columns.admin.roomInfo.Bonus"),
      tableItem: {
        placeholder: t("columns.admin.roomInfo.Bonus"),
        sorter: true,
        width: 150,
      },
      formItem: {
        condition:(value,form)=>{
          return false;
          // if(form.getFieldValue('bonus') !== 'empty') return false
          // else return true;
        },
        col: 6,
        placeholder: t("columns.admin.roomInfo.Bonus"),
        rules: [{ type: "required" }],

      },
    },

    //Deposit
    {
      name: "deposit",
      title: t("columns.admin.roomInfo.Deposit"),
      tableItem: {
        placeholder: t("columns.admin.roomInfo.Deposit"),
        sorter: true,
        width: 150,
      },
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomInfo.Deposit"),
        rules: [{ type: "required" }],

      },
    },
     //PRICE
     {
      name: "price",
      title: t("columns.admin.roomInfo.Price"),
      tableItem: {
        placeholder: t("columns.admin.roomInfo.Price"),
        sorter: true,
        width: 150,
      },
      formItem: {
        col: 6,
        placeholder: t("columns.admin.roomInfo.Price"),
        rules: [{ type: "required" }],

      },
    },

    // // Utilities
    // {
    //   name: "utilities",
    //   title: t("columns.admin.roomInfo.Utilities"),
    //   formItem: {
    //     mode: 'multiple',
    //     col: 6,
    //     placeholder: t("columns.admin.roomInfo.Utilities"),
    //     className:"border-gray-400 border rounded-xl ",
    //     type: "select",
    //     list:utilities,
    //   },
    // },
  // Status
  {
    name: "status",
    title: t("columns.admin.roomInfo.Status"),
    formItem: {
      col: 6,
      placeholder: t("columns.admin.roomInfo.Status"),
        // className:"border-gray-400 border rounded-xl ",
        type: "select",
      list: [
        {
          value: "EMPTY",
          label: t("columns.admin.roomInfo.Empty Room"),
        },
        {
          value: "ALMOST_EXPIRED",
          label: t("columns.admin.roomInfo.Schedule Room"),
        },
        {
          value: "DEPOSIT",
          label: t("columns.admin.roomInfo.Deposit Room"),
        },
        {
          value: "RENT",
          label: t("columns.admin.roomInfo.Rent Room"),
        },
      ],
    },
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
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed border border-gray-300 text-xs rounded-lg mr-2"
                    onClick={async () => {
                      handleEdit({ id: record.id })
                    }}
                  >
                    <EditIcon />
                  </button>
                </Tooltip>
                <Tooltip title={t("routes.admin.Layout.Delete")}>
                  <button
                    className="embed border border-gray-300 text-xs rounded-lg mr-2"
                    onClick={() => Message.request(
                      t("components.message.Confirm Delete"),
                      t("components.message.Are you sure want to delete", {
                        object: t("columns.admin.building.building")
                      }),
                      false,
                      () => {
                        // buildService.buildingManagement.deleteBuilding(record.id, t, setReloadTable);
                        handleRoomListChange();
                      }
                    )}
                  >
                   <span className="uhome-trash p-0 m-0 text-red-500 text-2xl"></span>

                    {/* <RemoveIcon /> */}
                  </button>
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
