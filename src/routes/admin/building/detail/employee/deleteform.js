
import { useRef, useState } from "react";
import { Checkbox,Row } from 'antd';
import { Modal } from 'antd';


const DeleteHook=({title,wrapClassName="deleteHookForm",width,submitText="Save",cancelText,Delete,handleChange,id})=>{
  const [isVisible,setIsVisible]=useState(false);
  const [data,setData]=useState(null)
  const checkedList = useRef([]);
  const [titleHook,setTitleHook]=useState("")


  const handleOk=async ()=>{
    if((checkedList.current.length!==0 && Delete) && await Delete(checkedList.current)){
      handleChange();
      setIsVisible(false)
      checkedList.current.length=0;
    }
  }

  const onChangeCheckBox=(list)=>{
    checkedList.current=list;
  }

  const handleShow=(dataEdit)=>{
    dataEdit?.id &&(setData(dataEdit))
    setIsVisible(true)
    setTitleHook(()=>title(dataEdit))
  }

  const handleCancel=()=>{
    setIsVisible(false)
  }

  const afterClose=()=>{
    checkedList.current=[];
  }
  return [()=>
    <Modal

      title={titleHook}
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      wrapClassName={wrapClassName}
      width={width}
      okText={submitText}
      footer={<div className="p-2 flex justify-center">
        <button className="w-40 bg-gray-400 text-white text-base p-2 hover:bg-gray-500 rounded-xl" onClick={handleCancel}>{cancelText}</button>
        <button className="w-40 bg-red-500 text-white text-base p-2 hover:bg-red-600 rounded-xl ml-3" onClick={handleOk}>{submitText}</button>
      </div>}
      cancelText={cancelText}
      afterClose={afterClose}
    >
      <Checkbox.Group style={{ width: '100%' }}  onChange={onChangeCheckBox}>
      {data&&data.roles.map((ele,index)=><Row key={index}>
        <Checkbox value={ele.value} >{ele.label}</Checkbox>
      </Row>)}
    </Checkbox.Group>
    </Modal>
  ,handleShow,setData,handleCancel];
}

export default DeleteHook;
