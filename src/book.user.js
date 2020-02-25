// ==UserScript==
// @name         定时申购口罩
// @version      0.5
// @description  一个在绍兴地区辅助抢口罩的脚本
// @author       mxdh（面向大海）
// @match        http://*/yypt/search/portlet.xhtml
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 获取购买按钮
    const btn = document.getElementsByClassName('btn btn-success')[0];

    //添加通知点击事件
    function handleClick() {
        let time = Date();
        console.log(`在 ${time} 时点击按钮`);
    }
    btn.addEventListener('click', handleClick, false);

    const now = new Date();
    const year = now.getFullYear(); //年
    const month = now.getMonth() + 1; //月
    const day = now.getDate(); //日
    const date = year + (month < 10 ? '-0' : '-') + month + (day < 10 ? '-0' : '-') + day;

    // 输入开抢时间
    let timeString = prompt('请按格式输入开抢时间', date + ' 15:00:00');
    if (timeString === null) return;
    while (isNaN(Date.parse(timeString))) {
        alert('格式错误');
        timeString = prompt('请按格式输入开抢时间', date + ' 15:00:00');
    }
    console.log('设定点击时间' + timeString);

    //定时器
    setTimeout(function () { btn.click(); }, Date.parse(timeString) - Date.now());
})();