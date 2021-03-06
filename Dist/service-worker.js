let CACHE_NAME = "v1";
let fileToCache = [
	"./bundle.js",
	"./index.html",
	"./css/style.css",
	"./css/bootstrap.min.css",
	"./css/fontawesome 5.13.0/css/all.min.css",
	"./css/fontawesome 5.13.0/css/v4-shims.min.css",
	"./css/fontawesome 5.13.0/webfonts/fa-brands-400.woff2",
	"./css/fontawesome 5.13.0/webfonts/fa-solid-900.woff2",
	"./js/jquery-3.1.1.min.js",
	"./js/jquery.easing.1.3.js",
	"./pages/home.html",
	"./pages/portfolio.html",
	"./pages/certificate.html",
	"./fonts/poppins-regular-webfont.woff2",
	"./fonts/sourcesanspro-extralight-webfont.woff2",
	"./fonts/sourcesanspro-regular-webfont.woff2",
	"./img/Certificate/Bitdegree - Introducing Coding for Beginners an HTML and CSS-1.jpg",
	"./img/Certificate/Bitlabs - Membuat Web dengan Wordpress-1.jpg",
	"./img/Certificate/Bitlabs - Web Developer-1.jpg",
	"./img/Certificate/Codepolitan - Algoritma dan Pemrograman Dasar.jpg",
	"./img/Certificate/Codepolitan - Belajar Git untuk Pemula.jpg",
	"./img/Certificate/Codepolitan - Belajar HTML dan CSS Dasar.jpg",
	"./img/Certificate/Codepolitan - Belajar Javascript Async.jpg",
	"./img/Certificate/Dicoding Certificate - Dasar Pemrograman Web 2-1.jpg",
	"./img/Certificate/Dicoding Certificate - Fundamental Front End Web Development-1.jpg",
	"./img/Certificate/Dicoding Certificate - Prinsip Pemrograman SOLID-1.jpg",
	"./img/Certificate/Langkah Menjadi Seorang Front-end Web Developer Certificate-1.jpg",
	"./img/Certificate/Progate Certificate - Comand Line-1.jpg",
	"./img/Certificate/Progate Certificate - Git-1.jpg",
	"./img/Certificate/Progate Certificate - Javascript-1.jpg",
	"./img/Certificate/Progate Certificate - Sass-1.jpg",
	"./img/Certificate/Udemy Certificate - Front End Web Development.jpg",
	"./img/Certificate/Udemy Certificate - Modern Javascript for React Js - ES6.jpg",
	"./img/absen-one.jpg",
	"./img/absen-two.jpg",
	"./img/absen-three.jpg",
	"./img/bg.jpg",
	"./img/bg2.jpg",
	"./img/elciqiiu.jpg",
	"./img/Game-Suwit-Jawa.jpg",
	"./img/imagine-home.jpg",
	"./img/kalkulator.jpg",
	"./img/lorem-about.jpg",
	"./img/lorem-features.jpg",
	"./img/lorem-home.jpg",
	"./img/lorem-portfolio.jpg",
	"./img/lorem-signup.jpg",
	"./img/personal-about.jpg",
	"./img/personal-blog.jpg",
	"./img/personal-contact.jpg",
	"./img/personal-home.jpg",
	"./img/portfolio1.webp",
	"./img/portfolio2.webp",
	"./img/portfolio3.webp",
	"./img/portfolio4.webp",
	"./img/portfolio5.webp",
	"./img/portfolio6.webp",
	"./img/portfolio7.webp",
	"./img/portfolio8.webp",
	"./img/portfolio9.webp",
	"./img/portfolio10.webp",
	"./img/profile.jpg",
	"./img/solution-home.jpg",
	"./img/todolist-one.jpg",
	"./img/todolist-three.jpg",
	"./img/todolist-two.jpg",
	"./img/undraw_On_the_way_re_swjt.svg",
	"./img/undraw_page_not_found_su7k.svg",
	"./img/undraw_warning_cyit.svg",
	"./img/undraw_server_down_s4lk.svg",
	"./img/undraw_signal_searching_bhpc.svg",
	"./img/ziggy-home.jpg",
];

self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(fileToCache))));

self.addEventListener("activate", (e) => {
	e.waitUntil(caches.keys().then((cacheNames) => Promise.all(cacheNames.filter((cacheName) => cacheName !== CACHE_NAME).map((cacheName) => caches.delete(cacheName)))));
});

self.addEventListener("fetch", (e) => e.respondWith(caches.match(e.request).then((res) => (res ? res : fetch(e.request)))));
