const mongoose = require("mongoose");
// const url = "mongodb://localhost:27017/psg";
const url = "mongodb+srv://ipraveenkumargupta:1234@cluster0.qksodpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = "mongodb+srv://psg:1234@cluster0.yi6qjk2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
const kSchema =new mongoose.Schema({
   name:String,
   msg:String,
   email:String,
});
module.exports = mongoose.model('ps',kSchema);
