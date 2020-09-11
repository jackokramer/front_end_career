const isAuth = true;
const user = {
    favorites: []
}

class Product {
    cosntructor(name, price){
        this.name = name;
        this.price = price;
        this.favoriteProducts = this.favoriteProducts.bind(this)     
    }
    handleFavoriteProduct(){
        if(isAuth){
            setTimeout(this.favoriteProducts.bind(this), 1000)
        } else {
            console.log(`You must sign in to favorite products!`)
        }
    }

    //favoriteProducts(){
     //   user.favorites.push(this.name);
    //    console.log(`${this.name}, favorited this product`)
   // }
}



const product1 = new Product(`Coaster`, 89.99)
product1.handleFavoriteProduct()

