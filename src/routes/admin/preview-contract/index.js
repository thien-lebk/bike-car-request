import React, { useState, Fragment, useEffect, } from "react";
import { useTranslation } from "react-i18next";
import TableRentedContract from './table-rent-contract/index'
import TableDepositContract from './table-deposit-contract/index'
import "./index.less";
import {  useLocation } from "react-router-dom";
import { depositContract , rentedContract } from "services/contract";
///////////////////////////////////////////////Page/////////////////////////////////////////////

const Page = () => {
  const { t } = useTranslation();
  const [ data, setData ] = useState();
  const location = useLocation();
  let URLSearch = new URLSearchParams(location.search);
  const pageType = URLSearch.get('type')
  const code = URLSearch.get('code')
  const [ContractDepositJsx] = TableDepositContract();
  const [ContractRentalJsx] = TableRentedContract();
  useEffect(() => {
    (async () => {
      let response;
    if( pageType === 'deposit' ){
      response = await depositContract.getDepostContractById(code)
    } else{
      response = await rentedContract.getRentalContractById(code)
    }
    setData(response.data);
    })();
  }, []);

  return (
    <Fragment>
      <div className="mb-4 px-7 drop-shadow-lg min-h-[calc(100vh-60px-64px-1.25rem)] ">
        <div className="bg-white h-16 rounded-t-xl flex justify-between items-center p-7 border-b-2 border-gray-300 font-semibold text-base px-4">
          <span className="text-lg" id="test12314">{ pageType === 'deposit'? t("Hợp đồng cọc") : t("Hợp đồng thuê")}</span>
        </div>
        {  pageType === 'deposit' ?  ContractDepositJsx(data) : ContractRentalJsx(data)}
      </div>
    </Fragment>
  );

};
export default Page;

