<template>
  <div class="sir-tree">
    <el-input
      v-show="showfilters"
      v-model="filterText"
      class="tree-input"
      placeholder="输入关键字进行过滤"
    ></el-input>
    <!-- <el-card class="box-card"> -->
    <el-collapse v-model="activename">
      <el-collapse-item
        title="菜单设置"
        class="myclass"
        name="1"
      >
        <el-tree
          ref="tree"
          class="tree"
          :data="showData"
          :props="props"
          node-key="id"
          :indent="indet"
          :show-checkbox="showcheckbox"
          :default-expanded-keys="deekeys"
          :default-checked-keys="deckeys"
          :filter-node-method="filterNode"
          default-expand-all
          :expand-on-click-node="false"
          @check-change="handleCheckChange"
          @node-contextmenu="menuShow"
          @node-click="nodeclick"
        >
          <span
            slot-scope="{ node, data }"
            class="custom-tree-node"
          >
            <i
              :class="getIcon(node)"
              class="iconfont icon-style"
            ></i>
            <span :title="node.label">{{ node.label }}</span>

            <span v-if="isShow && nodeleave<maxleave-1 && data.id === menuedown? true:false">
              <span
                v-for="(item,key) in btnlist"
                :key="key"
                class="operationButton"
                @click="btnclick(item.type,node, data)"
              >{{ item.icon }}</span>
            </span>
            <span v-else-if="isShow && nodeleave<maxleave && data.id === menuedown? true:false">
              <span
                v-for="(item,key) in btnlist.filter(e => e.type !== 'append')"
                :key="key"
                class="operationButton"
                @click="btnclick(item.type,node, data)"
              >{{ item.icon }}</span>
            </span>
          </span>
        </el-tree>
      </el-collapse-item>
    </el-collapse>
    <!-- <div slot="header" class="clearfix tree-hd">
        <div style="margin:-18px -20px; padding:10px 20px;border-left: 4px solid #4a8df0;">
          <span>{{treeTitle}}</span>
        </div>
    </div>-->
    <!-- </el-card> -->
  </div>
</template>

<script>
let id = 1000;
import axios from "axios";
import tree from "./trees";
export default {
  props: {
    data: {
      type: Array
    },
    props: {
      id: "id",
      label: "label",
      children: "children",
      isLeaf: "leaf"
    },
    treeTitle: String,
    showcheckbox: {
      type: Boolean,
      default: false
    },
    maxleave: {
      type: Number,
      default: 5
    },
    showfilter: Boolean,
    indet: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      id: 1000,
      showData: [],
      tree: tree,
      deekeys: [],
      deckeys: [],
      filterText: "",
      showfilters: Boolean,
      isShow: false,
      clientX: "0px",
      clientY: "0px",
      activename: "1",
      menuedown: "",
      nodeleave: 0,
      btnlist: [
        {
          type: "append",
          icon: "\ue62b"
        },
        {
          type: "remove",
          icon: "\ue630"
        },
        {
          type: "edit",
          icon: "\ue655"
        }
      ]
    };
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    }
  },
  created() {
    console.log(this.showcheckbox);
    this.showfilters = this.showfilter;
  },
  mounted() {
    this.deekeys = [ 2 ];
    this.deckeys = [ 3 ];
    this.showData = this.tree.data;
    console.log(this.showData);
  },
  methods: {
    btnclick(type, node, data) {
      switch (type) {
        case "append":
          this.append(data);
          break;
        case "remove":
          this.remove(node, data);
          break;
        case "edit":
          this.edit(node, data);
          break;
      }
    },
    edit(node, data) {
      this.$toastmessage({
        digital: {
          clientX: this.clientX,
          clientY: this.clientY,
          type: 'Inputer'
        },
        methods: {
          success: res => {
            node.data.label = res.formInline.poiont;
          }
        }
      });
    },
    nestingLevel(node) {
      if (node.parent) {
        this.nodeleave += 1;
        this.nestingLevel(node.parent);
      }
      return this.nodeleave;
    },
    gettree() {
      axios
        .get("/users")
        .then(res => res.data)
        .then(users => console.log(users));
    },
    getIcon(node) {
      // return node.childNodes.length>0? node.expanded? 'openfile':'closefile':'file'
      return node.childNodes.length > 0
        ? node.expanded
          ? "el-icon-menuswenjian-dakai"
          : "el-icon-menuswenjianguanbi"
        : "el-icon-menuswenjian";
    },
    loadNode(node, resolve) {
      //   console.log(node)
      if (node.level === 0) {
        resolve(node.childNodes);
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    append(data) {
      this.$toastmessage({
        digital: {
          clientX: this.clientX,
          clientY: this.clientY,
          type: 'Inputer'
        },
        methods: {
          success: res => {
            const newChild = { id: this.id++, label: res.formInline.poiont, children: [] };
            if (!data.children) {
              this.$set(data, "children", []);
            }
            data.children.push(newChild);
          }
        }
      });
    },
    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    },
    locationCopy(clientX, clientY) {
      this.clientX = clientX;
      this.clientY = clientY;
    },
    menuShow(event, data, node, nodeself) {
      let { clientX, clientY } = event;
      this.locationCopy(clientX, clientY);
      this.nodeleave = 0;
      this.nestingLevel(node);
      this.menuedown = data.id;
      this.isShow = true;
    },
    nodeclick() {
      this.isShow = false;
    }
  }
};
</script>

