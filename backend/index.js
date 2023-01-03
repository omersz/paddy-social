const express = require("express");
const app = express();
//express kuruldu
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
    console.log("connected to mongo..") });


mongoose.connect(process.env.MONGO_URL, {
    userNewUrlPaser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((e) => {
      console.log('not connected');
    });


// middleware(Ara Yazılım)
// request isteğinde bulunduğunda gelecek olan response’un arasına 
// girerek bir işlem yaptırmak isteniliyorsa bu işlemlere Middleware denir.
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));//istekler günlüğe kaydedilir consoleden ne döndüğünü izleriz

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=> {
    console.log("Backend server is running!")
})

app.get("/",(req,res)=>{
    res.send("welcome homepage")
})








/*
const express = require("express");
const app = express();
//express kuruldu
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

//gerekli paketler kuruldu
dotenv.config();
//güvenlik açıkları için dotenv paketi aktif hale getirildi

//Mongodb bağlantımızı kurduk
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true },
    () =>{
    console.log("Connected to MongoDB");
});

// middleware(Ara Yazılım)
// request isteğinde bulunduğunda gelecek olan response’un arasına 
// girerek bir işlem yaptırmak isteniliyorsa bu işlemlere Middleware denir.
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));//istekler günlüğe kaydedilir consoleden ne döndüğünü izleriz


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);


app.listen(8800,()=>{
    console.log("Backend server is running!")
})

*/