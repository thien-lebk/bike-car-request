import React, { Fragment, useEffect, useState, } from "react";
import { useSearchParams, useLocation } from "react-router-dom";

import { useTranslation } from "react-i18next";
import { Tabs, } from "antd";
import RentContract from "./rent_contract/rent_contract"
import DepositContract from "./deposit_contract/deposit_contract"


const Contract = ({ isLoading, setIsLoading, expenses, roomId, key, idBuilding }) => {
  const { t } = useTranslation();
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();
  let URLSearch = new URLSearchParams(location.search);

  function convertTabToKey(params) {
    switch (params) {
      case 'deposit':
        return '2'
      case 'rent':
        return '1'
      default:
        return '1';
    }
  }
  const [keyContract, setKeyContract] = useState(convertTabToKey(URLSearch.get('subTab')));

  useEffect(() => {
    key === '12' &&  setSearchParams({ tab: 'contract', subTab: 'rent' })

  }, [key]);


  useEffect(() => {
    // key === '8' ;
  }, [keyContract]);

  const [, RentContractJsx] = RentContract({ isLoading, setIsLoading, expenses, roomId, keyContract, idBuilding })
  const [, DepositContractJsx] = DepositContract({ isLoading, setIsLoading, expenses, roomId, keyContract, idBuilding })

  const handleChangeTab = async (key) => {
    setKeyContract(key);
    switch (key) {
      case '2':
        setSearchParams({ tab: 'contract', subTab: 'deposit' });
        break;
      case '1':
        setSearchParams({ tab: 'contract', subTab: 'rent' });
        break;
      default:
        break;
    }
  }

  return [() => { },
  () =>
  (<Fragment>
    {/* onChange={handleChangeTab} activeKey={key}  */}
    <Tabs key="1" defaultActiveKey="1" onChange={handleChangeTab} activeKey={keyContract} >
      <Tabs.TabPane key="1" tab={t("Hợp đồng cho thuê").toUpperCase()} disabled={!idBuilding} >
        {RentContractJsx()}
      </Tabs.TabPane>

      <Tabs.TabPane key="2" tab={t("Hợp đồng cọc").toUpperCase()} disabled={!idBuilding}>
        {DepositContractJsx()}
      </Tabs.TabPane>

      <Tabs.TabPane key="3" tab={t("Thanh lý hợp đồng").toUpperCase()} disabled={!idBuilding}>
        {/* {key === "3" && EquipmentJSX()} */}
      </Tabs.TabPane>

      <Tabs.TabPane key="4" tab={t("Phụ lục hợp đồng").toUpperCase()} disabled={!idBuilding}>
        {/* {key === "3" && EquipmentJSX()} */}
      </Tabs.TabPane>
    </Tabs>
  </Fragment>)]
}

export default Contract;
