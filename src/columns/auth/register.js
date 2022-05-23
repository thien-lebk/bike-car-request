import { useTranslation } from "react-i18next";
import {checkIdentityNumber} from "../utils";

const Column = () => {
  const { t } = useTranslation();

  return [
    // name
    {
      name: "name",
      title: t("columns.auth.register.Fullname"),
      formItem: {
        placeholder: t("columns.auth.register.Fullname"),
        rules: [
          { type: "required" },
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
    // email
    {
      name: "email",
      title: t("columns.auth.register.Email"),
      formItem: {
        placeholder: t("columns.auth.register.Email"),
        rules: [{ type: "required" }, { type: "email" }],
      },
    },
    // password
    {
      name: "password",
      title: t("columns.auth.register.Password"),
      formItem: {
        placeholder: t("columns.auth.register.Password"),
        type: "password",
        rules: [{
          type: "custom", validator: () => ({
            validator: async (rule, value) => {
              if (!!value && value.trim() !== "" && value.length >= 6) {
                let countvalidator = 0;
                if (
                  (new RegExp(/\s/).test(value))
                )
                  return Promise.reject(
                    t("components.form.rulePasswordNoWhiteSpace")
                  );
                else countvalidator++;
                if (
                  !(new RegExp(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*[a-z]).*$/).test(value))
                )
                  return Promise.reject(
                    t("components.form.rulePassword")
                  );
                else countvalidator++;
                if (countvalidator === 2) return Promise.resolve();
              } else return Promise.resolve();
            },
          })
        }, { type: "required" }, { type: "min", value: 6 },
        ],
      },
    },
    // dateOfBirth
    {
      name: "dateOfBirth",
      title: t("columns.auth.register.Birth Date"),
      formItem: {
        col: 6,
        placeholder: t("columns.auth.register.Birth Date"),
        type: "date",
        rules: [{ type: "required" }],
        className: "border-gray-400 border rounded-xl h-[42px]"
      },
    },
    // gender
    {
      name: "gender",
      title: t("columns.auth.register.Gender"),
      formItem: {
        col: 6,
        placeholder: t("columns.auth.register.Gender"),
        type: "select",
        rules: [{ type: "required" }],
        // className: "border-gray-400 border rounded-xl h-[42px]",
        // className:"flex justify-center",
        // className:"border-gray-400 border rounded-xl",
        wrapClassName: "ml-3 ",
        list: [
          {
            value: t("MALE"),
            label: t("columns.auth.register.Male"),
          },
          {
            value: t("FEMALE"),
            label: t("columns.auth.register.Female"),
          },
        ],
      },
    },
    // identityCard
    {
      name: "identityCard",
      title: t("columns.auth.register.Identity Number"),
      formItem: {
        placeholder: t("columns.auth.register.Identity Number"),
        type: "text",
        rules: checkIdentityNumber(),
      },
    },
    // phoneNumber
    {
      name: "phoneNumber",
      title: t("columns.auth.register.Phone Number"),
      formItem: {
        placeholder: t("columns.auth.register.Phone Number"),
        rules: [
          { type: "required" },
          { type: "min", value: 9 },
          { type: "max", value: 15 },
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
        ],
      },
    },
    // address
    {
      name: "address",
      title: t("columns.auth.register.Address"),
      formItem: {
        placeholder: t("columns.auth.register.Address"),
        rules: [
          { type: "required" },
          {
            type: "custom",
            validator: () => ({
              validator(_, value) {
                if (!value || /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s,.'/]+$/.test(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(t("columns.auth.register.Address Rule"));
              }
            })
          }
        ],
      },
    },
  ];
};
export default Column;
