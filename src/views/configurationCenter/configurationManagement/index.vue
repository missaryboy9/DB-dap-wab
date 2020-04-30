<template>
  <div class="applicationManagement">
    <el-row
      style="padding-top:10px;"
      :gutter="20"
    >
      <el-col :span="5">
        <v-tree></v-tree>
      </el-col>
      <el-col :span="19" class="myclass">
        <el-card>
          <el-form
            label-width="80px"
            size="mini"
          >
            <el-form-item label="业务坝称">
              <el-input
                v-model="name"
                suffix-icon="el-icon-search"
              ></el-input>
            </el-form-item>
          </el-form>
          <div
            v-for="item in modulelist"
            :key="item.name"
          >
            <component :is="item.name" />
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import { filtermain } from "../components";
export default {
  components: {
    filtermain
  },
  data() {
    return {
      modulelist: [
        {
          name: "filtermain",
          sendpropos: "",
          getemit: ""
        }
      ],
      name: ""
    };
  }
};
</script>

<style scoped lang="scss">
.applicationManagement {
  /*padding: 15px;*/
  display: flex;
  flex-direction: column;
  > :last-child {
    overflow: auto;
  }
}
.myclass /deep/ .el-input {
  width: 35%;
}
.myclass /deep/ .el-card.is-always-shadow{
  height: 559px;
}
</style>
