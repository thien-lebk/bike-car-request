
import { useEffect, useRef, useState, } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

const BreadCrumb = () => {
  const location = useLocation();
  // const params=useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const params_search=useRef(null);

  const [pathArr, setPathArr] = useState([]);
  useEffect(() => {
    let arr_temp = location.pathname.split("/");
    arr_temp=arr_temp.filter(ele=>ele!=="")
    setPathArr(arr_temp);
    let arr_params=location.search?location.search.split("?")[1].split("&"):[];
    let arr_obj_params={};
    arr_params.forEach(ele=>{
      let temp_rr=ele.split("=");
      arr_obj_params[temp_rr[0]]=temp_rr[1];
    })
    if(arr_temp[arr_temp.length-1].includes("room"))params_search.current="?tab=list";
    if(arr_temp[arr_temp.length-1].includes("contract"))params_search.current=`?tab=contract&subtab=${arr_obj_params?.type}`;
  }, [location.pathname])

  return (
    <div className='text-base'>
      {/* <i className="las la-home text-3xl mr-2"></i>
      {pathArr.map((subpath, index) => {
        let text_T = subpath;
        let arr = subpath.split("-");
        if (arr.length - 1>0&&!isNaN(arr[arr.length - 1])) {
          arr.pop();
          text_T = arr.join("-");
        }
        let href = pathArr.filter((ele, i) => i <= index).join("/");

        return (
          <span
            key={index}
            onClick={() =>  navigate(index === 0 ? href : href + params_search.current)}
            className={classNames(
              "cursor-pointer breadcrumb-link",
              index !== pathArr.length - 1 && "hover:text-blue-400"
            )}
          >
            {text_T && (t(`breadCrumb.${text_T}`).includes("breadCrumb")?text_T:t(`breadCrumb.${text_T}`))}
            {index !== pathArr.length - 1 && (
              <span className="text-gray-600 mx-1">{">"}</span>
            )}
          </span>
        );
      })} */}
    </div>
  )

}
export default BreadCrumb;
