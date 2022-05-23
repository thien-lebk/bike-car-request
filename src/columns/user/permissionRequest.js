const Column = ({ t, formatDate,listData, handleEdit, handleDelete }) => {
  return [
    {
      title: t("Vai trò yêu cầu"),
      name: "permissionRequest",
      tableItem: {
        sorter: true,
      },
      formItem: {
        type: "select",
        rules: [{ type: "required" }, { type: "select" }],
        list: listData
      },
    },
  ];
};
export default Column;
