"use strict";(self.webpackChunkweb_ui=self.webpackChunkweb_ui||[]).push([[926],{926:(I,l,s)=>{s.r(l),s.d(l,{PostSearchContainerComponent:()=>c});var r=s(3676),h=s(413),p=s(8749),g=s(4630),f=s(506),u=s(5357),v=s(7864),m=s(9194),d=s(9973),C=s(769),t=s(143);class a{constructor(n){this.http=n}fetchPostByTitle(n){return this.http.get(`https://jsonplaceholder.typicode.com/posts?title=${n}`).pipe((0,d.U)(e=>C.IX(m.R).parse(e)),(0,d.U)(e=>0===e.length?null:e[0]))}}a.\u0275fac=function(n){return new(n||a)(t.LFG(h.eN))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac});class i{constructor(n){this.service=n,this.postTitle=new p.X(""),this.isLoading=new p.X(!0),this.isLoading$=this.isLoading.asObservable(),this.post$=this.postTitle.pipe((0,g.h)(e=>!!e),(0,f.b)(()=>this.isLoading.next(!0)),(0,u.w)(e=>this.service.fetchPostByTitle(e)),(0,f.b)(()=>this.isLoading.next(!1)),(0,v.d)(1))}setPostTitle(n){this.postTitle.next(n)}}i.\u0275fac=function(n){return new(n||i)(t.LFG(a))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac});var P=s(2488);function y(o,n){1&o&&(t.TgZ(0,"p"),t._uU(1,"Carregando..."),t.qZA())}function S(o,n){if(1&o&&(t.TgZ(0,"div")(1,"h1"),t._uU(2),t.qZA(),t._UZ(3,"hr"),t.TgZ(4,"p"),t._uU(5),t.qZA()()),2&o){const e=n.ngIf;t.xp6(2),t.Oqu(e.title),t.xp6(3),t.Oqu(e.body)}}function T(o,n){1&o&&(t.TgZ(0,"div",4),t._uU(1," Post n\xe3o encontrado "),t.qZA())}function L(o,n){if(1&o&&(t.YNc(0,T,2,0,"div",3),t.ALo(1,"async")),2&o){const e=t.oxw();t.Q6J("ngIf",!1===t.lcZ(1,1,e.isLoading$))}}class c{constructor(n,e){this.facade=n,this.route=e,this.post$=this.facade.post$,this.isLoading$=this.facade.isLoading$}ngOnInit(){const n=this.route.snapshot.queryParamMap;n.has("title")&&this.facade.setPostTitle(String(n.get("title")))}}c.\u0275fac=function(n){return new(n||c)(t.Y36(i),t.Y36(P.gz))},c.\u0275cmp=t.Xpm({type:c,selectors:[["posts-challenge-post-search-container"]],standalone:!0,features:[t._Bn([a,i]),t.jDz],decls:6,vars:7,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["notFound",""],["class","alert alert-danger","role","alert",4,"ngIf"],["role","alert",1,"alert","alert-danger"]],template:function(n,e){if(1&n&&(t.YNc(0,y,2,0,"p",0),t.ALo(1,"async"),t.YNc(2,S,6,2,"div",1),t.ALo(3,"async"),t.YNc(4,L,2,3,"ng-template",null,2,t.W1O)),2&n){const Z=t.MAs(5);t.Q6J("ngIf",t.lcZ(1,3,e.isLoading$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(3,5,e.post$))("ngIfElse",Z)}},dependencies:[r.ez,r.O5,r.Ov,h.JF],changeDetection:0})}}]);