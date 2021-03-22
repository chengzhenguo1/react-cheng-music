// 格式化热度
export function formatCount(count = 0):string {
    if (count < 0) {
        return `${0}`
    } 
    if (count < 100000) {
        return `${count}`
    } 
    if (count < 100000000) {
        return `${Math.floor(count / 10000)}万`
    }
    return `${Math.floor(count / 100000000)}亿`
}
// 格式化时间
export const formatNum = (num: number | string, n = 2) => {
    let len = num.toString().length
  
    while (len < n) {
      num = `0${num}`
      len += 1
    }
  
    return num
  }

export const formatDatetime = (t?: string | number, detailed?: boolean) => {
    const time = new Date(t || 0)
  
    const year = time.getFullYear()
    const month = formatNum(time.getMonth() + 1)
    const date = formatNum(time.getDate())
    const hours = formatNum(time.getHours())
    const minutes = formatNum(time.getMinutes())
    const seconds = formatNum(time.getSeconds())
  
    return detailed ? `${year}-${month}-${date} ${hours}:${minutes}:${seconds}` : `${year}-${month}-${date}`
  }
