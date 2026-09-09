/* =========================================================
   CARZONE PERFORMANCE DATABASE
   ========================================================= */

const cars = [

    {
        name: "Lamborghini Revuelto",
        year: 2023,
        hp: 1001,
        top: 350,

        zero100: 2.5,
        zero200: 7.0,
        zero300: 20.0,

        quarterMile: 10.5,
        halfMile: 18.5,
        oneMile: 29.5
    },

    {
        name: "Ferrari SF90",
        year: 2019,
        hp: 1000,
        top: 340,

        zero100: 2.5,
        zero200: 6.7,
        zero300: 16.5,

        quarterMile: 10.0,
        halfMile: 17.5,
        oneMile: 28.5
    },

    {
        name: "Tesla Model S Plaid",
        year: 2021,
        hp: 1020,
        top: 322,

        zero100: 2.1,
        zero200: 6.0,
        zero300: 18.0,

        quarterMile: 9.2,
        halfMile: 16.5,
        oneMile: 27.5
    },

    {
        name: "Mercedes-AMG GT 63",
        year: 2024,
        hp: 816,
        top: 320,

        zero100: 2.8,
        zero200: 8.0,
        zero300: 22.0,

        quarterMile: 10.5,
        halfMile: 18.5,
        oneMile: 30.0
    },

    {
        name: "Porsche 911 Turbo S",
        year: 2020,
        hp: 650,
        top: 330,

        zero100: 2.7,
        zero200: 8.9,
        zero300: 25.0,

        quarterMile: 10.2,
        halfMile: 18.0,
        oneMile: 29.5
    },

    {
        name: "Porsche 911 GT3 RS",
        year: 2022,
        hp: 525,
        top: 296,

        zero100: 3.2,
        zero200: 10.6,
        zero300: null,

        quarterMile: 11.0,
        halfMile: 19.0,
        oneMile: 31.5
    },

    {
        name: "Audi R8 GT",
        year: 2022,
        hp: 620,
        top: 320,

        zero100: 3.4,
        zero200: 10.5,
        zero300: 29.0,

        quarterMile: 11.0,
        halfMile: 19.0,
        oneMile: 31.0
    },

    {
        name: "BMW M5",
        year: 2020,
        hp: 625,
        top: 305,

        zero100: 3.3,
        zero200: 10.5,
        zero300: null,

        quarterMile: 11.2,
        halfMile: 19.5,
        oneMile: 32.0
    },

    {
        name: "Audi RS7 Sportback",
        year: 2020,
        hp: 600,
        top: 305,

        zero100: 3.4,
        zero200: 11.0,
        zero300: null,

        quarterMile: 11.3,
        halfMile: 19.7,
        oneMile: 32.5
    },

    {
        name: "Mercedes-AMG GT Black Series",
        year: 2020,
        hp: 730,
        top: 325,

        zero100: 3.2,
        zero200: 9.0,
        zero300: 25.0,

        quarterMile: 10.4,
        halfMile: 18.0,
        oneMile: 29.0
    },

    {
        name: "Lamborghini Aventador SVJ Roadster",
        year: 2019,
        hp: 770,
        top: 350,

        zero100: 2.9,
        zero200: 8.8,
        zero300: 25.5,

        quarterMile: 10.7,
        halfMile: 18.3,
        oneMile: 29.8
    },

    {
        name: "Lamborghini Aventador",
        year: 2011,
        hp: 700,
        top: 350,

        zero100: 2.9,
        zero200: 9.0,
        zero300: 27.0,

        quarterMile: 11.0,
        halfMile: 18.8,
        oneMile: 31.0
    },

    {
        name: "Lamborghini Huracán EVO",
        year: 2019,
        hp: 640,
        top: 325,

        zero100: 2.9,
        zero200: 9.0,
        zero300: 27.0,

        quarterMile: 10.8,
        halfMile: 18.5,
        oneMile: 30.5
    },

    {
        name: "Ferrari LaFerrari",
        year: 2013,
        hp: 963,
        top: 350,

        zero100: 2.6,
        zero200: 6.9,
        zero300: 15.0,

        quarterMile: 9.7,
        halfMile: 16.8,
        oneMile: 27.0
    },

    {
        name: "Porsche 718 Spyder RS",
        year: 2023,
        hp: 500,
        top: 308,

        zero100: 3.4,
        zero200: 10.8,
        zero300: null,

        quarterMile: 11.4,
        halfMile: 19.8,
        oneMile: 32.5
    },

    {
        name: "Porsche 911 GT3",
        year: 2021,
        hp: 510,
        top: 318,

        zero100: 3.4,
        zero200: 10.5,
        zero300: null,

        quarterMile: 11.0,
        halfMile: 19.0,
        oneMile: 31.0
    },

    {
        name: "BMW M3 Competition",
        year: 2021,
        hp: 510,
        top: 290,

        zero100: 3.9,
        zero200: 11.5,
        zero300: null,

        quarterMile: 11.8,
        halfMile: 20.0,
        oneMile: 33.0
    },

    {
        name: "BMW M3 Touring",
        year: 2022,
        hp: 510,
        top: 280,

        zero100: 3.6,
        zero200: 11.0,
        zero300: null,

        quarterMile: 11.6,
        halfMile: 19.8,
        oneMile: 33.0
    },

    {
        name: "BMW M2",
        year: 2023,
        hp: 460,
        top: 285,

        zero100: 4.1,
        zero200: 12.5,
        zero300: null,

        quarterMile: 12.1,
        halfMile: 20.8,
        oneMile: 35.0
    },

    {
        name: "Audi RS6 Avant",
        year: 2020,
        hp: 600,
        top: 305,

        zero100: 3.6,
        zero200: 11.0,
        zero300: null,

        quarterMile: 11.4,
        halfMile: 19.8,
        oneMile: 32.0
    },

    {
        name: "Audi RS Q8",
        year: 2019,
        hp: 600,
        top: 305,

        zero100: 3.8,
        zero200: 12.0,
        zero300: null,

        quarterMile: 11.8,
        halfMile: 20.3,
        oneMile: 33.5
    },

    {
        name: "Mercedes-AMG C63 S",
        year: 2023,
        hp: 680,
        top: 280,

        zero100: 3.4,
        zero200: 10.0,
        zero300: null,

        quarterMile: 11.1,
        halfMile: 19.0,
        oneMile: 31.5
    },

    {
        name: "Mercedes-AMG E63 S",
        year: 2020,
        hp: 612,
        top: 300,

        zero100: 3.4,
        zero200: 10.8,
        zero300: null,

        quarterMile: 11.3,
        halfMile: 19.5,
        oneMile: 32.0
    },

    {
        name: "Mercedes-AMG A45 S",
        year: 2019,
        hp: 421,
        top: 270,

        zero100: 3.9,
        zero200: 13.0,
        zero300: null,

        quarterMile: 12.0,
        halfMile: 21.0,
        oneMile: 36.0
    },

    {
        name: "Audi RS3 Sportback",
        year: 2022,
        hp: 400,
        top: 290,

        zero100: 3.8,
        zero200: 12.5,
        zero300: null,

        quarterMile: 11.9,
        halfMile: 20.5,
        oneMile: 35.0
    },

    {
        name: "BMW M4 Competition",
        year: 2021,
        hp: 510,
        top: 290,

        zero100: 3.9,
        zero200: 11.5,
        zero300: null,

        quarterMile: 11.7,
        halfMile: 19.8,
        oneMile: 33.0
    },

    {
        name: "Volkswagen Golf R",
        year: 2020,
        hp: 320,
        top: 250,

        zero100: 4.7,
        zero200: 15.5,
        zero300: null,

        quarterMile: 12.8,
        halfMile: 22.0,
        oneMile: 38.0
    },

    {
        name: "Volkswagen Golf GTI Clubsport",
        year: 2020,
        hp: 300,
        top: 250,

        zero100: 5.6,
        zero200: 16.5,
        zero300: null,

        quarterMile: 13.5,
        halfMile: 23.0,
        oneMile: 40.0
    },

    {
        name: "Volkswagen Golf GTI TCR",
        year: 2019,
        hp: 290,
        top: 264,

        zero100: 5.6,
        zero200: 17.0,
        zero300: null,

        quarterMile: 13.6,
        halfMile: 23.2,
        oneMile: 40.5
    },

    {
        name: "Volkswagen Golf GTI",
        year: 2020,
        hp: 245,
        top: 250,

        zero100: 6.2,
        zero200: 18.0,
        zero300: null,

        quarterMile: 14.0,
        halfMile: 24.0,
        oneMile: 42.0
    },

    {
        name: "SEAT Leon Cupra R",
        year: 2018,
        hp: 310,
        top: 250,

        zero100: 5.7,
        zero200: 17.5,
        zero300: null,

        quarterMile: 13.7,
        halfMile: 23.5,
        oneMile: 41.0
    },

    {
        name: "Volkswagen Tiguan R",
        year: 2020,
        hp: 320,
        top: 250,

        zero100: 4.9,
        zero200: 16.0,
        zero300: null,

        quarterMile: 13.5,
        halfMile: 23.0,
        oneMile: 40.0
    }

];


