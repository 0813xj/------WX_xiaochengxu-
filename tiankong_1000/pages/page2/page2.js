//index.js
//获取应用实例
var app = getApp()
var interval = null;

Page({
  data: {
    time: 0,
    displayTime: '00:00:00'
  },
  
  onStartHandler(){
    if(!interval){
      interval = setInterval(()=>{
          this.setData({
            time: this.data.time +1,
            displayTime: this.parseTime(this.data.time)
          })
        }, 10);
      }
  },
  parseTime(){
    var mm = parseInt(this.data.time / 100/ 60);
    if(mm<10) mm = '0'+mm;
    var ss = parseInt(this.data.time % 6000 / 100);
    if(ss<10) ss = '0'+ss;
    var ssss = parseInt(this.data.time % 100);
    if(ssss<10) ssss = '0'+ssss;
    return `${mm}:${ss}:${ssss}`
  },
  onStopHandler(){
    if(interval){
      clearInterval(interval);
      interval = null;
    }else{
      this.setData({
        time: 0,
        displayTime: '00:00:00'
      })
    }
  },

})