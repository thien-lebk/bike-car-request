import React, { Fragment, useEffect, useState, } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ListRentalContract } from "columns/building/room";
import { ColumnRentContract } from "columns/building/room"
import { rentedContract } from "services/contract";
// import mapping from "../../room/detail/mappingContract"
import buildService from "services/building/building";
import { RoomService } from "services/room";
import { useLocation } from "react-router";
import { depositContract } from "services/contract/index";
import mappingRentContract from "../mappingFunction/rent_contract"
const RentContract = ({ isLoading, setIsLoading, keyContract, setEditContract, idBuilding }) => {
  const { t } = useTranslation();
  const [buildingDetail, setBuildingDetail] = useState(null);
  const [listRoomNumber, setListRoomNumber] = useState(null);
  const [listContractCodeDeposit, setListContractCodeDeposit] = useState([]);
  const history = useLocation();


  const getBuildingContractData = async () => {
    const buildingInfo = await buildService.buildingManagement.getBuildingDetail(idBuilding);
    setBuildingDetail(buildingInfo.data);
    let listRoomNumber = await RoomService.roomManagement.getBuildingRoomList({ page: 0, perPage: 0 }, 0, idBuilding);
    listRoomNumber.data && setListRoomNumber(listRoomNumber.data.map(ele => { return { ...ele, value: ele.id, label: ele.roomNumber } }));
  }

  const getListDepositContractCodeRoom = async (value) => {
    let { data } = await rentedContract.getListDepositContractCodeRoom(value);
    setListContractCodeDeposit(
      setListContractCodeDeposit(
        data.map(ele => {
          return {
            value: ele.id,
            label: ele.depositContractCode
          }
        })
      )
    )
  }

  useEffect(() => {
    idBuilding && keyContract === '1' && getBuildingContractData();
    keyContract === '1' && handleChangeRentContract();
  }, [idBuilding, keyContract]);


  const [handleEditRentContract, roomRentContractModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
      t("routes.admin.building.detail.room.detail.Contract.Update rent contract information") :
      t("routes.admin.building.detail.room.detail.Contract.Create new rent contract information"),
    isLoading,
    setIsLoading,
    textSubmit: t("Tạo hợp đồng"),
    handleChange: async () => handleChangeRentContract(),
    columns: ColumnRentContract({
      buildingDetail,
      listRoomNumber,
      getListDepositContractCodeRoom,
      listContractCodeDeposit,
      t,

    }),
    Put: async (value) => {

      const { data } = await depositContract.getDepostContractByIdId(value.depositContractCode);
      handleShowRentContract({
        ...value, code: value.depositContractCode, nameBuilding: value.nameBuilding,
        statusPayment: value?.statusPayment,
        depositContractCode: data?.depositContractCode,
        address: data?.address,
        aLessorName: data?.lessor?.name,
        aLessorDateOfBirthday: data?.lessor?.dateOfBirthday,
        aLessorIdentityCard: data?.lessor?.identityCard,
        aLessorPhoneNumber: data?.lessor?.phoneNumber,
        aLessorMail: data?.lessor?.email,
        managerBuildingOther: value?.nameBuilding,
        roomId: data?.roomDto?.id,
        acreage: data?.roomDto?.acreage,
        price: data?.roomDto?.price,
        costList: data?.cost,

        bTenantName: data.housingBroker.name,
        bTenantPhoneNumber: data.housingBroker.phoneNumber,
        bTenantIdentityCardNumber: data.housingBroker.identityCard,
        bTenantIcplace: data.housingBroker.icPlace,
        bTenantIcDate: data.housingBroker.icDate,
        bTenantMail: data.housingBroker.email,
      })
    },
    widthModal: 650,
  });
  const [handleShowRentContract, roomShowRentContractModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
      t("routes.admin.building.detail.room.detail.Contract.Update rent contract information") :
      t("routes.admin.building.detail.room.detail.Contract.Create new rent contract information"),
    isLoading,
    setIsLoading,
    textSubmit: t("Save"),
    handleChange: async () => handleChangeRentContract(),
    columns: ListRentalContract({
      t,
    }),
    Post: async (value) => {
      let { data } = await rentedContract.getListDepositContractCodeRoom(value.roomId);
      return await rentedContract.createDataRentalContract(mappingRentContract({ ...value, buildingId: idBuilding, depositContractId: value.code }))
    },

    widthModal: 650,
  });

  const [handleChangeRentContract, roomRentContractTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],
    Get: async (params) => keyContract === '1' && await rentedContract.getListRentalContract(params),
    columns: ListRentalContract({
      t,
      URLnavi: history.pathname,
      handleEdit: handleShowRentContract,
    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditRentContract({ id: buildingDetail.id, nameBuilding: buildingDetail.name })}
          >
            <i className="las la-plus mr-1" />
            {t("routes.admin.Layout.Add")}
          </button>

        </div>
      </Fragment>
    ),
  });
  return [handleChangeRentContract,
    () =>
    (<Fragment>
      {roomRentContractTable()}
      {roomRentContractModal()}
      {roomShowRentContractModal()}
    </Fragment>)]
}

export default RentContract;
