const fs=require("fs");
fs.writeFile("message.txt","yooooo",(err)=> {if(err) throw err;});

fs.readFile('/Users/natjha/Downloads/Web_dev/Backend/2.2 Native Modules/message.txt', { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});
