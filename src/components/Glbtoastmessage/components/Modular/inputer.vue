<template>
  <div>
    <el-form :model="formInline">
      <el-row>
        <el-col>
          <el-input
            v-model="formInline.poiont"
            size="mini"
          ></el-input>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'Inputer',
  components: {

  },
  data() {
    return {
      formInline: {
        poiont: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
