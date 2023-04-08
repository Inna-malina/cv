(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var o=t.g.document;if(!e&&o&&(o.currentScript&&(e=o.currentScript.src),!e)){var i=o.getElementsByTagName("script");i.length&&(e=i[i.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e={"rs-school":{"portfolio-1":{top:"Истории о животных",text:"Проект о животных. Имеет кроссбраузерную, адаптивную вёрстку. В проекте использовались карусели с плавной анимацией при перелистывани элементов; попапы в меню и в блоке отзывов. Так же на второй странице применялись интерактивные элементы при выборе суммы пожертвования.",githubcode:"https://github.com/Inna-malina/rs-school/tree/zoo/zoo",linkproject:"https://inna-malina.github.io/rs-school/zoo/index.html",imgsrc:"assets/rs-school__1.jpg",imgheight:"1805px"},"portfolio-2":{top:"Песни из фильмов",text:"Музыкальная викторина.Проект имеет кроссбраузерную, адаптивную вёрстку. Игра имеет несколько уровней. Все уровни заблокированы, их сменить самостоятельно нельзя. Когда на текущем уровне угадывается мелодия, тогда становится активной кнопка, которая даёт возможность перейти на следующий этап. В игре ведётся подсчёт и за каждую угаданную мелодию очки прибавляются, а за каждый неправильный ответ очки снимаются.",githubcode:"https://github.com/Inna-malina/rs-school/tree/song-film/song-film",linkproject:"https://inna-malina.github.io/rs-school/song-film/index.html",imgsrc:"assets/rs-school__2.jpg",imgheight:"350px"},"portfolio-3":{top:"Портфолио",text:"Портфолио фотографа. Это одностраничный сайт. Имеет кроссбраузерную, адаптивную вёрстку. Есть смена языков, смена темы сайта (светлая тёмная). Сайт имеет фильтрацию фотографий по временам года.",githubcode:"https://github.com/Inna-malina/rs-school/tree/portfplio-photo/portfolio-photo",linkproject:"https://inna-malina.github.io/rs-school/portfolio-photo/index.html",imgsrc:"assets/rs-school__3.jpg",imgheight:"1975px"},carousel:["assets/rs-school-carousel__1.jpg","assets/rs-school-carousel__2.jpg","assets/rs-school-carousel__3.jpg"]},animation:{"portfolio-1":{top:"Байкал",text:"Проект для туристического агентства. Имеет кроссбраузерную, адаптивную вёрстку. Использовалась небольшая анимация: ховер эффекты, параллакс эффекты, 3-D элементы и т.д.",githubcode:"https://github.com/Inna-malina/baikal-test",linkproject:"https://inna-malina.github.io/baikal-test/",imgsrc:"assets/animation__1.jpg",imgheight:"1380px"},"portfolio-2":{top:"Fashion House",text:"Проект для магазина одежды",githubcode:"https://github.com/Inna-malina/fashion/tree/fashion-pages",linkproject:"https://inna-malina.github.io/fashion/",imgsrc:"assets/animation__2.jpg",imgheight:"350px"},carousel:["assets/animation-carousel__1.jpg","assets/animation-carousel__2.jpg"]},react:{"portfolio-1":{top:"Customer Developer",text:"Это приложение было создано самоcтоятельно для закрепления базовых навыков React. Например роутеры, ссылки,классы, пропсы. Сайт имеет адаптивную, кроссбраузерную верстку. Содержит простую анимацию, работу с формой и видео.",githubcode:"https://github.com/Inna-malina/cust-dev-react",linkproject:"http://cast-dev-eact.cb75308.tmweb.ru/",imgsrc:"assets/react__1.jpg",imgheight:"640px"},"portfolio-2":{top:"Всё что вы любите в кофе",text:"Этот проект был создан самостоятельно, для закрепления знаний и навыков, полученных на курсе 'React Basic Level' от Ивана Петриченко. Этот сайт не имеет адаптивной верстки.",githubcode:"https://github.com/Inna-malina/coffe-react",linkproject:"http://coffee-react.cb75308.tmweb.ru/",imgsrc:"assets/react__2.jpg",imgheight:"666px"},"portfolio-3":{top:"Учёт сотрудников",text:"Это приложение было создано во время изучения react. Этот проект является результатом курса 'React Basic Level' от Ивана Петриченко. В этом проекте есть классы, компоненты, события. Этот сайт не имеет адаптивной верстки.",githubcode:"https://github.com/Inna-malina/employees-react",linkproject:"http://employees.cb75308.tmweb.ru/",imgsrc:"assets/react__3.jpg",imgheight:"348px"},carousel:["assets/react-carousel__1.jpg","assets/react-carousel__2.jpg","assets/react-carousel__3.jpg"]},others:{}};t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,t.p,function(){let t=document.querySelector(".photo__box");t.addEventListener("click",(function(){t.classList.remove("turn-animate"),t.classList.add("moove-animate"),setTimeout((function(){t.classList.remove("moove-animate"),t.classList.add("turn-animate")}),5e3)}))}(),function(){let t=document.querySelectorAll(".js-menu-link"),e=document.querySelectorAll(".screen");t.forEach((function(o){o.addEventListener("click",(function(i){let a=i.target;t.forEach((function(t){t.classList.remove("active-header-nav")})),a.classList.add("active-header-nav"),e.forEach((function(t){o.dataset.menu===t.dataset.menu?t.classList.remove("screen--hidden"):t.classList.add("screen--hidden")}))}))}))}(),function(){let t=document.querySelector(".portfolio-content-img__box"),o=document.querySelector(".portfolio-content-img__box img"),i=document.querySelector(".description-title a"),a=document.querySelector(".description-text"),r=document.querySelector(".project-link__githab a"),s=document.querySelector(".project-link__project a"),c=document.querySelectorAll(".portfolio-nav__box ul li"),n=document.querySelectorAll(".carousel-element");c.forEach((function(n){n.addEventListener("click",(function(n){let l=n.target;c.forEach((function(t){t.classList.remove("active-nav")})),l.classList.add("active-nav");let p=e[l.dataset.portfolio],h=Object.values(p)[0];t.href=h.linkproject,o.src=h.imgsrc,o.style.height=h.imgheight,i.textContent=h.top,a.textContent=h.text,r.href=h.githubcode,s.href=h.linkproject,i.dataset.translater=`${l.dataset.portfolio}-portfolio-1__title`,a.dataset.translater=`${l.dataset.portfolio}-portfolio-1__text`,document.querySelectorAll(".carousel-element").forEach((function(t){t.remove()}));let u=document.querySelector(".carousel-field"),m=p.carousel;for(let c=1;c<=m.length;c++){let n=document.createElement("img");n.className="carousel-element",n.dataset.portfolio=`portfolio-${c}`,n.dataset.container=l.dataset.portfolio,n.src=`assets/${l.dataset.portfolio}-carousel__${c}.jpg`,u.append(n),n.addEventListener("click",(function(c){let n=c.target;for(let c in e)for(let l in e[c])n.dataset.portfolio===l&&n.dataset.container===c&&(t.href=e[c][l].linkproject,o.src=e[c][l].imgsrc,o.style.height=e[c][l].imgheight,i.textContent=e[c][l].top,a.textContent=e[c][l].text,r.href=e[c][l].githubcode,s.href=e[c][l].linkproject,i.dataset.translater=`${n.dataset.container}-${l}__title`,a.dataset.translater=`${n.dataset.container}-${l}__text`)}))}}))})),n.forEach((function(c){c.addEventListener("click",(function(c){let n=c.target;for(let c in e)for(let l in e[c])n.dataset.portfolio===l&&n.dataset.container===c&&(t.href=e[c][l].linkproject,o.src=e[c][l].imgsrc,o.style.height=e[c][l].imgheight,i.textContent=e[c][l].top,a.textContent=e[c][l].text,r.href=e[c][l].githubcode,s.href=e[c][l].linkproject)}))}))}(),function(){let t=document.querySelector(".menu-img"),e=document.querySelector(".page-header"),o=document.querySelector(".menu-grey-background__box");t.addEventListener("click",(function(){e.classList.add("header-active"),o.classList.add("menu-grey__active")})),o.addEventListener("click",(function(){e.classList.remove("header-active"),o.classList.remove("menu-grey__active")}))}()})();
//# sourceMappingURL=main.js.map