<style lang='scss' scoped>
ul,
li {
  list-style: none;
  padding: 0;
}
li {
  line-height: 30px;
  font-size: 12px;
  font-weight: bold;
}
li:hover {
  background: #080367;
  transition: 0.1s;
  color: white;
}
.sir-tree {
  user-select: none;
  border: 1px solid #ebeef5;
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.3s;
  transition: 0.3s;
  border-radius: 4px;
  overflow: hidden;
  border-radius: 8px;
}
.tree-input {
  padding-bottom: 20px;
}
.el-link {
  display: block;
}
.tree-hd {
  font-size: 18px;
}
.list-group {
  z-index: 9999;
  text-align: center;
  position: fixed;
  background: #f1f0f1;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 55px;
}
.icon-class {
  color: #080367;
}
.custom-tree-node {
  font-family: glbfonticon;
}
.operationButton {
  font-size: 15px;
  flex-wrap: nowrap;
}
.myclass {
  font-family: glbfonticon;
}
.myclass >>> .el-collapse-item__header {
  box-sizing: border-box;
  font-family: "montserratr";
  padding-left: 14px;
  background: #080367;
  color: #ffffff;
  font-size: 14px;
  font-weight: 900;
}
.icon-style {
  font-family: "iconfont" !important;
}
.myclass >>> .el-icon-menuswenjian-dakai:before,
.el-icon-menuswenjianguanbi:before,
.el-icon-menuswenjian:before {
  color: #ffc400;
}
.myclass >>> .el-collapse-item__content {
  padding: 10px 5px 25px 10px;
}
.myclass >>> .el-collapse-item__arrow {
  font-weight: bolder;
}
.myclass >>> .el-icon-arrow-right:before {
  content: "\e791";
}
.myclass >>> .el-icon-caret-right:before {
  content: "\e61a";
  font-family: glbfonticon;
}
.myclass >>> .el-tree-node__expand-icon.expanded:before {
  content: "\e64c";
  font-family: glbfonticon;
}
.myclass >>> .el-tree-node__expand-icon.expanded {
  transform: none;
}
/* 树形结构节点添加连线 */
.tree /deep/ .el-tree-node {
  position: relative;
  padding-left: 16px;
}

.tree /deep/ .el-tree-node__children {
  padding-left: 16px;
}

.tree /deep/ .el-tree-node :last-child:before {
  height: 38px;
}

.tree /deep/ .el-tree > .el-tree-node:before {
  border-left: none;
}

.tree-container /deep/ .el-tree > .el-tree-node:after {
  border-top: none;
}

.tree /deep/ .el-tree-node:before {
  content: "";
  left: -4px;
  position: absolute;
  right: auto;
  border-width: 1px;
}

.tree /deep/ .el-tree-node:after {
  content: "";
  left: -4px;
  position: absolute;
  right: auto;
  border-width: 1px;
}
.tree /deep/ .el-tree-node__expand-icon.is-leaf {
  display: none;
}

.tree /deep/ .el-tree-node:before {
  border-left: 1px dashed #b8b9bb;
  bottom: 0px;
  height: 100%;
  top: -26px;
  width: 1px;
}

.tree /deep/ .el-tree-node:after {
  border-top: 1px dashed #b8b9bb;
  height: 20px;
  top: 12px;
  width: 24px;
}
</style>
