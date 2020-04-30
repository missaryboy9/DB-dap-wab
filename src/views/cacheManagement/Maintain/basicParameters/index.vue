<template>
  <div class="applicationManagement">
    <div
      v-for="(item,key) in modulelist"
      :key="key"
    >
      <component :is="item.name" />
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import {
  newapplication,
  filtermain
} from '../../components';

export default {
  components: {
    newapplication,
    filtermain
  },
  data() {
    return {
      modulelist: [
        {
          name: 'newapplication',
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
    height: 80vh;
    > .happy-scroll-content {
      display: block !important;
    }
  }
}
</style>
