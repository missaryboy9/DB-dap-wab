export default [
  {
    "appId": 39,
     "appName": "euos",
     "clusterName": "euos_cluster",
     "limitModel": 1,
     "limitFrame": "RESILIENCE",
     "appFrame": "DUBBO",
     "children": [
       {
       "id": 348,
       "instanceName": "node1",
       "flowWeight": 1,
       "description": "node1",
       "appId": 348,
       "appName": "node1",
       "clusterName": "node1",
        "limitModel": 1,
       "limitFrame": "RESILIENCE",
        "appFrame": "DUBBO",
        "children": [
          {
          "id": 348,
          "instanceName": "node1",
          "flowWeight": 1,
          "description": "node1",
          "appId": 348,
          "appName": "node1",
          "clusterName": "node1",
           "limitModel": 1,
          "limitFrame": "RESILIENCE",
           "appFrame": "DUBBO",
           "children": [
            {
            "id": 348,
            "instanceName": "node1",
            "flowWeight": 1,
            "description": "node1",
            "appId": 348,
            "appName": "node1",
            "clusterName": "node1",
             "limitModel": 1,
            "limitFrame": "RESILIENCE",
             "appFrame": "DUBBO"

            }
          ]
          }
        ]
       }
     ]
  },
  {
    "appId": 40,
     "appName": "zecard",
     "clusterName": "Cluster_zecard",
     "limitModel": 1,
     "limitFrame": "HYSTRIX",
     "appFrame": "WEB",
     "children": [
       {
       "id": 349,
       "instanceName": "node1",
       "flowWeight": 1,
       "description": "node1"
       }
     ]
  },
  {
    "appId": 34,
     "appName": "OpenAPI",
     "clusterName": "cluster_openApi",
     "limitModel": 1,
     "limitFrame": "SENTINEL",
     "appFrame": "WEB",
     "children": [
       {
       "id": 347,
       "instanceName": "demo-web",
       "flowWeight": 1,
       "description": ""
       }
     ]
  }
]
