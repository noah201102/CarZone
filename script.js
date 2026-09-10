/* =========================================================
   CARZONE PERFORMANCE DATABASE
   ========================================================= */

const cars = [

/* ===================== LAMBORGHINI ===================== */

{
 name:"Lamborghini Revuelto", year:2023, hp:1001, top:350,
 zero100:2.5, zero200:7.0, zero300:20.0,
 quarterMile:9.9, halfMile:16.8, oneMile:25.8,
 image:"https://loremflickr.com/900/550/lamborghini,revuelto"
},

{
 name:"Lamborghini Aventador LP700-4", year:2011, hp:700, top:350,
 zero100:2.9, zero200:9.0, zero300:27.0,
 quarterMile:11.0, halfMile:18.8, oneMile:29.5,
 image:"https://loremflickr.com/900/550/lamborghini,aventador"
},

{
 name:"Lamborghini Aventador SVJ Roadster", year:2019, hp:770, top:350,
 zero100:2.9, zero200:8.8, zero300:25.5,
 quarterMile:10.6, halfMile:17.8, oneMile:27.5,
 image:"https://loremflickr.com/900/550/lamborghini,svj"
},

{
 name:"Lamborghini Huracán EVO", year:2019, hp:640, top:325,
 zero100:2.9, zero200:9.0, zero300:27.0,
 quarterMile:10.8, halfMile:18.5, oneMile:29.0,
 image:"https://loremflickr.com/900/550/lamborghini,huracan"
},

{
 name:"Lamborghini Gallardo", year:2003, hp:500, top:309,
 zero100:4.2, zero200:13.5, zero300:null,
 quarterMile:12.2, halfMile:20.8, oneMile:33.0,
 image:"https://loremflickr.com/900/550/lamborghini,gallardo"
},

{
 name:"Lamborghini Murciélago", year:2001, hp:580, top:330,
 zero100:3.8, zero200:11.5, zero300:null,
 quarterMile:11.5, halfMile:19.5, oneMile:31.0,
 image:"https://loremflickr.com/900/550/lamborghini,murcielago"
},

{
 name:"Lamborghini Diablo", year:1990, hp:492, top:325,
 zero100:4.5, zero200:14.0, zero300:null,
 quarterMile:12.4, halfMile:21.5, oneMile:34.0,
 image:"https://loremflickr.com/900/550/lamborghini,diablo"
},

{
 name:"Lamborghini Countach", year:1974, hp:455, top:295,
 zero100:5.0, zero200:16.5, zero300:null,
 quarterMile:13.0, halfMile:22.5, oneMile:37.0,
 image:"https://loremflickr.com/900/550/lamborghini,countach"
},

{
 name:"Lamborghini Veneno", year:2013, hp:750, top:355,
 zero100:2.8, zero200:8.6, zero300:25.0,
 quarterMile:10.5, halfMile:17.5, oneMile:27.0,
 image:"https://loremflickr.com/900/550/lamborghini,veneno"
},

{
 name:"Lamborghini Centenario", year:2016, hp:770, top:350,
 zero100:2.8, zero200:8.7, zero300:25.0,
 quarterMile:10.5, halfMile:17.6, oneMile:27.0,
 image:"https://loremflickr.com/900/550/lamborghini,centenario"
},

{
 name:"Lamborghini Sán FKP 37", year:2019, hp:770, top:350,
 zero100:2.8, zero200:8.7, zero300:25.0,
 quarterMile:10.5, halfMile:17.7, oneMile:27.2,
 image:"https://loremflickr.com/900/550/lamborghini"
},

{
 name:"Lamborghini Sesto Elemento", year:2010, hp:570, top:350,
 zero100:2.5, zero200:7.8, zero300:22.0,
 quarterMile:10.5, halfMile:17.5, oneMile:27.5,
 image:"https://loremflickr.com/900/550/lamborghini,sesto"
},

{
 name:"Lamborghini Temerario", year:2024, hp:920, top:343,
 zero100:2.7, zero200:7.3, zero300:19.0,
 quarterMile:10.0, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/lamborghini,temerario"
},

/* ===================== FERRARI ===================== */

{
 name:"Ferrari SF90 Stradale", year:2019, hp:1000, top:340,
 zero100:2.5, zero200:6.7, zero300:16.5,
 quarterMile:9.5, halfMile:16.0, oneMile:24.8,
 image:"https://loremflickr.com/900/550/ferrari,sf90"
},

{
 name:"Ferrari LaFerrari", year:2013, hp:963, top:350,
 zero100:2.6, zero200:6.9, zero300:15.0,
 quarterMile:9.7, halfMile:16.3, oneMile:25.0,
 image:"https://loremflickr.com/900/550/ferrari,laferrari"
},

{
 name:"Ferrari 458 Italia", year:2009, hp:570, top:340,
 zero100:3.4, zero200:9.8, zero300:25.5,
 quarterMile:11.0, halfMile:18.5, oneMile:29.0,
 image:"https://loremflickr.com/900/550/ferrari,458"
},

{
 name:"Ferrari 488 GTB", year:2015, hp:670, top:330,
 zero100:3.0, zero200:8.3, zero300:22.0,
 quarterMile:10.3, halfMile:17.3, oneMile:27.0,
 image:"https://loremflickr.com/900/550/ferrari,488"
},

{
 name:"Ferrari F8 Tributo", year:2019, hp:720, top:340,
 zero100:2.9, zero200:7.8, zero300:20.5,
 quarterMile:10.2, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/ferrari,f8"
},

{
 name:"Ferrari Roma", year:2020, hp:620, top:320,
 zero100:3.4, zero200:9.3, zero300:27.0,
 quarterMile:11.0, halfMile:18.7, oneMile:30.0,
 image:"https://loremflickr.com/900/550/ferrari,roma"
},

{
 name:"Ferrari 296 GTB", year:2021, hp:830, top:330,
 zero100:2.9, zero200:7.3, zero300:19.0,
 quarterMile:10.0, halfMile:16.7, oneMile:25.5,
 image:"https://loremflickr.com/900/550/ferrari,296"
},

{
 name:"Ferrari 812 Superfast", year:2017, hp:800, top:340,
 zero100:2.9, zero200:7.9, zero300:20.0,
 quarterMile:10.2, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/ferrari,812"
},

{
 name:"Ferrari 12Cilindri", year:2024, hp:830, top:340,
 zero100:2.9, zero200:7.8, zero300:21.0,
 quarterMile:10.3, halfMile:17.2, oneMile:26.5,
 image:"https://loremflickr.com/900/550/ferrari"
},

{
 name:"Ferrari F12berlinetta", year:2012, hp:740, top:340,
 zero100:3.1, zero200:8.5, zero300:23.0,
 quarterMile:10.5, halfMile:17.8, oneMile:27.5,
 image:"https://loremflickr.com/900/550/ferrari,f12"
},

{
 name:"Ferrari Enzo", year:2002, hp:660, top:355,
 zero100:3.6, zero200:9.5, zero300:27.0,
 quarterMile:11.0, halfMile:18.5, oneMile:29.0,
 image:"https://loremflickr.com/900/550/ferrari,enzo"
},

{
 name:"Ferrari F40", year:1987, hp:478, top:324,
 zero100:4.1, zero200:11.5, zero300:null,
 quarterMile:11.8, halfMile:20.0, oneMile:32.0,
 image:"https://loremflickr.com/900/550/ferrari,f40"
},

{
 name:"Ferrari F12tdf", year:2015, hp:780, top:340,
 zero100:2.9, zero200:7.8, zero300:21.0,
 quarterMile:10.2, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/ferrari,f12"
},

/* ===================== PORSCHE ===================== */

{
 name:"Porsche 911 Turbo S", year:2020, hp:650, top:330,
 zero100:2.7, zero200:8.9, zero300:25.0,
 quarterMile:10.1, halfMile:17.5, oneMile:27.5,
 image:"https://loremflickr.com/900/550/porsche,911"
},

{
 name:"Porsche 911 GT3 RS", year:2022, hp:525, top:296,
 zero100:3.2, zero200:10.6, zero300:null,
 quarterMile:10.9, halfMile:18.7, oneMile:30.5,
 image:"https://loremflickr.com/900/550/porsche,gt3"
},

{
 name:"Porsche 911 GT3", year:2021, hp:510, top:318,
 zero100:3.4, zero200:10.5, zero300:null,
 quarterMile:11.0, halfMile:18.9, oneMile:30.8,
 image:"https://loremflickr.com/900/550/porsche,gt3"
},

{
 name:"Porsche 911 Targa 4 GTS", year:2021, hp:480, top:307,
 zero100:3.5, zero200:11.5, zero300:null,
 quarterMile:11.3, halfMile:19.5, oneMile:32.0,
 image:"https://loremflickr.com/900/550/porsche,targa"
},

{
 name:"Porsche 911 Carrera S", year:2020, hp:450, top:308,
 zero100:3.7, zero200:12.0, zero300:null,
 quarterMile:11.5, halfMile:20.0, oneMile:32.5,
 image:"https://loremflickr.com/900/550/porsche,911"
},

{
 name:"Porsche 718 Spyder RS", year:2023, hp:500, top:308,
 zero100:3.4, zero200:10.8, zero300:null,
 quarterMile:11.2, halfMile:19.5, oneMile:31.5,
 image:"https://loremflickr.com/900/550/porsche,spyder"
},

{
 name:"Porsche Taycan Turbo S", year:2021, hp:952, top:260,
 zero100:2.4, zero200:7.8, zero300:null,
 quarterMile:9.9, halfMile:17.0, oneMile:29.0,
 image:"https://loremflickr.com/900/550/porsche,taycan"
},

{
 name:"Porsche Cayenne Turbo GT", year:2021, hp:640, top:305,
 zero100:3.3, zero200:12.0, zero300:null,
 quarterMile:11.5, halfMile:19.8, oneMile:32.0,
 image:"https://loremflickr.com/900/550/porsche,cayenne"
},

/* ===================== AUDI ===================== */

{
 name:"Audi RS3 Sportback", year:2022, hp:400, top:290,
 zero100:3.8, zero200:12.5, zero300:null,
 quarterMile:11.9, halfMile:20.5, oneMile:35.0,
 image:"https://loremflickr.com/900/550/audi,rs3"
},

{
 name:"Audi RS4", year:2020, hp:450, top:280,
 zero100:4.1, zero200:13.0, zero300:null,
 quarterMile:12.1, halfMile:20.8, oneMile:34.5,
 image:"https://loremflickr.com/900/550/audi,rs4"
},

{
 name:"Audi RS5", year:2020, hp:450, top:280,
 zero100:3.9, zero200:12.3, zero300:null,
 quarterMile:11.8, halfMile:20.3, oneMile:34.0,
 image:"https://loremflickr.com/900/550/audi,rs5"
},

{
 name:"Audi RS6 Avant", year:2020, hp:600, top:305,
 zero100:3.6, zero200:11.0, zero300:null,
 quarterMile:11.2, halfMile:19.4, oneMile:31.5,
 image:"https://loremflickr.com/900/550/audi,rs6"
},

{
 name:"Audi RS7 Sportback", year:2020, hp:600, top:305,
 zero100:3.4, zero200:11.0, zero300:null,
 quarterMile:11.1, halfMile:19.2, oneMile:31.0,
 image:"https://loremflickr.com/900/550/audi,rs7"
},

{
 name:"Audi RS Q8", year:2019, hp:600, top:305,
 zero100:3.8, zero200:12.0, zero300:null,
 quarterMile:11.7, halfMile:20.2, oneMile:33.0,
 image:"https://loremflickr.com/900/550/audi,rsq8"
},

{
 name:"Audi RS Q3", year:2019, hp:400, top:250,
 zero100:4.5, zero200:15.0, zero300:null,
 quarterMile:12.6, halfMile:21.8, oneMile:37.0,
 image:"https://loremflickr.com/900/550/audi,rsq3"
},

{
 name:"Audi R8 GT", year:2022, hp:620, top:320,
 zero100:3.4, zero200:10.5, zero300:29.0,
 quarterMile:11.0, halfMile:19.0, oneMile:31.0,
 image:"https://loremflickr.com/900/550/audi,r8"
},

{
 name:"Audi RS e-tron GT", year:2021, hp:646, top:250,
 zero100:3.3, zero200:8.0, zero300:null,
 quarterMile:11.0, halfMile:19.0, oneMile:32.0,
 image:"https://loremflickr.com/900/550/audi,etron"
},

{
 name:"Audi TT RS", year:2016, hp:400, top:280,
 zero100:3.7, zero200:13.0, zero300:null,
 quarterMile:11.9, halfMile:20.5, oneMile:34.0,
 image:"https://loremflickr.com/900/550/audi,ttrs"
},

/* ===================== BMW ===================== */

{
 name:"BMW M2", year:2023, hp:460, top:285,
 zero100:4.1, zero200:12.5, zero300:null,
 quarterMile:12.1, halfMile:20.8, oneMile:35.0,
 image:"https://loremflickr.com/900/550/bmw,m2"
},

{
 name:"BMW M3 Competition", year:2021, hp:510, top:290,
 zero100:3.9, zero200:11.5, zero300:null,
 quarterMile:11.5, halfMile:19.8, oneMile:33.0,
 image:"https://loremflickr.com/900/550/bmw,m3"
},

{
 name:"BMW M3 Touring", year:2022, hp:510, top:280,
 zero100:3.6, zero200:11.0, zero300:null,
 quarterMile:11.5, halfMile:19.8, oneMile:33.0,
 image:"https://loremflickr.com/900/550/bmw,m3"
},

{
 name:"BMW M4 Competition", year:2021, hp:510, top:290,
 zero100:3.9, zero200:11.5, zero300:null,
 quarterMile:11.5, halfMile:19.8, oneMile:33.0,
 image:"https://loremflickr.com/900/550/bmw,m4"
},

{
 name:"BMW M5", year:2020, hp:625, top:305,
 zero100:3.3, zero200:10.5, zero300:null,
 quarterMile:11.2, halfMile:19.5, oneMile:32.0,
 image:"https://loremflickr.com/900/550/bmw,m5"
},

{
 name:"BMW M8 Competition", year:2020, hp:625, top:305,
 zero100:3.2, zero200:10.2, zero300:null,
 quarterMile:10.9, halfMile:19.0, oneMile:31.0,
 image:"https://loremflickr.com/900/550/bmw,m8"
},

{
 name:"BMW X5 M Competition", year:2020, hp:625, top:290,
 zero100:3.8, zero200:12.0, zero300:null,
 quarterMile:11.7, halfMile:20.5, oneMile:34.0,
 image:"https://loremflickr.com/900/550/bmw,x5m"
},

{
 name:"BMW XM", year:2023, hp:653, top:270,
 zero100:4.3, zero200:14.0, zero300:null,
 quarterMile:12.4, halfMile:21.5, oneMile:36.5,
 image:"https://loremflickr.com/900/550/bmw,xm"
},

{
 name:"BMW M1", year:1978, hp:277, top:262,
 zero100:5.6, zero200:18.0, zero300:null,
 quarterMile:13.8, halfMile:24.0, oneMile:41.0,
 image:"https://loremflickr.com/900/550/bmw,m1"
},

{
 name:"BMW 340i", year:2020, hp:374, top:250,
 zero100:4.4, zero200:15.0, zero300:null,
 quarterMile:12.8, halfMile:22.0, oneMile:37.5,
 image:"https://loremflickr.com/900/550/bmw,340i"
},

/* ===================== MERCEDES ===================== */

{
 name:"Mercedes-AMG One", year:2022, hp:1063, top:352,
 zero100:2.9, zero200:7.0, zero300:15.0,
 quarterMile:9.5, halfMile:15.8, oneMile:24.0,
 image:"https://loremflickr.com/900/550/mercedes,amg,one"
},

{
 name:"Mercedes-AMG GT Black Series", year:2020, hp:730, top:325,
 zero100:3.2, zero200:9.0, zero300:25.0,
 quarterMile:10.2, halfMile:17.3, oneMile:26.5,
 image:"https://loremflickr.com/900/550/mercedes,amg"
},

{
 name:"Mercedes-AMG GT 63", year:2024, hp:816, top:320,
 zero100:2.8, zero200:8.0, zero300:22.0,
 quarterMile:10.5, halfMile:18.0, oneMile:29.0,
 image:"https://loremflickr.com/900/550/mercedes,gt63"
},

{
 name:"Mercedes-AMG C63 S", year:2023, hp:680, top:280,
 zero100:3.4, zero200:10.0, zero300:null,
 quarterMile:11.1, halfMile:19.0, oneMile:31.5,
 image:"https://loremflickr.com/900/550/mercedes,c63"
},

{
 name:"Mercedes-AMG E63 S", year:2020, hp:612, top:300,
 zero100:3.4, zero200:10.8, zero300:null,
 quarterMile:11.3, halfMile:19.5, oneMile:32.0,
 image:"https://loremflickr.com/900/550/mercedes,e63"
},

{
 name:"Mercedes-AMG A45 S", year:2019, hp:421, top:270,
 zero100:3.9, zero200:13.0, zero300:null,
 quarterMile:12.0, halfMile:21.0, oneMile:36.0,
 image:"https://loremflickr.com/900/550/mercedes,a45"
},

/* ===================== PAGANI ===================== */

{
 name:"Pagani Zonda", year:1999, hp:547, top:345,
 zero100:3.7, zero200:9.8, zero300:25.0,
 quarterMile:11.0, halfMile:18.0, oneMile:28.0,
 image:"https://loremflickr.com/900/550/pagani,zonda"
},

{
 name:"Pagani Huayra", year:2012, hp:730, top:383,
 zero100:3.0, zero200:8.0, zero300:20.0,
 quarterMile:10.2, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/pagani,huayra"
},

{
 name:"Pagani Utopia", year:2022, hp:864, top:350,
 zero100:2.9, zero200:7.8, zero300:20.0,
 quarterMile:10.2, halfMile:17.0, oneMile:26.0,
 image:"https://loremflickr.com/900/550/pagani,utopia"
},

/* ===================== MASERATI ===================== */

{
 name:"Maserati MC20", year:2020, hp:630, top:325,
 zero100:2.9, zero200:8.8, zero300:25.0,
 quarterMile:10.8, halfMile:18.2, oneMile:29.0,
 image:"https://loremflickr.com/900/550/maserati,mc20"
},

{
 name:"Maserati GranTurismo", year:2023, hp:761, top:325,
 zero100:2.7, zero200:8.0, zero300:24.0,
 quarterMile:10.6, halfMile:18.0, oneMile:29.0,
 image:"https://loremflickr.com/900/550/maserati,granturismo"
},

{
 name:"Maserati MC12", year:2004, hp:630, top:330,
 zero100:3.8, zero200:10.0, zero300:27.0,
 quarterMile:11.0, halfMile:18.8, oneMile:30.0,
 image:"https://loremflickr.com/900/550/maserati,mc12"
},

/* ===================== APOLLO / GUMPERT ===================== */

{
 name:"Gumpert Apollo", year:2005, hp:650, top:360,
 zero100:3.0, zero200:8.9, zero300:25.0,
 quarterMile:10.5, halfMile:17.8, oneMile:27.5,
 image:"https://loremflickr.com/900/550/gumpert,apollo"
},

{
 name:"Apollo Intensa Emozione", year:2017, hp:780, top:335,
 zero100:2.7, zero200:7.8, zero300:21.0,
 quarterMile:10.0, halfMile:16.8, oneMile:26.0,
 image:"https://loremflickr.com/900/550/apollo,ie"
},

{
 name:"Apollo Project EVO", year:2020, hp:1000, top:360,
 zero100:2.5, zero200:6.8, zero300:17.0,
 quarterMile:9.7, halfMile:16.2, oneMile:25.0,
 image:"https://loremflickr.com/900/550/apollo,car"
},

/* ===================== RENAULT ===================== */

{
 name:"Renault Sport Spider", year:1996, hp:150, top:215,
 zero100:6.9, zero200:null, zero300:null,
 quarterMile:15.5, halfMile:27.0, oneMile:49.0,
 image:"https://loremflickr.com/900/550/renault,sport"
},

{
 name:"Renault Clio V6", year:2001, hp:230, top:235,
 zero100:6.4, zero200:18.5, zero300:null,
 quarterMile:14.8, halfMile:26.0, oneMile:45.0,
 image:"https://loremflickr.com/900/550/renault,clio"
},

{
 name:"Renault Mégane R.S.", year:2018, hp:300, top:255,
 zero100:5.7, zero200:17.0, zero300:null,
 quarterMile:13.8, halfMile:23.8, oneMile:40.0,
 image:"https://loremflickr.com/900/550/renault,megane"
},

{
 name:"Renault R.S. 01", year:2015, hp:550, top:300,
 zero100:3.0, zero200:9.0, zero300:null,
 quarterMile:10.8, halfMile:18.0, oneMile:30.0,
 image:"https://loremflickr.com/900/550/renault,rs01"
},

{
 name:"Renault 5 Turbo", year:1980, hp:160, top:200,
 zero100:6.5, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:27.0, oneMile:50.0,
 image:"https://loremflickr.com/900/550/renault,5"
},

/* ===================== PEUGEOT ===================== */

{
 name:"Peugeot 508 PSE", year:2021, hp:360, top:250,
 zero100:5.2, zero200:17.0, zero300:null,
 quarterMile:13.3, halfMile:23.0, oneMile:39.0,
 image:"https://loremflickr.com/900/550/peugeot,508"
},

{
 name:"Peugeot 3008 Hybrid4", year:2021, hp:300, top:235,
 zero100:5.9, zero200:18.0, zero300:null,
 quarterMile:14.0, halfMile:24.5, oneMile:42.0,
 image:"https://loremflickr.com/900/550/peugeot,3008"
},

{
 name:"Peugeot 308 GTi", year:2015, hp:272, top:250,
 zero100:6.0, zero200:17.5, zero300:null,
 quarterMile:14.0, halfMile:24.0, oneMile:41.0,
 image:"https://loremflickr.com/900/550/peugeot,308"
},

{
 name:"Peugeot RCZ", year:2010, hp:200, top:235,
 zero100:7.5, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:26.0, oneMile:46.0,
 image:"https://loremflickr.com/900/550/peugeot,rcz"
},

{
 name:"Peugeot 205 GTi", year:1984, hp:130, top:202,
 zero100:7.8, zero200:null, zero300:null,
 quarterMile:16.0, halfMile:28.0, oneMile:51.0,
 image:"https://loremflickr.com/900/550/peugeot,205"
},

{
 name:"Peugeot 208 GTi", year:2013, hp:200, top:230,
 zero100:6.8, zero200:null, zero300:null,
 quarterMile:14.8, halfMile:25.5, oneMile:44.0,
 image:"https://loremflickr.com/900/550/peugeot,208"
},

{
 name:"Peugeot 206 RC", year:2003, hp:177, top:220,
 zero100:7.4, zero200:null, zero300:null,
 quarterMile:15.2, halfMile:26.5, oneMile:47.0,
 image:"https://loremflickr.com/900/550/peugeot,206"
},

{
 name:"Peugeot 406 Coupé", year:1997, hp:210, top:235,
 zero100:7.8, zero200:null, zero300:null,
 quarterMile:15.5, halfMile:27.0, oneMile:48.0,
 image:"https://loremflickr.com/900/550/peugeot,406"
},

/* ===================== VOLVO / POLESTAR ===================== */

{
 name:"Volvo P1800", year:1961, hp:100, top:175,
 zero100:11.0, zero200:null, zero300:null,
 quarterMile:18.5, halfMile:34.0, oneMile:62.0,
 image:"https://loremflickr.com/900/550/volvo,p1800"
},

{
 name:"Volvo C70 Coupé", year:1997, hp:240, top:240,
 zero100:7.2, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:26.0, oneMile:45.0,
 image:"https://loremflickr.com/900/550/volvo,c70"
},

{
 name:"Volvo C30 Polestar", year:2010, hp:405, top:250,
 zero100:4.6, zero200:14.0, zero300:null,
 quarterMile:12.8, halfMile:22.0, oneMile:37.0,
 image:"https://loremflickr.com/900/550/volvo,c30"
},

{
 name:"Volvo 480 Turbo", year:1987, hp:120, top:200,
 zero100:9.0, zero200:null, zero300:null,
 quarterMile:17.0, halfMile:30.0, oneMile:53.0,
 image:"https://loremflickr.com/900/550/volvo,480"
},

{
 name:"Volvo P1900", year:1956, hp:70, top:165,
 zero100:15.0, zero200:null, zero300:null,
 quarterMile:20.0, halfMile:37.0, oneMile:68.0,
 image:"https://loremflickr.com/900/550/volvo"
},

{
 name:"Polestar 1", year:2019, hp:609, top:250,
 zero100:4.4, zero200:14.0, zero300:null,
 quarterMile:12.8, halfMile:22.0, oneMile:37.0,
 image:"https://loremflickr.com/900/550/polestar,1"
},

/* ===================== NISSAN ===================== */

{
 name:"Nissan GT-R R35", year:2007, hp:570, top:315,
 zero100:2.8, zero200:7.8, zero300:26.0,
 quarterMile:10.8, halfMile:18.0, oneMile:29.0,
 image:"https://loremflickr.com/900/550/nissan,gtr"
},

{
 name:"Nissan Skyline GT-R R34", year:1999, hp:280, top:250,
 zero100:5.2, zero200:15.0, zero300:null,
 quarterMile:13.2, halfMile:22.5, oneMile:39.0,
 image:"https://loremflickr.com/900/550/nissan,r34"
},

{
 name:"Nissan Skyline GT-R R33", year:1995, hp:280, top:250,
 zero100:5.4, zero200:16.0, zero300:null,
 quarterMile:13.5, halfMile:23.0, oneMile:40.0,
 image:"https://loremflickr.com/900/550/nissan,r33"
},

{
 name:"Nissan Skyline GT-R R32", year:1989, hp:280, top:240,
 zero100:5.6, zero200:17.0, zero300:null,
 quarterMile:13.7, halfMile:23.5, oneMile:41.0,
 image:"https://loremflickr.com/900/550/nissan,r32"
},

{
 name:"Nissan 370Z", year:2009, hp:344, top:250,
 zero100:5.0, zero200:16.0, zero300:null,
 quarterMile:13.3, halfMile:22.8, oneMile:39.0,
 image:"https://loremflickr.com/900/550/nissan,370z"
},

{
 name:"Nissan 350Z", year:2002, hp:313, top:250,
 zero100:5.8, zero200:17.0, zero300:null,
 quarterMile:13.8, halfMile:24.0, oneMile:41.0,
 image:"https://loremflickr.com/900/550/nissan,350z"
},

{
 name:"Nissan Z RZ34", year:2022, hp:400, top:250,
 zero100:4.5, zero200:14.0, zero300:null,
 quarterMile:12.5, halfMile:21.5, oneMile:37.0,
 image:"https://loremflickr.com/900/550/nissan,z"
},

{
 name:"Nissan Silvia S15", year:1999, hp:250, top:235,
 zero100:6.0, zero200:18.0, zero300:null,
 quarterMile:14.0, halfMile:24.5, oneMile:43.0,
 image:"https://loremflickr.com/900/550/nissan,silvia"
},

/* ===================== KIA ===================== */

{
 name:"Kia Stinger GT", year:2017, hp:366, top:270,
 zero100:4.9, zero200:14.5, zero300:null,
 quarterMile:13.0, halfMile:22.5, oneMile:38.0,
 image:"https://loremflickr.com/900/550/kia,stinger"
},

{
 name:"Kia EV6 GT", year:2022, hp:585, top:260,
 zero100:3.5, zero200:9.5, zero300:null,
 quarterMile:11.0, halfMile:18.8, oneMile:31.0,
 image:"https://loremflickr.com/900/550/kia,ev6"
},

{
 name:"Kia K5 GT", year:2021, hp:290, top:250,
 zero100:5.8, zero200:17.0, zero300:null,
 quarterMile:13.8, halfMile:24.0, oneMile:41.0,
 image:"https://loremflickr.com/900/550/kia,k5"
},

{
 name:"Kia ProCeed GT", year:2019, hp:204, top:225,
 zero100:7.5, zero200:null, zero300:null,
 quarterMile:15.2, halfMile:26.5, oneMile:46.0,
 image:"https://loremflickr.com/900/550/kia,proceed"
},

/* ===================== OPEL ===================== */

{
 name:"Opel GT", year:1968, hp:105, top:185,
 zero100:10.0, zero200:null, zero300:null,
 quarterMile:18.0, halfMile:33.0, oneMile:60.0,
 image:"https://loremflickr.com/900/550/opel,gt"
},

{
 name:"Opel Manta A", year:1970, hp:105, top:175,
 zero100:11.0, zero200:null, zero300:null,
 quarterMile:18.5, halfMile:34.0, oneMile:62.0,
 image:"https://loremflickr.com/900/550/opel,manta"
},

{
 name:"Opel Calibra", year:1989, hp:204, top:245,
 zero100:7.8, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:26.0, oneMile:45.0,
 image:"https://loremflickr.com/900/550/opel,calibra"
},

{
 name:"Opel Speedster", year:2000, hp:147, top:217,
 zero100:5.9, zero200:null, zero300:null,
 quarterMile:14.8, halfMile:25.5, oneMile:44.0,
 image:"https://loremflickr.com/900/550/opel,speedster"
},

{
 name:"Opel Astra OPC", year:2012, hp:280, top:250,
 zero100:6.0, zero200:16.5, zero300:null,
 quarterMile:13.7, halfMile:23.5, oneMile:40.0,
 image:"https://loremflickr.com/900/550/opel,astra"
},

{
 name:"Opel Corsa OPC", year:2015, hp:207, top:230,
 zero100:6.8, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:26.0, oneMile:45.0,
 image:"https://loremflickr.com/900/550/opel,corsa"
},

{
 name:"Opel Insignia OPC", year:2013, hp:325, top:270,
 zero100:6.0, zero200:17.0, zero300:null,
 quarterMile:13.5, halfMile:23.0, oneMile:39.0,
 image:"https://loremflickr.com/900/550/opel,insignia"
},

/* ===================== SKODA ===================== */

{
 name:"Škoda Octavia RS", year:2020, hp:245, top:250,
 zero100:6.7, zero200:19.0, zero300:null,
 quarterMile:14.5, halfMile:25.0, oneMile:43.0,
 image:"https://loremflickr.com/900/550/skoda,octavia"
},

{
 name:"Škoda Fabia RS", year:2010, hp:180, top:224,
 zero100:7.3, zero200:null, zero300:null,
 quarterMile:15.0, halfMile:26.0, oneMile:45.0,
 image:"https://loremflickr.com/900/550/skoda,fabia"
},

{
 name:"Škoda Enyaq RS iV", year:2022, hp:299, top:180,
 zero100:6.5, zero200:null, zero300:null,
 quarterMile:14.5, halfMile:26.0, oneMile:48.0,
 image:"https://loremflickr.com/900/550/skoda,enyaq"
},

{
 name:"Škoda 110 R", year:1970, hp:52, top:145,
 zero100:18.0, zero200:null, zero300:null,
 quarterMile:22.0, halfMile:42.0, oneMile:78.0,
 image:"https://loremflickr.com/900/550/skoda"
},

{
 name:"Škoda 1100 OHC", year:1958, hp:92, top:190,
 zero100:11.0, zero200:null, zero300:null,
 quarterMile:18.0, halfMile:34.0, oneMile:62.0,
 image:"https://loremflickr.com/900/550/skoda"
},

{
 name:"Škoda Vision Gran Turismo", year:2024, hp:1088, top:350,
 zero100:2.0, zero200:5.5, zero300:13.0,
 quarterMile:9.0, halfMile:15.0, oneMile:23.0,
 image:"https://loremflickr.com/900/550/skoda,concept"
},

/* ===================== VOLKSWAGEN ===================== */

{
 name:"Volkswagen Golf R", year:2020, hp:320, top:250,
 zero100:4.7, zero200:15.5, zero300:null,
 quarterMile:12.8, halfMile:22.0, oneMile:38.0,
 image:"https://loremflickr.com/900/550/volkswagen,golf"
},

{
 name:"Volkswagen Golf GTI Clubsport", year:2020, hp:300, top:250,
 zero100:5.6, zero200:16.5, zero300:null,
 quarterMile:13.5, halfMile:23.0, oneMile:40.0,
 image:"https://loremflickr.com/900/550/volkswagen,gti"
},

{
 name:"Volkswagen Golf GTI TCR", year:2019, hp:290, top:264,
 zero100:5.6, zero200:17.0, zero300:null,
 quarterMile:13.6, halfMile:23.2, oneMile:40.5,
 image:"https://loremflickr.com/900/550/volkswagen,gti"
},

{
 name:"Volkswagen Golf GTI", year:2020, hp:245, top:250,
 zero100:6.2, zero200:18.0, zero300:null,
 quarterMile:14.0, halfMile:24.0, oneMile:42.0,
 image:"https://loremflickr.com/900/550/volkswagen,gti"
},

{
 name:"Volkswagen Tiguan R", year:2020, hp:320, top:250,
 zero100:4.9, zero200:16.0, zero300:null,
 quarterMile:13.5, halfMile:23.0, oneMile:40.0,
 image:"https://loremflickr.com/900/550/volkswagen,tiguan"
},

/* ===================== SEAT ===================== */

{
 name:"SEAT Leon Cupra R", year:2018, hp:310, top:250,
 zero100:5.7, zero200:17.5, zero300:null,
 quarterMile:13.7, halfMile:23.5, oneMile:41.0,
 image:"https://loremflickr.com/900/550/seat,leon"
}

];


