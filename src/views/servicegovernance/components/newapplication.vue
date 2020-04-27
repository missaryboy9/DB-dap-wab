<template>
  <div class="filter">
    <el-row>
      <el-col :span="2">
        <el-button
          size="mini"
          type="primary"
          @click="addapplication"
        >新增应用</el-button>
      </el-col>
      <transition name="el-zoom-in-center">
        <div v-show="show">
          <el-col
            class="flexrow"
            :span="4"
          >
            <span>
              应用编号:
            </span>
            <el-input
              v-model="ruleForm.Numbering"
              size="mini"
              placeholder="请输入"
            />
          </el-col>
          <el-col
            class="flexrow"
            :span="4"
          >
            <span>
              应用描述:
            </span>
            <el-input
              v-model="ruleForm.description"
              size="mini"
              placeholder="请输入"
            />
          </el-col>
          <el-col
            class="flexrow"
            :span="4"
          >
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-circle-plus-outline"
              circle
              @click="addsub"
            />
          </el-col>
          </el-form>
        </div>
      </transition>
    </el-row>
    <div>
      <el-dialog />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  data() {
    return {
      show: false,
      ruleForm: {
        Numbering: '',
        description: ''
      }
    };
  },
  methods: {
    addapplication() {
      this.show = !this.show;
      this.clear(this.ruleForm);
    },
    addsub() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    },
    clear(e) {
      Object.keys(e).forEach(element => {
        e[ element ] = '';
      }); ;
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
