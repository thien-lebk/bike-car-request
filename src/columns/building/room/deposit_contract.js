import {checkIdentityNumber} from "../../utils"

const Column = ({ t }) => {
  return [
    {
      name: "signingDate",
      // title: t("Họ và tên"),
      formItem: {
        type: "date",
        // className: "border-gray-400 w-3/5 date-1 border rounded-xl",
        rule: [{ type: "required" }],
        placeholder: "Ngày - Tháng - Năm",
      },
    },
    // Bên nhận đặt cọc (Bên A)
    {
      name: "service",
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
        placeholder: t("columns.auth.register.Fullname"),
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
        // type:"number",
        rule: checkIdentityNumber(),
      },
    },
    // asideIdProvidedAt
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
    // asideIdProvidedIn
    {
      name: "asideIdProvidedIn",
      title: t("Địa chỉ thường trú"),
      formItem: {
        col: 6,
        placeholder:t("Địa chỉ thường trú"),
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

    // asidePhoneNumber
    {
      name: "asidePhoneNumber",
      title: t("Điện thoại"),
      formItem: {
        col: 6,
        placeholder: t("columns.auth.register.Phone Number"),
        rules: [
          { type: "required" },
          { type: "min", value: 9 },
          { type: "max", value: 15 },
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
    // Bên nhận đặt cọc (Bên B)
    {
      name: "service",
      title: t("Bên nhận đặt cọc (Bên B)"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // bsideName
    {
      name: "bsideName",
      title: t("Họ và tên"),
      formItem: {
        placeholder: t("columns.auth.register.Fullname"),
        col:4,
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

    // bsideIdentityCardNumber
    {
      name: "bsideIdentityCardNumber",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col:4,
        rule: checkIdentityNumber(),
      },
    },
    // bsideIdProvidedAt
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
    // bsideIdProvidedIn
    {
      name: "bsideIdProvidedIn",
      title: t("Địa chỉ thường trú"),
      formItem: {
        col: 6,
        placeholder:t("Địa chỉ thường trú"),
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

    // bsidePhoneNumber
    {
      name: "bsidePhoneNumber",
      title: t("Điện thoại"),
      formItem: {
        col: 6,
        placeholder: t("columns.auth.register.Phone Number"),
        rules: [
          { type: "required" },
          { type: "min", value: 9 },
          { type: "max", value: 15 },
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
    // Bên giới thiệu (Bên C)
    {
      name: "service",
      title: t("Bên giới thiệu (Bên C)"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // csideName
    {
      name: "csideName",
      title: t("Họ và tên"),
      formItem: {
        placeholder: t("columns.auth.register.Fullname"),
        col:4,
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

    // csideIdentityCardNumber
    {
      name: "csideIdentityCardNumber",
      title: t("Số CMND/CCCD/Passport"),
      formItem: {
        col:4,
        rule: checkIdentityNumber(),
      },
    },
    // csideIdProvidedAt
    {
      name: "csideIdProvidedAt",
      title: t("Ngày cấp"),
      formItem: {
        col: 4,
        type: "date",
        className:"border-gray-400 border rounded-xl w-full",
        rule: [{ type: "required" }],
      },
    },
    // csideIdProvidedIn
    {
      name: "csideIdProvidedIn",
      title: t("Địa chỉ thường trú"),
      formItem: {
        placeholder:t("Địa chỉ thường trú"),
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

    // csidePhoneNumber
    {
      name: "csidePhoneNumber",
      title: t("Điện thoại"),
      formItem: {
        placeholder: t("columns.auth.register.Phone Number"),
        col: 6,
        rules: [
          { type: "required" },
          { type: "min", value: 9 },
          { type: "max", value: 15 },
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



// Tài sản đặt cọc
    {
      name: "service",
      title: t("Tài sản đặt cọc"),
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
        col:4,
        type:"number",
        rule: [{ type: "required" }],
      },
    },

    // roomType
    {
      name: "roomType",
      title: t("Loại phòng"),
      formItem: {
        col: 4,
        type: "select",
        rule: [{ type: "required" }, { type: "select" }],
        list: [
          { value: "ONE_BEDROOM", label: "Chdv 1 phòng ngủ" },
          { value: "TWO_BEDROOMS", label: "Chdv 2 phòng ngủ" },
          { value: "THREE_BEDROOMS", label: "Chdv 3 phòng ngủ" },
          { value: "MEZZANINE_ROOM", label: "Phòng có gác" },
          { value: "STUDIO_ROOM", label: "Phòng studio" },
          { value: "DUPLEX_ROOM", label: "Chdv duplex" },
      ],
        // className: "border-gray-400 border rounded-xl",
      },
    },

    // roomAcreage
    {
      name: "roomAcreage",
      title: t("Diện tích"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }],
        additional: "m2",
      },
    },
    // Số tiền đặt cọc
    {
      name: "service",
      title: t("Số tiền đặt cọc"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    // depositPrice
    {
      name: "depositPrice",
      title: t("Bằng số"),
      formItem: {
        col: 4,
        type: "only_number",
        rule: [{ type: "required" }, { type: "only_number" }],
      },
    },

    // Bằng chữ
    {
      name: "description14",
      title: t("Bằng chữ"),
      formItem: {
        col: 4,
        rule: [{ type: "required" }],
      },
    },
    // Số tiền đặt cọc có chức năng giữ phòng trong
    // timeEffect
    {
      name: "timeEffect",
      title: t("Số tiền đặt cọc có chức năng giữ phòng trong"),
      formItem: {
        col: 4,
        type:"number",
        rule: [{ type: "required" }],
        additional: "ngày theo hiệu lực hợp đồng",
        placeholder: "Số ngày"
      },
    },
    // Thời hạn đặt cọc
    {
      name: "description16",
      title: t("Thời hạn đặt cọc"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    // depositTerm
    {
      name: "depositTerm",
      title: t("Thời hạn đặt cọc là"),
      formItem: {
        col:6,
        rule: [{ type: "required" }],
        additional: "ngày",
        className: "w-1/2",
      },
    },
    // depositTermPaymentTime
    {
      name: "depositTermPaymentTime",
      title: t("Kể từ ngày"),
      formItem: {
        col:6,
        type: "date_range",
        rule: [{ type: "required" }],
        // className: "border-gray-400 border rounded-xl",
      },
    },
    // Mục đích đặt cọc
    {
      name: "description19",
      title: t("Mục đích đặt cọc"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    //address motel
    {
      name: "address",
      title: t(
        "Các bên thực hiện giao kết này nhằm thực hiện hợp đồng thuê với địa chỉ"
      ),
      formItem: {
        placeholder:t("Địa chỉ nhà trọ"),
        col:6,
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
    // timeSignRentContract
    {
      name: "timeSignRentContract",
      title: t("Được kí kết ngày"),
      formItem: {
        col:6,
        type: "date",
        rule: [{ type: "required" }],
        // className: "border-gray-400 border rounded-xl",
      },
    },

    {
      name: "description22",
      title: t("Hiệu lực hợp đồng"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },
    // depositTermEffectTime
    {
      name: "depositTermEffectTime",
      title: t("Hợp đồng có hiệu lực kể từ ngày"),
      formItem: {
        col:12,
        type: "date_range",
        rule: [{ type: "required" }],
        // className: "border-gray-400 border rounded-xl",
      },
    },

    {
      name: "description24",
      title: t("Ghi chú"),
      formItem: {
        type: "title",
        className: "font-bold",
      },
    },

    {
      name: "note",
      title: "",
      formItem: {
        type: "textarea",
      },
    },
  ];
};
export default Column;
