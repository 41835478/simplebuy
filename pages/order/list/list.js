


var Zan = require('../../../dist/index');
var selectedId = 'topay';
Page(Object.assign({}, Zan.Tab, {
  data: {
    tab1: {
      list: [{
        id: 'all',
        title: '全部'
      }, {
        id: 'topay',
        title: '待付款'
      }, {
        id: 'tosend',
        title: '待发货'
      }, {
        id: 'send',
        title: '待收货'
      }, {
        id: 'sign',
        title: '已完成'
      }],
      selectedId: selectedId,
      scroll: false
    }
  },
  onLoad: function(options) {
    this.setData({       //然后赋值
                   
                    name:'cy'
                })
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;
    console.log('here');
    var that = this;
     wx.request({ 
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            
            success: function(res) {
              console.log(res.data);
                that.setData({       //然后赋值
                    images: res.data,
                    name:selectedId
                })
            }
        });
    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
    
  }
}));
