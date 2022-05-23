import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BuildingEmployee } from "services/building";
import { Form, Select } from 'antd';
import "./index.less"
import loadingIMG from "assets/images/loading/loading-square.jpeg"
import noData from "assets/images/no-data.png"


const CreateFormComponent = ({ roleList, handleChange, post }) => {
  const { t } = useTranslation();
  const searchInfo = useRef("")
  const rolesEmployee = useRef(null)
  const [dataDisplay, setDataDisplay] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disabledSearch, setDisabledSearch] = useState(false);
  const [form] = Form.useForm()

  const getUserByIDcard = async () => {

    setIsLoading(true);
    if (searchInfo.current) {
      let { data } = await BuildingEmployee.getUserIDcard(searchInfo.current);
      if (data) console.log(data)
      setDataDisplay(data)
    }
    setIsLoading(false)

  }

  const handleChangeSelectRole = (value, option) => {
    // console.log(option)
    rolesEmployee.current = option.map((ele, i) => {
      return { roleId: ele.value, roleName: ele.label }
    })
  }

  const submit = async () => {
    if (rolesEmployee.current && rolesEmployee.current.length !== 0) {
      let data = post && post(rolesEmployee.current, dataDisplay.id)
      if (data) {
        setDataDisplay("");
        form.resetFields();
        setTimeout(() => handleChange(), 1000)
      }
      return true;
    } else return false
  }

  const handleShow = () => {
    setDisabledSearch(false);
    form.resetFields();
    setDataDisplay("")
  }

  const handleEdit = (data) => {
    setDisabledSearch(true)
    setDataDisplay(data.display)
    form.setFieldsValue({ CMND: data.form.CMND, roles: data.form.roles });
    searchInfo.current = data.form.CMND;
    rolesEmployee.current = data.form.roles;
  }
  return [
    () => (
      <div className="p-3 formSearchDispalyInfo">
        <Form form={form}
        >
          {/* search CMND/UUID */}
          <div className="flex w-full relative items-center justify-center">
            <Form.Item
              className="w-full"
              name="CMND"
              label={t("routes.admin.building.detail.employee.Search staff")}
              rules={[
                {
                  required: true,
                  message: t("routes.admin.building.detail.employee.Find users hoder"),
                },
              ]}
            >
              <input
                className="w-full outline-none border border-gray-400 p-2 rounded-xl"
                id="building-staff"
                placeholder={t("routes.admin.building.detail.employee.Find users hoder")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    getUserByIDcard();
                  }
                }}
                disabled={disabledSearch}
              onChange={(value)=>{ searchInfo.current = value.target.value;}}
              ></input>
            </Form.Item>

            <div
              onClick={getUserByIDcard}
              className="w-10 h-10 cursor-pointer absolute top-8 right-0 flex justify-center items-center"
            >
              <span className="uhome-search text-[20px]"></span>
            </div>
          </div>
          {/* Display */}
          <div className="h-72  flex justify-center items-center">
            {dataDisplay && (
              <div className="flex w-full ">
                {/* side left */}
                <div className="w-auto h-full">
                  <div className=" w-72  h-72  flex justify-start items-start pr-4">
                    <img
                      src={dataDisplay.profileImage}
                      alt="profileImage"
                      className="h-[250px] w-[250px] mx-auto overflow-hidden rounded-xl"
                    />
                  </div>
                </div>
                {/* side right */}
                <div className="building-detail-info w-full">
                  <div className="flex justify-between mb-3">
                    <div>
                      <span className="font-bold">
                        {/* {t("routes.admin.building-info.General Information")} */}
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-3">
                      <div>
                        <span className="font-bold">
                          {t("routes.admin.building-info.General Information")}
                        </span>
                      </div>
                    </div>
                    {/* building detail info */}
                    <div>
                      <div className="flex justify-center items-center border-b-[1px] ">
                        <div className="w-1/3">
                          <span>{t("routes.admin.building.detail.employee.Enter Name")}</span>
                        </div>
                        <div className="w-2/3 p-2 border-l-[1px]">
                          <span>{dataDisplay.name}</span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center border-b-[1px]">
                        <div className="w-1/3">
                          <span>{t("routes.admin.building.detail.employee.Enter gerder")}</span>
                        </div>
                        <div className="w-2/3 p-2 border-l-[1px]">
                          <span>{t("enum." + dataDisplay?.gender)}</span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center border-b-[1px]">
                        <div className="w-1/3">
                          <span>{t("routes.admin.building.detail.employee.Phone Number")}</span>
                        </div>
                        <div className="w-2/3 p-2 border-l-[1px]">
                          <span>{dataDisplay?.phoneNumber}</span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center border-b-[1px]">
                        <div className="w-1/3">
                          <span>{t("routes.admin.building.detail.employee.Enter address")}</span>
                        </div>
                        <div className="w-2/3 p-2 border-l-[1px]">
                          <span>{dataDisplay?.address}</span>
                        </div>
                      </div>

                      <div className="flex justify-center items-center border-b-[1px]">
                        <div className="w-1/3">
                          <span>{t("CMND/CCCD/Passport")}</span>
                        </div>
                        <div className="w-2/3 p-2 border-l-[1px]">
                          <span>{dataDisplay?.identityCard||dataDisplay?.passport}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {!dataDisplay && !isLoading && (<div className="h-72 w-full flex justify-center items-center relative">
              <span className="absolute top-1 text-indigo-400">{searchInfo.current?t("routes.admin.building.detail.employee.No matching"):t("routes.admin.building.detail.employee.Enter user add")}</span>
              <img src={noData} alt="noData..." className="w-2/5" />
            </div>)}
            {
              !dataDisplay && isLoading && (<div className="h-72 w-full flex justify-center items-center">
                <img src={loadingIMG} alt="Loading..." />
              </div>)
            }
          </div>
          {/* role */}

          <Form.Item
            name="roles"
            label={t("routes.admin.building.detail.employee.Roles")}
            rules={[{ required: true }]}
            className="roles"
          >
            <Select
              id="select-role"
              mode="multiple"
              style={{ width: "100%"}}
              placeholder={t("routes.admin.building.detail.employee.SelectRolseUser")}
              onChange={handleChangeSelectRole}
              optionLabelProp="label"
              optionFilterProp="label"
              disabled={dataDisplay ? false : true}
              className={"selectRoleEmpBuild"}
            >
              {roleList.map((ele, index) => (
                <Select.Option key={index} value={ele.id} label={ele.name}>
                  {ele.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </div>
    ),
    submit, handleEdit, handleShow
  ];
}

export default CreateFormComponent;