/* =========================================================
   ELEMENTEN
   ========================================================= */

const searchInput = document.getElementById("carSearch");
const suggestions = document.getElementById("suggestions");
const car1Select = document.getElementById("car1");
const car2Select = document.getElementById("car2");
const distanceSelect = document.getElementById("distanceSelect");
const unitSelect = document.getElementById("unitSelect");

if (document.getElementById("carCount")) {
    document.getElementById("carCount").textContent = cars.length;
}


/* =========================================================
   100-200 / 200-300 / 100-300
   ========================================================= */

function accelerationStats(car) {

    const a100_200 =
        car.zero200 !== null
            ? car.zero200 - car.zero100
            : null;

    const a200_300 =
        car.zero300 !== null && car.zero200 !== null
            ? car.zero300 - car.zero200
            : null;

    const a100_300 =
        car.zero300 !== null
            ? car.zero300 - car.zero100
            : null;

    return {
        a100_200,
        a200_300,
        a100_300
    };
}


/* =========================================================
   EENHEDEN
   ========================================================= */

function kmhToMph(value) {
    return Math.round(value * 0.621371);
}

function kmToMiles(value) {
    return value * 0.621371;
}

function speedValue(value) {

    if (unitSelect && unitSelect.value === "mph") {
        return kmhToMph(value);
    }

    return Math.round(value);
}

