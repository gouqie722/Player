<template>
    <div class="buffer" ref="wrap">
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['audioEle'])
    },
    methods: {
        // init(){
        //     // this.audioEle.crossOrigin = "anonymous";
        //     const myCanvas = this.$refs.canvas;
        //     const canvasCtx = myCanvas.getContext('2d')
        //     const AudioContext = window.AudioContext || window.webkitAudioContext;
        //     const audioContext = new AudioContext(); 
        //     const mediaElementSource = audioContext.createMediaElementSource(this.audioEle);
        //     console.log(mediaElementSource);
        //     const analyser = audioContext.createAnalyser();
        //     mediaElementSource.connect(analyser); // 连接到音频源
        //     analyser.fftSize = 256;

        //     const bufferLength = analyser.frequencyBinCount // 返回的是 analyser的fftsize的一半
        //     const dataArray = new Uint8Array(bufferLength);

        //     canvasCtx.clearRect(0, 0, myCanvas.clientWidth, myCanvas.clientHeight);

        //     var drawVisual;
        //     function draw(){
        //         drawVisual = requestAnimationFrame(draw);

        //         analyser.getByteFrequencyData(dataArray);
        //         canvasCtx.fillStyle = 'rgb(0, 0, 0)';
        //         canvasCtx.fillRect(0, 0, myCanvas.clientWidth, myCanvas.clientHeight);
        //         var barWidth = (myCanvas.clientWidth / bufferLength) * 2.5;
        //         var barHeight;
        //         var x = 0;
        //         for(var i = 0; i < bufferLength; i++) {
        //             barHeight = dataArray[i]/2;
        //             canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        //             canvasCtx.fillRect(x,myCanvas.clientHeight-barHeight/2,barWidth,barHeight);
        //             x += barWidth + 1;
        //         }
        //     }

        //     draw();
        // }
    },
    mounted() {
        // this.init();
        // api.getBuffer().then(res => {
        //     console.log(res.data);
        //     for (const key in res.data) {
        //         console.log(key);
        //     }
        //     }, err => {
        //     console.log(err);
        // })
    },
}
</script>
<style lang="less">
    .buffer{
        canvas{
            width: 100%;
            height: 100%;
        }
    }
</style>