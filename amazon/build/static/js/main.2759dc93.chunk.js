(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(46),l=a.n(r),i=(a(58),a(47)),s=a(4),o=(a(59),a(60),a(48)),m=a.n(o),u=a(49),d=a.n(u),p=a(12),E=Object(n.createContext)(),_=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},g=function(){return Object(n.useContext)(E)},h=a(30),v=a.n(h),f=v.a.initializeApp({apiKey:"AIzaSyCXvll4No3cPe-MGPQw62tRw9Mk0oNWilw",authDomain:"fir-ef666.firebaseapp.com",databaseURL:"https://fir-ef666.firebaseio.com",projectId:"fir-ef666",storageBucket:"fir-ef666.appspot.com",messagingSenderId:"436436923097",appId:"1:436436923097:web:36b4adcd978c3d7b9284c8"}).firestore(),b=v.a.auth();var N=function(){var e=g(),t=Object(s.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"header"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{className:"header__searchInput",type:"text"}),c.a.createElement(m.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(p.b,{to:!r&&"/login"},c.a.createElement("div",{onClick:function(){r&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",r?r.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},r?"Sign Out":"Sign In"))),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders")),c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime")),c.a.createElement(p.b,{to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(d.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===n||void 0===n?void 0:n.length)))))};a(76),a(77);var S=function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,i=g(),o=Object(s.a)(i,2),m=(o[0].basket,o[1]);return c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"product__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\ud83c\udf1f")})))),c.a.createElement("img",{src:n,alt:""}),c.a.createElement("button",{onClick:function(){m({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:r,rating:l}})}},"Add to Basket"))};var k=function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"home__container"},c.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),c.a.createElement("div",{className:"home__row"},c.a.createElement(S,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),c.a.createElement(S,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(S,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),c.a.createElement(S,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),c.a.createElement(S,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),c.a.createElement("div",{className:"home__row"},c.a.createElement(S,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"}))))},O=a(5),y=(a(78),a(79),a(27)),j=a.n(y),C=a(34),w=a(17),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},P=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[].concat(Object(C.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(w.a)(Object(w.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var a=e.basket.findIndex((function(e){return e.id===t.id})),n=Object(C.a)(e.basket);return a>=0?n.splice(a,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(w.a)(Object(w.a)({},e),{},{basket:n});case"SET_USER":return Object(w.a)(Object(w.a)({},e),{},{user:t.user});default:return e}};var T=function(){var e=Object(O.f)(),t=g(),a=Object(s.a)(t,2),n=a[0].basket;return a[1],c.a.createElement("div",{className:"subtotal"},c.a.createElement(j.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:A(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Proceed to Checkout"))};a(81);var B=function(e){var t=e.id,a=e.image,n=e.title,r=e.price,l=e.rating,i=e.hideButton,o=g(),m=Object(s.a)(o,2),u=(m[0].basket,m[1]);return c.a.createElement("div",{className:"checkoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:a}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},n),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e,t){return c.a.createElement("p",null,"\ud83c\udf1f")}))),!i&&c.a.createElement("button",{onClick:function(){u({type:"REMOVE_FROM_BASKET",id:t})}},"Remove from Basket")))};var x=function(){var e=g(),t=Object(s.a)(e,2),a=t[0],n=a.basket,r=a.user;return t[1],c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),c.a.createElement("div",null,c.a.createElement("h3",null,"Hello, ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your shopping Basket"),n.map((function(e){return c.a.createElement(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))},I=a(22),L=a.n(I),z=a(33),R=(a(83),a(20)),G=a(50),M=a.n(G).a.create({baseURL:"https://us-central1-challenge-4b2b2.cloudfunctions.net/api"});var D=function(){var e=g(),t=Object(s.a)(e,2),a=t[0],r=a.basket,l=a.user,i=t[1],o=Object(O.f)(),m=Object(R.useStripe)(),u=Object(R.useElements)(),d=Object(n.useState)(!1),E=Object(s.a)(d,2),_=E[0],h=E[1],v=Object(n.useState)(""),b=Object(s.a)(v,2),N=b[0],S=b[1],k=Object(n.useState)(null),y=Object(s.a)(k,2),C=y[0],w=y[1],P=Object(n.useState)(!0),T=Object(s.a)(P,2),x=T[0],I=T[1],G=Object(n.useState)(!0),D=Object(s.a)(G,2),U=D[0],K=D[1];Object(n.useEffect)((function(){(function(){var e=Object(z.a)(L.a.mark((function e(){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M({method:"post",url:"/payments/create?total=".concat(100*A(r))});case 2:t=e.sent,K(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),console.log("THE SECRET IS >>>",U),console.log("\ud83d\udc71",l);var H=function(){var e=Object(z.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),S(!0),e.next=4,m.confirmCardPayment(U,{payment_method:{card:u.getElement(R.CardElement)}}).then((function(e){var t=e.paymentIntent;f.collection("users").doc(null===l||void 0===l?void 0:l.uid).collection("orders").doc(t.id).set({basket:r,amount:t.amount,created:t.created}),h(!0),w(null),S(!1),i({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(p.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"Hi-tech City "),c.a.createElement("p",null,"Hyderabad-Telangana"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review items for delivery")),c.a.createElement("div",{className:"payment__items"},r.map((function(e){return c.a.createElement(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"}),c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment method")),c.a.createElement("div",{className:"payment__details"},c.a.createElement("form",{onSubmit:H},c.a.createElement(R.CardElement,{onChange:function(e){I(e.empty),w(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment__priceContainer"},c.a.createElement(j.a,{renderText:function(e){return c.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:A(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{disabled:N||x||_},c.a.createElement("span",null,N?c.a.createElement("p",null,"Processing"):"Buy Now"))),C&&c.a.createElement("div",null,C)))))};a(100);var U=function(){var e=Object(O.f)(),t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),m=o[0],u=o[1];return c.a.createElement("div",{className:"login"},c.a.createElement(p.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign-in"),c.a.createElement("form",null,c.a.createElement("h5",null,"E-mail"),c.a.createElement("input",{type:"text",value:r,onChange:function(e){return l(e.target.value)}}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{type:"password",value:m,onChange:function(e){return u(e.target.value)}}),c.a.createElement("button",{type:"submit",onClick:function(t){t.preventDefault(),b.signInWithEmailAndPassword(r,m).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton"},"Sign In")),c.a.createElement("p",null,"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),b.createUserWithEmailAndPassword(r,m).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account")))},K=a(51);var H=function(){var e=Object(K.a)("pk_test_51HRxK8Dak7VqYEp7zQP0iw6voCvV7dzMj6RmFf79siZ8sUwyhCWCFi830VzUCmdfYecGsZ5Sfi4gvjNV7vkSPIG9006ldut7XB"),t=g(),a=Object(s.a)(t,2);Object(i.a)(a[0]);var r=a[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),r(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),c.a.createElement(p.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(O.c,null,c.a.createElement(O.a,{path:"/login"},c.a.createElement(U,null)),c.a.createElement(O.a,{path:"/checkout"},c.a.createElement(N,null),c.a.createElement(x,null)),c.a.createElement(O.a,{path:"/payment"},c.a.createElement(N,null),c.a.createElement(R.Elements,{stripe:e},c.a.createElement(D,null))),c.a.createElement(O.a,{path:"/"},c.a.createElement(N,null),c.a.createElement(k,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_,{initialState:{basket:[],user:null},reducer:P},c.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(102)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.2759dc93.chunk.js.map