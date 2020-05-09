
import Mock from 'mockjs'
let template = {
  "list|20": [
    {
      date: '@increment()',
      name: '@tld()',
      address: '@protocol()',
      businessName: '@guid()'
    }
  ]
}
let data = Mock.mock(template).list
export default data
// export default [
//   {
//     date: '内置1',
//     name: '认证类',
//     address: '非空校验',
//     businessName: 'PLUGIN_CHECK'
//   },
//   {
//     date: '内置2',
//     name: '认证类',
//     address: '非空校验',
//     businessName: 'PLUGIN_CHECK'
//   },
//   {
//     date: '内置3',
//     name: '认证类',
//     address: '非空校验',
//     businessName: 'PLUGIN_CHECK'
//   },
//   {
//     date: '内置4',
//     name: '认证类',
//     address: '非空校验',
//     businessName: 'PLUGIN_CHECK'
//   }
// ];
