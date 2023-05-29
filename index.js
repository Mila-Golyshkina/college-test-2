#!/usr/bin/env node

import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const fileName = process.argv[2];
const content = fs.readFileSync(path.join(
  __dirname,
  fileName
), 'utf-8');

// BEGIN
const data = content.split("\r\n").slice(1);
const modifiedData = data.map((element) => {
  const modifiedElement = element.split("|").slice(1, 8).join(", ");
  return modifiedElement;
});
console.log(`количество существ в таблице ${modifiedData.length}`);
// END
