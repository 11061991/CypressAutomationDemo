// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
require('dotenv').config();
const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('C:\Users\priyanka.s45\Documents\cypress_automation\node_modules\electron-to-chromium\chromium-versions.js');
const url = require('https://github.com/iamgollum/cypress-example-kitchensink/tree/281-ibm-cloud-pipeline');
const {app, BrowserWindow} = electron;
let win;
function createWindow() {
  const urlArg = process.argv[2];
  win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })}