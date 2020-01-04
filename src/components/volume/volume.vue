<!--音量控制组件 -->
<template>
    <div class="volume">
        <icon
            class="pointer volume-icon"
            :type="getVolumeIconType()"
            :size="30"
            @click="handleToggleVolume">
        </icon>
        <div class="volume-progress-wrapper">
            <MProgress
                :percent="volumePropgress"
                @percentChange="handleVolumeChange">
            </MProgress>
        </div>
    </div>
</template>
<script>
import MProgress from '../../base/progress/mprogress.vue';
export default {
    components: {
        MProgress
    },
    props: {
        volume: {
            type: Number,
            required: true
        }
    },
    computed: {
        volumePropgress(){
            return this.volume;
        },
        isMute: {
            get(){
                return this.volumeProgress === 0;
            },
            set(newMute){
                const volume = newMute ? 0 : this.lastVolume;
                if (volume) {
                    this.lastVolume = this.volumeProgress
                }
                this.handleVolumeChange(volume);
            }
        }
    },
    methods: {
        getVolumeIconType(){
            return this.isMute ? 'volume-off' : 'volume';
        },
        handleToggleVolume(){
            this.isMute = !this.isMute;
        },
        handleVolumeChange(){
            this.$emit('volumeChange', percent)
        }
    },
}
</script>
<style lang="less">
    .volume {
        display: flex;
        align-items: center;
        width: 150px;
        &-icon {
            margin-right: 5px;
            color: #fff;
        }
        &-progress-wrapper {
            flex: 1;
        }
        @media (max-width: 768px) {
            top: 2px;
            width: 36px;
        }
    }
</style>