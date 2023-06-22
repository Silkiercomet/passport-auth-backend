const express = require("express")
const cors = require("cors")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const crypto = require("crypto")
const dotenv = require("dotenv")
const authRoutes = require("./routes/auth")
const passportConfig = require("./config/passport")
const db = require("./db/db.js")
const MongoStore = require("connect-mongo")
const session = require("express-session")

dotenv.config({path:"./config.env"})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(
    session({
      secret: "foo",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 3600, // Session TTL (optional)
      }),
    })
  );
app.use(passport.initialize())
app.use(passport.session())
app.use('/api/auth', authRoutes);


app.get("/", (req,res) => {
    res.send("<h1>hello world</h1>")
})

app.listen(process.env.PORT, () => {
    try{
        passportConfig(passport)
        db()
    console.log("serber started")
    }catch(err){
        console.log(err)
    }
})
