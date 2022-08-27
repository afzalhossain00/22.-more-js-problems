const country = 'Bangladesh';
const age = 52;
const isIndepandent = true;
const student = { id: 121, class: 11, name: 'salam' }
const friends = [11, 14, 15, 18, 20]; function add(num1, num2) {
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndepandent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

console.log(friends.includes(15))

// concat:
const newFriendsAge = [12, 15, 48, 11]
const allFriends = newFriendsAge.concat(friends);
console.log(allFriends);
