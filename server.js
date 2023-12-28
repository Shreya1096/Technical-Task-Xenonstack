const app=require("./app")
const connectDatabse = require("./config/database.js")
const cors=require("cors")



process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server due to uncaught exception`)
    process.exit(1)
})
    require("dotenv").config({ path: "config/config.env" });


connectDatabse()
app.use(cors())

  


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.message}`)
    console.log(`shutting down the server due to unhandled promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})