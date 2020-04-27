import toastmessages from './index.vue'

let toastmess = Object.create({})
toastmess.install = (Vue) => {
    let Toastmes = Vue.extend(toastmessages)
    let toastmessage = (option) => {
        let toastrence = new Toastmes({
            data: option.digital,
            methods: option.methods
        })
        let toastmessageproto = toastrence.$mount().$el
        document.body.appendChild(toastmessageproto)
    }
    Vue.prototype.$toastmessage = (options) => toastmessage(options)
}

export default toastmess

