const common = require('../../common')
const variable = require('../../common/variable.js')
const translation = require("../../../public/locales/vi/translation.json");
const { faker } = require('@faker-js/faker');
const {I} = inject()


const Page={
  displayNotificationSaved: () => Page.displayNotification(translation.components.message.Saved),

  checkIsPageAdmin: () => common.waitForText({text: 'Uhouse', selector: '#name-application'}),
  gotoBuildingPage: () => common.clickValue({ selector: '.uhome-toanha' }),
  checkIsPageBuilding:()=>common.waitForText({text:translation.routes.admin["building-info"]["Building List"],selector:'span.text-lg'}),
  enterBuildingDetail:()=>common.clickValue({selector:".buildingname:nth-of-type(1)"}),
  checkIsPageBuildingDetail:()=>common.waitForText({text:translation.breadCrumb["detail"],selector:'span.breadcrumb-link'}),
  enterTabBuildingRule:()=>common.clickValue({selector:'.ant-tabs-tab:nth-of-type(7)'}),

  clickButtonAdd:()=> common.clickValue({selector:"button.bg-blue-500.text-white.px-5.py-3.rounded-xl"}),
  fillValueRule: (value) => {
    common.fillValue({ selector: "#regulation", value });
    // I.wait(4)
},

  fillValueContent: (value) => common.fillValue({ selector: "#content", value }),
  clickButtonSave:(value)=> common.clickValue({selector:'button.btn-save'}),
  clickButtonCancel:(value)=>common.clickValue({selector:'button.btn-cancel'}),
  checkValidationContent:()=>common.waitForText({text:translation.components.form.ruleRequired,selector:'.ant-form-item-explain-error'}),
  checkValidationRule:()=>common.waitForText({text:translation.components.form.ruleRequired,selector:'.ant-form-item-explain-error'}),

  clickButtonEdit:()=>common.clickValue({selector:'.las.la-edit:nth-of-type(1)'}),
  fillValueSearch: (value) => common.fillValue({ selector: "input.w-52.h-10.rounded-xl", value }),
  checkResultSearchNoData:()=>common.waitForText({text:"No Data",selector:'div.bg-gray-100.text-gray-400 '}),
  clickButtonDelete:()=>common.clickValue({selector:'span.uhome-trash'}),
  clickButtonDeleteOk:()=>common.clickValue({selector:'button.ant-btn.ant-btn-primary.ant-btn-sm'}),
}
module.exports = Page;
