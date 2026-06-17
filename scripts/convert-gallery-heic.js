#!/usr/bin/env node

import fs from "fs";
import path from "path";
import heicConvert from "heic-convert";

const galleryDir = path.join(process.cwd(), "public", "images", "gallery");

const conversions = [
  ["IMG_5380.HEIC", "IMG_5380.jpg"],
  ["IMG_3935.HEIC", "IMG_3935.jpg"],
];

async function convertOne(inputName, outputName) {
  const inputPath = path.join(galleryDir, inputName);
  const outputPath = path.join(galleryDir, outputName);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Missing HEIC source: ${inputPath}`);
  }

  const shouldConvert =
    !fs.existsSync(outputPath) || fs.statSync(inputPath).mtimeMs > fs.statSync(outputPath).mtimeMs;

  if (!shouldConvert) {
    console.log(`Already current: ${outputName}`);
    return;
  }

  const inputBuffer = fs.readFileSync(inputPath);
  const outputBuffer = await heicConvert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 0.82,
  });

  fs.writeFileSync(outputPath, outputBuffer);
  console.log(`Converted ${inputName} -> ${outputName}`);
}

for (const [inputName, outputName] of conversions) {
  await convertOne(inputName, outputName);
}
