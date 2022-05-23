import React, { Fragment, useEffect, useState, } from "react";
import { useTranslation } from "react-i18next";
import { HookDataTable, HookModalForm } from "hooks";
import { ListRentalContract } from "columns/building/room";
import {ColumnRentContract } from "columns/building/room"
import { rentedContract } from "services/contract";
import mapping from "../../mappingContract"


const RentContract = ({ isLoading, setIsLoading, expenses, roomId, keyContract,setEditContract }) => {
  const { t } = useTranslation();
  const [reloadTable, setReloadTable] = useState(false);
  const [listContract,setListContract] = useState([]);
  

   useEffect(() => { if (reloadTable) { setReloadTable(false); handleChangeRentContract() } }, [reloadTable])
   const sprintContract=async (value)=>{
    try{
    let objContract=mapping.rentContract(value,roomId);
  // const data = await .postPreview({objContract,roomId})
  //   const fileURL=await depositContract.postExport({objContract,roomId})
  //   setFileURL(fileURL);
  //   showDepositedContract(data)
    return objContract
     }catch(err){
       console.log(err)
     }
     return false;
   }

  useEffect(() => {
    keyContract === '1' && handleChangeRentContract();
  }, [keyContract]);

  const initList = async ()=>{
    if (roomId) {
      let res = await rentedContract.getListRentalContract();
      console.log("object",res);
        setListContract(res.data.map((ele) => {
        return { ele } ;
      }));
      let test=res.data.map((ele) => {
        return  ele.depositContract?.depositContractCode ;
      })
      console.log("object",test);
    }
   }
   useEffect(()=>{
      initList()
   },[keyContract])

   useEffect(()=>{console.log(listContract,123456)},[listContract])

  const [handleEditRentContract, roomRentContractModal] = HookModalForm({
    title: (data) => data.id === 0 || data.id ?
    t("routes.admin.building.detail.room.detail.Contract.Update rent contract information") :
     t("routes.admin.building.detail.room.detail.Contract.Create new rent contract information"),
    isLoading,
    setIsLoading,
    textSubmit: t("Tạo hợp đồng"),
    handleChange: async () => handleChangeRentContract(),

    columns: ColumnRentContract({
      t,
      listData: listContract,
      setEditContract
    }),
    Post: (value) => console.log("====>",value),
    widthModal: 650,
  });

  const [handleChangeRentContract, roomRentContractTable] = HookDataTable({
    loadFirst: false,
    isLoading,
    setIsLoading,
    save: false,
    perPageLablePagi: [t("columns.building_list.of"), t("columns.building_list.items"), t("columns.building_list.page")],

    Get: async (params) => {
      let data = { data: [] };
      if ( keyContract === '1') {
        data = await rentedContract.getListRentalContract(params);
      }
      return data;
    },
    id: () => roomId,
    // pageSizeOptions: [5, 10, 20],
    columns: ListRentalContract({
      t,

      // GET : (value) => console.log(value)
      // handleDelete: (value) => PaymentHistoryRoomService.delete({ roomId, value, setReloadTable }),

    }),
    rightHeader: (
      <Fragment>
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-5 py-3 rounded-xl hover:bg-blue-400 inline-flex items-center"
            onClick={() => handleEditRentContract()}
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
    </Fragment>)]
}

export default RentContract;
