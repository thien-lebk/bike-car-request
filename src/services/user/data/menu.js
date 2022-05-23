  const menu =  [
  {
      "id": "2",
      "name": "Danh sách xe",
      "code": "DANH_SACH_TOA_NHA",
      "pageUrl": "/building",
      "parent": null,
      "isIgnore": false
  },
  {
      "id": "8",
      "name": "Danh sách yêu cầu",
      "code": "THIET_LAP_TAI_KHOAN",
      "pageUrl": "/user-profile",
      "parent": null,
      "isIgnore": false
  },
  {
      "id": "10",
      "name": "Thiết lập vai trò",
      "code": "THIET_LAP_VAI_TRO",
      "pageUrl": "/role-setting",
      "parent": null,
      "isIgnore": false
  },
  {
      "id": "4",
      "name": "Danh sách hợp đồng",
      "code": "DANH_SACH_HOP_DONG",
      "pageUrl": "",
      "parent": null,
      "isIgnore": false,
      "children": [
          {
              "id": "11",
              "name": "Hợp đồng cho thuê",
              "code": "HOP_DONG_CHO_THUE",
              "pageUrl": "/hop-dong/cho-thue",
              "parent": "4",
              "isIgnore": false
          },
          {
              "id": "12",
              "name": "Hợp đồng đặt cọc",
              "code": "HOP_DONG_DAT_COC",
              "pageUrl": "/hop-dong/dat-coc",
              "parent": "4",
              "isIgnore": false
          }
      ]
  },
  {
      "id": "21",
      "name": "Quản lý người dùng",
      "code": "QUAN_LY_NGUOI_DUNG",
      "pageUrl": "/user-managerment",
      "parent": null,
      "isIgnore": false
  },
  {
      "id": "22",
      "name": "Danh sách nhân viên",
      "code": "DANH_SACH_NHAN_VIEN",
      "pageUrl": "/employee",
      "parent": null,
      "isIgnore": false
  }
]
export default menu
