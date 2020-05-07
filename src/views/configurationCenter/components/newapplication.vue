<template>
  <div class="filter">
    <el-row>
      <el-button size="mini" type="primary" @click="addapplication"><i class="el-icon-plus"></i> 新增应用</el-button>
      <el-button size="mini" type="danger" @click="appconfig">应用配置</el-button>
      <el-button size="mini" type="primary" @click="addnewapplication($event)"><i class="el-icon-plus"></i> 添加新应用</el-button>
    </el-row>
    <glb-diadlog titlename="新增应用" :show.sync="dialogVisible">
      <fromdata></fromdata>
    </glb-diadlog>
    <glb-diadlog titlename="应用配置" :show.sync="dialogVisible1">
      <dialogList></dialogList>
    </glb-diadlog>
    <div>
      <el-dialog />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import dialogList from "./dialog-list";
import fromdata from "./fromdata";
import globaldialog from "@/components/Globdialog/index";

export default {
  components: {
    dialogList,
    fromdata,
    globaldialog
  },
  data() {
    return {
      show: false,
      ruleForm: {
        Numbering: "",
        description: ""
      },
      dialogVisible: false,
      dialogVisible1: false
    };
  },
  methods: {
    addnewapplication(e) {
      let { clientX, clientY } = e;
      this.$toastmessage({
        digital: {
          clientX: clientX,
          clientY: clientY,
          type: "NewApplication"
        },
        methods: {
          success: res => {
            this.$bus.$emit("addtablelist", res);
            this.$message({
              message: "添加成功",
              type: "success"
            });
          }
        }
      });
    },
    appconfig() {
      this.dialogVisible1 = true;
    },
    addapplication() {
      this.dialogVisible = true;
      this.clear(this.ruleForm);
      // this.$toast({
      //   title: '11111',
      //   duration: 3000
      // });
    },
    addsub() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    },
    clear(e) {
      Object.keys(e).forEach(element => {
        e[element] = "";
      });
    }
  }
};
</script>

<style scoped lang="scss">
.filter {
  padding: 10px;
}
.flexrow {
  margin-left: 10px;
  display: flex;
  align-items: baseline;
  > span {
    white-space: nowrap;
    font-size: 11px;
  }
}
</style>
