/*
===========================================================
CARZONE - PERFORMANCE DATABASE + RACE ENGINE
===========================================================
*/

const cars = [

/* =========================
   LAMBORGHINI
========================= */

{
    name:"Lamborghini Revuelto",
    year:2023,
    hp:1001,
    top:350,
    zero100:2.5,
    zero200:7.0,
    zero300:20.0,
    quarterMile:10.5,
    halfMile:18.5,
    oneMile:29.5
},

{
    name:"Lamborghini Aventador SVJ Roadster",
    year:2019,
    hp:770,
    top:350,
    zero100:2.9,
    zero200:8.8,
    zero300:25.5,
    quarterMile:10.7,
    halfMile:18.3,
    oneMile:29.8
},

{
    name:"Lamborghini Aventador",
    year:2011,
    hp:700,
    top:350,
    zero100:2.9,
    zero200:9.0,
    zero300:27.0,
    quarterMile:11.0,
    halfMile:18.8,
    oneMile:31.0
},

{
    name:"Lamborghini Huracán EVO",
    year:2019,
    hp:640,
    top:325,
    zero100:2.9,
    zero200:9.0,
    zero300:27.0,
    quarterMile:10.8,
    halfMile:18.5,
    oneMile:30.5
},

/* =========================
   FERRARI
========================= */

{
    name:"Ferrari SF90",
    year:2019,
    hp:1000,
    top:340,
    zero100:2.5,
    zero200:6.7,
    zero300:16.5,
    quarterMile:10.0,
    halfMile:17.5,
    oneMile:28.5
},

{
    name:"Ferrari LaFerrari",
    year:2013,
    hp:963,
    top:350,
    zero100:2.6,
    zero200:6.9,
    zero300:15.0,
    quarterMile:9.7,
    halfMile:16.8,
    oneMile:27.0
},

/* =========================
   TESLA
========================= */

{
    name:"Tesla Model S Plaid",
    year:2021,
    hp:1020,
    top:322,
    zero100:2.1,
    zero200:6.0,
    zero300:18.0,
    quarterMile:9.2,
    halfMile:16.5,
    oneMile:27.5
},

/* =========================
   PORSCHE
========================= */

{
    name:"Porsche 911 Turbo S",
    year:2020,
    hp:650,
    top:330,
    zero100:2.7,
    zero200:8.9,
    zero300:25.0,
    quarterMile:10.2,
    halfMile:18.0,
    oneMile:29.5
},

{
    name:"Porsche 911 GT3 RS",
    year:2022,
    hp:525,
    top:296,
    zero100:3.2,
    zero200:10.6,
    zero300:null,
    quarterMile:11.0,
    halfMile:19.0,
    oneMile:31.5
},

{
    name:"Porsche 911 GT3",
    year:2021,
    hp:510,
    top:318,
    zero100:3.4,
    zero200:10.5,
    zero300:null,
    quarterMile:11.0,
    halfMile:19.0,
    oneMile:31.0
},

{
    name:"Porsche 911 Targa 4 GTS",
    year:2022,
    hp:480,
    top:307,
    zero100:3.5,
    zero200:11.5,
    zero300:null,
    quarterMile:11.6,
    halfMile:20.0,
    oneMile:33.0
},

{
    name:"Porsche 911 Carrera S",
    year:2020,
    hp:450,
    top:308,
    zero100:3.7,
    zero200:12.0,
    zero300:null,
    quarterMile:11.9,
    halfMile:20.5,
    oneMile:34.0
},

{
    name:"Porsche 911 Carrera 4 GTS",
    year:2022,
    hp:480,
    top:307,
    zero100:3.4,
    zero200:11.3,
    zero300:null,
    quarterMile:11.5,
    halfMile:19.8,
    oneMile:32.8
},

{
    name:"Porsche 911 GT3 Touring",
    year:2022,
    hp:510,
    top:320,
    zero100:3.4,
    zero200:10.5,
    zero300:null,
    quarterMile:11.0,
    halfMile:19.0,
    oneMile:31.0
},

{
    name:"Porsche 718 Spyder RS",
    year:2023,
    hp:500,
    top:308,
    zero100:3.4,
    zero200:10.8,
    zero300:null,
    quarterMile:11.4,
    halfMile:19.8,
    oneMile:32.5
},

/* =========================
   MERCEDES-AMG
========================= */

{
    name:"Mercedes-AMG GT 63",
    year:2024,
    hp:816,
    top:320,
    zero100:2.8,
    zero200:8.0,
    zero300:22.0,
    quarterMile:10.5,
    halfMile:18.5,
    oneMile:30.0
},

{
    name:"Mercedes-AMG GT Black Series",
    year:2020,
    hp:730,
    top:325,
    zero100:3.2,
    zero200:9.0,
    zero300:25.0,
    quarterMile:10.4,
    halfMile:18.0,
    oneMile:29.0
},

{
    name:"Mercedes-AMG C63 S",
    year:2023,
    hp:680,
    top:280,
    zero100:3.4,
    zero200:10.0,
    zero300:null,
    quarterMile:11.1,
    halfMile:19.0,
    oneMile:31.5
},

{
    name:"Mercedes-AMG E63 S",
    year:2020,
    hp:612,
    top:300,
    zero100:3.4,
    zero200:10.8,
    zero300:null,
    quarterMile:11.3,
    halfMile:19.5,
    oneMile:32.0
},

{
    name:"Mercedes-AMG A45 S",
    year:2019,
    hp:421,
    top:270,
    zero100:3.9,
    zero200:13.0,
    zero300:null,
    quarterMile:12.0,
    halfMile:21.0,
    oneMile:36.0
},

/* =========================
   AUDI
========================= */

{
    name:"Audi R8 GT",
    year:2022,
    hp:620,
    top:320,
    zero100:3.4,
    zero200:10.5,
    zero300:29.0,
    quarterMile:11.0,
    halfMile:19.0,
    oneMile:31.0
},

{
    name:"Audi RS7 Sportback",
    year:2020,
    hp:600,
    top:305,
    zero100:3.4,
    zero200:11.0,
    zero300:null,
    quarterMile:11.3,
    halfMile:19.7,
    oneMile:32.5
},

{
    name:"Audi RS6 Avant",
    year:2020,
    hp:600,
    top:305,
    zero100:3.6,
    zero200:11.0,
    zero300:null,
    quarterMile:11.4,
    halfMile:19.8,
    oneMile:32.0
},

{
    name:"Audi RS Q8",
    year:2019,
    hp:600,
    top:305,
    zero100:3.8,
    zero200:12.0,
    zero300:null,
    quarterMile:11.8,
    halfMile:20.3,
    oneMile:33.5
},

{
    name:"Audi RS Q3",
    year:2022,
    hp:400,
    top:280,
    zero100:4.5,
    zero200:15.0,
    zero300:null,
    quarterMile:12.8,
    halfMile:22.0,
    oneMile:37.0
},

{
    name:"Audi RS4 Avant",
    year:2020,
    hp:450,
    top:280,
    zero100:4.1,
    zero200:14.0,
    zero300:null,
    quarterMile:12.5,
    halfMile:21.5,
    oneMile:36.0
},

{
    name:"Audi RS3 Sportback",
    year:2022,
    hp:400,
    top:290,
    zero100:3.8,
    zero200:12.5,
    zero300:null,
    quarterMile:11.9,
    halfMile:20.5,
    oneMile:35.0
},

/* =========================
   BMW
========================= */

{
    name:"BMW M5",
    year:2020,
    hp:625,
    top:305,
    zero100:3.3,
    zero200:10.5,
    zero300:null,
    quarterMile:11.2,
    halfMile:19.5,
    oneMile:32.0
},

{
    name:"BMW M3 Competition",
    year:2021,
    hp:510,
    top:290,
    zero100:3.9,
    zero200:11.5,
    zero300:null,
    quarterMile:11.8,
    halfMile:20.0,
    oneMile:33.0
},

{
    name:"BMW M3 Touring",
    year:2022,
    hp:510,
    top:280,
    zero100:3.6,
    zero200:11.0,
    zero300:null,
    quarterMile:11.6,
    halfMile:19.8,
    oneMile:33.0
},

{
    name:"BMW M4 Competition",
    year:2021,
    hp:510,
    top:290,
    zero100:3.9,
    zero200:11.5,
    zero300:null,
    quarterMile:11.7,
    halfMile:19.8,
    oneMile:33.0
},

{
    name:"BMW M2",
    year:2023,
    hp:460,
    top:285,
    zero100:4.1,
    zero200:12.5,
    zero300:null,
    quarterMile:12.1,
    halfMile:20.8,
    oneMile:35.0
},

{
    name:"BMW X5 M Competition",
    year:2020,
    hp:625,
    top:290,
    zero100:3.8,
    zero200:12.5,
    zero300:null,
    quarterMile:11.9,
    halfMile:20.5,
    oneMile:34.5
},

{
    name:"BMW X6 M Competition",
    year:2020,
    hp:625,
    top:290,
    zero100:3.8,
    zero200:12.5,
    zero300:null,
    quarterMile:11.9,
    halfMile:20.5,
    oneMile:34.5
},

{
    name:"BMW XM",
    year:2023,
    hp:653,
    top:270,
    zero100:4.3,
    zero200:13.5,
    zero300:null,
    quarterMile:12.3,
    halfMile:21.5,
    oneMile:36.0
},

{
    name:"BMW M340i xDrive",
    year:2020,
    hp:374,
    top:250,
    zero100:4.4,
    zero200:15.0,
    zero300:null,
    quarterMile:12.8,
    halfMile:22.0,
    oneMile:37.5
},

{
    name:"BMW M8 Competition",
    year:2020,
    hp:625,
    top:305,
    zero100:3.2,
    zero200:10.5,
    zero300:null,
    quarterMile:11.0,
    halfMile:19.0,
    oneMile:31.5
},

/* =========================
   VOLKSWAGEN
========================= */

{
    name:"Volkswagen Golf R",
    year:2020,
    hp:320,
    top:250,
    zero100:4.7,
    zero200:15.5,
    zero300:null,
    quarterMile:12.8,
    halfMile:22.0,
    oneMile:38.0
},

{
    name:"Volkswagen Golf GTI Clubsport",
    year:2020,
    hp:300,
    top:250,
    zero100:5.6,
    zero200:16.5,
    zero300:null,
    quarterMile:13.5,
    halfMile:23.0,
    oneMile:40.0
},

{
    name:"Volkswagen Golf GTI TCR",
    year:2019,
    hp:290,
    top:264,
    zero100:5.6,
    zero200:17.0,
    zero300:null,
    quarterMile:13.6,
    halfMile:23.2,
    oneMile:40.5
},

{
    name:"Volkswagen Golf GTI",
    year:2020,
    hp:245,
    top:250,
    zero100:6.2,
    zero200:18.0,
    zero300:null,
    quarterMile:14.0,
    halfMile:24.0,
    oneMile:42.0
},

{
    name:"Volkswagen Tiguan R",
    year:2020,
    hp:320,
    top:250,
    zero100:4.9,
    zero200:16.0,
    zero300:null,
    quarterMile:13.5,
    halfMile:23.0,
    oneMile:40.0
},

/* =========================
   SEAT
========================= */

{
    name:"SEAT Leon Cupra R",
    year:2018,
    hp:310,
    top:250,
    zero100:5.7,
    zero200:17.5,
    zero300:null,
    quarterMile:13.7,
    halfMile:23.5,
    oneMile:41.0
},

/* =========================
   PEUGEOT
========================= */

{
    name:"Peugeot 508 SW Hybrid 225",
    year:2024,
    hp:225,
    top:240,
    zero100:8.1,
    zero200:28.0,
    zero300:null,
    quarterMile:16.0,
    halfMile:28.0,
    oneMile:48.0
},

{
    name:"Peugeot 508 PSE",
    year:2021,
    hp:360,
    top:250,
    zero100:5.2,
    zero200:18.0,
    zero300:null,
    quarterMile:13.7,
    halfMile:23.5,
    oneMile:40.0
},

{
    name:"Peugeot 3008 Hybrid4",
    year:2021,
    hp:300,
    top:235,
    zero100:5.9,
    zero200:20.0,
    zero300:null,
    quarterMile:14.5,
    halfMile:25.0,
    oneMile:42.0
},

{
    name:"Peugeot 308 GT Hybrid",
    year:2022,
    hp:225,
    top:235,
    zero100:7.5,
    zero200:25.0,
    zero300:null,
    quarterMile:15.5,
    halfMile:27.0,
    oneMile:46.0
}

];


