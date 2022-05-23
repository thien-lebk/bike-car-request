
import React, { useState, useEffect, Fragment } from "react";
import { useTranslation } from "react-i18next";

import { buildingMedias } from "services/building";
import { UtilServices } from "services/util";
import { Upload } from "components";
import { Popconfirm } from "antd";

const Photo = ({ isLoading, setIsLoading, idBuilding, key,permissions }) => {
  const { t } = useTranslation();
  const [listBuildingImage, setListBuildingImage] = useState([])

  const getListImageBuiding = async (params) => {
    setIsLoading(true);
    const listImgRes = await UtilServices.getMediaList('BUILDING', idBuilding);
    setListBuildingImage(listImgRes);
    setIsLoading(false);
  }

  useEffect(() => {
    if (idBuilding && key === '5') {
      getListImageBuiding();
    }
  }, [idBuilding, key])

  return [
    () =>
      <Fragment>
        <div style={{ paddingRight: '110px' }}>
          <div className="relative opacity-0">

            <p  className="h-10 w-full rounded-xl text-gray-600 bg-white border border-solid border-gray-100 pr-9 pl-4"></p>
          </div>

        </div>
        <div style={{ marginTop: "-42px" }} className="pb-4">
              <Upload
              showBtnUpload={permissions?.THEM_QUAN_LY_ANH_DINH_KEM_TOA_NHA}
              showBtnDownload = {()=>(permissions?.XEM_QUAN_LY_ANH_DINH_KEM_TOA_NHA)}
              showBtnDelete = {()=>(permissions?.XOA_QUAN_LY_ANH_DINH_KEM_TOA_NHA)}
              loading={isLoading}
              extendButton={(item) => (
                <Fragment>
                  {(item.mediaType === 'IMAGE' && !item.isDefault) && (
                    <Popconfirm
                      placement="left"
                      title={t("routes.admin.building-info.Are you sure you choose photo avatar?")}
                      icon={<i className="las la-question-circle text-2xl text-red-500 bold absolute -top-0.5 -left-1" />}
                      onConfirm={async () => {
                        setIsLoading(true);
                        await buildingMedias.putMediaAvatar(item.id);
                        await getListImageBuiding();
                      }}
                      okText={t("components.datatable.ok")}
                      cancelText={t("components.datatable.cancel")}
                    >
                      {permissions?.SUA_QUAN_LY_ANH_DINH_KEM_TOA_NHA && 
                        <button
                        className="embed  text-xs rounded-lg mr-2"
                      >
                        <span className="las la-check-circle m-0 p-0 text-green-500 text-2xl" />
                      </button>
                    }
                    </Popconfirm>
                  )}
                </Fragment>
              )}
              right={true}
              onlyImage={false}
              maxSize={50}
              accept={'video/*,image/*'}
              onChange={(listImage) => setListBuildingImage(listImage)}
              action={async (file, config) => {
                return await UtilServices.postUpload({file, category: 'BUILDING'}, idBuilding, config, setIsLoading);
              }}
              value={listBuildingImage}
              validation={(file, listFiles) =>
                file.type.indexOf('video/') === -1 || (file.type.indexOf('video/') > -1 && listFiles.filter(item => item.mediaType === 'VIDEO').length === 0)
              }
              deleteFile={async (fileId) => await buildingMedias.deleteMedia(fileId)}
            />

        </div>
      </Fragment>
  ]
}

export default Photo;
