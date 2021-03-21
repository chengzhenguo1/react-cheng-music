// 格式化热度
function formatCount(count = 0):string {
    if (count < 0) return `${0}`
    if (count < 100000) {
        return `${count}`
    } 
    if (count < 100000000) {
        return `${Math.floor(count / 10000)}万`
    }
    return `${Math.floor(count / 100000000)}亿`
}

export default formatCount
