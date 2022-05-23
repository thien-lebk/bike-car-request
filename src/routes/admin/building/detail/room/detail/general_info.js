import React, { useState, useEffect, Fragment } from "react";
import { useTranslation } from "react-i18next";
import { formatCurrency } from "utils";
import { RoomService } from "services/room";
import { Form } from "components";
import { Form as FormAnt } from "antd";
import { ColumnRoomInfo } from "columns/building/room";
import {  useSearchParams } from "react-router-dom";
import classNames from "classnames";
import {linkApi} from "variable";


const GeneralInfo = ({
  idBuilding,
  roomId,
  setRoomId,
  key,
  setKindRoom,
  kindpage,
  permissions
}) => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [firstChange, setFirstChange] = useState(true);
  const { t } = useTranslation();
  const [formRoom] = FormAnt.useForm();
  const pagename = {
    addNew: "creating-room",
    detail: "detail-room",
    update: "edit-room",
  };
  const [, setSearchParams] = useSearchParams();

  const handleDetailRoomChange = async () => {

    if (idBuilding && roomId) {
      const res = await RoomService.roomManagement.getRoomDetail(roomId);
      const detail = { ...res?.data };
      if (detail) {
        setTitle(res.data.roomNumber);
        setKindRoom(res.data.status);
        setData(detail);
      }
    }
  };

  useEffect(() => {
    key.toString() === "1" && roomId && handleDetailRoomChange();
  }, [key, roomId]);

  useEffect(()=>{
    kindpage===pagename.addNew&&setFirstChange(false);
  },[kindpage])

  const submit = async (value) => {

  if(!firstChange){
    value = {
      ...value,
      acreage: value.acreage.toString().replaceAll(',', ''),
      bonus: value.bonus.toString().replaceAll(',', ''),
      deposit: value.deposit.toString().replaceAll(',', ''),
      price: value.price.toString().replaceAll(',', ''),
    }
    if (!roomId) {
      const { data } = await RoomService.roomManagement.createRoom({
        ...value,
        buildingId: idBuilding,
        roomNumber : value.roomNumber.toString().trim()
      });
      if (data) {
        setRoomId(data.room.id);
        setSearchParams({ id: data.room.id, page: "tao-moi" });
      }
    } else {
      await RoomService.roomManagement.updateRoom(
        { ...value, buildingId: idBuilding,
          roomNumber : value.roomNumber.toString().trim()
        },
        roomId
      );
    }
    handleDetailRoomChange();
    setFirstChange(true);
  }

  };

  return [
    () => {
      switch (kindpage) {
        case "edit-room":
          return t("Chỉnh sửa phòng") + " " + title;
        case "detail-room":
          return t("Chi tiết phòng") + " " + title;
        default:
          return t("Tạo mới phòng");
      }
    },
    handleDetailRoomChange,
    () => (
      <Fragment>
         {permissions.XEM_QUAN_LY_TTC_CHI_TIET_PHONG  &&
           <div className="flex flex-col sm:flex-row">
           {/* side left */}
           <div className="w-auto h-full sm:w-1/2 z-10 flex flex-col mt-4 sm:items-start lg:w-1/3">
             <div className=" w-full h-full flex justify-start items-start pr-4">
               <img
                 src={data.id ? data.media : `${linkApi}/util/download?key=entity-service/building/default/landmark81-2.jpeg`}
                 alt="background_building"
                 className="rounded-lg mb-2 max-w-[430px] max-h-[350px] w-full h-full "
               />
             </div>
           </div>
           {/* side right */}
           {kindpage === pagename.detail && (
             <div className="building-detail-info w-full sm:w-1/2 lg:w-2/3 pb-5">
               {/* header */}
               <div className="flex justify-between mb-3">
                 <div>
                   <span className="font-bold">
                     {t("routes.admin.building-info.General Information")}
                   </span>
                 </div>
               </div>
               <div className="">
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Room Name")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>{data?.roomNumber}</span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Room Type")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>{data?.type}</span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Number Tenants")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>{data?.numTenants}</span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Area")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     {/* <span>{data.bonus? formatCurrency(data?.acreage," m2"):'' }</span> */}
                     <span>
                       {data?.bonus ? formatCurrency(data?.acreage, "") : ""}
                     </span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Bonus")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>
                       {data?.bonus ? formatCurrency(data?.bonus, "") : ""}
                     </span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Deposit")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>
                       {data?.deposit ? formatCurrency(data?.deposit, "") : ""}
                     </span>
                   </div>
                 </div>
                 <div className="flex justify-center items-center border-b-[1px] ">
                   <div className="w-1/3">
                     <span>{t("columns.admin.roomInfo.Price")}</span>
                   </div>
                   <div className="w-2/3 p-2 border-l-[1px]">
                     <span>
                       {data?.price ? formatCurrency(data?.price, "") : ""}
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           )}
           <Form
             className={classNames(
               "intro-x w-3/4 form-addnewRoom",
               kindpage === pagename.detail && "hidden"
             )}
             onFirstChange={()=>{setFirstChange(false)}}
             columns={ColumnRoomInfo({ t })}
             extendForm={()=><div className="flex justify-center items-center"><button
               className={classNames(" text-white text-base p-2 rounded-xl  mt-1 w-2/4",!firstChange?"bg-blue-500 hover:bg-blue-400":"bg-gray-400")}
               type="submit"
             >
               {t("components.form.modal.save")}
             </button></div>}
             handSubmit={submit}
             idSubmit={"button-addnewRoom"}
             values={data}
             firstChange={firstChange}
             form={formRoom}
           />
         </div>
         }

      </Fragment>
    ),
  ];
};
export default GeneralInfo;
