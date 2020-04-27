export default {
  code: 20000,
  data: [
    [
      { name: "模块一", code: "01" },
      {
        name: "配置中心",
        code: "01",
        checked: false,
        data: [
          {
            name: "应用管理",
            template: "applicationManagement",
            src: "applicationManagement",
            icon:'el-icon-menusyingyong1'
          },
          {
            name: "环境管理",
            template: "environmentalManagement",
            src: "environmentalManagement",
            icon:'el-icon-menushuanjing'
          },
          {
            name: "配置管理",
            template: "configurationManagement",
            src: "configurationManagement",
            icon:'el-icon-menuspeizhi'
          }
        ]
      },
      {
        checked: false,
        name: "流程编排",
        code: "02",
        style: "paperclip",
        color: "red",
        data: [
          {
            name: "开发态",
            template: "developmentStatus",
            meta: { title: "开发态", icon: "el-icon-menuskaifa" },
            data: [
              {
                name: "字典管理",
                template: "dictionary",
                src: "dictionary",
                icon:"el-icon-menuszidian"
              },
              {
                name: "系统配置",
                template: "systemConfiguration",
                src: "systemConfiguration",
                icon:'el-icon-menusxitongguanli'
              },
              {
                name: "模块配置",
                template: "moduleConfiguration",
                src: "moduleConfiguration",
                icon:'el-icon-menusmokuai'
              },
              {
                name: "组件配置",
                template: "componentConfiguration",
                src: "componentConfiguration",
                icon:'el-icon-menusgroup'
              },
              {
                name: "应用配置",
                template: "applicationConfiguration",
                src: "applicationConfiguration",
                icon:'el-icon-menusyingyong1'
              },
              {
                name: "模块服务编排",
                template: "moduleServiceOrchestration",
                src: "moduleServiceOrchestration",
                icon:"el-icon-menusmokuai"
              },
              {
                name: "应用服务编排",
                template: "applicationServiceOrchestration",
                src: "applicationServiceOrchestration",
                icon:'el-icon-menusshujumoxing-'
              },
              {
                name: "打包发布配置",
                template: "packagingReleaseConfiguration",
                src: "packagingReleaseConfiguration",
                icon:"el-icon-menusdabao"
              }
            ]
          },
          {
            name: "运行态",
            template: "runningState",
            src: "Temporary",
            meta: { title: "运行态", icon: "el-icon-menusyunhang" },
            data: [
              {
                name: "节点运行状态",
                template: "nodeRunningStatus",
                src: "nodeRunningStatus",
                icon:'el-icon-menusjihuarenwu'
              },
              {
                name: "节点流量状态",
                template: "nodeTrafficStatus",
                src: "nodeTrafficStatus",
                icon:"el-icon-menusliuliang"
              },
              {
                name: "服务调用排行",
                template: "serviceCallRanking",
                src: "serviceCallRanking",
                icon:"el-icon-menusfuwutiaoyong"
              },
              {
                name: "链路调用日志",
                template: "linkCallLog",
                src: "linkCallLog",
                icon:"el-icon-menuslianlutu"
              },
              {
                name: "流程发起调用",
                template: "processInvocation",
                src: "processInvocation",
                icon:"el-icon-menusliuchengfaqizhong"
              }
            ]
          }
        ]
      },
      {
        checked: false,
        name: "序列管理",
        code: "03",
        data: [
          {
            name: "参数配置",
            template: "parameterConfiguration",
            src: "parameterConfiguration",
            icon:"el-icon-menusjichucanshushezhi01"
          },
          {
            name: "规则配置",
            template: "ruleConfiguration",
            src: "ruleConfiguration",
            icon:"el-icon-menusguize"
          }
        ]
      },
      {
        checked: false,
        name: "缓存管理",
        code: "04",
        data: [
          {
            name: "机器管理",
            template: "machineManagement",
            src: "machineManagement",
            icon:"el-icon-menusjiqi"
          },
          {
            name: "实例管理",
            template: "instanceManagement",
            src: "instanceManagement",
            icon:"el-icon-menusshili"
          },
          {
            name: "机器实例",
            template: "machineInstance",
            src: "machineInstance",
            icon:"el-icon-menusmachine"
          },
          {
            name: "创建集群",
            template: "createACluster",
            src: "createACluster",
            icon:"el-icon-menusmulti-cluster"
          },
          {
            name: "发现集群",
            template: "discoveryCluster",
            src: "discoveryCluster",
            icon:"el-icon-menusjiqun"
          },
          {
            name: "集群监控",
            template: "clusterMonitoring",
            src: "clusterMonitoring",
            icon:"el-icon-menusmulti-cluster"
          },
          {
            name: "任务管理",
            template: "taskManagement",
            src: "taskManagement",
            icon:"el-icon-menusrenwu"
          },
          {
            name: "控制台",
            template: "Console",
            src: "Console",
            icon:"el-icon-menuskongzhitai"
          },
          {
            checked: false,
            name: "维护",
            template: "maintain",
            meta: { title: "维护", icon: "el-icon-menusweihu" },
            data: [
              {
                name: "应用管理",
                template: "applicationManagements",
                src: "applicationManagements",
                icon:"el-icon-menusyingyong1"
              },
              {
                name: "基础参数",
                template: "basicParameters",
                src: "basicParameters",
                icon:"el-icon-menusjichucanshushezhi01"
              },
              {
                name: "租户管理",
                template: "tenantManagement",
                src: "tenantManagement",
                icon:"el-icon-menuszuhu"
              }
            ]
          }
        ]
      },
      {
        checked: false,
        name: "消息管理",
        code: "05",
        data: [
          {
            name: "机器管理",
            template: "machineManagements",
            checked: false,
            src: "machineManagements",
            icon:"el-icon-menusmachine"
          },
          {
            name: "集群管理",
            template: "clusterManagement",
            checked: false,
            src: "clusterManagement",
            icon:"el-icon-menusmulti-cluster"
          },
          {
            name: "实例管理",
            template: "instanceManagements",
            checked: false,
            src: "instanceManagements",
            icon:"el-icon-menusshili"
          },
          {
            name: "主题管理",
            template: "themeManagement",
            checked: false,
            src: "themeManagement",
            icon:"el-icon-menusicon12"
          },
          {
            name: "消息查询",
            template: "messageQuery",
            checked: false,
            src: "messageQuery",
            icon:"el-icon-menusxiaoxi"
          }
        ]
      }
    ],
    [
      { name: "模块二", code: "06", checked: false },
      {
        name: "服务治理",
        code: "06",
        checked: false,
        data: [
          {
            name: "开发态",
            template: "developmentStatus",
            meta: { title: "开发态", icon: "el-icon-menuskaifa" },
            data: [
              {
                name: "集群配置",
                template: "clusterconfiguration",
                checked: false,
                src: "clusterconfiguration",
                icon:"el-icon-menusjiqun"
              },
              {
                name: "消费端配置",
                template: "consumerconfiguration",
                checked: false,
                src: "consumerconfiguration",
                icon:"el-icon-menusxiaofei"
              },
              {
                name: "服务端配置",
                template: "serverconfiguration",
                checked: false,
                src: "serverconfiguration",
                icon:"el-icon-menusfuwu"
              }
            ]
          }
        ]
      },
      { name: "自动化部署", code: "07", checked: false },
      { name: "微服务网关", code: "08", checked: false },
      { name: "系统管理", code: "09", checked: false },
      { name: "开发工具", code: "10", checked: false }
    ]
  ]
};
