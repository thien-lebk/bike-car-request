import { useTranslation } from "react-i18next";
import {checkIdentityNumber} from "../utils"
const Column = () => {
  const { t } = useTranslation();

  return [
    {
      name: "name",
      title: t("columns.admin.profile.Fullname"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.profile.Fullname"),
        rules: [
        { type: "required" },
        // { type: "textarea" },
        // {
        //   type: "custom",
        //   validator: () => ({
        //     validator(_, value) {
        //       if (!value || /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/.test(value)) {
        //         return Promise.resolve();
        //       }
        //       return Promise.reject(t("components.form.only text"));
        //     }
        //   })
        // }
      ],
      },
    },

    {
      name: "dateOfBirth",
      title: t("columns.admin.profile.Birth Date"),
      formItem: {
        col: 3,
        className:"border-gray-400 border rounded-xl w-full",
        placeholder: t("columns.admin.profile.Birth Date"),
        type: "date",
        rules: [{ type: "required" }],
      },
    },
    {
      name: "gender",
      title: t("columns.admin.profile.Gender"),
      formItem: {
        col: 3,
        // className:"border-gray-400 border rounded-xl",
        placeholder: t("columns.admin.profile.Gender"),
        type: "select",
        rules: [{ type: "required" }],
        list: [
          {
            value: t("MALE"),
            label: t("columns.admin.profile.Male"),
          },
          {
            value: t("FEMALE"),
            label: t("columns.admin.profile.Female"),
          },
        ],
      },
    },
    {
      name: "identityCard",
      title: t("columns.admin.profile.Identity Number"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.profile.Identity Number"),
        // type: "only_number",
        rules: checkIdentityNumber(),
      },
    },

    {
      name: "phoneNumber",
      title: t("columns.admin.profile.Phone Number"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.profile.Phone Number"),
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
    {
      name: "email",
      title: t("columns.admin.profile.Email"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.profile.Email"),
        rules: [
          { type: "required" },
        { type: "email" }],
      },
    },

    {
      name: "address",
      title: t("columns.admin.profile.Address"),
      formItem: {
        col: 6,
        placeholder: t("columns.admin.profile.Address"),
        rules: [

          // { type: "max", value: 40 }
           { type: "custom",
          validator: () => ({
            validator(_, value) {
              if (!value || /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ/,\s]+$/.test(value)) {
                return Promise.resolve();
              }
              return Promise.reject(t("components.form.ruleAddress"));
            }
          })
        }
        ],
      },
    },
  ];
};
export default Column;
