
var app = getApp();
Page({
  //页面的初始化数据
 
  
  
  
  //生命周期函数-监听页面初次渲染完毕
  onReady:function(){
    var that = this;
     wx.getSystemInfo({
       success: function(res) {
         that.setData({
            swiperHeight: (res.windowHeight-37)
         });
       }
     })
  },
  //切换顶部标签
  switchTab:function(e){
    
    dataType = e.currentTarget.dataset.idx;
    this.setData({
      currentTopItem:e.currentTarget.dataset.idx
    });

  },

  //swiperChange
  bindChange:function(e){
    var that = this;
    dataType = e.detail.current;
    that.setData({
      currentTopItem:e.detail.current
    });

  },
  


})
