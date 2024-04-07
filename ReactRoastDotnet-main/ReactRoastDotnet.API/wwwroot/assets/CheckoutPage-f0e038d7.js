import{j as e,L as b,p as P,u as o,r as C,b as q}from"./index-e97df17e.js";import{u as G,n as O,e as H,A as h}from"./AuthInput-179d8048.js";const n={reviewCart:0,submitOrder:1,receipt:2,length:3};function U(){return e.jsx("div",{className:"hero-content mt-4 text-center",children:e.jsx("div",{className:"max-w-screen-md",children:e.jsx("h1",{className:"mb-4 text-3xl md:text-5xl lg:text-5xl font-extrabold",children:e.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary",children:"Checkout"})})})})}const L="step",A=L+" step-primary",D=A+" text-secondary";function N(t,s){return t<s?A:t===s?D:L}function Y(t){return e.jsxs("ul",{className:"steps pt-4",children:[e.jsx("li",{className:N(n.reviewCart,t.stepNum),children:"Cart Review"}),e.jsx("li",{className:N(n.submitOrder,t.stepNum),children:"Submit Order"}),e.jsx("li",{className:N(n.receipt,t.stepNum),children:"Order Confirmation"})]})}function $(){return e.jsx("section",{className:"hero mt-6",children:e.jsxs("div",{className:"hero-content flex-col text-center",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"Your Order was created!"}),e.jsx("div",{className:"flex self-center",children:e.jsx(b,{className:"btn btn-primary",to:P.home,children:"Go To Home"})})]})})}function V(){return e.jsx("section",{className:"hero mt-6",children:e.jsxs("div",{className:"hero-content flex-col text-center",children:[e.jsx("h2",{className:"text-3xl font-bold",children:"Your Cart is empty!"}),e.jsx("div",{className:"flex self-center",children:e.jsx(b,{className:"btn btn-primary",to:"/menu",children:"Add Items"})})]})})}function z(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})}function J(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:[e.jsx("title",{children:"Plus"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v12m6-6H6"})]})}function K(){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:[e.jsx("title",{children:"Minus"}),e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 12H6"})]})}const j="btn btn-sm text-primary hover:text-accent tooltip tooltip-right tooltip-accent",f="tooltip tooltip-left sm:tooltip-bottom tooltip-accent";function Q(t){const s=o(i=>i.addCartItem),r=o(i=>i.removeCartItem),a=o(i=>i.removeAllCartItemsWithId),l=t.item.price.toLocaleString("en-US",{style:"currency",currency:"USD"});return e.jsx("li",{className:"flex flex-col border-b border-accent py-2",children:e.jsxs("section",{className:"flex w-full items-center justify-between",children:[e.jsxs("div",{className:"sm:card-body",children:[e.jsxs("h2",{className:"card-title",children:[t.item.name,t.item.quantity>1&&e.jsxs("div",{className:"badge badge-secondary",children:["x",t.item.quantity]})]}),e.jsx("p",{children:e.jsx("strong",{className:"text-emerald-500",children:l})})]}),e.jsxs("menu",{className:"flex flex-col sm:flex-row gap-2 sm:px-2",children:[e.jsx("li",{className:f,"data-tip":"Remove All",children:e.jsx("button",{className:j,onClick:()=>a(t.item.id),"aria-label":"Remove All",children:e.jsx(z,{})})}),e.jsx("li",{className:f,"data-tip":"Add",children:e.jsx("button",{className:j,onClick:()=>s(t.item,1),"aria-label":"Add",children:e.jsx(J,{})})}),e.jsx("li",{className:f,"data-tip":"Subtract",children:e.jsx("button",{className:j,onClick:()=>r(t.item.id,1),"aria-label":"Subtract",children:e.jsx(K,{})})})]})]})})}function X(t){return e.jsx("ul",{children:t.cartItems.map(s=>e.jsx(Q,{item:s},s.id))})}function Z(t){let s=0;const r=`$${t.cartItems.reduce((a,l)=>(s+=l.quantity,l.price*l.quantity+a),0).toFixed(2)}`;return e.jsxs("div",{className:"flex flex-col gap-2 text-md sm:text-lg font-bold",children:[e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsx("h3",{className:"",children:"Total Items:"}),e.jsx("p",{className:"text-secondary",children:s})]}),e.jsxs("div",{className:"flex items-center gap-10",children:[e.jsx("h3",{className:"",children:"Total Price:"}),e.jsx("p",{className:"text-emerald-500",children:r})]})]})}function _(t){return t.cartIsEmpty?e.jsx(V,{}):e.jsxs("div",{className:"flex flex-col w-full items-stretch",children:[e.jsxs("section",{className:"px-2 mx-2",children:[e.jsx("h2",{className:"text-center text-xl mt-6 font-bold",children:"Cart"}),e.jsx(X,{cartItems:t.cartItems})]}),e.jsxs("section",{className:"px-2 mx-2 self-start",children:[e.jsx("h2",{className:"card-title text-xl my-4",children:"Cart Summary"}),e.jsx(Z,{cartItems:t.cartItems})]})]})}function T(t){return e.jsxs("menu",{className:"modal-action flex flex-col sm:flex-row items-stretch gap-2 mx-4",children:[t.stepNum===n.reviewCart&&e.jsx("li",{className:"flex flex-col",children:e.jsx("button",{id:"clearCart",className:"btn btn-sm btn-error",type:"button",onClick:t.onClearCart,children:"Clear Cart"})}),e.jsx("li",{className:"flex flex-col",children:e.jsx("button",{id:"backButton",className:"btn btn-sm btn-primary",type:"button",onClick:t.onBack,disabled:t.stepNum===n.reviewCart,children:"Back"},"backButton")}),e.jsx("li",{className:"flex flex-col",children:e.jsxs("button",{id:"nextButton",className:"btn btn-sm btn-success",type:t.stepNum===n.submitOrder?"submit":"button",onClick:t.onNext,disabled:t.stepNum===n.receipt||t.disableOnNext,children:[t.stepNum===n.submitOrder?"Submit":"Next",t.isSubmitting&&e.jsx("span",{className:"loading loading-spinner"})]},"nextButton")})]})}function ee(t){const s=o(l=>l.items),r=o(l=>l.clearCart),a=s.length<1;return e.jsxs(e.Fragment,{children:[e.jsx(_,{cartItems:s,cartIsEmpty:a}),e.jsx(T,{stepNum:n.reviewCart,onClearCart:r,onNext:t.onNext,onBack:t.onPrev,disableOnNext:a})]})}function te(t){var v,g,k,y,w,p,I,S,B;const[s,r]=C.useState(!0),{register:a,handleSubmit:l,formState:{isSubmitting:i,errors:c}}=G({defaultValues:{firstName:(v=t.user)==null?void 0:v.firstName,lastName:(g=t.user)==null?void 0:g.lastName,email:(k=t.user)==null?void 0:k.email}}),M=o(u=>u.clearCart),E=()=>r(!s),F=async u=>{await new Promise(W=>setTimeout(W,3e3)),console.log(u),M(),t.onNext()},m=a("firstName",O),x=a("lastName",O),d=a("email",H),R=t.user===void 0;return e.jsxs("section",{children:[e.jsxs("h2",{className:"text-center text-xl mt-4 font-bold",children:[R&&"Enter ","Order Details"]}),e.jsxs("form",{className:"card-body",onSubmit:l(F),children:[e.jsx(h,{ref:m.ref,type:"text",name:m.name,onChange:m.onChange,onBlur:m.onBlur,labelText:"First Name",errorMsg:(y=c==null?void 0:c.firstName)==null?void 0:y.message,autoComplete:"given-name",value:(w=t.user)==null?void 0:w.firstName,disabled:!!t.user}),e.jsx(h,{ref:x.ref,type:"text",name:x.name,onChange:x.onChange,onBlur:x.onBlur,labelText:"Last Name",errorMsg:(p=c==null?void 0:c.lastName)==null?void 0:p.message,autoComplete:"family-name",value:(I=t.user)==null?void 0:I.lastName,disabled:!!t.user}),e.jsx(h,{ref:d.ref,type:"email",name:d.name,onChange:d.onChange,onBlur:d.onBlur,labelText:"Email",errorMsg:(S=c==null?void 0:c.email)==null?void 0:S.message,autoComplete:"email",value:(B=t.user)==null?void 0:B.email,disabled:!!t.user}),e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("span",{className:"label-text",children:"I understand this is a demo application; therefore, no actual order will be placed."}),e.jsx("input",{type:"checkbox",className:"checkbox checkbox-primary",onClick:E})]}),e.jsx("div",{className:"form-control mt-6",children:e.jsx(T,{stepNum:n.submitOrder,isSubmitting:i,onBack:t.onPrev,disableOnNext:s})})]})]})}function se(t){const[s,r]=C.useState(!1),a=q(l=>l.user);return s||a?e.jsx(te,{onNext:t.onNext,onPrev:t.onPrev,user:a}):e.jsx("section",{className:"hero-content mt-8 text-center",children:e.jsxs("div",{className:"max-w-md text-gray-900 dark:text-white",children:[e.jsx("h2",{className:"mb-4 text-xl font-extrabold md:text-2xl lg:text-3xl",children:"Continue as guest?"}),e.jsxs("div",{className:"flex flex-col justify-center items-center gap-4",children:[e.jsx("button",{className:"btn btn-primary",onClick:()=>r(!0),children:"Yes"}),e.jsx(b,{to:P.signIn,className:"link-secondary",children:"No? Sign In"})]})]})})}function ae(t){return t.stepNum===n.submitOrder?e.jsx(se,{onPrev:t.onPrev,onNext:t.onNext}):t.stepNum===n.receipt?e.jsx($,{}):e.jsx(ee,{onNext:t.onNext,onPrev:t.onPrev})}function re(){const[t,s]=C.useState(n.reviewCart),r=()=>{t<n.receipt&&s(t+1)},a=()=>{t>n.reviewCart&&s(t-1)};return e.jsxs("main",{className:"mx-auto max-w-screen-lg pb-2 md:pb-10 mb-24 md:mb-0",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx(U,{}),e.jsx(Y,{stepNum:t})]}),e.jsx("div",{className:"max-w-screen-md mx-auto",children:e.jsx(ae,{stepNum:t,onPrev:a,onNext:r})})]})}export{re as default};
