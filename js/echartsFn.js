// * 初始Echarts dom
function initDom(domName, option) {
    let echartsInstance = echarts.init(domName);
    echartsInstance.setOption(option);
    return echartsInstance;
}

