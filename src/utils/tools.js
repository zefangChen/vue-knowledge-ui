/**
 * 对象数组去重
 * @param list
 * @param key 对象的唯一值，如 'id'
 * @returns {Array}  返回去重后的数组
 */
export const removeRepetition = (list, key) => {
    let newArr = [];
    list.forEach(item=>{
        let arr = newArr.filter(i => i[key] === item[key])
        if(!arr.length) {
            newArr.push(item)
        }
    })
    return newArr
}
