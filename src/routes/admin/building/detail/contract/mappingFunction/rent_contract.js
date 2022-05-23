export default function mappingRentContract(params) {
return {
  buildingId:params.buildingId,
  createdDate:params.createdDate,
  address:params.address,
  effectiveDate:params.effectiveDate,
  depositContractId:params.depositContractId,
  lessor:{
    "name": params?.aLessorIcDate ?? '',
    "phoneNumber": params?.aLessorPhoneNumber,
    "indentityCard": params.aLessorIdentityCard,
    "icDate": params.aLessorIcDate,
    "icPlace": params.aLessorIcPlace,
    "email": params.aLessorName,
  },
  "tenant": {
    "name": params.bTenantName,
    "phoneNumber": params.bTenantPhoneNumber,
    "indentityCard": params.bTenantIdentityCardNumber,
    "icDate": params.bTenantIcDate,
    "icPlace": params.bTenantIcPlace,
    "email": params.bTenantMail
  },
  "cost": params.costList ===''?[]:params.costList,
  roomId: params.roomId,
  acreage:params.acreage,
  price:params.price,
  rentalTerm:params.rentalTerm,
  fromDate:params.rentTermEffectTime[0],
  toDate:params.rentTermEffectTime[1],
  electricityIndicator:params.electricityIndicator,
  waterIndicator:params.waterIndicator,
  numberOfTenants:params.numberOfTenants,
  deposit:params.deposit,


}
}
