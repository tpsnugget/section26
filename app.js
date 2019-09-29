var express = require('express')
var app = express()

// This tells Express to look in the 'public' folder if it can't find a file
app.use(express.static('public'))

// This tells Express that our files will be ejs files, so we can leave that
// extension off in our naming
app.set('view engine', 'ejs')

// ============
//    Routes
// ============
app.get('/', function(req, res) {
   res.render('home')
})

app.get('/fallinlovewith/:thing', function(req, res) {
   var thing = req.params.thing
   res.render('love', {thingVar: thing})
})

app.get('/person/:name', function(req, res) {
   var name = req.params.name

   //                      person is a variable in the ejs file that comes from
   //                      the :name variable in this route
   res.render('name', {person: name,
                           person1: 'Margaret',
                           person2: 'Rusty'})
})

app.get('/posts', function(req, res) {
   var posts = [
      {title: 'Post 1', author: 'Susy'},
      {title: 'My adorable pet bunny', author: 'Charlie'},
      {title: 'Can you believe this pomsky', author: 'Colt'}
   ]
   res.render('posts.ejs', {posts: posts})
})
// ============
//    Routes
// ============

app.listen(3000, process.env.IP, function() {console.log('Server has started')})