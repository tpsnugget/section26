var express = require('express')
var app = express()

// ============
//    Routes
// ============
app.get('/', function(req, res) {
   res.render('home.ejs')
})

app.get('/person/:name', function(req, res) {
   var name = req.params.name

   //                      person is a variable in the ejs file that comes from
   //                      the :name variable in this route
   res.render('home.ejs', {person: name})
})
// ============
//    Routes
// ============

app.listen(3000, process.env.IP, function() {console.log('Server has started')})