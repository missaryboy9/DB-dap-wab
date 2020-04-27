<script>
export default {
  //   name: 'MenuItem',
  functional: true,
  props: {
    datalist: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => [
        { value: 1 },
        { value: 2 },
        { value: 3 },
        { value: 4 }
      ]
    }
  },
  methods: {
    testclick() {
      alert('test');
    }
  },
  render(h, context) {
    const { datalist } = context.props;
    return h(
      'ul',
      [
        ...datalist.map(e => {
          return h(
            'el-button',
            {
              on: {
                click: () => {

                }
              }
            },
            e.value
          );
        })
      ]
    );
  }
};
</script>
<style lang="scss">
ul {
  list-style: none;
}
</style>
