import mongoose from "mongoose";
import { objectConfig } from "../config/index.js";

class Singleton {
    static #instance;
    constructor() {
        mongoose
            .connect(objectConfig.mongo_url)
            .then(() => console.log("✅ MongoDB conectado"))
            .catch((err) => console.error("❌ Error conectando MongoDB:", err));
    }

    static getInstance() {
        if (this.#instance) {
            return this.#instance;
        }
        this.#instance = new Singleton();
        return this.#instance;
    }
}

export default Singleton;