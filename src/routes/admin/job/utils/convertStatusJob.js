export const convertStatusJob = (key, t) => {
  switch (key) {
    case 'APPROVED':
      return t("routes.admin.job-management.Approved");
    case 'PENDING':
      return t("routes.admin.job-management.Pending")
    case 'REJECTED':
      return t("routes.admin.job-management.Rejected");
    default:
      return '';
  }
}



