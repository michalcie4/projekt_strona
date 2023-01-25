import * as docx from 'docx'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express')

const port= 3000

const app= express()
app.use(express.static('C:/Users/michalcie/Desktop/Projekt strona/public'));
app.set('view engine','html')
app.engine('html',require('hbs').__express)
app.get('/',(request,response)=>{
    response.render('Test.html')
})

app.listen(port)
function generate(){
    var nazwa_pliku = document.getElementById("nazwa").value;
    var tytul = document.getElementById("naglowek").value;
    var wykonawca = document.getElementById("wykonawca").value;
    const doc = new docx.Document
    ({
      sections: [{
        properties: { titlePage: true},			
        children: [
          new docx.Paragraph(
            {
            alignment: docx.AlignmentType.CENTER,
             children: [                  				                 
                new docx.TextRun({               
                    text: tytul,                
                    bold: true,                
                    allCaps: true,                
                    size:56,                              
                }),                                          
            ],
           }),
          new docx.Paragraph(
            {
                alignment: docx.AlignmentType.CENTER,
                children: [
                    new docx.TextRun({
                        text:"Wykonał:\t"+wykonawca,
                        bold: true,
                        allCaps: true,
                        size:48,				
                    }),
                ],
            }),								 
        ],							
      }]
    });    
    docx.Packer.toBlob(doc).then(blob => {
      console.log(blob);
      saveAs(blob, nazwa_pliku);
    });
  }