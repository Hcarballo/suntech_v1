import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const collection = 'Users';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'cliente'], default: 'cliente' },
}, { timestamps: true });

console.log("pase por la carga del usuario");

// Hash de contraseña antes de guardar
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Método para comparar contraseña
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model(collection, userSchema);
