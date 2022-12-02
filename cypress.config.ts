import { defineConfig } from "cypress";
const { verifyDownloadTasks } = require('cy-verify-downloads'); //Verify download import
//Exel
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");

export default defineConfig({
  e2e: {
    baseUrl: "https://en.wikipedia.org",
    setupNodeEvents(on, config) {
      on('task', verifyDownloadTasks); //Verify download import
      on("task", {
        parseXlsx({filePath}) {
          return new Promise((resolve, reject) =>{
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject (e);
            }
          });
        },
      });
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    env:{
      demoVar: "Hello",
      demoQA: "https://demoqa.com",
      angular: "https://globalsqa.com",
      theInternetApp: "https://the-internet.herokuapp.com",
      asGames: "http://games.dev.htecoins.com",
    },
    experimentalSessionAndOrigin: true,
  },
  pageLoadTimeout: 60000,
  viewportHeight: 1000,
  viewportWidth: 1400,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    // Configure retry attempts for `cypress run`
   
    runMode: 2,
    // Configure retry attempts for `cypress open`
    
    openMode: 0,
  },
  video: true,
  screenshotOnRunFailure: true,
  //defaultCommandTimeout: 16000,
});