function speedUnit() {

    if (unitSelect && unitSelect.value === "mph") {
        return "MPH";
    }

    return "KM/H";
}


/* =========================================================
   AUTO-KAART
   ========================================================= */

function displayCars(list) {

    const grid =
        document.getElementById("carGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-results">
                Geen auto's gevonden.
            </div>
        `;

        return;
    }

    list.forEach((car, index) => {

        const stats = accelerationStats(car);

        grid.innerHTML += `

        <article class="car-card">

            <div class="car-image">

                <img
                    src="${car.image}"
                    alt="${car.name}"
                    loading="lazy"
                >

                <div class="image-overlay">
                    ${car.top} KM/H
                </div>

            </div>

            <div class="car-info">

                <div class="car-year">
                    ${car.year}
                </div>

                <h3>${car.name}</h3>

                <div class="main-speed">
                    ${car.zero100}s
                    <span>0–100</span>
                </div>

                <div class="spec-grid">

                    <div>
                        <small>POWER</small>
                        <strong>${car.hp} HP</strong>
                    </div>

                    <div>
                        <small>0–200</small>
                        <strong>${car.zero200 ?? "—"}s</strong>
                    </div>

                    <div>
                        <small>0–300</small>
                        <strong>${car.zero300 ?? "—"}</strong>
                    </div>

                    <div>
                        <small>100–200</small>
                        <strong>${stats.a100_200 !== null
                            ? stats.a100_200.toFixed(1) + "s"
                            : "—"}</strong>
                    </div>

                </div>

                <button
                    class="details-btn"
                    onclick="showDetails(${cars.indexOf(car)})">

                    PERFORMANCE

                </button>

            </div>

        </article>

        `;
    });
}


/* =========================================================
   ZOEKEN
   ========================================================= */

function searchCars() {

    if (!searchInput) return;

    const query =
        searchInput.value
            .toLowerCase()
            .trim();

    if (query === "") {

        displayCars(cars);
        showSuggestions([]);
        return;
    }

    const results =
        cars.filter(car =>
            car.name
                .toLowerCase()
                .includes(query)
        );

    displayCars(results);

    showSuggestions(results.slice(0, 8));
}


/* =========================================================
   SUGGESTIES
   ========================================================= */

function showSuggestions(results) {

    if (!suggestions) return;

    suggestions.innerHTML = "";

    if (results.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    results.forEach(car => {

        const item =
            document.createElement("div");

        item.className = "suggestion";

        item.innerHTML = `

            <img
                src="${car.image}"
                alt=""
            >

            <div>
                <strong>${car.name}</strong>
                <small>
                    ${car.year} • ${car.hp} HP •
                    ${car.zero100}s 0–100
                </small>
            </div>

        `;

        item.onclick = () => {

            searchInput.value =
                car.name;

            suggestions.style.display =
                "none";

            displayCars([car]);

        };

        suggestions.appendChild(item);

    });

    suggestions.style.display = "block";
}


if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchCars
    );

}


/* =========================================================
   DETAILS
   ========================================================= */

function showDetails(index) {

    const car = cars[index];

    const stats =
        accelerationStats(car);

    const modal =
        document.getElementById("modal");

    const content =
        document.getElementById("modalContent");

    if (!modal || !content) return;

    content.innerHTML = `

        <img
            class="modal-car-image"
            src="${car.image}"
            alt="${car.name}"
        >

        <div class="modal-title">

            <span>${car.year}</span>

            <h2>${car.name}</h2>

        </div>

        <div class="big-performance">

            <div>
                <strong>${car.zero100}s</strong>
                <small>0–100 KM/H</small>
            </div>

            <div>
                <strong>${car.zero200 ?? "—"}</strong>
                <small>0–200 KM/H</small>
            </div>

            <div>
                <strong>${car.zero300 ?? "—"}</strong>
                <small>0–300 KM/H</small>
            </div>

        </div>

        <div class="performance-list">

            <p>
                <span>100–200</span>
                <strong>
                    ${stats.a100_200 !== null
                        ? stats.a100_200.toFixed(1) + " s"
                        : "—"}
                </strong>
            </p>

            <p>
                <span>200–300</span>
                <strong>
                    ${stats.a200_300 !== null
                        ? stats.a200_300.toFixed(1) + " s"
                        : "—"}
                </strong>
            </p>

            <p>
                <span>100–300</span>
                <strong>
                    ${stats.a100_300 !== null
                        ? stats.a100_300.toFixed(1) + " s"
                        : "—"}
                </strong>
            </p>

            <p>
                <span>Top speed</span>
                <strong>${car.top} KM/H</strong>
            </p>

            <p>
                <span>Power</span>
                <strong>${car.hp} HP</strong>
            </p>

            <p>
                <span>¼ mile</span>
                <strong>${car.quarterMile}s</strong>
            </p>

            <p>
                <span>½ mile</span>
                <strong>${car.halfMile}s</strong>
            </p>

            <p>
                <span>1 mile</span>
                <strong>${car.oneMile}s</strong>
            </p>

        </div>

    `;

    modal.classList.add("show");
}


function closeModal() {

    const modal =
        document.getElementById("modal");

    if (modal) {
        modal.classList.remove("show");
    }

}


window.addEventListener("click", event => {

    const modal =
        document.getElementById("modal");

    if (
        modal &&
        event.target === modal
    ) {
        closeModal();
    }

});


/* =========================================================
   RACE DATABASE
   ========================================================= */

function getRaceTime(car, distance) {

    if (distance === "quarter")
        return car.quarterMile;

    if (distance === "half")
        return car.halfMile;

    return car.oneMile;
}


/* =========================================================
   REALISTISCHE LIVE SPEED
   ========================================================= */

function calculateLiveSpeed(car, progress) {

    /*
       Eerst heel snel accelereren.
       Daarna steeds minder.
       Daardoor voelt de race langer
       niet alsof de auto constant
       dezelfde versnelling heeft.
    */

    const curve =
        1 -
        Math.pow(
            1 - progress,
            2.8
        );

    return Math.min(
        car.top,
        car.top * curve
    );
}


/* =========================================================
   RACE
   ========================================================= */

let raceRunning = false;

function startRace() {

    if (raceRunning) return;

    const car1 =
        cars[Number(car1Select.value)];

    const car2 =
        cars[Number(car2Select.value)];

    const distance =
        distanceSelect.value;

    const time1 =
        getRaceTime(car1, distance);

    const time2 =
        getRaceTime(car2, distance);

    raceRunning = true;

    const carElement1 =
        document.querySelector(".race-car.car1");

    const carElement2 =
        document.querySelector(".race-car.car2");

    const status =
        document.getElementById("raceStatus");

    const winner =
        document.getElementById("raceWinner");

    const lane1 =
        document.getElementById("laneName1");

    const lane2 =
        document.getElementById("laneName2");

    if (lane1)
        lane1.textContent = car1.name;

    if (lane2)
        lane2.textContent = car2.name;

    resetRace();

    let count = 3;

    if (status)
        status.textContent = count;

    if (winner)
        winner.textContent = "GET READY";

    const timer =
        setInterval(() => {

            count--;

            if (count > 0) {

                if (status)
                    status.textContent = count;

            } else {

                clearInterval(timer);

                if (status)
                    status.textContent = "GO!";

                if (winner)
                    winner.textContent =
                        "RACE IN PROGRESS";

                runRace(
                    car1,
                    car2,
                    time1,
                    time2
                );
            }

        }, 800);
}


/* =========================================================
   ANIMATIE
   ========================================================= */

function runRace(
    car1,
    car2,
    time1,
    time2
) {

    const track =
        document.querySelector(".race-track");

    const element1 =
        document.querySelector(".race-car.car1");

    const element2 =
        document.querySelector(".race-car.car2");

    if (!track || !element1 || !element2)
        return;

    const start =
        20;

    const finish =
        track.clientWidth - 80;

    const startTime =
        performance.now();

    function frame(now) {

        const elapsed =
            (now - startTime) / 1000;

        const progress1 =
            Math.min(
                elapsed / time1,
                1
            );

        const progress2 =
            Math.min(
                elapsed / time2,
                1
            );

        element1.style.left =
            (
                start +
                (finish - start) *
                progress1
            ) + "px";

        element2.style.left =
            (
                start +
                (finish - start) *
                progress2
            ) + "px";


        const speed1 =
            calculateLiveSpeed(
                car1,
                progress1
            );

        const speed2 =
            calculateLiveSpeed(
                car2,
                progress2
            );


        const speedElement1 =
            document.getElementById("speed1");

        const speedElement2 =
            document.getElementById("speed2");


        if (speedElement1)
            speedElement1.textContent =
                speedValue(speed1);

        if (speedElement2)
            speedElement2.textContent =
                speedValue(speed2);


        if (elapsed <
            Math.max(time1, time2)) {

            requestAnimationFrame(frame);

        } else {

            finishRace(
                car1,
                car2,
                time1,
                time2
            );

        }

    }

    requestAnimationFrame(frame);
}


/* =========================================================
   FINISH
   ========================================================= */

function finishRace(
    car1,
    car2,
    time1,
    time2
) {

    const winner =
        document.getElementById("raceWinner");

    const status =
        document.getElementById("raceStatus");

    if (time1 < time2) {

        winner.textContent =
            car1.name + " WINS";

    } else if (time2 < time1) {

        winner.textContent =
            car2.name + " WINS";

    } else {

        winner.textContent =
            "PHOTO FINISH";

    }

    status.textContent =
        "FINISHED";

    raceRunning = false;
}


/* =========================================================
   RESET
   ========================================================= */

function resetRace() {

    const car1 =
        document.querySelector(".race-car.car1");

    const car2 =
        document.querySelector(".race-car.car2");

    if (car1)
        car1.style.left = "20px";

    if (car2)
        car2.style.left = "20px";

    [
        "speed1",
        "speed2"
    ].forEach(id => {

        const el =
            document.getElementById(id);

        if (el)
            el.textContent = "0";

    });

}


/* =========================================================
   SELECTS
   ========================================================= */

function setupSelects() {

    if (!car1Select || !car2Select)
        return;

    car1Select.innerHTML = "";
    car2Select.innerHTML = "";

    cars.forEach((car, index) => {

        const option1 =
            document.createElement("option");

        option1.value = index;
        option1.textContent =
            `${car.name} (${car.year})`;

        const option2 =
            option1.cloneNode(true);

        car1Select.appendChild(option1);
        car2Select.appendChild(option2);

    });

    car1Select.value = "0";
    car2Select.value = "1";
}


/* =========================================================
   SNELSTE AUTO'S
   ========================================================= */

function createFastestCars() {

    const container =
        document.getElementById(
            "fastestCars"
        );

    if (!container) return;

    const fastest =
        [...cars]
            .sort(
                (a,b) =>
                    a.zero100 - b.zero100
            )
            .slice(0,10);

    container.innerHTML = "";

    fastest.forEach((car,index) => {

        container.innerHTML += `

            <div class="fastest-card">

                <span>
                    #${index + 1}
                </span>

                <img
                    src="${car.image}"
                    alt="${car.name}"
                >

                <h3>
                    ${car.name}
                </h3>

                <strong>
                    ${car.zero100}s
                </strong>

                <small>
                    0–100 KM/H
                </small>

            </div>

        `;

    });
}


/* =========================================================
   START
   ========================================================= */

setupSelects();

displayCars(cars);

createFastestCars();
