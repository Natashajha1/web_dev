/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer"
import qr from "qr-image"
import fs from "fs"

const questions = [
    {
      type: 'input',
      name: 'url',
      message: "Enter url",
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Do you confirm?',
    },
  ];

  inquirer.prompt(questions).then(answers => {
    console.log("Entered url is",answers.url);
    if (answers.confirm) {

        const qrPng = qr.image(answers.url);
        qrPng.pipe(fs.createWriteStream('qrcode.png'));
        
        console.log('QR code generated and saved to qrcode.png');
    } else {
      console.log('You have not confirmed.');
    }
  });


