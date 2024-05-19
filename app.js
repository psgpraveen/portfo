require("dotenv").config();
const express = require("express");
const {router} = require("express");
const serverless = require("serverless-http");
const ps = require("./mongo/dbconnect");
const status = require("./mongo/status");
const comments = require("./mongo/comment");
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000
app.use(express.json()) 
app.use(cors())
app.get("/status", async (req, res) => {
  let data=await status.find({});
  res.send(data);
});   
app.get("/comment", async (req, res) => {
  let data=await comments.find({});
  res.send(data);
});
 
app.post('/', async (req, res) => {
    try {
        const newData = new ps(req.body); 
         let result =await newData.save();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Error saving data");
    }
});
app.post('/comment', async (req, res) => {
    try {
        const newData = new comments(req.body); 
         let result =await newData.save();
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Error saving data");
    }
});
app.post('/status', async (req, res) => {
    try {
        const data = req.body;
        let newView = data.view;
        let newlike = data.like;
        const result = await status.updateMany(
            {},
            { $set: { view: newView, like: newlike } } 
        );
        console.log(`Updated view count: ${newView}, Updated like count: ${newlike}`);
        console.log(result);
        res.send(result);
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).send("Error saving data");
    }
});
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
})
// api.use("/api/", router);
module.exports.handler = serverless(app);