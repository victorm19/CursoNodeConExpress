const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },
        (err, res) => {
            if (!err)
                console.log("*** CONEXION CORRECTA ***");
            else 
                console.log("*** ERROR DE CONEXION ***");
    });
};

module.exports = dbConnect

//mongodb+srv://vmartinez:poli2016@cluster0.ky0iftz.mongodb.net/dbspotify?retryWristes=true&w=majority