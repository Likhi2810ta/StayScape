const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

//console.log("Loaded MAP_TOKEN:", process.env.MAP_TOKEN);
const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken=process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

const mongo_url='mongodb://127.0.0.1:27017/wanderlust';
main()
.then(()=>console.log("Connected to database"))
.catch(err => console.log(err));



async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
    await Listing.deleteMany({});

    for (let obj of initData.data) {
        let response = await geocodingClient
            .forwardGeocode({
                query: `${obj.location}, ${obj.country}`,
                limit: 1,
            })
            .send();

            if (response.body.features.length > 0) {
              obj.geometry = response.body.features[0].geometry;
                  }             
                  else {
              //console.log(`No coordinates found for ${obj.location}`);
              continue;
              }

        obj.owner = "6a58927160fddecbc5467fbf";
    }

    await Listing.insertMany(initData.data);
    console.log("Data initialized");
};

initDB();