import express from "express";
import cors from "cors";
import itemRoutes from "./routes/itemRoutes.js";
const app=express();
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>res.json({success:true,message:"API Inventaris Ruangan aktif"}));
app.use("/api/items",itemRoutes);
app.use((req,res)=>res.status(404).json({success:false,message:"Endpoint tidak ditemukan"}));
app.use((err,req,res,next)=>{
 if(err.name==="ValidationError") return res.status(400).json({success:false,message:err.message});
 if(err.name==="CastError") return res.status(400).json({success:false,message:"ID tidak valid"});
 console.error(err);
 res.status(500).json({success:false,message:"Terjadi kesalahan pada server"});
});
export default app;
