// animates the circle
const circle = document.getElementById('circle');
let X = 0;  // animation parameters
let Y = 0;

setInterval(() => {
    X += .04;
    Y += .05;
    circle.style.marginLeft = String(Math.sin(Math.sin(X) * 4) * 13);
    circle.style.marginTop = String(Math.sin(Math.sin(Y) * 4) * 5);
}, 20);

const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const calculateFib = (num) => num < 2 ? num : calculateFib(num - 1) + calculateFib(num - 2);

document.querySelector('#btnLocal').addEventListener('click', () => {
    const fibNumBase = randomInteger(40, 45);
    console.log('locally clicked', fibNumBase);
    document.querySelector('#outputLocal').innerHTML = calculateFib(fibNumBase);
});

document.querySelector('#btnWorker').addEventListener('click', () => {
    document.querySelector('#outputWorker').innerHTML = '...';
    const fibNumBase = randomInteger(40, 45);
    if (window.Worker) {
        const worker = new Worker('./worker.js');
        worker.postMessage(fibNumBase);
        worker.onmessage = (event) => {
            document.querySelector('#outputWorker').innerHTML = event.data;
        }
    } else {
        document.querySelector('#outputWorker').innerHTML = calculateFib(fibNumBase);
    }
});
