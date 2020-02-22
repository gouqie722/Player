import axios from 'axios';
import { defaultLimit } from '../config.js';
var api = {
    /**
     * 获取音乐列表
     */
    getPlaylist(idx){
        return axios.get('https://api.mtnhao.com/top/list', {
            params: {
                idx
            }
        });
    },
    /**
     * 歌单详情
     */
    getDetail(){
        return axios.get('https://api.mtnhao.com/toplist/detail');
    },
    /**
     * 推荐歌单
     */
    getTopList(){
        return axios.get('https://api.mtnhao.com/personalized');
    },
    /**
     * topList 歌单详情
     */
    getPlaylistDetail(id){
        return axios.get(`http://api.mtnhao.com/playlist/detail?id=${id}`);
    },
    /**
     * 获取热门
     */
    searchHot(){
        return axios.get('https://api.mtnhao.com/search/hot');
    },
    /**
     * 搜索
     */
    search(keywords, page, limit = defaultLimit){
        return axios.get(`https://api.mtnhao.com/search`, {
            params: {
                offset: page * limit,
                limit: limit,
                keywords
            }
        })
    },
    /**
     * 
     * @param {*} id 根据id获取歌词 
     */
    getLyric(id){
        return axios.get(`https://api.mtnhao.com/lyric?id=${id}`);
    },
    getMusicDetail(ids){
        return axios.get('https://api.mtnhao.com/song/detail', {
            params: {
                ids
            }
        })
    },
    getSearchHot(){
        return axios.get('/api/meituan/header/searchHotWords.json', {
            params: {
                appkey: 'yinshan_1559989301908'
            }
        })
    }
}


export default api;