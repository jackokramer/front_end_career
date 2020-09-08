const lunchMenu = ['harvest burger', `southern fried chicken`, `bouncing hotdogs`]


//const allMenuIdeas = lunchMenu.concat('club sandwich'); // non mutating array method



/// spread operator

const breakFastMenuIdeas = [`Buckwheat Pancakes`]
const dinnerMenuIdeas = [ `glazed salmon`, `southern fried chicken`, `american cheeseburger`, `meatloaf`]

const allMenuIdeas = [
    ...breakFastMenuIdeas,
    ...lunchMenu,
    ...dinnerMenuIdeas];

    allMenuIdeas.push(`club sandwich`);

    console.log(lunchMenu) // arrays are both object types and reference types

const otherMenuIdeas = [...breakFastMenuIdeas, ...allMenuIdeas, ...dinnerMenuIdeas]

console.log(allMenuIdeas);

const  saladIndex = allMenuIdeas.findIndex(idea => idea === `harvest salad`);

const meatLoaf =  allMenuIdeas.findIndex(idea => idea === `meatloaf`);

const  finalMenuIdeas = [
    ...allMenuIdeas.slice(0, meatLoaf),
    ...allMenuIdeas.slice(meatLoaf +1 )
]

/**const finalMenuIdeas = [
    ...allMenuIdeas.slice(0, saladIndex),
    'garden salad',
    ...allMenuIdeas.slice(saladIndex +1)
];
**/

console.log(finalMenuIdeas);
