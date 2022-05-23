const Column = ({ t }) => {
  return [
    {
      name: "password",
      title: t("columns.auth.login.password"),
      formItem: {
        type: "password",
        placeholder: t("columns.auth.login.Enter password"),
        rules: [{ type: "required" }, { type: "minLength", value: 6 }],
      },
    },
    {
      name: "passwordNew",
      title: t("columns.auth.login.New password"),
      formItem: {
        type: "password",
        placeholder: t("columns.auth.login.Enter new password"),
        rules: [{ type: "required" }, { type: "minLength", value: 6 }],
      },
    },
    {
      name: "confirmPassword",
      title: t("columns.auth.login.Confirm Password"),
      formItem: {
        placeholder: t("columns.auth.login.Confirm Password"),
        type: "password",
        rules: [
          { type: "required" },
          { type: "minLength", value: 6 },
          // { type: 'password', min: 6 },
        ],
      },
    },
  ];
};

export default Column;
