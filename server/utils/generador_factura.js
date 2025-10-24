import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generateInvoicePDF = async (order) => {
  const fileName = `factura_${order._id}.pdf`;
  const filePath = path.join(process.cwd(), "server", "invoices", fileName);

  // Crear carpeta si no existe
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  const doc = new PDFDocument({ margin: 50 });

  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  // Encabezado
  doc
    .fontSize(18)
    .text("SUNTECH ENERGÍAS RENOVABLES", { align: "center" })
    .moveDown(0.5);
  doc.fontSize(12).text("Presupuesto / Factura Proforma", { align: "center" });
  doc.moveDown(1);

  // Datos del pedido
  doc.fontSize(10);
  doc.text(`Fecha: ${new Date(order.date).toLocaleDateString()}`);
  doc.text(`Cliente: ${order.user}`);
  doc.text(`N° de pedido: ${order._id}`);
  doc.moveDown(1);

  // Tabla de productos
  doc.fontSize(12).text("Detalle de pedido:", { underline: true }).moveDown(0.5);

  order.items.forEach((item) => {
    doc
      .fontSize(10)
      .text(`${item.codigo} - ${item.nombre} (x${item.quantity})`, { continued: true })
      .text(`  $${(item.precioPublico * item.quantity).toFixed(2)}`, { align: "right" });
  });

  doc.moveDown(1);
  doc.fontSize(12).text(`TOTAL: $${order.total.toFixed(2)}`, { align: "right" });

  doc.moveDown(2);
  doc
    .fontSize(10)
    .text("Gracias por su compra. Nos contactaremos a la brevedad para confirmar su pedido.", {
      align: "center",
    });

  doc.end();

  // Esperar a que termine de escribir
  return new Promise((resolve, reject) => {
    stream.on("finish", () => resolve(filePath));
    stream.on("error", reject);
  });
};
