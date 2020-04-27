<template>
  <div class="dropdowncantaner">
    <div class="titlename">{{ title }}</div>
    <div
      v-for="item in dropdownlist.data"
      class="innercont"
    >
      <dropdownmain
        :itemlist="item"
        v-on="$listeners"
      />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import dropdownlist from './dropdowndata';
import dropdownmain from './main';
export default {
  components: {
    dropdownmain
  },
  data() {
    return {
      dropdownlist: dropdownlist,
      title: '应用分类'
    };
  }
};
</script>

<style scoped lang="scss">
.titlename {
  width: 200px;
  position: absolute;
  left: 0;
  top: 0;
  font-weight: 900;
  font-size: 20px;
  padding: 10px;
}
.dropdowncantaner {
  margin-top: 20px;
  min-width: 38vh;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  > .innercont {
    flex: 1;
    padding: 10px;
  }
}
</style>
