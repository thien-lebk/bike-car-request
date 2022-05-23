import { useTranslation } from "react-i18next";

const Column = () => {

  const { t } = useTranslation();

  return [
    {
      name: "password",
      title:  t("columns.admin.changePass.Current Password"),
      formItem: {
        type: "password",
        placeholder: t("columns.admin.changePass.Enter password"),
        rules: [{ type: "required" },
        { type: "min", value: 6 }],
      },
    },
    {
      name: "passwordNew",
      title: t("columns.admin.changePass.New password"),
      formItem: {
        confirm: true,
        confirmRequired:true,
        type: "password",
        placeholder: t("columns.admin.changePass.Enter new password"),
        rules: [
          {
            type: "custom",
            validator:() => ({
              validator: async (rule, value) => {
                if (!!value && value.trim() !== "" && value.length >= 6) {
                  let countvalidator=0;
                  if (
                    (new RegExp(/\s/).test(value))
                  )
                     return Promise.reject(
                      t("components.form.rulePasswordNoWhiteSpace")
                    );
                    else countvalidator++;
                    if (
                     !( new RegExp(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*[a-z]).*$/).test(value))
                    )
                    return Promise.reject(
                      t("components.form.rulePassword")
                    );
                    else countvalidator++;
                  if(countvalidator===2)  return Promise.resolve();
                } else return Promise.resolve();
              },
            }
            )
          },
          { type: "required" }, { type: "min", value: 6 },
        ],


      },
    },

  ];
};

export default Column;
