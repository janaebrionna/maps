/**
 * 
 * map object
 * 
 * holds key-value pairs and remembers the original insertion order of the keys
 * 
 * fouur primary properties
 * 
 * .set(key, value)
 * .get(key)
 * .size
 * .delete(key)
 * 
 * a key in the map can only occur once; it is unique in the maps's collection
 */

const users = new Map ()

// .set(key, value) => sets the value for the passed key in the object
users.set('user1', {
id: 1, 
    username: 'seth', 
    email:'seththeMan@gmail.com', 
    password: '12345', 
    following: 124, 
    followers: 5000
})
users.set('user2',{
id: 2,
username: 'maggnificent',
email: 'maggie@maggie.com',
password: 'coffeeQueen24',
following: 321,
followers: 500,
})
users.set('user3',{
id:3,
username: 'JS0nL1n',
email: 'jasonliu@aol.com',
password: 'saquonsFav22',
following: 299,
followers: 198,
})
users.set('user4',{
    id:4,
    username: 'pinkTeachey',
    email: 'janaecodes@yahoo.com',
    password: 'itsgivingpassw0rd',
    following: 23,
    followers: 170000
})

//console.log(users)

// .get(key) => return the value associated to the passed key or undefined

// console.log(users.get('users2'))

// .size returns the number of key value pairs
console.log(users.size)

// .delete(key) => return true if an element in the map object existed and has been removed, or false if the element does not exist

users.set('user5', {
id:5,
username: 'jarissaTheModel',
email:'jarissadrummond@gmail.com',
password: 'thatgirl24',
followers: 170000,
following: 26
})

console.log(users)

console.log(users.delete('user5'))

//console.log(users.delete('user6'))

const user = document.getElementById('user')
user.innerText = users.get('user3').username

const following = document.getElementById('following')
following.innerText = users.get('user3').following

const followers = document.getElementById('followers')
followers.innerText = users.get('user3').followers

//loop through map

//for (const [key, value]of users) {
    //for (const prop in value) {
       // console.log(`key: ${key}, value: { ${prop}: ${value[prop]}}`)
   // }
//}

for (const [key, value] of users) {
        console.log(key, value) {
        if (prop == 'email') {
            console.log(`${key}, email: ${value[prop]}`)
        }
    }
}

// for Each(callback function)
user.forEach((key, value)=> {
    console.log(`${key}, email: ${key.email}`)
})

// .keys() => returns a new iteration object that contains the keys

let keys = users.keys()
console.log(keys)

// .values() => returns a new iteration object that contains the values

let values = users.values()
console.log(values)

// .has() returns a boolean indicating whether a value has been associated with the passed in key

console.log(user.has('user1'))
console.log(user.has('user5'))

// .clear() => removes all key-value pairs from the map object users.clear()

// take a 2d array and turn it into a map

const playerScores = [
    ['basicallyAI', 3455],
    ['semij',9876],
    ['andresthegiant01',1122]
]

const playerMap = new Map(playerScores)

console.log(playerMap)

// array.from()
//const playerMap2 = Array.from(playerScores)
//console.log(playerMap2)

/**
 * 
 * Cloning map
 */

const player = new Map ([['mookie betts', 'Second Base']])

console.log(player)

const playerClone = new Map(playerClone)

console.log(player === playerClone)
