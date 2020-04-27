import inputer from './Modular/inputer'
import application from './Modular/newApplication'
let a = [inputer, application]
a.map(e => {
    return {
        name: `${e.name}`,
        component: e
    }
})
export default a
