(this.webpackJsonpgather=this.webpackJsonpgather||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(15),s=n.n(r),o=n(7),c=n(8),i=n(10),u=n(9),l=n(12),d=n.n(l),h=n(16),p=n(37),m=n(25),v=n.n(m),f=n(17),b=n.n(f),g=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=FR,MO,WE"],iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;WKST=SU;BYDAY=SA,TH,TU"],iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3187221506816000"',id:"48m09le389vijbqfs2mcr6i87q",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NDhtMDlsZTM4OXZpamJxZnMybWNyNmk4N3FfMjAyMDA2MzBUMDcwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-07-01T13:39:01.000Z",updated:"2020-07-01T13:39:13.408Z",summary:"Node Gang",description:"We meet every Tuesday to talk about Node or JavaScript in general. Node Gang is an inclusive community that tries to cater to all levels of learners during meetups. Join us if you are curious to hear about what's new in Node, patterns, interesting npm packages, and practices.",location:"Sydney NSW, Australia",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-30T09:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-30T10:00:00+02:00",timeZone:"Europe/Berlin"},recurrence:["RRULE:FREQ=WEEKLY;BYDAY=TU"],iCalUID:"48m09le389vijbqfs2mcr6i87q@google.com",sequence:1,hangoutLink:"https://meet.google.com/wdc-wutt-tji",conferenceData:{entryPoints:[{entryPointType:"video",uri:"https://meet.google.com/wdc-wutt-tji",label:"meet.google.com/wdc-wutt-tji"},{entryPointType:"more",uri:"https://tel.meet/wdc-wutt-tji?pin=3796108774207",pin:"3796108774207"},{regionCode:"DE",entryPointType:"phone",uri:"tel:+49-40-8081618974",label:"+49 40 8081618974",pin:"170634768"}],conferenceSolution:{key:{type:"hangoutsMeet"},name:"Google Meet",iconUri:"https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"},conferenceId:"wdc-wutt-tji",signature:"AL9oL6Xu9pm++ltHcO4H0DIZIngA"},reminders:{useDefault:!0},eventType:"default"}],j=function(e){var t=e.map((function(e){return e.location}));return Object(p.a)(new Set(t))},w=function(){var e=Object(h.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},O=function(){var e=Object(h.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return b.a.done(),e.abrupt("return",g);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),b.a.done(),e.abrupt("return",JSON.parse(t).events);case 8:return e.next=10,x();case 10:if(!(n=e.sent)){e.next=20;break}return y(),a="https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(n),e.next=16,v.a.get(a);case 16:return(r=e.sent).data&&(s=j(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),b.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,r,s,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,w(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("accees_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,v.a.get("https://vyceiykdg5.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&O(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=n(1),N=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,locations:e.props.locations},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,showsSuggestions:!1}):e.setState({query:n,suggestions:a,showSuggestions:!0})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1}),e.props.updateEvents(t)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(S.jsxs)("div",{className:"CitySearch",children:[Object(S.jsx)("input",{type:"text",className:"city",placeholder:"search cities",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(S.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(S.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(S.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(S.jsx)("b",{children:"see all cities"})},"all")]})]})}}]),n}(a.Component),T=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event;return Object(S.jsx)("div",{className:"event",children:Object(S.jsxs)("div",{className:"eventCard",children:[Object(S.jsx)("h1",{className:"eventCardName",children:t.summary}),Object(S.jsxs)("p",{className:"eventCardDate",children:["starts: ",t.start.dateTime]}),Object(S.jsxs)("p",{className:"eventCardDate",children:["timezone: ",t.start.timeZone]}),Object(S.jsxs)("p",{className:"eventCardLocation",children:["location: ",t.location]}),!this.state.showDetails&&Object(S.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()},children:"show details"}),this.state.showDetails&&Object(S.jsxs)("div",{className:"eventOpen",children:[Object(S.jsxs)("p",{className:"eventCardLink",children:["link: ",t.htmlLink]}),Object(S.jsxs)("p",{className:"eventCardDesc",children:["description: ",t.description]}),Object(S.jsx)("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()},children:"hide details"})]})]})})}}]),n}(a.Component),E=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(S.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(S.jsx)("li",{children:Object(S.jsx)(T,{event:e})},e.id)}))})}}]),n}(a.Component),C=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInput=function(t){var n=Number(t.target.value);e.props.updateEvents(null,n),n<1?console.error("please choose a number greater than or equal to 1"):e.setState({numberOfEvents:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"NumberOfEvents",children:[Object(S.jsx)("label",{className:"eventNumLabel",children:"number of events: \xa0"}),Object(S.jsx)("input",{className:"number",type:"number",value:this.state.numberOfEvents,onChange:this.handleInput})]})}}]),n}(a.Component),D=n(18),Z=n(22),L=n(35),W=(n(61),n(62),n(63),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,currentLocation:"all"},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,s=a.numberOfEvents;t?k().then((function(n){var a=("all"===t?n:n.filter((function(e){return e.location===t}))).slice(0,s);e.setState({events:a,currentLocation:t})})):k().then((function(t){var a=("all"===r?t:t.filter((function(e){return e.location===r}))).slice(0,n);e.setState({events:a,numberOfEvents:n})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,k().then((function(t){e.mounted&&e.setState({events:t,locations:j(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsxs)(D.a,{className:"navbar",sticky:"top",expand:"lg",children:[Object(S.jsx)(D.a.Brand,{className:"logo",href:"#",children:"gather"}),Object(S.jsx)(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(S.jsx)(D.a.Collapse,{id:"responsive-navbar-nav",children:Object(S.jsxs)(Z.a,{className:"mr-auto",children:[Object(S.jsx)(Z.a.Link,{href:"https://github.com/membraned",children:"github"}),Object(S.jsx)(Z.a.Link,{href:"https://www.linkedin.com/in/aidanheck/",children:"linkedin"})]})})]}),Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(L.a,{className:"appContainer",children:[Object(S.jsx)(N,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(S.jsx)(C,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(S.jsx)(E,{events:this.state.events})]})})]})}}]),n}(a.Component)),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};var A=n(36);s.a.render(Object(S.jsx)(W,{}),document.getElementById("root")),M(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),A.config("7661e408847d43379ec0505e4252253f").install()}},[[71,1,2]]]);
//# sourceMappingURL=main.2997bf89.chunk.js.map