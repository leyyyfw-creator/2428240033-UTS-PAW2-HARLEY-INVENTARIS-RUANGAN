import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";
const PORT=process.env.PORT||3000;
const URI=process.env.MONGODB_URI;
if(!URI){console.error("MONGODB_URI belum diatur di .env");process.exit(1);}
try { await mongoose.connect(URI); console.log("MongoDB connected"); app.listen(PORT,()=>console.log("Server berjalan di http://localhost:"+PORT)); }
catch(err){console.error("Gagal koneksi MongoDB:",err.message);process.exit(1);}
