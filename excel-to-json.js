import * as XLSX from "xlsx/xlsx.mjs";
import fs from "fs";

// Necesario para habilitar funciones de lectura/escritura
XLSX.set_fs(fs);

const EXCEL_PATH = "./Lista de precios WE 0725 v2.xlsx";

const toNumber = (v) => {
  if (v === null || v === undefined || v === "") return null;
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(",", "."));
  return Number.isFinite(n) ? n : null;
};
const toStringOrNull = (v) => (v === undefined || v === null ? null : String(v).trim() || null);

// Leer Excel
const workbook = XLSX.readFile(EXCEL_PATH);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const rows = XLSX.utils.sheet_to_json(sheet, { defval: null, raw: true });

// Mapear a JSON
const productos = rows
  .map((row) => ({
    codigo: toStringOrNull(row["CÓDIGO"]),
    descripcion: toStringOrNull(row["DESCRIPCIÓN"]),
    categoria: toStringOrNull(row["Categoría"]),
    datoAdicional: toStringOrNull(row["DATO ADICIONAL"]),
    precioVentaPublicoSinIVA: toNumber(row["Precio Venta Publico Unitario SIN IVA"]),
    precioDistribuidorSinIVA: toNumber(row["Precio Distribuidor s/IVA x unidad"]),
    iva: toNumber(row["IVA"]),
    precioPublico: toNumber(row["Precio Publico"]),
    porcentajeGanancia: toNumber(row["Porcentaje Ganancia"]),
    imagen: toStringOrNull(row["Imagen"]),
    dataSheet: toStringOrNull(row["Data Sheet"]),
  }))
  .filter((p) => p.codigo && p.descripcion);

fs.writeFileSync("productos_mongoose.json", JSON.stringify(productos, null, 2), "utf-8");
console.log(`✅ Generado productos_mongoose.json con ${productos.length} registros.`);
