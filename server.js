// const  express = require('express');
// const path=require('path');
// const app=express();



// app.use(express.static('./dist/eCommerceWebsite'));
// app.get('/*',(req,res)=>
// {
//   res.sendFile(path.join(
//   '/dist/eCommerceWebsite/index.html'));});
// app.listen(process.env.PORT || 8080);


const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/eCommerceWebsite'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/eCommerceWebsite/index.html'));});



app.listen(process.env.PORT || 8080);
