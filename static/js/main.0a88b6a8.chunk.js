(window.webpackJsonpportfoliov2=window.webpackJsonpportfoliov2||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/project1.bf56edc6.png"},function(e,t,n){e.exports=n.p+"static/media/project2.f7e79c7d.png"},function(e,t,n){e.exports=n.p+"static/media/project3.7bded960.png"},function(e,t,n){e.exports=n.p+"static/media/wordpress_baner.ef1ae882.jpg"},function(e,t,n){e.exports=n.p+"static/media/email_icon.fd99f8e3.png"},function(e,t,n){e.exports=n.p+"static/media/github_icon.e2a62886.png"},function(e,t,n){e.exports=n.p+"static/media/linkedin_icon.56ab00e8.png"},function(e,t,n){e.exports=n.p+"static/media/twitter_icon.512536cb.png"},function(e,t,n){e.exports=n.p+"static/media/profile4.48c8b8e6.jpg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(7),r=n.n(l),o=n(1),c=n(2),s=n(4),u=n(3),m=n(5),p=n(8),h=n.n(p),f=n(9),d=n.n(f),g=n(10),k=n.n(g),E=n(11),v=n.n(E),y=[{id:1,title:"Example React Application",description:"A React App that I built, involving JS and core web dec concepts!",link:"https://github.com/forati89/example",image:h.a},{id:2,title:"My API",description:"A REST API that I built from scratch with GET and POST requests!",link:"https://github.com/forati89/example",image:d.a},{id:3,title:"Operating System Final Project",description:"My unique final project for my university Operating Systems course.",link:"https://github.com/forati89/example",image:k.a},{id:4,title:"WordPress E-commerce",description:"A complete e-commerce project by me, built with WordPress",link:"https://www.cloudvapor.se",image:v.a}],j=function(e){var t=e.project,n=t.title,a=t.image,l=t.description,r=t.link;return i.a.createElement("div",{style:{display:"inline-block",width:300,margin:10}},i.a.createElement("h3",null,n),i.a.createElement("img",{src:a,alt:"profile",style:{width:200,height:120}}),i.a.createElement("p",null,l),i.a.createElement("a",{href:r},r))},b=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Highlighted Projects"),i.a.createElement("div",{className:"projectsDiv"},y.map((function(e){return i.a.createElement(j,{key:e.id,project:e})}))))},w=n(12),I=n.n(w),x=n(13),O=n.n(x),J=n(14),S=n.n(J),A=n(15),B=n.n(A),T=[{id:1,link:"mailto:has_allak@yahoo.com",image:I.a},{id:2,link:"https://github.com/forati89",image:O.a},{id:3,link:"https://linkedin.com/in/hassan-allak-861435172/",image:S.a},{id:4,link:"https://twitter.com/forati89",image:B.a}],M=function(e){var t=e.profile,n=t.link,a=t.image;return i.a.createElement("span",null,i.a.createElement("a",{href:n},i.a.createElement("img",{src:a,alt:"social-profile",style:{width:35,height:35,margin:10}})))},_=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Connect with me!"),T.map((function(e){return i.a.createElement(M,{key:e.id,profile:e})})))},C=n(16),P=n.n(C),D=["a software engineer","football lover","an enthusiastic learner","an adventure seeker","a great team player"],N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={titleIndex:0,fadeIn:!0},n.animateTitles=function(){n.titleInterval=setInterval((function(){var e=(n.state.titleIndex+1)%D.length;n.setState({titleIndex:e,fadeIn:!0}),n.timeout=setTimeout((function(){return n.setState({fadeIn:!1})}),2e3)}),4e3)},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeout=setTimeout((function(){return e.setState({fadeIn:!1})}),2e3),this.animateTitles()}},{key:"componentWillUnmount",value:function(){clearInterval(this.titleInterval),clearTimeout(this.timeout)}},{key:"render",value:function(){var e=this.state,t=e.fadeIn,n=(e.titleIndex,D[this.state.titleIndex]);return i.a.createElement("p",{className:t?"title-fade-in":"title-fade-out",style:{color:"white"}},i.a.createElement("em",null,"I am ",n))}}]),t}(a.Component),R=function(e){var t=e.joke,n=t.setup,a=t.punchline;return i.a.createElement("p",{style:{margin:20}},n,i.a.createElement("em",null,a))},H=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={joke:{},tenJokes:[],showJokes:!1},n.fetchJokes=function(){fetch("https://official-joke-api.appspot.com/random_ten").then((function(e){return e.json()})).then((function(e){return n.setState({tenJokes:e})})).catch((function(e){return alert(e.message)}))},n.toggleTenJokes=function(){n.setState({showJokes:!n.state.showJokes})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://official-joke-api.appspot.com/random_joke").then((function(e){return e.json()})).then((function(t){return e.setState({joke:t})})).catch((function(e){return alert(e.message)}))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Highlighted Joke"),i.a.createElement(R,{joke:this.state.joke}),i.a.createElement("hr",null),i.a.createElement("h3",null,"Want ten new jokes?"),i.a.createElement("a",{onClick:this.fetchJokes},i.a.createElement("h3",{className:"button"},"More Jokes!")),this.state.tenJokes.map((function(e){return i.a.createElement(R,{key:e.id,joke:e})})))}}]),t}(a.Component),W=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={displayBio:!1},n.toggleDisplayBio=function(){n.setState({displayBio:!n.state.displayBio})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:P.a,alt:"profile-picture",className:"profile"}),i.a.createElement("h1",null,"Hello!"),i.a.createElement("p",null,"My name is Hassan Allak."),i.a.createElement(N,null),i.a.createElement("p",null,"I'm always looking forward to working on meaningful projects"),this.state.displayBio?i.a.createElement("div",null,i.a.createElement("p",null,"I live in V\xe4ster\xe5s, and code every day."),i.a.createElement("p",null,"My favorite language is JavaScript, and I think React.js is awesome."),i.a.createElement("p",null,"Beside coding, I also love fitness and e-sports."),i.a.createElement("a",{onClick:this.toggleDisplayBio},i.a.createElement("h3",{className:"button"},"Show less"))):i.a.createElement("div",null,i.a.createElement("a",{onClick:this.toggleDisplayBio},i.a.createElement("h3",{className:"button"},"Read More"))),i.a.createElement("hr",null),i.a.createElement(b,null),i.a.createElement("hr",null),i.a.createElement(_,null),i.a.createElement("hr",null),i.a.createElement(H,null))}}]),t}(a.Component);n(22);r.a.render(i.a.createElement(W,null),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.0a88b6a8.chunk.js.map