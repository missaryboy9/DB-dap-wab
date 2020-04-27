import { post } from '../js/axios'

exports.getnodes = params => post('/user/login', params)

