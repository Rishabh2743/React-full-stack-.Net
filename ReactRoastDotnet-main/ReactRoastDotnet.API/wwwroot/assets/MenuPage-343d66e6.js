import{j as r,u as Ze,R as ve,r as x,s as Qe,a as Xe}from"./index-e97df17e.js";const y={pageNum:"pageNumber",pageSize:"pageSize",pageSort:"sort",drinkName:"drinkName"},et="1",tt="6";function nt(e){const t=new URLSearchParams,n=e.get(y.pageNum)??"",a=e.get(y.pageSize)??"",s=e.get(y.pageSort),o=e.get(y.drinkName);return parseInt(n)>0?t.append(y.pageNum,n):t.append(y.pageNum,et),parseInt(a)>0?t.append(y.pageSize,a):t.append(y.pageSize,tt),s&&t.append(y.pageSort,s),o&&t.append(y.drinkName,o),t}function st(){return r.jsx("div",{className:"hero-content mt-8 text-center",children:r.jsxs("div",{className:"max-w-md text-gray-900 dark:text-white",children:[r.jsxs("h1",{className:"mb-4 text-3xl font-extrabold md:text-5xl lg:text-5xl",children:["Order drinks",r.jsxs("em",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:[" ","to-go!"]})," "]}),r.jsx("p",{className:"py-4 text-xl",children:"Our espresso drinks are made by our awesome baristas using high quality coffee beans."})]})})}function rt(){return r.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:[r.jsx("title",{children:"Error"}),r.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})]})}function at(){return r.jsxs("section",{className:"alert alert-error max-w-screen-sm mx-auto",children:[r.jsx(rt,{}),r.jsx("h2",{className:"text-error-content",children:"Error! Failed to fetch products."})]})}function ot(e){return{id:e.id,type:e.type,name:e.name,price:e.price,quantity:1}}function it(e){const t=Ze(a=>a.addCartItem),n=e.productItem.price.toLocaleString("en-US",{style:"currency",currency:"USD"});return r.jsxs("div",{className:"card sm:card-side bg-base-100 shadow-xl pt-2",children:[r.jsx("cite",{className:"w-48 flex-none self-center tooltip tooltip-bottom tooltip-accent","data-tip":"Image by "+e.productItem.imageCreator+" at Unsplash",children:r.jsx("figure",{className:"justify-center self-center",children:r.jsx("img",{src:e.productItem.image,alt:e.productItem.name})})}),r.jsxs("section",{className:"card-body",children:[r.jsx("h2",{className:"card-title self-center md:self-start",children:e.productItem.name}),r.jsx("p",{className:"text-emerald-600 text-lg self-center md:self-start",children:r.jsx("strong",{children:n})}),r.jsx("p",{children:e.productItem.description}),r.jsx("div",{className:"card-actions justify-center md:justify-end",children:r.jsx("button",{className:"btn btn-primary btn-block sm:btn-wide",onClick:()=>t(ot(e.productItem),1),children:"+Add"})})]})]})}const k=()=>{},C=k(),me=Object,c=e=>e===C,U=e=>typeof e=="function",z=(e,t)=>({...e,...t}),ct=e=>U(e.then),ie=new WeakMap;let lt=0;const te=e=>{const t=typeof e,n=e&&e.constructor,a=n==Date;let s,o;if(me(e)===e&&!a&&n!=RegExp){if(s=ie.get(e),s)return s;if(s=++lt+"~",ie.set(e,s),n==Array){for(s="@",o=0;o<e.length;o++)s+=te(e[o])+",";ie.set(e,s)}if(n==me){s="#";const l=me.keys(e).sort();for(;!c(o=l.pop());)c(e[o])||(s+=o+":"+te(e[o])+",");ie.set(e,s)}}else s=a?e.toJSON():t=="symbol"?e.toString():t=="string"?JSON.stringify(e):""+e;return s},F=new WeakMap,ge={},ce={},be="undefined",le=typeof window!=be,pe=typeof document!=be,ut=()=>le&&typeof window.requestAnimationFrame!=be,Me=(e,t)=>{const n=F.get(e);return[()=>!c(t)&&e.get(t)||ge,a=>{if(!c(t)){const s=e.get(t);t in ce||(ce[t]=s),n[5](t,z(s,a),s||ge)}},n[6],()=>!c(t)&&t in ce?ce[t]:!c(t)&&e.get(t)||ge]};let Re=!0;const dt=()=>Re,[Se,Ne]=le&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[k,k],ft=()=>{const e=pe&&document.visibilityState;return c(e)||e!=="hidden"},mt=e=>(pe&&document.addEventListener("visibilitychange",e),Se("focus",e),()=>{pe&&document.removeEventListener("visibilitychange",e),Ne("focus",e)}),gt=e=>{const t=()=>{Re=!0,e()},n=()=>{Re=!1};return Se("online",t),Se("offline",n),()=>{Ne("online",t),Ne("offline",n)}},ht={isOnline:dt,isVisible:ft},xt={initFocus:mt,initReconnect:gt},Le=!ve.useId,ne=!le||"Deno"in window,Et=e=>ut()?window.requestAnimationFrame(e):setTimeout(e,1),he=ne?x.useEffect:x.useLayoutEffect,xe=typeof navigator<"u"&&navigator.connection,Ve=!ne&&xe&&(["slow-2g","2g"].includes(xe.effectiveType)||xe.saveData),Te=e=>{if(U(e))try{e=e()}catch{e=""}const t=e;return e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?te(e):"",[e,t]};let pt=0;const we=()=>++pt,ke=0,ze=1,We=2,Rt=3;var ee={__proto__:null,ERROR_REVALIDATE_EVENT:Rt,FOCUS_EVENT:ke,MUTATE_EVENT:We,RECONNECT_EVENT:ze};async function qe(...e){const[t,n,a,s]=e,o=z({populateCache:!0,throwOnError:!0},typeof s=="boolean"?{revalidate:s}:s||{});let l=o.populateCache;const m=o.rollbackOnError;let h=o.optimisticData;const j=o.revalidate!==!1,R=b=>typeof m=="function"?m(b):m!==!1,S=o.throwOnError;if(U(n)){const b=n,w=[],T=t.keys();for(const D of T)!/^\$(inf|sub)\$/.test(D)&&b(t.get(D)._k)&&w.push(D);return Promise.all(w.map(P))}return P(n);async function P(b){const[w]=Te(b);if(!w)return;const[T,D]=Me(t,w),[i,q,Q,W]=F.get(t),M=i[w],H=()=>j&&(delete Q[w],delete W[w],M&&M[0])?M[0](We).then(()=>T().data):T().data;if(e.length<3)return H();let E=a,u;const B=we();q[w]=[B,0];const A=!c(h),G=T(),se=G.data,re=G._c,O=c(re)?se:re;if(A&&(h=U(h)?h(O,se):h,D({data:h,_c:O})),U(E))try{E=E(O)}catch($){u=$}if(E&&ct(E))if(E=await E.catch($=>{u=$}),B!==q[w][0]){if(u)throw u;return E}else u&&A&&R(u)&&(l=!0,E=O,D({data:E,_c:C}));l&&(u||(U(l)&&(E=l(E,O)),D({data:E,error:C,_c:C}))),q[w][1]=we();const ue=await H();if(D({_c:C}),u){if(S)throw u;return}return l?ue:E}}const Fe=(e,t)=>{for(const n in e)e[n][0]&&e[n][0](t)},St=(e,t)=>{if(!F.has(e)){const n=z(xt,t),a={},s=qe.bind(C,e);let o=k;const l={},m=(R,S)=>{const P=l[R]||[];return l[R]=P,P.push(S),()=>P.splice(P.indexOf(S),1)},h=(R,S,P)=>{e.set(R,S);const b=l[R];if(b)for(const w of b)w(S,P)},j=()=>{if(!F.has(e)&&(F.set(e,[a,{},{},{},s,h,m]),!ne)){const R=n.initFocus(setTimeout.bind(C,Fe.bind(C,a,ke))),S=n.initReconnect(setTimeout.bind(C,Fe.bind(C,a,ze)));o=()=>{R&&R(),S&&S(),F.delete(e)}}};return j(),[e,s,j,o]}return[e,F.get(e)[4]]},Nt=(e,t,n,a,s)=>{const o=n.errorRetryCount,l=s.retryCount,m=~~((Math.random()+.5)*(1<<(l<8?l:8)))*n.errorRetryInterval;!c(o)&&l>o||setTimeout(a,m,s)},wt=(e,t)=>te(e)==te(t),[He,vt]=St(new Map),bt=z({onLoadingSlow:k,onSuccess:k,onError:k,onErrorRetry:Nt,onDiscarded:k,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:Ve?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:Ve?5e3:3e3,compare:wt,isPaused:()=>!1,cache:He,mutate:vt,fallback:{}},ht),Tt=(e,t)=>{const n=z(e,t);if(t){const{use:a,fallback:s}=e,{use:o,fallback:l}=t;a&&o&&(n.use=a.concat(o)),s&&l&&(n.fallback=z(s,l))}return n},_t=x.createContext({}),Be=le&&window.__SWR_DEVTOOLS_USE__,Ct=Be?window.__SWR_DEVTOOLS_USE__:[],jt=()=>{Be&&(window.__SWR_DEVTOOLS_REACT__=ve)},Pt=e=>U(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}],Ot=()=>z(bt,x.useContext(_t)),yt=e=>(t,n,a)=>e(t,n&&((...o)=>{const[l]=Te(t),[,,,m]=F.get(He),h=m[l];return c(h)?n(...o):(delete m[l],h)}),a),Dt=Ct.concat(yt),At=e=>function(...n){const a=Ot(),[s,o,l]=Pt(n),m=Tt(a,l);let h=e;const{use:j}=m,R=(j||[]).concat(Dt);for(let S=R.length;S--;)h=R[S](h);return h(s,o||m.fetcher||null,m)},It=(e,t,n)=>{const a=t[e]||(t[e]=[]);return a.push(n),()=>{const s=a.indexOf(n);s>=0&&(a[s]=a[a.length-1],a.pop())}};jt();const Ue=ve.use||(e=>{if(e.status==="pending")throw e;if(e.status==="fulfilled")return e.value;throw e.status==="rejected"?e.reason:(e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e)}),Ee={dedupe:!0},Lt=(e,t,n)=>{const{cache:a,compare:s,suspense:o,fallbackData:l,revalidateOnMount:m,revalidateIfStale:h,refreshInterval:j,refreshWhenHidden:R,refreshWhenOffline:S,keepPreviousData:P}=n,[b,w,T,D]=F.get(a),[i,q]=Te(e),Q=x.useRef(!1),W=x.useRef(!1),M=x.useRef(i),H=x.useRef(t),E=x.useRef(n),u=()=>E.current,B=()=>u().isVisible()&&u().isOnline(),[A,G,se,re]=Me(a,i),O=x.useRef({}).current,ue=c(l)?n.fallback[i]:l,$=(d,f)=>{for(const N in O){const g=N;if(g==="data"){if(!s(d[g],f[g])&&(!c(d[g])||!s(oe,f[g])))return!1}else if(f[g]!==d[g])return!1}return!0},_e=x.useMemo(()=>{const d=(()=>!i||!t?!1:c(m)?u().isPaused()||o?!1:c(h)?!0:h:m)(),f=v=>{const L=z(v);return delete L._k,d?{isValidating:!0,isLoading:!0,...L}:L},N=A(),g=re(),I=f(N),Z=N===g?I:f(g);let p=I;return[()=>{const v=f(A());return $(v,p)?(p.data=v.data,p.isLoading=v.isLoading,p.isValidating=v.isValidating,p.error=v.error,p):(p=v,v)},()=>Z]},[a,i]),J=Qe.useSyncExternalStore(x.useCallback(d=>se(i,(f,N)=>{$(N,f)||d()}),[a,i]),_e[0],_e[1]),Ce=!Q.current,$e=b[i]&&b[i].length>0,K=J.data,Y=c(K)?ue:K,ae=J.error,je=x.useRef(Y),oe=P?c(K)?je.current:K:Y,Pe=(()=>$e&&!c(ae)?!1:Ce&&!c(m)?m:u().isPaused()?!1:o?c(Y)?!1:h:c(Y)||h)(),Oe=!!(i&&t&&Ce&&Pe),Je=c(J.isValidating)?Oe:J.isValidating,Ke=c(J.isLoading)?Oe:J.isLoading,X=x.useCallback(async d=>{const f=H.current;if(!i||!f||W.current||u().isPaused())return!1;let N,g,I=!0;const Z=d||{},p=!T[i]||!Z.dedupe,v=()=>Le?!W.current&&i===M.current&&Q.current:i===M.current,L={isValidating:!1,isLoading:!1},De=()=>{G(L)},Ae=()=>{const _=T[i];_&&_[1]===g&&delete T[i]},Ie={isValidating:!0};c(A().data)&&(Ie.isLoading=!0);try{if(p&&(G(Ie),n.loadingTimeout&&c(A().data)&&setTimeout(()=>{I&&v()&&u().onLoadingSlow(i,n)},n.loadingTimeout),T[i]=[f(q),we()]),[N,g]=T[i],N=await N,p&&setTimeout(Ae,n.dedupingInterval),!T[i]||T[i][1]!==g)return p&&v()&&u().onDiscarded(i),!1;L.error=C;const _=w[i];if(!c(_)&&(g<=_[0]||g<=_[1]||_[1]===0))return De(),p&&v()&&u().onDiscarded(i),!1;const V=A().data;L.data=s(V,N)?V:N,p&&v()&&u().onSuccess(N,i,n)}catch(_){Ae();const V=u(),{shouldRetryOnError:de}=V;V.isPaused()||(L.error=_,p&&v()&&(V.onError(_,i,V),(de===!0||U(de)&&de(_))&&B()&&V.onErrorRetry(_,i,V,Ye=>{const fe=b[i];fe&&fe[0]&&fe[0](ee.ERROR_REVALIDATE_EVENT,Ye)},{retryCount:(Z.retryCount||0)+1,dedupe:!0})))}return I=!1,De(),!0},[i,a]),ye=x.useCallback((...d)=>qe(a,M.current,...d),[]);if(he(()=>{H.current=t,E.current=n,c(K)||(je.current=K)}),he(()=>{if(!i)return;const d=X.bind(C,Ee);let f=0;const g=It(i,b,(I,Z={})=>{if(I==ee.FOCUS_EVENT){const p=Date.now();u().revalidateOnFocus&&p>f&&B()&&(f=p+u().focusThrottleInterval,d())}else if(I==ee.RECONNECT_EVENT)u().revalidateOnReconnect&&B()&&d();else{if(I==ee.MUTATE_EVENT)return X();if(I==ee.ERROR_REVALIDATE_EVENT)return X(Z)}});return W.current=!1,M.current=i,Q.current=!0,G({_k:q}),Pe&&(c(Y)||ne?d():Et(d)),()=>{W.current=!0,g()}},[i]),he(()=>{let d;function f(){const g=U(j)?j(A().data):j;g&&d!==-1&&(d=setTimeout(N,g))}function N(){!A().error&&(R||u().isVisible())&&(S||u().isOnline())?X(Ee).then(f):f()}return f(),()=>{d&&(clearTimeout(d),d=-1)}},[j,R,S,i]),x.useDebugValue(oe),o&&c(Y)&&i){if(!Le&&ne)throw new Error("Fallback data is required when using suspense in SSR.");H.current=t,E.current=n,W.current=!1;const d=D[i];if(!c(d)){const f=ye(d);Ue(f)}if(c(ae)){const f=X(Ee);c(oe)||(f.status="fulfilled",f.value=!0),Ue(f)}else throw ae}return{mutate:ye,get data(){return O.data=!0,oe},get error(){return O.error=!0,ae},get isValidating(){return O.isValidating=!0,Je},get isLoading(){return O.isLoading=!0,Ke}}},Vt=At(Lt),Ft="/api/",Ut=Ft+"products?",Mt=6,kt=async e=>{const t=await fetch(Ut+e,{method:"GET"});if(!t.ok){const n=await t.json();throw new Error((n==null?void 0:n.message)||t.statusText)}return await t.json()},zt={revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnReconnect:!1};function Wt(e){const t=x.useRef(1),n=x.useRef(1),a=x.useRef(Mt),{data:s,error:o,isLoading:l}=Vt(e,kt,zt);return s!=null&&s.pagination&&(n.current!==s.pagination.totalPages&&(n.current=s.pagination.totalPages),t.current!==s.pagination.currentPage&&(t.current=s.pagination.currentPage),a.current!==s.pagination.pageSize&&(a.current=s.pagination.pageSize)),{products:s==null?void 0:s.items,error:o,isLoading:l,currentPage:t.current,totalPages:n.current,pageSize:a.current}}function qt(e){return r.jsxs("section",{className:"flex flex-col items-center pb-2 px-2",children:[r.jsx("div",{children:r.jsx("h3",{className:"stat-title font-bold",children:"Page Stats"})}),r.jsx("div",{children:r.jsxs("div",{className:"stats shadow",children:[r.jsxs("section",{className:"stat place-items-center px-4 sm:px-6",children:[r.jsx("h4",{className:"stat-desc",children:"Page Size"}),r.jsx("p",{className:"stat-value",children:e.pageSize})]}),r.jsxs("section",{className:"stat place-items-center px-4 sm:px-6",children:[r.jsx("h4",{className:"stat-desc",children:"Current Page"}),r.jsx("p",{className:"stat-value text-secondary",children:e.currentPage})]}),r.jsxs("section",{className:"stat place-items-center px-4 sm:px-6",children:[r.jsx("h4",{className:"stat-desc",children:"Total Pages"}),r.jsx("p",{className:"stat-value",children:e.totalPages})]})]})})]})}const Ge="join-item btn btn-outline ",Ht=Ge+"btn-secondary",Bt=Ge+"btn-primary";function Gt(e){return r.jsxs("menu",{className:"join grid grid-cols-2 ml-auto mr-auto max-w-screen-md px-1 sm:px-0",children:[r.jsx("button",{className:Ht,onClick:e.onPrevious,disabled:!e.hasPrevious,children:"Previous page"}),r.jsx("button",{className:Bt,onClick:e.onNext,disabled:!e.hasNext,children:"Next Page"})]})}function $t(e){const t=e.currentPage!==e.totalPages,n=e.currentPage>1,a=()=>{t&&e.onPageChange(e.currentPage+1)},s=()=>{n&&e.onPageChange(e.currentPage-1)};return r.jsxs("div",{className:"max-w-screen-lg flex-col justify-center items-center ml-auto mr-auto",children:[r.jsx(qt,{pageSize:e.pageSize,currentPage:e.currentPage,totalPages:e.totalPages}),r.jsx(Gt,{onPrevious:s,onNext:a,hasPrevious:n,hasNext:t})]})}function Jt(e){const{products:t,error:n,isLoading:a,pageSize:s,totalPages:o,currentPage:l}=Wt(e.pageSearchParams);return a?r.jsx("div",{className:"flex",children:r.jsx("progress",{className:"progress w-56 mx-auto progress-secondary"})}):n||t===void 0?r.jsx(at,{}):r.jsxs(r.Fragment,{children:[r.jsx("ul",{className:"flex flex-col w-full border-opacity-50 px-2",children:t.map(m=>r.jsxs("li",{children:[r.jsx(it,{productItem:m}),r.jsx("div",{className:"divider"})]},m.id))}),r.jsx($t,{pageSize:s,totalPages:o,currentPage:l,onPageChange:e.onPageChange})]})}const Kt={top:0,left:0,behavior:"smooth"};function Zt(){const[e,t]=Xe();x.useEffect(()=>{window.scrollTo(Kt)},[e]);const n=nt(e),a=s=>{s>0&&(n.set(y.pageNum,s.toString()),t(n))};return r.jsxs("main",{className:"container mx-auto max-w-screen-lg pb-8 mb-20 md:mb-0",children:[r.jsx("div",{className:"flex z-0 flex-col justify-center items-center",children:r.jsx(st,{})}),r.jsx(Jt,{pageSearchParams:n.toString(),onPageChange:a})]})}export{Zt as default};