/* =========================================================
   ELEMENTEN
   ========================================================= */

const car1Select = document.getElementById("car1");
const car2Select = document.getElementById("car2");

const distanceSelect =
    document.getElementById("distanceSelect");

const unitSelect =
    document.getElementById("unitSelect");

const carCount =
    document.getElementById("carCount");


/* =========================================================
   DATABASE IN SELECTS ZETTEN
   ========================================================= */

carCount.textContent = cars.length;

cars.forEach((car, index) => {

    const option1 =
        document.createElement("option");

    option1.value = index;

    option1.textContent =
        `${car.name} (${car.year})`;

    const option2 =
        document.createElement("option");

    option2.value = index;

    option2.textContent =
        `${car.name} (${car.year})`;

    car1Select.appendChild(option1);

    car2Select.appendChild(option2);

});


/* standaard auto's */

car1Select.value = 0;
car2Select.value = 4;


/* =========================================================
   AFSTAND
   ========================================================= */

function getDistance(car, type) {

    if (type === "quarter") {
        return car.quarterMile;
    }

    if (type === "half") {
        return car.halfMile;
    }

    if (type === "mile") {
        return car.oneMile;
    }

}


/* =========================================================
   EENHEDEN
   ========================================================= */

function speedValue(kmh) {

    if (unitSelect.value === "mph") {

        return Math.round(kmh * 0.621371);

    }

    return Math.round(kmh);

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
   LIVE RACE
   ========================================================= */

let raceRunning = false;


function startRace() {

    if (raceRunning) {
        return;
    }

    raceRunning = true;


    const car1 =
        cars[Number(car1Select.value)];

    const car2 =
        cars[Number(car2Select.value)];

    const raceDistance =
        getDistance(
            car1,
            distanceSelect.value
        );

    const raceDistance2 =
        getDistance(
            car2,
            distanceSelect.value
        );


    const carElement1 =
        document.querySelector(".race-car.car1");

    const carElement2 =
        document.querySelector(".race-car.car2");


    const status =
        document.getElementById("raceStatus");

    const winner =
        document.getElementById("raceWinner");


    const laneName1 =
        document.getElementById("laneName1");

    const laneName2 =
        document.getElementById("laneName2");


    laneName1.textContent =
        car1.name;

    laneName2.textContent =
        car2.name;


    document.getElementById("resultCar1")
        .textContent = car1.name;

    document.getElementById("resultCar2")
        .textContent = car2.name;


    resetRace();


    /* COUNTDOWN */

    let countdown = 3;

    status.textContent =
        countdown;

    winner.textContent =
        "GET READY";


    const countdownTimer =
        setInterval(() => {

            countdown--;

            if (countdown > 0) {

                status.textContent =
                    countdown;

                winner.textContent =
                    "GET READY";

            }

            else {

                clearInterval(countdownTimer);

                status.textContent =
                    "GO!";

                winner.textContent =
                    "RACE IN PROGRESS";

                runRace(
                    car1,
                    car2,
                    raceDistance,
                    raceDistance2
                );

            }

        }, 900);

}


/* =========================================================
   RACE ANIMATION
   ========================================================= */

function runRace(
    car1,
    car2,
    time1,
    time2
) {

    const carElement1 =
        document.querySelector(".race-car.car1");

    const carElement2 =
        document.querySelector(".race-car.car2");


    const track =
        document.querySelector(".race-track");


    const trackWidth =
        track.clientWidth;


    const startPosition = 25;

    const finishPosition =
        trackWidth * 0.88;


    const animationTime =
        Math.max(time1, time2);


    const startTime =
        performance.now();


    let finished1 = false;
    let finished2 = false;


    function animationFrame(now) {

        const elapsed =
            (now - startTime) / 1000;


        /* progress */

        const progress1 =
            Math.min(elapsed / time1, 1);

        const progress2 =
            Math.min(elapsed / time2, 1);


        /* positie */

        const position1 =
            startPosition +
            (finishPosition - startPosition)
            * progress1;

        const position2 =
            startPosition +
            (finishPosition - startPosition)
            * progress2;


        carElement1.style.left =
            position1 + "px";

        carElement2.style.left =
            position2 + "px";


        /* snelheid */

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


        document.getElementById("speed1")
            .textContent =
            speedValue(speed1);

        document.getElementById("speed2")
            .textContent =
            speedValue(speed2);


        document.getElementById("speedUnit1")
            .textContent =
            speedUnit();

        document.getElementById("speedUnit2")
            .textContent =
            speedUnit();


        /* afstand */

        const distance1 =
            raceDistanceProgress(
                time1,
                elapsed,
                getRaceDistanceKm()
            );

        const distance2 =
            raceDistanceProgress(
                time2,
                elapsed,
                getRaceDistanceKm()
            );


        document.getElementById("distance1")
            .textContent =
            formatDistance(distance1);

        document.getElementById("distance2")
            .textContent =
            formatDistance(distance2);


        document.getElementById("distanceUnit1")
            .textContent =
            distanceUnit();

        document.getElementById("distanceUnit2")
            .textContent =
            distanceUnit();


        /* finish */

        if (
            progress1 >= 1 &&
            !finished1
        ) {

            finished1 = true;

            document.getElementById("resultTime1")
                .textContent =
                time1.toFixed(2) + " s";

            document.getElementById("resultTop1")
                .textContent =
                speedValue(car1.top) +
                " " +
                speedUnit();

        }


        if (
            progress2 >= 1 &&
            !finished2
        ) {

            finished2 = true;

            document.getElementById("resultTime2")
                .textContent =
                time2.toFixed(2) + " s";

            document.getElementById("resultTop2")
                .textContent =
                speedValue(car2.top) +
                " " +
                speedUnit();

        }


        if (
            elapsed <
            animationTime
        ) {

            requestAnimationFrame(
                animationFrame
            );

        }

        else {

            finishRace(
                car1,
                car2,
                time1,
                time2
            );

        }

    }


    requestAnimationFrame(
        animationFrame
    );

}


/* =========================================================
   LIVE SPEED
   ========================================================= */

function calculateLiveSpeed(
    car,
    progress
) {

    /*
       Simpele performancecurve:

       snel omhoog in het begin,
       daarna steeds minder versnelling.
    */

    const curve =
        1 - Math.pow(
            1 - progress,
            2.2
        );


    return Math.min(
        car.top,
        car.top * curve
    );

}


/* =========================================================
   AFSTAND BEREKENEN
   ========================================================= */

function getRaceDistanceKm() {

    const type =
        distanceSelect.value;


    if (type === "quarter") {
        return 0.402336;
    }

    if (type === "half") {
        return 0.804672;
    }

    return 1.609344;

}


function raceDistanceProgress(
    raceTime,
    elapsed,
    totalDistance
) {

    const progress =
        Math.min(
            elapsed / raceTime,
            1
        );


    return totalDistance * progress;

}


function formatDistance(km) {

    const converted =
        distanceValue(km);


    return converted.toFixed(2);

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

        winner.innerHTML =
            car1.name +
            " WINS";

    }

    else if (time2 < time1) {

        winner.innerHTML =
            car2.name +
            " WINS";

    }

    else {

        winner.innerHTML =
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

    document.querySelector(".race-car.car1")
        .style.left = "25px";

    document.querySelector(".race-car.car2")
        .style.left = "25px";


    document.getElementById("speed1")
        .textContent = "0";

    document.getElementById("speed2")
        .textContent = "0";


    document.getElementById("distance1")
        .textContent = "0.00";

    document.getElementById("distance2")
        .textContent = "0.00";


    document.getElementById("resultTime1")
        .textContent = "—";

    document.getElementById("resultTime2")
        .textContent = "—";

    document.getElementById("resultTop1")
        .textContent = "—";

    document.getElementById("resultTop2")
        .textContent = "—";


    document.getElementById("speedUnit1")
        .textContent = speedUnit();

    document.getElementById("speedUnit2")
        .textContent = speedUnit();

}


/* =========================================================
   SNELSTE AUTO'S
   ========================================================= */

function createFastestCars() {

    const container =
        document.getElementById(
            "fastestCars"
        );


    const fastest =
        [...cars]
        .sort(
            (a, b) =>
            a.zero100 - b.zero100
        )
        .slice(0, 8);


    container.innerHTML = "";


    fastest.forEach(
        (car, index) => {

            container.innerHTML += `

                <div class="fastest-card">

                    <div class="fastest-rank">
                        #${index + 1}
                        FASTEST 0-100
                    </div>

                    <h3>
                        ${car.name}
                    </h3>

                    <div class="year">
                        ${car.year}
                    </div>

                    <div class="fastest-time">
                        ${car.zero100}s

                        <small>
                            0-100
                        </small>
                    </div>

                    <div class="fastest-stats">

                        <div>
                            <span>POWER</span>

                            <strong>
                                ${car.hp} HP
                            </strong>
                        </div>

                        <div>
                            <span>TOP</span>

                            <strong>
                                ${car.top} KM/H
                            </strong>
                        </div>

                    </div>

                </div>

            `;

        }
    );

}


createFastestCars();


/* =========================================================
   UNIT UPDATE
   ========================================================= */

unitSelect.addEventListener(
    "change",
    () => {

        document.getElementById("speedUnit1")
            .textContent = speedUnit();

        document.getElementById("speedUnit2")
            .textContent = speedUnit();

        document.getElementById("distanceUnit1")
            .textContent = distanceUnit();

        document.getElementById("distanceUnit2")
            .textContent = distanceUnit();

    }
);
