  // 引入 用来发送请求的方法 一定要把路径补全
  import {request} from "../../request/index.js"
  Page({
    data: {
      //轮播图数组
      swiperList:[]
    },
    //options(Object)
    //页面开始加载就会触发
    onLoad: function(options){
      // 1 发送异步请求获取轮播图数据
    //  wx.request({
    //     url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //     // data: {},  不用发送返回值可删
    //     // header: {'content-type':'application/json'}, 有默认值可删 
    //     // method: 'GET',  get为默认请求 可删
    //     // dataType: 'json', 默认类型可删
    //     // responseType: 'text', 默认类型 可删
    //     success: (result)=>{
    //       this.setData({
    //         swiperList:result.data.message
    //       })
          request({url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})
          .then(result=>{
            this.setData({
              swiperList:result.data.message
          })
        })
      
    },
    onReady: function(){
      
    },
    onShow: function(){
      
    },
    onHide: function(){
  
    },
    onUnload: function(){
  
    },
    onPullDownRefresh: function(){
  
    },
    onReachBottom: function(){
  
    },
    onShareAppMessage: function(){
  
    },
    onPageScroll: function(){
  
    },
    //item(index,pagePath,text)
    onTabItemTap:function(item){
  
    }
  });