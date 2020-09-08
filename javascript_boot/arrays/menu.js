const menuItems = [
    {item: 'skirt steak', cost: 17},
    {item: 'chinese chicken salad', cost: 11},
    {item: "fried cod", cost: 10},
    {item: 'chicken fingers', cost: 12},
    {item: 'lentils', cost: 16},
    {item: 'margarita pizza', cost: 14}
]

const total = menuItems.reduce((accumulator, menuItem)=> {
    console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
    `);
    return accumulator + menuItem.price; // rembers every time the function runs
}, 0);// iterated over all elements does it differentely than other built in functions with an acumulator

// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];

  const totalWeight = cars.reduce((accumulator, car)=>{
      if(car.isElectric){
          return accumulator + car.weight
      } else {
      return accumulator;
    }
  })

/*const electricCar = cars.reduce((name, isElectric)=>{
    console.log(`
    name: ${name},
    isElectirc: ${isElectric}`
    );
    return name + isElectric;
})*/

console.log(totalWeight)