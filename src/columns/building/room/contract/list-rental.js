import { Fragment } from "react";
import { Popconfirm, Tooltip } from "antd";
import moment from "moment";
import { useAuth } from "global";
import { checkIdentityNumber } from "../../../utils"
import { useNavigate } from "react-router";
const Column = ({ t, URLnavi, handleEdit, handleDelete }) => {
  const { formatDate } = useAuth();
  const navigate = useNavigate();

  return [
    // signingDate
    {
      name: "nameBuilding",
      title: t("Tên toà nhà"),
      formItem: {
        readOnly: true,
        col: 4,
        rules: [{ type: "required" }],
      },
    },
    // signingDate
    {
      name: "createdDate",
      title: t("Hôm Nay, ngày"),
      formItem: {
        type: "date",
        col: 4,
        className: "border-gray-400  border rounded-xl",
        rules: [{ type: "required" }],
      },
    },
    //address
    {
      name: "address",
      title: t("Tại :"),
      formItem: {
        readOnly: true,
        col: 4,
      }
    },
    // paymentTerm
    {
      name: "code",
      title: t("Mã hợp đồng"),
      tableItem: {
        width: 200,
        sorter: true,
        readOnly: true,
        onCell: (record) => (
          {
            style: { paddingTop: "0.25rem", paddingBottom: 0 },
            onClick: async () => {
              navigate(`contract?type=rental&code=${record.code}`, { state: { previewType: 'rentedContract' } })
            }
          }),
      },
      formItem: {
        col: 4,
        placeholder: t("Mã hợp đồng"),
        rules: [{ type: "required" }],
      },
    },
    //effectiveDate
    {
      name: "effectiveDate",
      title: t("Có hiệu lực ngày"),
      formItem: {
        type: "date",
        className: "border-gray-400 date-1 border rounded-xl",
        col: 4,
        rules: [{ type: "required" }]
      },

    },
    {
      name: 'title',
      title: t("Chúng tôi gồm:"),
      formItem: {
        type: "title"
      }
    },
    // =======================Bên thuê==================================
    // BÊN THUÊ A
    {
      name: "title",
      title: t("BÊN CHO THUÊ: GỌI TẮT LÀ BÊN A"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    // asideName
    {
      name: "aLessorName",
      title: t("Họ và tên"),
      formItem: {
        col: 4,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only text"));
              }
            })
          }
        ],
      },

    },
    //aLessorPhoneNumber
    {
      name: "aLessorPhoneNumber",
      title: t("Số điện thoại"),
      formItem: {
        col: 4,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^\+?\d+[-\s]?[0-9]+[-\s]?[0-9]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("columns.auth.register.Phone number Rule"));
              }
            })
          }
        ]
      }
    },
    // asideIdentityCardNumber
    {
      name: "aLessorIdentityCard",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col: 4,
        rule: checkIdentityNumber(),
        rules: [{ type: "required" }]
      },

    },
    //  aLessorIcDate
    {
      name: "aLessorIcDate",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className: "border-gray-400 border rounded-xl w-full",
        rules: [{ type: "required" }],
      },
    },
    // aLessorIcplace
    {
      name: "aLessorIcPlace",
      title: t("Nơi cấp"),
      formItem: {
        col: 6,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s,/]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("columns.auth.register.Address Rule"));
              }
            })
          }
        ],
      },
    },
    //manager building
    {
      name: "managerBuildingOther",
      title: t("Hiện là quản lý toà nhà :"),
      formItem: {
        // type: "required",
        col: 5
      }
    },
    //mail to lessor
    {
      name: "aLessorMail",
      title: t("Mail của bên A"),
      formItem: {
        col: 5,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                const regexmail = /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!value || regexmail.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.ruleEmail"));
              }
            })
          }
        ],
      }
    },
    // BÊN THUÊ B================================
    {
      name: "title",
      title: t("BÊN THUÊ (Gọi tắt là bên B)"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    //bTenantName
    {
      name: "bTenantName",
      title: t("Họ và tên"),
      formItem: {
        col: 4,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.only text"));
              }
            })
          }
        ],
      },
    },
    //phoneNumber
    {
      name: "bTenantPhoneNumber",
      title: t("Số điện thoại"),
      formItem: {
        col: 4,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^\+?\d+[-\s]?[0-9]+[-\s]?[0-9]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("columns.auth.register.Phone number Rule"));
              }
            })
          }
        ]
      }
    },
    // bsideIdentityCardNumber
    {
      name: "bTenantIdentityCardNumber",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col: 4,
        rules: checkIdentityNumber(),
        // rules : [{ type: "required" }]
      },
    },
    //date
    {
      name: "bTenantIcDate",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className: "border-gray-400 border rounded-xl w-full",
        rules: [{ type: "required" }],
      },
    },
    // bTenantIcplace
    {
      name: "bTenantIcplace",
      title: t("Nơi cấp"),
      formItem: {
        col: 6,
        rules: [{ type: "required" }],
      },
    },
    //mail to a
    {
      name: "bTenantMail",
      title: t("Mail của bên thuê"),
      formItem: {
        //  type : "required",
        col: 5,
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                const regexmail = /^(([^<>()[\]\\.,;:$%^&*\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!value || regexmail.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("components.form.ruleEmail"));
              }
            })
          }
        ],
      }
    },
    //===========================Table=====================================
    // mã phòng
    {
      name: "roomId",
      title: t("Mã phòng"),
      tableItem: {
        width: 200,
        sorter: true,
      },
    },
    //ngày tạo
    {
      name: "createdAt",
      title: t("Ngày tạo"),
      tableItem: {
        //
        width: 200,
        sorter: true,
        render: (text) => moment(text).format(formatDate),
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
    },
    // Họ và tên người cọc
    {
      name: "rentalContractPeople",
      title: t("Họ và tên bên thuê"),
      tableItem: {
        width: 200,
        sorter: true,
        render: (value) => {
          let text = value?.map((ele) => ele.name).join(", ");
          return <span>{text}</span>
        },
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
    },
    // CMND/CCCD/Passport
    {
      name: "rentalContractPeople",
      title: t("CMND/CCCD/Passport"),
      tableItem: {
        render: (value) => {
          let text = value?.map((ele) => ele.indentityCard).join(", ");
          return <span>{text}</span>
        },
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        width: 200,
        sorter: true,
      },
    

    },
    // Số tiền cọc
    {
      name: "price",
      title: t("Giá thuê"),
      tableItem: {
        width: 200,
        sorter: true,
        // onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
    },
    // Thời hạn thuê
    {
      name: "rentalTerm",
      title: t("Thời hạn thuê"),
      tableItem: {
        width: 200,
        sorter: true,
        // onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
      },
    },

    // Trạng thái
    {
      name: "status",
      title: t("Trạng thái"),
      tableItem: {
        width: 200,
        sorter: true,
        // onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (value) => {
          if (value === "CREATE_NEW") {
            return "Mới tạo"
          } else if (value === "SIGNED_BY_GUESS") {
            return "Khách thuê đã ký"
          } else if (value === "SIGNED_BY_OWNER") {
            return "Chủ nhà đã ký"
          } else if (value === "COMPLETED") {
            return "Đã hoàn thành"
          } else if (value === "REVOKE_DEPOSIT") {
            return "Bỏ cọc"
          } else if (value === "CANCEL_DEPOSIT") {
            return "Hủy cọc"
          }
        },
      },
    },

    // Ngày ký hợp đồng
    {
      name: "fromDate",
      title: t(" Ngày ký hợp đồng"),
      tableItem: {
        width: 200,
        sorter: true,
        render: (text) => moment(text).format(formatDate),
      },
    },
    // Hạn hợp đồng
    {
      name: "endDate",
      title: t("Hạn hợp đồng"),
      tableItem: {
        width: 200,
        sorter: true,
        // onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text) => moment(text).format(formatDate),
      },
    },
    // Ngày thanh toán
    {
      name: "datePayment",
      title: t("Ngày thanh toán"),
      tableItem: {
        width: 150,
        sorter: true,
        onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text) => moment(text).format(formatDate),
      },
    },

    // Hợp đồng cho thuê
    {
      name: "contractLine",
      title: t("Hợp đồng liên"),
      tableItem: {
        sorter: true,
        width: 150,

      },
    },
    //================================================================
    //description
    {
      name: "title",
      title: t("Hai bên cùng nhau ký kết hợp đồng thuê nhà với các điều kiện đi kèm như sau :"),
      formItem: {
        type: "title",
        className: "italic"
      }
    },
    // tern
    {
      name: "title",
      title: t("ĐIỀU 1 : TÀI SẢN CHO THUÊ"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    //số căn hộ
    {
      name: "roomId",
      title: t("Số căn hộ"),
      formItem: {
        type: "required",
        col: 2,
        readOnly: true,
      }
    },
    {
      name: "acreage",
      title: t("Diện tích"),
      formItem: {
        col: 2,
        readOnly: true,
      }
    },
    //price rent
    {
      name: "price",
      title: t("Giá thuê/1 tháng"),
      formItem: {
        col: 4,
        type: "required"
      },

    },
    //rentalTerm
    {
      name: "rentalTerm",
      title: t("Thời hạn thuê"),
      formItem: {
        type: "required",
        col: 4,
        rules: [{ type: "required" }]
      },
    },

    //rentExpirationDay
    {
      name: "rentTermEffectTime",
      title: t("Thời hạn thuê"),
      formItem: {
        className: "border-gray-400 border rounded-xl w-full",
        type: "date_range",
        col: 6,
        rule: [{ type: "required" }],
      },
    },
    //electricityIndicator
    {
      name: "electricityIndicator",
      title: t("Chỉ số điện : KW"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }]
      }
    },

    //waterIndicator
    {
      name: "waterIndicator",
      title: t("Chỉ số nước/người/tháng"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }]
      }
    },
    //numberOfTenants
    {
      name: "numberOfTenants",
      title: t("Mục đích thuê để ở/kinh doanh với số người"),
      formItem: {
        col: 6,
        rule: [{ type: "required" }]
      }
    },
    //deposit
    {
      name: "deposit",
      title: t("Số tiền đặt cọc"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }]
      }
    },

    // tern
    {
      name: "title",
      title: t("ĐIỀU 2 : CÁC LOẠI PHÍ"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // costlist
    {
      name: "costList",
      title: t("danh sách chi phí"),
      formItem: {
        // rule: [{ type: "required" }],
        name: "costList",
        type: "addable",
        text_add: t("Thêm chi phí"),
        fieldsName: [
          { name: "name", placeholder: "Tên chi phí" },
          { name: "unitPrice", placeholder: "Mệnh giá" },
          { name: "unit", placeholder: "Đơn vị tính" },
        ],
        className: "font-normal mb-2 border border-gray-400 w-full",
      },
    },

    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 120,
        fixed: "right",
        align: "center",
        // onCell: () => ({ style: { paddingTop: "0.25rem", paddingBottom: 0 } }),
        render: (text, record) => {
          return (
            <Fragment>
              <div className="flex justify-center">
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed border-0 text-xs rounded-lg mr-2"
                    onClick={() => {
                      let record_temp = {
                        ...record, rentalContractPeople: record.rentalContractPeople[0].name,
                        "CMND/CCCD/Passport": record.rentalContractPeople[0].indentityCard
                      }
                      handleEdit(record_temp)
                    }
                    }
                  >
                    <span className="uhome-edit-solid p-0 m-0 text-blue-500 text-4xl"></span>
                  </button>
                </Tooltip>
                <Tooltip title={t("routes.admin.Layout.Download")}>
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
                      {/* <span className="uhome-trash m-0 p-0 text-red-500 text-2xl"></span> */}
                      <span className="uhome-download m-0 p-0 text-blue-700 text-2xl mr-2" />
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
