(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f9c4fa1"],{"243c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"play-list"},[s("MusicList",{attrs:{list:t.playlist},on:{select:t.selectItem,del:t.deleteItem}})],1)},n=[],r=(s("a4d3"),s("4de4"),s("4160"),s("a434"),s("e439"),s("dbb4"),s("b64b"),s("159b"),s("2909")),c=s("ade3"),a=s("f704"),l=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={components:{MusicList:a["a"]},computed:u({},Object(l["c"])(["playing","playlist","currentMusic"])),methods:u({selectItem:function(t,e){t.id!==this.currentMusic.id&&(this.setCurrentIndex(e),this.setPlaying(!0))},deleteItem:function(t){var e=Object(r["a"])(this.playlist);e.splice(t,1),this.removePlayListItem({list:e,index:t})}},Object(l["d"])({setPlaying:"SET_PLAYING",setCurrentIndex:"SET_CURRENTINDEX",clearPlaylist:"CLEAR_PLAYLIST"}),{},Object(l["b"])(["removePlayListItem","clearPlayList"]))},f=p,b=(s("87b2"),s("2877")),d=Object(b["a"])(f,i,n,!1,null,null,null);e["default"]=d.exports},"741e":function(t,e,s){"use strict";var i=s("b5d9"),n=s.n(i);n.a},"87b2":function(t,e,s){"use strict";var i=s("cc05"),n=s.n(i);n.a},b5d9:function(t,e,s){},cc05:function(t,e,s){},f704:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==t.list.length?s("div",{staticClass:"musicList"},[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),s("span",{staticClass:"list-singer"},[t._v("歌手")]),1===t.listType?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),s("vue-scroll",{ref:"vs",style:t.height(),attrs:{detectResize:"",ops:t.ops},on:{"handle-scroll":t.handleScroll}},[s("div",{staticClass:"list-content"},t._l(t.list,(function(e,i){return s("div",{key:i,staticClass:"list-item"},[s("span",{staticClass:"list-num"},[t._v(t._s(i+1))]),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(e.name))]),s("div",{staticClass:"list-menu"},[s("icon",{staticClass:"hover",attrs:{type:t.getPlayIconType(e),size:40},on:{click:function(s){return s.stopPropagation(),t.selectItem(e,i,s)}}})],1)]),s("span",{staticClass:"list-singer"},[t._v(" "+t._s(e.singer)+" ")]),1===t.listType?s("span",{staticClass:"list-time"},[s("span",{ref:"time",refInFor:!0},[t._v(t._s(t.time(e.duration)))]),s("i",{staticClass:"iconfont icon-delete-mini hover",on:{click:function(e){return t.delectItem(i)}}})]):s("span",{staticClass:"list-album"},[t._v(" "+t._s(e.album)+" ")])])})),0)])],1):t._e()},n=[],r=(s("a4d3"),s("4de4"),s("4160"),s("a9e3"),s("e439"),s("dbb4"),s("b64b"),s("e25e"),s("159b"),s("ade3")),c=s("2f62");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var o={data:function(){return{ops:{bar:{keepShow:!0,background:"rgb(168, 172, 171)",minSize:.1,disable:!1},rail:{opacity:.3,background:"rgb(0, 0, 0)"}}}},computed:l({},Object(c["c"])(["playing","currentMusic"])),props:{isShow:{type:Boolean,default:!1},list:{type:Array,default:function(){return[]}},lockUp:{type:Boolean,default:!1},listType:{type:Number,default:1},Height:{type:Number,default:0},scrollTo:{type:Boolean,default:!1}},watch:{list:function(t){t&&(this.ops.bar.keepShow=!0)},lockUp:function(t){t||(this.ops.bar.keepShow=!0)},scrollTo:function(t){t&&this.$refs["vs"].scrollTo({y:0})}},methods:l({handleScroll:function(t,e,s){this.lockUp&&t.process>.95&&(this.ops.bar.keepShow=!1,this.$emit("pullUpLoad"),console.log(t.scrollTop))},height:function(){return"height: calc(100% - 50px - ".concat(this.Height,"px)")},time:function(t){var e=parseInt(t/60),s=parseInt(t-60*e);e=e<10?"0"+e:e+"",s=s<10?"0"+s:s+"";var i=e+":"+s;return i},selectItem:function(t,e,s){this.currentMusic.id&&t.id===this.currentMusic.id?this.setPlaying(!this.playing):this.$emit("select",t,e)},delectItem:function(t){this.$emit("del",t)},getPlayIconType:function(t){var e=t.id,s=this.playing,i=this.currentMusic.id;return s&&i===e?"pause-mini":"play-mini"}},Object(c["d"])({setPlaying:"SET_PLAYING"})),mounted:function(){}},u=o,p=(s("741e"),s("2877")),f=Object(p["a"])(u,i,n,!1,null,"e3c5f194",null);e["a"]=f.exports}}]);
//# sourceMappingURL=chunk-2f9c4fa1.5263c92a.js.map