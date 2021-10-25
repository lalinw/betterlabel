(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),i=n(10),s=n.n(i),c=(n(16),n(3)),d=n(4),o=n(6),l=n(5),g=(n(7),n(2)),h=n(11),u=n.n(h),j=n(0),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={leftInputString:"",leftInputArray:[],rightInputString:"",rightInputArray:[]},r.itemFlagFormatter=r.itemFlagFormatter.bind(Object(g.a)(r)),r.convertStringToArray=r.convertStringToArray.bind(Object(g.a)(r)),r.drawLines=r.drawLines.bind(Object(g.a)(r)),r.handleLeftInput=r.handleLeftInput.bind(Object(g.a)(r)),r.handleRightInput=r.handleRightInput.bind(Object(g.a)(r)),r}return Object(d.a)(n,[{key:"componentDidMount",value:function(){}},{key:"itemFlagFormatter",value:function(e,t){for(var n=0;n<t.length;n++){if(e.toLowerCase()==t[n].toLowerCase())return Object(j.jsx)("div",{style:{backgroundColor:"lightblue",borderColor:"red",borderStyle:"solid"},children:e});if(e.toLowerCase().includes(t[n].toLowerCase()))return Object(j.jsx)("div",{style:{backgroundColor:"yellow",borderColor:"orange",borderStyle:"solid"},children:e})}return Object(j.jsx)("div",{children:e})}},{key:"convertStringToArray",value:function(e){for(var t=e.replaceAll("."," ").split(","),n=[],r=0;r<t.length;r++)n.push(t[r].trim());return n}},{key:"handleLeftInput",value:function(e){this.setState({leftInputString:e.target.value})}},{key:"handleRightInput",value:function(e){this.setState({rightInputString:e.target.value})}},{key:"drawLines",value:function(){}},{key:"render",value:function(){for(var e=this,t=this.state.leftInputArray,n=this.state.rightInputArray,r=[],i=0;i<t.length;i++){r[i]=-1;for(var s=0;s<n.length;s++)t[i].toLowerCase()==n[s].toLowerCase()&&(r[i]=s)}return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{id:"item-left",placeholder:"paste the list of ingredients here",onChange:this.handleLeftInput})}),Object(j.jsx)("div",{children:Object(j.jsx)("textarea",{id:"item-right",placeholder:"paste the list of ingredients here",onChange:this.handleRightInput})}),Object(j.jsx)("button",{onClick:function(){""!=e.state.leftInputString&&e.state.rightInputString&&e.setState({leftInputArray:e.convertStringToArray(e.state.leftInputString),rightInputArray:e.convertStringToArray(e.state.rightInputString)})},children:"Match product ingredients"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"ingredients-matching",id:"left",children:t.map((function(e,t){return Object(j.jsx)("div",{className:"ingredients",id:"left"+t,children:e})}))}),Object(j.jsx)("div",{className:"ingredients-matching",id:"canvas",children:r.map((function(e,t){if(-1!==e)return Object(j.jsx)(u.a,{start:"left"+t,end:"right"+e,curveness:"0",color:"cornflowerblue",strokeWidth:"2",showHead:!1,headSize:"0"})}))}),Object(j.jsx)("div",{className:"ingredients-matching",id:"right",children:n.map((function(e,t){return Object(j.jsx)("div",{className:"ingredients",id:"right"+t,children:e})}))})]})]})})}}]),n}(r.Component),b=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"render",value:function(){for(var e=0,t=0,n=0,r=0;r<this.props.inputArray.length;r++){for(var i=0;i<this.props.wantedItemsArray.length;i++)this.props.inputArray[r].toLowerCase()==this.props.wantedItemsArray[i].toLowerCase()&&e++;for(var s=0;s<this.props.flaggedItemsArray.length;s++)this.props.inputArray[r].toLowerCase()==this.props.flaggedItemsArray[s].toLowerCase()?t++:this.props.inputArray[r].toLowerCase().includes(this.props.flaggedItemsArray[s].toLowerCase())&&n++}return Object(j.jsx)(a.a.Fragment,{children:Object(j.jsx)("div",{className:"summary",children:0!=this.props.inputArray.length?Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsxs)("div",{className:"summary-stats",id:"stats-input",children:[Object(j.jsx)("h3",{children:"Total ingredients"}),Object(j.jsx)("h2",{children:this.props.inputArray.length})]}),Object(j.jsxs)("div",{className:"summary-stats",id:"stats-wanted",children:[Object(j.jsx)("h3",{children:"Desired ingredients"}),Object(j.jsx)("h2",{children:e}),Object(j.jsxs)("p",{children:["out of ",this.props.wantedItemsArray.length," found"]})]}),Object(j.jsxs)("div",{className:"summary-stats",id:"stats-flagged",children:[Object(j.jsx)("h3",{children:"Flagged ingredients"}),Object(j.jsx)("h2",{children:t}),Object(j.jsxs)("p",{children:["out of ",this.props.flaggedItemsArray.length," flagged"]}),Object(j.jsxs)("p",{children:["(",n," potentially unwanted items)"]})]})]}):Object(j.jsx)("p",{children:"Summary cannot be displayed until there is an ingredients list."})})})}}]),n}(r.Component),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r.itemFlagFormatter=r.itemFlagFormatter.bind(Object(g.a)(r)),r}return Object(d.a)(n,[{key:"itemFlagFormatter",value:function(e){if(void 0!==this.props.flaggedItemsArray)for(var t=0;t<this.props.flaggedItemsArray.length;t++){if(e.toLowerCase()==this.props.flaggedItemsArray[t].toLowerCase())return Object(j.jsx)("div",{className:"ingredients flagged",style:{borderColor:"red"},children:e});if(""!=this.props.flaggedItemsArray[t]&&e.toLowerCase().includes(this.props.flaggedItemsArray[t].toLowerCase()))return Object(j.jsx)("div",{className:"ingredients flagged",style:{borderColor:"orange"},children:e})}if(void 0!==this.props.wantedItemsArray)for(var n=0;n<this.props.wantedItemsArray.length;n++)if(e.toLowerCase()==this.props.wantedItemsArray[n].toLowerCase())return Object(j.jsx)("div",{className:"ingredients wanted",style:{borderColor:"green"},children:e});return Object(j.jsx)("div",{className:"ingredients",style:{borderColor:"aliceblue"},children:e})}},{key:"render",value:function(){var e=this;return Object(j.jsx)(a.a.Fragment,{children:void 0!=this.props.inputArray&&this.props.inputArray.length>0&&Object(j.jsx)("div",{id:"ingredients-list",children:this.props.inputArray.map((function(t){return e.itemFlagFormatter(t)}))})})}}]),n}(r.Component),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={c:"",inputArray:[],wantedItemsString:"",wantedItemsArray:[],flaggedItemsString:"",flaggedItemsArray:[]},r.convertStringToArray=r.convertStringToArray.bind(Object(g.a)(r)),r.handleInput=r.handleInput.bind(Object(g.a)(r)),r.handleWantedItems=r.handleWantedItems.bind(Object(g.a)(r)),r.handleFlaggedItems=r.handleFlaggedItems.bind(Object(g.a)(r)),r}return Object(d.a)(n,[{key:"convertStringToArray",value:function(e){for(var t=e.replaceAll("."," ").split(","),n=[],r=0;r<t.length;r++)n.push(t[r].trim());return n}},{key:"handleInput",value:function(e){this.setState({inputString:e.target.value})}},{key:"handleWantedItems",value:function(e){this.setState({wantedItemsString:e.target.value})}},{key:"handleFlaggedItems",value:function(e){this.setState({flaggedItemsString:e.target.value})}},{key:"render",value:function(){var e=this;return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("div",{className:"input",id:"input",children:Object(j.jsx)("textarea",{id:"textarea-input",placeholder:"paste the list of ingredients here",onChange:this.handleInput})}),Object(j.jsx)("div",{className:"input",id:"input-wanted",children:Object(j.jsx)("textarea",{id:"textarea-input-wanted",placeholder:"paste wanted ingredients here",onChange:this.handleWantedItems})}),Object(j.jsx)("div",{className:"input",id:"input-flagged",children:Object(j.jsx)("textarea",{id:"textarea-input-flagged",placeholder:"paste unwanted ingredients here",onChange:this.handleFlaggedItems})}),Object(j.jsx)("button",{onClick:function(){""!=e.state.inputString&&e.setState({inputArray:e.convertStringToArray(e.state.inputString),wantedItemsArray:e.convertStringToArray(e.state.wantedItemsString),flaggedItemsArray:e.convertStringToArray(e.state.flaggedItemsString)})},children:"Tag my Ingredients"}),Object(j.jsxs)("div",{id:"result",children:[Object(j.jsx)("h3",{children:"Product Summary:"}),Object(j.jsx)(b,{inputArray:this.state.inputArray,flaggedItemsArray:this.state.flaggedItemsArray,wantedItemsArray:this.state.wantedItemsArray}),Object(j.jsx)(m,{inputArray:this.state.inputArray,flaggedItemsArray:this.state.flaggedItemsArray,wantedItemsArray:this.state.wantedItemsArray})]})]})}}]),n}(r.Component),O=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={},r}return Object(d.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("h2",{children:"Welcome to BetterLabel\u2122!"}),Object(j.jsx)("p",{children:"BetterLabel\u2122 is here to help reading labels easier than before."}),Object(j.jsxs)("p",{children:["BetterLabel\u2122 can help you:",Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"tag wanted and unwanted ingredients"})," from an ingredients list"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"compare ingredients"})," between 2 products"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("strong",{children:"find common ingredients"})," between unlimited number of products"]})]}),Object(j.jsx)("br",{}),"See the FAQ section on how to use BetterLabel\u2122 \ud83d\ude0a"]}),Object(j.jsxs)("div",{children:["Q. How do I tag ingredients from a list?",Object(j.jsx)("br",{}),"A. (pic + explanation)",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Q. How do I compare ingredients between products?",Object(j.jsx)("br",{}),"A. (pic + explanation)",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Q. How do I find common ingredients from multiple products?",Object(j.jsx)("br",{}),"A. (pic + explanation)",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"Q. Is my data being sent anywhere?",Object(j.jsx)("br",{}),"A. No. BetterLabel\u2122 is a client-based website developed using ReactJS. The calculations are all made on your browser, so no data is being exchanged to any remote server.",Object(j.jsx)("br",{})]})]})}}]),n}(r.Component),y=n(9),v=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).findCommonIngredients=function(){var e=new Map;r.state.items.forEach((function(t){t.ingredients.forEach((function(n){if(e.has(n)){var r=e.get(n);r.push(t.name),e.set(n,r)}else e.set(n,[t.name])}))}));var t=new Map(Object(y.a)(e.entries()).sort((function(e,t){return t[1].length-e[1].length})));console.log(t),r.setState({map:t}),console.log(r.state.items)},r.convertStringToArray=function(e){for(var t=e.replaceAll("."," ").split(","),n=[],r=0;r<t.length;r++)n.push(t[r].trim());return n},r.itemFlagFormatter=function(e){if(void 0!==r.props.flaggedItemsArray)for(var t=0;t<r.props.flaggedItemsArray.length;t++){if(e.toLowerCase()==r.props.flaggedItemsArray[t].toLowerCase())return Object(j.jsx)("div",{className:"ingredients flagged",style:{borderColor:"red"},children:e});if(""!=r.props.flaggedItemsArray[t]&&e.toLowerCase().includes(r.props.flaggedItemsArray[t].toLowerCase()))return Object(j.jsx)("div",{className:"ingredients flagged",style:{borderColor:"orange"},children:e})}if(void 0!==r.props.wantedItemsArray)for(var n=0;n<r.props.wantedItemsArray.length;n++)if(e.toLowerCase()==r.props.wantedItemsArray[n].toLowerCase())return Object(j.jsx)("div",{className:"ingredients wanted",style:{borderColor:"green"},children:e});return Object(j.jsx)("div",{className:"ingredients",style:{borderColor:"aliceblue"},children:e})},r.addItem=function(){if(""!==r.state.inputName&&""!==r.state.input){var e={name:r.state.inputName,ingredients:r.convertStringToArray(r.state.input)};document.getElementById("commoningredients-name").value="",document.getElementById("commoningredients-input").value="",r.setState((function(t){return{items:[].concat(Object(y.a)(t.items),[e])}}))}else alert("Please input name AND ingredients list to add item")},r.deleteItem=function(e){},r.handleInput=function(e){r.setState({input:e.target.value})},r.handleInputName=function(e){r.setState({inputName:e.target.value})},r.displayItem=function(e){return Object(j.jsx)("div",{id:e.name,className:"commonIngredientItem",children:Object(j.jsx)("div",{children:e.name})})},r.state={items:[{name:"sample item",ingredients:["ingredient_a","ingredient_b","ingredient_c","ingredient_d"]},{name:"sample item 2",ingredients:["ingredient_d","ingredient_e","ingredient_f","ingredient_g"]},{name:"sample item 3",ingredients:["ingredient_c","ingredient_d","ingredient_e"]}],map:new Map,input:"",inputName:""},r}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("div",{children:this.state.items.map((function(t){return e.displayItem(t)}))}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{id:"commoningredients-name",placeholder:"item name",onChange:this.handleInputName}),Object(j.jsx)("textarea",{id:"commoningredients-input",placeholder:"place list of ingredients",onChange:this.handleInput}),Object(j.jsx)("button",{onClick:this.addItem,children:"Add this Item"})]}),Object(j.jsx)("div",{children:"show results here"}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:function(){e.findCommonIngredients()},children:"find common ingredients"})})]})}}]),n}(r.Component),x=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).pageDisplayReset=function(){e.setState({pageAbout:!1,pageTag:!1,pageMatch:!1,pageCommon:!1})},e.state={pageAbout:!0,pageTag:!1,pageMatch:!1,pageCommon:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"BetterLabel\u2122"})}),Object(j.jsxs)("div",{id:"",children:[Object(j.jsx)("button",{disabled:this.state.pageAbout,onClick:function(){e.pageDisplayReset(),e.setState({pageAbout:!0})},children:"About"}),Object(j.jsx)("button",{disabled:this.state.pageTag,onClick:function(){e.pageDisplayReset(),e.setState({pageTag:!0})},children:"Tag my Ingredients"}),Object(j.jsx)("button",{disabled:this.state.pageMatch,onClick:function(){e.pageDisplayReset(),e.setState({pageMatch:!0})},children:"Compare Products"}),Object(j.jsx)("button",{disabled:this.state.pageCommon,onClick:function(){e.pageDisplayReset(),e.setState({pageCommon:!0})},children:"Find Common Ingredients"})]}),this.state.pageAbout&&Object(j.jsx)(O,{}),this.state.pageTag&&Object(j.jsx)(f,{}),this.state.pageMatch&&Object(j.jsx)(p,{}),this.state.pageCommon&&Object(j.jsx)(v,{})]})}}]),n}(r.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),I()},7:function(e,t,n){}},[[24,1,2]]]);
//# sourceMappingURL=main.874ef3ff.chunk.js.map