(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(3),s=n(4),c=n(2),r=n(6),a=n(5),o=n(1),u=n.n(o),d=n(7),l=n.n(d),h=n(9),b=n(0),j=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).createTasks=s.createTasks.bind(Object(c.a)(s)),s}return Object(s.a)(n,[{key:"confirm",value:function(e){this.props.confirm(e)}},{key:"createTasks",value:function(e){var t=this;return Object(b.jsx)("li",{className:"Li",onClick:function(){return t.confirm(e.key)},"data-text":"Delete Item...",children:e.text},e.key)}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return Object(b.jsx)("ul",{className:"theList",children:Object(b.jsx)(h.a,{duration:250,easing:"ease-out",children:e})})}}]),n}(u.a.Component),m=(n(15),function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"yesOrNo",value:function(e){this.props.yesOrNo(e.id)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{id:"confDiv",children:["Confirm ?",Object(b.jsx)("div",{id:"yes",onClick:function(t){e.yesOrNo(t.target)},children:"Yes"}),Object(b.jsx)("div",{id:"no",onClick:function(t){e.yesOrNo(t.target)},children:"No"})]})}}]),n}(u.a.Component)),v=function(e){Object(r.a)(n,e);var t=Object(a.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).state={items:[],currentKey:[],btnID:[]},s.addItem=s.addItem.bind(Object(c.a)(s)),s.deleteItem=s.deleteItem.bind(Object(c.a)(s)),s.itemChecker=s.itemChecker.bind(Object(c.a)(s)),s.confAns=s.confAns.bind(Object(c.a)(s)),s.yesOrNo=s.yesOrNo.bind(Object(c.a)(s)),s}return Object(s.a)(n,[{key:"confAns",value:function(e){document.getElementById("confDiv").style.visibility="visible";var t=this.state.currentKey;t.value=e,this.setState({currentKey:t})}},{key:"yesOrNo",value:function(e){var t=this;document.getElementById("confDiv").style.visibility="hidden";var n=e,i=this.state.btnID;i.value=n,this.setState({btnID:i},(function(){t.deleteItem()}))}},{key:"addItem",value:function(e){var t=this,n={text:this._inputElement.value,key:Date.now()};this.setState((function(e){return{items:e.items.concat(n)}}),(function(){t.itemChecker()})),this._inputElement.value="",e.preventDefault()}},{key:"deleteItem",value:function(){var e=this,t=this.state.currentKey.value,n=this.state.btnID.value,i=this.state.items.filter((function(e){return e.key!==t}));"yes"===n&&this.setState({items:i},(function(){e.itemChecker()}))}},{key:"itemChecker",value:function(){var e=document.getElementById("info");this.state.items.length>0?e.style.opacity="0":e.style.opacity="1"}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{children:[Object(b.jsx)(j,{entries:this.state.items,delete:this.deleteItem,confirm:this.confAns}),Object(b.jsxs)("div",{className:"todoListMain",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsxs)("form",{onSubmit:this.addItem,children:[Object(b.jsx)("input",{ref:function(t){return e._inputElement=t},placeholder:"enter task"}),Object(b.jsx)("button",{id:"sbmbutton",type:"submit",children:"add"})]})}),Object(b.jsx)("div",{id:"info",children:"no tasks to do...."})]}),Object(b.jsx)(m,{yesOrNo:this.yesOrNo})]})}}]),n}(u.a.Component);l.a.render(Object(b.jsx)(u.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.9ac86e33.chunk.js.map