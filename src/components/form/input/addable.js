import { Form} from 'antd';
const Components = ({text_add="Add field",fieldsName=[],icon,name}) => {
  return (
    <div className="form-add">
      <Form.List name={name}  >
        {(fields=[], { add, remove }) => (
          <>
            {fields.map(({ key, name, ...restField },i) => (
              <div className='form-add-item' key={i}>
                {fieldsName?.map((ele,index)=><Form.Item
                  {...restField}
                  name={[name, ele.name]}
                  key={index}
                //   rules={[{ required: true, message: 'Missing first name' }]}
                >
                  <input className='form-input focus:outline-none w-full px-3' placeholder={ele.placeholder} key={index} />
                </Form.Item>)}
               <div className='icon-minus'> {icon?icon(): <i className="las la-minus-circle text-xl ml-4" onClick={() => remove(name)}></i>} </div>
              </div>
            ))}
            <Form.Item>
                <button className="rounded-xl border mt-2 border-solid border-gray-400 h-10 text-white float-right bg-blue-500 hover:bg-blue-400 flex justify-center items-center px-5" onClick={() => add()}>
                <i className="las la-plus"></i>
                  {text_add}
                </button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>

  );
};

export default Components;
