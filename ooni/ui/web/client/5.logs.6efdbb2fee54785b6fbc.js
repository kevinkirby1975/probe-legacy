webpackJsonp([5],{551:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadOlder=t.loadLatest=t.loadingLogsSucceeded=t.loadingLogs=t.LOADING_LOGS_FAILED=t.LOADING_LOGS_SUCCEEDED=t.LOADING_LOGS=t.UPLOADING_LOGS_FAILED=t.UPLOADING_LOGS_SUCCEEDED=t.UPLOADING_LOGS=void 0;var n=a(51),l=(t.UPLOADING_LOGS="UPLOADING_LOGS",t.UPLOADING_LOGS_SUCCEEDED="UPLOADING_LOGS_SUCCEEDED",t.UPLOADING_LOGS_FAILED="UPLOADING_LOGS_FAILED",t.LOADING_LOGS="LOADING_LOGS"),o=t.LOADING_LOGS_SUCCEEDED="LOADING_LOGS_SUCCEEDED",r=(t.LOADING_LOGS_FAILED="LOADING_LOGS_FAILED",t.loadingLogs=function(){return{type:l}}),s=t.loadingLogsSucceeded=function(e){return{type:o,latest:e.latest,older:e.older}};t.loadLatest=function(){return function(e,t){return e(r()),(0,n.fetch)("/api/logs").then(function(e){return e.json()}).then(function(t){e(s(t))}).catch(function(e){console.log(e)})}},t.loadOlder=function(){return function(e,t){return e(r()),(0,n.fetch)("/api/logs?all=true").then(function(e){return e.json()}).then(function(t){e(s(t))}).catch(function(e){console.log(e)})}}},816:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(555),o=n(l),r=a(70),s=n(r),u=a(36),d=n(u),c=a(52),i=n(c),f=a(38),L=n(f),g=a(37),h=n(g),D=a(2),O=n(D),_=a(688),p=n(_);a(957);var E=function(e){function t(e){(0,d.default)(this,t);var a=(0,L.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.propTypes={logData:O.default.PropTypes.string},a.state={logData:e.logData,sharing:!1,shareUrl:null},a.onShare=a.onShare.bind(a),a.handleChange=a.handleChange.bind(a),a}return(0,h.default)(t,e),(0,i.default)(t,[{key:"handleChange",value:function(e){this.setState({logData:e.target.value})}},{key:"onShare",value:function(){var e=this;this.setState({sharing:!0}),(0,p.default)("https://api.github.com/gists",{method:"POST",headers:{"Content-Type":"application/json"},body:(0,o.default)({description:"ooniprobe logs "+new Date,public:!1,files:{"ooniprobe-logs.txt":{content:this.state.logData}}})}).then(function(e){return e.json()}).then(function(t){e.setState({sharing:!1,shareUrl:t.html_url})}).catch(function(t){e.setState({sharing:!1})}),event.preventDefault()}},{key:"componentWillReceiveProps",value:function(e){e.logData!==this.props.logData&&this.setState({logData:e.logData})}},{key:"render",value:function(){return O.default.createElement("div",{className:"log-container"},O.default.createElement("div",{className:"row"},O.default.createElement("div",{className:"col-md-12"},O.default.createElement("textarea",{className:"logarea",value:this.state.logData,onChange:this.handleChange}))),this.state.shareUrl&&O.default.createElement("div",{className:"row"},O.default.createElement("div",{className:"col-xs-8"},"Share URL: ",O.default.createElement("a",{href:this.state.shareUrl},this.state.shareUrl))),O.default.createElement("div",{className:"row"},this.state.sharing?O.default.createElement("div",{className:"col-xs-3"},O.default.createElement("i",{className:"fa fa-spinner fa-pulse fa-3x fa-fw"})," uploading"):O.default.createElement("div",{className:"col-xs-3"},O.default.createElement("button",{className:"btn btn-secondary",onClick:this.onShare},O.default.createElement("i",{className:"fa fa-share-square-o"})," share"))))}}]),t}(O.default.Component),G=function(e){var t=e.olderLogs,a=e.latestLog,n=e.loadOlderLogs;return O.default.createElement("div",null,O.default.createElement(E,{logData:a}),O.default.createElement("div",{className:"row"},O.default.createElement("div",{className:"col-xs-8"},O.default.createElement("button",{className:"btn btn-secondary",onClick:n},"load older logs"))),t.map(function(e){return O.default.createElement(E,{logData:e})}))};G.propTypes={latestLog:O.default.PropTypes.string,olderLogs:O.default.PropTypes.array,loadOlderLogs:O.default.PropTypes.func},t.default=G},817:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(29),o=a(816),r=n(o),s=a(551),u=function(e){return{loadOlderLogs:function(){e((0,s.loadOlder)())}}},d=function(e){return{latestLog:e.logs.latest,olderLogs:e.logs.older}};t.default=(0,l.connect)(d,u)(r.default)},819:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1],a=i[t.type];return a?a(e,t):e}Object.defineProperty(t,"__esModule",{value:!0});var o,r=a(48),s=n(r),u=a(11),d=n(u);t.logsReducer=l;var c=a(551),i=(o={},(0,s.default)(o,c.UPLOADING_LOGS,function(e){return(0,d.default)({},e,{uploading:!0})}),(0,s.default)(o,c.LOADING_LOGS,function(e){return(0,d.default)({},e,{loading:!0})}),(0,s.default)(o,c.LOADING_LOGS_SUCCEEDED,function(e,t){return(0,d.default)({},e,{loading:!1,latest:t.latest,older:t.older})}),o),f={loading:!1,uploading:!1,latest:"",older:[]}},957:953});