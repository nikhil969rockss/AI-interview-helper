const pdf = require('pdf-parse')

async function parseResume(buffer) {
    const data = await (new pdf.PDFParse(new Uint8Array(buffer))).getText()
    
    return data.text

}

module.exports = parseResume