/* =========================================================
   ELEMENTEN
========================================================= */

const distanceSelect = document.getElementById("distanceSelect");
const unitSelect = document.getElementById("unitSelect");
const car1Select = document.getElementById("car1Select");
const car2Select = document.getElementById("car2Select");
const raceButton = document.getElementById("raceButton");

const countdown = document.getElementById("countdown");
const winnerText = document.getElementById("winnerText");

const raceCar1 = document.getElementById("raceCar1");
const raceCar2 = document.getElementById("raceCar2");

const speed1 = document.getElementById("speed1");
const speed2 = document.getElementById("speed2");

const distance1 = document.getElementById("distance1");
const distance2 = document.getElementById("distance2");

const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");


/* =========================================================
   AFSTAND
========================================================= */

function getDistance(car, type) {

    if (type === "quarter") {
        return 0.402;
    }

    if (type === "half") {
        return 0.805;
    }

    if (type === "mile") {
        return 1.609;
    }

    return 0.402;
}


function getRaceTime(car, type) {

    if (type === "quarter") {
        return car.quarterMile;
    }

    if (type === "half") {
        return car.halfMile;
    }

    if (type === "mile") {
        return car.oneMile;
    }

    return car.quarterMile;
}


/* =========================================================
   EENHEDEN
========================================================= */

