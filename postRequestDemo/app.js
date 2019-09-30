var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

var friends = ['Tony', 'Miranda', 'Justin', 'Pierre', 'Lily']

app.set('view engine', 'ejs')

//===============
//    Routes
//===============

app.get('/', function(req, res) {
   res.render('home')
})

app.get('/friends', function(req, res) {
   res.render('friends', {friends: friends})
})

app.post('/addFriend', function(req, res) {
   friends.push(req.body.newFriend)
   console.log(friends)
   res.redirect('/friends')
})

//===============
//    Routes
//===============

app.listen(3000, process.env.IP, function() {
   console.log('The server is running...')
})
