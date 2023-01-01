function factorial(n) {
   
    let result = 1;
    if (n <= 0) {
        return 1;
    } else {
        for (let i = 0; i <= n; i++) {
            result = n * factorial(n - 1);
        }
        return result;
    }
}
function main() {
    console.time();
    output = 1;
    for (let i = 0; i <= 100; i++) {
        output = factorial(i);
        console.log(`The Result of ${i} is ${output}`);
    }
    console.timeEnd();
}
main();