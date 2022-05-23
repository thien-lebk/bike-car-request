export const ColumnCustomerReview = ({
  t,
}) => {
  return [
    // identityNumber
    {
      name: "rateCustomer",
      title: t("columns.admin.customer.Rate Review"),
      formItem: {
        placeholder: t("columns.admin.customer.Rate Review"),
        rules: [{ type: "required" }],
        type:'textarea',
      }
    },
  ]
};

