(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={title:"App_title__-GfWs"}},21:function(t,e,n){t.exports={input:"Filter_input__2DoVp",title:"Filter_title__mtLuE"}},37:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),u=(n(37),n(19)),i=n.n(u),s=n(22),b=n(11),l=n.n(b),j=n(2),f=Object(j.b)("contacts/fetchContactRequest"),m=Object(j.b)("contacts/fetchContactSuccess"),d=Object(j.b)("contacts/fetchContactError"),O=Object(j.b)("contacts/addContactRequest"),h=Object(j.b)("contacts/addContactSuccess"),p=Object(j.b)("contacts/addContactError"),C=Object(j.b)("contacts/deleteContactRequest"),_=Object(j.b)("contacts/deleteContactSuccess"),x=Object(j.b)("contacts/deleteContactError"),v=Object(j.b)("contacts/filterContacts");l.a.defaults.baseURL="http://localhost:3000";var N=n(6),g=n(7),F=n.n(g),y=n(1);function L(){var t=Object(c.useState)(""),e=Object(s.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(s.a)(r,2),u=o[0],i=o[1],b=Object(N.b)(),j=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":i(c);break;default:return}};return Object(y.jsxs)("form",{className:F.a.ContactForm,onSubmit:function(t){t.preventDefault(),b(function(t,e){return function(n){var c={name:t,number:e};n(O()),l.a.post("/contacts",c).then((function(t){var e=t.data;return n(h(e))})).catch((function(t){return n(p(t))}))}}({name:n,number:u})),a(""),i("")},children:[Object(y.jsx)("label",{className:F.a.label,children:"Name"}),Object(y.jsx)("input",{className:F.a.input,value:n,onChange:j,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(y.jsx)("label",{className:F.a.label,children:"Number"}),Object(y.jsx)("input",{className:F.a.input,value:u,onChange:j,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(y.jsx)("button",{type:"submit",className:F.a.button,children:"Add contact"})]})}var I=n(21),w=n.n(I),A=n(15),k=function(t){return t.contacts.filter},S=(Object(A.a)([function(t){return t.contacts.items},k],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),function(){var t=Object(N.c)(k),e=Object(N.b)();return Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{className:w.a.title,children:"Find contacts by name"}),Object(y.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e(v(t.target.value))},className:w.a.input})]})}),z=n(9),E=n.n(z);function q(){var t=Object(N.c)((function(t){var e=t.contacts,n=e.items,c=e.filter;return D(n,c)})),e=Object(N.b)();return Object(c.useEffect)((function(){return e((function(t){t(f()),l.a.get("/contacts").then((function(e){var n=e.data;return t(m(n))})).catch((function(e){return t(d(e))}))}))}),[e]),Object(y.jsx)("ul",{className:E.a.list,children:t.map((function(t){var n=t.id,c=t.name,a=t.number;return Object(y.jsxs)("li",{className:E.a.listItem,children:[Object(y.jsxs)("span",{className:E.a.listItemName,children:[c,":"]}),Object(y.jsx)("span",{className:E.a.listItemNumber,children:a}),Object(y.jsx)("button",{type:"button",className:E.a.button,onClick:function(){return e(function(t){return function(e){e(C()),l.a.delete("contacts/".concat(t)).then((function(){return e(_(t))})).catch((function(t){return e(x(t))}))}}(n))},children:"Delete"})]},n)}))})}var D=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))};function R(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("h1",{className:i.a.title,children:"Phonebook"}),Object(y.jsx)(L,{}),Object(y.jsx)(S,{}),Object(y.jsx)("h2",{className:i.a.title,children:"Contacts"}),Object(y.jsx)(q,{})]})}var T,B,Z,J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},M=n(8),P=n(31),G=n.n(P),W=n(3),K=n(32),U=n(4),V=Object(j.c)([],(T={},Object(W.a)(T,m,(function(t,e){return e.payload})),Object(W.a)(T,h,(function(t,e){var n=e.payload;if(!t.find((function(t){return t.name===n.name})))return[n].concat(Object(K.a)(t));alert("".concat(n.name," is already in contacts"))})),Object(W.a)(T,_,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),T)),$=Object(j.c)("",Object(W.a)({},v,(function(t,e){return e.payload}))),H=Object(j.c)(!1,(B={},Object(W.a)(B,f,(function(){return!0})),Object(W.a)(B,m,(function(){return!1})),Object(W.a)(B,d,(function(){return!1})),Object(W.a)(B,O,(function(){return!0})),Object(W.a)(B,h,(function(){return!1})),Object(W.a)(B,p,(function(){return!1})),Object(W.a)(B,C,(function(){return!0})),Object(W.a)(B,_,(function(){return!1})),Object(W.a)(B,x,(function(){return!1})),B)),Q=Object(j.c)(null,(Z={},Object(W.a)(Z,d,(function(t,e){return e.payload})),Object(W.a)(Z,p,(function(t,e){return e.payload})),Object(W.a)(Z,x,(function(t,e){return e.payload})),Z)),X=Object(U.b)({items:V,filter:$,isLoading:H,error:Q}),Y=Object(j.a)({reducer:{contacts:X},middleware:function(t){return t({serializableCheck:{ignoredActions:[M.a,M.f,M.b,M.c,M.d,M.e]}}).concat(G.a)},devTools:!1});o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(N.a,{store:Y,children:Object(y.jsx)(R,{})})}),document.getElementById("root")),J()},7:function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},9:function(t,e,n){t.exports={list:"ContactList_list__2T7aG",listItem:"ContactList_listItem__29Cbr",listItemName:"ContactList_listItemName__39F1_",listItemNumber:"ContactList_listItemNumber__3d8DW",button:"ContactList_button__1RuFy"}}},[[62,1,2]]]);
//# sourceMappingURL=main.f350bb69.chunk.js.map