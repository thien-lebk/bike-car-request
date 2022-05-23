import { Fragment } from "react";
import { Popconfirm, Tooltip } from "antd";
import {checkIdentityNumber} from "../../../utils"

import moment from "moment";
import { useAuth } from "global";
import { useNavigate } from "react-router";

const Column = ({ t, handleEdit, handleDelete }) => {
  const { formatDate } = useAuth();
  const navigate = useNavigate();

  return [
       //code contract
       {
        name : "depositContractCode",
        title: t("Căn cứ vào hợp đồng có mã :"),
        formItem : {
           col : 4,
          //  rules : [{ type: "required" }],
        },
      },
        // signingDate
        {
          name: "createdAt",
          title: t("Hôm Nay, ngày"),
          formItem: {
            type: "date",
            col : 4,
            className:"border-gray-400  border rounded-xl",
            // rules : [{ type: "required" }],
          },
        },
        {
            name : "address",
            title : t("Tại :"),
            formItem: {
              readOnly:true,
               col : 4,
            }
        },
        {
          name : 'title',
          title : t("Chúng tôi gồm:"),
          formItem: {
            type: "title"
          }
        },
        // =========================================================
        // BÊN THUÊ A
        {
          name: "title",
          title: t("BÊN A - CHỦ NHÀ - NHẬN CỌC:"),
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
              // { type: "required" },
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
        //birthdays

         {
          name: "aLessorDateOfBirthday",
          title: t("Sinh ngày"),
          formItem: {
            col: 4,
            type: "date",
            className:"border-gray-400 border rounded-xl w-full",
            // rule: [{ type: "required" }],
          },
        },
          // cmnd
          {
            name: "aLessorIdentityCardNumber",
            title: t("CMND số"),
            formItem: {
              col: 4,
              rule: checkIdentityNumber(),
              // rules : [{ type: "required" }]
            },

          },

         //  aLessorIcDate
         {
          name: "aLessorIcDate",
          title: t("Ngày cấp"),
          formItem: {
            col: 4,
            type: "date",
            className:"border-gray-400 border rounded-xl w-full",
            // rule: [{ type: "required" }],
          },
        },
         // aLessorIcplace
         {
          name: "aLessorIcPlace",
          title: t("Nơi cấp"),
          formItem: {
            col: 6,
            rules: [
              // { type: "required" },
              { type: "custom",
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
         //aLessorPhoneNumber
         {
          name :"aLessorPhoneNumber",
          title : t("Số điện thoại"),
          formItem :{
             col : 4,
             rules : [
              //  {type: "required"},
               { type: "custom",
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
        //account banking
       {
          name : "aLessorAccountBank",
          title : t("Tài khoản ngân hàng:"),
          formItem: {
            col :5
          }
       },
       //name banking
       {
        name : "nameBanking",
        title : t("Tên ngân hàng:"),
        formItem: {
          col :5
        }
     },
       //mail to lessor
       {
          name : "aLessorEmail",
          title : t("Mail của bên A"),
          formItem: {
            col : 5,
            rules: [
              // { type: "required" },
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
    // BÊN THUÊ B =================================================================
    {
      name: "title",
      title: t("BÊN B - NGƯỜI THUÊ - ĐẶT CỌC"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    // asideName
    {
      name: "depositContractPeople",
      title: t("Họ và tên"),
      formItem: {
        col: 4,
        rules: [
          // { type: "required" },
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
    //birthdays
     {
      name: "depositorDateOfBirthday",
      title: t("Sinh ngày"),
      formItem: {
        col: 4,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        // rule: [{ type: "required" }],
      },
    },
      // cmnd
      {
        name: "depositorIdentityCard",
        title: t("CMND số"),
        formItem: {
          col: 4,
          rule: checkIdentityNumber(),
          // rules : [{ type: "required" }]
        },
      },
     //  aLessorIcDate
     {
      name: "depositorIcDate",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        // rule: [{ type: "required" }],
      },
    },
     // aLessorIcplace
     {
      name: "depositorIcPlace",
      title: t("Nơi cấp"),
      formItem: {
        col: 6,
        rules: [
          // { type: "required" },
          { type: "custom",
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
     //aLessorPhoneNumber
     {
      name :"depositorPhoneNumber",
      title : t("Số điện thoại"),
      formItem :{
         col : 4,
         rules : [
          //  {type: "required"},
           { type: "custom",
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
    {
      name : "depositorEmail",
      title : t("Mail của bên thuê"),
      formItem: {
        col : 5,
        rules: [
          // { type: "required" },
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
   // =================================================================
   {
    name: "title",
    title: t("BÊN C - MÔI GIỚI - NGƯỜI LÀM CHỨNG"),
    formItem: {
      type: "title",
      className: "font-bold",
    },
  },
  // asideName
  {
    name: "housingBrokerName",
    title: t("Họ và tên"),
    formItem: {
      col: 4,
      rules: [
        // { type: "required" },
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
  //birthdays
   {
    name: "housingBrokerDateOfBirthday",
    title: t("Sinh ngày"),
    formItem: {
      col: 4,
      type: "date",
      className:"border-gray-400 border rounded-xl w-full",
      // rule: [{ type: "required" }],
    },
  },
    // cmnd
    {
      name: "housingBrokerIdentityCard",
      title: t("CMND số"),
      formItem: {
        col: 4,
        rule: checkIdentityNumber(),
        // rules : [{ type: "required" }]
      },

    },

   //  aLessorIcDate
   {
    name: "housingBrokerIcDate",
    title: t("Ngày cấp"),
    formItem: {
      col: 4,
      type: "date",
      className:"border-gray-400 border rounded-xl w-full",
      // rule: [{ type: "required" }],
    },
  },
   // aLessorIcplace
   {
    name: "housingBrokerIcPlace",
    title: t("Nơi cấp"),
    formItem: {
      col: 6,
      rules: [
        // { type: "required" },
        { type: "custom",
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
   //aLessorPhoneNumber
   {
    name :"housingBrokerPhoneNumber",
    title : t("Số điện thoại"),
    formItem :{
       col : 4,
       rules : [
        //  {type: "required"},
         { type: "custom",
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
   ///================================================================
     //description
      {
        name :"title",
        title :t("Hai bên cùng nhau ký kết hợp đồng thuê nhà với các điều kiện đi kèm như sau :"),
        formItem: {
          type:"title",
          className :"italic"
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
      {
        name : "roomDtoId",
        title : t("1.1 Số căn hộ"),
        formItem: {
           col :2,
          //  rules : [{ type: "required"}],
            readOnly : true,
        }
      },
      {
        name : "acreage",
        title : t("1.2 Diện tích"),
        formItem: {
          col :2,
          readOnly : true,
        }
      },
      //price rent
      {
        name : "price",
        title : t("1.3 Giá thuê/1 tháng"),
        formItem: {
           col:4,
           type : "required"
        },

      },
      //rentalTerm
      {
          name : "rentalTerm",
          title :t("1.4 Thời hạn thuê"),
          formItem: {
            type:"required",
            col : 4,
            // rules : [{ type: "required" }]
          },
      },
    //rentExpirationDay
    {
      name: "depositTermEffectTime",
      title: t("Thời hạn thuê"),
      formItem: {
        className:"border-gray-400 border rounded-xl w-full",
        type: "date_range",
        col: 6,
        // rule: [{ type: "required" }],
      },
    },
    //numberOfTenants
    {
      name : "Mục đích thuê để ở/kinh doanh với số người",
      title :t("1.5 Mục đích thuê để ở/kinh doanh với số người"),
      formItem : {
        col :6,
        // rule :[{ type: "required" }]
      }
  },
  //numberOfTenants
  {
    name : "tenant",
    title :t("1.6 Số người"),
    formItem : {
      col :6,
      // rule :[{ type: "required" }]
    }
      },
      //futune
      {
        name : "future",
        title :t("1.7 Trang bị nội thất(Xem phụ lục đính kèm)"),
        formItem : {
          type : "title"
        }
      },
      //futune
      {
        name : "numberOfTenants",
        title :t("1.8 Quy định toà nhà(Xem phụ lục đính kèm)"),
        formItem : {
          type : "title"
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
        name:"costList",
        type:"addable",
        text_add:t("Thêm chi phí"),
        fieldsName:[
          {name:"name",placeholder:"Tên chi phí"},
          {name:"unitPrice",placeholder:"Mệnh giá"},
          {name:"unit",placeholder:"Đơn vị tính"},
        ],
        className: "font-normal mb-2 border border-gray-400 w-full",
      },
    },

    //dieu 3 ========
    {
        name : "title",
        title :t("Điều 3 : TIỀN CỌC VÀ THỜI HẠN NHẬN PHÒNG"),
        formItem : {
            type : "title",
            className : "font-bold"
        }
    },
    //
    {
      name : "depositNumber",
      title :t("3.1 Bên B đã cọc cho bên A số tiền là "),
      formItem : {
        col : 6,
        // rules : [{ type: "required"}]
      }
  },


    //cam kết
    {
      name : "commnit",
      title :t("3.2 Bên A cam kết sẽ giữ căn hộ cho Bên B trong - ngày kể từ ngày bên A ký"),
      formItem : {
         col : 6,
        //  rules : [{ type: "required"}]
      }
    },

    // paymentTerm================================================
    {
      name: "depositContractCode",
      title: t("Mã hợp đồng"),
      tableItem: {
        width: 200,
        sorter: true,
        onCell: (record) => (
          {
            style: { paddingTop: "0.25rem", paddingBottom: 0},
            onClick: async () => {
              navigate(`contract?type=deposit&code=${record.depositContractCode}`,  { state: { previewType: 'rentedContract'} } )
            }
        }),
      },
    },
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
      },
    },
    // Họ và tên người cọc
    {
      name: "depositContractPeople",
      title: t("Họ và tên người cọc"),
      tableItem: {
        width: 200,
        sorter: true,
        render: (value) => {
          let text = value?.map((ele) => ele.name).join(", ");
          return <span>{text}</span>
        }
      },

    },
    // CMND/CCCD/Passport
    {
      name: "depositContractPeople",
      title: t("CMND/CCCD/Passport"),
      tableItem: {
        render: (value) => {
          let text = value?.map((ele) => ele.identityCard).join(", ");
          return <span>{text}</span>
        },
        width: 200,
        sorter: true,
      },
    },
    // Số tiền cọc
    {
      name: "price",
      title: t(" Số tiền cọc"),
      tableItem: {
        width: 200,
        sorter: true,
      },
    },
    // trạng thái hợp đồng
    {
      name: "status",
      title: t("Trạng thái hợp đồng"),
      tableItem: {
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
        width: 200,
        sorter: true,
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
        render: (text) => moment(text).format(formatDate),
      },
    },
    // Trạng thái thanh toán
    {
      name: "statusPayment",
      title: t("Trạng thái thanh toán"),
      tableItem: {
        render: (value) => {
          if (value === "PAID") {
            return "Đã thanh toán"
          } else {
            return "Chờ thanh toán"
          }
        },
        width: 200,
        sorter: true,
      },
      formItem: {
        // condition:()=>false,
        // className:"hidden",
        readOnly:true,
      },
    },
    // Ngày thanh toán
    {
      name: "datePayment",
      title: t("Ngày thanh toán"),
      tableItem: {
        width: 150,
        sorter: true,
        render: (text) => moment(text).format(formatDate),
      },
    },
    //isRemember
    {
      name: "saveWithSignature",
      title: "",
      formItem: {
        type: "checkbox",
        label: t("Ký tên"),
      },
    },
    // Hợp đồng cho thuê
    {
      name: "abc",
      title: t("Hợp đồng cho thuê"),
      tableItem: {
        sorter: true,
        width: 150,
      },
    },
    //action
    {
      title: t("columns.admin.user.Action"),
      tableItem: {
        width: 120,
        fixed: "right",
        align: "center",
        render: (text, record) => {
          return (
            <Fragment>
              <div className="flex justify-center">
                <Tooltip title={t("routes.admin.Layout.Edit")}>
                  <button
                    className="embed border-0 text-xs rounded-lg mr-2"
                  onClick={() => {
                     let record_temp = {...record,depositContractPeople:record.depositContractPeople[0].name}
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
