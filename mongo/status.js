const mongoose = require("mongoose");
// const url1 = "mongodb://localhost:27017/psg";
const url1 = "mongodb+srv://ipraveenkumargupta:1234@cluster0.qksodpz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// mongoose.connect(url1)
mongoose.connect(url1)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {   
    console.error('Error connecting to MongoDB:', error);
  });
const kpSchema =new mongoose.Schema({
   like:Number,
   view:Number
});
module.exports = mongoose.model('Status',kpSchema);
