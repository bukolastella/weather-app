(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,a){e.exports={Degree:"MainView_Degree__3nmlL",Location:"MainView_Location__3tEbn",TimeDate:"MainView_TimeDate__CY5r7",Hypen:"MainView_Hypen__uli9O",Icon:"MainView_Icon__2zwJX",Weather:"MainView_Weather__14oZh",MainView:"MainView_MainView__3Egmd",Flex:"MainView_Flex__3uzVN"}},15:function(e,t,a){e.exports={Form:"SearchBar_Form__D86CP",SearchBar:"SearchBar_SearchBar__3BLZ1",SearchIcon:"SearchBar_SearchIcon__2E4nY"}},16:function(e,t,a){e.exports={DetailsView:"DetailsView_DetailsView__1hY_E",Header:"DetailsView_Header__2m6j6",Dash:"DetailsView_Dash__Mvndy"}},21:function(e,t,a){e.exports={SearchResult:"SearchResult_SearchResult__2QAQd",SearchHover:"SearchResult_SearchHover__2Bb9w"}},22:function(e,t,a){e.exports={DetailsResult:"DetailsResult_DetailsResult__2hJoc",Title:"DetailsResult_Title__1FZ9s"}},23:function(e,t,a){e.exports={App:"App_App__1bpoK",Hidden:"App_Hidden__3x5jv"}},24:function(e,t,a){e.exports={ColumnDetails:"ColumnDetails_ColumnDetails__Vt2E5",Title:"ColumnDetails_Title__3pqcJ"}},30:function(e,t,a){e.exports={SearchView:"SearchView_SearchView__3F6v2"}},31:function(e,t,a){e.exports={SideLayout:"SideLayout_SideLayout__1qyaX"}},37:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(11),r=a.n(i),o=(a(37),a(1)),s=function(e){return Object(o.jsx)("div",{children:e.children})},l=a(10),u=a.n(l),d=a(3),j=a(29),h=a.n(j),m=function(){var e=Object(d.c)((function(e){return e.data})),t=Object(o.jsx)(h.a,{fontSize:"large"});return e.description.includes("cloud")?t=Object(o.jsx)("i",{className:"fas fa-cloud"}):e.description.includes("rain")&&(t=Object(o.jsx)("i",{className:"fas fa-cloud-rain"})),Object(o.jsxs)("div",{className:u.a.MainView,children:[Object(o.jsx)("div",{className:u.a.Degree,children:Object(o.jsxs)(s,{children:[e.cityDegree," ",Object(o.jsx)("sup",{children:"\xb0"})]})}),Object(o.jsxs)("div",{className:u.a.Flex,children:[Object(o.jsx)("div",{className:u.a.Location,children:Object(o.jsx)(s,{children:e.cityName})}),Object(o.jsxs)("div",{className:u.a.TimeDate,children:[Object(o.jsxs)(s,{children:[e.time," "]}),Object(o.jsx)("div",{className:u.a.Hypen,children:Object(o.jsx)(s,{children:" - "})}),Object(o.jsxs)(s,{children:[" ",e.day]})]})]}),Object(o.jsxs)("div",{className:u.a.Flex,children:[Object(o.jsx)("div",{className:u.a.Icon,children:Object(o.jsx)(s,{children:t})}),Object(o.jsx)("div",{className:u.a.Weather,children:Object(o.jsx)(s,{children:e.description})})]})]})},b=a.p+"static/media/kupono1.d297ed43.jpg",p=a.p+"static/media/tom-barrett-hgGplX3PFBg-unsplash.a6e0b2eb.jpg",x=a.p+"static/media/valentin-muller-bWtd1ZyEy6w-unsplash.db0c808f.jpg",f=a(4),v=a.n(f),_=a(9),O=a(30),w=a.n(O),y=a(15),g=a.n(y),N=a(14),D=a.n(N),S=function(e){var t=Object(n.useRef)(),a=function(){var a=Object(_.a)(v.a.mark((function a(n){var c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(""!==(c=t.current.value.trim())){a.next=3;break}return a.abrupt("return");case 3:return n.preventDefault(),a.prev=4,a.next=7,e.onhelper(c);case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(4),alert(" Location not available, \n Check your internet connection and try again");case 12:t.current.value="";case 13:case"end":return a.stop()}}),a,null,[[4,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:g.a.Form,onSubmit:a,children:[Object(o.jsx)("input",{type:"text",className:g.a.SearchBar,placeholder:"Another location",ref:t}),Object(o.jsx)("div",{className:g.a.SearchIcon,onClick:a,children:Object(o.jsx)(D.a,{fontSize:"large"})})]})},V=a(21),L=a.n(V),F=function(e){var t=Object(d.c)((function(e){return e.past})),a=function(){var a=Object(_.a)(v.a.mark((function a(n){var c;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=t.filter((function(e){return e===n}))[0],e.onhelper(c,c);case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(o.jsx)("div",{className:L.a.SearchResult,children:t.map((function(e){return Object(o.jsx)("div",{onClick:a.bind(null,e),className:L.a.SearchHover,children:e},Math.random())}))})},k=a(17),M=(new Date).toLocaleDateString("en-us",{year:"numeric"}).slice(2);M="'"+M;var C="".concat((new Date).toLocaleDateString("en-us",{weekday:"long",month:"long",day:"numeric"})," ").concat(M),T={cityName:"london",cityDegree:"06",time:"".concat((new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),day:"".concat(C),description:"clear",cloudyNo:"12%",humidityNo:"78%",wind:"1m/s",rain:"0mm"},B=Object(k.b)({name:"Data",initialState:T,reducers:{getCityName:function(e,t){return t.payload}}}),A=Object(k.b)({name:"past",initialState:["birmingham","manchester","new york","california"],reducers:{change:function(e,t){if(e.includes(t.payload)){var a=e.filter((function(e){return e!==t.payload}));return a.unshift(t.payload),a}return e.unshift(t.payload),e.pop(),e}}}),H=Object(k.a)({reducer:{data:B.reducer,past:A.reducer}}),R=B.actions,E=A.actions,I=H,z=function(){var e=Object(d.b)();Object(n.useEffect)((function(){var t=function(){var t=Object(_.a)(v.a.mark((function t(a,n){var c,i,r,o,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c="'"+(c=(new Date).toLocaleDateString("en-us",{year:"numeric"}).slice(2)),i="".concat((new Date).toLocaleDateString("en-us",{weekday:"long",month:"long",day:"numeric"})," ").concat(c),t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=c2c7023fbf71a1033c4694bd51fce603"));case 5:return r=t.sent,t.next=8,r.json();case 8:o=t.sent,s={cityName:o.name,cityDegree:(o.main.temp-273.15).toFixed(1),time:"".concat((new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),day:"".concat(i),description:o.weather[0].description,cloudyNo:"".concat(o.clouds.all,"%"),humidityNo:"".concat(o.main.humidity,"%"),wind:"".concat(o.wind.speed," m/s"),rain:"".concat(o.rain?"".concat(o.rain["1h"]," mm"):"N/A")},e(R.getCityName(s)),e(E.change(o.cityName));case 12:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var a=e.coords.latitude,n=e.coords.longitude;t(a,n)}),(function(){alert("Could not get your location")}))}),[e]);var t=function(){var t=Object(_.a)(v.a.mark((function t(a){var n,c,i,r,o,s,l=arguments;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:null,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=c2c7023fbf71a1033c4694bd51fce603"));case 3:return c=t.sent,t.next=6,c.json();case 6:i=t.sent,r="'"+(r=(new Date).toLocaleDateString("en-us",{year:"numeric"}).slice(2)),o="".concat((new Date).toLocaleDateString("en-us",{weekday:"long",month:"long",day:"numeric"})," ").concat(r),s={cityName:i.name,cityDegree:(i.main.temp-273.15).toFixed(1),time:"".concat((new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),day:"".concat(o),description:i.weather[0].description,cloudyNo:"".concat(i.clouds.all,"%"),humidityNo:"".concat(i.main.humidity,"%"),wind:"".concat(i.wind.speed," m/s"),rain:"".concat(i.rain?"".concat(i.rain["1h"]," mm"):"N/A")},e(R.getCityName(s)),e(n?E.change(n):E.change(i.name));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:w.a.SearchView,children:[Object(o.jsx)(S,{onhelper:t}),Object(o.jsx)(F,{onhelper:t})]})},J=a(31),P=a.n(J),q=a(16),W=a.n(q),Z=a(22),G=a.n(Z),X=function(e){return Object(o.jsxs)("div",{className:G.a.DetailsResult,children:[Object(o.jsx)("div",{className:G.a.Title,children:e.title}),Object(o.jsx)("div",{children:e.value})]})},Y=function(){var e=Object(d.c)((function(e){return e.data}));return Object(o.jsxs)("div",{className:W.a.DetailsView,children:[Object(o.jsx)("div",{className:W.a.Header,children:Object(o.jsx)(s,{children:"weather details"})}),Object(o.jsx)(X,{title:"cloudy",value:e.cloudyNo}),Object(o.jsx)(X,{title:"humidity",value:e.humidityNo}),Object(o.jsx)(X,{title:"wind",value:e.wind}),Object(o.jsx)(X,{title:"rain",value:e.rain}),Object(o.jsx)("div",{className:W.a.Dash})]})},Q=function(){var e=Object(d.c)((function(e){return e.data.description})),t="linear-gradient(#2a5e85, #6d828e)";return e.includes("cloud")?t="linear-gradient(#0d222d, #0d2f3e)":e.includes("rain")&&(t="linear-gradient(#0c1011, #38484a)"),Object(o.jsxs)("div",{className:P.a.SideLayout,style:{backgroundImage:t},children:[Object(o.jsx)(z,{}),Object(o.jsx)(Y,{})]})},K=a(23),U=a.n(K),$=a(7),ee=a.n($),te=a(24),ae=a.n(te),ne=function(e){return Object(o.jsxs)("div",{className:ae.a.ColumnDetails,children:[Object(o.jsx)("div",{className:ae.a.Title,children:e.title}),Object(o.jsx)("div",{children:e.value})]})},ce=function(){var e=Object(d.c)((function(e){return e.data})),t=Object(d.c)((function(e){return e.data.description})),a=Object(n.useRef)(),c=Object(d.b)(),i="#2a5e85c7";t.includes("cloud")?i="#0d222dc7":t.includes("rain")&&(i="#0c1011c7");var r=function(){var e=Object(_.a)(v.a.mark((function e(t){var a,n,i,r,o,s,l=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:null,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=c2c7023fbf71a1033c4694bd51fce603"));case 3:return n=e.sent,e.next=6,n.json();case 6:i=e.sent,r="'"+(r=(new Date).toLocaleDateString("en-us",{year:"numeric"}).slice(2)),o="".concat((new Date).toLocaleDateString("en-us",{weekday:"long",month:"long",day:"numeric"})," ").concat(r),s={cityName:i.name,cityDegree:(i.main.temp-273.15).toFixed(1),time:"".concat((new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})),day:"".concat(o),description:i.weather[0].description,cloudyNo:"".concat(i.clouds.all,"%"),humidityNo:"".concat(i.main.humidity,"%"),wind:"".concat(i.wind.speed," m/s"),rain:"".concat(i.rain?"".concat(i.rain["1h"]," mm"):"N/A")},c(R.getCityName(s)),c(a?E.change(a):E.change(i.name));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(_.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),""!==a.current.value){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,r(a.current.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(3),alert(" Location not available, \n Check your internet connection and try again");case 11:a.current.value="";case 12:case"end":return e.stop()}}),e,null,[[3,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:ee.a.MobileView,children:[Object(o.jsxs)("div",{className:ee.a.Top,children:[Object(o.jsxs)("div",{className:ee.a.Date,children:[Object(o.jsx)(s,{children:e.day}),Object(o.jsxs)("div",{className:ee.a.Location,children:[Object(o.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(o.jsx)(s,{children:e.cityName})]})]}),Object(o.jsxs)("form",{className:ee.a.Form,onSubmit:l,style:{backgroundColor:i},children:[Object(o.jsx)("span",{className:ee.a.Submit,onClick:l,children:Object(o.jsx)(D.a,{fontSize:"large"})}),Object(o.jsx)("input",{type:"text",placeholder:"Another location",ref:a})]})]}),Object(o.jsxs)("div",{className:ee.a.Flex,children:[Object(o.jsx)("div",{className:ee.a.Flex1,children:Object(o.jsx)(s,{children:e.description})}),Object(o.jsx)("div",{className:ee.a.Flex2,children:Object(o.jsxs)(s,{children:[e.cityDegree," ",Object(o.jsx)("sup",{children:"\xb0"})]})})]}),Object(o.jsxs)("div",{className:ee.a.Bottom,style:{backgroundColor:i},children:[Object(o.jsx)(ne,{title:"cloudy",value:e.cloudyNo}),Object(o.jsx)(ne,{title:"humidity",value:e.humidityNo}),Object(o.jsx)(ne,{title:"wind",value:e.wind}),Object(o.jsx)(ne,{title:"rain",value:e.rain})]})]})};var ie=function(){var e=Object(d.c)((function(e){return e.data.description})),t=b;return e.includes("cloud")?t=p:e.includes("rain")&&(t=x),Object(o.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:U.a.App,children:[Object(o.jsxs)("div",{className:U.a.Hidden,children:[Object(o.jsx)(m,{}),Object(o.jsx)(Q,{})]}),Object(o.jsx)(ce,{})]})},re=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,59)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),i(e),r(e)}))};r.a.render(Object(o.jsx)(d.a,{store:I,children:Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(ie,{})})}),document.getElementById("root")),re()},7:function(e,t,a){e.exports={MobileView:"MobileView_MobileView__eEf8G",Top:"MobileView_Top__3w_54",Date:"MobileView_Date__1laov",Location:"MobileView_Location__3aCbo",Submit:"MobileView_Submit__2sA0S",Form:"MobileView_Form__2emsw",Flex:"MobileView_Flex__MvtL-",Flex1:"MobileView_Flex1__1L4t-",Flex2:"MobileView_Flex2__3nxGi",Bottom:"MobileView_Bottom__EgedS"}}},[[47,1,2]]]);
//# sourceMappingURL=main.3407a10d.chunk.js.map