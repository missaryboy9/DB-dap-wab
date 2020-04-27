<template>
  <div class="applicationManagement">
    <!--
      isexpand 区分简单查询和多条件查询 true 显示筛选按钮 , false 不显示筛选按钮

     -->
    <el-search
      :ishandle="true"
      :handleform="handleform"
      :showform="showform"
      :handledata="handledata"
      :showdata="showdata"
    ></el-search>
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
} from '../components';

export default {
  components: {
    newapplication,
    filtermain
  },
  data() {
      let sexs = [{ label: '男', value: 'M' }, { label: '女', value: 'F' }]
      let sexProps = { label: 'label', value: 'value' }
    return {
      handleform: [
              { type: 'Input', label: '姓名', prop: 'name', width: '180px', placeholder: '请输入姓名...' },
              { type: 'Input', label: '年龄', prop: 'age', width: '180px', placeholder: '请输入年龄...' },
              { type: 'Date', label: '日期', prop: 'date', width: '180px', placeholder: '请选择日期...' },
              { type: 'Select', label: '性别', prop: 'sex', width: '180px', options: sexs, props: sexProps, change: row => '', placeholder: '请选择性别...' }
            ],
            showform: [
              { type: 'Input', label: '姓名', prop: 'name', width: '180px', placeholder: '请输入姓名...' },
              { type: 'Input', label: '年龄', prop: 'age', width: '180px', placeholder: '请输入年龄...' }
              // { type: 'Select', label: '性别', prop: 'sex', width: '180px', options: sexs, props: sexProps, change: row => '', placeholder: '请选择性别...' }
            ],
            handledata: {
              name: null,
              age: null,
              sex: null,
              Date: null
            },
            showdata: {
              name: null,
              age: null,
              sex: null
            },
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
  padding: 15px;
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
