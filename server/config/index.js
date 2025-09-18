import Singleton from '../utils/singleton.js'
import dotenv from 'dotenv';

dotenv.config();

export const objectConfig = {   
    port: process.env.PORT,
    private_key: process.env.PRIVATE_KEY,
    mongo_url: process.env.MONGO_URI,
    jwt_secret: process.env.JWT_SECRET,
    persistence: process.env.PERSISTENCE,
};


export const connectDB = async () => {
    Singleton.getInstance();   
};