<template>
  <div class="main">
    <vxe-toolbar>
      <template v-slot:buttons>
        <vxe-button @click="insertEvent()" size="mini">新增</vxe-button>
        <vxe-button @click="$refs.xTable.removeCheckboxRow()" size="mini">删除选中</vxe-button>
      </template>
    </vxe-toolbar>

    <vxe-table
      border
      resizable
      ref="xTable"
      size="mini"
      max-height="400"
      :data="tableData"
      :columns="tableColumn"
      :edit-config="{trigger: 'click', mode: 'row'}"
      @edit-actived="editActivedEvent"
    >
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column type="seq" width="60"></vxe-table-column>
      <vxe-table-column field="name" title="Name" :edit-render="{name: 'input'}"></vxe-table-column>
      <vxe-table-column field="sex" title="Sex" :edit-render="{name: '$select', options: sexList}"></vxe-table-column>
      <vxe-table-column
        field="num"
        title="Number"
        :edit-render="{name: '$input', props: {type: 'number'}}"
      ></vxe-table-column>
      <vxe-table-column
        field="role"
        title="Role"
        :edit-render="{name: '$select', options: roleList, props: {clearable: true}, events: {change: roleChangeEvent}}"
      ></vxe-table-column>
      <vxe-table-column
        field="date"
        title="Date"
        :edit-render="{name: '$input', props: {type: 'date'}}"
      ></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tableColumn: [
        { type: "seq", width: 50 },
        {
          title: "基本信息",
          children: [
            { field: "name", title: "Name" },
            {
              title: "其他信息",
              children: [
                { field: "role", title: "Role" },
                { field: "age", title: "Age" }
              ]
            },
            { field: "sex", title: "Sex" }
          ]
        },
        { field: "address", title: "Address", showOverflow: true }
      ],
      tableData: [
        {
          id: 10001,
          name: "Test1",
          role: "Develop",
          num: "11",
          sex: "Man",
          address: "Shenzhen",
          date: "2020-05-15"
        },
        {
          id: 10002,
          name: "Test2",
          role: "Test",
          num: "11",
          sex: "Man",
          address: "Guangzhou",
          date: "2020-05-15"
        },
        {
          id: 10003,
          name: "Test3",
          role: "PM",
          num: "11",
          sex: "Man",
          address: "Shanghai",
          date: "2020-05-15"
        }
      ],
      sexList: [
        {
          label: "Man",
          value: "1",
          disabled: false
        },
        {
          label: "Women",
          value: "2",
          disabled: false
        }
      ],
      roleList: [
        {
          label: "前端",
          value: "1",
          disabled: false
        },
        {
          label: "后端",
          value: "2",
          disabled: false
        },
        {
          label: "项目经理",
          value: "3",
          disabled: false
        },
        {
          label: "设计师",
          value: "4",
          disabled: false
        },
        {
          label: "运维",
          value: "5",
          disabled: false
        }
      ]
    };
  },
  created() {
    // this.$nextTick(() => {
    //   this.tableData = window.MOCK_DATA_LIST.slice(0, 2);
    //   this.updateRoleList();
    // });
  },
  methods: {
    insertEvent() {
      let record = {};
      this.$refs.xTable.insert(record);
    },
    updateRoleList() {
      // 获取表格中的全量数据
      let { fullData } = this.$refs.xTable.getTableData();
      console.log(fullData);

      this.roleList.forEach(item => {
        if (item.value) {
          // 如果当前选项已经被选过，则禁用
          item.disabled = fullData.some(row => row.role1 === item.value);
        }
      });
    },
    removeEvent(row) {
      this.$XModal.confirm("您确定要删除该数据?").then(type => {
        if (type === "confirm") {
          this.$refs.xTable.remove(row);
        }
      });
    },
    roleChangeEvent({ row }) {
      this.updateRoleList();
    },
    editActivedEvent({ row }) {
      // 激活编辑时检查剩余选项是否可选择
      this.updateRoleList();
    }
  }
};
</script>

<style scoped lang="scss">

</style>
