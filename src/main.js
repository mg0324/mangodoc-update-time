import dayjs from 'dayjs';

// 默认配置
let updateTime= {
    align: "right",// 默认
    prefix: "最后修改时间为",//默认
    format: "YYYY-MM-DD HH:mm:ss"// 默认
}
export default {
    afterEach(html,next){
        let config = Object.assign({},updateTime,window.$mangodoc.updateTime);
        var time = window.$mangodocApi.getStore('updateTime');
        let formatTime = dayjs(time).format(config.format);
        html += `<div style="text-align:${config.align};color:gray;margin:10px;margin-right:0px;font-size:10px;">${config.prefix}${formatTime}</div>`;
        console.info("[mangodoc-update-time render success!");
        next(html);
    }
}