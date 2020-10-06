(this["webpackJsonpbugtrail-v3"]=this["webpackJsonpbugtrail-v3"]||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},46:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(30),r=a.n(l),s=(a(38),a(8)),o=a.n(s),i=a(12),m=a(1),u=a(2),d=a(3),p=a(5),b=Object(n.createContext)({id:"",email:"",displayName:"",role:"",myTickets:[],projects:[]}),g=a(64),E=a(15),f=a(11),h=a.n(f);a(40),a(44),a(63);h.a.initializeApp({apiKey:"AIzaSyBcSu1C4Qdud_a52NOWikVSOj0njkwODpc",authDomain:"bugtrail-v2.firebaseapp.com",databaseURL:"https://bugtrail-v2.firebaseio.com",projectId:"bugtrail-v2",storageBucket:"bugtrail-v2.appspot.com",messagingSenderId:"723885045033",appId:"1:723885045033:web:4eeef384d51bf7c025b338",measurementId:"G-VH49TBGZ9N"});var N=function(){var e=Object(i.a)(o.a.mark((function e(t,a){var n,c,l,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=j.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,l=t.email,r=new Date,e.prev=9,e.next=12,n.set(Object(E.a)({displayName:c,email:l,createdAt:r,myTickets:[""]},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}(),v=h.a.auth(),j=h.a.firestore(),k=h.a.storage(),y=new h.a.auth.GoogleAuthProvider;y.setCustomParameters({prompt:"select_account"});h.a,a(46);var w=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),o=s[0],i=s[1],u=Object(n.useState)(),E=Object(m.a)(u,2),f=E[0],N=E[1],v=Object(n.useState)(""),y=Object(m.a)(v,2),w=y[0],O=y[1],x=Object(n.useState)(""),S=Object(m.a)(x,2),C=S[0],T=S[1],P=Object(d.h)().projectId,D=Object(n.useContext)(b);Object(n.useEffect)((function(){j.collection("projects").doc(P).get().then((function(e){T(e.data().name)})).catch((function(e){console.error("Couldn't fetch project name: ",e)}))}),[P]);var I=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"title":l(n);break;case"description":i(n);break;case"priority":O(n)}};return c.a.createElement("div",{className:"pt-3 pl-2 pr-2 mt-5 mr-3 ml-3",style:{minHeight:"86vh"}},c.a.createElement("h1",{className:"text-center"},"Raising a new defect for: ",C),c.a.createElement("form",{className:"mb-5",onSubmit:function(e){e.preventDefault();var t=Object(g.a)(),n=new Date,c="";if(f){var r=k.ref().child("images/"+f.name).put(f,{contentType:"image/jpeg"});r.on(h.a.storage.TaskEvent.STATE_CHANGED,(function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log("Upload is "+t+"% done"),e.state){case h.a.storage.TaskState.PAUSED:console.log("Upload is paused");break;case h.a.storage.TaskState.RUNNING:console.log("Upload is running")}}),(function(e){console.error("Couldn't upload image: ",e)}),(function(){r.snapshot.ref.getDownloadURL().then((function(e){console.log("File available at",e),c=e})).then((function(){j.collection("tickets").doc(t).set({owner:{id:D.id,displayName:D.displayName,email:D.email},project:{projectId:P,projectName:C},title:a,description:o,imageUrl:c,priority:w,createdAt:n,status:"unassigned",assignee:{id:"",displayName:"",email:""},logs:[{personName:D.displayName,personRole:D.role,timestamp:n,statusChangedTo:"created"}],comments:[]}).then((function(){console.log("Ticket submitted successfully!")})).then((function(){l(""),i(""),O("")})).catch((function(e){console.error("Error creating ticket: ",e)}))}))}))}j.collection("users").doc(D.id).set({myTickets:[].concat(Object(p.a)(D.myTickets),[t])},{merge:!0})}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"defectTitle"},"Title"),c.a.createElement("input",{type:"text",name:"title",className:"form-control",id:"defectTitle",placeholder:"Issue title here...",value:a,onChange:I})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"defectDescription"},"Description"),c.a.createElement("textarea",{className:"form-control",name:"description",id:"defectDescription",placeholder:"Write a detailed description of the issue here...",rows:3,value:o,onChange:I})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"defectImage"},"Defect Image"),c.a.createElement("input",{type:"file",name:"defectImage",className:"form-control-file",onChange:function(e){e.target.files&&e.target.files[0].size<=3145728?(N(e.target.files?e.target.files[0]:void 0),console.log(f)):(alert("The maximum image size allowed is 3MB"),N(void 0))},id:"defectImage"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"defectPriority"},"Priority Level"),c.a.createElement("select",{className:"form-control",name:"priority",id:"defectPriority",value:w,onChange:I},c.a.createElement("option",null,"--Select--"),c.a.createElement("option",null,"Severe"),c.a.createElement("option",null,"High"),c.a.createElement("option",null,"Medium"),c.a.createElement("option",null,"Low"),c.a.createElement("option",null,"Feature request"))),c.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Submit Defect")))},O=function(){return c.a.createElement("div",{className:"card-footer text-white mt-auto text-center bg-dark"},c.a.createElement("h6",null,"Created by Nikhil Choudhary"),c.a.createElement("p",null,"\xa9 Copyright 2020"))},x=(a(51),Object(d.i)((function(){var e=Object(d.f)(),t=Object(n.useContext)(b);return c.a.createElement("div",{className:"bootstrap-navbar"},c.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},c.a.createElement(u.b,{to:"/bugtrail-v3",className:"navbar-brand"},"BUGTRAIL"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item ".concat("/bugtrail-v3"===e.location.pathname?"active":"")},c.a.createElement(u.b,{to:"/bugtrail-v3",className:"nav-link"},"Home ",c.a.createElement("span",{className:"sr-only"},"(current)"))),c.a.createElement("li",{className:"nav-item ".concat("/bugtrail-v3/register-and-login"===e.location.pathname?"active":"")},!t.email&&c.a.createElement(u.b,{to:"/bugtrail-v3/register-and-login",className:"nav-link"},"Login and Register")),c.a.createElement("li",null,t.email&&c.a.createElement("div",{className:"nav-link",style:{cursor:"pointer"},onClick:function(){v.signOut(),e.push("/bugtrail-v3"),window.location.reload()}},"Logout"))),c.a.createElement("span",{className:"navbar-text ml-auto"},t.email?"Hi, ".concat(t.displayName):""))))}))),S=function(){var e=new URLSearchParams(Object(d.g)().search),t=e.get("type"),a=e.get("projectId"),l=Object(n.useState)([]),r=Object(m.a)(l,2),s=r[0],o=r[1],i=Object(n.useContext)(b);return Object(n.useEffect)((function(){o([]);var e=[];j.collection("tickets").orderBy("createdAt","desc").get().then((function(t){t.forEach((function(t){var a=t.data(),n=a.project,c=a.title,l=a.description,r=a.imageUrl,s=a.priority,o=a.status,i=a.owner,m=a.assignee,u=a.createdAt,d=a.logs,p=a.comments;e.push({id:t.id,project:n,title:c,description:l,imageUrl:r,priority:s,status:o,owner:i,assignee:m,createdAt:u,logs:d,comments:p})}))})).then((function(){switch(t){case"all":o(e.filter((function(e){return a?e.project.projectId===a?e:void 0:e})));break;case"my":o(e.filter((function(e){if(e.owner.id===i.id){if(!a)return e;if(e.project.projectId===a)return e}})));break;case"assigned-to-me":o(e.filter((function(e){if(e.assignee.id===i.id){if(!a)return e;if(e.project.projectId===a)return e}})));break;case"unassigned":o(e.filter((function(e){if("unassigned"===e.status){if(!a)return e;if(e.project.projectId===a)return e}})));break;case"fixed":o(e.filter((function(e){if("fixed"===e.status){if(!a)return e;if(e.project.projectId===a)return e}})));break;case"failed":o(e.filter((function(e){if("failed"===e.status){if(!a)return e;if(e.project.projectId===a)return e}})))}})).catch((function(e){console.error("Couldn't fetch tickets: ",e)}))}),[t,i,a]),c.a.createElement("div",{className:"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5",style:{minHeight:"81vh"}},c.a.createElement("h2",{className:"text-center"},"View Tickets Here"),s.length>0?c.a.createElement("table",{className:"table table-bordered table-striped table-dark mb-5"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"S.No."),c.a.createElement("th",{scope:"col"},"Issue Title"),c.a.createElement("th",{scope:"col"},"Project"),c.a.createElement("th",{scope:"col"},"Issue Priority"),c.a.createElement("th",{scope:"col"},"Status"))),c.a.createElement("tbody",null,s.map((function(e,t){var a;return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,c.a.createElement(u.b,{className:"text-white",to:"/bugtrail-v3/ticket-details/".concat(e.id)},e.title)),c.a.createElement("td",null,(null===(a=e.project)||void 0===a?void 0:a.projectName)?e.project.projectName:""),c.a.createElement("td",null,e.priority),c.a.createElement("td",null,e.status))})))):c.a.createElement("h3",{className:"text-center pt-5"},"No tickets found"))},C=(a(52),function(){var e=Object(n.useContext)(b);return c.a.createElement("div",{className:"pt-3 pb-3 mt-5",style:{minHeight:"86vh"}},e.email?c.a.createElement("div",{className:"card border-dark m-5"},c.a.createElement("h5",{className:"card-header text-white bg-dark"},"User Dashboard"),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-sm-12"},c.a.createElement("div",{className:"card border-dark mb-3"},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/projects"},"admin"===e.role?"View All Projects":"View My Projects")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/new-project"},"Create A New Project")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=my"},"My Tickets")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=all"},"All Tickets")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=assigned-to-me"},"Tickets Assigned To Me")),"Triage"===e.role?c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=unassigned"},"Unassigned Tickets")):null,"Triage"===e.role?c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=fixed"},"Fixed Tickets")):null,"Triage"===e.role?c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"link-font",to:"/bugtrail-v3/view-tickets?type=failed"},"Failed Tickets")):null))),c.a.createElement("div",{className:"col-md-9 col-sm-12"},c.a.createElement("div",{className:"card border-dark"},c.a.createElement("h5",{className:"card-header text-white bg-dark"},e.displayName),c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark badge-pill"},"User ID")," ",e.id),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark badge-pill"},"Name")," ",e.displayName),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark badge-pill"},"Email")," ",e.email),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark badge-pill"},"Role Assigned")," ",e.role))))))):c.a.createElement("h2",{className:"text-center"},"Welcome to Bugtrail. A bug tracking software. Please register or login to continue."))}),T=(a(53),function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),s=Object(m.a)(r,2),o=s[0],i=s[1],u=Object(n.useState)(""),d=Object(m.a)(u,2),E=d[0],f=d[1],h=Object(n.useContext)(b),N=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"projName":l(n);break;case"projDescription":i(n);break;case"projStatus":f(n)}};return c.a.createElement("div",{className:"pt-5 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5",style:{minHeight:"81vh"}},c.a.createElement("h2",{className:"text-center"},"CREATE A NEW PROJECT"),c.a.createElement("form",{className:"mb-5",onSubmit:function(e){e.preventDefault();var t=Object(g.a)(),n=[];j.collection("projects").doc(t).set({name:a,description:o,status:E}).then((function(){j.collection("users").doc(h.id).get().then((function(e){e.exists&&(n=e.data().projects)})).then((function(){j.collection("users").doc(h.id).set({projects:[].concat(Object(p.a)(n),[t])},{merge:!0}).then((function(){console.log("Project created successfully!"),l(""),i(""),f("")})).catch((function(e){console.error("Error writing document: ",e)}))}))})).catch((function(e){console.error("Error writing document: ",e)}))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"projName"},"Title"),c.a.createElement("input",{type:"text",name:"projName",className:"form-control",id:"projName",placeholder:"Project name here...",value:a,onChange:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"projDescription"},"Description"),c.a.createElement("textarea",{className:"form-control",name:"projDescription",id:"projDescription",placeholder:"Write a description for your project here...",rows:3,value:o,onChange:N})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"projStatus"},"Operational Status"),c.a.createElement("select",{className:"form-control",name:"projStatus",id:"projStatus",value:E,onChange:N},c.a.createElement("option",null,"--Select--"),c.a.createElement("option",null,"Active"),c.a.createElement("option",null,"Inactive"),c.a.createElement("option",null,"Ended"),c.a.createElement("option",null,"Maintenance"))),c.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Create Project")))}),P=(a(54),function(){var e=Object(d.h)().projectId,t=Object(n.useState)(!1),a=Object(m.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(),o=Object(m.a)(s,2),i=o[0],b=o[1],g=Object(n.useState)([]),E=Object(m.a)(g,2),f=E[0],h=E[1],N=Object(n.useState)([]),v=Object(m.a)(N,2),k=v[0],y=v[1],w=Object(n.useState)(""),O=Object(m.a)(w,2),x=O[0],S=O[1],C=Object(n.useState)(0),T=Object(m.a)(C,2),P=T[0],D=T[1],I=Object(n.useState)(0),A=Object(m.a)(I,2),R=A[0],F=A[1],U=Object(n.useState)(0),H=Object(m.a)(U,2),L=H[0],M=H[1],q=Object(n.useState)(0),B=Object(m.a)(q,2),W=B[0],G=B[1],V=Object(n.useState)(0),z=Object(m.a)(V,2),J=z[0],_=z[1];Object(n.useEffect)((function(){j.collection("projects").doc(e).get().then((function(e){if(e.exists){var t=e.data(),a=t.name,n=t.description,c=t.status;b({id:e.id,name:a,description:n,status:c})}else console.log("No such document!")})).then((function(){h([]),y([]),j.collection("users").get().then((function(t){t.forEach((function(t){var a=t.data(),n=a.displayName,c=a.email,l=a.role,r=a.projects;r.includes(e)?h((function(e){return[].concat(Object(p.a)(e),[{id:t.id,displayName:n,email:c,role:l,projects:r}])})):y((function(e){return[].concat(Object(p.a)(e),[{id:t.id,displayName:n,email:c,role:l,projects:r}])}))}))}))})).then((function(){j.collection("tickets").get().then((function(t){t.forEach((function(t){if(t.data().project.projectId===e)switch(t.data().priority){case"Low":D((function(e){return e+1}));break;case"Medium":F((function(e){return e+1}));break;case"High":M((function(e){return e+1}));break;case"Severe":G((function(e){return e+1}));break;case"Feature request":_((function(e){return e+1}))}}))})).catch((function(e){console.error("Ticket priorities couldn't be fetched: ",e)}))})).catch((function(e){console.log("Error getting document:",e)}))}),[e,l]);var K=function(){r((function(e){return!e}))};return c.a.createElement("div",{className:"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5",style:{minHeight:"81vh"}},c.a.createElement("h2",{className:"text-center"},"Project Details Page"),c.a.createElement("div",{className:"card border-dark mb-3"},c.a.createElement("div",{className:"card-header text-white bg-dark"},"Name: ",null===i||void 0===i?void 0:i.name),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-3 col-sm-12"},c.a.createElement("div",{className:"card border-dark mb-3"},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"text-decoration-none text-dark",to:"/bugtrail-v3/new-defect/".concat(e)},"Raise a new Defect")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(u.b,{className:"text-decoration-none text-dark",to:"/bugtrail-v3/view-tickets/?projectId=".concat(e,"&type=all")},"View all tickets for:-",c.a.createElement("div",{style:{textTransform:"uppercase",fontWeight:"bold"}},null===i||void 0===i?void 0:i.name))),c.a.createElement("li",{className:"list-group-item"},"Add people to the project",c.a.createElement("form",{onSubmit:function(t){var a;t.preventDefault(),j.collection("users").doc(x).get().then((function(e){e.exists?a=e.data().projects:console.log("No such document!")})).then((function(){j.collection("users").doc(x).set({projects:[].concat(Object(p.a)(a),[e])},{merge:!0}).then((function(){console.log("projects updated successfully!")})).then((function(){K()})).catch((function(e){console.error("couldn't update projects!",e)}))})).catch((function(e){console.error("Error getting document: ",e)}))}},c.a.createElement("div",{className:"form-group mt-3"},c.a.createElement("select",{className:"form-control",value:x,onChange:function(e){S(e.target.value)},name:"addMembers"},c.a.createElement("option",null,"--Select One--"),k.map((function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.displayName,"@",e.email)})))),c.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Add Member")))))),c.a.createElement("div",{className:"col-md-9 col-sm-12"},c.a.createElement("div",{className:"card border-dark"},c.a.createElement("ul",{className:"list-group list-group-flush"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"ID")," ",null===i||void 0===i?void 0:i.id),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"Descrition")," ",null===i||void 0===i?void 0:i.description),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"status")," ",null===i||void 0===i?void 0:i.status),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"Severe")," ",W),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"High")," ",L),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"Medium")," ",R),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"Low")," ",P),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-pill badge-dark"},"Feature Request")," ",J))))))),c.a.createElement("table",{className:"table table-striped table-bordered table-dark mb-5"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"S.No."),c.a.createElement("th",{scope:"col"},"Project Members"),c.a.createElement("th",{scope:"col"},"Members Emails"),c.a.createElement("th",{scope:"col"},"Roles"))),c.a.createElement("tbody",null,f.map((function(t,a){return c.a.createElement("tr",{key:a},c.a.createElement("th",{scope:"row"},a+1),c.a.createElement("td",null,t.displayName),c.a.createElement("td",null,t.email),c.a.createElement("td",null,t.role),c.a.createElement("td",{className:"text-center"},c.a.createElement("button",{className:"btn btn-danger",onClick:(n=t.id,function(t){t.preventDefault();var a=[];j.collection("users").doc(n).get().then((function(t){t.exists&&((a=t.data().projects)&&a.includes(e)?a.splice(a.indexOf(e),1):console.log("User isn't a part of this project!"))})).then((function(){console.log("Entered 2nd then block"),j.collection("users").doc(n).set({projects:a},{merge:!0}).then((function(){console.log("project removed successfully!")})).then((function(){K()})).catch((function(e){console.error("couldn't remove project!",e)}))})).catch((function(e){console.error("Couldn't remove user from project: ",e)}))})},"Remove")));var n})))))}),D=(a(55),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],l=t[1],r=Object(n.useContext)(b);return Object(n.useEffect)((function(){j.collection("projects").get().then((function(e){e.forEach((function(e){r.projects.includes(e.id)&&l((function(t){return[].concat(Object(p.a)(t),[{id:e.id,name:e.data().name,description:e.data().description,status:e.data().status}])}))}))}))}),[r.projects]),c.a.createElement("div",{className:"pt-5 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5",style:{minHeight:"81vh"}},c.a.createElement("h2",{className:"text-center"},"PROJECTS PAGE"),c.a.createElement("table",{className:"table table-bordered table-striped table-dark mb-5"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"S.No."),c.a.createElement("th",{scope:"col"},"Project Name"),c.a.createElement("th",{scope:"col"},"Project Status"))),c.a.createElement("tbody",null,a.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,c.a.createElement(u.b,{className:"text-white text-decoration-none",to:"/bugtrail-v3/project-details/".concat(e.id)},e.name)),c.a.createElement("td",null,e.status))})))))}),I=(a(56),a(16)),A=(a(57),function(){var e=Object(d.f)(),t=Object(n.useState)({email:"developer@nikhil.com",password:"12345678"}),a=Object(m.a)(t,2),l=a[0],r=a[1],s=l.email,u=l.password,p=function(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(E.a)({},e,Object(I.a)({},a,n))}))},b=function(){var t=Object(i.a)(o.a.mark((function t(a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,v.signInWithEmailAndPassword(s,u);case 4:r({email:"",password:""}),e.push("/bugtrail-v3"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.error("Couldn't login user: ",t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"text-center mb-5 mt-5"},c.a.createElement("form",{className:"form-signin",onSubmit:b},c.a.createElement("img",{className:"mb-4",src:"https://banner2.cleanpng.com/20180526/ux/kisspng-software-bug-undocumented-feature-computer-softwar-5b093b61afe799.6982676615273316817205.jpg",alt:"bugtrail",width:"72",height:"72"}),c.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please Login"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"loginEmail",className:"sr-only"},"Email address"),c.a.createElement("input",{type:"email",name:"email",id:"loginEmail",className:"form-control",placeholder:"Email address",value:s,onChange:p,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"loginPassword",className:"sr-only"},"Password"),c.a.createElement("input",{type:"password",name:"password",id:"loginPassword",className:"form-control",placeholder:"Password",value:u,onChange:p,required:!0})),c.a.createElement("div",{className:"checkbox mb-3"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),c.a.createElement("button",{className:"btn btn-lg btn-dark btn-block",type:"submit"},"Login")))}),R=(a(58),function(){var e=Object(d.f)(),t=Object(n.useState)({fName:"Developer",lName:"Schwarz",role:"Developer",email:"developer@nikhil.com",password:"12345678",confirmPassword:"12345678"}),a=Object(m.a)(t,2),l=a[0],r=a[1],s=l.fName,u=l.lName,p=l.role,b=l.email,g=l.password,f=l.confirmPassword,h=function(e){var t=e.target,a=t.name,n=t.value;r((function(e){return Object(E.a)({},e,Object(I.a)({},a,n))}))},j=function(){var t=Object(i.a)(o.a.mark((function t(a){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("Entered handleSubmit"),a.preventDefault(),g===f){t.next=5;break}return alert("Passwords don't match!"),t.abrupt("return");case 5:return t.prev=5,t.next=8,v.createUserWithEmailAndPassword(b,g);case 8:return n=t.sent,c=n.user,t.next=12,N(c,{displayName:"".concat(s," ").concat(u),role:p,createdProjects:[""],projects:[""]});case 12:r({fName:"",lName:"",role:"",email:"",password:"",confirmPassword:""}),e.push("/bugtrail-v3"),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),console.error("Error creating user: ",t.t0);case 19:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}();return c.a.createElement("div",{className:"text-center mb-5 mt-5"},c.a.createElement("form",{className:"form-signin",onSubmit:j},c.a.createElement("img",{className:"mb-4",src:"https://banner2.cleanpng.com/20180526/ux/kisspng-software-bug-undocumented-feature-computer-softwar-5b093b61afe799.6982676615273316817205.jpg",alt:"bugtrail",width:"72",height:"72"}),c.a.createElement("h1",{className:"h3 mb-3 font-weight-normal"},"Please Register"),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"firstName",className:"sr-only"},"First Name"),c.a.createElement("input",{type:"text",name:"fName",id:"firstName",className:"form-control",placeholder:"First Name",value:s,onChange:h,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"lastName",className:"sr-only"},"Last Name"),c.a.createElement("input",{type:"text",name:"lName",id:"lastName",className:"form-control",placeholder:"Last Name",value:u,onChange:h,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("select",{className:"form-control",name:"role",id:"role",value:p,onChange:h},c.a.createElement("option",null,"--Select--"),c.a.createElement("option",null,"Admin"),c.a.createElement("option",null,"Developer"),c.a.createElement("option",null,"Triage"),c.a.createElement("option",null,"Tester"))),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"registerEmail",className:"sr-only"},"Email address"),c.a.createElement("input",{type:"email",name:"email",id:"registerEmail",className:"form-control",placeholder:"Email address",onChange:h,value:b,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"registerPassword",className:"sr-only"},"Password"),c.a.createElement("input",{type:"password",name:"password",id:"registerPassword",className:"form-control",placeholder:"Password",value:g,onChange:h,required:!0})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"inputConfirmPassword",className:"sr-only"},"Confirm Password"),c.a.createElement("input",{type:"password",name:"confirmPassword",id:"inputConfirmPassword",className:"form-control",placeholder:"Confirm Password",value:f,onChange:h,required:!0})),c.a.createElement("div",{className:"checkbox mb-3"},c.a.createElement("label",null,c.a.createElement("input",{type:"checkbox",value:"remember-me"})," Remember me")),c.a.createElement("button",{className:"btn btn-lg btn-dark btn-block",type:"submit"},"Register")))}),F=function(){return c.a.createElement("div",{className:"pt-5 pl-3 pr-3 pb-5",style:{minHeight:"91vh"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6 col-sm-12"},c.a.createElement(A,null)),c.a.createElement("div",{className:"col-md-6 col-sm-12"},c.a.createElement(R,null))))},U=function(){var e=Object(d.h)().ticketId,t=Object(n.useContext)(b),a=Object(n.useState)(!0),l=Object(m.a)(a,2),r=l[0],s=l[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),u=i[0],g=i[1],E=Object(n.useState)([]),f=Object(m.a)(E,2),h=f[0],N=f[1],v=Object(n.useState)({id:"",displayName:"",email:""}),k=Object(m.a)(v,2),y=k[0],w=k[1],O=Object(n.useState)(""),x=Object(m.a)(O,2),S=x[0],C=x[1],T=Object(n.useState)(""),P=Object(m.a)(T,2),D=P[0],I=P[1],A=Object(n.useState)({id:"",project:{projectId:"",projectName:""},title:"",description:"",imageUrl:"",priority:"",status:"",owner:{displayName:"",email:"",id:""},assignee:{displayName:"",email:"",id:""},createdAt:"",logs:[],comments:[]}),R=Object(m.a)(A,2),F=R[0],U=R[1];Object(n.useEffect)((function(){j.collection("tickets").doc(e).get().then((function(e){if(e.exists){var t=e.data(),a=t.project,n=t.title,c=t.description,l=t.imageUrl,r=t.priority,s=t.status,o=t.owner,i=t.assignee,m=t.createdAt,u=t.logs,d=t.comments;U({id:e.id,project:a,title:n,description:c,imageUrl:l,priority:r,status:s,owner:o,assignee:i,createdAt:m.toDate().toString(),logs:u,comments:d}),w(i),C(s),g(a.projectId)}else console.log("No such document!")})).then((function(){j.collection("users").get().then((function(e){N([]),e.forEach((function(e){e.data().projects.includes(u)&&N((function(t){return[].concat(Object(p.a)(t),[{id:e.id,displayName:e.data().displayName,email:e.data().email}])}))}))})).catch((function(e){console.error("couldn't fetch the users list: ",e)}))})).catch((function(e){console.error("Error getting document:",e)}))}),[e,u,r]);var H=function(){s((function(e){return!e}))},L=function(e){C(e.target.value)},M=function(a){a.preventDefault();var n=[];j.collection("tickets").doc(e).get().then((function(e){e.exists&&(n=e.data().logs)})).then((function(){j.collection("tickets").doc(e).set({status:S,logs:[].concat(Object(p.a)(n),[{personName:t.displayName,personRole:t.role,timestamp:new Date,statusChangedTo:S}])},{merge:!0}).then((function(){console.log("Status changed successfully!")})).then((function(){H()})).catch((function(e){console.error("Error changing status: ",e)}))})).catch((function(e){console.error("Couldn't fetch logs array: ",e)}))};return c.a.createElement("div",{className:"pt-3 pb-3 pl-2 pr-2 mt-5 mr-3 ml-3 mb-5",style:{minHeight:"81vh"}},c.a.createElement("h2",{className:"text-center"},"Ticket Details Page"),c.a.createElement("div",{className:"card border-dark mb-5"},c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"ID")," ",e),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Project Name")," ",F.project.projectName),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Title")," ",F.title),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Description")," ",F.description),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Priority")," ",F.priority),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("div",{className:"mb-3"},c.a.createElement("span",{className:"badge badge-dark"},"Screenshot")),c.a.createElement("img",{src:F.imageUrl,alt:"defect screenshot",className:"img-fluid"})),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Created At")," ",F.createdAt),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Owner")," ",F.owner.displayName),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Asignee")," ",F.assignee.displayName,"Triage"===t.role?c.a.createElement("div",{className:"mt-3"},c.a.createElement("select",{className:"text-center",name:"assignee",id:"assignee",value:y.displayName,onChange:function(e){h.forEach((function(t){t.displayName===e.target.value&&w(t)}))}},c.a.createElement("option",{className:""},"--Select--"),h.map((function(e,t){return c.a.createElement("option",{key:t},e.displayName)})))," ",c.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:function(a){a.preventDefault();var n=y?"assigned":"unassigned",c=[];j.collection("tickets").doc(e).get().then((function(e){e.exists&&(c=e.data().logs)})).then((function(){j.collection("tickets").doc(e).set({assignee:y,status:n,logs:[].concat(Object(p.a)(c),[{personName:t.displayName,personRole:t.role,timestamp:new Date,statusChangedTo:n}])},{merge:!0}).then((function(){console.log("Status changed successfully!")})).then((function(){H()})).catch((function(e){console.error("Error changing status: ",e)}))})).catch((function(e){console.error("Couldn't fetch logs array: ",e)}))}},"Change Assignee")):""),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"badge badge-dark"},"Status")," ",F.status,function(){switch(t.role){case"Tester":return F.assignee.displayName===t.displayName?c.a.createElement("div",{className:"mt-3"},c.a.createElement("select",{className:"text-center",name:"status",id:"status",value:S,onChange:L},c.a.createElement("option",{className:""},"--Select--"),c.a.createElement("option",null,"passed"),c.a.createElement("option",null,"failed"))," ",c.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:M},"Change Status")):"";case"Triage":return c.a.createElement("div",{className:"mt-3"},c.a.createElement("select",{className:"text-center",name:"status",id:"status",value:S,onChange:L},c.a.createElement("option",{className:""},"--Select--"),c.a.createElement("option",null,"assigned"),c.a.createElement("option",null,"duplicate"),c.a.createElement("option",null,"rejected"),c.a.createElement("option",null,"closed"),c.a.createElement("option",null,"in-testing"),c.a.createElement("option",null,"tested"))," ",c.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:M},"Change Status"));case"Developer":return F.assignee.displayName===t.displayName?c.a.createElement("div",{className:"mt-3"},c.a.createElement("select",{className:"text-center",name:"assignee",id:"exampleFormControlSelect1",value:S,onChange:L},c.a.createElement("option",{className:""},"--Select--"),c.a.createElement("option",null,"in-progress"),c.a.createElement("option",null,"on-hold"),c.a.createElement("option",null,"fixed"))," ",c.a.createElement("button",{className:"btn btn-sm btn-dark",onClick:M},"Change Status")):""}}()))),c.a.createElement("h4",{className:"text-center"},"Ticket change history"),c.a.createElement("table",{className:"table table-striped table-bordered table-dark"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"S.No."),c.a.createElement("th",{scope:"col"},"Person"),c.a.createElement("th",{scope:"col"},"Role"),c.a.createElement("th",{scope:"col"},"Changed the status to"),c.a.createElement("th",{scope:"col"},"on Date"))),c.a.createElement("tbody",null,F.logs.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.personName),c.a.createElement("td",null,e.personRole),c.a.createElement("td",null,e.statusChangedTo),c.a.createElement("td",null,e.timestamp.toDate().toString()))})))),c.a.createElement("h4",{className:"text-center"},"Ticket comment history"),c.a.createElement("table",{className:"table table-striped table-bordered table-dark"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col"},"S.No."),c.a.createElement("th",{scope:"col"},"Person"),c.a.createElement("th",{scope:"col"},"Role"),c.a.createElement("th",{scope:"col"},"Comment"))),c.a.createElement("tbody",null,F.comments.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("th",{scope:"row"},t+1),c.a.createElement("td",null,e.personName),c.a.createElement("td",null,e.personRole),c.a.createElement("td",null,e.comment))})))),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"comment"},"Add Comment"),c.a.createElement("textarea",{className:"form-control",name:"comment",id:"comment",value:D,onChange:function(e){I(e.target.value)},rows:4})),c.a.createElement("button",{className:"btn btn-dark",onClick:function(a){a.preventDefault();var n=[];j.collection("tickets").doc(e).get().then((function(e){e.exists&&(n=e.data().comments)})).then((function(){j.collection("tickets").doc(e).set({comments:[].concat(Object(p.a)(n),[{personName:t.displayName,personRole:t.role,timestamp:new Date,comment:D}])},{merge:!0}).then((function(){console.log("Successfully added the comment."),H(),I("")})).catch((function(e){console.error("Couldn't add the comment: ",e)}))})).catch((function(e){console.error("Couldn't fetch comments array: ",e)}))}},"Submit Comment")))},H=function(){var e=Object(n.useState)({id:"",email:"",displayName:"",role:"",myTickets:[],projects:[]}),t=Object(m.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){var e=v.onAuthStateChanged(function(){var e=Object(i.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,N(t,void 0);case 3:null===(a=e.sent)||void 0===a||a.onSnapshot((function(e){var t,a,n,c,r;l({id:e.id,email:null===(t=e.data())||void 0===t?void 0:t.email,displayName:null===(a=e.data())||void 0===a?void 0:a.displayName,role:null===(n=e.data())||void 0===n?void 0:n.role,myTickets:null===(c=e.data())||void 0===c?void 0:c.myTickets,projects:null===(r=e.data())||void 0===r?void 0:r.projects})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]),c.a.createElement("div",null,c.a.createElement(b.Provider,{value:a},c.a.createElement(u.a,null,c.a.createElement(x,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3",component:C}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/register-and-login",component:F}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/new-defect/:projectId",component:w}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/new-project",component:T}),c.a.createElement(d.a,{path:"/bugtrail-v3/view-tickets",component:S}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/ticket-details/:ticketId",component:U}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/projects",component:D}),c.a.createElement(d.a,{exact:!0,path:"/bugtrail-v3/project-details/:projectId",component:P})))),c.a.createElement(O,null))};a(59),a(60),a(29);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(H,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.226b008f.chunk.js.map