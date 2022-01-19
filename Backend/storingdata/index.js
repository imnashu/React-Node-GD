const mongoose = require("mongoose");

async function main() {
    // Use connect method to connect to the server
    await mongoose.connect('mongodb://localhost/cities');
    console.log('Connected successfully to database');

    const Schema = mongoose.Schema;

    const CitySchema = new Schema({
        id: String,
        name: String,
        state: String
    });

    const City = mongoose.model('city', CitySchema);

    cityList=[
            {
                "id": "1",
                "name": "Mumbai",
                "state": "Maharashtra"
            },
            {
                "id": "2",
                "name": "Delhi",
                "state": "Delhi"
            },
            {
                "id": "3",
                "name": "Bengaluru",
                "state": "Karnataka"
            },
            {
                "id": "4",
                "name": "Ahmedabad",
                "state": "Gujarat"
            },
            {
                "id": "5",
                "name": "Hyderabad",
                "state": "Telangana"
            },
            {
                "id": "6",
                "name": "Chennai",
                "state": "Tamil Nadu"
            },
            {
                "id": "7",
                "name": "Kolkata",
                "state": "West Bengal"
            },
            {
                "id": "8",
                "name": "Pune",
                "state": "Maharashtra"
            },
            {
                "id": "9",
                "name": "Jaipur",
                "state": "Rajasthan"
            },
            {
                "id": "10",
                "name": "Surat",
                "state": "Gujarat"
            }
    ]

    await City.insertMany(cityList);
    
    return 'done.';
  }
  
  main()
    .then(console.log)
    .catch(console.error)
    .finally(() => mongoose.disconnect());