(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-629c5aab"],{"4b17":function(t,e,s){},"842d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[s("vue-scroll",{attrs:{ops:t.ops}},[s("div",{staticClass:"comment-list"},[s("div",{staticClass:"comment-title"},[t._v("精彩评论")]),s("ul",t._l(t.hotComments,(function(e,a){return s("li",{key:a,staticClass:"comment-item"},[s("a",{attrs:{href:"http://music.163.com/#/user/home?id="+e.user.userId}},[s("img",{staticClass:"comment-item-pic",attrs:{src:e.user.avatarUrl,alt:""}}),s("h2",{staticClass:"comment-item-title"},[t._v(t._s(e.user.nickname))])]),s("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),s("div",{staticClass:"comment-item-opt"},[s("span",{staticClass:"comment-item-date"},[t._v(t._s(t._f("format")(e.time)))]),s("span",{staticClass:"comment-opt-liked"},[s("Icon",{attrs:{type:"good"}}),t._v(" "+t._s(e.likedCount)+" ")],1)])])})),0),s("div",{staticClass:"comment-title"},[t._v("最新评论 ("+t._s(t.total)+")")]),s("ul",t._l(t.commentList,(function(e){return s("li",{key:e.commentId,staticClass:"comment-item"},[s("a",{staticClass:"comment-item-pic",attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[s("img",{staticClass:"cover-img",attrs:{src:e.user.avatarUrl+"?param=50y50"}})]),s("h2",{staticClass:"comment-item-title"},[s("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))])]),s("p",{staticClass:"comment-item-disc"},[t._v(t._s(e.content))]),t._l(e.beReplied,(function(e){return s("div",{key:e.user.userId,staticClass:"comment-item-replied"},[s("a",{attrs:{target:"_blank",href:"http://music.163.com/#/user/home?id="+e.user.userId}},[t._v(t._s(e.user.nickname))]),t._v(" ："+t._s(e.content)+" ")])})),s("div",{staticClass:"comment-item-opt"},[s("span",{staticClass:"comment-item-date"},[t._v(t._s(t._f("format")(e.time)))]),e.likedCount>0?s("span",{staticClass:"comment-opt-liked"},[s("Icon",{attrs:{type:"good"}}),t._v(" "+t._s(e.likedCount)+" ")],1):t._e()])],2)})),0)])])],1)},n=[],o=(s("99af"),s("0d03"),s("365c")),c=s("0a86"),m={components:{Icon:c["a"]},data:function(){return{ops:{bar:{keepShow:!0,background:"rgb(168, 172, 171)",minSize:.1},rail:{opacity:.3,background:"rgb(0, 0, 0)"}},commentId:null,page:0,hotComments:[],commentList:[],total:null}},filters:{format:function(t){var e,s=new Date(t),a=(new Date).getTime()-t,n=new Date,o={year:s.getFullYear(),month:s.getMonth()+1,date:s.getDate(),hours:s.getHours(),minutes:s.getMinutes()};return e=n.getDate()===o.date&&a<6e4?"刚刚":n.getDate()===s.getDate()&&a>6e4&&a<36e5?"".concat(Math.floor(a/6e4),"分钟前"):n.getDate()===o.date&&a<864e5&&a>36e5?"".concat(o.hours,": ").concat(o.minutes):n.getDate()!==o.date&&a<864e5?"昨天".concat(addZero(o.hours),":").concat(addZero(o.minutes)):n.getFullYear()===o.year?"".concat(o.month+1,"月").concat(o.date,"日"):"".concat(o.year,"年").concat(o.month+1,"月").concat(o.date,"日"),e}},mounted:function(){var t=this;o["a"].getMusicComment(this.$route.params.id,this.page).then((function(e){200==e.status&&(t.hotComments=e.data.hotComments,t.commentList=e.data.comments,t.total=e.data.total)}),(function(t){console.log(t)}))},methods:{}},i=m,r=(s("db28"),s("2877")),l=Object(r["a"])(i,a,n,!1,null,null,null);e["default"]=l.exports},db28:function(t,e,s){"use strict";var a=s("4b17"),n=s.n(a);n.a}}]);
//# sourceMappingURL=chunk-629c5aab.95c43411.js.map