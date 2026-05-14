#!/usr/bin/env node

/**
 * Convert HEIC files to JPEG for web use
 * Usage: node scripts/convert-heic.js <input.heic> [output.jpg]
 */

import fs from 'fs';
import path from 'path';
import heicConvert from 'heic-convert';

async function convertHeic(inputPath, outputPath) {
  if (!fs.existsSync(inputPath)) {
    console.error(`Input file not found: ${inputPath}`);
    process.exit(1);
  }

  const buffer = fs.readFileSync(inputPath);
  const output = await heicConvert({
    buffer,
    format: 'JPEG',
    quality: 0.8
  });

  const outPath = outputPath || inputPath.replace(/\.heic?$/i, '.jpg');
  fs.writeFileSync(outPath, output);
  console.log(`Converted: ${inputPath} -> ${outPath}`);
}

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath) {
  console.log('Usage: node scripts/convert-heic.js <input.heic> [output.jpg]');
  process.exit(1);
}

convertHeic(inputPath, outputPath).catch(console.error);