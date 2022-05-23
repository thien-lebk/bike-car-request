const Column = ({ t }) => {
  return [
    {
      name: "username",
      title: t("columns.auth.login.Email"),
      formItem: {
        placeholder: t("columns.auth.login.Enter Email"),
        rules: [{ type: "required" }, { type: "email" }],
      },
    },
    {
      name: "password",
      title: t("columns.auth.login.password"),
      formItem: {
        placeholder: t("columns.auth.login.Enter Password"),
        type: "password",
        rules: [{ type: "required" }, { type: "min", value: 6 }],
      },
    },
    {
      name: "isRemember",
      title: "",
      formItem: {
        type: "checkbox",
        label: t("columns.auth.login.remember"),
      },
    },
    
  ];
};
export default Column;
