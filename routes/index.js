/**
 * Created by Administrator on 2016/8/29.
 */


var eventproxy = require('eventproxy');

var ep = eventproxy();
var dataHandle =  require('../models/data-handle');

module.exports = function (app) {


    function sendData(req, res) {
        res.set({'Content-Type': 'application/json;charset=utf-8'});

        var mergeData = {};

        dataHandle.getCityEmploymentNum(function (data) {
            mergeData.cityEmploymentNum = data;
            ep.emit("getData");

        });

        dataHandle.getCityEmploymentSalary(function (data) {
            mergeData.cityEmploymentSalary = data;
            ep.emit("getData");
        });

        dataHandle.getWorkYearSalary(function(data){
            mergeData.workYearSalary = data;
            ep.emit("getData");
        });

        dataHandle.getCompanySizeSalary(function (data) {
            mergeData.companySizeSalary = data;
            ep.emit("getData");
        });

        dataHandle.getEmploymentLabel(function (data) {
            mergeData.employmentLabel = data;
            ep.emit("getData");
        });

        ep.after('getData',5,function () {
            res.send(JSON.stringify(mergeData));
        })
    }


    app.get('/analysis/:job', function (req, res,next) {
         
        // console.log(settings);

        console.log(req.params.job)
        dataHandle.connectDatabase(req.params.job);
        next();
    });

    app.get('/analysis/:job', sendData);

}
