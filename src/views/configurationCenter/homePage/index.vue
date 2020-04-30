<template>
  <div class="applicationManagement">
   ho
  </div>
</template>
<script type="text/ecmascript-6">
import {
  newapplication,
  filtermain
} from '../components';

export default {
  components: {
    newapplication,
    filtermain
  },

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
