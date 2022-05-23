import React, { useState, useEffect } from "react";
import { Modal, Form, Radio, Row, Col, Button } from "antd";

export const ApproveModal = ({handleChange, Post, }) => {
  const [data, setData] = useState([]);
  const [listData, setListData] = useState([]);
  const [disableBtn, setDisableBtn] = useState(true)

  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onFinish = async (values) => {
    const listData = []
    for (const property in values) {
      values[property] && listData.push({ id: property, status: values[property] })
    }
    if(!!Post){
    await  Post(listData);
    }
     handleChange()
     return setIsModalVisible(false);

  };
  useEffect(() => {
    listData.length > 0 ? setDisableBtn(false) : setDisableBtn(true)
  }, [listData]);
  useEffect(() => {
  }, [disableBtn]);
  const showModal = ({ data }) => {
    setData(data);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setData([]);
    form.resetFields();
    handleChange();
    setDisableBtn(true);
    setIsModalVisible(false);
  };

  return [
    showModal,
    () => (
      <>
        <Modal
          title="Xác nhận vai trò"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={400}
          footer={[
            <div span={12} className="grid grid-cols-2 items-center gap-4 px-4 py-1" key="footer">
              <Button htmlType="close" key="cancel" onClick={handleCancel}>
                Hủy
              </Button>
              <Button disabled={disableBtn}  form="approveJob" key="submit" htmlType="submit"
              className=" bg-blue-600 text-white  rounded-xl hover:bg-blue-700 hover:text-white hover:border-white focus:bg-blue-700 focus:text-white focus:border-white: "
              >
                Xác nhận
              </Button>
            </div>
          ]}

        >
          <Form
            name="approveJob"
            form={form}
            {...formItemLayout}
            onFinish={onFinish}
            onCancel={handleCancel}
          // initialValues={{
          //   "input-number": 3,
          //   "checkbox-group": ["A", "B"],
          //   rate: 3.5,
          // }}
          >
            <div className="mx-2">
              <span className="italic">
                Chọn vai trò để xác nhận
              </span>
            </div>
            <div className="mx-4">
              <Row justify="start" className="grid grid-cols-2 items-center gap-4 w-full">
                <Col span={18}>
                </Col>
                <div span={6} className="grid grid-cols-2 items-center gap-4 text-center">
                  <Col span={12}>
                    <span>Đồng ý</span>
                  </Col>
                  <Col span={12}>
                    <span>Từ chối</span>
                  </Col>
                  {/* <Col span={8}>
                    <span>Chờ xác nhận</span>
                  </Col> */}
                </div>
              </Row>
              {
                data?.roles?.map(ele => {
                  return <Form.Item name={ele.userPermissionId}>
                    <Radio.Group className="w-full" >
                      <Row justify="start" className="grid grid-cols-2 items-center gap-4 w-full">
                        <Col span={12}>
                          <span>{ele.roleName}</span>
                        </Col>
                        <div span={12} className="grid grid-cols-2 items-center gap-4">
                          <Col span={12} className="mx-auto">
                            <Radio value="APPROVED" style={{ lineHeight: "32px" }} onClick={()=>setDisableBtn(false)}>
                            </Radio>
                          </Col>
                          <Col span={12} className="mx-auto">
                            <Radio value="REJECTED" style={{ lineHeight: "32px" }}  onClick={()=>setDisableBtn(false)}>
                            </Radio>
                          </Col>
                          {/* <Col span={8} className="mx-auto">
                            <Radio value="PENDING" style={{ lineHeight: "32px" }}>
                            </Radio>
                          </Col> */}
                        </div>
                      </Row>
                    </Radio.Group>
                  </Form.Item>
                })
              }

            </div>
          </Form>
        </Modal>
      </>
    ),
  ];
};
