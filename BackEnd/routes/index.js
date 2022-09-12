const express = require('express');
const router = express.Router();
const mysql = require('mysql');


const conx = mysql.createConnection({
    host: 'localhost',
    database: 'db_shopping_car',
    port:'3306',
    password:'',
    user: 'root'
})

conx.connect((err) =>{
    if(err) throw err;
    console.log('Connected to database.' );
})




//route index
router.get('/', (req,res) =>{
    res.send('run server')
})


router.get('/API/games', (req, res) => {
    
    let qr = "SELECT tbl_category.category, \n" + 
             "tbl_plataform.plataform,  \n" +
             "tbl_plataform.version,  \n" +
             "tbl_product.idtbl_product,  \n" +
             "tbl_product.name_product,  \n" +
             "tbl_product.price_product,  \n" +
             " tbl_product.image,  \n" +
             " tbl_product.year \n"+
             "FROM tbl_prod_cate  \n" +
                "INNER JOIN  tbl_category ON \n" +
	                "tbl_category.idtbl_category = tbl_prod_cate.tbl_category_idtbl_category \n" +
                "INNER JOIN  tbl_plataform ON   \n" +
	                "tbl_plataform.idtbl_plataform = tbl_prod_cate.tbl_plataform_idtbl_plataform \n" +
                "INNER JOIN  tbl_product ON  \n" +
	                "tbl_product.idtbl_product = tbl_product_idtbl_product;"
   

    conx.query(qr, function (err, result) {
        if(err) throw err;
        res.send(result)
    })
})



//categorias
router.get('/API/category', (req,res) =>{
    let qr = "SELECT * FROM tbl_category"
    conx.query(qr, function (err, result) {
        if(err) throw err;
        res.send(result)
    })
})

//plataformas
router.get('/API/plataform', (req,res) =>{
    let qr = "SELECT DISTINCT tbl_plataform.plataform FROM tbl_plataform "
    conx.query(qr, function (err, result) {
        if(err) throw err;
        res.send(result)
    })
})


//plataformas
router.get('/API/products', (req,res) =>{
    let qr = "SELECT * FROM tbl_product"
    conx.query(qr, function (err, result) {
        if(err) throw err;
        res.send(result)
    })
})


module.exports = router;