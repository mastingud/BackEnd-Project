const {authJwt} = require("../middleware");
const artilce = require("../controllers/product.controller.js");
const router =  require("express").Router();

module.exports = app => {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token,Origin,Content-Type,Accept"
        ) ;
 
        next(); 
    });
   

    //create
    app.post("/api/product", [authJwt.verifyToken],artilce.create);

    //retrieve all
    app.get("/api/product", [authJwt.verifyToken],artilce.findAll);

    //retrieve all published 
    app.get("/api/product/published", artilce.findAllPublished);

     //retrieve all product user
     app.get("/api/product/usercount", artilce.findProductUser);
    
    //retrieve all user 
    app.get("/api/product/user/:id",[authJwt.verifyToken], artilce.findAllUser);

    //retrieve a single product
    app.get("/api/product/:id",[authJwt.verifyToken], artilce.findOne);

    //update
    app.put("/api/product/:id",[authJwt.verifyToken], artilce.update);

    //delete by id 
    app.delete("/api/product/:id", [authJwt.verifyToken],artilce.delete);

    //delete by id 
    app.delete("/api/product/user/:id", [authJwt.verifyToken],artilce.deleteUser);

    //delete all
    app.delete("/api/product/",[authJwt.verifyToken], artilce.deleteAll);

    // app.use('/api/product', router);
};