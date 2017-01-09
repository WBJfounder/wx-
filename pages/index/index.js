Page({
   data: {
    imgUrls: [
      './images/1.jpg',
      './images/2.jpg',
      './images/3.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2500,
    duration: 1000,
    circular:true
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})