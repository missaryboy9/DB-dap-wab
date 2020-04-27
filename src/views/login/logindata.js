exports.loginpath = Promise.resolve({
  code: 20000,
  data: [
    {
      path: "/applicationManagement",
      src: "Layout",
      children: [
        {
          path: "applicationManagement",
          name: "应用管理",
          src: "applicationManagement",
          meta: { title: "应用管理", icon: "el-icon-menusyingyong1" }
        }
      ]
    },
    {
      path: "/environmentalManagement",
      src: "Layout",
      children: [
        {
          path: "environmentalManagement",
          name: "环境管理",
          src: "environmentalManagement",
          meta: { title: "环境管理", icon: "el-icon-menushuanjing" }
        }
      ]
    },
    {
      path: "/configurationManagement",
      src: "Layout",
      children: [
        {
          path: "configurationManagement",
          name: "配置管理",
          src: "configurationManagement",
          meta: { title: "配置管理", icon: "el-icon-menuspeizhi" }
        }
      ]
    }
  ]
});
