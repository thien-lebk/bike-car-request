import React, {useState, useEffect} from "react";
import {Dropdown, Select} from 'antd';
import {useTranslation} from "react-i18next";
import {echartLine, echartBarStack,linearGradient} from "utils";

import {Calendar, Spin} from "components";
import homeSubtract from "assets/svg/home-subtract.svg";
import homeUnion from "assets/svg/home-union.svg";
import homeOpen from "assets/svg/home-open.svg";
import homeWarning from "assets/svg/home-warning.svg";
import * as echarts from "echarts";

const Page = ({location}) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    echartLine({
      id: 'chart-line1',
      label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
      color: ['#2E7D32'],
      series: [
        {
          name: 'Free',
          type: 'line',
          smooth: true,
          showSymbol: false,
          symbolSize: 0,
          lineStyle: {
            width: 3,
            color: '#2E7D32',
          },
          areaStyle: {
            color: linearGradient({hex: '#2E7D32'}),
          },
          data: [150, 190, 228, 274, 212, 249, 278, 104, 219, 257, 115, 127],
        },
      ]
    });
    setTimeout(() => {
      const element = document.getElementById('chart-pie');
      if (element) {
        var getfpkszb = [12.5];
        var getfpkszb1 = [0.01];
        // var getfpksrs = [1265];
        echarts.init(element).setOption({
          title: {
            text: getfpkszb + '%',
            textStyle: {
              color: '#D22F23',
              fontSize: 35,
              fontFamily: "Inter",
            },
            subtext: 'Tổng số tiền thuê',
            subtextStyle: {
              color: '#B1B1B1',
              fontSize: 22,
              fontFamily: "Inter",
            },
            itemGap: 10,
            left: 'center',
            top: '40%'
          },
          angleAxis: {
            max: 100,
            clockwise: true,
            show: false
          },
          radiusAxis: {
            type: 'category',
            show: true,
            axisLabel: {
              show: false,
            },
            axisLine: {
              show: false,

            },
            axisTick: {
              show: false
            },
          },
          polar: {
            center: ['50%', '50%'],
            radius: '170%'
          },
          series: [{
            stack: 'Bar',
            type: 'bar',
            data: getfpkszb,
            showBackground: true,
            backgroundStyle: {
              color: '#EFF2F5',
              borderColor: '#EFF2F5',
              borderWidth: 3
            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 30,
            silent: true,
            itemStyle: {
              normal: {
                opacity: 1,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FF7166'
                }, {
                  offset: 1,
                  color: '#D22F23'
                }]),
                borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#FF7166'
                }, {
                  offset: 1,
                  color: '#D22F23'
                }]),
                borderWidth: 3
              }
            },
          }, {
            stack: 'Bar',
            type: 'bar',
            data: getfpkszb1,
            showBackground: true,
            backgroundStyle: {
              color: '#EFF2F5',
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowBlur: 10,
              shadowOffsetY: 2,

            },
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 30,
            itemStyle: {
              color: '#FF7166',
              borderColor: '#D22F23',
              borderWidth: 3
            },
          }]
        });
      }
    }, 500);
    setTimeout(() => {
      const element = document.getElementById('chart-pie2');
      if (element) {
        var data = [{
          "name": "Phòng trọ",
          "value": 43
        }, {
          "name": "CHDV",
          "value": 32
        }, {
          "name": "Khách sạn",
          "value": 25
        }]

        echarts.init(element).setOption({
          color: ['#D22F23', '#4CAF50', '#2196F3'],
          title: {
            text: 'Tổng',
            textStyle: {
              color: '#B1B1B1',
              fontSize: 22,
              fontFamily: "Inter",
            },
            subtext: '7789',
            subtextStyle: {
              color: '#D22F23',
              fontSize: 35,
              fontFamily: "Inter",
            },
            itemGap: 10,
            left: 'center',
            top: '40%'
          },
          grid: {
            top: '0',
            left: '0',
            bottom: '0',
            right: '0',
          },
          legend: {
            orient: 'horizontal',
            textStyle: {
              color: '#D22F23',
              fontFamily: "Inter",
            },
            bottom: 0,
            icon: 'roundRect',
            data: data,
          },
          series: [
            {
              radius: ['40%', '63%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: true,
                  formatter: "{c}%",
                  textStyle: {
                    fontSize: 15,

                  },
                  position: 'outside'
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 5,
                  length2: 10
                },
                emphasis: {
                  show: true
                }
              },
              data: data,
            },
            {
              radius: ['40%', '44%'],
              center: ['50%', '50%'],
              type: 'pie',
              label: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              labelLine: {
                normal: {
                  show: false
                },
                emphasis: {
                  show: false
                }
              },
              animation: false,
              tooltip: {
                show: false
              },
              data: [{
                value: 1,
                itemStyle: {
                  color: "rgba(250,250,250,0.3)",
                },
              }],
            }, {
              name: 'Pie',
              type: 'pie',
              clockWise: false,
              hoverAnimation: false,
              center: ['50%', '50%'],
              radius: ['65%', '65%'],
              label: {
                normal: {
                  show: false
                }
              },
              data: [{
                value: 9,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 2,
                    borderColor: '#BDBDBD'
                  }
                }
              }]
            },
          ]
        });
      }
    }, 500);
    setTimeout(() => {
      const element = document.getElementById('chart-pie3');
      if (element) {
        let datas = [
          {
            name: "1 phòng ngủ",
            value: 1,
          },
          {
            name: "2 phòng ngủ",
            value: 2,
          },
          {
            name: "3 phòng ngủ",
            value: 3,
          },
          {
            name: "Studio",
            value: 4,
          },
        ];
        echarts.init(element).setOption({
          color: ['#D22F23', '#4CAF50', '#2196F3','#CA8A04', '#9E9E9E'],
          legend: {
            orient: 'horizontal',
            textStyle: {
              color: '#D22F23',
              fontFamily: "Inter",
            },
            bottom: 20,
            icon: 'roundRect',
            data: datas,
          },
          tooltip: {
            trigger: "item",
            formatter: "{d}%",
          },
          series: [
            {
              name: "",
              type: "pie",
              radius: ["30%", "70%"],
              center: ["50%", "40%"],
              roseType: "radius",
              label: {
                formatter: "{d}%",
              },
              labelLine: {
                length: 1,
                length2: 20,
              },
              data: datas,
            },
          ],
        });
      }
    }, 500);
    echartBarStack({id: 'total-active-profile-year'});
  }, [location]);
  const year = (
    <ul className="bg-blue-50">
      <li className="p-2 hover:bg-blue-100">2021</li>
      <li className="p-2 hover:bg-blue-100">2020</li>
      <li className="p-2 hover:bg-blue-100">2019</li>
      <li className="p-2 hover:bg-blue-100">2018</li>
    </ul>
  );
  const status = (
    <ul className="bg-blue-50">
      <li className="p-2 hover:bg-blue-100">Chưa hoàn thành</li>
      <li className="p-2 hover:bg-blue-100">Đã hoàn thành</li>
    </ul>
  //   <select className="bg-blue-50">
  //   <option className="p-2 hover:bg-blue-100" value="Chưa hoàn thành">Chưa hoàn thành</option>
  //   <option className="p-2 hover:bg-blue-100" value="Đã hoàn thành">Đã hoàn thành</option>
  // </select>
  );
  return (
    <Spin className="grid grid-cols-2 xl:grid-cols-6 gap-5 intro-x px-7" spinning={isLoading}>
      <div className="col-span-3">
        <Select defaultValue={'Tất cả'} className={'w-44'}>
          <Select.Option value="Tất cả">Tất cả</Select.Option>
          <Select.Option value="Tòa nhà A">Tòa nhà A</Select.Option>
          <Select.Option value="Tòa nhà B">Tòa nhà B</Select.Option>
          <Select.Option value="Tòa nhà C">Tòa nhà C</Select.Option>
        </Select>
      </div>
      <div className="col-span-3 text-right text-xl mt-2 font-semibold text-base">
        {/* Dashboard */}
        <span className="text-blue-500">
              {t("routes.admin.dashboard.Dashboard")}
            </span>
            <span className="px-2">/</span>
            <span>
            {t("routes.admin.dashboard.Dashboard")}
            </span>
      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-2 p-3 overflow-hidden">
        <h2 className="text-lg font-bold mb-3">
          Tình trạng phòng
        </h2>
        <div className="grid grid-cols-2 gap-3 pb-3 border-b border-gray-400 mb-3">
          <div className={'border p-3 rounded-xl flex items-center'}>
            <img src={homeSubtract} alt="Home Subtract"/>
            <div className={'pl-3 text-red-500'}>
              <p className={"font-semibold text-lg"}>1500</p>
              <p>Đã thuê</p>
            </div>
          </div>

          <div className={'border p-3 rounded-xl flex items-center'}>
            <img src={homeUnion} alt="Home Subtract"/>
            <div className={'pl-3 text-green-700'}>
              <p className={"font-semibold text-lg"}>30</p>
              <p>Đã cọc</p>
            </div>
          </div>

          <div className={'border p-3 rounded-xl flex items-center'}>
            <img src={homeOpen} alt="Home Subtract"/>
            <div className={'pl-3 text-blue-700'}>
              <p className={"font-semibold text-lg"}>400</p>
              <p>Còn trống</p>
            </div>
          </div>

          <div className={'border p-3 rounded-xl flex items-center'}>
            <img src={homeWarning} alt="Home Subtract"/>
            <div className={'pl-3 text-yellow-500'}>
              <p className={"font-semibold text-lg"}>50</p>
              <p>Đến hạn</p>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-bold mb-3">
          Tỉ lệ Doanh thu ước tính
        </h2>

        <div className={'flex items-center justify-around'}>
          <div className={'text-green-700 text-center'}>
            <p className={'font-semibold text-xl'}>400</p>
            <p>Phòng trống</p>
          </div>
          <i className="las la-exchange-alt text-xl text-green-700" />
          <div className={'text-orange-600 text-center'}>
            <p className={'font-semibold text-xl'}>
              10%
              <i className="las la-level-up-alt" />
            </p>
            <p>Tổng giá trị cho thuê</p>
            <p>30.000.000 VNĐ</p>
          </div>
        </div>
        <div className="h-28 -mr-3 -ml-3 -mb-3" id="chart-line1"/>

      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-2 overflow-hidden">
        <h2 className="text-lg font-bold flex justify-between p-3 border-b">
          Doanh thu chưa thực hiện
          <span className={'text-red-500'}>12,5%</span>
        </h2>
        <h2 className="text-lg mb-3 p-3">
          Tỉ lệ tiền trễ hạn
        </h2>
        <div className="h-80" id="chart-pie"/>

      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-2 overflow-hidden">
        <h2 className="text-lg font-bold flex justify-between p-3">
          Phân loại tòa nhà
        </h2>
        <div className="h-96" id="chart-pie2"/>

      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-4 2xl:col-span-4">
        <div className="flex justify-between items-center">
          <h2 className="px-5 py-3 text-lg font-bold">
            Doanh thu
          </h2>
          <Dropdown overlay={year} arrow placement="bottomRight">
            <div className="text-zinc-600 text-center bg-gray-200 rounded-lg w-24 mr-2 p-2">2020 <i className="las la-angle-down"></i> </div>
          </Dropdown>
        </div>

        <div className="h-96" id="total-active-profile-year"/>
      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-2 overflow-hidden">
        <h2 className="text-lg font-bold flex justify-between p-3">
          Phân loại Phòng
        </h2>
        <div className="h-96" id="chart-pie3"/>

      </div>
      <div className="rounded-xl shadow bg-gray-50 col-span-6 2xl:col-span-6 overflow-hidden mb-5">
        <div className="flex justify-between items-center bg-red-500 ">
          <h2 className="px-5 py-3 text-lg font-bold text-white">
            Công việc
          </h2>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2 border-r px-5 pb-5">
            <Calendar />
          </div>
          <div className="w-1/2 p-5">
            <div className={'text-right'}>
              <Dropdown overlay={status} arrow placement="bottomRight">
                <div className="text-zinc-600 text-center bg-gray-200 w-48 rounded-lg p-2 inline-block"> Chưa hoàn thành  <i className="las la-angle-down"></i> </div>
              </Dropdown>
            </div>
            <ul>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-blue-100 text-blue-500 border border-blue-400 px-3 py-2'}>
                  <i className="las la-wrench text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Yêu cầu sửa chữa vòi nước phòng 106</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM | </small><small className={'text-blue-500'}><i className="las la-tag text-base" /> Chưa xử lí</small>
                </div>
                <div className={'absolute right-0 h-4/6 top-1/6 bg-blue-500 w-1.5 rounded-l-2xl'} />
              </li>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-blue-100 text-blue-500 border border-blue-400 px-3 py-2'}>
                  <i className="las la-clipboard-check text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Yêu cầu sửa chữa vòi nước phòng 106</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM | </small><small className={'text-blue-500'}><i className="las la-tag text-base" /> Chưa xử lí</small>
                </div>
                <div className={'absolute right-0 h-4/6 top-1/6 bg-blue-500 w-1.5 rounded-l-2xl'} />
              </li>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-yellow-100 text-yellow-500 border border-yellow-400 px-3 py-2'}>
                  <i className="las la-wrench text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Yêu cầu sửa chữa vòi nước phòng 106</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM |</small> <small className={'text-yellow-500'}><i className="las la-tag text-base" /> Đang tiến hành</small>
                </div>
              </li>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-green-100 text-green-500 border border-green-400 px-3 py-2'}>
                  <i className="las la-wrench text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Phàn nàn về vấn đề tiếng ồn</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM |</small> <small className={'text-green-500'}><i className="las la-tag text-base" /> Đã xong</small>
                </div>
              </li>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-blue-100 text-blue-500 border border-blue-400 px-3 py-2'}>
                  <i className="las la-wrench text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Yêu cầu sửa chữa vòi nước phòng 106</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM | </small><small className={'text-blue-500'}><i className="las la-tag text-base" /> Chưa xử lí</small>
                </div>
                <div className={'absolute right-0 h-4/6 top-1/6 bg-blue-500 w-1.5 rounded-l-2xl'} />
              </li>
              <li className={'mt-2 flex items-center border border-gray-300 rounded-2xl p-3 relative'}>
                <div className={'rounded-full bg-blue-100 text-blue-500 border border-blue-400 px-3 py-2'}>
                  <i className="las la-clipboard-check text-2xl" />
                </div>
                <div className={'pl-3'}>
                  <p className={'text-black font-bold'}>Yêu cầu sửa chữa vòi nước phòng 106</p>
                  <small className={'leading-none'}>Dec 31, 12:12 AM | </small><small className={'text-blue-500'}><i className="las la-tag text-base" /> Chưa xử lí</small>
                </div>
                <div className={'absolute right-0 h-4/6 top-1/6 bg-blue-500 w-1.5 rounded-l-2xl'} />
              </li>
            </ul>

          </div>
        </div>
      </div>
    </Spin>
  );
};
export default Page;
