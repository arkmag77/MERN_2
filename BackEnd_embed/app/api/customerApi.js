const express = require("express");
const router = express.Router();
 
const customer = require('../controllers/customer.controller');
const auth = require('../middlewares/authorize');


router.get('/all', function (req, res){

    customer.list(function(err, customers){

        if (err) {
            res.status(404);
            res.json({
               error:  'Customers not found'
            });
        } else {

            res.json(customers);
        }
    });
   
});


router.get('/:id', function (req, res){

    customer.get(req.params.id, function(err, customer){

        if (err) {
            res.status(404);
            res.json({
               error:  'Customer not found'
            });
        } else {
            res.json(customer);
        }

    });
   
});


router.post('/add', /* auth, */ function (req, res){

    customer.add(req.body, function(err, customer){

        if (err) {
            res.status(404);
            res.json({
               error:  'Customer not created'
            });
        } else {
            res.json(customer);
        }

    });
   
});


router.put('/update/:id', function(req, res){
 
    customer.update(req.params.id, req.body, function(err, data){
        if (err) {
            res.status(404);
            res.json({
               error:  'Customer not found'
            });
        } else {
            res.json(data);
        }
    });
     
});


router.delete('/delete/:id', function(req, res){
     
    customer.delete(req.params.id, function(err, data){
        if (err) {
            res.status(404);
            res.json({
               error:  'Customer not found'
            });
        } else {
            res.json(data);
        }
    });
     
});

module.exports = router;