var fs = require('fs')
var path = require('path')

// var chirpArray = [
//   {user: 'Jord', chirp: 'This is my first chirp'},
//   {user: 'Reba', chirp: 'Hey wazzup'},
//   {user: 'Ashby', chirp: 'About to get a coffee!'},
//   {user: 'Noel', chirp: 'I love cats =3'},
//   {user: 'Sarah', chirp: 'Wow, this movie was incredible'}
// ]

// fs.writeFile('chirps.json', JSON.stringify(chirpArray), (err) => {
//   console.log('write finished', err)
// })

fs.readFile('./chirps.json', 'utf-8', (err, chirps) => {
  var chirps = JSON.parse(chirps)
  console.log(chirps)
})
