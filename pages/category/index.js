import {request} from "../../request/index.js"
// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //分类数据
    //左侧的菜单数据
    leftMenuList:[],
    //右侧的商品数据
    right:[],
    //被点击的左侧的菜单
    currentIndex:0
  },
  //接口返回数据
  Cates:[],

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*
        0 web中的本地存储 和 小程序本地存储的区别
            1 代码方式不同
                web ： localStorage.setItem("key","value") localStorage.getItem("key")
                小程序： wx.setStorageSync('key', value）; wx.getStorageSync('key')

    1 先判断本地有无旧数据 
        获取格式{time:Date.now(),data:[...]}
    2 没有旧数据 直接发送请求
    3 有旧数据 同时 旧数据没有过期 就获取本地旧数据使用
    */
   //1 获取本地存储中的数据 （小程序也存在本地存储技术）
   const Cates = wx.getStorageSync("cates");
   //2 判断
  if(!Cates){
    //不存在旧数据
    this.getCates();
  }else{
    //有旧数据  定义过期时间 10s
    if(Date.now() - Cates.time > 1000*10){
      //重新发送请求
      this.getCates();
    }else{
      //可以使用旧数据
      this.Cates=Cates.data;
      let leftMenuList=this.Cates.map(v=>v.cat_name);
     let right=this.Cates[0].children;
     this.setData({
       leftMenuList,
       right
     })
    }
  }

  },
  getCates(){
    request({
      url:"https://api-hmugo-web.itheima.net/api/public/v1/categories"
    })
    .then(res=>{
     this.Cates=res.data.message;

     //把接口的数据存入到本地存储中
     wx.setStorageSync("cates", {time:Date.now(),data:this.Cates});

     //构造左侧大菜单数据
     let leftMenuList=this.Cates.map(v=>v.cat_name);
     //构造右侧商品数据
     let right=this.Cates[0].children;
     this.setData({
       leftMenuList,
       right
     })
    })
  },
  //左侧菜单的点击事件
  handleItemTap(e){
    /*
    1 获取被点击的标题的索引
    2 给data 中的currentIndex赋值
    3 根据不同的索引来渲染右边的内容
    */
   const {index}=e.currentTarget.dataset;
  
   let right=this.Cates[index].children;
     this.setData({
       currentIndex:index,
       right
     })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})