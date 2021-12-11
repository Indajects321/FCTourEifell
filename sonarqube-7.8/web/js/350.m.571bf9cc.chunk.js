(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{376:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var s=a(363),n=a(405),l=a(364);function i(e){return s.createElement(n,Object.assign({className:l("modal",{"modal-small":"small"===e.size,"modal-medium":"medium"===e.size,"modal-large":"large"===e.size}),isOpen:!0,overlayClassName:l("modal-overlay",{"modal-no-backdrop":e.noBackdrop})},e))}n.setAppElement("#content")},429:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var s=a(363),n=a(529),l=a(0);function i(e){let t=e.className,a=e.severity;return a?s.createElement("span",{className:t},s.createElement(n.a,{className:"little-spacer-right",severity:a}),Object(l.l)("severity",a)):null}},498:function(e,t,a){var s;
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
!function(){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),l={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen};void 0===(s=function(){return l}.call(t,a,t,e))||(e.exports=s)}()},964:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return h});var s=a(363),n=a(376),l=a(384),i=a(429),r=a(408),o=a(483),c=a(0),m=a(474),d=a(365),u=a(383);class h extends s.PureComponent{constructor(e){var t;super(e),t=this,this.mounted=!1,this.getParams=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props,a=e.activation,s=e.rule;const n={};if(s&&s.params){for(const e of s.params)n[e.key]=e.defaultValue||"";if(a&&a.params)for(const e of a.params)n[e.key]=e.value}return n},this.getQualityProfilesWithDepth=function(){let e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.props).profiles;return Object(m.g)(e.filter(e=>!e.isBuiltIn&&e.actions&&e.actions.edit&&e.language===t.props.rule.lang)).map(e=>Object.assign({},e,{depth:e.depth-1}))},this.handleFormSubmit=(e=>{e.preventDefault(),this.setState({submitting:!0});const t={key:this.state.profile,organization:this.props.organization,params:this.state.params,rule:this.props.rule.key,severity:this.state.severity};Object(r.a)(t).then(()=>this.props.onDone(t.severity)).then(()=>{this.mounted&&(this.setState({submitting:!1}),this.props.onClose())},()=>{this.mounted&&this.setState({submitting:!1})})}),this.handleParameterChange=(e=>{const t=e.currentTarget,a=t.name,s=t.value;this.setState(e=>({params:Object.assign({},e.params,{[a]:s})}))}),this.handleProfileChange=(e=>{let t=e.value;this.setState({profile:t})}),this.handleSeverityChange=(e=>{let t=e.value;this.setState({severity:t})}),this.renderSeverityOption=(e=>{let t=e.value;return s.createElement(i.a,{severity:t})});const a=this.getQualityProfilesWithDepth(e);this.state={params:this.getParams(e),profile:a.length>0?a[0].key:"",severity:e.activation?e.activation.severity:e.rule.severity,submitting:!1}}componentDidMount(){this.mounted=!0}componentWillUnmount(){this.mounted=!1}render(){const e=this.props,t=e.activation,a=e.rule,i=this.state,r=i.profile,m=i.severity,h=i.submitting,p=a.params,v=void 0===p?[]:p,f=this.getQualityProfilesWithDepth(),y=!!a.templateKey,g=f.length<=0,b=!!t;return s.createElement(n.a,{contentLabel:this.props.modalHeader,onRequestClose:this.props.onClose,size:"small"},s.createElement("form",{onSubmit:this.handleFormSubmit},s.createElement("div",{className:"modal-head"},s.createElement("h2",null,this.props.modalHeader)),s.createElement("div",{className:"modal-body"},!b&&g&&s.createElement(u.a,{variant:"info"},Object(c.l)("coding_rules.active_in_all_profiles")),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(c.l)("coding_rules.quality_profile")),s.createElement(l.c,{className:"js-profile",clearable:!1,disabled:h||1===f.length,onChange:this.handleProfileChange,options:f.map(e=>({label:"   ".repeat(e.depth)+e.name,value:e.key})),value:r})),s.createElement("div",{className:"modal-field"},s.createElement("label",null,Object(c.l)("severity")),s.createElement(l.c,{className:"js-severity",clearable:!1,disabled:h,onChange:this.handleSeverityChange,optionRenderer:this.renderSeverityOption,options:o.e.map(e=>({label:Object(c.l)("severity",e),value:e})),searchable:!1,value:m,valueRenderer:this.renderSeverityOption})),y?s.createElement("div",{className:"modal-field"},s.createElement("p",{className:"note"},Object(c.l)("coding_rules.custom_rule.activation_notice"))):v.map(e=>s.createElement("div",{className:"modal-field",key:e.key},s.createElement("label",{title:e.key},e.key),"TEXT"===e.type?s.createElement("textarea",{disabled:h,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,rows:3,value:this.state.params[e.key]||""}):s.createElement("input",{disabled:h,name:e.key,onChange:this.handleParameterChange,placeholder:e.defaultValue,type:"text",value:this.state.params[e.key]||""}),s.createElement("div",{className:"note",dangerouslySetInnerHTML:{__html:e.htmlDesc||""}})))),s.createElement("footer",{className:"modal-foot"},h&&s.createElement("i",{className:"spinner spacer-right"}),s.createElement(d.i,{disabled:h||g},b?Object(c.l)("save"):Object(c.l)("coding_rules.activate")),s.createElement(d.h,{disabled:h,onClick:this.props.onClose},Object(c.l)("cancel")))))}}}}]);
//# sourceMappingURL=350.m.571bf9cc.chunk.js.map