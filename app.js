'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 500; count++) {
  fs.appendFile(fileName, 'あ', 'utf8', () => {});
  fs.appendFile(fileName, 'い', 'utf8', () => {});
  fs.appendFile(fileName, 'う', 'utf8', () => {});
  fs.appendFile(fileName, 'え', 'utf8', () => {});
  fs.appendFile(fileName, 'お', 'utf8', () => {});
  fs.appendFile(fileName, '\n', 'utf8', () => {});
}
const fileNameSync = './testSync.txt';
for (let count = 0; count < 500; count++) {
  fs.appendFileSync(fileNameSync, 'あ', 'utf8');
  fs.appendFileSync(fileNameSync, 'い', 'utf8');
  fs.appendFileSync(fileNameSync, 'う', 'utf8');
  fs.appendFileSync(fileNameSync, 'え', 'utf8');
  fs.appendFileSync(fileNameSync, 'お', 'utf8');
  fs.appendFileSync(fileNameSync, '\n', 'utf8');
}