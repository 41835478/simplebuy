

var dataType = 0;
var page = 1;//页码
var allMaxtime = 0;//全部 最大时间
var videoMaxtime = 0;//视频 最大时间
var pictureMaxtime = 0;//图片 最大时间


var DATATYPE = {
    ALLDATATYPE : "1",
    VIDEODATATYPE : "41",
    PICTUREDATATYPE : "10",
    TEXTDATATYPE : "29",
    VOICEDATATYPE : "31"
};

Page({
  //页面的初始化数据
  data:{
    actionSheetHidden:true,
    focus:false,
    isShowView:true,
    menu:'',
    allDataList:[],
    videoDataList:[],
    pictureDataList:[],
    textDataList:[],
    voiceDataList:[],
    topTabItems:["通知","消息","联系人"],
    currentTopItem: "0",
    swiperHeight:"0",
    
    messages:[
      {
        title:"微售宝",
        url:"http://app.vshowbao.com/data/xcx/320.png",
        message:"你好，在吗",
        time:"2017-1-1 08:15",
       
      },
      {
        title:"南通家纺",
        url:"../../image/Icon.png",
        message:"质量很好，你放心",
        time:"2017-1-12 15:15",
       
      },
      ],

      tongzhi:[
        {
          url:"../",
          biaoti:"微售宝",
          neirong:"您好，欢迎使用微售宝！",
          time:"2017-1-12 18：00"
        }

      ]

  },
  
  
  
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
