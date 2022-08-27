const shoppingCard = [
    { name: 'shoe', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3700 },
    { name: 'belt', price: 600 },

]
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum += product.price;
        console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCard);
console.log('Total expense today:', expense);
