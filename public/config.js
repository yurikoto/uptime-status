// 配置
window.Config = {

  // 站点名
  SiteName: 'Yurikoto 服务状态',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm787013690-3a78fe2c763401fee36ad958',
    'm787013740-4d7985e298ff83237b146411',
    'm787013741-f8e629df55338e617f7dbcd2',
    'm786806085-9a0f5bcf505b877e6b52ed76',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://yurikoto.com/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yurikoto'
    }
  ]
};
