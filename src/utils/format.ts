import dayjs from 'dayjs'
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

/* 解析艺人名称 */
export function fommatArtist(artist = []): string {
   return artist.map((item:any) => item.name).join(' / ')
}

export function formatTimer(time:number): string {
  return `${dayjs.unix(time).format('mm:ss')}`
}
