(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{2025:function(e,n,t){"use strict";t.r(n);var o=t(693),s=t(694),i=function(){return(i=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},p=2,r=2,u=4,a=9,l=10;function c(e,n){var t=e[0],o=e[1],s=n[0];return!(t>n[1]+u||o<s-u)}function h(e,n){return e.map(function(e){for(var t=[],o=e.start;o<=e.end;o++)n[o]&&t.push(n[o]);return t}).filter(function(e){return e.length>0})}function d(e){var n=e.direction,t=e.lines,o=e.snippetIndex,s=e.snippets,i=s[o],p={start:Math.max(0,i[0].line-("up"===n?l:0)),end:i[i.length-1].line+("down"===n?l:0)},r=[];return s.forEach(function(e,n){var t={start:e[0].line,end:e[e.length-1].line};n===o?r.push(p):c([t.start,t.end],[p.start,p.end])?(p.start=Math.min(t.start,p.start),p.end=Math.max(t.end,p.end)):r.push(t)}),h(r,t)}var f,m=t(1367),g=t(1373),y=t(1080),b=t(1218),L=t(1365),v=t(28),P=t(827),k=(f=function(e,n){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(e,n)},function(e,n){function t(){this.constructor=e}f(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),O=32,I=function(e){function n(n){var t=e.call(this,n)||this;return t.doScroll=function(e){t.props.scroll&&t.props.scroll(e);var n=t.node.current;n&&Object(P.a)(e,{leftOffset:O,rightOffset:n.getBoundingClientRect().width-O,parent:n})},t.expandBlock=function(e){return function(){return t.props.expandBlock(t.props.index,e)}},t.node=o.createRef(),t}return k(n,e),n.prototype.renderLine=function(e){var n=this,t=e.displayDuplications,s=e.index,i=e.issuesForLine,p=e.issueLocations,r=e.line,u=e.snippet,a=e.symbols,l=e.verticalBuffer,c=Object(b.b)(r,this.props.locations),h=this.props,d=h.duplications,f=h.duplicationsByLine,m=d?d.length:0,y=m&&f&&f[r.line]||[],v=i.some(function(e){return e.key===n.props.issue.key});return o.createElement(g.a,{branchLike:this.props.branchLike,displayAllIssues:!1,displayCoverage:!0,displayDuplications:t,displayIssues:!v||i.length>1,displayLocationMarkers:!0,duplications:y,duplicationsCount:m,highlighted:!1,highlightedLocationMessage:Object(L.b)(this.props.highlightedLocationMessage,c),highlightedSymbols:Object(L.a)(a,this.props.highlightedSymbols),issueLocations:p,issuePopup:this.props.issuePopup,issues:i,key:r.line,last:!1,line:r,linePopup:this.props.linePopup,loadDuplications:this.props.loadDuplications,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onIssueSelect:function(){},onIssueUnselect:function(){},onIssuesClose:this.props.handleCloseIssues,onIssuesOpen:this.props.handleOpenIssues,onLinePopupToggle:this.props.handleLinePopupToggle,onLocationSelect:this.props.onLocationSelect,onSymbolClick:this.props.handleSymbolClick,openIssues:this.props.openIssuesByLine[r.line],previousLine:s>0?u[s-1]:void 0,renderDuplicationPopup:this.props.renderDuplicationPopup,scroll:this.doScroll,secondaryIssueLocations:c,selectedIssue:Object(L.c)(this.props.issue.key,i),verticalBuffer:l})},n.prototype.render=function(){var e=this,n=this.props,t=n.component,s=n.issue,i=n.issuesByLine,p=void 0===i?{}:i,r=n.last,u=n.locationsByLine,l=n.openIssuesByLine,c=n.snippet,h=t.measures&&t.measures.lines&&parseInt(t.measures.lines,10),d=Object(y.e)(c),f=c[c.length-1].line,g=s.textRange?s.textRange.endLine:s.line,b=Math.max.apply(Math,Object.keys(p).map(function(e){return parseInt(e,10)}).filter(function(e){return function(e,n){return e>=n[0].line&&e<=n[n.length-1].line}(e,c)&&(e===g||l[e])})),L=r?Math.max(0,a-(f-b)):0,P=c.some(function(e){return!!e.duplicated});return o.createElement("div",{className:"source-viewer-code snippet",ref:this.node},o.createElement("table",{className:"source-table"},o.createElement("tbody",null,c[0].line>1&&o.createElement("tr",{className:"expand-block expand-block-above"},o.createElement("td",{colSpan:5},o.createElement("button",{"aria-label":Object(v.l)("source_viewer.expand_above"),onClick:this.expandBlock("up"),type:"button"},o.createElement(m.a,null)))),c.map(function(n,t){return e.renderLine({displayDuplications:P,index:t,issuesForLine:p[n.line]||[],issueLocations:u[n.line]||[],line:n,snippet:c,symbols:d[n.line],verticalBuffer:t===c.length-1?L:0})}),(!h||c[c.length-1].line<h)&&o.createElement("tr",{className:"expand-block expand-block-below"},o.createElement("td",{colSpan:5},o.createElement("button",{"aria-label":Object(v.l)("source_viewer.expand_below"),onClick:this.expandBlock("down"),type:"button"},o.createElement(m.a,null)))))))},n}(o.PureComponent),x=t(1366),S=t(1103),j=t(737),B=t(717),C=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),w=function(){return(w=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},_=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={additionalLines:{},highlightedSymbols:[],loading:!1,openIssuesByLine:{},snippets:[]},n.expandBlock=function(e,t){var o=n.props,s=o.branchLike,i=o.snippetGroup.component.key,p=n.state.snippets[e],r=l+u-1,a="up"===t?{from:Math.max(1,p[0].line-r),to:p[0].line-1}:{from:p[p.length-1].line+1,to:p[p.length-1].line+r};Object(j.s)(w({key:i},a,Object(B.d)(s))).then(function(e){return e.reduce(function(e,n){return n.coverageStatus=Object(S.a)(n),e[n.line]=n,e},{})}).then(function(o){n.mounted&&n.setState(function(s){var i=s.additionalLines,p=s.snippets,r=w({},i,o);return{additionalLines:r,snippets:d({direction:t,lines:w({},r,n.props.snippetGroup.sources),snippetIndex:e,snippets:p})}})},function(){})},n.expandComponent=function(){var e=n.props,t=e.branchLike,o=e.snippetGroup.component.key;n.setState({loading:!0}),Object(j.s)(w({key:o},Object(B.d)(t))).then(function(e){n.mounted&&n.setState({loading:!1,snippets:[e]})},function(){n.mounted&&n.setState({loading:!1})})},n.handleLinePopupToggle=function(e){n.props.onLinePopupToggle(w({},e,{component:n.props.snippetGroup.component.key}))},n.handleOpenIssues=function(e){n.setState(function(n){var t;return{openIssuesByLine:w({},n.openIssuesByLine,(t={},t[e.line]=!0,t))}})},n.handleCloseIssues=function(e){n.setState(function(n){var t;return{openIssuesByLine:w({},n.openIssuesByLine,(t={},t[e.line]=!1,t))}})},n.handleSymbolClick=function(e){n.setState({highlightedSymbols:e})},n.loadDuplications=function(e){n.props.loadDuplications(n.props.snippetGroup.component.key,e)},n.renderDuplicationPopup=function(e,t){return n.props.renderDuplicationPopup(n.props.snippetGroup.component,e,t)},n}return C(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.createSnippetsFromProps()},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.createSnippetsFromProps=function(){var e,n,t,o=(e=this.props.snippetGroup.locations,n=this.props.snippetGroup.sources,t=this.props.last,void 0===n&&(n={}),h(e.reduce(function(n,o,s){var i,u=Math.max(1,o.textRange.startLine-p),l=o.textRange.endLine+(t&&s===e.length-1?a:r);return n=n.filter(function(e){if(c([e.start,e.end],[u,l])){var n=!1;return i||(i=e,n=!0),i.start=Math.min(u,e.start,i.start),i.end=Math.max(l,e.end,i.end),n}return!0}),void 0===i&&n.push({start:u,end:l}),n},[]),n));this.setState({snippets:o})},n.prototype.renderSnippet=function(e){var n=e.index,t=e.issuesByLine,s=e.last,i=e.locationsByLine,p=e.snippet;return o.createElement(I,{branchLike:this.props.branchLike,component:this.props.snippetGroup.component,expandBlock:this.expandBlock,handleCloseIssues:this.handleCloseIssues,handleLinePopupToggle:this.handleLinePopupToggle,handleOpenIssues:this.handleOpenIssues,handleSymbolClick:this.handleSymbolClick,highlightedLocationMessage:this.props.highlightedLocationMessage,highlightedSymbols:this.state.highlightedSymbols,index:n,issue:this.props.issue,issuePopup:this.props.issuePopup,issuesByLine:t,key:n,last:s,loadDuplications:this.loadDuplications,locations:this.props.locations,locationsByLine:i,onIssueChange:this.props.onIssueChange,onIssuePopupToggle:this.props.onIssuePopupToggle,onLocationSelect:this.props.onLocationSelect,openIssuesByLine:this.state.openIssuesByLine,renderDuplicationPopup:this.renderDuplicationPopup,scroll:this.props.scroll,snippet:p})},n.prototype.render=function(){var e=this,n=this.props,t=n.branchLike,i=n.duplications,p=n.issue,r=n.issuesByLine,u=n.last,a=n.snippetGroup,l=this.state,c=l.loading,h=l.snippets,d=Object(y.d)([p]),f=1===h.length&&a.component.measures&&h[0].length===parseInt(a.component.measures.lines||"",10);return o.createElement("div",{className:s("component-source-container",{"source-duplications-expanded":i&&i.length>0})},o.createElement(x.a,{branchLike:t,expandable:!f,loading:c,onExpand:this.expandComponent,sourceViewerFile:a.component}),h.map(function(n,t){return e.renderSnippet({snippet:n,index:t,issuesByLine:u?r:{},locationsByLine:u&&t===h.length-1?d:{},last:u&&t===h.length-1})}))},n}(o.PureComponent),E=t(702),D=t(1368),M=t(1217),T=t(959),F=t(744),G=t(1369),R=function(){var e=function(n,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])})(n,t)};return function(n,t){function o(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}(),N=function(){return(N=Object.assign||function(e){for(var n,t=1,o=arguments.length;t<o;t++)for(var s in n=arguments[t])Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);return e}).apply(this,arguments)},A=function(e){function n(){var n=null!==e&&e.apply(this,arguments)||this;return n.mounted=!1,n.state={components:{},duplicationsByLine:{},loading:!0},n.fetchDuplications=function(e,t){Object(j.p)(N({key:e},Object(B.d)(n.props.branchLike))).then(function(o){n.mounted&&n.setState(function(n){return{duplicatedFiles:o.files,duplications:o.duplications,duplicationsByLine:Object(y.a)(o.duplications),linePopup:1===o.duplications.length?{component:e,index:0,line:t.line,name:"duplications"}:n.linePopup}})},function(){})},n.handleIssuePopupToggle=function(e,t,o){n.setState(function(n){var s=n.issuePopup&&n.issuePopup.name===t&&n.issuePopup.issue===e;return!1===o||s?!0!==o&&s?{issuePopup:void 0}:null:{issuePopup:{issue:e,name:t}}})},n.handleLinePopupToggle=function(e){var t=e.component,o=e.index,s=e.line,i=e.name,p=e.open;n.setState(function(e){var n=void 0!==e.linePopup&&e.linePopup.line===s&&e.linePopup.name===i&&e.linePopup.component===t&&e.linePopup.index===o;return!1===p||n?!0!==p&&n?{linePopup:void 0}:null:{linePopup:{component:t,index:o,line:s,name:i}}})},n.handleCloseLinePopup=function(){n.setState({linePopup:void 0})},n.renderDuplicationPopup=function(e,t,s){var i=n.state,p=i.duplicatedFiles,r=i.duplications;if(!e||!p)return null;var u=Object(G.b)(r,t);return o.createElement(T.a.Consumer,null,function(t){var i=t.openComponent;return o.createElement(D.a,{blocks:Object(G.a)(u,s),branchLike:n.props.branchLike,duplicatedFiles:p,inRemovedComponent:Object(G.c)(u),onClose:n.handleCloseLinePopup,openComponent:i,sourceViewerFile:e})})},n}return R(n,e),n.prototype.componentDidMount=function(){this.mounted=!0,this.fetchIssueFlowSnippets(this.props.issue.key)},n.prototype.componentWillReceiveProps=function(e){e.issue.key!==this.props.issue.key&&this.fetchIssueFlowSnippets(e.issue.key)},n.prototype.componentWillUnmount=function(){this.mounted=!1},n.prototype.fetchIssueFlowSnippets=function(e){var n=this;this.setState({loading:!0}),Object(F.h)(e).then(function(e){n.mounted&&(n.setState({components:e,issuePopup:void 0,linePopup:void 0,loading:!1}),n.props.onLoaded&&n.props.onLoaded())},function(){n.mounted&&n.setState({loading:!1})})},n.prototype.render=function(){var e=this;if(this.state.loading)return o.createElement("div",null,o.createElement(E.a,null));var n=this.state,t=n.components,s=n.duplications,p=n.duplicationsByLine,r=n.linePopup,u=Object(y.b)(this.props.issues),a=function(e,n){var t,o="",s=[];return e.forEach(function(e,p){e.component!==o&&(t=i({},n[e.component]||{component:{key:e.component,measures:{},path:"",project:"",projectName:"",q:"FIL",uuid:""},sources:[]},{locations:[]}),s.push(t),o=e.component),e.index=p,t.locations.push(e)}),s}(this.props.locations,t);return o.createElement("div",null,a.map(function(n,t){var i={};return r&&n.component.key===r.component&&(i={duplications:s,duplicationsByLine:p,linePopup:{index:r.index,line:r.line,name:r.name}}),o.createElement(M.a.Provider,{key:e.props.issue.key+"-"+e.props.selectedFlowIndex+"-"+t,value:{branchLike:e.props.branchLike,file:n.component}},o.createElement(_,N({branchLike:e.props.branchLike,highlightedLocationMessage:e.props.highlightedLocationMessage,issue:e.props.issue,issuePopup:e.state.issuePopup,issuesByLine:u[n.component.key]||{},last:t===a.length-1,loadDuplications:e.fetchDuplications,locations:n.locations||[],onIssueChange:e.props.onIssueChange,onIssuePopupToggle:e.handleIssuePopupToggle,onLinePopupToggle:e.handleLinePopupToggle,onLocationSelect:e.props.onLocationSelect,renderDuplicationPopup:e.renderDuplicationPopup,scroll:e.props.scroll,snippetGroup:n},i)))}))},n}(o.PureComponent);n.default=A}}]);
//# sourceMappingURL=371.1560762716920.chunk.js.map