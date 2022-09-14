(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[624],{

/***/ 7039:
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",D={};D[v]=M;var p=function(t){return t instanceof _},S=function t(e,n,r){var i;if(!e)return v;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(v=i),i||!r&&v},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var v=this.$locale().weekStart||0,D=(y<v?y+7:y)-v;return $(r?m-D:m+(6-D),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,v=O.m(this,M);return v=(l={},l[c]=v/12,l[f]=v,l[h]=v/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?v:O.a(v)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),T=_.prototype;return w.prototype=T,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=D[v],w.Ls=D,w.p={},w}));

/***/ }),

/***/ 1014:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,r){var n=t.prototype,s=n.format;r.en.ordinal=function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"},n.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return s.bind(this)(e);var n=this.$utils(),a=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return r.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return r.ordinal(t.week(),"W");case"w":case"ww":return n.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return n.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return n.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return s.bind(this)(a)}}}));

/***/ }),

/***/ 3808:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,r=/\d\d?/,i=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)};var a=function(e){return function(t){this[e]=+t}},f=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||(this.zone={})).offset=function(e){if(!e)return 0;if("Z"===e)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return 0===n?0:"+"===t[0]?-n:n}(e)}],h=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},u=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?"pm":"PM");return n},d={A:[i,function(e){this.afternoon=u(e,!1)}],a:[i,function(e){this.afternoon=u(e,!0)}],S:[/\d/,function(e){this.milliseconds=100*+e}],SS:[n,function(e){this.milliseconds=10*+e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[r,a("seconds")],ss:[r,a("seconds")],m:[r,a("minutes")],mm:[r,a("minutes")],H:[r,a("hours")],h:[r,a("hours")],HH:[r,a("hours")],hh:[r,a("hours")],D:[r,a("day")],DD:[n,a("day")],Do:[i,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,"")===e&&(this.day=r)}],M:[r,a("month")],MM:[n,a("month")],MMM:[i,function(e){var t=h("months"),n=(h("monthsShort")||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw new Error;this.month=n%12||n}],MMMM:[i,function(e){var t=h("months").indexOf(e)+1;if(t<1)throw new Error;this.month=t%12||t}],Y:[/[+-]?\d+/,a("year")],YY:[n,function(e){this.year=s(e)}],YYYY:[/\d{4}/,a("year")],Z:f,ZZ:f};function c(n){var r,i;r=n,i=o&&o.formats;for(var s=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var o=r&&r.toUpperCase();return n||i[r]||e[r]||i[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),a=s.length,f=0;f<a;f+=1){var h=s[f],u=d[h],c=u&&u[0],l=u&&u[1];s[f]=l?{regex:c,parser:l}:h.replace(/^\[|\]$/g,"")}return function(e){for(var t={},n=0,r=0;n<a;n+=1){var i=s[n];if("string"==typeof i)r+=i.length;else{var o=i.regex,f=i.parser,h=e.slice(r),u=o.exec(h)[0];f.call(t,u),e=e.replace(u,"")}}return function(e){var t=e.afternoon;if(void 0!==t){var n=e.hours;t?n<12&&(e.hours+=12):12===n&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,s=e.args;this.$u=r;var a=s[1];if("string"==typeof a){var f=!0===s[2],h=!0===s[3],u=f||h,d=s[2];h&&(d=s[2]),o=this.$locale(),!f&&d&&(o=n.Ls[d]),this.$d=function(e,t,n){try{if(["x","X"].indexOf(t)>-1)return new Date(("X"===t?1e3:1)*e);var r=c(t)(e),i=r.year,o=r.month,s=r.day,a=r.hours,f=r.minutes,h=r.seconds,u=r.milliseconds,d=r.zone,l=new Date,m=s||(i||o?1:l.getDate()),M=i||l.getFullYear(),Y=0;i&&!o||(Y=o>0?o-1:l.getMonth());var p=a||0,v=f||0,D=h||0,g=u||0;return d?new Date(Date.UTC(M,Y,m,p,v,D,g+60*d.offset*1e3)):n?new Date(Date.UTC(M,Y,m,p,v,D,g)):new Date(M,Y,m,p,v,D,g)}catch(e){return new Date("")}}(t,a,r),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(a)&&(this.$d=new Date("")),o={}}else if(a instanceof Array)for(var l=a.length,m=1;m<=l;m+=1){s[1]=a[m-1];var M=n.apply(this,s);if(M.isValid()){this.$d=M.$d,this.$L=M.$L,this.init();break}m===l&&(this.$d=new Date(""))}else i.call(this,e)}}}));

/***/ }),

/***/ 4628:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t,n){t.prototype.dayOfYear=function(e){var t=Math.round((n(this).startOf("day")-n(this).startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"day")}}}));

/***/ }),

/***/ 3204:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)}}}));

/***/ }),

/***/ 3360:
/***/ (function(module) {

!function(e,i){ true?module.exports=i():0}(this,(function(){"use strict";return function(e,i){i.prototype.isSameOrBefore=function(e,i){return this.isSame(e,i)||this.isBefore(e,i)}}}));

/***/ }),

/***/ 9523:
/***/ (function(module) {

!function(n,e){ true?module.exports=e():0}(this,(function(){"use strict";return function(n,e,t){var r=e.prototype,o=function(n){return n&&(n.indexOf?n:n.s)},u=function(n,e,t,r,u){var i=n.name?n:n.$locale(),a=o(i[e]),s=o(i[t]),f=a||s.map((function(n){return n.slice(0,r)}));if(!u)return f;var d=i.weekStart;return f.map((function(n,e){return f[(e+(d||0))%7]}))},i=function(){return t.Ls[t.locale()]},a=function(n,e){return n.formats[e]||function(n){return n.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(n,e,t){return e||t.slice(1)}))}(n.formats[e.toUpperCase()])},s=function(){var n=this;return{months:function(e){return e?e.format("MMMM"):u(n,"months")},monthsShort:function(e){return e?e.format("MMM"):u(n,"monthsShort","months",3)},firstDayOfWeek:function(){return n.$locale().weekStart||0},weekdays:function(e){return e?e.format("dddd"):u(n,"weekdays")},weekdaysMin:function(e){return e?e.format("dd"):u(n,"weekdaysMin","weekdays",2)},weekdaysShort:function(e){return e?e.format("ddd"):u(n,"weekdaysShort","weekdays",3)},longDateFormat:function(e){return a(n.$locale(),e)},meridiem:this.$locale().meridiem,ordinal:this.$locale().ordinal}};r.localeData=function(){return s.bind(this)()},t.localeData=function(){var n=i();return{firstDayOfWeek:function(){return n.weekStart||0},weekdays:function(){return t.weekdays()},weekdaysShort:function(){return t.weekdaysShort()},weekdaysMin:function(){return t.weekdaysMin()},months:function(){return t.months()},monthsShort:function(){return t.monthsShort()},longDateFormat:function(e){return a(n,e)},meridiem:n.meridiem,ordinal:n.ordinal}},t.months=function(){return u(i(),"months")},t.monthsShort=function(){return u(i(),"monthsShort","months",3)},t.weekdays=function(n){return u(i(),"weekdays",null,null,n)},t.weekdaysShort=function(n){return u(i(),"weekdaysShort","weekdays",3,n)},t.weekdaysMin=function(n){return u(i(),"weekdaysMin","weekdays",2,n)}}}));

/***/ }),

/***/ 5776:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";var e="week",t="year";return function(i,n,r){var f=n.prototype;f.week=function(i){if(void 0===i&&(i=null),null!==i)return this.add(7*(i-this.week()),"day");var n=this.$locale().yearStart||1;if(11===this.month()&&this.date()>25){var f=r(this).startOf(t).add(1,t).date(n),s=r(this).endOf(e);if(f.isBefore(s))return 1}var a=r(this).startOf(t).date(n).startOf(e).subtract(1,"millisecond"),o=this.diff(a,e,!0);return o<0?r(this).startOf("week").week():Math.ceil(o)},f.weeks=function(e){return void 0===e&&(e=null),this.week(e)}}}));

/***/ }),

/***/ 7850:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,(function(){"use strict";return function(e,t){t.prototype.weekYear=function(){var e=this.month(),t=this.week(),n=this.year();return 1===t&&11===e?n+1:0===e&&t>=52?n-1:n}}}));

/***/ }),

/***/ 6154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "t$": () => (/* reexport */ LoFormList),
  "Zt": () => (/* reexport */ LoSwiper)
});

// UNUSED EXPORTS: FORM_CHANGE_EVENT, FORM_TYPE, LoTableEnhance, defaultValue, fromNormalList, loFormProps, swiperProps

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../vue-components/dist/swiper/swiper2.js
const swiperProps = {
  direction: {
    type: String,
    default: "vertical"
  }
};



;// CONCATENATED MODULE: ../vue-components/dist/swiper/swiper.js



var swiper_script = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "swiper",
  props: swiperProps,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", null, "swiper:" + (0,external_Vue_.toDisplayString)(_ctx.direction), 1);
    };
  }
});

swiper_script.__file = "src/swiper/swiper.vue";



;// CONCATENATED MODULE: ../vue-components/dist/swiper/index.js




const LoSwiper = swiper_script;



;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/constants/date.mjs
const date_datePickTypes = [
  "year",
  "month",
  "date",
  "dates",
  "week",
  "datetime",
  "datetimerange",
  "daterange",
  "monthrange"
];
const WEEK_DAYS = (/* unused pure expression or super */ null && ([
  "sun",
  "mon",
  "tue",
  "wed",
  "thu",
  "fri",
  "sat"
]));


//# sourceMappingURL=date.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/fromPairs.js
var fromPairs = __webpack_require__(9808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(7084);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs






const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => (0,shared_esm_bundler/* isObject */.Kn)(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!(0,shared_esm_bundler/* isObject */.Kn)(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if ((0,shared_esm_bundler/* hasOwn */.RI)(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      (0,external_Vue_.warn)(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if ((0,shared_esm_bundler/* hasOwn */.RI)(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => (0,fromPairs/* default */.Z)(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));


//# sourceMappingURL=runtime.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/constants/size.mjs
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};


//# sourceMappingURL=size.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/vue-demi@0.13.6_vue@3.2.37/node_modules/vue-demi/lib/index.mjs


var lib_isVue2 = false
var lib_isVue3 = true
var Vue2 = (/* unused pure expression or super */ null && (undefined))

function install() {}

function lib_set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function lib_del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}




;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vueuse+shared@8.9.4_vue@3.2.37/node_modules/@vueuse/shared/index.mjs


var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return readonly(result);
}

var _a;
const shared_isClient = typeof window !== "undefined";
const shared_isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const shared_toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const shared_isFunction = (val) => typeof val === "function";
const shared_isNumber = (val) => typeof val === "number";
const shared_isString = (val) => typeof val === "string";
const shared_isObject = (val) => shared_toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && shared_toString.call(val) === "[object Window]";
const now = () => Date.now();
const shared_timestamp = () => +Date.now();
const shared_clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const shared_noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const shared_isIOS = shared_isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function shared_createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const shared_bypassFilter = (invoke) => {
  return invoke();
};
function shared_debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = (0,external_Vue_.unref)(ms);
    const maxDuration = (0,external_Vue_.unref)(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function shared_throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = unref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
  };
  return filter;
}
function shared_pausableFilter(extendFilter = shared_bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function __onlyVue3(name = "this function") {
  if (isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}
const directiveHooks = {
  mounted: lib_isVue3 ? "mounted" : "inserted",
  updated: lib_isVue3 ? "updated" : "componentUpdated",
  unmounted: lib_isVue3 ? "unmounted" : "unbind"
};

function shared_promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function shared_identity(arg) {
  return arg;
}
function shared_createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function shared_containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function shared_increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function shared_objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get = shared_isFunction(fn) ? fn : fn.get;
  const set = shared_isFunction(fn) ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}

function shared_createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = effectScope(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function createInjectionState(composable) {
  const key = Symbol("InjectionState");
  const useProvidingState = (...args) => {
    provide(key, composable(...args));
  };
  const useInjectedState = () => inject(key);
  return [useProvidingState, useInjectedState];
}

function shared_tryOnScopeDispose(fn) {
  if ((0,external_Vue_.getCurrentScope)()) {
    (0,external_Vue_.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    shared_tryOnScopeDispose(dispose);
    return state;
  };
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function get(obj, key) {
  if (key == null)
    return unref(obj);
  return unref(obj)[key];
}

function isDefined(v) {
  return unref(v) != null;
}

function logicAnd(...args) {
  return computed(() => args.every((i) => unref(i)));
}

function logicNot(v) {
  return computed(() => !unref(v));
}

function logicOr(...args) {
  return computed(() => args.some((i) => unref(i)));
}

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$8({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function reactify(fn) {
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unref(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj)) : value
    ];
  }));
}

function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}

function reactiveComputed(fn) {
  return toReactive(computed(fn));
}

function reactiveOmit(obj, ...keys) {
  const flatKeys = keys.flat();
  return reactiveComputed(() => Object.fromEntries(Object.entries(toRefs$1(obj)).filter((e) => !flatKeys.includes(e[0]))));
}

function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  return reactive(Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, unref(afterMs));
    shared_tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function shared_useDebounceFn(fn, ms = 200, options = {}) {
  return shared_createFilterWrapper(shared_debounceFilter(ms, options), fn);
}

function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = (0,external_Vue_.ref)(value.value);
  const updater = shared_useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  (0,external_Vue_.watch)(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function shared_useThrottleFn(fn, ms = 200, trailing = true, leading = true) {
  return shared_createFilterWrapper(shared_throttleFilter(ms, trailing, leading), fn);
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = ref(value.value);
  const updater = shared_useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  watch(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}
const controlledRef = (/* unused pure expression or super */ null && (refWithControl));

function resolveRef(r) {
  return typeof r === "function" ? computed(r) : ref(r);
}

function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}

function shared_set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (isVue2) {
      set$1(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function shared_syncRef(left, right, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both"
  } = options;
  let stop1, stop2;
  if (direction === "both" || direction === "ltr") {
    stop1 = watch(left, (newValue) => right.value = newValue, { flush, deep, immediate });
  }
  if (direction === "both" || direction === "rtl") {
    stop2 = watch(right, (newValue) => left.value = newValue, { flush, deep, immediate });
  }
  return () => {
    stop1 == null ? void 0 : stop1();
    stop2 == null ? void 0 : stop2();
  };
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return watch(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

var __defProp$7 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function shared_toRefs(objectRef) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          const newObject = __spreadProps$5(__spreadValues$7({}, objectRef.value), { [key]: v });
          Object.setPrototypeOf(newObject, objectRef.value);
          objectRef.value = newObject;
        }
      }
    }));
  }
  return result;
}

function shared_tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}

function shared_tryOnMounted(fn, sync = true) {
  if (getCurrentInstance())
    onMounted(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function shared_tryOnUnmounted(fn) {
  if (getCurrentInstance())
    onUnmounted(fn);
}

function shared_until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(r, (v) => {
        if (condition(v) !== isNot) {
          stop == null ? void 0 : stop();
          resolve(v);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(shared_promiseTimeout(timeout, throwOnTimeout).then(() => unref(r)).finally(() => stop == null ? void 0 : stop()));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch([r, value], ([v1, v2]) => {
        if (isNot !== (v1 === v2)) {
          stop == null ? void 0 : stop();
          resolve(v1);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(shared_promiseTimeout(timeout, throwOnTimeout).then(() => unref(r)).finally(() => {
        stop == null ? void 0 : stop();
        return unref(r);
      }));
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(unref(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(unref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useCounter(initialValue = 0, options = {}) {
  const count = ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const formatDate = (date, formatStr) => {
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const matches = {
    YY: String(years).slice(-2),
    YYYY: years,
    M: month + 1,
    MM: `${month + 1}`.padStart(2, "0"),
    D: String(days),
    DD: `${days}`.padStart(2, "0"),
    H: String(hours),
    HH: `${hours}`.padStart(2, "0"),
    h: `${hours % 12 || 12}`.padStart(1, "0"),
    hh: `${hours % 12 || 12}`.padStart(2, "0"),
    m: String(minutes),
    mm: `${minutes}`.padStart(2, "0"),
    s: String(seconds),
    ss: `${seconds}`.padStart(2, "0"),
    SSS: `${milliseconds}`.padStart(3, "0"),
    d: day
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match]);
};
const normalizeDate = (date) => {
  if (date === null)
    return new Date(NaN);
  if (date === void 0)
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
function useDateFormat(date, formatStr = "HH:mm:ss") {
  return computed(() => formatDate(normalizeDate(unref(date)), unref(formatStr)));
}

function shared_useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (unref(interval) <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, unref(interval));
  }
  if (immediate && shared_isClient)
    resume();
  if (isRef(interval)) {
    const stopWatch = watch(interval, () => {
      if (isActive.value && shared_isClient)
        resume();
    });
    shared_tryOnScopeDispose(stopWatch);
  }
  shared_tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = ref(0);
  const controls = shared_useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$6({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = ref((_a = options.initialValue) != null ? _a : null);
  watch(source, () => ms.value = shared_timestamp(), options);
  return ms;
}

function shared_useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = ref(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, unref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (shared_isClient)
      start();
  }
  shared_tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = shared_useTimeoutFn(shared_noop, interval, options);
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$5({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const innerValue = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      innerValue.value = value;
      return innerValue.value;
    } else {
      innerValue.value = innerValue.value === unref(truthyValue) ? unref(falsyValue) : unref(truthyValue);
      return innerValue.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [innerValue, toggle];
}

function watchArray(source, cb, options) {
  let oldList = (options == null ? void 0 : options.immediate) ? [] : [
    ...source instanceof Function ? source() : Array.isArray(source) ? source : unref(source)
  ];
  return watch(source, (newList, _, onCleanup) => {
    const oldListRemains = new Array(oldList.length);
    const added = [];
    for (const obj of newList) {
      let found = false;
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true;
          found = true;
          break;
        }
      }
      if (!found)
        added.push(obj);
    }
    const removed = oldList.filter((_2, i) => !oldListRemains[i]);
    cb(newList, oldList, added, removed, onCleanup);
    oldList = [...newList];
  }, options);
}

var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(source, shared_createFilterWrapper(eventFilter, cb), watchOptions);
}

var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest$4(_a, [
    "count"
  ]);
  const current = ref(0);
  const stop = shared_watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= unref(count))
      nextTick(() => stop());
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0,
    maxWait = void 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce",
    "maxWait"
  ]);
  return shared_watchWithFilter(source, cb, __spreadProps$4(__spreadValues$4({}, watchOptions), {
    eventFilter: shared_debounceFilter(debounce, { maxWait })
  }));
}

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function shared_watchIgnorable(source, cb, options = {}) {
  const _a = options, {
    eventFilter = shared_bypassFilter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const filteredCb = shared_createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = watch(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = ref(0);
    const syncCounter = ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(watch(source, () => {
      syncCounter.value++;
    }, __spreadProps$3(__spreadValues$3({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(watch(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = shared_pausableFilter(filter);
  const stop = shared_watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchThrottled(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return shared_watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter: shared_throttleFilter(throttle, trailing, leading)
  }));
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function watchTriggerable(source, cb, options = {}) {
  let cleanupFn;
  function onEffect() {
    if (!cleanupFn)
      return;
    const fn = cleanupFn;
    cleanupFn = void 0;
    fn();
  }
  function onCleanup(callback) {
    cleanupFn = callback;
  }
  const _cb = (value, oldValue) => {
    onEffect();
    return cb(value, oldValue, onCleanup);
  };
  const res = shared_watchIgnorable(source, _cb, options);
  const { ignoreUpdates } = res;
  const trigger = () => {
    let res2;
    ignoreUpdates(() => {
      res2 = _cb(getWatchSources(source), getOldValue(source));
    });
    return res2;
  };
  return __spreadProps(__spreadValues({}, res), {
    trigger
  });
}
function getWatchSources(sources) {
  if (isReactive(sources))
    return sources;
  if (Array.isArray(sources))
    return sources.map((item) => getOneWatchSource(item));
  return getOneWatchSource(sources);
}
function getOneWatchSource(source) {
  return typeof source === "function" ? source() : unref(source);
}
function getOldValue(source) {
  return Array.isArray(source) ? source.map(() => void 0) : void 0;
}

function whenever(source, cb, options) {
  return watch(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/form.mjs







const formProps = buildProps({
  model: Object,
  rules: {
    type: definePropType(Object)
  },
  labelPosition: {
    type: String,
    values: ["left", "right", "top"],
    default: "right"
  },
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  labelSuffix: {
    type: String,
    default: ""
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  },
  disabled: Boolean,
  validateOnRuleChange: {
    type: Boolean,
    default: true
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false
  },
  scrollToError: Boolean
});
const formEmits = {
  validate: (prop, isValid, message) => ((0,shared_esm_bundler/* isArray */.kJ)(prop) || (0,shared_esm_bundler/* isString */.HD)(prop)) && isBoolean(isValid) && (0,shared_esm_bundler/* isString */.HD)(message)
};


//# sourceMappingURL=form.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/error.mjs



class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function error_debugWarn(scope, message) {
  if (false) {}
}


//# sourceMappingURL=error.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(3788);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/castArray.js


/**
 * Casts `value` as an array if it's not one.
 *
 * @static
 * @memberOf _
 * @since 4.4.0
 * @category Lang
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast array.
 * @example
 *
 * _.castArray(1);
 * // => [1]
 *
 * _.castArray({ 'a': 1 });
 * // => [{ 'a': 1 }]
 *
 * _.castArray('abc');
 * // => ['abc']
 *
 * _.castArray(null);
 * // => [null]
 *
 * _.castArray(undefined);
 * // => [undefined]
 *
 * _.castArray();
 * // => []
 *
 * var array = [1, 2, 3];
 * console.log(_.castArray(array) === array);
 * // => true
 */
function castArray() {
  if (!arguments.length) {
    return [];
  }
  var value = arguments[0];
  return (0,isArray/* default */.Z)(value) ? value : [value];
}

/* harmony default export */ const lodash_es_castArray = (castArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/utils.mjs





const SCOPE = "ElForm";
function useFormLabelWidth() {
  const potentialLabelWidthArr = (0,external_Vue_.ref)([]);
  const autoLabelWidth = (0,external_Vue_.computed)(() => {
    if (!potentialLabelWidthArr.value.length)
      return "0";
    const max = Math.max(...potentialLabelWidthArr.value);
    return max ? `${max}px` : "";
  });
  function getLabelWidthIndex(width) {
    const index = potentialLabelWidthArr.value.indexOf(width);
    if (index === -1) {
      error_debugWarn(SCOPE, `unexpected width ${width}`);
    }
    return index;
  }
  function registerLabelWidth(val, oldVal) {
    if (val && oldVal) {
      const index = getLabelWidthIndex(oldVal);
      potentialLabelWidthArr.value.splice(index, 1, val);
    } else if (val) {
      potentialLabelWidthArr.value.push(val);
    }
  }
  function deregisterLabelWidth(val) {
    const index = getLabelWidthIndex(val);
    if (index > -1) {
      potentialLabelWidthArr.value.splice(index, 1);
    }
  }
  return {
    autoLabelWidth,
    registerLabelWidth,
    deregisterLabelWidth
  };
}
const filterFields = (fields, props) => {
  const normalized = lodash_es_castArray(props);
  return normalized.length > 0 ? fields.filter((field) => field.prop && normalized.includes(field.prop)) : fields;
};


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};


//# sourceMappingURL=plugin-vue_export-helper.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-prop/index.mjs


const useProp = (name) => {
  const vm = (0,external_Vue_.getCurrentInstance)();
  return (0,external_Vue_.computed)(() => {
    var _a, _b;
    return (_b = ((_a = vm.proxy) == null ? void 0 : _a.$props)[name]) != null ? _b : void 0;
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/config-provider.mjs
const config_provider_configProviderContextKey = Symbol();


//# sourceMappingURL=config-provider.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-global-config/index.mjs







const globalConfig = (0,external_Vue_.ref)();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = (0,external_Vue_.getCurrentInstance)() ? (0,external_Vue_.inject)(config_provider_configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return (0,external_Vue_.computed)(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/form.mjs
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");


//# sourceMappingURL=form.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-common-props/index.mjs










const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = (0,external_Vue_.ref)(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig("size");
  const form = ignore.form ? { size: void 0 } : (0,external_Vue_.inject)(formContextKey, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : (0,external_Vue_.inject)(formItemContextKey, void 0);
  return (0,external_Vue_.computed)(() => size.value || (0,external_Vue_.unref)(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = (0,external_Vue_.inject)(formContextKey, void 0);
  return (0,external_Vue_.computed)(() => disabled.value || (0,external_Vue_.unref)(fallback) || (form == null ? void 0 : form.disabled) || false);
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-namespace/index.mjs



const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig = useGlobalConfig("namespace");
  const namespace = (0,external_Vue_.computed)(() => globalConfig.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem((0,external_Vue_.unref)(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem((0,external_Vue_.unref)(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem((0,external_Vue_.unref)(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem((0,external_Vue_.unref)(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem((0,external_Vue_.unref)(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem((0,external_Vue_.unref)(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem((0,external_Vue_.unref)(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/form2.mjs













const __default__ = {
  name: "ElForm"
};
const _sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...__default__,
  props: formProps,
  emits: formEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElForm";
    const fields = [];
    const formSize = useSize();
    const ns = useNamespace("form");
    const formClasses = (0,external_Vue_.computed)(() => {
      const { labelPosition, inline } = props;
      return [
        ns.b(),
        ns.m(formSize.value || "default"),
        {
          [ns.m(`label-${labelPosition}`)]: labelPosition,
          [ns.m("inline")]: inline
        }
      ];
    });
    const addField = (field) => {
      fields.push(field);
    };
    const removeField = (field) => {
      if (field.prop) {
        fields.splice(fields.indexOf(field), 1);
      }
    };
    const resetFields = (properties = []) => {
      if (!props.model) {
        error_debugWarn(COMPONENT_NAME, "model is required for resetFields to work.");
        return;
      }
      filterFields(fields, properties).forEach((field) => field.resetField());
    };
    const clearValidate = (props2 = []) => {
      filterFields(fields, props2).forEach((field) => field.clearValidate());
    };
    const isValidatable = (0,external_Vue_.computed)(() => {
      const hasModel = !!props.model;
      if (!hasModel) {
        error_debugWarn(COMPONENT_NAME, "model is required for validate to work.");
      }
      return hasModel;
    });
    const obtainValidateFields = (props2) => {
      if (fields.length === 0)
        return [];
      const filteredFields = filterFields(fields, props2);
      if (!filteredFields.length) {
        error_debugWarn(COMPONENT_NAME, "please pass correct props!");
        return [];
      }
      return filteredFields;
    };
    const validate = async (callback) => validateField(void 0, callback);
    const doValidateField = async (props2 = []) => {
      if (!isValidatable.value)
        return false;
      const fields2 = obtainValidateFields(props2);
      if (fields2.length === 0)
        return true;
      let validationErrors = {};
      for (const field of fields2) {
        try {
          await field.validate("");
        } catch (fields3) {
          validationErrors = {
            ...validationErrors,
            ...fields3
          };
        }
      }
      if (Object.keys(validationErrors).length === 0)
        return true;
      return Promise.reject(validationErrors);
    };
    const validateField = async (modelProps = [], callback) => {
      const shouldThrow = !(0,shared_esm_bundler/* isFunction */.mf)(callback);
      try {
        const result = await doValidateField(modelProps);
        if (result === true) {
          callback == null ? void 0 : callback(result);
        }
        return result;
      } catch (e) {
        const invalidFields = e;
        if (props.scrollToError) {
          scrollToField(Object.keys(invalidFields)[0]);
        }
        callback == null ? void 0 : callback(false, invalidFields);
        return shouldThrow && Promise.reject(invalidFields);
      }
    };
    const scrollToField = (prop) => {
      var _a;
      const field = filterFields(fields, prop)[0];
      if (field) {
        (_a = field.$el) == null ? void 0 : _a.scrollIntoView();
      }
    };
    (0,external_Vue_.watch)(() => props.rules, () => {
      if (props.validateOnRuleChange) {
        validate().catch((err) => error_debugWarn(err));
      }
    }, { deep: true });
    (0,external_Vue_.provide)(formContextKey, (0,external_Vue_.reactive)({
      ...(0,external_Vue_.toRefs)(props),
      emit,
      resetFields,
      clearValidate,
      validateField,
      addField,
      removeField,
      ...useFormLabelWidth()
    }));
    expose({
      validate,
      validateField,
      resetFields,
      clearValidate,
      scrollToField
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("form", {
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(formClasses))
      }, [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);


//# sourceMappingURL=form2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/async-validator@4.2.5/node_modules/async-validator/dist-web/index.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && ({"BASE_URL":"./"}) && "production" !== 'production' && 0 && 0) {}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var i = 0;
  var len = args.length;

  if (typeof template === 'function') {
    return template.apply(null, args);
  }

  if (typeof template === 'string') {
    var str = template.replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;
      }
    });
    return str;
  }

  return template;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors || []);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index = index + 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k] || []);
  });
  return ret;
}

var AsyncValidationError = /*#__PURE__*/function (_Error) {
  _inheritsLoose(AsyncValidationError, _Error);

  function AsyncValidationError(errors, fields) {
    var _this;

    _this = _Error.call(this, 'Async Validation Error') || this;
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }

  return AsyncValidationError;
}( /*#__PURE__*/_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending["catch"](function (e) {
      return e;
    });

    return _pending;
  }

  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending["catch"](function (e) {
    return e;
  });
  return pending;
}

function isErrorObj(obj) {
  return !!(obj && obj.message !== undefined);
}

function getValue(value, path) {
  var v = value;

  for (var i = 0; i < path.length; i++) {
    if (v == undefined) {
      return v;
    }

    v = v[path[i]];
  }

  return v;
}

function complementError(rule, source) {
  return function (oe) {
    var fieldValue;

    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }

    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      fieldValue: fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _extends({}, target[s], value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

var required$1 = function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};

/**
 *  Rule for validating whitespace.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */

var whitespace = function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};

// https://github.com/kevva/url-regex/blob/master/index.js
var urlReg;
var getUrlRegex = (function () {
  if (urlReg) {
    return urlReg;
  }

  var word = '[a-fA-F\\d:]';

  var b = function b(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
  };

  var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
  var v6seg = '[a-fA-F\\d]{1,4}';
  var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

  var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
  var v4exact = new RegExp("^" + v4 + "$");
  var v6exact = new RegExp("^" + v6 + "$");

  var ip = function ip(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
  };

  ip.v4 = function (options) {
    return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
  };

  ip.v6 = function (options) {
    return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
  };

  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = '(?:\\S+(?::\\S*)?@)?';
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = '(?::\\d{2,5})?';
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
  urlReg = new RegExp("(?:^" + regex + "$)", 'i');
  return urlReg;
});

/* eslint max-len:0 */

var pattern$2 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    return typeof value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
  },
  url: function url(value) {
    return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern$2.hex);
  }
};

var type$1 = function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required$1(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check

  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};

var range = function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type


  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};

var ENUM$1 = 'enum';

var enumerable$1 = function enumerable(rule, value, source, errors, options) {
  rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

  if (rule[ENUM$1].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
  }
};

var pattern$1 = function pattern(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};

var rules = {
  required: required$1,
  whitespace: whitespace,
  type: type$1,
  range: range,
  "enum": enumerable$1,
  pattern: pattern$1
};

var string = function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
};

var method = function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var number = function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var _boolean = function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var regexp = function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var integer = function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var floatFn = function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var array = function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if ((value === undefined || value === null) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (value !== undefined && value !== null) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var object = function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var ENUM = 'enum';

var enumerable = function enumerable(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM](rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var pattern = function pattern(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var date = function date(rule, value, callback, source, options) {
  // console.log('integer rule called %j', rule);
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

  if (validate) {
    if (isEmptyValue(value, 'date') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'date')) {
      var dateObject;

      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
};

var required = function required(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
};

var type = function type(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
};

var any = function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
};

var validators = {
  string: string,
  method: method,
  number: number,
  "boolean": _boolean,
  regexp: regexp,
  integer: integer,
  "float": floatFn,
  array: array,
  object: object,
  "enum": enumerable,
  pattern: pattern,
  date: date,
  url: type,
  hex: type,
  email: type,
  required: required,
  any: any
};

function newMessages() {
  return {
    "default": 'Validation error on field %s',
    required: '%s is required',
    "enum": '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid'
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      "boolean": '%s is not a %s',
      integer: '%s is not an %s',
      "float": '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s'
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters'
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s'
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length'
    },
    pattern: {
      mismatch: '%s value %s does not match pattern %s'
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */

var Schema = /*#__PURE__*/function () {
  // ========================= Static =========================
  // ======================== Instance ========================
  function Schema(descriptor) {
    this.rules = null;
    this._messages = messages;
    this.define(descriptor);
  }

  var _proto = Schema.prototype;

  _proto.define = function define(rules) {
    var _this = this;

    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    Object.keys(rules).forEach(function (name) {
      var item = rules[name];
      _this.rules[name] = Array.isArray(item) ? item : [item];
    });
  };

  _proto.messages = function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  };

  _proto.validate = function validate(source_, o, oc) {
    var _this2 = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback(null, source);
      }

      return Promise.resolve(source);
    }

    function complete(results) {
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (var i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        callback(null, source);
      } else {
        fields = convertFieldsError(errors);
        callback(errors, fields);
      }
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      var arr = _this2.rules[z];
      var value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _extends({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        } else {
          rule = _extends({}, rule);
        } // Fill validator. Skip if nothing need to validate


        rule.validator = _this2.getValidationMethod(rule);

        if (!rule.validator) {
          return;
        }

        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this2.getType(rule);
        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z
        });
      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullField(key, schema) {
        return _extends({}, schema, {
          fullField: rule.fullField + "." + key,
          fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
        });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errorList = Array.isArray(e) ? e : [e];

        if (!options.suppressWarning && errorList.length) {
          Schema.warning('async-validator:', errorList);
        }

        if (errorList.length && rule.message !== undefined) {
          errorList = [].concat(rule.message);
        } // Fill error info


        var filledErrors = errorList.map(complementError(rule, source));

        if (options.first && filledErrors.length) {
          errorFields[rule.field] = 1;
          return doIt(filledErrors);
        }

        if (!deep) {
          doIt(filledErrors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message !== undefined) {
              filledErrors = [].concat(rule.message).map(complementError(rule, source));
            } else if (options.error) {
              filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
            }

            return doIt(filledErrors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            Object.keys(data.value).map(function (key) {
              fieldsSchema[key] = rule.defaultField;
            });
          }

          fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
          var paredFieldsSchema = {};
          Object.keys(fieldsSchema).forEach(function (field) {
            var fieldSchema = fieldsSchema[field];
            var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
            paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
          });
          var schema = new Schema(paredFieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (filledErrors && filledErrors.length) {
              finalErrors.push.apply(finalErrors, filledErrors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        try {
          res = rule.validator(rule, data.value, cb, data.source, options);
        } catch (error) {
          console.error == null ? void 0 : console.error(error); // rethrow to report error

          if (!options.suppressValidatorError) {
            setTimeout(function () {
              throw error;
            }, 0);
          }

          cb(error.message);
        }

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {
          return cb();
        }, function (e) {
          return cb(e);
        });
      }
    }, function (results) {
      complete(results);
    }, source);
  };

  _proto.getType = function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  };

  _proto.getValidationMethod = function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || undefined;
  };

  return Schema;
}();

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;


//# sourceMappingURL=index.js.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(1128);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache/* default */.Z;
  this.size = 0;
}

/* harmony default export */ const _stackClear = (stackClear);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ const _stackDelete = (stackDelete);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ const _stackGet = (stackGet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ const _stackHas = (stackHas);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(7737);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__(1233);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache/* default */.Z) {
    var pairs = data.__data__;
    if (!_Map/* default */.Z || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache/* default */.Z(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ const _stackSet = (stackSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache/* default */.Z(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ const _Stack = (Stack);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/* harmony default export */ const _setCacheAdd = (setCacheAdd);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ const _setCacheHas = (setCacheHas);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache/* default */.Z;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ const _SetCache = (SetCache);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const _arraySome = (arraySome);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cacheHas.js
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ const _cacheHas = (cacheHas);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalArrays = (equalArrays);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(344);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
var _root = __webpack_require__(7627);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Uint8Array.js


/** Built-in value references. */
var _Uint8Array_Uint8Array = _root/* default.Uint8Array */.Z.Uint8Array;

/* harmony default export */ const _Uint8Array = (_Uint8Array_Uint8Array);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
var eq = __webpack_require__(8782);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ const _mapToArray = (mapToArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToArray.js
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ const _setToArray = (setToArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.Z ? _Symbol/* default.prototype */.Z.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,eq/* default */.Z)(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ const _equalByTag = (equalByTag);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayPush.js
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ const _arrayPush = (arrayPush);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetAllKeys.js



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,isArray/* default */.Z)(object) ? result : _arrayPush(result, symbolsFunc(object));
}

/* harmony default export */ const _baseGetAllKeys = (baseGetAllKeys);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ const _arrayFilter = (arrayFilter);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubArray.js
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ const lodash_es_stubArray = (stubArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? lodash_es_stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ const _getSymbols = (getSymbols);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ const _baseTimes = (baseTimes);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(1395);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(4764);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,isObjectLike/* default */.Z)(value) && (0,_baseGetTag/* default */.Z)(value) == argsTag;
}

/* harmony default export */ const _baseIsArguments = (baseIsArguments);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var isArguments_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = isArguments_objectProto.hasOwnProperty;

/** Built-in value references. */
var isArguments_propertyIsEnumerable = isArguments_objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return (0,isObjectLike/* default */.Z)(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !isArguments_propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ const lodash_es_isArguments = (isArguments);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ const lodash_es_stubFalse = (stubFalse);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root/* default.Buffer */.Z.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;

/* harmony default export */ const lodash_es_isBuffer = (isBuffer);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(5281);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isLength.js
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ const lodash_es_isLength = (isLength);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var _baseIsTypedArray_argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    _baseIsTypedArray_boolTag = '[object Boolean]',
    _baseIsTypedArray_dateTag = '[object Date]',
    _baseIsTypedArray_errorTag = '[object Error]',
    funcTag = '[object Function]',
    _baseIsTypedArray_mapTag = '[object Map]',
    _baseIsTypedArray_numberTag = '[object Number]',
    objectTag = '[object Object]',
    _baseIsTypedArray_regexpTag = '[object RegExp]',
    _baseIsTypedArray_setTag = '[object Set]',
    _baseIsTypedArray_stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var _baseIsTypedArray_arrayBufferTag = '[object ArrayBuffer]',
    _baseIsTypedArray_dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[_baseIsTypedArray_argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[_baseIsTypedArray_arrayBufferTag] = typedArrayTags[_baseIsTypedArray_boolTag] =
typedArrayTags[_baseIsTypedArray_dataViewTag] = typedArrayTags[_baseIsTypedArray_dateTag] =
typedArrayTags[_baseIsTypedArray_errorTag] = typedArrayTags[funcTag] =
typedArrayTags[_baseIsTypedArray_mapTag] = typedArrayTags[_baseIsTypedArray_numberTag] =
typedArrayTags[objectTag] = typedArrayTags[_baseIsTypedArray_regexpTag] =
typedArrayTags[_baseIsTypedArray_setTag] = typedArrayTags[_baseIsTypedArray_stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,isObjectLike/* default */.Z)(value) &&
    lodash_es_isLength(value.length) && !!typedArrayTags[(0,_baseGetTag/* default */.Z)(value)];
}

/* harmony default export */ const _baseIsTypedArray = (baseIsTypedArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUnary.js
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ const _baseUnary = (baseUnary);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(6184);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nodeUtil.js


/** Detect free variable `exports`. */
var _nodeUtil_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _nodeUtil_freeModule = _nodeUtil_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _nodeUtil_moduleExports = _nodeUtil_freeModule && _nodeUtil_freeModule.exports === _nodeUtil_freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = _nodeUtil_moduleExports && _freeGlobal/* default.process */.Z.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = _nodeUtil_freeModule && _nodeUtil_freeModule.require && _nodeUtil_freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ const _nodeUtil = (nodeUtil);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ const lodash_es_isTypedArray = (isTypedArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var _arrayLikeKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = _arrayLikeKeys_objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,isArray/* default */.Z)(value),
      isArg = !isArr && lodash_es_isArguments(value),
      isBuff = !isArr && !isArg && lodash_es_isBuffer(value),
      isType = !isArr && !isArg && !isBuff && lodash_es_isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex/* default */.Z)(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _arrayLikeKeys = (arrayLikeKeys);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isPrototype.js
/** Used for built-in method references. */
var _isPrototype_objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || _isPrototype_objectProto;

  return value === proto;
}

/* harmony default export */ const _isPrototype = (isPrototype);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ const _overArg = (overArg);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

/* harmony default export */ const _nativeKeys = (nativeKeys);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var _baseKeys_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = _baseKeys_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeys = (baseKeys);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
var lodash_es_isFunction = __webpack_require__(9477);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLike.js



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && lodash_es_isLength(value.length) && !(0,lodash_es_isFunction/* default */.Z)(value);
}

/* harmony default export */ const lodash_es_isArrayLike = (isArrayLike);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

/* harmony default export */ const lodash_es_keys = (keys);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeys.js




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return _baseGetAllKeys(object, lodash_es_keys, _getSymbols);
}

/* harmony default export */ const _getAllKeys = (getAllKeys);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var _equalObjects_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = _equalObjects_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ const _equalObjects = (equalObjects);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(9287);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative/* default */.Z)(_root/* default */.Z, 'DataView');

/* harmony default export */ const _DataView = (DataView);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var _Promise_Promise = (0,_getNative/* default */.Z)(_root/* default */.Z, 'Promise');

/* harmony default export */ const _Promise = (_Promise_Promise);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Set.js



/* Built-in method references that are verified to be native. */
var _Set_Set = (0,_getNative/* default */.Z)(_root/* default */.Z, 'Set');

/* harmony default export */ const _Set = (_Set_Set);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative/* default */.Z)(_root/* default */.Z, 'WeakMap');

/* harmony default export */ const _WeakMap = (WeakMap);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(7785);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var _getTag_mapTag = '[object Map]',
    _getTag_objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    _getTag_setTag = '[object Set]',
    _getTag_weakMapTag = '[object WeakMap]';

var _getTag_dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource/* default */.Z)(_DataView),
    mapCtorString = (0,_toSource/* default */.Z)(_Map/* default */.Z),
    promiseCtorString = (0,_toSource/* default */.Z)(_Promise),
    setCtorString = (0,_toSource/* default */.Z)(_Set),
    weakMapCtorString = (0,_toSource/* default */.Z)(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag/* default */.Z;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != _getTag_dataViewTag) ||
    (_Map/* default */.Z && getTag(new _Map/* default */.Z) != _getTag_mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != _getTag_setTag) ||
    (_WeakMap && getTag(new _WeakMap) != _getTag_weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag/* default */.Z)(value),
        Ctor = result == _getTag_objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource/* default */.Z)(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return _getTag_dataViewTag;
        case mapCtorString: return _getTag_mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return _getTag_setTag;
        case weakMapCtorString: return _getTag_weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ const _getTag = (getTag);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var _baseIsEqualDeep_argsTag = '[object Arguments]',
    _baseIsEqualDeep_arrayTag = '[object Array]',
    _baseIsEqualDeep_objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,isArray/* default */.Z)(object),
      othIsArr = (0,isArray/* default */.Z)(other),
      objTag = objIsArr ? _baseIsEqualDeep_arrayTag : _getTag(object),
      othTag = othIsArr ? _baseIsEqualDeep_arrayTag : _getTag(other);

  objTag = objTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : objTag;
  othTag = othTag == _baseIsEqualDeep_argsTag ? _baseIsEqualDeep_objectTag : othTag;

  var objIsObj = objTag == _baseIsEqualDeep_objectTag,
      othIsObj = othTag == _baseIsEqualDeep_objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && lodash_es_isBuffer(object)) {
    if (!lodash_es_isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || lodash_es_isTypedArray(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ const _baseIsEqualDeep = (baseIsEqualDeep);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!(0,isObjectLike/* default */.Z)(value) && !(0,isObjectLike/* default */.Z)(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ const _baseIsEqual = (baseIsEqual);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isEqual.js


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

/* harmony default export */ const lodash_es_isEqual = (isEqual);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ const _arrayEach = (arrayEach);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
var _assignValue = __webpack_require__(3996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignValue.js
var _baseAssignValue = __webpack_require__(1186);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyObject.js



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue/* default */.Z)(object, key, newValue);
    } else {
      (0,_assignValue/* default */.Z)(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ const _copyObject = (copyObject);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && _copyObject(source, lodash_es_keys(source), object);
}

/* harmony default export */ const _baseAssign = (baseAssign);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var lodash_es_isObject = __webpack_require__(7247);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _nativeKeysIn = (nativeKeysIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var _baseKeysIn_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = _baseKeysIn_objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,lodash_es_isObject/* default */.Z)(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ const _baseKeysIn = (baseKeysIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return lodash_es_isArrayLike(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

/* harmony default export */ const lodash_es_keysIn = (keysIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && _copyObject(source, lodash_es_keysIn(source), object);
}

/* harmony default export */ const _baseAssignIn = (baseAssignIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneBuffer.js


/** Detect free variable `exports`. */
var _cloneBuffer_freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var _cloneBuffer_freeModule = _cloneBuffer_freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var _cloneBuffer_moduleExports = _cloneBuffer_freeModule && _cloneBuffer_freeModule.exports === _cloneBuffer_freeExports;

/** Built-in value references. */
var _cloneBuffer_Buffer = _cloneBuffer_moduleExports ? _root/* default.Buffer */.Z.Buffer : undefined,
    allocUnsafe = _cloneBuffer_Buffer ? _cloneBuffer_Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ const _cloneBuffer = (cloneBuffer);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copyArray.js
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ const _copyArray = (copyArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

/* harmony default export */ const _copySymbols = (copySymbols);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ const _getPrototype = (getPrototype);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var _getSymbolsIn_nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !_getSymbolsIn_nativeGetSymbols ? lodash_es_stubArray : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

/* harmony default export */ const _getSymbolsIn = (getSymbolsIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return _copyObject(source, _getSymbolsIn(source), object);
}

/* harmony default export */ const _copySymbolsIn = (copySymbolsIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return _baseGetAllKeys(object, lodash_es_keysIn, _getSymbolsIn);
}

/* harmony default export */ const _getAllKeysIn = (getAllKeysIn);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var _initCloneArray_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = _initCloneArray_objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ const _initCloneArray = (initCloneArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneArrayBuffer.js


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

/* harmony default export */ const _cloneArrayBuffer = (cloneArrayBuffer);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ const _cloneDataView = (cloneDataView);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ const _cloneRegExp = (cloneRegExp);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var _cloneSymbol_symbolProto = _Symbol/* default */.Z ? _Symbol/* default.prototype */.Z.prototype : undefined,
    _cloneSymbol_symbolValueOf = _cloneSymbol_symbolProto ? _cloneSymbol_symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return _cloneSymbol_symbolValueOf ? Object(_cloneSymbol_symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ const _cloneSymbol = (cloneSymbol);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_cloneTypedArray.js


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ const _cloneTypedArray = (cloneTypedArray);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var _initCloneByTag_boolTag = '[object Boolean]',
    _initCloneByTag_dateTag = '[object Date]',
    _initCloneByTag_mapTag = '[object Map]',
    _initCloneByTag_numberTag = '[object Number]',
    _initCloneByTag_regexpTag = '[object RegExp]',
    _initCloneByTag_setTag = '[object Set]',
    _initCloneByTag_stringTag = '[object String]',
    _initCloneByTag_symbolTag = '[object Symbol]';

var _initCloneByTag_arrayBufferTag = '[object ArrayBuffer]',
    _initCloneByTag_dataViewTag = '[object DataView]',
    _initCloneByTag_float32Tag = '[object Float32Array]',
    _initCloneByTag_float64Tag = '[object Float64Array]',
    _initCloneByTag_int8Tag = '[object Int8Array]',
    _initCloneByTag_int16Tag = '[object Int16Array]',
    _initCloneByTag_int32Tag = '[object Int32Array]',
    _initCloneByTag_uint8Tag = '[object Uint8Array]',
    _initCloneByTag_uint8ClampedTag = '[object Uint8ClampedArray]',
    _initCloneByTag_uint16Tag = '[object Uint16Array]',
    _initCloneByTag_uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case _initCloneByTag_arrayBufferTag:
      return _cloneArrayBuffer(object);

    case _initCloneByTag_boolTag:
    case _initCloneByTag_dateTag:
      return new Ctor(+object);

    case _initCloneByTag_dataViewTag:
      return _cloneDataView(object, isDeep);

    case _initCloneByTag_float32Tag: case _initCloneByTag_float64Tag:
    case _initCloneByTag_int8Tag: case _initCloneByTag_int16Tag: case _initCloneByTag_int32Tag:
    case _initCloneByTag_uint8Tag: case _initCloneByTag_uint8ClampedTag: case _initCloneByTag_uint16Tag: case _initCloneByTag_uint32Tag:
      return _cloneTypedArray(object, isDeep);

    case _initCloneByTag_mapTag:
      return new Ctor;

    case _initCloneByTag_numberTag:
    case _initCloneByTag_stringTag:
      return new Ctor(object);

    case _initCloneByTag_regexpTag:
      return _cloneRegExp(object);

    case _initCloneByTag_setTag:
      return new Ctor;

    case _initCloneByTag_symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ const _initCloneByTag = (initCloneByTag);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,lodash_es_isObject/* default */.Z)(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ const _baseCreate = (baseCreate);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

/* harmony default export */ const _initCloneObject = (initCloneObject);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,isObjectLike/* default */.Z)(value) && _getTag(value) == _baseIsMap_mapTag;
}

/* harmony default export */ const _baseIsMap = (baseIsMap);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil && _nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? _baseUnary(nodeIsMap) : _baseIsMap;

/* harmony default export */ const lodash_es_isMap = (isMap);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,isObjectLike/* default */.Z)(value) && _getTag(value) == _baseIsSet_setTag;
}

/* harmony default export */ const _baseIsSet = (baseIsSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil && _nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? _baseUnary(nodeIsSet) : _baseIsSet;

/* harmony default export */ const lodash_es_isSet = (isSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var _baseClone_argsTag = '[object Arguments]',
    _baseClone_arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    _baseClone_errorTag = '[object Error]',
    _baseClone_funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    _baseClone_objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    _baseClone_weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[_baseClone_argsTag] = cloneableTags[_baseClone_arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[_baseClone_objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[_baseClone_errorTag] = cloneableTags[_baseClone_funcTag] =
cloneableTags[_baseClone_weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,lodash_es_isObject/* default */.Z)(value)) {
    return value;
  }
  var isArr = (0,isArray/* default */.Z)(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == _baseClone_funcTag || tag == genTag;

    if (lodash_es_isBuffer(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == _baseClone_objectTag || tag == _baseClone_argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : _initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys)
    : (isFlat ? lodash_es_keysIn : lodash_es_keys);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue/* default */.Z)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ const _baseClone = (baseClone);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/clone.js


/** Used to compose bitmasks for cloning. */
var clone_CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return _baseClone(value, clone_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ const lodash_es_clone = (clone);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/form-item.mjs





const formItemValidateStates = [
  "",
  "error",
  "validating",
  "success"
];
const formItemProps = buildProps({
  label: String,
  labelWidth: {
    type: [String, Number],
    default: ""
  },
  prop: {
    type: definePropType([String, Array])
  },
  required: {
    type: Boolean,
    default: void 0
  },
  rules: {
    type: definePropType([Object, Array])
  },
  error: String,
  validateStatus: {
    type: String,
    values: formItemValidateStates
  },
  for: String,
  inlineMessage: {
    type: [String, Boolean],
    default: ""
  },
  showMessage: {
    type: Boolean,
    default: true
  },
  size: {
    type: String,
    values: componentSizes
  }
});


//# sourceMappingURL=form-item.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vueuse+core@8.9.4_vue@3.2.37/node_modules/@vueuse/core/index.mjs




function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key);
  if (defaultSource)
    source = inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return computed((ctx) => options(source, ctx));
  } else {
    return computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => unref(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = (0,external_Vue_.unref)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = shared_isClient ? window : void 0;
const defaultDocument = shared_isClient ? window.document : void 0;
const defaultNavigator = shared_isClient ? window.navigator : void 0;
const defaultLocation = shared_isClient ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (shared_isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return shared_noop;
  let cleanup = shared_noop;
  const stopWatch = (0,external_Vue_.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = shared_noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  shared_tryOnScopeDispose(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window)
    return;
  const shouldListen = (0,external_Vue_.ref)(true);
  let fallback;
  const listener = (event) => {
    window.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$j = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$j({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$j({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$j({}, options), { eventName: "keyup" }));
}

const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
  var _a, _b;
  const elementRef = computed(() => unrefElement(target));
  let timeout = null;
  function clear() {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
  function onDown(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    clear();
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    timeout = setTimeout(() => handler(ev), (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY);
  }
  const listenerOptions = {
    capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
    once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
  };
  useEventListener(elementRef, "pointerdown", onDown, listenerOptions);
  useEventListener(elementRef, "pointerup", clear, listenerOptions);
  useEventListener(elementRef, "pointerleave", clear, listenerOptions);
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  tryOnMounted(_trigger);
  onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const counter = ref(0);
  if (window) {
    useEventListener(window, "blur", () => counter.value += 1, true);
    useEventListener(window, "focus", () => counter.value += 1, true);
  }
  return computed(() => {
    counter.value;
    return window == null ? void 0 : window.document.activeElement;
  });
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = noop,
    onFinished = noop
  } = options;
  const promiseState = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = reactive(initialResult);
  const activeIndex = ref(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      return curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
    }).catch((e) => {
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    resetOnExecute = true,
    shallow = true
  } = options != null ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = ref(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
}

const defaults = {
  array: (v) => JSON.stringify(v),
  object: (v) => JSON.stringify(v),
  set: (v) => JSON.stringify(Array.from(v)),
  map: (v) => JSON.stringify(Object.fromEntries(v)),
  null: () => ""
};
function getDefaultSerialization(target) {
  if (!target)
    return defaults.null;
  if (target instanceof Map)
    return defaults.map;
  else if (target instanceof Set)
    return defaults.set;
  else if (Array.isArray(target))
    return defaults.array;
  else
    return defaults.object;
}

function useBase64(target, options) {
  const base64 = ref("");
  const promise = ref();
  function execute() {
    if (!isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = unref(target);
        if (_target == null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else if (typeof _target === "object") {
          const _serializeFn = (options == null ? void 0 : options.serializer) || getDefaultSerialization(_target);
          const serialized = _serializeFn(_target);
          return resolve(blobToBase64(new Blob([serialized], { type: "application/json" })));
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  if (isRef(target))
    watch(target, execute, { immediate: true });
  else
    execute();
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = navigator && "getBattery" in navigator;
  const charging = ref(false);
  const chargingTime = ref(0);
  const dischargingTime = ref(0);
  const level = ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useBluetooth(options) {
  let {
    acceptAllDevices = false
  } = options || {};
  const {
    filters = void 0,
    optionalServices = void 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = navigator && "bluetooth" in navigator;
  const device = ref(void 0);
  const error = ref(null);
  watch(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported)
      return;
    error.value = null;
    if (filters && filters.length > 0)
      acceptAllDevices = false;
    try {
      device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = ref();
  const isConnected = computed(() => {
    var _a;
    return ((_a = server.value) == null ? void 0 : _a.connected) || false;
  });
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      device.value.addEventListener("gattserverdisconnected", () => {
      });
      try {
        server.value = await device.value.gatt.connect();
      } catch (err) {
        error.value = err;
      }
    }
  }
  tryOnMounted(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.connect();
  });
  tryOnScopeDispose(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.disconnect();
  });
  return {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
    error
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!isSupported)
      return;
    if (!mediaQuery)
      mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$i = Object.defineProperty;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$i({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

const useBroadcastChannel = (options) => {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = window && "BroadcastChannel" in window;
  const isClosed = ref(false);
  const channel = ref();
  const data = ref();
  const error = ref(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported) {
    tryOnMounted(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
};

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = ref(refValue.value);
  watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function useClamp(value, min, max) {
  const _value = ref(value);
  return computed({
    get() {
      return _value.value = clamp(_value.value, unref(min), unref(max));
    },
    set(value2) {
      _value.value = clamp(value2, unref(min), unref(max));
    }
  });
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = Boolean(navigator && "clipboard" in navigator);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = unref(source)) {
    if (isSupported && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(initialValue);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = pausableWatch(data, () => write(data.value), { flush, deep, eventFilter });
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$h = Object.defineProperty;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$h({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const preferredMode = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? ref("auto") : useStorage(storageKey, "auto", storage, { window, listenToStorageChanges }));
  const state = computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window == null ? void 0 : window.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector, attribute, (_a = modes[resolvedMode]) != null ? _a : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  tryOnMounted(() => onChanged(state.value));
  return state;
}

function useConfirmDialog(revealed = ref(false)) {
  const confirmHook = createEventHook();
  const cancelHook = createEventHook();
  const revealHook = createEventHook();
  let _resolve = noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow, initialValue = "" } = {}) {
  const variable = ref(initialValue);
  const elRef = computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  watch([elRef, () => unref(prop)], ([el, prop2]) => {
    var _a;
    if (el && window) {
      const value = (_a = window.getComputedStyle(el).getPropertyValue(prop2)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }, { immediate: true });
  watch(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(unref(prop), val);
  });
  return variable;
}

function useCurrentElement() {
  const vm = getCurrentInstance();
  const count = ref(0);
  onUpdated(() => {
    count.value += 1;
  });
  onMounted(() => {
    count.value += 1;
  });
  return computed(() => {
    count.value;
    return vm.proxy.$el;
  });
}

function useCycleList(list, options) {
  var _a;
  const state = shallowRef((_a = options == null ? void 0 : options.initialValue) != null ? _a : list[0]);
  const index = computed({
    get() {
      var _a2;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a2 = options == null ? void 0 : options.fallbackIndex) != null ? _a2 : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$g = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$g({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp()
    });
  }
  const last = ref(_createHistoryRecord());
  const undoStack = ref([]);
  const redoStack = ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = computed(() => [last.value, ...undoStack.value]);
  const canUndo = computed(() => undoStack.value.length > 0);
  const canRedo = computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$f = Object.defineProperty;
var core_defProps$6 = Object.defineProperties;
var core_getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$6 = (a, b) => core_defProps$6(a, core_getOwnPropDescs$6(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, core_spreadProps$6(__spreadValues$f({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return core_spreadProps$6(__spreadValues$f({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$e = Object.defineProperty;
var core_defProps$5 = Object.defineProperties;
var core_getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$5 = (a, b) => core_defProps$5(a, core_getOwnPropDescs$5(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, core_spreadProps$5(__spreadValues$e({}, options), { eventFilter: filter }));
  return __spreadValues$e({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = bypassFilter
  } = options;
  const acceleration = ref({ x: null, y: null, z: null });
  const rotationRate = ref({ alpha: null, beta: null, gamma: null });
  const interval = ref(0);
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = Boolean(window && "DeviceOrientationEvent" in window);
  const isAbsolute = ref(false);
  const alpha = ref(null);
  const beta = ref(null);
  const gamma = ref(null);
  if (window && isSupported) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = (/* unused pure expression or super */ null && ([
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
]));
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: ref(1)
    };
  }
  const pixelRatio = ref(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    watch([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = Boolean(navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = ref([]);
  const videoInputs = computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  let isSupported = false;
  const permissionGranted = ref(false);
  async function update() {
    if (!isSupported)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (navigator) {
    isSupported = Boolean(navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
    if (isSupported) {
      if (requestPermissions)
        ensurePermissions();
      useEventListener(navigator.mediaDevices, "devicechange", update);
      update();
    }
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a, _b;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_b = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _b.getDisplayMedia);
  const constraint = { audio, video };
  const stream = shallowRef();
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return ref("visible");
  const visibility = ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$d = Object.defineProperty;
var core_defProps$4 = Object.defineProperties;
var core_getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$f.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(b)) {
      if (__propIsEnum$f.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$4 = (a, b) => core_defProps$4(a, core_getOwnPropDescs$4(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = ref((_b = options.initialValue) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (unref(options.preventDefault))
      e.preventDefault();
    if (unref(options.stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (unref(options.exact) && e.target !== unref(target))
      return;
    const rect = unref(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return core_spreadProps$4(__spreadValues$d({}, toRefs(position)), {
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

function useDropZone(target, onDrop) {
  const isOverDropZone = ref(false);
  let counter = 0;
  if (isClient) {
    useEventListener(target, "dragenter", (event) => {
      event.preventDefault();
      counter += 1;
      isOverDropZone.value = true;
    });
    useEventListener(target, "dragover", (event) => {
      event.preventDefault();
    });
    useEventListener(target, "dragleave", (event) => {
      event.preventDefault();
      counter -= 1;
      if (counter === 0)
        isOverDropZone.value = false;
    });
    useEventListener(target, "drop", (event) => {
      var _a, _b;
      event.preventDefault();
      counter = 0;
      isOverDropZone.value = false;
      const files = Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []);
      if (files.length === 0) {
        onDrop(null);
        return;
      }
      onDrop(files);
    });
  }
  return {
    isOverDropZone
  };
}

var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var core_objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$e.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$e.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = core_objRest$2(_a, ["window"]);
  let observer;
  const isSupported = window && "ResizeObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,external_Vue_.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  shared_tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true
  } = options;
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  let rafId = null;
  function loop() {
    if (!isActive.value || !window)
      return;
    fn();
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$c = Object.defineProperty;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const element = ref(null);
  const { x, y } = options;
  const controls = useRafFn(() => {
    element.value = document.elementFromPoint(unref(x), unref(y));
  });
  return __spreadValues$c({
    element
  }, controls);
}

function useElementHover(el) {
  const isHovered = ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    if (!unref(element)) {
      elementIsVisible.value = false;
    } else {
      const rect = unref(element).getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  tryOnMounted(testBounding);
  if (window)
    tryOnMounted(() => useEventListener(unref(scrollTarget) || window, "scroll", testBounding, { capture: false, passive: true }));
  return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = ref(null);
  const data = ref(null);
  const status = ref("CONNECTING");
  const eventSource = ref(null);
  const error = ref(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = Boolean(typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = ref(initialValue);
  async function open(openOptions) {
    if (!isSupported)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = isRef(newIcon) ? newIcon : ref(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  watch(favicon, (i, o) => {
    if (isString(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$b = Object.defineProperty;
var core_defProps$3 = Object.defineProperties;
var core_getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$3 = (a, b) => core_defProps$3(a, core_getOwnPropDescs$3(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch");
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() => config.baseUrl ? joinPaths(unref(config.baseUrl), unref(url)) : unref(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadValues$b(__spreadValues$b({}, options), args[0]);
      } else {
        fetchOptions = core_spreadProps$3(__spreadValues$b(__spreadValues$b({}, fetchOptions), args[0]), {
          headers: __spreadValues$b(__spreadValues$b({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1]))
      options = __spreadValues$b(__spreadValues$b({}, options), args[1]);
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$b(__spreadValues$b({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$b(__spreadValues$b({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = ref(false);
  const isFetching = ref(false);
  const aborted = ref(false);
  const statusCode = ref(null);
  const response = shallowRef(null);
  const error = shallowRef(null);
  const data = shallowRef(initialData);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = core_spreadProps$3(__spreadValues$b({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(unref(config.payload)) : unref(config.payload);
    }
    let isCanceled = false;
    const context = { url: unref(url), options: __spreadValues$b(__spreadValues$b({}, defaultFetchOptions), fetchOptions), cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, core_spreadProps$3(__spreadValues$b(__spreadValues$b({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$b(__spreadValues$b({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch && statusCode.value >= 200 && statusCode.value < 300)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError, response: response.value }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  watch(() => [
    unref(url),
    unref(options.refetch)
  ], () => unref(options.refetch) && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (isRef(config.payload)) {
          watch(() => [
            unref(config.payload),
            unref(options.refetch)
          ], () => unref(options.refetch) && execute(), { deep: true });
        }
        if (!payloadType && unref(payload) && Object.getPrototypeOf(unref(payload)) === Object.prototype)
          config.payloadType = "json";
        return core_spreadProps$3(__spreadValues$b({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return core_spreadProps$3(__spreadValues$b({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return core_spreadProps$3(__spreadValues$b({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

var __defProp$a = Object.defineProperty;
var core_getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var core_hasOwnProp$b = Object.prototype.hasOwnProperty;
var core_propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (core_getOwnPropSymbols$b)
    for (var prop of core_getOwnPropSymbols$b(b)) {
      if (core_propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*"
};
function useFileDialog(options = {}) {
  const {
    document = defaultDocument
  } = options;
  const files = ref(null);
  let input;
  if (document) {
    input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
    };
  }
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = __spreadValues$a(__spreadValues$a(__spreadValues$a({}, DEFAULT_OPTIONS), options), localOptions);
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    input.capture = _options.capture;
    input.click();
  };
  const reset = () => {
    files.value = null;
    if (input)
      input.value = "";
  };
  return {
    files: readonly(files),
    open,
    reset
  };
}

var core_defProp$9 = Object.defineProperty;
var core_getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var core_hasOwnProp$a = Object.prototype.hasOwnProperty;
var core_propIsEnum$a = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$9 = (obj, key, value) => key in obj ? core_defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$a.call(b, prop))
      core_defNormalProp$9(a, prop, b[prop]);
  if (core_getOwnPropSymbols$a)
    for (var prop of core_getOwnPropSymbols$a(b)) {
      if (core_propIsEnum$a.call(b, prop))
        core_defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = unref(options);
  const window = _window;
  const isSupported = Boolean(window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = ref();
  const data = ref();
  const file = ref();
  const fileName = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported)
      return;
    const [handle] = await window.showOpenFilePicker(core_spreadValues$9(core_spreadValues$9({}, unref(options)), _options));
    fileHandle.value = handle;
    await updateFile();
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(core_spreadValues$9(core_spreadValues$9({}, unref(options)), _options));
    data.value = void 0;
    await updateFile();
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported)
      return;
    fileHandle.value = await window.showSaveFilePicker(core_spreadValues$9(core_spreadValues$9({}, unref(options)), _options));
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    if (unref(dataType) === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    if (unref(dataType) === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    if (unref(dataType) === "Blob")
      data.value = file.value;
  }
  watch(() => unref(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed({
    get() {
      return isDef(activeElement.value) && isDef(targetElement.value) && activeElement.value === targetElement.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  watch(targetElement, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = (/* unused pure expression or super */ null && ([
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
]));
function useFullscreen(target, options = {}) {
  const { document = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = ref(false);
  let isSupported = false;
  let map = functionsMap[0];
  if (!document) {
    isSupported = false;
  } else {
    for (const m of functionsMap) {
      if (m[1] in document) {
        map = m;
        isSupported = true;
        break;
      }
    }
  }
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function mapGamepadToXbox360Controller(gamepad) {
  return computed(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "getGamepads" in navigator;
  const gamepads = ref([]);
  const onConnectedHook = createEventHook();
  const onDisconnectedHook = createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      hapticActuators,
      index: gamepad.index,
      mapping: gamepad.mapping,
      connected: gamepad.connected,
      timestamp: gamepad.timestamp,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (let i = 0; i < _gamepads.length; ++i) {
      const gamepad = _gamepads[i];
      if (gamepad) {
        const index = gamepads.value.findIndex(({ index: index2 }) => index2 === gamepad.index);
        if (index > -1)
          gamepads.value[index] = stateFromGamepad(gamepad);
      }
    }
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  tryOnMounted(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    if (_gamepads) {
      for (let i = 0; i < _gamepads.length; ++i) {
        const gamepad = _gamepads[i];
        if (gamepad)
          onGamepadConnected(gamepad);
      }
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = navigator && "geolocation" in navigator;
  const locatedAt = ref(null);
  const error = ref(null);
  const coords = ref({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  tryOnScopeDispose(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = (/* unused pure expression or super */ null && (["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"]));
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = throttleFilter(50)
  } = options;
  const idle = ref(initialState);
  const lastActive = ref(timestamp());
  let timer;
  const onEvent = createFilterWrapper(eventFilter, () => {
    idle.value = false;
    lastActive.value = timestamp();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

var core_defProp$8 = Object.defineProperty;
var core_getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var core_hasOwnProp$9 = Object.prototype.hasOwnProperty;
var core_propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$8 = (obj, key, value) => key in obj ? core_defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$9.call(b, prop))
      core_defNormalProp$8(a, prop, b[prop]);
  if (core_getOwnPropSymbols$9)
    for (var prop of core_getOwnPropSymbols$9(b)) {
      if (core_propIsEnum$9.call(b, prop))
        core_defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
const useImage = (options, asyncStateOptions = {}) => {
  const state = useAsyncState(() => loadImage(unref(options)), void 0, core_spreadValues$8({
    resetOnExecute: true
  }, asyncStateOptions));
  watch(() => unref(options), () => state.execute(asyncStateOptions.delay), { deep: true });
  return state;
};

function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = ref(0);
  const y = ref(0);
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  if (element) {
    const onScrollEnd = useDebounceFn((e) => {
      isScrolling.value = false;
      directions.left = false;
      directions.right = false;
      directions.top = false;
      directions.bottom = false;
      onStop(e);
    }, throttle + idle);
    const onScrollHandler = (e) => {
      const eventTarget = e.target === document ? e.target.documentElement : e.target;
      const scrollLeft = eventTarget.scrollLeft;
      directions.left = scrollLeft < x.value;
      directions.right = scrollLeft > x.value;
      arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
      arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0);
      x.value = scrollLeft;
      let scrollTop = eventTarget.scrollTop;
      if (e.target === document && !scrollTop)
        scrollTop = document.body.scrollTop;
      directions.top = scrollTop < y.value;
      directions.bottom = scrollTop > y.value;
      arrivedState.top = scrollTop <= 0 + (offset.top || 0);
      arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0);
      y.value = scrollTop;
      isScrolling.value = true;
      onScrollEnd(e);
      onScroll(e);
    };
    useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  }
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}

var core_defProp$7 = Object.defineProperty;
var core_defProps$2 = Object.defineProperties;
var core_getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var core_hasOwnProp$8 = Object.prototype.hasOwnProperty;
var core_propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$7 = (obj, key, value) => key in obj ? core_defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$8.call(b, prop))
      core_defNormalProp$7(a, prop, b[prop]);
  if (core_getOwnPropSymbols$8)
    for (var prop of core_getOwnPropSymbols$8(b)) {
      if (core_propIsEnum$8.call(b, prop))
        core_defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$2 = (a, b) => core_defProps$2(a, core_getOwnPropDescs$2(b));
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a, _b;
  const direction = (_a = options.direction) != null ? _a : "bottom";
  const state = reactive(useScroll(element, core_spreadProps$2(core_spreadValues$7({}, options), {
    offset: core_spreadValues$7({
      [direction]: (_b = options.distance) != null ? _b : 0
    }, options.offset)
  })));
  watch(() => state.arrivedState[direction], async (v) => {
    var _a2, _b2;
    if (v) {
      const elem = unref(element);
      const previous = {
        height: (_a2 = elem == null ? void 0 : elem.scrollHeight) != null ? _a2 : 0,
        width: (_b2 = elem == null ? void 0 : elem.scrollWidth) != null ? _b2 : 0
      };
      await onLoadMore(state);
      if (options.preserveScrollPosition && elem) {
        nextTick(() => {
          elem.scrollTo({
            top: elem.scrollHeight - previous.height,
            left: elem.scrollWidth - previous.width
          });
        });
      }
    }
  });
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = window && "IntersectionObserver" in window;
  let cleanup = noop;
  const stopWatch = isSupported ? watch(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = (/* unused pure expression or super */ null && (["mousedown", "mouseup", "keydown", "keyup"]));
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = new Set();
  const usedKeys = new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (code) {
      if (value)
        current.add(e.code);
      else
        current.delete(e.code);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  if (target) {
    useEventListener(target, "keydown", (e) => {
      updateRefs(e, true);
      return onEventFired(e);
    }, { passive });
    useEventListener(target, "keyup", (e) => {
      updateRefs(e, false);
      return onEventFired(e);
    }, { passive });
    useEventListener("blur", reset, { passive: true });
    useEventListener("focus", reset, { passive: true });
  }
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}

var core_defProp$6 = Object.defineProperty;
var core_getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var core_hasOwnProp$7 = Object.prototype.hasOwnProperty;
var core_propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$6 = (obj, key, value) => key in obj ? core_defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$7.call(b, prop))
      core_defNormalProp$6(a, prop, b[prop]);
  if (core_getOwnPropSymbols$7)
    for (var prop of core_getOwnPropSymbols$7(b)) {
      if (core_propIsEnum$7.call(b, prop))
        core_defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (unref(source))
    cb(unref(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = core_spreadValues$6(core_spreadValues$6({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = ref(0);
  const duration = ref(0);
  const seeking = ref(false);
  const volume = ref(1);
  const waiting = ref(false);
  const ended = ref(false);
  const playing = ref(false);
  const rate = ref(1);
  const stalled = ref(false);
  const buffered = ref([]);
  const tracks = ref([]);
  const selectedTrack = ref(-1);
  const isPictureInPicture = ref(false);
  const muted = ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = isNumber(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = isNumber(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  watchEffect(() => {
    if (!document)
      return;
    const el = unref(target);
    if (!el)
      return;
    const src = unref(options.src);
    let sources = [];
    if (!src)
      return;
    if (isString(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  tryOnScopeDispose(() => {
    const el = unref(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  watch(volume, (vol) => {
    const el = unref(target);
    if (!el)
      return;
    el.volume = vol;
  });
  watch(muted, (mute) => {
    const el = unref(target);
    if (!el)
      return;
    el.muted = mute;
  });
  watch(rate, (rate2) => {
    const el = unref(target);
    if (!el)
      return;
    el.playbackRate = rate2;
  });
  watchEffect(() => {
    if (!document)
      return;
    const textTracks = unref(options.tracks);
    const el = unref(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = watchIgnorable(currentTime, (time) => {
    const el = unref(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = watchIgnorable(playing, (isPlaying) => {
    const el = unref(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = unref(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = unref(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(unref(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = unref(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = unref(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = watch([target], () => {
    const el = unref(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

const getMapVue2Compat = () => {
  const data = reactive({});
  return {
    get: (key) => data[key],
    set: (key, value) => set(data, key, value),
    has: (key) => Object.prototype.hasOwnProperty.call(data, key),
    delete: (key) => del(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        del(data, key);
      });
    }
  };
};
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return reactive(options.cache);
    if (isVue2)
      return getMapVue2Compat();
    return reactive(new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = ref();
  const isSupported = typeof performance !== "undefined" && "memory" in performance;
  if (isSupported) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMounted() {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
}

function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    eventFilter
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  const mouseHandlerWrapper = (event) => {
    return eventFilter === void 0 ? mouseHandler(event) : eventFilter(() => mouseHandler(event), {});
  };
  const touchHandlerWrapper = (event) => {
    return eventFilter === void 0 ? touchHandler(event) : eventFilter(() => touchHandler(event), {});
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(window, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(window, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = ref(0);
  const elementY = ref(0);
  const elementPositionX = ref(0);
  const elementPositionY = ref(0);
  const elementHeight = ref(0);
  const elementWidth = ref(0);
  const isOutside = ref(true);
  let stop = () => {
  };
  if (window) {
    stop = watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = ref(initialValue);
  const sourceType = ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var core_getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var core_hasOwnProp$6 = Object.prototype.hasOwnProperty;
var core_propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var core_objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$6)
    for (var prop of core_getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = core_objRest$1(_a, ["window"]);
  let observer;
  const isSupported = window && "MutationObserver" in window;
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported && window && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const useNavigatorLanguage = (options = {}) => {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "language" in navigator);
  const language = ref(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
};

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = Boolean(navigator && "connection" in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const onlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref("unknown");
  const connection = isSupported && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var core_defProp$5 = Object.defineProperty;
var core_getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var core_hasOwnProp$5 = Object.prototype.hasOwnProperty;
var core_propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$5 = (obj, key, value) => key in obj ? core_defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$5.call(b, prop))
      core_defNormalProp$5(a, prop, b[prop]);
  if (core_getOwnPropSymbols$5)
    for (var prop of core_getOwnPropSymbols$5(b)) {
      if (core_propIsEnum$5.call(b, prop))
        core_defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return core_spreadValues$5({
      now
    }, controls);
  } else {
    return now;
  }
}

function useObjectUrl(object) {
  const url = ref();
  const release = () => {
    if (url.value)
      URL.revokeObjectURL(url.value);
    url.value = void 0;
  };
  watch(() => unref(object), (newObject) => {
    release();
    if (newObject)
      url.value = URL.createObjectURL(newObject);
  }, { immediate: true });
  tryOnScopeDispose(release);
  return readonly(url);
}

function useOffsetPagination(options) {
  const {
    total = Infinity,
    pageSize = 10,
    page = 1,
    onPageChange = noop,
    onPageSizeChange = noop,
    onPageCountChange = noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Infinity);
  const pageCount = computed(() => Math.ceil(unref(total) / unref(currentPageSize)));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === pageCount.value);
  if (isRef(page))
    syncRef(page, currentPage);
  if (isRef(pageSize))
    syncRef(pageSize, currentPageSize);
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  watch(currentPage, () => {
    onPageChange(reactive(returnValue));
  });
  watch(currentPageSize, () => {
    onPageSizeChange(reactive(returnValue));
  });
  watch(pageCount, () => {
    onPageCountChange(reactive(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var core_defProp$4 = Object.defineProperty;
var core_defProps$1 = Object.defineProperties;
var core_getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var core_hasOwnProp$4 = Object.prototype.hasOwnProperty;
var core_propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$4 = (obj, key, value) => key in obj ? core_defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$4.call(b, prop))
      core_defNormalProp$4(a, prop, b[prop]);
  if (core_getOwnPropSymbols$4)
    for (var prop of core_getOwnPropSymbols$4(b)) {
      if (core_propIsEnum$4.call(b, prop))
        core_defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps$1 = (a, b) => core_defProps$1(a, core_getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const core_keys = /* @__PURE__ */ (/* unused pure expression or super */ null && (Object.keys(defaultState)));
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = ref(false);
  const state = ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = objectPick(event, core_keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return core_spreadProps$1(core_spreadValues$4({}, toRefs(state)), {
    isInside
  });
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", noop, optionsBlock);
  document.removeEventListener("x", noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = ref(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = ref(false);
  const isPointerDown = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return ref(["en"]);
  const navigator = window.navigator;
  const value = ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

const useScreenOrientation = (options = {}) => {
  const {
    window = defaultWindow
  } = options;
  const isSupported = !!(window && "screen" in window && "orientation" in window.screen);
  const screenOrientation = isSupported ? window.screen.orientation : {};
  const orientation = ref(screenOrientation.type);
  const angle = ref(screenOrientation.angle || 0);
  if (isSupported) {
    useEventListener(window, "orientationchange", () => {
      orientation.value = screenOrientation.type;
      angle.value = screenOrientation.angle;
    });
  }
  const lockOrientation = (type) => {
    if (!isSupported)
      return Promise.reject(new Error("Not supported"));
    return screenOrientation.lock(type);
  };
  const unlockOrientation = () => {
    if (isSupported)
      screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
};

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = ref("");
  const right = ref("");
  const bottom = ref("");
  const left = ref("");
  if (isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", useDebounceFn(update));
  }
  function update() {
    top.value = core_getValue(topVarName);
    right.value = core_getValue(rightVarName);
    bottom.value = core_getValue(bottomVarName);
    left.value = core_getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function core_getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${src}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = unref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${src}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(() => unref(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = unref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(ele, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = unref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var core_defProp$3 = Object.defineProperty;
var core_getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var core_hasOwnProp$3 = Object.prototype.hasOwnProperty;
var core_propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$3 = (obj, key, value) => key in obj ? core_defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$3.call(b, prop))
      core_defNormalProp$3(a, prop, b[prop]);
  if (core_getOwnPropSymbols$3)
    for (var prop of core_getOwnPropSymbols$3(b)) {
      if (core_propIsEnum$3.call(b, prop))
        core_defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = _navigator && "canShare" in _navigator;
  const share = async (overrideOptions = {}) => {
    if (isSupported) {
      const data = core_spreadValues$3(core_spreadValues$3({}, unref(shareOptions)), unref(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = ref(options.lang || "en-US");
  const isListening = ref(false);
  const isFinal = ref(false);
  const result = ref("");
  const error = shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = Boolean(SpeechRecognition);
  let recognition;
  if (isSupported) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = unref(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = unref(lang);
    };
    watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  var _a, _b;
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = Boolean(synth);
  const isPlaying = ref(false);
  const status = ref("init");
  const voiceInfo = {
    lang: ((_a = options.voice) == null ? void 0 : _a.lang) || "default",
    name: ((_b = options.voice) == null ? void 0 : _b.name) || ""
  };
  const spokenText = ref(text || "");
  const lang = ref(options.lang || "en-US");
  const error = shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = unref(lang);
    options.voice && (utterance2.voice = options.voice);
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      utterance2.lang = unref(lang);
    };
  };
  const utterance = computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported) {
    bindEventsForUtterance(utterance.value);
    watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    voiceInfo,
    utterance,
    error,
    toggle,
    speak
  };
}

function useStepper(steps, initialStep) {
  const stepsRef = ref(steps);
  const stepNames = computed(() => Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
  const index = ref(stepNames.value.indexOf(initialStep != null ? initialStep : stepNames.value[0]));
  const current = computed(() => at(index.value));
  const isFirst = computed(() => index.value === 0);
  const isLast = computed(() => index.value === stepNames.value.length - 1);
  const next = computed(() => stepNames.value[index.value + 1]);
  const previous = computed(() => stepNames.value[index.value - 1]);
  function at(index2) {
    if (Array.isArray(stepsRef.value))
      return stepsRef.value[index2];
    return stepsRef.value[stepNames.value[index2]];
  }
  function get(step) {
    if (!stepNames.value.includes(step))
      return;
    return at(stepNames.value.indexOf(step));
  }
  function goTo(step) {
    if (stepNames.value.includes(step))
      index.value = stepNames.value.indexOf(step);
  }
  function goToNext() {
    if (isLast.value)
      return;
    index.value++;
  }
  function goToPrevious() {
    if (isFirst.value)
      return;
    index.value--;
  }
  function goBackTo(step) {
    if (isAfter(step))
      goTo(step);
  }
  function isNext(step) {
    return stepNames.value.indexOf(step) === index.value + 1;
  }
  function isPrevious(step) {
    return stepNames.value.indexOf(step) === index.value - 1;
  }
  function isCurrent(step) {
    return stepNames.value.indexOf(step) === index.value;
  }
  function isBefore(step) {
    return index.value < stepNames.value.indexOf(step);
  }
  function isAfter(step) {
    return index.value > stepNames.value.indexOf(step);
  }
  return {
    steps: stepsRef,
    stepNames,
    index,
    current,
    next,
    previous,
    isFirst,
    isLast,
    at,
    get,
    goTo,
    goToNext,
    goToPrevious,
    goBackTo,
    isNext,
    isPrevious,
    isCurrent,
    isBefore,
    isAfter
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = unref(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? shallowRef : ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    watchWithFilter(data, async () => {
      try {
        if (data.value == null)
          await storage.removeItem(key);
        else
          await storage.setItem(key, await serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = ref(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    el.type = "text/css";
    el.id = id;
    if (options.media)
      el.media = options.media;
    document.head.appendChild(el);
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.innerText = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}

function useTemplateRefsList() {
  const refs = ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  const ranges = new Array(rangeCount);
  for (let i = 0; i < rangeCount; i++) {
    const range = selection.getRangeAt(i);
    ranges[i] = range;
  }
  return ranges;
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = ref(null);
  const text = computed(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

function useTextareaAutosize(options) {
  const textarea = ref(options == null ? void 0 : options.element);
  const input = ref(options == null ? void 0 : options.input);
  function triggerResize() {
    var _a, _b;
    if (!textarea.value)
      return;
    textarea.value.style.height = "1px";
    textarea.value.style.height = `${(_a = textarea.value) == null ? void 0 : _a.scrollHeight}px`;
    (_b = options == null ? void 0 : options.onResize) == null ? void 0 : _b.call(options);
  }
  watch([input, textarea], triggerResize, { immediate: true });
  if (options == null ? void 0 : options.watch)
    watch(options.watch, triggerResize, { immediate: true, deep: true });
  return {
    textarea,
    input,
    triggerResize
  };
}

var core_defProp$2 = Object.defineProperty;
var core_defProps = Object.defineProperties;
var core_getOwnPropDescs = Object.getOwnPropertyDescriptors;
var core_getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var core_hasOwnProp$2 = Object.prototype.hasOwnProperty;
var core_propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$2 = (obj, key, value) => key in obj ? core_defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$2.call(b, prop))
      core_defNormalProp$2(a, prop, b[prop]);
  if (core_getOwnPropSymbols$2)
    for (var prop of core_getOwnPropSymbols$2(b)) {
      if (core_propIsEnum$2.call(b, prop))
        core_defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var core_spreadProps = (a, b) => core_defProps(a, core_getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = throttleFilter(throttle, trailing);
  const history = useRefHistory(source, core_spreadProps(core_spreadValues$2({}, options), { eventFilter: filter }));
  return core_spreadValues$2({}, history);
}

var core_defProp$1 = Object.defineProperty;
var core_getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var core_hasOwnProp$1 = Object.prototype.hasOwnProperty;
var core_propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var core_defNormalProp$1 = (obj, key, value) => key in obj ? core_defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp$1.call(b, prop))
      core_defNormalProp$1(a, prop, b[prop]);
  if (core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(b)) {
      if (core_propIsEnum$1.call(b, prop))
        core_defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var core_objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (core_hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && core_getOwnPropSymbols$1)
    for (var prop of core_getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && core_propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = core_objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = computed(() => getTimeago(new Date(unref(time)), unref(now.value)));
  if (exposeControls) {
    return core_spreadValues$1({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = useTimeoutFn(loop, interval);
  const isActive = ref(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var core_defProp = Object.defineProperty;
var core_getOwnPropSymbols = Object.getOwnPropertySymbols;
var core_hasOwnProp = Object.prototype.hasOwnProperty;
var core_propIsEnum = Object.prototype.propertyIsEnumerable;
var core_defNormalProp = (obj, key, value) => key in obj ? core_defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var core_spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (core_hasOwnProp.call(b, prop))
      core_defNormalProp(a, prop, b[prop]);
  if (core_getOwnPropSymbols)
    for (var prop of core_getOwnPropSymbols(b)) {
      if (core_propIsEnum.call(b, prop))
        core_defNormalProp(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = ref(timestamp() + offset);
  const update = () => ts.value = timestamp() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return core_spreadValues({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = "%s"
  } = options;
  const title = ref((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = titleTemplate.replace("%s", t);
  }, { immediate: true });
  if (observe && document) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = titleTemplate.replace("%s", document.title);
    }, { childList: true });
  }
  return title;
}

const TransitionPresets = {
  linear: shared_identity,
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity
  } = options;
  const currentTransition = computed(() => {
    const t = unref(transition);
    return isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = computed(() => {
    const s = unref(source);
    return isNumber(s) ? s : s.map(unref);
  });
  const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = useTimeoutFn(start, delay, { immediate: false });
  watch(sourceVector, () => {
    if (unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector;
    return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return reactive(initialValue);
  const state = reactive({});
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${location.hash || ""}`;
    if (mode === "hash-params")
      return `${location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState(window.history.state, window.document.title, window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  const initial = read();
  if (initial.keys().next().value)
    updateState(initial);
  else
    Object.assign(state, initialValue);
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b, _c;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = ref((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = ref(options.videoDeviceId);
  const audioDeviceId = ref(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = Boolean((_c = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _c.getUserMedia);
  const stream = shallowRef();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  watch([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c, _d, _e;
  const {
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    if (isVue2) {
      const modelOptions = (_e = (_d = vm == null ? void 0 : vm.proxy) == null ? void 0 : _d.$options) == null ? void 0 : _e.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const getValue = () => isDef(props[key]) ? props[key] : defaultValue;
  if (passive) {
    const proxy = ref(getValue());
    watch(() => props[key], (v) => proxy.value = v);
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = typeof navigator !== "undefined" && "vibrate" in navigator;
  const patternRef = ref(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = useIntervalFn(vibrate, interval, {
      immediate: false,
      immediateCallback: false
    });
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  watch([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = navigator && "wakeLock" in navigator;
  const isActive = ref(false);
  async function onVisibilityChange() {
    if (!isSupported || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

const useWebNotification = (defaultOptions = {}) => {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = !!window && "Notification" in window;
  const notification = ref(null);
  const requestPermission = async () => {
    if (!isSupported)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const onClick = createEventHook();
  const onShow = createEventHook();
  const onError = createEventHook();
  const onClose = createEventHook();
  const show = async (overrides) => {
    if (!isSupported)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = (event) => onClick.trigger(event);
    notification.value.onshow = (event) => onShow.trigger(event);
    notification.value.onerror = (event) => onError.trigger(event);
    notification.value.onclose = (event) => onClose.trigger(event);
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  tryOnMounted(async () => {
    if (isSupported)
      await requestPermission();
  });
  tryOnScopeDispose(close);
  if (isSupported && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = ref(null);
  const status = ref("CONNECTING");
  const wsRef = ref();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = useIntervalFn(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = ref(null);
  const worker = shallowRef();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = ref();
  const workerStatus = ref("PENDING");
  const promise = ref({});
  const timeoutId = ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return ref(false);
  const focused = ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.pageXOffset);
  const y = ref(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/form-label-wrap.mjs









const COMPONENT_NAME = "ElLabelWrap";
var FormLabelWrap = (0,external_Vue_.defineComponent)({
  name: COMPONENT_NAME,
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean
  },
  setup(props, {
    slots
  }) {
    const formContext = (0,external_Vue_.inject)(formContextKey, void 0);
    const formItemContext = (0,external_Vue_.inject)(formItemContextKey);
    if (!formItemContext)
      throwError(COMPONENT_NAME, "usage: <el-form-item><label-wrap /></el-form-item>");
    const ns = useNamespace("form");
    const el = (0,external_Vue_.ref)();
    const computedWidth = (0,external_Vue_.ref)(0);
    const getLabelWidth = () => {
      var _a;
      if ((_a = el.value) == null ? void 0 : _a.firstElementChild) {
        const width = window.getComputedStyle(el.value.firstElementChild).width;
        return Math.ceil(Number.parseFloat(width));
      } else {
        return 0;
      }
    };
    const updateLabelWidth = (action = "update") => {
      (0,external_Vue_.nextTick)(() => {
        if (slots.default && props.isAutoWidth) {
          if (action === "update") {
            computedWidth.value = getLabelWidth();
          } else if (action === "remove") {
            formContext == null ? void 0 : formContext.deregisterLabelWidth(computedWidth.value);
          }
        }
      });
    };
    const updateLabelWidthFn = () => updateLabelWidth("update");
    (0,external_Vue_.onMounted)(() => {
      updateLabelWidthFn();
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      updateLabelWidth("remove");
    });
    (0,external_Vue_.onUpdated)(() => updateLabelWidthFn());
    (0,external_Vue_.watch)(computedWidth, (val, oldVal) => {
      if (props.updateAll) {
        formContext == null ? void 0 : formContext.registerLabelWidth(val, oldVal);
      }
    });
    useResizeObserver((0,external_Vue_.computed)(() => {
      var _a, _b;
      return (_b = (_a = el.value) == null ? void 0 : _a.firstElementChild) != null ? _b : null;
    }), updateLabelWidthFn);
    return () => {
      var _a, _b;
      if (!slots)
        return null;
      const {
        isAutoWidth
      } = props;
      if (isAutoWidth) {
        const autoLabelWidth = formContext == null ? void 0 : formContext.autoLabelWidth;
        const style = {};
        if (autoLabelWidth && autoLabelWidth !== "auto") {
          const marginWidth = Math.max(0, Number.parseInt(autoLabelWidth, 10) - computedWidth.value);
          const marginPosition = formContext.labelPosition === "left" ? "marginRight" : "marginLeft";
          if (marginWidth) {
            style[marginPosition] = `${marginWidth}px`;
          }
        }
        return (0,external_Vue_.createVNode)("div", {
          "ref": el,
          "class": [ns.be("item", "label-wrap")],
          "style": style
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
      } else {
        return (0,external_Vue_.createVNode)(external_Vue_.Fragment, {
          "ref": el
        }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
      }
    };
  }
});


//# sourceMappingURL=form-label-wrap.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-id/index.mjs





const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = (0,external_Vue_.inject)(ID_INJECTION_KEY, defaultIdInjection);
  if (!shared_isClient && idInjection === defaultIdInjection) {
    error_debugWarn("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const idRef = (0,external_Vue_.computed)(() => (0,external_Vue_.unref)(deterministicId) || `el-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/dom/style.mjs







const style_SCOPE = "utils/dom/style";
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const style_getStyle = (element, styleName) => {
  var _a;
  if (!isClient || !element || !styleName)
    return "";
  let key = camelize(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch (e) {
    return element.style[key];
  }
};
const setStyle = (element, styleName, value) => {
  if (!element || !styleName)
    return;
  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value2]) => setStyle(element, prop, value2));
  } else {
    const key = camelize(styleName);
    element.style[key] = value;
  }
};
const removeStyle = (element, style) => {
  if (!element || !style)
    return;
  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if ((0,shared_esm_bundler/* isString */.HD)(value)) {
    return value;
  } else if (shared_isNumber(value)) {
    return `${value}${defaultUnit}`;
  }
  error_debugWarn(style_SCOPE, "binding value must be a string or number");
}


//# sourceMappingURL=style.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js + 1 modules
var lodash_es_get = __webpack_require__(5444);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js + 1 modules
var lodash_es_set = __webpack_require__(5618);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/objects.mjs



const objects_keysOf = (arr) => Object.keys(arr);
const objects_entriesOf = (arr) => Object.entries(arr);
const getProp = (obj, path, defaultValue) => {
  return {
    get value() {
      return (0,lodash_es_get/* default */.Z)(obj, path, defaultValue);
    },
    set value(val) {
      (0,lodash_es_set/* default */.Z)(obj, path, val);
    }
  };
};


//# sourceMappingURL=objects.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/src/form-item2.mjs


















const _hoisted_1 = ["role", "aria-labelledby"];
const form_item2_default_ = {
  name: "ElFormItem"
};
const form_item2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...form_item2_default_,
  props: formItemProps,
  setup(__props, { expose }) {
    const props = __props;
    const slots = (0,external_Vue_.useSlots)();
    const formContext = (0,external_Vue_.inject)(formContextKey, void 0);
    const parentFormItemContext = (0,external_Vue_.inject)(formItemContextKey, void 0);
    const _size = useSize(void 0, { formItem: false });
    const ns = useNamespace("form-item");
    const labelId = useId().value;
    const inputIds = (0,external_Vue_.ref)([]);
    const validateState = (0,external_Vue_.ref)("");
    const validateStateDebounced = refDebounced(validateState, 100);
    const validateMessage = (0,external_Vue_.ref)("");
    const formItemRef = (0,external_Vue_.ref)();
    let initialValue = void 0;
    let isResettingField = false;
    const labelStyle = (0,external_Vue_.computed)(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top") {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (labelWidth)
        return { width: labelWidth };
      return {};
    });
    const contentStyle = (0,external_Vue_.computed)(() => {
      if ((formContext == null ? void 0 : formContext.labelPosition) === "top" || (formContext == null ? void 0 : formContext.inline)) {
        return {};
      }
      if (!props.label && !props.labelWidth && isNested) {
        return {};
      }
      const labelWidth = addUnit(props.labelWidth || (formContext == null ? void 0 : formContext.labelWidth) || "");
      if (!props.label && !slots.label) {
        return { marginLeft: labelWidth };
      }
      return {};
    });
    const formItemClasses = (0,external_Vue_.computed)(() => [
      ns.b(),
      ns.m(_size.value),
      ns.is("error", validateState.value === "error"),
      ns.is("validating", validateState.value === "validating"),
      ns.is("success", validateState.value === "success"),
      ns.is("required", isRequired.value || props.required),
      ns.is("no-asterisk", formContext == null ? void 0 : formContext.hideRequiredAsterisk),
      { [ns.m("feedback")]: formContext == null ? void 0 : formContext.statusIcon }
    ]);
    const _inlineMessage = (0,external_Vue_.computed)(() => isBoolean(props.inlineMessage) ? props.inlineMessage : (formContext == null ? void 0 : formContext.inlineMessage) || false);
    const validateClasses = (0,external_Vue_.computed)(() => [
      ns.e("error"),
      { [ns.em("error", "inline")]: _inlineMessage.value }
    ]);
    const propString = (0,external_Vue_.computed)(() => {
      if (!props.prop)
        return "";
      return (0,shared_esm_bundler/* isString */.HD)(props.prop) ? props.prop : props.prop.join(".");
    });
    const hasLabel = (0,external_Vue_.computed)(() => {
      return !!(props.label || slots.label);
    });
    const labelFor = (0,external_Vue_.computed)(() => {
      return props.for || inputIds.value.length === 1 ? inputIds.value[0] : void 0;
    });
    const isGroup = (0,external_Vue_.computed)(() => {
      return !labelFor.value && hasLabel.value;
    });
    const isNested = !!parentFormItemContext;
    const fieldValue = (0,external_Vue_.computed)(() => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop) {
        return;
      }
      return getProp(model, props.prop).value;
    });
    const _rules = (0,external_Vue_.computed)(() => {
      const rules = props.rules ? lodash_es_castArray(props.rules) : [];
      const formRules = formContext == null ? void 0 : formContext.rules;
      if (formRules && props.prop) {
        const _rules2 = getProp(formRules, props.prop).value;
        if (_rules2) {
          rules.push(...lodash_es_castArray(_rules2));
        }
      }
      if (props.required !== void 0) {
        rules.push({ required: !!props.required });
      }
      return rules;
    });
    const validateEnabled = (0,external_Vue_.computed)(() => _rules.value.length > 0);
    const getFilteredRule = (trigger) => {
      const rules = _rules.value;
      return rules.filter((rule) => {
        if (!rule.trigger || !trigger)
          return true;
        if (Array.isArray(rule.trigger)) {
          return rule.trigger.includes(trigger);
        } else {
          return rule.trigger === trigger;
        }
      }).map(({ trigger: trigger2, ...rule }) => rule);
    };
    const isRequired = (0,external_Vue_.computed)(() => _rules.value.some((rule) => rule.required === true));
    const shouldShowError = (0,external_Vue_.computed)(() => {
      var _a;
      return validateStateDebounced.value === "error" && props.showMessage && ((_a = formContext == null ? void 0 : formContext.showMessage) != null ? _a : true);
    });
    const currentLabel = (0,external_Vue_.computed)(() => `${props.label || ""}${(formContext == null ? void 0 : formContext.labelSuffix) || ""}`);
    const setValidationState = (state) => {
      validateState.value = state;
    };
    const onValidationFailed = (error) => {
      var _a, _b;
      const { errors, fields } = error;
      if (!errors || !fields) {
        console.error(error);
      }
      setValidationState("error");
      validateMessage.value = errors ? (_b = (_a = errors == null ? void 0 : errors[0]) == null ? void 0 : _a.message) != null ? _b : `${props.prop} is required` : "";
      formContext == null ? void 0 : formContext.emit("validate", props.prop, false, validateMessage.value);
    };
    const onValidationSucceeded = () => {
      setValidationState("success");
      formContext == null ? void 0 : formContext.emit("validate", props.prop, true, "");
    };
    const doValidate = async (rules) => {
      const modelName = propString.value;
      const validator = new Schema({
        [modelName]: rules
      });
      return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }).then(() => {
        onValidationSucceeded();
        return true;
      }).catch((err) => {
        onValidationFailed(err);
        return Promise.reject(err);
      });
    };
    const validate = async (trigger, callback) => {
      if (isResettingField) {
        isResettingField = false;
        return false;
      }
      const hasCallback = (0,shared_esm_bundler/* isFunction */.mf)(callback);
      if (!validateEnabled.value) {
        callback == null ? void 0 : callback(false);
        return false;
      }
      const rules = getFilteredRule(trigger);
      if (rules.length === 0) {
        callback == null ? void 0 : callback(true);
        return true;
      }
      setValidationState("validating");
      return doValidate(rules).then(() => {
        callback == null ? void 0 : callback(true);
        return true;
      }).catch((err) => {
        const { fields } = err;
        callback == null ? void 0 : callback(false, fields);
        return hasCallback ? false : Promise.reject(fields);
      });
    };
    const clearValidate = () => {
      setValidationState("");
      validateMessage.value = "";
    };
    const resetField = async () => {
      const model = formContext == null ? void 0 : formContext.model;
      if (!model || !props.prop)
        return;
      const computedValue = getProp(model, props.prop);
      if (!lodash_es_isEqual(computedValue.value, initialValue)) {
        isResettingField = true;
        computedValue.value = lodash_es_clone(initialValue);
      }
      await (0,external_Vue_.nextTick)();
      clearValidate();
    };
    const addInputId = (id) => {
      if (!inputIds.value.includes(id)) {
        inputIds.value.push(id);
      }
    };
    const removeInputId = (id) => {
      inputIds.value = inputIds.value.filter((listId) => listId !== id);
    };
    (0,external_Vue_.watch)(() => props.error, (val) => {
      validateMessage.value = val || "";
      setValidationState(val ? "error" : "");
    }, { immediate: true });
    (0,external_Vue_.watch)(() => props.validateStatus, (val) => setValidationState(val || ""));
    const context = (0,external_Vue_.reactive)({
      ...(0,external_Vue_.toRefs)(props),
      $el: formItemRef,
      size: _size,
      validateState,
      labelId,
      inputIds,
      isGroup,
      addInputId,
      removeInputId,
      resetField,
      clearValidate,
      validate
    });
    (0,external_Vue_.provide)(formItemContextKey, context);
    (0,external_Vue_.onMounted)(() => {
      if (props.prop) {
        formContext == null ? void 0 : formContext.addField(context);
        initialValue = lodash_es_clone(fieldValue.value);
      }
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      formContext == null ? void 0 : formContext.removeField(context);
    });
    expose({
      size: _size,
      validateMessage,
      validateState,
      validate,
      clearValidate,
      resetField
    });
    return (_ctx, _cache) => {
      var _a;
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        ref_key: "formItemRef",
        ref: formItemRef,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(formItemClasses)),
        role: (0,external_Vue_.unref)(isGroup) ? "group" : void 0,
        "aria-labelledby": (0,external_Vue_.unref)(isGroup) ? (0,external_Vue_.unref)(labelId) : void 0
      }, [
        (0,external_Vue_.createVNode)((0,external_Vue_.unref)(FormLabelWrap), {
          "is-auto-width": (0,external_Vue_.unref)(labelStyle).width === "auto",
          "update-all": ((_a = (0,external_Vue_.unref)(formContext)) == null ? void 0 : _a.labelWidth) === "auto"
        }, {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.unref)(hasLabel) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)((0,external_Vue_.unref)(labelFor) ? "label" : "div"), {
              key: 0,
              id: (0,external_Vue_.unref)(labelId),
              for: (0,external_Vue_.unref)(labelFor),
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("label")),
              style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(labelStyle))
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.renderSlot)(_ctx.$slots, "label", { label: (0,external_Vue_.unref)(currentLabel) }, () => [
                  (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(currentLabel)), 1)
                ])
              ]),
              _: 3
            }, 8, ["id", "for", "class", "style"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ]),
          _: 3
        }, 8, ["is-auto-width", "update-all"]),
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("content")),
          style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(contentStyle))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default"),
          (0,external_Vue_.createVNode)(external_Vue_.Transition, {
            name: `${(0,external_Vue_.unref)(ns).namespace.value}-zoom-in-top`
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.unref)(shouldShowError) ? (0,external_Vue_.renderSlot)(_ctx.$slots, "error", {
                key: 0,
                error: validateMessage.value
              }, () => [
                (0,external_Vue_.createElementVNode)("div", {
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(validateClasses))
                }, (0,external_Vue_.toDisplayString)(validateMessage.value), 3)
              ]) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ]),
            _: 3
          }, 8, ["name"])
        ], 6)
      ], 10, _hoisted_1);
    };
  }
});
var FormItem = /* @__PURE__ */ _export_sfc(form_item2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);


//# sourceMappingURL=form-item2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/vue/install.mjs


const withInstall = (main, extra) => {
  ;
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  ;
  fn.install = (app) => {
    ;
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withInstallDirective = (directive, name) => {
  ;
  directive.install = (app) => {
    app.directive(name, directive);
  };
  return directive;
};
const withNoopInstall = (component) => {
  ;
  component.install = shared_esm_bundler/* NOOP */.dG;
  return component;
};


//# sourceMappingURL=install.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/index.mjs








const ElForm = withInstall(Form, {
  FormItem: FormItem
});
const ElFormItem = withNoopInstall(FormItem);


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var lodash_es_isNil = __webpack_require__(9330);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/icon/src/icon.mjs



const iconProps = buildProps({
  size: {
    type: definePropType([Number, String])
  },
  color: {
    type: String
  }
});


//# sourceMappingURL=icon.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/types.mjs






const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || (0,shared_esm_bundler/* isArray */.kJ)(val) && val.length === 0 || (0,shared_esm_bundler/* isObject */.Kn)(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};


//# sourceMappingURL=types.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/icon/src/icon2.mjs









const icon2_default_ = {
  name: "ElIcon",
  inheritAttrs: false
};
const icon2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...icon2_default_,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("icon");
    const style = (0,external_Vue_.computed)(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: isUndefined(props.size) ? void 0 : addUnit(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("i", (0,external_Vue_.mergeProps)({
        class: (0,external_Vue_.unref)(ns).b(),
        style: (0,external_Vue_.unref)(style)
      }, _ctx.$attrs), [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ _export_sfc(icon2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);


//# sourceMappingURL=icon2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/icon/index.mjs





const ElIcon = withInstall(Icon);


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@element-plus+icons-vue@2.0.6_vue@3.2.37/node_modules/@element-plus/icons-vue/dist/index.js
var dist = __webpack_require__(5823);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input/src/utils.mjs



let hiddenTextarea = void 0;
const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`;
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    document.body.appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  hiddenTextarea.setAttribute("style", `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (shared_isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (shared_isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_a = hiddenTextarea.parentNode) == null ? void 0 : _a.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/vue/icon.mjs




const iconPropType = definePropType([
  String,
  Object,
  Function
]);
const CloseComponents = {
  Close: dist/* Close */.x8P
};
const TypeComponents = {
  Close: dist/* Close */.x8P,
  SuccessFilled: dist/* SuccessFilled */.c5o,
  InfoFilled: dist/* InfoFilled */.cEj,
  WarningFilled: dist/* WarningFilled */.Rrw,
  CircleCloseFilled: dist/* CircleCloseFilled */.Tw$
};
const TypeComponentsMap = {
  success: dist/* SuccessFilled */.c5o,
  warning: dist/* WarningFilled */.Rrw,
  error: dist/* CircleCloseFilled */.Tw$,
  info: dist/* InfoFilled */.cEj
};
const ValidateComponentsMap = {
  validating: dist/* Loading */.gbz,
  success: dist/* CircleCheck */.yGk,
  error: dist/* CircleClose */.K41
};


//# sourceMappingURL=icon.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/typescript.mjs
const mutable = (val) => val;


//# sourceMappingURL=typescript.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/constants/event.mjs
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const INPUT_EVENT = "input";


//# sourceMappingURL=event.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input/src/input.mjs










const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  showWordLimit: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: iconPropType,
    default: ""
  },
  prefixIcon: {
    type: iconPropType,
    default: ""
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  }
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => (0,shared_esm_bundler/* isString */.HD)(value),
  input: (value) => (0,shared_esm_bundler/* isString */.HD)(value),
  change: (value) => (0,shared_esm_bundler/* isString */.HD)(value),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};


//# sourceMappingURL=input.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-attrs/index.mjs





const DEFAULT_EXCLUDE_KEYS = ["class", "style"];
const LISTENER_PREFIX = /^on[A-Z]/;
const useAttrs = (params = {}) => {
  const { excludeListeners = false, excludeKeys } = params;
  const allExcludeKeys = (0,external_Vue_.computed)(() => {
    return ((excludeKeys == null ? void 0 : excludeKeys.value) || []).concat(DEFAULT_EXCLUDE_KEYS);
  });
  const instance = (0,external_Vue_.getCurrentInstance)();
  if (!instance) {
    error_debugWarn("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function");
    return (0,external_Vue_.computed)(() => ({}));
  }
  return (0,external_Vue_.computed)(() => {
    var _a;
    return (0,fromPairs/* default */.Z)(Object.entries((_a = instance.proxy) == null ? void 0 : _a.$attrs).filter(([key]) => !allExcludeKeys.value.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))));
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-form-item/index.mjs





const useFormItem = () => {
  const form = (0,external_Vue_.inject)(formContextKey, void 0);
  const formItem = (0,external_Vue_.inject)(formItemContextKey, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = (0,external_Vue_.ref)(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = (0,external_Vue_.ref)(false);
  }
  const inputId = (0,external_Vue_.ref)();
  let idUnwatch = void 0;
  const isLabeledByFormItem = (0,external_Vue_.computed)(() => {
    var _a;
    return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  (0,external_Vue_.onMounted)(() => {
    idUnwatch = (0,external_Vue_.watch)([(0,external_Vue_.toRef)(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? useId().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  (0,external_Vue_.onUnmounted)(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-cursor/index.mjs


function useCursor(input) {
  const selectionRef = (0,external_Vue_.ref)();
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionRef.value = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionRef.value == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionRef.value;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/i18n.mjs
const isKorean = (text) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);


//# sourceMappingURL=i18n.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input/src/input2.mjs






















const input2_hoisted_1 = ["role"];
const _hoisted_2 = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_3 = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
const input2_default_ = {
  name: "ElInput",
  inheritAttrs: false
};
const input2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...input2_default_,
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const PENDANT_MAP = {
      suffix: "append",
      prefix: "prepend"
    };
    const instance = (0,external_Vue_.getCurrentInstance)();
    const rawAttrs = (0,external_Vue_.useAttrs)();
    const slots = (0,external_Vue_.useSlots)();
    const containerAttrs = (0,external_Vue_.computed)(() => {
      const comboBoxAttrs = {};
      if (props.containerRole === "combobox") {
        comboBoxAttrs["aria-haspopup"] = rawAttrs["aria-haspopup"];
        comboBoxAttrs["aria-owns"] = rawAttrs["aria-owns"];
        comboBoxAttrs["aria-expanded"] = rawAttrs["aria-expanded"];
      }
      return comboBoxAttrs;
    });
    const attrs = useAttrs({
      excludeKeys: (0,external_Vue_.computed)(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const { form, formItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const inputSize = useSize();
    const inputDisabled = useDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = (0,external_Vue_.shallowRef)();
    const textarea = (0,external_Vue_.shallowRef)();
    const focused = (0,external_Vue_.ref)(false);
    const hovering = (0,external_Vue_.ref)(false);
    const isComposing = (0,external_Vue_.ref)(false);
    const passwordVisible = (0,external_Vue_.ref)(false);
    const countStyle = (0,external_Vue_.ref)();
    const textareaCalcStyle = (0,external_Vue_.shallowRef)(props.inputStyle);
    const _ref = (0,external_Vue_.computed)(() => input.value || textarea.value);
    const needStatusIcon = (0,external_Vue_.computed)(() => {
      var _a;
      return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
    });
    const validateState = (0,external_Vue_.computed)(() => (formItem == null ? void 0 : formItem.validateState) || "");
    const validateIcon = (0,external_Vue_.computed)(() => validateState.value && ValidateComponentsMap[validateState.value]);
    const passwordIcon = (0,external_Vue_.computed)(() => passwordVisible.value ? dist/* View */.G7x : dist/* Hide */.caK);
    const containerStyle = (0,external_Vue_.computed)(() => [
      rawAttrs.style,
      props.inputStyle
    ]);
    const textareaStyle = (0,external_Vue_.computed)(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = (0,external_Vue_.computed)(() => (0,lodash_es_isNil/* default */.Z)(props.modelValue) ? "" : String(props.modelValue));
    const showClear = (0,external_Vue_.computed)(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = (0,external_Vue_.computed)(() => props.showPassword && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = (0,external_Vue_.computed)(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = (0,external_Vue_.computed)(() => Array.from(nativeInputValue.value).length);
    const inputExceed = (0,external_Vue_.computed)(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const suffixVisible = (0,external_Vue_.computed)(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries) => {
      if (!isWordLimitVisible.value || props.resize !== "both")
        return;
      const entry = entries[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 15 + 6}px)`
      };
    });
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!shared_isClient || type !== "textarea")
        return;
      if (autosize) {
        const minRows = (0,shared_esm_bundler/* isObject */.Kn)(autosize) ? autosize.minRows : void 0;
        const maxRows = (0,shared_esm_bundler/* isObject */.Kn)(autosize) ? autosize.maxRows : void 0;
        textareaCalcStyle.value = {
          ...calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.${nsInput.e(place)}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.${nsInput.be("group", pendant)}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = async (event) => {
      recordCursor();
      let { value } = event.target;
      if (props.formatter) {
        value = props.parser ? props.parser(value) : value;
        value = props.formatter(value);
      }
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(UPDATE_MODEL_EVENT, value);
      emit("input", value);
      await (0,external_Vue_.nextTick)();
      setNativeInputValue();
      setCursor();
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      var _a;
      await (0,external_Vue_.nextTick)();
      (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => error_debugWarn(err));
      }
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    (0,external_Vue_.watch)(() => props.modelValue, () => {
      var _a;
      (0,external_Vue_.nextTick)(() => resizeTextarea());
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error_debugWarn(err));
      }
    });
    (0,external_Vue_.watch)(nativeInputValue, () => setNativeInputValue());
    (0,external_Vue_.watch)(() => props.type, async () => {
      await (0,external_Vue_.nextTick)();
      setNativeInputValue();
      resizeTextarea();
      updateIconOffset();
    });
    (0,external_Vue_.onMounted)(async () => {
      if (!props.formatter && props.parser) {
        error_debugWarn("ElInput", "If you set the parser, you also need to set the formatter.");
      }
      setNativeInputValue();
      updateIconOffset();
      await (0,external_Vue_.nextTick)();
      resizeTextarea();
    });
    (0,external_Vue_.onUpdated)(async () => {
      await (0,external_Vue_.nextTick)();
      updateIconOffset();
    });
    expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: (0,external_Vue_.toRef)(props, "autosize"),
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", (0,external_Vue_.mergeProps)((0,external_Vue_.unref)(containerAttrs), {
        class: [
          _ctx.type === "textarea" ? (0,external_Vue_.unref)(nsTextarea).b() : (0,external_Vue_.unref)(nsInput).b(),
          (0,external_Vue_.unref)(nsInput).m((0,external_Vue_.unref)(inputSize)),
          (0,external_Vue_.unref)(nsInput).is("disabled", (0,external_Vue_.unref)(inputDisabled)),
          (0,external_Vue_.unref)(nsInput).is("exceed", (0,external_Vue_.unref)(inputExceed)),
          {
            [(0,external_Vue_.unref)(nsInput).b("group")]: _ctx.$slots.prepend || _ctx.$slots.append,
            [(0,external_Vue_.unref)(nsInput).bm("group", "append")]: _ctx.$slots.append,
            [(0,external_Vue_.unref)(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend,
            [(0,external_Vue_.unref)(nsInput).m("prefix")]: _ctx.$slots.prefix || _ctx.prefixIcon,
            [(0,external_Vue_.unref)(nsInput).m("suffix")]: _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
            [(0,external_Vue_.unref)(nsInput).bm("suffix", "password-clear")]: (0,external_Vue_.unref)(showClear) && (0,external_Vue_.unref)(showPwdVisible)
          },
          _ctx.$attrs.class
        ],
        style: (0,external_Vue_.unref)(containerStyle),
        role: _ctx.containerRole,
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave
      }), [
        (0,external_Vue_.createCommentVNode)(" input "),
        _ctx.type !== "textarea" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
          (0,external_Vue_.createCommentVNode)(" prepend slot "),
          _ctx.$slots.prepend ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).be("group", "prepend"))
          }, [
            (0,external_Vue_.renderSlot)(_ctx.$slots, "prepend")
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsInput).e("wrapper"), (0,external_Vue_.unref)(nsInput).is("focus", focused.value)])
          }, [
            (0,external_Vue_.createCommentVNode)(" prefix slot "),
            _ctx.$slots.prefix || _ctx.prefixIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
              key: 0,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("prefix"))
            }, [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("prefix-inner"))
              }, [
                (0,external_Vue_.renderSlot)(_ctx.$slots, "prefix"),
                _ctx.prefixIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                  key: 0,
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("icon"))
                }, {
                  default: (0,external_Vue_.withCtx)(() => [
                    ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.prefixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
              ], 2)
            ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.createElementVNode)("input", (0,external_Vue_.mergeProps)({
              id: (0,external_Vue_.unref)(inputId),
              ref_key: "input",
              ref: input,
              class: (0,external_Vue_.unref)(nsInput).e("inner")
            }, (0,external_Vue_.unref)(attrs), {
              type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
              disabled: (0,external_Vue_.unref)(inputDisabled),
              formatter: _ctx.formatter,
              parser: _ctx.parser,
              readonly: _ctx.readonly,
              autocomplete: _ctx.autocomplete,
              tabindex: _ctx.tabindex,
              "aria-label": _ctx.label,
              placeholder: _ctx.placeholder,
              style: _ctx.inputStyle,
              onCompositionstart: handleCompositionStart,
              onCompositionupdate: handleCompositionUpdate,
              onCompositionend: handleCompositionEnd,
              onInput: handleInput,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onChange: handleChange,
              onKeydown: handleKeydown
            }), null, 16, _hoisted_2),
            (0,external_Vue_.createCommentVNode)(" suffix slot "),
            (0,external_Vue_.unref)(suffixVisible) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
              key: 1,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("suffix"))
            }, [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("suffix-inner"))
              }, [
                !(0,external_Vue_.unref)(showClear) || !(0,external_Vue_.unref)(showPwdVisible) || !(0,external_Vue_.unref)(isWordLimitVisible) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
                  (0,external_Vue_.renderSlot)(_ctx.$slots, "suffix"),
                  _ctx.suffixIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                    key: 0,
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("icon"))
                  }, {
                    default: (0,external_Vue_.withCtx)(() => [
                      ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.suffixIcon)))
                    ]),
                    _: 1
                  }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
                ], 64)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.unref)(showClear) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                  key: 1,
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsInput).e("icon"), (0,external_Vue_.unref)(nsInput).e("clear")]),
                  onMousedown: (0,external_Vue_.withModifiers)((0,external_Vue_.unref)(shared_esm_bundler/* NOOP */.dG), ["prevent"]),
                  onClick: clear
                }, {
                  default: (0,external_Vue_.withCtx)(() => [
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* CircleClose */.K41))
                  ]),
                  _: 1
                }, 8, ["class", "onMousedown"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.unref)(showPwdVisible) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                  key: 2,
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsInput).e("icon"), (0,external_Vue_.unref)(nsInput).e("password")]),
                  onClick: handlePasswordVisible
                }, {
                  default: (0,external_Vue_.withCtx)(() => [
                    ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)((0,external_Vue_.unref)(passwordIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.unref)(isWordLimitVisible) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                  key: 3,
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("count"))
                }, [
                  (0,external_Vue_.createElementVNode)("span", {
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("count-inner"))
                  }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(textLength)) + " / " + (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(attrs).maxlength), 3)
                ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.unref)(validateState) && (0,external_Vue_.unref)(validateIcon) && (0,external_Vue_.unref)(needStatusIcon) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                  key: 4,
                  class: (0,external_Vue_.normalizeClass)([
                    (0,external_Vue_.unref)(nsInput).e("icon"),
                    (0,external_Vue_.unref)(nsInput).e("validateIcon"),
                    (0,external_Vue_.unref)(nsInput).is("loading", (0,external_Vue_.unref)(validateState) === "validating")
                  ])
                }, {
                  default: (0,external_Vue_.withCtx)(() => [
                    ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)((0,external_Vue_.unref)(validateIcon))))
                  ]),
                  _: 1
                }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
              ], 2)
            ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 2),
          (0,external_Vue_.createCommentVNode)(" append slot "),
          _ctx.$slots.append ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 1,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).be("group", "append"))
          }, [
            (0,external_Vue_.renderSlot)(_ctx.$slots, "append")
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ], 64)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
          (0,external_Vue_.createCommentVNode)(" textarea "),
          (0,external_Vue_.createElementVNode)("textarea", (0,external_Vue_.mergeProps)({
            id: (0,external_Vue_.unref)(inputId),
            ref_key: "textarea",
            ref: textarea,
            class: (0,external_Vue_.unref)(nsTextarea).e("inner")
          }, (0,external_Vue_.unref)(attrs), {
            tabindex: _ctx.tabindex,
            disabled: (0,external_Vue_.unref)(inputDisabled),
            readonly: _ctx.readonly,
            autocomplete: _ctx.autocomplete,
            style: (0,external_Vue_.unref)(textareaStyle),
            "aria-label": _ctx.label,
            placeholder: _ctx.placeholder,
            onCompositionstart: handleCompositionStart,
            onCompositionupdate: handleCompositionUpdate,
            onCompositionend: handleCompositionEnd,
            onInput: handleInput,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onChange: handleChange,
            onKeydown: handleKeydown
          }), null, 16, _hoisted_3),
          (0,external_Vue_.unref)(isWordLimitVisible) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
            key: 0,
            style: (0,external_Vue_.normalizeStyle)(countStyle.value),
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("count"))
          }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(textLength)) + " / " + (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(attrs).maxlength), 7)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ], 64))
      ], 16, input2_hoisted_1)), [
        [external_Vue_.vShow, _ctx.type !== "hidden"]
      ]);
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(input2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);


//# sourceMappingURL=input2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input/index.mjs





const ElInput = withInstall(Input);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/popper.mjs



const effects = (/* unused pure expression or super */ null && (["light", "dark"]));
const triggers = (/* unused pure expression or super */ null && (["click", "contextmenu", "hover", "focus"]));
const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
const usePopperProps = buildProps({
  role: {
    type: String,
    default: "tooltip"
  }
});


//# sourceMappingURL=popper.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/popper.mjs
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");


//# sourceMappingURL=popper.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/popper2.mjs






const popper2_default_ = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const popper2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...popper2_default_,
  props: usePopperProps,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = (0,external_Vue_.ref)();
    const popperInstanceRef = (0,external_Vue_.ref)();
    const contentRef = (0,external_Vue_.ref)();
    const referenceRef = (0,external_Vue_.ref)();
    const role = (0,external_Vue_.computed)(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    (0,external_Vue_.provide)(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return (0,external_Vue_.renderSlot)(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ _export_sfc(popper2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);


//# sourceMappingURL=popper2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/index.mjs











const ElPopper = withInstall(Popper);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-timeout/index.mjs


function use_timeout_useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  shared_tryOnScopeDispose(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-delayed-toggle/index.mjs





const useDelayedToggleProps = buildProps({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = use_timeout_useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
    }, (0,external_Vue_.unref)(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, (0,external_Vue_.unref)(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@sxzz+popperjs-es@2.11.7/node_modules/@sxzz/popperjs-es/dist/index.mjs
var popperjs_es_dist = __webpack_require__(163);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/content.mjs




const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const usePopperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: popperjs_es_dist/* placements */.Ct,
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const usePopperContentProps = buildProps({
  ...usePopperCoreConfigProps,
  id: String,
  style: { type: definePropType([String, Array, Object]) },
  className: { type: definePropType([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: definePropType([String, Array, Object])
  },
  popperStyle: {
    type: definePropType([String, Array, Object])
  },
  referenceEl: {
    type: definePropType(Object)
  },
  triggerTargetEl: {
    type: definePropType(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const usePopperContentEmits = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
];


//# sourceMappingURL=content.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/rand.mjs
const generateId = () => Math.floor(Math.random() * 1e4);
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));


//# sourceMappingURL=rand.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-popper-container/index.mjs





let cachedContainer;
const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  (0,external_Vue_.onBeforeMount)(() => {
    if (!shared_isClient)
      return;
    if ( false || !cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/trigger.mjs



const usePopperTriggerProps = buildProps({
  virtualRef: {
    type: definePropType(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});


//# sourceMappingURL=trigger.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/constants/aria.mjs
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};


//# sourceMappingURL=aria.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tooltip.mjs












const tooltip_triggers = (/* unused pure expression or super */ null && (["hover", "focus", "click", "contextmenu"]));
const ns = useNamespace("tooltip");
const useTooltipContentProps = buildProps({
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  appendTo: {
    type: definePropType([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: definePropType(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = buildProps({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: definePropType([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [EVENT_CODE.enter, EVENT_CODE.space]
  }
});
const useTooltipProps = buildProps({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});


//# sourceMappingURL=tooltip.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tokens.mjs
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");


//# sourceMappingURL=tokens.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/utils.mjs


const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!shared_isClient)
    return;
  return unrefElement($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-z-index/index.mjs



const zIndex = (0,external_Vue_.ref)(0);
const useZIndex = () => {
  const initialZIndex = useGlobalConfig("zIndex", 2e3);
  const currentZIndex = (0,external_Vue_.computed)(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/utils.mjs
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (false)
    {}
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/tokens.mjs
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");


//# sourceMappingURL=tokens.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-escape-keydown/index.mjs





let registeredEscapeHandlers = [];
const cachedHandler = (e) => {
  const event = e;
  if (event.key === EVENT_CODE.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  (0,external_Vue_.onMounted)(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (shared_isClient)
      registeredEscapeHandlers.push(handler);
  });
  (0,external_Vue_.onBeforeUnmount)(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (shared_isClient)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/focus-trap.mjs












const focus_trap_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = (0,external_Vue_.ref)();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === EVENT_CODE.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            e.preventDefault();
            emit("focusout-prevented");
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop)
              tryFocus(first, true);
            emit("focusout-prevented");
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            e.preventDefault();
            if (loop)
              tryFocus(last, true);
            emit("focusout-prevented");
          }
        }
      }
    };
    (0,external_Vue_.provide)(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    (0,external_Vue_.watch)(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    (0,external_Vue_.watch)([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (isFocusedInTrap)
        emit("focusin", e);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!(0,lodash_es_isNil/* default */.Z)(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    async function startTrap() {
      await (0,external_Vue_.nextTick)();
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            (0,external_Vue_.nextTick)(() => {
              let focusStartEl = props.focusStartEl;
              if (!(0,shared_esm_bundler/* isString */.HD)(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new Event(FOCUS_AFTER_RELEASED, FOCUS_AFTER_TRAPPED_OPTS);
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body, true);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    (0,external_Vue_.onMounted)(() => {
      if (props.trapped) {
        startTrap();
      }
      (0,external_Vue_.watch)(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ _export_sfc(focus_trap_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);


//# sourceMappingURL=focus-trap.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/content2.mjs


















const content2_default_ = {
  name: "ElPopperContent"
};
const content2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...content2_default_,
  props: usePopperContentProps,
  emits: usePopperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef, role } = (0,external_Vue_.inject)(POPPER_INJECTION_KEY, void 0);
    const formItemContext = (0,external_Vue_.inject)(formItemContextKey, void 0);
    const { nextZIndex } = useZIndex();
    const ns = useNamespace("popper");
    const popperContentRef = (0,external_Vue_.ref)();
    const focusStartRef = (0,external_Vue_.ref)("first");
    const arrowRef = (0,external_Vue_.ref)();
    const arrowOffset = (0,external_Vue_.ref)();
    (0,external_Vue_.provide)(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      (0,external_Vue_.provide)(formItemContextKey, {
        ...formItemContext,
        addInputId: shared_esm_bundler/* NOOP */.dG,
        removeInputId: shared_esm_bundler/* NOOP */.dG
      });
    }
    const contentZIndex = (0,external_Vue_.ref)(props.zIndex || nextZIndex());
    const trapped = (0,external_Vue_.ref)(false);
    let triggerTargetAriaStopWatch = void 0;
    const computedReference = (0,external_Vue_.computed)(() => unwrapMeasurableEl(props.referenceEl) || (0,external_Vue_.unref)(triggerRef));
    const contentStyle = (0,external_Vue_.computed)(() => [{ zIndex: (0,external_Vue_.unref)(contentZIndex) }, props.popperStyle]);
    const contentClass = (0,external_Vue_.computed)(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const ariaModal = (0,external_Vue_.computed)(() => {
      return role && role.value === "dialog" ? "false" : void 0;
    });
    const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: (0,external_Vue_.unref)(arrowOffset)
      });
      return (0,popperjs_es_dist/* createPopper */.fi)(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a;
      (_a = (0,external_Vue_.unref)(popperInstanceRef)) == null ? void 0 : _a.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a = (0,external_Vue_.unref)(popperInstanceRef)) == null ? void 0 : _a.setOptions) == null ? void 0 : _b.call(_a, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    const onFocusAfterTrapped = () => {
      emit("focus");
    };
    const onFocusAfterReleased = () => {
      focusStartRef.value = "first";
      emit("blur");
    };
    const onFocusInTrap = (event) => {
      var _a;
      if (props.visible && !trapped.value) {
        if (event.target) {
          focusStartRef.value = event.target;
        }
        trapped.value = true;
        if (event.relatedTarget) {
          ;
          (_a = event.relatedTarget) == null ? void 0 : _a.focus();
        }
      }
    };
    const onFocusoutPrevented = () => {
      if (!props.trapping) {
        trapped.value = false;
      }
    };
    const onReleaseRequested = () => {
      trapped.value = false;
      emit("close");
    };
    (0,external_Vue_.onMounted)(() => {
      let updateHandle;
      (0,external_Vue_.watch)(computedReference, (referenceEl) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = (0,external_Vue_.unref)(popperInstanceRef);
        (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = (0,external_Vue_.unref)(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: (0,external_Vue_.unref)(arrowRef)
          });
          updateHandle = (0,external_Vue_.watch)(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      (0,external_Vue_.watch)(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = (0,external_Vue_.unref)(triggerTargetEl || popperContentRef.value);
        const prevEl = (0,external_Vue_.unref)(prevTriggerTargetEl || popperContentRef.value);
        if (isElement(el)) {
          const { ariaLabel, id } = (0,external_Vue_.toRefs)(props);
          triggerTargetAriaStopWatch = (0,external_Vue_.watch)([role, ariaLabel, ariaModal, id], (watches) => {
            ;
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              (0,lodash_es_isNil/* default */.Z)(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          ;
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      (0,external_Vue_.watch)(() => props.visible, togglePopperAlive, { immediate: true });
      (0,external_Vue_.watch)(() => buildPopperOptions(props, {
        arrowEl: (0,external_Vue_.unref)(arrowRef),
        arrowOffset: (0,external_Vue_.unref)(arrowOffset)
      }), (option) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option);
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(contentStyle)),
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElFocusTrap), {
          trapped: trapped.value,
          "trap-on-focus-in": true,
          "focus-trap-el": popperContentRef.value,
          "focus-start-el": focusStartRef.value,
          onFocusAfterTrapped,
          onFocusAfterReleased,
          onFocusin: onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        }, {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ _export_sfc(content2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);


//# sourceMappingURL=content2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/dom/event.mjs
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const whenMouse = (handler) => {
  return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};


//# sourceMappingURL=event.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/content.mjs










const content_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: ElPopperContent
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = (0,external_Vue_.ref)(null);
    const intermediateOpen = (0,external_Vue_.ref)(false);
    const entering = (0,external_Vue_.ref)(false);
    const leaving = (0,external_Vue_.ref)(false);
    const destroyed = (0,external_Vue_.ref)(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = (0,external_Vue_.inject)(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = (0,external_Vue_.computed)(() => {
      if (false) {}
      return props.persistent;
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      destroyed.value = true;
    });
    const shouldRender = (0,external_Vue_.computed)(() => {
      return (0,external_Vue_.unref)(persistentRef) ? true : (0,external_Vue_.unref)(open);
    });
    const shouldShow = (0,external_Vue_.computed)(() => {
      return props.disabled ? false : (0,external_Vue_.unref)(open);
    });
    const contentStyle = (0,external_Vue_.computed)(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = (0,external_Vue_.computed)(() => !(0,external_Vue_.unref)(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if ((0,external_Vue_.unref)(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && (0,external_Vue_.unref)(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if ((0,external_Vue_.unref)(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = onClickOutside((0,external_Vue_.computed)(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if ((0,external_Vue_.unref)(controlled))
          return;
        const $trigger = (0,external_Vue_.unref)(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    (0,external_Vue_.watch)(() => (0,external_Vue_.unref)(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      onClose,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
      onBlur
    };
  }
});
function content_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_content = (0,external_Vue_.resolveComponent)("el-popper-content");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    (0,external_Vue_.createVNode)(external_Vue_.Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: (0,external_Vue_.withCtx)(() => [
        _ctx.shouldRender ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_content, (0,external_Vue_.mergeProps)({
          key: 0,
          id: _ctx.id,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-label": _ctx.ariaLabel,
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          "trigger-target-el": _ctx.triggerTargetEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave,
          onBlur: _ctx.onBlur,
          onClose: _ctx.onClose
        }), {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.createCommentVNode)(" Workaround bug #6378 "),
            !_ctx.destroyed ? (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { key: 0 }) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [external_Vue_.vShow, _ctx.shouldShow]
        ]) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ _export_sfc(content_sfc_main, [["render", content_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);


//# sourceMappingURL=content.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/utils.mjs




const isTriggerType = (trigger, type) => {
  if ((0,shared_esm_bundler/* isArray */.kJ)(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType((0,external_Vue_.unref)(trigger), type) && handler(e);
  };
};


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-forward-ref/index.mjs


const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  (0,external_Vue_.provide)(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/slot/src/only-child.mjs







const NAME = "ElOnlyChild";
const OnlyChild = (0,external_Vue_.defineComponent)({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = (0,external_Vue_.inject)(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : shared_esm_bundler/* NOOP */.dG);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        error_debugWarn(NAME, "requires exact only one valid child.");
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        error_debugWarn(NAME, "no valid child node found");
        return null;
      }
      return (0,external_Vue_.withDirectives)((0,external_Vue_.cloneVNode)(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if ((0,shared_esm_bundler/* isObject */.Kn)(child)) {
      switch (child.type) {
        case external_Vue_.Comment:
          continue;
        case external_Vue_.Text:
        case "svg":
          return wrapTextContent(child);
        case external_Vue_.Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  return (0,external_Vue_.createVNode)("span", {
    "class": "el-only-child__content"
  }, [s]);
}


//# sourceMappingURL=only-child.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/trigger2.mjs














const trigger2_default_ = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const trigger2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...trigger2_default_,
  props: usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = (0,external_Vue_.inject)(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = (0,external_Vue_.computed)(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = (0,external_Vue_.computed)(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = (0,external_Vue_.computed)(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = (0,external_Vue_.computed)(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    (0,external_Vue_.onMounted)(() => {
      (0,external_Vue_.watch)(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = unrefElement(virtualEl);
        }
      }, {
        immediate: true
      });
      (0,external_Vue_.watch)(() => triggerRef.value, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if (isElement(el)) {
          ;
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              ;
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = (0,external_Vue_.watch)([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            ;
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key, idx) => {
              (0,lodash_es_isNil/* default */.Z)(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if (isElement(prevEl)) {
          ;
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(OnlyChild), (0,external_Vue_.mergeProps)({ key: 0 }, _ctx.$attrs, {
        "aria-controls": (0,external_Vue_.unref)(ariaControls),
        "aria-describedby": (0,external_Vue_.unref)(ariaDescribedby),
        "aria-expanded": (0,external_Vue_.unref)(ariaExpanded),
        "aria-haspopup": (0,external_Vue_.unref)(ariaHaspopup)
      }), {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : (0,external_Vue_.createCommentVNode)("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ _export_sfc(trigger2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);


//# sourceMappingURL=trigger2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/trigger.mjs












const trigger_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const ns = useNamespace("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = (0,external_Vue_.inject)(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = (0,external_Vue_.ref)(null);
    const stopWhenControlledOrDisabled = () => {
      if ((0,external_Vue_.unref)(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = (0,external_Vue_.toRef)(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef,
      ns
    };
  }
});
function trigger_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = (0,external_Vue_.resolveComponent)("el-popper-trigger");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: (0,external_Vue_.normalizeClass)(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: (0,external_Vue_.withCtx)(() => [
      (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ _export_sfc(trigger_sfc_main, [["render", trigger_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);


//# sourceMappingURL=trigger.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-model-toggle/index.mjs






const _prop = buildProp({
  type: definePropType(Boolean),
  default: null
});
const _event = buildProp({
  type: definePropType(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = (0,external_Vue_.getCurrentInstance)();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = (0,external_Vue_.computed)(() => (0,shared_esm_bundler/* isFunction */.mf)(props[updateEventKeyRaw]));
    const isModelBindingAbsent = (0,external_Vue_.computed)(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if ((0,shared_esm_bundler/* isFunction */.mf)(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if ((0,shared_esm_bundler/* isFunction */.mf)(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || (0,shared_esm_bundler/* isFunction */.mf)(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && shared_isClient;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !shared_isClient)
        return;
      const shouldEmit = hasUpdateHandler.value && shared_isClient;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!isBoolean(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    (0,external_Vue_.watch)(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      (0,external_Vue_.watch)(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    (0,external_Vue_.onMounted)(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const { useModelToggle, useModelToggleProps, useModelToggleEmits } = createModelToggleComposable("modelValue");


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/arrow.mjs



const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5
  }
});


//# sourceMappingURL=arrow.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/src/arrow2.mjs








const arrow2_default_ = {
  name: "ElPopperArrow",
  inheritAttrs: false
};
const arrow2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...arrow2_default_,
  props: usePopperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = useNamespace("popper");
    const { arrowOffset, arrowRef } = (0,external_Vue_.inject)(POPPER_CONTENT_INJECTION_KEY, void 0);
    (0,external_Vue_.watch)(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ _export_sfc(arrow2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);


//# sourceMappingURL=arrow2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tooltip2.mjs




















const { useModelToggleProps: tooltip2_useModelToggleProps, useModelToggle: tooltip2_useModelToggle, useModelToggleEmits: tooltip2_useModelToggleEmits } = createModelToggleComposable("visible");
const tooltip2_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltip",
  components: {
    ElPopper: ElPopper,
    ElPopperArrow: ElPopperArrow,
    ElTooltipContent: ElTooltipContent,
    ElTooltipTrigger: ElTooltipTrigger
  },
  props: {
    ...usePopperProps,
    ...tooltip2_useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [
    ...tooltip2_useModelToggleEmits,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = (0,external_Vue_.computed)(() => {
      if (!isUndefined(props.openDelay)) {
        error_debugWarn("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = (0,external_Vue_.computed)(() => {
      if (!isUndefined(props.visibleArrow)) {
        error_debugWarn("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return isBoolean(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = useId();
    const popperRef = (0,external_Vue_.ref)(null);
    const contentRef = (0,external_Vue_.ref)(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = (0,external_Vue_.unref)(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = (0,external_Vue_.ref)(false);
    const toggleReason = (0,external_Vue_.ref)(void 0);
    const { show, hide, hasUpdateHandler } = tooltip2_useModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: (0,external_Vue_.toRef)(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = (0,external_Vue_.computed)(() => isBoolean(props.visible) && !hasUpdateHandler.value);
    (0,external_Vue_.provide)(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: (0,external_Vue_.readonly)(open),
      trigger: (0,external_Vue_.toRef)(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if ((0,external_Vue_.unref)(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    (0,external_Vue_.watch)(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    (0,external_Vue_.onDeactivated)(() => open.value && hide());
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      contentRef,
      open,
      hide,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const tooltip2_hoisted_1 = ["innerHTML"];
const tooltip2_hoisted_2 = { key: 1 };
function tooltip2_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = (0,external_Vue_.resolveComponent)("el-tooltip-trigger");
  const _component_el_popper_arrow = (0,external_Vue_.resolveComponent)("el-popper-arrow");
  const _component_el_tooltip_content = (0,external_Vue_.resolveComponent)("el-tooltip-content");
  const _component_el_popper = (0,external_Vue_.resolveComponent)("el-popper");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper, {
    ref: "popperRef",
    role: _ctx.role
  }, {
    default: (0,external_Vue_.withCtx)(() => [
      (0,external_Vue_.createVNode)(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          _ctx.$slots.default ? (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { key: 0 }) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      (0,external_Vue_.createVNode)(_component_el_tooltip_content, {
        ref: "contentRef",
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "virtual-triggering": _ctx.virtualTriggering,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, tooltip2_hoisted_1)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", tooltip2_hoisted_2, (0,external_Vue_.toDisplayString)(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Tooltip = /* @__PURE__ */ _export_sfc(tooltip2_sfc_main, [["render", tooltip2_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);


//# sourceMappingURL=tooltip2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tooltip/index.mjs






const ElTooltip = withInstall(Tooltip);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/util.mjs
const GAP = 4;
const BAR_MAP = {
  vertical: {
    offset: "offsetHeight",
    scroll: "scrollTop",
    scrollSize: "scrollHeight",
    size: "height",
    key: "vertical",
    axis: "Y",
    client: "clientY",
    direction: "top"
  },
  horizontal: {
    offset: "offsetWidth",
    scroll: "scrollLeft",
    scrollSize: "scrollWidth",
    size: "width",
    key: "horizontal",
    axis: "X",
    client: "clientX",
    direction: "left"
  }
};
const renderThumbStyle = ({
  move,
  size,
  bar
}) => ({
  [bar.size]: size,
  transform: `translate${bar.axis}(${move}%)`
});


//# sourceMappingURL=util.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/thumb.mjs



const thumbProps = buildProps({
  vertical: Boolean,
  size: String,
  move: Number,
  ratio: {
    type: Number,
    required: true
  },
  always: Boolean
});


//# sourceMappingURL=thumb.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/scrollbar.mjs
const scrollbarContextKey = Symbol("scrollbarContextKey");


//# sourceMappingURL=scrollbar.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/thumb2.mjs












const thumb2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "thumb",
  props: thumbProps,
  setup(__props) {
    const props = __props;
    const COMPONENT_NAME = "Thumb";
    const scrollbar = (0,external_Vue_.inject)(scrollbarContextKey);
    const ns = useNamespace("scrollbar");
    if (!scrollbar)
      throwError(COMPONENT_NAME, "can not inject scrollbar context");
    const instance = (0,external_Vue_.ref)();
    const thumb = (0,external_Vue_.ref)();
    const thumbState = (0,external_Vue_.ref)({});
    const visible = (0,external_Vue_.ref)(false);
    let cursorDown = false;
    let cursorLeave = false;
    let originalOnSelectStart = shared_isClient ? document.onselectstart : null;
    const bar = (0,external_Vue_.computed)(() => BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const thumbStyle = (0,external_Vue_.computed)(() => renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const offsetRatio = (0,external_Vue_.computed)(() => instance.value[bar.value.offset] ** 2 / scrollbar.wrapElement[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset]);
    const clickThumbHandler = (e) => {
      var _a;
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button))
        return;
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
      startDrag(e);
      const el = e.currentTarget;
      if (!el)
        return;
      thumbState.value[bar.value.axis] = el[bar.value.offset] - (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      if (!thumb.value || !instance.value || !scrollbar.wrapElement)
        return;
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown = true;
      document.addEventListener("mousemove", mouseMoveDocumentHandler);
      document.addEventListener("mouseup", mouseUpDocumentHandler);
      originalOnSelectStart = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (!instance.value || !thumb.value)
        return;
      if (cursorDown === false)
        return;
      const prevPage = thumbState.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      scrollbar.wrapElement[bar.value.scroll] = thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown = false;
      thumbState.value[bar.value.axis] = 0;
      document.removeEventListener("mousemove", mouseMoveDocumentHandler);
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
      restoreOnselectstart();
      if (cursorLeave)
        visible.value = false;
    };
    const mouseMoveScrollbarHandler = () => {
      cursorLeave = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave = true;
      visible.value = cursorDown;
    };
    (0,external_Vue_.onBeforeUnmount)(() => {
      restoreOnselectstart();
      document.removeEventListener("mouseup", mouseUpDocumentHandler);
    });
    const restoreOnselectstart = () => {
      if (document.onselectstart !== originalOnSelectStart)
        document.onselectstart = originalOnSelectStart;
    };
    useEventListener((0,external_Vue_.toRef)(scrollbar, "scrollbarElement"), "mousemove", mouseMoveScrollbarHandler);
    useEventListener((0,external_Vue_.toRef)(scrollbar, "scrollbarElement"), "mouseleave", mouseLeaveScrollbarHandler);
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, {
        name: (0,external_Vue_.unref)(ns).b("fade"),
        persisted: ""
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("div", {
            ref_key: "instance",
            ref: instance,
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).e("bar"), (0,external_Vue_.unref)(ns).is((0,external_Vue_.unref)(bar).key)]),
            onMousedown: clickTrackHandler
          }, [
            (0,external_Vue_.createElementVNode)("div", {
              ref_key: "thumb",
              ref: thumb,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("thumb")),
              style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(thumbStyle)),
              onMousedown: clickThumbHandler
            }, null, 38)
          ], 34), [
            [external_Vue_.vShow, _ctx.always || visible.value]
          ])
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var Thumb = /* @__PURE__ */ _export_sfc(thumb2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);


//# sourceMappingURL=thumb2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/bar.mjs



const barProps = buildProps({
  always: {
    type: Boolean,
    default: true
  },
  width: String,
  height: String,
  ratioX: {
    type: Number,
    default: 1
  },
  ratioY: {
    type: Number,
    default: 1
  }
});


//# sourceMappingURL=bar.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/bar2.mjs






const bar2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "bar",
  props: barProps,
  setup(__props, { expose }) {
    const props = __props;
    const moveX = (0,external_Vue_.ref)(0);
    const moveY = (0,external_Vue_.ref)(0);
    const handleScroll = (wrap) => {
      if (wrap) {
        const offsetHeight = wrap.offsetHeight - GAP;
        const offsetWidth = wrap.offsetWidth - GAP;
        moveY.value = wrap.scrollTop * 100 / offsetHeight * props.ratioY;
        moveX.value = wrap.scrollLeft * 100 / offsetWidth * props.ratioX;
      }
    };
    expose({
      handleScroll
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, [
        (0,external_Vue_.createVNode)(Thumb, {
          move: moveX.value,
          ratio: _ctx.ratioX,
          size: _ctx.width,
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"]),
        (0,external_Vue_.createVNode)(Thumb, {
          move: moveY.value,
          ratio: _ctx.ratioY,
          size: _ctx.height,
          vertical: "",
          always: _ctx.always
        }, null, 8, ["move", "ratio", "size", "always"])
      ], 64);
    };
  }
});
var Bar = /* @__PURE__ */ _export_sfc(bar2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);


//# sourceMappingURL=bar2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/scrollbar.mjs




const scrollbarProps = buildProps({
  height: {
    type: [String, Number],
    default: ""
  },
  maxHeight: {
    type: [String, Number],
    default: ""
  },
  native: Boolean,
  wrapStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  wrapClass: {
    type: [String, Array],
    default: ""
  },
  viewClass: {
    type: [String, Array],
    default: ""
  },
  viewStyle: {
    type: [String, Array, Object],
    default: ""
  },
  noresize: Boolean,
  tag: {
    type: String,
    default: "div"
  },
  always: Boolean,
  minSize: {
    type: Number,
    default: 20
  }
});
const scrollbarEmits = {
  scroll: ({
    scrollTop,
    scrollLeft
  }) => [scrollTop, scrollLeft].every(shared_isNumber)
};


//# sourceMappingURL=scrollbar.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/src/scrollbar2.mjs















const scrollbar2_default_ = {
  name: "ElScrollbar"
};
const scrollbar2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...scrollbar2_default_,
  props: scrollbarProps,
  emits: scrollbarEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("scrollbar");
    let stopResizeObserver = void 0;
    let stopResizeListener = void 0;
    const scrollbar$ = (0,external_Vue_.ref)();
    const wrap$ = (0,external_Vue_.ref)();
    const resize$ = (0,external_Vue_.ref)();
    const sizeWidth = (0,external_Vue_.ref)("0");
    const sizeHeight = (0,external_Vue_.ref)("0");
    const barRef = (0,external_Vue_.ref)();
    const ratioY = (0,external_Vue_.ref)(1);
    const ratioX = (0,external_Vue_.ref)(1);
    const SCOPE = "ElScrollbar";
    const style = (0,external_Vue_.computed)(() => {
      const style2 = {};
      if (props.height)
        style2.height = addUnit(props.height);
      if (props.maxHeight)
        style2.maxHeight = addUnit(props.maxHeight);
      return [props.wrapStyle, style2];
    });
    const handleScroll = () => {
      var _a;
      if (wrap$.value) {
        (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap$.value);
        emit("scroll", {
          scrollTop: wrap$.value.scrollTop,
          scrollLeft: wrap$.value.scrollLeft
        });
      }
    };
    function scrollTo(arg1, arg2) {
      if ((0,shared_esm_bundler/* isObject */.Kn)(arg1)) {
        wrap$.value.scrollTo(arg1);
      } else if (shared_isNumber(arg1) && shared_isNumber(arg2)) {
        wrap$.value.scrollTo(arg1, arg2);
      }
    }
    const setScrollTop = (value) => {
      if (!shared_isNumber(value)) {
        error_debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap$.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!shared_isNumber(value)) {
        error_debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap$.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap$.value)
        return;
      const offsetHeight = wrap$.value.offsetHeight - GAP;
      const offsetWidth = wrap$.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap$.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap$.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    (0,external_Vue_.watch)(() => props.noresize, (noresize) => {
      if (noresize) {
        stopResizeObserver == null ? void 0 : stopResizeObserver();
        stopResizeListener == null ? void 0 : stopResizeListener();
      } else {
        ;
        ({ stop: stopResizeObserver } = useResizeObserver(resize$, update));
        stopResizeListener = useEventListener("resize", update);
      }
    }, { immediate: true });
    (0,external_Vue_.watch)(() => [props.maxHeight, props.height], () => {
      if (!props.native)
        (0,external_Vue_.nextTick)(() => {
          var _a;
          update();
          if (wrap$.value) {
            (_a = barRef.value) == null ? void 0 : _a.handleScroll(wrap$.value);
          }
        });
    });
    (0,external_Vue_.provide)(scrollbarContextKey, (0,external_Vue_.reactive)({
      scrollbarElement: scrollbar$,
      wrapElement: wrap$
    }));
    (0,external_Vue_.onMounted)(() => {
      if (!props.native)
        (0,external_Vue_.nextTick)(() => {
          update();
        });
    });
    (0,external_Vue_.onUpdated)(() => update());
    expose({
      wrap$,
      update,
      scrollTo,
      setScrollTop,
      setScrollLeft,
      handleScroll
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        ref_key: "scrollbar$",
        ref: scrollbar$,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b())
      }, [
        (0,external_Vue_.createElementVNode)("div", {
          ref_key: "wrap$",
          ref: wrap$,
          class: (0,external_Vue_.normalizeClass)([
            _ctx.wrapClass,
            (0,external_Vue_.unref)(ns).e("wrap"),
            { [(0,external_Vue_.unref)(ns).em("wrap", "hidden-default")]: !_ctx.native }
          ]),
          style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(style)),
          onScroll: handleScroll
        }, [
          ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.tag), {
            ref_key: "resize$",
            ref: resize$,
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).e("view"), _ctx.viewClass]),
            style: (0,external_Vue_.normalizeStyle)(_ctx.viewStyle)
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["class", "style"]))
        ], 38),
        !_ctx.native ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(Bar, {
          key: 0,
          ref_key: "barRef",
          ref: barRef,
          height: sizeHeight.value,
          width: sizeWidth.value,
          always: _ctx.always,
          "ratio-x": ratioX.value,
          "ratio-y": ratioY.value
        }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 2);
    };
  }
});
var Scrollbar = /* @__PURE__ */ _export_sfc(scrollbar2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);


//# sourceMappingURL=scrollbar2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/index.mjs







const ElScrollbar = withInstall(Scrollbar);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tag/src/tag.mjs





const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};


//# sourceMappingURL=tag.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tag/src/tag2.mjs









const tag2_default_ = {
  name: "ElTag"
};
const tag2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...tag2_default_,
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit }) {
    const props = __props;
    const tagSize = useSize();
    const ns = useNamespace("tag");
    const classes = (0,external_Vue_.computed)(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
        key: 0,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(classes)),
        style: (0,external_Vue_.normalizeStyle)({ backgroundColor: _ctx.color }),
        onClick: handleClick
      }, [
        (0,external_Vue_.createElementVNode)("span", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("content"))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ], 2),
        _ctx.closable ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
          key: 0,
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("close")),
          onClick: (0,external_Vue_.withModifiers)(handleClose, ["stop"])
        }, {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* Close */.x8P))
          ]),
          _: 1
        }, 8, ["class", "onClick"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 6)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, {
        key: 1,
        name: `${(0,external_Vue_.unref)(ns).namespace.value}-zoom-in-center`,
        appear: ""
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.createElementVNode)("span", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(classes)),
            style: (0,external_Vue_.normalizeStyle)({ backgroundColor: _ctx.color }),
            onClick: handleClick
          }, [
            (0,external_Vue_.createElementVNode)("span", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("content"))
            }, [
              (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
            ], 2),
            _ctx.closable ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              key: 0,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("close")),
              onClick: (0,external_Vue_.withModifiers)(handleClose, ["stop"])
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* Close */.x8P))
              ]),
              _: 1
            }, 8, ["class", "onClick"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 6)
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(tag2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);


//# sourceMappingURL=tag2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tag/index.mjs





const ElTag = withInstall(Tag);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/token.mjs
const selectGroupKey = "ElSelectGroup";
const selectKey = "ElSelect";


//# sourceMappingURL=token.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/strings.mjs


const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");


//# sourceMappingURL=strings.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/useOption.mjs






function useOption(props, states) {
  const select = (0,external_Vue_.inject)(selectKey);
  const selectGroup = (0,external_Vue_.inject)(selectGroupKey, { disabled: false });
  const isObject = (0,external_Vue_.computed)(() => {
    return Object.prototype.toString.call(props.value).toLowerCase() === "[object object]";
  });
  const itemSelected = (0,external_Vue_.computed)(() => {
    if (!select.props.multiple) {
      return isEqual(props.value, select.props.modelValue);
    } else {
      return contains(select.props.modelValue, props.value);
    }
  });
  const limitReached = (0,external_Vue_.computed)(() => {
    if (select.props.multiple) {
      const modelValue = select.props.modelValue || [];
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = (0,external_Vue_.computed)(() => {
    return props.label || (isObject.value ? "" : props.value);
  });
  const currentValue = (0,external_Vue_.computed)(() => {
    return props.value || props.label || "";
  });
  const isDisabled = (0,external_Vue_.computed)(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = (0,external_Vue_.getCurrentInstance)();
  const contains = (arr = [], target) => {
    if (!isObject.value) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return (0,lodash_es_get/* default */.Z)(item, valueKey) === (0,lodash_es_get/* default */.Z)(target, valueKey);
      });
    }
  };
  const isEqual = (a, b) => {
    if (!isObject.value) {
      return a === b;
    } else {
      const { valueKey } = select.props;
      return (0,lodash_es_get/* default */.Z)(a, valueKey) === (0,lodash_es_get/* default */.Z)(b, valueKey);
    }
  };
  const hoverItem = () => {
    if (!props.disabled && !selectGroup.disabled) {
      select.hoverIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  (0,external_Vue_.watch)(() => currentLabel.value, () => {
    if (!props.created && !select.props.remote)
      select.setSelected();
  });
  (0,external_Vue_.watch)(() => props.value, (val, oldVal) => {
    const { remote, valueKey } = select.props;
    if (!props.created && !remote) {
      if (valueKey && typeof val === "object" && typeof oldVal === "object" && val[valueKey] === oldVal[valueKey]) {
        return;
      }
      select.setSelected();
    }
  });
  (0,external_Vue_.watch)(() => selectGroup.disabled, () => {
    states.groupDisabled = selectGroup.disabled;
  }, { immediate: true });
  const { queryChange } = (0,external_Vue_.toRaw)(select);
  (0,external_Vue_.watch)(queryChange, (changes) => {
    const { query } = (0,external_Vue_.unref)(changes);
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(currentLabel.value) || props.created;
    if (!states.visible) {
      select.filteredOptionsCount--;
    }
  });
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem
  };
}


//# sourceMappingURL=useOption.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/option.mjs






const option_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElOption",
  componentName: "ElOption",
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean, Object]
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const states = (0,external_Vue_.reactive)({
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    });
    const { currentLabel, itemSelected, isDisabled, select, hoverItem } = useOption(props, states);
    const { visible, hover } = (0,external_Vue_.toRefs)(states);
    const vm = (0,external_Vue_.getCurrentInstance)().proxy;
    const key = vm.value;
    select.onOptionCreate(vm);
    (0,external_Vue_.onBeforeUnmount)(() => {
      const { selected } = select;
      const selectedOptions = select.props.multiple ? selected : [selected];
      const doesSelected = selectedOptions.some((item) => {
        return item.value === vm.value;
      });
      (0,external_Vue_.nextTick)(() => {
        if (select.cachedOptions.get(key) === vm && !doesSelected) {
          select.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (props.disabled !== true && states.groupDisabled !== true) {
        select.handleOptionSelect(vm, true);
      }
    }
    return {
      ns,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      visible,
      hover,
      selectOptionClick,
      states
    };
  }
});
function option_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("li", {
    class: (0,external_Vue_.normalizeClass)([
      _ctx.ns.be("dropdown", "item"),
      _ctx.ns.is("disabled", _ctx.isDisabled),
      {
        selected: _ctx.itemSelected,
        hover: _ctx.hover
      }
    ]),
    onMouseenter: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = (0,external_Vue_.withModifiers)((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"]))
  }, [
    (0,external_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
      (0,external_Vue_.createElementVNode)("span", null, (0,external_Vue_.toDisplayString)(_ctx.currentLabel), 1)
    ])
  ], 34)), [
    [external_Vue_.vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(option_sfc_main, [["render", option_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);


//# sourceMappingURL=option.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/select-dropdown.mjs







const select_dropdown_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = (0,external_Vue_.inject)(selectKey);
    const ns = useNamespace("select");
    const popperClass = (0,external_Vue_.computed)(() => select.props.popperClass);
    const isMultiple = (0,external_Vue_.computed)(() => select.props.multiple);
    const isFitInputWidth = (0,external_Vue_.computed)(() => select.props.fitInputWidth);
    const minWidth = (0,external_Vue_.ref)("");
    function updateMinWidth() {
      var _a;
      minWidth.value = `${(_a = select.selectWrapper) == null ? void 0 : _a.offsetWidth}px`;
    }
    (0,external_Vue_.onMounted)(() => {
      updateMinWidth();
      useResizeObserver(select.selectWrapper, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function select_dropdown_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
    class: (0,external_Vue_.normalizeClass)([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
    style: (0,external_Vue_.normalizeStyle)({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
  ], 6);
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(select_dropdown_sfc_main, [["render", select_dropdown_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);


//# sourceMappingURL=select-dropdown.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js + 4 modules
var debounce = __webpack_require__(7146);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/locale/lang/en.mjs
var English = {
  name: "en",
  el: {
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    }
  }
};


//# sourceMappingURL=en.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-locale/index.mjs





const buildTranslator = (locale) => (path, option) => translate(path, option, (0,external_Vue_.unref)(locale));
const translate = (path, option, locale) => (0,lodash_es_get/* default */.Z)(locale, path, path).replace(/\{(\w+)\}/g, (_, key) => {
  var _a;
  return `${(_a = option == null ? void 0 : option[key]) != null ? _a : `{${key}}`}`;
});
const buildLocaleContext = (locale) => {
  const lang = (0,external_Vue_.computed)(() => (0,external_Vue_.unref)(locale).name);
  const localeRef = (0,external_Vue_.isRef)(locale) ? locale : (0,external_Vue_.ref)(locale);
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(locale)
  };
};
const useLocale = () => {
  const locale = useGlobalConfig("locale");
  return buildLocaleContext((0,external_Vue_.computed)(() => locale.value || English));
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/vue/size.mjs



const getComponentSize = (size) => {
  return componentSizeMap[size || "default"];
};


//# sourceMappingURL=size.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/dom/scroll.mjs



const isScroll = (el, isVertical) => {
  if (!isClient)
    return false;
  const key = {
    undefined: "overflow",
    true: "overflow-y",
    false: "overflow-x"
  }[String(isVertical)];
  const overflow = getStyle(el, key);
  return ["scroll", "auto", "overlay"].some((s) => overflow.includes(s));
};
const getScrollContainer = (el, isVertical) => {
  if (!isClient)
    return;
  let parent = el;
  while (parent) {
    if ([window, document, document.documentElement].includes(parent))
      return window;
    if (isScroll(parent, isVertical))
      return parent;
    parent = parent.parentNode;
  }
  return parent;
};
let scrollBarWidth;
const getScrollBarWidth = (namespace) => {
  var _a;
  if (!isClient)
    return 0;
  if (scrollBarWidth !== void 0)
    return scrollBarWidth;
  const outer = document.createElement("div");
  outer.className = `${namespace}-scrollbar__wrap`;
  outer.style.visibility = "hidden";
  outer.style.width = "100px";
  outer.style.position = "absolute";
  outer.style.top = "-9999px";
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = "scroll";
  const inner = document.createElement("div");
  inner.style.width = "100%";
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;
  (_a = outer.parentNode) == null ? void 0 : _a.removeChild(outer);
  scrollBarWidth = widthNoScroll - widthWithScroll;
  return scrollBarWidth;
};
function scrollIntoView(container, selected) {
  if (!shared_isClient)
    return;
  if (!selected) {
    container.scrollTop = 0;
    return;
  }
  const offsetParents = [];
  let pointer = selected.offsetParent;
  while (pointer !== null && container !== pointer && container.contains(pointer)) {
    offsetParents.push(pointer);
    pointer = pointer.offsetParent;
  }
  const top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
  const bottom = top + selected.offsetHeight;
  const viewRectTop = container.scrollTop;
  const viewRectBottom = viewRectTop + container.clientHeight;
  if (top < viewRectTop) {
    container.scrollTop = top;
  } else if (bottom > viewRectBottom) {
    container.scrollTop = bottom - container.clientHeight;
  }
}


//# sourceMappingURL=scroll.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/useSelect.mjs



















function useSelectStates(props) {
  const { t } = useLocale();
  return (0,external_Vue_.reactive)({
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    createdLabel: null,
    createdSelected: false,
    selected: props.multiple ? [] : {},
    inputLength: 20,
    inputWidth: 0,
    optionsCount: 0,
    filteredOptionsCount: 0,
    visible: false,
    softFocus: false,
    selectedLabel: "",
    hoverIndex: -1,
    query: "",
    previousQuery: null,
    inputHovering: false,
    cachedPlaceHolder: "",
    currentPlaceholder: t("el.select.placeholder"),
    menuVisibleOnFocus: false,
    isOnComposition: false,
    isSilentBlur: false,
    prefixWidth: 11,
    tagInMultiLine: false
  });
}
const useSelect = (props, states, ctx) => {
  const { t } = useLocale();
  const ns = useNamespace("select");
  const reference = (0,external_Vue_.ref)(null);
  const input = (0,external_Vue_.ref)(null);
  const tooltipRef = (0,external_Vue_.ref)(null);
  const tags = (0,external_Vue_.ref)(null);
  const selectWrapper = (0,external_Vue_.ref)(null);
  const scrollbar = (0,external_Vue_.ref)(null);
  const hoverOption = (0,external_Vue_.ref)(-1);
  const queryChange = (0,external_Vue_.shallowRef)({ query: "" });
  const groupQueryChange = (0,external_Vue_.shallowRef)("");
  const elForm = (0,external_Vue_.inject)(formContextKey, {});
  const elFormItem = (0,external_Vue_.inject)(formItemContextKey, {});
  const readonly = (0,external_Vue_.computed)(() => !props.filterable || props.multiple || !states.visible);
  const selectDisabled = (0,external_Vue_.computed)(() => props.disabled || elForm.disabled);
  const showClose = (0,external_Vue_.computed)(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.inputHovering && hasValue;
    return criteria;
  });
  const iconComponent = (0,external_Vue_.computed)(() => props.remote && props.filterable ? "" : props.suffixIcon);
  const iconReverse = (0,external_Vue_.computed)(() => ns.is("reverse", iconComponent.value && states.visible));
  const debounce$1 = (0,external_Vue_.computed)(() => props.remote ? 300 : 0);
  const emptyText = (0,external_Vue_.computed)(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.query === "" && states.options.size === 0)
        return false;
      if (props.filterable && states.query && states.options.size > 0 && states.filteredOptionsCount === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const optionsArray = (0,external_Vue_.computed)(() => Array.from(states.options.values()));
  const cachedOptionsArray = (0,external_Vue_.computed)(() => Array.from(states.cachedOptions.values()));
  const showNewOption = (0,external_Vue_.computed)(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.query;
    });
    return props.filterable && props.allowCreate && states.query !== "" && !hasExistingOption;
  });
  const selectSize = useSize();
  const collapseTagSize = (0,external_Vue_.computed)(() => ["small"].includes(selectSize.value) ? "small" : "default");
  const dropMenuVisible = (0,external_Vue_.computed)({
    get() {
      return states.visible && emptyText.value !== false;
    },
    set(val) {
      states.visible = val;
    }
  });
  (0,external_Vue_.watch)([() => selectDisabled.value, () => selectSize.value, () => elForm.size], () => {
    (0,external_Vue_.nextTick)(() => {
      resetInputHeight();
    });
  });
  (0,external_Vue_.watch)(() => props.placeholder, (val) => {
    states.cachedPlaceHolder = states.currentPlaceholder = val;
  });
  (0,external_Vue_.watch)(() => props.modelValue, (val, oldVal) => {
    var _a;
    if (props.multiple) {
      resetInputHeight();
      if (val && val.length > 0 || input.value && states.query !== "") {
        states.currentPlaceholder = "";
      } else {
        states.currentPlaceholder = states.cachedPlaceHolder;
      }
      if (props.filterable && !props.reserveKeyword) {
        states.query = "";
        handleQueryChange(states.query);
      }
    }
    setSelected();
    if (props.filterable && !props.multiple) {
      states.inputLength = 20;
    }
    if (!lodash_es_isEqual(val, oldVal) && props.validateEvent) {
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error_debugWarn(err));
    }
  }, {
    flush: "post",
    deep: true
  });
  (0,external_Vue_.watch)(() => states.visible, (val) => {
    var _a, _b, _c;
    if (!val) {
      input.value && input.value.blur();
      states.query = "";
      states.previousQuery = null;
      states.selectedLabel = "";
      states.inputLength = 20;
      states.menuVisibleOnFocus = false;
      resetHoverIndex();
      (0,external_Vue_.nextTick)(() => {
        if (input.value && input.value.value === "" && states.selected.length === 0) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      });
      if (!props.multiple) {
        if (states.selected) {
          if (props.filterable && props.allowCreate && states.createdSelected && states.createdLabel) {
            states.selectedLabel = states.createdLabel;
          } else {
            states.selectedLabel = states.selected.currentLabel;
          }
          if (props.filterable)
            states.query = states.selectedLabel;
        }
        if (props.filterable) {
          states.currentPlaceholder = states.cachedPlaceHolder;
        }
      }
    } else {
      (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      if (props.filterable) {
        states.filteredOptionsCount = states.optionsCount;
        states.query = props.remote ? "" : states.selectedLabel;
        if (props.multiple) {
          (_c = input.value) == null ? void 0 : _c.focus();
        } else {
          if (states.selectedLabel) {
            states.currentPlaceholder = `${states.selectedLabel}`;
            states.selectedLabel = "";
          }
        }
        handleQueryChange(states.query);
        if (!props.multiple && !props.remote) {
          queryChange.value.query = "";
          (0,external_Vue_.triggerRef)(queryChange);
          (0,external_Vue_.triggerRef)(groupQueryChange);
        }
      }
    }
    ctx.emit("visible-change", val);
  });
  (0,external_Vue_.watch)(() => states.options.entries(), () => {
    var _a, _b, _c;
    if (!shared_isClient)
      return;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      resetInputHeight();
    }
    const inputs = ((_c = selectWrapper.value) == null ? void 0 : _c.querySelectorAll("input")) || [];
    if (!Array.from(inputs).includes(document.activeElement)) {
      setSelected();
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  }, {
    flush: "post"
  });
  (0,external_Vue_.watch)(() => states.hoverIndex, (val) => {
    if (typeof val === "number" && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable)
      return;
    (0,external_Vue_.nextTick)(() => {
      var _a, _b;
      if (!reference.value)
        return;
      const input2 = reference.value.$el.querySelector("input");
      const _tags = tags.value;
      const sizeInMap = getComponentSize(selectSize.value || elForm.size);
      input2.style.height = `${(states.selected.length === 0 ? sizeInMap : Math.max(_tags ? _tags.clientHeight + (_tags.clientHeight > sizeInMap ? 6 : 0) : 0, sizeInMap)) - 2}px`;
      states.tagInMultiLine = Number.parseFloat(input2.style.height) >= sizeInMap;
      if (states.visible && emptyText.value !== false) {
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || states.isOnComposition)
      return;
    if (states.previousQuery === null && (typeof props.filterMethod === "function" || typeof props.remoteMethod === "function")) {
      states.previousQuery = val;
      return;
    }
    states.previousQuery = val;
    (0,external_Vue_.nextTick)(() => {
      var _a, _b;
      if (states.visible)
        (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    });
    states.hoverIndex = -1;
    if (props.multiple && props.filterable) {
      (0,external_Vue_.nextTick)(() => {
        const length = input.value.value.length * 15 + 20;
        states.inputLength = props.collapseTags ? Math.min(50, length) : length;
        managePlaceholder();
        resetInputHeight();
      });
    }
    if (props.remote && typeof props.remoteMethod === "function") {
      states.hoverIndex = -1;
      props.remoteMethod(val);
    } else if (typeof props.filterMethod === "function") {
      props.filterMethod(val);
      (0,external_Vue_.triggerRef)(groupQueryChange);
    } else {
      states.filteredOptionsCount = states.optionsCount;
      queryChange.value.query = val;
      (0,external_Vue_.triggerRef)(queryChange);
      (0,external_Vue_.triggerRef)(groupQueryChange);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && states.filteredOptionsCount) {
      checkDefaultFirstOption();
    }
  };
  const managePlaceholder = () => {
    if (states.currentPlaceholder !== "") {
      states.currentPlaceholder = input.value.value ? "" : states.cachedPlaceHolder;
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter((n) => n.visible && !n.disabled && !n.states.groupDisabled);
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    states.hoverIndex = getValueIndex(optionsArray.value, userCreatedOption || firstOriginOption);
  };
  const setSelected = () => {
    var _a;
    if (!props.multiple) {
      const option = getOption(props.modelValue);
      if ((_a = option.props) == null ? void 0 : _a.created) {
        states.createdLabel = option.props.value;
        states.createdSelected = true;
      } else {
        states.createdSelected = false;
      }
      states.selectedLabel = option.currentLabel;
      states.selected = option;
      if (props.filterable)
        states.query = states.selectedLabel;
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (Array.isArray(props.modelValue)) {
      props.modelValue.forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
    (0,external_Vue_.nextTick)(() => {
      resetInputHeight();
    });
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = (0,shared_esm_bundler/* toRawType */.W7)(value).toLowerCase() === "object";
    const isNull = (0,shared_esm_bundler/* toRawType */.W7)(value).toLowerCase() === "null";
    const isUndefined = (0,shared_esm_bundler/* toRawType */.W7)(value).toLowerCase() === "undefined";
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? (0,lodash_es_get/* default */.Z)(cachedOption.value, props.valueKey) === (0,lodash_es_get/* default */.Z)(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          value,
          currentLabel: cachedOption.currentLabel,
          isDisabled: cachedOption.isDisabled
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : !isNull && !isUndefined ? value : "";
    const newOption = {
      value,
      currentLabel: label
    };
    if (props.multiple) {
      ;
      newOption.hitState = false;
    }
    return newOption;
  };
  const resetHoverIndex = () => {
    setTimeout(() => {
      const valueKey = props.valueKey;
      if (!props.multiple) {
        states.hoverIndex = optionsArray.value.findIndex((item) => {
          return getValueKey(item) === getValueKey(states.selected);
        });
      } else {
        if (states.selected.length > 0) {
          states.hoverIndex = Math.min.apply(null, states.selected.map((selected) => {
            return optionsArray.value.findIndex((item) => {
              return (0,lodash_es_get/* default */.Z)(item, valueKey) === (0,lodash_es_get/* default */.Z)(selected, valueKey);
            });
          }));
        } else {
          states.hoverIndex = -1;
        }
      }
    }, 300);
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
    if (props.multiple && !props.filterable)
      resetInputHeight();
  };
  const resetInputWidth = () => {
    var _a;
    states.inputWidth = (_a = reference.value) == null ? void 0 : _a.$el.getBoundingClientRect().width;
  };
  const onInputChange = () => {
    if (props.filterable && states.query !== states.selectedLabel) {
      states.query = states.selectedLabel;
      handleQueryChange(states.query);
    }
  };
  const debouncedOnInputChange = (0,debounce/* default */.Z)(() => {
    onInputChange();
  }, debounce$1.value);
  const debouncedQueryChange = (0,debounce/* default */.Z)((e) => {
    handleQueryChange(e.target.value);
  }, debounce$1.value);
  const emitChange = (val) => {
    if (!lodash_es_isEqual(props.modelValue, val)) {
      ctx.emit(CHANGE_EVENT, val);
    }
  };
  const deletePrevTag = (e) => {
    if (e.target.value.length <= 0 && !toggleLastOptionHitState()) {
      const value = props.modelValue.slice();
      value.pop();
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
    }
    if (e.target.value.length === 1 && props.modelValue.length === 0) {
      states.currentPlaceholder = states.cachedPlaceHolder;
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = props.modelValue.slice();
      value.splice(index, 1);
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      ctx.emit("remove-tag", tag.value);
    }
    event.stopPropagation();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : "";
    if (typeof value !== "string") {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    ctx.emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.visible = false;
    ctx.emit("clear");
  };
  const handleOptionSelect = (option, byClick) => {
    var _a;
    if (props.multiple) {
      const value = (props.modelValue || []).slice();
      const optionIndex = getValueIndex(value, option.value);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      ctx.emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable)
        (_a = input.value) == null ? void 0 : _a.focus();
    } else {
      ctx.emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      states.visible = false;
    }
    states.isSilentBlur = byClick;
    setSoftFocus();
    if (states.visible)
      return;
    (0,external_Vue_.nextTick)(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr = [], value) => {
    if (!(0,shared_esm_bundler/* isObject */.Kn)(value))
      return arr.indexOf(value);
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if ((0,lodash_es_get/* default */.Z)(item, valueKey) === (0,lodash_es_get/* default */.Z)(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const setSoftFocus = () => {
    states.softFocus = true;
    const _input = input.value || reference.value;
    if (_input) {
      _input == null ? void 0 : _input.focus();
    }
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = Array.isArray(option) ? option[0] : option;
    let target = null;
    if (targetOption == null ? void 0 : targetOption.value) {
      const options = optionsArray.value.filter((item) => item.value === targetOption.value);
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(_c, `.${ns.be("dropdown", "wrap")}`);
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbar.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.optionsCount++;
    states.filteredOptionsCount++;
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.optionsCount--;
      states.filteredOptionsCount--;
      states.options.delete(key);
    }
  };
  const resetInputState = (e) => {
    if (e.code !== EVENT_CODE.backspace)
      toggleLastOptionHitState(false);
    states.inputLength = input.value.value.length * 15 + 20;
    resetInputHeight();
  };
  const toggleLastOptionHitState = (hit) => {
    if (!Array.isArray(states.selected))
      return;
    const option = states.selected[states.selected.length - 1];
    if (!option)
      return;
    if (hit === true || hit === false) {
      option.hitState = hit;
      return hit;
    }
    option.hitState = !option.hitState;
    return option.hitState;
  };
  const handleComposition = (event) => {
    const text = event.target.value;
    if (event.type === "compositionend") {
      states.isOnComposition = false;
      (0,external_Vue_.nextTick)(() => handleQueryChange(text));
    } else {
      const lastCharacter = text[text.length - 1] || "";
      states.isOnComposition = !isKorean(lastCharacter);
    }
  };
  const handleMenuEnter = () => {
    (0,external_Vue_.nextTick)(() => scrollToOption(states.selected));
  };
  const handleFocus = (event) => {
    if (!states.softFocus) {
      if (props.automaticDropdown || props.filterable) {
        if (props.filterable && !states.visible) {
          states.menuVisibleOnFocus = true;
        }
        states.visible = true;
      }
      ctx.emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const blur = () => {
    var _a;
    states.visible = false;
    (_a = reference.value) == null ? void 0 : _a.blur();
  };
  const handleBlur = (event) => {
    (0,external_Vue_.nextTick)(() => {
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        ctx.emit("blur", event);
      }
    });
    states.softFocus = false;
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClose = () => {
    states.visible = false;
  };
  const handleKeydownEscape = (event) => {
    if (states.visible) {
      event.preventDefault();
      event.stopPropagation();
      states.visible = false;
    }
  };
  const toggleMenu = () => {
    var _a;
    if (!selectDisabled.value) {
      if (states.menuVisibleOnFocus) {
        states.menuVisibleOnFocus = false;
      } else {
        states.visible = !states.visible;
      }
      if (states.visible) {
        ;
        (_a = input.value || reference.value) == null ? void 0 : _a.focus();
      }
    }
  };
  const selectOption = () => {
    if (!states.visible) {
      toggleMenu();
    } else {
      if (optionsArray.value[states.hoverIndex]) {
        handleOptionSelect(optionsArray.value[states.hoverIndex], void 0);
      }
    }
  };
  const getValueKey = (item) => {
    return (0,shared_esm_bundler/* isObject */.Kn)(item.value) ? (0,lodash_es_get/* default */.Z)(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = (0,external_Vue_.computed)(() => optionsArray.value.filter((option) => option.visible).every((option) => option.disabled));
  const navigateOptions = (direction) => {
    if (!states.visible) {
      states.visible = true;
      return;
    }
    if (states.options.size === 0 || states.filteredOptionsCount === 0)
      return;
    if (states.isOnComposition)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoverIndex++;
        if (states.hoverIndex === states.options.size) {
          states.hoverIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoverIndex--;
        if (states.hoverIndex < 0) {
          states.hoverIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoverIndex];
      if (option.disabled === true || option.states.groupDisabled === true || !option.visible) {
        navigateOptions(direction);
      }
      (0,external_Vue_.nextTick)(() => scrollToOption(hoverOption.value));
    }
  };
  return {
    optionsArray,
    selectSize,
    handleResize,
    debouncedOnInputChange,
    debouncedQueryChange,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    readonly,
    resetInputHeight,
    showClose,
    iconComponent,
    iconReverse,
    showNewOption,
    collapseTagSize,
    setSelected,
    managePlaceholder,
    selectDisabled,
    emptyText,
    toggleLastOptionHitState,
    resetInputState,
    handleComposition,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    handleFocus,
    blur,
    handleBlur,
    handleClearClick,
    handleClose,
    handleKeydownEscape,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropMenuVisible,
    queryChange,
    groupQueryChange,
    reference,
    input,
    tooltipRef,
    tags,
    selectWrapper,
    scrollbar
  };
};


//# sourceMappingURL=useSelect.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/directives/click-outside/index.mjs




const nodeList = /* @__PURE__ */ new Map();
let startClick;
if (shared_isClient) {
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    for (const handlers of nodeList.values()) {
      for (const { documentHandler } of handlers) {
        documentHandler(e, startClick);
      }
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (Array.isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex((item) => item.bindingFn === binding.oldValue);
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/vue/validator.mjs




const isValidComponentSize = (val) => ["", ...componentSizes].includes(val);
const isValidDatePickType = (val) => [...datePickTypes].includes(val);


//# sourceMappingURL=validator.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-focus/index.mjs
const use_focus_useFocus = (el) => {
  return {
    focus: () => {
      var _a, _b;
      (_b = (_a = el.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
  };
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/select.mjs


























const select_COMPONENT_NAME = "ElSelect";
const select_sfc_main = (0,external_Vue_.defineComponent)({
  name: select_COMPONENT_NAME,
  componentName: select_COMPONENT_NAME,
  components: {
    ElInput: ElInput,
    ElSelectMenu: ElSelectMenu,
    ElOption: Option,
    ElTag: ElTag,
    ElScrollbar: ElScrollbar,
    ElTooltip: ElTooltip,
    ElIcon: ElIcon
  },
  directives: { ClickOutside: ClickOutside },
  props: {
    name: String,
    id: String,
    modelValue: {
      type: [Array, String, Number, Boolean, Object],
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    automaticDropdown: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    },
    effect: {
      type: String,
      default: "light"
    },
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: {
      type: String,
      default: ""
    },
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String
    },
    defaultFirstOption: Boolean,
    reserveKeyword: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    collapseTags: Boolean,
    collapseTagsTooltip: {
      type: Boolean,
      default: false
    },
    teleported: useTooltipContentProps.teleported,
    persistent: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: [String, Object],
      default: dist/* CircleClose */.K41
    },
    fitInputWidth: {
      type: Boolean,
      default: false
    },
    suffixIcon: {
      type: [String, Object],
      default: dist/* ArrowUp */.a2Z
    },
    tagType: { ...tagProps.type, default: "info" },
    validateEvent: {
      type: Boolean,
      default: true
    }
  },
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur"
  ],
  setup(props, ctx) {
    const nsSelect = useNamespace("select");
    const nsInput = useNamespace("input");
    const { t } = useLocale();
    const states = useSelectStates(props);
    const {
      optionsArray,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      setSelected,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      onOptionCreate,
      onOptionDestroy,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      reference,
      input,
      tooltipRef,
      tags,
      selectWrapper,
      scrollbar,
      queryChange,
      groupQueryChange
    } = useSelect(props, states, ctx);
    const { focus } = use_focus_useFocus(reference);
    const {
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      cachedOptions,
      optionsCount,
      prefixWidth,
      tagInMultiLine
    } = (0,external_Vue_.toRefs)(states);
    const wrapperKls = (0,external_Vue_.computed)(() => {
      const classList = [nsSelect.b()];
      const _selectSize = (0,external_Vue_.unref)(selectSize);
      if (_selectSize) {
        classList.push(nsSelect.m(_selectSize));
      }
      if (props.disabled) {
        classList.push(nsSelect.m("disabled"));
      }
      return classList;
    });
    const selectTagsStyle = (0,external_Vue_.computed)(() => ({
      maxWidth: `${(0,external_Vue_.unref)(inputWidth) - 32}px`,
      width: "100%"
    }));
    (0,external_Vue_.provide)(selectKey, (0,external_Vue_.reactive)({
      props,
      options,
      optionsArray,
      cachedOptions,
      optionsCount,
      filteredOptionsCount,
      hoverIndex,
      handleOptionSelect,
      onOptionCreate,
      onOptionDestroy,
      selectWrapper,
      selected,
      setSelected,
      queryChange,
      groupQueryChange
    }));
    (0,external_Vue_.onMounted)(() => {
      states.cachedPlaceHolder = currentPlaceholder.value = props.placeholder || t("el.select.placeholder");
      if (props.multiple && Array.isArray(props.modelValue) && props.modelValue.length > 0) {
        currentPlaceholder.value = "";
      }
      useResizeObserver(selectWrapper, handleResize);
      if (props.remote && props.multiple) {
        resetInputHeight();
      }
      (0,external_Vue_.nextTick)(() => {
        const refEl = reference.value && reference.value.$el;
        if (!refEl)
          return;
        inputWidth.value = refEl.getBoundingClientRect().width;
        if (ctx.slots.prefix) {
          const prefix = refEl.querySelector(`.${nsInput.e("prefix")}`);
          prefixWidth.value = Math.max(prefix.getBoundingClientRect().width + 5, 30);
        }
      });
      setSelected();
    });
    if (props.multiple && !Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, []);
    }
    if (!props.multiple && Array.isArray(props.modelValue)) {
      ctx.emit(UPDATE_MODEL_EVENT, "");
    }
    const popperPaneRef = (0,external_Vue_.computed)(() => {
      var _a, _b;
      return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    return {
      tagInMultiLine,
      prefixWidth,
      selectSize,
      readonly,
      handleResize,
      collapseTagSize,
      debouncedOnInputChange,
      debouncedQueryChange,
      deletePrevTag,
      deleteTag,
      deleteSelected,
      handleOptionSelect,
      scrollToOption,
      inputWidth,
      selected,
      inputLength,
      filteredOptionsCount,
      visible,
      softFocus,
      selectedLabel,
      hoverIndex,
      query,
      inputHovering,
      currentPlaceholder,
      menuVisibleOnFocus,
      isOnComposition,
      isSilentBlur,
      options,
      resetInputHeight,
      managePlaceholder,
      showClose,
      selectDisabled,
      iconComponent,
      iconReverse,
      showNewOption,
      emptyText,
      toggleLastOptionHitState,
      resetInputState,
      handleComposition,
      handleMenuEnter,
      handleFocus,
      blur,
      handleBlur,
      handleClearClick,
      handleClose,
      handleKeydownEscape,
      toggleMenu,
      selectOption,
      getValueKey,
      navigateOptions,
      dropMenuVisible,
      focus,
      reference,
      input,
      tooltipRef,
      popperPaneRef,
      tags,
      selectWrapper,
      scrollbar,
      wrapperKls,
      selectTagsStyle,
      nsSelect
    };
  }
});
const select_hoisted_1 = { class: "select-trigger" };
const select_hoisted_2 = ["disabled", "autocomplete"];
const select_hoisted_3 = { style: { "height": "100%", "display": "flex", "justify-content": "center", "align-items": "center" } };
function select_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = (0,external_Vue_.resolveComponent)("el-tag");
  const _component_el_tooltip = (0,external_Vue_.resolveComponent)("el-tooltip");
  const _component_el_icon = (0,external_Vue_.resolveComponent)("el-icon");
  const _component_el_input = (0,external_Vue_.resolveComponent)("el-input");
  const _component_el_option = (0,external_Vue_.resolveComponent)("el-option");
  const _component_el_scrollbar = (0,external_Vue_.resolveComponent)("el-scrollbar");
  const _component_el_select_menu = (0,external_Vue_.resolveComponent)("el-select-menu");
  const _directive_click_outside = (0,external_Vue_.resolveDirective)("click-outside");
  return (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
    ref: "selectWrapper",
    class: (0,external_Vue_.normalizeClass)(_ctx.wrapperKls),
    onClick: _cache[22] || (_cache[22] = (0,external_Vue_.withModifiers)((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
  }, [
    (0,external_Vue_.createVNode)(_component_el_tooltip, {
      ref: "tooltipRef",
      visible: _ctx.dropMenuVisible,
      placement: "bottom-start",
      teleported: _ctx.teleported,
      "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.effect,
      pure: "",
      trigger: "click",
      transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
      "stop-popper-mouse-event": false,
      "gpu-acceleration": false,
      persistent: _ctx.persistent,
      onShow: _ctx.handleMenuEnter
    }, {
      default: (0,external_Vue_.withCtx)(() => [
        (0,external_Vue_.createElementVNode)("div", select_hoisted_1, [
          _ctx.multiple ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            ref: "tags",
            class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags")),
            style: (0,external_Vue_.normalizeStyle)(_ctx.selectTagsStyle)
          }, [
            _ctx.collapseTags && _ctx.selected.length ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
              key: 0,
              class: (0,external_Vue_.normalizeClass)([
                _ctx.nsSelect.b("tags-wrapper"),
                { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
              ])
            }, [
              (0,external_Vue_.createVNode)(_component_el_tag, {
                closable: !_ctx.selectDisabled && !_ctx.selected[0].isDisabled,
                size: _ctx.collapseTagSize,
                hit: _ctx.selected[0].hitState,
                type: _ctx.tagType,
                "disable-transitions": "",
                onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.selected[0]))
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  (0,external_Vue_.createElementVNode)("span", {
                    class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags-text")),
                    style: (0,external_Vue_.normalizeStyle)({ maxWidth: _ctx.inputWidth - 123 + "px" })
                  }, (0,external_Vue_.toDisplayString)(_ctx.selected[0].currentLabel), 7)
                ]),
                _: 1
              }, 8, ["closable", "size", "hit", "type"]),
              _ctx.selected.length > 1 ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_tag, {
                key: 0,
                closable: false,
                size: _ctx.collapseTagSize,
                type: _ctx.tagType,
                "disable-transitions": ""
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  _ctx.collapseTagsTooltip ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_tooltip, {
                    key: 0,
                    disabled: _ctx.dropMenuVisible,
                    "fallback-placements": ["bottom", "top", "right", "left"],
                    effect: _ctx.effect,
                    placement: "bottom",
                    teleported: _ctx.teleported
                  }, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createElementVNode)("span", {
                        class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags-text"))
                      }, "+ " + (0,external_Vue_.toDisplayString)(_ctx.selected.length - 1), 3)
                    ]),
                    content: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createElementVNode)("div", {
                        class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("collapse-tags"))
                      }, [
                        ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(_ctx.selected.slice(1), (item, idx) => {
                          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
                            key: idx,
                            class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("collapse-tag"))
                          }, [
                            ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_tag, {
                              key: _ctx.getValueKey(item),
                              class: "in-tooltip",
                              closable: !_ctx.selectDisabled && !item.isDisabled,
                              size: _ctx.collapseTagSize,
                              hit: item.hitState,
                              type: _ctx.tagType,
                              "disable-transitions": "",
                              style: { margin: "2px" },
                              onClose: ($event) => _ctx.deleteTag($event, item)
                            }, {
                              default: (0,external_Vue_.withCtx)(() => [
                                (0,external_Vue_.createElementVNode)("span", {
                                  class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags-text")),
                                  style: (0,external_Vue_.normalizeStyle)({
                                    maxWidth: _ctx.inputWidth - 75 + "px"
                                  })
                                }, (0,external_Vue_.toDisplayString)(item.currentLabel), 7)
                              ]),
                              _: 2
                            }, 1032, ["closable", "size", "hit", "type", "onClose"]))
                          ], 2);
                        }), 128))
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["disabled", "effect", "teleported"])) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                    key: 1,
                    class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags-text"))
                  }, "+ " + (0,external_Vue_.toDisplayString)(_ctx.selected.length - 1), 3))
                ]),
                _: 1
              }, 8, ["size", "type"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.createCommentVNode)(" <div> "),
            !_ctx.collapseTags ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, {
              key: 1,
              onAfterLeave: _ctx.resetInputHeight
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createElementVNode)("span", {
                  class: (0,external_Vue_.normalizeClass)([
                    _ctx.nsSelect.b("tags-wrapper"),
                    { "has-prefix": _ctx.prefixWidth && _ctx.selected.length }
                  ])
                }, [
                  ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(_ctx.selected, (item) => {
                    return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_tag, {
                      key: _ctx.getValueKey(item),
                      closable: !_ctx.selectDisabled && !item.isDisabled,
                      size: _ctx.collapseTagSize,
                      hit: item.hitState,
                      type: _ctx.tagType,
                      "disable-transitions": "",
                      onClose: ($event) => _ctx.deleteTag($event, item)
                    }, {
                      default: (0,external_Vue_.withCtx)(() => [
                        (0,external_Vue_.createElementVNode)("span", {
                          class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.e("tags-text")),
                          style: (0,external_Vue_.normalizeStyle)({ maxWidth: _ctx.inputWidth - 75 + "px" })
                        }, (0,external_Vue_.toDisplayString)(item.currentLabel), 7)
                      ]),
                      _: 2
                    }, 1032, ["closable", "size", "hit", "type", "onClose"]);
                  }), 128))
                ], 2)
              ]),
              _: 1
            }, 8, ["onAfterLeave"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.createCommentVNode)(" </div> "),
            _ctx.filterable ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("input", {
              key: 2,
              ref: "input",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => _ctx.query = $event),
              type: "text",
              class: (0,external_Vue_.normalizeClass)([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
              disabled: _ctx.selectDisabled,
              autocomplete: _ctx.autocomplete,
              style: (0,external_Vue_.normalizeStyle)({
                marginLeft: _ctx.prefixWidth && !_ctx.selected.length || _ctx.tagInMultiLine ? `${_ctx.prefixWidth}px` : "",
                flexGrow: 1,
                width: `${_ctx.inputLength / (_ctx.inputWidth - 32)}%`,
                maxWidth: `${_ctx.inputWidth - 42}px`
              }),
              onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
              onBlur: _cache[3] || (_cache[3] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
              onKeyup: _cache[4] || (_cache[4] = (...args) => _ctx.managePlaceholder && _ctx.managePlaceholder(...args)),
              onKeydown: [
                _cache[5] || (_cache[5] = (...args) => _ctx.resetInputState && _ctx.resetInputState(...args)),
                _cache[6] || (_cache[6] = (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(($event) => _ctx.navigateOptions("next"), ["prevent"]), ["down"])),
                _cache[7] || (_cache[7] = (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(($event) => _ctx.navigateOptions("prev"), ["prevent"]), ["up"])),
                _cache[8] || (_cache[8] = (0,external_Vue_.withKeys)((...args) => _ctx.handleKeydownEscape && _ctx.handleKeydownEscape(...args), ["esc"])),
                _cache[9] || (_cache[9] = (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)((...args) => _ctx.selectOption && _ctx.selectOption(...args), ["stop", "prevent"]), ["enter"])),
                _cache[10] || (_cache[10] = (0,external_Vue_.withKeys)((...args) => _ctx.deletePrevTag && _ctx.deletePrevTag(...args), ["delete"])),
                _cache[11] || (_cache[11] = (0,external_Vue_.withKeys)(($event) => _ctx.visible = false, ["tab"]))
              ],
              onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleComposition && _ctx.handleComposition(...args)),
              onInput: _cache[15] || (_cache[15] = (...args) => _ctx.debouncedQueryChange && _ctx.debouncedQueryChange(...args))
            }, null, 46, select_hoisted_2)), [
              [external_Vue_.vModelText, _ctx.query]
            ]) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 6)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createVNode)(_component_el_input, {
            id: _ctx.id,
            ref: "reference",
            modelValue: _ctx.selectedLabel,
            "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => _ctx.selectedLabel = $event),
            type: "text",
            placeholder: _ctx.currentPlaceholder,
            name: _ctx.name,
            autocomplete: _ctx.autocomplete,
            size: _ctx.selectSize,
            disabled: _ctx.selectDisabled,
            readonly: _ctx.readonly,
            "validate-event": false,
            class: (0,external_Vue_.normalizeClass)([_ctx.nsSelect.is("focus", _ctx.visible)]),
            tabindex: _ctx.multiple && _ctx.filterable ? -1 : void 0,
            onFocus: _ctx.handleFocus,
            onBlur: _ctx.handleBlur,
            onInput: _ctx.debouncedOnInputChange,
            onPaste: _ctx.debouncedOnInputChange,
            onCompositionstart: _ctx.handleComposition,
            onCompositionupdate: _ctx.handleComposition,
            onCompositionend: _ctx.handleComposition,
            onKeydown: [
              _cache[17] || (_cache[17] = (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(($event) => _ctx.navigateOptions("next"), ["stop", "prevent"]), ["down"])),
              _cache[18] || (_cache[18] = (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(($event) => _ctx.navigateOptions("prev"), ["stop", "prevent"]), ["up"])),
              (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(_ctx.selectOption, ["stop", "prevent"]), ["enter"]),
              (0,external_Vue_.withKeys)(_ctx.handleKeydownEscape, ["esc"]),
              _cache[19] || (_cache[19] = (0,external_Vue_.withKeys)(($event) => _ctx.visible = false, ["tab"]))
            ],
            onMouseenter: _cache[20] || (_cache[20] = ($event) => _ctx.inputHovering = true),
            onMouseleave: _cache[21] || (_cache[21] = ($event) => _ctx.inputHovering = false)
          }, (0,external_Vue_.createSlots)({
            suffix: (0,external_Vue_.withCtx)(() => [
              _ctx.iconComponent && !_ctx.showClose ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_icon, {
                key: 0,
                class: (0,external_Vue_.normalizeClass)([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
              _ctx.showClose && _ctx.clearIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_icon, {
                key: 1,
                class: (0,external_Vue_.normalizeClass)([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon")]),
                onClick: _ctx.handleClearClick
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ]),
            _: 2
          }, [
            _ctx.$slots.prefix ? {
              name: "prefix",
              fn: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createElementVNode)("div", select_hoisted_3, [
                  (0,external_Vue_.renderSlot)(_ctx.$slots, "prefix")
                ])
              ])
            } : void 0
          ]), 1032, ["id", "modelValue", "placeholder", "name", "autocomplete", "size", "disabled", "readonly", "class", "tabindex", "onFocus", "onBlur", "onInput", "onPaste", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onKeydown"])
        ])
      ]),
      content: (0,external_Vue_.withCtx)(() => [
        (0,external_Vue_.createVNode)(_component_el_select_menu, null, {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)(_component_el_scrollbar, {
              ref: "scrollbar",
              tag: "ul",
              "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
              "view-class": _ctx.nsSelect.be("dropdown", "list"),
              class: (0,external_Vue_.normalizeClass)([
                _ctx.nsSelect.is("empty", !_ctx.allowCreate && Boolean(_ctx.query) && _ctx.filteredOptionsCount === 0)
              ])
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                _ctx.showNewOption ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_option, {
                  key: 0,
                  value: _ctx.query,
                  created: true
                }, null, 8, ["value"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["wrap-class", "view-class", "class"]), [
              [external_Vue_.vShow, _ctx.options.size > 0 && !_ctx.loading]
            ]),
            _ctx.emptyText && (!_ctx.allowCreate || _ctx.loading || _ctx.allowCreate && _ctx.options.size === 0) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
              _ctx.$slots.empty ? (0,external_Vue_.renderSlot)(_ctx.$slots, "empty", { key: 0 }) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("p", {
                key: 1,
                class: (0,external_Vue_.normalizeClass)(_ctx.nsSelect.be("dropdown", "empty"))
              }, (0,external_Vue_.toDisplayString)(_ctx.emptyText), 3))
            ], 64)) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["visible", "teleported", "popper-class", "effect", "transition", "persistent", "onShow"])
  ], 2)), [
    [_directive_click_outside, _ctx.handleClose, _ctx.popperPaneRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(select_sfc_main, [["render", select_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);


//# sourceMappingURL=select.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/src/option-group.mjs






const option_group_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const ns = useNamespace("select");
    const visible = (0,external_Vue_.ref)(true);
    const instance = (0,external_Vue_.getCurrentInstance)();
    const children = (0,external_Vue_.ref)([]);
    (0,external_Vue_.provide)(selectGroupKey, (0,external_Vue_.reactive)({
      ...(0,external_Vue_.toRefs)(props)
    }));
    const select = (0,external_Vue_.inject)(selectKey);
    (0,external_Vue_.onMounted)(() => {
      children.value = flattedChildren(instance.subTree);
    });
    const flattedChildren = (node) => {
      const children2 = [];
      if (Array.isArray(node.children)) {
        node.children.forEach((child) => {
          var _a;
          if (child.type && child.type.name === "ElOption" && child.component && child.component.proxy) {
            children2.push(child.component.proxy);
          } else if ((_a = child.children) == null ? void 0 : _a.length) {
            children2.push(...flattedChildren(child));
          }
        });
      }
      return children2;
    };
    const { groupQueryChange } = (0,external_Vue_.toRaw)(select);
    (0,external_Vue_.watch)(groupQueryChange, () => {
      visible.value = children.value.some((option) => option.visible === true);
    });
    return {
      visible,
      ns
    };
  }
});
function option_group_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("ul", {
    class: (0,external_Vue_.normalizeClass)(_ctx.ns.be("group", "wrap"))
  }, [
    (0,external_Vue_.createElementVNode)("li", {
      class: (0,external_Vue_.normalizeClass)(_ctx.ns.be("group", "title"))
    }, (0,external_Vue_.toDisplayString)(_ctx.label), 3),
    (0,external_Vue_.createElementVNode)("li", null, [
      (0,external_Vue_.createElementVNode)("ul", {
        class: (0,external_Vue_.normalizeClass)(_ctx.ns.b("group"))
      }, [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 2)
    ])
  ], 2)), [
    [external_Vue_.vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(option_group_sfc_main, [["render", option_group_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);


//# sourceMappingURL=option-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/index.mjs







const ElSelect = withInstall(Select, {
  Option: Option,
  OptionGroup: OptionGroup
});
const ElOption = withNoopInstall(Option);
const ElOptionGroup = withNoopInstall(OptionGroup);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/switch/src/switch.mjs









const switchProps = buildProps({
  modelValue: {
    type: [Boolean, String, Number],
    default: false
  },
  value: {
    type: [Boolean, String, Number],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  width: {
    type: [String, Number],
    default: ""
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeIcon: {
    type: iconPropType,
    default: ""
  },
  inactiveIcon: {
    type: iconPropType,
    default: ""
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  },
  activeColor: {
    type: String,
    default: ""
  },
  inactiveColor: {
    type: String,
    default: ""
  },
  borderColor: {
    type: String,
    default: ""
  },
  activeValue: {
    type: [Boolean, String, Number],
    default: true
  },
  inactiveValue: {
    type: [Boolean, String, Number],
    default: false
  },
  name: {
    type: String,
    default: ""
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  id: String,
  loading: {
    type: Boolean,
    default: false
  },
  beforeChange: {
    type: definePropType(Function)
  },
  size: {
    type: String,
    validator: isValidComponentSize
  },
  tabindex: {
    type: [String, Number]
  }
});
const switchEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isBoolean(val) || (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val),
  [CHANGE_EVENT]: (val) => isBoolean(val) || (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val),
  [INPUT_EVENT]: (val) => isBoolean(val) || (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val)
};


//# sourceMappingURL=switch.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/hooks/use-deprecated/index.mjs




const useDeprecated = ({ from, replacement, scope, version, ref, type = "API" }, condition) => {
  (0,external_Vue_.watch)(() => (0,external_Vue_.unref)(condition), (val) => {
    if (val) {
      error_debugWarn(scope, `[${type}] ${from} is about to be deprecated in version ${version}, please use ${replacement} instead.
For more detail, please visit: ${ref}
`);
    }
  }, {
    immediate: true
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/switch/src/switch2.mjs


















const switch2_hoisted_1 = ["onClick"];
const switch2_hoisted_2 = ["id", "aria-checked", "aria-disabled", "name", "true-value", "false-value", "disabled", "tabindex", "onKeydown"];
const switch2_hoisted_3 = ["aria-hidden"];
const _hoisted_4 = ["aria-hidden"];
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const switch2_default_ = {
  name: "ElSwitch"
};
const switch2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...switch2_default_,
  props: switchProps,
  emits: switchEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const COMPONENT_NAME = "ElSwitch";
    const vm = (0,external_Vue_.getCurrentInstance)();
    const { formItem } = useFormItem();
    const switchSize = useSize();
    const ns = useNamespace("switch");
    useDeprecated({
      from: '"value"',
      replacement: '"model-value" or "v-model"',
      scope: COMPONENT_NAME,
      version: "2.3.0",
      ref: "https://element-plus.org/en-US/component/switch.html#attributes",
      type: "Attribute"
    }, (0,external_Vue_.computed)(() => {
      var _a;
      return !!((_a = vm.vnode.props) == null ? void 0 : _a.value);
    }));
    const { inputId } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const switchDisabled = useDisabled((0,external_Vue_.computed)(() => props.loading));
    const isControlled = (0,external_Vue_.ref)(props.modelValue !== false);
    const input = (0,external_Vue_.ref)();
    const core = (0,external_Vue_.ref)();
    const switchKls = (0,external_Vue_.computed)(() => [
      ns.b(),
      ns.m(switchSize.value),
      ns.is("disabled", switchDisabled.value),
      ns.is("checked", checked.value)
    ]);
    const coreStyle = (0,external_Vue_.computed)(() => ({
      width: addUnit(props.width)
    }));
    (0,external_Vue_.watch)(() => props.modelValue, () => {
      isControlled.value = true;
    });
    (0,external_Vue_.watch)(() => props.value, () => {
      isControlled.value = false;
    });
    const actualValue = (0,external_Vue_.computed)(() => {
      return isControlled.value ? props.modelValue : props.value;
    });
    const checked = (0,external_Vue_.computed)(() => actualValue.value === props.activeValue);
    if (![props.activeValue, props.inactiveValue].includes(actualValue.value)) {
      emit(UPDATE_MODEL_EVENT, props.inactiveValue);
      emit(CHANGE_EVENT, props.inactiveValue);
      emit(INPUT_EVENT, props.inactiveValue);
    }
    (0,external_Vue_.watch)(checked, (val) => {
      var _a;
      input.value.checked = val;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error_debugWarn(err));
      }
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      emit(UPDATE_MODEL_EVENT, val);
      emit(CHANGE_EVENT, val);
      emit(INPUT_EVENT, val);
      (0,external_Vue_.nextTick)(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isPromiseOrBool = [
        (0,shared_esm_bundler/* isPromise */.tI)(shouldChange),
        isBoolean(shouldChange)
      ].includes(true);
      if (!isPromiseOrBool) {
        throwError(COMPONENT_NAME, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if ((0,shared_esm_bundler/* isPromise */.tI)(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          error_debugWarn(COMPONENT_NAME, `some error occurred: ${e}`);
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const styles = (0,external_Vue_.computed)(() => {
      return ns.cssVarBlock({
        ...props.activeColor ? { "on-color": props.activeColor } : null,
        ...props.inactiveColor ? { "off-color": props.inactiveColor } : null,
        ...props.borderColor ? { "border-color": props.borderColor } : null
      });
    });
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    (0,external_Vue_.onMounted)(() => {
      input.value.checked = checked.value;
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(switchKls)),
        style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(styles)),
        onClick: (0,external_Vue_.withModifiers)(switchValue, ["prevent"])
      }, [
        (0,external_Vue_.createElementVNode)("input", {
          id: (0,external_Vue_.unref)(inputId),
          ref_key: "input",
          ref: input,
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("input")),
          type: "checkbox",
          role: "switch",
          "aria-checked": (0,external_Vue_.unref)(checked),
          "aria-disabled": (0,external_Vue_.unref)(switchDisabled),
          name: _ctx.name,
          "true-value": _ctx.activeValue,
          "false-value": _ctx.inactiveValue,
          disabled: (0,external_Vue_.unref)(switchDisabled),
          tabindex: _ctx.tabindex,
          onChange: handleChange,
          onKeydown: (0,external_Vue_.withKeys)(switchValue, ["enter"])
        }, null, 42, switch2_hoisted_2),
        !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 0,
          class: (0,external_Vue_.normalizeClass)([
            (0,external_Vue_.unref)(ns).e("label"),
            (0,external_Vue_.unref)(ns).em("label", "left"),
            (0,external_Vue_.unref)(ns).is("active", !(0,external_Vue_.unref)(checked))
          ])
        }, [
          _ctx.inactiveIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), { key: 0 }, {
            default: (0,external_Vue_.withCtx)(() => [
              ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.inactiveIcon)))
            ]),
            _: 1
          })) : (0,external_Vue_.createCommentVNode)("v-if", true),
          !_ctx.inactiveIcon && _ctx.inactiveText ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
            key: 1,
            "aria-hidden": (0,external_Vue_.unref)(checked)
          }, (0,external_Vue_.toDisplayString)(_ctx.inactiveText), 9, switch2_hoisted_3)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
        (0,external_Vue_.createElementVNode)("span", {
          ref_key: "core",
          ref: core,
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("core")),
          style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(coreStyle))
        }, [
          _ctx.inlinePrompt ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("inner"))
          }, [
            _ctx.activeIcon || _ctx.inactiveIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
              _ctx.activeIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                key: 0,
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).is("icon"), (0,external_Vue_.unref)(checked) ? (0,external_Vue_.unref)(ns).is("show") : (0,external_Vue_.unref)(ns).is("hide")])
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.activeIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
              _ctx.inactiveIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                key: 1,
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).is("icon"), !(0,external_Vue_.unref)(checked) ? (0,external_Vue_.unref)(ns).is("show") : (0,external_Vue_.unref)(ns).is("hide")])
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.inactiveIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
              _ctx.activeText ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                key: 0,
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).is("text"), (0,external_Vue_.unref)(checked) ? (0,external_Vue_.unref)(ns).is("show") : (0,external_Vue_.unref)(ns).is("hide")]),
                "aria-hidden": !(0,external_Vue_.unref)(checked)
              }, (0,external_Vue_.toDisplayString)(_ctx.activeText.substring(0, 3)), 11, _hoisted_4)) : (0,external_Vue_.createCommentVNode)("v-if", true),
              _ctx.inactiveText ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                key: 1,
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).is("text"), !(0,external_Vue_.unref)(checked) ? (0,external_Vue_.unref)(ns).is("show") : (0,external_Vue_.unref)(ns).is("hide")]),
                "aria-hidden": (0,external_Vue_.unref)(checked)
              }, (0,external_Vue_.toDisplayString)(_ctx.inactiveText.substring(0, 3)), 11, _hoisted_5)) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ], 64)) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("action"))
          }, [
            _ctx.loading ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              key: 0,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).is("loading"))
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* Loading */.gbz))
              ]),
              _: 1
            }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 2)
        ], 6),
        !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 1,
          class: (0,external_Vue_.normalizeClass)([
            (0,external_Vue_.unref)(ns).e("label"),
            (0,external_Vue_.unref)(ns).em("label", "right"),
            (0,external_Vue_.unref)(ns).is("active", (0,external_Vue_.unref)(checked))
          ])
        }, [
          _ctx.activeIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), { key: 0 }, {
            default: (0,external_Vue_.withCtx)(() => [
              ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.activeIcon)))
            ]),
            _: 1
          })) : (0,external_Vue_.createCommentVNode)("v-if", true),
          !_ctx.activeIcon && _ctx.activeText ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
            key: 1,
            "aria-hidden": !(0,external_Vue_.unref)(checked)
          }, (0,external_Vue_.toDisplayString)(_ctx.activeText), 9, _hoisted_6)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 14, switch2_hoisted_1);
    };
  }
});
var Switch = /* @__PURE__ */ _export_sfc(switch2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);


//# sourceMappingURL=switch2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/switch/index.mjs





const ElSwitch = withInstall(Switch);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/src/checkbox.mjs













const useCheckboxGroupProps = {
  modelValue: {
    type: Array,
    default: () => []
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: void 0
  },
  max: {
    type: Number,
    default: void 0
  },
  size: useSizeProp,
  id: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  fill: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: void 0
  },
  tag: {
    type: String,
    default: "div"
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => void 0
  },
  label: {
    type: [String, Boolean, Number, Object]
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: void 0
  },
  trueLabel: {
    type: [String, Number],
    default: void 0
  },
  falseLabel: {
    type: [String, Number],
    default: void 0
  },
  id: {
    type: String,
    default: void 0
  },
  controls: {
    type: String,
    default: void 0
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true
  }
};
const useCheckboxGroup = () => {
  const elForm = (0,external_Vue_.inject)(formContextKey, {});
  const elFormItem = (0,external_Vue_.inject)(formItemContextKey, {});
  const checkboxGroup = (0,external_Vue_.inject)("CheckboxGroup", {});
  const isGroup = (0,external_Vue_.computed)(() => checkboxGroup && (checkboxGroup == null ? void 0 : checkboxGroup.name) === "ElCheckboxGroup");
  const elFormItemSize = (0,external_Vue_.computed)(() => {
    return elFormItem.size;
  });
  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem
  };
};
const useCheckboxGroupId = (props, { elFormItem }) => {
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem
  });
  return {
    isLabeledByFormItem,
    groupId
  };
};
const useModel = (props) => {
  const selfModel = (0,external_Vue_.ref)(false);
  const { emit } = (0,external_Vue_.getCurrentInstance)();
  const { isGroup, checkboxGroup, elFormItem } = useCheckboxGroup();
  const isLimitExceeded = (0,external_Vue_.ref)(false);
  const model = (0,external_Vue_.computed)({
    get() {
      var _a, _b;
      return isGroup.value ? (_a = checkboxGroup.modelValue) == null ? void 0 : _a.value : (_b = props.modelValue) != null ? _b : selfModel.value;
    },
    set(val) {
      var _a;
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value = checkboxGroup.max !== void 0 && val.length > checkboxGroup.max.value;
        isLimitExceeded.value === false && ((_a = checkboxGroup == null ? void 0 : checkboxGroup.changeEvent) == null ? void 0 : _a.call(checkboxGroup, val));
      } else {
        emit(UPDATE_MODEL_EVENT, val);
        selfModel.value = val;
      }
    }
  });
  return {
    model,
    isGroup,
    isLimitExceeded,
    elFormItem
  };
};
const useCheckboxStatus = (props, slots, { model }) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup();
  const focus = (0,external_Vue_.ref)(false);
  const size = useSize(checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize, { prop: true });
  const isChecked = (0,external_Vue_.computed)(() => {
    const value = model.value;
    if ((0,shared_esm_bundler/* toTypeString */.BF)(value) === "[object Boolean]") {
      return value;
    } else if (Array.isArray(value)) {
      return value.includes(props.label);
    } else if (value !== null && value !== void 0) {
      return value === props.trueLabel;
    } else {
      return !!value;
    }
  });
  const checkboxSize = useSize((0,external_Vue_.computed)(() => {
    var _a;
    return isGroup.value ? (_a = checkboxGroup == null ? void 0 : checkboxGroup.checkboxGroupSize) == null ? void 0 : _a.value : void 0;
  }));
  const hasOwnLabel = (0,external_Vue_.computed)(() => {
    return !!(slots.default || props.label);
  });
  return {
    isChecked,
    focus,
    size,
    checkboxSize,
    hasOwnLabel
  };
};
const checkbox_useDisabled = (props, {
  model,
  isChecked
}) => {
  const { elForm, isGroup, checkboxGroup } = useCheckboxGroup();
  const isLimitDisabled = (0,external_Vue_.computed)(() => {
    var _a, _b;
    const max = (_a = checkboxGroup.max) == null ? void 0 : _a.value;
    const min = (_b = checkboxGroup.min) == null ? void 0 : _b.value;
    return !!(max || min) && model.value.length >= max && !isChecked.value || model.value.length <= min && isChecked.value;
  });
  const isDisabled = (0,external_Vue_.computed)(() => {
    var _a, _b;
    const disabled = props.disabled || (elForm == null ? void 0 : elForm.disabled);
    return (_b = isGroup.value ? ((_a = checkboxGroup.disabled) == null ? void 0 : _a.value) || disabled || isLimitDisabled.value : disabled) != null ? _b : false;
  });
  return {
    isDisabled,
    isLimitDisabled
  };
};
const setStoreValue = (props, { model }) => {
  function addToStore() {
    if (Array.isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label);
    } else {
      model.value = props.trueLabel || true;
    }
  }
  props.checked && addToStore();
};
const useEvent = (props, {
  model,
  isLimitExceeded,
  hasOwnLabel,
  isDisabled,
  isLabeledByFormItem
}) => {
  const { elFormItem, checkboxGroup } = useCheckboxGroup();
  const { emit } = (0,external_Vue_.getCurrentInstance)();
  function getLabeledValue(value) {
    var _a, _b;
    return value === props.trueLabel || value === true ? (_a = props.trueLabel) != null ? _a : true : (_b = props.falseLabel) != null ? _b : false;
  }
  function emitChangeEvent(checked, e) {
    emit("change", getLabeledValue(checked), e);
  }
  function handleChange(e) {
    if (isLimitExceeded.value)
      return;
    const target = e.target;
    emit("change", getLabeledValue(target.checked), e);
  }
  async function onClickRoot(e) {
    if (isLimitExceeded.value)
      return;
    if (!hasOwnLabel.value && !isDisabled.value && isLabeledByFormItem.value) {
      model.value = getLabeledValue([false, props.falseLabel].includes(model.value));
      await (0,external_Vue_.nextTick)();
      emitChangeEvent(model.value, e);
    }
  }
  const validateEvent = (0,external_Vue_.computed)(() => {
    var _a;
    return ((_a = checkboxGroup.validateEvent) == null ? void 0 : _a.value) || props.validateEvent;
  });
  (0,external_Vue_.watch)(() => props.modelValue, () => {
    var _a;
    if (validateEvent.value) {
      (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error_debugWarn(err));
    }
  });
  return {
    handleChange,
    onClickRoot
  };
};
const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val) => (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val) || isBoolean(val),
  change: (val) => (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val) || isBoolean(val)
};
const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val) => (0,shared_esm_bundler/* isArray */.kJ)(val),
  change: (val) => (0,shared_esm_bundler/* isArray */.kJ)(val)
};
const useCheckbox = (props, slots) => {
  const { model, isGroup, isLimitExceeded, elFormItem } = useModel(props);
  const { focus, size, isChecked, checkboxSize, hasOwnLabel } = useCheckboxStatus(props, slots, {
    model
  });
  const { isDisabled } = checkbox_useDisabled(props, { model, isChecked });
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup
  });
  const { handleChange, onClickRoot } = useEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem
  });
  setStoreValue(props, { model });
  return {
    elFormItem,
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isGroup,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot,
    focus,
    size
  };
};


//# sourceMappingURL=checkbox.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/src/checkbox2.mjs






const checkbox2_hoisted_1 = ["tabindex", "role", "aria-checked"];
const checkbox2_hoisted_2 = ["id", "aria-hidden", "name", "tabindex", "disabled", "true-value", "false-value"];
const checkbox2_hoisted_3 = ["id", "aria-hidden", "disabled", "value", "name", "tabindex"];
const checkbox2_default_ = {
  name: "ElCheckbox"
};
const checkbox2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...checkbox2_default_,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = (0,external_Vue_.useSlots)();
    const {
      inputId,
      isLabeledByFormItem,
      isChecked,
      isDisabled,
      checkboxSize,
      hasOwnLabel,
      model,
      handleChange,
      onClickRoot,
      focus
    } = useCheckbox(props, slots);
    const ns = useNamespace("checkbox");
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(!(0,external_Vue_.unref)(hasOwnLabel) && (0,external_Vue_.unref)(isLabeledByFormItem) ? "span" : "label"), {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b(),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(checkboxSize)),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(isDisabled)),
          (0,external_Vue_.unref)(ns).is("bordered", _ctx.border),
          (0,external_Vue_.unref)(ns).is("checked", (0,external_Vue_.unref)(isChecked))
        ]),
        "aria-controls": _ctx.indeterminate ? _ctx.controls : null,
        onClick: (0,external_Vue_.unref)(onClickRoot)
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.createElementVNode)("span", {
            class: (0,external_Vue_.normalizeClass)([
              (0,external_Vue_.unref)(ns).e("input"),
              (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(isDisabled)),
              (0,external_Vue_.unref)(ns).is("checked", (0,external_Vue_.unref)(isChecked)),
              (0,external_Vue_.unref)(ns).is("indeterminate", _ctx.indeterminate),
              (0,external_Vue_.unref)(ns).is("focus", (0,external_Vue_.unref)(focus))
            ]),
            tabindex: _ctx.indeterminate ? 0 : void 0,
            role: _ctx.indeterminate ? "checkbox" : void 0,
            "aria-checked": _ctx.indeterminate ? "mixed" : void 0
          }, [
            _ctx.trueLabel || _ctx.falseLabel ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("input", {
              key: 0,
              id: (0,external_Vue_.unref)(inputId),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0,external_Vue_.isRef)(model) ? model.value = $event : null),
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              disabled: (0,external_Vue_.unref)(isDisabled),
              "true-value": _ctx.trueLabel,
              "false-value": _ctx.falseLabel,
              onChange: _cache[1] || (_cache[1] = (...args) => (0,external_Vue_.unref)(handleChange) && (0,external_Vue_.unref)(handleChange)(...args)),
              onFocus: _cache[2] || (_cache[2] = ($event) => focus.value = true),
              onBlur: _cache[3] || (_cache[3] = ($event) => focus.value = false)
            }, null, 42, checkbox2_hoisted_2)), [
              [external_Vue_.vModelCheckbox, (0,external_Vue_.unref)(model)]
            ]) : (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("input", {
              key: 1,
              id: (0,external_Vue_.unref)(inputId),
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0,external_Vue_.isRef)(model) ? model.value = $event : null),
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("original")),
              type: "checkbox",
              "aria-hidden": _ctx.indeterminate ? "true" : "false",
              disabled: (0,external_Vue_.unref)(isDisabled),
              value: _ctx.label,
              name: _ctx.name,
              tabindex: _ctx.tabindex,
              onChange: _cache[5] || (_cache[5] = (...args) => (0,external_Vue_.unref)(handleChange) && (0,external_Vue_.unref)(handleChange)(...args)),
              onFocus: _cache[6] || (_cache[6] = ($event) => focus.value = true),
              onBlur: _cache[7] || (_cache[7] = ($event) => focus.value = false)
            }, null, 42, checkbox2_hoisted_3)), [
              [external_Vue_.vModelCheckbox, (0,external_Vue_.unref)(model)]
            ]),
            (0,external_Vue_.createElementVNode)("span", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("inner"))
            }, null, 2)
          ], 10, checkbox2_hoisted_1),
          (0,external_Vue_.unref)(hasOwnLabel) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("label"))
          }, [
            (0,external_Vue_.renderSlot)(_ctx.$slots, "default"),
            !_ctx.$slots.default ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
              (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(_ctx.label), 1)
            ], 64)) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 3
      }, 8, ["class", "aria-controls", "onClick"]);
    };
  }
});
var Checkbox = /* @__PURE__ */ _export_sfc(checkbox2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);


//# sourceMappingURL=checkbox2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/src/checkbox-button.mjs






const checkbox_button_hoisted_1 = ["name", "tabindex", "disabled", "true-value", "false-value"];
const checkbox_button_hoisted_2 = ["name", "tabindex", "disabled", "value"];
const checkbox_button_default_ = {
  name: "ElCheckboxButton"
};
const checkbox_button_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...checkbox_button_default_,
  props: checkboxProps,
  emits: checkboxEmits,
  setup(__props) {
    const props = __props;
    const slots = (0,external_Vue_.useSlots)();
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props, slots);
    const { checkboxGroup } = useCheckboxGroup();
    const ns = useNamespace("checkbox");
    const activeStyle = (0,external_Vue_.computed)(() => {
      var _a, _b, _c, _d;
      const fillValue = (_b = (_a = checkboxGroup == null ? void 0 : checkboxGroup.fill) == null ? void 0 : _a.value) != null ? _b : "";
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: (_d = (_c = checkboxGroup == null ? void 0 : checkboxGroup.textColor) == null ? void 0 : _c.value) != null ? _d : "",
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : void 0
      };
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("label", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b("button"),
          (0,external_Vue_.unref)(ns).bm("button", (0,external_Vue_.unref)(size)),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(isDisabled)),
          (0,external_Vue_.unref)(ns).is("checked", (0,external_Vue_.unref)(isChecked)),
          (0,external_Vue_.unref)(ns).is("focus", (0,external_Vue_.unref)(focus))
        ])
      }, [
        _ctx.trueLabel || _ctx.falseLabel ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("input", {
          key: 0,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0,external_Vue_.isRef)(model) ? model.value = $event : null),
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: (0,external_Vue_.unref)(isDisabled),
          "true-value": _ctx.trueLabel,
          "false-value": _ctx.falseLabel,
          onChange: _cache[1] || (_cache[1] = (...args) => (0,external_Vue_.unref)(handleChange) && (0,external_Vue_.unref)(handleChange)(...args)),
          onFocus: _cache[2] || (_cache[2] = ($event) => focus.value = true),
          onBlur: _cache[3] || (_cache[3] = ($event) => focus.value = false)
        }, null, 42, checkbox_button_hoisted_1)), [
          [external_Vue_.vModelCheckbox, (0,external_Vue_.unref)(model)]
        ]) : (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("input", {
          key: 1,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => (0,external_Vue_.isRef)(model) ? model.value = $event : null),
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("button", "original")),
          type: "checkbox",
          name: _ctx.name,
          tabindex: _ctx.tabindex,
          disabled: (0,external_Vue_.unref)(isDisabled),
          value: _ctx.label,
          onChange: _cache[5] || (_cache[5] = (...args) => (0,external_Vue_.unref)(handleChange) && (0,external_Vue_.unref)(handleChange)(...args)),
          onFocus: _cache[6] || (_cache[6] = ($event) => focus.value = true),
          onBlur: _cache[7] || (_cache[7] = ($event) => focus.value = false)
        }, null, 42, checkbox_button_hoisted_2)), [
          [external_Vue_.vModelCheckbox, (0,external_Vue_.unref)(model)]
        ]),
        _ctx.$slots.default || _ctx.label ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 2,
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("button", "inner")),
          style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(isChecked) ? (0,external_Vue_.unref)(activeStyle) : void 0)
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
            (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(_ctx.label), 1)
          ])
        ], 6)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 2);
    };
  }
});
var CheckboxButton = /* @__PURE__ */ _export_sfc(checkbox_button_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);


//# sourceMappingURL=checkbox-button.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/src/checkbox-group.mjs











const checkbox_group_default_ = {
  name: "ElCheckboxGroup"
};
const checkbox_group_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...checkbox_group_default_,
  props: useCheckboxGroupProps,
  emits: checkboxGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const { elFormItem } = useCheckboxGroup();
    const { groupId, isLabeledByFormItem } = useCheckboxGroupId(props, {
      elFormItem
    });
    const checkboxGroupSize = useSize();
    const ns = useNamespace("checkbox");
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      (0,external_Vue_.nextTick)(() => {
        emit("change", value);
      });
    };
    const modelValue = (0,external_Vue_.computed)({
      get() {
        return props.modelValue;
      },
      set(val) {
        changeEvent(val);
      }
    });
    (0,external_Vue_.provide)("CheckboxGroup", {
      name: "ElCheckboxGroup",
      ...(0,external_Vue_.toRefs)(props),
      modelValue,
      checkboxGroupSize,
      changeEvent
    });
    (0,external_Vue_.watch)(() => props.modelValue, () => {
      var _a;
      if (props.validateEvent) {
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error_debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.tag), {
        id: (0,external_Vue_.unref)(groupId),
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b("group")),
        role: "group",
        "aria-label": !(0,external_Vue_.unref)(isLabeledByFormItem) ? _ctx.label || "checkbox-group" : void 0,
        "aria-labelledby": (0,external_Vue_.unref)(isLabeledByFormItem) ? (0,external_Vue_.unref)(elFormItem).labelId : void 0
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["id", "class", "aria-label", "aria-labelledby"]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ _export_sfc(checkbox_group_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);


//# sourceMappingURL=checkbox-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/index.mjs








const ElCheckbox = withInstall(Checkbox, {
  CheckboxButton: CheckboxButton,
  CheckboxGroup: CheckboxGroup
});
const ElCheckboxButton = withNoopInstall(CheckboxButton);
const ElCheckboxGroup = withNoopInstall(CheckboxGroup);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio.mjs









const radioPropsBase = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: ""
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  name: {
    type: String,
    default: ""
  },
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => (0,shared_esm_bundler/* isString */.HD)(val) || shared_isNumber(val) || isBoolean(val)
};


//# sourceMappingURL=radio.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/radio.mjs
const radioGroupKey = Symbol("radioGroupKey");


//# sourceMappingURL=radio.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/use-radio.mjs








const useRadio = (props, emit) => {
  const radioRef = (0,external_Vue_.ref)();
  const radioGroup = (0,external_Vue_.inject)(radioGroupKey, void 0);
  const isGroup = (0,external_Vue_.computed)(() => !!radioGroup);
  const modelValue = (0,external_Vue_.computed)({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === props.label;
    }
  });
  const size = useSize((0,external_Vue_.computed)(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useDisabled((0,external_Vue_.computed)(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = (0,external_Vue_.ref)(false);
  const tabIndex = (0,external_Vue_.computed)(() => {
    return disabled.value || isGroup.value && modelValue.value !== props.label ? -1 : 0;
  });
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue
  };
};


//# sourceMappingURL=use-radio.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio2.mjs







const radio2_hoisted_1 = ["value", "name", "disabled"];
const radio2_default_ = {
  name: "ElRadio"
};
const radio2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...radio2_default_,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue } = useRadio(props, emit);
    function handleChange() {
      (0,external_Vue_.nextTick)(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("label", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b(),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(disabled)),
          (0,external_Vue_.unref)(ns).is("focus", (0,external_Vue_.unref)(focus)),
          (0,external_Vue_.unref)(ns).is("bordered", _ctx.border),
          (0,external_Vue_.unref)(ns).is("checked", (0,external_Vue_.unref)(modelValue) === _ctx.label),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(size))
        ])
      }, [
        (0,external_Vue_.createElementVNode)("span", {
          class: (0,external_Vue_.normalizeClass)([
            (0,external_Vue_.unref)(ns).e("input"),
            (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(disabled)),
            (0,external_Vue_.unref)(ns).is("checked", (0,external_Vue_.unref)(modelValue) === _ctx.label)
          ])
        }, [
          (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0,external_Vue_.isRef)(modelValue) ? modelValue.value = $event : null),
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("original")),
            value: _ctx.label,
            name: _ctx.name || ((_a = (0,external_Vue_.unref)(radioGroup)) == null ? void 0 : _a.name),
            disabled: (0,external_Vue_.unref)(disabled),
            type: "radio",
            onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
            onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false),
            onChange: handleChange
          }, null, 42, radio2_hoisted_1), [
            [external_Vue_.vModelRadio, (0,external_Vue_.unref)(modelValue)]
          ]),
          (0,external_Vue_.createElementVNode)("span", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("inner"))
          }, null, 2)
        ], 2),
        (0,external_Vue_.createElementVNode)("span", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("label")),
          onKeydown: _cache[3] || (_cache[3] = (0,external_Vue_.withModifiers)(() => {
          }, ["stop"]))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
            (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(_ctx.label), 1)
          ])
        ], 34)
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(radio2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);


//# sourceMappingURL=radio2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio-button.mjs




const radioButtonProps = buildProps({
  ...radioPropsBase,
  name: {
    type: String,
    default: ""
  }
});


//# sourceMappingURL=radio-button.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio-button2.mjs







const radio_button2_hoisted_1 = ["value", "name", "disabled"];
const radio_button2_default_ = {
  name: "ElRadioButton"
};
const radio_button2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...radio_button2_default_,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup } = useRadio(props);
    const activeStyle = (0,external_Vue_.computed)(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("label", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b("button"),
          (0,external_Vue_.unref)(ns).is("active", (0,external_Vue_.unref)(modelValue) === _ctx.label),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(disabled)),
          (0,external_Vue_.unref)(ns).is("focus", (0,external_Vue_.unref)(focus)),
          (0,external_Vue_.unref)(ns).bm("button", (0,external_Vue_.unref)(size))
        ])
      }, [
        (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => (0,external_Vue_.isRef)(modelValue) ? modelValue.value = $event : null),
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("button", "original-radio")),
          value: _ctx.label,
          type: "radio",
          name: _ctx.name || ((_a = (0,external_Vue_.unref)(radioGroup)) == null ? void 0 : _a.name),
          disabled: (0,external_Vue_.unref)(disabled),
          onFocus: _cache[1] || (_cache[1] = ($event) => focus.value = true),
          onBlur: _cache[2] || (_cache[2] = ($event) => focus.value = false)
        }, null, 42, radio_button2_hoisted_1), [
          [external_Vue_.vModelRadio, (0,external_Vue_.unref)(modelValue)]
        ]),
        (0,external_Vue_.createElementVNode)("span", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("button", "inner")),
          style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(modelValue) === _ctx.label ? (0,external_Vue_.unref)(activeStyle) : {}),
          onKeydown: _cache[3] || (_cache[3] = (0,external_Vue_.withModifiers)(() => {
          }, ["stop"]))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default", {}, () => [
            (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(_ctx.label), 1)
          ])
        ], 38)
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(radio_button2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);


//# sourceMappingURL=radio-button2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio-group.mjs






const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: void 0
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const radioGroupEmits = radioEmits;


//# sourceMappingURL=radio-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/src/radio-group2.mjs














const radio_group2_hoisted_1 = ["id", "aria-label", "aria-labelledby"];
const radio_group2_default_ = {
  name: "ElRadioGroup"
};
const radio_group2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...radio_group2_default_,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = (0,external_Vue_.ref)();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      (0,external_Vue_.nextTick)(() => emit("change", value));
    };
    (0,external_Vue_.onMounted)(() => {
      const radios = radioGroupRef.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    const name = (0,external_Vue_.computed)(() => {
      return props.name || radioId.value;
    });
    (0,external_Vue_.provide)(radioGroupKey, (0,external_Vue_.reactive)({
      ...(0,external_Vue_.toRefs)(props),
      changeEvent,
      name
    }));
    (0,external_Vue_.watch)(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => error_debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        id: (0,external_Vue_.unref)(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b("group")),
        role: "radiogroup",
        "aria-label": !(0,external_Vue_.unref)(isLabeledByFormItem) ? _ctx.label || "radio-group" : void 0,
        "aria-labelledby": (0,external_Vue_.unref)(isLabeledByFormItem) ? (0,external_Vue_.unref)(formItem).labelId : void 0
      }, [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 10, radio_group2_hoisted_1);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(radio_group2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);


//# sourceMappingURL=radio-group2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/index.mjs









const ElRadio = withInstall(Radio, {
  RadioButton: RadioButton,
  RadioGroup: RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
const ElRadioButton = withNoopInstall(RadioButton);


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7039);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/customParseFormat.js
var customParseFormat = __webpack_require__(3808);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/advancedFormat.js
var advancedFormat = __webpack_require__(1014);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/localeData.js
var localeData = __webpack_require__(9523);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/weekOfYear.js
var weekOfYear = __webpack_require__(5776);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/weekYear.js
var weekYear = __webpack_require__(7850);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/dayOfYear.js
var dayOfYear = __webpack_require__(4628);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/isSameOrAfter.js
var isSameOrAfter = __webpack_require__(3204);
// EXTERNAL MODULE: ../../node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/plugin/isSameOrBefore.js
var isSameOrBefore = __webpack_require__(3360);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/date-picker.mjs



const datePickerProps = buildProps({
  type: {
    type: definePropType(String),
    default: "date"
  }
});


//# sourceMappingURL=date-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/src/button.mjs







const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
];
const buttonNativeTypes = ["button", "submit", "reset"];
const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonTypes,
    default: ""
  },
  icon: {
    type: iconPropType,
    default: ""
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => dist/* Loading */.gbz
  },
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  }
});
const buttonEmits = {
  click: (evt) => evt instanceof MouseEvent
};


//# sourceMappingURL=button.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/index.js + 4 modules
var dist_module = __webpack_require__(5122);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-custom.mjs






function darken(color, amount = 20) {
  return color.mix("#141414", amount).toString();
}
function useButtonCustomStyle(props) {
  const _disabled = useDisabled();
  const ns = useNamespace("button");
  return (0,external_Vue_.computed)(() => {
    let styles = {};
    const buttonColor = props.color;
    if (buttonColor) {
      const color = new dist_module/* TinyColor */.C(buttonColor);
      const activeBgColor = props.dark ? color.tint(20).toString() : darken(color, 20);
      if (props.plain) {
        styles = ns.cssVarBlock({
          "bg-color": props.dark ? darken(color, 90) : color.tint(90).toString(),
          "text-color": buttonColor,
          "border-color": props.dark ? darken(color, 50) : color.tint(50).toString(),
          "hover-text-color": `var(${ns.cssVarName("color-white")})`,
          "hover-bg-color": buttonColor,
          "hover-border-color": buttonColor,
          "active-bg-color": activeBgColor,
          "active-text-color": `var(${ns.cssVarName("color-white")})`,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          styles[ns.cssVarBlockName("disabled-bg-color")] = props.dark ? darken(color, 90) : color.tint(90).toString();
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-border-color")] = props.dark ? darken(color, 80) : color.tint(80).toString();
        }
      } else {
        const hoverBgColor = props.dark ? darken(color, 30) : color.tint(30).toString();
        const textColor = color.isDark() ? `var(${ns.cssVarName("color-white")})` : `var(${ns.cssVarName("color-black")})`;
        styles = ns.cssVarBlock({
          "bg-color": buttonColor,
          "text-color": textColor,
          "border-color": buttonColor,
          "hover-bg-color": hoverBgColor,
          "hover-text-color": textColor,
          "hover-border-color": hoverBgColor,
          "active-bg-color": activeBgColor,
          "active-border-color": activeBgColor
        });
        if (_disabled.value) {
          const disabledButtonColor = props.dark ? darken(color, 50) : color.tint(50).toString();
          styles[ns.cssVarBlockName("disabled-bg-color")] = disabledButtonColor;
          styles[ns.cssVarBlockName("disabled-text-color")] = props.dark ? "rgba(255, 255, 255, 0.5)" : `var(${ns.cssVarName("color-white")})`;
          styles[ns.cssVarBlockName("disabled-border-color")] = disabledButtonColor;
        }
      }
    }
    return styles;
  });
}


//# sourceMappingURL=button-custom.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/button.mjs
const buttonGroupContextKey = Symbol("buttonGroupContextKey");


//# sourceMappingURL=button.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/src/button2.mjs














const button2_hoisted_1 = ["aria-disabled", "disabled", "autofocus", "type"];
const button2_default_ = {
  name: "ElButton"
};
const button2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...button2_default_,
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const slots = (0,external_Vue_.useSlots)();
    useDeprecated({
      from: "type.text",
      replacement: "type.link",
      version: "3.0.0",
      scope: "props",
      ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
    }, (0,external_Vue_.computed)(() => props.type === "text"));
    const buttonGroupContext = (0,external_Vue_.inject)(buttonGroupContextKey, void 0);
    const globalConfig = useGlobalConfig("button");
    const ns = useNamespace("button");
    const { form } = useFormItem();
    const _size = useSize((0,external_Vue_.computed)(() => buttonGroupContext == null ? void 0 : buttonGroupContext.size));
    const _disabled = useDisabled();
    const _ref = (0,external_Vue_.ref)();
    const _type = (0,external_Vue_.computed)(() => props.type || (buttonGroupContext == null ? void 0 : buttonGroupContext.type) || "");
    const autoInsertSpace = (0,external_Vue_.computed)(() => {
      var _a, _b, _c;
      return (_c = (_b = props.autoInsertSpace) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.autoInsertSpace) != null ? _c : false;
    });
    const shouldAddSpace = (0,external_Vue_.computed)(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === external_Vue_.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
        }
      }
      return false;
    });
    const buttonStyle = useButtonCustomStyle(props);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        form == null ? void 0 : form.resetFields();
      }
      emit("click", evt);
    };
    expose({
      ref: _ref,
      size: _size,
      type: _type,
      disabled: _disabled,
      shouldAddSpace
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
        ref_key: "_ref",
        ref: _ref,
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b(),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(_type)),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(_size)),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(_disabled)),
          (0,external_Vue_.unref)(ns).is("loading", _ctx.loading),
          (0,external_Vue_.unref)(ns).is("plain", _ctx.plain),
          (0,external_Vue_.unref)(ns).is("round", _ctx.round),
          (0,external_Vue_.unref)(ns).is("circle", _ctx.circle),
          (0,external_Vue_.unref)(ns).is("text", _ctx.text),
          (0,external_Vue_.unref)(ns).is("link", _ctx.link),
          (0,external_Vue_.unref)(ns).is("has-bg", _ctx.bg)
        ]),
        "aria-disabled": (0,external_Vue_.unref)(_disabled) || _ctx.loading,
        disabled: (0,external_Vue_.unref)(_disabled) || _ctx.loading,
        autofocus: _ctx.autofocus,
        type: _ctx.nativeType,
        style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(buttonStyle)),
        onClick: handleClick
      }, [
        _ctx.loading ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
          _ctx.$slots.loading ? (0,external_Vue_.renderSlot)(_ctx.$slots, "loading", { key: 0 }) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
            key: 1,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).is("loading"))
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : _ctx.icon || _ctx.$slots.icon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), { key: 1 }, {
          default: (0,external_Vue_.withCtx)(() => [
            _ctx.icon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.icon), { key: 0 })) : (0,external_Vue_.renderSlot)(_ctx.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : (0,external_Vue_.createCommentVNode)("v-if", true),
        _ctx.$slots.default ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 2,
          class: (0,external_Vue_.normalizeClass)({ [(0,external_Vue_.unref)(ns).em("text", "expand")]: (0,external_Vue_.unref)(shouldAddSpace) })
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 14, button2_hoisted_1);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(button2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button.vue"]]);


//# sourceMappingURL=button2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-group.mjs


const buttonGroupProps = {
  size: buttonProps.size,
  type: buttonProps.type
};


//# sourceMappingURL=button-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/src/button-group2.mjs








const button_group2_default_ = {
  name: "ElButtonGroup"
};
const button_group2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...button_group2_default_,
  props: buttonGroupProps,
  setup(__props) {
    const props = __props;
    (0,external_Vue_.provide)(buttonGroupContextKey, (0,external_Vue_.reactive)({
      size: (0,external_Vue_.toRef)(props, "size"),
      type: (0,external_Vue_.toRef)(props, "type")
    }));
    const ns = useNamespace("button");
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)(`${(0,external_Vue_.unref)(ns).b("group")}`)
      }, [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 2);
    };
  }
});
var ButtonGroup = /* @__PURE__ */ _export_sfc(button_group2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/button/src/button-group.vue"]]);


//# sourceMappingURL=button-group2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/index.mjs






const ElButton = withInstall(Button, {
  ButtonGroup: ButtonGroup
});
const ElButtonGroup = withNoopInstall(ButtonGroup);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/shared.mjs






const selectionModes = ["date", "dates", "year", "month", "week", "range"];
const datePickerSharedProps = buildProps({
  disabledDate: {
    type: definePropType(Function)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  minDate: {
    type: definePropType(Object)
  },
  maxDate: {
    type: definePropType(Object)
  },
  parsedValue: {
    type: definePropType([Object, Array])
  },
  rangeState: {
    type: definePropType(Object),
    default: () => ({
      endDate: null,
      selecting: false
    })
  }
});
const panelSharedProps = buildProps({
  type: {
    type: definePropType(String),
    required: true,
    values: date_datePickTypes
  }
});
const panelRangeSharedProps = buildProps({
  unlinkPanels: Boolean,
  parsedValue: {
    type: definePropType(Array)
  }
});
const selectionModeWithDefault = (mode) => {
  return {
    type: String,
    values: selectionModes,
    default: mode
  };
};
const rangePickerSharedEmits = {
  pick: (range) => (0,shared_esm_bundler/* isArray */.kJ)(range)
};


//# sourceMappingURL=shared.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/panel-date-pick.mjs




const panelDatePickProps = buildProps({
  ...panelSharedProps,
  parsedValue: {
    type: definePropType([Object, Array])
  },
  visible: {
    type: Boolean
  },
  format: {
    type: String,
    default: ""
  }
});


//# sourceMappingURL=panel-date-pick.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/basic-date-table.mjs




const basicDateTableProps = buildProps({
  ...datePickerSharedProps,
  cellClassName: {
    type: definePropType(Function)
  },
  showWeekNumber: Boolean,
  selectionMode: selectionModeWithDefault("date")
});


//# sourceMappingURL=basic-date-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/utils.mjs




const isValidRange = (range) => {
  if (!(0,shared_esm_bundler/* isArray */.kJ)(range))
    return false;
  const [left, right] = range;
  return dayjs_min.isDayjs(left) && dayjs_min.isDayjs(right) && left.isSameOrBefore(right);
};
const getDefaultValue = (defaultValue, { lang, unit, unlinkPanels }) => {
  let start;
  if ((0,shared_esm_bundler/* isArray */.kJ)(defaultValue)) {
    let [left, right] = defaultValue.map((d) => dayjs_min(d).locale(lang));
    if (!unlinkPanels) {
      right = left.add(1, unit);
    }
    return [left, right];
  } else if (defaultValue) {
    start = dayjs_min(defaultValue);
  } else {
    start = dayjs_min();
  }
  start = start.locale(lang);
  return [start, start.add(1, unit)];
};
const buildPickerTable = (dimension, rows, {
  columnIndexOffset,
  startDate,
  nextEndDate,
  now,
  unit,
  relativeDateGetter,
  setCellMetadata,
  setRowMetadata
}) => {
  for (let rowIndex = 0; rowIndex < dimension.row; rowIndex++) {
    const row = rows[rowIndex];
    for (let columnIndex = 0; columnIndex < dimension.column; columnIndex++) {
      let cell = row[columnIndex + columnIndexOffset];
      if (!cell) {
        cell = {
          row: rowIndex,
          column: columnIndex,
          type: "normal",
          inRange: false,
          start: false,
          end: false
        };
      }
      const index = rowIndex * dimension.column + columnIndex;
      const nextStartDate = relativeDateGetter(index);
      cell.dayjs = nextStartDate;
      cell.date = nextStartDate.toDate();
      cell.timestamp = nextStartDate.valueOf();
      cell.type = "normal";
      cell.inRange = !!(startDate && nextStartDate.isSameOrAfter(startDate, unit) && nextEndDate && nextStartDate.isSameOrBefore(nextEndDate, unit)) || !!(startDate && nextStartDate.isSameOrBefore(startDate, unit) && nextEndDate && nextStartDate.isSameOrAfter(nextEndDate, unit));
      if (startDate == null ? void 0 : startDate.isSameOrAfter(nextEndDate)) {
        cell.start = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit);
        cell.end = startDate && nextStartDate.isSame(startDate, unit);
      } else {
        cell.start = !!startDate && nextStartDate.isSame(startDate, unit);
        cell.end = !!nextEndDate && nextStartDate.isSame(nextEndDate, unit);
      }
      const isToday = nextStartDate.isSame(now, unit);
      if (isToday) {
        cell.type = "today";
      }
      setCellMetadata == null ? void 0 : setCellMetadata(cell, { rowIndex, columnIndex });
      row[columnIndex + columnIndexOffset] = cell;
    }
    setRowMetadata == null ? void 0 : setRowMetadata(row);
  }
};


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/basic-cell.mjs



const basicCellProps = buildProps({
  cell: {
    type: definePropType(Object)
  }
});


//# sourceMappingURL=basic-cell.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/tokens/date-picker.mjs
const ROOT_PICKER_INJECTION_KEY = Symbol();


//# sourceMappingURL=date-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-cell-render.mjs







var ElDatePickerCell = (0,external_Vue_.defineComponent)({
  name: "ElDatePickerCell",
  props: basicCellProps,
  setup(props) {
    const ns = useNamespace("date-table-cell");
    const {
      slots
    } = (0,external_Vue_.inject)(ROOT_PICKER_INJECTION_KEY);
    return () => {
      const {
        cell
      } = props;
      if (slots.default) {
        const list = slots.default(cell).filter((item) => {
          return item.patchFlag !== -2 && item.type.toString() !== "Symbol(Comment)";
        });
        if (list.length) {
          return list;
        }
      }
      return (0,external_Vue_.createVNode)("div", {
        "class": ns.b()
      }, [(0,external_Vue_.createVNode)("span", {
        "class": ns.e("text")
      }, [cell == null ? void 0 : cell.text])]);
    };
  }
});


//# sourceMappingURL=basic-cell-render.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/utils/arrays.mjs


const unique = (arr) => [...new Set(arr)];
const arrays_castArray = (arr) => {
  if (!arr && arr !== 0)
    return [];
  return Array.isArray(arr) ? arr : [arr];
};


//# sourceMappingURL=arrays.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-date-table.mjs












const basic_date_table_hoisted_1 = ["aria-label"];
const basic_date_table_hoisted_2 = {
  key: 0,
  scope: "col"
};
const basic_date_table_hoisted_3 = ["aria-label"];
const basic_date_table_hoisted_4 = ["aria-current", "aria-selected", "tabindex"];
const basic_date_table_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "basic-date-table",
  props: basicDateTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const ns = useNamespace("date-table");
    const { t, lang } = useLocale();
    const tbodyRef = (0,external_Vue_.ref)();
    const currentCellRef = (0,external_Vue_.ref)();
    const lastRow = (0,external_Vue_.ref)();
    const lastColumn = (0,external_Vue_.ref)();
    const tableRows = (0,external_Vue_.ref)([[], [], [], [], [], []]);
    let focusWithClick = false;
    const firstDayOfWeek = props.date.$locale().weekStart || 7;
    const WEEKS_CONSTANT = props.date.locale("en").localeData().weekdaysShort().map((_) => _.toLowerCase());
    const offsetDay = (0,external_Vue_.computed)(() => {
      return firstDayOfWeek > 3 ? 7 - firstDayOfWeek : -firstDayOfWeek;
    });
    const startDate = (0,external_Vue_.computed)(() => {
      const startDayOfMonth = props.date.startOf("month");
      return startDayOfMonth.subtract(startDayOfMonth.day() || 7, "day");
    });
    const WEEKS = (0,external_Vue_.computed)(() => {
      return WEEKS_CONSTANT.concat(WEEKS_CONSTANT).slice(firstDayOfWeek, firstDayOfWeek + 7);
    });
    const hasCurrent = (0,external_Vue_.computed)(() => {
      return rows.value.flat().some((row) => {
        return row.isCurrent;
      });
    });
    const days = (0,external_Vue_.computed)(() => {
      const startOfMonth = props.date.startOf("month");
      const startOfMonthDay = startOfMonth.day() || 7;
      const dateCountOfMonth = startOfMonth.daysInMonth();
      const dateCountOfLastMonth = startOfMonth.subtract(1, "month").daysInMonth();
      return {
        startOfMonthDay,
        dateCountOfMonth,
        dateCountOfLastMonth
      };
    });
    const selectedDate = (0,external_Vue_.computed)(() => {
      return props.selectionMode === "dates" ? arrays_castArray(props.parsedValue) : [];
    });
    const setDateText = (cell, {
      count,
      rowIndex,
      columnIndex
    }) => {
      const { startOfMonthDay, dateCountOfMonth, dateCountOfLastMonth } = (0,external_Vue_.unref)(days);
      const offset = (0,external_Vue_.unref)(offsetDay);
      if (rowIndex >= 0 && rowIndex <= 1) {
        const numberOfDaysFromPreviousMonth = startOfMonthDay + offset < 0 ? 7 + startOfMonthDay + offset : startOfMonthDay + offset;
        if (columnIndex + rowIndex * 7 >= numberOfDaysFromPreviousMonth) {
          cell.text = count;
          return true;
        } else {
          cell.text = dateCountOfLastMonth - (numberOfDaysFromPreviousMonth - columnIndex % 7) + 1 + rowIndex * 7;
          cell.type = "prev-month";
        }
      } else {
        if (count <= dateCountOfMonth) {
          cell.text = count;
        } else {
          cell.text = count - dateCountOfMonth;
          cell.type = "next-month";
        }
        return true;
      }
      return false;
    };
    const setCellMetadata = (cell, {
      columnIndex,
      rowIndex
    }, count) => {
      const { disabledDate, cellClassName } = props;
      const _selectedDate = (0,external_Vue_.unref)(selectedDate);
      const shouldIncrement = setDateText(cell, { count, rowIndex, columnIndex });
      const cellDate = cell.dayjs.toDate();
      cell.selected = _selectedDate.find((d) => d.valueOf() === cell.dayjs.valueOf());
      cell.isSelected = !!cell.selected;
      cell.isCurrent = isCurrent(cell);
      cell.disabled = disabledDate == null ? void 0 : disabledDate(cellDate);
      cell.customClass = cellClassName == null ? void 0 : cellClassName(cellDate);
      return shouldIncrement;
    };
    const setRowMetadata = (row) => {
      if (props.selectionMode === "week") {
        const [start, end] = props.showWeekNumber ? [1, 7] : [0, 6];
        const isActive = isWeekActive(row[start + 1]);
        row[start].inRange = isActive;
        row[start].start = isActive;
        row[end].inRange = isActive;
        row[end].end = isActive;
      }
    };
    const rows = (0,external_Vue_.computed)(() => {
      const { minDate, maxDate, rangeState, showWeekNumber } = props;
      const offset = offsetDay.value;
      const rows_ = tableRows.value;
      const dateUnit = "day";
      let count = 1;
      if (showWeekNumber) {
        for (let rowIndex = 0; rowIndex < 6; rowIndex++) {
          if (!rows_[rowIndex][0]) {
            rows_[rowIndex][0] = {
              type: "week",
              text: startDate.value.add(rowIndex * 7 + 1, dateUnit).week()
            };
          }
        }
      }
      buildPickerTable({ row: 6, column: 7 }, rows_, {
        startDate: minDate,
        columnIndexOffset: showWeekNumber ? 1 : 0,
        nextEndDate: rangeState.endDate || maxDate || rangeState.selecting && minDate || null,
        now: dayjs_min().locale((0,external_Vue_.unref)(lang)).startOf(dateUnit),
        unit: dateUnit,
        relativeDateGetter: (idx) => startDate.value.add(idx - offset, dateUnit),
        setCellMetadata: (...args) => {
          if (setCellMetadata(...args, count)) {
            count += 1;
          }
        },
        setRowMetadata
      });
      return rows_;
    });
    (0,external_Vue_.watch)(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await (0,external_Vue_.nextTick)();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    const focus = async () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const isNormalDay = (type = "") => {
      return ["normal", "today"].includes(type);
    };
    const isCurrent = (cell) => {
      return props.selectionMode === "date" && isNormalDay(cell.type) && cellMatchesDate(cell, props.parsedValue);
    };
    const cellMatchesDate = (cell, date) => {
      if (!date)
        return false;
      return dayjs_min(date).locale(lang.value).isSame(props.date.date(Number(cell.text)), "day");
    };
    const getCellClasses = (cell) => {
      const classes = [];
      if (isNormalDay(cell.type) && !cell.disabled) {
        classes.push("available");
        if (cell.type === "today") {
          classes.push("today");
        }
      } else {
        classes.push(cell.type);
      }
      if (isCurrent(cell)) {
        classes.push("current");
      }
      if (cell.inRange && (isNormalDay(cell.type) || props.selectionMode === "week")) {
        classes.push("in-range");
        if (cell.start) {
          classes.push("start-date");
        }
        if (cell.end) {
          classes.push("end-date");
        }
      }
      if (cell.disabled) {
        classes.push("disabled");
      }
      if (cell.selected) {
        classes.push("selected");
      }
      if (cell.customClass) {
        classes.push(cell.customClass);
      }
      return classes.join(" ");
    };
    const getDateOfCell = (row, column) => {
      const offsetFromStart = row * 7 + (column - (props.showWeekNumber ? 1 : 0)) - offsetDay.value;
      return startDate.value.add(offsetFromStart, "day");
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "SPAN") {
        target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: getDateOfCell(row, column)
        });
      }
    };
    const isSelectedCell = (cell) => {
      return !hasCurrent.value && (cell == null ? void 0 : cell.text) === 1 && cell.type === "normal" || cell.isCurrent;
    };
    const handleFocus = (event) => {
      if (focusWithClick || hasCurrent.value || props.selectionMode !== "date")
        return;
      handlePickDate(event, true);
    };
    const handleMouseDown = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = true;
    };
    const handleMouseUp = (event) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      focusWithClick = false;
    };
    const handlePickDate = (event, isKeyboardMovement = false) => {
      const target = event.target.closest("td");
      if (!target)
        return;
      const row = target.parentNode.rowIndex - 1;
      const column = target.cellIndex;
      const cell = rows.value[row][column];
      if (cell.disabled || cell.type === "week")
        return;
      const newDate = getDateOfCell(row, column);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting || !props.minDate) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else if (props.selectionMode === "date") {
        emit("pick", newDate, isKeyboardMovement);
      } else if (props.selectionMode === "week") {
        const weekNumber = newDate.week();
        const value = `${newDate.year()}w${weekNumber}`;
        emit("pick", {
          year: newDate.year(),
          week: weekNumber,
          value,
          date: newDate.startOf("week")
        });
      } else if (props.selectionMode === "dates") {
        const newValue = cell.selected ? arrays_castArray(props.parsedValue).filter((d) => (d == null ? void 0 : d.valueOf()) !== newDate.valueOf()) : arrays_castArray(props.parsedValue).concat([newDate]);
        emit("pick", newValue);
      }
    };
    const isWeekActive = (cell) => {
      if (props.selectionMode !== "week")
        return false;
      let newDate = props.date.startOf("day");
      if (cell.type === "prev-month") {
        newDate = newDate.subtract(1, "month");
      }
      if (cell.type === "next-month") {
        newDate = newDate.add(1, "month");
      }
      newDate = newDate.date(Number.parseInt(cell.text, 10));
      if (props.parsedValue && !Array.isArray(props.parsedValue)) {
        const dayOffset = (props.parsedValue.day() - firstDayOfWeek + 7) % 7 - 1;
        const weekDate = props.parsedValue.subtract(dayOffset, "day");
        return weekDate.isSame(newDate, "day");
      }
      return false;
    };
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("table", {
        role: "grid",
        "aria-label": (0,external_Vue_.unref)(t)("el.datepicker.dateTablePrompt"),
        cellspacing: "0",
        cellpadding: "0",
        class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).b(), { "is-week-mode": _ctx.selectionMode === "week" }]),
        onClick: handlePickDate,
        onMousemove: handleMouseMove,
        onMousedown: handleMouseDown,
        onMouseup: handleMouseUp
      }, [
        (0,external_Vue_.createElementVNode)("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          (0,external_Vue_.createElementVNode)("tr", null, [
            _ctx.showWeekNumber ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("th", basic_date_table_hoisted_2, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.week")), 1)) : (0,external_Vue_.createCommentVNode)("v-if", true),
            ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(WEEKS), (week, key) => {
              return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("th", {
                key,
                scope: "col",
                "aria-label": (0,external_Vue_.unref)(t)("el.datepicker.weeksFull." + week)
              }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.weeks." + week)), 9, basic_date_table_hoisted_3);
            }), 128))
          ]),
          ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(rows), (row, rowKey) => {
            return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("tr", {
              key: rowKey,
              class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).e("row"), { current: isWeekActive(row[1]) }])
            }, [
              ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(row, (cell, columnKey) => {
                return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("td", {
                  key: `${rowKey}.${columnKey}`,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: (0,external_Vue_.normalizeClass)(getCellClasses(cell)),
                  "aria-current": cell.isCurrent ? "date" : void 0,
                  "aria-selected": cell.isCurrent,
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onFocus: handleFocus
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElDatePickerCell), { cell }, null, 8, ["cell"])
                ], 42, basic_date_table_hoisted_4);
              }), 128))
            ], 2);
          }), 128))
        ], 512)
      ], 42, basic_date_table_hoisted_1);
    };
  }
});
var DateTable = /* @__PURE__ */ _export_sfc(basic_date_table_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-date-table.vue"]]);


//# sourceMappingURL=basic-date-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/basic-month-table.mjs




const basicMonthTableProps = buildProps({
  ...datePickerSharedProps,
  selectionMode: selectionModeWithDefault("month")
});


//# sourceMappingURL=basic-month-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/utils.mjs





const buildTimeList = (value, bound) => {
  return [
    value > 0 ? value - 1 : void 0,
    value,
    value < bound ? value + 1 : void 0
  ];
};
const rangeArr = (n) => Array.from(Array.from({ length: n }).keys());
const extractDateFormat = (format) => {
  return format.replace(/\W?m{1,2}|\W?ZZ/g, "").replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "").trim();
};
const extractTimeFormat = (format) => {
  return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?Y{2,4}/g, "").trim();
};
const dateEquals = function(a, b) {
  const aIsDate = (0,shared_esm_bundler/* isDate */.J_)(a);
  const bIsDate = (0,shared_esm_bundler/* isDate */.J_)(b);
  if (aIsDate && bIsDate) {
    return a.getTime() === b.getTime();
  }
  if (!aIsDate && !bIsDate) {
    return a === b;
  }
  return false;
};
const valueEquals = function(a, b) {
  const aIsArray = (0,shared_esm_bundler/* isArray */.kJ)(a);
  const bIsArray = (0,shared_esm_bundler/* isArray */.kJ)(b);
  if (aIsArray && bIsArray) {
    if (a.length !== b.length) {
      return false;
    }
    return a.every((item, index) => dateEquals(item, b[index]));
  }
  if (!aIsArray && !bIsArray) {
    return dateEquals(a, b);
  }
  return false;
};
const parseDate = function(date, format, lang) {
  const day = isEmpty(format) || format === "x" ? dayjs_min(date).locale(lang) : dayjs_min(date, format).locale(lang);
  return day.isValid() ? day : void 0;
};
const formatter = function(date, format, lang) {
  if (isEmpty(format))
    return date;
  if (format === "x")
    return +date;
  return dayjs_min(date).locale(lang).format(format);
};
const makeList = (total, method) => {
  var _a;
  const arr = [];
  const disabledArr = method == null ? void 0 : method();
  for (let i = 0; i < total; i++) {
    arr.push((_a = disabledArr == null ? void 0 : disabledArr.includes(i)) != null ? _a : false);
  }
  return arr;
};


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-month-table.mjs













const basic_month_table_hoisted_1 = ["aria-label"];
const basic_month_table_hoisted_2 = ["aria-selected", "aria-label", "tabindex", "onKeydown"];
const basic_month_table_hoisted_3 = { class: "cell" };
const basic_month_table_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "basic-month-table",
  props: basicMonthTableProps,
  emits: ["changerange", "pick", "select"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInMonth = (year, month, lang2) => {
      const firstDay = dayjs_min().locale(lang2).startOf("month").month(month).year(year);
      const numOfDays = firstDay.daysInMonth();
      return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
    };
    const ns = useNamespace("month-table");
    const { t, lang } = useLocale();
    const tbodyRef = (0,external_Vue_.ref)();
    const currentCellRef = (0,external_Vue_.ref)();
    const months = (0,external_Vue_.ref)(props.date.locale("en").localeData().monthsShort().map((_) => _.toLowerCase()));
    const tableRows = (0,external_Vue_.ref)([
      [],
      [],
      []
    ]);
    const lastRow = (0,external_Vue_.ref)();
    const lastColumn = (0,external_Vue_.ref)();
    const rows = (0,external_Vue_.computed)(() => {
      var _a, _b;
      const rows2 = tableRows.value;
      const now = dayjs_min().locale(lang.value).startOf("month");
      for (let i = 0; i < 3; i++) {
        const row = rows2[i];
        for (let j = 0; j < 4; j++) {
          const cell = row[j] || (row[j] = {
            row: i,
            column: j,
            type: "normal",
            inRange: false,
            start: false,
            end: false,
            text: -1,
            disabled: false
          });
          cell.type = "normal";
          const index = i * 4 + j;
          const calTime = props.date.startOf("year").month(index);
          const calEndDate = props.rangeState.endDate || props.maxDate || props.rangeState.selecting && props.minDate || null;
          cell.inRange = !!(props.minDate && calTime.isSameOrAfter(props.minDate, "month") && calEndDate && calTime.isSameOrBefore(calEndDate, "month")) || !!(props.minDate && calTime.isSameOrBefore(props.minDate, "month") && calEndDate && calTime.isSameOrAfter(calEndDate, "month"));
          if ((_a = props.minDate) == null ? void 0 : _a.isSameOrAfter(calEndDate)) {
            cell.start = !!(calEndDate && calTime.isSame(calEndDate, "month"));
            cell.end = props.minDate && calTime.isSame(props.minDate, "month");
          } else {
            cell.start = !!(props.minDate && calTime.isSame(props.minDate, "month"));
            cell.end = !!(calEndDate && calTime.isSame(calEndDate, "month"));
          }
          const isToday = now.isSame(calTime);
          if (isToday) {
            cell.type = "today";
          }
          cell.text = index;
          cell.disabled = ((_b = props.disabledDate) == null ? void 0 : _b.call(props, calTime.toDate())) || false;
        }
      }
      return rows2;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellStyle = (cell) => {
      const style = {};
      const year = props.date.year();
      const today = new Date();
      const month = cell.text;
      style.disabled = props.disabledDate ? datesInMonth(year, month, lang.value).every(props.disabledDate) : false;
      style.current = arrays_castArray(props.parsedValue).findIndex((date) => dayjs_min.isDayjs(date) && date.year() === year && date.month() === month) >= 0;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      if (cell.inRange) {
        style["in-range"] = true;
        if (cell.start) {
          style["start-date"] = true;
        }
        if (cell.end) {
          style["end-date"] = true;
        }
      }
      return style;
    };
    const isSelectedCell = (cell) => {
      const year = props.date.year();
      const month = cell.text;
      return arrays_castArray(props.date).findIndex((date) => date.year() === year && date.month() === month) >= 0;
    };
    const handleMouseMove = (event) => {
      var _a;
      if (!props.rangeState.selecting)
        return;
      let target = event.target;
      if (target.tagName === "A") {
        target = (_a = target.parentNode) == null ? void 0 : _a.parentNode;
      }
      if (target.tagName === "DIV") {
        target = target.parentNode;
      }
      if (target.tagName !== "TD")
        return;
      const row = target.parentNode.rowIndex;
      const column = target.cellIndex;
      if (rows.value[row][column].disabled)
        return;
      if (row !== lastRow.value || column !== lastColumn.value) {
        lastRow.value = row;
        lastColumn.value = column;
        emit("changerange", {
          selecting: true,
          endDate: props.date.startOf("year").month(row * 4 + column)
        });
      }
    };
    const handleMonthTableClick = (event) => {
      var _a;
      const target = (_a = event.target) == null ? void 0 : _a.closest("td");
      if ((target == null ? void 0 : target.tagName) !== "TD")
        return;
      if (hasClass(target, "disabled"))
        return;
      const column = target.cellIndex;
      const row = target.parentNode.rowIndex;
      const month = row * 4 + column;
      const newDate = props.date.startOf("year").month(month);
      if (props.selectionMode === "range") {
        if (!props.rangeState.selecting) {
          emit("pick", { minDate: newDate, maxDate: null });
          emit("select", true);
        } else {
          if (props.minDate && newDate >= props.minDate) {
            emit("pick", { minDate: props.minDate, maxDate: newDate });
          } else {
            emit("pick", { minDate: newDate, maxDate: props.minDate });
          }
          emit("select", false);
        }
      } else {
        emit("pick", month);
      }
    };
    (0,external_Vue_.watch)(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await (0,external_Vue_.nextTick)();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("table", {
        role: "grid",
        "aria-label": (0,external_Vue_.unref)(t)("el.datepicker.monthTablePrompt"),
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b()),
        onClick: handleMonthTableClick,
        onMousemove: handleMouseMove
      }, [
        (0,external_Vue_.createElementVNode)("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(rows), (row, key) => {
            return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("tr", { key }, [
              ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(row, (cell, key_) => {
                return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("td", {
                  key: key_,
                  ref_for: true,
                  ref: (el) => isSelectedCell(cell) && (currentCellRef.value = el),
                  class: (0,external_Vue_.normalizeClass)(getCellStyle(cell)),
                  "aria-selected": `${isSelectedCell(cell)}`,
                  "aria-label": (0,external_Vue_.unref)(t)(`el.datepicker.month${+cell.text + 1}`),
                  tabindex: isSelectedCell(cell) ? 0 : -1,
                  onKeydown: [
                    (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(handleMonthTableClick, ["prevent", "stop"]), ["space"]),
                    (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(handleMonthTableClick, ["prevent", "stop"]), ["enter"])
                  ]
                }, [
                  (0,external_Vue_.createElementVNode)("div", null, [
                    (0,external_Vue_.createElementVNode)("span", basic_month_table_hoisted_3, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.months." + months.value[cell.text])), 1)
                  ])
                ], 42, basic_month_table_hoisted_2);
              }), 128))
            ]);
          }), 128))
        ], 512)
      ], 42, basic_month_table_hoisted_1);
    };
  }
});
var MonthTable = /* @__PURE__ */ _export_sfc(basic_month_table_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-month-table.vue"]]);


//# sourceMappingURL=basic-month-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/basic-year-table.mjs




const { date: basic_year_table_date, disabledDate, parsedValue } = datePickerSharedProps;
const basicYearTableProps = buildProps({
  date: basic_year_table_date,
  disabledDate,
  parsedValue
});


//# sourceMappingURL=basic-year-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/basic-year-table.mjs













const basic_year_table_hoisted_1 = ["aria-label"];
const basic_year_table_hoisted_2 = ["aria-selected", "tabindex", "onKeydown"];
const basic_year_table_hoisted_3 = { class: "cell" };
const basic_year_table_hoisted_4 = { key: 1 };
const basic_year_table_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "basic-year-table",
  props: basicYearTableProps,
  emits: ["pick"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const datesInYear = (year, lang2) => {
      const firstDay = dayjs_min(String(year)).locale(lang2).startOf("year");
      const lastDay = firstDay.endOf("year");
      const numOfDays = lastDay.dayOfYear();
      return rangeArr(numOfDays).map((n) => firstDay.add(n, "day").toDate());
    };
    const ns = useNamespace("year-table");
    const { t, lang } = useLocale();
    const tbodyRef = (0,external_Vue_.ref)();
    const currentCellRef = (0,external_Vue_.ref)();
    const startYear = (0,external_Vue_.computed)(() => {
      return Math.floor(props.date.year() / 10) * 10;
    });
    const focus = () => {
      var _a;
      (_a = currentCellRef.value) == null ? void 0 : _a.focus();
    };
    const getCellKls = (year) => {
      const kls = {};
      const today = dayjs_min().locale(lang.value);
      kls.disabled = props.disabledDate ? datesInYear(year, lang.value).every(props.disabledDate) : false;
      kls.current = arrays_castArray(props.parsedValue).findIndex((d) => d.year() === year) >= 0;
      kls.today = today.year() === year;
      return kls;
    };
    const isSelectedCell = (year) => {
      return year === startYear.value && props.date.year() < startYear.value && props.date.year() > startYear.value + 9 || arrays_castArray(props.date).findIndex((date) => date.year() === year) >= 0;
    };
    const handleYearTableClick = (event) => {
      const clickTarget = event.target;
      const target = clickTarget.closest("td");
      if (target) {
        if (hasClass(target, "disabled"))
          return;
        const year = target.textContent || target.innerText;
        emit("pick", Number(year));
      }
    };
    (0,external_Vue_.watch)(() => props.date, async () => {
      var _a, _b;
      if ((_a = tbodyRef.value) == null ? void 0 : _a.contains(document.activeElement)) {
        await (0,external_Vue_.nextTick)();
        (_b = currentCellRef.value) == null ? void 0 : _b.focus();
      }
    });
    expose({
      focus
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("table", {
        role: "grid",
        "aria-label": (0,external_Vue_.unref)(t)("el.datepicker.yearTablePrompt"),
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b()),
        onClick: handleYearTableClick
      }, [
        (0,external_Vue_.createElementVNode)("tbody", {
          ref_key: "tbodyRef",
          ref: tbodyRef
        }, [
          ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(3, (_, i) => {
            return (0,external_Vue_.createElementVNode)("tr", { key: i }, [
              ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(4, (__, j) => {
                return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, {
                  key: i + "_" + j
                }, [
                  i * 4 + j < 10 ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("td", {
                    key: 0,
                    ref_for: true,
                    ref: (el) => isSelectedCell((0,external_Vue_.unref)(startYear) + i * 4 + j) && (currentCellRef.value = el),
                    class: (0,external_Vue_.normalizeClass)(["available", getCellKls((0,external_Vue_.unref)(startYear) + i * 4 + j)]),
                    "aria-selected": `${isSelectedCell((0,external_Vue_.unref)(startYear) + i * 4 + j)}`,
                    tabindex: isSelectedCell((0,external_Vue_.unref)(startYear) + i * 4 + j) ? 0 : -1,
                    onKeydown: [
                      (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(handleYearTableClick, ["prevent", "stop"]), ["space"]),
                      (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(handleYearTableClick, ["prevent", "stop"]), ["enter"])
                    ]
                  }, [
                    (0,external_Vue_.createElementVNode)("span", basic_year_table_hoisted_3, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(startYear) + i * 4 + j), 1)
                  ], 42, basic_year_table_hoisted_2)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("td", basic_year_table_hoisted_4))
                ], 64);
              }), 64))
            ]);
          }), 64))
        ], 512)
      ], 10, basic_year_table_hoisted_1);
    };
  }
});
var YearTable = /* @__PURE__ */ _export_sfc(basic_year_table_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/basic-year-table.vue"]]);


//# sourceMappingURL=basic-year-table.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/props/shared.mjs



const disabledTimeListsProps = buildProps({
  disabledHours: {
    type: definePropType(Function)
  },
  disabledMinutes: {
    type: definePropType(Function)
  },
  disabledSeconds: {
    type: definePropType(Function)
  }
});
const timePanelSharedProps = buildProps({
  visible: Boolean,
  actualVisible: {
    type: Boolean,
    default: void 0
  },
  format: {
    type: String,
    default: ""
  }
});


//# sourceMappingURL=shared.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/props/panel-time-picker.mjs




const panelTimePickerProps = buildProps({
  ...timePanelSharedProps,
  datetimeRole: String,
  parsedValue: {
    type: definePropType(Object)
  }
});


//# sourceMappingURL=panel-time-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/composables/use-time-panel.mjs
const useTimePanel = ({
  getAvailableHours,
  getAvailableMinutes,
  getAvailableSeconds
}) => {
  const getAvailableTime = (date, role, first, compareDate) => {
    const availableTimeGetters = {
      hour: getAvailableHours,
      minute: getAvailableMinutes,
      second: getAvailableSeconds
    };
    let result = date;
    ["hour", "minute", "second"].forEach((type) => {
      if (availableTimeGetters[type]) {
        let availableTimeSlots;
        const method = availableTimeGetters[type];
        switch (type) {
          case "minute": {
            availableTimeSlots = method(result.hour(), role, compareDate);
            break;
          }
          case "second": {
            availableTimeSlots = method(result.hour(), result.minute(), role, compareDate);
            break;
          }
          default: {
            availableTimeSlots = method(role, compareDate);
            break;
          }
        }
        if ((availableTimeSlots == null ? void 0 : availableTimeSlots.length) && !availableTimeSlots.includes(result[type]())) {
          const pos = first ? 0 : availableTimeSlots.length - 1;
          result = result[type](availableTimeSlots[pos]);
        }
      }
    });
    return result;
  };
  const timePickerOptions = {};
  const onSetOption = ([key, val]) => {
    timePickerOptions[key] = val;
  };
  return {
    timePickerOptions,
    getAvailableTime,
    onSetOption
  };
};


//# sourceMappingURL=use-time-panel.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/composables/use-time-picker.mjs



const makeAvailableArr = (disabledList) => {
  const trueOrNumber = (isDisabled, index) => isDisabled || index;
  const getNumber = (predicate) => predicate !== true;
  return disabledList.map(trueOrNumber).filter(getNumber);
};
const getTimeLists = (disabledHours, disabledMinutes, disabledSeconds) => {
  const getHoursList = (role, compare) => {
    return makeList(24, disabledHours && (() => disabledHours == null ? void 0 : disabledHours(role, compare)));
  };
  const getMinutesList = (hour, role, compare) => {
    return makeList(60, disabledMinutes && (() => disabledMinutes == null ? void 0 : disabledMinutes(hour, role, compare)));
  };
  const getSecondsList = (hour, minute, role, compare) => {
    return makeList(60, disabledSeconds && (() => disabledSeconds == null ? void 0 : disabledSeconds(hour, minute, role, compare)));
  };
  return {
    getHoursList,
    getMinutesList,
    getSecondsList
  };
};
const buildAvailableTimeSlotGetter = (disabledHours, disabledMinutes, disabledSeconds) => {
  const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(disabledHours, disabledMinutes, disabledSeconds);
  const getAvailableHours = (role, compare) => {
    return makeAvailableArr(getHoursList(role, compare));
  };
  const getAvailableMinutes = (hour, role, compare) => {
    return makeAvailableArr(getMinutesList(hour, role, compare));
  };
  const getAvailableSeconds = (hour, minute, role, compare) => {
    return makeAvailableArr(getSecondsList(hour, minute, role, compare));
  };
  return {
    getAvailableHours,
    getAvailableMinutes,
    getAvailableSeconds
  };
};
const useOldValue = (props) => {
  const oldValue = (0,external_Vue_.ref)(props.parsedValue);
  (0,external_Vue_.watch)(() => props.visible, (val) => {
    if (!val) {
      oldValue.value = props.parsedValue;
    }
  });
  return oldValue;
};


//# sourceMappingURL=use-time-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/constants.mjs
const timeUnits = ["hours", "minutes", "seconds"];
const DEFAULT_FORMATS_TIME = "HH:mm:ss";
const DEFAULT_FORMATS_DATE = "YYYY-MM-DD";
const DEFAULT_FORMATS_DATEPICKER = {
  date: DEFAULT_FORMATS_DATE,
  dates: DEFAULT_FORMATS_DATE,
  week: "gggg[w]ww",
  year: "YYYY",
  month: "YYYY-MM",
  datetime: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`,
  monthrange: "YYYY-MM",
  daterange: DEFAULT_FORMATS_DATE,
  datetimerange: `${DEFAULT_FORMATS_DATE} ${DEFAULT_FORMATS_TIME}`
};


//# sourceMappingURL=constants.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/props/basic-time-spinner.mjs




const basicTimeSpinnerProps = buildProps({
  role: {
    type: String,
    required: true
  },
  spinnerDate: {
    type: definePropType(Object),
    required: true
  },
  showSeconds: {
    type: Boolean,
    default: true
  },
  arrowControl: Boolean,
  amPmMode: {
    type: definePropType(String),
    default: ""
  },
  ...disabledTimeListsProps
});


//# sourceMappingURL=basic-time-spinner.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/directives/repeat-click/index.mjs
const RepeatClick = {
  beforeMount(el, binding) {
    let interval = null;
    let isHandlerCalled = false;
    const handler = () => binding.value && binding.value();
    const clear = () => {
      clearInterval(interval);
      interval = null;
      if (!isHandlerCalled) {
        handler();
      }
      isHandlerCalled = false;
    };
    el.addEventListener("mousedown", (e) => {
      if (e.button !== 0)
        return;
      document.addEventListener("mouseup", clear, { once: true });
      clearInterval(interval);
      interval = setInterval(() => {
        isHandlerCalled = true;
        handler();
      }, 100);
    });
  }
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/time-picker-com/basic-time-spinner.mjs















const basic_time_spinner_hoisted_1 = ["onClick"];
const basic_time_spinner_hoisted_2 = ["onMouseenter"];
const basic_time_spinner_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "basic-time-spinner",
  props: basicTimeSpinnerProps,
  emits: ["change", "select-range", "set-option"],
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("time");
    const { getHoursList, getMinutesList, getSecondsList } = getTimeLists(props.disabledHours, props.disabledMinutes, props.disabledSeconds);
    let isScrolling = false;
    const currentScrollbar = (0,external_Vue_.ref)();
    const listHoursRef = (0,external_Vue_.ref)();
    const listMinutesRef = (0,external_Vue_.ref)();
    const listSecondsRef = (0,external_Vue_.ref)();
    const listRefsMap = {
      hours: listHoursRef,
      minutes: listMinutesRef,
      seconds: listSecondsRef
    };
    const spinnerItems = (0,external_Vue_.computed)(() => {
      return props.showSeconds ? timeUnits : timeUnits.slice(0, 2);
    });
    const timePartials = (0,external_Vue_.computed)(() => {
      const { spinnerDate } = props;
      const hours = spinnerDate.hour();
      const minutes = spinnerDate.minute();
      const seconds = spinnerDate.second();
      return { hours, minutes, seconds };
    });
    const timeList = (0,external_Vue_.computed)(() => {
      const { hours, minutes } = (0,external_Vue_.unref)(timePartials);
      return {
        hours: getHoursList(props.role),
        minutes: getMinutesList(hours, props.role),
        seconds: getSecondsList(hours, minutes, props.role)
      };
    });
    const arrowControlTimeList = (0,external_Vue_.computed)(() => {
      const { hours, minutes, seconds } = (0,external_Vue_.unref)(timePartials);
      return {
        hours: buildTimeList(hours, 23),
        minutes: buildTimeList(minutes, 59),
        seconds: buildTimeList(seconds, 59)
      };
    });
    const debouncedResetScroll = (0,debounce/* default */.Z)((type) => {
      isScrolling = false;
      adjustCurrentSpinner(type);
    }, 200);
    const getAmPmFlag = (hour) => {
      const shouldShowAmPm = !!props.amPmMode;
      if (!shouldShowAmPm)
        return "";
      const isCapital = props.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital)
        content = content.toUpperCase();
      return content;
    };
    const emitSelectRange = (type) => {
      let range;
      switch (type) {
        case "hours":
          range = [0, 2];
          break;
        case "minutes":
          range = [3, 5];
          break;
        case "seconds":
          range = [6, 8];
          break;
      }
      const [left, right] = range;
      emit("select-range", left, right);
      currentScrollbar.value = type;
    };
    const adjustCurrentSpinner = (type) => {
      adjustSpinner(type, (0,external_Vue_.unref)(timePartials)[type]);
    };
    const adjustSpinners = () => {
      adjustCurrentSpinner("hours");
      adjustCurrentSpinner("minutes");
      adjustCurrentSpinner("seconds");
    };
    const getScrollbarElement = (el) => el.querySelector(`.${ns.namespace.value}-scrollbar__wrap`);
    const adjustSpinner = (type, value) => {
      if (props.arrowControl)
        return;
      const scrollbar = (0,external_Vue_.unref)(listRefsMap[type]);
      if (scrollbar && scrollbar.$el) {
        getScrollbarElement(scrollbar.$el).scrollTop = Math.max(0, value * typeItemHeight(type));
      }
    };
    const typeItemHeight = (type) => {
      const scrollbar = (0,external_Vue_.unref)(listRefsMap[type]);
      return (scrollbar == null ? void 0 : scrollbar.$el.querySelector("li").offsetHeight) || 0;
    };
    const onIncrement = () => {
      scrollDown(1);
    };
    const onDecrement = () => {
      scrollDown(-1);
    };
    const scrollDown = (step) => {
      if (!currentScrollbar.value) {
        emitSelectRange("hours");
      }
      const label = currentScrollbar.value;
      let now = (0,external_Vue_.unref)(timePartials)[label];
      const total = currentScrollbar.value === "hours" ? 24 : 60;
      now = (now + step + total) % total;
      modifyDateField(label, now);
      adjustSpinner(label, now);
      (0,external_Vue_.nextTick)(() => emitSelectRange(label));
    };
    const modifyDateField = (type, value) => {
      const list = (0,external_Vue_.unref)(timeList)[type];
      const isDisabled = list[value];
      if (isDisabled)
        return;
      const { hours, minutes, seconds } = (0,external_Vue_.unref)(timePartials);
      let changeTo;
      switch (type) {
        case "hours":
          changeTo = props.spinnerDate.hour(value).minute(minutes).second(seconds);
          break;
        case "minutes":
          changeTo = props.spinnerDate.hour(hours).minute(value).second(seconds);
          break;
        case "seconds":
          changeTo = props.spinnerDate.hour(hours).minute(minutes).second(value);
          break;
      }
      emit("change", changeTo);
    };
    const handleClick = (type, { value, disabled }) => {
      if (!disabled) {
        modifyDateField(type, value);
        emitSelectRange(type);
        adjustSpinner(type, value);
      }
    };
    const handleScroll = (type) => {
      isScrolling = true;
      debouncedResetScroll(type);
      const value = Math.min(Math.round((getScrollbarElement((0,external_Vue_.unref)(listRefsMap[type]).$el).scrollTop - (scrollBarHeight(type) * 0.5 - 10) / typeItemHeight(type) + 3) / typeItemHeight(type)), type === "hours" ? 23 : 59);
      modifyDateField(type, value);
    };
    const scrollBarHeight = (type) => {
      return (0,external_Vue_.unref)(listRefsMap[type]).$el.offsetHeight;
    };
    const bindScrollEvent = () => {
      const bindFunction = (type) => {
        const scrollbar = (0,external_Vue_.unref)(listRefsMap[type]);
        if (scrollbar && scrollbar.$el) {
          getScrollbarElement(scrollbar.$el).onscroll = () => {
            handleScroll(type);
          };
        }
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    };
    (0,external_Vue_.onMounted)(() => {
      (0,external_Vue_.nextTick)(() => {
        !props.arrowControl && bindScrollEvent();
        adjustSpinners();
        if (props.role === "start")
          emitSelectRange("hours");
      });
    });
    const setRef = (scrollbar, type) => {
      listRefsMap[type].value = scrollbar;
    };
    emit("set-option", [`${props.role}_scrollDown`, scrollDown]);
    emit("set-option", [`${props.role}_emitSelectRange`, emitSelectRange]);
    (0,external_Vue_.watch)(() => props.spinnerDate, () => {
      if (isScrolling)
        return;
      adjustSpinners();
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).b("spinner"), { "has-seconds": _ctx.showSeconds }])
      }, [
        !_ctx.arrowControl ? ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, (0,external_Vue_.renderList)((0,external_Vue_.unref)(spinnerItems), (item) => {
          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElScrollbar), {
            key: item,
            ref_for: true,
            ref: (scollbar) => setRef(scollbar, item),
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("spinner", "wrapper")),
            "wrap-style": "max-height: inherit;",
            "view-class": (0,external_Vue_.unref)(ns).be("spinner", "list"),
            noresize: "",
            tag: "ul",
            onMouseenter: ($event) => emitSelectRange(item),
            onMousemove: ($event) => adjustCurrentSpinner(item)
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(timeList)[item], (disabled, key) => {
                return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("li", {
                  key,
                  class: (0,external_Vue_.normalizeClass)([
                    (0,external_Vue_.unref)(ns).be("spinner", "item"),
                    (0,external_Vue_.unref)(ns).is("active", key === (0,external_Vue_.unref)(timePartials)[item]),
                    (0,external_Vue_.unref)(ns).is("disabled", disabled)
                  ]),
                  onClick: ($event) => handleClick(item, { value: key, disabled })
                }, [
                  item === "hours" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
                    (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(("0" + (_ctx.amPmMode ? key % 12 || 12 : key)).slice(-2)) + (0,external_Vue_.toDisplayString)(getAmPmFlag(key)), 1)
                  ], 64)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
                    (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(("0" + key).slice(-2)), 1)
                  ], 64))
                ], 10, basic_time_spinner_hoisted_1);
              }), 128))
            ]),
            _: 2
          }, 1032, ["class", "view-class", "onMouseenter", "onMousemove"]);
        }), 128)) : (0,external_Vue_.createCommentVNode)("v-if", true),
        _ctx.arrowControl ? ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, (0,external_Vue_.renderList)((0,external_Vue_.unref)(spinnerItems), (item) => {
          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: item,
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).be("spinner", "wrapper"), (0,external_Vue_.unref)(ns).is("arrow")]),
            onMouseenter: ($event) => emitSelectRange(item)
          }, [
            (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              class: (0,external_Vue_.normalizeClass)(["arrow-up", (0,external_Vue_.unref)(ns).be("spinner", "arrow")])
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowUp */.a2Z))
              ]),
              _: 1
            }, 8, ["class"])), [
              [(0,external_Vue_.unref)(RepeatClick), onDecrement]
            ]),
            (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              class: (0,external_Vue_.normalizeClass)(["arrow-down", (0,external_Vue_.unref)(ns).be("spinner", "arrow")])
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowDown */.K5e))
              ]),
              _: 1
            }, 8, ["class"])), [
              [(0,external_Vue_.unref)(RepeatClick), onIncrement]
            ]),
            (0,external_Vue_.createElementVNode)("ul", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("spinner", "list"))
            }, [
              ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(arrowControlTimeList)[item], (time, key) => {
                return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("li", {
                  key,
                  class: (0,external_Vue_.normalizeClass)([
                    (0,external_Vue_.unref)(ns).be("spinner", "item"),
                    (0,external_Vue_.unref)(ns).is("active", time === (0,external_Vue_.unref)(timePartials)[item]),
                    (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(timeList)[item][time])
                  ])
                }, [
                  typeof time === "number" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
                    item === "hours" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
                      (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(("0" + (_ctx.amPmMode ? time % 12 || 12 : time)).slice(-2)) + (0,external_Vue_.toDisplayString)(getAmPmFlag(time)), 1)
                    ], 64)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
                      (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(("0" + time).slice(-2)), 1)
                    ], 64))
                  ], 64)) : (0,external_Vue_.createCommentVNode)("v-if", true)
                ], 2);
              }), 128))
            ], 2)
          ], 42, basic_time_spinner_hoisted_2);
        }), 128)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 2);
    };
  }
});
var TimeSpinner = /* @__PURE__ */ _export_sfc(basic_time_spinner_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/basic-time-spinner.vue"]]);


//# sourceMappingURL=basic-time-spinner.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/time-picker-com/panel-time-pick.mjs















const panel_time_pick_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "panel-time-pick",
  props: panelTimePickerProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const pickerBase = (0,external_Vue_.inject)("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours, disabledMinutes, disabledSeconds);
    const ns = useNamespace("time");
    const { t, lang } = useLocale();
    const selectionRange = (0,external_Vue_.ref)([0, 2]);
    const oldValue = useOldValue(props);
    const transitionName = (0,external_Vue_.computed)(() => {
      return isUndefined(props.actualVisible) ? `${ns.namespace.value}-zoom-in-top` : "";
    });
    const showSeconds = (0,external_Vue_.computed)(() => {
      return props.format.includes("ss");
    });
    const amPmMode = (0,external_Vue_.computed)(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const isValidValue = (_date) => {
      const parsedDate = dayjs_min(_date).locale(lang.value);
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate.isSame(result);
    };
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const handleConfirm = (visible = false, first = false) => {
      if (first)
        return;
      emit("pick", props.parsedValue, visible);
    };
    const handleChange = (_date) => {
      if (!props.visible) {
        return;
      }
      const result = getRangeAvailableTime(_date).millisecond(0);
      emit("pick", result, true);
    };
    const setSelectionRange = (start, end) => {
      emit("select-range", start, end);
      selectionRange.value = [start, end];
    };
    const changeSelectionRange = (step) => {
      const list = [0, 3].concat(showSeconds.value ? [6] : []);
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      timePickerOptions["start_emitSelectRange"](mapping[next]);
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        timePickerOptions["start_scrollDown"](step);
        event.preventDefault();
        return;
      }
    };
    const { timePickerOptions, onSetOption, getAvailableTime } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const getRangeAvailableTime = (date) => {
      return getAvailableTime(date, props.datetimeRole || "", true);
    };
    const parseUserInput = (value) => {
      if (!value)
        return null;
      return dayjs_min(value, props.format).locale(lang.value);
    };
    const formatToString = (value) => {
      if (!value)
        return null;
      return value.format(props.format);
    };
    const getDefaultValue = () => {
      return dayjs_min(defaultValue).locale(lang.value);
    };
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue]);
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, { name: (0,external_Vue_.unref)(transitionName) }, {
        default: (0,external_Vue_.withCtx)(() => [
          _ctx.actualVisible || _ctx.visible ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).b("panel"))
          }, [
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).be("panel", "content"), { "has-seconds": (0,external_Vue_.unref)(showSeconds) }])
            }, [
              (0,external_Vue_.createVNode)(TimeSpinner, {
                ref: "spinner",
                role: _ctx.datetimeRole || "start",
                "arrow-control": (0,external_Vue_.unref)(arrowControl),
                "show-seconds": (0,external_Vue_.unref)(showSeconds),
                "am-pm-mode": (0,external_Vue_.unref)(amPmMode),
                "spinner-date": _ctx.parsedValue,
                "disabled-hours": (0,external_Vue_.unref)(disabledHours),
                "disabled-minutes": (0,external_Vue_.unref)(disabledMinutes),
                "disabled-seconds": (0,external_Vue_.unref)(disabledSeconds),
                onChange: handleChange,
                onSetOption: (0,external_Vue_.unref)(onSetOption),
                onSelectRange: setSelectionRange
              }, null, 8, ["role", "arrow-control", "show-seconds", "am-pm-mode", "spinner-date", "disabled-hours", "disabled-minutes", "disabled-seconds", "onSetOption"])
            ], 2),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).be("panel", "footer"))
            }, [
              (0,external_Vue_.createElementVNode)("button", {
                type: "button",
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).be("panel", "btn"), "cancel"]),
                onClick: handleCancel
              }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.cancel")), 3),
              (0,external_Vue_.createElementVNode)("button", {
                type: "button",
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).be("panel", "btn"), "confirm"]),
                onClick: _cache[0] || (_cache[0] = ($event) => handleConfirm())
              }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.confirm")), 3)
            ], 2)
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
var TimePickPanel = /* @__PURE__ */ _export_sfc(panel_time_pick_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-pick.vue"]]);


//# sourceMappingURL=panel-time-pick.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-date-pick.mjs


























const panel_date_pick_hoisted_1 = ["onClick"];
const panel_date_pick_hoisted_2 = ["aria-label"];
const panel_date_pick_hoisted_3 = ["aria-label"];
const panel_date_pick_hoisted_4 = ["aria-label"];
const panel_date_pick_hoisted_5 = ["aria-label"];
const panel_date_pick_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "panel-date-pick",
  props: panelDatePickProps,
  emits: ["pick", "set-picker-option", "panel-change"],
  setup(__props, { emit: contextEmit }) {
    const props = __props;
    const timeWithinRange = (_, __, ___) => true;
    const ppNs = useNamespace("picker-panel");
    const dpNs = useNamespace("date-picker");
    const attrs = (0,external_Vue_.useAttrs)();
    const slots = (0,external_Vue_.useSlots)();
    const { t, lang } = useLocale();
    const pickerBase = (0,external_Vue_.inject)("EP_PICKER_BASE");
    const popper = (0,external_Vue_.inject)(TOOLTIP_INJECTION_KEY);
    const { shortcuts, disabledDate, cellClassName, defaultTime, arrowControl } = pickerBase.props;
    const defaultValue = (0,external_Vue_.toRef)(pickerBase.props, "defaultValue");
    const currentViewRef = (0,external_Vue_.ref)();
    const innerDate = (0,external_Vue_.ref)(dayjs_min().locale(lang.value));
    const defaultTimeD = (0,external_Vue_.computed)(() => {
      return dayjs_min(defaultTime).locale(lang.value);
    });
    const month = (0,external_Vue_.computed)(() => {
      return innerDate.value.month();
    });
    const year = (0,external_Vue_.computed)(() => {
      return innerDate.value.year();
    });
    const selectableRange = (0,external_Vue_.ref)([]);
    const userInputDate = (0,external_Vue_.ref)(null);
    const userInputTime = (0,external_Vue_.ref)(null);
    const checkDateWithinRange = (date) => {
      return selectableRange.value.length > 0 ? timeWithinRange(date, selectableRange.value, props.format || "HH:mm:ss") : true;
    };
    const formatEmit = (emitDayjs) => {
      if (defaultTime && !visibleTime.value) {
        return defaultTimeD.value.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      if (showTime.value)
        return emitDayjs.millisecond(0);
      return emitDayjs.startOf("day");
    };
    const emit = (value, ...args) => {
      if (!value) {
        contextEmit("pick", value, ...args);
      } else if ((0,shared_esm_bundler/* isArray */.kJ)(value)) {
        const dates = value.map(formatEmit);
        contextEmit("pick", dates, ...args);
      } else {
        contextEmit("pick", formatEmit(value), ...args);
      }
      userInputDate.value = null;
      userInputTime.value = null;
    };
    const handleDatePick = (value, keepOpen) => {
      if (selectionMode.value === "date") {
        value = value;
        let newDate = props.parsedValue ? props.parsedValue.year(value.year()).month(value.month()).date(value.date()) : value;
        if (!checkDateWithinRange(newDate)) {
          newDate = selectableRange.value[0][0].year(value.year()).month(value.month()).date(value.date());
        }
        innerDate.value = newDate;
        emit(newDate, showTime.value || keepOpen);
      } else if (selectionMode.value === "week") {
        emit(value.date);
      } else if (selectionMode.value === "dates") {
        emit(value, true);
      }
    };
    const moveByMonth = (forward) => {
      const action = forward ? "add" : "subtract";
      innerDate.value = innerDate.value[action](1, "month");
      handlePanelChange("month");
    };
    const moveByYear = (forward) => {
      const currentDate = innerDate.value;
      const action = forward ? "add" : "subtract";
      innerDate.value = currentView.value === "year" ? currentDate[action](10, "year") : currentDate[action](1, "year");
      handlePanelChange("year");
    };
    const currentView = (0,external_Vue_.ref)("date");
    const yearLabel = (0,external_Vue_.computed)(() => {
      const yearTranslation = t("el.datepicker.year");
      if (currentView.value === "year") {
        const startYear = Math.floor(year.value / 10) * 10;
        if (yearTranslation) {
          return `${startYear} ${yearTranslation} - ${startYear + 9} ${yearTranslation}`;
        }
        return `${startYear} - ${startYear + 9}`;
      }
      return `${year.value} ${yearTranslation}`;
    });
    const handleShortcutClick = (shortcut) => {
      const shortcutValue = (0,shared_esm_bundler/* isFunction */.mf)(shortcut.value) ? shortcut.value() : shortcut.value;
      if (shortcutValue) {
        emit(dayjs_min(shortcutValue).locale(lang.value));
        return;
      }
      if (shortcut.onClick) {
        shortcut.onClick({
          attrs,
          slots,
          emit: contextEmit
        });
      }
    };
    const selectionMode = (0,external_Vue_.computed)(() => {
      const { type } = props;
      if (["week", "month", "year", "dates"].includes(type))
        return type;
      return "date";
    });
    const keyboardMode = (0,external_Vue_.computed)(() => {
      return selectionMode.value === "date" ? currentView.value : selectionMode.value;
    });
    const hasShortcuts = (0,external_Vue_.computed)(() => !!shortcuts.length);
    const handleMonthPick = async (month2) => {
      innerDate.value = innerDate.value.startOf("month").month(month2);
      if (selectionMode.value === "month") {
        emit(innerDate.value, false);
      } else {
        currentView.value = "date";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await (0,external_Vue_.nextTick)();
          handleFocusPicker();
        }
      }
      handlePanelChange("month");
    };
    const handleYearPick = async (year2) => {
      if (selectionMode.value === "year") {
        innerDate.value = innerDate.value.startOf("year").year(year2);
        emit(innerDate.value, false);
      } else {
        innerDate.value = innerDate.value.year(year2);
        currentView.value = "month";
        if (["month", "year", "date", "week"].includes(selectionMode.value)) {
          emit(innerDate.value, true);
          await (0,external_Vue_.nextTick)();
          handleFocusPicker();
        }
      }
      handlePanelChange("year");
    };
    const showPicker = async (view) => {
      currentView.value = view;
      await (0,external_Vue_.nextTick)();
      handleFocusPicker();
    };
    const showTime = (0,external_Vue_.computed)(() => props.type === "datetime" || props.type === "datetimerange");
    const footerVisible = (0,external_Vue_.computed)(() => {
      return showTime.value || selectionMode.value === "dates";
    });
    const onConfirm = () => {
      if (selectionMode.value === "dates") {
        emit(props.parsedValue);
      } else {
        let result = props.parsedValue;
        if (!result) {
          const defaultTimeD2 = dayjs_min(defaultTime).locale(lang.value);
          const defaultValueD = getDefaultValue();
          result = defaultTimeD2.year(defaultValueD.year()).month(defaultValueD.month()).date(defaultValueD.date());
        }
        innerDate.value = result;
        emit(result);
      }
    };
    const changeToNow = () => {
      const now = dayjs_min().locale(lang.value);
      const nowDate = now.toDate();
      if ((!disabledDate || !disabledDate(nowDate)) && checkDateWithinRange(nowDate)) {
        innerDate.value = dayjs_min().locale(lang.value);
        emit(innerDate.value);
      }
    };
    const timeFormat = (0,external_Vue_.computed)(() => {
      return extractTimeFormat(props.format);
    });
    const dateFormat = (0,external_Vue_.computed)(() => {
      return extractDateFormat(props.format);
    });
    const visibleTime = (0,external_Vue_.computed)(() => {
      if (userInputTime.value)
        return userInputTime.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(timeFormat.value);
    });
    const visibleDate = (0,external_Vue_.computed)(() => {
      if (userInputDate.value)
        return userInputDate.value;
      if (!props.parsedValue && !defaultValue.value)
        return;
      return (props.parsedValue || innerDate.value).format(dateFormat.value);
    });
    const timePickerVisible = (0,external_Vue_.ref)(false);
    const onTimePickerInputFocus = () => {
      timePickerVisible.value = true;
    };
    const handleTimePickClose = () => {
      timePickerVisible.value = false;
    };
    const getUnits = (date) => {
      return {
        hour: date.hour(),
        minute: date.minute(),
        second: date.second(),
        year: date.year(),
        month: date.month(),
        date: date.date()
      };
    };
    const handleTimePick = (value, visible, first) => {
      const { hour, minute, second } = getUnits(value);
      const newDate = props.parsedValue ? props.parsedValue.hour(hour).minute(minute).second(second) : value;
      innerDate.value = newDate;
      emit(innerDate.value, true);
      if (!first) {
        timePickerVisible.value = visible;
      }
    };
    const handleVisibleTimeChange = (value) => {
      const newDate = dayjs_min(value, timeFormat.value).locale(lang.value);
      if (newDate.isValid() && checkDateWithinRange(newDate)) {
        const { year: year2, month: month2, date } = getUnits(innerDate.value);
        innerDate.value = newDate.year(year2).month(month2).date(date);
        userInputTime.value = null;
        timePickerVisible.value = false;
        emit(innerDate.value, true);
      }
    };
    const handleVisibleDateChange = (value) => {
      const newDate = dayjs_min(value, dateFormat.value).locale(lang.value);
      if (newDate.isValid()) {
        if (disabledDate && disabledDate(newDate.toDate())) {
          return;
        }
        const { hour, minute, second } = getUnits(innerDate.value);
        innerDate.value = newDate.hour(hour).minute(minute).second(second);
        userInputDate.value = null;
        emit(innerDate.value, true);
      }
    };
    const isValidValue = (date) => {
      return dayjs_min.isDayjs(date) && date.isValid() && (disabledDate ? !disabledDate(date.toDate()) : true);
    };
    const formatToString = (value) => {
      if (selectionMode.value === "dates") {
        return value.map((_) => _.format(props.format));
      }
      return value.format(props.format);
    };
    const parseUserInput = (value) => {
      return dayjs_min(value, props.format).locale(lang.value);
    };
    const getDefaultValue = () => {
      const parseDate = dayjs_min(defaultValue.value).locale(lang.value);
      if (!defaultValue.value) {
        const defaultTimeDValue = defaultTimeD.value;
        return dayjs_min().hour(defaultTimeDValue.hour()).minute(defaultTimeDValue.minute()).second(defaultTimeDValue.second()).locale(lang.value);
      }
      return parseDate;
    };
    const handleFocusPicker = async () => {
      var _a;
      if (["week", "month", "year", "date"].includes(selectionMode.value)) {
        (_a = currentViewRef.value) == null ? void 0 : _a.focus();
        if (selectionMode.value === "week") {
          handleKeyControl(EVENT_CODE.down);
        }
      }
    };
    const handleKeydownTable = (event) => {
      const { code } = event;
      const validCode = [
        EVENT_CODE.up,
        EVENT_CODE.down,
        EVENT_CODE.left,
        EVENT_CODE.right,
        EVENT_CODE.home,
        EVENT_CODE.end,
        EVENT_CODE.pageUp,
        EVENT_CODE.pageDown
      ];
      if (validCode.includes(code)) {
        handleKeyControl(code);
        event.stopPropagation();
        event.preventDefault();
      }
      if ([EVENT_CODE.enter, EVENT_CODE.space].includes(code) && userInputDate.value === null && userInputTime.value === null) {
        event.preventDefault();
        emit(innerDate.value, false);
      }
    };
    const handleKeyControl = (code) => {
      var _a;
      const { up, down, left, right, home, end, pageUp, pageDown } = EVENT_CODE;
      const mapping = {
        year: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date, step) => date.setFullYear(date.getFullYear() + step)
        },
        month: {
          [up]: -4,
          [down]: 4,
          [left]: -1,
          [right]: 1,
          offset: (date, step) => date.setMonth(date.getMonth() + step)
        },
        week: {
          [up]: -1,
          [down]: 1,
          [left]: -1,
          [right]: 1,
          offset: (date, step) => date.setDate(date.getDate() + step * 7)
        },
        date: {
          [up]: -7,
          [down]: 7,
          [left]: -1,
          [right]: 1,
          [home]: (date) => -date.getDay(),
          [end]: (date) => -date.getDay() + 6,
          [pageUp]: (date) => -new Date(date.getFullYear(), date.getMonth(), 0).getDate(),
          [pageDown]: (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(),
          offset: (date, step) => date.setDate(date.getDate() + step)
        }
      };
      const newDate = innerDate.value.toDate();
      while (Math.abs(innerDate.value.diff(newDate, "year", true)) < 1) {
        const map = mapping[keyboardMode.value];
        if (!map)
          return;
        map.offset(newDate, (0,shared_esm_bundler/* isFunction */.mf)(map[code]) ? map[code](newDate) : (_a = map[code]) != null ? _a : 0);
        if (disabledDate && disabledDate(newDate)) {
          break;
        }
        const result = dayjs_min(newDate).locale(lang.value);
        innerDate.value = result;
        contextEmit("pick", result, true);
        break;
      }
    };
    const handlePanelChange = (mode) => {
      contextEmit("panel-change", innerDate.value.toDate(), mode, currentView.value);
    };
    (0,external_Vue_.watch)(() => selectionMode.value, (val) => {
      if (["month", "year"].includes(val)) {
        currentView.value = val;
        return;
      }
      currentView.value = "date";
    }, { immediate: true });
    (0,external_Vue_.watch)(() => currentView.value, () => {
      popper == null ? void 0 : popper.updatePopper();
    });
    (0,external_Vue_.watch)(() => defaultValue.value, (val) => {
      if (val) {
        innerDate.value = getDefaultValue();
      }
    }, { immediate: true });
    (0,external_Vue_.watch)(() => props.parsedValue, (val) => {
      if (val) {
        if (selectionMode.value === "dates")
          return;
        if (Array.isArray(val))
          return;
        innerDate.value = val;
      } else {
        innerDate.value = getDefaultValue();
      }
    }, { immediate: true });
    contextEmit("set-picker-option", ["isValidValue", isValidValue]);
    contextEmit("set-picker-option", ["formatToString", formatToString]);
    contextEmit("set-picker-option", ["parseUserInput", parseUserInput]);
    contextEmit("set-picker-option", ["handleFocusPicker", handleFocusPicker]);
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ppNs).b(),
          (0,external_Vue_.unref)(dpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || (0,external_Vue_.unref)(hasShortcuts),
            "has-time": (0,external_Vue_.unref)(showTime)
          }
        ])
      }, [
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body-wrapper"))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "sidebar", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }),
          (0,external_Vue_.unref)(hasShortcuts) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }, [
            ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(shortcuts), (shortcut, key) => {
              return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                key,
                type: "button",
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("shortcut")),
                onClick: ($event) => handleShortcutClick(shortcut)
              }, (0,external_Vue_.toDisplayString)(shortcut.text), 11, panel_date_pick_hoisted_1);
            }), 128))
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body"))
          }, [
            (0,external_Vue_.unref)(showTime) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
              key: 0,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("time-header"))
            }, [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("editor-wrap"))
              }, [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                  placeholder: (0,external_Vue_.unref)(t)("el.datepicker.selectDate"),
                  "model-value": (0,external_Vue_.unref)(visibleDate),
                  size: "small",
                  onInput: _cache[0] || (_cache[0] = (val) => userInputDate.value = val),
                  onChange: handleVisibleDateChange
                }, null, 8, ["placeholder", "model-value"])
              ], 2),
              (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("editor-wrap"))
              }, [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                  placeholder: (0,external_Vue_.unref)(t)("el.datepicker.selectTime"),
                  "model-value": (0,external_Vue_.unref)(visibleTime),
                  size: "small",
                  onFocus: onTimePickerInputFocus,
                  onInput: _cache[1] || (_cache[1] = (val) => userInputTime.value = val),
                  onChange: handleVisibleTimeChange
                }, null, 8, ["placeholder", "model-value"]),
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(TimePickPanel), {
                  visible: timePickerVisible.value,
                  format: (0,external_Vue_.unref)(timeFormat),
                  "time-arrow-control": (0,external_Vue_.unref)(arrowControl),
                  "parsed-value": innerDate.value,
                  onPick: handleTimePick
                }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
              ], 2)), [
                [(0,external_Vue_.unref)(ClickOutside), handleTimePickClose]
              ])
            ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([
                (0,external_Vue_.unref)(dpNs).e("header"),
                (currentView.value === "year" || currentView.value === "month") && (0,external_Vue_.unref)(dpNs).e("header--bordered")
              ])
            }, [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("prev-btn"))
              }, [
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  "aria-label": (0,external_Vue_.unref)(t)(`el.datepicker.prevYear`),
                  class: (0,external_Vue_.normalizeClass)(["d-arrow-left", (0,external_Vue_.unref)(ppNs).e("icon-btn")]),
                  onClick: _cache[2] || (_cache[2] = ($event) => moveByYear(false))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowLeft */.BAP))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_pick_hoisted_2),
                (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  "aria-label": (0,external_Vue_.unref)(t)(`el.datepicker.prevMonth`),
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: _cache[3] || (_cache[3] = ($event) => moveByMonth(false))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowLeft */.XdH))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_pick_hoisted_3), [
                  [external_Vue_.vShow, currentView.value === "date"]
                ])
              ], 2),
              (0,external_Vue_.createElementVNode)("span", {
                role: "button",
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("header-label")),
                "aria-live": "polite",
                tabindex: "0",
                onKeydown: _cache[4] || (_cache[4] = (0,external_Vue_.withKeys)(($event) => showPicker("year"), ["enter"])),
                onClick: _cache[5] || (_cache[5] = ($event) => showPicker("year"))
              }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(yearLabel)), 35),
              (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("span", {
                role: "button",
                "aria-live": "polite",
                tabindex: "0",
                class: (0,external_Vue_.normalizeClass)([
                  (0,external_Vue_.unref)(dpNs).e("header-label"),
                  { active: currentView.value === "month" }
                ]),
                onKeydown: _cache[6] || (_cache[6] = (0,external_Vue_.withKeys)(($event) => showPicker("month"), ["enter"])),
                onClick: _cache[7] || (_cache[7] = ($event) => showPicker("month"))
              }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)(`el.datepicker.month${(0,external_Vue_.unref)(month) + 1}`)), 35), [
                [external_Vue_.vShow, currentView.value === "date"]
              ]),
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(dpNs).e("next-btn"))
              }, [
                (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  "aria-label": (0,external_Vue_.unref)(t)(`el.datepicker.nextMonth`),
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: _cache[8] || (_cache[8] = ($event) => moveByMonth(true))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowRight */.olP))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_pick_hoisted_4), [
                  [external_Vue_.vShow, currentView.value === "date"]
                ]),
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  "aria-label": (0,external_Vue_.unref)(t)(`el.datepicker.nextYear`),
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[9] || (_cache[9] = ($event) => moveByYear(true))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowRight */.tsQ))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_pick_hoisted_5)
              ], 2)
            ], 2), [
              [external_Vue_.vShow, currentView.value !== "time"]
            ]),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("content")),
              onKeydown: handleKeydownTable
            }, [
              currentView.value === "date" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(DateTable, {
                key: 0,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                "selection-mode": (0,external_Vue_.unref)(selectionMode),
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                "cell-class-name": (0,external_Vue_.unref)(cellClassName),
                onPick: handleDatePick
              }, null, 8, ["selection-mode", "date", "parsed-value", "disabled-date", "cell-class-name"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
              currentView.value === "year" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(YearTable, {
                key: 1,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                "parsed-value": _ctx.parsedValue,
                onPick: handleYearPick
              }, null, 8, ["date", "disabled-date", "parsed-value"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
              currentView.value === "month" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(MonthTable, {
                key: 2,
                ref_key: "currentViewRef",
                ref: currentViewRef,
                date: innerDate.value,
                "parsed-value": _ctx.parsedValue,
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                onPick: handleMonthPick
              }, null, 8, ["date", "parsed-value", "disabled-date"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ], 34)
          ], 2)
        ], 2),
        (0,external_Vue_.withDirectives)((0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("footer"))
        }, [
          (0,external_Vue_.withDirectives)((0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElButton), {
            text: "",
            size: "small",
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("link-btn")),
            onClick: changeToNow
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.now")), 1)
            ]),
            _: 1
          }, 8, ["class"]), [
            [external_Vue_.vShow, (0,external_Vue_.unref)(selectionMode) !== "dates"]
          ]),
          (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElButton), {
            plain: "",
            size: "small",
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("link-btn")),
            onClick: onConfirm
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ], 2), [
          [external_Vue_.vShow, (0,external_Vue_.unref)(footerVisible) && currentView.value === "date"]
        ])
      ], 2);
    };
  }
});
var DatePickPanel = /* @__PURE__ */ _export_sfc(panel_date_pick_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-pick.vue"]]);


//# sourceMappingURL=panel-date-pick.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/panel-date-range.mjs




const panelDateRangeProps = buildProps({
  ...panelSharedProps,
  ...panelRangeSharedProps
});


//# sourceMappingURL=panel-date-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/composables/use-shortcut.mjs





const useShortcut = (lang) => {
  const { emit } = (0,external_Vue_.getCurrentInstance)();
  const attrs = (0,external_Vue_.useAttrs)();
  const slots = (0,external_Vue_.useSlots)();
  const handleShortcutClick = (shortcut) => {
    const shortcutValues = (0,shared_esm_bundler/* isFunction */.mf)(shortcut.value) ? shortcut.value() : shortcut.value;
    if (shortcutValues) {
      emit("pick", [
        dayjs_min(shortcutValues[0]).locale(lang.value),
        dayjs_min(shortcutValues[1]).locale(lang.value)
      ]);
      return;
    }
    if (shortcut.onClick) {
      shortcut.onClick({
        attrs,
        slots,
        emit
      });
    }
  };
  return handleShortcutClick;
};


//# sourceMappingURL=use-shortcut.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/composables/use-range-picker.mjs











const useRangePicker = (props, {
  defaultValue,
  leftDate,
  rightDate,
  unit,
  onParsedValueChanged
}) => {
  const { emit } = (0,external_Vue_.getCurrentInstance)();
  const { pickerNs } = (0,external_Vue_.inject)(ROOT_PICKER_INJECTION_KEY);
  const drpNs = useNamespace("date-range-picker");
  const { t, lang } = useLocale();
  const handleShortcutClick = useShortcut(lang);
  const minDate = (0,external_Vue_.ref)();
  const maxDate = (0,external_Vue_.ref)();
  const rangeState = (0,external_Vue_.ref)({
    endDate: null,
    selecting: false
  });
  const handleChangeRange = (val) => {
    rangeState.value = val;
  };
  const handleRangeConfirm = (visible = false) => {
    const _minDate = (0,external_Vue_.unref)(minDate);
    const _maxDate = (0,external_Vue_.unref)(maxDate);
    if (isValidRange([_minDate, _maxDate])) {
      emit("pick", [_minDate, _maxDate], visible);
    }
  };
  const onSelect = (selecting) => {
    rangeState.value.selecting = selecting;
    if (!selecting) {
      rangeState.value.endDate = null;
    }
  };
  const restoreDefault = () => {
    const [start, end] = getDefaultValue((0,external_Vue_.unref)(defaultValue), {
      lang: (0,external_Vue_.unref)(lang),
      unit,
      unlinkPanels: props.unlinkPanels
    });
    minDate.value = void 0;
    maxDate.value = void 0;
    leftDate.value = start;
    rightDate.value = end;
  };
  (0,external_Vue_.watch)(defaultValue, (val) => {
    if (val) {
      restoreDefault();
    }
  }, { immediate: true });
  (0,external_Vue_.watch)(() => props.parsedValue, (parsedValue) => {
    if ((0,shared_esm_bundler/* isArray */.kJ)(parsedValue) && parsedValue.length === 2) {
      const [start, end] = parsedValue;
      minDate.value = start;
      leftDate.value = start;
      maxDate.value = end;
      onParsedValueChanged((0,external_Vue_.unref)(minDate), (0,external_Vue_.unref)(maxDate));
    } else {
      restoreDefault();
    }
  }, { immediate: true });
  return {
    minDate,
    maxDate,
    rangeState,
    lang,
    ppNs: pickerNs,
    drpNs,
    handleChangeRange,
    handleRangeConfirm,
    handleShortcutClick,
    onSelect,
    t
  };
};


//# sourceMappingURL=use-range-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-date-range.mjs





















const panel_date_range_hoisted_1 = ["onClick"];
const panel_date_range_hoisted_2 = ["disabled"];
const panel_date_range_hoisted_3 = ["disabled"];
const panel_date_range_hoisted_4 = ["disabled"];
const panel_date_range_hoisted_5 = ["disabled"];
const panel_date_range_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "panel-date-range",
  props: panelDateRangeProps,
  emits: [
    "pick",
    "set-picker-option",
    "calendar-change",
    "panel-change"
  ],
  setup(__props, { emit }) {
    const props = __props;
    const unit = "month";
    const pickerBase = (0,external_Vue_.inject)("EP_PICKER_BASE");
    const {
      disabledDate,
      cellClassName,
      format,
      defaultTime,
      arrowControl,
      clearable
    } = pickerBase.props;
    const shortcuts = (0,external_Vue_.toRef)(pickerBase.props, "shortcuts");
    const defaultValue = (0,external_Vue_.toRef)(pickerBase.props, "defaultValue");
    const { lang } = useLocale();
    const leftDate = (0,external_Vue_.ref)(dayjs_min().locale(lang.value));
    const rightDate = (0,external_Vue_.ref)(dayjs_min().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect,
      t
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const dateUserInput = (0,external_Vue_.ref)({
      min: null,
      max: null
    });
    const timeUserInput = (0,external_Vue_.ref)({
      min: null,
      max: null
    });
    const leftLabel = (0,external_Vue_.computed)(() => {
      return `${leftDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${leftDate.value.month() + 1}`)}`;
    });
    const rightLabel = (0,external_Vue_.computed)(() => {
      return `${rightDate.value.year()} ${t("el.datepicker.year")} ${t(`el.datepicker.month${rightDate.value.month() + 1}`)}`;
    });
    const leftYear = (0,external_Vue_.computed)(() => {
      return leftDate.value.year();
    });
    const leftMonth = (0,external_Vue_.computed)(() => {
      return leftDate.value.month();
    });
    const rightYear = (0,external_Vue_.computed)(() => {
      return rightDate.value.year();
    });
    const rightMonth = (0,external_Vue_.computed)(() => {
      return rightDate.value.month();
    });
    const hasShortcuts = (0,external_Vue_.computed)(() => !!shortcuts.value.length);
    const minVisibleDate = (0,external_Vue_.computed)(() => {
      if (dateUserInput.value.min !== null)
        return dateUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(dateFormat.value);
      return "";
    });
    const maxVisibleDate = (0,external_Vue_.computed)(() => {
      if (dateUserInput.value.max !== null)
        return dateUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(dateFormat.value);
      return "";
    });
    const minVisibleTime = (0,external_Vue_.computed)(() => {
      if (timeUserInput.value.min !== null)
        return timeUserInput.value.min;
      if (minDate.value)
        return minDate.value.format(timeFormat.value);
      return "";
    });
    const maxVisibleTime = (0,external_Vue_.computed)(() => {
      if (timeUserInput.value.max !== null)
        return timeUserInput.value.max;
      if (maxDate.value || minDate.value)
        return (maxDate.value || minDate.value).format(timeFormat.value);
      return "";
    });
    const timeFormat = (0,external_Vue_.computed)(() => {
      return extractTimeFormat(format);
    });
    const dateFormat = (0,external_Vue_.computed)(() => {
      return extractDateFormat(format);
    });
    const leftPrevYear = () => {
      leftDate.value = leftDate.value.subtract(1, "year");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("year");
    };
    const leftPrevMonth = () => {
      leftDate.value = leftDate.value.subtract(1, "month");
      if (!props.unlinkPanels) {
        rightDate.value = leftDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const rightNextYear = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "year");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "year");
      }
      handlePanelChange("year");
    };
    const rightNextMonth = () => {
      if (!props.unlinkPanels) {
        leftDate.value = leftDate.value.add(1, "month");
        rightDate.value = leftDate.value.add(1, "month");
      } else {
        rightDate.value = rightDate.value.add(1, "month");
      }
      handlePanelChange("month");
    };
    const leftNextYear = () => {
      leftDate.value = leftDate.value.add(1, "year");
      handlePanelChange("year");
    };
    const leftNextMonth = () => {
      leftDate.value = leftDate.value.add(1, "month");
      handlePanelChange("month");
    };
    const rightPrevYear = () => {
      rightDate.value = rightDate.value.subtract(1, "year");
      handlePanelChange("year");
    };
    const rightPrevMonth = () => {
      rightDate.value = rightDate.value.subtract(1, "month");
      handlePanelChange("month");
    };
    const handlePanelChange = (mode) => {
      emit("panel-change", [leftDate.value.toDate(), rightDate.value.toDate()], mode);
    };
    const enableMonthArrow = (0,external_Vue_.computed)(() => {
      const nextMonth = (leftMonth.value + 1) % 12;
      const yearOffset = leftMonth.value + 1 >= 12 ? 1 : 0;
      return props.unlinkPanels && new Date(leftYear.value + yearOffset, nextMonth) < new Date(rightYear.value, rightMonth.value);
    });
    const enableYearArrow = (0,external_Vue_.computed)(() => {
      return props.unlinkPanels && rightYear.value * 12 + rightMonth.value - (leftYear.value * 12 + leftMonth.value + 1) >= 12;
    });
    const btnDisabled = (0,external_Vue_.computed)(() => {
      return !(minDate.value && maxDate.value && !rangeState.value.selecting && isValidRange([minDate.value, maxDate.value]));
    });
    const showTime = (0,external_Vue_.computed)(() => props.type === "datetime" || props.type === "datetimerange");
    const formatEmit = (emitDayjs, index) => {
      if (!emitDayjs)
        return;
      if (defaultTime) {
        const defaultTimeD = dayjs_min(defaultTime[index] || defaultTime).locale(lang.value);
        return defaultTimeD.year(emitDayjs.year()).month(emitDayjs.month()).date(emitDayjs.date());
      }
      return emitDayjs;
    };
    const handleRangePick = (val, close = true) => {
      const min_ = val.minDate;
      const max_ = val.maxDate;
      const minDate_ = formatEmit(min_, 0);
      const maxDate_ = formatEmit(max_, 1);
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      emit("calendar-change", [min_.toDate(), max_ && max_.toDate()]);
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close || showTime.value)
        return;
      handleRangeConfirm();
    };
    const minTimePickerVisible = (0,external_Vue_.ref)(false);
    const maxTimePickerVisible = (0,external_Vue_.ref)(false);
    const handleMinTimeClose = () => {
      minTimePickerVisible.value = false;
    };
    const handleMaxTimeClose = () => {
      maxTimePickerVisible.value = false;
    };
    const handleDateInput = (value, type) => {
      dateUserInput.value[type] = value;
      const parsedValueD = dayjs_min(value, dateFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (disabledDate && disabledDate(parsedValueD.toDate())) {
          return;
        }
        if (type === "min") {
          leftDate.value = parsedValueD;
          minDate.value = (minDate.value || leftDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            rightDate.value = parsedValueD.add(1, "month");
            maxDate.value = minDate.value.add(1, "month");
          }
        } else {
          rightDate.value = parsedValueD;
          maxDate.value = (maxDate.value || rightDate.value).year(parsedValueD.year()).month(parsedValueD.month()).date(parsedValueD.date());
          if (!props.unlinkPanels) {
            leftDate.value = parsedValueD.subtract(1, "month");
            minDate.value = maxDate.value.subtract(1, "month");
          }
        }
      }
    };
    const handleDateChange = (_, type) => {
      dateUserInput.value[type] = null;
    };
    const handleTimeInput = (value, type) => {
      timeUserInput.value[type] = value;
      const parsedValueD = dayjs_min(value, timeFormat.value).locale(lang.value);
      if (parsedValueD.isValid()) {
        if (type === "min") {
          minTimePickerVisible.value = true;
          minDate.value = (minDate.value || leftDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
            maxDate.value = minDate.value;
          }
        } else {
          maxTimePickerVisible.value = true;
          maxDate.value = (maxDate.value || rightDate.value).hour(parsedValueD.hour()).minute(parsedValueD.minute()).second(parsedValueD.second());
          rightDate.value = maxDate.value;
          if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
            minDate.value = maxDate.value;
          }
        }
      }
    };
    const handleTimeChange = (value, type) => {
      timeUserInput.value[type] = null;
      if (type === "min") {
        leftDate.value = minDate.value;
        minTimePickerVisible.value = false;
      } else {
        rightDate.value = maxDate.value;
        maxTimePickerVisible.value = false;
      }
    };
    const handleMinTimePick = (value, visible, first) => {
      if (timeUserInput.value.min)
        return;
      if (value) {
        leftDate.value = value;
        minDate.value = (minDate.value || leftDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        minTimePickerVisible.value = visible;
      }
      if (!maxDate.value || maxDate.value.isBefore(minDate.value)) {
        maxDate.value = minDate.value;
        rightDate.value = value;
      }
    };
    const handleMaxTimePick = (value, visible, first) => {
      if (timeUserInput.value.max)
        return;
      if (value) {
        rightDate.value = value;
        maxDate.value = (maxDate.value || rightDate.value).hour(value.hour()).minute(value.minute()).second(value.second());
      }
      if (!first) {
        maxTimePickerVisible.value = visible;
      }
      if (maxDate.value && maxDate.value.isBefore(minDate.value)) {
        minDate.value = maxDate.value;
      }
    };
    const handleClear = () => {
      leftDate.value = getDefaultValue((0,external_Vue_.unref)(defaultValue), {
        lang: (0,external_Vue_.unref)(lang),
        unit: "month",
        unlinkPanels: props.unlinkPanels
      })[0];
      rightDate.value = leftDate.value.add(1, "month");
      emit("pick", null);
    };
    const formatToString = (value) => {
      return (0,shared_esm_bundler/* isArray */.kJ)(value) ? value.map((_) => _.format(format)) : value.format(format);
    };
    const parseUserInput = (value) => {
      return (0,shared_esm_bundler/* isArray */.kJ)(value) ? value.map((_) => dayjs_min(_, format).locale(lang.value)) : dayjs_min(value, format).locale(lang.value);
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const minDateMonth = (minDate2 == null ? void 0 : minDate2.month()) || 0;
        const maxDateYear = maxDate2.year();
        const maxDateMonth = maxDate2.month();
        rightDate.value = minDateYear === maxDateYear && minDateMonth === maxDateMonth ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
        if (maxDate2) {
          rightDate.value = rightDate.value.hour(maxDate2.hour()).minute(maxDate2.minute()).second(maxDate2.second());
        }
      }
    }
    emit("set-picker-option", ["isValidValue", isValidRange]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["handleClear", handleClear]);
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ppNs).b(),
          (0,external_Vue_.unref)(drpNs).b(),
          {
            "has-sidebar": _ctx.$slots.sidebar || (0,external_Vue_.unref)(hasShortcuts),
            "has-time": (0,external_Vue_.unref)(showTime)
          }
        ])
      }, [
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body-wrapper"))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "sidebar", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }),
          (0,external_Vue_.unref)(hasShortcuts) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }, [
            ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(shortcuts), (shortcut, key) => {
              return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                key,
                type: "button",
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("shortcut")),
                onClick: ($event) => (0,external_Vue_.unref)(handleShortcutClick)(shortcut)
              }, (0,external_Vue_.toDisplayString)(shortcut.text), 11, panel_date_range_hoisted_1);
            }), 128))
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body"))
          }, [
            (0,external_Vue_.unref)(showTime) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
              key: 0,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("time-header"))
            }, [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("editors-wrap"))
              }, [
                (0,external_Vue_.createElementVNode)("span", {
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("time-picker-wrap"))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                    size: "small",
                    disabled: (0,external_Vue_.unref)(rangeState).selecting,
                    placeholder: (0,external_Vue_.unref)(t)("el.datepicker.startDate"),
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("editor")),
                    "model-value": (0,external_Vue_.unref)(minVisibleDate),
                    onInput: _cache[0] || (_cache[0] = (val) => handleDateInput(val, "min")),
                    onChange: _cache[1] || (_cache[1] = (val) => handleDateChange(val, "min"))
                  }, null, 8, ["disabled", "placeholder", "class", "model-value"])
                ], 2),
                (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("time-picker-wrap"))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                    size: "small",
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("editor")),
                    disabled: (0,external_Vue_.unref)(rangeState).selecting,
                    placeholder: (0,external_Vue_.unref)(t)("el.datepicker.startTime"),
                    "model-value": (0,external_Vue_.unref)(minVisibleTime),
                    onFocus: _cache[2] || (_cache[2] = ($event) => minTimePickerVisible.value = true),
                    onInput: _cache[3] || (_cache[3] = (val) => handleTimeInput(val, "min")),
                    onChange: _cache[4] || (_cache[4] = (val) => handleTimeChange(val, "min"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value"]),
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(TimePickPanel), {
                    visible: minTimePickerVisible.value,
                    format: (0,external_Vue_.unref)(timeFormat),
                    "datetime-role": "start",
                    "time-arrow-control": (0,external_Vue_.unref)(arrowControl),
                    "parsed-value": leftDate.value,
                    onPick: handleMinTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [(0,external_Vue_.unref)(ClickOutside), handleMinTimeClose]
                ])
              ], 2),
              (0,external_Vue_.createElementVNode)("span", null, [
                (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                  default: (0,external_Vue_.withCtx)(() => [
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowRight */.olP))
                  ]),
                  _: 1
                })
              ]),
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(drpNs).e("editors-wrap"), "is-right"])
              }, [
                (0,external_Vue_.createElementVNode)("span", {
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("time-picker-wrap"))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                    size: "small",
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("editor")),
                    disabled: (0,external_Vue_.unref)(rangeState).selecting,
                    placeholder: (0,external_Vue_.unref)(t)("el.datepicker.endDate"),
                    "model-value": (0,external_Vue_.unref)(maxVisibleDate),
                    readonly: !(0,external_Vue_.unref)(minDate),
                    onInput: _cache[5] || (_cache[5] = (val) => handleDateInput(val, "max")),
                    onChange: _cache[6] || (_cache[6] = (val) => handleDateChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"])
                ], 2),
                (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
                  class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("time-picker-wrap"))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
                    size: "small",
                    class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("editor")),
                    disabled: (0,external_Vue_.unref)(rangeState).selecting,
                    placeholder: (0,external_Vue_.unref)(t)("el.datepicker.endTime"),
                    "model-value": (0,external_Vue_.unref)(maxVisibleTime),
                    readonly: !(0,external_Vue_.unref)(minDate),
                    onFocus: _cache[7] || (_cache[7] = ($event) => (0,external_Vue_.unref)(minDate) && (maxTimePickerVisible.value = true)),
                    onInput: _cache[8] || (_cache[8] = (val) => handleTimeInput(val, "max")),
                    onChange: _cache[9] || (_cache[9] = (val) => handleTimeChange(val, "max"))
                  }, null, 8, ["class", "disabled", "placeholder", "model-value", "readonly"]),
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(TimePickPanel), {
                    "datetime-role": "end",
                    visible: maxTimePickerVisible.value,
                    format: (0,external_Vue_.unref)(timeFormat),
                    "time-arrow-control": (0,external_Vue_.unref)(arrowControl),
                    "parsed-value": rightDate.value,
                    onPick: handleMaxTimePick
                  }, null, 8, ["visible", "format", "time-arrow-control", "parsed-value"])
                ], 2)), [
                  [(0,external_Vue_.unref)(ClickOutside), handleMaxTimeClose]
                ])
              ], 2)
            ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("content"), (0,external_Vue_.unref)(drpNs).e("content")], "is-left"])
            }, [
              (0,external_Vue_.createElementVNode)("div", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("header"))
              }, [
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: leftPrevYear
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowLeft */.BAP))
                    ]),
                    _: 1
                  })
                ], 2),
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "arrow-left"]),
                  onClick: leftPrevMonth
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowLeft */.XdH))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 0,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableYearArrow),
                  class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("icon-btn"), { "is-disabled": !(0,external_Vue_.unref)(enableYearArrow) }], "d-arrow-right"]),
                  onClick: leftNextYear
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowRight */.tsQ))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_range_hoisted_2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 1,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableMonthArrow),
                  class: (0,external_Vue_.normalizeClass)([[
                    (0,external_Vue_.unref)(ppNs).e("icon-btn"),
                    { "is-disabled": !(0,external_Vue_.unref)(enableMonthArrow) }
                  ], "arrow-right"]),
                  onClick: leftNextMonth
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowRight */.olP))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_range_hoisted_3)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.createElementVNode)("div", null, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(leftLabel)), 1)
              ], 2),
              (0,external_Vue_.createVNode)(DateTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": (0,external_Vue_.unref)(minDate),
                "max-date": (0,external_Vue_.unref)(maxDate),
                "range-state": (0,external_Vue_.unref)(rangeState),
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                "cell-class-name": (0,external_Vue_.unref)(cellClassName),
                onChangerange: (0,external_Vue_.unref)(handleChangeRange),
                onPick: handleRangePick,
                onSelect: (0,external_Vue_.unref)(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("content"), (0,external_Vue_.unref)(drpNs).e("content")], "is-right"])
            }, [
              (0,external_Vue_.createElementVNode)("div", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 0,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableYearArrow),
                  class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("icon-btn"), { "is-disabled": !(0,external_Vue_.unref)(enableYearArrow) }], "d-arrow-left"]),
                  onClick: rightPrevYear
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowLeft */.BAP))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_range_hoisted_4)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 1,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableMonthArrow),
                  class: (0,external_Vue_.normalizeClass)([[
                    (0,external_Vue_.unref)(ppNs).e("icon-btn"),
                    { "is-disabled": !(0,external_Vue_.unref)(enableMonthArrow) }
                  ], "arrow-left"]),
                  onClick: rightPrevMonth
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowLeft */.XdH))
                    ]),
                    _: 1
                  })
                ], 10, panel_date_range_hoisted_5)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: rightNextYear
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowRight */.tsQ))
                    ]),
                    _: 1
                  })
                ], 2),
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "arrow-right"]),
                  onClick: rightNextMonth
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* ArrowRight */.olP))
                    ]),
                    _: 1
                  })
                ], 2),
                (0,external_Vue_.createElementVNode)("div", null, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(rightLabel)), 1)
              ], 2),
              (0,external_Vue_.createVNode)(DateTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": (0,external_Vue_.unref)(minDate),
                "max-date": (0,external_Vue_.unref)(maxDate),
                "range-state": (0,external_Vue_.unref)(rangeState),
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                "cell-class-name": (0,external_Vue_.unref)(cellClassName),
                onChangerange: (0,external_Vue_.unref)(handleChangeRange),
                onPick: handleRangePick,
                onSelect: (0,external_Vue_.unref)(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "cell-class-name", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2),
        (0,external_Vue_.unref)(showTime) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
          key: 0,
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("footer"))
        }, [
          (0,external_Vue_.unref)(clearable) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElButton), {
            key: 0,
            text: "",
            size: "small",
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("link-btn")),
            onClick: handleClear
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.clear")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElButton), {
            plain: "",
            size: "small",
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("link-btn")),
            disabled: (0,external_Vue_.unref)(btnDisabled),
            onClick: _cache[10] || (_cache[10] = ($event) => (0,external_Vue_.unref)(handleRangeConfirm)(false))
          }, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.confirm")), 1)
            ]),
            _: 1
          }, 8, ["class", "disabled"])
        ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ], 2);
    };
  }
});
var DateRangePickPanel = /* @__PURE__ */ _export_sfc(panel_date_range_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-date-range.vue"]]);


//# sourceMappingURL=panel-date-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/props/panel-month-range.mjs




const panelMonthRangeProps = buildProps({
  ...panelRangeSharedProps
});
const panelMonthRangeEmits = ["pick", "set-picker-option"];


//# sourceMappingURL=panel-month-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/composables/use-month-range-header.mjs




const useMonthRangeHeader = ({
  unlinkPanels,
  leftDate,
  rightDate
}) => {
  const { t } = useLocale();
  const leftPrevYear = () => {
    leftDate.value = leftDate.value.subtract(1, "year");
    if (!unlinkPanels) {
      rightDate.value = rightDate.value.subtract(1, "year");
    }
  };
  const rightNextYear = () => {
    if (!unlinkPanels) {
      leftDate.value = leftDate.value.add(1, "year");
    }
    rightDate.value = rightDate.value.add(1, "year");
  };
  const leftNextYear = () => {
    leftDate.value = leftDate.value.add(1, "year");
  };
  const rightPrevYear = () => {
    rightDate.value = rightDate.value.subtract(1, "year");
  };
  const leftLabel = (0,external_Vue_.computed)(() => {
    return `${leftDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const rightLabel = (0,external_Vue_.computed)(() => {
    return `${rightDate.value.year()} ${t("el.datepicker.year")}`;
  });
  const leftYear = (0,external_Vue_.computed)(() => {
    return leftDate.value.year();
  });
  const rightYear = (0,external_Vue_.computed)(() => {
    return rightDate.value.year() === leftDate.value.year() ? leftDate.value.year() + 1 : rightDate.value.year();
  });
  return {
    leftPrevYear,
    rightNextYear,
    leftNextYear,
    rightPrevYear,
    leftLabel,
    rightLabel,
    leftYear,
    rightYear
  };
};


//# sourceMappingURL=use-month-range-header.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker-com/panel-month-range.mjs












const panel_month_range_hoisted_1 = ["onClick"];
const panel_month_range_hoisted_2 = ["disabled"];
const panel_month_range_hoisted_3 = ["disabled"];
const panel_month_range_default_ = {
  name: "DatePickerMonthRange"
};
const panel_month_range_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...panel_month_range_default_,
  props: panelMonthRangeProps,
  emits: panelMonthRangeEmits,
  setup(__props, { emit }) {
    const props = __props;
    const unit = "year";
    const { lang } = useLocale();
    const pickerBase = (0,external_Vue_.inject)("EP_PICKER_BASE");
    const { shortcuts, disabledDate, format } = pickerBase.props;
    const defaultValue = (0,external_Vue_.toRef)(pickerBase.props, "defaultValue");
    const leftDate = (0,external_Vue_.ref)(dayjs_min().locale(lang.value));
    const rightDate = (0,external_Vue_.ref)(dayjs_min().locale(lang.value).add(1, unit));
    const {
      minDate,
      maxDate,
      rangeState,
      ppNs,
      drpNs,
      handleChangeRange,
      handleRangeConfirm,
      handleShortcutClick,
      onSelect
    } = useRangePicker(props, {
      defaultValue,
      leftDate,
      rightDate,
      unit,
      onParsedValueChanged
    });
    const hasShortcuts = (0,external_Vue_.computed)(() => !!shortcuts.length);
    const {
      leftPrevYear,
      rightNextYear,
      leftNextYear,
      rightPrevYear,
      leftLabel,
      rightLabel,
      leftYear,
      rightYear
    } = useMonthRangeHeader({
      unlinkPanels: (0,external_Vue_.toRef)(props, "unlinkPanels"),
      leftDate,
      rightDate
    });
    const enableYearArrow = (0,external_Vue_.computed)(() => {
      return props.unlinkPanels && rightYear.value > leftYear.value + 1;
    });
    const handleRangePick = (val, close = true) => {
      const minDate_ = val.minDate;
      const maxDate_ = val.maxDate;
      if (maxDate.value === maxDate_ && minDate.value === minDate_) {
        return;
      }
      maxDate.value = maxDate_;
      minDate.value = minDate_;
      if (!close)
        return;
      handleRangeConfirm();
    };
    const formatToString = (days) => {
      return days.map((day) => day.format(format));
    };
    function onParsedValueChanged(minDate2, maxDate2) {
      if (props.unlinkPanels && maxDate2) {
        const minDateYear = (minDate2 == null ? void 0 : minDate2.year()) || 0;
        const maxDateYear = maxDate2.year();
        rightDate.value = minDateYear === maxDateYear ? maxDate2.add(1, unit) : maxDate2;
      } else {
        rightDate.value = leftDate.value.add(1, unit);
      }
    }
    emit("set-picker-option", ["formatToString", formatToString]);
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ppNs).b(),
          (0,external_Vue_.unref)(drpNs).b(),
          {
            "has-sidebar": Boolean(_ctx.$slots.sidebar) || (0,external_Vue_.unref)(hasShortcuts)
          }
        ])
      }, [
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body-wrapper"))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "sidebar", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }),
          (0,external_Vue_.unref)(hasShortcuts) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 0,
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("sidebar"))
          }, [
            ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)((0,external_Vue_.unref)(shortcuts), (shortcut, key) => {
              return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                key,
                type: "button",
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("shortcut")),
                onClick: ($event) => (0,external_Vue_.unref)(handleShortcutClick)(shortcut)
              }, (0,external_Vue_.toDisplayString)(shortcut.text), 11, panel_month_range_hoisted_1);
            }), 128))
          ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ppNs).e("body"))
          }, [
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("content"), (0,external_Vue_.unref)(drpNs).e("content")], "is-left"])
            }, [
              (0,external_Vue_.createElementVNode)("div", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("header"))
              }, [
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "d-arrow-left"]),
                  onClick: _cache[0] || (_cache[0] = (...args) => (0,external_Vue_.unref)(leftPrevYear) && (0,external_Vue_.unref)(leftPrevYear)(...args))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowLeft */.BAP))
                    ]),
                    _: 1
                  })
                ], 2),
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 0,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableYearArrow),
                  class: (0,external_Vue_.normalizeClass)([[
                    (0,external_Vue_.unref)(ppNs).e("icon-btn"),
                    { [(0,external_Vue_.unref)(ppNs).is("disabled")]: !(0,external_Vue_.unref)(enableYearArrow) }
                  ], "d-arrow-right"]),
                  onClick: _cache[1] || (_cache[1] = (...args) => (0,external_Vue_.unref)(leftNextYear) && (0,external_Vue_.unref)(leftNextYear)(...args))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowRight */.tsQ))
                    ]),
                    _: 1
                  })
                ], 10, panel_month_range_hoisted_2)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.createElementVNode)("div", null, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(leftLabel)), 1)
              ], 2),
              (0,external_Vue_.createVNode)(MonthTable, {
                "selection-mode": "range",
                date: leftDate.value,
                "min-date": (0,external_Vue_.unref)(minDate),
                "max-date": (0,external_Vue_.unref)(maxDate),
                "range-state": (0,external_Vue_.unref)(rangeState),
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                onChangerange: (0,external_Vue_.unref)(handleChangeRange),
                onPick: handleRangePick,
                onSelect: (0,external_Vue_.unref)(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("content"), (0,external_Vue_.unref)(drpNs).e("content")], "is-right"])
            }, [
              (0,external_Vue_.createElementVNode)("div", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(drpNs).e("header"))
              }, [
                _ctx.unlinkPanels ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("button", {
                  key: 0,
                  type: "button",
                  disabled: !(0,external_Vue_.unref)(enableYearArrow),
                  class: (0,external_Vue_.normalizeClass)([[(0,external_Vue_.unref)(ppNs).e("icon-btn"), { "is-disabled": !(0,external_Vue_.unref)(enableYearArrow) }], "d-arrow-left"]),
                  onClick: _cache[2] || (_cache[2] = (...args) => (0,external_Vue_.unref)(rightPrevYear) && (0,external_Vue_.unref)(rightPrevYear)(...args))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowLeft */.BAP))
                    ]),
                    _: 1
                  })
                ], 10, panel_month_range_hoisted_3)) : (0,external_Vue_.createCommentVNode)("v-if", true),
                (0,external_Vue_.createElementVNode)("button", {
                  type: "button",
                  class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ppNs).e("icon-btn"), "d-arrow-right"]),
                  onClick: _cache[3] || (_cache[3] = (...args) => (0,external_Vue_.unref)(rightNextYear) && (0,external_Vue_.unref)(rightNextYear)(...args))
                }, [
                  (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
                    default: (0,external_Vue_.withCtx)(() => [
                      (0,external_Vue_.createVNode)((0,external_Vue_.unref)(dist/* DArrowRight */.tsQ))
                    ]),
                    _: 1
                  })
                ], 2),
                (0,external_Vue_.createElementVNode)("div", null, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(rightLabel)), 1)
              ], 2),
              (0,external_Vue_.createVNode)(MonthTable, {
                "selection-mode": "range",
                date: rightDate.value,
                "min-date": (0,external_Vue_.unref)(minDate),
                "max-date": (0,external_Vue_.unref)(maxDate),
                "range-state": (0,external_Vue_.unref)(rangeState),
                "disabled-date": (0,external_Vue_.unref)(disabledDate),
                onChangerange: (0,external_Vue_.unref)(handleChangeRange),
                onPick: handleRangePick,
                onSelect: (0,external_Vue_.unref)(onSelect)
              }, null, 8, ["date", "min-date", "max-date", "range-state", "disabled-date", "onChangerange", "onSelect"])
            ], 2)
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
var MonthRangePickPanel = /* @__PURE__ */ _export_sfc(panel_month_range_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/date-picker/src/date-picker-com/panel-month-range.vue"]]);


//# sourceMappingURL=panel-month-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/panel-utils.mjs




const getPanel = function(type) {
  switch (type) {
    case "daterange":
    case "datetimerange": {
      return DateRangePickPanel;
    }
    case "monthrange": {
      return MonthRangePickPanel;
    }
    default: {
      return DatePickPanel;
    }
  }
};


//# sourceMappingURL=panel-utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/common/props.mjs







const timePickerDefaultProps = buildProps({
  id: {
    type: definePropType([Array, String])
  },
  name: {
    type: definePropType([Array, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  format: String,
  valueFormat: String,
  type: {
    type: String,
    default: ""
  },
  clearable: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: definePropType([String, Object]),
    default: dist/* CircleClose */.K41
  },
  editable: {
    type: Boolean,
    default: true
  },
  prefixIcon: {
    type: definePropType([String, Object]),
    default: ""
  },
  size: useSizeProp,
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: ""
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  modelValue: {
    type: definePropType([Date, Array, String, Number]),
    default: ""
  },
  rangeSeparator: {
    type: String,
    default: "-"
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: definePropType([Date, Array])
  },
  defaultTime: {
    type: definePropType([Date, Array])
  },
  isRange: {
    type: Boolean,
    default: false
  },
  ...disabledTimeListsProps,
  disabledDate: {
    type: Function
  },
  cellClassName: {
    type: Function
  },
  shortcuts: {
    type: Array,
    default: () => []
  },
  arrowControl: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: definePropType([String, Number]),
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  unlinkPanels: Boolean
});


//# sourceMappingURL=props.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/common/picker.mjs






















const picker_hoisted_1 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const picker_hoisted_2 = ["id", "name", "placeholder", "value", "disabled", "readonly"];
const picker_default_ = {
  name: "Picker"
};
const picker_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...picker_default_,
  props: timePickerDefaultProps,
  emits: [
    "update:modelValue",
    "change",
    "focus",
    "blur",
    "calendar-change",
    "panel-change",
    "visible-change",
    "keydown"
  ],
  setup(__props, { expose, emit }) {
    const props = __props;
    const { lang } = useLocale();
    const nsDate = useNamespace("date");
    const nsInput = useNamespace("input");
    const nsRange = useNamespace("range");
    const elForm = (0,external_Vue_.inject)(formContextKey, {});
    const elFormItem = (0,external_Vue_.inject)(formItemContextKey, {});
    const elPopperOptions = (0,external_Vue_.inject)("ElPopperOptions", {});
    const refPopper = (0,external_Vue_.ref)();
    const inputRef = (0,external_Vue_.ref)();
    const pickerVisible = (0,external_Vue_.ref)(false);
    const pickerActualVisible = (0,external_Vue_.ref)(false);
    const valueOnOpen = (0,external_Vue_.ref)(null);
    let hasJustTabExitedInput = false;
    let ignoreFocusEvent = false;
    (0,external_Vue_.watch)(pickerVisible, (val) => {
      if (!val) {
        userInput.value = null;
        (0,external_Vue_.nextTick)(() => {
          emitChange(props.modelValue);
        });
      } else {
        valueOnOpen.value = props.modelValue;
      }
    });
    const emitChange = (val, isClear) => {
      var _a;
      if (isClear || !valueEquals(val, valueOnOpen.value)) {
        emit("change", val);
        props.validateEvent && ((_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => error_debugWarn(err)));
      }
    };
    const emitInput = (input) => {
      if (!valueEquals(props.modelValue, input)) {
        let formatted;
        if ((0,shared_esm_bundler/* isArray */.kJ)(input)) {
          formatted = input.map((item) => formatter(item, props.valueFormat, lang.value));
        } else if (input) {
          formatted = formatter(input, props.valueFormat, lang.value);
        }
        emit("update:modelValue", input ? formatted : input, lang.value);
      }
    };
    const emitKeydown = (e) => {
      emit("keydown", e);
    };
    const refInput = (0,external_Vue_.computed)(() => {
      if (inputRef.value) {
        const _r = isRangeInput.value ? inputRef.value : inputRef.value.$el;
        return Array.from(_r.querySelectorAll("input"));
      }
      return [];
    });
    const setSelectionRange = (start, end, pos) => {
      const _inputs = refInput.value;
      if (!_inputs.length)
        return;
      if (!pos || pos === "min") {
        _inputs[0].setSelectionRange(start, end);
        _inputs[0].focus();
      } else if (pos === "max") {
        _inputs[1].setSelectionRange(start, end);
        _inputs[1].focus();
      }
    };
    const focusOnInputBox = () => {
      focus(true, true);
      (0,external_Vue_.nextTick)(() => {
        ignoreFocusEvent = false;
      });
    };
    const onPick = (date = "", visible = false) => {
      if (!visible) {
        focusOnInputBox();
      }
      pickerVisible.value = visible;
      let result;
      if ((0,shared_esm_bundler/* isArray */.kJ)(date)) {
        result = date.map((_) => _.toDate());
      } else {
        result = date ? date.toDate() : date;
      }
      userInput.value = null;
      emitInput(result);
    };
    const onBeforeShow = () => {
      pickerActualVisible.value = true;
    };
    const onShow = () => {
      emit("visible-change", true);
    };
    const onKeydownPopperContent = (event) => {
      if ((event == null ? void 0 : event.key) === EVENT_CODE.esc) {
        focus(true, true);
      }
    };
    const onHide = () => {
      pickerActualVisible.value = false;
      ignoreFocusEvent = false;
      emit("visible-change", false);
    };
    const focus = (focusStartInput = true, isIgnoreFocusEvent = false) => {
      ignoreFocusEvent = isIgnoreFocusEvent;
      const [leftInput, rightInput] = (0,external_Vue_.unref)(refInput);
      let input = leftInput;
      if (!focusStartInput && isRangeInput.value) {
        input = rightInput;
      }
      if (input) {
        input.focus();
      }
    };
    const handleFocusInput = (e) => {
      if (props.readonly || pickerDisabled.value || pickerVisible.value || ignoreFocusEvent) {
        return;
      }
      pickerVisible.value = true;
      emit("focus", e);
    };
    let currentHandleBlurDeferCallback = void 0;
    const handleBlurInput = (e) => {
      const handleBlurDefer = async () => {
        setTimeout(() => {
          var _a, _b;
          if (currentHandleBlurDeferCallback === handleBlurDefer) {
            if (!(((_a = refPopper.value) == null ? void 0 : _a.isFocusInsideContent()) && !hasJustTabExitedInput) && refInput.value.filter((input) => {
              return input.contains(document.activeElement);
            }).length === 0) {
              handleChange();
              pickerVisible.value = false;
              emit("blur", e);
              props.validateEvent && ((_b = elFormItem.validate) == null ? void 0 : _b.call(elFormItem, "blur").catch((err) => error_debugWarn(err)));
            }
            hasJustTabExitedInput = false;
          }
        }, 0);
      };
      currentHandleBlurDeferCallback = handleBlurDefer;
      handleBlurDefer();
    };
    const pickerDisabled = (0,external_Vue_.computed)(() => {
      return props.disabled || elForm.disabled;
    });
    const parsedValue = (0,external_Vue_.computed)(() => {
      let dayOrDays;
      if (valueIsEmpty.value) {
        if (pickerOptions.value.getDefaultValue) {
          dayOrDays = pickerOptions.value.getDefaultValue();
        }
      } else {
        if ((0,shared_esm_bundler/* isArray */.kJ)(props.modelValue)) {
          dayOrDays = props.modelValue.map((d) => parseDate(d, props.valueFormat, lang.value));
        } else {
          dayOrDays = parseDate(props.modelValue, props.valueFormat, lang.value);
        }
      }
      if (pickerOptions.value.getRangeAvailableTime) {
        const availableResult = pickerOptions.value.getRangeAvailableTime(dayOrDays);
        if (!lodash_es_isEqual(availableResult, dayOrDays)) {
          dayOrDays = availableResult;
          emitInput((0,shared_esm_bundler/* isArray */.kJ)(dayOrDays) ? dayOrDays.map((_) => _.toDate()) : dayOrDays.toDate());
        }
      }
      if ((0,shared_esm_bundler/* isArray */.kJ)(dayOrDays) && dayOrDays.some((day) => !day)) {
        dayOrDays = [];
      }
      return dayOrDays;
    });
    const displayValue = (0,external_Vue_.computed)(() => {
      if (!pickerOptions.value.panelReady)
        return "";
      const formattedValue = formatDayjsToString(parsedValue.value);
      if ((0,shared_esm_bundler/* isArray */.kJ)(userInput.value)) {
        return [
          userInput.value[0] || formattedValue && formattedValue[0] || "",
          userInput.value[1] || formattedValue && formattedValue[1] || ""
        ];
      } else if (userInput.value !== null) {
        return userInput.value;
      }
      if (!isTimePicker.value && valueIsEmpty.value)
        return "";
      if (!pickerVisible.value && valueIsEmpty.value)
        return "";
      if (formattedValue) {
        return isDatesPicker.value ? formattedValue.join(", ") : formattedValue;
      }
      return "";
    });
    const isTimeLikePicker = (0,external_Vue_.computed)(() => props.type.includes("time"));
    const isTimePicker = (0,external_Vue_.computed)(() => props.type.startsWith("time"));
    const isDatesPicker = (0,external_Vue_.computed)(() => props.type === "dates");
    const triggerIcon = (0,external_Vue_.computed)(() => props.prefixIcon || (isTimeLikePicker.value ? dist/* Clock */.SUY : dist/* Calendar */.faS));
    const showClose = (0,external_Vue_.ref)(false);
    const onClearIconClick = (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (showClose.value) {
        event.stopPropagation();
        focusOnInputBox();
        emitInput(null);
        emitChange(null, true);
        showClose.value = false;
        pickerVisible.value = false;
        pickerOptions.value.handleClear && pickerOptions.value.handleClear();
      }
    };
    const valueIsEmpty = (0,external_Vue_.computed)(() => {
      const { modelValue } = props;
      return !modelValue || (0,shared_esm_bundler/* isArray */.kJ)(modelValue) && !modelValue.filter(Boolean).length;
    });
    const onMouseDownInput = async (event) => {
      var _a;
      if (props.readonly || pickerDisabled.value)
        return;
      if (((_a = event.target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const onMouseEnter = () => {
      if (props.readonly || pickerDisabled.value)
        return;
      if (!valueIsEmpty.value && props.clearable) {
        showClose.value = true;
      }
    };
    const onMouseLeave = () => {
      showClose.value = false;
    };
    const onTouchStartInput = (event) => {
      var _a;
      if (((_a = event.touches[0].target) == null ? void 0 : _a.tagName) !== "INPUT" || refInput.value.includes(document.activeElement)) {
        pickerVisible.value = true;
      }
    };
    const isRangeInput = (0,external_Vue_.computed)(() => {
      return props.type.includes("range");
    });
    const pickerSize = useSize();
    const popperEl = (0,external_Vue_.computed)(() => {
      var _a, _b;
      return (_b = (_a = (0,external_Vue_.unref)(refPopper)) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
    });
    const actualInputRef = (0,external_Vue_.computed)(() => {
      var _a;
      if ((0,external_Vue_.unref)(isRangeInput)) {
        return (0,external_Vue_.unref)(inputRef);
      }
      return (_a = (0,external_Vue_.unref)(inputRef)) == null ? void 0 : _a.$el;
    });
    onClickOutside(actualInputRef, (e) => {
      const unrefedPopperEl = (0,external_Vue_.unref)(popperEl);
      const inputEl = (0,external_Vue_.unref)(actualInputRef);
      if (unrefedPopperEl && (e.target === unrefedPopperEl || e.composedPath().includes(unrefedPopperEl)) || e.target === inputEl || e.composedPath().includes(inputEl))
        return;
      pickerVisible.value = false;
    });
    const userInput = (0,external_Vue_.ref)(null);
    const handleChange = () => {
      if (userInput.value) {
        const value = parseUserInputToDayjs(displayValue.value);
        if (value) {
          if (isValidValue(value)) {
            emitInput((0,shared_esm_bundler/* isArray */.kJ)(value) ? value.map((_) => _.toDate()) : value.toDate());
            userInput.value = null;
          }
        }
      }
      if (userInput.value === "") {
        emitInput(null);
        emitChange(null);
        userInput.value = null;
      }
    };
    const parseUserInputToDayjs = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.parseUserInput(value);
    };
    const formatDayjsToString = (value) => {
      if (!value)
        return null;
      return pickerOptions.value.formatToString(value);
    };
    const isValidValue = (value) => {
      return pickerOptions.value.isValidValue(value);
    };
    const handleKeydownInput = async (event) => {
      if (props.readonly || pickerDisabled.value)
        return;
      const { code } = event;
      emitKeydown(event);
      if (code === EVENT_CODE.esc) {
        if (pickerVisible.value === true) {
          pickerVisible.value = false;
          event.preventDefault();
          event.stopPropagation();
        }
        return;
      }
      if (code === EVENT_CODE.down) {
        if (pickerOptions.value.handleFocusPicker) {
          event.preventDefault();
          event.stopPropagation();
        }
        if (pickerVisible.value === false) {
          pickerVisible.value = true;
          await (0,external_Vue_.nextTick)();
        }
        if (pickerOptions.value.handleFocusPicker) {
          pickerOptions.value.handleFocusPicker();
          return;
        }
      }
      if (code === EVENT_CODE.tab) {
        hasJustTabExitedInput = true;
        return;
      }
      if (code === EVENT_CODE.enter || code === EVENT_CODE.numpadEnter) {
        if (userInput.value === null || userInput.value === "" || isValidValue(parseUserInputToDayjs(displayValue.value))) {
          handleChange();
          pickerVisible.value = false;
        }
        event.stopPropagation();
        return;
      }
      if (userInput.value) {
        event.stopPropagation();
        return;
      }
      if (pickerOptions.value.handleKeydownInput) {
        pickerOptions.value.handleKeydownInput(event);
      }
    };
    const onUserInput = (e) => {
      userInput.value = e;
      if (!pickerVisible.value) {
        pickerVisible.value = true;
      }
    };
    const handleStartInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [target.value, userInput.value[1]];
      } else {
        userInput.value = [target.value, null];
      }
    };
    const handleEndInput = (event) => {
      const target = event.target;
      if (userInput.value) {
        userInput.value = [userInput.value[0], target.value];
      } else {
        userInput.value = [null, target.value];
      }
    };
    const handleStartChange = () => {
      var _a;
      const values = userInput.value;
      const value = parseUserInputToDayjs(values && values[0]);
      const parsedVal = (0,external_Vue_.unref)(parsedValue);
      if (value && value.isValid()) {
        userInput.value = [
          formatDayjsToString(value),
          ((_a = displayValue.value) == null ? void 0 : _a[1]) || null
        ];
        const newValue = [value, parsedVal && (parsedVal[1] || null)];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const handleEndChange = () => {
      var _a;
      const values = (0,external_Vue_.unref)(userInput);
      const value = parseUserInputToDayjs(values && values[1]);
      const parsedVal = (0,external_Vue_.unref)(parsedValue);
      if (value && value.isValid()) {
        userInput.value = [
          ((_a = (0,external_Vue_.unref)(displayValue)) == null ? void 0 : _a[0]) || null,
          formatDayjsToString(value)
        ];
        const newValue = [parsedVal && parsedVal[0], value];
        if (isValidValue(newValue)) {
          emitInput(newValue);
          userInput.value = null;
        }
      }
    };
    const pickerOptions = (0,external_Vue_.ref)({});
    const onSetPickerOption = (e) => {
      pickerOptions.value[e[0]] = e[1];
      pickerOptions.value.panelReady = true;
    };
    const onCalendarChange = (e) => {
      emit("calendar-change", e);
    };
    const onPanelChange = (value, mode, view) => {
      emit("panel-change", value, mode, view);
    };
    (0,external_Vue_.provide)("EP_PICKER_BASE", {
      props
    });
    expose({
      focus,
      handleFocusInput,
      handleBlurInput,
      onPick
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElTooltip), (0,external_Vue_.mergeProps)({
        ref_key: "refPopper",
        ref: refPopper,
        visible: pickerVisible.value,
        effect: "light",
        pure: "",
        trigger: "click"
      }, _ctx.$attrs, {
        role: "dialog",
        teleported: "",
        transition: `${(0,external_Vue_.unref)(nsDate).namespace.value}-zoom-in-top`,
        "popper-class": [`${(0,external_Vue_.unref)(nsDate).namespace.value}-picker__popper`, _ctx.popperClass],
        "popper-options": (0,external_Vue_.unref)(elPopperOptions),
        "fallback-placements": ["bottom", "top", "right", "left"],
        "gpu-acceleration": false,
        "stop-popper-mouse-event": false,
        "hide-after": 0,
        persistent: "",
        onBeforeShow,
        onShow,
        onHide
      }), {
        default: (0,external_Vue_.withCtx)(() => [
          !(0,external_Vue_.unref)(isRangeInput) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElInput), {
            key: 0,
            id: _ctx.id,
            ref_key: "inputRef",
            ref: inputRef,
            "container-role": "combobox",
            "model-value": (0,external_Vue_.unref)(displayValue),
            name: _ctx.name,
            size: (0,external_Vue_.unref)(pickerSize),
            disabled: (0,external_Vue_.unref)(pickerDisabled),
            placeholder: _ctx.placeholder,
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsDate).b("editor"), (0,external_Vue_.unref)(nsDate).bm("editor", _ctx.type), _ctx.$attrs.class]),
            style: (0,external_Vue_.normalizeStyle)(_ctx.$attrs.style),
            readonly: !_ctx.editable || _ctx.readonly || (0,external_Vue_.unref)(isDatesPicker) || _ctx.type === "week",
            label: _ctx.label,
            tabindex: _ctx.tabindex,
            "validate-event": _ctx.validateEvent,
            onInput: onUserInput,
            onFocus: handleFocusInput,
            onBlur: handleBlurInput,
            onKeydown: handleKeydownInput,
            onChange: handleChange,
            onMousedown: onMouseDownInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onClick: _cache[0] || (_cache[0] = (0,external_Vue_.withModifiers)(() => {
            }, ["stop"]))
          }, {
            prefix: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.unref)(triggerIcon) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                key: 0,
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsInput).e("icon")),
                onMousedown: (0,external_Vue_.withModifiers)(onMouseDownInput, ["prevent"]),
                onTouchstart: onTouchStartInput
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)((0,external_Vue_.unref)(triggerIcon))))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ]),
            suffix: (0,external_Vue_.withCtx)(() => [
              showClose.value && _ctx.clearIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
                key: 0,
                class: (0,external_Vue_.normalizeClass)(`${(0,external_Vue_.unref)(nsInput).e("icon")} clear-icon`),
                onClick: (0,external_Vue_.withModifiers)(onClearIconClick, ["stop"])
              }, {
                default: (0,external_Vue_.withCtx)(() => [
                  ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onClick"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
            ]),
            _: 1
          }, 8, ["id", "model-value", "name", "size", "disabled", "placeholder", "class", "style", "readonly", "label", "tabindex", "validate-event", "onKeydown"])) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
            key: 1,
            ref_key: "inputRef",
            ref: inputRef,
            class: (0,external_Vue_.normalizeClass)([
              (0,external_Vue_.unref)(nsDate).b("editor"),
              (0,external_Vue_.unref)(nsDate).bm("editor", _ctx.type),
              (0,external_Vue_.unref)(nsInput).e("wrapper"),
              (0,external_Vue_.unref)(nsDate).is("disabled", (0,external_Vue_.unref)(pickerDisabled)),
              (0,external_Vue_.unref)(nsDate).is("active", pickerVisible.value),
              (0,external_Vue_.unref)(nsRange).b("editor"),
              (0,external_Vue_.unref)(pickerSize) ? (0,external_Vue_.unref)(nsRange).bm("editor", (0,external_Vue_.unref)(pickerSize)) : "",
              _ctx.$attrs.class
            ]),
            style: (0,external_Vue_.normalizeStyle)(_ctx.$attrs.style),
            onClick: handleFocusInput,
            onMouseenter: onMouseEnter,
            onMouseleave: onMouseLeave,
            onTouchstart: onTouchStartInput,
            onKeydown: handleKeydownInput
          }, [
            (0,external_Vue_.unref)(triggerIcon) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              key: 0,
              class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsInput).e("icon"), (0,external_Vue_.unref)(nsRange).e("icon")]),
              onMousedown: (0,external_Vue_.withModifiers)(onMouseDownInput, ["prevent"]),
              onTouchstart: onTouchStartInput
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)((0,external_Vue_.unref)(triggerIcon))))
              ]),
              _: 1
            }, 8, ["class", "onMousedown"])) : (0,external_Vue_.createCommentVNode)("v-if", true),
            (0,external_Vue_.createElementVNode)("input", {
              id: _ctx.id && _ctx.id[0],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[0],
              placeholder: _ctx.startPlaceholder,
              value: (0,external_Vue_.unref)(displayValue) && (0,external_Vue_.unref)(displayValue)[0],
              disabled: (0,external_Vue_.unref)(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onInput: handleStartInput,
              onChange: handleStartChange,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput
            }, null, 42, picker_hoisted_1),
            (0,external_Vue_.renderSlot)(_ctx.$slots, "range-separator", {}, () => [
              (0,external_Vue_.createElementVNode)("span", {
                class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsRange).b("separator"))
              }, (0,external_Vue_.toDisplayString)(_ctx.rangeSeparator), 3)
            ]),
            (0,external_Vue_.createElementVNode)("input", {
              id: _ctx.id && _ctx.id[1],
              autocomplete: "off",
              name: _ctx.name && _ctx.name[1],
              placeholder: _ctx.endPlaceholder,
              value: (0,external_Vue_.unref)(displayValue) && (0,external_Vue_.unref)(displayValue)[1],
              disabled: (0,external_Vue_.unref)(pickerDisabled),
              readonly: !_ctx.editable || _ctx.readonly,
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsRange).b("input")),
              onMousedown: onMouseDownInput,
              onFocus: handleFocusInput,
              onBlur: handleBlurInput,
              onInput: handleEndInput,
              onChange: handleEndChange
            }, null, 42, picker_hoisted_2),
            _ctx.clearIcon ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElIcon), {
              key: 1,
              class: (0,external_Vue_.normalizeClass)([
                (0,external_Vue_.unref)(nsInput).e("icon"),
                (0,external_Vue_.unref)(nsRange).e("close-icon"),
                {
                  [(0,external_Vue_.unref)(nsRange).e("close-icon--hidden")]: !showClose.value
                }
              ]),
              onClick: onClearIconClick
            }, {
              default: (0,external_Vue_.withCtx)(() => [
                ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.resolveDynamicComponent)(_ctx.clearIcon)))
              ]),
              _: 1
            }, 8, ["class"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ], 38))
        ]),
        content: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default", {
            visible: pickerVisible.value,
            actualVisible: pickerActualVisible.value,
            parsedValue: (0,external_Vue_.unref)(parsedValue),
            format: _ctx.format,
            unlinkPanels: _ctx.unlinkPanels,
            type: _ctx.type,
            defaultValue: _ctx.defaultValue,
            onPick,
            onSelectRange: setSelectionRange,
            onSetPickerOption,
            onCalendarChange,
            onPanelChange,
            onKeydown: onKeydownPopperContent,
            onMousedown: _cache[1] || (_cache[1] = (0,external_Vue_.withModifiers)(() => {
            }, ["stop"]))
          })
        ]),
        _: 3
      }, 16, ["visible", "transition", "popper-class", "popper-options"]);
    };
  }
});
var CommonPicker = /* @__PURE__ */ _export_sfc(picker_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/common/picker.vue"]]);


//# sourceMappingURL=picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/src/date-picker.mjs





















dayjs_min.extend(localeData);
dayjs_min.extend(advancedFormat);
dayjs_min.extend(customParseFormat);
dayjs_min.extend(weekOfYear);
dayjs_min.extend(weekYear);
dayjs_min.extend(dayOfYear);
dayjs_min.extend(isSameOrAfter);
dayjs_min.extend(isSameOrBefore);
var DatePicker = (0,external_Vue_.defineComponent)({
  name: "ElDatePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    ...datePickerProps
  },
  emits: ["update:modelValue"],
  setup(props, {
    expose,
    emit,
    slots
  }) {
    const ns = useNamespace("picker-panel");
    (0,external_Vue_.provide)("ElPopperOptions", (0,external_Vue_.reactive)((0,external_Vue_.toRef)(props, "popperOptions")));
    (0,external_Vue_.provide)(ROOT_PICKER_INJECTION_KEY, {
      slots,
      pickerNs: ns
    });
    const commonPicker = (0,external_Vue_.ref)();
    const refProps = {
      focus: (focusStartInput = true) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.focus(focusStartInput);
      }
    };
    expose(refProps);
    const onModelValueUpdated = (val) => {
      emit("update:modelValue", val);
    };
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_DATEPICKER[props.type] || DEFAULT_FORMATS_DATE;
      const Component = getPanel(props.type);
      return (0,external_Vue_.createVNode)(CommonPicker, (0,external_Vue_.mergeProps)(props, {
        "format": format,
        "type": props.type,
        "ref": commonPicker,
        "onUpdate:modelValue": onModelValueUpdated
      }), {
        default: (scopedProps) => (0,external_Vue_.createVNode)(Component, scopedProps, null),
        "range-separator": slots["range-separator"]
      });
    };
  }
});


//# sourceMappingURL=date-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/index.mjs


const _DatePicker = DatePicker;
_DatePicker.install = (app) => {
  app.component(_DatePicker.name, _DatePicker);
};
const ElDatePicker = _DatePicker;


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isFlattenable.js




/** Built-in value references. */
var spreadableSymbol = _Symbol/* default */.Z ? _Symbol/* default.isConcatSpreadable */.Z.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return (0,isArray/* default */.Z)(value) || lodash_es_isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/* harmony default export */ const _isFlattenable = (isFlattenable);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFlatten.js



/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = _isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        _arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/* harmony default export */ const _baseFlatten = (baseFlatten);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity_identity(value) {
  return value;
}

/* harmony default export */ const lodash_es_identity = (identity_identity);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ const _apply = (apply);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ const _overRest = (overRest);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ const lodash_es_constant = (constant);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__(5402);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty/* default */.Z ? lodash_es_identity : function(func, string) {
  return (0,_defineProperty/* default */.Z)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ const _baseSetToString = (baseSetToString);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ const _shortOut = (shortOut);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ const _setToString = (setToString);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ const _baseRest = (baseRest);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseFindIndex.js
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const _baseFindIndex = (baseFindIndex);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ const _baseIsNaN = (baseIsNaN);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ const _strictIndexOf = (strictIndexOf);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ const _baseIndexOf = (baseIndexOf);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

/* harmony default export */ const _arrayIncludes = (arrayIncludes);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ const _arrayIncludesWith = (arrayIncludesWith);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/noop.js
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop_noop() {
  // No operation performed.
}

/* harmony default export */ const lodash_es_noop = (noop_noop);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set && (1 / _setToArray(new _Set([,-0]))[1]) == INFINITY) ? lodash_es_noop : function(values) {
  return new _Set(values);
};

/* harmony default export */ const _createSet = (createSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var _baseUniq_LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= _baseUniq_LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return _setToArray(set);
    }
    isCommon = false;
    includes = _cacheHas;
    seen = new _SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ const _baseUniq = (baseUniq);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,isObjectLike/* default */.Z)(value) && lodash_es_isArrayLike(value);
}

/* harmony default export */ const lodash_es_isArrayLikeObject = (isArrayLikeObject);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/union.js





/**
 * Creates an array of unique values, in order, from all given arrays using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2]);
 * // => [2, 1]
 */
var union = _baseRest(function(arrays) {
  return _baseUniq(_baseFlatten(arrays, 1, lodash_es_isArrayLikeObject, true));
});

/* harmony default export */ const lodash_es_union = (union);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/props/panel-time-range.mjs




const panelTimeRangeProps = buildProps({
  ...timePanelSharedProps,
  parsedValue: {
    type: definePropType(Array)
  }
});


//# sourceMappingURL=panel-time-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/time-picker-com/panel-time-range.mjs
















const panel_time_range_hoisted_1 = ["disabled"];
const panel_time_range_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "panel-time-range",
  props: panelTimeRangeProps,
  emits: ["pick", "select-range", "set-picker-option"],
  setup(__props, { emit }) {
    const props = __props;
    const makeSelectRange = (start, end) => {
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    };
    const { t, lang } = useLocale();
    const nsTime = useNamespace("time");
    const nsPicker = useNamespace("picker");
    const pickerBase = (0,external_Vue_.inject)("EP_PICKER_BASE");
    const {
      arrowControl,
      disabledHours,
      disabledMinutes,
      disabledSeconds,
      defaultValue
    } = pickerBase.props;
    const startTime = (0,external_Vue_.computed)(() => props.parsedValue[0]);
    const endTime = (0,external_Vue_.computed)(() => props.parsedValue[1]);
    const oldValue = useOldValue(props);
    const handleCancel = () => {
      emit("pick", oldValue.value, false);
    };
    const showSeconds = (0,external_Vue_.computed)(() => {
      return props.format.includes("ss");
    });
    const amPmMode = (0,external_Vue_.computed)(() => {
      if (props.format.includes("A"))
        return "A";
      if (props.format.includes("a"))
        return "a";
      return "";
    });
    const handleConfirm = (visible = false) => {
      emit("pick", [startTime.value, endTime.value], visible);
    };
    const handleMinChange = (date) => {
      handleChange(date.millisecond(0), endTime.value);
    };
    const handleMaxChange = (date) => {
      handleChange(startTime.value, date.millisecond(0));
    };
    const isValidValue = (_date) => {
      const parsedDate = _date.map((_) => dayjs_min(_).locale(lang.value));
      const result = getRangeAvailableTime(parsedDate);
      return parsedDate[0].isSame(result[0]) && parsedDate[1].isSame(result[1]);
    };
    const handleChange = (start, end) => {
      emit("pick", [start, end], true);
    };
    const btnConfirmDisabled = (0,external_Vue_.computed)(() => {
      return startTime.value > endTime.value;
    });
    const selectionRange = (0,external_Vue_.ref)([0, 2]);
    const setMinSelectionRange = (start, end) => {
      emit("select-range", start, end, "min");
      selectionRange.value = [start, end];
    };
    const offset = (0,external_Vue_.computed)(() => showSeconds.value ? 11 : 8);
    const setMaxSelectionRange = (start, end) => {
      emit("select-range", start, end, "max");
      const _offset = (0,external_Vue_.unref)(offset);
      selectionRange.value = [start + _offset, end + _offset];
    };
    const changeSelectionRange = (step) => {
      const list = showSeconds.value ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
      const mapping = ["hours", "minutes"].concat(showSeconds.value ? ["seconds"] : []);
      const index = list.indexOf(selectionRange.value[0]);
      const next = (index + step + list.length) % list.length;
      const half = list.length / 2;
      if (next < half) {
        timePickerOptions["start_emitSelectRange"](mapping[next]);
      } else {
        timePickerOptions["end_emitSelectRange"](mapping[next - half]);
      }
    };
    const handleKeydown = (event) => {
      const code = event.code;
      const { left, right, up, down } = EVENT_CODE;
      if ([left, right].includes(code)) {
        const step = code === left ? -1 : 1;
        changeSelectionRange(step);
        event.preventDefault();
        return;
      }
      if ([up, down].includes(code)) {
        const step = code === up ? -1 : 1;
        const role = selectionRange.value[0] < offset.value ? "start" : "end";
        timePickerOptions[`${role}_scrollDown`](step);
        event.preventDefault();
        return;
      }
    };
    const disabledHours_ = (role, compare) => {
      const defaultDisable = disabledHours ? disabledHours(role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      const nextDisable = isStart ? makeSelectRange(compareHour + 1, 23) : makeSelectRange(0, compareHour - 1);
      return lodash_es_union(defaultDisable, nextDisable);
    };
    const disabledMinutes_ = (hour, role, compare) => {
      const defaultDisable = disabledMinutes ? disabledMinutes(hour, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      if (hour !== compareHour) {
        return defaultDisable;
      }
      const compareMinute = compareDate.minute();
      const nextDisable = isStart ? makeSelectRange(compareMinute + 1, 59) : makeSelectRange(0, compareMinute - 1);
      return lodash_es_union(defaultDisable, nextDisable);
    };
    const disabledSeconds_ = (hour, minute, role, compare) => {
      const defaultDisable = disabledSeconds ? disabledSeconds(hour, minute, role) : [];
      const isStart = role === "start";
      const compareDate = compare || (isStart ? endTime.value : startTime.value);
      const compareHour = compareDate.hour();
      const compareMinute = compareDate.minute();
      if (hour !== compareHour || minute !== compareMinute) {
        return defaultDisable;
      }
      const compareSecond = compareDate.second();
      const nextDisable = isStart ? makeSelectRange(compareSecond + 1, 59) : makeSelectRange(0, compareSecond - 1);
      return lodash_es_union(defaultDisable, nextDisable);
    };
    const getRangeAvailableTime = ([start, end]) => {
      return [
        getAvailableTime(start, "start", true, end),
        getAvailableTime(end, "end", false, start)
      ];
    };
    const { getAvailableHours, getAvailableMinutes, getAvailableSeconds } = buildAvailableTimeSlotGetter(disabledHours_, disabledMinutes_, disabledSeconds_);
    const {
      timePickerOptions,
      getAvailableTime,
      onSetOption
    } = useTimePanel({
      getAvailableHours,
      getAvailableMinutes,
      getAvailableSeconds
    });
    const parseUserInput = (days) => {
      if (!days)
        return null;
      if ((0,shared_esm_bundler/* isArray */.kJ)(days)) {
        return days.map((d) => dayjs_min(d, props.format).locale(lang.value));
      }
      return dayjs_min(days, props.format).locale(lang.value);
    };
    const formatToString = (days) => {
      if (!days)
        return null;
      if ((0,shared_esm_bundler/* isArray */.kJ)(days)) {
        return days.map((d) => d.format(props.format));
      }
      return days.format(props.format);
    };
    const getDefaultValue = () => {
      if ((0,shared_esm_bundler/* isArray */.kJ)(defaultValue)) {
        return defaultValue.map((d) => dayjs_min(d).locale(lang.value));
      }
      const defaultDay = dayjs_min(defaultValue).locale(lang.value);
      return [defaultDay, defaultDay.add(60, "m")];
    };
    emit("set-picker-option", ["formatToString", formatToString]);
    emit("set-picker-option", ["parseUserInput", parseUserInput]);
    emit("set-picker-option", ["isValidValue", isValidValue]);
    emit("set-picker-option", ["handleKeydownInput", handleKeydown]);
    emit("set-picker-option", ["getDefaultValue", getDefaultValue]);
    emit("set-picker-option", ["getRangeAvailableTime", getRangeAvailableTime]);
    return (_ctx, _cache) => {
      return _ctx.actualVisible ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        key: 0,
        class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsTime).b("range-picker"), (0,external_Vue_.unref)(nsPicker).b("panel")])
      }, [
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("range-picker", "content"))
        }, [
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("range-picker", "cell"))
          }, [
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("range-picker", "header"))
            }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.startTime")), 3),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([
                (0,external_Vue_.unref)(nsTime).be("range-picker", "body"),
                (0,external_Vue_.unref)(nsTime).be("panel", "content"),
                (0,external_Vue_.unref)(nsTime).is("arrow", (0,external_Vue_.unref)(arrowControl)),
                { "has-seconds": (0,external_Vue_.unref)(showSeconds) }
              ])
            }, [
              (0,external_Vue_.createVNode)(TimeSpinner, {
                ref: "minSpinner",
                role: "start",
                "show-seconds": (0,external_Vue_.unref)(showSeconds),
                "am-pm-mode": (0,external_Vue_.unref)(amPmMode),
                "arrow-control": (0,external_Vue_.unref)(arrowControl),
                "spinner-date": (0,external_Vue_.unref)(startTime),
                "disabled-hours": disabledHours_,
                "disabled-minutes": disabledMinutes_,
                "disabled-seconds": disabledSeconds_,
                onChange: handleMinChange,
                onSetOption: (0,external_Vue_.unref)(onSetOption),
                onSelectRange: setMinSelectionRange
              }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
            ], 2)
          ], 2),
          (0,external_Vue_.createElementVNode)("div", {
            class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("range-picker", "cell"))
          }, [
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("range-picker", "header"))
            }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.endTime")), 3),
            (0,external_Vue_.createElementVNode)("div", {
              class: (0,external_Vue_.normalizeClass)([
                (0,external_Vue_.unref)(nsTime).be("range-picker", "body"),
                (0,external_Vue_.unref)(nsTime).be("panel", "content"),
                (0,external_Vue_.unref)(nsTime).is("arrow", (0,external_Vue_.unref)(arrowControl)),
                { "has-seconds": (0,external_Vue_.unref)(showSeconds) }
              ])
            }, [
              (0,external_Vue_.createVNode)(TimeSpinner, {
                ref: "maxSpinner",
                role: "end",
                "show-seconds": (0,external_Vue_.unref)(showSeconds),
                "am-pm-mode": (0,external_Vue_.unref)(amPmMode),
                "arrow-control": (0,external_Vue_.unref)(arrowControl),
                "spinner-date": (0,external_Vue_.unref)(endTime),
                "disabled-hours": disabledHours_,
                "disabled-minutes": disabledMinutes_,
                "disabled-seconds": disabledSeconds_,
                onChange: handleMaxChange,
                onSetOption: (0,external_Vue_.unref)(onSetOption),
                onSelectRange: setMaxSelectionRange
              }, null, 8, ["show-seconds", "am-pm-mode", "arrow-control", "spinner-date", "onSetOption"])
            ], 2)
          ], 2)
        ], 2),
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(nsTime).be("panel", "footer"))
        }, [
          (0,external_Vue_.createElementVNode)("button", {
            type: "button",
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsTime).be("panel", "btn"), "cancel"]),
            onClick: _cache[0] || (_cache[0] = ($event) => handleCancel())
          }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.cancel")), 3),
          (0,external_Vue_.createElementVNode)("button", {
            type: "button",
            class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(nsTime).be("panel", "btn"), "confirm"]),
            disabled: (0,external_Vue_.unref)(btnConfirmDisabled),
            onClick: _cache[1] || (_cache[1] = ($event) => handleConfirm())
          }, (0,external_Vue_.toDisplayString)((0,external_Vue_.unref)(t)("el.datepicker.confirm")), 11, panel_time_range_hoisted_1)
        ], 2)
      ], 2)) : (0,external_Vue_.createCommentVNode)("v-if", true);
    };
  }
});
var TimeRangePanel = /* @__PURE__ */ _export_sfc(panel_time_range_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/time-picker/src/time-picker-com/panel-time-range.vue"]]);


//# sourceMappingURL=panel-time-range.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/src/time-picker.mjs









dayjs_min.extend(customParseFormat);
var TimePicker = (0,external_Vue_.defineComponent)({
  name: "ElTimePicker",
  install: null,
  props: {
    ...timePickerDefaultProps,
    isRange: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const commonPicker = (0,external_Vue_.ref)();
    const [type, Panel] = props.isRange ? ["timerange", TimeRangePanel] : ["time", TimePickPanel];
    const modelUpdater = (value) => ctx.emit("update:modelValue", value);
    (0,external_Vue_.provide)("ElPopperOptions", props.popperOptions);
    ctx.expose({
      focus: (e) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleFocusInput(e);
      },
      blur: (e) => {
        var _a;
        (_a = commonPicker.value) == null ? void 0 : _a.handleBlurInput(e);
      }
    });
    return () => {
      var _a;
      const format = (_a = props.format) != null ? _a : DEFAULT_FORMATS_TIME;
      return (0,external_Vue_.createVNode)(CommonPicker, (0,external_Vue_.mergeProps)(props, {
        "ref": commonPicker,
        "type": type,
        "format": format,
        "onUpdate:modelValue": modelUpdater
      }), {
        default: (props2) => (0,external_Vue_.createVNode)(Panel, props2, null)
      });
    };
  }
});


//# sourceMappingURL=time-picker.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/index.mjs







const _TimePicker = TimePicker;
_TimePicker.install = (app) => {
  app.component(_TimePicker.name, _TimePicker);
};
const ElTimePicker = _TimePicker;


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input-number/src/input-number.mjs









const inputNumberProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  step: {
    type: Number,
    default: 1
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY
  },
  modelValue: Number,
  disabled: Boolean,
  size: useSizeProp,
  controls: {
    type: Boolean,
    default: true
  },
  controlsPosition: {
    type: String,
    default: "",
    values: ["", "right"]
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (val) => val === null || shared_isNumber(val) || ["min", "max"].includes(val),
    default: null
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (val) => val >= 0 && val === Number.parseInt(`${val}`, 10)
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const inputNumberEmits = {
  [CHANGE_EVENT]: (prev, cur) => prev !== cur,
  blur: (e) => e instanceof FocusEvent,
  focus: (e) => e instanceof FocusEvent,
  [INPUT_EVENT]: (val) => shared_isNumber(val) || (0,lodash_es_isNil/* default */.Z)(val),
  [UPDATE_MODEL_EVENT]: (val) => shared_isNumber(val) || (0,lodash_es_isNil/* default */.Z)(val)
};


//# sourceMappingURL=input-number.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input-number/src/input-number2.mjs




















const input_number2_hoisted_1 = ["aria-label", "onKeydown"];
const input_number2_hoisted_2 = ["aria-label", "onKeydown"];
const input_number2_default_ = {
  name: "ElInputNumber"
};
const input_number2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...input_number2_default_,
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("input-number");
    const input = (0,external_Vue_.ref)();
    const data = (0,external_Vue_.reactive)({
      currentValue: props.modelValue,
      userInput: null
    });
    const { formItem } = useFormItem();
    const minDisabled = (0,external_Vue_.computed)(() => shared_isNumber(props.modelValue) && ensurePrecision(props.modelValue, -1) < props.min);
    const maxDisabled = (0,external_Vue_.computed)(() => shared_isNumber(props.modelValue) && ensurePrecision(props.modelValue) > props.max);
    const numPrecision = (0,external_Vue_.computed)(() => {
      const stepPrecision = getPrecision(props.step);
      if (!isUndefined(props.precision)) {
        if (stepPrecision > props.precision) {
          error_debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = (0,external_Vue_.computed)(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = useSize();
    const inputNumberDisabled = useDisabled();
    const displayValue = (0,external_Vue_.computed)(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if ((0,lodash_es_isNil/* default */.Z)(currentValue))
        return "";
      if (shared_isNumber(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (!isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (isUndefined(pre))
        pre = numPrecision.value;
      if (pre === 0)
        return Math.round(num);
      let snum = String(num);
      const pointPos = snum.indexOf(".");
      if (pointPos === -1)
        return num;
      const nums = snum.replace(".", "").split("");
      const datum = nums[pointPos + pre];
      if (!datum)
        return num;
      const length = snum.length;
      if (snum.charAt(length - 1) === "5") {
        snum = `${snum.slice(0, Math.max(0, length - 1))}6`;
      }
      return Number.parseFloat(Number(snum).toFixed(pre));
    };
    const getPrecision = (value) => {
      if ((0,lodash_es_isNil/* default */.Z)(value))
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const ensurePrecision = (val, coefficient = 1) => {
      if (!shared_isNumber(val))
        return data.currentValue;
      return toPrecision(val + props.step * coefficient);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = ensurePrecision(value, -1);
      setCurrentValue(newVal);
    };
    const verifyValue = (value, update) => {
      const { max, min, step, precision, stepStrictly, valueOnClear } = props;
      let newVal = Number(value);
      if ((0,lodash_es_isNil/* default */.Z)(value) || Number.isNaN(newVal)) {
        return null;
      }
      if (value === "") {
        if (valueOnClear === null) {
          return null;
        }
        newVal = (0,shared_esm_bundler/* isString */.HD)(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear;
      }
      if (stepStrictly) {
        newVal = toPrecision(Math.round(newVal / step) * step, precision);
      }
      if (!isUndefined(precision)) {
        newVal = toPrecision(newVal, precision);
      }
      if (newVal > max || newVal < min) {
        newVal = newVal > max ? max : min;
        update && emit("update:modelValue", newVal);
      }
      return newVal;
    };
    const setCurrentValue = (value) => {
      var _a;
      const oldVal = data.currentValue;
      const newVal = verifyValue(value);
      if (oldVal === newVal)
        return;
      data.userInput = null;
      emit("update:modelValue", newVal);
      emit("input", newVal);
      emit("change", newVal, oldVal);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "change").catch((err) => error_debugWarn(err));
      }
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      return data.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = value !== "" ? Number(value) : "";
      if (shared_isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    const handleFocus = (event) => {
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => error_debugWarn(err));
      }
    };
    (0,external_Vue_.watch)(() => props.modelValue, (value) => {
      data.currentValue = verifyValue(value, true);
      data.userInput = null;
    }, { immediate: true });
    (0,external_Vue_.onMounted)(() => {
      var _a;
      const { min, max, modelValue } = props;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput.setAttribute("role", "spinbutton");
      if (Number.isFinite(max)) {
        innerInput.setAttribute("aria-valuemax", String(max));
      } else {
        innerInput.removeAttribute("aria-valuemax");
      }
      if (Number.isFinite(min)) {
        innerInput.setAttribute("aria-valuemin", String(min));
      } else {
        innerInput.removeAttribute("aria-valuemin");
      }
      innerInput.setAttribute("aria-valuenow", String(data.currentValue));
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!shared_isNumber(modelValue) && modelValue != null) {
        let val = Number(modelValue);
        if (Number.isNaN(val)) {
          val = null;
        }
        emit("update:modelValue", val);
      }
    });
    (0,external_Vue_.onUpdated)(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput == null ? void 0 : innerInput.setAttribute("aria-valuenow", `${data.currentValue}`);
    });
    expose({
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        class: (0,external_Vue_.normalizeClass)([
          (0,external_Vue_.unref)(ns).b(),
          (0,external_Vue_.unref)(ns).m((0,external_Vue_.unref)(inputNumberSize)),
          (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(inputNumberDisabled)),
          (0,external_Vue_.unref)(ns).is("without-controls", !_ctx.controls),
          (0,external_Vue_.unref)(ns).is("controls-right", (0,external_Vue_.unref)(controlsAtRight))
        ]),
        onDragstart: _cache[0] || (_cache[0] = (0,external_Vue_.withModifiers)(() => {
        }, ["prevent"]))
      }, [
        _ctx.controls ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 0,
          role: "button",
          "aria-label": (0,external_Vue_.unref)(t)("el.inputNumber.decrease"),
          class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).e("decrease"), (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(minDisabled))]),
          onKeydown: (0,external_Vue_.withKeys)(decrease, ["enter"])
        }, [
          (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.unref)(controlsAtRight) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(dist/* ArrowDown */.K5e), { key: 0 })) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(dist/* Minus */.WF_), { key: 1 }))
            ]),
            _: 1
          })
        ], 42, input_number2_hoisted_1)), [
          [(0,external_Vue_.unref)(RepeatClick), decrease]
        ]) : (0,external_Vue_.createCommentVNode)("v-if", true),
        _ctx.controls ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
          key: 1,
          role: "button",
          "aria-label": (0,external_Vue_.unref)(t)("el.inputNumber.increase"),
          class: (0,external_Vue_.normalizeClass)([(0,external_Vue_.unref)(ns).e("increase"), (0,external_Vue_.unref)(ns).is("disabled", (0,external_Vue_.unref)(maxDisabled))]),
          onKeydown: (0,external_Vue_.withKeys)(increase, ["enter"])
        }, [
          (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElIcon), null, {
            default: (0,external_Vue_.withCtx)(() => [
              (0,external_Vue_.unref)(controlsAtRight) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(dist/* ArrowUp */.a2Z), { key: 0 })) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(dist/* Plus */.v37), { key: 1 }))
            ]),
            _: 1
          })
        ], 42, input_number2_hoisted_2)), [
          [(0,external_Vue_.unref)(RepeatClick), increase]
        ]) : (0,external_Vue_.createCommentVNode)("v-if", true),
        (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), {
          id: _ctx.id,
          ref_key: "input",
          ref: input,
          type: "number",
          step: _ctx.step,
          "model-value": (0,external_Vue_.unref)(displayValue),
          placeholder: _ctx.placeholder,
          disabled: (0,external_Vue_.unref)(inputNumberDisabled),
          size: (0,external_Vue_.unref)(inputNumberSize),
          max: _ctx.max,
          min: _ctx.min,
          name: _ctx.name,
          label: _ctx.label,
          "validate-event": false,
          onKeydown: [
            (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(increase, ["prevent"]), ["up"]),
            (0,external_Vue_.withKeys)((0,external_Vue_.withModifiers)(decrease, ["prevent"]), ["down"])
          ],
          onBlur: handleBlur,
          onFocus: handleFocus,
          onInput: handleInput,
          onChange: handleInputChange
        }, null, 8, ["id", "step", "model-value", "placeholder", "disabled", "size", "max", "min", "name", "label", "onKeydown"])
      ], 34);
    };
  }
});
var InputNumber = /* @__PURE__ */ _export_sfc(input_number2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]]);


//# sourceMappingURL=input-number2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input-number/index.mjs





const ElInputNumber = withInstall(InputNumber);


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../vue-components/dist/formlist/formlist.js
const loFormProps = {
  list: {
    type: Array,
    default: () => [],
    validator(val) {
      return !val.some((i) => {
        i.type && ["select", "checkbox-group", "radio-group"].includes(i.type) && !i.options;
      });
    }
  },
  inline: {
    type: Boolean,
    default: true
  },
  rowCount: {
    type: Number,
    default: 4
  },
  labelWidth: {
    type: String,
    default: "150px"
  }
};
var FORM_TYPE = /* @__PURE__ */ ((FORM_TYPE2) => {
  FORM_TYPE2["INPUT"] = "input";
  FORM_TYPE2["SELECT"] = "select";
  FORM_TYPE2["TEXTAREA"] = "textarea";
  FORM_TYPE2["CHECKBOX_GROUP"] = "checkbox-group";
  FORM_TYPE2["RADIO_GROUP"] = "radio-group";
  return FORM_TYPE2;
})(FORM_TYPE || {});
const FORM_CHANGE_EVENT = "formChange";
const fromNormalList = (/* unused pure expression or super */ null && (["input", "select", "textarea", "number", "time", "checkbox", "checkbox-group", "switch", "radio-group"]));
function defaultValue(type) {
  var _a;
  if (!type)
    return "";
  const typeConfig = {
    number: 0,
    "checkbox-group": [],
    switch: false
  };
  return (_a = typeConfig[type]) != null ? _a : "";
}



;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/base.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/base/style/css.mjs

//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-input.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-switch.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/switch/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-radio.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-radio-button.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio-button/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-radio-group.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/radio-group/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-form.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-form-item.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/form-item/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-checkbox.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-checkbox-group.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/checkbox-group/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-tag.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/tag/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-option.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/option/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-option-group.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/option-group/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-scrollbar.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/scrollbar/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-popper.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/popper/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-select.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/select/style/css.mjs








//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-date-picker.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-button.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/button/style/css.mjs


//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/date-picker/style/css.mjs






//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-time-picker.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/time-picker/style/css.mjs





//# sourceMappingURL=css.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/theme-chalk/el-input-number.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.12_vue@3.2.37/node_modules/element-plus/es/components/input-number/style/css.mjs



//# sourceMappingURL=css.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/lo-utils@1.2.21/node_modules/lo-utils/dist/lo-utils.esm.js
var lo_utils_esm = __webpack_require__(2672);
;// CONCATENATED MODULE: ../vue-components/dist/formlist/formlist2.js



















var formlist2_script = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  __name: "formlist",
  props: loFormProps,
  emits: {
    [FORM_CHANGE_EVENT]: (item, val, oldVal) => void 0
  },
  setup(__props, { expose, emit: emits }) {
    const props = __props;
    (0,external_Vue_.useCssVars)((_ctx) => ({
      "1a563534-rowCount": _ctx.rowCount,
      "1a563534-labelWidth": _ctx.labelWidth
    }));
    const isValidDatePickType = (val) => val !== void 0 && [...date_datePickTypes].includes(val);
    const FormRef = (0,external_Vue_.ref)();
    function optionsFmt(opt, field = "label") {
      if ((0,lo_utils_esm/* isJSType */.br)(opt, "object") && Reflect.has(opt, field))
        return opt[field];
      else
        return opt;
    }
    const form = (0,external_Vue_.reactive)({});
    (0,external_Vue_.onMounted)(() => {
      props.list.forEach((i) => {
        i.isRelative && bindEmitWatch(i);
      });
    });
    (0,external_Vue_.watch)(props.list, () => {
      const list = (0,external_Vue_.unref)(props.list);
      Reflect.ownKeys(form).forEach((i) => {
        if (list.findIndex(({ field }) => i == field) == -1)
          Reflect.deleteProperty(form, i);
      });
      list.forEach((i) => {
        var _a;
        if (!Reflect.get(form, i.field)) {
          Reflect.set(form, i.field, (_a = i.value) != null ? _a : defaultValue(i.type));
          i.isRelative && bindEmitWatch(i);
        }
      });
    });
    const watchList = {};
    function bindEmitWatch(item) {
      if (watchList[item.field] && typeof watchList[item.field] === "function") {
        watchList[item.field]();
      }
      const watchFn = item.throttle ? (0,lo_utils_esm/* throttle */.P2)((val, oldVal) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal);
      }, item.throttle) : (val, oldVal) => {
        emits(FORM_CHANGE_EVENT, item, val, oldVal);
      };
      const stop = (0,external_Vue_.watch)(() => form[item.field], watchFn);
      watchList[item.field] = stop;
    }
    function validate() {
      return new Promise((rs, rj) => {
        var _a;
        (_a = FormRef.value) == null ? void 0 : _a.validate((valid, obj) => {
          if (valid)
            rs(void 0);
          else
            rj(obj);
        });
      });
    }
    const setFormValue = (field, val) => {
      form[field] = val;
    };
    function resetFields(fields) {
      var _a;
      (_a = FormRef.value) == null ? void 0 : _a.resetFields(fields);
    }
    expose({
      form,
      validate,
      setFormValue,
      resetFields
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElForm), (0,external_Vue_.mergeProps)({
        ref_key: "FormRef",
        ref: FormRef,
        class: "lo-form",
        model: form
      }, _ctx.$attrs, {
        inline: _ctx.inline,
        "label-width": _ctx.labelWidth
      }), {
        default: (0,external_Vue_.withCtx)(() => [
          ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(_ctx.list, (item) => {
            return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElFormItem), {
              key: item.field,
              label: item.label + ":",
              prop: item.field,
              required: item.required,
              rules: item.rules
            }, (0,external_Vue_.createSlots)({
              default: (0,external_Vue_.withCtx)(() => {
                var _a, _b, _c, _d, _e;
                return [
                  item.formSlot ? (0,external_Vue_.renderSlot)(_ctx.$slots, item.formSlot, {
                    key: 0,
                    item
                  }) : item.type === "select" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
                    (0,external_Vue_.createCommentVNode)(" select "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElSelect), (0,external_Vue_.mergeProps)({
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event
                    }, item), {
                      default: (0,external_Vue_.withCtx)(() => [
                        ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(item.options, (opt) => {
                          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElOption), {
                            value: optionsFmt(opt, "value"),
                            key: optionsFmt(opt, "value"),
                            label: optionsFmt(opt)
                          }, null, 8, ["value", "label"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])
                  ], 2112)) : item.type === "switch" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 2 }, [
                    (0,external_Vue_.createCommentVNode)(" switch "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElSwitch), {
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ], 2112)) : item.type === "checkbox-group" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 3 }, [
                    (0,external_Vue_.createCommentVNode)(" checkbox "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElCheckboxGroup), (0,external_Vue_.mergeProps)({
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event
                    }, item), {
                      default: (0,external_Vue_.withCtx)(() => [
                        ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, null, (0,external_Vue_.renderList)(item.options, (opt) => {
                          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElCheckbox), {
                            key: optionsFmt(opt),
                            label: optionsFmt(opt)
                          }, null, 8, ["label"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])
                  ], 2112)) : item.type === "radio-group" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 4 }, [
                    (0,external_Vue_.createCommentVNode)(" radio "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElRadioGroup), (0,external_Vue_.mergeProps)({
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event
                    }, item), {
                      default: (0,external_Vue_.withCtx)(() => [
                        item.button ? ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, (0,external_Vue_.renderList)(item.options, (opt) => {
                          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElRadioButton), {
                            key: optionsFmt(opt),
                            label: optionsFmt(opt)
                          }, null, 8, ["label"]);
                        }), 128)) : ((0,external_Vue_.openBlock)(true), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, (0,external_Vue_.renderList)(item.options, (opt) => {
                          return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(ElRadio), {
                            key: optionsFmt(opt),
                            label: optionsFmt(opt)
                          }, null, 8, ["label"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1040, ["modelValue", "onUpdate:modelValue"])
                  ], 2112)) : isValidDatePickType(item.type) ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 5 }, [
                    (0,external_Vue_.createCommentVNode)(" date "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElDatePicker), {
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event,
                      type: item.type,
                      "value-format": (_a = item.valueFormat) != null ? _a : "x",
                      "default-value": item.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "value-format", "default-value"])
                  ], 2112)) : item.type === "time" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 6 }, [
                    (0,external_Vue_.createCommentVNode)(" time "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElTimePicker), (0,external_Vue_.mergeProps)({
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event,
                      "is-range": (_b = item.isRange) != null ? _b : false,
                      "default-value": item.value,
                      format: "HH:mm"
                    }, item), null, 16, ["modelValue", "onUpdate:modelValue", "is-range", "default-value"])
                  ], 2112)) : item.type === "number" ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 7 }, [
                    (0,external_Vue_.createCommentVNode)(" input-number "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInputNumber), {
                      type: (_c = item.type) != null ? _c : "text",
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event,
                      controls: (_d = item.controls) != null ? _d : false
                    }, null, 8, ["type", "modelValue", "onUpdate:modelValue", "controls"])
                  ], 2112)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 8 }, [
                    (0,external_Vue_.createCommentVNode)(" input "),
                    (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElInput), (0,external_Vue_.mergeProps)({
                      type: (_e = item.type) != null ? _e : "text",
                      modelValue: form[item.field],
                      "onUpdate:modelValue": ($event) => form[item.field] = $event
                    }, item), null, 16, ["type", "modelValue", "onUpdate:modelValue"])
                  ], 2112))
                ];
              }),
              _: 2
            }, [
              item.labelSlot ? {
                name: "label",
                fn: (0,external_Vue_.withCtx)(() => [
                  (0,external_Vue_.renderSlot)(_ctx.$slots, item.labelSlot, { item })
                ])
              } : void 0
            ]), 1032, ["label", "prop", "required", "rules"]);
          }), 128))
        ]),
        _: 3
      }, 16, ["model", "inline", "label-width"]);
    };
  }
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".lo-form.el-form--inline {\n  margin-right: -32px;\n}\n.lo-form.el-form--inline .el-form-item {\n  width: calc(100% / var(--1a563534-rowCount) - 32px);\n}\n.lo-form.el-form--inline .el-form-item__content {\n  width: calc(100% - var(--1a563534-labelWidth));\n}";
var stylesheet=".lo-form.el-form--inline {\n  margin-right: -32px;\n}\n.lo-form.el-form--inline .el-form-item {\n  width: calc(100% / var(--1a563534-rowCount) - 32px);\n}\n.lo-form.el-form--inline .el-form-item__content {\n  width: calc(100% - var(--1a563534-labelWidth));\n}";
styleInject(css_248z);

formlist2_script.__file = "src/formlist/formlist.vue";



;// CONCATENATED MODULE: ../vue-components/dist/formlist/index.js




















const formlist_withInstall = (main, extra) => {
  ;
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component("LoFormList", comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;
      main[key] = comp;
    }
  }
  return main;
};
const LoFormList = formlist_withInstall(formlist2_script);



;// CONCATENATED MODULE: ../vue-components/dist/table-enhance/table-enhance.js


function render(_ctx, _cache) {
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", null, "table");
}

const table_enhance_script = {};
table_enhance_script.render = render;
table_enhance_script.__file = "src/table-enhance/table-enhance.vue";



;// CONCATENATED MODULE: ../vue-components/dist/table-enhance/index.js




const LoTableEnhance = (/* unused pure expression or super */ null && (script));



;// CONCATENATED MODULE: ../vue-components/dist/index.js





/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "B4": () => (/* binding */ useDisabled),
  "tH": () => (/* binding */ useSize),
  "Pp": () => (/* binding */ useSizeProp)
});

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-prop/index.mjs


const useProp = (name) => {
  const vm = (0,external_Vue_.getCurrentInstance)();
  return (0,external_Vue_.computed)(() => {
    var _a, _b;
    return (_b = ((_a = vm.proxy) == null ? void 0 : _a.$props)[name]) != null ? _b : void 0;
  });
};


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-global-config/index.mjs + 1 modules
var use_global_config = __webpack_require__(861);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var runtime = __webpack_require__(2242);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/constants/size.mjs
const componentSizes = ["", "default", "small", "large"];
const componentSizeMap = {
  large: 40,
  default: 32,
  small: 24
};


//# sourceMappingURL=size.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/tokens/form.mjs
var tokens_form = __webpack_require__(1100);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-common-props/index.mjs










const useSizeProp = (0,runtime/* buildProp */.l0)({
  type: String,
  values: componentSizes,
  required: false
});
const useSize = (fallback, ignore = {}) => {
  const emptyRef = (0,external_Vue_.ref)(void 0);
  const size = ignore.prop ? emptyRef : useProp("size");
  const globalConfig = ignore.global ? emptyRef : (0,use_global_config/* useGlobalConfig */.W)("size");
  const form = ignore.form ? { size: void 0 } : (0,external_Vue_.inject)(tokens_form/* formContextKey */.H, void 0);
  const formItem = ignore.formItem ? { size: void 0 } : (0,external_Vue_.inject)(tokens_form/* formItemContextKey */.K, void 0);
  return (0,external_Vue_.computed)(() => size.value || (0,external_Vue_.unref)(fallback) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || globalConfig.value || "");
};
const useDisabled = (fallback) => {
  const disabled = useProp("disabled");
  const form = (0,external_Vue_.inject)(tokens_form/* formContextKey */.H, void 0);
  return (0,external_Vue_.computed)(() => disabled.value || (0,external_Vue_.unref)(fallback) || (form == null ? void 0 : form.disabled) || false);
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9234:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ useFormItem),
/* harmony export */   "p": () => (/* binding */ useFormItemInputId)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _use_id_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8504);
/* harmony import */ var _tokens_form_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1100);





const useFormItem = () => {
  const form = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_tokens_form_mjs__WEBPACK_IMPORTED_MODULE_1__/* .formContextKey */ .H, void 0);
  const formItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(_tokens_form_mjs__WEBPACK_IMPORTED_MODULE_1__/* .formItemContextKey */ .K, void 0);
  return {
    form,
    formItem
  };
};
const useFormItemInputId = (props, {
  formItemContext,
  disableIdGeneration,
  disableIdManagement
}) => {
  if (!disableIdGeneration) {
    disableIdGeneration = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  }
  if (!disableIdManagement) {
    disableIdManagement = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  }
  const inputId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
  let idUnwatch = void 0;
  const isLabeledByFormItem = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
    var _a;
    return !!(!props.label && formItemContext && formItemContext.inputIds && ((_a = formItemContext.inputIds) == null ? void 0 : _a.length) <= 1);
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
    idUnwatch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)([(0,vue__WEBPACK_IMPORTED_MODULE_0__.toRef)(props, "id"), disableIdGeneration], ([id, disableIdGeneration2]) => {
      const newId = id != null ? id : !disableIdGeneration2 ? (0,_use_id_index_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useId */ .M)().value : void 0;
      if (newId !== inputId.value) {
        if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
          inputId.value && formItemContext.removeInputId(inputId.value);
          if (!(disableIdManagement == null ? void 0 : disableIdManagement.value) && !disableIdGeneration2 && newId) {
            formItemContext.addInputId(newId);
          }
        }
        inputId.value = newId;
      }
    }, { immediate: true });
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(() => {
    idUnwatch && idUnwatch();
    if (formItemContext == null ? void 0 : formItemContext.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value);
    }
  });
  return {
    isLabeledByFormItem,
    inputId
  };
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 1128:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _ListCache)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const _listCacheClear = (listCacheClear);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/eq.js
var eq = __webpack_require__(8782);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,eq/* default */.Z)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const _assocIndexOf = (assocIndexOf);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const _listCacheDelete = (listCacheDelete);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const _listCacheGet = (listCacheGet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ const _listCacheHas = (listCacheHas);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const _listCacheSet = (listCacheSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ const _ListCache = (ListCache);


/***/ }),

/***/ 7737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9287);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7627);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, 'Map');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);


/***/ }),

/***/ 1233:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _MapCache)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(9287);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative/* default */.Z)(Object, 'create');

/* harmony default export */ const _nativeCreate = (nativeCreate);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ const _hashClear = (hashClear);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _hashDelete = (hashDelete);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const _hashGet = (hashGet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ const _hashHas = (hashHas);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const _hashSet = (hashSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ const _Hash = (Hash);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(1128);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(7737);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map/* default */.Z || _ListCache/* default */.Z),
    'string': new _Hash
  };
}

/* harmony default export */ const _mapCacheClear = (mapCacheClear);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const _isKeyable = (isKeyable);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const _getMapData = (getMapData);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _mapCacheDelete = (mapCacheDelete);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ const _mapCacheGet = (mapCacheGet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ const _mapCacheHas = (mapCacheHas);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const _mapCacheSet = (mapCacheSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ const _MapCache = (MapCache);


/***/ }),

/***/ 344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7627);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].Symbol */ .Z.Symbol;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Symbol);


/***/ }),

/***/ 3996:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1186);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8782);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(object, key, value);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);


/***/ }),

/***/ 1186:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5402);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _baseGetTag)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(344);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol/* default */.Z ? _Symbol/* default.toStringTag */.Z.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol/* default */.Z ? _Symbol/* default.toStringTag */.Z.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);


/***/ }),

/***/ 2954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _castPath)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(3788);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(718);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isKey.js



/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if ((0,isArray/* default */.Z)(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || (0,isSymbol/* default */.Z)(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

/* harmony default export */ const _isKey = (isKey);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__(1233);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache/* default */.Z);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache/* default */.Z;

/* harmony default export */ const lodash_es_memoize = (memoize);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_memoizeCapped.js


/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = lodash_es_memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

/* harmony default export */ const _memoizeCapped = (memoizeCapped);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_stringToPath.js


/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

/* harmony default export */ const _stringToPath = (stringToPath);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(344);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_arrayMap.js
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/* harmony default export */ const _arrayMap = (arrayMap);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseToString.js





/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.Z ? _Symbol/* default.prototype */.Z.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if ((0,isArray/* default */.Z)(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if ((0,isSymbol/* default */.Z)(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const _baseToString = (baseToString);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toString.js


/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString_toString(value) {
  return value == null ? '' : _baseToString(value);
}

/* harmony default export */ const lodash_es_toString = (toString_toString);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castPath.js





/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if ((0,isArray/* default */.Z)(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(lodash_es_toString(value));
}

/* harmony default export */ const _castPath = (castPath);


/***/ }),

/***/ 5402:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9287);


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defineProperty);


/***/ }),

/***/ 6184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (freeGlobal);


/***/ }),

/***/ 9287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _getNative)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(9477);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
var _root = __webpack_require__(7627);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root/* default.__core-js_shared__ */.Z["__core-js_shared__"];

/* harmony default export */ const _coreJsData = (coreJsData);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const _isMasked = (isMasked);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(7247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(7785);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,isObject/* default */.Z)(value) || _isMasked(value)) {
    return false;
  }
  var pattern = (0,isFunction/* default */.Z)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource/* default */.Z)(value));
}

/* harmony default export */ const _baseIsNative = (baseIsNative);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const _getValue = (getValue);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ const _getNative = (getNative);


/***/ }),

/***/ 5281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isIndex);


/***/ }),

/***/ 7627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6184);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z || freeSelf || Function('return this')();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root);


/***/ }),

/***/ 5931:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isSymbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(718);


/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || (0,_isSymbol_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toKey);


/***/ }),

/***/ 7785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toSource);


/***/ }),

/***/ 7146:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_debounce)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(7247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_root.js
var _root = __webpack_require__(7627);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/now.js


/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root/* default.Date.now */.Z.Date.now();
};

/* harmony default export */ const lodash_es_now = (now);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_trimmedEndIndex.js
/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

/* harmony default export */ const _trimmedEndIndex = (trimmedEndIndex);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseTrim.js


/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, _trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

/* harmony default export */ const _baseTrim = (baseTrim);

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isSymbol.js
var isSymbol = __webpack_require__(718);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/toNumber.js




/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if ((0,isSymbol/* default */.Z)(value)) {
    return NAN;
  }
  if ((0,isObject/* default */.Z)(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = (0,isObject/* default */.Z)(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = _baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

/* harmony default export */ const lodash_es_toNumber = (toNumber);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/debounce.js




/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = lodash_es_toNumber(wait) || 0;
  if ((0,isObject/* default */.Z)(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(lodash_es_toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = lodash_es_now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(lodash_es_now());
  }

  function debounced() {
    var time = lodash_es_now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/* harmony default export */ const lodash_es_debounce = (debounce);


/***/ }),

/***/ 8782:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eq);


/***/ }),

/***/ 5444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_get)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castPath.js + 7 modules
var _castPath = __webpack_require__(2954);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(5931);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseGet.js



/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = (0,_castPath/* default */.Z)(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[(0,_toKey/* default */.Z)(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

/* harmony default export */ const _baseGet = (baseGet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/get.js


/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

/* harmony default export */ const lodash_es_get = (get);


/***/ }),

/***/ 3788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArray);


/***/ }),

/***/ 9477:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1395);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7247);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isFunction);


/***/ }),

/***/ 7247:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObject);


/***/ }),

/***/ 4764:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isObjectLike);


/***/ }),

/***/ 718:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1395);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4764);



/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(value) == symbolTag);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSymbol);


/***/ }),

/***/ 5618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ lodash_es_set)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_assignValue.js
var _assignValue = __webpack_require__(3996);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_castPath.js + 7 modules
var _castPath = __webpack_require__(2954);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(5281);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(7247);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_toKey.js
var _toKey = __webpack_require__(5931);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/_baseSet.js






/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!(0,isObject/* default */.Z)(object)) {
    return object;
  }
  path = (0,_castPath/* default */.Z)(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = (0,_toKey/* default */.Z)(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = (0,isObject/* default */.Z)(objValue)
          ? objValue
          : ((0,_isIndex/* default */.Z)(path[index + 1]) ? [] : {});
      }
    }
    (0,_assignValue/* default */.Z)(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

/* harmony default export */ const _baseSet = (baseSet);

;// CONCATENATED MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/set.js


/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `_.setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.set(object, 'a[0].b.c', 4);
 * console.log(object.a[0].b.c);
 * // => 4
 *
 * _.set(object, ['x', '0', 'y', 'z'], 5);
 * console.log(object.x[0].y.z);
 * // => 5
 */
function set(object, path, value) {
  return object == null ? object : _baseSet(object, path, value);
}

/* harmony default export */ const lodash_es_set = (set);


/***/ })

}]);