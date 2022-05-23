export const convertTypeBuilding = (key, t) => {
  switch (key) {
    case 'MOTEL':
      return t("columns.admin.buildingInfo.Motel");
    case 'CHDV':
      return t("columns.admin.buildingInfo.CHDV")
    case 'HOTEL':
      return t("columns.admin.buildingInfo.Hotel");
    default:
      return '';
  }
}

