(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[371],{5737:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return w}});var t=r(809),s=r.n(t),a=r(5893),c=r(2447),i=r(241),d=r(387),l=r(7616),o=r(7294),u=r(9669),x=r.n(u),h=r(2484),p=r.n(h),m=r(2025),f=r(6127),g=r(3334);function w(){var e=(0,o.useState)([]),n=e[0],r=e[1],t=(0,o.useState)([]),u=t[0],h=t[1],w=(0,o.useState)("not-loaded"),v=w[0],N=w[1];function j(){return(j=(0,c.Z)(s().mark((function e(){var n,t,a,o,u,w,v,j,b;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new(p())({network:"mainnet",cacheProvider:!0}),e.next=3,n.connect();case 3:return t=e.sent,a=new i.Q(t),o=a.getSigner(),u=new d.CH(m.A,f.Mt,o),w=new d.CH(m.k,g.Mt,a),e.next=10,u.fetchItemsCreated();case 10:return v=e.sent,e.next=13,Promise.all(v.map(function(){var e=(0,c.Z)(s().mark((function e(n){var r,t,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.tokenURI(n.tokenId);case 2:return r=e.sent,e.next=5,x().get(r);case 5:return t=e.sent,a=l.bM(n.price.toString(),"ether"),c={price:a,tokenId:n.tokenId.toNumber(),seller:n.seller,owner:n.owner,sold:n.sold,image:t.data.image},e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 13:j=e.sent,b=j.filter((function(e){return e.sold})),h(b),r(j),N("loaded");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,o.useEffect)((function(){!function(){j.apply(this,arguments)}()}),[]),"loaded"!==v||n.length?(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"p-4",children:[(0,a.jsx)("h2",{className:"text-2xl py-2",children:"Items Created"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:n.map((function(e,n){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsx)("div",{className:"p-4 bg-black",children:(0,a.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," MIOTA"]})})]},n)}))})]}),(0,a.jsx)("div",{className:"px-4",children:Boolean(u.length)&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-2xl py-2",children:"Items sold"}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4",children:u.map((function(e,n){return(0,a.jsxs)("div",{className:"border shadow rounded-xl overflow-hidden",children:[(0,a.jsx)("img",{src:e.image,className:"rounded"}),(0,a.jsx)("div",{className:"p-4 bg-black",children:(0,a.jsxs)("p",{className:"text-2xl font-bold text-white",children:["Price - ",e.price," MIOTA"]})})]},n)}))})]})})]}):(0,a.jsx)("h1",{className:"py-10 px-20 text-3xl",children:"No assets created"})}},9123:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creator-dashboard",function(){return r(5737)}])}},function(e){e.O(0,[277,380,669,475,774,888,179],(function(){return n=9123,e(e.s=n);var n}));var n=e.O();_N_E=n}]);