const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONG_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then( () => {
    console.log("connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(MONG_URL);
}

const initDB = async () =>{
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) => ({...obj, owner : '66c05f214a0c39aef41b599f'}));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");

};

initDB ();