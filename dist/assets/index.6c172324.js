var _=Object.defineProperty,I=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var v=(r,i,a)=>i in r?_(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,N=(r,i)=>{for(var a in i||(i={}))q.call(i,a)&&v(r,a,i[a]);if(f)for(var a of f(i))B.call(i,a)&&v(r,a,i[a]);return r},w=(r,i)=>I(r,O(i));import{j as b,L as c,r as d,B as D,R as F,a as p,b as j}from"./vendor.c1db4a6f.js";const E=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=a(n);fetch(n.href,l)}};E();var P="/assets/map.5a6ea7d6.jpg";const e=b.exports.jsx,t=b.exports.jsxs,V=b.exports.Fragment,A=()=>t("div",{className:"inline-block flex flex-col md:flex-row lg:justify-center animate__animated animate__bounceInLeft text-gray-600 px-8 py-8 lg:py-20",children:[e("div",{className:"py-16",children:t("div",{className:"text-center mr-16",children:[e("div",{className:"text-3xl",children:"Contactanos"}),t("div",{children:[e("i",{className:"fas fa-phone fa-2x mb-2"}),e("div",{children:"Whatsapp/Llamada"}),e("div",{children:"+51 999 999 999"})]}),t("div",{children:[e("i",{className:"far fa-envelope fa-2x"}),e("div",{children:"Atencion comercial"}),e("div",{children:"atencion@comercial.com"})]}),t("div",{children:[e("i",{className:"far fa-clock fa-2x"}),e("div",{children:"Horario"}),e("div",{children:"L-S - 8:00 - 20:00"})]})]})}),e("div",{className:"w-96 mx-auto md:mx-0",children:e("img",{className:"image",src:P})})]});var H="/assets/messenger.4db4db03.jpg";const J=()=>t("div",{children:[t("div",{className:"inline-block flex flex-col lg:flex-row items-center lg:justify-center animate__animated animate__bounceInLeft text-gray-600 px-8 py-8 lg:py-20",children:[t("div",{className:"py-16",children:[t("h1",{children:["Bienvenido a Moover ",e("br",{})]}),t("p",{className:"mt-4",children:["Haz que tus pedidos lleguen ",e("br",{}),"a cualquier parte y mucho ",e("br",{}),"m\xE1s rapido con nosotros. ",e("br",{})]}),e("button",{className:"bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8",children:e(c,{to:"/order",children:"Pedir un Moover"})})]}),e("div",{children:e("img",{className:"image ml-0 lg:ml-20",src:H})})]}),e("footer",{className:"text-white w-full  bg-indigo-500 py-10 inline-block",children:t("div",{className:"text-center lg:flex lg:justify-evenly lg:mx-96",children:[e("div",{className:"text-3xl",children:"Contactanos"}),t("div",{children:[e("i",{className:"fas fa-phone fa-2x mb-2"}),e("div",{children:"Whatsapp/Llamada"}),e("div",{children:"+51 999 999 999"})]}),t("div",{children:[e("i",{className:"far fa-envelope fa-2x"}),e("div",{children:"Atencion comercial"}),e("div",{children:"atencion@comercial.com"})]}),t("div",{children:[e("i",{className:"far fa-clock fa-2x"}),e("div",{children:"Horario"}),e("div",{children:"L-S - 8:00 - 20:00"})]})]})})]}),R=()=>{const[r,i]=d.exports.useState(!0);return t("nav",{className:"flex items-center justify-between flex-wrap bg-indigo-500 p-6",children:[t("div",{className:"flex items-center flex-shrink-0 text-white mr-6",children:[e("i",{className:"fas fa-location-arrow fa-2x fill-current h-8 w-8 mr-2"}),e("span",{className:"font-semibold text-xl tracking-tight",children:"MooverApp"})]}),e("div",{className:"block lg:hidden",children:e("button",{onClick:()=>{i(a=>!a)},id:"boton",className:"flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white",children:t("svg",{className:"fill-current h-3 w-3",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[e("title",{children:"Menu"}),e("path",{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"})]})})}),e("div",{id:"menu",className:`w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${r?"hidden":""}`,children:t("div",{className:"text-lg lg:flex-grow",children:[e(c,{to:"/",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 tracking-wide font-medium",children:"Inicio"}),e(c,{to:"/order",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 tracking-wide font-medium",children:"Ordenar"}),e(c,{to:"/tracking",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 tracking-wide font-medium",children:"Seguimiento"}),e(c,{to:"/contact",className:"block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 tracking-wide font-medium",children:"Contacto"})]})})]})},z=({setOrder:r})=>t("div",{className:"animate__animated animate__bounceInLeft",children:[t("h2",{className:"text-gray-600",children:["Estamos aqui para ayudarte ",e("br",{})]}),t("button",{onClick:()=>r(!0),className:"bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8",children:["Crear pedido   ",e("span",{className:"text-lg",children:"+"})]})]}),u=d.exports.createContext(null),T=({setCreated:r,setOrder:i})=>{const{formValues:a,handleInputChange:o,reset:n,setLastOrder:l}=d.exports.useContext(u),{originname:s,originaddress:g,origindistrit:m,originphone:x,destinationname:h,destinationaddress:y,destinationdistrit:k,destinationphone:S}=a,{setOrders:C}=d.exports.useContext(u);return e(V,{children:t("form",{onSubmit:L=>{L.preventDefault(),l(a.ordercode),C(M=>[...M,a]),r(!0),i(!1)},className:"animate__animated animate__bounceInLeft",children:[e("h2",{className:"text-gray-600",children:"Tu Moover ya se est\xE1 alistando"}),e("p",{className:"text-center mb-8",children:"Datos de origen"}),t("div",{className:"flex flex-wrap -mx-3 mb-6",children:[t("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Nombre"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",name:"originname",placeholder:"Persona que envia",autoComplete:"off",value:s,onChange:o,required:!0})]}),t("div",{className:"w-full md:w-1/2 px-3",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Direcci\xF3n"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"Direcci\xF3n de origen",name:"originaddress",autoComplete:"off",value:g,onChange:o,required:!0})]})]}),t("div",{className:"flex flex-wrap -mx-3 mb-2",children:[t("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Distrito"}),e("div",{className:"relative",children:t("select",{name:"origindistrit",className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:m,onChange:o,required:!0,children:[e("option",{value:"",children:" --- Elige un distrito ---  "}),e("option",{value:"Callao",children:"Callao"}),e("option",{value:"Bellavista",children:"Bellavista"}),e("option",{value:"Ate",children:"Ate"}),e("option",{value:"Barranco",children:"Barranco"}),e("option",{value:"Bre\xF1a",children:"Bre\xF1a"}),e("option",{value:"Chorrillos",children:"Chorrillos"}),e("option",{value:"Jesus Maria",children:"Jesus Maria"}),e("option",{value:"La Victoria",children:"La Victoria"}),e("option",{value:"Magdalena del Mar",children:"Magdalena del Mar"}),e("option",{value:"Miraflores",children:"Miraflores"}),e("option",{value:"Pueblo Libre",children:"Pueblo Libre"}),e("option",{value:"San Isidro",children:"San Isidro"}),e("option",{value:"San Luis",children:"San Luis"}),e("option",{value:"San Miguel",children:"San Miguel"}),e("option",{value:"Santiago de Surco",children:"Santiago de Surco"}),e("option",{value:"Surquillo",children:"Surquillo"})]})})]}),t("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Tel\xE9fono"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",name:"originphone",placeholder:"999 999 999",autoComplete:"off",value:x,onChange:o,required:!0})]})]}),e("p",{className:"text-center my-8",children:"Datos de destino"}),t("div",{className:"flex flex-wrap -mx-3 mb-6",children:[t("div",{className:"w-full md:w-1/2 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Nombre"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"text",name:"destinationname",placeholder:"Persona que envia",autoComplete:"off",value:h,onChange:o,required:!0})]}),t("div",{className:"w-full md:w-1/2 px-3",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Direcci\xF3n"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",name:"destinationaddress",placeholder:"Direcci\xF3n de origen",autoComplete:"off",value:y,onChange:o,required:!0})]})]}),t("div",{className:"flex flex-wrap -mx-3 mb-2",children:[t("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Distrito"}),e("div",{className:"relative",children:t("select",{name:"destinationdistrit",className:"block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:k,onChange:o,required:!0,children:[e("option",{value:"",children:" --- Elige un distrito ---  "}),e("option",{value:"Callao",children:"Callao"}),e("option",{value:"Bellavista",children:"Bellavista"}),e("option",{value:"Ate",children:"Ate"}),e("option",{value:"Barranco",children:"Barranco"}),e("option",{value:"Bre\xF1a",children:"Bre\xF1a"}),e("option",{value:"Chorrillos",children:"Chorrillos"}),e("option",{value:"Jesus Maria",children:"Jesus Maria"}),e("option",{value:"La Victoria",children:"La Victoria"}),e("option",{value:"Magdalena del Mar",children:"Magdalena del Mar"}),e("option",{value:"Miraflores",children:"Miraflores"}),e("option",{value:"Pueblo Libre",children:"Pueblo Libre"}),e("option",{value:"San Isidro",children:"San Isidro"}),e("option",{value:"San Luis",children:"San Luis"}),e("option",{value:"San Miguel",children:"San Miguel"}),e("option",{value:"Santiago de Surco",children:"Santiago de Surco"}),e("option",{value:"Surquillo",children:"Surquillo"})]})})]}),t("div",{className:"w-full md:w-1/3 px-3 mb-6 md:mb-0",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Tel\xE9fono"}),e("input",{className:"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",name:"destinationphone",placeholder:"999 999 999",autoComplete:"off",value:S,onChange:o,required:!0})]})]}),e("button",{type:"submit",className:"bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-4",children:"Finalizar pedido"})]})})},U=({setCreated:r,id:i})=>t("div",{className:"animate__animated animate__bounceInLeft",children:[t("h2",{className:"text-gray-600",children:["Se ha creado tu pedido ",i,e("br",{}),"Si necesitas crear otro pedido, adelante."]}),e(c,{to:"/order",children:e("button",{onClick:()=>{r(!1)},className:"bg-indigo-500 hover:bg-indigo-700 rounded-full py-4 px-8 mb-8 text-white tracking-wider font-bold mt-8",children:"Continuar"})})]}),W=()=>{const[r,i]=d.exports.useState(!1),[a,o]=d.exports.useState(!1),{orders:n,formValues:l,reset:s,lastOrder:g}=d.exports.useContext(u);return d.exports.useEffect(()=>{localStorage.setItem("orders",JSON.stringify(n)),s()},[n]),e("div",{className:"w-full max-w-lg px-8 mx-auto mt-8",children:e("div",{children:!r&&!a?e(z,{setOrder:i}):r&&!a?e(T,{setCreated:o,setOrder:i}):e(U,{setCreated:o,id:g})})})},K=({found:r})=>r?t("div",{className:"animate__animated animate__bounceInLeft text-indigo-300 rounded-lg mt-8 py-2 px-4 text-center sm:w-full md:w-1/2 mx-auto",children:[t("div",{children:[e("div",{className:"inline-block bg-yellow-500 text-white rounded-lg px-2 text-lg mb-4",children:"Origen"}),t("div",{children:[t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Nombre: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.originname})]}),t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Direccion: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.originaddress})]}),t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Nombre: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.origindistrit})]})]})]}),e("div",{className:"inline-block bg-green-600 text-white rounded-lg px-2 text-lg mb-4",children:"Destino"}),t("div",{children:[t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Nombre: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.destinationname})]}),t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Direccion: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.destinationaddress})]}),t("div",{className:"mb-4",children:[e("div",{className:"inline-block bg-gray-400 text-white rounded-lg px-2 mr-2 text-lg",children:"Distrito: "}),e("div",{className:"inline-block bg-indigo-500 text-white rounded-lg px-2 text-lg",children:r.destinationdistrit})]})]}),t("div",{className:"inline-block bg-yellow-500 text-center text-white rounded-lg px-2 text-lg",children:["Estado: ",r.status," "]})]}):e("p",{className:"text-center text-sm text-red-500",children:"No se ha encontrado tu orden."}),$=()=>{const{orders:r}=d.exports.useContext(u),[i,a]=d.exports.useState(),[o,n]=d.exports.useState(),[l,s]=d.exports.useState(!1);return t("div",{className:"flex flex-col items-center justify-center mt-20",children:[t("form",{onSubmit:m=>{m.preventDefault();const x=r.find(h=>h.ordercode==o);a(h=>x),s(!0)},className:"flex flex-col md:flex-row border-2 border-gray-200 rounded",children:[e("input",{autoComplete:"off",type:"text",value:o,onChange:m=>n(m.target.value),name:"busqueda",className:"px-4 py-2 w-80 sm:rounded-t-lg md:rounded-l-lg",placeholder:"Ingresa el codigo de tu pedido"}),e("button",{type:"submit",className:"px-4 py-2 md:py-0 text-white bg-indigo-500 hover:bg-indigo-700 border-l sm: rounded-b-lg md:rounded-r-lg",children:"Buscar"})]}),e("div",{className:"w-full px-20",children:l?e(K,{found:i}):e("div",{})})]})},G=(r={})=>{const[i,a]=d.exports.useState(r);return[i,({target:l})=>{a(w(N({},i),{[l.name]:l.value}))},()=>{a(r)}]},Q=()=>{const[r,i]=d.exports.useState(JSON.parse(localStorage.getItem("orders"))),[a,o,n]=G({ordercode:crypto.randomUUID().slice(0,6),originname:"",originaddress:"",origindistrit:"",originphone:"",destinationname:"",destinationaddress:"",destinationdistrit:"",destinationphone:"",status:"En proceso"}),[l,s]=d.exports.useState();return e(u.Provider,{value:{orders:r,setOrders:i,formValues:a,handleInputChange:o,reset:n,lastOrder:l,setLastOrder:s},children:t(D,{children:[e(R,{}),t(F,{children:[e(p,{path:"/",element:e(J,{})}),e(p,{path:"/order",element:e(W,{})}),e(p,{path:"/tracking",element:e($,{})}),e(p,{path:"/contact",element:e(A,{})})]})]})})};j.render(e(Q,{}),document.getElementById("root"));
