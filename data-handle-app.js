/**
 * Created by Administrator on 2016/8/29.
 */

var express = require('express');
var app = express();


var routes = require('./routes/index');



app.use(express.static('public'));

routes(app);

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});
