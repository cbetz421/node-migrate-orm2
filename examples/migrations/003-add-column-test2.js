var mysql       = require('mysql');
var db          = mysql.createConnection("mysql://root:@localhost/test");
var connection = {dialect: 'mysql', db: db}

exports.up = function(next){
  this.addColumn('test_table2',  {
    newColumn   : { type : "number" }
  }, connection, next);
};

exports.down = function(next){};