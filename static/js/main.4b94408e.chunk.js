(this["webpackJsonpaiclub-gect-website"]=this["webpackJsonpaiclub-gect-website"]||[]).push([[0],{165:function(e,t,n){},432:function(e,t,n){},433:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(21),r=n.n(o),s=(n(165),n(22)),c=n(465),l=n(476),d=n(144),p=n.n(d),b=n(2),m=function(){return Object(b.jsx)(p.a,{params:{fps_limit:28,particles:{collisions:{enable:!1},number:{value:200,density:{enable:!1}},line_linked:{enable:!0,distance:30,opacity:.4},move:{speed:1},opacity:{anim:{enable:!0,opacity_min:.05,speed:1,sync:!1},value:.4}},polygon:{enable:!0,scale:.5,type:"inline",move:{radius:10},inline:{arrangement:"equidistant"},draw:{enable:!0,stroke:{color:"rgba(255, 255, 255, .2)"}}},retina_detect:!1,interactivity:{events:{onhover:{enable:!0,mode:"bubble"}},modes:{bubble:{size:6,distance:40}}}}})},h=n(8),u=n(35),j=n.n(u),x=n(468),g=n(469),f=n(154),w=n.p+"static/media/arch.d8a4e71b.png",O=Object(c.a)((function(e){var t,n,i;return{size:(t={width:800,height:350},Object(h.a)(t,e.breakpoints.down("md"),{width:600,height:285}),Object(h.a)(t,e.breakpoints.down("xs"),{height:200,width:350}),t),wrapper:{position:"relative"},center:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},color:{color:"white"},title:(n={position:"absolute",bottom:"-6px",fontSize:90},Object(h.a)(n,e.breakpoints.down("lg"),{fontSize:75}),Object(h.a)(n,e.breakpoints.down("md"),{fontSize:60}),Object(h.a)(n,e.breakpoints.down("sm"),{fontSize:50}),Object(h.a)(n,e.breakpoints.down("xs"),{fontSize:35}),n),subTitleWrapper:{position:"absolute"},subtitle:(i={opacity:"25%",margin:"5% 0",fontSize:60},Object(h.a)(i,e.breakpoints.down("lg"),{fontSize:50}),Object(h.a)(i,e.breakpoints.down("md"),{fontSize:45}),Object(h.a)(i,e.breakpoints.down("sm"),{fontSize:40}),Object(h.a)(i,e.breakpoints.down("xs"),{fontSize:25}),i),registerButton:Object(h.a)({borderRadius:50,padding:"5px 20px"},e.breakpoints.down("xs"),{height:30}),registerButtonText:Object(h.a)({fontSize:20},e.breakpoints.down("xs"),{fontSize:14}),archButton:{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)"},arch:{height:60,width:130}}})),v=function(e){var t=e.showForm,n=e.small,i=void 0!==n&&n,a=O();return Object(b.jsxs)("div",{className:j()(a.size,a.wrapper),children:[Object(b.jsx)(f.a,{variant:"h1",className:j()(a.size,a.title,a.color,a.center),children:"AI CLUB GECT"}),Object(b.jsxs)(x.a,{container:!0,className:j()(a.size,a.center,a.subTitleWrapper),children:[Object(b.jsx)(x.a,{item:!0,children:Object(b.jsx)(f.a,{variant:"h3",className:j()(a.color,a.subtitle),children:"ENVISIONING A NEW ERA OF"})}),Object(b.jsx)(x.a,{item:!0,children:Object(b.jsx)(f.a,{variant:"h3",className:j()(a.color,a.subtitle),children:"ARTIFICIAL INTELLIGENCE"})})]}),Object(b.jsx)("div",{className:a.archButton,children:i?Object(b.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(){return t(!0)},className:a.registerButton,children:Object(b.jsx)(f.a,{variant:"subtitle2",className:a.registerButtonText,children:"PRE-REGISTER"})}):Object(b.jsx)("img",{src:w,alt:"The Great Arch",className:a.arch})})]})},k=n(19),y=n(478),N=n(470),S=n(471),C=n(100),I=n.n(C),F=n(101),z=n.n(F),A=n(472),E=n(479),T=n(477),B=n(473),P=n(480),L=(n.p,n.p,n(99)),R=Object(c.a)((function(e){var t;return{formdiv:(t={background:"#F6F6F6",padding:"20px",borderRadius:"10px",width:"350px"},Object(h.a)(t,e.breakpoints.down("md"),{width:"325px"}),Object(h.a)(t,e.breakpoints.down("xs"),{width:"100%"}),t),form:{background:"#F6F6F6",display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"space-between"},heading:{fontFamily:"Poppins",fontSize:"25px",color:"#15497B"},names:{background:"#F6F6F6",display:"flex",justifyContent:"space-between",width:"inherit"},filledName:{background:"#e6efff",borderRadius:"10px",fontFamily:"Lato",margin:"5px 0","&:hover":{background:"#EBF2FF"},"&.Mui-focused":{background:"#EBF2FF"}},filledInput:{background:"#e6efff",borderRadius:"10px",fontFamily:"Lato",margin:"5px 0","&:hover":{background:"#EBF2FF"},"&.Mui-focused":{background:"#EBF2FF"}},checkControl:{fontFamily:"Lato",color:"grey",margin:"10px 0"},checkBox:{color:"blue","&$checked":{color:"blue"}},submit:{background:"#0158AE",color:"white",textTransform:"none"}}})),W=function(){var e=R(),t=a.a.useState({first:"",last:"",email:"",password:"",confirm:""}),n=Object(s.a)(t,2),i=n[0],o=n[1],r=a.a.useState({showPassword:!1,showConfirm:!1,notMatched:!1,check:!1,open:!1,openPass:!1,registerError:!1,isLoading:!1}),c=Object(s.a)(r,2),l=c[0],d=c[1],p=function(e){o(Object(k.a)(Object(k.a)({},i),{},Object(h.a)({},e.target.name,e.target.value)))},m=function(e,t){"clickaway"!==t&&d(Object(k.a)(Object(k.a)({},l),{},{open:!1}))},u=function(e,t){"clickaway"!==t&&d(Object(k.a)(Object(k.a)({},l),{},{openPass:!1}))};return Object(b.jsx)("div",{className:e.formdiv,children:Object(b.jsxs)("form",{className:e.form,onSubmit:function(e){i.password!==i.confirm?(d(Object(k.a)(Object(k.a)({},l),{},{openPass:!0,notMatched:!0})),e.preventDefault()):(console.log(i),d(Object(k.a)(Object(k.a)({},l),{},{isLoading:!0})),L.post("https://ai-club.herokuapp.com/api/user/register",{firstName:i.first,lastName:i.last,email:i.email,password:i.password}).then((function(e){console.log(e.data),o({first:"",last:"",email:"",password:"",confirm:""}),d(Object(k.a)(Object(k.a)({},l),{},{check:!1,open:!0,registerError:!1}))})).catch((function(e){e.response&&("USEREXISTS"===e.response.data.code?d(Object(k.a)(Object(k.a)({},l),{},{open:!0,registerError:!0})):console.log(e.response))})),e.preventDefault())},children:[Object(b.jsxs)(f.a,{className:e.heading,gutterBottom:!0,children:["Hello! ",Object(b.jsx)("br",{})," Pre-Register to ",Object(b.jsx)("br",{})," AI club today!"]}),Object(b.jsxs)("div",{className:e.names,children:[Object(b.jsx)(y.a,{placeholder:"First Name",className:e.filledName,style:{marginRight:5},name:"first",value:i.first,onChange:p,disableUnderline:!0,required:!0}),Object(b.jsx)(y.a,{placeholder:"Last Name",className:e.filledName,style:{marginLeft:5},name:"last",value:i.last,onChange:p,disableUnderline:!0})]}),Object(b.jsx)(y.a,{placeholder:"Email Address",className:e.filledInput,name:"email",value:i.email,onChange:p,disableUnderline:!0,required:!0}),Object(b.jsx)(y.a,{type:l.showPassword?"text":"password",placeholder:"Password",className:e.filledInput,name:"password",value:i.password,onChange:p,disableUnderline:!0,required:!0,endAdornment:Object(b.jsx)(N.a,{position:"end",children:Object(b.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(e){d(Object(k.a)(Object(k.a)({},l),{},{showPassword:!l.showPassword}))},children:l.showPassword?Object(b.jsx)(I.a,{}):Object(b.jsx)(z.a,{})})})}),Object(b.jsx)(y.a,{type:l.showConfirm?"text":"password",placeholder:"Confirm Password",className:e.filledInput,name:"confirm",value:i.confirm,onChange:p,disableUnderline:!0,required:!0,endAdornment:Object(b.jsx)(N.a,{position:"end",children:Object(b.jsx)(S.a,{"aria-label":"toggle password visibility",onClick:function(e){d(Object(k.a)(Object(k.a)({},l),{},{showConfirm:!l.showConfirm}))},children:l.showConfirm?Object(b.jsx)(I.a,{}):Object(b.jsx)(z.a,{})})})}),Object(b.jsx)(A.a,{className:e.checkControl,control:Object(b.jsx)(E.a,{className:e.checkBox,checked:l.check,onChange:function(e){d(Object(k.a)(Object(k.a)({},l),{},Object(h.a)({},e.target.name,e.target.checked)))},name:"check",required:!0}),label:"I agree to learn, collaborate and contribute"}),Object(b.jsx)(g.a,{variant:"contained",color:"primary",className:e.submit,type:"submit",children:l.isLoading?Object(b.jsx)(B.a,{size:24}):"Pre-Register"}),l.notMatched?Object(b.jsx)(P.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:l.openPass,autoHideDuration:1500,onClose:u,children:Object(b.jsx)(T.a,{variant:"filled",severity:"error",onClose:u,children:"Passwords do not match"})}):Object(b.jsx)("div",{}),Object(b.jsx)(P.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:l.open,autoHideDuration:1500,onClose:m,children:l.registerError?Object(b.jsx)(T.a,{variant:"filled",severity:"error",onClose:m,children:"Email already registered"}):Object(b.jsx)(T.a,{variant:"filled",severity:"success",onClose:m,children:"User registered"})})]})})},M=n.p+"static/media/eve.3ee5bbb4.png",D=n.p+"static/media/eve_square.2dc023bd.svg",q=n.p+"static/media/eve_triangle.5e70d062.svg",H=(n(432),Object(c.a)((function(e){return{wrapper:Object(h.a)({position:"relative",width:325,height:325},e.breakpoints.down("sm"),{width:217,height:217}),eve:{top:0,left:"-10%",zIndex:30,position:"absolute"},eveSquare:{zIndex:10,left:"-18%",top:"15%",position:"absolute"},eveTriangle:{zIndex:20,bottom:0,left:"30%",position:"absolute"}}}))),U=function(){var e=H();return Object(b.jsxs)("div",{className:e.wrapper,children:[Object(b.jsx)("div",{className:e.eveSquare,children:Object(b.jsx)("img",{alt:"Eve Square",className:"eve-square",src:D})}),Object(b.jsx)("div",{className:e.eveTriangle,children:Object(b.jsx)("img",{alt:"Eve Triangle",className:"eve-triangle",src:q})}),Object(b.jsx)("div",{className:e.eve,children:Object(b.jsx)("img",{alt:"Eve",className:"eve",src:M})})]})},G=Object(c.a)({landingContainer:{position:"relative",height:"100vh",backgroundColor:"black"},registerForm:{margin:20},animatedEve:{position:"absolute",bottom:"0px",left:"0px"},titleFormContainer:{position:"absolute",width:"100vw",display:"flex",height:"90vh",justifyContent:"space-between",alignItems:"center",zIndex:10,backgroundColor:"rgba(0, 0, 0, 0.1)"}}),_=function(e){var t=e.small,n=G(),a=Object(i.useState)(!1),o=Object(s.a)(a,2),r=o[0],c=o[1];return Object(b.jsxs)("div",{className:n.landingContainer,children:[Object(b.jsxs)("div",{className:n.titleFormContainer,children:[Object(b.jsx)("div",{}),Object(b.jsx)(v,{small:t,showForm:c}),t?Object(b.jsx)("div",{}):Object(b.jsx)("div",{className:n.registerForm,children:Object(b.jsx)(W,{})})]}),Object(b.jsx)("div",{className:n.animatedEve,children:Object(b.jsx)(U,{})}),Object(b.jsx)(m,{}),Object(b.jsx)(l.a,{open:r,onClose:function(){return c(!1)},children:Object(b.jsx)(W,{})})]})},X=n(99),J=n.n(X),Q=n(146),V=n.n(Q),K=n.p+"static/media/temp.084f4cf5.png",Y=n.p+"static/media/Nakshathra.d3977e65.jpeg",$=n.p+"static/media/Neha.d3f7c8a3.jpeg",Z=n.p+"static/media/Shuaib.37b797c0.jpeg",ee=n.p+"static/media/Navaneeth.3e978a38.jpg",te=n.p+"static/media/saneef.08e3bbd1.jpg",ne=n.p+"static/media/ashik.7b6a50ef.jpg",ie=[{name:"Anwar Sadique",position:"Faculty",group:"Nucleus",email:"",linkedIn:"https://www.linkedin.com/in/anwar-sadique-4287203b/",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Aashik M S",position:"Convenor",group:"Nucleus",email:"aashikms25@gmail.com",linkedIn:"https://www.linkedin.com/in/aashikms",description:"Robotics and AI are the future. Applying AI techniques like Computer Vision ,Motion planning and control etc are revolutionary. Colabarative robotics(Co-bots) and self-driving cars are great examples for the application of these technologies.",picture:{original:ne,cartoon:ne,white:ne}},{name:"Aadil K P",position:"Secretary",group:"Nucleus",email:"",linkedIn:"https://www.linkedin.com/in/aadil-kp-6a17351a2/",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Anagha",position:"Joint Convenor",group:"Nucleus",email:"anaghasureshbabu24@gmail.com",linkedIn:"https://www.linkedin.com/in/anagha-suresh-913416171",description:"Artificial intelligence will play a pivotal role in the coming future. AI gradually changes society and improve the convenience and comfort of human.",picture:{original:K,cartoon:K,white:K}},{name:"Ajay Ravindran",position:"Joint Secretary",group:"Nucleus",email:"ajaycravindran@gmail.com",linkedIn:"https://www.linkedin.com/in/ajay-r-376673132/",description:"AI is an interdisciplinary science and its advancement is creating a paradigm shift in virtually every sector of the tech industry.",picture:{original:K,cartoon:K,white:K}},{name:"Muhammed Favaz T P",position:"Treasurer",group:"Nucleus",email:"favaztp696@gmail.com",linkedIn:"https://www.linkedin.com/in/muhammed-favaz-t-p-48849a164",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Abhay V Ashokan",position:"Tech",group:"Node",email:"abhayvashokan@gmail.com",linkedIn:"https://www.linkedin.com/in/abhayvashokan/",description:"What's that thing sitting next to us? It appears to be some sort of primitive non-artificial un-intelligence!",picture:{original:K,cartoon:K,white:K}},{name:"Calvin Wilson",position:"Tech",group:"Node",email:"calvinwilson2017@gmail.com",linkedIn:"https://www.linkedin.com/in/calvin-wilson-254002186/",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Shaik Moideen M A",position:"Design & Media",group:"Dendrites",email:"shaikmoideen630@gmail.com",linkedIn:"https://www.linkedin.com/in/shaik-moideen-m-a-803b24211",description:"Artificial intelligence is a technology that can improve the world for the better. The world seems exciting and intriguing with Artificial Intelligence.",picture:{original:K,cartoon:K,white:K}},{name:"Saneef",position:"Design & Media",group:"Dendrites",email:"",linkedIn:"",description:"",picture:{original:te,cartoon:te,white:te}},{name:"Adhil P K",position:"Execom",group:"Axon",email:"abduladhilpk@gmail.com",linkedIn:"https://www.linkedin.com/in/abduladhilpk",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Allwyn Sunil",position:"Execom",group:"Axon",email:"",linkedIn:"https://www.linkedin.com/in/allwynsunil/",description:"",picture:{original:K,cartoon:K,white:K}},{name:"Navaneeth Dinesh",position:"Execom",group:"Axon",email:"",linkedIn:"https://www.linkedin.com/in/navaneeth-dinesh-216a45175/",description:"",picture:{original:ee,cartoon:ee,white:ee}},{name:"Shuaib Abubakker",position:"Execom",group:"Axon",email:"shuaibabh@gmail.com",linkedIn:"https://www.linkedin.com/in/shuaib-abubakker-bapputty-haji",description:"",picture:{original:Z,cartoon:Z,white:Z}},{name:"Nakshathra Nazer",position:"Execom",group:"Axon",email:"nakshathra.nazer@gmail.com",linkedIn:"https://www.linkedin.com/in/nakshathra-nazer-3b95ba1a4",description:"",picture:{original:Y,cartoon:Y,white:Y}},{name:"Neha Susan",position:"Execom",group:"Axon",email:"nehasusan369@gmail.com",linkedIn:"https://www.linkedin.com/in/neha-susan-manoj-965a391b3",description:"People have been using AI techniques to reap benefits in a gamut of applications. There is still a lot more untrodden paths to be discovered. So, it's future is bright.",picture:{original:$,cartoon:$,white:$}},{name:"Niranjan Neelakantan",position:"Execom",group:"Axon",email:"niranjan2neelakantan@gmail.com",linkedIn:"https://www.linkedin.com/in/niranjan-neelakantan",description:"We're making this analogy that AI is the new electricity. Electricity transformed industries: agriculture, transportation, communication, manufacturing",picture:{original:K,cartoon:K,white:K}}],ae=n(481),oe=n(474),re=n(147),se=n.n(re),ce=n(148),le=n.n(ce),de=Object(c.a)((function(e){return{cardContainer:Object(h.a)({position:"absolute",width:"358px",height:"229px",left:"30px",top:"-240px"},e.breakpoints.down("sm"),{position:"static",width:"252px",height:"139px"}),memberCard:Object(h.a)({position:"absolute",width:"358px",height:"198px",left:"0px",top:"37px",background:"#FFFFFF",boxShadow:"0px 4px 10px 3px rgba(0, 0, 0, 0.25)",borderRadius:"20px"},e.breakpoints.down("sm"),{width:"252px",height:"120px"}),memberPic:{position:"absolute",left:"18px",top:"0px",zIndex:1},avatarSize:Object(h.a)({width:"95px",height:"95px",border:"3px solid #288FB0",boxSizing:"border-box",borderRadius:"20px"},e.breakpoints.down("sm"),{width:"82px",height:"82px"}),memberName:Object(h.a)({position:"absolute",width:"196px",height:"30px",left:"122px",top:"11px",fontFamily:"Lato",fontStyle:"normal",fontWeight:"800",fontSize:"23px",lineHeight:"30px",textAlign:"left",color:"#000000",whiteSpace:"nowrap",overflow:"hidden"},e.breakpoints.down("sm"),{width:"137px",height:"21px",fontSize:"15px",lineHeight:"21px",left:"110px",top:"8px"}),memberPosition:Object(h.a)({position:"absolute",height:"18px",left:"122px",top:"41px",fontFamily:"Lato",fontStyle:"normal",fontWeight:700,fontSize:"15px",lineHeight:"18px",textAlign:"left",color:"#ABABAB"},e.breakpoints.down("sm"),{height:"12px",fontSize:"15px",lineHeight:"12px",left:"110px",top:"65px",fontWeight:700}),memberGroup:Object(h.a)({position:"absolute",height:"18px",left:"235px",top:"41px",fontFamily:"Lato",fontStyle:"normal",fontWeight:700,fontSize:"15px",lineHeight:"18px",textAlign:"right",color:"#565656 ",textTransform:"uppercase"},e.breakpoints.down("sm"),{height:"12px",fontSize:"15px",lineHeight:"12px",left:"110px",top:"80px",fontWeight:700,textTransform:"none"}),contactIcon1:Object(h.a)({position:"absolute",width:"22px",height:"22px",left:"120px",top:"65px"},e.breakpoints.down("sm"),{left:"110px",top:"30px"}),contactIcon2:Object(h.a)({position:"absolute",width:"22px",height:"22px",left:"162px",top:"65px"},e.breakpoints.down("sm"),{left:"140px",top:"30px"}),memberQuote:Object(h.a)({position:"absolute",width:"100%",padding:20,top:"72%",left:"50%",transform:"translate(-50%, -50%)",fontFamily:"Lato",fontStyle:"normal",fontWeight:"500",fontSize:"15px",lineHeight:"17px",textAlign:"center",color:"#727272"},e.breakpoints.down("sm"),{display:"none"})}})),pe=function(e){var t=e.memberIndex,n=de();return console.log(t),Object(b.jsxs)("div",{className:n.cardContainer,children:[Object(b.jsx)("div",{className:n.memberPic,children:Object(b.jsx)(ae.a,{variant:"rounded",alt:"Remy Sharp",src:ie[t].picture.cartoon,className:n.avatarSize})}),Object(b.jsxs)(oe.a,{className:n.memberCard,children:[Object(b.jsx)("div",{className:n.memberName,children:ie[t].name}),Object(b.jsx)("div",{className:n.memberPosition,children:ie[t].position}),Object(b.jsx)("div",{className:n.memberGroup,children:ie[t].group}),Object(b.jsx)(S.a,{color:"primary",className:n.contactIcon1,onClick:function(){return window.open(ie[t].linkedIn,"_blank")},children:Object(b.jsx)(se.a,{})}),Object(b.jsx)(S.a,{color:"secondary",className:n.contactIcon2,onClick:function(){return window.open("https://gmail.com","_blank")},children:Object(b.jsx)(le.a,{})}),Object(b.jsx)("div",{className:n.memberQuote,children:ie[t].description})]})]})},be=Object(c.a)((function(e){return{avatar:Object(h.a)({width:e.spacing(16),height:e.spacing(16),margin:10,boxShadow:e.shadows[5]},e.breakpoints.down("sm"),{width:"70px",height:"70px",margin:5,":&hover":{width:"80px",height:"80px",margin:0}})}})),me=function(e){var t=e.setSelect,n=e.index,i=be();return Object(b.jsx)(ae.a,{onMouseOver:function(){return t(!0,n)},onMouseDown:function(){return t(!0,n)},alt:ie[n].name,src:ie[n].picture.cartoon,className:i.avatar})},he=Object(c.a)((function(e){return{avatarSlider:{display:"flex"},gap:{minWidth:"2.5em"},profileCardDiv:{marginBottom:"0.95em",position:"relative",left:"0px",display:"flex",textAlign:"center"}}})),ue=function(e){var t=e.isShown,n=e.setIsShown,a=he(),o=Object(i.useState)({x:null,y:null}),r=Object(s.a)(o,2),c=r[0],l=r[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:a.profileCardDiv,onMouseMove:function(e){l({x:e.clientX,y:e.clientY})},children:t.show&&Object(b.jsx)(pe,{memberIndex:t.memberIndex,mousePosition:c.x})}),Object(b.jsx)(V.a,{speed:"70",pauseOnHover:"true",children:ie.map((function(e,t){return Object(b.jsx)("div",{className:a.marginProvider,children:Object(b.jsx)(me,{setSelect:n,index:t})},e)}))})]})},je=Object(c.a)((function(e){return{count:Object(h.a)({color:"#0E233E"},e.breakpoints.down("sm"),{fontSize:75})}})),xe=function(e){var t=e.count,n=Object(i.useState)(0),a=Object(s.a)(n,2),o=a[0],r=a[1],c=je();return Object(i.useEffect)((function(){var e=0;if(!(e>=t))var n=setInterval((function(){r(e+=1),e>=t&&clearInterval(n)}),1e3/t)}),[t]),Object(b.jsx)(f.a,{variant:"h2",className:c.count,children:o})},ge=Object(c.a)((function(e){return{memberCountContainer:{padding:10,borderRadius:50,boxShadow:"0 0 500px 50px #FFF",backgroundColor:"rgba(255, 255, 255, 0.6)"},text:Object(h.a)({fontSize:30,color:"#26214F",opacity:"50%",marginBottom:20},e.breakpoints.down("sm"),{fontSize:25,textAlign:"center"}),registerButton:Object(h.a)({borderRadius:50,padding:"5px 20px"},e.breakpoints.down("xs"),{height:30}),registerButtonText:Object(h.a)({fontSize:20},e.breakpoints.down("xs"),{fontSize:14})}})),fe=function(){window.scrollTo({top:0,behavior:"smooth"})},we=function(e){var t=e.count,n=(e.setCount,e.small),a=ge(),o=Object(i.useState)(!1),r=Object(s.a)(o,2),c=r[0],d=r[1];return Object(b.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",className:a.wrapper,children:[Object(b.jsx)(x.a,{item:!0,children:Object(b.jsx)(xe,{count:t})}),Object(b.jsx)(x.a,{item:!0,children:Object(b.jsx)(f.a,{variant:"h2",className:a.text,children:"members and strong"})}),Object(b.jsx)(x.a,{item:!0,children:Object(b.jsx)(g.a,{variant:"contained",color:"secondary",onClick:n?function(){return d(!0)}:fe,className:a.registerButton,children:Object(b.jsx)(f.a,{variant:"subtitle2",className:a.registerButtonText,children:"PRE-REGISTER"})})}),Object(b.jsx)(l.a,{open:c,onClose:function(){return d(!1)},children:Object(b.jsx)(W,{})})]})},Oe=n(149),ve=n.n(Oe),ke=Object(c.a)({circle:{height:60,width:50,borderRadius:50}}),ye=function(){var e=ke();return Object(b.jsx)(g.a,{variant:"contained",color:"secondary",className:e.circle,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(b.jsx)(ve.a,{})})},Ne=n(151),Se=Object(c.a)({backgroundContainer:{positon:"absolute",zIndex:50,width:"100%",height:"100vh"},odd:{opacity:"15%"},even:{opacity:"6%"},backgroundText:{fontSize:50,width:"100vw",color:"#6E61E9",whiteSpace:"nowrap",overflow:"hidden"}}),Ce=function(e){for(var t=e.name,n="",i=0;i<50;++i)n+=t.toUpperCase()+" ";var a=Se();return Object(b.jsx)("div",{className:a.backgroundContainer,children:Object(Ne.a)(Array(Math.ceil(window.innerHeight/80))).map((function(e,t){return Object(b.jsx)(f.a,{className:t%2?j()(a.backgroundText,a.odd):j()(a.backgroundText,a.even),children:n.substring(Math.floor(20*Math.random()))},t)}))})},Ie=Object(c.a)((function(e){return{memberContainer:{height:"100vh",background:"#F6F6F6"},image:Object(h.a)({position:"absolute",top:"5%",zIndex:10,left:"50%",height:"80%",opacity:"50%",transform:"translateX(-50%)"},e.breakpoints.down("sm"),{width:"100%",height:"auto"})}})),Fe=function(e){var t=e.memberIndex,n=Ie();return console.log(t),Object(b.jsxs)("div",{className:n.memberContainer,children:[Object(b.jsx)("img",{className:n.image,alt:ie[t].name,src:ie[t].picture.white}),Object(b.jsx)(Ce,{name:ie[t].name})]})},ze=n.p+"static/media/background.4bf98716.png",Ae=Object(c.a)((function(e){return{committeeContainer:{width:"100vw",height:"100vh",position:"relative",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",background:"url(".concat(ze,")")},memberCountContainer:{position:"absolute",zIndex:20,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},sliderContainer:{position:"absolute",bottom:0,zIndex:30,width:"100%",marginBottom:20},backToTopButtonContainer:{position:"absolute",right:0,bottom:0,margin:30,zIndex:50}}})),Ee=function(e){var t=e.small,n=Object(i.useState)(0),a=Object(s.a)(n,2),o=a[0],r=a[1],c=Object(i.useState)({show:!1,memberIndex:-1}),l=Object(s.a)(c,2),d=l[0],p=l[1],m=Ae();Object(i.useEffect)((function(){J.a.get("https://ai-club.herokuapp.com/api/user/count").then((function(e){r(e.data.count)})).catch((function(e){console.error(e),r(null)}))}),[]);var h=function(){0===window.pageYOffset&&setTimeout((function(){return p(!1)}),250)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",h,{passive:!0}),function(){window.removeEventListener("scroll",h)}}),[]),Object(b.jsxs)("div",{className:m.committeeContainer,children:[d.show?Object(b.jsx)(Fe,{memberIndex:d.memberIndex}):Object(b.jsx)("div",{className:m.memberCountContainer,children:Object(b.jsx)(we,{count:o,setCount:r,small:t})}),!t&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:m.sliderContainer,children:Object(b.jsx)(ue,{isShown:d,setIsShown:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return p({show:e,memberIndex:t})}})}),d.show&&Object(b.jsx)("div",{className:m.backToTopButtonContainer,children:Object(b.jsx)(ye,{})})]})]})},Te=Object(c.a)((function(e){return{membersContainer:{width:"100vw",height:"100vh",position:"relative"},sliderContainer:{position:"absolute",display:"flex",flexDirection:"column",overflow:"auto",zIndex:30,height:"90vh",margin:"10% 0",top:0,left:0},profileCardContainer:{position:"absolute",bottom:70,right:-80,zIndex:50,transform:"translateX(-50%)"},memberQuote:{position:"absolute",top:"50%",left:"50%",zIndex:60,padding:10,transform:"translate(-35%, -50%)",backgroundColor:"rgba(255, 255, 255, 0.5)",boxShadow:"0px 10px -14px 14px rgba(255, 255, 255, 0.5)"},backToTopButtonContainer:Object(h.a)({position:"absolute",right:0,bottom:0,zIndex:50},e.breakpoints.down("sm"),{margin:15})}})),Be=function(){var e=Te(),t=Object(i.useState)({show:!0,memberIndex:1}),n=Object(s.a)(t,2),a=n[0],o=n[1];return Object(b.jsxs)("div",{className:e.membersContainer,children:[Object(b.jsx)(Fe,{memberIndex:a.memberIndex}),Object(b.jsx)("div",{className:e.sliderContainer,children:ie.map((function(e,t){return Object(b.jsx)("div",{children:Object(b.jsx)(me,{index:t,setSelect:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.memberIndex;return o({show:e,memberIndex:t})}})},e)}))}),Object(b.jsx)("div",{className:e.memberQuote,children:Object(b.jsx)(f.a,{variant:"body1",style:{textAlign:"center"},children:ie[a.memberIndex].description})}),Object(b.jsx)("div",{className:e.profileCardContainer,children:Object(b.jsx)(pe,{memberIndex:a.memberIndex})}),Object(b.jsx)("div",{className:e.backToTopButtonContainer,children:Object(b.jsx)(ye,{})})]})},Pe=Object(c.a)({root:{background:"#F6F6F6"}}),Le=function(){var e=Pe(),t=Object(i.useState)(window.innerWidth<=960),n=Object(s.a)(t,2),a=n[0],o=n[1],r=function(){o(window.innerWidth<=960)};return Object(i.useEffect)((function(){return window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}})),Object(b.jsxs)("div",{className:e.root,children:[Object(b.jsx)(_,{small:a}),Object(b.jsx)(Ee,{small:a}),a&&Object(b.jsx)(Be,{})]})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,483)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),o(e),r(e)}))},We=n(150),Me=Object(We.a)({palette:{primary:{main:"#0158AE",light:"#408AD3"},secondary:{main:"#288FB0",light:"#408AD3"},error:{main:"#BB001B",light:"#EA4335"}},typography:{fontFamily:"Lato",subtitle1:{fontFamily:"Poppins",fontSize:30,fontWeight:800},body1:{fontFamily:"Lato",fontSize:15},subtitle2:{fontFamily:"Lato",fontWeight:800,fontSize:25},body2:{fontFamily:"Lato",fontSize:14},h1:{fontFamily:"Azonix",fontSize:90,letterSpacing:5,fontWeight:800},h2:{fontFamily:"Orbitron",fontSize:90,fontWeight:900},h3:{fontFamily:"Passion-One",fontSize:60,letterSpacing:2,fontWeight:700}}}),De=n(475);r.a.render(Object(b.jsx)(De.a,{theme:Me,children:Object(b.jsx)(Le,{})}),document.getElementById("root")),Re()}},[[433,1,2]]]);
//# sourceMappingURL=main.4b94408e.chunk.js.map