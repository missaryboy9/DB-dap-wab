export default e => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false
    },
    yAxis: {
      type: 'value',
      show: false
    },
    grid: {
      x: 0,
      y: 0,
      x2: 0,
      y2: -40,
      borderWidth: 1
    },
    series: [
      {
        data: e,
        type: 'line',
        smooth: true,
        areaStyle: {}
      }
    ]
  };
};
