
import React, { useState,Fragment } from "react";
import { useTranslation } from "react-i18next";
import { HookModal } from "hooks";
import { ColumnRentedContract} from "columns/building/room";
import { depositContract } from "services/contract"
import {  HookModalForm } from "hooks";
import mapping from "./mappingContract";

const RentedContract=({isLoading,setIsLoading,roomId})=>{
  const { t } = useTranslation();
    const [fileURL,setFileURL]=useState("");
    const[showDepositedContract,RentedContractHTML,,,cancelRentedContract]=HookModal(
      {
        isLoading,
        setIsLoading,
        title:()=>"Hợp Đồng Cho Thuê",
        idElement:"depositedContracthtml",
        widthModal:1000
      })

    const sprintContract=async (value)=>{
      try{
      let objContract=mapping.rent(value,roomId);
      const data =await depositContract.postPreview({objContract,roomId})
      const fileURL=await depositContract.postExport({objContract,roomId})
      setFileURL(fileURL);
      showDepositedContract(data)
      }catch(err){
        console.log(err)
      }
      return false;
    }

  const [handleEditRentedContract, ModalFormRentedContract] = HookModalForm({
    title: () => "Hợp Đồng Cho Thuê",
    isLoading,
    setIsLoading,
    firstChange:true,
    textSubmit:t("Xem trước"),
    columns: ColumnRentedContract({t}),
    checkHidden:true,
    Post:(value)=> {
      let test=sprintContract(value)
      return test;
    },
    widthModal: 1010,
  });

  return [
    handleEditRentedContract,
    () => (
      <div className="rentContract">
        {ModalFormRentedContract()}
        {RentedContractHTML((data, set_data) => (
          <Fragment>
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              className="line-clamp-3 mr-3"
            ></div>
            <div className="p-2 flex justify-end">
              <button
                className="bg-blue-500 w-auto mr-5 text-white  px-4 py-2.5 rounded-xl"
                onClick={() => cancelRentedContract()}
              >
                {t("Hủy bỏ")}
              </button>
              <a
                className="bg-blue-500 text-white  px-4 py-2.5 w-auto rounded-xl"
                href={fileURL}
              >
                <button>{t("Tải về")}</button>
              </a>
            </div>
          </Fragment>
        ))}
      </div>
    ),
  ];
}
export default RentedContract;
