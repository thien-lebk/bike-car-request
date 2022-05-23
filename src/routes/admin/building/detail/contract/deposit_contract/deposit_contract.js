import React, { Fragment, useEffect, useState,useRef } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ListDepositContract } from "columns/building/room";
import { depositContract } from "services/contract/index";
import {ColumnDepositcontract} from "columns/building/room"
import buildService from "services/building/building";
import { RoomService } from "services/room"
import { useLocation } from "react-router";

const DepositContract = ({ isLoading, setIsLoading, expenses, keyContract,idBuilding }) => {
  const { t } = useTranslation();
  const [reloadTable, setReloadTable] = useState(false);
  const [nameBuilding,setNameBuilding] = useState(null);
  const [listRoomNumber,setListRoomNumber] = useState(null);
  const roomId=useRef(null)
  const history=useLocation();

  useEffect(() => { if (reloadTable) { setReloadTable(false); handleChangeDepositContract() } }, [reloadTable])

  useEffect(() => {

  }, [keyContract]);

  const getBuildingContractData = async ()=>{
    const res = await buildService.buildingManagement.getBuildingDetail(idBuilding)
    setNameBuilding(res.data)
    const roomCode = await RoomService.roomManagement.getBuildingRoomList({page:0,perPage:0},0, idBuilding)
     setListRoomNumber(roomCode.data.map(ele =>{return {...ele,value:ele.roomNumber,label:ele.roomNumber,id:ele.id}}));
  }
  useEffect(()=>{
    keyContract === '2' && handleChangeDepositContract();
    idBuilding && keyContract === '2'&& getBuildingContractData();
  },[keyContract, idBuilding])


  const [handleEditTempleContract, TempleContractModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
    t("routes.admin.building.detail.room.detail.payment history.Update payment history information") :
    t("routes.admin.building.detail.room.detail.payment history.Create new payment history information"),
    isLoading,
    setIsLoading,
    textSubmit: t("Tạo hợp đồng"),
    handleChange: async () => handleChangeDepositContract(),
    columns: ColumnDepositcontract({
      t,
      nameBuilding,
      listRoomNumber,
      roomId:(value)=>{roomId.current=value;}
    }),
    className:"TempleContract",
    Post: async (value) => {
      const data = await depositContract.getDepositContract(roomId.current);
      handleShowDipositHistory({
        statusPayment: value.statusPayment,
        depositContractCode: data.code,
        address:data.building.address,
        aLessorName:data.lessor.name,
        aLessorDateOfBirthday:data.lessor.dateOfBirth,
        aLessorIdentityCardNumber:data.lessor.identityCard,
        aLessorPhoneNumber:data.lessor.phoneNumber,
        aLessorEmail:data.lessor.email,
        roomDtoId:data.room.roomNumber,
        acreage:data.room.acreage,
        price:data.room.price,
        costList:data.cost
      });
    },
    widthModal: 1000,
  });
  const [handleShowDipositHistory, ShowDipositContractModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
    t("routes.admin.building.detail.room.detail.payment history.Update payment history information") :
    t("routes.admin.building.detail.room.detail.payment history.Create new payment history information"),
    isLoading,
    setIsLoading,
    textSubmit: t("Tạo hợp đồng"),
    handleChange: async () => handleChangeDepositContract(),
    columns: ListDepositContract({
      t,
      nameBuilding,
      listRoomNumber,
    }),
    className:"ShowDipositContractModal",
    GetById : (params,a,b) => depositContract.getDepostContractById(b.DepositContractCode),
    Post: async (value) =>{
      let test={
        "depositContractCode": value.depositContractCode,
        "address": value.address,
        "lessor": {
          // "id": null,
          "name": value.aLessorName,
          "dateOfBirthday": value.aLessorDateOfBirthday,
          "passport": value.passport,
          "identityCard": value.aLessorIdentityCardNumber,
          "icPlace": value.aLessorIcPlace,
          "icDate": value.aLessorIcDate,
          "phoneNumber":value.aLessorPhoneNumber,
          "accountBank": "string",
          "bank": "string",
          "type": "OWNER",
          // "appUserId": 0,
          "email": value.aLessorEmail,
          "address": "string"
        },
        "depositor": {
          // "id": null,
          "name": "string",
          "dateOfBirthday": "2022-05-18T05:54:29.657Z",
          "passport": "string",
          "identityCard": "string",
          "icPlace": "string",
          "icDate": "2022-05-18T05:54:29.657Z",
          "phoneNumber": "string",
          "accountBank": "string",
          "bank": "string",
          "type": "OWNER",
          // "appUserId": 0,
          "email": "string",
          "address": "string"
        },
        "housingBroker": {
          // "id":null,
          "name": "string",
          "dateOfBirthday": "2022-05-18T05:54:29.657Z",
          "passport": "string",
          "identityCard": "string",
          "icPlace": "string",
          "icDate": "2022-05-18T05:54:29.657Z",
          "phoneNumber": "string",
          "accountBank": "string",
          "bank": "string",
          "type": "OWNER",
          // "appUserId": 0,
          "email": "string",
          "address": "string"
        },
        "roomDto": {
          "id": roomId.current,
          "roomNumber": value.roomDtoId,
          "acreage": value.acreage,
          "price": value.price,
          "rentalTerm": "string",
          "tenant": 0
        },
        "costList": [
          {
            // "id": null,
            "name": "string",
            "unitPrice": 0,
            "unit": "string",
            // "roomCostId": 0
          }
        ],
        "depositNumber": 0,
        "note": "string",
        "status": "CREATE_NEW",
        "statusPayment": "PAYMENT",
        "datePayment": "2022-05-18T05:54:29.657Z",
        "pdfTemplate": 0,
        "fromDate": "2022-05-18T05:54:29.657Z",
        "endDate": "2022-05-18T05:54:29.657Z"
      };
      return await depositContract.createListDepositContract(test)
    },
    widthModal: 1000,
  });

  const [handleChangeDepositContract, DepositContractTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => {
      let data = { data: [] };
      if (keyContract === '2') {
        data = await depositContract.getListDepositContract(params);
      }
      return data;
    },
    id: () => roomId.current,
    columns: ListDepositContract({
      t,
      handleEdit: handleShowDipositHistory,
      URLnavi:history.pathname,
    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditTempleContract({nameBuilding:nameBuilding.name})}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>
        </div>
      </Fragment>
    ),
  });
  return [handleChangeDepositContract,
    () =>
    (<Fragment>
      {DepositContractTable()}
      {TempleContractModal()}
      {ShowDipositContractModal()}
    </Fragment>)]
}

export default DepositContract;
