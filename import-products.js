// import-products-safe.js
import mongoose from "mongoose";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";
import { productModel } from "./server/models/products.models.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const JSON_PATH = "./productos_mongoose.json";

async function main() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 120000,
    });
    console.log("🔌 Conectado a MongoDB Atlas");

    const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf-8"));
    console.log(`📦 Leídos ${data.length} productos desde JSON`);

    console.log("⏳ Insertando productos de a uno con delay...");

    for (let i = 0; i < data.length; i++) {
      try {
        const doc = await productModel.create(data[i]);
        console.log(`✅ Insertado ${doc.codigo} (${i + 1}/${data.length})`);
      } catch (err) {
        console.error(`⚠️ Error insertando ${data[i].codigo}: ${err.message}`);
      }
      // Delay para no saturar Free Tier
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    const count = await productModel.countDocuments();
    console.log(`📊 Total productos en la colección: ${count}`);

    await mongoose.disconnect();
    console.log("🔌 Desconectado de MongoDB");
    process.exit(0);

  } catch (err) {
    console.error("❌ Error importando productos:", err);
    process.exit(1);
  }
}

main();
