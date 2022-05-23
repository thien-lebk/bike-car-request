
const Column = ({ t, }) => {
  return [
    // fullname
    {
      title: t("columns.auth.register.Fullname"),
      name: "name",
      formItem: {
        readonly: true,
      },
    },

    // contract
    {
      title: t("columns.admin.grantLandLort.Contract Input"),
      name: "codeContract",
      formItem: {
        placeholder: t("columns.admin.grantLandLort.Contract Input"),
        formItem: {
          rules: [{ type: "required" }],
        },
      },
    },

  ];
};
export default Column;
