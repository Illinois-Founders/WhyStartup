var express = require('express');
var bodyParser = require('body-parser');

var app = express();


app.set('port', process.env.PORT || 3000);
app.use(bodyParser());

app.use(express.static(__dirname + '/public')); //looks by default in this directory

app.get('/', function(req, res) {
    console.log("Here");
    res.render('index', {
        csrf: 'CSRF token goes here'
    });
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://127.0.0.1:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});
