//discovery.js
Page({
  data: {
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    feed: [],
    feed_length: 0
  },
  
  switchTab: function(e){
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },

  

  //scroll: function (e) {
  //  console.log("scroll")
  //},

 
});
