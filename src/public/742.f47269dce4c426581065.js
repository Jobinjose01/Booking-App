(self.webpackChunkbooking_app=self.webpackChunkbooking_app||[]).push([[742],{9742:(t,n,i)=>{"use strict";i.r(n),i.d(n,{CreateBookingModule:()=>H});var e=i(8583),o=i(9790),a=i(5566),s=i(3679),u=i(4247),r=i(4819),c=i(3423),d=i(38),l=i(8049),_=i(918),m=i(6960),g=i(7716),p=i(2238),U=i(6770),h=i(7001),f=i(3738),Z=i(5618),b=i(8295),q=i(7441),k=i(1095),y=i(2458),A=i(2789);function T(t,n){if(1&t&&(g.TgZ(0,"mat-option",11),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.Q6J("value",t.id),g.xp6(1),g.hij("\n                    ",t.name,"\n                  ")}}function C(t,n){1&t&&(g.TgZ(0,"mat-error"),g._uU(1,"\n              "),g.TgZ(2,"span",10),g._uU(3,"From City is required"),g.qZA(),g._uU(4,"\n            "),g.qZA())}function x(t,n){if(1&t&&(g.TgZ(0,"mat-option",11),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.Q6J("value",t.id),g.xp6(1),g.hij("\n                ",t.name,"\n              ")}}function v(t,n){1&t&&(g.TgZ(0,"mat-error"),g._uU(1,"\n              "),g.TgZ(2,"span",10),g._uU(3,"Destination City is required"),g.qZA(),g._uU(4,"\n            "),g.qZA())}function N(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"ID"),g.qZA())}function w(t,n){if(1&t&&(g.TgZ(0,"td",25),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.Oqu(t.id)}}function Y(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"From City"),g.qZA())}function J(t,n){if(1&t&&(g.TgZ(0,"td",25),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.Oqu(t.source)}}function Q(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"To City"),g.qZA())}function F(t,n){if(1&t&&(g.TgZ(0,"td",25),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.Oqu(t.destination)}}function M(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"Total Spots"),g.qZA())}function D(t,n){if(1&t&&(g.TgZ(0,"td",25),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.Oqu(t.spots)}}function B(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"Available Spots"),g.qZA())}function S(t,n){if(1&t&&(g.TgZ(0,"td",25),g._uU(1),g.qZA()),2&t){const t=n.$implicit;g.xp6(1),g.hij("\n            ",t.spots-t.booked_spots,"\n          ")}}function O(t,n){1&t&&(g.TgZ(0,"th",24),g._uU(1,"Action"),g.qZA())}function L(t,n){if(1&t){const t=g.EpF();g.TgZ(0,"td",25),g._uU(1,"\n            "),g.TgZ(2,"button",26),g.NdJ("click",function(){const n=g.CHM(t).$implicit;return g.oxw(2).bookmyTrip(n.id)}),g._uU(3,"Book"),g.qZA(),g._uU(4,"\n          "),g.qZA()}if(2&t){const t=n.$implicit;g.xp6(2),g.Q6J("disabled",0==t.available_spots)}}function $(t,n){1&t&&g._UZ(0,"tr",27)}function I(t,n){1&t&&g._UZ(0,"tr",28)}function P(t,n){1&t&&(g.TgZ(0,"tr",29),g._uU(1,"\n          "),g.TgZ(2,"td",30),g._uU(3,"No data found"),g.qZA(),g._uU(4,"\n        "),g.qZA())}function R(t,n){if(1&t&&(g.TgZ(0,"div"),g._uU(1,"\n  "),g.TgZ(2,"mat-card"),g._uU(3,"\n    "),g.TgZ(4,"mat-card-content"),g._uU(5,"\n      "),g.TgZ(6,"table",12),g._uU(7,"\n        "),g.ynx(8,13),g._uU(9,"\n          "),g.YNc(10,N,2,0,"th",14),g._uU(11,"\n          "),g.YNc(12,w,2,1,"td",15),g._uU(13,"\n        "),g.BQk(),g._uU(14,"\n    \n        "),g.ynx(15,16),g._uU(16,"\n          "),g.YNc(17,Y,2,0,"th",14),g._uU(18,"\n          "),g.YNc(19,J,2,1,"td",15),g._uU(20,"\n        "),g.BQk(),g._uU(21,"\n    \n    \n        "),g.ynx(22,17),g._uU(23,"\n          "),g.YNc(24,Q,2,0,"th",14),g._uU(25,"\n          "),g.YNc(26,F,2,1,"td",15),g._uU(27,"\n        "),g.BQk(),g._uU(28,"\n    \n        "),g.ynx(29,18),g._uU(30,"\n          "),g.YNc(31,M,2,0,"th",14),g._uU(32,"\n          "),g.YNc(33,D,2,1,"td",15),g._uU(34,"\n        "),g.BQk(),g._uU(35,"\n        \n        "),g.ynx(36,19),g._uU(37,"\n          "),g.YNc(38,B,2,0,"th",14),g._uU(39,"\n          "),g.YNc(40,S,2,1,"td",15),g._uU(41,"\n        "),g.BQk(),g._uU(42,"\n\n        "),g.ynx(43,20),g._uU(44,"\n          "),g.YNc(45,O,2,0,"th",14),g._uU(46,"\n          "),g.YNc(47,L,5,1,"td",15),g._uU(48,"\n        "),g.BQk(),g._uU(49,"\n    \n        \n    \n        "),g.YNc(50,$,1,0,"tr",21),g._uU(51,"\n        "),g.YNc(52,I,1,0,"tr",22),g._uU(53,"\n        "),g.YNc(54,P,5,0,"tr",23),g._uU(55,"\n      "),g.qZA(),g._uU(56,"\n    "),g.qZA(),g._uU(57,"\n  "),g.qZA(),g._uU(58,"\n"),g.qZA()),2&t){const t=g.oxw();g.xp6(6),g.Q6J("dataSource",t.dataSource),g.xp6(44),g.Q6J("matHeaderRowDef",t.displayedColumns),g.xp6(2),g.Q6J("matRowDefColumns",t.displayedColumns)}}new u.Yd("Login");const j=[{path:"",component:(()=>{class t{constructor(t,n,i,e,o,a){this.router=t,this.route=n,this.dialog=i,this.formBuilder=e,this.bookingService=o,this.snackbar=a,this.version=m.N.version,this.isLoading=!1,this.loadCities(),this.createForm(),this.displayedColumns=["id","source","destination","spots","booked_spots","created_at"]}ngOnInit(){this.dataSource=[]}loadCities(){this.bookingService.getCities().pipe((0,l.P)()).subscribe({next:t=>{this.cities=t.data},error:t=>{this.errorMessage=t.message}})}checkAvailability(){this.destination_city_id==this.source_city_id?this.snackbarMessage("From City and Destination City cannot be the same!"):this.bookingService.checkAvailability(this.bookingForm.value).pipe((0,l.P)()).subscribe({next:t=>{this.dataSource=t.data,0==this.dataSource.length&&this.snackbarMessage("No Trip Found!")},error:t=>{this.errorMessage=t.message}})}bookmyTrip(t){this.dialog.open(_.B,{width:"300px",data:{label:"Reservation",action:"Enter the number of spots required"}}).afterClosed().subscribe(n=>{""!=n&&void 0!==n&&0!=n?(this.spots=n,this.isLoading=!0,this.bookingService.createBooking(t,this.spots).pipe((0,l.P)()).subscribe(t=>{this.result=t,this.isLoading=!1,1==this.result.status?(this.snackbarMessage(this.result.message),this.checkAvailability()):this.snackbarMessage(this.result.message)},t=>{this.snackbarMessage("something went wrong !"),this.isLoading=!1})):this.snackbarMessage("Please enter some valid numbers!")})}createForm(){this.bookingForm=this.formBuilder.group({destination_city_id:["",s.kI.required],source_city_id:["",s.kI.required]})}snackbarMessage(t){this.snackbar.open(t,"Close",{duration:3e3})}}return t.\u0275fac=function(n){return new(n||t)(g.Y36(c.F0),g.Y36(c.gz),g.Y36(p.uw),g.Y36(s.qu),g.Y36(U.q),g.Y36(h.ux))},t.\u0275cmp=g.Xpm({type:t,selectors:[["app-about"]],decls:56,vars:11,consts:[[1,"container"],["novalidate","",3,"formGroup","ngSubmit"],["translate","",1,"login-error",3,"hidden"],["fxLayout","column","fxLayoutAlign","space-between none","fxFlex","30",1,"login-fields"],["appearance","fill"],["matNativeControl","","formControlName","source_city_id","required","",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["matNativeControl","","formControlName","destination_city_id","required","",3,"ngModel","ngModelChange"],["mat-raised-button","","color","primary","type","submit",1,"my-button-class",3,"disabled"],["translate",""],[3,"value"],["mat-table","","width","100%",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","","align","left",4,"matCellDef"],["matColumnDef","source"],["matColumnDef","destination"],["matColumnDef","spots"],["matColumnDef","booked_spots"],["matColumnDef","created_at"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell","","align","left"],["mat-raised-button","","color","primary","type","button",3,"disabled","click"],["mat-header-row",""],["mat-row",""],[1,"mat-row"],["colspan","8",1,"mat-cell"]],template:function(t,n){1&t&&(g.TgZ(0,"div",0),g._uU(1,"\n  "),g.TgZ(2,"mat-card"),g._uU(3,"\n  \n    "),g.TgZ(4,"mat-card-content"),g._uU(5,"\n      "),g.TgZ(6,"form",1),g.NdJ("ngSubmit",function(){return n.checkAvailability()}),g._uU(7,"\n        "),g.TgZ(8,"div",2),g._uU(9),g.qZA(),g._uU(10,"\n        "),g._UZ(11,"br"),g._uU(12,"\n        "),g.TgZ(13,"div",3),g._uU(14,"\n          "),g.TgZ(15,"mat-form-field",4),g._uU(16,"\n              "),g.TgZ(17,"mat-label"),g._uU(18,"From City "),g.qZA(),g._uU(19,"\n              "),g.TgZ(20,"mat-select",5),g.NdJ("ngModelChange",function(t){return n.source_city_id=t}),g._uU(21,"\n                  "),g.YNc(22,T,2,2,"mat-option",6),g._uU(23,"\n              "),g.qZA(),g._uU(24,"\n            "),g.YNc(25,C,5,0,"mat-error",7),g._uU(26,"\n          "),g.qZA(),g._uU(27,"\n          "),g.TgZ(28,"mat-form-field",4),g._uU(29,"\n              "),g.TgZ(30,"mat-label"),g._uU(31,"Destination City "),g.qZA(),g._uU(32,"\n              "),g.TgZ(33,"mat-select",8),g.NdJ("ngModelChange",function(t){return n.destination_city_id=t}),g._uU(34,"\n             \n              "),g.YNc(35,x,2,2,"mat-option",6),g._uU(36,"\n          "),g.qZA(),g._uU(37,"\n            "),g.YNc(38,v,5,0,"mat-error",7),g._uU(39,"\n          "),g.qZA(),g._uU(40,"\n          \n\n          "),g.TgZ(41,"button",9),g._uU(42,"\n            "),g.TgZ(43,"span",10),g._uU(44,"Check Availability"),g.qZA(),g._uU(45,"\n          "),g.qZA(),g._uU(46,"\n        "),g.qZA(),g._uU(47,"\n      "),g.qZA(),g._uU(48,"\n    "),g.qZA(),g._uU(49,"\n  "),g.qZA(),g._uU(50,"\n"),g._UZ(51,"br"),g._uU(52,"\n"),g.YNc(53,R,59,3,"div",7),g._uU(54,"\n"),g.qZA(),g._uU(55,"\n")),2&t&&(g.xp6(6),g.Q6J("formGroup",n.bookingForm),g.xp6(2),g.Q6J("hidden",!n.error||n.isLoading),g.xp6(1),g.Oqu(n.error),g.xp6(11),g.Q6J("ngModel",n.source_city_id),g.xp6(2),g.Q6J("ngForOf",n.cities),g.xp6(3),g.Q6J("ngIf",n.bookingForm.controls.source_city_id.invalid&&n.bookingForm.controls.source_city_id.touched),g.xp6(8),g.Q6J("ngModel",n.destination_city_id),g.xp6(2),g.Q6J("ngForOf",n.cities),g.xp6(3),g.Q6J("ngIf",n.bookingForm.controls.destination_city_id.invalid&&n.bookingForm.controls.destination_city_id.touched),g.xp6(3),g.Q6J("disabled",n.bookingForm.invalid||n.isLoading),g.xp6(12),g.Q6J("ngIf",n.dataSource.length))},directives:[f.a8,f.dn,s._Y,s.JL,s.sg,o.Pi,Z.xw,Z.Wh,Z.yH,b.KE,b.hX,q.gD,s.JJ,s.u,s.Q7,e.sg,e.O5,k.lW,y.ey,b.TO,A.BZ,A.w1,A.fO,A.Dz,A.as,A.nj,A.Ee,A.ge,A.ev,A.XQ,A.Gk],styles:[".container[_ngcontent-%COMP%]{text-align:center;padding:1rem}.mat-icon[_ngcontent-%COMP%]{vertical-align:middle}.my-button-class[_ngcontent-%COMP%]{width:200px!important;min-width:unset!important}"]}),t})(),data:{title:(0,d.J)("Create Booking")}}];let z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({providers:[],imports:[[c.Bz.forChild(j)],c.Bz]}),t})(),H=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=g.oAB({type:t}),t.\u0275inj=g.cJS({imports:[[e.ez,o.aw,u.m8,s.UX,a.o9,r.q,z]]}),t})()}}]);