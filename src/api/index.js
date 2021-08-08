import axios from 'axios';
import { defaultLimit } from '../config.js';
var api = {
    /**
     * 获取音乐列表
     */
    getPlaylist(){
        return axios.get('http://neteasecloudmusicapi.zhaoboy.com/playlist/detail?id=3778678');
    },
    /**
     * 歌单详情
     */
    getDetail(){
        return axios.get('http://neteasecloudmusicapi.zhaoboy.com/toplist/detail');
    },
    /**
     * 推荐歌单
     */
    getTopList(){
        return axios.get('http://neteasecloudmusicapi.zhaoboy.com/personalized');
    },
    /**
     * topList 歌单详情
     */
    getPlaylistDetail(id){
        return axios.get(`http://neteasecloudmusicapi.zhaoboy.com/playlist/detail?id=${id}`);
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
    // getSearchHot(){
    //     return axios.get('/api/meituan/header/searchHotWords.json', {
    //         params: {
    //             appkey: 'yinshan_1559989301908'
    //         }
    //     })
    // },
    getMusicComment(id, page, limit = defaultLimit){
        return axios.get('https://api.mtnhao.com/comment/music', {
            params: {
                offset: page * limit,
                limit: limit,
                id
            }
        })
    },
    getBuffer(){
        return axios.get('/api/song/media/outer/url?id=536096151.mp3', {
            
            responseType: 'arraybuffer'
            
        })
    }
}


export default api;