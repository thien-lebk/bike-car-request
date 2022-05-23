import { Fragment } from "react";
import { convertStatusJob, } from "routes/admin/job/utils"

const Column = ({
  t,
  setReloadTable,
  showApproveModal,
  showRemoveModal,
  handleChangeDataTable,
}) => {

  return [
    // NV tòa nhà
    {
      name: "buildingName",
      title: t("columns.admin.buildingInfo.Building Name"),
      tableItem: {
        fixed: "left",
        width: 150,
        // sorter: true,
        // onCell: (record) => (
        //   {
        //     style: { paddingTop: "0.25rem", paddingBottom: 0 },
        //     onClick: async () => {
        //       navigate('/chi-tiet-toa-nha/' + record.id)
        //     }
        //   }),

      },
    },

    //Address
    {
      name: "buildingAddress",
      title: t("columns.admin.buildingInfo.Address"),
      tableItem: {
        placeholder: t("columns.admin.buildingInfo.Address"),
        sorter: true,
        width: 300,
      },
    },

    // name
    {
      name: "ownerName",
      title: t("Chủ tòa nhà"),
      tableItem: {
        width: 200,
        sorter: true,
      },
    },

    // phoneNumber
    {
      name: "ownerPhoneNumber",
      title: t("columns.auth.register.Phone Number"),
      tableItem: {
        sorter: true,
        width: 300,
      },
    },

    // // Vai trò
    {
      name: "roleName",
      title: t("Vai trò"),
      tableItem: {
        sorter: true,
        width: 300,
        render: (text, record) => (
          <span

            className="cursor-pointer hover:border-b-2"
          >

            {record.roles.length > 1 ? record.roles?.reduce(
              (previousValue, currentValue) => (previousValue.roleName ? previousValue.roleName : previousValue) + ', ' + currentValue.roleName,
            ) : record.roles[0]?.roleName}
          </span>
        ),
      },
    },

    // status
    {
      name: "userPermissionStatus",
      title: t("Trạng thái"),
      tableItem: {
        sorter: true,
        width: 300,
        render: (text, record) => (
          <span

            className="cursor-pointer hover:border-b-2"
          >
            {convertStatusJob(record.userPermissionStatus, t)}
          </span>
        ),
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
              <div className="w-full h-auto">

                {/* <Tooltip title={t("routes.admin.job-management.Accept")}> */}
                {record.userPermissionStatus === 'PENDING' ?
                  <button
                    className="embed  text-xs mr-3"
                    onClick={async () => {
                      // handleEdit({ id: record.id });
                      showApproveModal({ data: record, handleChangeDataTable })
                    }}
                  >
                    <span className="uhome-success-standard m-0 p-0 text-blue-500 text-2xl font-bold"></span>
                  </button>
                  : <button
                    className="embed  text-xs mr-3"
                    disabled
                  >
                    <span className="uhome-success-standard m-0 p-0 text-blue-500 text-2xl font-bold opacity-0"></span>
                  </button>
                }

                {/* </Tooltip> */}

                {/* <Tooltip title={t("routes.admin.job-management.Remove")}> */}
                <button
                  className="embed  text-xs "
                  onClick={async () => {
                    // handleEdit({ id: record.id });
                    showRemoveModal({ data: record })
                  }}
                >
                  <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span>
                </button>
                {/* </Tooltip> */}
              </div>
            </Fragment>
          );
        },
      },
    },
  ];
};
export default Column;







