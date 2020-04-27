<template>
  <div class="listnonoe">
    <div>
      <span>
        <span>{{ innerlist.icon }}</span>
        <span>{{ innerlist.projectname }}</span>
      </span>
      <span>
        <p>{{ innerlist.creat }}</p>
        <p>{{ innerlist.creatusername }}</p>
      </span>
      <span>
        <p>{{ innerlist.creattime }}</p>
        <p>{{ innerlist.time }}</p>
      </span>
    </div>
    <div>
      <span>容器组:{{ innerlist.list }}</span>
      <span>CPU:{{ innerlist.cpu }}</span>
      <span>内存:{{ innerlist.catch }}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  components: {

  },
  props: {
    innerlist: {
      type: Object,
      default: () => {
        return {
          icon: '\ue834',
          projectname: 'demo-project',
          creat: 'admin',
          creatusername: '创建者',
          creattime: '2020-02-05 20:45:46',
          time: '创建时间',
          list: '7',
          cpu: '8',
          catch: '9'
        }
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.listnonoe {
  background-color: #eff4f9;
  margin: 15px 0;
  border-radius: 10px;
  font-family: glbfonticon;
  display: flex;
  flex-direction: column;
  height: 80px;
  transition: 1s background-color ease;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
  > :nth-child(1) {
    display: flex;
    flex: 2;
    flex-direction: row;
    align-items: center;
    p {
      padding: 0;
      margin: 0;
      font-size: 13px;
      font-weight: 100;
    }
    > :nth-child(1) {
      flex: 2;
      padding-left: 20px;
      > :first-child {
        font-size: 30px;
        vertical-align: middle;
        margin-right: 15px;
      }
    }
    > :nth-child(2) {
      flex: 1;
    }
    > :nth-child(3) {
      flex: 2;
    }
    > :nth-child(n + 2) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  > :nth-child(2) {
    flex: 1;
    font-size: 13px;
    font-weight: 100;
    span {
      padding: 10px;
    }
    > :nth-child(1) {
      padding-left: 20px;
    }
  }
}
</style>
