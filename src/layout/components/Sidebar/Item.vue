<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];

    if (icon) {
      // vnodes.push(<svg-icon icon-class={ icon } />);
      // let a = 'el-icon-';
      // a = a + icon;
      // vnodes.push(<i style='height:20px' class={`${a}`}></i>);
      vnodes.push(<i class={ `${icon} iconstyle` }></i >);
    }

    if (title) {
      vnodes.push(<span slot='title' class='textstyle'>{ title }</span>);
    }
    return vnodes;
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";
@import "~@/assets/font/fontface/sourcefont.css";
.iconstyle {
  color: $subMenueteststyle;
  font-size: $subMenuesize;
  font-family: "iconfont" !important;
}
.textstyle {
  font-family: "sourcefont";
  letter-spacing: 2px;
  font-weight: 100;
  font-size: 12px;
  margin-left: 0;
}
</style>
