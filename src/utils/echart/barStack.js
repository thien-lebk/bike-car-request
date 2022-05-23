const Util = ({id}) => {
  import("echarts").then(echarts => {
    const element = document.getElementById(id);
    if (element) {
      let label = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      const data = {
        'Tiền phòng': [150, 190, 228, 274, 212, 249, 278, 104, 219, 257, 115, 127],
        'Điện': [164, 285, 115, 281, 295, 124, 125, 262, 177, 160, 267, 253],
        'Nước': [184, 281, 114, 190, 199, 101, 239, 216, 231, 132, 102, 244, 257],
        'Dịch vụ': [216, 169, 214, 215, 138, 162, 105, 212, 119, 124, 158, 210],
        'Wifi': [150, 190, 228, 274, 212, 249, 278, 104, 219, 257, 115, 127],
        'Chi phí chung': [164, 285, 115, 281, 295, 124, 125, 262, 177, 160, 267, 253],
        'Phí môi giới': [184, 281, 114, 190, 199, 101, 239, 216, 231, 132, 102, 244, 257],
        'Phí bảo trì': [216, 169, 214, 215, 138, 162, 105, 212, 119, 124, 158, 210],
        'PCCC': [164, 285, 115, 281, 295, 124, 125, 262, 177, 160, 267, 253],
      };
      const data2 = {
        'Tiền phòng': [70, 90, 109, 132, 101, 119, 134, 47, 104, 124, 53, 59],
        'Điện': [82, 142, 53, 141, 142, 52, 52, 136, 84, 75, 129, 122],
        'Nước': [174, 271, 104, 180, 189, 91, 229, 206, 221, 122, 92, 234, 247],
        'Dịch vụ': [206, 159, 204, 205, 128, 152, 95, 202, 109, 114, 148, 200],
        'Wifi': [140, 180, 218, 264, 202, 239, 268, 94, 209, 247, 105, 117],
        'Chi phí chung': [154, 275, 105, 271, 285, 114, 115, 252, 167, 150, 257, 243],
        'Phí môi giới': [174, 271, 104, 180, 189, 91, 229, 206, 221, 122, 92, 234, 247],
        'Phí bảo trì': [206, 159, 204, 205, 128, 152, 95, 202, 109, 114, 148, 200],
        'PCCC': [82, 142, 53, 141, 142, 52, 52, 136, 84, 75, 129, 122],
      };
      let values = Object.values(data2);
      let transposed = values[0].map((r, i) => values.map(c => c[i]));
      let total = transposed.map(row => row.reduce((a, b) => a + b));

      const color = ['#D22F23', '#CA8A04', '#4CAF50', '#2196F3', '#9E9E9E'];
      echarts.init(element).setOption({
        color: color,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          },
        },
        legend: {
          icon: "circle",
          orient: 'horizontal',
          data: ["Tiền phòng", "Điện", "Nước", "Dịch vụ", "Wifi", "Chi phí chung", "Phí môi giới", "Phí bảo trì", 'PCCC'],
          textStyle: {
            fontFamily: "Inter",
          },
        },
        grid: {
          left: '20px',
          right: '0',
          bottom: '0',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick:false,
          data: label
        }],
        yAxis: [{
          type: 'value',
          axisTick:false,
        }],
        series: [
          {
            name: 'Tiền phòng',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0]},
            data: data['Tiền phòng']
          },
          {
            name: 'Điện',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            data: data['Điện']
          },
          {
            name: 'Nước',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data['Nước']
          },
          {
            name: 'Dịch vụ',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0]},
            data: data['Dịch vụ']
          },
          {
            name: 'Wifi',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            data: data['Wifi']
          },
          {
            name: 'Chi phí chung',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data['Chi phí chung']
          },
          {
            name: 'Phí môi giới',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            data: data['Phí môi giới']
          },
          {
            name: 'Phí bảo trì',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data['Phí bảo trì']
          },
          {
            name: 'PCCC',
            type: 'bar',
            stack: '2021',
            barWidth:20,
            itemStyle:{borderRadius: [20,20,0,0,]},
            data: data['PCCC']
          },

          {
            name: 'Tiền phòng',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0]},
            data: data2['Tiền phòng']
          },
          {
            name: 'Điện',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            data: data2['Điện']
          },
          {
            name: 'Nước',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data2['Nước']
          },
          {
            name: 'Dịch vụ',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0]},
            data: data2['Dịch vụ']
          },
          {
            name: 'Wifi',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            data: data2['Wifi']
          },
          {
            name: 'Chi phí chung',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data2['Chi phí chung']
          },
          {
            name: 'Phí môi giới',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            data: data2['Phí môi giới']
          },
          {
            name: 'Phí bảo trì',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [0,0,0,0,]},
            data: data2['Phí bảo trì']
          },
          {
            name: 'PCCC',
            type: 'bar',
            stack: '2022',
            barWidth:20,
            itemStyle:{borderRadius: [20,20,0,0,]},
            data: data2['PCCC']
          },

          {
            name: "Total",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbolSize: 5,
            lineStyle: {
              width: 2,
              color: 'rgba(59, 130, 246, 0.5)',
            },
            data: total,
          }
        ]
      });
    }
  });
};
export default Util;
