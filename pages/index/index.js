/*
 * Author: 吴楚标
 * Date: 2021-02-23 21:01:57
 * LastEditors: 吴楚标
 * LastEditTime: 2021-03-03 23:27:39
 * Description: 
*/
// 引入 用来发送请求的方法 一定要把路径补全
import { request } from "../../request/index.js"
Page({
  data: {
    //轮播图数组
    swiperList: [],
    //导航 数组
    catesList: [],
    // 楼层数据
    floorList: [],

  },
  //options(Object)
  //页面开始加载就会触发
  onLoad: function (options) {
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
    this.getSwiperList();
    this.getcatesList();
    this.getfloorList();


  },
  //获取轮播图数据
  getSwiperList() {
    request({ url: '/home/swiperdata' })
      .then(result => {
        this.setData({
          swiperList: result
        })
      })
  },
  //获取导航栏数据
  getcatesList() {
    request({ url: '/home/catitems' })
      .then(result => {
        this.setData({
          catesList: result
        })
      })
  },
  getfloorList() {
    request({ url: '/home/floordata' })
      .then(result => {
        this.setData({
          floorList: result
        })
      })
  },
  });