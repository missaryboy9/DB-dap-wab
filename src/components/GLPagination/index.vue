<template>
  <div
    class="pagationmain"
    onselectstart="return false;"
  >
    <totallist />
    <nationcjecklist @changevalue="changevalue" />
  </div>
</template>

<script type="text/ecmascript-6">
import mixinsONE from './GLPpag'
export default {
  name: 'GlbPagination',
  components: {
  },
  mixins: [ mixinsONE ],
  props: {
    articlesPerPage: {
      type: [ Number, String ],
      default: 10
    },
    totaldate: {
      type: [ Number, String ],
      default: 31
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      prevText: '1'
    };
  },
  computed: {
    totalPages: function () {
      let totalpage = Math.ceil(this.totaldate / this.articlesPerPage)
      let totalpagearray = []
      for (let i = 1;i <= `${totalpage}`;i++) {
        totalpagearray.push(i)
      }
      return {
        totaldate: this.totaldate,
        totalpage,
        totalpagearray,
        Judge: totalpage > 3
      }
    }
  },
  watch: {
    currentPage: function (params) {

    }
  },
  mounted() {

  },
  methods: {
    changevalue(value) {
      this.$emit('update:currentPage', value)
    }
  }
};
</script>

<style  lang="scss">
@import "./local.scss";
</style>
