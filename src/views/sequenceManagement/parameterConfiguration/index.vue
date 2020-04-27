<template>
  <div class="main">
    <div v-for="item in modulelist">
      <component :is="item.name" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { filtertop, filtermain, newapplication } from '../components';
export default {
  components: {
    filtertop, filtermain, newapplication
  },
  data() {
    return {
      modulelist: [
        {
          name: 'filtertop',
          sendpropos: '',
          getemit: ''
        },
        {
          name: 'filtermain',
          sendpropos: '',
          getemit: ''
        }
      ]
    };
  },
  mounted() {
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
@import "@/styles/mixin.scss";
.main {
  @include innerpadding(15px);
}
</style>
