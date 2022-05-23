// import EditIcon from "assets/svg/edit.js";
// import RemoveIcon from "assets/svg/remove.js";
// import { Fragment } from "react";
// import { Message } from "components";
// import { UserService } from "services/user";

const Column = ({ t, listData }) => {
  return [
    // List of expenses
    {
      title: t("columns.admin.roomRules.Room Rules"),
      name: "roomRules",
      formItem: {
        type: "textarea",
        rules: [{ type: "required" },],
        placeholder: t("columns.admin.roomRules.Room Rules"),

        // list: listData
      },
    }


  ];
};
export default Column;