function speedValue(kmh) {

    if (unitSelect.value === "mph") {
        return kmh * 0.621371;
    }

    return kmh;
}


function distanceValue(km) {

    if (unitSelect.value === "mph") {
        return km * 0.621371;
    }

    return km;
}


function speedUnit() {

    return unitSelect.value === "mph"
        ? "MPH"
        : "KM/H";
}


function distanceUnit() {

    return unitSelect.value === "mph"
        ? "MI"
        : "KM";
}


/* =========================================================
   SELECTS VULLEN
========================================================= */

function populateCarSelects() {

    car1Select.innerHTML = "";
    car2Select.innerHTML = "";

    cars.forEach((car, index) => {

        const option1 = document.createElement("option");

        option1.value = index;
        option1.textContent =
            `${car.name} (${car.hp} HP)`;

        car1Select.appendChild(option1);


        const option2 = document.createElement("option");

        option2.value = index;
        option2.textContent =
            `${car.name} (${car.hp} HP)`;

        car2Select.appendChild(option2);
    });


    if (cars.length > 1) {
        car1Select.value = "0";
        car2Select.value = "1";
    }
}


/* =========================================================
   REALISTISCHE ACCELERATIECURVE
========================================================= */

/*
    BELANGRIJK:

    De acceleratie wordt gebaseerd op VERSTREKEN TIJD.

    Dus:

    0-100 blijft hetzelfde
    0-200 blijft hetzelfde
    0-300 blijft hetzelfde
    topsnelheid blijft hetzelfde

    Of je nu 1/4 mile, 1/2 mile of 1 mile rijdt.

    De raceafstand verandert dus NIET de acceleratie.
*/

