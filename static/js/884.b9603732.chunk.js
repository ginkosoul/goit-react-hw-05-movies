"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{2884:function(e,n,i){i.r(n);var s,r,l,t=i(168),d=i(9439),a=i(225),c=i(3338),o=i(2791),h=i(7689),x=i(1087),p=i(8561),u=i(184);n.default=function(){var e,n,i=(0,h.TH)(),s=(0,o.useRef)(null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies"),r=(0,h.UO)().movieId,l=(0,o.useState)(null),t=(0,d.Z)(l,2),a=t[0],x=t[1];(0,o.useEffect)((function(){(0,p.qP)(r).then((function(e){return x(e)})).catch((function(e){return console.log(e.message)}))}),[r]);var g=a||{},b=g.original_title,m=g.title,w=g.overview,_=g.poster_path,k=g.vote_average,y=g.vote_count,R=g.runtime,Z=g.genres;return(0,u.jsxs)("div",{children:[(0,u.jsx)(f,{to:s.current,children:"back"}),a&&(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,u.jsx)(c.vz,{src:"https://image.tmdb.org/t/p/w500".concat(_),alt:m||b,width:"360"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:m||b}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Rating:"}),k]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Votes:"}),y]}),(0,u.jsxs)("p",{children:[(0,u.jsx)("b",{children:"Run Time:"}),R,"min"]}),(0,u.jsx)(j,{children:Z.map((function(e){var n=e.id,i=e.name;return(0,u.jsx)(v,{children:i},n)}))}),(0,u.jsx)("p",{children:w}),(0,u.jsxs)(j,{children:[(0,u.jsx)("li",{children:(0,u.jsx)(f,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(f,{to:"reviews",children:"Reviews"})})]})]})]}),(0,u.jsx)(o.Suspense,{fallback:(0,u.jsx)("h2",{children:"Loading..."}),children:(0,u.jsx)(h.j3,{})})]})]})};var j=a.default.ul(s||(s=(0,t.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n"]))),v=a.default.li(r||(r=(0,t.Z)(["\n  display: block;\n  border-radius: 4px;\n  border: 1px solid lightgray;\n  padding: 4px 8px;\n  line-height: 1;\n  font-size: 18px;\n"]))),f=(0,a.default)(x.OL)(l||(l=(0,t.Z)(["\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid lightgray;\n  padding: 5px 10px;\n  line-height: 1;\n  font-size: 18px;\n  font-weight: 600;\n"])))}}]);
//# sourceMappingURL=884.b9603732.chunk.js.map