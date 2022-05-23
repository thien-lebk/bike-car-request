
const mapping={
  rent:(value,roomId)=>{
    return{
      "roomId": roomId,
      "signingDate": value?.signingDate,
      "signingVenue": value?.signingVenue,
      "aSide": {
        "name": value?.asideName,
        "dob": 0,
        "identityCard": value?.asideIdentityCard,
        "idProvidedIn": value?.asideIdProvidedIn,
        "idProvidedAt": value?.asideIdProvidedAt,
        "address": ""
      },
      "bSide": {
        "name": value?.bsideName,
        "dob": 0,
        "identityCard": value?.bsideIdentityCard,
        "idProvidedIn": value?.bsideIdProvidedIn,
        "idProvidedAt": value?.bsideIdProvidedAt,
        "address": ""
      },
      "cSide": {
        "name": value?.csideName,
        "dob": 0,
        "identityCard": value?.csideIdentityCard,
        "idProvidedIn": value?.csideIdProvidedIn,
        "idProvidedAt": value?.csideIdProvidedAt,
        "address": ""
      },


      "roomNumber": value?.roomNumber,
      "roomType": value?.roomType,
      "roomAcreage": value?.roomAcreage,
      "address": value?.address,
      "roomPrice": 0,
      "numRenter":0,//số người ở
      "numVehicle":0,
      "vehicles": value?.vehicles,
      "handoverDate": "",
      "timeEffect":value?.timeEffect,
      "paymentCycle":0,//number tháng/1 lần thanh toán
      "paymentDay": 0,
      "depositPrice": value?.depositPrice,
      "depositTerm":value?.depositTerm,//thời hạn đặt cọc
      "effectiveDate": value?.depositTermEffectTime? value?.depositTermEffectTime[0]:null,
      "expirationDate": value?.depositTermEffectTime? value?.depositTermEffectTime[1]:null,
      "contractType": "DEPOSIT",
      "timeSignRentContract":value?.timeSignRentContract,
      "depositTermPaymentTime":value?.depositTermPaymentTime,//thời gian thanh toán cho tiền cọc,
      // "note":value?.note,//
      "depositExpirationDay": "2022-03-15T02:30:15.420Z"
    }
  },
  deposit:(value,roomId)=>{
    return{
      "roomId": value?.roomId,
      "signingDate": value?.signingDate,
      "signingVenue": value?.signingVenue,
      "aSide": {
        "name": value?.asideName,
        "dob": 0,
        "identityCard": value?.asideIdentityCardNumber,
        "idProvidedIn": value?.asideIdProvidedIn,
        "idProvidedAt": value?.asideIdProvidedAt,
        "address": ""
      },
      "bSide": {
        "name": value?.bsideName,
        "dob": 0,
        "identityCard": value?.asideIdentityCardNumber,
        "idProvidedIn": value?.bsideIdProvidedIn,
        "idProvidedAt": value?.bsideIdProvidedAt,
        "address": ""
      },
      "cSide": {
        "name": value?.csideName,
        "dob": 0,
        "identityCard": value?.asideIdentityCardNumber,
        "idProvidedIn": value?.csideIdProvidedIn,
        "idProvidedAt": value?.csideIdProvidedAt,
        "address": ""
      },


      "roomNumber": value?.roomNumber,
      "roomType": value?.roomType,
      "roomAcreage": value?.roomAcreage,
      "address": value?.address,
      "roomPrice": 0,
      "numRenter":0,//số người ở
      "numVehicle":0,
      "vehicles": [
        {
          "vehicleBrand": "string",
          "licensePlate": "string"
        }
      ],
      "handoverDate": "",
      "timeEffect":value?.timeEffect,
      "paymentCycle":0,//number tháng/1 lần thanh toán
      "paymentDay": 0,
      "depositPrice": value?.depositPrice,
      "depositTerm":value?.depositTerm,//thời hạn đặt cọc
      "effectiveDate": value?.depositTermEffectTime[0],
      "expirationDate": value?.depositTermEffectTime[1],
      "contractType": "DEPOSIT",
      "timeSignRentContract":value?.timeSignRentContract,
      "depositTermPaymentTime":value?.depositTermPaymentTime,//thời gian thanh toán cho tiền cọc,
      "note":value?.note,//
      "depositExpirationDay": "2022-03-15T02:30:15.420Z"
    }
  },
  rentContract :(value,roomId)=>{
    // const contractPeopleName = value?.rentalContractPeople.map(o => o[0].name);
    // console.log(contractPeopleName)
    return {
      "buildingId":value?.buildingId,
      "createdDate" : value?.createdDate,
      "roomId": value?.roomId,
      "signingDate": value?.signingDate,
      "address" : value?.address,
      "effectiveDate": value?.effectiveDate,
      "acreage": value?.acreage,
      "price" : value?.price,
      "rentalTerm" : value?.rentalTerm,
      "fromDate": value?.rentTermEffectTime? value?.rentTermEffectTime[0]:null,
      "toDate": value?.rentTermEffectTime? value?.rentTermEffectTime[1]:null,
      "aLessor": {
        "name": value.aLessorName,
        "identityCard": value?.aLessorIdentityCard,
        "address": value?.aLessorAddress,
        "icDate" : value?.aLessorIcDate,
        "phoneNumber" : value?.aLessorPhoneNumber,
        "icPlace" : value?.aLessorIcplace,
        "mail" : value?.aLessorMail
      },
      "bTenant" :{
        "name": value?.bTenantName,
        "identityCard": value?.bTenantIdentityCardNumber,
        "address": value?.bTenantAddress,
        "icDate" : value?.bTenantIcDate,
        "phoneNumber" : value?.bTenantPhoneNumber,
        "icPlace" : value?.bTenantIcplace,
        "mail" : value?.bTenantMail
      },
      "cCost" :{
        "name" : value?.cCostName,
        "unitPrice" : value?.cCostUnitPrice,
        "unit" : value?.cCostUnit,
        "roomCostid" : value?.cCostRoomCost
      },
      // "fromDate" : value?.fromDateEffectTime[0],
      // "toDate" : value?.fromDateEffectTime[1],
      
      "electricityIndicator": value?.electricityIndicator,
      "waterIndicator": value?.waterIndicator,
      "numberOfTenants": value?.numberOfTenants,
      "deposit" : value?.deposit,
    }
  },
  depositContract :(value,roomId)=>{
      return {
        "id" : value?.id,
        "depositContractCode" : value?.depositContractCode,
        "address": value?.address,
        "aLessor" : {
            "name" : value?.aLessorName,
            "id" : value?.aLessorId,
            "dateOfBirthday": value?.aLessorDateOfBirthday,
            "passport":value?.aLessorPassport,
            "identityCard" : value?.aLessorIdentityCard,
            "icPlace": value?.aLessorIcPlace,
            "icDate" : value?.aLessorIcDate,
            "phoneNumber" : value?.aLessorPhoneNumber,
            "accountBank" : value?.aLessorAccountBank,
            "bank": value?.aLessorBank,
            "type": value?.aLessorType,
            "appUserId" : value?.aLessorUserId,
            "email": value?.aLessorEmail
        },
        "depositor":{
          "name" : value?.depositContractPeople,
            "id" : value?.depositorId,
            "dateOfBirthday": value?.depositorDateOfBirthday,
            "passport":value?.depositorPassport,
            "identityCard" : value?.depositorIdentityCard,
            "icPlace": value?.depositorIcPlace,
            "icDate" : value?.depositorIcDate,
            "phoneNumber" : value?.depositorPhoneNumber,
            "accountBank" : value?.depositorAccountBank,
            "bank": value?.depositorBank,
            "type": value?.depositorType,
            "appUserId" : value?.depositorUserId,
            "email": value?.depositorEmail
        },
        "housingBroker":{
          "name" : value?.housingBrokerName,
          "id" : value?.housingBrokerId,
          "dateOfBirthday": value?.housingBrokerDateOfBirthday,
          "passport":value?.housingBrokerPassport,
          "identityCard" : value?.housingBrokerIdentityCard,
          "icPlace": value?.housingBrokerIcPlace,
          "icDate" : value?.housingBrokerIcDate,
          "phoneNumber" : value?.housingBrokerPhoneNumber,
          "accountBank" : value?.housingBrokerAccountBank,
          "bank": value?.housingBrokerBank,
          "type": value?.housingBrokerType,
          "appUserId" : value?.housingBrokerUserId,
          "email": value?.housingBrokerEmail
        } ,
        "roomDto" :{
          "id" : value?.roomDtoId,
          "roomNumber": value?.roomNumber,
          "acreage" : value?.acreage,
          "price": 0,
          "rentalTern": value?.rentalTern,
          "tenant": 0,
        },
        "costList":{
          "id" : value?.costListId,
          "name" : value?.name,
          "unitPrice": value?.unitPrice,
          "unit": value?.unit,
          "roomCostId" : value?.roomCostId,
        },
        "depositNumber": value?.depositNumber,
        "note":value?.note,
        "status": value?.status,
        "statusPayment": value?.statusPayment,
        "datePayment" : value?.datePayment,
        "pdfTemplate": value?.pdfTemplate,
        "fromDate": value?.depositTermEffectTime? value?.depositTermEffectTime[0]:null,
        "endDate": value?.depositTermEffectTime? value?.depositTermEffectTime[1]:null,
    }
  }
}

export default mapping;
