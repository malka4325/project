require("dotenv").config()
const express=require("express")
const cors=require("cors")
const corsOptions=require("./config/corsOptions")
const connectDB=require("./config//dbConn")
const { default: mongoose } = require("mongoose")
const PORT=process.env.PORT||1300
const app=express()

connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use("/tasks", require("./routes/task"))
app.use("/articles", require("./routes/articles"))
app.get('/', (req,res)=>{res.send("Home page")})


mongoose.connection.once('open',()=>{
    console.log('Connected to mongoDB')
    app.listen(PORT,()=>{
    console.log(`server running on potr ${PORT}`);
})
})
mongoose.connection.on('error',err=>console.log(err))