export default {
  components: {
    totallist: {
      render(h) {
        return (
          <div class="totaliststyle">
            共<span>{this.$parent.totalPages.totalpage}</span>页
            <span>{this.$parent.totalPages.totaldate}条</span>
          </div>
        );
      }
    },
    nationcjecklist: {
      render(h) {
        return (
          <div class="nationcjecklist">
            <span on-click={this.prev}>&#xe621;</span>
            <ul>
              {this.$parent.totalPages.Judge ? (
                <li class="lastliststyle">
                  <span>{this.newsvalue}</span>
                  <div>
                    前往
                    <input
                      type="number"
                      on-keydown={this.importation}
                      class="NUM-INPUT"
                    ></input>
                    页
                  </div>
                </li>
              ) : (
                <li>{this.newsvalue}</li>
              )}
            </ul>
            <span on-click={this.next}>&#xe621;</span>
          </div>
        );
      },
      data() {
        return {
          newsvalue: this.$parent.currentPage
        };
      },
      methods: {
        changevalue(e) {
          this.$emit("changevalue", e);
        },
        prev() {
          if (this.newsvalue === 1) return;
          this.changevalue(--this.newsvalue);
        },
        next() {
          if (this.newsvalue >= this.$parent.totalPages.totalpage) {
            return;
          }
          this.changevalue(++this.newsvalue);
        },
        importation(e) {
          if (e.keyCode === 13) {
            if (e.target.value > this.$parent.totalPages.totalpage) {
              e.target.value = this.$parent.totalPages.totalpage;
            } else if (e.target.value < 1) {
              e.target.value = 1;
            }
            this.newsvalue = parseInt(e.target.value);
            this.changevalue(this.newsvalue);
          }
        }
      }
    },
    Prev: {
      render(h) {
        return (
          <el-button
            type="button"
            class="btn-prev"
            disabled={
              this.$parent.disabled || this.$parent.internalCurrentPage <= 1
            }
            on-click={this.$parent.prev}
          >
            {this.$parent.prevText ? (
              <span>{this.$parent.prevText}</span>
            ) : (
              <span>{this.innnertext}</span>
            )}
          </el-button>
        );
      }
    }
  }
};
