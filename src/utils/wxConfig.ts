import store from "@/store";

export const wechatAuth = async (authUrl: string, device: string, allowShare: boolean) => {
  const shareConfig = {
    title: "XXXX标题",
    desc: "XXXXX描述",
    link: allowShare ? authUrl : window.location.origin,
    imgUrl: "图片Url"
  };
  const from_url = device.toLocaleLowerCase() === "ios" ? store.state.entryUrl : authUrl;
  wx.config({}); // wx.config配置项
  wx.ready(() => {
    wx.updateAppMessageShareData({
      title: shareConfig.title,
      desc: shareConfig.desc,
      link: shareConfig.link,
      imgUrl: shareConfig.imgUrl,
      success: function(res: any) {
        console.log(res);
      }
    });
    wx.updateTimelineShareData({
      title: shareConfig.title,
      link: shareConfig.link,
      imgUrl: shareConfig.imgUrl,
      success: function(res: any) {
        console.log(res);
      }
    });
    wx.onMenuShareTimeline({
      title: shareConfig.title,
      link: shareConfig.link,
      imgUrl: shareConfig.imgUrl,
      success: function(res: any) {
        console.log(res);
      }
    });
    wx.onMenuShareAppMessage({
      title: shareConfig.title,
      desc: shareConfig.desc,
      link: shareConfig.link,
      imgUrl: shareConfig.imgUrl,
      success: function(res: any) {
        console.log(res);
      }
    });
  });
  wx.error((err: any) => {
    alert(JSON.stringify(err));
  });
};
