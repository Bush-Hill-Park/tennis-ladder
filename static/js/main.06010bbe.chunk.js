(this["webpackJsonpben-tennis"]=this["webpackJsonpben-tennis"]||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},27:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},28:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),c=a.n(s),i=(a(25),a(3)),l=a.n(i),o=a(5),u=a(16),h=a(17),m=a(2),d=a(19),p=a(18),b=(a(27),a(28),a(4)),y=a.n(b),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={users:[],current_choices:[],postCount:0,isLoading:!1,matchhistory:[],playing_with_self:!1},n.change_me=n.change_me.bind(Object(m.a)(n)),n.change_them=n.change_them.bind(Object(m.a)(n)),n.change_winner=n.change_winner.bind(Object(m.a)(n)),n.submit=n.submit.bind(Object(m.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.next=3,fetch("https://ben-tennis.herokuapp.com/rank/5ed40fab5939793498b99c80").then((function(e){return e.json()})).then((function(e){t.setState({users:e.rankings}),t.setState({current_choices:[e.rankings[0][0],e.rankings[1][0],"No"]})}));case 3:return e.sent,e.next=6,fetch("https://ben-tennis.herokuapp.com/matchhistory/").then((function(e){return e.json()})).then((function(e){t.setState({matchhistory:e.reverse()})}));case 6:e.sent,this.setState({isLoading:!1});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"change_me",value:function(e){var t=this.state.current_choices;t[0]=e.target.value,this.setState({current_choices:t})}},{key:"change_them",value:function(e){var t=this.state.current_choices;t[1]=e.target.value,this.setState({current_choices:t})}},{key:"change_winner",value:function(e){var t=this.state.current_choices;t[2]=e.target.value,this.setState({current_choices:t})}},{key:"submit",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.current_choices[0]!=this.state.current_choices[1]){e.next=3;break}return this.setState({playing_with_self:!0}),e.abrupt("return");case 3:return this.setState({playing_with_self:!1}),t={name:this.state.current_choices[0],opponent:this.state.current_choices[1],did_win:this.state.current_choices[2],rankings:this.state.users},y.a.post("https://ben-tennis.herokuapp.com/rankhistory/",t),e.next=8,y.a.post("https://ben-tennis.herokuapp.com/rank/5ed40fab5939793498b99c80",t);case 8:return a=e.sent,this.setState({users:a.data}),e.next=12,y.a.post("https://ben-tennis.herokuapp.com/matchhistory/",t);case 12:n=e.sent,this.setState({matchhistory:n.data.reverse()});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isLoading,t=r.a.createElement("div",null,"loading please wait...."),a={borderLeft:"1px solid black",borderRight:"1px solid black",borderBottom:"1px solid black",borderTop:"1px solid black"},n={padding:"5px"},s=["January","February","March","April","May","June","July","August","September","October","November","December"];return r.a.createElement("div",null,e?t:r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement("div",{style:{margin:"0 auto",width:"85%"}},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("i",null,r.a.createElement("b",null,"Player Name"))),r.a.createElement("td",null,r.a.createElement("b",null,"Rank"))),this.state.users.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{style:n},e[0]),r.a.createElement("td",{style:n},e[1]))})))),r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("div",{style:{margin:"0 auto",width:"85%"}},r.a.createElement("label",{for:"who you"},"Who are you?\u2002"),r.a.createElement("select",{id:"who you",name:"who you",value:this.state.current_choices[0],onChange:this.change_me},this.state.users.map((function(e){return r.a.createElement("option",{value:e[0]},e[0])}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"who them"},"Who did you play against?\u2002"),r.a.createElement("select",{id:"who them",name:"who them",value:this.state.current_choices[1],onChange:this.change_them},this.state.users.map((function(e){return r.a.createElement("option",{value:e[0]},e[0])}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("label",{for:"win"},"Did you win?\u2002"),r.a.createElement("select",{id:"win",name:"win",value:this.state.current_choices[2],onChange:this.change_winner},r.a.createElement("option",{value:"No"},"No"),r.a.createElement("option",{value:"Yes"},"Yes")),"\u2002",r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submit}),this.state.playing_with_self?r.a.createElement("p",null,"You can't play a match against yourself!"):""),r.a.createElement("br",null),r.a.createElement("br",null),0==this.state.matchhistory.length?"":r.a.createElement("table",{style:{border:"1px solid black",borderCollapse:"collapse",marginBottom:"5%",margin:"0 auto",width:"85%"}},r.a.createElement("tbody",{style:{}},r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Player one"),r.a.createElement("th",null,"Player Two"),r.a.createElement("th",null,"Winner"),this.state.matchhistory.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",{style:a},new Date(e.datePlayed).getHours(),":",(new Date(e.datePlayed).getMinutes()<10?"0":"")+new Date(e.datePlayed).getMinutes()," ",s[new Date(e.datePlayed).getMonth()]," ",new Date(e.datePlayed).getDate(),", ",new Date(e.datePlayed).getFullYear()),r.a.createElement("td",{style:a},e.player_one),r.a.createElement("td",{style:a},e.player_two),r.a.createElement("td",{style:a},e.winner))})))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.06010bbe.chunk.js.map