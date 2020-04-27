import { post, get } from '../js/axios';
// 添加字典类型
export const addDictType = params => post(`/dict/type/add.json`, params);
// 更新字典类型
export const updateDictType = params => post(`/dict/type/update.json`, params);
// 查询字典类型列表
export const fetchDictTypes = params => get(`/dict/type/fetch.json`, params);
// 删除字典类型
export const deleteDictType = params => post(`/dict/type/delete.json`, params);
// 获取当前语言字典项
export const getDictItems = params => get(`/dict/item/get.json`, params);

// 添加字典项
export const addDictItem = params => post(`/dict/item/add.json`, params);
// 更新字典项
export const updateDictItem = params => post(`/dict/item/update.json`, params);
// 查询字典项列表
export const fetchDictItems = params => get(`/dict/item/fetch.json`, params);
// 删除字典项
export const deleteDictItem = params => post(`/dict/item/delete.json`, params);
