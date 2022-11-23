const express = require("express");
const app = express();
const Minio = require('minio');
const ex = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path')

const minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9009,
    accessKey: 'minioadmin',
    secretKey: 'minioadmin',
    useSSL: false,

})

app.use(ex.json())
app.use(ex.urlencoded({extended:true}))

app.get("/Welcome", function (req, res){
    res.send("welcome to my server")

})
    

app.post('/minio/createBucket/', async (req, res) => {
    
    try {
        await minioClient.makeBucket(req.bojy.nombre, 'us-east-1')
    } catch (error) {
        res.status(500).send({error})
    }
})
    
    



app.listen(3344);
