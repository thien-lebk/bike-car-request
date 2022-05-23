import React, { useState, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { HookModal } from "hooks";
import { ColumnDepositContract } from "columns/building/room";
import { depositContract } from "services/contract"
import { HookModalForm } from "hooks";
import mapping from "./mappingContract";

const DepositedContract = ({ isLoading, setIsLoading, roomId  }) => {
  const { t } = useTranslation();
  const [fileURL, setFileURL] = useState("");
  const [showDepositedContract, DepositedContractHTML, , , cancelDepositedContract] = HookModal({ isLoading, setIsLoading, title: () => "Hợp Đồng Đặt Cọc", idElement: "depositedContracthtml", widthModal: 1000 })
  const sprintContract = async (value) => {
    try {
      let objContract = mapping.deposit(value, roomId)
      console.log(objContract)
      const data = await depositContract.postPreview({ objContract, roomId })
      const fileURL = await depositContract.postExport({ objContract, roomId })
      setFileURL(fileURL);
      showDepositedContract(data)
    } catch (err) {
      console.log(err)
    }
    return false;
  }

  const [handleEditDepositedContract, ModalFormDepositedContract] = HookModalForm({
    title: () => "Hợp Đồng Đặt Cọc",
    isLoading,
    setIsLoading,
    firstChange: true,
    textSubmit: t("Xem trước"),
    columns: ColumnDepositContract({ t }),
    checkHidden: true,
    Post: (value) => sprintContract(value),
    widthModal: 1020,
  });
  return [
    handleEditDepositedContract,
    () => (
      <Fragment>
        {ModalFormDepositedContract()}
        {DepositedContractHTML((data, set_data) => (
          <Fragment>
            <div
              dangerouslySetInnerHTML={{ __html: data }}
              className="line-clamp-3 mr-3"
            ></div>
            <div className="p-2 flex justify-end">
              <button
                className="bg-blue-500 w-auto mr-5 text-white  px-4 py-2.5 rounded-xl"
                onClick={() => cancelDepositedContract()}
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
      </Fragment>
    ),
  ];
}
export default DepositedContract;
