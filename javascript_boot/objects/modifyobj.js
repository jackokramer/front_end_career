const color = 'green';
const hexCode = '#0f0';

const colors = {
    'yellow color': `#ff0`,
    blue: `#f00`,
    orange: `#f60`,
    [color]: hexCode
}
// values can be updated or changed at any time after the value was created

//colors[color] = hexCode;
console.log(colors);

/*
console.log(colors.yellow);
colors.red = '#f00';

console.log(colors)


console.log(colors['blue']);
*/

function getColor(key){
    return colors[key];
}


console.log(getColor('orange'));

delete colors['yellow color']
console.log(colors) // operator will remove the value completely

// delete colors.blue