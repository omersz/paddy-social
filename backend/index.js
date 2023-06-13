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

const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");


const multer = require("multer");
const path = require("path");


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

app.use("/images", express.static(path.join(__dirname, "public/images")));


// middleware(Ara Yazılım)
// request isteğinde bulunduğunda gelecek olan response’un arasına 
// girerek bir işlem yaptırmak isteniliyorsa bu işlemlere Middleware denir.
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));//istekler günlüğe kaydedilir consoleden ne döndüğünü izleriz

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, "public/images");
  },
  filename: (req,file,cb)=>{
    cb(null, req.body.name);
  },
});

const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  try{
    return res.status(200).json("File uploaded successfully.");
  }catch(err){
    console.log(err)
  }
});


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);


app.listen(8800, ()=> {
    console.log("Backend server is running!")
})


