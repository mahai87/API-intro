// JavaScript Object Notation 
// JSON - Java Script Object Notation 
const user = { id: 11, name: 'Gorib Amir', job: 'actor' }
const stringified = JSON.stringify(user);

// console.log(user, stringified);

const shop = {
    name: 'Alia store',
    address: ' Ranbir Road',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    woner: { name: 'Alia', profession: 'actor' },
    isExpensive: false

}

const shopStringified = JSON.stringify(shop);
console.log(shopStringified)
const converted = JSON.parse(shopStringified);
console.log(converted)