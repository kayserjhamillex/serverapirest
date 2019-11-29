// const express = require('express');
// const router = express.Router();
// router.get('/',(req,res)=>{
//     res.json({});
// });
// module.exports = router;
const User = require('../models/user');

module.exports = function(app){
    app.get('/cliente',(req,res)=>{
        User.getUsers((err,data)=>{
            res.json(data);
        })
    res.json([]);
    
    app.post('cliente',(req,res)=>{
        const ClientData = 
        {
            id: null,
            fullname: req.body.fullname,
            DNI: req.body.DNI,
            datebirth:req.body.datebirth,
            email:req.body.datebirth,
            password:req.body.datebirth,
            created_at:null,
            updated_at:null
        };
        User.insertPaciente(ClientData,(err, data)=>{
            if (data && data.InsertId) {
                res.json({
                    success:true,
                    msg:'cliente insertado',
                    data:data
                })
            }
            else{
                res.status(500).json({
                    success:false,
                    msg:'error de insertacion'
            }
        })
    });







});
}
