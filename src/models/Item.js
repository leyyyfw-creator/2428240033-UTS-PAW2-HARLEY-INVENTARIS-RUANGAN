import mongoose from "mongoose";
const itemSchema = new mongoose.Schema({
  item_name: { type: String, required: [true, "Nama item wajib diisi"], trim: true },
  quantity: { type: Number, required: [true, "Quantity wajib diisi"], min: [0, "Quantity tidak boleh negatif"] },
  room: { type: String, required: [true, "Ruangan wajib diisi"], trim: true },
  condition: { type: String, required: [true, "Kondisi wajib diisi"], enum: ["Baik", "Rusak Ringan", "Rusak Berat"], required: true }
}, { timestamps: true });
export default mongoose.model("Item", itemSchema);
