const calculateFib = (num) => num < 2 ? num : calculateFib(num - 1) + calculateFib(num - 2);

onmessage = (event) => {
    console.log('Message received from main script', event);
    const fibonacci = calculateFib(event.data);
    postMessage(fibonacci);
}
