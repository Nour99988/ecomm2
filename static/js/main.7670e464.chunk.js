(this.webpackJsonpecomm2=this.webpackJsonpecomm2||[]).push([[0],{11:function(e,t,c){e.exports={grid:"productComponent_grid__13LyJ",product:"productComponent_product__24Jr_",firstGridInCompo:"productComponent_firstGridInCompo__1CtM0",perantImg:"productComponent_perantImg__16Wrj",img:"productComponent_img__rD1h3",infor:"productComponent_infor__eBhT3",btn:"productComponent_btn__1vID0",price:"productComponent_price__HQ-v2",category:"productComponent_category__DNrUE"}},16:function(e,t,c){e.exports={allProducts:"mycard_allProducts__3tSTm",product:"mycard_product__3ls5f",image:"mycard_image__3Oe5a",desc:"mycard_desc__31g20"}},17:function(e,t,c){e.exports={row:"sidebar_row__3EVt6",price:"sidebar_price__1GTEp",none:"sidebar_none__3gdgW",container:"sidebar_container__mGwmo"}},33:function(e,t,c){e.exports={grid:"Header_grid__G0Pd7"}},35:function(e,t,c){e.exports={loader:"Loading_loader__JPSK9",spin:"Loading_spin__C1S3x"}},41:function(e,t,c){},6:function(e,t,c){e.exports={links:"NavBar_links__kedzN",perantLinks:"NavBar_perantLinks__2ZcEL",forMobile:"NavBar_forMobile__1lo7Z",icon:"NavBar_icon__2TQjx",after:"NavBar_after__12ZCh",productsList:"NavBar_productsList__2VVxa",titleProductInList:"NavBar_titleProductInList__31I6f"}},68:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(21),a=c.n(s),i=(c(41),c(10)),o=c(2),l=c(33),d=c.n(l),u=c(4),j=c(6),b=c.n(j),O=c(3),p=c(0),f=function(){var e=Object(O.c)((function(e){return e.choseProducts})),t=Object(O.c)((function(e){return e.logUser})),c=Object(n.useState)(""),r=Object(u.a)(c,2),s=r[0],a=r[1];Object(n.useEffect)((function(){a(t.username)}),[t]),console.log(s);var o=e.map((function(e){var t=e.title,c=e.price,n=e.qty,r=e.id;return Object(p.jsxs)("li",{className:b.a.titleProductInList,children:[Object(p.jsxs)("span",{children:[t," ",n>1?"qty:".concat(n):""]}),Object(p.jsxs)("span",{children:["$ ",c]})]},r)}));Object(n.useEffect)((function(){localStorage.setItem("choseProduct",JSON.stringify(e))}),[e]);return Object(p.jsx)("div",{className:b.a.navbar,children:Object(p.jsxs)("ul",{className:b.a.links,children:[Object(p.jsxs)("span",{className:b.a.forMobile,children:[" ",Object(p.jsx)("i",{className:"fa fa-bars",onClick:function(){var e=document.getElementById("perantLinks");"none"===e.style.display?e.style.display="flex":e.style.display="none"}})]}),Object(p.jsxs)("div",{className:b.a.perantLinks,id:"perantLinks",children:[Object(p.jsx)(i.b,{to:"/",className:b.a.linkForMob,children:"Home"}),Object(p.jsx)(i.b,{to:"/mycard",className:b.a.linkForMob,children:"Cart"}),Object(p.jsx)(i.b,{to:"/about",className:b.a.linkForMob,children:"About"}),void 0===s?Object(p.jsxs)(i.b,{to:"/sign",className:b.a.linkForMob,children:[" ","sign in"," "]}):Object(p.jsxs)(i.b,{to:"/profile",className:b.a.linkForMob,children:[" ",s," "]})]}),Object(p.jsxs)("span",{className:b.a.icon,onClick:function(){var e=document.getElementById("productsList");"none"===e.style.display?e.style.display="block":e.style.display="none"},children:[Object(p.jsx)("i",{className:"fa fa-shopping-cart fa-1x",style:{fontSize:"25px"}}),Object(p.jsx)("span",{className:b.a.after,children:e.length}),Object(p.jsx)("ul",{id:"productsList",className:b.a.productsList,children:0!==o.length?o:"no item yet"})]})]})})},h=function(){return Object(p.jsxs)("div",{className:d.a.grid,children:[Object(p.jsx)("h2",{children:"Fake Shop"}),Object(p.jsx)(f,{})]})},m=c(9),x=c.n(m),v=c(14),g=c(12),_=c.n(g),y="SET_PRODUCTS",N="SELECTED_PRODUCT",C="REMOVE_SELECTED_PRODUCT",E="ADD_PRODUCT",k="INCRESR_QTY",P="INCRESE_QTY_BY_INPUT",S="REMOVE_PRODUCT",w="LGO_IN",I=function(e){return{type:y,payload:e}},L=function(e){return{type:N,payload:e}},D=c(35),T=c.n(D),q=function(){return Object(p.jsx)("div",{className:T.a.loader})},R=function(){var e=Object(o.g)().productId,t=Object(O.c)((function(e){return e.selectProduct})),c=Object(O.b)(),r=t.image,s=t.title,a=t.price,i=t.category,l=t.description,d=function(){var t=Object(v.a)(x.a.mark((function t(){var n;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://fakestoreapi.com/products/".concat(e)).catch((function(e){console.log("err",e)}));case 2:n=t.sent,c(L(n.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){return e&&""!==e&&d(),function(){c({type:C})}}),[e]),Object(p.jsx)("div",{className:"ui grid container",children:0===Object.keys(t).length?Object(p.jsx)("div",{children:Object(p.jsx)(q,{})}):Object(p.jsx)("div",{className:"ui placeholder segment",children:Object(p.jsxs)("div",{className:"ui two column stackable center aligned grid",children:[Object(p.jsx)("div",{className:"ui vertical divider",children:"AND"}),Object(p.jsxs)("div",{className:"middle aligned row",children:[Object(p.jsx)("div",{className:"column lp",children:Object(p.jsx)("img",{className:"ui fluid image",src:r,alt:s})}),Object(p.jsxs)("div",{className:"column rp",children:[Object(p.jsx)("h1",{children:s}),Object(p.jsx)("h2",{children:Object(p.jsxs)("span",{className:"ui teal tag label",children:["$",a]})}),Object(p.jsx)("h3",{className:"ui brown block header",children:i}),Object(p.jsx)("p",{children:l}),Object(p.jsxs)("div",{className:"ui vertical animated button",tabIndex:"0",children:[Object(p.jsx)("div",{className:"hidden content",children:Object(p.jsx)("i",{className:"shop icon"})}),Object(p.jsx)("div",{className:"visible content",children:"Add to Cart"})]})]})]})]})})})},U=c(13),B=c(36),F=c(11),M=c.n(F),G=function(){var e=Object(O.c)((function(e){return e.allProducts.products})),t=Object(O.c)((function(e){return e.choseProducts})),c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],a=r[1],o=Object(O.b)();Object(n.useEffect)((function(){a(Object(U.a)(t)),console.log("run")}),[t]);var l=function(e){return!!s.find((function(t){return t.id==e}))},d=e.map((function(e){var t=e.id,c=e.title,n=e.image,r=e.price,s=e.category,a=e.rating,o=a.rate,d=a.count;return Object(p.jsxs)("div",{className:M.a.firstGridInCompo,children:[Object(p.jsxs)(i.b,{to:"/product/".concat(t),className:M.a.product,children:[Object(p.jsx)("div",{className:M.a.perantImg,children:Object(p.jsx)("img",{className:M.a.img,src:n,alt:c})}),Object(p.jsxs)("div",{className:M.a.infor,children:[Object(p.jsx)("p",{className:M.a.title,children:c}),Object(p.jsxs)("p",{className:M.a.price,children:["$ ",r]}),Object(p.jsx)("p",{className:M.a.category,children:s})]})]}),Object(p.jsxs)("span",{children:[Object(p.jsx)(B.a,{initialRating:o,readonly:!0,style:{color:"#ffd700"},emptySymbol:"fa fa-star-o fa-1x",fullSymbol:"fa fa-star fa-1x"}),"  ",d," Reviews"]}),Object(p.jsx)("button",{className:M.a.btn,onClick:function(){return j(t)},children:l(t)?"alredy in Cart":"Add To Cart"})]},t)})),j=function(t){var c=s.find((function(e){return e.id===t}))?s.find((function(e){return e.id===t})):e.find((function(e){return e.id===t}));if(c===s.find((function(e){return e.id===t}))){var n=c.qty;o(function(e,t){return{type:k,product:e,qty:t}}(c,n))}else o({type:E,product:c})},b=function(){var e=Object(v.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://fakestoreapi.com/products").then((function(e){return o(I(e.data))})).catch((function(e){return console.log("err",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),Object(p.jsx)("div",{className:M.a.grid,children:0===e.length?Object(p.jsx)(q,{}):Object(p.jsx)(p.Fragment,{children:d})})},J=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(G,{})})},A=c(16),V=c.n(A),$=c(17),z=c.n($),Q=function(){var e=Object(O.c)((function(e){return e.choseProducts}));return Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:function(){var t=e.map((function(e){return{productId:e.id,quantity:e.qty}}));_.a.post("https://fakestoreapi.com/carts",{body:JSON.stringify({userId:5,date:Date,products:t})}).then((function(e){return console.log(e.data)})).catch((function(e){return console.log(e)}))},children:"Click to get invoice id"})})},X=function(){var e=Object(O.c)((function(e){return e.choseProducts})),t=e.map((function(e){var t=e.title,c=e.price,n=e.qty;return Object(p.jsxs)("li",{className:z.a.row,children:[Object(p.jsxs)("span",{children:[t," ",Object(p.jsx)("br",{})," qty: ",n]}),Object(p.jsxs)("span",{className:z.a.price,children:[c," $"]})]})})),c=e.map((function(e){return e.price*e.qty}));return Object(p.jsxs)("div",{className:0!==e.length?z.a.container:z.a.none,children:[Object(p.jsx)("ul",{className:z.a.ul,children:t}),Object(p.jsxs)("span",{children:["totalPrice: ",c.reduce((function(e,t){return e+t}),0)," $ ",Object(p.jsx)(Q,{})]})]})},H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(O.b)(),a=Object(O.c)((function(e){return e.choseProducts}));Object(n.useEffect)((function(){r(Object(U.a)(a))}),[a]);var i=c.map((function(e){return Object(p.jsxs)("div",{className:V.a.product,children:[Object(p.jsx)("div",{className:V.a.image,children:Object(p.jsx)("img",{src:e.image,alt:e.title})}),Object(p.jsxs)("div",{className:V.a.desc,children:[Object(p.jsx)("h3",{children:e.title}),Object(p.jsxs)("div",{children:[" Price: ",e.price," $"]})]}),Object(p.jsxs)("div",{className:V.a.btn,children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("input",{type:"number",value:e.qty,placeholder:e.qty,onChange:function(t){return o(t.target.value,e.id)}}),e.qty]}),Object(p.jsx)("button",{onClick:function(){return l(e.id)},children:"Remove"})]})]})})),o=function(e,t){var n=c.find((function(e){return e.id===t}));s(function(e,t){return{type:P,product:e,qty:t}}(n,e))},l=function(e){var t=c.filter((function(t){return e!==t.id}));s(function(e){return{type:S,product:e}}(t))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:c.length?"products in my card":"no product in you card"}),Object(p.jsxs)("div",{className:V.a.allProducts,children:[Object(p.jsx)("div",{children:Object(p.jsx)("div",{children:i})}),Object(p.jsx)(X,{})]})]})},Y=c(8),Z=function(){var e=Object(O.b)(),t=Object(n.useState)({username:"johnd",password:"m38rmF$"}),c=Object(u.a)(t,2),r=c[0],s=c[1],a=Object(o.f)(),i=function(){var t=Object(v.a)(x.a.mark((function t(c){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),_.a.get("https://fakestoreapi.com/users/1").then((function(t){var c;e((c=t.data,{type:w,userDetails:c})),a("/")})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{onSubmit:i,children:[Object(p.jsxs)("label",{children:["User Name:",Object(p.jsx)("input",{type:"text",value:r.username,onChange:function(e){return s(Object(Y.a)(Object(Y.a)({},r),{},{username:e.target.value}))}})]}),Object(p.jsxs)("label",{children:["Password:",Object(p.jsx)("input",{type:"password",value:r.password,onChange:function(e){return s(Object(Y.a)(Object(Y.a)({},r),{},{password:e.target.value}))}})]}),Object(p.jsx)("button",{type:"submit",children:" login "})]})})},W=function(){var e=Object(O.c)((function(e){return e.logUser.id})),t=Object(O.c)((function(e){return e.allProducts.products})),c=Object(n.useState)([]),r=Object(u.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)([]),o=Object(u.a)(i,2),l=o[0],d=o[1];Object(n.useEffect)((function(){d(t)}),[]),console.log(s);var j=function(){var e=Object(v.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://fakestoreapi.com/carts/user/".concat(t)).then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){j(e)}),[e]);var b=s.map((function(e){var t=e.date,c=e.products;return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("p",{children:c.map((function(e){var t=l.find((function(t){return t.id===e.productId}));return Object(p.jsxs)("li",{children:[t.title,Object(p.jsx)("br",{})," qty:",e.quantity]})}))})]})}));return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{children:[" ",Object(p.jsx)("p",{children:"All Cards"}),b]})})},K=function(){var e=Object(O.c)((function(e){return e.logUser}));return console.log(e),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{children:["information",Object(p.jsxs)("li",{children:["Name: ",e.name.firstname," ",e.name.lastname]}),Object(p.jsxs)("li",{children:["Phone: ",e.phone]}),Object(p.jsxs)("li",{children:["Mail: ",e.email]}),Object(p.jsxs)("li",{children:["address:"," ",Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["City: ",e.address.city]}),Object(p.jsxs)("li",{children:["GeoLocation:",Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Lat: ",e.address.geolocation.lat]})," ",Object(p.jsxs)("li",{children:["Long ",e.address.geolocation.long]})]})," "]}),Object(p.jsxs)("li",{children:["Number: ",e.address.number]}),Object(p.jsxs)("li",{children:["street: ",e.address.street]}),Object(p.jsxs)("li",{children:["zip Code: ",e.address.zipcode]})]})]})]})}),Object(p.jsx)("div",{children:Object(p.jsx)(W,{})})]})},ee=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"page Not Found"})})};var te=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(i.a,{basename:"/ecomm2",children:[Object(p.jsx)(h,{}),Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{path:"/",exact:!0,element:Object(p.jsx)(J,{})}),Object(p.jsx)(o.a,{path:"/profile",element:Object(p.jsx)(K,{})}),Object(p.jsx)(o.a,{path:"/product/:productId",element:Object(p.jsx)(R,{})}),Object(p.jsx)(o.a,{path:"/mycard",element:Object(p.jsx)(H,{})}),Object(p.jsx)(o.a,{path:"/sign",element:Object(p.jsx)(Z,{})}),Object(p.jsx)(o.a,{path:"*",element:Object(p.jsx)(ee,{})})]})]})})},ce=c(22),ne={products:[],selectedProduct:[]},re=localStorage.getItem("choseProduct"),se=re?JSON.parse(re):[],ae=se.length>=1?se:[],ie={},oe=Object(ce.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;return c===y?Object(Y.a)(Object(Y.a)({},e),{},{products:n}):e},selectProduct:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.payload;switch(c){case N:return Object(Y.a)(Object(Y.a)({},e),n);case C:return{};default:return e}},choseProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0,c=t.type,n=t.product,r=t.qty;switch(c){case E:return n.qty=1,[].concat(Object(U.a)(e),[n]);case S:return Object(U.a)(n);case k:return n.qty=++r,Object(U.a)(e);case P:return n.qty=r,Object(U.a)(e);default:return e}},logUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,c=t.userDetails,n=t.type;return n===w?c:e}}),le=oe,de=Object(ce.b)(le,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,69)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(O.a,{store:de,children:Object(p.jsx)(te,{})})}),document.getElementById("root")),ue()}},[[68,1,2]]]);
//# sourceMappingURL=main.7670e464.chunk.js.map