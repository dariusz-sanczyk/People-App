import{Aa as we,B as de,Ba as N,Ca as Fe,Ga as R,H as he,Ha as Ce,Ia as Ae,Ja as B,K,L as g,N as y,P as h,Q as p,T as L,V as fe,X as ge,Y as De,da as pe,e as ae,ha as X,ja as me,k as ue,l as Z,ma as S,na as q,p as I,v as ce,va as ye,x as le,xa as Ee,ya as F,za as C}from"./chunk-EL7IBIYT.js";var be=(()=>{let t=class t{constructor(){this.buttonTitle=""}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=L({type:t,selectors:[["app-button"]],inputs:{buttonTitle:"buttonTitle"},standalone:!0,features:[B],decls:2,vars:1,consts:[[1,"button"]],template:function(r,s){r&1&&(F(0,"button",0),R(1),C()),r&2&&(S(),Ce(s.buttonTitle))},styles:[".button[_ngcontent-%COMP%]{width:80px;height:32px;border:none;color:#fff;background-color:#3279fd;border-radius:6px}.button[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:#71a0f8}"]});let e=t;return e})();var Ie=null;function J(){return Ie}function yn(e){Ie??=e}var ve=class{};var U=new y(""),Re=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>p(He),providedIn:"platform"});let e=t;return e})();var He=(()=>{let t=class t extends Re{constructor(){super(),this._doc=p(U),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return J().getBaseHref(this._doc)}onPopState(n){let r=J().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=J().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,s){this._history.pushState(n,r,s)}replaceState(n,r,s){this._history.replaceState(n,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Me(e,t){if(e.length==0)return t;if(t.length==0)return e;let i=0;return e.endsWith("/")&&i++,t.startsWith("/")&&i++,i==2?e+t.substring(1):i==1?e+t:e+"/"+t}function Se(e){let t=e.match(/#|\?|$/),i=t&&t.index||e.length,n=i-(e[i-1]==="/"?1:0);return e.slice(0,n)+e.slice(i)}function A(e){return e&&e[0]!=="?"?"?"+e:e}var H=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>p(et),providedIn:"root"});let e=t;return e})(),Qe=new y(""),et=(()=>{let t=class t extends H{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??p(U).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Me(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+A(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${r}${s}`:r}pushState(n,r,s,a){let o=this.prepareExternalUrl(s+A(a));this._platformLocation.pushState(n,r,o)}replaceState(n,r,s,a){let o=this.prepareExternalUrl(s+A(a));this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(r){return new(r||t)(h(Re),h(Qe,8))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var tt=(()=>{let t=class t{constructor(n){this._subject=new pe,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=it(Se(Te(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+A(r))}normalize(n){return t.stripTrailingSlash(rt(this._basePath,Te(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",s=null){this._locationStrategy.pushState(s,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(r)),s)}replaceState(n,r="",s=null){this._locationStrategy.replaceState(s,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(s=>s(n,r))}subscribe(n,r,s){return this._subject.subscribe({next:n,error:r,complete:s})}};t.normalizeQueryParams=A,t.joinWithSlash=Me,t.stripTrailingSlash=Se,t.\u0275fac=function(r){return new(r||t)(h(H))},t.\u0275prov=g({token:t,factory:()=>nt(),providedIn:"root"});let e=t;return e})();function nt(){return new tt(h(H))}function rt(e,t){if(!e||!t.startsWith(e))return t;let i=t.substring(e.length);return i===""||["/",";","?","#"].includes(i[0])?i:t}function Te(e){return e.replace(/\/index.html$/,"")}function it(e){if(new RegExp("^(https?:)?//").test(e)){let[,i]=e.split(/\/\/[^\/]+/);return i}return e}function _e(e,t){t=encodeURIComponent(t);for(let i of e.split(";")){let n=i.indexOf("="),[r,s]=n==-1?[i,""]:[i.slice(0,n),i.slice(n+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}var En="browser",st="server";function ot(e){return e===st}var x=class{};var _=class{},j=class{},b=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(i=>{let n=i.indexOf(":");if(n>0){let r=i.slice(0,n),s=r.toLowerCase(),a=i.slice(n+1).trim();this.maybeSetNormalizedName(r,s),this.headers.has(s)?this.headers.get(s).push(a):this.headers.set(s,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((i,n)=>{this.setHeaderEntries(n,i)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([i,n])=>{this.setHeaderEntries(i,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let i=this.headers.get(t.toLowerCase());return i&&i.length>0?i[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,i){return this.clone({name:t,value:i,op:"a"})}set(t,i){return this.clone({name:t,value:i,op:"s"})}delete(t,i){return this.clone({name:t,value:i,op:"d"})}maybeSetNormalizedName(t,i){this.normalizedNames.has(i)||this.normalizedNames.set(i,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(i=>{this.headers.set(i,t.headers.get(i)),this.normalizedNames.set(i,t.normalizedNames.get(i))})}clone(t){let i=new e;return i.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,i.lazyUpdate=(this.lazyUpdate||[]).concat([t]),i}applyUpdate(t){let i=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,i);let r=(t.op==="a"?this.headers.get(i):void 0)||[];r.push(...n),this.headers.set(i,r);break;case"d":let s=t.value;if(!s)this.headers.delete(i),this.normalizedNames.delete(i);else{let a=this.headers.get(i);if(!a)return;a=a.filter(o=>s.indexOf(o)===-1),a.length===0?(this.headers.delete(i),this.normalizedNames.delete(i)):this.headers.set(i,a)}break}}setHeaderEntries(t,i){let n=(Array.isArray(i)?i:[i]).map(s=>s.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(i=>t(this.normalizedNames.get(i),this.headers.get(i)))}};var ee=class{encodeKey(t){return Pe(t)}encodeValue(t){return Pe(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function ut(e,t){let i=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[a,o]=s==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,s)),t.decodeValue(r.slice(s+1))],d=i.get(a)||[];d.push(o),i.set(a,d)}),i}var ct=/%(\d[a-f0-9])/gi,lt={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Pe(e){return encodeURIComponent(e).replace(ct,(t,i)=>lt[i]??t)}function $(e){return`${e}`}var w=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ee,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=ut(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(i=>{let n=t.fromObject[i],r=Array.isArray(n)?n.map($):[$(n)];this.map.set(i,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let i=this.map.get(t);return i?i[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,i){return this.clone({param:t,value:i,op:"a"})}appendAll(t){let i=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(s=>{i.push({param:n,value:s,op:"a"})}):i.push({param:n,value:r,op:"a"})}),this.clone(i)}set(t,i){return this.clone({param:t,value:i,op:"s"})}delete(t,i){return this.clone({param:t,value:i,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let i=this.encoder.encodeKey(t);return this.map.get(t).map(n=>i+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let i=new e({encoder:this.encoder});return i.cloneFrom=this.cloneFrom||this,i.updates=(this.updates||[]).concat(t),i}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let i=(t.op==="a"?this.map.get(t.param):void 0)||[];i.push($(t.value)),this.map.set(t.param,i);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf($(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var te=class{constructor(){this.map=new Map}set(t,i){return this.map.set(t,i),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function dt(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Oe(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Le(e){return typeof Blob<"u"&&e instanceof Blob}function Ne(e){return typeof FormData<"u"&&e instanceof FormData}function ht(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var M=class e{constructor(t,i,n,r){this.url=i,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let s;if(dt(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s&&(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),this.transferCache=s.transferCache),this.headers??=new b,this.context??=new te,!this.params)this.params=new w,this.urlWithParams=i;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=i;else{let o=i.indexOf("?"),d=o===-1?"?":o<i.length-1?"&":"";this.urlWithParams=i+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Oe(this.body)||Le(this.body)||Ne(this.body)||ht(this.body)?this.body:this.body instanceof w?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Ne(this.body)?null:Le(this.body)?this.body.type||null:Oe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof w?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let i=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=t.transferCache??this.transferCache,a=t.body!==void 0?t.body:this.body,o=t.withCredentials??this.withCredentials,d=t.reportProgress??this.reportProgress,u=t.headers||this.headers,D=t.params||this.params,O=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((m,E)=>m.set(E,t.setHeaders[E]),u)),t.setParams&&(D=Object.keys(t.setParams).reduce((m,E)=>m.set(E,t.setParams[E]),D)),new e(i,n,a,{params:D,headers:u,context:O,reportProgress:d,responseType:r,withCredentials:o,transferCache:s})}},T=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(T||{}),P=class{constructor(t,i=G.Ok,n="OK"){this.headers=t.headers||new b,this.status=t.status!==void 0?t.status:i,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ne=class e extends P{constructor(t={}){super(t),this.type=T.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},z=class e extends P{constructor(t={}){super(t),this.type=T.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},V=class extends P{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},G=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(G||{});function Q(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var re=(()=>{let t=class t{constructor(n){this.handler=n}request(n,r,s={}){let a;if(n instanceof M)a=n;else{let u;s.headers instanceof b?u=s.headers:u=new b(s.headers);let D;s.params&&(s.params instanceof w?D=s.params:D=new w({fromObject:s.params})),a=new M(n,r,s.body!==void 0?s.body:null,{headers:u,context:s.context,params:D,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials,transferCache:s.transferCache})}let o=Z(a).pipe(le(u=>this.handler.handle(u)));if(n instanceof M||s.observe==="events")return o;let d=o.pipe(ce(u=>u instanceof z));switch(s.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return d.pipe(I(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return d.pipe(I(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return d.pipe(I(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return d.pipe(I(u=>u.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new w().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,s={}){return this.request("PATCH",n,Q(s,r))}post(n,r,s={}){return this.request("POST",n,Q(s,r))}put(n,r,s={}){return this.request("PUT",n,Q(s,r))}};t.\u0275fac=function(r){return new(r||t)(h(_))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();function ft(e,t){return t(e)}function gt(e,t,i){return(n,r)=>De(i,()=>t(n,s=>e(s,r)))}var xe=new y(""),Dt=new y(""),pt=new y("");var Be=(()=>{let t=class t extends _{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=p(ye);let s=p(pt,{optional:!0});this.backend=s??n}handle(n){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(xe),...this.injector.get(Dt,[])]));this.chain=s.reduceRight((a,o)=>gt(a,o,this.injector),ft)}let r=this.pendingTasks.add();return this.chain(n,s=>this.backend.handle(s)).pipe(de(()=>this.pendingTasks.remove(r)))}};t.\u0275fac=function(r){return new(r||t)(h(j),h(ge))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();var mt=/^\)\]\}',?\n/;function yt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var ke=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new K(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?ue(r.\u0275loadImpl()):Z(null)).pipe(he(()=>new ae(a=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((c,l)=>o.setRequestHeader(c,l.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let c=n.detectContentTypeHeader();c!==null&&o.setRequestHeader("Content-Type",c)}if(n.responseType){let c=n.responseType.toLowerCase();o.responseType=c!=="json"?c:"text"}let d=n.serializeBody(),u=null,D=()=>{if(u!==null)return u;let c=o.statusText||"OK",l=new b(o.getAllResponseHeaders()),v=yt(o)||n.url;return u=new ne({headers:l,status:o.status,statusText:c,url:v}),u},O=()=>{let{headers:c,status:l,statusText:v,url:oe}=D(),f=null;l!==G.NoContent&&(f=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=f?G.Ok:0);let Y=l>=200&&l<300;if(n.responseType==="json"&&typeof f=="string"){let je=f;f=f.replace(mt,"");try{f=f!==""?JSON.parse(f):null}catch(ze){f=je,Y&&(Y=!1,f={error:ze,text:f})}}Y?(a.next(new z({body:f,headers:c,status:l,statusText:v,url:oe||void 0})),a.complete()):a.error(new V({error:f,headers:c,status:l,statusText:v,url:oe||void 0}))},m=c=>{let{url:l}=D(),v=new V({error:c,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});a.error(v)},E=!1,ie=c=>{E||(a.next(D()),E=!0);let l={type:T.DownloadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),n.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),a.next(l)},se=c=>{let l={type:T.UploadProgress,loaded:c.loaded};c.lengthComputable&&(l.total=c.total),a.next(l)};return o.addEventListener("load",O),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),n.reportProgress&&(o.addEventListener("progress",ie),d!==null&&o.upload&&o.upload.addEventListener("progress",se)),o.send(d),a.next({type:T.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",O),o.removeEventListener("timeout",m),n.reportProgress&&(o.removeEventListener("progress",ie),d!==null&&o.upload&&o.upload.removeEventListener("progress",se)),o.readyState!==o.DONE&&o.abort()}})))}};t.\u0275fac=function(r){return new(r||t)(h(x))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})(),Ue=new y(""),Et="XSRF-TOKEN",wt=new y("",{providedIn:"root",factory:()=>Et}),Ft="X-XSRF-TOKEN",Ct=new y("",{providedIn:"root",factory:()=>Ft}),W=class{},At=(()=>{let t=class t{constructor(n,r,s){this.doc=n,this.platform=r,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=_e(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(r){return new(r||t)(h(U),h(X),h(wt))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();function bt(e,t){let i=e.url.toLowerCase();if(!p(Ue)||e.method==="GET"||e.method==="HEAD"||i.startsWith("http://")||i.startsWith("https://"))return t(e);let n=p(W).getToken(),r=p(Ct);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}function xn(...e){let t=[re,ke,Be,{provide:_,useExisting:Be},{provide:j,useExisting:ke},{provide:xe,useValue:bt,multi:!0},{provide:Ue,useValue:!0},{provide:W,useClass:At}];for(let i of e)t.push(...i.\u0275providers);return fe(t)}var $e=(()=>{let t=class t{constructor(n){this._http=n}getPersonNameAndPic(){let n=["name","picture"];return this._http.get("https://randomuser.me/api/",{params:{inc:n.join(",")}})}};t.\u0275fac=function(r){return new(r||t)(h(re))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var jn=(()=>{let t=class t{constructor(n){this.peopleService=n,this.buttonTitle="New",this.timeCounter=0,this.personData={name:{title:"",first:"",last:""},picture:{large:"",medium:"",thumbnail:""}}}ngOnInit(){this.getRandomPerson(),this.startTimer()}getRandomPerson(){this.peopleService.getPersonNameAndPic().subscribe(n=>{this.personData=n.results[0],this.timeCounter=0})}startTimer(){this.interval=setInterval(()=>{this.timeCounter===4?this.getRandomPerson():this.timeCounter++},1e3)}pauseTimer(){clearInterval(this.interval)}ngOnDestroy(){clearInterval(this.interval)}};t.\u0275fac=function(r){return new(r||t)(q($e))},t.\u0275cmp=L({type:t,selectors:[["app-people"]],standalone:!0,features:[B],decls:9,vars:4,consts:[[1,"person","container"],[1,"person__data"],[1,"img-container",3,"mouseover","mouseleave"],["alt","User avatar",3,"src"],[3,"mouseover","mouseleave"],[3,"mouseover","mouseleave","click","buttonTitle"]],template:function(r,s){r&1&&(F(0,"section",0)(1,"article",1)(2,"div",2),N("mouseover",function(){return s.pauseTimer()})("mouseleave",function(){return s.startTimer()}),we(3,"img",3),C(),F(4,"p"),R(5,"Hi, My name is"),C(),F(6,"h1",4),N("mouseover",function(){return s.pauseTimer()})("mouseleave",function(){return s.startTimer()}),R(7),C()(),F(8,"app-button",5),N("mouseover",function(){return s.pauseTimer()})("mouseleave",function(){return s.startTimer()})("click",function(){return s.getRandomPerson()}),C()()),r&2&&(S(3),Fe("src",s.personData.picture.large,me),S(4),Ae(" ",s.personData.name.first," ",s.personData.name.last," "),S(),Ee("buttonTitle",s.buttonTitle))},dependencies:[be],styles:[".person[_ngcontent-%COMP%]{text-align:center}.person__data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:.5rem;margin-bottom:1rem}.person__data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#acacac}.person[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{width:128px;height:128px;margin-bottom:.5rem}.person[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;border-radius:8px}"]});let e=t;return e})();export{J as a,yn as b,ve as c,U as d,H as e,tt as f,_e as g,En as h,ot as i,x as j,xn as k,jn as l};