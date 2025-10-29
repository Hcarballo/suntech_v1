import { Schema, model } from "mongoose";

const clientCollection = 'client';

const clientSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Telefono: { type: String, required: true },
    cardId: {
        type: Schema.Types.ObjectId,
        ref: 'carts',
        default: null
    } 
});

export const clientModel = model(clientCollection, clientSchema);