function smoothStep(x) {

    x = Math.max(0, Math.min(1, x));

    return x * x * (3 - 2 * x);
}


function calculateLiveSpeed(car, elapsed) {

    if (elapsed <= 0) {
        return 0;
    }


    /* 0 -> 100 */

    if (elapsed <= car.zero100) {

        const progress =
            elapsed / car.zero100;

        const smooth =
            1 - Math.pow(1 - progress, 1.35);

        return Math.min(
            100,
            100 * smooth
        );
    }


    /* 100 -> 200 */

    if (elapsed <= car.zero200) {

        const progress =
            (elapsed - car.zero100) /
            (car.zero200 - car.zero100);

        return 100 +
            100 * smoothStep(progress);
    }


    /* 200 -> 300 */

    if (
        car.zero300 !== null &&
        elapsed <= car.zero300
    ) {

        const progress =
            (elapsed - car.zero200) /
            (car.zero300 - car.zero200);

        return 200 +
            100 * smoothStep(progress);
    }


    /* Auto haalt geen 300 */

    if (car.zero300 === null) {

        const timeAfter200 = 8;

        const progress =
            Math.min(
                (elapsed - car.zero200) /
                timeAfter200,
                1
            );

        return Math.min(
            car.top,
            200 +
            (car.top - 200) *
            smoothStep(progress)
        );
    }


    /* 300 -> topsnelheid */

    const timeAfter300 = 8;

    const progress =
        Math.min(
            (elapsed - car.zero300) /
            timeAfter300,
            1
        );

    return Math.min(
        car.top,
        300 +
        (car.top - 300) *
        smoothStep(progress)
    );
}


