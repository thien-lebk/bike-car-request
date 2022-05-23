import {checkIdentityNumber} from "../../utils"
const Column = ({ t }) => {
  return [
    // signingDate
    {
      name: "signingDate",
      // title: t("Họ và tên"),
      formItem: {
        type: "date",
        className:"border-gray-400 date-1 border rounded-xl",
        rule: [{ type: "required" }],
      },
    },
    // =========================================================
    // BÊN THUÊ A
    {
      name: "title",
      title: t("Bên cho thuê (Bên A)"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // asideName
    {
      name: "asideName",
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
    // asideIdentityCardNumber
    {
      name: "asideIdentityCardNumber",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col: 4,
        rule: checkIdentityNumber(),
      },
    },
//  Ngày cấp
    {
      name: "asideIdProvidedAt",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        rule: [{ type: "required" }],
      },
    },
    // Noi cap
    {
      name: "asideIdProvidedIn",
      title: t("Nơi cấp"),
      formItem: {
        col: 6,
        rules: [
          { type: "required" },
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
    // asideAddress
    {
      name: "asideAddress",
      title: t("Nơi ĐKTT"),
      formItem: {
        col: 6,
        rules: [
          { type: "required" },
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

    // BÊN THUÊ B
    {
      name: "title",
      title: t("Bên thuê (Bên B)"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    {
      name: "bsideName",
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
    // Description
    {
      name: "bsideIdentityCardNumber",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col: 4,
        rule: checkIdentityNumber(),
      },
    },

    {
      name: "bsideIdProvidedAt",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        rule: [{ type: "required" }],
      },
    },
    // Description
    {
      name: "bsideIdProvidedIn",
      title: t("Nơi cấp"),
      formItem: {
        col: 6,
        rule: [{ type: "required" }],
      },
    },
    {
      name: "bsideAddress",
      title: t("Nơi ĐKTT"),
      formItem: {
        col: 6,
        rule: [{ type: "required" }],
      },
    },

    // TÀI SẢN CHO THUÊ
    {
      name: "service",
      title: t("Tài sản cho thuê"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // roomNumber
    {
      name: "roomNumber",
      title: t("Mã phòng"),
      formItem: {
        col: 6,
        rule: [{ type: "required" }],
      },
    },

    {
      name: "roomType",
      title: t("Loại phòng"),
      formItem: {
        col: 6,
        type: "select",
        list: [
          { value: "ONE_BEDROOM", label: "Chdv 1 phòng ngủ" },
          { value: "TWO_BEDROOMS", label: "Chdv 2 phòng ngủ" },
          { value: "THREE_BEDROOMS", label: "Chdv 3 phòng ngủ" },
          { value: "MEZZANINE_ROOM", label: "Phòng có gác" },
          { value: "STUDIO_ROOM", label: "Phòng studio" },
          { value: "DUPLEX_ROOM", label: "Chdv duplex" },
      ],
        // className:"border-gray-400 border rounded-xl",
        rule: [{ type: "required" }, { type: "select" }],

      },
    },


    {
      name: "roomAcreage",
      title: t("Diện tích"),
      formItem: {
        col: 6,
        rules: [
          { type: "required" },
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
        ],
      },
    },
        // Description
    {
      name: "address",
      title: t("Địa chỉ"),
      formItem: {
        col: 6,
        rule: [{ type: "required" }],
      },
    },
    // ============================================================================================
    {
      name: "service1",
      title: t("Phương thức thuê"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // Description
    {
      name: "roomPrice",
      title: t("Giá thuê phòng"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }],
      },
    },

    // Description
    {
      name: "numRenter",
      title: t("Số người ở tính đến hiện tại"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }],
      },
    },

    // Description
    {
      name: "numVehicle",
      title: t("Số lượng xe"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }],
      },
    },
    {
      name: "service121",
      title: t("Danh sách xe"),
      formItem: {
        type: "title",
        className: "font-bold mb-2",
      },
    },
    // vehicles
    {
      name: "vehicles",
      title: t("danh sách xe"),
      formItem: {
        // col: 4,
        // rule: [{ type: "required" }],
        name:"vehicles",
        type:"addable",
        text_add:t("columns.building.Add vehicle"),
        fieldsName:[
          {name:"vehicleBrand",placeholder:"Hiệu xe"},
          {name:"licensePlate",placeholder:"Biển số xe"},
        ],
        className: "font-normal mb-2 border border-gray-400 w-full",
      },
    },
    // =============================================================================================
    {
      name: "service2",
      title: t("Ngày bàn giao tài sản"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // Description
    {
      name: "handoverDate",
      title: t("Thời điểm bên A bàn giao tài sản thuê bên B vào ngày"),
      formItem: {
        col: 6,
        type: "date",
        className:"border-gray-400 border rounded-xl w-1/2",
        rule: [{ type: "required" }],
      },
    },
    // =============================================================================================
    {
      name: "service3",
      title: t("Phương thức thanh toán tiền thuê phòng"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // Description
    {
      name: "paymentCycle",
      title: t("Tiền thuê phòng và chi phí sử dụng diện tích thuê được thanh toán theo"),
      formItem: {
        col: 6,
        type: "text",
        rule: [{ type: "required" }],
      },
    },
    {
      name: "timeEffect",
      title: t("Dự kiến thanh toán vào ngày"),
      formItem: {
        col: 6,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        rule: [{ type: "required" }],
      },
    },
// ===============================================================================================
    // Hiệu lực hợp đồng
    {
      name: "service4",
      title: t("Hiệu lực hợp đồng"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    {
      name: "depositExpirationDay",
      title: t("Hợp đồng có hiệu lực kể từ ngày"),
      formItem: {
        className:"border-gray-400 border rounded-xl w-full",
        type: "date_range",
        col: 6,
        rule: [{ type: "required" }],
      },
    },



  ];
};
export default Column;
