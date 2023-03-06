import express from "express" ;
import {register,getByid} from "../controller/data.js";

const routes=express.Router();

routes.post("/register",register)
// routes.post("/login",login)
routes.get("/getByid",getByid)
// routes.post("")

// routes.post("/register",register)


export default routes;