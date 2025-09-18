// server/models/products.models.js
import {Schema, model} from "mongoose";

const collection = 'products';

const productSchema = new Schema({
  codigo: {
    type: String,
    required: false, // obligatorio
    unique: false,   // no se puede repetir
    trim: true
  },
  descripcion: {
    type: String,
    required: false,
    trim: true
  },
  categoria: {
    type: String,
    required: false
  },
  datoAdicional: {
    type: String
  },
  precioVentaPublicoSinIVA: {
    type: Number,
    required: false
  },
  precioDistribuidorSinIVA: {
    type: Number,
    required: false
  },
  iva: {
    type: Number,
    default: 0.21 // ejemplo: IVA 21% por defecto
  },
  precioPublico: {
    type: Number,
    required: false
  },
  porcentajeGanancia: {
    type: Number,
    default: 0
  },
  imagen: {
    type: String,
    default: null
  },
  dataSheet: {
    type: String
  }
}, {
  timestamps: true, // agrega createdAt y updatedAt
});

export const productModel = model(collection, productSchema);

