const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const QRCode = require("qrcode");
// const Jimp = require("jimp");
// const QrCodeReader = require("qrcode-reader");

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

async function generateQRCode(text) {
  const fileName = `qrcode_${Date.now()}.png`;
  const filePath = path.join(uploadDir, fileName);
  await QRCode.toFile(filePath, text);
  console.log("✅ QR Code saved at:", filePath);
  return filePath;
}

// async function scanQRCode(filePath) {
//   const image = await Jimp.read(filePath);
//   const qr = new QrCodeReader();
//   return new Promise((resolve, reject) => {
//     qr.callback = (err, value) => {
//       if (err) return reject(err);
//       resolve(value ? value.result : null);
//     };
//     qr.decode(image.bitmap);
//   });
// }

async function main() {
  // Take input
  const { text } = await inquirer.prompt([
    { type: "input", name: "text", message: "Enter text/URL for QR Code:" }
  ]);

  // Generate QR
  const filePath = await generateQRCode(text);
    console.log("👍 Done. QR saved in uploads folder.");

  // // Ask if scan
  // const { scanNow } = await inquirer.prompt([
  //   { type: "confirm", name: "scanNow", message: "Do you want to scan it now?", default: true }
  // ]);

  // if (scanNow) {
  //   const decoded = await scanQRCode(filePath);
  //   console.log("📥 Decoded text:", decoded);
  // } else {
  //   console.log("👍 Done. QR saved in uploads folder.");
  // }
}

main();
