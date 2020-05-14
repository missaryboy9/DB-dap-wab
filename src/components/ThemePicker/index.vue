<template>
  <el-dropdown-menu slot="dropdown">
    <ul class="themedropdown">
      <li
        v-for="(item, key) in themelist"
        :key="key"
        :style="{
                  backgroundColor: item.checked === true ? '#dcdcdc' : ''
                }"
        @click="checkstyle(item)"
      >
        <img style="width:30px;height:30px" :src="require('@/assets/' + item.src)" alt />
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </el-dropdown-menu>
</template>

<script>
const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color

export default {
  data() {
    return {
      chalk: "", // content of theme-chalk css
      theme: "",
      themelist: [
        {
          src: "theme.png",
          name: "黑色玄幻主题",
          checked: false,
          data: {
            titlestyle: {
              backstyle: "#ccc"
            },
            primary: {
              color: "#262729"
            }
          }
        },
        {
          src: "theme.png",
          name: "绿色护眼主题",
          checked: false,
          data: {
            primary: {
              color: "#67c23a"
            }
          }
        },
        {
          src: "theme.png",
          name: "蓝色清爽主题",
          checked: false,
          data: {
            primary: {
              color: "#1890ff"
            }
          }
        }
      ]
    };
  },
  computed: {
    defaultTheme() {
      return this.$store.state.settings.theme;
    }
  },
  watch: {
    defaultTheme: {
      handler: function(val, oldVal) {
        this.theme = val;
      },
      immediate: true
    },
    async theme(val) {
      const oldVal = this.chalk ? this.theme : ORIGINAL_THEME;
      if (typeof val !== "string") return;
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      // console.log(themeCluster, originalCluster);

      const $message = this.$message({
        message: "  Compiling the theme",
        customClass: "theme-message",
        type: "success",
        duration: 0,
        iconClass: "el-icon-loading"
      });

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );

          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
        await this.getCSSString(url, "chalk");
      }

      const chalkHandler = getHandler("chalk", "chalk-style");

      chalkHandler();

      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter(style => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach(style => {
        const { innerText } = style;
        if (typeof innerText !== "string") return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });

      this.$emit("change", val);

      $message.close();
    }
  },

  methods: {
    checkstyle(e) {
      this.$store.dispatch("settings/changeSetting", {
        key: "theme",
        value: e.data.primary.color
      });
    },
    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },

    getCSSString(url, variable) {
      return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
            resolve();
          }
        };
        xhr.open("GET", url);
        xhr.send();
      });
    },

    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    }
  }
};
</script>

<style lang="scss" scoped>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
.themedropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  :hover {
    background-color: #dcdcdc;
  }
  > :last-child {
    margin-bottom: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    > :first-child {
      margin-right: 5px;
    }
    p {
      margin: 0;
      font-size: 10px;
    }
  }
}
</style>
