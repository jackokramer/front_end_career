function converTemp(celcius, decimalPlaces= 1){
    // celcius to farenhiet
    decimalPlaces = decimalPlaces || 1;
    const farenhiet = celcius *1.8 +32;
    return Number(farenhiet.toFixed(decimalPlaces));
}

console.log(converTemp(21, 0))