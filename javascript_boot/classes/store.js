class Product{
    constructor(name, price, discountable){
        this.name = name;
        this._price = price;
        this.discountable = discountable;
    }
    isDiscountable(){
        return this.discountable;
    }
}

class SaleProduct extends Product{
    constructor(name, price, discountable, percentOff){
        super(name, price, discountable)
        this.percentOff = percentOff;
    }
    getSalePrice(){
        if(super.isDiscountable()){
            return this.price * ((100 -this.percentOff) /100)
        } else{
            return `this ${this.name} is not eligible for a discount`;
        }
    }
    get clearancePrice(){
        return this.price * .5;
    }
    set price(price){
        if(typeof price !== 'number'){
            return this._price;
        } else{
            this._price = price
        }; // needs a corresponding getter
    }
} // calls the class above

const coffeeMaker = new Product(`coffee maker`, 99, true, 20);

console.log(coffeeMaker.price)

// add a 10% discount

//console.log(coffeeMaker.getSalePrice())


//super is a function that calls the constructor methods above

//React
//https://react.js.org

//no private properties available in javascript meanng one can manipulate ti to whatever.

console.log(coffeeMaker.clearancePrice)

coffeeMaker.newPrice = 30;
console.log(coffeeMaker.newPrice)

// getters an setters can be a double edge sword snce their still operators. Helpful to prevent mutations though