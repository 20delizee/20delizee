const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/routes")(app);
require("./routes/newquestion")(app);
require("./routes/newmatiere")(app);
require("./routes/newuser")(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

//615af2d99c0ac7573edd7e61"1:"615b1585ffd5a876302d132a"2:"615c3d521272079b883d8012"3:"615af11b33a4a03f8a993e8e"4:"615af18533a4a03f8a993e8f"