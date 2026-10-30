import  express, { json }  from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDb } from "./db/index.js";
import { router } from "./routers/todo.js";

dotenv.config(
  {path:".env"}
)

const port = process.env.PORT || "4000";
const app = express();

app.use(
  cors({
     origin:process.env.CLIENT_URL,
     credentials:true
  })
)

app.use(json())

app.use(router)

app.listen(port,()=>{
  connectDb();
  console.log("server is runner",port)
})