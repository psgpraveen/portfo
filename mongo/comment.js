const mongoose = require("mongoose");
const url = "mongodb+srv://ipraveenkumargupta:1234@cluster0.qksodpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
const kSchema =new mongoose.Schema({
   comment:String,
   Name:String,
   Time:Date,
});
module.exports = mongoose.model('comment',kSchema);
