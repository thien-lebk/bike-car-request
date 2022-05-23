import React, { useEffect, useState, Fragment, useMemo, } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams, useLocation, useParams } from "react-router-dom";

import { Tabs } from "antd";
import { useRef } from "react";
import RoomList from "./room"
import Contract from "./contract/contract";
import GeneralInfo from "./general_info"
import Photo from "./photo";
import Rules from "./rules"
import Utility from "./utility"
import Expenses from "./cost";
import EmployeeList from "./employee/employee_list";
import Content from "./content";
import { PermissionsService } from "services/permissions";

const Page = () => {
  const blockLoopAPI = useRef(false);
  const { TabPane } = Tabs;
  const { t } = useTranslation();
  const location = useLocation();
  const [idBuilding, setIdBuilding] = useState();
  const [organization, setOrganization] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState('1');
  const [kindpage, setKindpage] = useState();
  const [, setSearchParams] = useSearchParams();
  const params = useParams();
  // const tabname = ["general-info", "building-staff", "cost", "utility", "photo", "rule", "list"]
  const tabname = useMemo(() => { return { 1: "general-info", 2: "building-staff", 3: "cost",
  4: "utility", 5: "photo", 6: "rule", 7: "list", 11: "introduction", 12: "contract" } },[]);
  const [permissions, set_permissions] = useState([])



  useEffect(() => {
    let arr_temp = params.building.split("-");
    !isNaN(arr_temp[arr_temp.length - 1]) && setIdBuilding(arr_temp[arr_temp.length - 1]);
    arr_temp.pop();
    setKindpage(arr_temp.join("-"))
    let URLSearch = new URLSearchParams(location.search);
    // console.log(location.search);
    for (const property in tabname) {
      URLSearch.get('tab') === tabname[property] && setKey(property.toString())
    }
  }, [location.search, params.building, tabname]);

  const handleChangeTab = async (key) => {
    idBuilding && setSearchParams({ tab: tabname[key] })
    setKey(key.toString());
    switch (key.toString()) {
      case "1":
        handleGeneralInfoChange()
        break;
      case "2":
        handleBuildingManagerListChange()

        break;

      default:
        break;
    }
  }

  const [, ContractJsx] = Contract({ isLoading, setIsLoading, idBuilding, key })
  const [BuildingContentJSX] = Content({ isLoading, setIsLoading, idBuilding, key, permissions })
  const [, RoomListJSX] = RoomList({ isLoading, setIsLoading, idBuilding, key, permissions })
  const [, RulesJSX] = Rules({ isLoading, setIsLoading, idBuilding, key, permissions })
  const [, UtilityJSX] = Utility({ isLoading, setIsLoading, idBuilding, key, permissions })
  const [, ExpensesJSX] = Expenses({ isLoading, setIsLoading, idBuilding, key, permissions })
  const [handleBuildingManagerListChange, ManagerJSX] = EmployeeList({ isLoading, setIsLoading, idBuilding, key, organization, permissions })
  const [title, handleGeneralInfoChange, GeneralInfoJSX] = GeneralInfo({ isLoading, setIsLoading, idBuilding, setIdBuilding, setKindpage, key, kindpage, setOrganization, permissions })
  const [PhotoJsx] = Photo(({ isLoading, setIsLoading, idBuilding, key, permissions }))
  //permission
  const initPermission = async () => {

    const res = await PermissionsService.get_Permission('DANH_SACH_TOA_NHA')
    set_permissions(res.permissions)

      }
  useEffect(()=>{
      initPermission()
    },[])

  return (<Fragment>
    <div className="buildingList px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)]">
      <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 border-b-2 border-gray-300 font-semibold text-base px-4">
        <span className="text-lg">
          {/* {(idBuilding&&status==="chinh-sua")?t("routes.admin.building-info.Edit Building"):t("routes.admin.building-info.Create Building")} */}
          {title()}
        </span>
        <span>
          {/* <span className="text-blue-500">
          {(idBuilding&&status==="chinh-sua")?t("routes.admin.building-info.Edit Building"):t("routes.admin.building-info.Create Building")}
          </span>
          <span className="px-2">/</span>
          <span>
          {(idBuilding&&status==="chinh-sua")?t("routes.admin.building-info.Edit Building"):t("routes.admin.building-info.Create Building")}
          </span> */}
        </span>
      </div>
      <div className="buildingList bg-white relative px-5 mb-7 min-h-[480px] rounded-b-xl" >
        <Tabs defaultActiveKey="1" activeKey={key.toString()} onChange={handleChangeTab}>

          <TabPane tab={t("routes.admin.building-info.General Information Uppercase")} /*disabled={!idBuilding?true:false}*/ key="1">
            {GeneralInfoJSX()}
          </TabPane>

          <TabPane forceRender={true} tab={t("routes.admin.building-info.Introduction tab")} disabled={!idBuilding ? true : false} className="form-room-list" key="11">
            {key === "11" && BuildingContentJSX()}
          </TabPane>

          <TabPane tab={t("columns.admin.buildingInfo.buildingManager")} disabled={!idBuilding ? true : false} className="form-building-staff" id="building-manager" key="2">
            {key === "2" && ManagerJSX({ idBuilding, blockLoopAPI })}
          </TabPane>

          <TabPane forceRender={true} tab={t("routes.admin.building-info.Expenses")} disabled={!idBuilding ? true : false} className="form-change-pass" key="3">
            {key.toString() === "3" && ExpensesJSX(idBuilding)}
          </TabPane>

          <TabPane forceRender={true} tab={t("routes.admin.building-info.Utilities")} disabled={!idBuilding ? true : false} className="form-room-utilities" key="4">
            {key.toString() === "4" && UtilityJSX()}
          </TabPane>

          <TabPane tab={t("columns.admin.buildingInfo.Attached Photo")} disabled={!idBuilding ? true : false} className="form-change-pass" key="5">
            {key.toString() === "5" && PhotoJsx()}
          </TabPane>

          <TabPane forceRender={true} key="6" disabled={!idBuilding ? true : false} tab={t("columns.admin.roomRules.Building Rules").toUpperCase()}>
            {key.toString() === "6" && RulesJSX()}
          </TabPane>

          <TabPane forceRender={true} tab={t("routes.admin.building-info.Room List")} disabled={!idBuilding ? true : false} className="form-room-list" key="7">
            {key.toString() === "7" && RoomListJSX()}
          </TabPane>
          <TabPane forceRender={true} key="12" tab={t("routes.admin.building.detail.room.detail.Contract").toUpperCase()}>
            {key === "12" && ContractJsx()}
          </TabPane>

        </Tabs>
      </div>
    </div>
  </Fragment>)
}
export default Page;


