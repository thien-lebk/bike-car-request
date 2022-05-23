export const convertTypeRoom = (key, t) => {
  switch (key) {
    case 'DEPOSIT':
      return t("routes.admin.room-info.deposit")
    case 'ALMOST_EXPIRED':
      return t("routes.admin.room-info.almost expired")
    case 'RENT':
      return t("routes.admin.room-info.rent")
    case 'EMPTY':
      return t("routes.admin.room-info.empty")
    default:
      return '';
  }
}
