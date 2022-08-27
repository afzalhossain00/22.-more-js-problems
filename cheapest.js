const phones = [
    { name: 'samsung', camera: 12, storage: '32gb', price: 35000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 20000, color: 'silver' },
    { name: 'iphone', camera: 12, storage: '32gb', price: 82000, color: 'silver' },
    { name: 'Xioami', camera: 12, storage: '32gb', price: 28000, color: 'silver' },
    { name: 'Htc', camera: 12, storage: '32gb', price: 69000, color: 'silver' },
    { name: 'Nokia', camera: 12, storage: '32gb', price: 45000, color: 'silver' },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(phones)
console.log(mySelection); 