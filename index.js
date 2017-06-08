import express from 'express';
import http from 'http';
import bp from 'body-parser';
import {myPerceptron} from './intel.js';
const app =express();
app.set('port',9000);
app.use(bp.json({limit: '10mb'}));
app.use(bp.text());
app.use(bp.urlencoded({extended: true}));
app.get("/:x/:y",(req,res)=>{
  res.status(200).send(myPerceptron.activate([req.params.x,req.params.y]));
});
http.createServer(app).listen(app.get('port'),()=>{
  console.log('Server running');
});
