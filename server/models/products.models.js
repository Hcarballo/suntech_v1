import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  item: { type: String, required: false },
  codigo: { type: String, required: false },
  descripcion: { type: String, required: false },
  foto: { type: String, required: false },
  precio: { type: Number, required: false }
}, { timestamps: true });

export const productmodel = mongoose.model('Product', schema, 'products');