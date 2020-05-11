exports.asynvmap_ = {
  applicationManagement: () =>
    import("@/views/configurationCenter/applicationManagement"),
  environmentalManagement: () =>
    import("@/views/configurationCenter/environmentalManagement"),
  configurationManagement: () =>
    import("@/views/configurationCenter/configurationManagement"),
  dictionary: () =>
    import("@/views/ProcessChoreographer/developstate/dectionmain"),
  systemConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/systemConfiguration"),
  moduleConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/moduleConfiguration"),
  componentConfiguration: () =>
    import("@/views/ProcessChoreographer/developstate/componentConfiguration"),
  applicationConfiguration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/applicationConfiguration"
    ),
  moduleServiceOrchestration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/moduleServiceOrchestration"
    ),
  applicationServiceOrchestration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/applicationServiceOrchestration"
    ),
  packagingReleaseConfiguration: () =>
    import(
      "@/views/ProcessChoreographer/developstate/packagingReleaseConfiguration"
    ),
  nodeRunningStatus: () =>
    import("@/views/ProcessChoreographer/runningstate/nodeRunningStatus/components/datav"),
  nodeTrafficStatus: () =>
    import("@/views/ProcessChoreographer/runningstate/nodeTrafficStatus"),
  serviceCallRanking: () =>
    import("@/views/ProcessChoreographer/runningstate/serviceCallRanking"),
  linkCallLog: () =>
    import("@/views/ProcessChoreographer/runningstate/linkCallLog"),
  processInvocation: () =>
    import("@/views/ProcessChoreographer/runningstate/processInvocation"),
  parameterConfiguration: () =>
    import("@/views/sequenceManagement/parameterConfiguration"),
  ruleConfiguration: () =>
    import("@/views/sequenceManagement/ruleConfiguration"),
  machineManagement: () => import("@/views/cacheManagement/machineManagement"),
  instanceManagement: () =>
    import("@/views/cacheManagement/instanceManagement"),
  machineInstance: () => import("@/views/cacheManagement/machineInstance"),
  createACluster: () => import("@/views/cacheManagement/createACluster"),
  discoveryCluster: () => import("@/views/cacheManagement/discoveryCluster"),
  clusterMonitoring: () => import("@/views/cacheManagement/clusterMonitoring"),
  taskManagement: () => import("@/views/cacheManagement/taskManagement"),
  Console: () => import("@/views/cacheManagement/Console"),
  applicationManagements: () =>
    import("@/views/cacheManagement/Maintain/applicationManagements"),
  basicParameters: () =>
    import("@/views/cacheManagement/Maintain/basicParameters"),
  tenantManagement: () =>
    import("@/views/cacheManagement/Maintain/tenantManagement"),
  machineManagements: () =>
    import("@/views/messageManagement/machineManagements"),
  clusterManagement: () =>
    import("@/views/messageManagement/clusterManagement"),
  instanceManagements: () =>
    import("@/views/messageManagement/instanceManagements"),
  themeManagement: () => import("@/views/messageManagement/themeManagement"),
  messageQuery: () => import("@/views/messageManagement/messageQuery"),
  clusterconfiguration: () => import("@/views/servicegovernance/developstate/clusterconfiguration"),
  consumerconfiguration: () => import("@/views/servicegovernance/developstate/consumerconfiguration"),
  serverconfiguration: () => import("@/views/servicegovernance/developstate/serverconfiguration"),
  projectmanagement: () => import("@/views/automatdeployment/projectmanagement"),
  constructionmanagement: () => import("@/views/automatdeployment/constructionproject/constructionmanagement"),
  executionrecord: () => import("@/views/automatdeployment/constructionproject/executionrecord"),
  deploymanagement: () => import("@/views/automatdeployment/deployproject/deploymanagement"),
  depexecutionrecord: () => import("@/views/automatdeployment/deployproject/executionrecord"),
  creditmanagement: () => import("@/views/automatdeployment/machinemanagement/creditmanagement"),
  machineconfiguration: () => import("@/views/automatdeployment/machinemanagement/machineconfiguration"),
  machinegroupconfiguration: () => import("@/views/automatdeployment/machinemanagement/machinegroupconfiguration"),
  checkrule: () => import("@/views/automatdeployment/parameterconfiguration/checkrule"),
  timeconfiguration: () => import("@/views/automatdeployment/parameterconfiguration/timeconfiguration"),
  homePage: () => import("@/views/homepage")

};
