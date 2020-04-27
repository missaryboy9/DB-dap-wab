export default {
  methods: {
    removenode(event) {
      return Promise.resolve(() => {
        this.$emit("removenodeparams", event);
      });
    }
  }
};
