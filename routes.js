var express = require('express');
var Router = express.Router();
var mysqlConnection = require('./connect');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });


Router.get("/", (req, res) => {
    mysqlConnection.query("select * from tbl_products", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log(err);
        }
    });
});


Router.get("/:id", (req, res) => {
    var id = req.params.id;
    mysqlConnection.query("select * from tbl_products where `pro_id`=" + id, (err, rows, fields) => {
        if (!err) {
            res.send(rows[0])
        } else {
            console.log(err);
        }
    });
});


Router.post("/addproductAction", urlencodedParser, (req, res) => {
    // res.end(JSON.stringify(req.body));
    var name = req.body.pro_name;
    var price = req.body.pro_price;
    var description = req.body.pro_desc;

    mysqlConnection.query("insert into `tbl_products`(`name`,`description`,`price`) values ('" + name + "','" + description + "','" + price + "')", (err, rows, fields) => {
        if (!err) {
            res.send(rows)
        } else {
            console.log(err);
        }
    });
});



module.exports = Router;