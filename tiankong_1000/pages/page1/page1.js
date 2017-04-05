// pages/page1/page1.js
var interval = null;

Page({
  data: {
    order: [],
    current_key: 12,
    current_info: [1, 2, 3],
    timu: "",
    xuanxiang: "", //list
    jiexi: "",
    jiexi_tmp: "",
    disabled: true,
    disabled1: false,
    time: 0,
    displayTime: '00:00',
    day_background: "#e9ecec",
    day_text: "#000000",
    day_button1: "#09bb07",
    day_button2: "#e64340",
    day_xuanxiang_bck: "#ffffff",
    day_xuanxiang_xuanzhong: "#09bb07",
    day_xuanzhong_text: "000000",
    items:
    {
      A: 'A126tftf',
      B: 'Bdsfdsf',
      C: 'Cdsfdsf',
      D: 'Ddsfdsf',
      E: 'Edsfdsfdsf',
      F: 'Fdsfdfdsf',
      G: 'Gsfdsfdsf',
      H: 'Hsfdsff',
      I: ' N/A   '
    },
    bua: false,
    bub: false,
    buc: false,
    bud: false,
    bue: false,
    buf: false,
    bug: false,
    buh: false,
    bui: false,
    bua_back_c: "#ffffff",
    bub_back_c: "#ffffff",
    buc_back_c: "#ffffff",
    bud_back_c: "#ffffff",
    bue_back_c: "#ffffff",
    buf_back_c: "#ffffff",
    bug_back_c: "#ffffff",
    buh_back_c: "#ffffff",
    bui_back_c: "#ffffff",
    bua_text_c: "#000000",
    bub_text_c: "#000000",
    buc_text_c: "#000000",
    bud_text_c: "#000000",
    bue_text_c: "#000000",
    buf_text_c: "#000000",
    bug_text_c: "#000000",
    buh_text_c: "#000000",
    bui_text_c: "#000000",
  },


  onLoad: function (options) {
    var that = this
    //random array
    var original = options.quant.split(",")
    //console.log(original)
    var current_number = original.pop().toString()
    that.setData({
      order: original,
    })
    wx.getStorage({
      key: current_number,
      success: function (res) {
        var xuanxiang_list = res.data[1]
        //console.log(xuanxiang_list)
        that.setData({
          current_info: res.data,
          timu: res.data[0],
          xuanxiang: xuanxiang_list,
          jiexi: res.data[2],
          items: xuanxiang_list
        })
      }
    })
    var hgkm = (parseInt(current_number) + 1).toString()
    wx.setNavigationBarTitle({
      title: "No." + hgkm
    })
    that.onStartHandler()
  },

  nextone: function (e) {
    var that = this
    that.setData({
      jiexi_tmp: "  "
    })
    var order = e.target.dataset.order
    if (order.length == 0) {
      wx.navigateTo({
        url: '../page2/page2'
      })
    }
    var current_key_num = order.pop()
    var current_key = current_key_num.toString()
    wx.getStorage({
      key: current_key,
      success: function (res) {
        that.setData({
          current_info: res.data,
          timu: res.data[0],
          xuanxiang: res.data[1],
          jiexi: res.data[2],
          items: res.data[1]
        })
      }
    })
    that.setData({
      order: order,
      disabled: true,
      disabled1: false,
      bua: false,
      bub: false,
      buc: false,
      bud: false,
      bue: false,
      buf: false,
      bug: false,
      buh: false,
      bui: false,
      bua_back_c: that.data.day_xuanxiang_bck,
      bub_back_c: that.data.day_xuanxiang_bck,
      buc_back_c: that.data.day_xuanxiang_bck,
      bud_back_c: that.data.day_xuanxiang_bck,
      bue_back_c: that.data.day_xuanxiang_bck,
      buf_back_c: that.data.day_xuanxiang_bck,
      bug_back_c: that.data.day_xuanxiang_bck,
      buh_back_c: that.data.day_xuanxiang_bck,
      bui_back_c: that.data.day_xuanxiang_bck,
      bua_text_c: "#000000",
      bub_text_c: "#000000",
      buc_text_c: "#000000",
      bud_text_c: "#000000",
      bue_text_c: "#000000",
      buf_text_c: "#000000",
      bug_text_c: "#000000",
      buh_text_c: "#000000",
      bui_text_c: "#000000",
    })
    var ffd = (parseInt(current_key_num) + 1).toString()
    console.log(ffd)

    wx.setNavigationBarTitle({
      title: "No." + ffd
    })
    that.onStopHandler()
    that.onStartHandler()
  },


  showanswer: function (e) {
    var jiexi = e.target.dataset.jiexi
    this.setData({
      jiexi_tmp: jiexi,
      disabled: false,
      disabled1: true
    })
    this.onStopHandler()
  },

  click: function (e) {
    var that = this
    var bu = e.target.dataset.bu
    if (bu == "a") {
      if (that.data.bua == false) {
        that.setData({
          bua_back_c: that.data.day_xuanxiang_xuanzhong,
          bua_text_c: "#ffffff",
          bua: true
        })
      }
      else {
        that.setData({
          bua_back_c: that.data.day_xuanxiang_bck,
          bua_text_c: that.data.day_xuanzhong_text,
          bua: false
        })
      }
    }

    if (bu == "b") {
      if (that.data.bub == false) {
        that.setData({
          bub_back_c: that.data.day_xuanxiang_xuanzhong,
          bub_text_c: "#ffffff",
          bub: true
        })
      }
      else {
        that.setData({
          bub_back_c: that.data.day_xuanxiang_bck,
          bub_text_c: that.data.day_xuanzhong_text,
          bub: false
        })
      }
    }

    if (bu == "c") {
      if (that.data.buc == false) {
        that.setData({
          buc_back_c: that.data.day_xuanxiang_xuanzhong,
          buc_text_c: "#ffffff",
          buc: true
        })
      }
      else {
        that.setData({
          buc_back_c: that.data.day_xuanxiang_bck,
          buc_text_c: that.data.day_xuanzhong_text,
          buc: false
        })
      }
    }

    if (bu == "d") {
      if (that.data.bud == false) {
        that.setData({
          bud_back_c: that.data.day_xuanxiang_xuanzhong,
          bud_text_c: "#ffffff",
          bud: true
        })
      }
      else {
        that.setData({
          bud_back_c: that.data.day_xuanxiang_bck,
          bud_text_c: that.data.day_xuanzhong_text,
          bud: false
        })
      }
    }

    if (bu == "e") {
      if (that.data.bue == false) {
        that.setData({
          bue_back_c: that.data.day_xuanxiang_xuanzhong,
          bue_text_c: "#ffffff",
          bue: true
        })
      }
      else {
        that.setData({
          bue_back_c: that.data.day_xuanxiang_bck,
          bue_text_c: that.data.day_xuanzhong_text,
          bue: false
        })
      }
    }

    if (bu == "f") {
      if (that.data.buf == false) {
        that.setData({
          buf_back_c: that.data.day_xuanxiang_xuanzhong,
          buf_text_c: "#ffffff",
          buf: true
        })
      }
      else {
        that.setData({
          buf_back_c: that.data.day_xuanxiang_bck,
          buf_text_c: that.data.day_xuanzhong_text,
          buf: false
        })
      }
    }

    if (bu == "g") {
      if (that.data.bug == false) {
        that.setData({
          bug_back_c: that.data.day_xuanxiang_xuanzhong,
          bug_text_c: "#ffffff",
          bug: true
        })
      }
      else {
        that.setData({
          bug_back_c: that.data.day_xuanxiang_bck,
          bug_text_c: that.data.day_xuanzhong_text,
          bug: false
        })
      }
    }

    if (bu == "h") {
      if (that.data.buh == false) {
        that.setData({
          buh_back_c: that.data.day_xuanxiang_xuanzhong,
          buh_text_c: "#ffffff",
          buh: true
        })
      }
      else {
        that.setData({
          buh_back_c: that.data.day_xuanxiang_bck,
          buh_text_c: that.data.day_xuanzhong_text,
          buh: false
        })
      }
    }

    if (bu == "i") {
      if (that.data.bui == false) {
        that.setData({
          bui_back_c: that.data.day_xuanxiang_xuanzhong,
          bui_text_c: "#ffffff",
          bui: true
        })
      }
      else {
        that.setData({
          bui_back_c: that.data.day_xuanxiang_bck,
          bui_text_c: that.data.day_xuanzhong_text,
          bui: false
        })
      }
    }

  },

  onStartHandler() {
    var that = this
    if (!interval) {
      interval = setInterval(() => {
        that.setData({
          time: that.data.time + 1,
          displayTime: that.parseTime(that.data.time)
        })
      }, 10);
    }
  },

  parseTime() {
    var mm = parseInt(this.data.time / 100 / 60);
    if (mm < 10) mm = '0' + mm;
    var ss = parseInt(this.data.time % 6000 / 100);
    if (ss < 10) ss = '0' + ss;
    var ssss = parseInt(this.data.time % 100);
    if (ssss < 10) ssss = '0' + ssss;
    return `${mm}:${ss}`
  },

  onStopHandler() {
    console.log('stop')
    if (interval) {
      clearInterval(interval);
      interval = null;
    } else {
      this.setData({
        time: 0,
        displayTime: '00:00'
      })
    }
  },
  switch1Change: function (e) {
    var that = this
    if (e.detail.value == false) {
      that.setData({
        day_background: "#e9ecec",
        day_text: "#000000",
        day_button1: "#09bb07",
        day_button2: "#e64340",
        day_xuanxiang_bck: "#ffffff",
        day_xuanxiang_xuanzhong: "#09bb07"
      })
    }
    else {
      that.setData({
        day_background: "#3F3D5C",
        day_text: "#ffffff",
        day_button1: "#ec6d56",
        day_button2: "#f5cc8a",
        day_xuanxiang_bck: "#ffffff",
        day_xuanxiang_xuanzhong: "#ec6d56",
      })
    }
  },
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  }

})