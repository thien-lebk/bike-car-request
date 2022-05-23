import React, { useEffect, useState, Fragment, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Tabs, } from "antd";
import { useParams,useLocation } from "react-router-dom";
import GeneralInfo from "./general_info";
import Expense from "./expense";
import Equipment from "./equipment";
import Rules from "./rules";
import PaymentHistory from "./payment_history";
import ScheduleRoom from "./schedule";
import Photo from "./photo";
import UtilityRoom from "./utilitity";
import CustomerDeposit from "./customer_deposit";
import CustomerRent from "./customer_rent";
import { Menu, Dropdown, Button,  } from "antd";
import {  CustomerService } from "services/room";
import classNames from "classnames";
import RentedContract from "./rented_contract"
import DepositedContract from "./deposited_contract"
import { DownOutlined } from '@ant-design/icons';
import { rentedContractData } from './fakeData/rentedContract'
import {convertTypeRoom, } from "routes/admin/building/detail/room/utils"
import { useAuth } from "global";
import Content from "./content";
import { PermissionsService } from "services/permissions";


const RoomDetail = ({  expenses, roomrules, supplies, utilitiesList }) => {
  const { formatDate } = useAuth();
  const [key, setKey] = useState('1');
  const { TabPane } = Tabs;
  const [idBuilding, setIdBuilding] = useState();
  const [roomId, setRoomId] = useState();
  const [kindpage,setKindpage]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [kindRoom, setKindRoom] = useState('EMPTY');
  const [mount, setMount] = useState(false);
  const { t } = useTranslation();
  const location=useLocation();
  const params = useParams();
  const [permissions ,set_permissions]= useState([])


  const [RoomContentJSX] = Content({ isLoading, setIsLoading, roomId, key })
  const [title, , GeneralInfoJSX] = GeneralInfo({ isLoading, setIsLoading, idBuilding, roomId, setKindRoom ,key,kindpage,setRoomId,permissions })
  const [, RulesJSX] = Rules({ isLoading, setIsLoading, idBuilding, formatDate, roomId, key,permissions });
  const [, CustomerRentJSX] = CustomerRent({ isLoading, setIsLoading, idBuilding, formatDate, roomId, key,permissions });
  const [, CustomerDepositJSX] = CustomerDeposit({ isLoading, setIsLoading, idBuilding, formatDate, roomId, key,permissions });
  const [, ExpenseJSX] = Expense({ isLoading, setIsLoading, expenses, roomId, key, permissions });
  const [, EquipmentJSX] = Equipment({ isLoading, setIsLoading, roomId, supplies, key,permissions });
  const [, ScheduleRoomJSX] = ScheduleRoom({ isLoading, setIsLoading, idBuilding, formatDate, roomId, roomrules, key,permissions })
  const [, PaymentHistoryJSX] = PaymentHistory({ isLoading, setIsLoading, idBuilding, expenses, roomId, key,permissions })
  const [, UtilityRoomJSX] = UtilityRoom({ formatDate, isLoading, setIsLoading, roomId, utilitiesList, key,idBuilding, permissions })
  const [showRentedContract, RentedContractJSX] = RentedContract({ isLoading, setIsLoading, roomId })
  const [handleEditDepositedContract, DepositedContractJSX] = DepositedContract({ isLoading, setIsLoading, roomId })
  const initFunction = useCallback(async () => {
    if (!mount) {
      setMount(true);
      let arr_temp=params.building.split("-");
      !isNaN(arr_temp[arr_temp.length-1])&&setIdBuilding(arr_temp[arr_temp.length-1]);
      arr_temp=params.room.split("-");
      !isNaN(arr_temp[arr_temp.length-1])&&setRoomId(arr_temp[arr_temp.length-1]);
      arr_temp.pop();
      setKindpage(arr_temp.join("-"))
    }
  },[mount])

  useEffect(() => {
    initFunction();
  }, [initFunction, location]);

  useEffect(()=>{
  },[kindpage])

  const handleChangeTab = async (key) => {
    setKey(key);
  }
  const handleChangeKindRoom = async (event) => {
    if (roomId) {
      if (event.key === 'DEPOSIT') {
        await CustomerService.changeKindRoom({ roomId, status: 'DEPOSIT' })
      } else if (event.key === 'ALMOST_EXPIRED') {
        await CustomerService.changeKindRoom({ roomId, status: 'ALMOST_EXPIRED' })
      } else if (event.key === 'RENT') {
        await CustomerService.changeKindRoom({ roomId, status: 'RENT' })
      } else if (event.key === 'EMPTY') {
        await CustomerService.changeKindRoom({ roomId, status: 'EMPTY' })
      }
      setKindRoom(event.key)
    }
    setKey('1');

  };
  const menu = (
    <Menu onClick={handleChangeKindRoom}>
      <Menu.Item key="DEPOSIT" >
        { t("routes.admin.room-info.deposit")}
      </Menu.Item>
      <Menu.Item key="ALMOST_EXPIRED">
        {t("routes.admin.room-info.almost expired")}
      </Menu.Item>
      <Menu.Item key="RENT" >
        {t("routes.admin.room-info.rent")}
      </Menu.Item>
      <Menu.Item key="EMPTY" >
        {t("routes.admin.room-info.empty")}
      </Menu.Item>
    </Menu>
  );
  const MenuHover = ({ kindRoom, showRentedContract, handleEditDepositedContract }) => {
    const { t } = useTranslation();
    return (
      <Menu className={classNames("bg-white p-2 rounded-xl drop-shadow-2xl mt-5 border border-gray-400 z-40", kindRoom !== "EMPTY" ? "inline-block" : "hidden")} defaultSelectedKeys="MenuHover1">
        <Menu.Item key={1}>
          <button className="flex w-40 justify-center m-1 items-center text-sm border-2 border-blue-500 text-blue-500 rounded-xl px-5 py-1" 
            onClick={() => showRentedContract(
            rentedContractData
            , true
          )}>
            {t("routes.admin.room-info.Leases Contract")}
          </button>
        </Menu.Item>
        <Menu.Item key={2} className={classNames(kindRoom === "DEPOSIT" ? "inline-block" : "hidden")}>
          <button className="flex w-40 justify-center m-1 items-center text-sm border-2 border-blue-500 text-blue-500 rounded-xl px-5 py-1" onClick={() => handleEditDepositedContract()}>
            {t("routes.admin.room-info.Deposit Contract")}
          </button>
        </Menu.Item>
      </Menu>
    );
  };
  const initPermission = async ()=>{
    const res = await PermissionsService.get_Permission('DANH_SACH_PHONG')
    set_permissions(res.permissions)
    }
  useEffect(()=>{
      initPermission()
  },[])
  return (<Fragment>
    <div className="buildingList px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)] pb-5">
      <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 border-b-2 border-gray-300 font-semibold text-base px-4">
        <span className="text-lg">{title()}</span>
        <div className={classNames(!roomId&&"hidden")}>
          <Dropdown overlay={<MenuHover kindRoom={kindRoom} showRentedContract={showRentedContract} handleEditDepositedContract={handleEditDepositedContract} />} overlayClassName="z-[1000]">
            <button className={classNames("bg-blue-400 text-white text-sm px-4 py-2.5 rounded-xl hover:bg-blue-500  inline-flex items-center", kindRoom !== "EMPTY" ? "hover:bg-blue-500" : " bg-gray-400 hover:bg-gray-400")} >
              {t("routes.admin.room-info.Contract")}
            </button>
          </Dropdown>
          <button className={classNames("h-10 px-3 mx-3 border-[1px] border-gray-400 bg-blue-400 hover:bg-blue-500 text-white text-sm rounded-xl", kindRoom === "EMPTY" || kindRoom === "ALMOST_EXPIRED" ? "hover:bg-blue-500" : " bg-gray-400 hover:bg-gray-400")}
            disabled={kindRoom === "EMPTY" || kindRoom === "ALMOST_EXPIRED" ? true : false}
          >{t("routes.admin.room-info.Public")}
          </button>
          <Dropdown overlay={menu}>
            <Button className="h-10 px-3 mx-3 border-[1px] border-gray-400 bg-white text-black text-sm rounded-xl ">
              {convertTypeRoom(kindRoom, t)} <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="buildingList bg-white relative px-5 min-h-[480px] rounded-b-xl">
        <Tabs key="1" defaultActiveKey="1" onChange={handleChangeTab} activeKey={key} >
          <TabPane key="1" tab={t("routes.admin.building-info.General Information Uppercase")} >
          {GeneralInfoJSX()}
          </TabPane>

          <TabPane forceRender={true} tab={t("routes.admin.building-info.Introduction tab")} className="form-room-list" key="11">
            {key === "11" && RoomContentJSX()}
          </TabPane>

          <TabPane key="2" tab={t("routes.admin.building-info.Expenses")} disabled={!roomId&&true}>
            {key === "2" && ExpenseJSX()}
          </TabPane>

          <TabPane key="3" tab={t("routes.admin.room-info.Equipments")} disabled={!roomId&&true}>
            {key === "3" && EquipmentJSX()}
          </TabPane>

          <TabPane key="4" tab={t("routes.admin.building-info.Utilities").toUpperCase()} disabled={!roomId&&true}>
            {key === "4" && UtilityRoomJSX()}
          </TabPane>

          <TabPane forceRender={true} key="5" tab={t("columns.admin.roomRules.Room Rules").toUpperCase()} disabled={!roomId&&true}>
            {key === "5" && RulesJSX()}
          </TabPane>

          <TabPane tab={t("columns.admin.buildingInfo.Attached Photo")} className="form-change-pass" key="6" disabled={!roomId&&true}>
            {Photo({ isLoading, setIsLoading, idBuilding, idRoom: roomId, key,permissions })}
          </TabPane>

          {kindRoom === "RENT" ||
            kindRoom === "ALMOST_EXPIRED" ? (
            <TabPane key="7" tab={t("routes.admin.building.detail.room.detail.Tenant").toUpperCase()} disabled={!roomId&&true}>
              {key === "7" && CustomerRentJSX()}
            </TabPane>
          ) : null}

          {kindRoom === "RENT" || kindRoom === "ALMOST_EXPIRED" ? (
            <TabPane key="8" forceRender={true} tab={t("routes.admin.building.detail.room.detail.Payment history").toUpperCase()} disabled={!roomId&&true}>
              {key === "8" && PaymentHistoryJSX()}
            </TabPane>
          ) : null}

          {kindRoom === "EMPTY" ? (
            <TabPane forceRender={true} key="9" tab={t("routes.admin.building.detail.room.detail.Schedule").toUpperCase()} disabled={!roomId&&true}>
              {key === "9" && ScheduleRoomJSX()}
            </TabPane>
          ) : null}
          {kindRoom === "DEPOSIT" ? (
            <TabPane forceRender={true} key="10" tab={t("routes.admin.building.detail.room.detail.Deposited Customer").toUpperCase()} disabled={!roomId&&true}>
              {key === "10" && CustomerDepositJSX()}
            </TabPane>
          ) : null}


        </Tabs>
        {RentedContractJSX()}
        {DepositedContractJSX()}

      </div>
    </div>
  </Fragment>)
};
export default RoomDetail;
