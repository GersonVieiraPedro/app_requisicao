//const XLSX = require('xlsx');
const fs = require('fs')





function AtuzalizarTabela(list) {
    
    const workBook = XLSX.readFile(list.path);
    console.log(workBook)
    XLSX.writeFile(workBook, outputFilename, { bookType: "csv" });
    console.log(list)


}


/*
module.exports = {

    Upload
}

*/