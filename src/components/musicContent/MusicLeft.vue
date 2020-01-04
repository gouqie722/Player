<template>
    <div class="music-left">
        <MusicBtn></MusicBtn>
        <keep-alive>
            <router-view class="music-list" v-if="$route.meta.keepAlive"></router-view>    
        </keep-alive>
            <router-view class="music-list" v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>
<script>
import MusicBtn from '../music-btn/Music-btn.vue';
export default {
    components: {
        MusicBtn,
    }
}
</script>
<style lang="less">
    .music-left{
        flex: 1;
        height: 100%;
        overflow: hidden;
        .music-list{
            width: 100%;
            height: calc(100% - 60px);
        }
    }
</style>