<template>
  <div class="Temporarypage">
    <div class="card">
      <card v-for="item in 4" />
    </div>
    <div class="list">
      <TemporaryTEM v-for="iten in 3">
        <tablelist />
      </TemporaryTEM>
    </div>
    <div class="table" />
  </div>
</template>

<script type="text/ecmascript-6">
import tablelist from './components/temcompon/table';
import { card, TemporaryTEM } from './components/index';
export default {
  components: {
    card,
    TemporaryTEM,
    tablelist
  },
  data() {
    return {

    };
  }
};
</script>

<style scoped lang="scss">
.Temporarypage {
  .card {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .list {
    display: flex;
    padding-left: 2%;
    margin-top: 20px;
    > * {
      margin-right: 10px;
    }
  }
}
@media only screen and(max-width: 800px) {
  .Temporarypage {
    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      .cardpage {
        width: 60%;
        margin-bottom: 20px;
      }
      :last-child {
        margin-bottom: 0;
      }
    }
    .list {
      flex-direction: column;
      align-items: center;
      .tempage {
        width: 80%;
        margin-bottom: 20px;
      }
      :last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
