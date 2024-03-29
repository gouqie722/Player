export const defaultSheetId = 1;//默认歌单

export const defaultLimit = 30;//默认分页数量

// 默认背景图
const BG_ARR = [
    'https://netease-music.fe-mm.com/img/bg-1.cf743e29.jpg',
    // 'https://img95.699pic.com/photo/40008/1514.jpg_wh860.jpg'
  ]
export const defaultBG = BG_ARR[Math.floor(Math.random() * BG_ARR.length)]

export const defaultVolume = 0.2;//默认音量

/**
 * 播放模式
 * listLoop: 列表循环
 * order: 顺序
 * loop: 单曲循环
 * random: 随机
 */
export const playMode = {
  listLoop: 0,
  order: 1,
  loop: 2,
  random: 3
}