/* =========================================================
   RACE STARTEN
========================================================= */

let raceRunning = false;
let animationFrame = null;


function startRace() {

    if (raceRunning) {
        return;
    }


    const car1 =
        cars[Number(car1Select.value)];

    const car2 =
        cars[Number(car2Select.value)];


    if (!car1 || !car2) {
        return;
    }


    const raceType =
        distanceSelect.value;


    const time1 =
        getRaceTime(car1, raceType);

    const time2 =
        getRaceTime(car2, raceType);


    resetRace();


    raceRunning = true;


    let count = 3;

    countdown.textContent = count;


    const countdownTimer =
        setInterval(() => {

            count--;

            if (count > 0) {

                countdown.textContent =
                    count;

            } else {

                clearInterval(countdownTimer);

                countdown.textContent =
                    "GO!";

                setTimeout(() => {

                    countdown.textContent =
                        "";

                    runRace(
                        car1,
                        car2,
                        time1,
                        time2
                    );

                }, 500);
            }

        }, 1000);
}


/* =========================================================
   RACE ENGINE
========================================================= */

function runRace(
    car1,
    car2,
    time1,
    time2
) {

    const startTime =
        performance.now();


    const raceDistance =
        getDistance(
            car1,
            distanceSelect.value
        );


    function animate(now) {

        const elapsed =
            (now - startTime) / 1000;


        /*
            POSITIE

            De positie is gebaseerd op de
            daadwerkelijke racetijd.

            Hierdoor finishen de auto's
            op hun ingestelde tijd.
        */

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


        /* =====================
           AUTO POSITIES
        ===================== */

        if (raceCar1) {

            raceCar1.style.left =
                `${progress1 * 88}%`;
        }


        if (raceCar2) {

            raceCar2.style.left =
                `${progress2 * 88}%`;
        }


        /* =====================
           LIVE SPEED
        ===================== */

        const liveSpeed1 =
            calculateLiveSpeed(
                car1,
                elapsed
            );


        const liveSpeed2 =
            calculateLiveSpeed(
                car2,
                elapsed
            );


        if (speed1) {

            speed1.textContent =
                `${speedValue(liveSpeed1).toFixed(0)} ${speedUnit()}`;
        }


        if (speed2) {

            speed2.textContent =
                `${speedValue(liveSpeed2).toFixed(0)} ${speedUnit()}`;
        }


        /* =====================
           LIVE DISTANCE
        ===================== */

        const currentDistance1 =
            raceDistance * progress1;

        const currentDistance2 =
            raceDistance * progress2;


        if (distance1) {

            distance1.textContent =
                `${distanceValue(currentDistance1).toFixed(2)} ${distanceUnit()}`;
        }


        if (distance2) {

            distance2.textContent =
                `${distanceValue(currentDistance2).toFixed(2)} ${distanceUnit()}`;
        }


        /* =====================
           RESULTAAT
        ===================== */

        if (result1) {

            result1.textContent =
                progress1 >= 1
                    ? `${time1.toFixed(2)} s`
                    : "RACING...";
        }


        if (result2) {

            result2.textContent =
                progress2 >= 1
                    ? `${time2.toFixed(2)} s`
                    : "RACING...";
        }


        /* =====================
           RACE AFGELOPEN
        ===================== */

        if (
            progress1 >= 1 &&
            progress2 >= 1
        ) {

            finishRace(
                car1,
                car2,
                time1,
                time2
            );

            return;
        }


        animationFrame =
            requestAnimationFrame(
                animate
            );
    }


    animationFrame =
        requestAnimationFrame(
            animate
        );
}


