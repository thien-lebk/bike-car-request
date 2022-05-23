import React, { useState, useEffect } from "react";
import { Modal, Form, Checkbox, Row, Col, Button } from "antd";

export const RemoveJobModal = ({ handleChange, Delete }) => {
  const [data, setData] = useState([])
  const [disableBtn, setDisableBtn] = useState(true)
  const [listData, setListData] = useState([])
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const listData = []
    for (const property in values) {
      values[property] && listData.push(property)
    }
    if (listData.length > 0) {
      if (!!Delete) {
        await Delete(listData);
      }
      handleChange();
      setIsModalVisible(false);
    } else {
      handleCancel()
    }
  };

  useEffect(() => {
    listData.length > 0 ? setDisableBtn(false) : setDisableBtn(true)
  }, [listData]);
  useEffect(() => {
  }, [disableBtn]);

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = ({ data }) => {
    setData(data);
    setIsModalVisible(true);
  };

  const handleOk = (values) => {
    setIsModalVisible(false);
  };
  const onChange = (value) => {
    if (value.target.checked) {
      setListData([...listData, value.target.value])
    } else {
      setListData(listData.filter(ele => ele !== value.target.value))
    }
  };

  const handleCancel = () => {
    setData([]);
    setListData([])
    form.resetFields();
    handleChange();
    setIsModalVisible(false);
  };

  return [
    showModal,
    () => (
      <>
        <Modal
          title="Xóa vai trò"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={400}

          footer={[
            <div span={12} className="grid grid-cols-2 items-center gap-4 px-4 py-1" key="footer">
              <Button htmlType="close" key="cancel" onClick={handleCancel}>
                Hủy
              </Button>
              <Button disabled={disableBtn} form="removeJob" key="submit" className="bg-red-600 text-white  rounded-xl hover:bg-red-700 hover:text-white hover:border-white focus:bg-red-700 focus:text-white focus:border-white " htmlType="submit">
                Xác nhận
              </Button>
            </div>
          ]}
          bodyStyle={{ paddingBottom: 0 }}

        >
          <Form
            name="removeJob"
            form={form}

            {...formItemLayout}
            onFinish={onFinish}
          >
            <div className="mx-2 mb-1">
              <span className="italic">
                Chọn vai trò cần xóa
              </span>
            </div>
            <div className="mx-4">
              <Row justify="start" className="grid grid-cols-2 items-center gap-4 w-full">
                <Col span={18}>
                </Col>
                <div span={6} className="grid grid-cols-2 items-center gap-4">
                </div>
              </Row>
              {data?.roles?.map(ele => {
                return <Form.Item name={ele.userPermissionId}>
                  <Checkbox.Group className="w-full" >
                    <Row justify="start" className="grid grid-cols-3 items-center gap-4 w-full">
                      <Col className="col-span-2 ">
                        <span>{ele.roleName}</span>
                      </Col>
                      <div className="flex items-center mx-auto">
                        <Checkbox value={ele.userPermissionId} style={{ lineHeight: "32px" }} onClick={onChange}>
                        </Checkbox>
                      </div>
                    </Row>
                  </Checkbox.Group>
                </Form.Item>
              })}

            </div>

          </Form>
        </Modal>
      </>
    ),
  ];
};
