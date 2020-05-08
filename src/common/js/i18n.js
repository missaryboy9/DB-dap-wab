
import store from '@/store'
import langs from '@/i18n/langs'
import { get, put } from './store'
import { getremoteLanguage } from '@/common/api/remoteLanguage'
/**
 *  String format template
 *  - Inspired:
 *    https://github.com/Matt-Esch/string-template/index.js
 */

// 变量的替换, 在字符串模板中写的站位符 {xxx} 进行替换
const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g

/**
 * template
 *
 * @param {String} string
 * @param {Array} ...args
 * @return {String}
 */

// 模板替换函数
 function template (str, ...args) {
  // 如果第一个参数是一个obj
  if (args.length === 1 && typeof args[0] === 'object') {
    args = args[0]
  } else {
    args = {}
  }

  if (!args || !args.hasOwnProperty) {
    args = {}
  }

  // str.prototype.replace(substr/regexp, newSubStr/function) 第二个参数如果是个函数的话，每次匹配都会调用这个函数
  // match 为匹配的子串
  return str.replace(RE_NARGS, (match, prefix, i, index) => {
    let result

    // match是匹配到的字符串
    // prefix ???
    // i 括号中需要替换的字符换
    // index是偏移量

    // 字符串中如果出现{xxx}不需要被替换。那么应该写成{{xxx}}
    if (str[index - 1] === '{' &&
      str[index + match.length] === '}') {
      return i
    } else {
      // 判断args obj是否包含这个key值
      // 返回替换值, 或者被匹配上的字符串的值
      result = hasOwn(args, i) ? args[i] : match
      if (isNull(result)) {
        return ''
      }

      return result
    }
  })
}
function isNull (val) {
  return val === null || val === undefined
}
function hasOwn(val, i) {
    return !!val.hasOwnProperty(i)
}

    class I18n {
        constructor() {
            this.message = {}
            this.loadstate = {
              loading: false,
              nativeLanguage: '',
              loadmore: {}
            }
        }
        get (key) {
          let msg = this.message[this.local]
          return template(key, msg)
        }
        // synchronousLanguage
        getsynchronousLanguage () {

        }
        // asynchronousLanguage
        getasynchronousLanguage() {
          import(`@/i18n/lang/${this.loadstate.nativeLanguage}.json`).then(res => {
            return res
          })
        }
        // remoteLanguage
        getremoteLanguage(params) {
           getremoteLanguage(params).then(res => {
              this.message = res
              return Promise.resolve(res)
          })
        }
        getnavigator() {
          let lang = navigator.language || navigator.userLanguage
          this.loadstate.nativeLanguage = lang.substr(0, 2)
          return this.loadstate.nativeLanguage
        }
    }
    let i18n = new I18n()
    Object.defineProperty(I18n.prototype, 'local', { // vuex存储当前语言类型
      get() {
        return store.state.local
      },
      set(val) {
        store.state.local = val
      }
    })

    i18n.install = (Vue) => {
      // Vue.mixins({
      //   data() {
      //     return {

      //     }
      //   },
      //   watch: {
      //     local() {

      //     }
      //   },
      //   computed: {
      //   local() {
      //   return store.state.local
      //   }
      //   }
      // })
      Object.defineProperty(Vue.prototype, '$t', {
        get() {
          return (key) => {
              i18n.get(key)
          }
        }
      })
    }

export default i18n