/* =========================================================
   WINNAAR
========================================================= */

function finishRace(
    car1,
    car2,
    time1,
    time2
) {

    raceRunning = false;


    if (time1 < time2) {

        winnerText.textContent =
            `🏆 ${car1.name} WINS!`;

    } else if (time2 < time1) {

        winnerText.textContent =
            `🏆 ${car2.name} WINS!`;

    } else {

        winnerText.textContent =
            "🤝 IT'S A TIE!";
    }


    if (result1) {

        result1.innerHTML =
            `<strong>${time1.toFixed(2)} s</strong><br>
             Top speed: ${car1.top} KM/H`;
    }


    if (result2) {

        result2.innerHTML =
            `<strong>${time2.toFixed(2)} s</strong><br>
             Top speed: ${car2.top} KM/H`;
    }
}


/* =========================================================
   RESET
========================================================= */

function resetRace() {

    if (animationFrame) {

        cancelAnimationFrame(
            animationFrame
        );

        animationFrame = null;
    }


    raceRunning = false;


    if (raceCar1) {

        raceCar1.style.left =
            "0%";
    }


    if (raceCar2) {

        raceCar2.style.left =
            "0%";
    }


    if (speed1) {

        speed1.textContent =
            `0 ${speedUnit()}`;
    }


    if (speed2) {

        speed2.textContent =
            `0 ${speedUnit()}`;
    }


    if (distance1) {

        distance1.textContent =
            `0.00 ${distanceUnit()}`;
    }


    if (distance2) {

        distance2.textContent =
            `0.00 ${distanceUnit()}`;
    }


    if (result1) {

        result1.textContent =
            "READY";
    }


    if (result2) {

        result2.textContent =
            "READY";
    }


    if (winnerText) {

        winnerText.textContent =
            "";
    }


    if (countdown) {

        countdown.textContent =
            "";
    }
}


/* =========================================================
   SNELSTE AUTO'S
========================================================= */

function createFastestCars() {

    const container =
        document.getElementById(
            "fastestCars"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    const fastest =
        [...cars]
            .sort(
                (a, b) =>
                    a.zero100 - b.zero100
            )
            .slice(0, 8);


    fastest.forEach((car, index) => {

        const card =
            document.createElement("div");

        card.className =
            "fastest-card";


        card.innerHTML = `
            <div class="rank">#${index + 1}</div>

            <h3>${car.name}</h3>

            <p>${car.year}</p>

            <div class="fastest-stats">

                <span>
                    <strong>${car.zero100}s</strong>
                    0-100
                </span>

                <span>
                    <strong>${car.hp}</strong>
                    HP
                </span>

                <span>
                    <strong>${car.top}</strong>
                    KM/H
                </span>

            </div>
        `;


        container.appendChild(card);
    });
}


/* =========================================================
   AUTO SELECTIE VERANDEREN
========================================================= */

function updateSelectedCars() {

    const car1 =
        cars[Number(car1Select.value)];

    const car2 =
        cars[Number(car2Select.value)];


    if (!car1 || !car2) {
        return;
    }


    resetRace();
}


/* =========================================================
   UNIT VERANDEREN
========================================================= */

function updateUnits() {

    resetRace();
}


/* =========================================================
   EVENT LISTENERS
========================================================= */

if (raceButton) {

    raceButton.addEventListener(
        "click",
        startRace
    );
}


if (car1Select) {

    car1Select.addEventListener(
        "change",
        updateSelectedCars
    );
}


if (car2Select) {

    car2Select.addEventListener(
        "change",
        updateSelectedCars
    );
}


if (unitSelect) {

    unitSelect.addEventListener(
        "change",
        updateUnits
    );
}


/* =========================================================
   START
========================================================= */

populateCarSelects();
createFastestCars();
resetRace();
